<script setup lang="ts">
useSeoMeta({
  title: 'Pricing',
  description: 'Transparent flat-rate data recovery pricing. No hidden fees. No data = no charge. Free evaluation on every case. Glendale, CA.'
})

const tiers = [
  {
    name: 'Standard',
    price: '$299–$599',
    turnaround: '3–5 Business Days',
    highlight: false,
    features: [
      'Logical / software failures',
      'Deleted files & folders',
      'Formatted drives',
      'Corrupted partitions',
      'Failed OS / boot issues',
      'Free evaluation included',
      'No data = no charge',
    ]
  },
  {
    name: 'Advanced',
    price: '$599–$1,199',
    turnaround: '2–4 Business Days',
    highlight: true,
    features: [
      'Mechanical head failures',
      'PCB & electronic damage',
      'Firmware corruption',
      'SSD controller failures',
      'NAND chip recovery',
      'Priority queue',
      'No data = no charge',
    ]
  },
  {
    name: 'Emergency',
    price: '$1,199–$2,500+',
    turnaround: '24–48 Hours',
    highlight: false,
    features: [
      'Severe physical damage',
      'Cleanroom head swap',
      'Platter recovery',
      'RAID reconstruction',
      'After-hours service',
      '24/7 engineer access',
      'No data = no charge',
    ]
  }
]
</script>

<template>
  <div>
    <NavBar />

    <HeroSection
      title="Transparent, Flat-Rate Pricing"
      subtitle="No Surprises. No Hidden Fees."
      description="We give you a firm quote before any work begins. You only pay if we successfully recover your data. No fine print."
    >
      <template #badges>
        <div class="trust-badges">
          <span class="badge">✅ Free Evaluation</span>
          <span class="badge">✅ Flat-Rate Quotes</span>
          <span class="badge">✅ No Data = No Charge</span>
        </div>
      </template>
    </HeroSection>

    <section>
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Recovery <span class="gold-underline gold">Pricing Tiers</span></h2>
          <p class="section-subtitle">Prices vary by device type and damage severity. All cases start with a free evaluation.</p>
        </div>
        <div class="pricing-grid">
          <div v-for="tier in tiers" :key="tier.name" class="pricing-card card" :class="{ featured: tier.highlight }">
            <div v-if="tier.highlight" class="featured-badge">Most Popular</div>
            <h3 class="tier-name">{{ tier.name }}</h3>
            <div class="tier-price">{{ tier.price }}</div>
            <div class="tier-turnaround">⚡ {{ tier.turnaround }}</div>
            <ul class="tier-features">
              <li v-for="f in tier.features" :key="f">
                <span class="check">✓</span> {{ f }}
              </li>
            </ul>
            <NuxtLink to="/contact" class="btn" :class="tier.highlight ? 'btn-gold' : 'btn-outline'" style="width:100%;justify-content:center;margin-top:auto">
              Get Started
            </NuxtLink>
          </div>
        </div>
        <p class="pricing-note">* Final pricing determined after free evaluation. Emergency same-day service available. Call <a href="tel:3236723000" style="color:var(--gold);font-weight:600">323-672-3000</a> for a quote.</p>
      </div>
    </section>

    <FooterBar />
  </div>
</template>

<style scoped>
.trust-badges { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 8px; }
.badge { background: rgba(255,255,255,0.06); border: 1px solid var(--border); color: var(--white); padding: 7px 14px; border-radius: 20px; font-size: 13px; font-weight: 500; }

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  align-items: start;
}
.pricing-card {
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 36px 28px;
  position: relative;
}
.pricing-card.featured {
  border-color: var(--gold);
  background: linear-gradient(160deg, #1a1e2e, var(--card-bg));
  transform: scale(1.02);
}
.featured-badge {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--gold);
  color: #0A0C14;
  font-size: 12px;
  font-weight: 800;
  padding: 4px 16px;
  border-radius: 20px;
  white-space: nowrap;
}
.tier-name {
  font-family: var(--font-heading);
  font-size: 22px;
  font-weight: 800;
  color: var(--white);
  margin-bottom: 12px;
}
.tier-price {
  font-family: var(--font-heading);
  font-size: 32px;
  font-weight: 900;
  color: var(--gold);
  margin-bottom: 8px;
}
.tier-turnaround {
  font-size: 13px;
  color: var(--muted);
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--border);
}
.tier-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 28px;
  flex: 1;
}
.tier-features li { font-size: 14px; color: var(--muted); display: flex; align-items: flex-start; gap: 8px; }
.check { color: var(--gold); font-weight: 700; flex-shrink: 0; }
.pricing-note {
  text-align: center;
  font-size: 13px;
  color: var(--muted);
  margin-top: 32px;
  font-style: italic;
}

@media (max-width: 900px) {
  .pricing-grid { grid-template-columns: 1fr; }
  .pricing-card.featured { transform: none; }
}
</style>
