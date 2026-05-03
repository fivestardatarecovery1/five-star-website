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

    <!-- ═══════════════ HERO ═══════════════ -->
    <section class="hero">
      <div class="hero-bg-overlay" />
      <div class="container hero-layout">
        <div class="hero-left">
          <div class="hero-eyebrow">Western Digital Recovery Specialists</div>
          <h1 class="hero-title">Western Digital Data Recovery Services</h1>
          <p class="hero-lead">Are you experiencing issues with your Western Digital (WD) hard drive? If you have a blinking light, a drive that won't mount, or files you can't access, our expert team can help. We offer professional Western Digital Data Recovery services to safely get your data back. If your files are valuable, don't risk it. Trust our specialists to get your information back.</p>
          <div class="hero-ctas">
            <NuxtLink to="/start-recovery" class="cta-red">Start Recovery</NuxtLink>
            <NuxtLink to="/data-recovery/free-quote" class="cta-ghost">Request a Quote</NuxtLink>
          </div>
          <div class="hero-badges">
            <div class="badge-pill">✔ Available 24/7/365</div>
            <div class="badge-pill">✔ Clean Room On-Site</div>
            <div class="badge-pill">✔ Flat Rate Pricing</div>
            <div class="badge-pill">✔ Free Nationwide Shipping</div>
          </div>
        </div>
        <div class="hero-right">
          <div class="form-card">
            <div class="form-card-header">
              <h3>Request a Free Consultation</h3>
              <p>Same-day response · No obligation</p>
            </div>
            <form @submit.prevent class="form-body">
              <div class="form-grid-2">
                <input type="text" placeholder="First Name" class="fi" />
                <input type="text" placeholder="Last Name" class="fi" />
              </div>
              <input type="email" placeholder="Email Address" class="fi" />
              <input type="tel" placeholder="Phone Number" class="fi" />
              <select class="fi">
                <option>Select Device Type</option>
                <option>Hard Drive (HDD)</option>
                <option>SSD</option>
                <option>External Drive</option>
                <option>RAID / NAS</option>
                <option>USB / Flash Drive</option>
                <option>Other</option>
              </select>
              <select class="fi">
                <option>Select Service Type</option>
                <option>Standard Service (3–5 days)</option>
                <option>Expedited Service (24–48 hrs)</option>
                <option>Expedited Plus (Same Day)</option>
              </select>
              <button type="submit" class="form-submit">Request a Consultation</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <StatsBar />

    <!-- ═══════════════ ISSUES — white, full width intro + 2×2 cards ═══════════════ -->
    <section class="s-white">
      <div class="container">
        <div class="section-label">Common Problems</div>
        <h2 class="s-heading">Common WD Hard Drive Issues</h2>
        <p class="s-intro">Western Digital drives are reliable, but they're not immune to failure. Whether it's a blinking light, a drive that won't mount, or files you can't access, our team is equipped to help.</p>
        <div class="issues-grid">
          <div v-for="issue in issues" :key="issue.title" class="issue-card">
            <div class="issue-num">●</div>
            <h3 class="issue-title">{{ issue.title }}</h3>
            <p class="issue-body">{{ issue.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ CAUSES — grey, asymmetric 3/5 col ═══════════════ -->
    <section class="s-grey">
      <div class="container asym-layout">
        <div class="asym-minor">
          <div class="section-label">Root Causes</div>
          <h2 class="s-heading">What Causes WD Drives to Fail?</h2>
          <p class="s-body">Western Digital drives can experience several common failure types. Some problems are software-related, like file system corruption or a failed operating system update. Other failures stem from physical damage, such as head crashes, bad sectors, or worn-out components. We also recover from accidental formatting, power surges, and damaged storage media devices that users improperly removed or mishandled.</p>
          <ul class="check-list">
            <li v-for="c in causes" :key="c">{{ c }}</li>
          </ul>
        </div>
        <div class="asym-major">
          <img src="/western-digital-data-recovery-service-los-angeles.jpg" alt="Western Digital hard drive data recovery" class="rounded-img" />
          <div class="img-stat-badge">
            <span class="stat-num">21,000+</span>
            <span class="stat-label">Successful Recoveries</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ PROCESS — white, numbered steps with connector line ═══════════════ -->
    <section class="s-white">
      <div class="container">
        <div class="section-label center">Our Process</div>
        <h2 class="s-heading center">How Our WD Data Recovery Process Works</h2>
        <p class="s-intro center">We use a consistent, proven approach for every Western Digital Data Recovery case. Here's a look at how Five Star Data Recovery gets your data back.</p>
        <div class="process-track">
          <div v-for="(step, i) in steps" :key="step.num" class="process-node">
            <div class="process-circle">{{ step.num }}</div>
            <div v-if="i < steps.length - 1" class="process-connector" />
            <h3 class="process-title">{{ step.title }}</h3>
            <p class="process-body">{{ step.text }}</p>
          </div>
        </div>
        <div class="guarantee-strip">
          <span class="guarantee-icon">🛡</span>
          <p><strong>No Data, No Charge Guarantee</strong> — If we can't recover your data, you owe nothing. No hidden fees, ever.</p>
        </div>
      </div>
    </section>

    <!-- ═══════════════ DRIVE TYPES — grey, image left (40%) + content right (60%) ═══════════════ -->
    <section class="s-grey">
      <div class="container split-60-40 reverse">
        <div class="split-main">
          <div class="section-label">Supported Devices</div>
          <h2 class="s-heading">Types of WD Drives We Recover</h2>
          <p class="s-body">We recover data from all Western Digital models, including internal SATA drives, external USB drives, and high-capacity enterprise units. Every WD drive type is supported.</p>
          <div class="drive-chips">
            <span v-for="d in driveTypes" :key="d" class="drive-chip">{{ d }}</span>
          </div>
        </div>
        <div class="split-side">
          <img src="/data-recovery-clean-room-technician-glendale-ca.jpg" alt="Clean room data recovery technician" class="rounded-img" />
        </div>
      </div>
    </section>

    <!-- ═══════════════ FULL-WIDTH BANNER — dark image overlay ═══════════════ -->
    <section class="fullwidth-banner">
      <div class="banner-overlay" />
      <div class="container banner-inner">
        <h2 class="banner-heading">Trusted by Thousands of Customers Nationwide</h2>
        <p class="banner-sub">From dropped drives to catastrophic RAID failures — we've seen it all and recovered it all. Free evaluation, flat-rate pricing, and a team that actually picks up the phone.</p>
        <div class="banner-stats">
          <div class="bstat"><span class="bstat-num">99%</span><span class="bstat-lbl">Recovery Success Rate</span></div>
          <div class="bstat-div" />
          <div class="bstat"><span class="bstat-num">3–5</span><span class="bstat-lbl">Day Standard Turnaround</span></div>
          <div class="bstat-div" />
          <div class="bstat"><span class="bstat-num">$0</span><span class="bstat-lbl">If We Can't Recover</span></div>
          <div class="bstat-div" />
          <div class="bstat"><span class="bstat-num">24/7</span><span class="bstat-lbl">Available Support</span></div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ TROUBLESHOOTING + WARRANTY — white, 2 equal cols ═══════════════ -->
    <section class="s-white">
      <div class="container dual-col">
        <div class="dual-box">
          <div class="dual-icon">🔧</div>
          <h3 class="dual-heading">Troubleshooting Tips for WD External Drives</h3>
          <p class="s-body">Before bringing your drive in, there are a few safe steps you can try. These won't risk your data and may save you a trip:</p>
          <ul class="arrow-list">
            <li v-for="tip in troubleshootingTips" :key="tip">{{ tip }}</li>
          </ul>
        </div>
        <div class="dual-box">
          <div class="dual-icon">📋</div>
          <h3 class="dual-heading">Warranty & Manufacturer Limitations</h3>
          <p class="s-body">In many cases, a WD drive failure occurs outside the standard warranty period, or the failure type isn't covered. Physical damage, logical failures, and accidental deletion are not covered under most manufacturer warranties. That's where Five Star Data Recovery steps in — we recover data regardless of warranty status, drive age, or failure cause.</p>
          <p class="s-body">In some cases, if your drive is still under warranty, WD may replace the hardware — but they will not recover your data. We do both: recover your data and help you understand your options.</p>
        </div>
      </div>
    </section>

    <!-- ═══════════════ WHY PRONE + AFTER — grey, 2 equal cols ═══════════════ -->
    <section class="s-grey">
      <div class="container dual-col">
        <div class="dual-box">
          <div class="dual-icon">⚠️</div>
          <h3 class="dual-heading">Why WD Drives Are Prone to Issues</h3>
          <p class="s-body">Western Digital drives, especially the WD My Passport and WD Elements series, use a USB-to-SATA bridge built directly into the drive enclosure. This means if the USB connector is damaged or the bridge chip fails, the data becomes inaccessible. Unlike standard internal drives, you can't simply remove the drive from the enclosure and connect it directly to a SATA port.</p>
          <p class="s-body">Additionally, WD uses SED (Self-Encrypting Drives) on many models, which adds complexity to the recovery process. Our lab is fully equipped to handle SED-locked and encrypted WD drives.</p>
        </div>
        <div class="dual-box">
          <div class="dual-icon">✅</div>
          <h3 class="dual-heading">What Happens After Recovery?</h3>
          <p class="s-body">Once our engineers complete the recovery, you'll receive a full list of recovered files for your review. Only after you confirm that your important files are present do we transfer the data to a new storage device.</p>
          <p class="s-body">We then ship the drive back to you via insured shipping — or you can pick it up at our Glendale, CA location. Payment is only collected after you've confirmed successful recovery.</p>
        </div>
      </div>
    </section>

    <!-- ═══════════════ DARK CTA + FORM ═══════════════ -->
    <section class="s-dark-cta">
      <div class="container cta-form-layout">
        <div class="cta-form-text">
          <div class="section-label light">Get Started</div>
          <h2 class="dark-heading">Need Help Understanding Your WD Drive?</h2>
          <p class="dark-body">If you're not sure what's wrong with your drive, our engineers are happy to help. Our free diagnostic will tell you exactly what failed and what it will take to recover your data. There's no obligation and no charge for the evaluation.</p>
          <p class="dark-body">Data loss is stressful — but working with us doesn't have to be. Watch how our team handles each recovery with care, professionalism, and precision. From diagnostics to delivery, we offer flat-rate pricing, honest communication, and proven results — all from our secure Glendale lab.</p>
          <div class="dark-features">
            <div class="df"><span class="df-check">✓</span> Free same-day evaluation</div>
            <div class="df"><span class="df-check">✓</span> Flat-rate pricing, no surprises</div>
            <div class="df"><span class="df-check">✓</span> No data recovered = no charge</div>
          </div>
        </div>
        <div class="cta-form-card">
          <div class="form-card-header">
            <h3>Get a Free Quote in Minutes!</h3>
            <p>No obligation · Same-day response</p>
          </div>
          <form @submit.prevent class="form-body">
            <div class="form-grid-2">
              <input type="text" placeholder="First Name" class="fi" />
              <input type="text" placeholder="Last Name" class="fi" />
            </div>
            <input type="email" placeholder="Email Address" class="fi" />
            <input type="tel" placeholder="Phone Number" class="fi" />
            <select class="fi">
              <option>Select Device Type</option>
              <option>Hard Drive (HDD)</option>
              <option>SSD</option>
              <option>External Drive</option>
            </select>
            <button type="submit" class="form-submit">Request a Consultation</button>
          </form>
        </div>
      </div>
    </section>

    <!-- ═══════════════ CONTACT BAND ═══════════════ -->
    <section class="s-contact-band">
      <div class="container contact-layout">
        <div class="contact-text">
          <h2 class="contact-heading">Contact Us for Western Digital Data Recovery</h2>
          <p class="contact-sub">Data loss is stressful — but working with us doesn't have to be. From diagnostics to delivery, we offer flat-rate pricing, honest communication, and proven results — all from our secure Glendale lab.</p>
          <ul class="contact-bullets">
            <li>Visit our lab in Glendale, CA</li>
            <li>Mail your drive to us from anywhere in the U.S.</li>
            <li>Call us today for a free evaluation</li>
          </ul>
        </div>
        <div class="contact-actions">
          <a href="tel:8182728866" class="btn-gold-lg">📞 818-272-8866</a>
          <NuxtLink to="/data-recovery/free-quote" class="btn-ghost-lg">Get Free Quote</NuxtLink>
        </div>
      </div>
    </section>

    <!-- ═══════════════ TRUST / IMAGE BAND — image placeholder ═══════════════ -->
    <section class="s-white">
      <div class="container split-60-40">
        <div class="split-main">
          <div class="section-label">Why Choose Us</div>
          <h2 class="s-heading">See Why Thousands Trust Us With Their Important Data</h2>
          <p class="s-body">Data loss is stressful — but working with us doesn't have to be. Watch how our team handles each recovery with care, professionalism, and precision. From diagnostics to delivery, we offer flat-rate pricing, honest communication, and proven results — all from our secure Glendale lab.</p>
          <NuxtLink to="/reviews" class="inline-link">Read All Reviews →</NuxtLink>
        </div>
        <div class="split-side">
          <img src="/five-star-data-recovery-lab-technician-glendale-ca.png" alt="Five Star Data Recovery lab technician" class="rounded-img" />
        </div>
      </div>
    </section>

    <!-- ═══════════════ FAQ — grey ═══════════════ -->
    <section class="s-grey">
      <div class="container">
        <div class="section-label center">Got Questions?</div>
        <h2 class="s-heading center">Frequently Asked Questions</h2>
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

    <!-- ═══════════════ REVIEWS — white, 3 cards ═══════════════ -->
    <section class="s-white">
      <div class="container">
        <div class="section-label center">Client Stories</div>
        <h2 class="s-heading center">Testimonials from Satisfied Clients</h2>
        <div class="reviews-grid">
          <div v-for="r in reviews" :key="r.name" class="review-card">
            <div class="review-quote">"</div>
            <p class="review-body">{{ r.text }}</p>
            <div class="review-footer">
              <div class="review-stars">★★★★★</div>
              <div class="review-meta">
                <strong class="review-name">{{ r.name }}</strong>
                <span class="review-loc">{{ r.location }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ BOTTOM BAND ═══════════════ -->
    <section class="bottom-band">
      <div class="container">
        <p class="bottom-band-text">Recovering what can't be replaced!</p>
        <NuxtLink to="/start-recovery" class="bottom-band-btn">Start Your Recovery Today</NuxtLink>
      </div>
    </section>

    <FooterBar />
  </div>
</template>

<style scoped>
/* ─── RESET & BASE ─── */
*, *::before, *::after { box-sizing: border-box; }
.page-wd { font-family: 'Inter', sans-serif; color: #1a1a2e; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 28px; }

/* ─── HERO ─── */
.hero { position: relative; background: #0d111f; padding: 80px 0 72px; overflow: hidden; }
.hero-bg-overlay {
  position: absolute; inset: 0;
  background: radial-gradient(ellipse at 70% 50%, rgba(201,168,76,0.08) 0%, transparent 60%),
              linear-gradient(135deg, #0d111f 0%, #151c35 100%);
}
.hero-layout { position: relative; display: grid; grid-template-columns: 1fr 400px; gap: 56px; align-items: start; }
.hero-eyebrow { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #C9A84C; margin-bottom: 14px; }
.hero-title { font-size: clamp(1.9rem, 3.5vw, 2.8rem); font-weight: 900; color: #fff; line-height: 1.15; margin-bottom: 18px; }
.hero-lead { font-size: 1rem; color: rgba(255,255,255,0.68); line-height: 1.75; margin-bottom: 32px; max-width: 560px; }
.hero-ctas { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 28px; }
.cta-red { display: inline-block; background: #e53e3e; color: #fff; padding: 14px 30px; border-radius: 7px; font-weight: 700; font-size: 0.95rem; text-decoration: none; transition: background 0.2s; }
.cta-red:hover { background: #c53030; }
.cta-ghost { display: inline-block; border: 2px solid rgba(255,255,255,0.3); color: #fff; padding: 12px 26px; border-radius: 7px; font-weight: 600; font-size: 0.95rem; text-decoration: none; transition: border-color 0.2s; }
.cta-ghost:hover { border-color: #fff; }
.hero-badges { display: flex; flex-wrap: wrap; gap: 8px; }
.badge-pill { font-size: 0.78rem; color: rgba(255,255,255,0.6); background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 5px 14px; border-radius: 20px; }

/* ─── FORM CARD ─── */
.form-card { background: #fff; border-radius: 14px; overflow: hidden; box-shadow: 0 16px 48px rgba(0,0,0,0.35); }
.form-card-header { background: #1a1a2e; padding: 20px 24px; }
.form-card-header h3 { color: #fff; font-size: 1rem; font-weight: 700; margin: 0 0 4px; }
.form-card-header p { color: rgba(255,255,255,0.5); font-size: 0.78rem; margin: 0; }
.form-body { display: flex; flex-direction: column; gap: 10px; padding: 20px 24px 24px; }
.form-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.fi { border: 1.5px solid #e2e8f0; border-radius: 7px; padding: 11px 14px; font-size: 0.88rem; color: #1a1a2e; background: #fff; width: 100%; font-family: inherit; transition: border-color 0.2s; }
.fi:focus { outline: none; border-color: #C9A84C; }
.form-submit { background: #C9A84C; color: #fff; border: none; border-radius: 7px; padding: 14px; font-size: 0.95rem; font-weight: 700; cursor: pointer; font-family: inherit; transition: background 0.2s; }
.form-submit:hover { background: #b8923e; }

/* ─── SECTION SCAFFOLDING ─── */
.s-white { background: #fff; padding: 88px 0; }
.s-grey  { background: #f4f7fc; padding: 88px 0; }

/* ─── SECTION LABELS & HEADINGS ─── */
.section-label { font-size: 0.72rem; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; color: #C9A84C; margin-bottom: 10px; }
.section-label.center, .s-heading.center, .s-intro.center { text-align: center; }
.section-label.light { color: #C9A84C; }
.s-heading { font-size: clamp(1.5rem, 2.8vw, 2.1rem); font-weight: 900; color: #1a1a2e; line-height: 1.25; margin-bottom: 14px; }
.s-intro { font-size: 1rem; color: #4a5568; line-height: 1.75; margin-bottom: 48px; }
.s-intro.center { max-width: 680px; margin-left: auto; margin-right: auto; }
.s-body { font-size: 0.94rem; color: #4a5568; line-height: 1.8; margin-bottom: 16px; }

/* ─── ISSUES GRID ─── */
.issues-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 28px; margin-top: 8px; }
.issue-card { border-left: 3px solid #C9A84C; padding: 20px 24px; background: #f9fafb; border-radius: 0 10px 10px 0; }
.issue-num { font-size: 0.7rem; color: #C9A84C; font-weight: 900; letter-spacing: 0.1em; margin-bottom: 8px; }
.issue-title { font-size: 1rem; font-weight: 700; color: #1a1a2e; margin-bottom: 10px; line-height: 1.35; }
.issue-body { font-size: 0.88rem; color: #4a5568; line-height: 1.7; }

/* ─── ASYMMETRIC LAYOUT (3 col text / 5 col image) ─── */
.asym-layout { display: grid; grid-template-columns: 2fr 3fr; gap: 64px; align-items: center; }
.asym-minor {}
.asym-major { position: relative; }
.rounded-img { width: 100%; border-radius: 14px; display: block; object-fit: cover; max-height: 420px; }
.img-stat-badge { position: absolute; bottom: -20px; left: 24px; background: #C9A84C; color: #fff; border-radius: 10px; padding: 14px 22px; box-shadow: 0 8px 24px rgba(201,168,76,0.4); }
.stat-num { display: block; font-size: 1.6rem; font-weight: 900; line-height: 1; }
.stat-label { display: block; font-size: 0.75rem; font-weight: 600; opacity: 0.85; margin-top: 3px; }

/* ─── CHECK LIST ─── */
.check-list { list-style: none; padding: 0; margin: 20px 0 0; }
.check-list li { padding: 9px 0 9px 26px; position: relative; font-size: 0.91rem; color: #4a5568; border-bottom: 1px solid #e8ecf2; }
.check-list li::before { content: '✓'; position: absolute; left: 0; color: #C9A84C; font-weight: 700; }

/* ─── PROCESS STEPS ─── */
.process-track { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; position: relative; margin: 8px 0 36px; }
.process-node { position: relative; padding: 0 16px; text-align: center; }
.process-circle { width: 56px; height: 56px; border-radius: 50%; background: #1a1a2e; color: #C9A84C; font-size: 1.1rem; font-weight: 900; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; border: 2px solid #C9A84C; }
.process-connector { position: absolute; top: 27px; left: calc(50% + 28px); width: calc(100% - 56px); height: 2px; background: linear-gradient(90deg, #C9A84C, rgba(201,168,76,0.3)); }
.process-title { font-size: 0.85rem; font-weight: 700; color: #1a1a2e; margin-bottom: 10px; line-height: 1.3; }
.process-body { font-size: 0.83rem; color: #4a5568; line-height: 1.65; }
.guarantee-strip { background: #1a1a2e; border-radius: 10px; padding: 18px 28px; display: flex; align-items: center; gap: 16px; }
.guarantee-icon { font-size: 1.5rem; flex-shrink: 0; }
.guarantee-strip p { margin: 0; color: rgba(255,255,255,0.8); font-size: 0.92rem; line-height: 1.5; }
.guarantee-strip strong { color: #C9A84C; }

/* ─── 60/40 SPLIT ─── */
.split-60-40 { display: grid; grid-template-columns: 3fr 2fr; gap: 64px; align-items: center; }
.split-60-40.reverse { grid-template-columns: 2fr 3fr; }
.split-60-40.reverse .split-main { order: 2; }
.split-60-40.reverse .split-side { order: 1; }

/* ─── DRIVE CHIPS ─── */
.drive-chips { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 20px; }
.drive-chip { background: #fff; border: 1.5px solid #e2e8f0; border-radius: 20px; padding: 7px 16px; font-size: 0.84rem; color: #2d3748; font-weight: 500; }

/* ─── FULL-WIDTH BANNER ─── */
.fullwidth-banner { position: relative; background: #0d111f; padding: 72px 0; overflow: hidden; }
.banner-overlay { position: absolute; inset: 0; background: url('/hard-drive-data-recovery-specialist-glendale-ca.jpg') center/cover no-repeat; opacity: 0.12; }
.banner-inner { position: relative; text-align: center; }
.banner-heading { font-size: clamp(1.6rem, 3vw, 2.4rem); font-weight: 900; color: #fff; margin-bottom: 14px; }
.banner-sub { font-size: 1rem; color: rgba(255,255,255,0.65); max-width: 620px; margin: 0 auto 48px; line-height: 1.7; }
.banner-stats { display: flex; align-items: center; justify-content: center; gap: 0; flex-wrap: wrap; }
.bstat { text-align: center; padding: 0 40px; }
.bstat-num { display: block; font-size: 2.2rem; font-weight: 900; color: #C9A84C; line-height: 1; margin-bottom: 6px; }
.bstat-lbl { display: block; font-size: 0.82rem; color: rgba(255,255,255,0.6); }
.bstat-div { width: 1px; height: 48px; background: rgba(255,255,255,0.15); }

/* ─── DUAL COLUMNS ─── */
.dual-col { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
.dual-box { background: #fff; border: 1px solid #e8ecf2; border-radius: 14px; padding: 36px; }
.s-grey .dual-box { background: #fff; }
.dual-icon { font-size: 2rem; margin-bottom: 14px; }
.dual-heading { font-size: 1.1rem; font-weight: 800; color: #1a1a2e; margin-bottom: 14px; }

/* ─── ARROW LIST ─── */
.arrow-list { list-style: none; padding: 0; margin: 12px 0 0; }
.arrow-list li { padding: 8px 0 8px 22px; position: relative; font-size: 0.88rem; color: #4a5568; }
.arrow-list li::before { content: '→'; position: absolute; left: 0; color: #C9A84C; font-weight: 700; }

/* ─── DARK CTA SECTION ─── */
.s-dark-cta { background: linear-gradient(135deg, #0d111f, #1a2540); padding: 88px 0; }
.cta-form-layout { display: grid; grid-template-columns: 1fr 380px; gap: 64px; align-items: start; }
.dark-heading { font-size: clamp(1.5rem, 2.5vw, 2rem); font-weight: 900; color: #fff; margin-bottom: 18px; line-height: 1.25; }
.dark-body { font-size: 0.94rem; color: rgba(255,255,255,0.66); line-height: 1.8; margin-bottom: 14px; }
.dark-features { margin-top: 24px; display: flex; flex-direction: column; gap: 10px; }
.df { font-size: 0.9rem; color: rgba(255,255,255,0.8); display: flex; align-items: center; gap: 10px; }
.df-check { color: #C9A84C; font-weight: 700; font-size: 1rem; }
.cta-form-card { }

/* ─── CONTACT BAND ─── */
.s-contact-band { background: #1a1a2e; padding: 64px 0; }
.contact-layout { display: flex; justify-content: space-between; align-items: center; gap: 48px; flex-wrap: wrap; }
.contact-heading { font-size: clamp(1.3rem, 2.5vw, 1.8rem); font-weight: 900; color: #fff; margin-bottom: 12px; }
.contact-sub { font-size: 0.9rem; color: rgba(255,255,255,0.6); line-height: 1.7; margin-bottom: 16px; max-width: 520px; }
.contact-bullets { list-style: none; padding: 0; margin: 0; }
.contact-bullets li { padding: 5px 0 5px 22px; position: relative; font-size: 0.88rem; color: rgba(255,255,255,0.7); }
.contact-bullets li::before { content: '✓'; position: absolute; left: 0; color: #C9A84C; font-weight: 700; }
.contact-actions { display: flex; flex-direction: column; gap: 12px; flex-shrink: 0; }
.btn-gold-lg { display: inline-block; background: #C9A84C; color: #fff; padding: 16px 32px; border-radius: 8px; font-weight: 800; font-size: 1rem; text-decoration: none; text-align: center; transition: background 0.2s; white-space: nowrap; }
.btn-gold-lg:hover { background: #b8923e; }
.btn-ghost-lg { display: inline-block; border: 2px solid rgba(255,255,255,0.3); color: #fff; padding: 14px 28px; border-radius: 8px; font-weight: 600; font-size: 0.95rem; text-decoration: none; text-align: center; transition: border-color 0.2s; }
.btn-ghost-lg:hover { border-color: #fff; }

/* ─── INLINE LINK ─── */
.inline-link { font-size: 0.9rem; font-weight: 700; color: #C9A84C; text-decoration: none; border-bottom: 1px solid #C9A84C; padding-bottom: 2px; display: inline-block; margin-top: 12px; }

/* ─── FAQ ─── */
.faq-wrap { max-width: 820px; margin: 40px auto 0; display: flex; flex-direction: column; gap: 8px; }
.faq-row { border: 1.5px solid #e2e8f0; border-radius: 10px; overflow: hidden; background: #fff; }
.faq-row.active { border-color: #C9A84C; }
.faq-trigger { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 18px 22px; background: none; border: none; color: #1a1a2e; font-size: 0.93rem; font-weight: 600; cursor: pointer; text-align: left; gap: 16px; font-family: inherit; }
.faq-toggle { color: #C9A84C; font-size: 1.4rem; font-weight: 300; flex-shrink: 0; line-height: 1; }
.faq-answer { padding: 0 22px 18px; font-size: 0.88rem; color: #4a5568; line-height: 1.75; border-top: 1px solid #f0f2f7; }

/* ─── REVIEWS ─── */
.reviews-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 44px; }
.review-card { background: #fff; border: 1.5px solid #e8ecf2; border-radius: 14px; padding: 32px 28px; display: flex; flex-direction: column; box-shadow: 0 2px 16px rgba(0,0,0,0.05); }
.review-quote { font-size: 3.5rem; color: #C9A84C; line-height: 0.8; margin-bottom: 14px; font-family: Georgia, serif; }
.review-body { font-size: 0.9rem; color: #4a5568; line-height: 1.75; flex: 1; font-style: italic; margin-bottom: 20px; }
.review-footer { border-top: 1px solid #f0f2f7; padding-top: 16px; display: flex; align-items: center; justify-content: space-between; }
.review-stars { color: #C9A84C; font-size: 0.95rem; letter-spacing: 2px; }
.review-meta { text-align: right; }
.review-name { display: block; font-size: 0.88rem; font-weight: 700; color: #1a1a2e; }
.review-loc { display: block; font-size: 0.78rem; color: #718096; margin-top: 2px; }

/* ─── BOTTOM BAND ─── */
.bottom-band { background: #C9A84C; padding: 40px 0; text-align: center; }
.bottom-band-text { font-size: clamp(1.2rem, 2.5vw, 1.6rem); font-weight: 900; color: #fff; margin: 0 0 16px; }
.bottom-band-btn { display: inline-block; background: #fff; color: #C9A84C; padding: 13px 32px; border-radius: 7px; font-weight: 800; font-size: 0.95rem; text-decoration: none; transition: opacity 0.2s; }
.bottom-band-btn:hover { opacity: 0.9; }

/* ─── RESPONSIVE ─── */
@media (max-width: 1024px) {
  .hero-layout { grid-template-columns: 1fr 360px; gap: 40px; }
  .asym-layout { grid-template-columns: 1fr 1fr; }
  .process-track { grid-template-columns: 1fr 1fr; gap: 24px; }
  .process-connector { display: none; }
}
@media (max-width: 768px) {
  .hero-layout, .asym-layout, .split-60-40, .split-60-40.reverse,
  .cta-form-layout, .dual-col { grid-template-columns: 1fr; gap: 36px; }
  .split-60-40.reverse .split-main,
  .split-60-40.reverse .split-side { order: unset; }
  .contact-layout { flex-direction: column; align-items: flex-start; }
  .reviews-grid { grid-template-columns: 1fr; }
  .banner-stats { gap: 24px; }
  .bstat-div { display: none; }
  .img-stat-badge { bottom: 12px; }
}
@media (max-width: 480px) {
  .form-grid-2 { grid-template-columns: 1fr; }
  .process-track { grid-template-columns: 1fr; }
}
</style>
