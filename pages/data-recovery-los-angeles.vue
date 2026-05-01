<script setup lang="ts">
useSeoMeta({
  title: 'Data Recovery in Los Angeles, CA | Five Star Data Recovery',
  description: 'Professional data recovery services in Los Angeles, CA. Hard drives, SSDs, RAID, iPhones, and more. Free same-day pickup available. No data = no charge. Call 323-672-3000.'
})
const services = [
  'Hard Drive Recovery','SSD Recovery','RAID & NAS Recovery','Laptop Recovery',
  'Mac Recovery','iPhone Recovery','External HDD Recovery','USB Flash Drive Recovery',
  'SD Card Recovery','Desktop Recovery','Deleted File Recovery','Clean Room Recovery'
]
const faqs = [
  { q: 'Do I need to come to your lab or can I mail my device?', a: 'Both options work. You can visit our Glendale lab (just outside Los Angeles) in person, or use our free prepaid mail-in service. We offer free same-day pickup in most Los Angeles areas too.' },
  { q: 'How quickly can you start on my case?', a: 'We begin diagnosis the same day we receive your device. For urgent cases, call us first and we will prioritize your intake.' },
  { q: 'Is there a charge for the evaluation?', a: 'No. The initial diagnostic evaluation is completely free, with no obligation to proceed with recovery.' },
  { q: 'What is your success rate?', a: 'We have successfully recovered data from thousands of drives. Our success rate for standard recoveries is very high. We will give you an honest assessment during the free evaluation.' },
]
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>
<template>
  <div>
    <NavBar />
    <HeroSection
      title="Data Recovery in Los Angeles"
      subtitle="Expert Recovery Service for Los Angeles Residents and Businesses."
      description="Five Star Data Recovery serves customers throughout Los Angeles and the surrounding area. Free same-day pickup available. Professional lab in Glendale, CA — just minutes away. No data = no charge."
    >
      <template #badges>
        <div class="trust-badges">
          <span class="badge">✅ Serving Los Angeles</span>
          <span class="badge">✅ Free Pickup Available</span>
          <span class="badge">✅ Free Evaluation</span>
          <span class="badge">✅ 24/7 Available</span>
        </div>
      </template>
    </HeroSection>
    <section class="intro-section">
      <div class="container">
        <div class="section-header"><h2 class="section-title">Data Recovery <span class="gold-underline gold">in Los Angeles</span></h2></div>
        <div class="intro-content">
          <p>If you've lost important data in Los Angeles, you're not out of options. Five Star Data Recovery serves the entire Los Angeles area with professional data recovery services for hard drives, SSDs, RAID systems, Macs, iPhones, USB drives, SD cards, and more.</p>
          <p>Our lab is conveniently located in Glendale — just minutes from downtown Los Angeles. We serve all of LA County including downtown LA, Westside, San Fernando Valley, South Bay, and surrounding communities. We offer free same-day pickup throughout most of Los Angeles.</p>
          <p>We offer free same-day pickup from most Los Angeles locations (Monday through Friday). Can't wait? Call us and we may be able to accommodate you even faster. Our Glendale lab is also open for walk-in drop-offs during business hours.</p>
        </div>
      </div>
    </section>
    <section class="services-section">
      <div class="container">
        <div class="section-header"><h2 class="section-title">Services We Offer <span class="gold-underline gold">in Los Angeles</span></h2></div>
        <div class="services-grid">
          <div v-for="s in services" :key="s" class="service-tag"><span class="tag-check">✓</span>{{ s }}</div>
        </div>
      </div>
    </section>
    <section class="trust-section">
      <div class="container">
        <div class="section-header"><h2 class="section-title">Why Los Angeles Customers <span class="gold-underline gold">Choose Five Star</span></h2></div>
        <div class="grid-3">
          <div class="card trust-card"><div class="trust-icon">🏆</div><h3 class="trust-title">No Data = No Charge</h3><p class="trust-desc">You only pay when we successfully recover your data. Complete peace of mind.</p></div>
          <div class="card trust-card"><div class="trust-icon">📍</div><h3 class="trust-title">Local & Accessible</h3><p class="trust-desc">Our Glendale lab is minutes from Los Angeles. Free same-day pickup available.</p></div>
          <div class="card trust-card"><div class="trust-icon">⭐</div><h3 class="trust-title">5.0 Star Rating</h3><p class="trust-desc">Hundreds of 5-star reviews from customers across the Los Angeles area.</p></div>
        </div>
      </div>
    </section>
    <section class="location-info-section">
      <div class="container">
        <div class="section-header"><h2 class="section-title">Visit Our <span class="gold-underline gold">Lab</span></h2></div>
        <div class="location-card card">
          <div class="location-detail"><span class="loc-icon">📍</span><div><strong>Five Star Data Recovery</strong><br>1731 S Brand Blvd Suite 100<br>Glendale, CA 91204</div></div>
          <div class="location-detail"><span class="loc-icon">📞</span><div><a href="tel:3236723000">323-672-3000</a><br>Available 24/7/365</div></div>
          <div class="location-detail"><span class="loc-icon">✈️</span><div>Free Nationwide Shipping<br>Prepaid label provided</div></div>
        </div>
      </div>
    </section>
    <section class="faq-section">
      <div class="container">
        <div class="section-header"><h2 class="section-title">Frequently Asked <span class="gold-underline gold">Questions</span></h2></div>
        <div class="faq-list">
          <div v-for="(faq, i) in faqs" :key="i" class="faq-item" :class="{ open: openFaq === i }">
            <button class="faq-question" @click="toggleFaq(i)"><span>{{ faq.q }}</span><span class="faq-icon">{{ openFaq === i ? '−' : '+' }}</span></button>
            <div v-if="openFaq === i" class="faq-answer">{{ faq.a }}</div>
          </div>
        </div>
      </div>
    </section>
    <section class="cta-band">
      <div class="container cta-band-inner">
        <div><h2 class="cta-title">Lost Data in Los Angeles?</h2><p class="cta-sub">Call now or request a free quote online. Same-day pickup available.</p></div>
        <div class="cta-actions"><a href="tel:3236723000" class="btn btn-gold">📞 323-672-3000</a><NuxtLink to="/data-recovery/free-quote" class="btn btn-outline-sm">Get Free Quote</NuxtLink></div>
      </div>
    </section>
    <FooterBar />
  </div>
</template>
<style scoped>
.trust-badges { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 8px; }
.badge { background: rgba(255,255,255,0.06); border: 1px solid var(--border); color: var(--white); padding: 7px 14px; border-radius: 20px; font-size: 13px; font-weight: 500; }
.intro-content p { font-size: 16px; color: var(--muted); line-height: 1.8; margin-bottom: 16px; max-width: 800px; }
.services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
.service-tag { display: flex; align-items: center; gap: 10px; font-size: 15px; color: var(--muted); background: var(--card-bg); border: 1px solid var(--border); border-radius: 8px; padding: 12px 16px; }
.tag-check { color: var(--gold); font-weight: 700; }
.trust-card { text-align: center; }
.trust-icon { font-size: 36px; margin-bottom: 12px; }
.trust-title { font-family: var(--font-heading); font-size: 16px; font-weight: 700; color: var(--white); margin-bottom: 8px; }
.trust-desc { font-size: 14px; color: var(--muted); }
.location-card { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
.location-detail { display: flex; gap: 14px; align-items: flex-start; font-size: 15px; color: var(--muted); line-height: 1.7; }
.loc-icon { font-size: 22px; flex-shrink: 0; }
.location-detail a { color: var(--gold); font-weight: 700; }
.faq-list { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 8px; }
.faq-item { background: var(--card-bg); border: 1px solid var(--border); border-radius: 10px; overflow: hidden; }
.faq-item.open { border-color: var(--gold); }
.faq-question { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; background: none; border: none; color: var(--white); font-size: 16px; font-weight: 600; cursor: pointer; text-align: left; gap: 12px; font-family: var(--font-body); }
.faq-icon { color: var(--gold); font-size: 22px; flex-shrink: 0; }
.faq-answer { padding: 0 24px 20px; font-size: 15px; color: var(--muted); line-height: 1.7; }
.cta-band { background: linear-gradient(135deg, #0f1220, #13161F); border-top: 1px solid var(--border); padding: 56px 0; }
.cta-band-inner { display: flex; justify-content: space-between; align-items: center; gap: 32px; flex-wrap: wrap; }
.cta-title { font-family: var(--font-heading); font-size: 28px; font-weight: 900; color: var(--white); margin-bottom: 8px; }
.cta-sub { font-size: 16px; color: var(--muted); }
.cta-actions { display: flex; gap: 16px; flex-wrap: wrap; }
.btn-outline-sm { display: inline-block; padding: 14px 28px; border: 2px solid var(--gold); color: var(--gold); border-radius: 8px; font-weight: 700; font-size: 15px; text-decoration: none; }
.btn-outline-sm:hover { background: rgba(245,200,66,0.1); }
@media (max-width: 768px) { .services-grid, .location-card { grid-template-columns: 1fr; } .cta-band-inner { flex-direction: column; } }
</style>
