/**
 * useFormTracking
 *
 * Tracks form interaction events for the mail-in and express drop-off forms.
 * Events are sent to /api/track-form which forwards them to a configured webhook.
 *
 * Events fired:
 *  - form_viewed       : page loaded (fires automatically, no interaction needed)
 *  - form_started      : first field interaction
 *  - step_completed    : user advances to the next step
 *  - form_abandoned    : user leaves the page mid-form (beforeunload / visibility)
 *  - form_submitted    : successful form submission
 */

export type FormTrackingEvent =
  | 'form_viewed'
  | 'form_started'
  | 'step_completed'
  | 'form_abandoned'
  | 'form_submitted'

export interface FormTrackingPayload {
  event: FormTrackingEvent
  sessionId: string
  form: 'mail-in' | 'express-drop-off'
  timestamp: string
  step: number
  stepName: string
  lastField: string | null
  fieldsCompleted: string[]
  partialContact: {
    firstName?: string
    lastName?: string
    email?: string
    phone?: string
  }
  referrer: string
  userAgent: string
  utmSource: string | null
  utmMedium: string | null
  utmCampaign: string | null
}

function getUtmParam(key: string): string | null {
  if (!import.meta.client) return null
  return new URLSearchParams(window.location.search).get(key)
}

function generateSessionId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`
}

export function useFormTracking(formName: 'mail-in' | 'express-drop-off', stepTitles: string[]) {
  const sessionId = ref<string>('')
  const started = ref(false)
  const lastField = ref<string | null>(null)
  const fieldsCompleted = ref<string[]>([])
  const currentStep = ref(1)
  const submitted = ref(false)

  // Partial contact captured so far
  const partialContact = reactive<{ firstName?: string; lastName?: string; email?: string; phone?: string }>({})

  function buildPayload(event: FormTrackingEvent): FormTrackingPayload {
    return {
      event,
      sessionId: sessionId.value,
      form: formName,
      timestamp: new Date().toISOString(),
      step: currentStep.value,
      stepName: stepTitles[currentStep.value - 1] ?? `Step ${currentStep.value}`,
      lastField: lastField.value,
      fieldsCompleted: [...fieldsCompleted.value],
      partialContact: { ...partialContact },
      referrer: import.meta.client ? document.referrer : '',
      userAgent: import.meta.client ? navigator.userAgent : '',
      utmSource: getUtmParam('utm_source'),
      utmMedium: getUtmParam('utm_medium'),
      utmCampaign: getUtmParam('utm_campaign'),
    }
  }

  async function sendEvent(event: FormTrackingEvent) {
    if (!import.meta.client) return
    try {
      await fetch('/api/track-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(buildPayload(event)),
        // Use keepalive for abandonment events so they survive page unload
        keepalive: event === 'form_abandoned',
      })
    } catch {
      // Silently fail — tracking must never break the form
    }
  }

  /**
   * Call this on every field @focus event.
   * Pass the field name and optionally the current value (for contact fields).
   */
  function onFieldFocus(fieldName: string) {
    if (!import.meta.client) return
    lastField.value = fieldName

    // Fire form_started on first ever interaction
    if (!started.value) {
      started.value = true
      sendEvent('form_started')
    }
  }

  /**
   * Call this on every field @blur event with the current value.
   * Tracks completion and captures partial contact info.
   */
  function onFieldBlur(fieldName: string, value: string | boolean | string[]) {
    const hasValue = Array.isArray(value)
      ? value.length > 0
      : typeof value === 'boolean'
        ? value
        : String(value ?? '').trim().length > 0

    if (hasValue && !fieldsCompleted.value.includes(fieldName)) {
      fieldsCompleted.value.push(fieldName)
    }

    // Capture partial contact for lead identification
    if (['firstName', 'lastName', 'email', 'phone'].includes(fieldName) && hasValue) {
      (partialContact as Record<string, string>)[fieldName] = String(value)
    }
  }

  /**
   * Call this when the user successfully advances to the next step.
   */
  function onStepComplete(completedStep: number) {
    currentStep.value = completedStep + 1
    sendEvent('step_completed')
  }

  /**
   * Call this when the user goes back a step (just update the counter).
   */
  function onStepBack(newStep: number) {
    currentStep.value = newStep
  }

  /**
   * Call this on successful form submission.
   */
  function onFormSubmitted() {
    submitted.value = true
    sendEvent('form_submitted')
  }

  // ── Abandonment detection ──────────────────────────────────────────────────
  let abandonmentFired = false

  function fireAbandonment() {
    if (!started.value || submitted.value || abandonmentFired) return
    abandonmentFired = true
    sendEvent('form_abandoned')
  }

  onMounted(() => {
    // Wrap in try/catch — tracking must NEVER break the form
    try {
      const stored = sessionStorage.getItem(`fivestar_tracking_${formName}`)
      sessionId.value = stored || generateSessionId()
      sessionStorage.setItem(`fivestar_tracking_${formName}`, sessionId.value)
    } catch {
      sessionId.value = generateSessionId() // fallback if sessionStorage blocked
    }
    try {
      window.addEventListener('beforeunload', fireAbandonment)
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') fireAbandonment()
      })
    } catch {
      // Silently fail — tracking must never break the form
    }
  })

  onUnmounted(() => {
    if (import.meta.client) {
      window.removeEventListener('beforeunload', fireAbandonment)
    }
  })

  return {
    onFieldFocus,
    onFieldBlur,
    onStepComplete,
    onStepBack,
    onFormSubmitted,
    currentStepRef: currentStep,
  }
}
