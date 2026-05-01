<script setup lang="ts">
useSeoMeta({
  title: 'Data Recovery Pricing — Flat-Rate, No Hidden Fees',
  description: 'Transparent flat-rate data recovery pricing. No hidden fees, no hourly charges. Standard recovery from $300. RAID pricing per drive. No data = no charge. Call 323-672-3000.'
})

const pricingTiers = [
  {
    name: 'Standard Recovery',
    price: '$300',
    desc: 'Logical failures, firmware issues, file system corruption, accidental deletion',
    items: ['Hard Drive (≤ 2TB)', 'SSD logical failure', 'USB flash drive', 'SD card', 'External drive (PCB/logical)'],
    badge: 'Most Common'
  },
  {
    name: 'Advanced Recovery',
    price: '$400',
    desc: 'Larger drives or more complex logical issues requiring extended imaging time',
    items: ['Hard Drive (> 2TB)', 'SSD controller issues', 'Encrypted drive recovery', 'RAID drive (> 2TB)', 'Complex partition recovery'],
    badge: null
  },
  {
    name: 'Clean Room Recovery',
    price: '$650–$950',
    desc: 'Physical/mechanical damage requiring cleanroom intervention and head replacement',
    items: ['Clicking / grinding drives', 'Head crash recovery', 'Platter damage', 'Seized motor recovery', 'Dropped drive recovery'],
    badge: 'Emergency Available'
  },
]

const expedited = [
  { name: 'Standard Service', time: '3–5 Business Days', price: 'Base price', desc: 'Standard recovery timeline for most cases.' },
  { name: 'Expedited Service', time: '24–48 Hours', price: 'Base + $150', desc: 'Priority service with extended engineer hours and daily updates.' },
  { name: 'Expedited Plus', time: 'Same Day', price: 'Base + $350', desc: 'Maximum priority — we begin immediately and work until complete, including evenings and weekends.' },
]

const raidExamples = [
  { config: 'RAID 5 · 4 × 2TB drives', breakdown: '4 × $300', total: '$1,200' },
  { config: 'RAID 5 · 4 × 6TB drives', breakdown: '4 × $400 (+$100 surcharge per drive)', total: '$1,600' },
  { config: 'RAID 0 · 4 × 6TB (1 clicking drive)', breakdown: '3 × $400 + 1 × $950', total: '$2,150' },
]

const faqs = [
  { q: 'Are there any hidden fees?', a: 'Never. Our pricing is completely flat-rate and transparent. The quote you receive before we begin is exactly what you pay — no surprises, no additional charges.' },
  { q: 'What if you can\'t recover my data?', a: 'You pay nothing. Our No Data = No Charge policy is unconditional. If we don\'t recover your data, or if you\'re not satisfied with the results, you owe us nothing.' },
  { q: 'Do you charge for the initial evaluation?', a: 'No. The diagnostic evaluation is always free with no obligation to proceed.' },
  { q: 'Do you offer payment plans?', a: 'Yes — we offer payment plan options for qualifying recoveries. Contact us to discuss flexible payment arrangements.' },
  { q: 'Is RAID recovery priced differently?', a: 'RAID recovery is priced per drive at our standard flat rates. There is no premium for RAID reconstruction. See the RAID pricing examples above.' },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="Transparent Data Recovery Pricing"
      subtitle="Flat-Rate Pricing. No Hidden Fees. Ever."
      description="We believe you should know exactly what your recovery will cost before we begin. Our flat-rate pricing is clear, honest, and includes everything — no hourly rates, no evaluation fees, no surprise charges."
    >
      <template #badges>
        <div class="trust-badges">
          <span class="badge">✅ Flat-Rate Pricing</span>
          <span class="badge">✅ No Hidden Fees</span>
          <span class="badge">✅ Free Evaluation</span>
          <span class="badge">✅ No Data = No Charge</span>
        </div>
      </template>
    </HeroSection>

    <!-- Pricing Tiers -->
    <section class="pricing-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Recovery <span class="gold-underline gold">Pricing</span></h2>
          <p class="section-subtitle">All prices are flat-rate — your quote is your final price.</p>
        </div>
        <div class="pricing-grid">
          <div v-for="tier in pricingTiers" :key="tier.name" class="pricing-card card">
            <div v-if="tier.badge" class="tier-badge">{{ tier.badge }}</div>
            <h3 class="tier-name">{{ tier.name }}</h3>
            <div class="tier-price">{{ tier.price }}</div>
            <p class="tier-desc">{{ tier.desc }}</p>
            <ul class="tier-items">
              <li v-for="item in tier.items" :key="item"><span class="item-check">✓</span>{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Expedited pricing -->
    <section class="expedited-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Service <span class="gold-underline gold">Speed Options</span></h2>
        </div>
        <div class="expedited-grid">
          <div v-for="e in expedited" :key="e.name" class="expedited-card card">
            <h3 class="exp-name">{{ e.name }}</h3>
            <div class="exp-time">⏱ {{ e.time }}</div>
            <div class="exp-price gold">{{ e.price }}</div>
            <p class="exp-desc">{{ e.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- RAID Pricing -->
    <section class="raid-pricing-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">RAID Recovery <span class="gold-underline gold">Pricing Examples</span></h2>
          <p class="section-subtitle">RAID recovery is priced per drive — no markup for reconstruction.</p>
        </div>
        <div class="pricing-table-wrap">
          <table class="pricing-table">
            <thead>
              <tr><th>RAID Configuration</th><th>Pricing Breakdown</th><th>Total</th></tr>
            </thead>
            <tbody>
              <tr v-for="r in raidExamples" :key="r.config">
                <td>{{ r.config }}</td>
                <td class="muted">{{ r.breakdown }}</td>
                <td class="price">{{ r.total }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq-section">
      <div class="container">
        <div class="section-header"><h2 class="section-title">Pricing <span class="gold-underline gold">FAQs</span></h2></div>
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
        <div><h2 class="cta-title">Get Your Exact Quote Today</h2><p class="cta-sub">Free evaluation. You'll know the price before we touch your drive.</p></div>
        <div class="cta-actions"><a href="tel:3236723000" class="btn btn-gold">📞 323-672-3000</a><NuxtLink to="/data-recovery/free-quote" class="btn btn-outline-sm">Request Quote</NuxtLink></div>
      </div>
    </section>
    <FooterBar />
  </div>
</template>

<style scoped>
.trust-badges { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 8px; }
.badge { background: rgba(255,255,255,0.06); border: 1px solid var(--border); color: var(--white); padding: 7px 14px; border-radius: 20px; font-size: 13px; font-weight: 500; }
.pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.pricing-card { position: relative; padding-top: 28px; }
.tier-badge { position: absolute; top: -1px; right: 20px; background: var(--gold); color: #0A0C14; font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 0 0 8px 8px; text-transform: uppercase; letter-spacing: 0.08em; }
.tier-name { font-family: var(--font-heading); font-size: 18px; font-weight: 700; color: var(--white); margin-bottom: 12px; }
.tier-price { font-family: var(--font-heading); font-size: 42px; font-weight: 900; color: var(--gold); margin-bottom: 12px; }
.tier-desc { font-size: 14px; color: var(--muted); line-height: 1.6; margin-bottom: 20px; border-bottom: 1px solid var(--border); padding-bottom: 16px; }
.tier-items { list-style: none; display: flex; flex-direction: column; gap: 8px; }
.tier-items li { display: flex; gap: 10px; font-size: 14px; color: var(--muted); align-items: flex-start; }
.item-check { color: var(--gold); font-weight: 700; flex-shrink: 0; }
.expedited-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.exp-name { font-family: var(--font-heading); font-size: 18px; font-weight: 700; color: var(--white); margin-bottom: 10px; }
.exp-time { font-size: 15px; color: var(--muted); margin-bottom: 6px; }
.exp-price { font-family: var(--font-heading); font-size: 20px; font-weight: 700; margin-bottom: 10px; }
.exp-desc { font-size: 14px; color: var(--muted); line-height: 1.6; }
.pricing-table-wrap { overflow-x: auto; }
.pricing-table { width: 100%; border-collapse: collapse; }
.pricing-table th { background: rgba(245,200,66,0.1); color: var(--gold); font-family: var(--font-heading); font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; padding: 14px 20px; text-align: left; border-bottom: 1px solid var(--border); }
.pricing-table td { padding: 16px 20px; font-size: 15px; color: var(--white); border-bottom: 1px solid var(--border); }
.pricing-table .muted { color: var(--muted); }
.pricing-table .price { font-weight: 700; color: var(--gold); font-size: 17px; }
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
@media (max-width: 1024px) { .pricing-grid, .expedited-grid { grid-template-columns: 1fr; } }
@media (max-width: 768px) { .cta-band-inner { flex-direction: column; } }
</style>
