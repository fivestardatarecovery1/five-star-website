<script setup lang="ts">
useSeoMeta({
  title: 'Western Digital Data Recovery Services — Five Star Data Recovery',
  description: 'Are you experiencing issues with your Western Digital (WD) hard drive? If you have a blinking light, a drive that won\'t mount, or files you can\'t access, our expert team can help.'
})

const issues = [
  {
    icon: '🔌',
    title: 'My Passport Hard Drive Light Blinking But Not Working',
    text: 'If your WD My Passport drive is blinking but not recognized by your computer, it may have a power issue. It could also have a damaged USB interface or corrupted firmware. In many cases, the drive may still spin up, but it fails to establish a proper connection with the system. This problem often happens with portable WD drives. These drives use small electronics and one USB cable for power and data. If you\'ve tried switching cables and ports without success, the failure is likely internal. Avoid repeated attempts to connect and seek help from a professional.'
  },
  {
    icon: '🔍',
    title: 'WD Hard Drive Not Showing Up',
    text: 'When your Western Digital hard drive is not appearing, it can be frustrating—and concerning. Often, this points to logical errors like corrupted partitions, missing drive letters, or a faulty file system. In other cases, hardware damage may be to blame. If the drive does not appear in Disk Management or Device Manager, it may have PCB damage, bad heads, or other physical problems. This type of failure usually requires specialized tools and cleanroom access to properly diagnose and recover the data.'
  },
  {
    icon: '⚠️',
    title: 'WD External Hard Drive Show Errors',
    text: 'Sometimes your WD external hard drive shows errors; it might appear in your system but request formatting or arrive as RAW. These signs typically indicate file system corruption, often caused by improper removal, bad sectors, or interrupted file transfers. Although it might seem like a quick fix, formatting the drive can permanently overwrite your files. In most cases, the data is still there but just not accessible through standard means. Our engineers can extract the data using non-destructive recovery techniques tailored to Western Digital File Recovery.'
  },
  {
    icon: '🔊',
    title: 'Clicking or Beeping Sounds',
    text: 'If your drive makes clicking or beeping sounds, you should never ignore this red flag. These noises often come from a problem inside the hard drive. This can happen if the read/write head is stuck or failing. It keeps trying to find data but cannot succeed. Engineers make WD hard drives with care. However, if something goes wrong inside, using it can quickly damage the platter. This kind of failure usually requires head replacement or advanced cleanroom repair. Shut off the device immediately and contact a Western Digital Data Recovery professional before the situation worsens.'
  }
]

const causesIntro = 'Western Digital drives fail for many reasons—some sudden, some progressive. Here are common causes:'
const causesOutro = 'Even routine use can lead to data loss over time. That\'s why it\'s critical to address early signs of failure immediately.'

const causes = [
  'Physical damage from accidental drops or impact',
  'Power surges damaging internal components or the PCB',
  'Corrupted firmware or partition tables',
  'Exposure to heat or water',
  'Virus or malware affecting the drive\'s boot or partition info',
  'Bad sectors develop over time because of wear and tear.'
]

const processIntro = 'Our data recovery process is built around security, transparency, and peace of mind. From start to finish, we keep you informed with clear updates at every stage.'

const steps = [
  {
    num: '01',
    title: 'Step 1: Free Diagnostic',
    text: 'We examine the drive to determine the failure type—physical, logical, or both. If the drive is clicking, beeping, or not powering on, we proceed with care.'
  },
  {
    num: '02',
    title: 'Step 2: Cleanroom Imaging',
    text: 'If needed, the drive is opened in our certified cleanroom. Using a matching donor part, we attempt to stabilize the drive and create a sector-by-sector image.'
  },
  {
    num: '03',
    title: 'Step 3: File Extraction',
    text: 'Once stable, we extract and verify the data using advanced recovery hardware and software. We click "recover" only after imaging to avoid damage to the original device.'
  },
  {
    num: '04',
    title: 'Step 4: File Verification & Delivery',
    text: 'Once the recovery is complete, we\'ll send you a Interactive HTML File Report of the recovery. This report will show you which files we successfully recovered and which ones we did not recover (if any data loss occurred). Once you approve, we save your files onto a new device that you provide or purchase from us.'
  }
]

const driveTypesIntro = 'We can recover data from all major Western Digital products, including:'
const driveTypesOutro = 'Whether it\'s an older backup drive or a new portable storage device, we\'ve got you covered.'

const driveTypes = [
  'WD My Passport (Ultra, for Mac, SSD)',
  'WD Elements Portable and Desktop',
  'WD Black, Blue, and Green Series',
  'WD My Book and My Cloud',
  'WD Easystore Drives',
  'Internal SATA, PATA, and IDE models',
  'External and encrypted drives'
]

const troubleshootingIntro = 'Before bringing your WD drive to us, here are a few basic checks:'
const troubleshootingOutro = 'If your drive still doesn\'t work or makes unusual noises, stop using it to prevent permanent data loss.'

const troubleshootingTips = [
  'Try using a different USB cable or USB port',
  'Plug the WD External Hard Drive directly into the motherboard port, not a hub',
  'Open Disk Management in Windows to check if the drive is visible but unallocated',
  'Use Device Manager to check for driver issues',
  'Plug the drive to your computer on a different system, if available'
]

const warrantyText = [
  'Many people assume that if their WD drive fails, they can simply return it under warranty to recover their data. Unfortunately, this isn\'t true. Western Digital\'s warranty usually covers hardware replacement—not data recovery services.',
  'In most cases, if you return the drive to the manufacturer, they will wipe or destroy your data. It\'s important to talk to a professional data recovery lab before doing anything about your warranty.'
]

const whyProneText = [
  'Western Digital is one of the biggest drive makers in the world. However, like all mass-produced electronics, their drives can have flaws over time. Heat buildup, vibration, long-term use, and even minor manufacturing defects can all contribute to premature failure.',
  'Portable models, like the WD My Passport, can have USB connection issues. This is often because of their small design. Desktop models might be more vulnerable to bad sectors caused by power surges or improper shutdowns.'
]

const afterRecoveryText = [
  'Once we complete the recovery process, we transfer your verified files to a clean, functioning drive. You can supply your own replacement drive or purchase one directly from us.',
  'We will help you recover data from WD hard drives after a failure. We will guide you through safe steps, from diagnosis to file delivery. We strongly recommend backing up your recovered files in at least two locations moving forward. That way, you\'ll never have to go through another drive recovery process again.'
]

const needHelpText = [
  'It can be confusing to figure out what is wrong with your drive. This is especially true when it acts differently on different computers.',
  'If your WD drive works on one computer but not on another, it may have a problem. Unusual clicking or buzzing sounds are also early signs of a hardware issue. Stopping the use of the drive and getting it checked before the damage worsens is best.',
  'We\'re happy to answer your questions, explain the recovery process, and even show you examples of common failures. From firmware corruption to head crashes, we break it down in simple terms.'
]

const contactText = 'If your WD hard drive is not showing up, making strange noises, or failing to open files, don\'t ignore the warning signs. Acting early gives you the best chance of recovering your data safely and completely.'
const contactList = [
  'Visit our lab in Glendale, CA',
  'Mail your drive to us from anywhere in the U.S.',
  'Call us today for a free evaluation'
]
const contactOutro = 'Trust our experts for fast, secure, and professional western digital data recovery—and get back what matters most.'

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
    text: 'Another lab gave up on my WD drive, but Five Star was able to recover most of my data. They know Western Digital drives inside and out. Transparent pricing, no pressure, and professional from start to finish. (They did charge me a "drive cover opened fee" since another company had attempted a head swap).'
  }
]

const faqs = [
  { q: '1. What types of Western Digital drives do you recover data from?', a: 'We recover data from all Western Digital devices, including WD My Passport, WD Elements, WD My Book, WD Blue, WD Black, WD Red, and enterprise-level WD drives. Whether it\'s an internal drive or WD external hard drive, we have the tools and expertise to recover your data.' },
  { q: '2. My WD external hard drive is not showing up — can you recover the data?', a: 'Yes. If your WD external hard drive is not showing up, it could be due to physical damage, logical errors, file system corruption, or PCB failure. We specialize in identifying the root cause and performing safe and effective WD data recovery to retrieve your files.' },
  { q: '3. Can you recover data from a Western Digital drive with a clicking or buzzing noise?', a: 'Absolutely. A clicking WD hard drive often indicates internal mechanical failure, such as a damaged read/write head or spindle issue. These cases require cleanroom recovery and advanced tools — all of which we offer in-house at our recovery lab.' },
  { q: '4. How long does Western Digital data recovery take?', a: 'Standard WD data recovery services are typically completed within 3–5 business days. If you\'re in a rush, we also offer <a href="/expedited-service" class="faq-link">Expedited</a> and <a href="/expedited-service-plus" class="faq-link">Expedited Plus</a> options for faster turnaround. Initial diagnostics are always completed same day, by midnight.' },
  { q: '5. Do you offer a No Data, No Charge policy for WD data recovery?', a: 'Yes. Most Western Digital recovery cases qualify for our No Data, No Charge guarantee. If we\'re unable to recover your files, you pay nothing. Exceptions may apply in special cases like deleted file recovery or devices with prior tampering.' },
  { q: '6. I dropped my WD My Passport — can you still recover the data?', a: 'Yes. Dropped drives often suffer from physical damage, such as damaged heads or platter alignment issues. Our team can safely perform recovery using drive-specific tools and firmware repair procedures to extract your files.' },
  { q: '7. Is my data secure during the WD recovery process?', a: 'Absolutely. Your data is treated with strict confidentiality. We never share or access your files beyond what\'s required to complete recovery. Once recovery is done, your files are returned to you on a secure drive.' },
  { q: '8. What will the recovered data be returned on?', a: 'We typically transfer your recovered files to a brand new external drive you provide. If you prefer to purchase a transfer drive from us, please let us know at the time of checking in your case.' },
  { q: '9. How much does Western Digital data recovery cost?', a: 'At Five Star Data Recovery, Western Digital data recovery is offered at flat-rate pricing based on the drive type and storage capacity: $300.00 – For standard Western Digital SATA drives (laptop or desktop models) under 2TB. $500.00 – For WD SATA drives larger than 2TB, where the higher capacity requires longer imaging time and additional resources. $600.00 – For Western Digital external hard drives with USB 3.0 connectors. These drives are more complex to work with because they do not have a standard SATA connection and are often SED-locked, requiring specialized tools and techniques to access the data. $800.00 – For ultra high-capacity Western Digital drives (over 12TB). These cases require significantly more time and storage resources due to their size and complexity. We provide a free evaluation before starting, and there are no hidden fees. You\'ll only be charged if the data is successfully recovered — we follow a strict no data, no charge policy. To see a full breakdown of recovery options, visit our <a href="/pricing" class="faq-link">data recovery cost page</a>.' },
  { q: '10. Can I drop off or mail in my WD drive?', a: 'Yes! You can visit us in person at our Glendale, CA office, or start a case remotely using our <a href="/data-recovery/mail-in-service" class="faq-link">Mail-In Recovery Form</a>. We provide free shipping both ways for mail-in clients across the U.S.' }
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-wd">
    <NavBar />

    <!-- HERO — uses shared HeroSection component with page-specific bg image -->
    <HeroSection
      title="Western Digital Data Recovery Services"
      subtitle="Get Your Data Back In No Time."
      description="Are you experiencing issues with your Western Digital (WD) hard drive? If you have a blinking light, a drive that won't mount, or files you can't access, our expert team can help. We offer professional Western Digital Data Recovery services to safely get your data back. If your files are valuable, don't risk it. Trust our specialists to get your information back."
      bgImage="/western-digital-data-recovery-service-los-angeles.jpg"
    />

    <StatsBar />

    <!-- ISSUES — white -->
    <section class="s-white">
      <div class="container">
        <div class="section-label">Common Problems</div>
        <h2 class="s-heading">Common WD Hard Drive Issues</h2>
        <p class="s-intro">Western Digital drives are popular and generally reliable. However, like any electronic device, they can fail unexpectedly. Recognizing early warning signs can help prevent permanent data loss. Some of the most common symptoms we see include:</p>
        <div class="issues-grid">
          <div v-for="issue in issues" :key="issue.title" class="issue-card">
            <div class="issue-icon">{{ issue.icon }}</div>
            <h3 class="issue-title">{{ issue.title }}</h3>
            <p class="issue-body">{{ issue.text }}</p>
          </div>
        </div>
        <p class="s-outro">No matter the issue, our engineers have the tools and experience to perform a complete drive recovery. If your WD drive has logical damage or physical failure, we will help recover your data safely and securely.</p>
      </div>
    </section>

    <!-- CAUSES — grey, asymmetric 2/3 -->
    <section class="s-grey">
      <div class="container asym-layout">
        <div class="asym-minor">
          <div class="section-label">Root Causes</div>
          <h2 class="s-heading">What Causes WD Drives to Fail?</h2>
          <p class="s-body">{{ causesIntro }}</p>
          <ul class="check-list">
            <li v-for="c in causes" :key="c">{{ c }}</li>
          </ul>
          <p class="s-body s-mt">{{ causesOutro }}</p>
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

    <!-- PROCESS — white -->
    <section class="s-white">
      <div class="container">
        <div class="section-label center">Our Process</div>
        <h2 class="s-heading center">How Our WD Data Recovery Process Works</h2>
        <p class="s-intro center">{{ processIntro }}</p>
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
          <p><strong>No Data, No Charge Guarantee</strong> — If we can't recover your data, you owe nothing. <em>(most cases)</em></p>
        </div>
      </div>
    </section>

    <!-- DRIVE TYPES — grey, image left 40% / content right 60% -->
    <section class="s-grey">
      <div class="container split-40-60">
        <div class="split-side">
          <img src="/data-recovery-clean-room-technician-glendale-ca.jpg" alt="Clean room data recovery technician" class="rounded-img" />
        </div>
        <div class="split-main">
          <div class="section-label">Supported Devices</div>
          <h2 class="s-heading">Types of WD Drives We Recover</h2>
          <p class="s-body">{{ driveTypesIntro }}</p>
          <table class="drives-table">
            <tbody>
              <tr v-for="(_, i) in Array.from({length: Math.ceil(driveTypes.length / 2)})" :key="i">
                <td class="drive-cell"><span class="drive-check">✓</span> {{ driveTypes[i * 2] }}</td>
                <td class="drive-cell" v-if="driveTypes[i * 2 + 1]"><span class="drive-check">✓</span> {{ driveTypes[i * 2 + 1] }}</td>
                <td v-else />
              </tr>
            </tbody>
          </table>
          <p class="s-body s-mt">{{ driveTypesOutro }}</p>
        </div>
      </div>
    </section>

    <!-- FULL-WIDTH BANNER — dark image overlay -->
    <section class="fullwidth-banner">
      <div class="banner-overlay" />
      <div class="container banner-inner">
        <h2 class="banner-heading">See Why Thousands Trust Us With Their Important Data</h2>
        <p class="banner-sub">Data loss is stressful — but working with us doesn't have to be. Watch how our team handles each recovery with care, professionalism, and precision. From diagnostics to delivery, we offer flat-rate pricing, honest communication, and proven results — all from our secure Glendale lab.</p>
        <div class="banner-stats">
          <div class="bstat"><span class="bstat-num">99%</span><span class="bstat-lbl">Recovery Success Rate</span></div>
          <div class="bstat-div" />
          <div class="bstat"><span class="bstat-num">3–5</span><span class="bstat-lbl">Day Standard Turnaround</span></div>
          <div class="bstat-div" />
          <div class="bstat"><span class="bstat-num">$0</span><span class="bstat-lbl">If We Can't Recover</span><em class="bstat-note">(Most Cases)</em></div>
          <div class="bstat-div" />
          <div class="bstat"><span class="bstat-num">24/7</span><span class="bstat-lbl">Available Support</span></div>
        </div>
      </div>
    </section>

    <!-- TROUBLESHOOTING + WARRANTY — white, 2 equal cols -->
    <section class="s-white">
      <div class="container dual-col">
        <div class="dual-box">
          <div class="dual-icon">🔧</div>
          <h3 class="dual-heading">Troubleshooting Tips for WD External Drives</h3>
          <p class="s-body">{{ troubleshootingIntro }}</p>
          <ul class="arrow-list">
            <li v-for="tip in troubleshootingTips" :key="tip">{{ tip }}</li>
          </ul>
          <p class="s-body s-mt">{{ troubleshootingOutro }}</p>
        </div>
        <div class="dual-box">
          <div class="dual-icon">📋</div>
          <h3 class="dual-heading">Warranty & Manufacturer Limitations</h3>
          <p v-for="t in warrantyText" :key="t" class="s-body">{{ t }}</p>
        </div>
      </div>
    </section>

    <!-- WHY PRONE + AFTER RECOVERY — grey, 2 equal cols -->
    <section class="s-grey">
      <div class="container dual-col">
        <div class="dual-box">
          <div class="dual-icon">⚠️</div>
          <h3 class="dual-heading">Why WD Drives Are Prone to Issues</h3>
          <p v-for="t in whyProneText" :key="t" class="s-body">{{ t }}</p>
        </div>
        <div class="dual-box">
          <div class="dual-icon">✅</div>
          <h3 class="dual-heading">What Happens After Recovery?</h3>
          <p v-for="t in afterRecoveryText" :key="t" class="s-body">{{ t }}</p>
        </div>
      </div>
    </section>

    <!-- MID-PAGE QUOTE FORM — same HeroSection style, full bg image -->
    <section class="mid-form-section">
      <div class="mid-form-overlay" />
      <div class="container mid-form-inner">
        <div class="mid-form-text">
          <div class="section-label light">Get Started</div>
          <h2 class="dark-heading">Need Help Understanding Your WD Drive?</h2>
          <p v-for="t in needHelpText" :key="t" class="dark-body">{{ t }}</p>
          <div class="dark-features">
            <div class="df"><span class="df-check">✓</span> Free same-day evaluation</div>
            <div class="df"><span class="df-check">✓</span> Flat-rate pricing, no surprises</div>
            <div class="df"><span class="df-check">✓</span> No data recovered = no charge <em class="df-note">(most cases)</em></div>
          </div>
        </div>
        <div class="mid-form-card">
          <h3 class="mid-form-title">Get a Free Quote in Minutes!</h3>
          <form @submit.prevent class="mid-consult-form">
            <div class="mf-row">
              <div class="mf-group">
                <label>NAME <span class="mf-req">*</span></label>
                <input type="text" placeholder="Name / Required" class="mf-input" />
              </div>
              <div class="mf-group">
                <label>EMAIL <span class="mf-req">*</span></label>
                <input type="email" placeholder="Email Address / Required" class="mf-input" />
              </div>
            </div>
            <div class="mf-row">
              <div class="mf-group">
                <label>SELECT YOUR DEVICE TYPE</label>
                <div class="mf-select-wrap">
                  <select class="mf-input">
                    <option value="">— Select (Optional) —</option>
                    <option>Hard Drive</option>
                    <option>SSD</option>
                    <option>RAID/Server</option>
                    <option>External HDD</option>
                    <option>Mac/iMac</option>
                    <option>iPhone/Mobile</option>
                    <option>USB Flash Drive</option>
                    <option>SD Card</option>
                    <option>NAS Device</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div class="mf-group">
                <label>PHONE</label>
                <input type="tel" placeholder="Phone Number" class="mf-input" />
              </div>
            </div>
            <div class="mf-row">
              <div class="mf-group">
                <label>SELECT ISSUE WITH DEVICE</label>
                <div class="mf-select-wrap">
                  <select class="mf-input">
                    <option value="">Select Issue</option>
                    <option>Not Detected / Not Showing Up</option>
                    <option>Clicking / Grinding Noise</option>
                    <option>Water Damage</option>
                    <option>Corrupted Files</option>
                    <option>Accidental Deletion</option>
                    <option>Physical Damage</option>
                    <option>Not Spinning</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div class="mf-group">
                <label>Preferred Contact Method</label>
                <div class="mf-radio-group">
                  <label class="mf-radio"><input type="radio" name="contact" value="call" checked /> CALL</label>
                  <label class="mf-radio"><input type="radio" name="contact" value="email" /> EMAIL</label>
                  <label class="mf-radio"><input type="radio" name="contact" value="text" /> TEXT</label>
                </div>
              </div>
            </div>
            <div class="mf-group mf-full">
              <label>PREFERRED RESPONSE TIME</label>
              <div class="mf-select-wrap">
                <select class="mf-input">
                  <option value="">Select Preferred Time</option>
                  <option>Immediately (24/7)</option>
                  <option>During Business Hours</option>
                  <option>Morning (8am – 12pm)</option>
                  <option>Afternoon (12pm – 5pm)</option>
                  <option>Evening (5pm – 8pm)</option>
                </select>
              </div>
            </div>
            <button type="submit" class="mf-submit">Request a Consultation</button>
          </form>
        </div>
      </div>
    </section>

    <!-- FAQ — grey -->
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
            <div v-if="openFaq === i" class="faq-answer" v-html="faq.a" />
          </div>
        </div>
      </div>
    </section>

    <!-- VIDEO SECTION — after FAQ, before Reviews -->
    <section class="page-video-section">
      <div class="container page-video-inner">
        <div class="page-video-copy">
          <h2 class="page-video-heading">See Why Thousands Trust Us With Their Important Data</h2>
          <p class="page-video-desc">Data loss is stressful — but working with us doesn't have to be. Watch how our team handles each recovery with care, professionalism, and precision. From diagnostics to delivery, we offer flat-rate pricing, honest communication, and proven results — all from our secure Glendale lab.</p>
        </div>
        <div class="page-video-embed">
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

    <!-- REVIEWS — white -->
    <ReviewsSection :reviews="reviews" />

    <!-- CONTACT BAND — before footer -->
    <section class="s-contact-band">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Contact Us for Western Digital Data Recovery</h2>
        </div>
        <div class="contact-body">
          <p class="contact-body-text">{{ contactText }}</p>
          <ul class="contact-bullets">
            <li v-for="item in contactList" :key="item">{{ item }}</li>
          </ul>
          <p class="contact-outro">{{ contactOutro }}</p>
        </div>
        <NuxtLink to="/start-recovery" class="btn-start-recovery">Start Your Recovery</NuxtLink>
      </div>
    </section>

    <FooterBar />
  </div>
</template>

<style scoped>
*, *::before, *::after { box-sizing: border-box; }
.page-wd { font-family: 'Inter', sans-serif; color: #1a1a2e; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 28px; }



/* SECTION SCAFFOLDING */
.s-white { background: #fff; padding: 88px 0; }
.s-grey  { background: #f4f7fc; padding: 88px 0; }
.section-label { font-size: 0.72rem; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; color: #C9A84C; margin-bottom: 10px; }
.section-label.center { text-align: center; }
.section-label.light { color: #C9A84C; }
.s-heading { font-size: clamp(1.5rem, 2.8vw, 2.1rem); font-weight: 900; color: #1a1a2e; line-height: 1.25; margin-bottom: 14px; }
.s-heading.center { text-align: center; }
.s-intro { font-size: 1rem; color: #4a5568; line-height: 1.75; margin-bottom: 40px; }
.s-intro.center { text-align: center; max-width: 680px; margin-left: auto; margin-right: auto; }
.s-body { font-size: 0.94rem; color: #4a5568; line-height: 1.8; margin-bottom: 14px; }
.s-outro { font-size: 0.94rem; color: #4a5568; line-height: 1.8; margin-top: 32px; padding-top: 24px; border-top: 1px solid #e8ecf2; }
.s-mt { margin-top: 16px; }

/* ISSUES */
.issues-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 28px; }
.issue-card { background: #fff; border: 1px solid #e8ecf2; border-radius: 14px; padding: 36px 32px; box-shadow: 0 2px 20px rgba(0,0,0,0.06); position: relative; overflow: hidden; }
.issue-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: #C9A84C; }
.issue-icon { font-size: 1.8rem; margin-bottom: 14px; line-height: 1; }
.issue-title { font-size: 1.1rem; font-weight: 800; color: #1a1a2e; margin-bottom: 14px; line-height: 1.3; }
.issue-body { font-size: 0.91rem; color: #4a5568; line-height: 1.75; }

/* ASYMMETRIC */
.asym-layout { display: grid; grid-template-columns: 2fr 3fr; gap: 64px; align-items: center; }
.asym-major { position: relative; }
.rounded-img { width: 100%; border-radius: 14px; display: block; object-fit: cover; max-height: 420px; }
.img-stat-badge { position: absolute; bottom: -20px; left: 24px; background: #C9A84C; color: #fff; border-radius: 10px; padding: 14px 22px; box-shadow: 0 8px 24px rgba(201,168,76,0.4); }
.stat-num { display: block; font-size: 1.6rem; font-weight: 900; line-height: 1; }
.stat-label { display: block; font-size: 0.75rem; font-weight: 600; opacity: 0.85; margin-top: 3px; }

/* CHECK LIST */
.check-list { list-style: none; padding: 0; margin: 16px 0 0; }
.check-list li { padding: 9px 0 9px 26px; position: relative; font-size: 0.91rem; color: #4a5568; border-bottom: 1px solid #e8ecf2; }
.check-list li::before { content: '✓'; position: absolute; left: 0; color: #C9A84C; font-weight: 700; }

/* PROCESS */
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

/* 40/60 SPLIT */
.split-40-60 { display: grid; grid-template-columns: 2fr 3fr; gap: 64px; align-items: center; }
.split-side {}
.split-main {}

/* DRIVES TABLE */
.drives-table { width: 100%; border-collapse: collapse; margin-top: 16px; }
.drive-cell { padding: 10px 12px; font-size: 0.9rem; color: #2d3748; border-bottom: 1px solid #e8ecf2; vertical-align: top; width: 50%; }
.drive-check { color: #C9A84C; font-weight: 700; margin-right: 6px; }

/* FULL-WIDTH BANNER */
.fullwidth-banner { position: relative; background: #0d111f; padding: 72px 0; overflow: hidden; }
.banner-overlay { position: absolute; inset: 0; background: url('/hard-drive-data-recovery-specialist-glendale-ca.jpg') center/cover no-repeat; opacity: 0.12; }
.banner-inner { position: relative; text-align: center; }
.banner-heading { font-size: clamp(1.6rem, 3vw, 2.4rem); font-weight: 900; color: #fff; margin-bottom: 14px; }
.banner-sub { font-size: 1rem; color: rgba(255,255,255,0.65); max-width: 640px; margin: 0 auto 48px; line-height: 1.7; }
.banner-stats { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; }
.bstat { text-align: center; padding: 0 40px; }
.bstat-num { display: block; font-size: 2.2rem; font-weight: 900; color: #C9A84C; line-height: 1; margin-bottom: 6px; }
.bstat-lbl { display: block; font-size: 0.82rem; color: rgba(255,255,255,0.6); }
.bstat-note { display: block; font-size: 0.72rem; color: rgba(255,255,255,0.4); font-style: italic; margin-top: 3px; }
.bstat-div { width: 1px; height: 48px; background: rgba(255,255,255,0.15); }

/* DUAL COLS */
.dual-col { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
.dual-box { background: #fff; border: 1px solid #e8ecf2; border-radius: 14px; padding: 36px; }
.s-grey .dual-box { background: #fff; }
.dual-icon { font-size: 2rem; margin-bottom: 14px; }
.dual-heading { font-size: 1.1rem; font-weight: 800; color: #1a1a2e; margin-bottom: 14px; }

/* ARROW LIST */
.arrow-list { list-style: none; padding: 0; margin: 12px 0 0; }
.arrow-list li { padding: 8px 0 8px 22px; position: relative; font-size: 0.88rem; color: #4a5568; }
.arrow-list li::before { content: '→'; position: absolute; left: 0; color: #C9A84C; font-weight: 700; }

/* MID-PAGE FORM */
.mid-form-section { position: relative; padding: 72px 0 72px; overflow: hidden; background: linear-gradient(to right, rgba(50,52,58,0.92) 0%, rgba(50,52,58,0.72) 50%, rgba(30,32,38,0.2) 100%), url('/western-digital-data-recovery-service-los-angeles.jpg') right center / cover no-repeat; }
.mid-form-overlay { display: none; }
.mid-form-inner { position: relative; display: grid; grid-template-columns: 1fr 480px; gap: 60px; align-items: center; }
.mid-form-card { background: #fff; border-radius: 8px; padding: 32px 32px 28px; box-shadow: 0 20px 60px rgba(0,0,0,0.4); }
.mid-form-title { font-size: 20px; font-weight: 800; color: #1a1a2e; margin-bottom: 20px; padding-bottom: 14px; border-bottom: 2px solid #f0f0f0; }
.mid-consult-form { display: flex; flex-direction: column; gap: 14px; }
.mf-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.mf-group { display: flex; flex-direction: column; gap: 5px; }
.mf-group label { font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: #555; }
.mf-req { color: #e53935; }
.mf-full { grid-column: 1 / -1; }
.mf-input { height: 52px; border: 1px solid #ddd; border-radius: 6px; padding: 0 16px; font-size: 15px; color: #333; background: #fff; width: 100%; box-sizing: border-box; font-family: inherit; appearance: none; }
.mf-input:focus { outline: none; border-color: #C9A84C; }
.mf-select-wrap { position: relative; }
.mf-select-wrap .mf-input { padding-right: 36px; cursor: pointer; }
.mf-radio-group { display: flex; gap: 14px; align-items: center; height: 40px; }
.mf-radio { display: flex; align-items: center; gap: 5px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #444; cursor: pointer; }
.mf-radio input { width: 14px; height: 14px; accent-color: #C9A84C; cursor: pointer; }
.mf-submit { width: 100%; height: 62px; background: #C9A84C; color: #1a1a1a; font-weight: 800; font-size: 18px; border: none; border-radius: 6px; cursor: pointer; font-family: inherit; margin-top: 4px; transition: background 0.2s; }
.mf-submit:hover { background: #b8923e; }
.dark-heading { font-size: clamp(1.5rem, 2.5vw, 2rem); font-weight: 900; color: #fff; margin-bottom: 18px; line-height: 1.25; }
.dark-body { font-size: 0.94rem; color: rgba(255,255,255,0.72); line-height: 1.8; margin-bottom: 14px; }
.dark-features { margin-top: 24px; display: flex; flex-direction: column; gap: 10px; }
.df { font-size: 0.9rem; color: rgba(255,255,255,0.85); display: flex; align-items: center; gap: 10px; }
.df-check { color: #C9A84C; font-weight: 700; }
.df-note { font-size: 0.8rem; color: rgba(255,255,255,0.5); }

/* VIDEO SECTION */
.page-video-section { background: #2a2d38; padding: 70px 0; }
.page-video-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
.page-video-copy { display: flex; flex-direction: column; gap: 20px; }
.page-video-heading { font-size: clamp(1.4rem, 2.5vw, 2rem); font-weight: 800; color: #fff; line-height: 1.25; }
.page-video-desc { font-size: 0.95rem; color: #9ba3b8; line-height: 1.8; }
.page-video-embed { position: relative; border-radius: 14px; overflow: hidden; aspect-ratio: 16/9; box-shadow: 0 12px 48px rgba(0,0,0,0.4); }
.page-video-embed iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }

/* CONTACT BAND */
.s-contact-band { background: #fff; padding: 64px 0; }
.contact-banner-card { background: linear-gradient(to right, #1a1a2e 55%, rgba(26,26,46,0.75) 100%), url('/hard-drive-data-recovery-specialist-glendale-ca.jpg') right center / cover no-repeat; border-radius: 12px; padding: 40px 48px; margin-bottom: 28px; min-height: 120px; display: flex; align-items: center; overflow: hidden; }
.contact-banner-heading { font-size: clamp(1.3rem, 2.5vw, 1.8rem); font-weight: 900; color: #fff; line-height: 1.25; max-width: 560px; margin: 0; }
.contact-body { margin-bottom: 28px; }
.contact-body-text { font-size: 0.95rem; color: #2d3748; line-height: 1.75; margin-bottom: 14px; }
.contact-bullets { list-style: disc; padding-left: 20px; margin: 0 0 12px; }
.contact-bullets li { font-size: 0.9rem; color: #4a5568; padding: 3px 0; }
.contact-outro { font-size: 0.9rem; color: #4a5568; }
.btn-start-recovery { display: block; width: 100%; text-align: center; background: #C9A84C; color: #1a1a1a; padding: 18px; border-radius: 8px; font-weight: 800; font-size: 1.05rem; text-decoration: none; letter-spacing: 0.04em; transition: background 0.2s; }
.btn-start-recovery:hover { background: #b8923e; }

/* FAQ */
.faq-wrap { margin: 40px 0 0; display: flex; flex-direction: column; gap: 8px; }
.faq-row { border: 1.5px solid #e2e8f0; border-radius: 10px; overflow: hidden; background: #fff; }
.faq-row.active { border-color: #C9A84C; }
.faq-trigger { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; background: none; border: none; color: #1a1a2e; font-size: 1rem; font-weight: 700; cursor: pointer; text-align: left; gap: 16px; font-family: inherit; }
.faq-toggle { color: #C9A84C; font-size: 1.4rem; font-weight: 300; flex-shrink: 0; line-height: 1; }
.faq-answer { padding: 4px 24px 20px; font-size: 0.9rem; color: #4a5568; line-height: 1.8; border-top: 1px solid #f0f2f7; }
.faq-answer :deep(.faq-link) { color: #C9A84C; font-weight: 600; text-decoration: underline; }
.faq-answer :deep(.faq-link:hover) { color: #b8923e; }

/* REVIEWS */
/* RESPONSIVE */
@media (max-width: 1024px) {
  .asym-layout { grid-template-columns: 1fr 1fr; }
  .process-track { grid-template-columns: 1fr 1fr; gap: 24px; }
  .process-connector { display: none; }
  .mid-form-inner { grid-template-columns: 1fr 440px; gap: 40px; }
}
@media (max-width: 768px) {
  .asym-layout, .split-40-60, .mid-form-inner, .dual-col { grid-template-columns: 1fr; gap: 36px; }

  .page-video-inner { grid-template-columns: 1fr; }
  .issues-grid { grid-template-columns: 1fr; }
  .bstat-div { display: none; }
  .img-stat-badge { bottom: 12px; }
  .mf-row { grid-template-columns: 1fr; }
}
@media (max-width: 480px) {
  .process-track { grid-template-columns: 1fr; }
}
</style>
