<script setup lang="ts">
import { useAnalytics } from '~/composables/useAnalytics'
const { trackConversion } = useAnalytics()
useHead({
  script: [
    { src: 'https://web.squarecdn.com/v1/square.js', async: true, key: 'square-sdk' },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "LocalBusiness",
            "@id": "https://www.fivestardatarecovery.com/#fivestardatarecovery",
            "name": "Five Star Data Recovery",
            "telephone": "+1-818-272-8866",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1731 S Brand Blvd.",
              "addressLocality": "Glendale",
              "addressRegion": "CA",
              "postalCode": "91204",
              "addressCountry": "US"
            },
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "498" },
            "priceRange": "$300 - $950"
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "What is the Express Drop-Off Form?", "acceptedAnswer": { "@type": "Answer", "text": "The Express Drop-Off Form is a fast and efficient way to start your data recovery case before you arrive. It helps us gather key information in advance so we can begin processing your device as soon as it's received—minimizing wait times and streamlining the intake process." } },
              { "@type": "Question", "name": "Why should I fill out the drop-off form in advance?", "acceptedAnswer": { "@type": "Answer", "text": "Completing the data recovery drop-off form before your visit speeds up check-in and ensures a smooth handoff. It allows our team to prepare for your device's arrival and start the diagnostic process more efficiently." } },
              { "@type": "Question", "name": "Is this form required for data recovery services?", "acceptedAnswer": { "@type": "Answer", "text": "While not required, using the Express Drop-Off Form is highly recommended. It's designed purely for your convenience, allowing you to skip the wait and complete your drop-off in just a few minutes." } },
              { "@type": "Question", "name": "Can I drop off my device without filling out the form?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, you can walk in and drop off your device during business hours, but filling out the Express Drop-Off Form in advance helps minimize your time at the front desk and gets your device into the queue faster." } },
              { "@type": "Question", "name": "Is there a cost to use the Express Drop-Off service?", "acceptedAnswer": { "@type": "Answer", "text": "No, there is no extra charge for using the Express Drop-Off Form. You only pay once the data recovery is complete and you've approved the results." } },
              { "@type": "Question", "name": "Is the information I submit secure?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. All information collected through the drop-off form is used strictly for your case and kept confidential. We never share your details with third parties." } },
              { "@type": "Question", "name": "Where can I access the Express Drop-Off Form?", "acceptedAnswer": { "@type": "Answer", "text": "You can access and complete the form directly on our Express Drop-Off page. Once submitted, our team will be ready to assist you when you arrive during normal business hours." } }
            ]
          }
        ]
      })
    }
  ]
})

useSeoMeta({
  title: '[DEV] Express Drop Off v2 - Five Star Data Recovery',
  ogTitle: '[DEV] Express Drop Off v2 - Five Star Data Recovery',
  description: 'Development build — not for public use.',
  ogDescription: 'Development build — not for public use.',
  ogImage: 'https://www.fivestardatarecovery.com/express-drop-off-data-recovery-glendale-ca.jpg',
  robots: 'noindex, nofollow',
})

const trustBadges = [
  { icon: 'clock', text: 'Available 24/7/365' },
  { icon: 'check', text: 'No Data = No Charge' },
  { icon: 'shield', text: '10+ Years in Business' },
  { icon: 'star', text: 'Free Nationwide Shipping' },
]

// Multi-step form
const step = ref(1)
const totalSteps = 5
const stepTitles = ['Contact Info', 'Drive Details', 'Recovery Details', 'Service Options', 'Schedule & Submit']

// Form abandonment & funnel tracking
const { onFieldFocus, onFieldBlur, onStepComplete, onStepBack, onFormSubmitted } = useFormTracking('express-drop-off', stepTitles)

function formatPhone(e: Event) {
  const input = e.target as HTMLInputElement
  const digits = input.value.replace(/\D/g, '').slice(0, 10)
  let formatted = digits
  if (digits.length > 6) formatted = digits.slice(0, 3) + '-' + digits.slice(3, 6) + '-' + digits.slice(6)
  else if (digits.length > 3) formatted = digits.slice(0, 3) + '-' + digits.slice(3)
  form.phone = formatted
  input.value = formatted
}

const submitted = ref(false)
const submitting = ref(false)
const submitError = ref('')
const stepError = ref('')

// Form data
const form = reactive({
  firstName: '', lastName: '', email: '', phone: '',
  manufacturer: '', modelNo: '', driveType: '', driveFormat: '', driveSize: '',
  issue: '', dataTypes: [] as string[], recoveryAttempted: '', additionalInfo: '',
  conditionalRates: [] as string[], expeditedService: '', transferDrive: '',
  dropOffDate: '', dropOffTime: '', todayDate: '',
  driveCoverOpened: false,
  deletedFilesFormatted: false,
  paymentCompleted: false,
  paymentId: '',
  termsAgreed: false,
})

// ── Square Payment ──────────────────────────────────────────────────────────
const squareCard = ref<any>(null)
const squareReady = ref(false)
const squareInitError = ref('')
const paymentProcessing = ref(false)

const upfrontFees = computed(() => {
  const fees: { label: string; amount: number }[] = []
  if (form.expeditedService === 'Expedited Service') fees.push({ label: 'Expedited Service', amount: 200 })
  if (form.driveCoverOpened) fees.push({ label: 'Drive Cover Opened (Metal Housing / HDA)', amount: 200 })
  if (form.deletedFilesFormatted) fees.push({ label: 'Deleted Files / Formatted Drive', amount: 200 })
  return fees
})
const totalUpfront = computed(() => upfrontFees.value.reduce((sum, f) => sum + f.amount, 0))
const hasUpfrontFees = computed(() => totalUpfront.value > 0)

// Auto-detect drive cover opened from Step 3 radio
watch(() => form.recoveryAttempted, (val) => {
  form.driveCoverOpened = val.includes('drive cover has been opened')
})

// Reset payment if fees change (user went back and changed selections)
watch(upfrontFees, (newFees, oldFees) => {
  if (JSON.stringify(newFees) !== JSON.stringify(oldFees)) {
    form.paymentCompleted = false
    form.paymentId = ''
    squareReady.value = false
    squareCard.value = null
  }
})

async function initSquare() {
  if (!import.meta.client) return
  if (!hasUpfrontFees.value) return
  squareReady.value = false
  squareInitError.value = ''
  let attempts = 0
  while (!(window as any).Square && attempts < 30) {
    await new Promise(r => setTimeout(r, 200))
    attempts++
  }
  if (!(window as any).Square) {
    squareInitError.value = 'Payment system unavailable. Please refresh or call 818-272-8866.'
    return
  }
  try {
    const payments = (window as any).Square.payments('sq0idp-Vk8QvhmuUkuuFtLm_OAppA', 'DNWSXVRTKAHZ9')
    squareCard.value = await payments.card()
    await squareCard.value.attach('#square-card-container')
    squareReady.value = true
  } catch (e) {
    squareInitError.value = 'Failed to load payment form. Please refresh or call 818-272-8866.'
    console.error('[Square] init error:', e)
  }
}

async function processSquarePayment() {
  if (!squareCard.value || paymentProcessing.value) return
  paymentProcessing.value = true
  stepError.value = ''
  try {
    const result = await squareCard.value.tokenize()
    if (result.status === 'OK') {
      const res = await $fetch<any>('/api/square-payment', {
        method: 'POST',
        body: {
          sourceId: result.token,
          amountCents: totalUpfront.value * 100,
          note: `Five Star Data Recovery — Express Drop-Off | ${form.firstName} ${form.lastName} | ${form.dropOffDate} ${form.dropOffTime}`,
        },
      })
      form.paymentCompleted = true
      form.paymentId = res.payment?.id || ''
    } else {
      const errMsg = result.errors?.[0]?.message || 'Card declined. Please try a different card.'
      stepError.value = `Payment failed: ${errMsg}`
    }
  } catch (e: any) {
    stepError.value = e?.data?.statusMessage || e?.message || 'Payment failed. Please try again or call 818-272-8866.'
  } finally {
    paymentProcessing.value = false
  }
}

// Initialize Square when user reaches Step 5 with upfront fees
watch(step, async (newStep) => {
  if (newStep === 5 && hasUpfrontFees.value) {
    await nextTick()
    if (!squareReady.value && !form.paymentCompleted) await initSquare()
  }
})

// ── Schedule availability ──────────────────────────────────────────────────
const availableHours = ref<string[]>([])
const scheduleLoading = ref(false)
const dateBlocked = ref(false)
const dateBlockedMsg = ref('')

// All 30-min slots Mon–Fri 9am–5:30pm
const ALL_SLOTS = [
  '9:00 AM','9:30 AM','10:00 AM','10:30 AM','11:00 AM','11:30 AM',
  '12:00 PM','12:30 PM','1:00 PM','1:30 PM','2:00 PM','2:30 PM',
  '3:00 PM','3:30 PM','4:00 PM','4:30 PM','5:00 PM','5:30 PM',
]

// Calendar state — set in onMounted to avoid SSR mismatch
const calYear = ref(0)
const calMonth = ref(0)
const calReady = ref(false)
const DOW_LABELS = ['Su','Mo','Tu','We','Th','Fr','Sa']
const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December']

const monthLabel = computed(() => calReady.value ? `${MONTH_NAMES[calMonth.value]} ${calYear.value}` : '')
const calendarOffset = computed(() => {
  if (!calReady.value) return 0
  return new Date(calYear.value, calMonth.value, 1).getDay()
})
const calendarDays = computed(() => {
  if (!calReady.value) return []
  const today = new Date(); today.setHours(0,0,0,0)
  const daysInMonth = new Date(calYear.value, calMonth.value + 1, 0).getDate()
  return Array.from({ length: daysInMonth }, (_, i) => {
    const d = i + 1
    const date = new Date(calYear.value, calMonth.value, d)
    return {
      num: d,
      date: `${calYear.value}-${String(calMonth.value+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`,
      isPast: date < today,
      isWeekend: date.getDay() === 0 || date.getDay() === 6,
      isToday: date.getTime() === today.getTime(),
    }
  })
})
const formattedSelectedDate = computed(() => {
  if (!form.dropOffDate) return ''
  const [y,m,d] = form.dropOffDate.split('-').map(Number)
  return new Date(y, m-1, d).toLocaleDateString('en-US', { weekday:'long', month:'long', day:'numeric' })
})

function prevMonth() {
  if (calMonth.value === 0) { calMonth.value = 11; calYear.value-- }
  else calMonth.value--
}
function nextMonth() {
  if (calMonth.value === 11) { calMonth.value = 0; calYear.value++ }
  else calMonth.value++
}
async function selectDate(date: string) {
  form.dropOffDate = date
  form.dropOffTime = ''
  availableHours.value = []
  dateBlocked.value = false
  scheduleLoading.value = true
  try {
    const res = await $fetch<any>(`/api/express-availability?date=${date}`)
    if (!res.available) {
      dateBlocked.value = true
      dateBlockedMsg.value = res.message || 'Not available this day — please choose another date.'
    } else {
      availableHours.value = res.availableHours || ALL_SLOTS
    }
  } catch {
    availableHours.value = [...ALL_SLOTS]
  } finally {
    scheduleLoading.value = false
  }
}
function selectTime(slot: string) {
  if (availableHours.value.includes(slot)) form.dropOffTime = slot
}

function scrollToForm() {
  if (!import.meta.client) return
  if (step.value === 1) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  // Steps 2+: vertically center the form card in the viewport
  const el = document.querySelector('.form-wrap')
  const nav = document.querySelector('nav')
  if (!el) return
  const navH = nav ? nav.offsetHeight : 86
  const viewportH = window.innerHeight
  const formH = el.offsetHeight
  const available = viewportH - navH
  const topInViewport = navH + Math.max(0, (available - formH) / 2)
  const formPageTop = el.getBoundingClientRect().top + window.scrollY
  const scrollTo = formPageTop - topInViewport
  window.scrollTo({ top: Math.max(0, scrollTo), behavior: 'smooth' })
}

function validateStep(): boolean {
  stepError.value = ''
  if (step.value === 1) {
    if (!form.firstName.trim()) return err('Please enter your first name.')
    if (!form.lastName.trim()) return err('Please enter your last name.')
    if (!form.email.trim() || !form.email.includes('@')) return err('Please enter a valid email address.')
    if (!form.phone.trim()) return err('Please enter your phone number.')
  }
  if (step.value === 2) {
    if (!form.manufacturer) return err('Please select a drive manufacturer.')
    if (!form.modelNo.trim()) return err('Please enter the model number.')
    if (!form.driveType) return err('Please select a drive type.')
    if (!form.driveFormat) return err('Please select a drive format.')
    if (!form.driveSize.trim()) return err('Please enter the drive size.')
  }
  if (step.value === 3) {
    if (!form.issue.trim()) return err('Please describe the issue with your drive.')
    if (!form.dataTypes.length) return err('Please select at least one data type to recover.')
    if (!form.recoveryAttempted) return err('Please indicate if recovery has been attempted before.')
  }
  if (step.value === 4) {
    if (!form.expeditedService) return err('Please select a service level.')
    if (!form.transferDrive) return err('Please select a transfer drive option.')
  }
  if (step.value === 5) {
    if (!form.dropOffDate) return err('Please select a preferred drop-off date.')
    if (dateBlocked.value) return err('That date is not available. Please choose another date.')
    if (!form.dropOffTime) return err('Please select a drop-off time.')
    if (hasUpfrontFees.value && !form.paymentCompleted) return err('Please complete the upfront payment before submitting.')
    // todayDate auto-set on submit — no user input needed
  }
  return true
}

function err(msg: string): false {
  stepError.value = msg
  return false
}

function nextStep() {
  if (!validateStep()) return
  if (step.value < totalSteps) {
    onStepComplete(step.value)
    step.value++
    scrollToForm()
  }
}
function prevStep() {
  if (step.value > 1) {
    step.value--
    onStepBack(step.value)
    stepError.value = ''
    scrollToForm()
  }
}

function handleFormSubmit() {
  if (step.value < totalSteps) nextStep()
  else submitForm()
}

async function submitForm() {
  // Run step 5 validation before submitting
  if (!validateStep()) return
  form.termsAgreed = true // Implied by clicking Submit
  submitting.value = true
  submitError.value = ''
  try {
    await $fetch('/api/submit-dropoff', { method: 'POST', body: form })
    submitted.value = true
    trackConversion('express-dropoff', { device_type: form.deviceType || '' })
    onFormSubmitted()
  } catch (e) {
    submitError.value = 'Something went wrong. Please call us at 818-272-8866.'
  } finally {
    submitting.value = false
  }
}

const steps = [
  { num: '1', title: 'Drop off or Mail in Your Drive', text: 'You can visit our Glendale lab for a quick drop-off, or securely mail your device using our prepaid shipping label — whichever is more convenient for you.' },
  { num: '2', title: 'Receive a Free Diagnosis', text: 'Our team will evaluate your device and provide a detailed diagnosis along with an initial quote — completely free of charge and with no obligation to proceed.' },
  { num: '3', title: 'Our Engineers work on Recovering your Data', text: 'We carefully begin the recovery process using advanced tools and cleanroom procedures.' },
  { num: '4', title: 'Review & Approve the Recovered', text: "After recovery is complete, you'll receive a detailed file list to review so you can confirm everything important has been successfully recovered." },
  { num: '5', title: 'Receive your recovered data', text: "Once approved, we'll securely transfer your data to a new drive and return it to you via pickup or insured shipping — ready for immediate use." },
]

const faqs = [
  { q: 'What is the Express Drop-Off Form?', a: "The Express Drop-Off Form is a fast and efficient way to start your data recovery case before you arrive. It helps us gather key information in advance so we can begin processing your device as soon as it's received—minimizing wait times and streamlining the intake process." },
  { q: 'Why should I fill out the drop-off form in advance?', a: "Completing the data recovery drop-off form before your visit speeds up check-in and ensures a smooth handoff. It allows our team to prepare for your device's arrival and start the diagnostic process more efficiently." },
  { q: 'Is this form required for data recovery services?', a: "While not required, using the Express Drop-Off Form is highly recommended. It's designed purely for your convenience, allowing you to skip the wait and complete your drop-off in just a few minutes. A quick and simple way to get your device in without any delays." },
  { q: 'Can I drop off my device without filling out the form?', a: 'Yes, you can walk in and drop off your device during business hours, but filling out the Express Drop-Off Form in advance helps minimize your time at the front desk and gets your device into the queue faster.' },
  { q: 'Is there a cost to use the Express Drop-Off service?', a: "No, there is no extra charge for using the Express Drop-Off Form. You only pay once the data recovery is complete and you've approved the results. For most standard recoveries, we also offer a No Data, No Charge policy — so there's no risk in getting started." },
  { q: 'Is the information I submit secure?', a: 'Yes. All information collected through the drop-off form is used strictly for your case and kept confidential. We never share your details with third parties.' },
  { q: 'Where can I access the Express Drop-Off Form?', a: 'You can access and complete the form directly on our Express Drop-Off page. Once submitted, our team will be ready to assist you when you arrive during normal business hours.' },
]

// Pre-fill from quote tool
onMounted(() => {
  if (!import.meta.client) return
  const now = new Date()
  calYear.value = now.getFullYear()
  calMonth.value = now.getMonth()
  calReady.value = true
  form.todayDate = new Date().toLocaleDateString('en-CA', { timeZone: 'America/Los_Angeles' }) // Auto-set, no user input needed
  const raw = localStorage.getItem('fivestar_quote_prefill')
  if (!raw) return
  try {
    const p = JSON.parse(raw)
    if (p.firstName) form.firstName = p.firstName
    if (p.lastName) form.lastName = p.lastName
    if (p.email) form.email = p.email
    if (p.phone) form.phone = p.phone
    if (p.driveSize) form.driveSize = p.driveSize
    if (p.expeditedService) form.expeditedService = p.expeditedService
    // Show a prefill banner
    prefillActive.value = true
    localStorage.removeItem('fivestar_quote_prefill')
  } catch {}
})

const prefillActive = ref(false)

// Confirmation screen computed helpers
const confirmEmailLink = computed(() => {
  const subject = encodeURIComponent('My Five Star Data Recovery Drop-Off Appointment')
  const body = encodeURIComponent(
    `Five Star Data Recovery — Express Drop-Off Appointment\n\n` +
    `Name: ${form.firstName} ${form.lastName}\n` +
    `Date: ${formattedSelectedDate.value}\n` +
    `Arrival Window: ${form.dropOffTime}\n` +
    `Location: 1731 S Brand Blvd., Glendale, CA 91204\n\n` +
    `No printout needed — just arrive at your scheduled time.\n` +
    `Questions? Call us: 818-272-8866`
  )
  return `mailto:${form.email}?subject=${subject}&body=${body}`
})
const confirmSmsLink = computed(() => {
  const body = encodeURIComponent(
    `Five Star Data Recovery Drop-Off:\n` +
    `${formattedSelectedDate.value} at ${form.dropOffTime}\n` +
    `1731 S Brand Blvd., Glendale CA\n` +
    `No printout needed. Questions: 818-272-8866`
  )
  return `sms:?body=${body}`
})
function printSummary() {
  if (import.meta.client) window.print()
}

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <!-- PAGE HEADER STRIP — minimal, just branding -->
    <!-- HERO — headline + badges + form, all inside the dark section -->
    <section class="edo-hero">
      <div class="edo-hero-bg" style="background-image: url('/express-drop-off-data-recovery-glendale-ca.jpg')"></div>
      <div class="edo-hero-overlay"></div>
      <div class="container edo-hero-inner">

        <!-- Stars + big headline -->
        <div class="edo-proof-row">
          <span class="edo-stars">★★★★★</span>
          <span class="edo-rating">4.9 · 498 Online Reviews</span>
        </div>
        <h1 class="edo-title">Same-Day <span class="edo-gold">Express Drop-Off</span></h1>

        <!-- Badges in one row with separators -->
        <div class="edo-badges-row">
          <span class="edo-bdg">🗓️ Schedule a Drop-Off Time &amp; Date</span>
          <span class="edo-bsep"></span>
          <span class="edo-bdg">🏛️ Drop Off at Our Lab in Glendale</span>
          <span class="edo-bsep"></span>
          <span class="edo-bdg">💡 Receive a Diagnosis Same Day by Midnight</span>
        </div>

        <!-- Form card — inside the hero -->
        <div class="form-wrap" :class="{ 'is-submitted': submitted }">

          <!-- Success / Confirmation screen -->
          <div v-if="submitted" class="confirm-wrap">

            <div class="confirm-header">
              <div class="confirm-check">✓</div>
              <h2 class="confirm-heading">You're All Set! 🎉</h2>
              <p class="confirm-intro">Your drop-off appointment is confirmed. Just show up at your scheduled time — no printout needed. We'll have everything ready for you.</p>
            </div>

            <!-- Appointment Summary Card -->
            <div class="confirm-card">
              <div class="confirm-row">
                <span class="confirm-lbl">Name</span>
                <span class="confirm-val">{{ form.firstName }} {{ form.lastName }}</span>
              </div>
              <div class="confirm-row">
                <span class="confirm-lbl">Email</span>
                <span class="confirm-val">{{ form.email }}</span>
              </div>
              <div class="confirm-row">
                <span class="confirm-lbl">Phone</span>
                <span class="confirm-val">{{ form.phone }}</span>
              </div>
              <div class="confirm-row confirm-row-highlight">
                <span class="confirm-lbl">Drop-Off Date</span>
                <span class="confirm-val confirm-gold">🗓️ {{ formattedSelectedDate }}</span>
              </div>
              <div class="confirm-row confirm-row-highlight">
                <span class="confirm-lbl">Arrival Window</span>
                <span class="confirm-val confirm-gold">⏰ {{ form.dropOffTime }}</span>
              </div>
              <div class="confirm-row">
                <span class="confirm-lbl">Drop-Off Location</span>
                <span class="confirm-val">1731 S Brand Blvd., Glendale, CA 91204</span>
              </div>
            </div>

            <p class="confirm-waiting">
              📌 <strong>No printout required.</strong> Our team will be ready for your arrival on <strong>{{ formattedSelectedDate }}</strong> at <strong>{{ form.dropOffTime }}</strong>. Just bring your device and we'll take it from there.
            </p>

            <!-- Share / Print Actions -->
            <div class="confirm-actions">
              <a :href="confirmEmailLink" class="confirm-btn confirm-btn-email">✉️ Send Details to My Email</a>
              <a :href="confirmSmsLink" class="confirm-btn confirm-btn-sms">💬 Send via Text</a>
              <button type="button" class="confirm-btn confirm-btn-print" @click="printSummary">🖨️ Print Summary</button>
            </div>

            <p class="confirm-note">
              📌 <strong>No printout required.</strong> Just show up at your scheduled time — our team will have your case ready in the system.
            </p>

            <NuxtLink to="/" class="confirm-home">← Back to Home</NuxtLink>
          </div>

          <template v-else>
            <!-- Step progress -->
            <div class="stepper">
              <div
                v-for="(title, i) in stepTitles"
                :key="i"
                class="stepper-item"
                :class="{ active: step === i + 1, done: step > i + 1 }"
              >
                <div class="stepper-circle">
                  <span v-if="step > i + 1" class="check-mark">✓</span>
                  <span v-else>{{ i + 1 }}</span>
                </div>
                <span class="stepper-label">{{ title }}</span>
              </div>
              <div class="stepper-track">
                <div class="stepper-fill" :style="{ width: ((step - 1) / (totalSteps - 1) * 100) + '%' }"></div>
              </div>
            </div>

            <div v-if="prefillActive" class="prefill-banner">
              ✅ We've pre-filled your info from your instant quote. Just review and submit!
            </div>

            <form class="edo-form" @submit.prevent="handleFormSubmit" novalidate>

              <!-- STEP 1: Contact Info -->
              <div v-show="step === 1" class="form-step">
                <h3 class="step-title">Your Contact Info</h3>
                <div class="form-grid-2">
                  <div class="fg">
                    <label class="fl">First Name <span class="req">*</span></label>
                    <input type="text" class="fi" v-model="form.firstName" placeholder="John" @focus="onFieldFocus('firstName')" @blur="onFieldBlur('firstName', form.firstName)" />
                  </div>
                  <div class="fg">
                    <label class="fl">Last Name <span class="req">*</span></label>
                    <input type="text" class="fi" v-model="form.lastName" placeholder="Smith" @focus="onFieldFocus('lastName')" @blur="onFieldBlur('lastName', form.lastName)" />
                  </div>
                </div>
                <div class="form-grid-2">
                  <div class="fg">
                    <label class="fl">Email Address <span class="req">*</span></label>
                    <input type="email" class="fi" v-model="form.email" placeholder="john@example.com" @focus="onFieldFocus('email')" @blur="onFieldBlur('email', form.email)" />
                  </div>
                  <div class="fg">
                    <label class="fl">Phone <span class="req">*</span></label>
                    <input type="tel" class="fi" :value="form.phone" @input="formatPhone" placeholder="555-000-0000" inputmode="numeric" maxlength="12" autocomplete="tel" autocorrect="off" @focus="onFieldFocus('phone')" @blur="onFieldBlur('phone', form.phone)" />
                  </div>
                </div>
              </div>

              <!-- STEP 2: Drive Details -->
              <div v-show="step === 2" class="form-step">
                <h3 class="step-title">Tell us about your drive</h3>
                <p class="step-desc">This helps our engineers prepare before you arrive.</p>
                <div class="form-grid-2">
                  <div class="fg">
                    <label class="fl">Drive Manufacturer <span class="req">*</span></label>
                    <select class="fi" v-model="form.manufacturer" @focus="onFieldFocus('manufacturer')" @blur="onFieldBlur('manufacturer', form.manufacturer)">
                      <option value="">Select manufacturer</option>
                      <option>Western Digital</option>
                      <option>Toshiba</option>
                      <option>Hitachi</option>
                      <option>Samsung</option>
                      <option>Seagate</option>
                      <option>Maxtor</option>
                      <option>Fujitsu</option>
                      <option>G-Drive</option>
                      <option>Lacie</option>
                      <option>Im not sure</option>
                    </select>
                  </div>
                  <div class="fg">
                    <label class="fl">Model No <span class="req">*</span></label>
                    <input type="text" class="fi" v-model="form.modelNo" placeholder="e.g. WD10EZEX" @focus="onFieldFocus('modelNo')" @blur="onFieldBlur('modelNo', form.modelNo)" />
                  </div>
                </div>
                <div class="form-grid-2">
                  <div class="fg">
                    <label class="fl">Type of Drive <span class="req">*</span></label>
                    <select class="fi" v-model="form.driveType" @focus="onFieldFocus('driveType')" @blur="onFieldBlur('driveType', form.driveType)">
                      <option value="">Select type</option>
                      <option>Laptop Drive</option>
                      <option>External Hard Drive</option>
                      <option>Solid State Drive</option>
                      <option>Other</option>
                      <option>I'm Not Sure</option>
                    </select>
                  </div>
                  <div class="fg">
                    <label class="fl">Drive Format <span class="req">*</span></label>
                    <select class="fi" v-model="form.driveFormat" @focus="onFieldFocus('driveFormat')" @blur="onFieldBlur('driveFormat', form.driveFormat)">
                      <option value="">Select format</option>
                      <option>Macintosh</option>
                      <option>Windows</option>
                      <option>Mac &amp; Windows</option>
                      <option>Linux</option>
                      <option>I'm Not Sure</option>
                    </select>
                  </div>
                </div>
                <div class="form-grid-2">
                  <div class="fg">
                    <label class="fl">Drive Size <span class="req">*</span></label>
                    <input type="text" class="fi" v-model="form.driveSize" placeholder="e.g. 1TB, 500GB" @focus="onFieldFocus('driveSize')" @blur="onFieldBlur('driveSize', form.driveSize)" />
                  </div>
                  <div class="fg">
                    <label class="fl">Drop Off Location <span class="req">*</span></label>
                    <input type="text" class="fi" value="Glendale, CA" disabled />
                  </div>
                </div>
              </div>

              <!-- STEP 3: Recovery Details -->
              <div v-show="step === 3" class="form-step">
                <h3 class="step-title">What happened to your data?</h3>
                <p class="step-desc">The more detail you share, the faster we can diagnose your device.</p>
                <div class="fg">
                  <label class="fl">Describe the Issue <span class="req">*</span></label>
                  <textarea class="fi fi-textarea" v-model="form.issue" placeholder="e.g. Drive is clicking, not recognized, dropped, won't power on..." @focus="onFieldFocus('issue')" @blur="onFieldBlur('issue', form.issue)"></textarea>
                </div>
                <div class="fg">
                  <label class="fl">Type of data to recover <span class="req">*</span></label>
                  <div class="check-group">
                    <label class="ci"><input type="checkbox" v-model="form.dataTypes" value="Photos, Documents, Music, Movies, Downloads, Desktop" /> Photos, Documents, Music, Movies, Downloads, Desktop</label>
                    <label class="ci"><input type="checkbox" v-model="form.dataTypes" value="All files on the hard drive (extra 24-72 hours)." /> All files on the hard drive (this process may take an extra 24-72 hours to recover).</label>
                    <label class="ci"><input type="checkbox" v-model="form.dataTypes" value="Other, please contact me." /> Other, please contact me.</label>
                  </div>
                </div>
                <div class="fg">
                  <label class="fl">Has recovery been attempted before? <span class="req">*</span></label>
                  <div class="radio-group">
                    <label class="ci"><input type="radio" name="attempted" v-model="form.recoveryAttempted" value="No, this is our first attempt." /> No, this is our first attempt to recover the data.</label>
                    <label class="ci"><input type="radio" name="attempted" v-model="form.recoveryAttempted" value="Yes, another company attempted and was unsuccessful." /> Yes, another company attempted and was unsuccessful.</label>
                    <label class="ci"><input type="radio" name="attempted" v-model="form.recoveryAttempted" value="Yes, another company attempted and recommended a clean room repair." /> Yes, another company attempted and recommended a clean room repair.</label>
                    <label class="ci"><input type="radio" name="attempted" v-model="form.recoveryAttempted" value="Yes, drive cover has been opened ($200 fee)." /> Yes, drive cover has been opened ($200.00 fee Non Refundable).</label>
                    <label class="ci"><input type="radio" name="attempted" v-model="form.recoveryAttempted" value="Other" /> Other</label>
                  </div>
                </div>
                <div class="fg">
                  <label class="fl">Additional Information</label>
                  <textarea class="fi fi-textarea" v-model="form.additionalInfo" placeholder="Please provide any additional information about the issue with the drive." @focus="onFieldFocus('additionalInfo')" @blur="onFieldBlur('additionalInfo', form.additionalInfo)"></textarea>
                </div>
              </div>

              <!-- STEP 4: Service Options -->
              <div v-show="step === 4" class="form-step">
                <h3 class="step-title">Service &amp; pricing options</h3>
                <p class="step-desc">These fees are rare — we'll always confirm before charging anything.</p>

                <div class="fg">
                  <label class="fl">Expedited Service <span class="req">*</span></label>
                  <div class="service-cards">
                    <label class="service-card">
                      <input type="radio" name="expedited" v-model="form.expeditedService" value="Standard Service" />
                      <div class="sc-body">
                        <strong>Standard Service</strong>
                        <span>Turnaround time is 3–5 business days.</span>
                      </div>
                    </label>
                    <label class="service-card">
                      <input type="radio" name="expedited" v-model="form.expeditedService" value="Expedited Service" />
                      <div class="sc-body">
                        <div class="sc-top"><strong>Expedited Service</strong> <span class="sc-badge">$200 upfront</span></div>
                        <span>We start immediately and won't stop until data is recovered.</span>
                      </div>
                    </label>
                  </div>
                </div>

                <div class="fg">
                  <label class="fl">Transfer Drive <span class="req">*</span></label>
                  <div class="radio-group">
                    <label class="ci"><input type="radio" name="transfer" v-model="form.transferDrive" value="I will provide my own transfer drive." /> I will provide my own transfer drive (please make sure drive is formatted and there is no other data on it).</label>
                    <label class="ci"><input type="radio" name="transfer" v-model="form.transferDrive" value="I will purchase a transfer drive from Five Star Data Recovery." /> I will purchase a transfer drive from Five Star Data Recovery.</label>
                  </div>
                </div>

                <div class="fg">
                  <label class="fl">Conditional Rates <span class="note-inline">(select any that apply)</span></label>
                  <p class="field-note">These fees are rare and typically apply to a very small number of drives. If you are unsure of anything, don't worry — we will inspect the drive and let you know before proceeding.</p>
                  <div class="check-group">
                    <label class="ci"><input type="checkbox" /> My hard drive is still inside a computer (may be a $200.00 removal fee).</label>
                    <label class="ci"><input type="checkbox" v-model="form.conditionalRates" value="Encrypted ($200 fee if recovery successful)." /> My hard drive is encrypted ($200.00 fee only if recovery is successful).</label>
                    <label class="ci"><input type="checkbox" /> My hard drive is part of a RAID (Flat Rate Recovery fee of $300.00 per drive)</label>
                    <label class="ci"><input type="checkbox" /> My hard drive is larger than 2TB ($200.00 additional fee if recovery is successful).</label>
                    <label class="ci"><input type="checkbox" /> My hard drive is larger than 8TB ($200.00 additional fee if recovery is successful).</label>
                    <label class="ci"><input type="checkbox" /> My hard drive has the USB 3.0 or USB-C Port ($200.00 additional fee if recovery is successful).</label>
                    <label class="ci"><input type="checkbox" v-model="form.deletedFilesFormatted" /> The data on my hard drive was deleted or the drive was formatted ($200.00 paid upfront — nonrefundable).</label>
                  </div>
                </div>
              </div>

              <!-- STEP 5: Schedule — Visual Calendar + Time Slots -->
              <div v-show="step === 5" class="form-step">
                <h3 class="step-title">Schedule your drop-off</h3>
                <p class="step-desc">Select an available date and 30-minute arrival window. Mon–Fri, 9am–5:30pm.</p>

                <!-- CALENDAR + TIME SLOTS SIDE BY SIDE -->
                <div class="sched-layout" v-if="calReady">

                  <!-- LEFT: Calendar -->
                  <div class="cal-wrap">
                    <div class="cal-header">
                      <button type="button" class="cal-nav" @click="prevMonth">&#8249;</button>
                      <span class="cal-month-label">{{ monthLabel }}</span>
                      <button type="button" class="cal-nav" @click="nextMonth">&#8250;</button>
                    </div>
                    <div class="cal-grid">
                      <div class="cal-dow" v-for="d in DOW_LABELS" :key="d">{{ d }}</div>
                      <div class="cal-empty" v-for="_ in calendarOffset" :key="'e'+_"></div>
                      <button
                        v-for="day in calendarDays" :key="day.date"
                        type="button"
                        class="cal-day"
                        :class="{
                          'cal-selected': form.dropOffDate === day.date,
                          'cal-past': day.isPast,
                          'cal-weekend': day.isWeekend,
                          'cal-today': day.isToday,
                        }"
                        :disabled="day.isPast || day.isWeekend"
                        @click="selectDate(day.date)"
                      >{{ day.num }}</button>
                    </div>
                    <!-- Legend -->
                    <div class="cal-legend">
                      <span class="leg-item"><span class="leg-dot leg-avail"></span> Available</span>
                      <span class="leg-item"><span class="leg-dot leg-sel"></span> Selected</span>
                      <span class="leg-item"><span class="leg-dot leg-book"></span> Booked</span>
                    </div>
                  </div>

                  <!-- RIGHT: Time slots -->
                  <div class="slots-panel">
                    <div v-if="!form.dropOffDate" class="slots-empty-state">
                      <span class="slots-empty-icon">🗓️</span>
                      <p class="slots-empty-text">← Select a date to see available times</p>
                    </div>
                    <template v-else>
                      <div class="slots-panel-header">
                        <p class="slots-date-label">{{ formattedSelectedDate }}</p>
                        <span v-if="scheduleLoading" class="slots-loading">Checking availability…</span>
                        <span v-else-if="dateBlocked" class="slots-blocked">⚠ {{ dateBlockedMsg }}</span>
                        <p v-else class="slots-subtitle">30-minute arrival windows</p>
                      </div>
                      <div v-if="!scheduleLoading && !dateBlocked" class="slots-grid">
                        <button
                          v-for="slot in ALL_SLOTS" :key="slot"
                          type="button"
                          class="slot-btn"
                          :class="{
                            'slot-available': availableHours.includes(slot) && form.dropOffTime !== slot,
                            'slot-selected': form.dropOffTime === slot,
                            'slot-booked': !availableHours.includes(slot),
                          }"
                          :disabled="!availableHours.includes(slot)"
                          @click="selectTime(slot)"
                        >{{ slot }}</button>
                      </div>
                      <p v-if="!scheduleLoading && !dateBlocked && availableHours.length === 0" class="slots-none">⚠ No times available. Please choose another day.</p>
                      <p v-if="form.dropOffTime" class="slots-confirmed">✓ {{ form.dropOffTime }} confirmed</p>
                    </template>
                  </div>

                </div>

            </div><!-- /form-step step 5 -->

              <!-- Step error -->
              <p v-if="stepError" class="step-error">⚠ {{ stepError }}</p>

              <!-- PAYMENT GATE — outside scrollable step area, always visible -->
              <div v-if="step === 5 && hasUpfrontFees" class="payment-gate">

                <div class="pgate-header">
                  <span class="pgate-icon">💳</span>
                  <div>
                    <h4 class="pgate-title">Upfront Payment Required</h4>
                    <p class="pgate-desc">The following fees apply to your selected services and must be paid before confirming your drop-off. <strong>All upfront fees are nonrefundable regardless of recovery outcome.</strong></p>
                  </div>
                </div>

                <div class="pgate-breakdown">
                  <div class="pgate-breakdown-header">
                    <span>Service / Fee</span><span>Amount</span>
                  </div>
                  <div v-for="fee in upfrontFees" :key="fee.label" class="pgate-row">
                    <span>{{ fee.label }}</span>
                    <span class="pgate-amt">${{ fee.amount.toFixed(2) }}</span>
                  </div>
                  <div class="pgate-row pgate-total">
                    <span>Total Due Now</span>
                    <span class="pgate-amt-total">${{ totalUpfront.toFixed(2) }}</span>
                  </div>
                  <div class="pgate-row pgate-later">
                    <span>Balance Due at Recovery</span>
                    <span class="pgate-amt-later">Quoted after diagnosis</span>
                  </div>
                </div>

                <div v-if="form.driveCoverOpened" class="pgate-note">
                  ℹ️ <strong>Drive Cover</strong> refers to the metal housing (HDA cover) that seals the drive platters — not the plastic external enclosure or case.
                </div>

                <template v-if="!form.paymentCompleted">
                  <div class="sq-card-wrap">
                    <p class="sq-label">Enter Card Details</p>
                    <div v-if="!squareReady && !squareInitError" class="sq-loading">
                      <span class="sq-spin">⟳</span> Loading secure payment form…
                    </div>
                    <div v-if="squareInitError" class="sq-init-error">⚠ {{ squareInitError }}</div>
                    <div id="square-card-container" class="sq-card-container"></div>
                  </div>
                  <button
                    v-if="squareReady"
                    type="button"
                    class="btn-pay-now"
                    :disabled="paymentProcessing"
                    @click="processSquarePayment"
                  >
                    <span v-if="paymentProcessing">⟳ Processing…</span>
                    <span v-else>🔒 Pay ${{ totalUpfront.toFixed(2) }} Now</span>
                  </button>
                  <p class="sq-secure-note">🔒 Payments are processed securely via Square. We never store your card details.</p>
                </template>

                <div v-if="form.paymentCompleted" class="pgate-paid">
                  ✅ Payment of <strong>${{ totalUpfront.toFixed(2) }}</strong> confirmed! You're all set — click Submit below.
                </div>

              </div>

              <!-- Navigation -->
              <!-- Final step: agreement buttons; other steps: normal nav -->
              <div v-if="step === totalSteps" class="form-nav-final">
                <p class="terms-notice">By submitting, you agree to our <a href="https://www.fivestardatarecovery.com/terms-and-conditions/" target="_blank" class="terms-link">terms and conditions.</a></p>
                <div class="final-btns">
                  <button type="button" class="btn-cancel" @click="prevStep" :disabled="form.paymentCompleted">← Go Back</button>
                  <button type="submit" class="btn-submit-agree" :disabled="submitting || (hasUpfrontFees && !form.paymentCompleted)">{{ submitting ? 'Submitting...' : '✓ Submit &amp; Agree to Terms' }}</button>
                </div>
                <p v-if="hasUpfrontFees && !form.paymentCompleted" class="submit-locked-note">⚠ Complete payment above to enable submission.</p>
                <p v-if="form.paymentCompleted" class="submit-unlocked-note">💳 Payment confirmed — you're ready to submit!</p>
              </div>
              <div v-else class="form-nav">
                <button v-if="step > 1" type="button" class="btn-back" @click="prevStep">← Back</button>
                <div style="flex:1"></div>
                <span class="step-count">Step {{ step }} of {{ totalSteps }}</span>
                <button type="submit" class="btn-next">Continue →</button>
              </div>


            </form>
          </template>
        </div><!-- /.form-wrap -->

      </div>
    </section><!-- /.edo-hero -->

    <!-- PROCESS SECTION -->
    <section class="process-section">
      <div class="container">
        <h2 class="process-heading">Data Recovery Process</h2>
        <p class="process-intro">Our data recovery process is built around security, transparency, and peace of mind. From start to finish, we keep you informed with clear updates at every stage. With a commitment to honest service and no hidden fees, we follow through on every promise — ensuring a smooth and stress-free experience.</p>
        <div class="process-timeline">
          <div class="process-line"></div>
          <div class="process-step" v-for="(s, i) in steps" :key="i">
            <div class="process-num">{{ s.num }}</div>
            <h3 class="process-title">{{ s.title }}</h3>
            <p class="process-body">{{ s.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- VIDEO SECTION -->
    <section class="video-section">
      <div class="container video-inner">
        <div class="video-text">
          <h2 class="video-heading">See Why Thousands Trust Us<br>With Their Important Data</h2>
          <p class="video-desc">Data loss is stressful — but working with us doesn't have to be. Watch how our team handles each recovery with care, professionalism, and precision. From diagnostics to delivery, we offer flat-rate pricing, honest communication, and proven results — all from our secure Glendale lab.</p>
        </div>
        <div class="video-embed">
          <iframe src="https://www.youtube.com/embed/14ACFHJ24hg?start=60" title="Five Star Data Recovery" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
        </div>
      </div>
    </section>

    <!-- FAQ SECTION -->
    <section class="faq-section">
      <div class="container">
        <h2 class="s-heading center" style="margin-bottom:36px;">Frequently Asked Questions</h2>
        <div class="faq-wrap">
          <div v-for="(faq, i) in faqs" :key="i" class="faq-row" :class="{ active: openFaq === i }">
            <button class="faq-trigger" @click="toggleFaq(i)">
              <span>{{ i + 1 }}. {{ faq.q }}</span>
              <span class="faq-toggle">{{ openFaq === i ? '−' : '+' }}</span>
            </button>
            <div v-if="openFaq === i" class="faq-answer">{{ faq.a }}</div>
          </div>
        </div>
      </div>
    </section>

    <FooterBar />
  </div>
</template>

<style scoped>
*, *::before, *::after { box-sizing: border-box; }
.page-content { font-family: 'Inter', sans-serif; color: #1a1a2e; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 28px; }
.s-heading { font-size: clamp(1.5rem, 2.8vw, 2.1rem); font-weight: 900; color: #1a1a2e; line-height: 1.25; }
.s-heading.center { text-align: center; }

/* ── FORM SECTION ── */
/* ── Compact Form Hero ── */
/* ── Page header strip — super compact ── */
/* ═══ HERO — V3 style ═══ */
.edo-hero { position: relative; overflow: hidden; }
.edo-hero-bg { position: absolute; inset: 0; background-size: cover; background-position: center; pointer-events: none; }
.edo-hero-overlay { position: absolute; inset: 0; background: linear-gradient(to right, rgba(10,12,20,0.97) 0%, rgba(10,12,20,0.93) 55%, rgba(10,12,20,0.80) 100%); pointer-events: none; }
.edo-hero-inner { position: relative; z-index: 1; display: flex; flex-direction: column; gap: 16px; padding-top: 24px; padding-bottom: 32px; }
/* Stars + rating */
.edo-proof-row { display: flex; align-items: center; gap: 10px; }
.edo-stars { color: #F5C842; font-size: 17px; letter-spacing: 2px; }
.edo-rating { font-size: 13px; font-weight: 600; color: rgba(255,255,255,0.6); }
/* Big headline — same scale as Start Recovery V3 */
.edo-title { font-family: "Montserrat", sans-serif; font-size: clamp(28px, 4vw, 52px); font-weight: 800; color: #fff; line-height: 1.1; max-width: 900px; }
.edo-gold { color: #F5C842; }
/* Badges row */
.edo-badges-row { display: flex; align-items: center; flex-wrap: wrap; gap: 0; margin-bottom: 8px; }
.edo-bdg { font-size: 14px; font-weight: 600; color: rgba(255,255,255,0.82); padding: 0 20px 0 0; }
.edo-bsep { width: 1px; height: 16px; background: rgba(255,255,255,0.2); margin-right: 20px; flex-shrink: 0; }
/* Keep old classes for backward compat */
.form-hero-title {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(20px, 2.8vw, 32px);
  font-weight: 800;
  color: #fff;
  line-height: 1.2;
  margin: 0;
}
.form-hero-gold { color: #F5C842; }
.form-hero-badges {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0;
}
.form-hero-badge {
  font-size: 13px;
  font-weight: 600;
  color: rgba(255,255,255,0.82);
  padding: 0 20px 0 0;
}
.form-hero-sep {
  width: 1px; height: 14px;
  background: rgba(255,255,255,0.2);
  margin-right: 20px;
  flex-shrink: 0;
}
.form-section { background: #f4f7fc; padding: 12px 0 80px; }
.form-wrap {
  max-width: 100%;
  width: 100%;
  margin: 0;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 20px 64px rgba(0,0,0,0.35);
  overflow: hidden;
  /* When snapped to nav, form gets nearly full viewport height */
  max-height: calc(100vh - 96px);
  display: flex;
  flex-direction: column;
}
/* On success screen: remove height cap so all content + share buttons are visible */
.form-wrap.is-submitted { max-height: none; overflow-y: auto; }

/* STEPPER */
.stepper {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 24px 40px 20px;
  background: #fff;
  border-bottom: 1px solid #e8edf4;
}
.stepper-track {
  position: absolute;
  top: 54px;
  left: calc(40px + 20px);
  right: calc(40px + 20px);
  height: 3px;
  background: #e8edf4;
  border-radius: 2px;
  z-index: 0;
}
.stepper-fill {
  height: 100%;
  background: #F5C842;
  border-radius: 2px;
  transition: width 0.4s ease;
}
.stepper-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  z-index: 1;
  flex: 1;
}
.stepper-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #e8edf4;
  color: #8a9bb8;
  font-size: 0.95rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s, color 0.3s;
  border: 3px solid #fff;
  box-shadow: 0 0 0 2px #e8edf4;
}
.stepper-item.active .stepper-circle {
  background: #F5C842;
  color: #1a1a2e;
  box-shadow: 0 0 0 2px #F5C842;
}
.stepper-item.done .stepper-circle {
  background: #22c55e;
  color: #fff;
  box-shadow: 0 0 0 2px #22c55e;
}
.check-mark { font-size: 1rem; }
.stepper-label {
  font-size: 0.7rem;
  font-weight: 700;
  color: #8a9bb8;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  text-align: center;
  white-space: nowrap;
}
.stepper-item.active .stepper-label { color: #1a1a2e; }
.stepper-item.done .stepper-label { color: #22c55e; }

/* FORM BODY */
.edo-form { padding: 32px 44px 0; display: flex; flex-direction: column; gap: 0; flex: 1; min-height: 0; overflow: hidden; }
.form-step { display: flex; flex-direction: column; gap: 20px; flex: 1; min-height: 0; overflow-y: auto; padding-bottom: 20px; scrollbar-width: thin; }
.step-title { font-size: 1.35rem; font-weight: 900; color: #1a1a2e; margin: 0 0 4px; }
.step-desc { font-size: 0.93rem; color: #6b7280; margin: 0 0 8px; line-height: 1.6; }
.form-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
.fg { display: flex; flex-direction: column; gap: 6px; }
.fl { font-size: 0.75rem; font-weight: 700; color: #374151; text-transform: uppercase; letter-spacing: 0.06em; }
.req { color: #ef4444; }
.fi {
  border: 1.5px solid #d1d9e6;
  border-radius: 10px;
  padding: 14px 16px;
  font-size: 1rem;
  color: #1a1a2e;
  background: #fff;
  font-family: inherit;
  transition: border-color 0.2s, box-shadow 0.2s;
  width: 100%;
}
.fi:focus { outline: none; border-color: #F5C842; box-shadow: 0 0 0 3px rgba(245,200,66,0.15); }
.fi:disabled { background: #f4f7fc; color: #6b7280; }
.fi-textarea { min-height: 110px; resize: vertical; }
/* ── Schedule Layout: side-by-side ── */
.sched-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px; align-items: start; }

/* ── Calendar ── */
.cal-wrap { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 14px; padding: 18px; }
.cal-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
.cal-month-label { font-size: 15px; font-weight: 700; color: #0d1520; }
.cal-nav { background: #fff; border: 1px solid #e2e8f0; border-radius: 8px; width: 30px; height: 30px; font-size: 20px; cursor: pointer; color: #4a5568; display: flex; align-items: center; justify-content: center; transition: background .15s; line-height: 1; }
.cal-nav:hover { background: #f0f4f8; }
.cal-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 3px; }
.cal-dow { font-size: 10px; font-weight: 700; color: #94a3b8; text-align: center; padding: 3px 0 6px; text-transform: uppercase; }
.cal-empty { }
.cal-day { background: #fff; border: 1px solid transparent; border-radius: 7px; padding: 7px 2px; font-size: 13px; font-weight: 600; cursor: pointer; color: #1a2030; text-align: center; transition: all .15s; width: 100%; }
.cal-day:hover:not(:disabled) { background: #fef9e7; border-color: #F5C842; }
.cal-day.cal-today { border-color: #F5C842; color: #92400e; background: #fffbeb; }
.cal-day.cal-selected { background: #F5C842; border-color: #e5b73e; color: #0a0c14; font-weight: 800; }
.cal-day.cal-past, .cal-day.cal-weekend { background: transparent; color: #d1d5db; cursor: not-allowed; }
.cal-legend { display: flex; gap: 12px; margin-top: 14px; padding-top: 12px; border-top: 1px solid #e2e8f0; }
.leg-item { display: flex; align-items: center; gap: 5px; font-size: 11px; color: #64748b; }
.leg-dot { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; }
.leg-avail { background: #86efac; }
.leg-sel { background: #F5C842; }
.leg-book { background: #e2e8f0; }

/* ── Slots Panel ── */
.slots-panel { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 14px; padding: 18px; min-height: 280px; display: flex; flex-direction: column; }
.slots-empty-state { display: flex; flex-direction: column; align-items: center; justify-content: center; flex: 1; gap: 12px; }
.slots-empty-icon { font-size: 36px; opacity: 0.4; }
.slots-empty-text { font-size: 13px; color: #94a3b8; text-align: center; }
.slots-panel-header { margin-bottom: 14px; }
.slots-date-label { font-size: 14px; font-weight: 700; color: #0d1520; margin-bottom: 2px; }
.slots-subtitle { font-size: 11px; color: #94a3b8; }
.slots-loading { font-size: 12px; color: #94a3b8; }
.slots-blocked { font-size: 12px; color: #ef4444; font-weight: 600; }
.slots-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; flex: 1; }
.slot-btn { border-radius: 8px; padding: 9px 6px; font-size: 12px; font-weight: 700; cursor: pointer; border: 1.5px solid; text-align: center; transition: all .15s; width: 100%; }
.slot-available { background: #f0fdf4; border-color: #86efac; color: #166534; }
.slot-available:hover { background: #dcfce7; border-color: #4ade80; }
.slot-selected { background: #F5C842; border-color: #e5b73e; color: #0a0c14; }
.slot-booked { background: #f8fafc; border-color: #e2e8f0; color: #cbd5e1; cursor: not-allowed; }
.slots-none { font-size: 12px; color: #ef4444; font-weight: 600; margin-top: 8px; }
.slots-confirmed { font-size: 13px; color: #16a34a; font-weight: 700; margin-top: 12px; }
@media (max-width: 640px) { .sched-layout { grid-template-columns: 1fr; } }

.date-field-wrap { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }
.date-fi { flex: 1; min-width: 160px; }
.today-pill { display: inline-flex; align-items: center; gap: 5px; padding: 9px 16px; border-radius: 999px; background: #FEF9E7; border: 1.5px solid #F5C842; color: #92400e; font-size: .85rem; font-weight: 700; cursor: pointer; white-space: nowrap; flex-shrink: 0; transition: background .15s; }
.today-pill:hover { background: #FDE68A; }
.date-confirm { font-size: .85rem; color: #15803d; font-weight: 600; margin: 4px 0 0; }
.check-group, .radio-group { display: flex; flex-direction: column; gap: 10px; margin-top: 4px; }
.ci {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.91rem;
  color: #374151;
  line-height: 1.55;
  cursor: pointer;
}
.ci input { margin-top: 3px; flex-shrink: 0; accent-color: #F5C842; cursor: pointer; }
.note-inline { font-size: 0.75rem; font-weight: 400; color: #9ca3af; text-transform: none; letter-spacing: 0; margin-left: 4px; }
.field-note { font-size: 0.83rem; color: #6b7280; line-height: 1.6; margin: 0 0 10px; }
.terms-link { color: #F5C842; text-decoration: underline; }
.terms-line { font-size: 0.93rem; margin-top: 4px; }

/* SERVICE CARDS */
.service-cards { display: flex; flex-direction: column; gap: 12px; margin-top: 6px; }
.service-card {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  border: 1.5px solid #e8edf4;
  border-radius: 10px;
  padding: 16px 18px;
  cursor: pointer;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.service-card:has(input:checked) { border-color: #F5C842; box-shadow: 0 0 0 3px rgba(245,200,66,0.12); }
.service-card input { margin-top: 3px; flex-shrink: 0; accent-color: #F5C842; }
.sc-body { display: flex; flex-direction: column; gap: 4px; }
.sc-body strong { font-size: 0.95rem; color: #1a1a2e; }
.sc-body span { font-size: 0.85rem; color: #6b7280; line-height: 1.5; }
.sc-top { display: flex; align-items: center; gap: 10px; }
.sc-badge { background: #F5C842; color: #1a1a2e; font-size: 0.72rem; font-weight: 800; padding: 2px 8px; border-radius: 20px; }

/* FORM NAV */
.form-nav {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px 44px 24px;
  border-top: 1px solid #e8edf4;
  flex-shrink: 0;
  background: #fff;
}
.step-count { font-size: 0.82rem; color: #9ca3af; font-weight: 600; }
.btn-back {
  background: none;
  border: 1.5px solid #d1d9e6;
  color: #4b5563;
  padding: 11px 22px;
  border-radius: 8px;
  font-size: 0.92rem;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
  transition: border-color 0.2s;
}
.btn-back:hover { border-color: #9ca3af; }
.btn-next {
  background: #F5C842;
  color: #1a1a1a;
  border: none;
  padding: 12px 28px;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 800;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.2s;
}
.btn-next:hover { background: #e0b43a; }
.form-nav-final { padding: 20px 44px 24px; border-top: 1px solid #e8edf4; flex-shrink: 0; background: #fff; }
.terms-notice { font-size: 12px; color: #94a3b8; margin-bottom: 14px; text-align: center; }
.terms-notice .terms-link { color: #64748b; }
.form-powered { text-align: right; font-size: 10px; color: #b0b8cc; margin: 6px 0 0; }
.form-powered a { color: #b0b8cc; text-decoration: none; transition: color 0.2s; }
.form-powered a:hover { color: #F5C842; }
.final-btns { display: flex; gap: 12px; }
.btn-cancel { flex: 0 0 auto; background: #f1f5f9; color: #64748b; border: 1.5px solid #e2e8f0; padding: 14px 22px; border-radius: 8px; font-size: 0.9rem; font-weight: 700; cursor: pointer; font-family: inherit; transition: all 0.2s; }
.btn-cancel:hover { background: #e2e8f0; color: #1a2030; }
.btn-submit-agree { flex: 1; background: #16a34a; color: #fff; border: none; padding: 15px 24px; border-radius: 8px; font-size: 1rem; font-weight: 800; cursor: pointer; font-family: inherit; transition: background 0.2s; letter-spacing: 0.2px; }
.btn-submit-agree:hover { background: #15803d; }
.btn-submit-agree:disabled { opacity: 0.6; cursor: not-allowed; }

/* PREFILL BANNER */
.prefill-banner {
  background: #f0fdf4;
  border: 1.5px solid #22c55e;
  color: #15803d;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 0.88rem;
  font-weight: 600;
  margin-bottom: 4px;
}

/* ── PAYMENT GATE ── */
.payment-gate {
  margin-top: 28px;
  border: 2px solid #F5C842;
  border-radius: 14px;
  overflow: hidden;
  background: #fffbeb;
}
.pgate-header {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #0f1623;
  padding: 18px 22px;
}
.pgate-icon { font-size: 26px; flex-shrink: 0; margin-top: 2px; }
.pgate-title { font-size: 1rem; font-weight: 800; color: #F5C842; margin: 0 0 6px; }
.pgate-desc { font-size: 0.82rem; color: #8a9bb8; line-height: 1.6; margin: 0; }
.pgate-breakdown { padding: 0 22px; margin: 16px 0; }
.pgate-breakdown-header {
  display: flex;
  justify-content: space-between;
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #94a3b8;
  padding-bottom: 8px;
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 4px;
}
.pgate-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px 0;
  border-bottom: 1px solid #f0f0f0;
  font-size: 0.9rem;
  color: #1a2030;
}
.pgate-row:last-child { border-bottom: none; }
.pgate-amt { font-weight: 700; color: #1a2030; }
.pgate-total {
  border-top: 2px solid #F5C842;
  margin-top: 4px;
  padding-top: 12px;
  font-weight: 800;
  font-size: 1rem;
  color: #0f1623;
}
.pgate-amt-total { font-weight: 900; font-size: 1.05rem; color: #0f1623; }
.pgate-later { color: #64748b; font-size: 0.85rem; }
.pgate-amt-later { color: #94a3b8; font-size: 0.82rem; font-style: italic; }
.pgate-note {
  margin: 0 22px 14px;
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 0.82rem;
  color: #1e40af;
  line-height: 1.6;
}
.sq-card-wrap { padding: 0 22px 16px; }
.sq-label { font-size: 0.82rem; font-weight: 700; color: #475569; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.04em; }
.sq-loading { font-size: 0.88rem; color: #94a3b8; padding: 18px 0; }
.sq-spin { display: inline-block; animation: sq-spin 1s linear infinite; }
@keyframes sq-spin { to { transform: rotate(360deg); } }
.sq-init-error { font-size: 0.85rem; color: #dc2626; padding: 10px 0; }
.sq-card-container {
  background: #fff;
  border: 1.5px solid #d1d9e6;
  border-radius: 10px;
  padding: 14px 16px;
  margin-bottom: 14px;
  min-height: 54px;
}
.btn-pay-now {
  width: 100%;
  background: #0f1623;
  color: #F5C842;
  border: none;
  padding: 16px;
  border-radius: 10px;
  font-size: 1.05rem;
  font-weight: 800;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.2s;
  letter-spacing: 0.2px;
}
.btn-pay-now:hover:not(:disabled) { background: #1a2a40; }
.btn-pay-now:disabled { opacity: 0.6; cursor: not-allowed; }
.sq-secure-note { font-size: 0.75rem; color: #94a3b8; text-align: center; margin-top: 8px; }
.pgate-paid {
  margin: 0 22px 20px;
  background: #f0fdf4;
  border: 1.5px solid #22c55e;
  border-radius: 10px;
  padding: 14px 18px;
  font-size: 0.92rem;
  color: #15803d;
  font-weight: 600;
}
.submit-locked-note { font-size: 0.8rem; color: #dc2626; text-align: center; margin-top: 8px; }
.submit-unlocked-note { font-size: 0.82rem; color: #16a34a; text-align: center; margin-top: 8px; font-weight: 600; }
.btn-cancel:disabled { opacity: 0.5; cursor: not-allowed; }

/* STEP ERROR */
.step-error {
  background: #fef2f2;
  border: 1px solid #fecaca;
  color: #dc2626;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 0.88rem;
  font-weight: 600;
  margin-top: 20px;
}

/* SUCCESS */
/* ── Confirmation Screen ── */
.confirm-wrap { padding: 40px 36px; }
.confirm-header { text-align: center; margin-bottom: 28px; }
.confirm-check { width: 68px; height: 68px; border-radius: 50%; background: #22c55e; color: #fff; font-size: 2rem; font-weight: 800; display: flex; align-items: center; justify-content: center; margin: 0 auto 18px; }
.confirm-heading { font-family: 'Montserrat', sans-serif; font-size: 1.5rem; font-weight: 800; color: #0d1520; margin-bottom: 8px; line-height: 1.3; }
.confirm-intro { font-size: 15px; color: #64748b; }
.confirm-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; margin-bottom: 20px; }
.confirm-row { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 13px 20px; border-bottom: 1px solid #e2e8f0; }
.confirm-row:last-child { border-bottom: none; }
.confirm-row-highlight { background: #fffbeb; }
.confirm-lbl { font-size: 12px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px; flex-shrink: 0; }
.confirm-val { font-size: 14px; font-weight: 600; color: #1a2030; text-align: right; }
.confirm-gold { color: #b45309; font-size: 15px; font-weight: 800; }
.confirm-waiting { font-size: 14px; color: #4a5568; line-height: 1.7; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 10px; padding: 14px 18px; margin-bottom: 24px; }
.confirm-actions { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 16px; }
.confirm-btn { display: inline-flex; align-items: center; gap: 7px; padding: 12px 18px; border-radius: 8px; font-size: 13px; font-weight: 700; text-decoration: none; cursor: pointer; border: none; font-family: inherit; transition: all 0.2s; flex: 1; justify-content: center; white-space: nowrap; }
.confirm-btn-email { background: #0d1520; color: #fff; }
.confirm-btn-email:hover { background: #1a2a40; }
.confirm-btn-sms { background: #2563eb; color: #fff; }
.confirm-btn-sms:hover { background: #1d4ed8; }
.confirm-btn-print { background: #f1f5f9; color: #475569; border: 1.5px solid #e2e8f0 !important; }
.confirm-btn-print:hover { background: #e2e8f0; }
.confirm-note { font-size: 12px; color: #64748b; background: #f8fafc; border-radius: 8px; padding: 10px 14px; margin-bottom: 20px; line-height: 1.6; }
.confirm-home { display: inline-block; font-size: 13px; color: #94a3b8; text-decoration: none; }
.confirm-home:hover { color: #475569; }
@media print {
  .form-hero, .stepper, .form-actions, .confirm-actions, .confirm-home, nav, footer { display: none !important; }
  .confirm-wrap { padding: 0; }
  .confirm-card { border: 1px solid #ccc; }
}
.success-text { font-size: 1rem; color: #6b7280; max-width: 440px; margin: 0 auto 28px; line-height: 1.7; }
.btn-gold { display: inline-block; background: #F5C842; color: #1a1a1a; padding: 13px 32px; border-radius: 8px; font-weight: 800; text-decoration: none; }

/* PROCESS */
.process-section { background: #0f1623; padding: 80px 0 90px; }
.process-heading { text-align: center; font-size: clamp(1.8rem, 3vw, 2.4rem); font-weight: 900; color: #fff; margin-bottom: 16px; }
.process-intro { text-align: center; font-size: 1rem; color: #8a9bb8; max-width: 760px; margin: 0 auto 56px; line-height: 1.7; }
.process-timeline { position: relative; display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; }
.process-line { position: absolute; top: 27px; left: calc(10% + 27px); right: calc(10% + 27px); height: 3px; background: linear-gradient(to right, #F5C842, #e0b43a); border-radius: 2px; }
.process-step { flex: 1; display: flex; flex-direction: column; align-items: center; text-align: center; position: relative; z-index: 1; }
.process-num { width: 54px; height: 54px; border-radius: 50%; background: #F5C842; color: #1a1a2e; font-size: 1.3rem; font-weight: 900; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; box-shadow: 0 0 0 4px #0f1623, 0 0 0 7px rgba(245,200,66,0.25); flex-shrink: 0; }
.process-title { font-size: 0.88rem; font-weight: 800; color: #fff; margin: 0 0 10px; line-height: 1.35; }
.process-body { font-size: 0.78rem; color: #8a9bb8; line-height: 1.6; margin: 0; }

/* VIDEO */
.video-section { background: #1a2035; padding: 72px 0; }
.video-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
.video-heading { font-size: clamp(1.4rem, 2.5vw, 2rem); font-weight: 800; color: #fff; line-height: 1.3; margin-bottom: 16px; }
.video-desc { font-size: 0.95rem; color: #8a9bb8; line-height: 1.8; }
.video-embed { border-radius: 12px; overflow: hidden; }
.video-embed iframe { width: 100%; aspect-ratio: 16/9; display: block; }

/* FAQ */
.faq-section { background: #f4f7fc; padding: 80px 0; }
.faq-wrap { max-width: 100%; }
.faq-row { border-bottom: 1px solid #e2e8f0; }
.faq-row:first-child { border-top: 1px solid #e2e8f0; }
.faq-trigger { width: 100%; display: flex; justify-content: space-between; align-items: center; gap: 16px; padding: 20px 0; background: none; border: none; font-family: inherit; font-size: 0.97rem; font-weight: 700; color: #1a1a2e; text-align: left; cursor: pointer; }
.faq-toggle { font-size: 1.4rem; color: #F5C842; flex-shrink: 0; }
.faq-answer { padding: 0 0 20px; font-size: 0.93rem; color: #4a5568; line-height: 1.75; }

/* MOBILE */
@media (max-width: 768px) {
  .form-wrap { border-radius: 0; }
  .stepper { padding: 24px 20px 20px; overflow-x: auto; gap: 4px; }
  .stepper-label { display: none; }
  .stepper-track { left: 30px; right: 30px; top: 44px; }
  .edo-form { padding: 28px 20px 24px; }
  .form-grid-2 { grid-template-columns: 1fr; }
  .process-line { display: none; }
  .process-timeline { flex-direction: column; align-items: flex-start; gap: 28px; }
  .process-step { flex-direction: row; text-align: left; gap: 16px; }
  .process-num { margin-bottom: 0; }
  .video-inner { grid-template-columns: 1fr; }
}
</style>
