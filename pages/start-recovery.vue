<script setup lang="ts">
useSeoMeta({
  title: 'Start Your Data Recovery — Five Star Data Recovery',
  description: 'Start your data recovery with Five Star. Free evaluation, flat-rate pricing, no data = no charge. Mail in or drop off. Call 323-672-3000.'
})

const steps = [
  { num: '01', title: 'Contact Us', desc: 'Call 323-672-3000 or fill out our consultation form. Tell us about your device and what happened. We respond within 1 hour.' },
  { num: '02', title: 'Get Your Free Shipping Label', desc: 'We email you a free prepaid shipping label. Pack your device securely using our packing guidelines and drop it in any UPS or FedEx location.' },
  { num: '03', title: 'We Evaluate Your Device', desc: 'Within 24 hours of receiving your device, we perform a full diagnostic evaluation and provide you with an exact flat-rate quote.' },
  { num: '04', title: 'Approve & Begin', desc: 'Review the quote and file list. If you approve, we begin the recovery. If you decline, you owe nothing and we return your device.' },
  { num: '05', title: 'Review Your Files', desc: 'Once recovery is complete, you review the recovered file list before we transfer anything. You confirm everything important was recovered.' },
  { num: '06', title: 'Receive Your Data', desc: 'Your recovered data is transferred to a new external drive and shipped back to you. Local clients can pick up in person.' },
]
</script>
<template>
  <div>
    <NavBar />
    <HeroSection title="Start Your Data Recovery" subtitle="Fast. Simple. Risk-Free." description="Starting a data recovery with Five Star is easy. Contact us, ship your device for free, and we'll take care of the rest. You only pay when you're satisfied with the results." >
      <template #badges>
        <div class="trust-badges">
          <span class="badge">✅ Free Shipping Both Ways</span>
          <span class="badge">✅ Free Evaluation</span>
          <span class="badge">✅ No Data = No Charge</span>
          <span class="badge">✅ 1-Hour Response</span>
        </div>
      </template>
    </HeroSection>
    <section class="steps-section">
      <div class="container">
        <div class="section-header"><h2 class="section-title">How It <span class="gold-underline gold">Works</span></h2><p class="section-subtitle">Six simple steps from data loss to data recovered.</p></div>
        <div class="steps-grid">
          <div v-for="s in steps" :key="s.num" class="step-card card">
            <div class="step-num">{{ s.num }}</div>
            <h3 class="step-title">{{ s.title }}</h3>
            <p class="step-desc">{{ s.desc }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="options-section">
      <div class="container">
        <div class="section-header"><h2 class="section-title">How to Send <span class="gold-underline gold">Your Device</span></h2></div>
        <div class="grid-3">
          <div class="card option-card"><div class="opt-icon">✈️</div><h3 class="opt-title">Free Mail-In</h3><p class="opt-desc">We send you a free prepaid shipping label. Pack securely and drop off at any UPS or FedEx location. Insured shipping both ways.</p></div>
          <div class="card option-card"><div class="opt-icon">📍</div><h3 class="opt-title">Drop Off In Person</h3><p class="opt-desc">Visit our lab at 1731 S Brand Blvd Suite 100, Glendale, CA 91204. Walk-ins welcome during business hours.</p></div>
          <div class="card option-card"><div class="opt-icon">🚗</div><h3 class="opt-title">Free Pickup</h3><p class="opt-desc">Free same-day pickup available in most Los Angeles area locations. Contact us before noon for same-day service (Monday–Friday).</p></div>
        </div>
      </div>
    </section>
    <section class="cta-band">
      <div class="container cta-band-inner">
        <div><h2 class="cta-title">Ready to Start?</h2><p class="cta-sub">Call us or fill out the form. We respond within 1 hour.</p></div>
        <div class="cta-actions"><a href="tel:3236723000" class="btn btn-gold">📞 323-672-3000</a><NuxtLink to="/data-recovery/free-quote" class="btn btn-outline-sm">Get Free Quote</NuxtLink></div>
      </div>
    </section>
    <FooterBar />
  </div>
</template>
<style scoped>
.trust-badges { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 8px; }
.badge { background: rgba(255,255,255,0.06); border: 1px solid var(--border); color: var(--white); padding: 7px 14px; border-radius: 20px; font-size: 13px; font-weight: 500; }
.steps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.step-num { font-family: var(--font-heading); font-size: 36px; font-weight: 900; color: var(--gold); margin-bottom: 12px; }
.step-title { font-family: var(--font-heading); font-size: 16px; font-weight: 700; color: var(--white); margin-bottom: 8px; }
.step-desc { font-size: 14px; color: var(--muted); line-height: 1.6; }
.opt-icon { font-size: 36px; margin-bottom: 12px; }
.opt-title { font-family: var(--font-heading); font-size: 17px; font-weight: 700; color: var(--white); margin-bottom: 8px; }
.opt-desc { font-size: 14px; color: var(--muted); line-height: 1.6; }
.cta-band { background: linear-gradient(135deg, #0f1220, #13161F); border-top: 1px solid var(--border); padding: 56px 0; }
.cta-band-inner { display: flex; justify-content: space-between; align-items: center; gap: 32px; flex-wrap: wrap; }
.cta-title { font-family: var(--font-heading); font-size: 28px; font-weight: 900; color: var(--white); margin-bottom: 8px; }
.cta-sub { font-size: 16px; color: var(--muted); }
.cta-actions { display: flex; gap: 16px; flex-wrap: wrap; }
.btn-outline-sm { display: inline-block; padding: 14px 28px; border: 2px solid var(--gold); color: var(--gold); border-radius: 8px; font-weight: 700; font-size: 15px; text-decoration: none; }
.btn-outline-sm:hover { background: rgba(245,200,66,0.1); }
@media (max-width: 768px) { .steps-grid { grid-template-columns: 1fr; } .cta-band-inner { flex-direction: column; } }
</style>
