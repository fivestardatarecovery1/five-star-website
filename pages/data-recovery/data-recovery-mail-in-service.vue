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
            "@type": "Service",
            "name": "Mail-In Data Recovery Service",
            "url": "https://www.fivestardatarecovery.com/data-recovery/data-recovery-mail-in-service/",
            "provider": { "@id": "https://www.fivestardatarecovery.com/#fivestardatarecovery" },
            "areaServed": { "@type": "Country", "name": "United States" },
            "description": "Five Star Data Recovery offers free nationwide mail-in data recovery service with prepaid round-trip shipping. No upfront cost for most cases."
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "What is the Mail-In Data Recovery Form?", "acceptedAnswer": { "@type": "Answer", "text": "The Mail-In Data Recovery Form allows customers to start their data recovery case remotely by shipping their device directly to us. Filling out this form ensures your device is properly logged into our system and processed without delays upon arrival." } },
              { "@type": "Question", "name": "How do I send in my device for mail-in data recovery?", "acceptedAnswer": { "@type": "Answer", "text": "Simply complete the Mail-In Recovery Form, and we'll send you a prepaid shipping label for your convenience. Once you receive it, securely package your device, include the completed form inside the box, and drop it off at your nearest shipping location. Our preferred carriers are FedEx and USPS." } },
              { "@type": "Question", "name": "What devices can I send in for data recovery?", "acceptedAnswer": { "@type": "Answer", "text": "We accept hard drives, SSDs, iPhones, USB flash drives, RAID arrays, SD cards, and other common storage media. If you're unsure whether we can recover your specific device, feel free to contact us first for a free consultation." } },
              { "@type": "Question", "name": "Do I need to pay anything upfront when mailing in a device?", "acceptedAnswer": { "@type": "Answer", "text": "Most standard data recovery cases require no upfront payment. However, certain services like iPhone component-level recovery or deleted file recovery may require a refundable deposit. Details will be provided during your initial phone consultation." } },
              { "@type": "Question", "name": "How long does the mail-in recovery process take?", "acceptedAnswer": { "@type": "Answer", "text": "Once we receive your device, you'll get a same-day diagnostic report (by midnight). Standard recoveries take 3–5 business days, depending on the issue. For urgent cases, we offer Expedited and Expedited Plus Services with top priority handling." } },
              { "@type": "Question", "name": "Is shipping covered by your company?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! We cover all shipping costs for our mail-in data recovery service. Once you complete the Mail-In Recovery Form, we'll provide a prepaid shipping label so you can securely send your device to us at no charge. We also cover the return shipping of your recovered data." } },
              { "@type": "Question", "name": "Is my data safe during the mail-in process?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We use strict protocols to secure and track every device we receive. Once the recovery is complete, your data is transferred to a secure return drive and shipped back safely. We never access, share, or store your data beyond the recovery process." } },
              { "@type": "Question", "name": "How do I know when you've received my package?", "acceptedAnswer": { "@type": "Answer", "text": "We'll notify you by phone or email as soon as your device arrives and is logged into our system. Diagnostics begin right away, and you'll receive your evaluation report the same day before midnight." } },
              { "@type": "Question", "name": "Can I track the progress of my recovery case?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Once your device is in our system, our team provides regular updates through our ticketing system. You can also reach out to us for a status update." } },
              { "@type": "Question", "name": "Where can I find the Mail-In Recovery Form?", "acceptedAnswer": { "@type": "Answer", "text": "You can access and complete the form directly on our Mail-In Form page. Make sure to print a copy and include it in your package for fast intake and identification." } }
            ]
          }
        ]
      })
    }
  ]
})

useSeoMeta({
  title: 'Data Recovery Mail-in Services - Five Star Data Recovery',
  ogTitle: 'Data Recovery Mail-in Services - Five Star Data Recovery',
  description: 'Not local and need Data Recovery? Simply fill out our mail-in form, ship your storage device to us, and get your data back in no time.',
  ogDescription: 'Not local and need Data Recovery? Simply fill out our mail-in form, ship your storage device to us, and get your data back in no time.',
})

const trustBadges = [
  { icon: 'clock', text: 'Available 24/7/365' },
  { icon: 'check', text: 'No Data = No Charge' },
  { icon: 'shield', text: '10+ Years in Business' },
  { icon: 'star', text: 'Free Nationwide Shipping' },
]

// Multi-step form
const todayStr = new Date().toLocaleDateString('en-CA', { timeZone: 'America/Los_Angeles' })
const step = ref(1)
const totalSteps = 5
const stepTitles = ['Contact Info', 'Drive Details', 'Recovery Details', 'Service Options', 'Shipping & Submit']

// Form abandonment & funnel tracking
const { onFieldFocus, onFieldBlur, onStepComplete, onStepBack, onFormSubmitted } = useFormTracking('mail-in', stepTitles)

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
const labelBase64 = ref('')
const caseRef = ref('')
const serviceLabel = ref('')
const labelError = ref('')
const packingSlipBase64 = ref('')

const form = reactive({
  firstName: '', lastName: '', email: '', phone: '',
  manufacturer: '', driveType: '', driveFormat: '', driveSize: '',
  issue: '', dataTypes: [] as string[], recoveryAttempted: '', additionalInfo: '',
  conditionalRates: [] as string[], expeditedService: '', transferDrive: '',
  streetAddress: '', city: '', state: '', zip: '', country: 'United States of America (USA)',
  shippingCarrier: 'FedEx', date: '', termsAgreed: false,
})

function scrollToForm() {
  if (!import.meta.client) return
  const el = document.querySelector('.form-wrap')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    // Lock page scroll on mobile after a short delay (let scroll animation finish)
    setTimeout(() => lockBodyScroll(), 500)
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
    if (!form.driveType) return err('Please select a drive type.')
    if (!form.driveFormat) return err('Please select a drive format.')
    if (!form.driveSize.trim()) return err('Please enter the drive size.')
    if (!form.issue) return err('Please select the issue with your drive.')
  }
  if (step.value === 3) {
    if (!form.dataTypes.length) return err('Please select at least one data type to recover.')
    if (!form.recoveryAttempted) return err('Please indicate if recovery has been attempted before.')
  }
  if (step.value === 4) {
    if (!form.expeditedService) return err('Please select a service level.')
    if (!form.transferDrive) return err('Please select a transfer drive option.')
  }
  return true
}

function err(msg: string): false { stepError.value = msg; return false }

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
  if (!form.streetAddress.trim()) { submitError.value = 'Please enter your street address.'; return }
  if (!form.city.trim()) { submitError.value = 'Please enter your city.'; return }
  if (!form.state.trim()) { submitError.value = 'Please enter your state.'; return }
  if (!form.zip.trim()) { submitError.value = 'Please enter your ZIP code.'; return }
  if (!form.date) { submitError.value = 'Please enter today\'s date.'; return }
  form.termsAgreed = true // Implied by clicking Submit
  submitting.value = true
  submitError.value = ''
  try {
    const rawRes = await fetch('/api/submit-mailin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form }),
    })
    const res = await rawRes.json()
    console.log('label length:', res.labelBase64?.length, 'error:', res.labelError)
    labelBase64.value = res.labelBase64 || ''
    serviceLabel.value = res.serviceLabel || ''
    labelError.value = res.labelError || ''
    packingSlipBase64.value = res.packingSlipBase64 || ''
    caseRef.value = res.caseRef || ''
    submitted.value = true
    unlockBodyScroll()
    onFormSubmitted()
  } catch (e) {
    submitError.value = 'Something went wrong. Please call us at 818-272-8866.'
  } finally {
    submitting.value = false
  }
}

const processSteps = [
  { num: '1', title: 'Drop off or Mail in Your Drive', text: 'You can visit our Glendale lab for a quick drop-off, or securely mail your device using our prepaid shipping label — whichever is more convenient for you.' },
  { num: '2', title: 'Receive a Free Diagnosis', text: 'Our team will evaluate your device and provide a detailed diagnosis along with an initial quote — completely free of charge and with no obligation to proceed.' },
  { num: '3', title: 'Our Engineers work on Recovering your Data', text: 'We carefully begin the recovery process using advanced tools and cleanroom procedures.' },
  { num: '4', title: 'Review & Approve the Recovered', text: "After recovery is complete, you'll receive a detailed file list to review so you can confirm everything important has been successfully recovered." },
  { num: '5', title: 'Receive your recovered data', text: "Once approved, we'll securely transfer your data to a new drive and return it to you via pickup or insured shipping — ready for immediate use." },
]

const faqs = [
  { q: 'What is the Mail-In Data Recovery Form?', a: "The Mail-In Data Recovery Form allows customers to start their data recovery case remotely by shipping their device directly to us. Filling out this form ensures your device is properly logged into our system and processed without delays upon arrival." },
  { q: 'How do I send in my device for mail-in data recovery?', a: "Simply complete the Mail-In Recovery Form, and we'll send you a prepaid shipping label for your convenience. Once you receive it, securely package your device, include the completed form inside the box, and drop it off at your nearest shipping location. Our preferred carriers are FedEx and USPS." },
  { q: 'What devices can I send in for data recovery?', a: "We accept hard drives, SSDs, iPhones, USB flash drives, RAID arrays, SD cards, and other common storage media. If you're unsure whether we can recover your specific device, feel free to contact us first for a free consultation." },
  { q: 'Do I need to pay anything upfront when mailing in a device?', a: "Most standard data recovery cases require no upfront payment. However, certain services like iPhone component-level recovery or deleted file recovery may require a refundable deposit. Details will be provided during your initial phone consultation." },
  { q: 'How long does the mail-in recovery process take?', a: "Once we receive your device, you'll get a same-day diagnostic report (by midnight). Standard recoveries take 3–5 business days, depending on the issue. For urgent cases, we offer Expedited and Expedited Plus Services with top priority handling." },
  { q: 'Is shipping covered by your company?', a: "Yes! We cover all shipping costs for our mail-in data recovery service. Once you complete the Mail-In Recovery Form, we'll provide a prepaid shipping label so you can securely send your device to us at no charge. We also cover the return shipping of your recovered data." },
  { q: 'Is my data safe during the mail-in process?', a: "Yes. We use strict protocols to secure and track every device we receive. Once the recovery is complete, your data is transferred to a secure return drive and shipped back safely. We never access, share, or store your data beyond the recovery process." },
  { q: "How do I know when you've received my package?", a: "We'll notify you by phone or email as soon as your device arrives and is logged into our system. Diagnostics begin right away, and you'll receive your evaluation report the same day before midnight." },
  { q: 'Can I track the progress of my recovery case?', a: "Absolutely. Once your device is in our system, our team provides regular updates through our ticketing system. You can also reach out to us for a status update." },
  { q: 'Where can I find the Mail-In Recovery Form?', a: "You can access and complete the form directly on our Mail-In Form page. Make sure to print a copy and include it in your package for fast intake and identification." },
]

// Pre-fill from quote tool
// ── Mobile scroll lock ──────────────────────────────────────────────────
const formScrollLocked = ref(false)
let scrollY = 0

function lockBodyScroll() {
  if (!import.meta.client || formScrollLocked.value) return
  if (window.innerWidth > 768) return // desktop only needs natural scroll
  scrollY = window.scrollY
  document.body.style.position = 'fixed'
  document.body.style.top = `-${scrollY}px`
  document.body.style.width = '100%'
  document.body.style.overflow = 'hidden'
  formScrollLocked.value = true
}

function unlockBodyScroll() {
  if (!import.meta.client || !formScrollLocked.value) return
  document.body.style.position = ''
  document.body.style.top = ''
  document.body.style.width = ''
  document.body.style.overflow = ''
  window.scrollTo(0, scrollY)
  formScrollLocked.value = false
}

onUnmounted(() => { unlockBodyScroll() })

onMounted(() => {
  if (!import.meta.client) return
  if (!form.date) form.date = todayStr
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
    prefillActive.value = true
    localStorage.removeItem('fivestar_quote_prefill')
  } catch {}
})

const prefillActive = ref(false)

// ── Address Autocomplete ──────────────────────────────────────────────────
const addrSuggestions = ref<{label:string;street:string;city:string;state:string;zip:string;country:string}[]>([])
const addrLoading = ref(false)
const addrFocused = ref(false)
let addrTimer: ReturnType<typeof setTimeout> | null = null

function onAddressInput(e: Event) {
  const val = (e.target as HTMLInputElement).value
  form.streetAddress = val
  if (addrTimer) clearTimeout(addrTimer)
  if (val.length < 3) { addrSuggestions.value = []; return }
  addrTimer = setTimeout(async () => {
    addrLoading.value = true
    try {
      const res = await fetch(`/api/address-autocomplete?q=${encodeURIComponent(val)}`)
      addrSuggestions.value = await res.json()
    } catch { addrSuggestions.value = [] }
    addrLoading.value = false
  }, 300)
}

function selectAddress(s: typeof addrSuggestions.value[0]) {
  form.streetAddress = s.street || form.streetAddress
  form.city = s.city || form.city
  form.state = s.state || form.state
  form.zip = s.zip || form.zip
  if (s.country) {
    const map: Record<string,string> = { 'United States': 'United States of America (USA)', 'Canada': 'Canada', 'United Kingdom': 'United Kingdom', 'Australia': 'Australia' }
    form.country = map[s.country] || form.country
  }
  addrSuggestions.value = []
  addrFocused.value = false
  // Dismiss keyboard on mobile
  if (import.meta.client) (document.activeElement as HTMLElement)?.blur()
}

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <!-- COMPACT FORM HERO -->
    <!-- HERO — same design as Express Drop-Off -->
    <section class="mi-hero">
      <div class="mi-hero-bg" style="background-image: url('/data-recovery-mail-in-service-los-angeles.jpg')"></div>
      <div class="mi-hero-overlay"></div>
      <div class="container mi-hero-inner">

        <div class="mi-proof-row">
          <span class="mi-stars">★★★★★</span>
          <span class="mi-rating">4.9 · 498 Online Reviews</span>
        </div>
        <h1 class="mi-title">Mail-In Data <span class="mi-gold">Recovery</span></h1>
        <div class="mi-badges-row">
          <span class="mi-bdg">📦 Mail In Your Device — Free Prepaid Label Provided</span>
          <span class="mi-bsep"></span>
          <span class="mi-bdg">🔬 Free Diagnosis — Same Day by Midnight</span>
          <span class="mi-bsep"></span>
          <span class="mi-bdg">🚚 Free Round-Trip Shipping — All 50 States</span>
        </div>

        <div class="form-wrap" :class="{ 'is-submitted': submitted }">

          <!-- Success state -->
          <div v-if="submitted" class="form-success">
            <div class="success-icon">✓</div>
            <h2 class="success-heading">You're all set!</h2>
            <p class="success-text">Your mail-in request is confirmed. Your prepaid <strong>{{ serviceLabel }}</strong> label has been emailed to you and is ready to download below.</p>

            <div v-if="labelBase64" class="label-download-box label-download-box--green">
              <div class="ldb-top">
                <span class="ldb-emoji">📦</span>
                <div class="ldb-text">
                  <strong>Your Prepaid Shipping Label</strong>
                  <span>{{ serviceLabel }} &middot; Print and attach to the outside of your package</span>
                </div>
              </div>
              <a
                :href="'data:application/pdf;base64,' + labelBase64"
                :download="`${form.firstName} ${form.lastName} - ${caseRef} - Five Star Data Recovery - Prepaid Shipping Label.pdf`"
                class="btn-download btn-download--green"
              >⬇ Download Label</a>
            </div>

            <div v-if="packingSlipBase64" class="label-download-box label-download-box--purple">
              <div class="ldb-top">
                <span class="ldb-emoji">📋</span>
                <div class="ldb-text">
                  <strong>Your Packing Slip</strong>
                  <span>Print and place inside your package</span>
                </div>
              </div>
              <a
                :href="'data:text/html;base64,' + packingSlipBase64"
                :download="`${form.firstName} ${form.lastName} - ${caseRef} - Five Star Data Recovery - Packing Slip.html`"
                class="btn-download btn-download--purple"
              >⬇ Download Slip</a>
            </div>

            <div class="success-steps">
              <p class="steps-heading">Packing instructions:</p>
              <ol class="steps-list">
                <li>Wrap your drive in bubble wrap or anti-static bag</li>
                <li>Place in a sturdy box with padding on all sides (no envelopes)</li>
                <li>Print and attach your shipping label to the outside</li>
                <li>Drop off at any FedEx location</li>
              </ol>
            </div>

            <p class="success-note">Questions? Call <a href="tel:8182728866" class="gold-link">818-272-8866</a></p>
            <NuxtLink to="/" class="btn-gold">Back to Home</NuxtLink>
          </div>

          <template v-else>
            <!-- Stepper -->
            <div class="stepper">
              <div v-for="(title, i) in stepTitles" :key="i" class="stepper-item" :class="{ active: step === i + 1, done: step > i + 1 }">
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
                <h3 class="step-title">Let's start with your contact info</h3>
                <p class="step-desc">We'll send your prepaid shipping label to this email address.</p>
                <div class="form-grid-2">
                  <div class="fg"><label class="fl">First Name <span class="req">*</span></label><input type="text" class="fi" v-model="form.firstName" placeholder="John" @focus="onFieldFocus('firstName')" @blur="onFieldBlur('firstName', form.firstName)" /></div>
                  <div class="fg"><label class="fl">Last Name <span class="req">*</span></label><input type="text" class="fi" v-model="form.lastName" placeholder="Smith" @focus="onFieldFocus('lastName')" @blur="onFieldBlur('lastName', form.lastName)" /></div>
                </div>
                <div class="form-grid-2">
                  <div class="fg"><label class="fl">Email Address <span class="req">*</span></label><input type="email" class="fi" v-model="form.email" placeholder="john@example.com" @focus="onFieldFocus('email')" @blur="onFieldBlur('email', form.email)" /></div>
                  <div class="fg"><label class="fl">Phone <span class="req">*</span></label><input type="tel" class="fi" :value="form.phone" @input="formatPhone" placeholder="555-000-0000" inputmode="numeric" maxlength="12" autocomplete="tel" autocorrect="off" @focus="onFieldFocus('phone')" @blur="onFieldBlur('phone', form.phone)" /></div>
                </div>
              </div>

              <!-- STEP 2: Drive Details -->
              <div v-show="step === 2" class="form-step">
                <h3 class="step-title">Tell us about your drive</h3>
                <p class="step-desc">This helps our engineers prepare before your device arrives.</p>
                <div class="form-grid-2">
                  <div class="fg">
                    <label class="fl">Drive Manufacturer <span class="req">*</span></label>
                    <select class="fi" v-model="form.manufacturer" @focus="onFieldFocus('manufacturer')" @blur="onFieldBlur('manufacturer', form.manufacturer)">
                      <option value="">Select manufacturer</option>
                      <option>Western Digital</option><option>Toshiba</option><option>Hitachi</option>
                      <option>Samsung</option><option>Seagate</option><option>Maxtor</option>
                      <option>Fujitsu</option><option>G-Drive</option><option>Lacie</option><option>Other</option>
                    </select>
                  </div>
                  <div class="fg">
                    <label class="fl">Type of Drive <span class="req">*</span></label>
                    <select class="fi" v-model="form.driveType" @focus="onFieldFocus('driveType')" @blur="onFieldBlur('driveType', form.driveType)">
                      <option value="">Select type</option>
                      <option>Laptop Drive</option><option>External Hard Drive</option>
                      <option>Solid State Drive</option><option>Other</option><option>I'm Not Sure</option>
                    </select>
                  </div>
                </div>
                <div class="form-grid-2">
                  <div class="fg">
                    <label class="fl">Drive Format <span class="req">*</span></label>
                    <select class="fi" v-model="form.driveFormat" @focus="onFieldFocus('driveFormat')" @blur="onFieldBlur('driveFormat', form.driveFormat)">
                      <option value="">Select format</option>
                      <option>Macintosh</option><option>Windows</option><option>Mac &amp; Windows</option>
                      <option>Linux</option><option>I'm Not Sure</option>
                    </select>
                  </div>
                  <div class="fg"><label class="fl">Drive Size <span class="req">*</span></label><input type="text" class="fi" v-model="form.driveSize" placeholder="e.g. 1TB, 500GB" @focus="onFieldFocus('driveSize')" @blur="onFieldBlur('driveSize', form.driveSize)" /></div>
                </div>
                <div class="fg">
                  <label class="fl">Issue <span class="req">*</span></label>
                  <select class="fi" v-model="form.issue" @focus="onFieldFocus('issue')" @blur="onFieldBlur('issue', form.issue)">
                    <option value="">Select issue</option>
                    <option>Bad Sectors</option>
                    <option>Deleted Files (Surcharge $200.00 Non Refundable).</option>
                    <option>Power Shortage</option>
                    <option>Dropped Hard Drive</option>
                    <option>Formatted Partition</option>
                    <option>Drive Doesn't Power On</option>
                    <option>Drive Makes Clicking Sounds</option>
                    <option>Drive Makes a Beeping Sound</option>
                    <option>Drive Spins But Not Recognized by the Computer</option>
                    <option>I'm Not Sure</option>
                  </select>
                </div>
              </div>

              <!-- STEP 3: Recovery Details -->
              <div v-show="step === 3" class="form-step">
                <h3 class="step-title">Recovery details</h3>
                <p class="step-desc">Help us understand what happened and what data matters most.</p>
                <div class="fg">
                  <label class="fl">Type of data to recover <span class="req">*</span></label>
                  <div class="check-group">
                    <label class="ci"><input type="checkbox" v-model="form.dataTypes" value="Photos, Documents, Music, Movies, Downloads, Desktop" /> Photos, Documents, Music, Movies, Downloads, Desktop</label>
                    <label class="ci"><input type="checkbox" v-model="form.dataTypes" value="All files on the hard drive (this process may take an extra 24-72 hours to recover)." /> All files on the hard drive (this process may take an extra 24-72 hours to recover).</label>
                    <label class="ci"><input type="checkbox" v-model="form.dataTypes" value="Other, please contact me." /> Other, please contact me.</label>
                  </div>
                </div>
                <div class="fg">
                  <label class="fl">Has recovery been attempted before? <span class="req">*</span></label>
                  <div class="radio-group">
                    <label class="ci"><input type="radio" v-model="form.recoveryAttempted" name="attempted" value="No, this is our first attempt to recover the data." /> No, this is our first attempt to recover the data.</label>
                    <label class="ci"><input type="radio" v-model="form.recoveryAttempted" name="attempted" value="Yes, another company attempted and was unsuccessful." /> Yes, another company attempted and was unsuccessful.</label>
                    <label class="ci"><input type="radio" v-model="form.recoveryAttempted" name="attempted" value="Yes, another company attempted and recommended a clean room repair." /> Yes, another company attempted and recommended a clean room repair.</label>
                    <label class="ci"><input type="radio" v-model="form.recoveryAttempted" name="attempted" value="Yes, drive cover has been opened ($200.00 fee Non Refundable)." /> Yes, drive cover has been opened ($200.00 fee Non Refundable).</label>
                    <label class="ci"><input type="radio" v-model="form.recoveryAttempted" name="attempted" value="Other" /> Other</label>
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
                      <input type="radio" v-model="form.expeditedService" name="expedited" value="Standard Service" />
                      <div class="sc-body"><strong>Standard Service</strong><span>Turnaround time is 3–5 business days.</span></div>
                    </label>
                    <label class="service-card">
                      <input type="radio" v-model="form.expeditedService" name="expedited" value="Expedited Service" />
                      <div class="sc-body">
                        <div class="sc-top"><strong>Expedited Service</strong> <span class="sc-badge">$200 upfront</span></div>
                        <span>We start immediately and won't stop until data is recovered. Turnaround 6–24 hours.</span>
                      </div>
                    </label>
                  </div>
                </div>
                <div class="fg">
                  <label class="fl">Transfer Drive <span class="req">*</span></label>
                  <div class="radio-group">
                    <label class="ci"><input type="radio" v-model="form.transferDrive" name="transfer" value="I will provide my own transfer drive." /> I will provide my own transfer drive (please make sure drive is formatted and there is no other data on it).</label>
                    <label class="ci"><input type="radio" v-model="form.transferDrive" name="transfer" value="I will purchase a transfer drive from Five Star Data Recovery." /> I will purchase a transfer drive from Five Star Data Recovery.</label>
                  </div>
                </div>
                <div class="fg">
                  <label class="fl">Conditional Rates <span class="note-inline">(select any that apply)</span></label>
                  <p class="field-note">These fees are rare and typically apply to a very small number of drives. If you are unsure of anything, don't worry — we will inspect the drive and let you know before proceeding.</p>
                  <div class="check-group">
                    <label class="ci"><input type="checkbox" v-model="form.conditionalRates" value="Still inside a computer ($100.00 removal fee may apply)." /> My hard drive is still inside a computer (depending on the type of computer, there may be a $100.00 removal fee).</label>
                    <label class="ci"><input type="checkbox" v-model="form.conditionalRates" value="Encrypted ($200.00 fee if recovery is successful)." /> My hard drive is encrypted ($200.00 fee only if recovery is successful).</label>
                    <label class="ci"><input type="checkbox" v-model="form.conditionalRates" value="Part of a RAID ($300.00 flat rate per drive)." /> My hard drive is part of a RAID (Flat Rate Recovery fee of $300.00 per drive)</label>
                    <label class="ci"><input type="checkbox" v-model="form.conditionalRates" value="Larger than 2TB ($200.00 additional fee if successful)." /> My hard drive is larger than 2TB ($200.00 additional fee if recovery is successful).</label>
                    <label class="ci"><input type="checkbox" v-model="form.conditionalRates" value="Larger than 8TB ($300.00 additional fee if successful)." /> My hard drive is larger than 8TB ($300.00 additional fee if recovery is successful).</label>
                    <label class="ci"><input type="checkbox" v-model="form.conditionalRates" value="USB 3.0 or USB-C Port ($200.00 additional fee if successful)." /> My hard drive has the USB 3.0 or USB-C Port ($200.00 additional fee if recovery is successful).</label>
                    <label class="ci"><input type="checkbox" v-model="form.conditionalRates" value="Deleted data ($200.00 upfront, non-refundable)." /> The data on my hard drive was deleted ($200.00 Paid upfront and non refundable).</label>
                  </div>
                </div>
              </div>

              <!-- STEP 5: Shipping & Submit -->
              <div v-show="step === 5" class="form-step">
                <h3 class="step-title">Shipping address &amp; submit</h3>
                <p class="step-desc">We'll send your free prepaid label to this address. Shipping is on us — both ways.</p>
                <div class="fg" style="position:relative;">
                  <label class="fl">Street Address <span class="req">*</span></label>
                  <input
                    type="text"
                    class="fi"
                    :value="form.streetAddress"
                    placeholder="Start typing your address…"
                    autocomplete="off"
                    @input="onAddressInput"
                    @focus="addrFocused = true"
                    @blur="() => { setTimeout(() => { addrFocused.value = false; addrSuggestions.value = [] }, 180) }"
                  />
                  <div v-if="addrLoading" class="addr-spinner">🔍</div>
                  <ul v-if="addrFocused && addrSuggestions.length" class="addr-dropdown">
                    <li
                      v-for="(s, i) in addrSuggestions"
                      :key="i"
                      class="addr-item"
                      @mousedown.prevent="selectAddress(s)"
                    >
                      <span class="addr-item-icon">📍</span>
                      <span class="addr-item-text">{{ s.label }}</span>
                    </li>
                  </ul>
                </div>
                <div class="form-grid-2">
                  <div class="fg"><label class="fl">City <span class="req">*</span></label><input type="text" class="fi" v-model="form.city" placeholder="Los Angeles" /></div>
                  <div class="fg"><label class="fl">State / Province <span class="req">*</span></label><input type="text" class="fi" v-model="form.state" placeholder="CA" /></div>
                </div>
                <div class="form-grid-2">
                  <div class="fg"><label class="fl">ZIP / Postal Code <span class="req">*</span></label><input type="text" class="fi" v-model="form.zip" placeholder="90001" /></div>
                  <div class="fg">
                    <label class="fl">Country <span class="req">*</span></label>
                    <select class="fi" v-model="form.country">
                      <option>United States of America (USA)</option><option>Canada</option><option>United Kingdom</option>
                      <option>Australia</option><option>Germany</option><option>France</option><option>Spain</option>
                      <option>Italy</option><option>Japan</option><option>Mexico</option><option>Brazil</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div class="fg">
                  <label class="fl">Today's Date <span class="req">*</span></label>
                  <div class="date-field-wrap">
                    <input type="date" class="fi date-fi" v-model="form.date" />
                    <button type="button" class="today-pill" @click="form.date = todayStr">📅 Today</button>
                  </div>
                  <p v-if="form.date" class="date-confirm">✓ {{ new Date(form.date + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }) }}</p>
                </div>
                <div class="fg">

                </div>
              </div>

              <!-- Step error -->
              <p v-if="stepError" class="step-error">⚠ {{ stepError }}</p>

              <!-- Navigation -->
              <div v-if="step === totalSteps" class="form-nav-final">
                <p class="terms-notice">By submitting, you agree to our <a href="https://www.fivestardatarecovery.com/terms-and-conditions/" target="_blank" class="terms-link">terms and conditions.</a></p>
                <div class="final-btns">
                  <button type="button" class="btn-cancel" @click="prevStep">← Go Back</button>
                  <button type="submit" class="btn-submit-agree" :disabled="submitting">{{ submitting ? 'Submitting...' : '✓ Submit &amp; Agree to Terms' }}</button>
                </div>
              </div>
              <div v-else class="form-nav">
                <button v-if="step > 1" type="button" class="btn-back" @click="prevStep">← Back</button>
                <div style="flex:1"></div>
                <span class="step-count">Step {{ step }} of {{ totalSteps }}</span>
                <button type="submit" class="btn-next">Continue →</button>
              </div>
              <p v-if="submitError" class="step-error">{{ submitError }}</p>
              <p class="form-powered"><a href="https://opulex.ai" target="_blank" rel="noopener">Powered by Opulex.ai</a></p>

            </form>
          </template>
        </div><!-- /.form-wrap -->

      </div><!-- /.mi-hero-inner -->
    </section><!-- /.mi-hero -->

    <!-- PROCESS SECTION -->
    <section class="process-section">
      <div class="container">
        <h2 class="process-heading">Data Recovery Process</h2>
        <p class="process-intro">Our data recovery process is built around security, transparency, and peace of mind. From start to finish, we keep you informed with clear updates at every stage. With a commitment to honest service and no hidden fees, we follow through on every promise — ensuring a smooth and stress-free experience.</p>
        <div class="process-timeline">
          <div class="process-line"></div>
          <div class="process-step" v-for="(s, i) in processSteps" :key="i">
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

/* FORM */
/* ═══ HERO — same design as Express Drop-Off ═══ */
.mi-hero { position: relative; overflow: hidden; }
.mi-hero-bg { position: absolute; inset: 0; background-size: cover; background-position: center; pointer-events: none; }
.mi-hero-overlay { position: absolute; inset: 0; background: linear-gradient(to right, rgba(10,12,20,0.97) 0%, rgba(10,12,20,0.93) 55%, rgba(10,12,20,0.80) 100%); pointer-events: none; }
.mi-hero { min-height: 100vh; }
.mi-hero-inner { position: relative; z-index: 1; display: flex; flex-direction: column; gap: 16px; padding-top: 24px; padding-bottom: 60px; }
.mi-proof-row { display: flex; align-items: center; gap: 10px; }
.mi-stars { color: #F5C842; font-size: 17px; letter-spacing: 2px; }
.mi-rating { font-size: 13px; font-weight: 600; color: rgba(255,255,255,0.6); }
.mi-title { font-family: "Montserrat", sans-serif; font-size: clamp(28px, 4vw, 52px); font-weight: 800; color: #fff; line-height: 1.1; max-width: 900px; margin: 0; }
.mi-gold { color: #F5C842; }
.mi-badges-row { display: flex; align-items: center; flex-wrap: wrap; gap: 0; margin-bottom: 8px; }
.mi-bdg { font-size: 14px; font-weight: 600; color: rgba(255,255,255,0.82); padding: 0 20px 0 0; }
.mi-bsep { width: 1px; height: 16px; background: rgba(255,255,255,0.2); margin-right: 20px; flex-shrink: 0; }
/* form is now inside .mi-hero */
.form-wrap { max-width: 100%; width: 100%; margin: 0; background: #fff; border-radius: 16px; box-shadow: 0 20px 64px rgba(0,0,0,0.35); overflow: hidden; max-height: calc(100dvh - 96px); display: flex; flex-direction: column; }
.form-wrap.is-submitted { max-height: none; overflow-y: auto; }
.stepper { position: relative; display: flex; justify-content: space-between; align-items: flex-start; padding: 24px 40px 20px; background: #fff; border-bottom: 1px solid #e8edf4; }
.stepper-track { position: absolute; top: 54px; left: calc(40px + 20px); right: calc(40px + 20px); height: 3px; background: #e8edf4; border-radius: 2px; z-index: 0; }
.stepper-fill { height: 100%; background: #F5C842; border-radius: 2px; transition: width 0.4s ease; }
.stepper-item { display: flex; flex-direction: column; align-items: center; gap: 10px; z-index: 1; flex: 1; }
.stepper-circle { width: 40px; height: 40px; border-radius: 50%; background: #e8edf4; color: #8a9bb8; font-size: 0.95rem; font-weight: 800; display: flex; align-items: center; justify-content: center; transition: background 0.3s, color 0.3s; border: 3px solid #fff; box-shadow: 0 0 0 2px #e8edf4; }
.stepper-item.active .stepper-circle { background: #F5C842; color: #1a1a2e; box-shadow: 0 0 0 2px #F5C842; }
.stepper-item.done .stepper-circle { background: #22c55e; color: #fff; box-shadow: 0 0 0 2px #22c55e; }
.check-mark { font-size: 1rem; }
.stepper-label { font-size: 0.7rem; font-weight: 700; color: #8a9bb8; text-transform: uppercase; letter-spacing: 0.04em; text-align: center; white-space: nowrap; }
.stepper-item.active .stepper-label { color: #1a1a2e; }
.stepper-item.done .stepper-label { color: #22c55e; }
.edo-form { padding: 32px 44px 0; display: flex; flex-direction: column; gap: 0; flex: 1; min-height: 0; overflow: hidden; }
.form-step { display: flex; flex-direction: column; gap: 20px; flex: 1; min-height: 0; overflow-y: auto; -webkit-overflow-scrolling: touch; overscroll-behavior: contain; padding-bottom: 20px; scrollbar-width: thin; }
.step-title { font-size: 1.35rem; font-weight: 900; color: #1a1a2e; margin: 0 0 4px; }
.step-desc { font-size: 0.93rem; color: #6b7280; margin: 0 0 8px; line-height: 1.6; }
.form-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
.fg { display: flex; flex-direction: column; gap: 6px; }
.fl { font-size: 0.75rem; font-weight: 700; color: #374151; text-transform: uppercase; letter-spacing: 0.06em; }
.req { color: #ef4444; }
.fi { border: 1.5px solid #d1d9e6; border-radius: 8px; padding: 11px 14px; font-size: 0.95rem; color: #1a1a2e; background: #fff; font-family: inherit; transition: border-color 0.2s, box-shadow 0.2s; width: 100%; }
.fi:focus { outline: none; border-color: #F5C842; box-shadow: 0 0 0 3px rgba(245,200,66,0.15); }
.fi-textarea { min-height: 110px; resize: vertical; }
.date-field-wrap { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }
.date-fi { flex: 1; min-width: 160px; }
.today-pill { display: inline-flex; align-items: center; gap: 5px; padding: 9px 16px; border-radius: 999px; background: #FEF9E7; border: 1.5px solid #F5C842; color: #92400e; font-size: .85rem; font-weight: 700; cursor: pointer; white-space: nowrap; flex-shrink: 0; transition: background .15s; }
.today-pill:hover { background: #FDE68A; }
.date-confirm { font-size: .85rem; color: #15803d; font-weight: 600; margin: 4px 0 0; }
.check-group, .radio-group { display: flex; flex-direction: column; gap: 10px; margin-top: 4px; }
.ci { display: flex; align-items: flex-start; gap: 10px; font-size: 0.91rem; color: #374151; line-height: 1.55; cursor: pointer; }
.ci input { margin-top: 3px; flex-shrink: 0; accent-color: #F5C842; cursor: pointer; }
.note-inline { font-size: 0.75rem; font-weight: 400; color: #9ca3af; text-transform: none; letter-spacing: 0; margin-left: 4px; }
.field-note { font-size: 0.83rem; color: #6b7280; line-height: 1.6; margin: 0 0 10px; }
.terms-link { color: #F5C842; text-decoration: underline; }
.terms-line { font-size: 0.93rem; margin-top: 4px; }
.service-cards { display: flex; flex-direction: column; gap: 12px; margin-top: 6px; }
.service-card { display: flex; align-items: flex-start; gap: 14px; border: 1.5px solid #e8edf4; border-radius: 10px; padding: 16px 18px; cursor: pointer; transition: border-color 0.2s, box-shadow 0.2s; }
.service-card:has(input:checked) { border-color: #F5C842; box-shadow: 0 0 0 3px rgba(245,200,66,0.12); }
.service-card input { margin-top: 3px; flex-shrink: 0; accent-color: #F5C842; }
.sc-body { display: flex; flex-direction: column; gap: 4px; }
.sc-body strong { font-size: 0.95rem; color: #1a1a2e; }
.sc-body span { font-size: 0.85rem; color: #6b7280; line-height: 1.5; }
.sc-top { display: flex; align-items: center; gap: 10px; }
.sc-badge { background: #F5C842; color: #1a1a2e; font-size: 0.72rem; font-weight: 800; padding: 2px 8px; border-radius: 20px; }
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

.step-error { background: #fef2f2; border: 1px solid #fecaca; color: #dc2626; border-radius: 8px; padding: 12px 16px; font-size: 0.88rem; font-weight: 600; margin-top: 20px; }
.form-nav { display: flex; align-items: center; gap: 12px; padding: 20px 44px 24px; border-top: 1px solid #e8edf4; flex-shrink: 0; background: #fff; }
.step-count { font-size: 0.82rem; color: #9ca3af; font-weight: 600; }
.btn-back { background: none; border: 1.5px solid #d1d9e6; color: #4b5563; padding: 11px 22px; border-radius: 8px; font-size: 0.92rem; font-weight: 700; cursor: pointer; font-family: inherit; transition: border-color 0.2s; }
.btn-back:hover { border-color: #9ca3af; }
.btn-next { background: #F5C842; color: #1a1a1a; border: none; padding: 12px 28px; border-radius: 8px; font-size: 0.95rem; font-weight: 800; cursor: pointer; font-family: inherit; transition: background 0.2s; }
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
.btn-submit-agree { flex: 1; background: #16a34a; color: #fff; border: none; padding: 15px 24px; border-radius: 8px; font-size: 1rem; font-weight: 800; cursor: pointer; font-family: inherit; transition: background 0.2s; }
.btn-submit-agree:hover { background: #15803d; }
.btn-submit-agree:disabled { opacity: 0.6; cursor: not-allowed; }
.btn-next:disabled { opacity: 0.6; cursor: not-allowed; }
.form-success { padding: 56px 40px; text-align: center; }
.success-icon { width: 64px; height: 64px; border-radius: 50%; background: #22c55e; color: #fff; font-size: 1.8rem; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; }
.success-heading { font-size: 1.6rem; font-weight: 900; color: #1a1a2e; margin-bottom: 12px; }
.success-text { font-size: 1rem; color: #6b7280; max-width: 480px; margin: 0 auto 28px; line-height: 1.7; }
.btn-gold { display: inline-block; background: #F5C842; color: #1a1a1a; padding: 13px 32px; border-radius: 8px; font-weight: 800; text-decoration: none; }
.label-download-box { border-radius: 14px; padding: 20px; margin: 16px 0; text-align: left; border: 2px solid transparent; }
.label-download-box--green { background: #f0fdf4; border-color: #22c55e; }
.label-download-box--purple { background: #f5f3ff; border-color: #6366f1; }
.ldb-top { display: flex; align-items: center; gap: 14px; margin-bottom: 14px; }
.ldb-emoji { font-size: 2rem; flex-shrink: 0; line-height: 1; }
.ldb-text { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 3px; }
.ldb-text strong { font-size: 1rem; font-weight: 800; color: #1a1a2e; line-height: 1.3; }
.ldb-text span { font-size: 0.82rem; color: #6b7280; line-height: 1.4; }
.btn-download { display: block; width: 100%; text-align: center; color: #fff; border: none; padding: 13px 20px; border-radius: 10px; font-weight: 800; font-size: 1rem; text-decoration: none; cursor: pointer; box-sizing: border-box; }
.btn-download--green { background: #22c55e; }
.btn-download--green:hover { background: #16a34a; }
.btn-download--purple { background: #6366f1; }
.btn-download--purple:hover { background: #4f46e5; }

/* Address autocomplete */
.addr-spinner { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); font-size: 0.85rem; opacity: 0.5; pointer-events: none; }
.addr-dropdown { position: absolute; top: calc(100% + 2px); left: 0; right: 0; z-index: 999; background: #fff; border: 1.5px solid #d1d5db; border-radius: 10px; box-shadow: 0 8px 24px rgba(0,0,0,0.12); padding: 4px 0; margin: 0; list-style: none; max-height: 240px; overflow-y: auto; }
.addr-item { display: flex; align-items: flex-start; gap: 8px; padding: 10px 14px; cursor: pointer; transition: background 0.15s; }
.addr-item:hover { background: #f1f5f9; }
.addr-item-icon { font-size: 0.9rem; flex-shrink: 0; margin-top: 1px; opacity: 0.6; }
.addr-item-text { font-size: 0.85rem; color: #1a1a2e; line-height: 1.4; }
.success-steps { background: #f4f7fc; border-radius: 10px; padding: 18px 24px; margin: 20px 0; text-align: left; }
.steps-heading { font-size: 0.88rem; font-weight: 700; color: #374151; margin: 0 0 10px; text-transform: uppercase; letter-spacing: 0.05em; }
.steps-list { margin: 0; padding-left: 20px; font-size: 0.9rem; color: #374151; line-height: 1.8; }
.success-note { font-size: 0.9rem; color: #6b7280; margin: 0 0 20px; }
.gold-link { color: #F5C842; font-weight: 700; }

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
  .form-wrap { border-radius: 0; position: sticky; top: 0; max-height: 100dvh; z-index: 10; }
  .stepper { padding: 24px 20px 20px; }
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
