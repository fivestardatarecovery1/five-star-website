<script setup lang="ts">
useSeoMeta({
  title: 'Data Recovery Mail In Form — Five Star Data Recovery',
  description: 'Our data recovery process is built around security, transparency, and peace of mind. From start to finish, we keep you informed with clear updates at every stag'
})
const faqs = [
  { q: '1. What is the Mail-In Data Recovery Form?', a: 'The Mail-In Data Recovery Form allows customers to start their data recovery case remotely by shipping their device directly to us. Filling out this form ensures your device is properly logged into our system and processed without delays upon arrival.' },
  { q: '2. How do I send in my device for mail-in data recovery?', a: 'Simply complete the Mail-In Recovery Form, and we’ll send you a prepaid shipping label for your convenience. Once you receive it, securely package your device, include the completed form inside the box, and drop it off at your nearest shipping location. Our preferred carriers are FedEx and USPS.' },
  { q: '3. What devices can I send in for data recovery?', a: 'We accept hard drives, SSDs, iPhones, USB flash drives, RAID arrays, SD cards, and other common storage media. If you’re unsure whether we can recover your specific device, feel free to contact us first for a free consultation.' },
  { q: '4. Do I need to pay anything upfront when mailing in a device?', a: 'Most standard data recovery cases require no upfront payment. However, certain services like iPhone component-level recovery or deleted file recovery may require a refundable deposit. Details will be provided during your initial phone consultation.' },
  { q: '5. How long does the mail-in recovery process take?', a: 'Once we receive your device, you’ll get a same-day diagnostic report (by midnight). Standard recoveries take 3–5 business days, depending on the issue. For urgent cases, we offer Expedited and Expedited Plus Services with top priority handling.' },
  { q: '6. Is shipping covered by your company?', a: 'Yes! We cover all shipping costs for our mail-in data recovery service. Once you complete the Mail-In Recovery Form, we’ll provide a prepaid shipping label so you can securely send your device to us at no charge. We also cover the return shipping of your recovered data.' },
  { q: '7. Is my data safe during the mail-in process?', a: 'Yes. We use strict protocols to secure and track every device we receive. Once the recovery is complete, your data is transferred to a secure return drive and shipped back safely. We never access, share, or store your data beyond the recovery process.' },
  { q: '8. How do I know when you\'ve received my package?', a: 'We’ll notify you by phone or email as soon as your device arrives and is logged into our system. Diagnostics begin right away, and you’ll receive your evaluation report the same day before midnight.' },
  { q: '9. Can I track the progress of my recovery case?', a: 'Absolutely. Once your device is in our system, our team provides regular updates through our ticketing system. You can also reach out to us for a status update.' },
  { q: '10. Where can I find the Mail-In Recovery Form?', a: 'You can access and complete the form directly on our Mail-In Form page. Make sure to print a copy and include it in your package for fast intake and identification.' }
]
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="Data Recovery Mail In Form"
      subtitle="Can’t visit us in person? No problem. Just fill out our Mail-In Data Recovery Form to receive a prepaid shipping label — we cover free round-trip shipping anywhere in the U.S. Ship your device to us, and it will arrive at our lab in less than 2 days. Once received, we’ll begin diagnostics and keep you updated every step of the way — all backed by our No Data, No Charge policy."
      description="Our data recovery process is built around security, transparency, and peace of mind. From start to finish, we keep you informed with clear updates at every stage. With a commitment to honest service and no hidden fees, we follow through on every promise — ensuring a smooth and stress-free experience"
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
          <h2 class="section-title">Data Recovery Mail In Form</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Can’t visit us in person? No problem. Just fill out our Mail-In Data Recovery Form to receive a prepaid shipping label — we cover free round-trip shipping anywhere in the U.S. Ship your device to us, and it will arrive at our lab in less than 2 days. Once received, we’ll begin diagnostics and keep you updated every step of the way — all backed by our No Data, No Charge policy.</h2>
        </div>
        <div class="section-body">
          <p>[forminator_form id=&quot;3056&quot;]</p>
        </div>
      </div>
    </section>
        <section class="process-section section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Data Recovery Process</h2>
          <p class="section-subtitle">Our data recovery process is built around security, transparency, and peace of mind. From start to finish, we keep you informed with clear updates at every stage.</p>
        </div>
        <div class="process-grid">
          <div class="process-card">
            <div class="process-num">01</div>
            <h3 class="process-title">Drop off or Mail in Your Drive</h3>
            <p class="process-desc">Bring your device to our Glendale lab or ship it to us free from anywhere in the U.S.</p>
          </div>
          <div class="process-card">
            <div class="process-num">02</div>
            <h3 class="process-title">Receive a Free Diagnosis</h3>
            <p class="process-desc">Our team will evaluate your device and provide a detailed diagnosis along with an initial quote — completely free of charge and with no obligation to proceed.</p>
          </div>
          <div class="process-card">
            <div class="process-num">03</div>
            <h3 class="process-title">Our Engineers Work on Recovering Your Data</h3>
            <p class="process-desc">We carefully begin the recovery process using advanced tools and cleanroom procedures.</p>
          </div>
          <div class="process-card">
            <div class="process-num">04</div>
            <h3 class="process-title">Review &amp; Approve the Recovered</h3>
            <p class="process-desc">After recovery is complete, you'll receive a detailed file list to review so you can confirm everything important has been successfully recovered.</p>
          </div>
          <div class="process-card">
            <div class="process-num">05</div>
            <h3 class="process-title">Receive Your Recovered Data</h3>
            <p class="process-desc">Once approved, we'll securely transfer your data to a new drive and return it to you via pickup or insured shipping — ready for immediate use.</p>
          </div>
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
          <h2 class="cta-title">Need Help With Data Recovery Mail In Form?</h2>
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

/* Process cards */
.process-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px; margin-top: 40px; }
.process-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 28px 24px; }
.process-num { font-size: 2.5rem; font-weight: 900; color: #C9A84C; line-height: 1; margin-bottom: 12px; }
.process-title { font-size: 1rem; font-weight: 700; color: #fff; margin-bottom: 10px; }
.process-desc { font-size: 0.9rem; color: rgba(255,255,255,0.6); line-height: 1.6; }
/* Review cards */
.reviews-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-top: 40px; }
.review-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 28px; }
.review-stars { color: #C9A84C; font-size: 1.1rem; margin-bottom: 12px; }
.review-text { font-size: 0.95rem; color: rgba(255,255,255,0.75); line-height: 1.7; margin-bottom: 16px; font-style: italic; }
.review-author { font-size: 0.875rem; font-weight: 700; color: #C9A84C; }
/* Feature cards */
.grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; margin-top: 40px; }
.feature-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 28px 24px; }
.feature-icon { font-size: 1.5rem; color: #C9A84C; margin-bottom: 12px; }
.feature-title { font-size: 1rem; font-weight: 700; color: #fff; margin-bottom: 8px; }
.feature-desc { font-size: 0.9rem; color: rgba(255,255,255,0.6); line-height: 1.6; }
/* Issues list */
.issues-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; margin-top: 32px; align-items: start; }
.issues-intro p { font-size: 1rem; color: rgba(255,255,255,0.75); line-height: 1.8; }
.issues-list { list-style: none; padding: 0; margin: 0; }
.issues-list li { padding: 10px 0 10px 28px; position: relative; font-size: 0.95rem; color: rgba(255,255,255,0.75); border-bottom: 1px solid rgba(255,255,255,0.06); }
.issues-list li::before { content: '✓'; position: absolute; left: 0; color: #C9A84C; font-weight: 700; }
/* Content text sections */
.content-narrow { max-width: 860px; margin: 0 auto; }
.content-title { font-size: 1.75rem; font-weight: 800; color: #fff; margin-bottom: 24px; }
.content-narrow p { font-size: 1rem; color: rgba(255,255,255,0.75); line-height: 1.8; margin-bottom: 18px; }
.secure-list { list-style: none; padding: 0; margin: 0; }
.secure-list li { padding: 8px 0 8px 24px; position: relative; font-size: 0.95rem; color: rgba(255,255,255,0.75); }
.secure-list li::before { content: '→'; position: absolute; left: 0; color: #C9A84C; }
/* CTA extensions */
.cta-list { list-style: none; padding: 0; margin: 0 0 24px; }
.cta-list li { padding: 6px 0 6px 24px; position: relative; font-size: 0.95rem; color: rgba(255,255,255,0.75); }
.cta-list li::before { content: '→'; position: absolute; left: 0; color: #C9A84C; }

</style>
