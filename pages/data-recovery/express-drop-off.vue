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
            "@type": "WebPage",
            "url": "https://www.fivestardatarecovery.com/data-recovery/express-drop-off/",
            "name": "Data Recovery Express Drop Off Form - Five Star Data Recovery",
            "description": "Skip the wait! Fill out our Express Drop-Off Form online and drop off your device quickly at our Glendale, CA lab. Fast, easy, no appointment needed."
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
  description: 'Skip the wait! Fill out our Express Drop-Off Form online and drop off your device quickly at our Glendale, CA lab. Fast, easy, no appointment needed.',
  ogDescription: 'Skip the wait! Fill out our Express Drop-Off Form online and drop off your device quickly at our Glendale, CA lab. Fast, easy, no appointment needed.',
})

const trustBadges = [
  { icon: 'clock', text: 'Available 24/7/365' },
  { icon: 'check', text: 'No Data = No Charge' },
  { icon: 'shield', text: '10+ Years in Business' },
  { icon: 'star', text: 'Free Nationwide Shipping' },
]

const steps = [
  { num: '1', title: 'Drop off or Mail in Your Drive', text: 'You can visit our Glendale lab for a quick drop-off, or securely mail your device using our prepaid shipping label — whichever is more convenient for you.' },
  { num: '2', title: 'Receive a Free Diagnosis', text: 'Our team will evaluate your device and provide a detailed diagnosis along with an initial quote — completely free of charge and with no obligation to proceed.' },
  { num: '3', title: 'Our Engineers work on Recovering your Data', text: 'We carefully begin the recovery process using advanced tools and cleanroom procedures.' },
  { num: '4', title: 'Review & Approve the Recovered', text: "After recovery is complete, you'll receive a detailed file list to review so you can confirm everything important has been successfully recovered." },
  { num: '5', title: 'Receive your recovered data', text: "Once approved, we'll securely transfer your data to a new drive and return it to you via pickup or insured shipping — ready for immediate use." },
]

const faqs = [
  { q: 'What is the Express Drop-Off Form?', a: 'The Express Drop-Off Form is a fast and efficient way to start your data recovery case before you arrive. It helps us gather key information in advance so we can begin processing your device as soon as it\'s received—minimizing wait times and streamlining the intake process.' },
  { q: 'Why should I fill out the drop-off form in advance?', a: 'Completing the data recovery drop-off form before your visit speeds up check-in and ensures a smooth handoff. It allows our team to prepare for your device\'s arrival and start the diagnostic process more efficiently.' },
  { q: 'Is this form required for data recovery services?', a: 'While not required, using the Express Drop-Off Form is highly recommended. It\'s designed purely for your convenience, allowing you to skip the wait and complete your drop-off in just a few minutes. A quick and simple way to get your device in without any delays.' },
  { q: 'Can I drop off my device without filling out the form?', a: 'Yes, you can walk in and drop off your device during business hours, but filling out the Express Drop-Off Form in advance helps minimize your time at the front desk and gets your device into the queue faster.' },
  { q: 'Is there a cost to use the Express Drop-Off service?', a: 'No, there is no extra charge for using the Express Drop-Off Form. You only pay once the data recovery is complete and you\'ve approved the results. For most standard recoveries, we also offer a No Data, No Charge policy — so there\'s no risk in getting started.' },
  { q: 'Is the information I submit secure?', a: 'Yes. All information collected through the drop-off form is used strictly for your case and kept confidential. We never share your details with third parties.' },
  { q: 'Where can I access the Express Drop-Off Form?', a: 'You can access and complete the form directly on our Express Drop-Off page. Once submitted, our team will be ready to assist you when you arrive during normal business hours.' },
]

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

    <!-- FORM SECTION -->
    <section class="s-white">
      <div class="container">
        <div class="form-card">
          <h2 class="form-heading">Data Recovery Express Drop Off Form</h2>
          <form class="edo-form" @submit.prevent>

            <div class="form-row-2">
              <div class="form-group">
                <label class="form-label">First Name <span class="req">*</span></label>
                <input type="text" class="form-input" required />
              </div>
              <div class="form-group">
                <label class="form-label">Last Name <span class="req">*</span></label>
                <input type="text" class="form-input" required />
              </div>
            </div>

            <div class="form-row-2">
              <div class="form-group">
                <label class="form-label">Email Address <span class="req">*</span></label>
                <input type="email" class="form-input" required />
              </div>
              <div class="form-group">
                <label class="form-label">Phone <span class="req">*</span></label>
                <input type="tel" class="form-input" required />
              </div>
            </div>

            <div class="form-row-2">
              <div class="form-group">
                <label class="form-label">Drive Manufacturer <span class="req">*</span></label>
                <select class="form-input" required>
                  <option value="">Drive Manufacturer</option>
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
                <label class="form-label">Model No <span class="req">*</span></label>
                <input type="text" class="form-input" required />
              </div>
            </div>

            <div class="form-row-2">
              <div class="form-group">
                <label class="form-label">Type of Drive <span class="req">*</span></label>
                <select class="form-input" required>
                  <option value="">Type of Drive</option>
                  <option>Laptop Drive</option>
                  <option>External Hard Drive</option>
                  <option>Solid State Drive</option>
                  <option>Other</option>
                  <option>I'm Not Sure</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Drive Format <span class="req">*</span></label>
                <select class="form-input" required>
                  <option value="">Drive Format</option>
                  <option>Macintosh</option>
                  <option>Windows</option>
                  <option>Mac &amp; Windows</option>
                  <option>Linux</option>
                  <option>I'm Not Sure</option>
                </select>
              </div>
            </div>

            <div class="form-row-2">
              <div class="form-group">
                <label class="form-label">Drive Size <span class="req">*</span></label>
                <input type="text" class="form-input" required />
              </div>
              <div class="form-group">
                <label class="form-label">Issue <span class="req">*</span></label>
                <input type="text" class="form-input" required />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Drop Off Location <span class="req">*</span></label>
              <input type="text" class="form-input" value="Glendale, CA" disabled />
            </div>

            <div class="form-group">
              <label class="form-label">Type of data you'd like us to recover <span class="req">*</span></label>
              <div class="checkbox-group">
                <label class="check-item"><input type="checkbox" /> Photos, Documents, Music, Movies, Downloads, Desktop</label>
                <label class="check-item"><input type="checkbox" /> All files on the hard drive (this process may take an extra 24-72 hours to recover).</label>
                <label class="check-item"><input type="checkbox" /> Other, please contact me.</label>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Recovery Attempted? <span class="req">*</span></label>
              <div class="radio-group">
                <label class="radio-item"><input type="radio" name="recovery_attempted" /> No, this is our first attempt to recover the data.</label>
                <label class="radio-item"><input type="radio" name="recovery_attempted" /> Yes, another company attempted and was unsuccessful.</label>
                <label class="radio-item"><input type="radio" name="recovery_attempted" /> Yes, another company attempted and recommended a clean room repair.</label>
                <label class="radio-item"><input type="radio" name="recovery_attempted" /> Yes, drive cover has been opened ($200.00 fee Non Refundable).</label>
                <label class="radio-item"><input type="radio" name="recovery_attempted" /> Other</label>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Additional Information <span class="req">*</span></label>
              <textarea class="form-input form-textarea" placeholder="Please provide any additional information about the issue with the drive." required></textarea>
            </div>

            <div class="form-group">
              <label class="form-label">Conditional Rates <span class="req">*</span></label>
              <p class="form-note">Please select any that may apply. These fees are rare and typically apply to a very small number of drives. If there is something you are unsure of, please do not worry. We will inspect the drive and let you know if there will be additional fees.</p>
              <div class="checkbox-group">
                <label class="check-item"><input type="checkbox" /> My hard drive is still inside a computer (depending on the type of computer, there may be a $200.00 removal fee).</label>
                <label class="check-item"><input type="checkbox" /> My hard drive is encrypted ($200.00 fee only if recovery is successful).</label>
                <label class="check-item"><input type="checkbox" /> My hard drive is part of a RAID (Flat Rate Recovery fee of $300.00 per drive)</label>
                <label class="check-item"><input type="checkbox" /> My hard drive is larger than 2TB ($200.00 additional fee if recovery is successful).</label>
                <label class="check-item"><input type="checkbox" /> My hard drive is larger than 8TB ($200.00 additional fee if recovery is successful).</label>
                <label class="check-item"><input type="checkbox" /> My hard drive has the USB 3.0 or USB-C Port ($200.00 additional fee if recovery is successful).</label>
                <label class="check-item"><input type="checkbox" /> The data on my hard drive was deleted ($200.00 Paid upfront and non refundable).</label>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Expedited Service <span class="req">*</span></label>
              <div class="radio-group">
                <label class="radio-item"><input type="radio" name="expedited" /> Standard Service is okay. Turnaround time for standard service is 3-5 business days.</label>
                <label class="radio-item"><input type="radio" name="expedited" /> Yes, please sign me up for Expedited Service ($200.00 to be paid upfront and non-refundable)</label>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Transfer Drive (where the recovered data will be transferred to) <span class="req">*</span></label>
              <div class="radio-group">
                <label class="radio-item"><input type="radio" name="transfer_drive" /> I will provide my own transfer drive (please make sure drive is formatted and there is no other data on it).</label>
                <label class="radio-item"><input type="radio" name="transfer_drive" /> I will purchase a transfer drive from Five Star Data Recovery.</label>
              </div>
            </div>

            <div class="form-row-2">
              <div class="form-group">
                <label class="form-label">Preferred Drop Off Date <span class="req">*</span></label>
                <input type="date" class="form-input" required />
              </div>
              <div class="form-group">
                <label class="form-label">Preferred Drop Off Time (10am - 6pm) <span class="req">*</span></label>
                <select class="form-input" required>
                  <option value="">Select time</option>
                  <option>AM</option>
                  <option>PM</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Today's Date <span class="req">*</span></label>
              <input type="date" class="form-input" required />
            </div>

            <div class="form-group">
              <label class="form-label">Terms of Service <span class="req">*</span></label>
              <label class="check-item"><input type="checkbox" required /> Yes, I agree with the <NuxtLink to="/terms-and-conditions" class="form-link">terms and conditions.</NuxtLink></label>
            </div>

            <button type="submit" class="btn-submit">Submit</button>

          </form>
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
          <div class="process-step" v-for="(step, i) in steps" :key="i">
            <div class="process-num">{{ step.num }}</div>
            <h3 class="process-title">{{ step.title }}</h3>
            <p class="process-body">{{ step.text }}</p>
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
.s-white { background: #fff; padding: 80px 0; }
.s-heading { font-size: clamp(1.5rem, 2.8vw, 2.1rem); font-weight: 900; color: #1a1a2e; line-height: 1.25; }
.s-heading.center { text-align: center; }

/* FORM */
.form-card {
  background: #fff;
  border: 1px solid #e8edf4;
  border-radius: 16px;
  padding: 52px 56px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.06);
  max-width: 860px;
  margin: 0 auto;
}
.form-heading {
  font-size: clamp(1.4rem, 2.5vw, 1.9rem);
  font-weight: 900;
  color: #1a1a2e;
  margin: 0 0 36px;
  text-align: center;
}
.edo-form { display: flex; flex-direction: column; gap: 24px; }
.form-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.form-group { display: flex; flex-direction: column; gap: 7px; }
.form-label {
  font-size: 0.75rem;
  font-weight: 700;
  color: #1a1a2e;
  text-transform: uppercase;
  letter-spacing: 0.07em;
}
.req { color: #e53e3e; }
.form-input {
  border: 1.5px solid #d1d9e6;
  border-radius: 8px;
  padding: 11px 14px;
  font-size: 0.95rem;
  color: #1a1a2e;
  background: #fff;
  font-family: inherit;
  transition: border-color 0.2s;
  width: 100%;
}
.form-input:focus { outline: none; border-color: #F5C842; }
.form-input:disabled { background: #f4f7fc; color: #666; }
.form-textarea { min-height: 120px; resize: vertical; }
.form-note {
  font-size: 0.85rem;
  color: #4a5568;
  line-height: 1.6;
  margin: 0 0 10px;
}
.checkbox-group, .radio-group { display: flex; flex-direction: column; gap: 10px; }
.check-item, .radio-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.92rem;
  color: #374151;
  line-height: 1.5;
  cursor: pointer;
}
.check-item input, .radio-item input { margin-top: 3px; flex-shrink: 0; accent-color: #F5C842; }
.form-link { color: #F5C842; text-decoration: underline; }
.btn-submit {
  background: #F5C842;
  color: #1a1a1a;
  border: none;
  border-radius: 8px;
  padding: 15px 40px;
  font-size: 1rem;
  font-weight: 800;
  cursor: pointer;
  transition: background 0.2s;
  align-self: flex-start;
  font-family: inherit;
}
.btn-submit:hover { background: #e0b43a; }

/* PROCESS */
.process-section {
  background: #0f1623;
  padding: 80px 0 90px;
}
.process-heading {
  text-align: center;
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  font-weight: 900;
  color: #fff;
  margin-bottom: 16px;
}
.process-intro {
  text-align: center;
  font-size: 1rem;
  color: #8a9bb8;
  max-width: 760px;
  margin: 0 auto 56px;
  line-height: 1.7;
}
.process-timeline {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}
.process-line {
  position: absolute;
  top: 27px;
  left: calc(10% + 27px);
  right: calc(10% + 27px);
  height: 3px;
  background: linear-gradient(to right, #F5C842, #e0b43a);
  border-radius: 2px;
}
.process-step {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
}
.process-num {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: #F5C842;
  color: #1a1a2e;
  font-size: 1.3rem;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  box-shadow: 0 0 0 4px #0f1623, 0 0 0 7px rgba(245,200,66,0.25);
  flex-shrink: 0;
}
.process-title {
  font-size: 0.88rem;
  font-weight: 800;
  color: #fff;
  margin: 0 0 10px;
  line-height: 1.35;
}
.process-body {
  font-size: 0.78rem;
  color: #8a9bb8;
  line-height: 1.6;
  margin: 0;
}

/* VIDEO */
.video-section { background: #1a2035; padding: 72px 0; }
.video-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
.video-heading { font-size: clamp(1.4rem, 2.5vw, 2rem); font-weight: 800; color: #fff; line-height: 1.3; margin-bottom: 16px; }
.video-desc { font-size: 0.95rem; color: #8a9bb8; line-height: 1.8; }
.video-embed { border-radius: 12px; overflow: hidden; }
.video-embed iframe { width: 100%; aspect-ratio: 16/9; display: block; }

/* FAQ */
.faq-section { background: #f4f7fc; padding: 80px 0; }
.faq-wrap { max-width: 760px; margin: 0 auto; display: flex; flex-direction: column; gap: 0; }
.faq-row { border-bottom: 1px solid #e2e8f0; }
.faq-row:first-child { border-top: 1px solid #e2e8f0; }
.faq-trigger {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 20px 0;
  background: none;
  border: none;
  font-family: inherit;
  font-size: 0.97rem;
  font-weight: 700;
  color: #1a1a2e;
  text-align: left;
  cursor: pointer;
}
.faq-toggle { font-size: 1.4rem; color: #F5C842; flex-shrink: 0; }
.faq-answer { padding: 0 0 20px; font-size: 0.93rem; color: #4a5568; line-height: 1.75; }

/* MOBILE */
@media (max-width: 768px) {
  .form-card { padding: 32px 20px; }
  .form-row-2 { grid-template-columns: 1fr; }
  .process-line { display: none; }
  .process-timeline { flex-direction: column; align-items: flex-start; gap: 28px; }
  .process-step { flex-direction: row; align-items: flex-start; text-align: left; gap: 16px; }
  .process-num { margin-bottom: 0; flex-shrink: 0; }
  .video-inner { grid-template-columns: 1fr; }
}
</style>
