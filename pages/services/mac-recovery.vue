<script setup lang="ts">
useSeoMeta({
  title: 'Mac & iMac Data Recovery',
  description: 'Apple Mac, MacBook, and iMac data recovery. T2, M1, M2 chip support, Fusion Drive, Time Machine. No data = no charge.'
})
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="Mac & iMac Data Recovery"
      subtitle="Apple Expertise. Real Results."
      description="Recovering data from modern Macs requires specialized knowledge. T2 security chips, Apple Silicon, and Fusion Drives demand tools and expertise that most labs don't have. We do."
    >
      <template #badges>
        <div class="trust-badges">
          <span class="badge">✅ M1 / M2 / M3 Macs</span>
          <span class="badge">✅ T2 Chip Support</span>
          <span class="badge">✅ Fusion Drive</span>
        </div>
      </template>
    </HeroSection>
    <section>
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Mac Recovery <span class="gold-underline gold">Scenarios</span></h2>
        </div>
        <div class="grid-3">
          <div v-for="s in [
            {icon:'🔒',title:'T2 Chip Macs',desc:'Apple\'s T2 security chip encrypts the internal SSD. Recovery requires owner authentication and specialized tools.'},
            {icon:'🍎',title:'Apple Silicon (M1/M2/M3)',desc:'Soldered storage on Apple Silicon requires advanced chip-off techniques and proprietary knowledge.'},
            {icon:'🌀',title:'Fusion Drive Failure',desc:'When the HDD component of a Fusion Drive fails, the entire volume disappears. We reconstruct the volume.'},
            {icon:'💾',title:'Time Machine Recovery',desc:'Corrupted Time Machine backups and failed Time Capsule devices recovered by our Mac specialists.'},
            {icon:'💧',title:'MacBook Liquid Damage',desc:'Spilled liquid on your MacBook? Shut it down immediately and call us. Time is critical.'},
            {icon:'🗑️',title:'macOS Recovery',desc:'Accidental deletion, emptied Trash, and corrupted macOS volumes all recovered with Mac-specific tools.'},
          ]" :key="s.title" class="card">
            <div style="font-size:32px;margin-bottom:12px">{{ s.icon }}</div>
            <h3 style="font-family:var(--font-heading);font-size:16px;font-weight:700;margin-bottom:8px">{{ s.title }}</h3>
            <p style="font-size:14px;color:var(--muted);line-height:1.6">{{ s.desc }}</p>
          </div>
        </div>
      </div>
    </section>
    <FooterBar />
  </div>
</template>

<style scoped>
.trust-badges { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 8px; }
.badge { background: rgba(255,255,255,0.06); border: 1px solid var(--border); color: var(--white); padding: 7px 14px; border-radius: 20px; font-size: 13px; font-weight: 500; }
</style>
