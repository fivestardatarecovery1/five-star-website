<script setup lang="ts">
useSeoMeta({
  title: 'Toshiba Data Recovery — Five Star Data Recovery',
  description: 'Professional Toshiba data recovery for all Toshiba hard drives. Free evaluation, no data no charge.'
})

const list1 = [
  'Power issues related to a faulty USB port or cable',
  'File system errors or corrupt partitions',
  'Disk drive not assigned a proper letter in disk management',
  'Physically damaged components from drops or overheating',
  'Internal wear and tear or mechanical failure',
  'Errors after being accidentally deleted or formatted',
]
const list2 = [
  'The device powers on, but the drive doesn\'t show up on your computer',
  'Your system asks to format the drive when connected',
  'The drive shows up in disk management but without a label',
  'You’re unable to assign a drive letter and paths',
  'Clicking or buzzing noises from inside the Toshiba HDD',
  'Slow response, freezing, or missing folders',
  'You accidentally deleted files you now need back',
]
const list3 = [
  'Don’t open the drive casing yourself',
  'Don’t run “chkdsk” or format utilities if the drive is unreadable',
  'Don’t continue reconnecting the drive to different ports repeatedly',
  'Don’t use system tools if you hear clicking or buzzing noises',
]
const list4 = [
  'Diagnostic Assessment – We begin by inspecting your Toshiba hard disk to determine whether the issue is logical, physical, or firmware-related.',
  'Secure Imaging – If the drive is unstable, we clone it sector-by-sector to avoid damaging the original.',
  'Data Extraction – Using specialized tools, we extract files from the cloned image—even from corrupted sectors or formatted volumes.',
  'File Verification – You’ll receive a file list to review. We recover full folder structures, filenames, and file types whenever possible.',
  'Data Delivery – Recovered data is returned on a new drive or USB, fully tested and verified.',
]
const list5 = [
  'Canvio Basics and Canvio Advance drives',
  'Toshiba desktop backup drives',
  'Toshiba internal SATA hard drives',
  'USB-powered portable drives',
  'External RAID enclosures and encrypted devices',
]
const list6 = [
  'Replace failed read/write heads',
  'Repair damaged PCBs and firmware',
  'Realign components after physical shock',
  'Extract data from broken platters or enclosures',
]
const list7 = [
  'Photos: JPG, PNG, TIFF, RAW',
  'Videos: MP4, MOV, AVI, MXF',
  'Documents: DOCX, PDF, XLSX, PPTX',
  'Emails and archives: PST, OST, ZIP, RAR',
  'Design files: PSD, INDD, CAD formats',
]

const reviews = [
  { name: 'Mark S.', location: 'San Diego, CA', stars: 5, text: 'My Toshiba external hard drive stopped spinning and wasn’t being detected by my computer at all. I contacted Five Star Data Recovery and spoke with Elen, who guided me through the entire process. They were able to recover 100% of my files, including irreplaceable family photos. Their communication and professionalism were outstanding.' },
  { name: '98%', location: 'of my data. They were honest, fast, and the flat-rate pricing made the whole process stress-free."', stars: 5, text: 'I had over 2TB of business files on my Toshiba drive that suddenly failed. The drive wasn’t making any noise but simply wouldn’t show up on my PC. Five Star Data Recovery diagnosed the issue quickly and recovered nearly' },
  { name: 'Anthony L.', location: 'Glendale, CA', stars: 5, text: 'My Toshiba laptop crashed and wouldn’t boot, leaving me locked out of all my work files. Alex handled my recovery and explained every step they were taking. Within a few days, I had all my documents and client data back. Highly recommend Five Star if you’re dealing with a Toshiba data loss situation.' },
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
          <h1 class="hero-title">Toshiba Data Recovery Services</h1>
          <p class="hero-sub">Get Your Data Back In No Time.</p>
          <p class="hero-desc">Is your Toshiba external hard drive not working? You\'re not alone. Toshiba drives are commonly used in laptops, external enclosures, and desktop PCs. When they fail, our engineers can recover your data safely.</p>
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

    <section class="light-section">
      <div class="container">
        <h2 class="section-heading">Toshiba Data Recovery Services</h2>
        <p class="body-text">Is your Toshiba external hard drive not working? You’re not alone. Toshiba drives are commonly used for storing important files, backup data, and media collections. But like all storage devices, they can fail. When that happens, it’s not just the device that’s at risk—it’s everything stored on it.</p>
        <p class="body-text">At Five Star Data Recovery, we offer specialized Toshiba data recovery services for customers dealing with failed drives, deleted files, and physical damage. Whether your Toshiba HDD stopped spinning, won’t connect, or shows up blank, we have the tools and expertise to recover your data safely.</p>
      </div>
    </section>

    <section class="light-alt-section">
      <div class="container">
        <h2 class="section-heading">Why Toshiba Hard Drives Stop Working</h2>
        <p class="body-text">Toshiba drives are durable, but they’re not immune to problems. Some of the most common reasons a Toshiba external hard drive is not working include:</p>
        <ul class="cause-list">
          <li v-for="item in list1" :key="item">{{ item }}</li>
        </ul>
      </div>
    </section>

    <section class="light-section">
      <div class="container">
        <h2 class="section-heading">Signs Your Toshiba Drive Needs Recovery</h2>
        <p class="body-text">If you notice any of the following issues, it\'s time to consider professional help:</p>
        <ul class="drive-list">
          <li v-for="item in list2" :key="item">{{ item }}</li>
        </ul>
      </div>
    </section>

    <section class="light-alt-section">
      <div class="container">
        <h2 class="section-heading">What Not to Do If Your Toshiba External Drive Fails</h2>
        <p class="body-text">Many users try DIY methods to fix Toshiba external drives using free recovery software or YouTube tutorials. But if your drive is physically damaged or not detected at all, using these tools could permanently overwrite or destroy recoverable data.</p>
        <p class="body-text">Avoid these risky steps:</p>
        <ul class="drive-list">
          <li v-for="item in list3" :key="item">{{ item }}</li>
        </ul>
      </div>
    </section>

    <section class="light-section">
      <div class="container">
        <h2 class="section-heading">Our Toshiba Data Recovery Process</h2>
        <p class="body-text">We take every case seriously and follow a step-by-step recovery plan:</p>
        <ul class="drive-list">
          <li v-for="item in list4" :key="item">{{ item }}</li>
        </ul>
      </div>
    </section>

    <section class="light-alt-section">
      <div class="container">
        <h2 class="section-heading">Types of Toshiba Drives We Recover</h2>
        <p class="body-text">We service all major Toshiba HDD and SSD models, including:</p>
        <p class="body-text">The data recovery cost can vary depending on the type of drive and the issue involved. For example, recovering data from a Toshiba SSD or a physically damaged external hard drive may be more complex than standard logical recoveries from internal laptop drives. After a full diagnostic, we’ll provide a clear, flat-rate quote based on the specific device and recovery scenario.</p>
        <ul class="drive-list">
          <li v-for="item in list5" :key="item">{{ item }}</li>
        </ul>
      </div>
    </section>

    <section class="light-section">
      <div class="container">
        <h2 class="section-heading">Recovery for Physically Damaged Toshiba Drives</h2>
        <p class="body-text">If your Toshiba hard disk was dropped or suffered impact, recovery often requires cleanroom work. Our technicians can:</p>
        <p class="body-text">Physically damaged drives should never be powered on repeatedly. Doing so increases the risk of scratching platters or further degrading the drive.</p>
        <ul class="drive-list">
          <li v-for="item in list6" :key="item">{{ item }}</li>
        </ul>
      </div>
    </section>

    <section class="light-alt-section">
      <div class="container">
        <h2 class="section-heading">What Types of Files Can Be Recovered?</h2>
        <p class="body-text">One of the most common questions we receive is whether we can recover specific file types. The good news is yes—we support virtually every common file type stored on Toshiba drives, including:</p>
        <p class="body-text">Whether you\'re a photographer, business owner, or student, we can help recover everything from lost data to entire project folders.</p>
        <ul class="drive-list">
          <li v-for="item in list7" :key="item">{{ item }}</li>
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
          <h2 class="contact-band-title">Contact Us for Toshiba Data Recovery</h2>
          <p class="contact-band-sub">Toshiba hard drive recovery specialists. All models supported, free evaluation.</p>
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
