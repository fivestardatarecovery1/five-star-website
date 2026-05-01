<script setup lang="ts">
useSeoMeta({
  title: 'External HDD Recovery',
  description: 'External hard drive data recovery for WD, Seagate, LaCie, and more. Dropped, not detected, clicking. No data = no charge.'
})
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="External HDD Recovery"
      subtitle="Your Backup Just Failed — We'll Fix It."
      description="External drives are often your only backup. When they fail, we treat it as an emergency. Fast evaluation, transparent pricing, and no charge if we can't recover."
    >
      <template #badges>
        <div class="trust-badges">
          <span class="badge">✅ WD, Seagate, LaCie</span>
          <span class="badge">✅ Not Detected Drives</span>
          <span class="badge">✅ Free Shipping</span>
        </div>
      </template>
    </HeroSection>
    <section>
      <div class="container section-header">
        <h2 class="section-title">Supported <span class="gold-underline gold">External Drives</span></h2>
        <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:12px;margin-top:32px">
          <span v-for="b in ['WD My Passport','WD My Book','Seagate Backup Plus','Seagate Expansion','LaCie Rugged','G-Drive','Samsung T7','SanDisk Extreme','Toshiba Canvio','Buffalo MiniStation','Iomega','Verbatim']" :key="b"
            style="background:rgba(245,200,66,0.08);border:1px solid rgba(245,200,66,0.2);color:var(--gold);padding:8px 20px;border-radius:20px;font-size:14px;font-weight:600">
            {{ b }}
          </span>
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
