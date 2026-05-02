<script setup lang="ts">
useSeoMeta({
  title: 'Data Recovery Los Angeles — Five Star Data Recovery',
  description: 'If you\'ve lost important files, you\'re not alone—and you\'re not out of options. At Five Star Data Recovery, we offer fast, expert help with data recovery in Los'
})
const faqs = [
  { q: '1. Do you offer professional data recovery services in Los Angeles, CA?', a: 'Yes, we specialize in professional data recovery in Los Angeles. Whether you’re facing a failed hard drive, a corrupted SSD, or a non-responsive USB flash drive, our local recovery experts are here to help. We have over a decade of experience handling complex data loss scenarios, right here in the heart of Los Angeles.' },
  { q: '2. How long does a typical Los Angeles data recovery take?', a: 'Most standard recoveries take 3–5 business days. If your situation is urgent, we offer both Expedited and Expedited Plus services. Every recovery begins with a thorough diagnostic and we provide same-day updates for all Los Angeles-based drop-offs or pickups.' },
  { q: '3. Where is your data recovery lab located in Los Angeles?', a: 'Our certified recovery lab is just outside Los Angeles in Glendale, CA, and we proudly serve clients across the entire Los Angeles area. We also offer free same-day pickup for local clients and nationwide mail-in service for out-of-area recoveries.' },
  { q: '4. Is there a free diagnostic included with your Los Angeles data recovery service?', a: 'Yes—your diagnostic is free as long as you’re comfortable with the initial flat-rate quote we provide upfront. There are no hidden fees or surprises. If the scope of the recovery changes, you’ll have the option to approve the new rate or walk away without paying anything.' },
  { q: '5. What types of devices do you recover data from in Los Angeles?', a: 'We recover data from hard drives, SSDs, external drives, USB flash drives, SD cards, iPhones, MacBooks, iMacs, RAID arrays, and more. Whether you lost files due to accidental deletion, physical damage, or logical failure, our team is equipped to recover your data securely and efficiently.' },
  { q: '6. Do you offer emergency or same-day data recovery in Los Angeles?', a: 'Yes, we offer emergency data recovery services for Los Angeles clients. Our Expedited Plus Service is available 24/7 for time-sensitive situations. Your case is prioritized immediately, even outside normal business hours.' },
  { q: '7. Can you recover data from water-damaged or physically broken devices in Los Angeles?', a: 'Absolutely. We specialize in recovering data from physically damaged devices—including water-damaged hard drives, phones, MacBooks and SSDs. Our Los Angeles cleanroom lab is fully equipped to handle severe cases involving hardware failure.' },
  { q: '8. Do you provide business data recovery for companies in Los Angeles?', a: 'Yes, we offer professional data recovery services for businesses throughout Los Angeles. From RAID systems and servers to encrypted drives and file systems, we handle business-critical recoveries with confidentiality and offer NDAs upon request.' },
  { q: '9. What is your success rate for data recovery in Los Angeles?', a: 'We maintain a 98% success rate across most recovery cases. Thanks to our experienced engineers and certified cleanroom lab in Los Angeles, we’re able to recover data from a wide range of devices, even those considered unrecoverable by others.' },
  { q: '10. Is your Los Angeles data recovery lab certified?', a: 'Yes, our facility is ISO-certified and operates in a professional Class 100 cleanroom environment. This ensures all physically damaged drives are handled under optimal conditions for maximum recovery success.' }
]
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="Data Recovery Los Angeles"
      subtitle="Get Your Data Back In No Time."
      description="If you've lost important files, you're not alone—and you're not out of options. At Five Star Data Recovery, we offer fast, expert help with data recovery in Los Angeles. If your hard drive fails, your USB breaks or your SSD doesn’t appear, we can help. We will recover your files quickly and safely."
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
          <h2 class="section-title">Free Same-Day Pickup in Los Angeles</h2>
        </div>
        <div class="process-grid">
          <div class="process-card">
            <div class="process-num">01</div>
            <h3 class="process-title">Our data recovery</h3>
            <p class="process-desc">process is simple, effective, and secure.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Your Privacy Comes First</h2>
        </div>
        <div class="section-body">
          <p>We treat your data with complete confidentiality—just like we’d want our own handled. Whether you are a student with lost essays or a business with private files, we take steps to keep your data safe.</p>
          <p>We also offer:</p>
          <ul class="content-list">
            <li>Optional NDAs for sensitive projects</li>
            <li>Secure file transfers and storage</li>
            <li>Permanent file deletion after delivery (on request)</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Who We Help</h2>
        </div>
        <div class="section-body">
          <p>We provide data recovery services in Los Angeles for a wide range of people and businesses, including:</p>
          <ul class="content-list">
            <li>Students who accidentally deleted assignments or lost access to school projects</li>
            <li>Small businesses experiencing server crashes or corrupted files</li>
            <li>Creative professionals like photographers, editors, and producers who need to restore media</li>
            <li>Home users trying to recover family photos, videos, or personal documents</li>
            <li>IT departments and tech consultants managing RAID, NAS, or multi-drive failures</li>
            <li>Legal, healthcare, and finance professionals needing secure, confidential recovery</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Let’s RecoverYour Files</h2>
        </div>
        <div class="section-body">
          <p>If your files are stuck, corrupted, or just gone—don’t wait. Reach out to Five Star Data Recovery today. The sooner we start, the better your chance of a full recovery.</p>
          <ul class="content-list">
            <li>Based in Los Angeles – Serving all surrounding areas</li>
            <li>Free same-day pickup available (Mon–Fri)</li>
            <li>Call us now or create a ticket online</li>
          </ul>
          <p>Trust the recovery experts at Five Star for professional data recovery in Los Angeles, CA. Get your files back quickly.</p>
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
          <div class="reviews-grid">
            <div class="review-card">
              <div class="review-stars">★★★★★</div>
              <p class="review-text">"After my external hard drive suddenly stopped showing up, I reached out to Five Star Data Recovery. They explained the process clearly and gave me a flat-rate price with no hidden fees. Within a few days, I had all my files back—including hundreds of family photos I thought were gone forever. Highly recommended!"</p>
              <div class="review-author">Melissa C. — Los Angeles, CA</div>
            </div>
            <div class="review-card">
              <div class="review-stars">★★★★★</div>
              <p class="review-text">"The team at Five Star was incredible! My RAID system failed, and I was on the verge of losing years of business data. They walked me through the recovery process, kept me updated daily, and delivered a full recovery within the estimated timeframe. Their professionalism and expertise gave me real peace of mind."</p>
              <div class="review-author">David R. — Los Angeles, CA</div>
            </div>
            <div class="review-card">
              <div class="review-stars">★★★★★</div>
              <p class="review-text">"I had a clicking hard drive that I thought was beyond saving. Five Star Data Recovery handled everything quickly and professionally. The fact that they don’t charge unless they recover your data made the decision stress-free. Thankfully, they were able to recover everything I needed."</p>
              <div class="review-author">Jennifer M. — Los Angeles, CA</div>
            </div>
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
          <h2 class="cta-title">Need Help With Data Recovery Los Angeles?</h2>
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
