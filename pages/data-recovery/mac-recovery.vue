<script setup lang="ts">
useSeoMeta({
  title: 'Mac Data Recovery — iMac, MacBook, M1/M2/M3 | Five Star Data Recovery',
  description: 'Professional Mac data recovery for iMac, MacBook, MacBook Pro, MacBook Air. Apple Silicon (M1/M2/M3), T2 chip, Fusion Drive, and Time Machine failures. Call 323-672-3000.'
})
const models = ['MacBook Pro (Intel & Apple Silicon)', 'MacBook Air (Intel & Apple Silicon)', 'iMac (all generations)', 'Mac Pro', 'Mac mini', 'Mac Studio']
const issues = ['Mac won\'t boot — stuck on Apple logo or spinning wheel', 'Data lost after macOS upgrade or update', 'Fusion Drive failure or degradation', 'FileVault encrypted drive failed', 'SSD not recognized after liquid damage', 'Time Machine backup failure or corruption', 'Accidental deletion or Trash emptied', 'Apple T2 or M1/M2/M3 chip storage failure']
const faqs = [
  { q: 'Can you recover data from an M1 or M2 Mac?', a: 'Yes. Apple Silicon Macs with T2 and M-series chips present unique recovery challenges, but we have the tools and expertise to recover data from them — including encrypted APFS volumes.' },
  { q: 'What about Fusion Drive recovery?', a: 'Fusion Drive combines an SSD and HDD into one logical volume. When it fails, we treat each component separately and reconstruct the logical volume during recovery.' },
  { q: 'Can you recover a FileVault-encrypted Mac?', a: 'Yes, if you have the recovery key or password. Without it, recovery is extremely difficult. Contact us to discuss your specific situation.' },
  { q: 'My Mac died and I have no backup. Can you help?', a: 'Absolutely. This is one of our most common cases. As long as you haven\'t overwritten the data (avoid using the drive or reinstalling macOS), your files are likely still recoverable.' },
]
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>
<template>
  <div>
    <NavBar />
    <HeroSection title="Mac Data Recovery" subtitle="Apple Expert Recovery. iMac, MacBook, Apple Silicon." description="We specialize in recovering data from all Mac computers — including modern Apple Silicon Macs with M1, M2, and M3 chips, T2 security chip Macs, Fusion Drives, and all versions of macOS. No data = no charge." >
      <template #badges>
        <div class="trust-badges">
          <span class="badge">✅ M1 / M2 / M3 Macs</span>
          <span class="badge">✅ T2 Chip Recovery</span>
          <span class="badge">✅ Fusion Drive</span>
          <span class="badge">✅ APFS & HFS+</span>
        </div>
      </template>
    </HeroSection>
    <section class="intro-section">
      <div class="container">
        <div class="section-header"><h2 class="section-title">Mac <span class="gold-underline gold">Data Recovery</span></h2></div>
        <div class="intro-content">
          <p>Mac computers use a variety of storage architectures — from traditional HDDs and SATA SSDs to proprietary NVMe SSDs soldered directly to the logic board. Modern Macs with T2 security chips and Apple Silicon (M1/M2/M3) require specialized knowledge and tools to recover data from.</p>
          <p>We recover data from macOS-formatted drives using APFS, HFS+, and HFS file systems. Whether your Mac was damaged, failed to boot after an update, or the drive simply stopped working, our team has the tools to get your data back.</p>
        </div>
      </div>
    </section>
    <section class="signs-section">
      <div class="container">
        <div class="section-header"><h2 class="section-title">Mac Issues <span class="gold-underline gold">We Recover From</span></h2></div>
        <div class="signs-grid">
          <div v-for="issue in issues" :key="issue" class="sign-item"><span class="sign-check">✓</span><span>{{ issue }}</span></div>
        </div>
      </div>
    </section>
    <section class="models-section">
      <div class="container">
        <div class="section-header"><h2 class="section-title">Supported <span class="gold-underline gold">Mac Models</span></h2></div>
        <div class="brands-grid">
          <div v-for="m in models" :key="m" class="brand-tag">{{ m }}</div>
        </div>
      </div>
    </section>
    <section class="faq-section">
      <div class="container">
        <div class="section-header"><h2 class="section-title">Frequently Asked <span class="gold-underline gold">Questions</span></h2></div>
        <div class="faq-list">
          <div v-for="(faq, i) in faqs" :key="i" class="faq-item" :class="{ open: openFaq === i }">
            <button class="faq-question" @click="toggleFaq(i)"><span>{{ faq.q }}</span><span class="faq-icon">{{ openFaq === i ? '−' : '+' }}</span></button>
            <div v-if="openFaq === i" class="faq-answer">{{ faq.a }}</div>
          </div>
        </div>
      </div>
    </section>
    <section class="cta-band">
      <div class="container cta-band-inner">
        <div><h2 class="cta-title">Ready to Recover Your Mac Data?</h2><p class="cta-sub">Free evaluation. Apple-specific expertise. No charge if we can't recover.</p></div>
        <div class="cta-actions"><a href="tel:3236723000" class="btn btn-gold">📞 323-672-3000</a><NuxtLink to="/data-recovery/free-quote" class="btn btn-outline-sm">Get Free Quote</NuxtLink></div>
      </div>
    </section>
    <FooterBar />
  </div>
</template>
<style scoped>
.trust-badges { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 8px; }
.badge { background: rgba(255,255,255,0.06); border: 1px solid var(--border); color: var(--white); padding: 7px 14px; border-radius: 20px; font-size: 13px; font-weight: 500; }
.intro-content p { font-size: 16px; color: var(--muted); line-height: 1.8; margin-bottom: 16px; max-width: 800px; }
.signs-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
.sign-item { display: flex; gap: 12px; align-items: flex-start; font-size: 15px; color: var(--muted); }
.sign-check { color: var(--gold); font-weight: 700; flex-shrink: 0; }
.brands-grid { display: flex; flex-wrap: wrap; gap: 12px; }
.brand-tag { background: var(--card-bg); border: 1px solid var(--border); color: var(--muted); padding: 10px 20px; border-radius: 8px; font-size: 14px; font-weight: 600; }
.faq-list { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 8px; }
.faq-item { background: var(--card-bg); border: 1px solid var(--border); border-radius: 10px; overflow: hidden; }
.faq-item.open { border-color: var(--gold); }
.faq-question { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; background: none; border: none; color: var(--white); font-size: 16px; font-weight: 600; cursor: pointer; text-align: left; gap: 12px; font-family: var(--font-body); }
.faq-icon { color: var(--gold); font-size: 22px; flex-shrink: 0; }
.faq-answer { padding: 0 24px 20px; font-size: 15px; color: var(--muted); line-height: 1.7; }
.cta-band { background: linear-gradient(135deg, #0f1220, #13161F); border-top: 1px solid var(--border); padding: 56px 0; }
.cta-band-inner { display: flex; justify-content: space-between; align-items: center; gap: 32px; flex-wrap: wrap; }
.cta-title { font-family: var(--font-heading); font-size: 28px; font-weight: 900; color: var(--white); margin-bottom: 8px; }
.cta-sub { font-size: 16px; color: var(--muted); }
.cta-actions { display: flex; gap: 16px; flex-wrap: wrap; }
.btn-outline-sm { display: inline-block; padding: 14px 28px; border: 2px solid var(--gold); color: var(--gold); border-radius: 8px; font-weight: 700; font-size: 15px; text-decoration: none; }
.btn-outline-sm:hover { background: rgba(245,200,66,0.1); }
@media (max-width: 768px) { .signs-grid { grid-template-columns: 1fr; } .cta-band-inner { flex-direction: column; } }
</style>
