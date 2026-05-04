<script setup lang="ts">
useSeoMeta({
  title: 'Samsung Data Recovery Services — Five Star Data Recovery',
  description: 'If your Samsung phone has suffered liquid damage, a serious drop, or severe physical failure, we’re here to help. At Five Star Data Recovery, we specialize in c'
})

const issues = [
  { icon: '💧', title: 'Water or liquid damage', text: '' },
  { icon: '💥', title: 'Severe impact from drops', text: '' },
  { icon: '🔥', title: 'Burnt components or short circuits', text: '' },
  { icon: '🔌', title: 'Devices that no longer power on or enter boot loops', text: '' },
]

const causesIntro = 'The most common reason customers come to us is physical damage to their Samsung phone. This includes:'
const causesOutro = 'Our lab focuses on recovering data from Samsung phones. We help with hardware failures, damaged logic boards, and broken devices. If your phone has physical damage and contains important data, we’re here to help.'
const causes = [
  'Water or liquid damage',
  'Severe impact from drops',
  'Burnt components or short circuits',
  'Devices that no longer power on or enter boot loops',
]

const processIntro = 'At Five Star Data Recovery, we specialize in component-level Samsung mobile data recovery. We recover data from physically damaged Samsung phones. This includes phones with liquid spills, motherboard failures, or severe impacts.'
const steps = [
  { num: '1', title: 'Physical Diagnostic', 'text': 'We inspect the Samsung device for board-level issues, such as short circuits, power failures, or corrosion.' },
  { num: '2', title: 'Component-Level Repair', 'text': 'Using micro-soldering and hardware diagnostics, we repair the device just enough to bring it back to life temporarily. This allows us to access the internal storage without altering or overwriting data.' },
  { num: '3', title: 'Full Backup with Smart Switch', 'text': 'Once the phone powers on, we create a complete backup using Smart Switch on your computer. This preserves all contacts, messages, app data, and settings.' },
  { num: '4', title: 'Backup Delivery', 'text': 'We provide the full backup to the customer on an external drive or help restore it to a new Samsung device.' },
]

const driveTypesIntro = 'We work with nearly every model of Samsung Galaxy phone and tablet, including:'
const driveTypesOutro = 'No matter if your device turns on or is completely dead, we can often recover lost data. We use special techniques to access the internal storage.'
const driveTypes = [
  'Galaxy S21, S22, S23 Series',
  'Galaxy Note 8, 9, 10, 20',
  'Galaxy Z Fold and Z Flip',
  'Galaxy A and M Series',
  'Galaxy Tab devices',
]

const tipIntro = ''
const tipOutro = ''
const tips: string[] = []

const d2Texts: string[] = []
const d3Texts = [
  'After repairing a physically damaged Samsung phone, we use Smart Switch on your computer to make a full backup of the device. This tool is the safest and most complete way to extract user data, allowing us to save everything — including settings, apps, contacts, messages, and photos — in a structured backup file.',
  'This backup can then be restored onto a new Samsung Galaxy phone or saved to an external storage device for future use.',
]
const d4Texts = [
  'We provide the full backup to the customer on an external drive or help restore it to a new Samsung device.',
  'This method ensures a complete snapshot of your Samsung mobile phone data is saved without relying on third-party software or apps. We focus on helping customers recover important data. We use advanced Samsung mobile phone data recovery methods for serious hardware failures.',
]

const midBody = [
  'While we are experts in hardware-level Samsung phone data recovery, there are some important limitations to note:',
  'We do not use consumer recovery apps or offer services for phones with accidental file deletions but no hardware issues.',
]

const contactText = 'If you\'re experiencing issues with your Samsung Data Recovery, don\'t wait. Acting early gives you the best chance of recovering your data safely and completely.'
const contactList = [
  'Visit our lab in Glendale, CA',
  'Mail your drive to us from anywhere in the U.S.',
  'Call us today for a free evaluation',
]
const contactOutro = 'Trust our experts for fast, secure, and professional samsung data recovery services — and get back what matters most.'

const reviews = [
  { 'text': 'My Samsung Galaxy phone completely died after a sudden power failure. Other repair shops told me the motherboard was fried and the data was gone. Five Star Data Recovery was my last hope—and they pulled through! They recovered my entire photo gallery and contacts. The communication from Elen was excellent, and I’m beyond grateful for their expertise.', 'name': 'Kevin R.', 'location': 'Dallas, TX' },
  { 'text': 'My Samsung S10 was stuck in a boot loop after a system crash. I was terrified I had lost years of messages and pictures. Alex from Five Star Data Recovery worked on my phone at the component level and managed to retrieve a full copy of my internal storage. They saved memories I thought were gone forever.', 'name': 'Maria G.', 'location': 'Glendale, CA' },
  { 'text': 'I had important business files saved only on my Samsung Galaxy that suddenly stopped powering on. After calling around, I found Five Star Data Recovery. Vahan took the time to explain how component-level recovery works and gave me realistic expectations. Thankfully, they recovered all my documents and photos. Highly recommended for Samsung phone data recovery!', 'name': 'Emilie K.', 'location': 'Seattle, WA' },
]
const faqs = [
  { q: '1. Can you recover data from a Samsung phone that won\'t turn on?', a: 'Yes. We specialize in recovering data from non-working Samsung phones, including devices that won\'t power on due to motherboard failure, power issues, or internal damage. Our engineers perform component-level board repairs to safely extract your data.' },
  { q: '2. What types of data can you recover from my Samsung device?', a: 'We can recover critical data stored on the internal memory of your Samsung phone, including photos, videos, contacts, text messages, call logs, notes, and app data. Once recovered, your files can be delivered as a full phone image or as individual folders, depending on your preference.' },
  { q: '3. Do you offer deleted file recovery for Samsung phones?', a: 'No, we do not offer deleted file recovery for Samsung devices. Our service is strictly focused on physically damaged or non-functional phones that require component-level repairs to access the data.' },
  { q: '4. What are the most common Samsung issues you handle for data recovery?', a: 'We frequently recover data from Samsung phones with power failures, boot loops, black screens, motherboard shorts, failed firmware updates, and water, fire or liquid damage. If the phone won\'t turn on or is stuck at the Samsung logo, we can help.' },
  { q: '5. How much does Samsung data recovery cost?', a: 'Our Tier 3 Component Level data recovery cost for Samsung phones is a flat rate of $950.00. This covers most Samsung cases that require board-level repair and advanced micro-soldering to retrieve your data.<br>Very rarely, a case may require a higher-tier recovery known as a "Chip-Off" procedure, which is only used when all other recovery methods have been exhausted and unsuccessful. If that happens, we will provide an updated quote before proceeding, and you will have the option to approve or decline the next step.<br>We believe in full transparency—no hidden fees or surprise charges.' },
  { q: '6. Will my Samsung phone be repaired after the data recovery?', a: 'No. Our goal is to temporarily repair your phone just enough to extract the data safely. Once the recovery process is complete, the phone will not be returned in working condition for future use. The focus is strictly on recovering your files.' },
  { q: '7. How long does Samsung phone data recovery take?', a: 'Our standard turnaround time for Samsung component-level data recovery is 1 to 2 weeks, depending on the complexity of the issue and parts availability.<br>If you need your data back faster, we offer two expedited options:<br>• <a href="/expedited-service" class="faq-link">Expedited Service</a>: Recovery completed within 3–5 business days<br>• <a href="/expedited-service-plus" class="faq-link">Expedited Plus Service</a>: Recovery completed within 1–3 days, including weekends and holidays.' },
  { q: '8. Is my data safe and confidential during the recovery process?', a: 'Absolutely. Your data privacy is our top priority. We never access, share, or view your personal files beyond what\'s necessary to complete the recovery. All data is handled securely within our lab.' },
  { q: '9. Can I mail in my Samsung phone for data recovery?', a: 'Yes! We offer free, fast, and insured round-trip shipping within the United States for Samsung data recovery clients. If you are not near our Glendale, CA, office, you can use our easy <a href="/data-recovery/mail-in-service" class="faq-link">mail-in data recovery service</a>.' },
  { q: '10. Do you charge a fee if the data isn\'t recoverable?', a: 'We do not charge a recovery fee if the data is not recoverable. However, there is a fully refundable $200.00 deposit that is collected when the case is checked in. If we\'re unable to recover your data, this deposit will be refunded in full. If we do recover your data, the $200 is applied toward your final recovery cost.<br><strong>Important exception:</strong> If your Samsung phone has already been worked on at the component level by another lab or repair shop (such as prior micro-soldering, chip replacements, or board work), a non-refundable evaluation fee of $200.00 will apply due to the increased risk and complexity.<br>This exception does not apply to simple part replacements like screens or batteries—it\'s strictly for phones that have had prior board-level work done.' },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <HeroSection
      title="Samsung Data Recovery Services"
      subtitle="Get Your Data Back In No Time."
      description="If your Samsung phone has suffered liquid damage, a serious drop, or severe physical failure, we’re here to help. At Five Star Data Recovery, we specialize in component-level Samsung mobile data recovery from devices that no longer power on, are stuck in a boot loop, or have suffered board-level damage."
      bgImage="/samsung-data-recovery-service-los-angeles.jpg"
    />

    <StatsBar />

    <!-- ISSUES — white -->
    <section class="s-white">
      <div class="container">
        <div class="section-label">Common Problems</div>
        <h2 class="s-heading">Common Samsung Data Recovery Issues</h2>
        <p  class="s-intro"></p>
        <div class="issues-grid">
          <div v-for="issue in issues" :key="issue.title" class="issue-card">
            <div class="issue-icon">{{ issue.icon }}</div>
            <h3 class="issue-title">{{ issue.title }}</h3>
            <p class="issue-body">{{ issue.text }}</p>
          </div>
        </div>
        <p  class="s-outro"></p>
      </div>
    </section>

    <!-- CAUSES — grey -->
    <section class="s-grey">
      <div class="container asym-layout">
        <div class="asym-minor">
          <div class="section-label">Root Causes</div>
          <h2 class="s-heading">What Causes Samsung Data Recovery Failures?</h2>
          <p class="s-body">{{ causesIntro }}</p>
          <ul class="check-list">
            <li v-for="c in causes" :key="c">{{ c }}</li>
          </ul>
          <p  class="s-body s-mt">{{ causesOutro }}</p>
        </div>
        <div class="asym-major">
          <img src="/samsung-data-recovery-service-los-angeles.jpg" alt="Samsung Data Recovery Services service Glendale CA" class="rounded-img" />
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
        <h2 class="s-heading center">How Our Recovery Process Works</h2>
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

    <!-- DRIVE TYPES — grey -->
    <section class="s-grey">
      <div class="container split-40-60">
        <div class="split-side">
          <img src="/data-recovery-clean-room-technician-glendale-ca.jpg" alt="Clean room data recovery technician" class="rounded-img" />
        </div>
        <div class="split-main">
          <div class="section-label">Supported Devices</div>
          <h2 class="s-heading">Devices We Recover From​</h2>
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
          <p  class="s-body s-mt">{{ driveTypesOutro }}</p>
        </div>
      </div>
    </section>

    <!-- FULL-WIDTH BANNER -->
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

    <!-- DUAL INFO 1 — white -->
    <section class="s-white">
      <div class="container dual-col">
        <div class="dual-box">
          <div class="dual-icon">🔧</div>
          <h3 class="dual-heading">Troubleshooting Tips</h3>
          <p class="s-body">{{ tipIntro }}</p>
          <ul class="arrow-list">
            <li v-for="tip in tips" :key="tip">{{ tip }}</li>
          </ul>
          <p  class="s-body s-mt">{{ tipOutro }}</p>
        </div>
        <div class="dual-box">
          <div class="dual-icon">📋</div>
          <h3 class="dual-heading">Warranty & Manufacturer Limitations</h3>
          <p v-for="t in d2Texts" :key="t" class="s-body">{{ t }}</p>
        </div>
      </div>
    </section>

    <!-- DUAL INFO 2 — grey -->
    <section class="s-grey">
      <div class="container dual-col">
        <div class="dual-box">
          <div class="dual-icon">⚠️</div>
          <h3 class="dual-heading">Why Samsung Data Recovery Devices Are Prone to Issues</h3>
          <p v-for="t in d3Texts" :key="t" class="s-body">{{ t }}</p>
        </div>
        <div class="dual-box">
          <div class="dual-icon">✅</div>
          <h3 class="dual-heading">What Happens After Recovery?</h3>
          <p v-for="t in d4Texts" :key="t" class="s-body">{{ t }}</p>
        </div>
      </div>
    </section>

    <!-- MID-PAGE FORM -->
    <section class="mid-form-section" style="background: linear-gradient(to right, rgba(50,52,58,0.92) 0%, rgba(50,52,58,0.72) 50%, rgba(30,32,38,0.2) 100%), url('/samsung-data-recovery-service-los-angeles.jpg') right center / cover no-repeat;">
      <div class="container mid-form-inner">
        <div class="mid-form-text">
          <div class="section-label light">Get Started</div>
          <h2 class="dark-heading">Need Help With Your Samsung Data Recovery?</h2>
          <p v-for="t in midBody" :key="t" class="dark-body">{{ t }}</p>
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
                    <option>Hard Drive</option><option>SSD</option><option>RAID/Server</option>
                    <option>External HDD</option><option>Mac/iMac</option><option>iPhone/Mobile</option>
                    <option>USB Flash Drive</option><option>SD Card</option><option>NAS Device</option><option>Other</option>
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
                    <option>Not Detected / Not Showing Up</option><option>Clicking / Grinding Noise</option>
                    <option>Water Damage</option><option>Corrupted Files</option><option>Accidental Deletion</option>
                    <option>Physical Damage</option><option>Not Spinning</option><option>Other</option>
                  </select>
                </div>
              </div>
              <div class="mf-group">
                <label>Preferred Contact Method</label>
                <div class="mf-radio-group">
                  <label class="mf-radio"><input type="radio" name="contactSamsung" value="call" checked /> CALL</label>
                  <label class="mf-radio"><input type="radio" name="contactSamsung" value="email" /> EMAIL</label>
                  <label class="mf-radio"><input type="radio" name="contactSamsung" value="text" /> TEXT</label>
                </div>
              </div>
            </div>
            <div class="mf-group mf-full">
              <label>PREFERRED RESPONSE TIME</label>
              <div class="mf-select-wrap">
                <select class="mf-input">
                  <option value="">Select Preferred Time</option>
                  <option>Immediately (24/7)</option><option>During Business Hours</option>
                  <option>Morning (8am – 12pm)</option><option>Afternoon (12pm – 5pm)</option><option>Evening (5pm – 8pm)</option>
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

    <!-- VIDEO SECTION -->
    <section class="page-video-section">
      <div class="container page-video-inner">
        <div class="page-video-copy">
          <h2 class="page-video-heading">See Why Thousands Trust Us With Their Important Data</h2>
          <p class="page-video-desc">Data loss is stressful — but working with us doesn't have to be. Watch how our team handles each recovery with care, professionalism, and precision. From diagnostics to delivery, we offer flat-rate pricing, honest communication, and proven results — all from our secure Glendale lab.</p>
        </div>
        <div class="page-video-embed">
          <iframe src="https://www.youtube.com/embed/14ACFHJ24hg?start=60" title="Five Star Data Recovery" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
        </div>
      </div>
    </section>

    <!-- REVIEWS — white -->
    <ReviewsSection :reviews="reviews" />

    <!-- CONTACT BAND -->
    <section class="s-contact-band">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Contact Us for Samsung Data Recovery Services</h2>
        </div>
        <div class="contact-body">
          <p class="contact-body-text">{{ contactText }}</p>
          <ul class="contact-bullets">
            <li v-for="item in contactList" :key="item">{{ item }}</li>
          </ul>
          <p v-if="contactOutro" class="contact-outro">{{ contactOutro }}</p>
        </div>
        <NuxtLink to="/start-recovery" class="btn-start-recovery">Start Your Recovery</NuxtLink>
      </div>
    </section>

    <FooterBar />
  </div>
</template>

<style scoped>
*, *::before, *::after { box-sizing: border-box; }
.page-content { font-family: 'Inter', sans-serif; color: #1a1a2e; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 28px; }
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
.issues-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 28px; }
.issue-card { background: #fff; border: 1px solid #e8ecf2; border-radius: 14px; padding: 36px 32px; box-shadow: 0 2px 20px rgba(0,0,0,0.06); position: relative; overflow: hidden; }
.issue-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: #C9A84C; }
.issue-icon { font-size: 1.8rem; margin-bottom: 14px; line-height: 1; }
.issue-title { font-size: 1.1rem; font-weight: 800; color: #1a1a2e; margin-bottom: 14px; line-height: 1.3; }
.issue-body { font-size: 0.91rem; color: #4a5568; line-height: 1.75; }
.asym-layout { display: grid; grid-template-columns: 2fr 3fr; gap: 64px; align-items: center; }
.asym-major { position: relative; }
.rounded-img { width: 100%; border-radius: 14px; display: block; object-fit: cover; max-height: 420px; }
.img-stat-badge { position: absolute; bottom: -20px; left: 24px; background: #C9A84C; color: #fff; border-radius: 10px; padding: 14px 22px; box-shadow: 0 8px 24px rgba(201,168,76,0.4); }
.stat-num { display: block; font-size: 1.6rem; font-weight: 900; line-height: 1; }
.stat-label { display: block; font-size: 0.75rem; font-weight: 600; opacity: 0.85; margin-top: 3px; }
.check-list { list-style: none; padding: 0; margin: 16px 0 0; }
.check-list li { padding: 9px 0 9px 26px; position: relative; font-size: 0.91rem; color: #4a5568; border-bottom: 1px solid #e8ecf2; }
.check-list li::before { content: '✓'; position: absolute; left: 0; color: #C9A84C; font-weight: 700; }
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
.split-40-60 { display: grid; grid-template-columns: 2fr 3fr; gap: 64px; align-items: center; }
.drives-table { width: 100%; border-collapse: collapse; margin-top: 16px; }
.drive-cell { padding: 10px 12px; font-size: 0.9rem; color: #2d3748; border-bottom: 1px solid #e8ecf2; vertical-align: top; width: 50%; }
.drive-check { color: #C9A84C; font-weight: 700; margin-right: 6px; }
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
.dual-col { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
.dual-box { background: #fff; border: 1px solid #e8ecf2; border-radius: 14px; padding: 36px; }
.s-grey .dual-box { background: #fff; }
.dual-icon { font-size: 2rem; margin-bottom: 14px; }
.dual-heading { font-size: 1.1rem; font-weight: 800; color: #1a1a2e; margin-bottom: 14px; }
.arrow-list { list-style: none; padding: 0; margin: 12px 0 0; }
.arrow-list li { padding: 8px 0 8px 22px; position: relative; font-size: 0.88rem; color: #4a5568; }
.arrow-list li::before { content: '→'; position: absolute; left: 0; color: #C9A84C; font-weight: 700; }
.mid-form-section { position: relative; padding: 72px 0; overflow: hidden; }
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
.page-video-section { background: #2a2d38; padding: 70px 0; }
.page-video-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
.page-video-copy { display: flex; flex-direction: column; gap: 20px; }
.page-video-heading { font-size: clamp(1.4rem, 2.5vw, 2rem); font-weight: 800; color: #fff; line-height: 1.25; }
.page-video-desc { font-size: 0.95rem; color: #9ba3b8; line-height: 1.8; }
.page-video-embed { position: relative; border-radius: 14px; overflow: hidden; aspect-ratio: 16/9; box-shadow: 0 12px 48px rgba(0,0,0,0.4); }
.page-video-embed iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }
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
.faq-wrap { margin: 40px 0 0; display: flex; flex-direction: column; gap: 8px; }
.faq-row { border: 1.5px solid #e2e8f0; border-radius: 10px; overflow: hidden; background: #fff; }
.faq-row.active { border-color: #C9A84C; }
.faq-trigger { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; background: none; border: none; color: #1a1a2e; font-size: 1rem; font-weight: 700; cursor: pointer; text-align: left; gap: 16px; font-family: inherit; }
.faq-toggle { color: #C9A84C; font-size: 1.4rem; font-weight: 300; flex-shrink: 0; line-height: 1; }
.faq-answer { padding: 4px 24px 20px; font-size: 0.9rem; color: #4a5568; line-height: 1.8; border-top: 1px solid #f0f2f7; }
.faq-answer :deep(.faq-link) { color: #C9A84C; font-weight: 600; text-decoration: underline; }
.faq-answer :deep(.faq-link:hover) { color: #b8923e; }
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
