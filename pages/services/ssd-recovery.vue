<script setup lang="ts">
useSeoMeta({
  title: 'SSD Data Recovery',
  description: 'Expert SSD data recovery for M.2, NVMe, SATA, and PCIe drives. Controller failures, NAND chip recovery, deleted partitions. No data = no charge.'
})
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="SSD Data Recovery"
      subtitle="Advanced Flash Memory Recovery."
      description="SSD failures are complex — controller failures, NAND wear, and firmware corruption require specialized tools. Our engineers are trained in the latest flash memory forensics."
    >
      <template #badges>
        <div class="trust-badges">
          <span class="badge">✅ NVMe & M.2 Support</span>
          <span class="badge">✅ NAND Chip Recovery</span>
          <span class="badge">✅ No Data = No Charge</span>
        </div>
      </template>
    </HeroSection>
    <section>
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">SSD Failure <span class="gold-underline gold">Types We Fix</span></h2>
        </div>
        <div class="grid-3">
          <div v-for="f in [
            {icon:'⚡',title:'Controller Failure',desc:'The controller chip manages all read/write operations. When it fails, we bypass it using direct NAND access techniques.'},
            {icon:'🔌',title:'Power Surge Damage',desc:'Voltage spikes can destroy the controller and NAND simultaneously. We perform chip-level recovery on damaged boards.'},
            {icon:'💾',title:'Firmware Corruption',desc:'Corrupted firmware can make an SSD invisible to the OS. We repair or bypass firmware using specialized programmers.'},
            {icon:'🗑️',title:'Accidental Deletion',desc:'TRIM-enabled SSDs present unique challenges. Our tools recover deleted data before it\'s permanently overwritten.'},
            {icon:'📊',title:'Wear Leveling Failure',desc:'Over-used SSDs reach their write cycle limit. We use advanced algorithms to extract data from worn NAND.'},
            {icon:'🔒',title:'Encrypted SSDs',desc:'Self-encrypting drives and BitLocker-protected SSDs recovered when owner credentials are available.'},
          ]" :key="f.title" class="card feature-card">
            <div class="feature-icon">{{ f.icon }}</div>
            <h3 class="feature-title">{{ f.title }}</h3>
            <p class="feature-desc">{{ f.desc }}</p>
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
.feature-icon { font-size: 32px; margin-bottom: 12px; }
.feature-title { font-family: var(--font-heading); font-size: 16px; font-weight: 700; margin-bottom: 8px; }
.feature-desc { font-size: 14px; color: var(--muted); line-height: 1.6; }
</style>
