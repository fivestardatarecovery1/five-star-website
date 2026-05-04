<script setup lang="ts">
useSeoMeta({
  title: 'USB Flash Drive & SD Card Recovery',
  description: 'USB flash drive and SD card data recovery. Broken connectors, corrupted partitions, failed controllers. No data = no charge.'
})
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="USB & Flash Drive Recovery"
      subtitle="Small Device. Big Data. Fully Recovered."
      description="USB flash drives and SD cards fail silently and often. Broken connectors, failed controllers, and corrupted file systems — we recover them all."
    >
      <template #badges>
        <div class="trust-badges">
          <span class="badge">✅ All USB Types</span>
          <span class="badge">✅ SD / MicroSD / CF</span>
          <span class="badge">✅ Broken Connectors</span>
        </div>
      </template>
    </HeroSection>
    <StatsBar />
    <section>
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Flash Media We Recover</h2>
        </div>
        <div class="grid-4">
          <div v-for="m in [
            {icon:'🔌',title:'USB Flash Drives',desc:'All capacities and brands. Broken connectors repaired or bypassed.'},
            {icon:'📷',title:'SD Cards',desc:'Camera memory cards from Canon, Nikon, Sony, and all other brands.'},
            {icon:'📱',title:'MicroSD Cards',desc:'Phone and drone storage cards, no matter how small.'},
            {icon:'💾',title:'CompactFlash',desc:'CF cards from professional cameras and older devices.'},
            {icon:'🎮',title:'Gaming Cards',desc:'Nintendo Switch, PlayStation Vita, and gaming storage media.'},
            {icon:'🚗',title:'Dashcam Storage',desc:'Loop recording and event data from dashcam SD cards.'},
            {icon:'🎥',title:'Video Camera',desc:'4K footage from professional video cameras and camcorders.'},
            {icon:'🛸',title:'Drone Storage',desc:'DJI, Parrot, and other drone media recovered completely.'},
          ]" :key="m.title" class="card" style="text-align:center">
            <div style="font-size:28px;margin-bottom:10px">{{ m.icon }}</div>
            <h3 style="font-family:var(--font-heading);font-size:14px;font-weight:700;margin-bottom:6px">{{ m.title }}</h3>
            <p style="font-size:13px;color:var(--muted)">{{ m.desc }}</p>
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

/* Process cards */
.process-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px; margin-top: 40px; }
.process-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 28px 24px; }
.process-num { font-size: 2.5rem; font-weight: 900; color: #C9A84C; line-height: 1; margin-bottom: 12px; }
.process-title { font-size: 1rem; font-weight: 700; color: #fff; margin-bottom: 10px; }
.process-desc { font-size: 0.9rem; color: rgba(255,255,255,0.6); line-height: 1.6; }
/* Review cards */
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
