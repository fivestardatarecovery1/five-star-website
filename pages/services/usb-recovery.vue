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
    <section>
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Flash Media <span class="gold-underline gold">We Recover</span></h2>
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
</style>
