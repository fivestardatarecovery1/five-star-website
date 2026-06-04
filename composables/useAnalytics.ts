/**
 * useAnalytics.ts — Composable for firing custom analytics events
 *
 * Usage in any component:
 *   const { trackConversion, trackEvent } = useAnalytics()
 *
 *   // When a form is submitted:
 *   trackConversion('instant-quote', { step: 'contact', device_type: 'desktop' })
 *
 *   // When a form is abandoned:
 *   trackEvent('form_abandon', { form: 'express-dropoff', last_step: 3 })
 *
 *   // When a CTA is clicked:
 *   trackEvent('cta_click', { label: 'Start Recovery', location: 'hero' })
 */
export const useAnalytics = () => {
  const track = (eventType: string, data: Record<string, unknown> = {}) => {
    if (typeof window === 'undefined') return
    const analytics = (window as any).$analytics
    if (analytics?.track) {
      analytics.track(eventType, data)
    }
  }

  return {
    /**
     * Track a form conversion (submitted successfully)
     * @param formName  e.g. 'instant-quote', 'express-dropoff', 'contact', 'mail-in'
     * @param data      any extra fields to attach
     */
    trackConversion: (formName: string, data: Record<string, unknown> = {}) => {
      track('conversion', { form: formName, converted: true, ...data })
    },

    /**
     * Track a form abandonment (user started but didn't submit)
     * @param formName  same as above
     * @param data      e.g. { last_step: 2 }
     */
    trackAbandon: (formName: string, data: Record<string, unknown> = {}) => {
      track('form_abandon', { form: formName, converted: false, ...data })
    },

    /**
     * Track any custom event (CTA click, video play, chat open, etc.)
     */
    trackEvent: track,
  }
}
