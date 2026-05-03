<script setup lang="ts">
useSeoMeta({
  title: 'Hitachi Data Recovery — Five Star Data Recovery',
  description: 'Professional Hitachi hard drive data recovery. All Hitachi models supported. Free evaluation.'
})

const list1 = [
  'Physical damage from drops, impacts, or overheating',
  'Bad sectors that prevent the drive from reading or writing data',
  'Firmware corruption or manufacturing defects',
  'Accidental deletion or formatting of partitions',
  'Power surges and electrical issues',
  'File system corruption due to sudden shutdowns or software crashes',
]
const list2 = [
  'Clicking, beeping, or grinding noises',
  'The drive is not detected by your system',
  'Extremely slow file transfers or system freezes',
  'Sudden appearance of missing files or folders',
  'Messages asking to format the drive',
  'Drive visible in Disk Management but inaccessible',
]
const list3 = [
  'Desktop and laptop internal HDDs',
  'Portable external hard drives',
  'Enterprise-level Hitachi drives used in servers and data centers',
  'RAID arrays containing Hitachi components',
  'USB-connected storage devices',
]

const reviews = [
  { name: 'Michael R.', location: 'Seattle, WA', stars: 5, text: 'My Hitachi external hard drive suddenly stopped showing up, and I was devastated thinking years of photos were gone. Five Star Data Recovery not only diagnosed the issue quickly but also recovered 100% of my data. The process was smooth, and they kept me informed every step of the way. Highly recommended for anyone dealing with Hitachi drive issues!' },
  { name: 'Sarah T.', location: 'Chicago, IL', stars: 5, text: 'I had a Hitachi laptop drive with bad sectors, and my local computer shop told me it wasn’t recoverable. Five Star Data Recovery proved them wrong! They were able to recover almost 92% of my files, including some important business documents. The flat-rate pricing was upfront, and there were no surprises. Excellent service from start to finish.' },
  { name: 'David N.', location: 'Glendale, CA', stars: 5, text: 'My Hitachi hard drive was making a clicking noise after I dropped it, and I knew it was serious. Five Star’s clean room service saved the day. They replaced the internal parts and got my data back within a week. I was especially impressed with their no data, no charge policy. Great experience and true experts when it comes to Hitachi data recovery.' },
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
          <h1 class="hero-title">Hitachi Data Recovery Services</h1>
          <p class="hero-sub">Get Your Data Back In No Time.</p>
          <p class="hero-desc">If your Hitachi hard drive has stopped working, is making clicking noises, or simply isn\'t being detected, our engineers can help. Five Star Data Recovery specializes in Hitachi data recovery for all models.</p>
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
        <h2 class="section-heading">Hitachi Data Recovery Services</h2>
        <p class="body-text">If your Hitachi hard drive has stopped working, is making clicking noises, or simply isn’t being detected, don’t panic—there’s still hope. At Five Star Data Recovery, we specialize in professional Hitachi Data Recovery for individuals and businesses who need to get their important files back quickly and securely.</p>
        <p class="body-text">Whether you\'re dealing with accidental deletion, hardware failure, or file system corruption, our team has the tools and expertise to handle even the most complex recovery jobs. We’re here to help recover data from Hitachi drives, no matter the cause of the issue.</p>
      </div>
    </section>
    <section class="light-alt-section">
      <div class="container">
        <h2 class="section-heading">Common Causes of Hitachi Drive Failure</h2>
        <p class="body-text">There are many reasons your Hitachi hard drive might fail. Understanding what wentwrong can help us recover more data and prevent future issues. Some of the mostcommon causes include:</p>
        <ul class="cause-list">
          <li v-for="item in list1" :key="item">{{ item }}</li>
        </ul>
      </div>
    </section>
    <section class="light-section">
      <div class="container">
        <h2 class="section-heading">Signs of Hitachi Hard Drive Failure</h2>
        <p class="body-text">If you notice any of the following symptoms, it’s best to stop using the drive immediately and contact a recovery expert:</p>
        <p class="body-text">Continuing to use a failing drive increases the chance of permanent drive data loss.</p>
        <ul class="drive-list">
          <li v-for="item in list2" :key="item">{{ item }}</li>
        </ul>
      </div>
    </section>
    <section class="light-alt-section">
      <div class="container">
        <h2 class="section-heading">Types of Hitachi Drives We Support</h2>
        <p class="body-text">Our team provides data recovery services for all types of Hitachi drives, including:</p>
        <p class="body-text">No matter the drive type, we can help with hitachi hard disk data recovery for a wide range of systems and storage capacities.</p>
        <ul class="drive-list">
          <li v-for="item in list3" :key="item">{{ item }}</li>
        </ul>
      </div>
    </section>
    <section class="light-section">
      <div class="container">
        <h2 class="section-heading">Our Hitachi Data Recovery Process</h2>
        <p class="body-text">When you bring your drive to us, we begin with a full diagnostic to determine the extent of the issue. Here’s what you can expect:</p>
      </div>
    </section>
    <section class="light-alt-section">
      <div class="container">
        <h2 class="section-heading">Free Diagnostic</h2>
        <p class="body-text">We assess the health of the drive and confirm whether it’s a logical or physical failure.</p>
      </div>
    </section>
    <section class="light-section">
      <div class="container">
        <h2 class="section-heading">Cloning</h2>
        <p class="body-text">If the drive is unstable, we create a complete clone to avoid further wear on the original.</p>
      </div>
    </section>
    <section class="light-alt-section">
      <div class="container">
        <h2 class="section-heading">File System Repair</h2>
        <p class="body-text">For logical problems like file system corruption, we use advanced tools to reconstruct the partition.</p>
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
          <h2 class="contact-band-title">Contact Us for Hitachi Data Recovery</h2>
          <p class="contact-band-sub">Hitachi hard drive recovery specialists. All models supported, free evaluation.</p>
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
.page-wrapper{font-family:'Inter',sans-serif}.container{max-width:1200px;margin:0 auto;padding:0 24px}
.hero-section{background:#1a1a2e;padding:60px 0}.hero-inner{display:grid;grid-template-columns:1fr 420px;gap:48px;align-items:start}
.hero-title{font-size:clamp(1.8rem,3.5vw,2.8rem);font-weight:900;color:#fff;line-height:1.2;margin-bottom:12px}
.hero-sub{font-size:1.1rem;color:#C9A84C;font-weight:600;margin-bottom:16px}
.hero-desc{font-size:0.95rem;color:rgba(255,255,255,0.72);line-height:1.7;margin-bottom:28px}
.hero-actions{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:24px}
.btn-primary-red{background:#e53e3e;color:#fff;padding:14px 28px;border-radius:6px;font-weight:700;font-size:0.95rem;text-decoration:none;display:inline-block}
.btn-primary-red:hover{background:#c53030}
.btn-secondary{background:transparent;color:#fff;border:2px solid rgba(255,255,255,0.4);padding:12px 24px;border-radius:6px;font-weight:600;font-size:0.95rem;text-decoration:none;display:inline-block}
.btn-secondary:hover{border-color:#fff}
.hero-trust{display:flex;flex-wrap:wrap;gap:12px 24px}.hero-trust span{font-size:0.82rem;color:rgba(255,255,255,0.65)}
.hero-form-wrap{position:relative}.hero-form-card{background:#fff;border-radius:12px;padding:28px;box-shadow:0 8px 40px rgba(0,0,0,0.3)}
.form-title{font-size:1rem;font-weight:700;color:#1a1a2e;margin-bottom:20px}
.consult-form{display:flex;flex-direction:column;gap:10px}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.form-input{border:1px solid #d1d5db;border-radius:6px;padding:10px 14px;font-size:0.9rem;color:#1a1a2e;background:#fff;width:100%;box-sizing:border-box;font-family:inherit}
.form-input:focus{outline:none;border-color:#C9A84C}.form-input.full{width:100%}
.btn-form-submit{background:#C9A84C;color:#fff;border:none;border-radius:6px;padding:14px;font-size:1rem;font-weight:700;cursor:pointer;margin-top:4px;font-family:inherit}
.btn-form-submit:hover{background:#b8923e}
.light-section{background:#fff;padding:72px 0}.light-alt-section{background:#f7f9fc;padding:72px 0}
.section-heading{font-size:clamp(1.5rem,2.5vw,2rem);font-weight:800;color:#1a1a2e;margin-bottom:16px}
.section-heading.center{text-align:center}.section-heading-sm{font-size:1.25rem;font-weight:800;color:#1a1a2e;margin-bottom:14px}
.section-intro{font-size:1rem;color:#4a5568;line-height:1.7;margin-bottom:40px}
.section-intro.center{text-align:center;max-width:700px;margin-left:auto;margin-right:auto}
.body-text{font-size:0.95rem;color:#4a5568;line-height:1.8;margin-bottom:16px}
.issues-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:32px}
.issue-title{font-size:1rem;font-weight:700;color:#1a1a2e;margin-bottom:10px}
.issue-text{font-size:0.9rem;color:#4a5568;line-height:1.7}
.two-col{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center}
.two-col.reverse{direction:rtl}.two-col.reverse>*{direction:ltr}
.two-col-equal{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:start}
.section-img{width:100%;border-radius:12px;display:block;object-fit:cover;max-height:380px}
.cause-list{list-style:none;padding:0;margin:0}
.cause-list li{padding:8px 0 8px 24px;position:relative;font-size:0.93rem;color:#4a5568;border-bottom:1px solid #e2e8f0}
.cause-list li::before{content:'✓';position:absolute;left:0;color:#C9A84C;font-weight:700}
.drive-list{list-style:none;padding:0;margin:16px 0 0}
.drive-list li{padding:9px 0 9px 24px;position:relative;font-size:0.93rem;color:#4a5568;border-bottom:1px solid #e2e8f0}
.drive-list li::before{content:'→';position:absolute;left:0;color:#C9A84C}
.content-list{list-style:none;padding:0;margin:12px 0 0}
.content-list li{padding:7px 0 7px 22px;position:relative;font-size:0.9rem;color:#4a5568;border-bottom:1px solid #e2e8f0}
.content-list li::before{content:'→';position:absolute;left:0;color:#C9A84C}
.dark-cta-section{background:#2d3748;padding:72px 0}
.dark-heading{font-size:clamp(1.4rem,2.5vw,1.9rem);font-weight:800;color:#fff;margin-bottom:16px}
.dark-text{font-size:0.95rem;color:rgba(255,255,255,0.72);line-height:1.8;margin-bottom:14px}
.contact-band{background:#1a1a2e;padding:48px 0}
.contact-band-inner{display:flex;justify-content:space-between;align-items:center;gap:48px;flex-wrap:wrap}
.contact-band-title{font-size:1.5rem;font-weight:800;color:#fff;margin-bottom:12px}
.contact-band-sub{font-size:0.9rem;color:rgba(255,255,255,0.65);line-height:1.7;margin-bottom:16px;max-width:540px}
.contact-list{list-style:none;padding:0;margin:0}
.contact-list li{padding:5px 0 5px 20px;position:relative;font-size:0.9rem;color:rgba(255,255,255,0.75)}
.contact-list li::before{content:'✓';position:absolute;left:0;color:#C9A84C;font-weight:700}
.contact-band-actions{display:flex;gap:14px;flex-shrink:0;flex-wrap:wrap}
.btn-yellow{display:inline-block;background:#C9A84C;color:#fff;padding:14px 28px;border-radius:6px;font-weight:800;font-size:1rem;text-decoration:none}
.btn-yellow:hover{background:#b8923e}
.btn-outline-white{display:inline-block;border:2px solid rgba(255,255,255,0.4);color:#fff;padding:12px 24px;border-radius:6px;font-weight:600;font-size:0.95rem;text-decoration:none}
.btn-outline-white:hover{border-color:#fff}
.faq-list{max-width:800px;margin:40px auto 0;display:flex;flex-direction:column;gap:6px}
.faq-item{border:1px solid #e2e8f0;border-radius:8px;overflow:hidden}
.faq-item.open{border-color:#C9A84C}
.faq-q{width:100%;display:flex;justify-content:space-between;align-items:center;padding:18px 20px;background:none;border:none;color:#1a1a2e;font-size:0.95rem;font-weight:600;cursor:pointer;text-align:left;gap:12px;font-family:inherit}
.faq-icon{color:#C9A84C;font-size:1.4rem;font-weight:400;flex-shrink:0}
.faq-a{padding:0 20px 18px;font-size:0.9rem;color:#4a5568;line-height:1.7}
.reviews-row{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;margin-top:40px}
.review-card{background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:28px;box-shadow:0 2px 12px rgba(0,0,0,0.06)}
.review-avatar{font-size:2rem;margin-bottom:12px}
.review-text{font-size:0.9rem;color:#4a5568;line-height:1.7;margin-bottom:16px;font-style:italic}
.review-stars{color:#C9A84C;font-size:1rem;margin-bottom:8px}
.review-name{font-weight:700;color:#1a1a2e;font-size:0.9rem}
.review-loc{font-size:0.82rem;color:#718096}
.yellow-band{background:#C9A84C;padding:24px 0;text-align:center}
.yellow-band-text{font-size:1.3rem;font-weight:800;color:#fff;margin:0}
@media(max-width:900px){.hero-inner{grid-template-columns:1fr}.two-col{grid-template-columns:1fr}.two-col.reverse{direction:ltr}.two-col-equal{grid-template-columns:1fr}.contact-band-inner{flex-direction:column;align-items:flex-start}}
@media(max-width:600px){.form-row{grid-template-columns:1fr}}
</style>
