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

/* Process cards */
.process-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px; margin-top: 40px; }
.process-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 28px 24px; }
.process-num { font-size: 2.5rem; font-weight: 900; color: #C9A84C; line-height: 1; margin-bottom: 12px; }
.process-title { font-size: 1rem; font-weight: 700; color: #fff; margin-bottom: 10px; }
.process-desc { font-size: 0.9rem; color: rgba(255,255,255,0.6); line-height: 1.6; }
/* Review cards */
.reviews-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-top: 40px; }
.review-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 28px; }
.review-stars { color: #C9A84C; font-size: 1.1rem; margin-bottom: 12px; }
.review-text { font-size: 0.95rem; color: rgba(255,255,255,0.75); line-height: 1.7; margin-bottom: 16px; font-style: italic; }
.review-author { font-size: 0.875rem; font-weight: 700; color: #C9A84C; }
/* Feature cards */
.grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; margin-top: 40px; }
.feature-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 28px 24px; }
.feature-icon { font-size: 1.5rem; color: #C9A84C; margin-bottom: 12px; }
.feature-title { font-size: 1rem; font-weight: 700; color: #fff; margin-bottom: 8px; }
.feature-desc { font-size: 0.9rem; color: rgba(255,255,255,0.6); line-height: 1.6; }
/* Issues list */
.issues-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; margin-top: 32px; align-items: start; }
.issues-intro p { font-size: 1rem; color: rgba(255,255,255,0.75); line-height: 1.8; }
.issues-list { list-style: none; padding: 0; margin: 0; }
.issues-list li { padding: 10px 0 10px 28px; position: relative; font-size: 0.95rem; color: rgba(255,255,255,0.75); border-bottom: 1px solid rgba(255,255,255,0.06); }
.issues-list li::before { content: '✓'; position: absolute; left: 0; color: #C9A84C; font-weight: 700; }
/* Content text sections */
.content-narrow { max-width: 860px; margin: 0 auto; }
.content-title { font-size: 1.75rem; font-weight: 800; color: #fff; margin-bottom: 24px; }
.content-narrow p { font-size: 1rem; color: rgba(255,255,255,0.75); line-height: 1.8; margin-bottom: 18px; }
.secure-list { list-style: none; padding: 0; margin: 0; }
.secure-list li { padding: 8px 0 8px 24px; position: relative; font-size: 0.95rem; color: rgba(255,255,255,0.75); }
.secure-list li::before { content: '→'; position: absolute; left: 0; color: #C9A84C; }
/* CTA extensions */
.cta-list { list-style: none; padding: 0; margin: 0 0 24px; }
.cta-list li { padding: 6px 0 6px 24px; position: relative; font-size: 0.95rem; color: rgba(255,255,255,0.75); }
.cta-list li::before { content: '→'; position: absolute; left: 0; color: #C9A84C; }

</style>
