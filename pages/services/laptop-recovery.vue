<script setup lang="ts">
useSeoMeta({
  title: 'Laptop Data Recovery',
  description: 'Laptop data recovery for Dell, HP, Lenovo, Asus, Acer, and all brands. Water spills, drops, dead drives. No data = no charge. Glendale, CA.'
})
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="Laptop Data Recovery"
      subtitle="Dropped It. Spilled On It. We've Got It."
      description="Laptop data loss happens in seconds. Whether from a drop, a spill, or just a dead drive, our team recovers your documents, photos, and files fast."
    >
      <template #badges>
        <div class="trust-badges">
          <span class="badge">✅ All Laptop Brands</span>
          <span class="badge">✅ Liquid Damage</span>
          <span class="badge">✅ Same-Day Evaluation</span>
        </div>
      </template>
    </HeroSection>
    <StatsBar />
    <section>
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Common Laptop Scenarios</h2>
        </div>
        <div class="grid-3">
          <div v-for="s in [
            {icon:'💧',title:'Liquid Spill',desc:'Coffee, water, juice — we\'ve seen it all. Act fast and don\'t turn it on. Bring it to us immediately.'},
            {icon:'💥',title:'Dropped Laptop',desc:'Impact damage can shock the drive heads into a platter. We perform head replacements in our cleanroom.'},
            {icon:'⚡',title:'Won\'t Turn On',desc:'Dead laptops with intact drives are straightforward. We remove and image the drive directly.'},
            {icon:'🖥️',title:'Broken Screen',desc:'Broken screens don\'t damage the drive. We connect externally and extract all your data.'},
            {icon:'🔥',title:'Overheating',desc:'Thermal damage from overheating can corrupt data and damage drive electronics. We recover both.'},
            {icon:'🗑️',title:'Accidental Delete',desc:'Accidentally deleted important files or emptied the trash? We recover them before they\'re overwritten.'},
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
