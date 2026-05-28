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
            "image": "https://www.fivestardatarecovery.com/wp-content/uploads/logo.png",
            "telephone": "+1-818-272-8866",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1731 S Brand Blvd.",
              "addressLocality": "Glendale",
              "addressRegion": "CA",
              "postalCode": "91204",
              "addressCountry": "US"
            },
            "areaServed": [{ "@type": "Country", "name": "United States" }],
            "url": "https://www.fivestardatarecovery.com/",
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "498" },
            "review": [
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Brian K." },
                "datePublished": "2024-10-05",
                "reviewBody": "Filled out the Express form online and dropped off my drive in under 2 minutes. Great option for busy people!",
                "name": "Super Convenient",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
              }
            ],
            "priceRange": "$300 - $950"
          },
          {
            "@type": "Service",
            "name": "Express Drop-Off Data Recovery Service",
            "url": "https://www.fivestardatarecovery.com/data-recovery/express-drop-off/",
            "provider": { "@id": "https://www.fivestardatarecovery.com/#fivestardatarecovery" },
            "areaServed": [{ "@type": "Country", "name": "United States" }],
            "description": "Five Star Data Recovery's Express Drop-Off Service lets you skip the wait and get your device checked in quickly for data recovery. Convenient for local clients with urgent needs."
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fivestardatarecovery.com/" },
              { "@type": "ListItem", "position": 2, "name": "Express Drop-Off", "item": "https://www.fivestardatarecovery.com/data-recovery/express-drop-off/" }
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "What is the Express Drop-Off Form?", "acceptedAnswer": { "@type": "Answer", "text": "The Express Drop-Off Form is a fast and efficient way to start your data recovery case before you arrive. It helps us gather key information in advance so we can begin processing your device as soon as it\u2019s received\u2014minimizing wait times and streamlining the intake process." } },
              { "@type": "Question", "name": "Why should I fill out the drop-off form in advance?", "acceptedAnswer": { "@type": "Answer", "text": "Completing the data recovery drop-off form before your visit speeds up check-in and ensures a smooth handoff. It allows our team to prepare for your device\u2019s arrival and start the diagnostic process more efficiently." } },
              { "@type": "Question", "name": "Is this form required for data recovery services?", "acceptedAnswer": { "@type": "Answer", "text": "While not required, using the Express Drop-Off Form is highly recommended. It\u2019s designed purely for your convenience, allowing you to skip the wait and complete your drop-off in just a few minutes. A quick and simple way to get your device in without any delays." } },
              { "@type": "Question", "name": "Can I drop off my device without filling out the form?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, you can walk in and drop off your device during business hours, but filling out the Express Drop-Off Form in advance helps minimize your time at the front desk and gets your device into the queue faster." } },
              { "@type": "Question", "name": "Is there a cost to use the Express Drop-Off service?", "acceptedAnswer": { "@type": "Answer", "text": "No, there is no extra charge for using the Express Drop-Off Form. You only pay once the data recovery is complete and you\u2019ve approved the results. For most standard recoveries, we also offer a No Data, No Charge policy \u2014 so there\u2019s no risk in getting started." } },
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
  description: 'Skip the wait! Fill out our Express Drop-Off Form online and drop off your device quickly at our Glendale, CA lab. Fast, easy, no appointment needed.'
})

// Form state
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  driveManufacturer: '',
  modelNo: '',
  driveType: '',
  driveFormat: '',
  driveSize: '',
  issue: '',
  dropOffLocation: 'Glendale, CA',
  dataTypes: [] as string[],
  recoveryAttempted: '',
  additionalInfo: '',
  conditionalRates: [] as string[],
  expeditedService: '',
  transferDrive: '',
  dropOffDate: '',
  dropOffTime: '',
  todayDate: '',
  agreeTerms: false
})

const steps = [
  { num: '1', title: 'Drop off or Mail in Your Drive', text: 'You can visit our Glendale lab for a quick drop-off, or securely mail your device using our prepaid shipping label — whichever is more convenient for you.' },
  { num: '2', title: 'Receive a Free Diagnosis', text: 'Our team will evaluate your device and provide a detailed diagnosis along with an initial quote — completely free of charge and with no obligation to proceed.' },
  { num: '3', title: 'Our Engineers work on Recovering your Data', text: 'We carefully begin the recovery process using advanced tools and cleanroom procedures.' },
  { num: '4', title: 'Review & Approve the Recovered', text: "After recovery is complete, you'll receive a detailed file list to review so you can confirm everything important has been successfully recovered." },
  { num: '5', title: 'Receive your recovered data', text: "Once approved, we'll securely transfer your data to a new drive and return it to you via pickup or insured shipping — ready for immediate use." },
]

const faqs = [
  {
    q: 'What is the Express Drop-Off Form?',
    a: 'The Express Drop-Off Form is a fast and efficient way to start your data recovery case before you arrive. It helps us gather key information in advance so we can begin processing your device as soon as it\'s received—minimizing wait times and streamlining the intake process.'
  },
  {
    q: 'Why should I fill out the drop-off form in advance?',
    a: 'Completing the data recovery drop-off form before your visit speeds up check-in and ensures a smooth handoff. It allows our team to prepare for your device\'s arrival and start the diagnostic process more efficiently.'
  },
  {
    q: 'Is this form required for data recovery services?',
    a: 'While not required, using the Express Drop-Off Form is highly recommended. It\'s designed purely for your convenience, allowing you to skip the wait and complete your drop-off in just a few minutes. A quick and simple way to get your device in without any delays.'
  },
  {
    q: 'Can I drop off my device without filling out the form?',
    a: 'Yes, you can walk in and drop off your device during business hours, but filling out the Express Drop-Off Form in advance helps minimize your time at the front desk and gets your device into the queue faster.'
  },
  {
    q: 'Is there a cost to use the Express Drop-Off service?',
    a: 'No, there is no extra charge for using the Express Drop-Off Form. You only pay once the data recovery is complete and you\'ve approved the results. For most standard recoveries, we also offer a No Data, No Charge policy — so there\'s no risk in getting started.'
  },
  {
    q: 'Is the information I submit secure?',
    a: 'Yes. All information collected through the drop-off form is used strictly for your case and kept confidential. We never share your details with third parties.'
  },
  {
    q: 'Where can I access the Express Drop-Off Form?',
    a: 'You can access and complete the form directly on our Express Drop-Off page. Once submitted, our team will be ready to assist you when you arrive during normal business hours.'
  }
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }

const handleSubmit = () => {
  // Form submission handler
  console.log('Form submitted', form)
}
</script>

<template>
  <div class="page-content">
    <NavBar />

    <HeroSection
      title="Data Recovery Express Drop Off Form"
      subtitle="In a rush? Fill out our quick online form ahead of time, then stop by for a fast and easy Express Drop-Off."
      description="No need to wait — just drop off your device and go. We'll handle the rest and follow up with your free diagnostic and recovery options."
      bgImage="/express-drop-off-data-recovery-glendale-ca.jpg"
      :trustBadges="[{icon:'clock',text:'Available 24/7/365'},{icon:'check',text:'No Data = No Charge'},{icon:'shield',text:'10+ Years in Business'},{icon:'star',text:'Free Nationwide Shipping'}]"
      :showForm="false"
      :showButtons="false"
    />

    <StatsBar />

    <!-- FORM SECTION -->
    <section class="s-white form-section">
      <div class="container">
        <div class="section-label">Express Drop Off Form</div>
        <h2 class="s-heading">Data Recovery Express Drop Off Form</h2>

        <form @submit.prevent="handleSubmit" class="drop-off-form">

          <!-- Row 1: First Name | Last Name -->
          <div class="form-row two-col">
            <div class="form-group">
              <label>First Name <span class="req">*</span></label>
              <input v-model="form.firstName" type="text" class="form-input" required />
            </div>
            <div class="form-group">
              <label>Last Name <span class="req">*</span></label>
              <input v-model="form.lastName" type="text" class="form-input" required />
            </div>
          </div>

          <!-- Row 2: Email | Phone -->
          <div class="form-row two-col">
            <div class="form-group">
              <label>Email Address <span class="req">*</span></label>
              <input v-model="form.email" type="email" class="form-input" required />
            </div>
            <div class="form-group">
              <label>Phone <span class="req">*</span></label>
              <input v-model="form.phone" type="tel" class="form-input" required />
            </div>
          </div>

          <!-- Row 3: Drive Manufacturer | Model No -->
          <div class="form-row two-col">
            <div class="form-group">
              <label>Drive Manufacturer <span class="req">*</span></label>
              <select v-model="form.driveManufacturer" class="form-input" required>
                <option value="">— Select —</option>
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
            <div class="form-group">
              <label>Model No <span class="req">*</span></label>
              <input v-model="form.modelNo" type="text" class="form-input" required />
            </div>
          </div>

          <!-- Row 4: Type of Drive | Drive Format -->
          <div class="form-row two-col">
            <div class="form-group">
              <label>Type of Drive <span class="req">*</span></label>
              <select v-model="form.driveType" class="form-input" required>
                <option value="">— Select —</option>
                <option>Laptop Drive</option>
                <option>External Hard Drive</option>
                <option>Solid State Drive</option>
                <option>Other</option>
                <option>I'm Not Sure</option>
              </select>
            </div>
            <div class="form-group">
              <label>Drive Format <span class="req">*</span></label>
              <select v-model="form.driveFormat" class="form-input" required>
                <option value="">— Select —</option>
                <option>Macintosh</option>
                <option>Windows</option>
                <option>Mac & Windows</option>
                <option>Linux</option>
                <option>I'm Not Sure</option>
              </select>
            </div>
          </div>

          <!-- Row 5: Drive Size | Issue -->
          <div class="form-row two-col">
            <div class="form-group">
              <label>Drive Size <span class="req">*</span></label>
              <input v-model="form.driveSize" type="text" class="form-input" required />
            </div>
            <div class="form-group">
              <label>Issue <span class="req">*</span></label>
              <input v-model="form.issue" type="text" class="form-input" required />
            </div>
          </div>

          <!-- Row 6: Drop Off Location -->
          <div class="form-row one-col">
            <div class="form-group">
              <label>Drop Off Location <span class="req">*</span></label>
              <input type="text" class="form-input" value="Glendale, CA" disabled />
            </div>
          </div>

          <!-- Row 7: Type of data -->
          <div class="form-row one-col">
            <div class="form-group">
              <label>Type of data you'd like us to recover <span class="req">*</span></label>
              <div class="checkbox-group">
                <label class="checkbox-label">
                  <input type="checkbox" v-model="form.dataTypes" value="Photos" /> Photos
                </label>
                <label class="checkbox-label">
                  <input type="checkbox" v-model="form.dataTypes" value="Documents" /> Documents
                </label>
                <label class="checkbox-label">
                  <input type="checkbox" v-model="form.dataTypes" value="Music" /> Music
                </label>
                <label class="checkbox-label">
                  <input type="checkbox" v-model="form.dataTypes" value="Movies" /> Movies
                </label>
                <label class="checkbox-label">
                  <input type="checkbox" v-model="form.dataTypes" value="Downloads" /> Downloads
                </label>
                <label class="checkbox-label">
                  <input type="checkbox" v-model="form.dataTypes" value="Desktop" /> Desktop
                </label>
                <label class="checkbox-label">
                  <input type="checkbox" v-model="form.dataTypes" value="All files on the hard drive" /> All files on the hard drive (this process may take an extra 24-72 hours to recover).
                </label>
                <label class="checkbox-label">
                  <input type="checkbox" v-model="form.dataTypes" value="Other, please contact me" /> Other, please contact me.
                </label>
              </div>
            </div>
          </div>

          <!-- Row 8: Recovery Attempted -->
          <div class="form-row one-col">
            <div class="form-group">
              <label>Recovery Attempted? <span class="req">*</span></label>
              <div class="radio-group">
                <label class="radio-label">
                  <input type="radio" v-model="form.recoveryAttempted" value="No, this is our first attempt to recover the data." /> No, this is our first attempt to recover the data.
                </label>
                <label class="radio-label">
                  <input type="radio" v-model="form.recoveryAttempted" value="Yes, another company attempted and was unsuccessful." /> Yes, another company attempted and was unsuccessful.
                </label>
                <label class="radio-label">
                  <input type="radio" v-model="form.recoveryAttempted" value="Yes, another company attempted and recommended a clean room repair." /> Yes, another company attempted and recommended a clean room repair.
                </label>
                <label class="radio-label">
                  <input type="radio" v-model="form.recoveryAttempted" value="Yes, drive cover has been opened ($200.00 fee Non Refundable)." /> Yes, drive cover has been opened ($200.00 fee Non Refundable).
                </label>
                <label class="radio-label">
                  <input type="radio" v-model="form.recoveryAttempted" value="Other" /> Other
                </label>
              </div>
            </div>
          </div>

          <!-- Row 9: Additional Information -->
          <div class="form-row one-col">
            <div class="form-group">
              <label>Additional Information <span class="req">*</span></label>
              <textarea v-model="form.additionalInfo" class="form-input form-textarea" placeholder="Please provide any additional information about the issue with the drive." rows="5" required></textarea>
            </div>
          </div>

          <!-- Row 10: Conditional Rates -->
          <div class="form-row one-col">
            <div class="form-group">
              <label>Conditional Rates <span class="req">*</span></label>
              <p class="field-note">Please select any that may apply. These fees are rare and typically apply to a very small number of drives. If there is something you are unsure of, please do not worry. We will inspect the drive and let you know if there will be additional fees.</p>
              <div class="checkbox-group">
                <label class="checkbox-label">
                  <input type="checkbox" v-model="form.conditionalRates" value="computer" /> My hard drive is still inside a computer (depending on the type of computer, there may be a $200.00 removal fee).
                </label>
                <label class="checkbox-label">
                  <input type="checkbox" v-model="form.conditionalRates" value="encrypted" /> My hard drive is encrypted ($200.00 fee only if recovery is successful).
                </label>
                <label class="checkbox-label">
                  <input type="checkbox" v-model="form.conditionalRates" value="raid" /> My hard drive is part of a RAID (Flat Rate Recovery fee of $300.00 per drive)
                </label>
                <label class="checkbox-label">
                  <input type="checkbox" v-model="form.conditionalRates" value="2tb" /> My hard drive is larger than 2TB ($200.00 additional fee if recovery is successful).
                </label>
                <label class="checkbox-label">
                  <input type="checkbox" v-model="form.conditionalRates" value="8tb" /> My hard drive is larger than 8TB ($200.00 additional fee if recovery is successful).
                </label>
                <label class="checkbox-label">
                  <input type="checkbox" v-model="form.conditionalRates" value="usb" /> My hard drive has the USB 3.0 or USB-C Port ($200.00 additional fee if recovery is successful).
                </label>
                <label class="checkbox-label">
                  <input type="checkbox" v-model="form.conditionalRates" value="deleted" /> The data on my hard drive was deleted ($200.00 Paid upfront and non refundable).
                </label>
              </div>
            </div>
          </div>

          <!-- Row 11: Expedited Service -->
          <div class="form-row one-col">
            <div class="form-group">
              <label>Expedited Service <span class="req">*</span></label>
              <div class="radio-group">
                <label class="radio-label">
                  <input type="radio" v-model="form.expeditedService" value="standard" /> Standard Service is okay. Turnaround time for standard service is 3-5 business days.
                </label>
                <label class="radio-label">
                  <input type="radio" v-model="form.expeditedService" value="expedited" /> Yes, please sign me up for Expedited Service ($200.00 to be paid upfront and non-refundable)
                </label>
              </div>
            </div>
          </div>

          <!-- Row 12: Transfer Drive -->
          <div class="form-row one-col">
            <div class="form-group">
              <label>Transfer Drive <span class="req">*</span></label>
              <div class="radio-group">
                <label class="radio-label">
                  <input type="radio" v-model="form.transferDrive" value="own" /> I will provide my own transfer drive (please make sure drive is formatted and there is no other data on it).
                </label>
                <label class="radio-label">
                  <input type="radio" v-model="form.transferDrive" value="purchase" /> I will purchase a transfer drive from Five Star Data Recovery.
                </label>
              </div>
            </div>
          </div>

          <!-- Row 13: Preferred Drop Off Date | Time -->
          <div class="form-row two-col">
            <div class="form-group">
              <label>Preferred Drop Off Date <span class="req">*</span></label>
              <input v-model="form.dropOffDate" type="date" class="form-input" required />
            </div>
            <div class="form-group">
              <label>Preferred Drop Off Time (10am - 6pm) <span class="req">*</span></label>
              <input v-model="form.dropOffTime" type="text" class="form-input" placeholder="e.g. 2:00 PM" required />
            </div>
          </div>

          <!-- Row 14: Today's Date -->
          <div class="form-row one-col">
            <div class="form-group">
              <label>Today's Date <span class="req">*</span></label>
              <input v-model="form.todayDate" type="date" class="form-input" required />
            </div>
          </div>

          <!-- Row 15: Terms of Service -->
          <div class="form-row one-col">
            <div class="form-group">
              <label class="checkbox-label tos-label">
                <input type="checkbox" v-model="form.agreeTerms" required />
                Terms of Service <span class="req">*</span> — Yes, I agree with the terms and conditions.
              </label>
            </div>
          </div>

          <!-- Submit -->
          <div class="form-row one-col">
            <button type="submit" class="submit-btn">Submit</button>
          </div>

        </form>
      </div>
    </section>

    <!-- PROCESS SECTION -->
    <section class="s-white process-section">
      <div class="container">
        <div class="section-label center">Our Process</div>
        <h2 class="s-heading center">Data Recovery Process</h2>
        <p class="s-intro center">Our data recovery process is built around security, transparency, and peace of mind. From start to finish, we keep you informed with clear updates at every stage. With a commitment to honest service and no hidden fees, we follow through on every promise — ensuring a smooth and stress-free experience.</p>

        <div class="process-track">
          <div v-for="(step, i) in steps" :key="step.num" class="process-node">
            <div class="process-circle-wrap">
              <div class="process-circle">{{ step.num }}</div>
              <div v-if="i < steps.length - 1" class="process-connector" />
            </div>
            <h3 class="process-title">{{ step.title }}</h3>
            <p class="process-body">{{ step.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- VIDEO SECTION -->
    <section class="video-section">
      <div class="container video-inner">
        <div class="video-copy">
          <h2 class="video-heading">See Why Thousands Trust Us With Their Important Data</h2>
          <p class="video-desc">Data loss is stressful — but working with us doesn't have to be. Watch how our team handles each recovery with care, professionalism, and precision. From diagnostics to delivery, we offer flat-rate pricing, honest communication, and proven results — all from our secure Glendale lab.</p>
        </div>
        <div class="video-embed">
          <iframe
            src="https://www.youtube.com/embed/14ACFHJ24hg?start=60"
            title="Five Star Data Recovery"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>
    </section>

    <!-- FAQ SECTION -->
    <section class="faq-section">
      <div class="container">
        <h2 class="s-heading center faq-heading">Frequently Asked Questions</h2>
        <div class="faq-wrap">
          <div v-for="(faq, i) in faqs" :key="i" class="faq-row" :class="{ active: openFaq === i }">
            <button class="faq-trigger" @click="toggleFaq(i)">
              <span>{{ faq.q }}</span>
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

/* Section colors */
.s-white { background: #fff; padding: 80px 0; }

/* Labels & headings */
.section-label { font-size: 0.72rem; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; color: #F5C842; margin-bottom: 10px; font-variant: small-caps; }
.section-label.center { text-align: center; }
.s-heading { font-size: clamp(1.5rem, 2.8vw, 2.1rem); font-weight: 900; color: #1a1a2e; line-height: 1.25; margin-bottom: 16px; }
.s-heading.center { text-align: center; }
.s-intro { font-size: 1rem; color: #4a5568; line-height: 1.75; margin-bottom: 48px; }
.s-intro.center { text-align: center; max-width: 760px; margin-left: auto; margin-right: auto; }

/* ======================== FORM ======================== */
.form-section { border-bottom: 1px solid #e8ecf2; }

.drop-off-form { margin-top: 40px; }

.form-row { margin-bottom: 22px; }
.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.one-col { display: grid; grid-template-columns: 1fr; }

.form-group { display: flex; flex-direction: column; }
.form-group label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 6px;
}

.req { color: #e53935; }

.form-input {
  border: 1px solid #d1d5db;
  border-radius: 6px;
  padding: 10px 14px;
  font-size: 0.95rem;
  color: #1a1a2e;
  background: #fff;
  font-family: inherit;
  width: 100%;
  appearance: none;
  transition: border-color 0.2s;
}
.form-input:focus { outline: none; border-color: #F5C842; box-shadow: 0 0 0 2px rgba(245,200,66,0.15); }
.form-input:disabled { background: #f9fafb; color: #6b7280; cursor: not-allowed; }

select.form-input { cursor: pointer; }
.form-textarea { resize: vertical; min-height: 120px; height: auto; padding: 10px 14px; line-height: 1.6; }

.field-note {
  font-size: 0.82rem;
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 14px;
  background: #f8f9fa;
  border-left: 3px solid #F5C842;
  padding: 10px 14px;
  border-radius: 0 6px 6px 0;
}

/* Checkboxes */
.checkbox-group { display: flex; flex-direction: column; gap: 10px; margin-top: 6px; }
.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.9rem;
  color: #4a5568;
  font-weight: 400;
  cursor: pointer;
  line-height: 1.5;
}
.checkbox-label input[type="checkbox"] {
  accent-color: #F5C842;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  margin-top: 2px;
  cursor: pointer;
}

/* Radios */
.radio-group { display: flex; flex-direction: column; gap: 10px; margin-top: 6px; }
.radio-label {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.9rem;
  color: #4a5568;
  font-weight: 400;
  cursor: pointer;
  line-height: 1.5;
}
.radio-label input[type="radio"] {
  accent-color: #F5C842;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  margin-top: 2px;
  cursor: pointer;
}

/* TOS */
.tos-label {
  font-size: 0.9rem !important;
  font-weight: 600 !important;
  color: #1a1a2e !important;
}

/* Submit */
.submit-btn {
  background: #F5C842;
  color: #1a1a2e;
  font-weight: 800;
  font-size: 1rem;
  padding: 14px 40px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-family: inherit;
  letter-spacing: 0.04em;
  transition: background 0.2s, transform 0.15s;
  display: inline-block;
}
.submit-btn:hover { background: #e0b52e; transform: translateY(-1px); }

/* ======================== PROCESS ======================== */
.process-section { background: #fff; border-top: 1px solid #e8ecf2; }

.process-track {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0;
  position: relative;
  margin-top: 16px;
}

.process-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 12px;
}

.process-circle-wrap {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
}

.process-circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #1a1a2e;
  color: #F5C842;
  font-size: 1.2rem;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #F5C842;
  flex-shrink: 0;
  z-index: 1;
  position: relative;
}

.process-connector {
  position: absolute;
  top: 50%;
  left: calc(50% + 30px);
  width: calc(100% - 60px);
  height: 2px;
  background: linear-gradient(90deg, #F5C842, rgba(245,200,66,0.25));
  transform: translateY(-50%);
}

.process-title {
  font-size: 0.88rem;
  font-weight: 800;
  color: #1a1a2e;
  margin-bottom: 10px;
  line-height: 1.35;
}

.process-body {
  font-size: 0.82rem;
  color: #4a5568;
  line-height: 1.65;
}

/* ======================== VIDEO ======================== */
.video-section {
  background: #1a2035;
  padding: 80px 0;
}

.video-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.video-copy { display: flex; flex-direction: column; gap: 20px; }

.video-heading {
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  font-weight: 900;
  color: #fff;
  line-height: 1.3;
}

.video-desc {
  font-size: 0.95rem;
  color: rgba(255,255,255,0.7);
  line-height: 1.8;
}

.video-embed {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 16/9;
  box-shadow: 0 16px 56px rgba(0,0,0,0.5);
}

.video-embed iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
}

/* ======================== FAQ ======================== */
.faq-section {
  background: #f4f7fc;
  padding: 80px 0;
}

.faq-heading { margin-bottom: 48px; }

.faq-wrap { display: flex; flex-direction: column; gap: 10px; }

.faq-row {
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
}
.faq-row.active { border-color: #F5C842; }

.faq-trigger {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  background: none;
  border: none;
  color: #1a1a2e;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  text-align: left;
  gap: 16px;
  font-family: inherit;
}

.faq-toggle {
  color: #F5C842;
  font-size: 1.5rem;
  font-weight: 300;
  flex-shrink: 0;
  line-height: 1;
}

.faq-answer {
  padding: 4px 24px 20px;
  font-size: 0.9rem;
  color: #4a5568;
  line-height: 1.8;
  border-top: 1px solid #f0f2f7;
}

/* ======================== RESPONSIVE ======================== */
@media (max-width: 900px) {
  .process-track { grid-template-columns: repeat(3, 1fr); gap: 28px; }
  .process-connector { display: none; }
  .video-inner { grid-template-columns: 1fr; }
}

@media (max-width: 640px) {
  .two-col { grid-template-columns: 1fr; }
  .process-track { grid-template-columns: 1fr 1fr; gap: 24px; }
}

@media (max-width: 400px) {
  .process-track { grid-template-columns: 1fr; }
}
</style>
