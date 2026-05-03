<script setup lang="ts">
useSeoMeta({
  title: 'SSD Data Recovery — Five Star Data Recovery',
  description: 'Professional SSD data recovery for all solid state drives. NAND chip-level recovery. Free evaluation.'
})

const list1 = [
  'Documents, photos, and video files',
  'Files from damaged file systems and corrupted partitions',
  'Deleted files from formatted SSDs',
  'Lost partitions and boot sectors',
  'Data from an SSD affected by a failed OS update',
]
const list2 = [
  'Accidental deletion or formatted SSD',
  'Power surge or sudden shutdown during data transfer',
  'File system corruption and boot issues',
  'Firmware bugs or controller failure',
  'Trimmed files that bypass the recycle bin',
  'Liquid or impact-related physical damage',
]
const list3 = [
  'Initial Assessment and Diagnostics We begin by evaluating the SSD to determine whether the failure is logical, physical, or firmware-related.',
  'Non-Invasive Imaging If possible, we create a complete sector-by-sector clone of the SSD to ensure data safety and integrity.',
  'Firmware or Component-Level Repair We perform advanced firmware fixes or physical repairs when the SSD has controller, NAND, or PCB-related issues.',
  'File System and Data Recovery We analyze the image to reconstruct file systems, recover lost partitions, and extract user data.',
  'Data Approval and Delivery We provide a recovery report, and once approved, transfer the data securely to a new storage device or through encrypted delivery.',
]
const list6 = [
  'Samsung, SanDisk, Crucial, Kingston, Intel',
  'Western Digital, Seagate, Toshiba, SK Hynix',
  'Apple SSDs, NVMe drives, PCIe M.2, and SATA III SSDs',
]

const reviews = [
  { name: 'Five Star Data Recovery', location: 'explained the process and within a few days, they recovered everything I needed. Great service and great communication.”', stars: 5, text: 'My Samsung SSD suddenly stopped working and wasn’t showing up on any computer. I was sure my business documents were lost forever. The team at' },
  { name: 'Five Star Data Recovery , and within days, they recovered over 95% of my files. They kept me updated every step of the way and there were no hidden fees.”', location: 'Maria L.', stars: 5, text: 'My Crucial SSD suddenly showed 0GB capacity and none of my data was accessible. I dropped it off with' },
  { name: 'Robert D.', location: 'New York, NY', stars: 5, text: 'When my Seagate SSD stopped working after a power surge, I thought everything was gone. The engineers explained the issue in simple terms and reassured me they had handled many cases like mine. A few days later, I had my important photos and documents back. Highly recommend!' },
]

const faqs: any[] = []

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-wrapper">
    <NavBar />

    <section class="hero-section">
      <div class="container hero-inner">
        <div class="hero-text">
          <h1 class="hero-title">SSD Data Recovery Services</h1>
          <p class="hero-sub">Get Your Data Back In No Time.</p>
          <p class="hero-desc">SSD failures are different from traditional hard drives — and they require different recovery techniques. At Five Star Data Recovery, our engineers use chip-off techniques and specialized tools to recover data from failed solid state drives.</p>
          <div class="hero-actions">
            <NuxtLink to="/start-recovery" class="btn-primary-red">Start Recovery</NuxtLink>
            <NuxtLink to="/data-recovery/free-quote" class="btn-secondary">Request a Quote</NuxtLink>
          </div>
          <div class="hero-trust">
            <span>✔ Available 24/7/365</span>
            <span>✔ No Data = No Charge</span>
            <span>✔ Free Nationwide Shipping</span>
            <span>✔ Flat Rate Pricing</span>
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

    <section class="light-alt-section">
      <div class="container">
        <h2 class="section-heading">What We Can Recover</h2>

        <ul class="cause-list">
          <li v-for="item in list1" :key="item">{{ item }}</li>
        </ul>
      </div>
    </section>

    <section class="light-section">
      <div class="container">
        <h2 class="section-heading">Common SSD Data Loss Scenarios</h2>

        <ul class="drive-list">
          <li v-for="item in list2" :key="item">{{ item }}</li>
        </ul>
      </div>
    </section>

    <section class="light-alt-section">
      <div class="container">
        <h2 class="section-heading">Our SSD Data Recovery Process</h2>

        <ul class="drive-list">
          <li v-for="item in list3" :key="item">{{ item }}</li>
        </ul>
      </div>
    </section>

    <section class="light-section">
      <div class="container">
        <h2 class="section-heading">SSD Brands and Devices We Support</h2>

        <ul class="drive-list">
          <li v-for="item in list6" :key="item">{{ item }}</li>
        </ul>
      </div>
    </section>

    <section class="dark-cta-section">
      <div class="container two-col">
        <div class="col-text">
          <h2 class="dark-heading">Get Your Data Back Today</h2>
          <p class="dark-text">Our team is ready to help recover your data. Free diagnostic, flat-rate pricing, and No Data, No Charge guarantee.</p>
          <p class="dark-text">Visit us in Glendale, CA or ship your device from anywhere in the U.S. We provide free return shipping on all mail-in recoveries.</p>
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

    <section class="contact-band">
      <div class="container contact-band-inner">
        <div class="contact-band-text">
          <h2 class="contact-band-title">Contact Us for SSD Data Recovery</h2>
          <p class="contact-band-sub">SSD recovery specialists with chip-level recovery capabilities. Free evaluation, no data no charge.</p>
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
.page-wrapper { font-family: 'Inter', sans-serif; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
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
.light-section { background: #fff; padding: 72px 0; }
.light-alt-section { background: #f7f9fc; padding: 72px 0; }
.section-heading { font-size: clamp(1.5rem, 2.5vw, 2rem); font-weight: 800; color: #1a1a2e; margin-bottom: 16px; }
.section-heading.center { text-align: center; }
.section-heading-sm { font-size: 1.25rem; font-weight: 800; color: #1a1a2e; margin-bottom: 14px; }
.section-intro { font-size: 1rem; color: #4a5568; line-height: 1.7; margin-bottom: 40px; }
.section-intro.center { text-align: center; max-width: 700px; margin-left: auto; margin-right: auto; }
.body-text { font-size: 0.95rem; color: #4a5568; line-height: 1.8; margin-bottom: 16px; }
.issues-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 32px; }
.issue-title { font-size: 1rem; font-weight: 700; color: #1a1a2e; margin-bottom: 10px; }
.issue-text { font-size: 0.9rem; color: #4a5568; line-height: 1.7; }
.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }
.two-col.reverse { direction: rtl; }
.two-col.reverse > * { direction: ltr; }
.two-col-equal { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: start; }
.section-img { width: 100%; border-radius: 12px; display: block; object-fit: cover; max-height: 380px; }
.cause-list { list-style: none; padding: 0; margin: 0; }
.cause-list li { padding: 8px 0 8px 24px; position: relative; font-size: 0.93rem; color: #4a5568; border-bottom: 1px solid #e2e8f0; }
.cause-list li::before { content: '✓'; position: absolute; left: 0; color: #C9A84C; font-weight: 700; }
.drive-list { list-style: none; padding: 0; margin: 16px 0 0; }
.drive-list li { padding: 9px 0 9px 24px; position: relative; font-size: 0.93rem; color: #4a5568; border-bottom: 1px solid #e2e8f0; }
.drive-list li::before { content: '→'; position: absolute; left: 0; color: #C9A84C; }
.tip-list { list-style: none; padding: 0; margin: 12px 0 0; }
.tip-list li { padding: 7px 0 7px 22px; position: relative; font-size: 0.9rem; color: #4a5568; }
.tip-list li::before { content: '•'; position: absolute; left: 0; color: #C9A84C; font-weight: 700; }
.content-list { list-style: none; padding: 0; margin: 12px 0 0; }
.content-list li { padding: 7px 0 7px 22px; position: relative; font-size: 0.9rem; color: #4a5568; border-bottom: 1px solid #e2e8f0; }
.content-list li::before { content: '→'; position: absolute; left: 0; color: #C9A84C; }
.process-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 24px; margin-bottom: 32px; }
.process-card { background: #f7f9fc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 24px 20px; }
.step-label { font-size: 0.85rem; font-weight: 700; color: #C9A84C; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 10px; }
.step-text { font-size: 0.9rem; color: #4a5568; line-height: 1.7; }
.no-charge-note { background: #1a1a2e; color: #fff; text-align: center; padding: 16px 24px; border-radius: 8px; font-size: 0.95rem; }
.no-charge-note strong { color: #C9A84C; }
.dark-cta-section { background: #2d3748; padding: 72px 0; }
.dark-heading { font-size: clamp(1.4rem, 2.5vw, 1.9rem); font-weight: 800; color: #fff; margin-bottom: 16px; }
.dark-text { font-size: 0.95rem; color: rgba(255,255,255,0.72); line-height: 1.8; margin-bottom: 14px; }
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
.faq-list { max-width: 800px; margin: 40px auto 0; display: flex; flex-direction: column; gap: 6px; }
.faq-item { border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; }
.faq-item.open { border-color: #C9A84C; }
.faq-q { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 18px 20px; background: none; border: none; color: #1a1a2e; font-size: 0.95rem; font-weight: 600; cursor: pointer; text-align: left; gap: 12px; font-family: inherit; }
.faq-icon { color: #C9A84C; font-size: 1.4rem; font-weight: 400; flex-shrink: 0; }
.faq-a { padding: 0 20px 18px; font-size: 0.9rem; color: #4a5568; line-height: 1.7; }
.reviews-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-top: 40px; }
.review-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 28px; box-shadow: 0 2px 12px rgba(0,0,0,0.06); }
.review-avatar { font-size: 2rem; margin-bottom: 12px; }
.review-text { font-size: 0.9rem; color: #4a5568; line-height: 1.7; margin-bottom: 16px; font-style: italic; }
.review-stars { color: #C9A84C; font-size: 1rem; margin-bottom: 8px; }
.review-name { font-weight: 700; color: #1a1a2e; font-size: 0.9rem; }
.review-loc { font-size: 0.82rem; color: #718096; }
.yellow-band { background: #C9A84C; padding: 24px 0; text-align: center; }
.yellow-band-text { font-size: 1.3rem; font-weight: 800; color: #fff; margin: 0; }
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
