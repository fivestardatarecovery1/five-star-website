<script setup lang="ts">
useHead({
  script: [
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
  title: 'Data Recovery Express Drop Off Form - Five Star Data Recovery',
  ogTitle: 'Data Recovery Express Drop Off Form - Five Star Data Recovery',
  description: 'Need Data Recovery and would like to expedite the drop off process? Fill out our express drop off form to get your recovery started.',
  ogDescription: 'Need Data Recovery and would like to expedite the drop off process? Fill out our express drop off form to get your recovery started.',
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
  const digits = form.phone.replace(/\D/g, '').slice(0, 10)
  let formatted = digits
  if (digits.length > 6) formatted = digits.slice(0, 3) + '-' + digits.slice(3, 6) + '-' + digits.slice(6)
  else if (digits.length > 3) formatted = digits.slice(0, 3) + '-' + digits.slice(3)
  form.phone = formatted
  ;(e.target as HTMLInputElement).value = formatted
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
  termsAgreed: false,
})

// ── Schedule availability ──────────────────────────────────────────────────
const ALL_SLOTS = [
  '9:00 AM','9:30 AM','10:00 AM','10:30 AM','11:00 AM','11:30 AM',
  '12:00 PM','12:30 PM','1:00 PM','1:30 PM','2:00 PM','2:30 PM',
  '3:00 PM','3:30 PM','4:00 PM','4:30 PM','5:00 PM','5:30 PM',
]
const availableHours = ref<string[]>([])
const blockedHours   = ref<string[]>([])
const scheduleLoading = ref(false)
const dateBlocked = ref(false)
const dateBlockedMsg = ref('')

watch(() => form.dropOffDate, async (date) => {
  if (!date) { availableHours.value = []; blockedHours.value = []; form.dropOffTime = ''; return }
  scheduleLoading.value = true
  dateBlocked.value = false
  form.dropOffTime = ''
  try {
    const res = await $fetch<any>(`/api/express-availability?date=${date}`)
    if (!res.available && !res.availableHours?.length) {
      dateBlocked.value = true
      dateBlockedMsg.value = res.message || 'Not available this day — please choose another date.'
      availableHours.value = []
      blockedHours.value = ALL_SLOTS
    } else {
      availableHours.value = res.availableHours || []
      blockedHours.value = res.blockedHours || []
      dateBlocked.value = false
    }
  } catch {
    availableHours.value = [...ALL_SLOTS]
    blockedHours.value = []
  } finally {
    scheduleLoading.value = false
  }
})

// ── Mini calendar ──────────────────────────────────────────────────
const CAL_MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']
const today = new Date(); today.setHours(0,0,0,0)
const todayStr = today.toISOString().split('T')[0]

const calYear  = ref(today.getFullYear())
const calMonth = ref(today.getMonth())

const calCells = computed(() => {
  const first = new Date(calYear.value, calMonth.value, 1).getDay()
  const days  = new Date(calYear.value, calMonth.value + 1, 0).getDate()
  const cells: (number | null)[] = []
  for (let i = 0; i < first; i++) cells.push(null)
  for (let d = 1; d <= days; d++) cells.push(d)
  return cells
})

function calDateStr(d: number) {
  return `${calYear.value}-${String(calMonth.value + 1).padStart(2,'0')}-${String(d).padStart(2,'0')}`
}

function calPrev() {
  if (calMonth.value === 0) { calYear.value--; calMonth.value = 11 } else { calMonth.value-- }
}
function calNext() {
  if (calMonth.value === 11) { calYear.value++; calMonth.value = 0 } else { calMonth.value++ }
}
function calSelect(d: number) {
  const ds = calDateStr(d)
  const date = new Date(ds + 'T12:00:00')
  if (date < today) return
  form.dropOffDate = form.dropOffDate === ds ? '' : ds
}

function scrollToForm() {
  if (import.meta.client) {
    const el = document.querySelector('.form-wrap')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
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
    if (!form.todayDate) return err('Please enter today\u2019s date.')
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

async function submitForm() {
  if (!form.termsAgreed) {
    submitError.value = 'Please agree to the terms and conditions.'
    return
  }
  submitting.value = true
  submitError.value = ''
  try {
    await $fetch('/api/submit-dropoff', { method: 'POST', body: form })
    submitted.value = true
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
  // Auto-fill today's date — no need for customer to pick it manually
  if (!form.todayDate) form.todayDate = todayStr
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

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <HeroSection
      title="Data Recovery Express Drop Off Form"
      subtitle="In a rush? Fill out our quick online form ahead of time, then stop by for a fast and easy Express Drop-Off."
      description="No need to wait — just drop off your device and go. We'll handle the rest and follow up with your free diagnostic and recovery options."
      bgImage="/express-drop-off-data-recovery-glendale-ca.jpg"
      :trustBadges="trustBadges"
      :showForm="false"
      :showButtons="false"
    />

    <StatsBar />

    <!-- MULTI-STEP FORM -->
    <section class="form-section">
      <div class="container">
        <div class="form-wrap">

          <!-- Success state -->
          <div v-if="submitted" class="form-success">
            <div class="success-icon">✓</div>
            <h2 class="success-heading">Form Submitted!</h2>
            <p class="success-text">Thank you — we've received your drop-off request. Our team will reach out shortly to confirm your appointment and provide next steps.</p>
            <NuxtLink to="/" class="btn-gold">Back to Home</NuxtLink>
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

            <form class="edo-form" @submit.prevent="submitForm" novalidate>

              <!-- STEP 1: Contact Info -->
              <div v-show="step === 1" class="form-step">
                <h3 class="step-title">Let's start with your contact info</h3>
                <p class="step-desc">We'll use this to follow up with your free diagnosis and recovery options.</p>
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
                    <input type="tel" class="fi" v-model="form.phone" @input="formatPhone" placeholder="555-000-0000" inputmode="numeric" maxlength="12" @focus="onFieldFocus('phone')" @blur="onFieldBlur('phone', form.phone)" />
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
                    <label class="ci"><input type="checkbox" /> The data on my hard drive was deleted ($200.00 Paid upfront and non refundable).</label>
                  </div>
                </div>
              </div>

              <!-- STEP 5: Schedule -->
              <div v-show="step === 5" class="form-step">
                <h3 class="step-title">Almost done — schedule your drop-off</h3>
                <p class="step-desc">Pick a date, then select your preferred drop-off time.</p>

                <div class="schedule-wrap">
                  <!-- Calendar -->
                  <div class="cal-panel">
                    <div class="cal-header">
                      <button type="button" class="cal-nav" @click="calPrev">‹</button>
                      <span class="cal-title">{{ CAL_MONTHS[calMonth] }} {{ calYear }}</span>
                      <button type="button" class="cal-nav" @click="calNext">›</button>
                    </div>
                    <div class="cal-grid">
                      <div v-for="d in ['Su','Mo','Tu','We','Th','Fr','Sa']" :key="d" class="cal-dow">{{ d }}</div>
                      <template v-for="(cell, i) in calCells" :key="i">
                        <div v-if="cell === null" />
                        <button
                          v-else
                          type="button"
                          class="cal-day"
                          :class="{
                            'cal-past':     new Date(calDateStr(cell) + 'T12:00:00') < today,
                            'cal-selected': form.dropOffDate === calDateStr(cell),
                            'cal-today':    calDateStr(cell) === todayStr,
                          }"
                          :disabled="new Date(calDateStr(cell) + 'T12:00:00') < today"
                          @click="calSelect(cell)"
                        >{{ cell }}</button>
                      </template>
                    </div>
                    <p v-if="form.dropOffDate" class="cal-selected-label">
                      ✓ {{ new Date(form.dropOffDate + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) }}
                    </p>
                    <p v-if="dateBlocked" class="cal-blocked-msg">⚠ {{ dateBlockedMsg }}</p>
                  </div>

                  <!-- Time slots -->
                  <div class="slots-panel">
                    <p class="slots-label">
                      <template v-if="!form.dropOffDate">Select a date to see times</template>
                      <template v-else-if="scheduleLoading">Checking availability…</template>
                      <template v-else-if="dateBlocked">No availability on this date</template>
                      <template v-else>Select a drop-off time <span class="req">*</span></template>
                    </p>
                    <div v-if="form.dropOffDate && !scheduleLoading" class="slots-grid">
                      <button
                        v-for="slot in ALL_SLOTS" :key="slot"
                        type="button"
                        class="slot-btn"
                        :class="{
                          'slot-available': availableHours.includes(slot) && !dateBlocked,
                          'slot-selected':  form.dropOffTime === slot,
                          'slot-blocked':   blockedHours.includes(slot) || dateBlocked,
                        }"
                        :disabled="blockedHours.includes(slot) || dateBlocked"
                        @click="form.dropOffTime = (form.dropOffTime === slot ? '' : slot)"
                      >
                        {{ slot }}
                        <span v-if="blockedHours.includes(slot) || dateBlocked" class="slot-unavail-badge">Unavailable</span>
                      </button>
                    </div>
                    <p v-if="form.dropOffTime" class="slot-selected-label">✓ {{ form.dropOffTime }} selected</p>
                  </div>
                </div>

                <div class="fg" style="margin-top:1.25rem;">
                  <label class="fl">Today's Date <span class="req">*</span></label>
                  <div class="date-field-wrap">
                    <input type="date" class="fi date-fi" v-model="form.todayDate" />
                    <button type="button" class="today-pill" @click="form.todayDate = todayStr">📅 Today</button>
                  </div>
                  <p v-if="form.todayDate" class="date-confirm">✓ {{ new Date(form.todayDate + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }) }}</p>
                </div>
                <div class="fg">
                  <label class="ci terms-line"><input type="checkbox" v-model="form.termsAgreed" />
                    Yes, I agree with the <a href="https://www.fivestardatarecovery.com/terms-and-conditions/" target="_blank" class="terms-link">terms and conditions.</a>
                  </label>
                </div>
              </div>

              <!-- Step error -->
              <p v-if="stepError" class="step-error">⚠ {{ stepError }}</p>

              <!-- Navigation -->
              <div class="form-nav">
                <button v-if="step > 1" type="button" class="btn-back" @click="prevStep">← Back</button>
                <div style="flex:1"></div>
                <span class="step-count">Step {{ step }} of {{ totalSteps }}</span>
                <button v-if="step < totalSteps" type="button" class="btn-next" @click="nextStep">Continue →</button>
                <button v-if="step === totalSteps" type="submit" class="btn-next" :disabled="submitting">{{ submitting ? 'Sending...' : 'Submit Form' }}</button>
              </div>

            </form>
          </template>
        </div>
      </div>
    </section>

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
.form-section { background: #f4f7fc; padding: 72px 0 80px; }
.form-wrap {
  max-width: 780px;
  margin: 0 auto;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 8px 40px rgba(0,0,0,0.08);
  overflow: hidden;
}

/* STEPPER */
.stepper {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 36px 40px 28px;
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
.edo-form { padding: 40px 40px 32px; display: flex; flex-direction: column; gap: 0; }
.form-step { display: flex; flex-direction: column; gap: 22px; }
.step-title { font-size: 1.35rem; font-weight: 900; color: #1a1a2e; margin: 0 0 4px; }
.step-desc { font-size: 0.93rem; color: #6b7280; margin: 0 0 8px; line-height: 1.6; }
.form-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
.fg { display: flex; flex-direction: column; gap: 6px; }
.fl { font-size: 0.75rem; font-weight: 700; color: #374151; text-transform: uppercase; letter-spacing: 0.06em; }
.req { color: #ef4444; }
.fi {
  border: 1.5px solid #d1d9e6;
  border-radius: 8px;
  padding: 11px 14px;
  font-size: 0.95rem;
  color: #1a1a2e;
  background: #fff;
  font-family: inherit;
  transition: border-color 0.2s, box-shadow 0.2s;
  width: 100%;
}
.fi:focus { outline: none; border-color: #F5C842; box-shadow: 0 0 0 3px rgba(245,200,66,0.15); }
.fi:disabled { background: #f4f7fc; color: #6b7280; }
.fi-textarea { min-height: 110px; resize: vertical; }
.date-field-wrap { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }
.date-fi { flex: 1; min-width: 160px; }
.today-pill {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 9px 16px; border-radius: 999px;
  background: #FEF9E7; border: 1.5px solid #F5C842;
  color: #92400e; font-size: 0.85rem; font-weight: 700;
  cursor: pointer; white-space: nowrap; transition: background 0.15s, transform 0.1s;
  flex-shrink: 0;
}
.today-pill:hover { background: #FDE68A; transform: scale(1.03); }
.today-pill:active { transform: scale(0.97); }
.date-confirm { font-size: 0.85rem; color: #15803d; font-weight: 600; margin: 4px 0 0; }
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
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid #e8edf4;
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
.form-success { padding: 72px 40px; text-align: center; }
.success-icon { width: 64px; height: 64px; border-radius: 50%; background: #22c55e; color: #fff; font-size: 1.8rem; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; }
.success-heading { font-size: 1.6rem; font-weight: 900; color: #1a1a2e; margin-bottom: 12px; }
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

/* ── Schedule picker ─────────────────────────────── */
.schedule-wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 4px; }

/* Calendar */
.cal-panel { background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 14px; padding: 16px; }
.cal-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
.cal-nav { background: none; border: 1px solid #e2e8f0; border-radius: 8px; width: 32px; height: 32px; font-size: 1.2rem; cursor: pointer; color: #374151; display: flex; align-items: center; justify-content: center; transition: background 0.15s; }
.cal-nav:hover { background: #F5C842; border-color: #F5C842; color: #1a1a2e; }
.cal-title { font-size: 0.92rem; font-weight: 800; color: #1a1a2e; }
.cal-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 3px; }
.cal-dow { text-align: center; font-size: 0.68rem; font-weight: 700; color: #9ca3af; padding: 4px 0; text-transform: uppercase; }
.cal-day { aspect-ratio: 1; width: 100%; border: none; border-radius: 8px; font-size: 0.8rem; font-weight: 600; cursor: pointer; background: #fff; color: #374151; transition: all 0.12s; }
.cal-day:hover:not(.cal-past):not(.cal-selected) { background: #fef9e7; color: #1a1a2e; }
.cal-day.cal-today { border: 1.5px solid #F5C842; color: #b45309; }
.cal-day.cal-selected { background: #F5C842; color: #1a1a2e; font-weight: 900; }
.cal-day.cal-past { color: #d1d5db; cursor: not-allowed; background: transparent; }
.cal-selected-label { margin-top: 10px; font-size: 0.8rem; font-weight: 700; color: #16a34a; text-align: center; }
.cal-blocked-msg { margin-top: 8px; font-size: 0.8rem; color: #ef4444; text-align: center; }

/* Time slots */
.slots-panel { display: flex; flex-direction: column; gap: 10px; }
.slots-label { font-size: 0.75rem; font-weight: 700; color: #374151; text-transform: uppercase; letter-spacing: 0.06em; }
.slots-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 7px; }
.slot-btn { padding: 8px 4px; border-radius: 9px; border: 1.5px solid #e2e8f0; background: #fff; font-size: 0.78rem; font-weight: 600; color: #374151; cursor: pointer; transition: all 0.12s; position: relative; display: flex; flex-direction: column; align-items: center; gap: 2px; }
.slot-btn.slot-available:hover { border-color: #F5C842; background: #fef9e7; color: #1a1a2e; }
.slot-btn.slot-selected { background: #F5C842; border-color: #F5C842; color: #1a1a2e; font-weight: 900; }
.slot-btn.slot-blocked { background: #f9fafb; color: #c0c9d4; border-color: #edf0f3; cursor: not-allowed; }
.slot-unavail-badge { font-size: 0.6rem; font-weight: 700; color: #d1d5db; text-transform: uppercase; letter-spacing: 0.04em; }
.slot-selected-label { font-size: 0.82rem; font-weight: 700; color: #16a34a; }

/* MOBILE */
@media (max-width: 768px) {
  .schedule-wrap { grid-template-columns: 1fr; }
  .slots-grid { grid-template-columns: repeat(3, 1fr); }
}

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
