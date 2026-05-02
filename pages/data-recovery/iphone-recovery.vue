<script setup lang="ts">
useSeoMeta({
  title: 'iPhone Data Recovery Services — Five Star Data Recovery',
  description: 'Our Component Level iPhone Data Recovery is offered at a flat rate of $950.00, with no hidden fees. When your case is brought in, we collect a $200 refundable d'
})
const faqs = [
  { q: '1. Can you recover data from a physically damaged iPhone?', a: 'Yes. Our iPhone data recovery service specializes in retrieving data from physically damaged devices, including those with water damage, broken logic boards, or failed components. We perform component-level repairs in-house to safely extract data when standard software tools won’t work.' },
  { q: '2. What types of data can you recover from an iPhone?', a: 'We can recover photos, videos, contacts, messages, call logs, notes , and other important data stored directly on your iPhone. If the data is still on the device and hasn’t been overwritten, we have a strong chance of recovering it — even if the phone is no longer powering on.' },
  { q: '3. Can you recover deleted files from an iPhone?', a: 'No, we do not offer deleted file recovery for iPhones. Our focus is on recovering data from physically damaged or non-functional iPhones , not files that were accidentally deleted from working devices.' },
  { q: '4. How much does iPhone data recovery cost?', a: 'Our Component Level iPhone Data Recovery is offered at a flat rate of $950.00, with no hidden fees. When your case is brought in, we collect a $200 refundable deposit to begin the process. If we’re unable to recover your data, the deposit is fully refunded—as long as the device hasn’t been previously tampered with at the component level. If the recovery is successful, the $200 deposit is applied toward the total cost, and the customer simply pays the remaining $750.00 balance. You only pay if we recover your data. For more information, please visit our Pricing Page or contact us for a free consultation.' },
  { q: '5. Can I ship my iPhone in for recovery?', a: 'Yes. We offer free nationwide shipping within the U.S. If you’re located outside of our service area, we’ll provide a prepaid shipping label so you can send your iPhone to our secure recovery lab with ease.' },
  { q: '6. Is my data safe during the recovery process?', a: 'Absolutely. We follow strict security protocols and never access or share your personal data. Your privacy is a top priority, and all recovered data is returned to you securely.' },
  { q: '7. Is there a no data, no charge policy?', a: 'Yes. Our No Data, No Charge policy applies to all iPhone recoveries — you only pay if we successfully recover your data. The only exceptions are cases where the phone’s internal components have been tampered with or the cover has been opened, which may require a non-refundable evaluation fee.' },
  { q: '8. What if my iPhone was repaired by another shop before I brought it in?', a: 'We can still attempt iPhone data recovery, even if another repair shop has worked on the device. However, if the iPhone has had component-level repair attempts (such as board work, micro-soldering, or chip replacements), a non-refundable $200.00 evaluation fee will apply due to the increased complexity and risk. This fee does not apply to basic repairs like screen or battery replacements. If your device has been previously opened for board-level service, please let us know during your consultation.' },
  { q: '9. Can you recover data from an iPhone stuck in a boot loop or showing the Apple logo?', a: 'Yes, we specialize in iPhone data recovery from devices stuck in a boot loop or frozen on the Apple logo. These issues are often caused by system corruption or hardware failure. Our engineers perform board-level diagnostics to restore temporary functionality and extract your important files safely.' },
  { q: '10. Do you recover data from iPhones that have been in saltwater or extreme conditions?', a: 'We do recover data from water-damaged iPhones, including those exposed to saltwater, rain, or extreme heat. Saltwater damage is particularly aggressive, so immediate evaluation is critical. Bring the phone to us as soon as possible and avoid powering it on — this increases the chances of a successful iPhone data recovery.' }
]
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="iPhone Data Recovery Services"
      subtitle="Has your iPhone suddenly gone dead? Water damaged? Stuck on the Apple logo or showing no signs of life? At Five Star Data Recovery, we specialize in advanced, component-level iPhone data recovery. We do not offer deleted file recovery—our focus is on physically or electrically damaged iPhones. We may still be able to recover your data, even if someone says it’s gone."
      description="Our Component Level iPhone Data Recovery is offered at a flat rate of $950.00, with no hidden fees. When your case is brought in, we collect a $200 refundable deposit to begin the process. If we’re unable to recover your data, the deposit is fully refunded—as long as the device hasn’t been previousl"
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

        <section class="process-section section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our iPhone Data Recovery Process</h2>
        </div>
        <div class="process-grid">
          <div class="process-card">
            <div class="process-num">01</div>
            <h3 class="process-title">Free Diagnostic</h3>
            <p class="process-desc">We assess the board for damage.</p>
          </div>
          <div class="process-card">
            <div class="process-num">02</div>
            <h3 class="process-title">Flat-Rate Quote</h3>
            <p class="process-desc">We provide upfront pricing before any recovery work begins.</p>
          </div>
          <div class="process-card">
            <div class="process-num">03</div>
            <h3 class="process-title">Board-Level Repair</h3>
            <p class="process-desc">We restore basic functions only to access your data.</p>
          </div>
          <div class="process-card">
            <div class="process-num">04</div>
            <h3 class="process-title">Secure Extraction</h3>
            <p class="process-desc">We perform a complete data recovery from iPhone memory.</p>
          </div>
          <div class="process-card">
            <div class="process-num">05</div>
            <h3 class="process-title">Delivery</h3>
            <p class="process-desc">We return your files on a USB drive or through secure digital transfer.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Trusted iPhone Data Recovery in Glendale, CA</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>All iPhone models (6 through 15, including Pro/Pro Max)</li>
            <li>iOS devices like iPads (select cases)</li>
            <li>Devices damaged by fire, liquid, or failed repairs</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Why Clients Choose Five Star Data Recovery</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Real component-level logic board repair</li>
            <li>Specialized equipment for iPhone-level diagnostics</li>
            <li>Private, secure, and confidential service</li>
            <li>Transparent communication throughout the process</li>
            <li>No data, no charge – guaranteed</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Request a Free Quote</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Start Your Data Recovery Today</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Walk in to our lab in Glendale, CA</li>
            <li>Mail in your device from anywhere in the U.S.</li>
            <li>Call now for a free diagnostic</li>
          </ul>
          <p>Data loss is stressful — but working with us doesn’t have to be. Watch how our team handles each recovery with care, professionalism, and precision. From diagnostics to delivery, we offer flat-rate pricing, honest communication, and proven results — all from our secure Glendale lab.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Testimonials from Satisfied Clients</h2>
        </div>
        <div class="section-body">

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
          <h2 class="cta-title">Need Help With iPhone Data Recovery Services?</h2>
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
