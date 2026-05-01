<script setup lang="ts">
useSeoMeta({
  title: 'External Hard Drive Data Recovery | Five Star Data Recovery',
  description: 'Expert external hard drive recovery for WD, Seagate, LaCie, Toshiba, and all brands. Dropped drives, not recognized, clicking. No data = no charge. Call 323-672-3000.'
})
const brands = ['WD My Passport', 'WD My Book', 'Seagate Backup Plus', 'Seagate Expansion', 'LaCie', 'Toshiba Canvio', 'Samsung T7', 'G-Technology', 'SanDisk Extreme', 'Buffalo', 'Iomega', 'Maxtor']
const issues = ['Dropped external drive — clicking or not spinning', 'Drive not recognized when plugged in', '"Please format the disk" error message', 'Drive appears but files are missing', 'USB connector broken or damaged', 'Not showing up in Windows or Mac', 'Files corrupted or showing as 0 bytes', 'Accidental deletion or format']
const faqs = [
  { q: 'Why did my external hard drive suddenly stop working?', a: 'External drives are highly susceptible to physical shock (drops), USB connector damage, power surges, and PCB failures. Any of these can cause instant data loss.' },
  { q: 'Can you recover data from a dropped external drive?', a: 'Yes. Dropped drives often suffer head crashes or platter damage. We perform this recovery in our cleanroom. The sooner you bring it to us, the better the outcome.' },
  { q: 'My external drive makes a clicking sound — what does that mean?', a: 'Clicking indicates mechanical head failure. Stop using the drive immediately and contact us. Do not attempt to shake the drive or keep plugging it in.' },
  { q: 'How much does external hard drive recovery cost?', a: 'Logical/PCB failures start at $300. Mechanical/cleanroom recovery ranges from $650-$950. You receive a flat-rate quote before any work begins.' },
]
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>
<template>
  <div>
    <NavBar />
    <HeroSection title="External Hard Drive Recovery" subtitle="Dropped It. It Stopped Working. We'll Get Your Files Back." description="External hard drives are the most commonly damaged storage devices. Whether yours was dropped, stopped spinning, or simply isn't showing up anymore — our engineers can recover your data from virtually any portable drive." >
      <template #badges>
        <div class="trust-badges">
          <span class="badge">✅ All External Brands</span>
          <span class="badge">✅ Dropped Drives OK</span>
          <span class="badge">✅ Cleanroom Available</span>
          <span class="badge">✅ No Data = No Charge</span>
        </div>
      </template>
    </HeroSection>
    <section class="intro-section">
      <div class="container">
        <div class="section-header"><h2 class="section-title">External HDD <span class="gold-underline gold">Recovery Service</span></h2></div>
        <div class="intro-content">
          <p>External hard drives are portable, convenient, and unfortunately — fragile. A single drop can damage the read/write heads inside. A sudden disconnection can corrupt the file system. A power surge can fry the PCB. We've seen every possible external drive failure, and we recover from all of them.</p>
          <p>We specialize in recovering data from portable external drives (2.5") and desktop externals (3.5"), including encrypted drives, drives with broken USB connectors, and drives that make clicking or beeping sounds.</p>
        </div>
      </div>
    </section>
    <section class="signs-section">
      <div class="container">
        <div class="section-header"><h2 class="section-title">Common <span class="gold-underline gold">Issues We Fix</span></h2></div>
        <div class="signs-grid">
          <div v-for="issue in issues" :key="issue" class="sign-item"><span class="sign-check">✓</span><span>{{ issue }}</span></div>
        </div>
      </div>
    </section>
    <section class="brands-section">
      <div class="container">
        <div class="section-header"><h2 class="section-title">Brands We <span class="gold-underline gold">Recover From</span></h2></div>
        <div class="brands-grid">
          <div v-for="b in brands" :key="b" class="brand-tag">{{ b }}</div>
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
        <div><h2 class="cta-title">Ready to Recover Your External Drive?</h2><p class="cta-sub">Free evaluation. Flat-rate pricing. No charge if we can't recover.</p></div>
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
