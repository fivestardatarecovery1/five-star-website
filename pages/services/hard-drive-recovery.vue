<script setup lang="ts">
useSeoMeta({
  title: 'Hard Drive Recovery',
  description: 'Professional hard drive data recovery in Glendale, CA. Clicking drives, failed heads, firmware issues, water damage. No data = no charge. Call 818-272-8866.'
})

const features = [
  { icon: '🔧', title: 'Head Replacement', desc: 'Failed read/write heads replaced in our ISO Class 5 cleanroom with compatible donor parts.' },
  { icon: '💻', title: 'Firmware Recovery', desc: 'Corrupted firmware modules repaired using specialized hardware tools and manufacturer data.' },
  { icon: '💧', title: 'Water Damage', desc: 'Drives submerged in water or exposed to liquid damage treated before corrosion sets in.' },
  { icon: '🔊', title: 'Clicking Drives', desc: 'Clicking or grinding noises indicate head failure — we perform emergency surgery to recover data.' },
  { icon: '🗃️', title: 'Partition Recovery', desc: 'Lost or corrupted partitions, MBR damage, and accidental formatting reversed.' },
  { icon: '🔥', title: 'Physical Damage', desc: 'Fire and extreme heat damage, bent platters, and trauma from drops and impacts.' },
]
</script>

<template>
  <div>
    <NavBar />

    <HeroSection
      title="Hard Drive Data Recovery"
      subtitle="We Recover What Others Can't."
      description="From clicking and grinding drives to water-damaged platters and failed PCBs — our certified engineers use cleanroom technology to recover your critical data."
    >
      <template #badges>
        <div class="trust-badges">
          <span class="badge">✅ No Data = No Charge</span>
          <span class="badge">✅ ISO Class 5 Cleanroom</span>
          <span class="badge">✅ All HDD Brands</span>
        </div>
      </template>
    </HeroSection>
    <StatsBar />

    <section>
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What We Recover</h2>
          <p class="section-subtitle">We handle all types of hard drive failures — mechanical, electrical, logical, and physical.</p>
        </div>
        <div class="grid-3">
          <div v-for="f in features" :key="f.title" class="card feature-card">
            <div class="feature-icon">{{ f.icon }}</div>
            <h3 class="feature-title">{{ f.title }}</h3>
            <p class="feature-desc">{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="brands-section section-bg-2">
      <div class="container">
        <h2 class="section-title" style="text-align:center;margin-bottom:32px">Supported Brands & Models</h2>
        <div class="brand-list">
          <span v-for="b in ['Western Digital','Seagate','Toshiba','HGST','Samsung','Maxtor','Hitachi','Fujitsu','IBM','LaCie']" :key="b" class="brand-pill">{{ b }}</span>
        </div>
      </div>
    </section>

    <FooterBar />
  </div>
</template>

<style scoped>
.trust-badges { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 8px; }
.badge { background: rgba(255,255,255,0.06); border: 1px solid var(--border); color: var(--white); padding: 7px 14px; border-radius: 20px; font-size: 13px; font-weight: 500; }
.feature-icon { font-size: 32px; margin-bottom: 12px; }
.feature-title { font-family: var(--font-heading); font-size: 16px; font-weight: 700; margin-bottom: 8px; }
.feature-desc { font-size: 14px; color: var(--muted); line-height: 1.6; }
.brands-section { background: var(--card-bg); }
.brand-list { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; }
.brand-pill { background: rgba(245,200,66,0.08); border: 1px solid rgba(245,200,66,0.2); color: var(--gold); padding: 8px 20px; border-radius: 20px; font-size: 14px; font-weight: 600; }
</style>
