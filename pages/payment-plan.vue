<script setup lang="ts">
useSeoMeta({
  title: 'Data Recovery Payment Plans | Five Star Data Recovery',
  description: 'Flexible payment plans for data recovery. Don\'t let cost stop you from recovering your irreplaceable data. Financing options available. Call 323-672-3000.'
})
</script>
<template>
  <div>
    <NavBar />
    <HeroSection title="Data Recovery Payment Plans" subtitle="Don't Let Cost Stand Between You and Your Data." description="We understand that data recovery is an unexpected expense. That's why we offer flexible payment plan options so that everyone can access professional recovery services when they need them most." >
      <template #badges>
        <div class="trust-badges">
          <span class="badge">✅ Flexible Plans</span>
          <span class="badge">✅ Quick Approval</span>
          <span class="badge">✅ No Data = No Charge</span>
        </div>
      </template>
    </HeroSection>
    <section class="content-section">
      <div class="container">
        <div class="section-header"><h2 class="section-title">Payment Plan <span class="gold-underline gold">Options</span></h2></div>
        <div class="plans-content">
          <p>Losing important data is already stressful. The last thing you need is financial stress on top of it. At Five Star Data Recovery, we believe everyone deserves access to professional data recovery services — regardless of budget. That's why we offer flexible payment plans for qualifying recoveries.</p>
          <p>Contact us to discuss your situation. We work with individuals, small businesses, and large organizations to find payment arrangements that work for everyone. Our team will review your case and present available options during the free evaluation.</p>
          <div class="plan-features">
            <div class="plan-feature card"><div class="pf-icon">💳</div><h3 class="pf-title">Installment Plans</h3><p class="pf-desc">Split your recovery cost into manageable monthly payments. Available for qualifying recoveries over $500.</p></div>
            <div class="plan-feature card"><div class="pf-icon">🏢</div><h3 class="pf-title">Business Invoicing</h3><p class="pf-desc">Net-30 invoicing available for registered businesses with approved credit. Contact us for details.</p></div>
            <div class="plan-feature card"><div class="pf-icon">🤝</div><h3 class="pf-title">Custom Arrangements</h3><p class="pf-desc">Have a unique situation? We're flexible. Contact us and we'll work something out that makes sense for both of us.</p></div>
          </div>
          <div class="reminder-box">
            <h3 class="reminder-title">Remember: No Data = No Charge</h3>
            <p>Payment plans only apply when we successfully recover your data. If we can't recover it, you pay nothing — regardless of the payment plan discussion.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="cta-band">
      <div class="container cta-band-inner">
        <div><h2 class="cta-title">Ask About Payment Plans</h2><p class="cta-sub">Call us to discuss your situation. We'll find a way to help.</p></div>
        <div class="cta-actions"><a href="tel:3236723000" class="btn btn-gold">📞 323-672-3000</a><NuxtLink to="/contact" class="btn btn-outline-sm">Contact Us</NuxtLink></div>
      </div>
    </section>
    <FooterBar />
  </div>
</template>
<style scoped>
.trust-badges { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 8px; }
.badge { background: rgba(255,255,255,0.06); border: 1px solid var(--border); color: var(--white); padding: 7px 14px; border-radius: 20px; font-size: 13px; font-weight: 500; }
.plans-content p { font-size: 16px; color: var(--muted); line-height: 1.8; margin-bottom: 16px; max-width: 800px; }
.plan-features { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 32px 0; }
.pf-icon { font-size: 36px; margin-bottom: 12px; }
.pf-title { font-family: var(--font-heading); font-size: 16px; font-weight: 700; color: var(--white); margin-bottom: 8px; }
.pf-desc { font-size: 14px; color: var(--muted); line-height: 1.6; }
.reminder-box { background: rgba(245,200,66,0.08); border: 1px solid rgba(245,200,66,0.3); border-radius: 12px; padding: 24px 28px; }
.reminder-title { font-family: var(--font-heading); font-size: 18px; font-weight: 700; color: var(--gold); margin-bottom: 8px; }
.reminder-box p { font-size: 15px; color: var(--muted); line-height: 1.6; margin: 0; }
.cta-band { background: linear-gradient(135deg, #0f1220, #13161F); border-top: 1px solid var(--border); padding: 56px 0; }
.cta-band-inner { display: flex; justify-content: space-between; align-items: center; gap: 32px; flex-wrap: wrap; }
.cta-title { font-family: var(--font-heading); font-size: 28px; font-weight: 900; color: var(--white); margin-bottom: 8px; }
.cta-sub { font-size: 16px; color: var(--muted); }
.cta-actions { display: flex; gap: 16px; flex-wrap: wrap; }
.btn-outline-sm { display: inline-block; padding: 14px 28px; border: 2px solid var(--gold); color: var(--gold); border-radius: 8px; font-weight: 700; font-size: 15px; text-decoration: none; }
.btn-outline-sm:hover { background: rgba(245,200,66,0.1); }
@media (max-width: 768px) { .plan-features { grid-template-columns: 1fr; } .cta-band-inner { flex-direction: column; } }
</style>
