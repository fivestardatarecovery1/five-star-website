<script setup lang="ts">
useSeoMeta({
  title: 'RAID & Server Recovery',
  description: 'Professional RAID 0, 1, 5, 6, 10 and NAS array recovery in Glendale, CA. Enterprise data recovery with fast turnaround. No data = no charge.'
})
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="RAID & Server Recovery"
      subtitle="Enterprise Data Recovery, Done Right."
      description="RAID failures are catastrophic for businesses. Our engineers specialize in all RAID levels — from simple mirror failures to complex parity reconstructions. We minimize your downtime."
    >
      <template #badges>
        <div class="trust-badges">
          <span class="badge">✅ All RAID Levels</span>
          <span class="badge">✅ NAS & SAN Recovery</span>
          <span class="badge">✅ Emergency 24/7</span>
        </div>
      </template>
    </HeroSection>
    <StatsBar />
    <section>
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">RAID Levels We Support</h2>
        </div>
        <div class="grid-4">
          <div v-for="r in [
            {level:'RAID 0',desc:'Stripe sets — no redundancy. We reconstruct the stripe layout to recover all data.'},
            {level:'RAID 1',desc:'Mirror sets. Even with both drives failing, we can often extract data via imaging.'},
            {level:'RAID 5',desc:'Single-parity arrays. We rebuild parity and recover data even from 2+ drive failures.'},
            {level:'RAID 6',desc:'Double-parity. Handles two simultaneous drive failures with full data reconstruction.'},
            {level:'RAID 10',desc:'Mirrored stripes. We recover from multiple drive failures within the array.'},
            {level:'NAS Devices',desc:'Synology, QNAP, Buffalo, Western Digital My Cloud — all supported.'},
            {level:'SAN Storage',desc:'Enterprise SAN arrays from NetApp, EMC, HP StorageWorks, and more.'},
            {level:'ZFS / BTRFS',desc:'Modern filesystem RAID recovered with full metadata and data integrity checks.'},
          ]" :key="r.level" class="card raid-card">
            <h3 class="raid-level">{{ r.level }}</h3>
            <p class="raid-desc">{{ r.desc }}</p>
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
.raid-level { font-family: var(--font-heading); font-size: 18px; font-weight: 800; color: var(--gold); margin-bottom: 8px; }
.raid-desc { font-size: 14px; color: var(--muted); line-height: 1.6; }
</style>
