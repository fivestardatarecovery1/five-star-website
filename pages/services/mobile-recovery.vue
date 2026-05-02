<script setup lang="ts">
useSeoMeta({
  title: 'iPhone & Mobile Data Recovery',
  description: 'iPhone and Android data recovery for water damage, broken screens, and failed updates. Glendale, CA. No data = no charge.'
})
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="iPhone & Mobile Recovery"
      subtitle="Your Phone Died. Your Data Didn't Have To."
      description="Mobile data recovery is one of the most difficult and delicate processes in the field. Our engineers specialize in chip-level recovery from damaged iOS and Android devices."
    >
      <template #badges>
        <div class="trust-badges">
          <span class="badge">✅ All iPhone Models</span>
          <span class="badge">✅ Android Support</span>
          <span class="badge">✅ Water Damage</span>
        </div>
      </template>
    </HeroSection>
    <StatsBar />
    <section>
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Mobile Recovery Services</h2>
        </div>
        <div class="grid-3">
          <div v-for="s in [
            {icon:'💧',title:'Water Damage',desc:'Dropped in water, toilet, pool, or ocean. Act fast — do not try to charge it. Bring it to us immediately.'},
            {icon:'📱',title:'Broken Screen',desc:'Black screen or shattered display doesn\'t mean the data is gone. We access the storage directly.'},
            {icon:'🔄',title:'Failed iOS Update',desc:'Stuck in recovery mode or bootloop after an iOS update. We extract data without completing the update.'},
            {icon:'🗑️',title:'Deleted Photos & Videos',desc:'Accidentally deleted photos, messages, or videos? We recover them from device storage.'},
            {icon:'🔥',title:'Overheating / Physical Damage',desc:'Burnt or severely damaged phones require chip-off recovery — extracting the NAND chip directly.'},
            {icon:'🔐',title:'Locked / Disabled Phones',desc:'Forgot your passcode? Disabled after too many attempts? We work with law enforcement and owners.'},
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
