<script setup lang="ts">
useSeoMeta({
  title: 'Data Recovery Glendale, CA — Five Star Data Recovery',
  description: 'Whether you’re a student with term papers, a small business owner safeguarding client data, or a creative professional preserving irreplaceable work, we know ho'
})
const faqs = [
  { q: '1. Where is your data recovery lab located in Glendale, CA?', a: 'Our data recovery lab is conveniently located in Glendale, CA, making it easy for local customers to drop off their devices for fast and reliable service. We also offer expedited options and same-day diagnostics.' },
  { q: '2. How fast is your turnaround time for Glendale data recovery?', a: 'Most recoveries for Glendale clients are completed within 3–5 business days. For urgent cases, we offer Expedited and Expedited Plus services with priority handling, including nights and weekends.' },
  { q: '3. Do you have a cleanroom at your Glendale location?', a: 'Yes, we use a certified Class 100 Clean Room environment for physically damaged hard drives at our Glendale facility , ensuring your device is handled with the highest level of care and precision.' },
  { q: '4. Can I still use your services if I\'m not located in Glendale?', a: 'Absolutely. While our lab is based in Glendale, CA, we offer free round-trip nationwide data recovery services. Once you fill out our mail-in form, we’ll send you a prepaid shipping label to get started quickly.' },
  { q: '5. Do you offer payment plans at your Glendale location?', a: 'Yes. We offer interest-free payment plans to Glendale customers with no credit check required . A 25% down payment is required, and the remaining balance must be paid before data is released.' },
  { q: '6. What is your success rate for data recovery at your Glendale lab?', a: 'We have a 98% success rate for data recovery. Whether your case involves logical damage, physical issues, or firmware problems, our Glendale engineers use advanced tools to safely retrieve your files.' },
  { q: '7. How soon will I get an update after dropping off my device in Glendale?', a: 'Whether you drop off, mail in, or use our local pickup service, you’ll receive an initial update the same day your device arrives at our Glendale lab. We’ll keep you informed every step of the way.' }
]
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="Data Recovery Glendale, CA"
      subtitle="Get Your Data Back In No Time."
      description="Whether you’re a student with term papers, a small business owner safeguarding client data, or a creative professional preserving irreplaceable work, we know how critical your files are. At Five Star Data Recovery, our Glendale lab has rescued data from a wide range of failures, including:"
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

    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Trusted Data Recovery Services in Glendale</h2>
        </div>
        <div class="section-body">
          <p>Whether you’re a student with term papers, a small business owner safeguarding client data, or a creative professional preserving irreplaceable work, we know how critical your files are. At Five Star Data Recovery, our Glendale lab has rescued data from a wide range of failures, including:</p>
          <ul class="content-list">
            <li>Crashed hard drives that no longer boot</li>
            <li>Drives that click or refuse to spin</li>
            <li>Failed SSDs and corrupted USB flash drives</li>
            <li>Water-soaked or dropped devices</li>
            <li>Accidentally deleted files and reformatted media</li>
            <li>Damaged RAID arrays and server volumes</li>
          </ul>
          <p>Every case receives meticulous care, precision engineering, and strict confidentiality. From straightforward recoveries to the most complex data loss scenarios, our team works tirelessly to restore your information safely.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Why Choose Us for Data Recovery in Glendale?</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Experienced Engineers - Our team consists of certified data recovery professionals who specialize in recovering data from all types of storage devices — from simple issues to the most complex failures.</li>
            <li>State-of-the-Art Clean Room Lab - All physical recoveries are performed in a certified clean room environment to ensure the safety of your device during disassembly and repair.</li>
            <li>Fast Turnaround Options -Need your data urgently? We offer both Expedited and Expedited Plus services to prioritize your recovery based on your timeline and level of urgency.</li>
            <li>No Outsourcing – All Work Done In-House- Your device stays in our Glendale lab from start to finish. We don’t ship your drive elsewhere or use third-party labs.</li>
            <li>Excellent Reputation &amp; Results - With hundreds of 5-star reviews and an industry-leading success rate, our track record speaks for itself.</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Recovery Process</h2>
        </div>
        <div class="section-body">
          <ol class="content-list">
            <li>Free Evaluation – We assess your device and provide a detailed quote.</li>
            <li>Cloning and Analysis – If needed, we create a sector-by-sector clone to protect your data.</li>
            <li>Data Extraction – We extract and reconstruct your files with advanced tools.</li>
            <li>Verification – You preview your recovered files before final delivery.</li>
            <li>Delivery – Get your data on a new storage device or securely delivered via other methods.</li>
          </ol>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Devices We Recover Data From</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Internal HDDs</li>
            <li>External Hard Drives</li>
            <li>Solid-State Drives (SSDs) &amp; Flash Drives</li>
            <li>Memory Cards: SD, CF, &amp; microSD</li>
            <li>Laptops &amp; Desktops (Mac &amp; PC)</li>
            <li>NAS Devices</li>
            <li>RAID Systems</li>
            <li>iPhones &amp; iPads (Hardware Recovery Only)</li>
            <li>Samsung Smartphones (Hardware Recovery Only)</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Get a Free Quote within Minutes!</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Quick and Secure Data Recovery</li>
            <li>Expert Engineers for All Devices</li>
            <li>No Data, No Fee Guarantee</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">RAID Data Recovery in Glendale</h2>
        </div>
        <div class="section-body">
          <p>In addition to standard hard drive recovery, we offer expert RAID data recovery services for both business and personal clients. Whether your RAID array has failed due to multiple disk errors, corrupted volumes, or a faulty controller, our engineers are equipped to safely rebuild your system and recover your data.</p>
          <ul class="content-list">
            <li>Cloning each drive to preserve the original data</li>
            <li>Rebuilding the RAID array from secure cloned images</li>
            <li>Using advanced tools to restore volumes and extract critical files</li>
            <li>Supporting RAID 0, 1, 5, 6, 10, 50, and hybrid configurations</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">We Recover All File Types</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Photos and videos</li>
            <li>Documents and spreadsheets</li>
            <li>RAW camera files and project files</li>
            <li>Software builds and system images</li>
            <li>Backup Files &amp; Virtual Machines</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Emergency and Expedited Service Options</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Expedited Service: Your case is placed at the top of the queue and worked on during normal business hours.</li>
            <li>Expedited Plus: Our top-tier emergency service ensures 24/7 recovery, including weekends and holidays.</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Testimonials from Satisfied Clients</h2>
        </div>
        <div class="section-body">
          <p>Data loss is stressful — but working with us doesn’t have to be. Watch how our team handles each recovery with care, professionalism, and precision. From diagnostics to delivery, we offer flat-rate pricing, honest communication, and proven results — all from our secure Glendale lab.</p>
        </div>
      </div>
    </section>

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
          <h2 class="cta-title">Need Help With Data Recovery Glendale, CA?</h2>
          <p class="cta-sub">Free evaluation. No data, no charge. Contact us today.</p>
        </div>
        <div class="cta-actions">
          <a href="tel:8182728866" class="btn btn-gold">📞 818-272-8866</a>
          <NuxtLink to="/data-recovery/free-quote" class="btn btn-outline-sm">Get Free Quote</NuxtLink>
        </div>
      </div>
    </section>
    <FooterBar />
  </div>
</template>

<style scoped>
.trust-badges { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 8px; }
.badge { background: rgba(255,255,255,0.06); border: 1px solid var(--border); color: var(--white); padding: 7px 14px; border-radius: 20px; font-size: 13px; font-weight: 500; }
.section-pad { padding: 72px 0; }
.section-body p { font-size: 16px; color: var(--muted); line-height: 1.8; margin-bottom: 16px; max-width: 860px; }
.section-body strong { color: var(--white); font-weight: 600; }
.content-list { padding-left: 20px; margin: 12px 0 16px; }
.content-list li { font-size: 15px; color: var(--muted); line-height: 1.7; margin-bottom: 8px; }
.faq-list { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 8px; }
.faq-item { background: var(--card-bg); border: 1px solid var(--border); border-radius: 10px; overflow: hidden; }
.faq-item.open { border-color: var(--gold); }
.faq-question { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; background: none; border: none; color: var(--white); font-size: 16px; font-weight: 600; cursor: pointer; text-align: left; gap: 12px; font-family: var(--font-body); }
.faq-icon { color: var(--gold); font-size: 22px; font-weight: 400; flex-shrink: 0; }
.faq-answer { padding: 0 24px 20px; font-size: 15px; color: var(--muted); line-height: 1.7; }
.cta-band { background: linear-gradient(135deg, #0f1220, #13161F); border-top: 1px solid var(--border); padding: 56px 0; }
.cta-band-inner { display: flex; justify-content: space-between; align-items: center; gap: 32px; flex-wrap: wrap; }
.cta-title { font-family: var(--font-heading); font-size: 28px; font-weight: 900; color: var(--white); margin-bottom: 8px; }
.cta-sub { font-size: 16px; color: var(--muted); }
.cta-actions { display: flex; gap: 16px; flex-wrap: wrap; }
.btn-outline-sm { display: inline-block; padding: 14px 28px; border: 2px solid var(--gold); color: var(--gold); border-radius: 8px; font-weight: 700; font-size: 15px; text-decoration: none; }
.btn-outline-sm:hover { background: rgba(245,200,66,0.1); }
@media (max-width: 768px) { .cta-band-inner { flex-direction: column; } }
</style>
