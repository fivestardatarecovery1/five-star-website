<script setup lang="ts">
useSeoMeta({
  title: 'Expedited Data Recovery Service — 24-48 Hour Turnaround',
  description: 'Expedited data recovery with 24-48 hour turnaround. Priority service for time-critical data loss. Additional $150 on top of standard recovery rates. Call 323-672-3000.'
})
</script>
<template>
  <div>
    <NavBar />
    <HeroSection title="Expedited Data Recovery Service" subtitle="24–48 Hour Turnaround. Priority Access. Immediate Start." description="When time is critical, our Expedited Service puts your case at the front of the queue. Extended engineer hours, daily updates, and a 24-48 hour target delivery window. Available 7 days a week." >
      <template #badges>
        <div class="trust-badges">
          <span class="badge">⚡ 24–48 Hour Turnaround</span>
          <span class="badge">✅ Priority Queue</span>
          <span class="badge">✅ Daily Updates</span>
          <span class="badge">✅ No Data = No Charge</span>
        </div>
      </template>
    </HeroSection>
    <section class="intro-section">
      <div class="container">
        <div class="section-header"><h2 class="section-title">Expedited <span class="gold-underline gold">Recovery Service</span></h2></div>
        <div class="intro-content">
          <p>Our standard recovery turnaround is 3-5 business days — but sometimes you can't wait that long. If you have a business deadline, an upcoming presentation, a pending legal matter, or simply can't afford to wait, our Expedited Service prioritizes your case above all others.</p>
          <p>With Expedited Service, your case is moved to the front of our engineering queue the moment it arrives. Our engineers work extended hours and provide daily progress updates. The target turnaround is 24-48 hours from the time we receive your device.</p>
          <p>Expedited Service is available for all recovery types — hard drives, SSDs, RAID arrays, and more. The cost is the standard recovery rate plus $150 for the priority service.</p>
        </div>
        <div class="service-comparison">
          <div class="comparison-card card">
            <h3 class="comp-title">Standard Service</h3>
            <div class="comp-time">3–5 Business Days</div>
            <div class="comp-price">Base Recovery Price</div>
            <ul class="comp-features">
              <li>✓ Free evaluation</li>
              <li>✓ Regular updates</li>
              <li>✓ No data = no charge</li>
            </ul>
          </div>
          <div class="comparison-card card highlighted">
            <div class="comp-badge">Popular</div>
            <h3 class="comp-title">Expedited Service</h3>
            <div class="comp-time gold">24–48 Hours</div>
            <div class="comp-price">Base + $150</div>
            <ul class="comp-features">
              <li>✓ Priority queue placement</li>
              <li>✓ Extended engineer hours</li>
              <li>✓ Daily progress updates</li>
              <li>✓ No data = no charge</li>
            </ul>
          </div>
          <div class="comparison-card card">
            <h3 class="comp-title">Expedited Plus</h3>
            <div class="comp-time">Same Day</div>
            <div class="comp-price">Base + $350</div>
            <ul class="comp-features">
              <li>✓ Immediate start</li>
              <li>✓ Work continues evenings/weekends</li>
              <li>✓ Hourly updates available</li>
              <li>✓ No data = no charge</li>
            </ul>
            <NuxtLink to="/expedited-service-plus" class="comp-link">Learn More →</NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <section class="cta-band">
      <div class="container cta-band-inner">
        <div><h2 class="cta-title">Need Your Data Fast?</h2><p class="cta-sub">Call us now to start your Expedited Service case immediately.</p></div>
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
.service-comparison { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 48px; }
.comparison-card { position: relative; }
.highlighted { border-color: var(--gold); }
.comp-badge { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: var(--gold); color: #0A0C14; font-size: 11px; font-weight: 700; padding: 4px 14px; border-radius: 20px; text-transform: uppercase; white-space: nowrap; }
.comp-title { font-family: var(--font-heading); font-size: 18px; font-weight: 700; color: var(--white); margin-bottom: 12px; }
.comp-time { font-family: var(--font-heading); font-size: 28px; font-weight: 900; color: var(--white); margin-bottom: 6px; }
.comp-price { font-size: 16px; color: var(--muted); margin-bottom: 20px; border-bottom: 1px solid var(--border); padding-bottom: 16px; }
.comp-features { list-style: none; display: flex; flex-direction: column; gap: 8px; font-size: 14px; color: var(--muted); }
.comp-link { display: inline-block; margin-top: 16px; color: var(--gold); font-weight: 600; text-decoration: none; }
.cta-band { background: linear-gradient(135deg, #0f1220, #13161F); border-top: 1px solid var(--border); padding: 56px 0; }
.cta-band-inner { display: flex; justify-content: space-between; align-items: center; gap: 32px; flex-wrap: wrap; }
.cta-title { font-family: var(--font-heading); font-size: 28px; font-weight: 900; color: var(--white); margin-bottom: 8px; }
.cta-sub { font-size: 16px; color: var(--muted); }
.cta-actions { display: flex; gap: 16px; flex-wrap: wrap; }
.btn-outline-sm { display: inline-block; padding: 14px 28px; border: 2px solid var(--gold); color: var(--gold); border-radius: 8px; font-weight: 700; font-size: 15px; text-decoration: none; }
.btn-outline-sm:hover { background: rgba(245,200,66,0.1); }
@media (max-width: 768px) { .service-comparison { grid-template-columns: 1fr; } .cta-band-inner { flex-direction: column; } }
</style>
