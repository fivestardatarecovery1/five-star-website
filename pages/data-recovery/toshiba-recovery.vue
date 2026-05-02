<script setup lang="ts">
useSeoMeta({
  title: 'Toshiba Data Recovery Services — Five Star Data Recovery',
  description: 'Is your Toshiba external hard drive not working? You’re not alone. Toshiba drives are commonly used for storing important files, backup data, and media collecti'
})
const faqs = [
  { q: '1. Can I mail in my Toshiba drive for recovery if I’m not local?', a: 'Yes! We offer free round-trip nationwide shipping. Just fill out our mail-in form, and we’ll send you a prepaid shipping label to get your Toshiba drive safely to our lab — no matter where you’re located.' },
  { q: '2. Do you support data recovery from Toshiba SSDs?', a: 'Yes. In addition to HDDs, we provide Toshiba SSD data recovery services, including recovery from NVMe and SATA-based solid-state drives. Our team handles both logical and physical SSD failures.' },
  { q: '3. Do you work with Mac-formatted Toshiba drives?', a: 'Yes. We support macOS, Windows, and Linux file systems across all Toshiba HDD and SSD models.' },
  { q: '4. Can you recover data from Toshiba drives with physical damage?', a: 'Yes. If your Toshiba drive is physically damaged (e.g., dropped, making clicking sounds, or not spinning), our lab is equipped with a Class 100 Cleanroom to safely perform mechanical repairs and recover your data.' },
  { q: '5. My Toshiba external hard drive is not showing up. Can you still recover the data?', a: 'Absolutely. A Toshiba external hard drive not showing up may be due to logical errors, firmware corruption, or a bad USB port. Our diagnostic process will pinpoint the issue and determine the best recovery method.' }
]

const reviews = [
  { text: 'My Toshiba external hard drive stopped spinning and wasn\'t being detected by my computer at all. I contacted Five Star Data Recovery and spoke with Elen, who guided me through the entire process. They were able to recover 100% of my files, including irreplaceable family photos. Their communication and professionalism were outstanding.', name: 'Mark S.', location: 'San Diego, CA' },
  { text: 'I had over 2TB of business files on my Toshiba drive that suddenly failed. The drive wasn\'t making any noise but simply wouldn\'t show up on my PC. Five Star Data Recovery diagnosed the issue quickly and recovered nearly 98% of my data. They were honest, fast, and the flat-rate pricing made the whole process stress-free.', name: 'Rachel K.', location: 'Portland, OR' },
  { text: 'My Toshiba laptop crashed and wouldn\'t boot, leaving me locked out of all my work files. Alex handled my recovery and explained every step they were taking. Within a few days, I had all my documents and client data back. Highly recommend Five Star if you\'re dealing with a Toshiba data loss situation.', name: 'Anthony L.', location: 'Glendale, CA' }
]

const whyUs = [
  { title: 'Cleanroom-Certified', desc: 'Cleanroom-certified repair environment for safe mechanical recovery on physically damaged Toshiba drives.' },
  { title: 'Flat-Rate Pricing', desc: 'Transparent, flat-rate pricing — you know the exact cost before we begin any recovery work.' },
  { title: 'Free Diagnostics', desc: 'Free diagnostics and "no data, no charge" policy — you only pay when we succeed.' },
  { title: 'Real-Time Updates', desc: 'Real-time updates throughout the process so you\'re never left wondering about your case.' },
  { title: 'Nationwide Service', desc: 'Trusted by businesses, creatives, and individuals nationwide with free round-trip shipping.' }
]
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="Toshiba Data Recovery Services"
      subtitle="Get Your Data Back In No Time."
      description="Is your Toshiba external hard drive not working? You're not alone. Toshiba drives are commonly used for storing important files, backup data, and media collections. But like all storage devices, they can fail. When that happens, it's not just the device that's at risk—it's everything stored on it."
    >
      <template #badges>
        <div class="trust-badges">
          <span class="badge">✅ Free Evaluation</span>
          <span class="badge">✅ No Data, No Charge</span>
          <span class="badge">✅ Flat-Rate Pricing</span>
          <span class="badge">✅ 21,000+ Recoveries</span>
        </div>
      </template>
    </HeroSection>
    <StatsBar />

    <!-- Why Drives Stop Working -->
    <section class="issues-section section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Why Toshiba Hard Drives Stop Working</h2>
        </div>
        <div class="issues-layout">
          <div class="issues-intro">
            <p>Toshiba drives are durable, but they're not immune to problems. Some of the most common reasons a Toshiba external hard drive is not working include:</p>
          </div>
          <ul class="issues-list">
            <li>Power issues related to a faulty USB port or cable</li>
            <li>File system errors or corrupt partitions</li>
            <li>Disk drive not assigned a proper letter in disk management</li>
            <li>Physically damaged components from drops or overheating</li>
            <li>Internal wear and tear or mechanical failure</li>
            <li>Errors after being accidentally deleted or formatted</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Signs Your Drive Needs Recovery -->
    <section class="issues-section section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Signs Your Toshiba Drive Needs Recovery</h2>
        </div>
        <div class="issues-layout">
          <div class="issues-intro">
            <p>If you notice any of the following issues, it's time to consider professional help:</p>
          </div>
          <ul class="issues-list">
            <li>The device powers on, but the drive doesn't show up on your computer</li>
            <li>Your system asks to format the drive when connected</li>
            <li>The drive shows up in disk management but without a label</li>
            <li>You're unable to assign a drive letter and paths</li>
            <li>Clicking or buzzing noises from inside the Toshiba HDD</li>
            <li>Slow response, freezing, or missing folders</li>
            <li>You accidentally deleted files you now need back</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- What Not To Do -->
    <section class="content-section section-bg-2 section-pad">
      <div class="container content-narrow">
        <h2 class="content-title">What Not to Do If Your Toshiba External Drive Fails</h2>
        <p>Many users try DIY methods to fix Toshiba external drives using free recovery software or YouTube tutorials. But if your drive is physically damaged or not detected at all, using these tools could permanently overwrite or destroy recoverable data.</p>
        <p>Avoid these risky steps:</p>
        <ul class="secure-list">
          <li>Don't open the drive casing yourself</li>
          <li>Don't run "chkdsk" or format utilities if the drive is unreadable</li>
          <li>Don't continue reconnecting the drive to different ports repeatedly</li>
          <li>Don't use system tools if you hear clicking or buzzing noises</li>
        </ul>
      </div>
    </section>

    <!-- Process Steps -->
    <section class="process-section section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Toshiba Data Recovery Process</h2>
          <p class="section-subtitle">We take every case seriously and follow a step-by-step recovery plan:</p>
        </div>
        <div class="process-grid">
          <div class="process-card">
            <div class="process-num">01</div>
            <h3 class="process-title">Diagnostic Assessment</h3>
            <p class="process-desc">We begin by inspecting your Toshiba hard disk to determine whether the issue is logical, physical, or firmware-related.</p>
          </div>
          <div class="process-card">
            <div class="process-num">02</div>
            <h3 class="process-title">Secure Imaging</h3>
            <p class="process-desc">If the drive is unstable, we clone it sector-by-sector to avoid damaging the original during recovery.</p>
          </div>
          <div class="process-card">
            <div class="process-num">03</div>
            <h3 class="process-title">Data Extraction</h3>
            <p class="process-desc">Using specialized tools, we extract files from the cloned image — even from corrupted sectors or formatted volumes.</p>
          </div>
          <div class="process-card">
            <div class="process-num">04</div>
            <h3 class="process-title">File Verification</h3>
            <p class="process-desc">You'll receive a file list to review. We recover full folder structures, filenames, and file types whenever possible.</p>
          </div>
          <div class="process-card">
            <div class="process-num">05</div>
            <h3 class="process-title">Data Delivery</h3>
            <p class="process-desc">Recovered data is returned on a new drive or USB, fully tested and verified.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Physically Damaged Drives -->
    <section class="content-section section-bg-1 section-pad">
      <div class="container content-narrow">
        <h2 class="content-title">Recovery for Physically Damaged Toshiba Drives</h2>
        <p>If your Toshiba hard disk was dropped or suffered impact, recovery often requires cleanroom work. Our technicians can:</p>
        <ul class="secure-list">
          <li>Replace failed read/write heads</li>
          <li>Repair damaged PCBs and firmware</li>
          <li>Realign components after physical shock</li>
          <li>Extract data from broken platters or enclosures</li>
        </ul>
        <p>Physically damaged drives should never be powered on repeatedly. Doing so increases the risk of scratching platters or further degrading the drive.</p>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="why-section section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Why Choose Five Star Data Recovery?</h2>
        </div>
        <div class="grid-3">
          <div class="feature-card" v-for="f in whyUs" :key="f.title">
            <div class="feature-icon">✓</div>
            <h3 class="feature-title">{{ f.title }}</h3>
            <p class="feature-desc">{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="reviews-section section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Testimonials from Satisfied Clients</h2>
        </div>
        <div class="reviews-grid">
          <div class="review-card" v-for="r in reviews" :key="r.name">
            <div class="review-stars">★★★★★</div>
            <p class="review-text">"{{ r.text }}"</p>
            <div class="review-author">{{ r.name }} — {{ r.location }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Nationwide Service -->
    <section class="content-section section-bg-1 section-pad">
      <div class="container content-narrow">
        <h2 class="content-title">Nationwide Service with Free Shipping</h2>
        <p>Although we're based in Los Angeles, we serve clients across the U.S. We provide free round-trip shipping for Toshiba drive recovery cases.</p>
        <p>Simply start a case online, print the prepaid shipping label, and send your storage device to our lab. Once your case is complete, your lost data is returned securely.</p>
      </div>
    </section>

    <!-- CTA Band -->
    <section class="cta-band">
      <div class="container cta-band-inner">
        <div>
          <h2 class="cta-title">Get Started with Toshiba Data Recovery</h2>
          <p class="cta-sub">Don't let data loss from a broken Toshiba HDD derail your work or memories. Whether your Toshiba external hard drive is not working, or you've suffered file corruption or deletion, we can help.</p>
          <ul class="cta-list">
            <li>Drop off your drive at our Glendale lab</li>
            <li>Ship it to us free from anywhere in the U.S.</li>
            <li>Call now for a free evaluation and quote</li>
          </ul>
        </div>
        <div class="cta-actions">
          <a href="tel:8182728866" class="btn btn-gold">📞 818-272-8866</a>
          <NuxtLink to="/data-recovery/free-quote" class="btn btn-outline">Get Free Quote</NuxtLink>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq-section section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Frequently Asked Questions</h2>
        </div>
        <div class="faq-list">
          <div v-for="(faq, i) in faqs" :key="i" class="faq-item" :class="{ open: openFaq === i }">
            <button class="faq-question" @click="toggleFaq(i)">
              <span>{{ faq.q }}</span>
              <span class="faq-icon">{{ openFaq === i ? '−' : '+' }}</span>
            </button>
            <div v-if="openFaq === i" class="faq-answer">{{ faq.a }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-band section-bg-2">
      <div class="container cta-band-inner">
        <div>
          <h2 class="cta-title">Need Help With Toshiba Data Recovery Services?</h2>
          <p class="cta-sub">Free evaluation. No data, no charge. Contact us today.</p>
        </div>
        <div class="cta-actions">
          <a href="tel:8182728866" class="btn btn-gold">📞 818-272-8866</a>
          <NuxtLink to="/data-recovery/free-quote" class="btn btn-outline">Get Free Quote</NuxtLink>
        </div>
      </div>
    </section>
    <FooterBar />
  </div>
</template>

<style scoped>
.trust-badges { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 8px; }
.badge { background: rgba(255,255,255,0.06); border: 1px solid var(--border); color: var(--white); padding: 7px 14px; border-radius: 20px; font-size: 13px; font-weight: 500; }
.section-pad { padding: 80px 0; }
.process-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px; margin-top: 40px; }
.process-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 28px 24px; }
.process-num { font-size: 2.5rem; font-weight: 900; color: #C9A84C; line-height: 1; margin-bottom: 12px; }
.process-title { font-size: 1rem; font-weight: 700; color: #fff; margin-bottom: 10px; }
.process-desc { font-size: 0.9rem; color: rgba(255,255,255,0.6); line-height: 1.6; }
.reviews-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-top: 40px; }
.review-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 28px; }
.review-stars { color: #C9A84C; font-size: 1.1rem; margin-bottom: 12px; }
.review-text { font-size: 0.95rem; color: rgba(255,255,255,0.75); line-height: 1.7; margin-bottom: 16px; font-style: italic; }
.review-author { font-size: 0.875rem; font-weight: 700; color: #C9A84C; }
.grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; margin-top: 40px; }
.feature-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 28px 24px; }
.feature-icon { font-size: 1.5rem; color: #C9A84C; margin-bottom: 12px; }
.feature-title { font-size: 1rem; font-weight: 700; color: #fff; margin-bottom: 8px; }
.feature-desc { font-size: 0.9rem; color: rgba(255,255,255,0.6); line-height: 1.6; }
.issues-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; margin-top: 32px; align-items: start; }
.issues-intro p { font-size: 1rem; color: rgba(255,255,255,0.75); line-height: 1.8; }
.issues-list { list-style: none; padding: 0; margin: 0; }
.issues-list li { padding: 10px 0 10px 28px; position: relative; font-size: 0.95rem; color: rgba(255,255,255,0.75); border-bottom: 1px solid rgba(255,255,255,0.06); }
.issues-list li::before { content: '✓'; position: absolute; left: 0; color: #C9A84C; font-weight: 700; }
.content-narrow { max-width: 860px; margin: 0 auto; }
.content-title { font-size: 1.75rem; font-weight: 800; color: #fff; margin-bottom: 24px; }
.content-narrow p { font-size: 1rem; color: rgba(255,255,255,0.75); line-height: 1.8; margin-bottom: 18px; }
.secure-list { list-style: none; padding: 0; margin: 16px 0 0; }
.secure-list li { padding: 8px 0 8px 24px; position: relative; font-size: 0.95rem; color: rgba(255,255,255,0.75); }
.secure-list li::before { content: '→'; position: absolute; left: 0; color: #C9A84C; }
.cta-band { background: linear-gradient(135deg, #0f1220, #13161F); border-top: 1px solid rgba(255,255,255,0.08); padding: 72px 0; }
.cta-band-inner { display: flex; justify-content: space-between; align-items: flex-start; gap: 48px; flex-wrap: wrap; }
.cta-title { font-size: 2rem; font-weight: 900; color: #fff; margin-bottom: 12px; }
.cta-sub { font-size: 1rem; color: rgba(255,255,255,0.65); line-height: 1.7; margin-bottom: 16px; max-width: 540px; }
.cta-list { list-style: none; padding: 0; margin: 0 0 24px; }
.cta-list li { padding: 6px 0 6px 24px; position: relative; font-size: 0.95rem; color: rgba(255,255,255,0.75); }
.cta-list li::before { content: '→'; position: absolute; left: 0; color: #C9A84C; }
.cta-actions { display: flex; gap: 16px; flex-wrap: wrap; align-items: center; }
.btn-outline { display: inline-block; padding: 14px 28px; border: 2px solid #C9A84C; color: #C9A84C; border-radius: 8px; font-weight: 700; font-size: 0.95rem; text-decoration: none; }
.btn-outline:hover { background: rgba(201,168,76,0.1); }
.faq-list { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 8px; }
.faq-item { background: var(--card-bg); border: 1px solid var(--border); border-radius: 10px; overflow: hidden; }
.faq-item.open { border-color: var(--gold); }
.faq-question { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; background: none; border: none; color: var(--white); font-size: 16px; font-weight: 600; cursor: pointer; text-align: left; gap: 12px; font-family: var(--font-body); }
.faq-icon { color: var(--gold); font-size: 22px; font-weight: 400; flex-shrink: 0; }
.faq-answer { padding: 0 24px 20px; font-size: 15px; color: var(--muted); line-height: 1.7; }
@media (max-width: 768px) { .issues-layout { grid-template-columns: 1fr; } .cta-band-inner { flex-direction: column; } }
</style>
