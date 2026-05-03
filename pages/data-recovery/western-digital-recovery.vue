<script setup lang="ts">
useSeoMeta({
  title: 'Western Digital Data Recovery Services — Five Star Data Recovery',
  description: 'Are you experiencing issues with your Western Digital (WD) hard drive? Five Star Data Recovery offers professional WD data recovery for all drives. Free evaluation, no data no charge.'
})

const issues = [
  {
    title: 'My Passport Hard Drive Light Blinking But Not Working',
    text: 'If your WD My Passport is blinking but not showing up, this is typically caused by a firmware issue, PCB failure, or damaged read/write heads. The drive may still spin but cannot complete initialization. Our engineers have recovered thousands of WD My Passport drives — even in cases where other labs said recovery wasn\'t possible.'
  },
  {
    title: 'WD Hard Drive Not Showing Up',
    text: 'Yes. If your WD external hard drive is not showing up, it could be due to physical damage, logical errors, file system corruption, or PCB failure. We specialize in identifying the root cause and performing safe and effective WD data recovery to retrieve your files.'
  },
  {
    title: 'WD External Hard Drive Show Errors',
    text: 'If your WD external hard drive is showing errors or requesting you to format the drive, do not format it. This usually means the file system has become unreadable due to logical corruption or bad sectors. Formatting will make recovery more difficult. Contact us immediately for a free evaluation.'
  },
  {
    title: 'Clicking or Beeping Sounds',
    text: 'A clicking WD hard drive often indicates internal mechanical failure, such as a damaged read/write head or spindle issue. These cases require cleanroom recovery and advanced tools — all of which we offer in-house at our recovery lab.'
  }
]

const causes = [
  'Physical damage from accidental drops or impact',
  'Power surges damaging internal components or the PCB',
  'Corrupted firmware or partition tables',
  'Exposure to heat or water',
  'Virus or malware affecting the drive\'s boot or partition info',
  'Bad sectors develop over time because of wear and tear'
]

const steps = [
  {
    num: '01',
    title: 'Step 1: Free Diagnostic',
    text: 'We evaluate your WD drive to identify the root cause — logical, physical, or firmware-related — at no charge. We will start working on your drive immediately and send you updates by midnight on the same day.'
  },
  {
    num: '02',
    title: 'Step 2: Cleanroom Imaging',
    text: 'We create a full sector-by-sector image of your WD drive in our certified cleanroom to protect your original data. All physical repairs are performed here before any data extraction begins.'
  },
  {
    num: '03',
    title: 'Step 3: File Extraction',
    text: 'Using specialized tools, we extract your files from the cloned image — even from encrypted or damaged WD drives. You will receive a full file list to review before we finalize delivery.'
  },
  {
    num: '04',
    title: 'Step 4: File Verification & Delivery',
    text: 'Once you review and approve the recovered files, we transfer everything to a new drive and return it to you. No Data, No Charge Guarantee – If we can\'t recover your data, you owe nothing.'
  }
]

const driveTypes = [
  'WD My Passport (Ultra, for Mac, SSD)',
  'WD Elements Portable and Desktop',
  'WD Black, Blue, and Green Series',
  'WD My Book and My Cloud',
  'WD Easystore Drives',
  'Internal SATA, PATA, and IDE models',
  'External and encrypted drives'
]

const troubleshootingTips = [
  'Try using a different USB cable or USB port',
  'Plug the WD External Hard Drive directly into the motherboard port, not a hub',
  'Open Disk Management in Windows to check if the drive is visible but unallocated',
  'Use Device Manager to check for driver issues',
  'Plug the drive to your computer on a different system, if available'
]

const reviews = [
  {
    name: 'Laura V.',
    location: 'Los Angeles, CA',
    stars: 5,
    text: 'My WD My Passport wasn\'t showing up, and I thought I lost everything. Five Star Data Recovery managed to recover 99% of my files, including all the photos that mattered most. They were honest about the recovery from the start and exceeded expectations.'
  },
  {
    name: 'Michael C.',
    location: 'Burbank, CA',
    stars: 5,
    text: 'After a surge fried my WD external drive, I thought I was out of luck. Five Star Data Recovery recovered 97% of my files, and the few that didn\'t come through weren\'t critical. I appreciated their honesty and detailed report.'
  },
  {
    name: 'Angela S.',
    location: 'New York, NY',
    stars: 5,
    text: 'Another lab gave up on my WD drive, but Five Star was able to recover most of my data. They know Western Digital drives inside and out. Transparent pricing, no pressure, and professional from start to finish.'
  }
]

const faqs = [
  { q: 'What types of Western Digital drives do you recover data from?', a: 'We recover data from all Western Digital devices, including WD My Passport, WD Elements, WD My Book, WD Blue, WD Black, WD Red, and enterprise-level WD drives. Whether it\'s an internal drive or WD external hard drive, we have the tools and expertise to recover your data.' },
  { q: 'My WD external hard drive is not showing up — can you recover the data?', a: 'Yes. If your WD external hard drive is not showing up, it could be due to physical damage, logical errors, file system corruption, or PCB failure. We specialize in identifying the root cause and performing safe and effective WD data recovery to retrieve your files.' },
  { q: 'Can you recover data from a Western Digital drive with a clicking or buzzing noise?', a: 'Absolutely. A clicking WD hard drive often indicates internal mechanical failure, such as a damaged read/write head or spindle issue. These cases require cleanroom recovery and advanced tools — all of which we offer in-house at our recovery lab.' },
  { q: 'How long does Western Digital data recovery take?', a: 'Standard WD data recovery services are typically completed within 3–5 business days. If you\'re in a rush, we also offer Expedited and Expedited Plus options for faster turnaround. Initial diagnostics are always completed same day, by midnight.' },
  { q: 'Do you offer a No Data, No Charge policy for WD data recovery?', a: 'Yes. Most Western Digital recovery cases qualify for our No Data, No Charge guarantee. If we\'re unable to recover your files, you pay nothing. Exceptions may apply in special cases like deleted file recovery or devices with prior tampering.' },
  { q: 'I dropped my WD My Passport — can you still recover the data?', a: 'Yes. Dropped drives often suffer from physical damage, such as damaged heads or platter alignment issues. Our team can safely perform recovery using drive-specific tools and firmware repair procedures to extract your files.' },
  { q: 'Is my data secure during the WD recovery process?', a: 'Absolutely. Your data is treated with strict confidentiality. We never share or access your files beyond what\'s required to complete recovery. Once recovery is done, your files are returned to you on a secure drive.' },
  { q: 'How much does Western Digital data recovery cost?', a: 'At Five Star Data Recovery, Western Digital data recovery is offered at flat-rate pricing: $300.00 for standard WD SATA drives under 2TB, $500.00 for WD SATA drives over 2TB, $600.00 for WD external USB 3.0 drives, and $800.00 for ultra high-capacity drives over 12TB. We provide a free evaluation before starting with no hidden fees.' },
  { q: 'Can I drop off or mail in my WD drive?', a: 'Yes! You can visit us in person at our Glendale, CA office, or start a case remotely using our Mail-In Recovery Form. We provide free shipping both ways for mail-in clients across the U.S.' }
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-wd">
    <NavBar />

    <!-- HERO -->
    <section class="hero-section">
      <div class="container hero-inner">
        <div class="hero-text">
          <h1 class="hero-title">Western Digital Data Recovery Services</h1>
          <p class="hero-sub">Get Your Data Back In No Time.</p>
          <p class="hero-desc">Are you experiencing issues with your Western Digital (WD) hard drive? If you have a blinking light, a drive that won't mount, or files you can't access, our expert team can help. We offer professional Western Digital Data Recovery services to safely get your data back. If your files are valuable, don't risk it. Trust our specialists to get your information back.</p>
          <div class="hero-actions">
            <NuxtLink to="/start-recovery" class="btn-primary-red">Start Recovery</NuxtLink>
            <NuxtLink to="/data-recovery/free-quote" class="btn-secondary">Request a Quote</NuxtLink>
          </div>
          <div class="hero-trust">
            <span>✔ Available 24/7/365</span>
            <span>✔ Clean Room On-Site</span>
            <span>✔ Flat Rate Pricing</span>
            <span>✔ Free Nationwide Shipping</span>
          </div>
        </div>
        <div class="hero-form-wrap">
          <div class="hero-form-card">
            <h3 class="form-title">Request a Free Consultation</h3>
            <form class="consult-form" @submit.prevent>
              <div class="form-row">
                <input type="text" placeholder="First Name" class="form-input" />
                <input type="text" placeholder="Last Name" class="form-input" />
              </div>
              <input type="email" placeholder="Email Address" class="form-input full" />
              <input type="tel" placeholder="Phone Number" class="form-input full" />
              <select class="form-input full">
                <option>Select Device Type</option>
                <option>Hard Drive (HDD)</option>
                <option>SSD</option>
                <option>External Drive</option>
                <option>RAID / NAS</option>
                <option>USB / Flash Drive</option>
                <option>Other</option>
              </select>
              <select class="form-input full">
                <option>Select Service Type</option>
                <option>Standard Service (3-5 days)</option>
                <option>Expedited Service (24-48 hrs)</option>
                <option>Expedited Plus (Same Day)</option>
              </select>
              <button type="submit" class="btn-form-submit">Request a Consultation</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <StatsBar />

    <!-- COMMON ISSUES -->
    <section class="light-section">
      <div class="container">
        <h2 class="section-heading">Common WD Hard Drive Issues</h2>
        <p class="section-intro">Western Digital drives are reliable, but they're not immune to failure. Whether it's a blinking light, a drive that won't mount, or files you can't access, our team is equipped to help.</p>
        <div class="issues-grid">
          <div v-for="issue in issues" :key="issue.title" class="issue-card">
            <h3 class="issue-title">{{ issue.title }}</h3>
            <p class="issue-text">{{ issue.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CAUSES -->
    <section class="light-alt-section">
      <div class="container two-col">
        <div class="col-text">
          <h2 class="section-heading">What Causes WD Drives to Fail?</h2>
          <p class="body-text">Western Digital drives can experience several common failure types. Some problems are software-related, like file system corruption or a failed operating system update. Other failures stem from physical damage, such as head crashes, bad sectors, or worn-out components. We also recover from accidental formatting, power surges, and damaged storage media devices that users improperly removed or mishandled.</p>
          <ul class="cause-list">
            <li v-for="c in causes" :key="c">{{ c }}</li>
          </ul>
        </div>
        <div class="col-img">
          <img src="/hard-drive-recovery-service-los-angeles.webp" alt="Hard drive recovery" class="section-img" />
        </div>
      </div>
    </section>

    <!-- PROCESS -->
    <section class="light-section">
      <div class="container">
        <h2 class="section-heading center">How Our WD Data Recovery Process Works</h2>
        <p class="section-intro center">We use a consistent, proven approach for every Western Digital Data Recovery case. Here's a look at how Five Star Data Recovery gets your data back.</p>
        <div class="process-row">
          <div v-for="step in steps" :key="step.num" class="process-card">
            <div class="step-label">{{ step.title }}</div>
            <p class="step-text">{{ step.text }}</p>
          </div>
        </div>
        <div class="no-charge-note">
          <strong>No Data, No Charge Guarantee</strong> — If we can't recover your data, you owe nothing.
        </div>
      </div>
    </section>

    <!-- TYPES -->
    <section class="light-alt-section">
      <div class="container two-col reverse">
        <div class="col-img">
          <img src="/data-recovery-clean-room-technician-glendale-ca.jpg" alt="Clean room data recovery" class="section-img" />
        </div>
        <div class="col-text">
          <h2 class="section-heading">Types of WD Drives We Recover</h2>
          <p class="body-text">We recover data from all Western Digital models, including internal SATA drives, external USB drives, and high-capacity enterprise units. Every WD drive type is supported.</p>
          <ul class="drive-list">
            <li v-for="d in driveTypes" :key="d">{{ d }}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- TROUBLESHOOTING + WARRANTY -->
    <section class="light-section">
      <div class="container two-col-equal">
        <div>
          <h2 class="section-heading-sm">Troubleshooting Tips for WD External Drives</h2>
          <p class="body-text">Before bringing your drive in, there are a few safe steps you can try. These won't risk your data and may save you a trip:</p>
          <ul class="tip-list">
            <li v-for="tip in troubleshootingTips" :key="tip">{{ tip }}</li>
          </ul>
        </div>
        <div>
          <h2 class="section-heading-sm">Warranty & Manufacturer Limitations</h2>
          <p class="body-text">In many cases, a WD drive failure occurs outside the standard warranty period, or the failure type isn't covered. Physical damage, logical failures, and accidental deletion are not covered under most manufacturer warranties. That's where Five Star Data Recovery steps in — we recover data regardless of warranty status, drive age, or failure cause.</p>
          <p class="body-text">In some cases, if your drive is still under warranty, WD may replace the hardware — but they will not recover your data. We do both: recover your data and help you understand your options.</p>
        </div>
      </div>
    </section>

    <!-- WHY PRONE + AFTER RECOVERY -->
    <section class="light-alt-section">
      <div class="container two-col-equal">
        <div>
          <h2 class="section-heading-sm">Why WD Drives Are Prone to Issues</h2>
          <p class="body-text">Western Digital drives, especially the WD My Passport and WD Elements series, use a USB-to-SATA bridge built directly into the drive enclosure. This means if the USB connector is damaged or the bridge chip fails, the data becomes inaccessible. Unlike standard internal drives, you can't simply remove the drive from the enclosure and connect it directly to a SATA port.</p>
          <p class="body-text">Additionally, WD uses SED (Self-Encrypting Drives) on many models, which adds complexity to the recovery process. Our lab is fully equipped to handle SED-locked and encrypted WD drives.</p>
        </div>
        <div>
          <h2 class="section-heading-sm">What Happens After Recovery?</h2>
          <p class="body-text">Once our engineers complete the recovery, you'll receive a full list of recovered files for your review. Only after you confirm that your important files are present do we transfer the data to a new storage device.</p>
          <p class="body-text">We then ship the drive back to you via insured shipping — or you can pick it up at our Glendale, CA location. Payment is only collected after you've confirmed successful recovery.</p>
        </div>
      </div>
    </section>

    <!-- DARK CTA FORM -->
    <section class="dark-cta-section">
      <div class="container two-col">
        <div class="col-text">
          <h2 class="dark-heading">Need Help Understanding Your WD Drive?</h2>
          <p class="dark-text">If you're not sure what's wrong with your drive, our engineers are happy to help. Our free diagnostic will tell you exactly what failed and what it will take to recover your data. There's no obligation and no charge for the evaluation.</p>
          <p class="dark-text">Data loss is stressful — but working with us doesn't have to be. Watch how our team handles each recovery with care, professionalism, and precision. From diagnostics to delivery, we offer flat-rate pricing, honest communication, and proven results — all from our secure Glendale lab.</p>
        </div>
        <div class="hero-form-wrap">
          <div class="hero-form-card">
            <h3 class="form-title">Get a Free Quote in Minutes!</h3>
            <form class="consult-form" @submit.prevent>
              <div class="form-row">
                <input type="text" placeholder="First Name" class="form-input" />
                <input type="text" placeholder="Last Name" class="form-input" />
              </div>
              <input type="email" placeholder="Email Address" class="form-input full" />
              <input type="tel" placeholder="Phone Number" class="form-input full" />
              <select class="form-input full">
                <option>Select Device Type</option>
                <option>Hard Drive (HDD)</option>
                <option>SSD</option>
                <option>External Drive</option>
              </select>
              <button type="submit" class="btn-form-submit">Request a Consultation</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT CTA BAND -->
    <section class="contact-band">
      <div class="container contact-band-inner">
        <div class="contact-band-text">
          <h2 class="contact-band-title">Contact Us for Western Digital Data Recovery</h2>
          <p class="contact-band-sub">Data loss is stressful — but working with us doesn't have to be. From diagnostics to delivery, we offer flat-rate pricing, honest communication, and proven results — all from our secure Glendale lab.</p>
          <ul class="contact-list">
            <li>Visit our lab in Glendale, CA</li>
            <li>Mail your drive to us from anywhere in the U.S.</li>
            <li>Call us today for a free evaluation</li>
          </ul>
        </div>
        <div class="contact-band-actions">
          <a href="tel:8182728866" class="btn-yellow">📞 818-272-8866</a>
          <NuxtLink to="/data-recovery/free-quote" class="btn-outline-white">Get Free Quote</NuxtLink>
        </div>
      </div>
    </section>

    <!-- TRUST + VIDEO -->
    <section class="dark-trust-section">
      <div class="container two-col">
        <div class="col-text">
          <h2 class="dark-heading">See Why Thousands Trust Us With Their Important Data</h2>
          <p class="dark-text">Data loss is stressful — but working with us doesn't have to be. Watch how our team handles each recovery with care, professionalism, and precision. From diagnostics to delivery, we offer flat-rate pricing, honest communication, and proven results — all from our secure Glendale lab.</p>
        </div>
        <div class="col-img">
          <div class="video-placeholder">
            <p class="video-phone">(888) 505-9999</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="light-section">
      <div class="container">
        <h2 class="section-heading center">Frequently Asked Questions</h2>
        <div class="faq-list">
          <div v-for="(faq, i) in faqs" :key="i" class="faq-item" :class="{ open: openFaq === i }">
            <button class="faq-q" @click="toggleFaq(i)">
              <span>{{ faq.q }}</span>
              <span class="faq-icon">{{ openFaq === i ? '−' : '+' }}</span>
            </button>
            <div v-if="openFaq === i" class="faq-a">{{ faq.a }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="light-alt-section">
      <div class="container">
        <h2 class="section-heading center">Testimonials from Satisfied Clients</h2>
        <div class="reviews-row">
          <div v-for="r in reviews" :key="r.name" class="review-card">
            <div class="review-avatar">👤</div>
            <p class="review-text">"{{ r.text }}"</p>
            <div class="review-stars">★★★★★</div>
            <div class="review-name">{{ r.name }}</div>
            <div class="review-loc">{{ r.location }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- BOTTOM YELLOW BAND -->
    <section class="yellow-band">
      <div class="container">
        <p class="yellow-band-text">Recovering what can't be replaced!</p>
      </div>
    </section>

    <FooterBar />
  </div>
</template>

<style scoped>
/* ---- BASE ---- */
.page-wd { font-family: 'Inter', sans-serif; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

/* ---- HERO ---- */
.hero-section { background: #1a1a2e; padding: 60px 0; }
.hero-inner { display: grid; grid-template-columns: 1fr 420px; gap: 48px; align-items: start; }
.hero-title { font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 900; color: #fff; line-height: 1.2; margin-bottom: 12px; }
.hero-sub { font-size: 1.1rem; color: #C9A84C; font-weight: 600; margin-bottom: 16px; }
.hero-desc { font-size: 0.95rem; color: rgba(255,255,255,0.72); line-height: 1.7; margin-bottom: 28px; }
.hero-actions { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 24px; }
.btn-primary-red { background: #e53e3e; color: #fff; padding: 14px 28px; border-radius: 6px; font-weight: 700; font-size: 0.95rem; text-decoration: none; display: inline-block; }
.btn-primary-red:hover { background: #c53030; }
.btn-secondary { background: transparent; color: #fff; border: 2px solid rgba(255,255,255,0.4); padding: 12px 24px; border-radius: 6px; font-weight: 600; font-size: 0.95rem; text-decoration: none; display: inline-block; }
.btn-secondary:hover { border-color: #fff; }
.hero-trust { display: flex; flex-wrap: wrap; gap: 12px 24px; }
.hero-trust span { font-size: 0.82rem; color: rgba(255,255,255,0.65); }

/* ---- FORM ---- */
.hero-form-wrap { position: relative; }
.hero-form-card { background: #fff; border-radius: 12px; padding: 28px; box-shadow: 0 8px 40px rgba(0,0,0,0.3); }
.form-title { font-size: 1rem; font-weight: 700; color: #1a1a2e; margin-bottom: 20px; }
.consult-form { display: flex; flex-direction: column; gap: 10px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.form-input { border: 1px solid #d1d5db; border-radius: 6px; padding: 10px 14px; font-size: 0.9rem; color: #1a1a2e; background: #fff; width: 100%; box-sizing: border-box; font-family: inherit; }
.form-input:focus { outline: none; border-color: #C9A84C; }
.form-input.full { width: 100%; }
.btn-form-submit { background: #C9A84C; color: #fff; border: none; border-radius: 6px; padding: 14px; font-size: 1rem; font-weight: 700; cursor: pointer; margin-top: 4px; font-family: inherit; }
.btn-form-submit:hover { background: #b8923e; }

/* ---- LIGHT SECTIONS ---- */
.light-section { background: #fff; padding: 72px 0; }
.light-alt-section { background: #f7f9fc; padding: 72px 0; }

/* ---- SECTION HEADINGS ---- */
.section-heading { font-size: clamp(1.5rem, 2.5vw, 2rem); font-weight: 800; color: #1a1a2e; margin-bottom: 16px; }
.section-heading.center { text-align: center; }
.section-heading-sm { font-size: 1.25rem; font-weight: 800; color: #1a1a2e; margin-bottom: 14px; }
.section-intro { font-size: 1rem; color: #4a5568; line-height: 1.7; margin-bottom: 40px; }
.section-intro.center { text-align: center; max-width: 700px; margin-left: auto; margin-right: auto; }
.body-text { font-size: 0.95rem; color: #4a5568; line-height: 1.8; margin-bottom: 16px; }

/* ---- ISSUES GRID ---- */
.issues-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 32px; }
.issue-card { }
.issue-title { font-size: 1rem; font-weight: 700; color: #1a1a2e; margin-bottom: 10px; }
.issue-text { font-size: 0.9rem; color: #4a5568; line-height: 1.7; }

/* ---- TWO COLUMN ---- */
.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }
.two-col.reverse { direction: rtl; }
.two-col.reverse > * { direction: ltr; }
.two-col-equal { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: start; }
.section-img { width: 100%; border-radius: 12px; display: block; object-fit: cover; max-height: 380px; }
.col-img { }
.col-text { }

/* ---- CAUSE LIST ---- */
.cause-list { list-style: none; padding: 0; margin: 0; }
.cause-list li { padding: 8px 0 8px 24px; position: relative; font-size: 0.93rem; color: #4a5568; border-bottom: 1px solid #e2e8f0; }
.cause-list li::before { content: '✓'; position: absolute; left: 0; color: #C9A84C; font-weight: 700; }

/* ---- PROCESS ---- */
.process-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 24px; margin-bottom: 32px; }
.process-card { background: #f7f9fc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 24px 20px; }
.step-label { font-size: 0.85rem; font-weight: 700; color: #C9A84C; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 10px; }
.step-text { font-size: 0.9rem; color: #4a5568; line-height: 1.7; }
.no-charge-note { background: #1a1a2e; color: #fff; text-align: center; padding: 16px 24px; border-radius: 8px; font-size: 0.95rem; }
.no-charge-note strong { color: #C9A84C; }

/* ---- DRIVE LIST ---- */
.drive-list { list-style: none; padding: 0; margin: 16px 0 0; }
.drive-list li { padding: 9px 0 9px 24px; position: relative; font-size: 0.93rem; color: #4a5568; border-bottom: 1px solid #e2e8f0; }
.drive-list li::before { content: '→'; position: absolute; left: 0; color: #C9A84C; }

/* ---- TIP LIST ---- */
.tip-list { list-style: none; padding: 0; margin: 12px 0 0; }
.tip-list li { padding: 7px 0 7px 22px; position: relative; font-size: 0.9rem; color: #4a5568; }
.tip-list li::before { content: '•'; position: absolute; left: 0; color: #C9A84C; font-weight: 700; }

/* ---- DARK CTA SECTION ---- */
.dark-cta-section { background: #2d3748; padding: 72px 0; }
.dark-heading { font-size: clamp(1.4rem, 2.5vw, 1.9rem); font-weight: 800; color: #fff; margin-bottom: 16px; }
.dark-text { font-size: 0.95rem; color: rgba(255,255,255,0.72); line-height: 1.8; margin-bottom: 14px; }

/* ---- CONTACT BAND ---- */
.contact-band { background: #1a1a2e; padding: 48px 0; }
.contact-band-inner { display: flex; justify-content: space-between; align-items: center; gap: 48px; flex-wrap: wrap; }
.contact-band-title { font-size: 1.5rem; font-weight: 800; color: #fff; margin-bottom: 12px; }
.contact-band-sub { font-size: 0.9rem; color: rgba(255,255,255,0.65); line-height: 1.7; margin-bottom: 16px; max-width: 540px; }
.contact-list { list-style: none; padding: 0; margin: 0; }
.contact-list li { padding: 5px 0 5px 20px; position: relative; font-size: 0.9rem; color: rgba(255,255,255,0.75); }
.contact-list li::before { content: '✓'; position: absolute; left: 0; color: #C9A84C; font-weight: 700; }
.contact-band-actions { display: flex; gap: 14px; flex-shrink: 0; flex-wrap: wrap; }
.btn-yellow { display: inline-block; background: #C9A84C; color: #fff; padding: 14px 28px; border-radius: 6px; font-weight: 800; font-size: 1rem; text-decoration: none; }
.btn-yellow:hover { background: #b8923e; }
.btn-outline-white { display: inline-block; border: 2px solid rgba(255,255,255,0.4); color: #fff; padding: 12px 24px; border-radius: 6px; font-weight: 600; font-size: 0.95rem; text-decoration: none; }
.btn-outline-white:hover { border-color: #fff; }

/* ---- DARK TRUST ---- */
.dark-trust-section { background: #1a1a2e; padding: 72px 0; }
.video-placeholder { background: #2d3748; border-radius: 12px; height: 280px; display: flex; align-items: center; justify-content: center; }
.video-phone { font-size: 1.5rem; font-weight: 800; color: #C9A84C; }

/* ---- FAQ ---- */
.faq-list { max-width: 800px; margin: 40px auto 0; display: flex; flex-direction: column; gap: 6px; }
.faq-item { border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; }
.faq-item.open { border-color: #C9A84C; }
.faq-q { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 18px 20px; background: none; border: none; color: #1a1a2e; font-size: 0.95rem; font-weight: 600; cursor: pointer; text-align: left; gap: 12px; font-family: inherit; }
.faq-icon { color: #C9A84C; font-size: 1.4rem; font-weight: 400; flex-shrink: 0; }
.faq-a { padding: 0 20px 18px; font-size: 0.9rem; color: #4a5568; line-height: 1.7; }

/* ---- REVIEWS ---- */
.reviews-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-top: 40px; }
.review-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 28px; box-shadow: 0 2px 12px rgba(0,0,0,0.06); }
.review-avatar { font-size: 2rem; margin-bottom: 12px; }
.review-text { font-size: 0.9rem; color: #4a5568; line-height: 1.7; margin-bottom: 16px; font-style: italic; }
.review-stars { color: #C9A84C; font-size: 1rem; margin-bottom: 8px; }
.review-name { font-weight: 700; color: #1a1a2e; font-size: 0.9rem; }
.review-loc { font-size: 0.82rem; color: #718096; }

/* ---- YELLOW BAND ---- */
.yellow-band { background: #C9A84C; padding: 24px 0; text-align: center; }
.yellow-band-text { font-size: 1.3rem; font-weight: 800; color: #fff; margin: 0; }

/* ---- RESPONSIVE ---- */
@media (max-width: 900px) {
  .hero-inner { grid-template-columns: 1fr; }
  .two-col { grid-template-columns: 1fr; }
  .two-col.reverse { direction: ltr; }
  .two-col-equal { grid-template-columns: 1fr; }
  .contact-band-inner { flex-direction: column; align-items: flex-start; }
  .process-row { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 600px) {
  .process-row { grid-template-columns: 1fr; }
  .form-row { grid-template-columns: 1fr; }
}
</style>
