<script setup lang="ts">
useSeoMeta({
  title: 'Expedited Plus Data Recovery — Same Day Emergency Service',
  description: 'Same-day emergency data recovery. Expedited Plus puts your case first — engineers work continuously until complete, including evenings and weekends. Call 323-672-3000.'
})
</script>
<template>
  <div>
    <NavBar />
    <HeroSection title="Expedited Plus — Same Day Recovery" subtitle="Maximum Priority. Engineers Work Until It's Done." description="For absolute emergencies, Expedited Plus puts your case first with no interruptions. Our engineers begin immediately and work continuously — including evenings and weekends — until your data is recovered." >
      <template #badges>
        <div class="trust-badges">
          <span class="badge">🚨 Same Day Service</span>
          <span class="badge">✅ Continuous Work</span>
          <span class="badge">✅ Evenings & Weekends</span>
          <span class="badge">✅ Hourly Updates</span>
        </div>
      </template>
    </HeroSection>
    <section class="intro-section">
      <div class="container">
        <div class="section-header"><h2 class="section-title">Expedited Plus <span class="gold-underline gold">Emergency Service</span></h2></div>
        <div class="intro-content">
          <p>Some situations cannot wait. A business-critical server failure, a legal deadline, a medical emergency — when hours matter, Expedited Plus is our maximum-priority service level.</p>
          <p>With Expedited Plus, your device goes straight to our most senior engineers the moment it arrives. Work begins immediately and continues without interruption — through evenings, nights, and weekends if necessary. You can request hourly status updates throughout the recovery.</p>
          <p>The cost for Expedited Plus is the standard recovery rate plus $350. This covers the extended engineer time, priority materials acquisition (donor parts if needed), and continuous case management until your data is delivered.</p>
        </div>
        <div class="features-grid">
          <div class="feature-card card"><div class="feat-icon">⚡</div><h3 class="feat-title">Immediate Start</h3><p class="feat-desc">Your case begins the moment we receive your device — no queue, no waiting.</p></div>
          <div class="feature-card card"><div class="feat-icon">🔄</div><h3 class="feat-title">Continuous Work</h3><p class="feat-desc">Engineers work without stopping until the recovery is complete, including outside normal hours.</p></div>
          <div class="feature-card card"><div class="feat-icon">📱</div><h3 class="feat-title">Hourly Updates</h3><p class="feat-desc">You receive progress updates as often as hourly. You're never in the dark about your case.</p></div>
          <div class="feature-card card"><div class="feat-icon">🏆</div><h3 class="feat-title">Senior Engineers</h3><p class="feat-desc">Your case is assigned to our most experienced recovery specialists from day one.</p></div>
        </div>
        <div class="pricing-highlight card">
          <h3 class="ph-title">Expedited Plus Pricing</h3>
          <p class="ph-text">Standard Recovery Rate + <span class="gold">$350</span> priority surcharge</p>
          <p class="ph-note">The No Data = No Charge policy applies to all service levels including Expedited Plus.</p>
        </div>
      </div>
    </section>
    <section class="cta-band">
      <div class="container cta-band-inner">
        <div><h2 class="cta-title">Data Loss Emergency?</h2><p class="cta-sub">Call us right now. Expedited Plus starts the moment we pick up.</p></div>
        <div class="cta-actions"><a href="tel:3236723000" class="btn btn-gold">📞 323-672-3000 (24/7)</a></div>
      </div>
    </section>
    <FooterBar />
  </div>
</template>
<style scoped>
.trust-badges { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 8px; }
.badge { background: rgba(255,255,255,0.06); border: 1px solid var(--border); color: var(--white); padding: 7px 14px; border-radius: 20px; font-size: 13px; font-weight: 500; }
.intro-content p { font-size: 16px; color: var(--muted); line-height: 1.8; margin-bottom: 16px; max-width: 800px; }
.features-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 40px; }
.feat-icon { font-size: 32px; margin-bottom: 12px; }
.feat-title { font-family: var(--font-heading); font-size: 16px; font-weight: 700; color: var(--white); margin-bottom: 8px; }
.feat-desc { font-size: 14px; color: var(--muted); line-height: 1.6; }
.pricing-highlight { margin-top: 40px; border-color: var(--gold); padding: 28px; }
.ph-title { font-family: var(--font-heading); font-size: 18px; font-weight: 700; color: var(--white); margin-bottom: 8px; }
.ph-text { font-size: 18px; color: var(--muted); margin-bottom: 8px; }
.ph-note { font-size: 14px; color: var(--muted); font-style: italic; }
.cta-band { background: linear-gradient(135deg, #0f1220, #13161F); border-top: 1px solid var(--border); padding: 56px 0; }
.cta-band-inner { display: flex; justify-content: space-between; align-items: center; gap: 32px; flex-wrap: wrap; }
.cta-title { font-family: var(--font-heading); font-size: 28px; font-weight: 900; color: var(--white); margin-bottom: 8px; }
.cta-sub { font-size: 16px; color: var(--muted); }
.cta-actions { display: flex; gap: 16px; }
@media (max-width: 768px) { .features-grid { grid-template-columns: 1fr; } .cta-band-inner { flex-direction: column; } }
</style>
