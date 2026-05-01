<script setup lang="ts">
useSeoMeta({
  title: 'SSD Data Recovery — NVMe, SATA, mSATA | Five Star Data Recovery',
  description: 'Professional SSD data recovery for NVMe, SATA, and mSATA drives. Controller failures, NAND chip issues, firmware corruption. No data = no charge. Call 323-672-3000.'
})

const signs = [
  'SSD not recognized by your computer or BIOS',
  'System boots to a black screen or fails to load OS',
  'Files and folders suddenly missing or inaccessible',
  'SSD shows as RAW or asks to be formatted',
  'Extremely slow read/write speeds or system freezes',
  'Drive disappeared after a power outage or surge',
  'Error messages like "Disk Not Initialized"',
  'SSD formatted accidentally or after a failed OS install',
]

const process = [
  { step: '01', title: 'Free Diagnosis', desc: 'We evaluate your SSD\'s controller, NAND chips, and firmware using specialized SSD diagnostic tools — at no cost to you.' },
  { step: '02', title: 'Flat-Rate Quote', desc: 'You receive an upfront price before any work begins. No hourly rates, no surprises.' },
  { step: '03', title: 'Controller Repair', desc: 'If the controller has failed, we use specialized tools to bypass or repair it, allowing data extraction from the NAND chips.' },
  { step: '04', title: 'Chip-Off Recovery', desc: 'For severe physical damage, we can perform chip-off recovery — removing NAND chips and reading them directly with specialized equipment.' },
  { step: '05', title: 'Data Verification', desc: 'Recovered files are verified, organized, and presented for your review before delivery.' },
  { step: '06', title: 'Secure Delivery', desc: 'Data transferred to a new drive or via secure download. You only pay when satisfied.' },
]

const whyUs = [
  { icon: '⚡', title: 'Specialized SSD Tools', desc: 'We use industry-leading SSD recovery hardware that can read raw NAND data regardless of controller state.' },
  { icon: '🔒', title: 'No Data = No Charge', desc: 'If we cannot recover your data or you decline results, you pay absolutely nothing.' },
  { icon: '🎯', title: 'High Success Rate', desc: 'We recover data from SSDs that most shops cannot — including encrypted drives and physically damaged chips.' },
]

const faqs = [
  { q: 'Is SSD data recovery harder than hard drive recovery?', a: 'SSD recovery requires entirely different tools and techniques than HDD recovery. Most standard recovery software cannot handle SSD failures. Our team has specialized SSD recovery hardware for all architectures.' },
  { q: 'My SSD has a failed controller — can data still be recovered?', a: 'Often yes. When the SSD controller fails, the NAND chips themselves typically still contain your data. We can bypass the failed controller and read data directly from the chips.' },
  { q: 'Can you recover data from an encrypted SSD (BitLocker, FileVault)?', a: 'Encryption adds complexity but recovery is still possible in many cases. Contact us with details about your encryption type and we\'ll assess your case.' },
  { q: 'How much does SSD recovery cost?', a: 'Logical/firmware SSD recovery starts at $300. Controller-level and chip-off recovery is typically $650-$950 depending on complexity. You receive an exact quote before we begin.' },
  { q: 'What SSD types do you recover from?', a: 'All types: NVMe M.2, SATA M.2, 2.5" SATA SSD, mSATA, PCIe, and proprietary Apple SSD formats. All brands including Samsung, WD, Crucial, Kingston, SK Hynix, Micron, and more.' },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />

    <HeroSection
      title="SSD Data Recovery"
      subtitle="Flash Memory Experts. High Success Rates."
      description="Solid state drives fail differently than hard drives — and recovery requires entirely different expertise and tools. Our engineers specialize in SSD controller repairs, NAND extraction, and chip-off recovery for all SSD types and brands."
    >
      <template #badges>
        <div class="trust-badges">
          <span class="badge">✅ NVMe / SATA / mSATA</span>
          <span class="badge">✅ Controller Recovery</span>
          <span class="badge">✅ Chip-Off Capable</span>
          <span class="badge">✅ No Data = No Charge</span>
        </div>
      </template>
    </HeroSection>

    <section class="intro-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Expert <span class="gold-underline gold">SSD Recovery</span></h2>
        </div>
        <div class="intro-content">
          <p>Solid State Drives are fast, reliable, and compact — but when they fail, recovery requires specialized knowledge that most repair shops simply don't have. Unlike hard drives, SSDs have no moving parts. Instead, they store data on NAND flash memory chips controlled by a sophisticated controller chip.</p>
          <p>When an SSD fails, the cause could be controller failure, firmware corruption, NAND wear-out, power surge damage, or physical trauma. Each failure type requires a different recovery approach. At Five Star Data Recovery, we use professional-grade SSD recovery hardware — the same tools used by forensic labs and government agencies.</p>
          <p>Whether your SSD disappeared from the system, shows as RAW, or was accidentally formatted, contact us for a free evaluation. We recover data from NVMe, SATA, mSATA, PCIe, and all other SSD form factors.</p>
        </div>
      </div>
    </section>

    <section class="signs-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Signs You Need <span class="gold-underline gold">SSD Recovery</span></h2>
        </div>
        <div class="signs-grid">
          <div v-for="sign in signs" :key="sign" class="sign-item">
            <span class="sign-check">✓</span>
            <span>{{ sign }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="process-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our SSD <span class="gold-underline gold">Recovery Process</span></h2>
        </div>
        <div class="process-grid">
          <div v-for="p in process" :key="p.step" class="process-card card">
            <div class="process-num">{{ p.step }}</div>
            <h3 class="process-title">{{ p.title }}</h3>
            <p class="process-desc">{{ p.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="why-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Why Choose <span class="gold-underline gold">Five Star?</span></h2>
        </div>
        <div class="grid-3">
          <div v-for="w in whyUs" :key="w.title" class="why-card card">
            <div class="why-icon">{{ w.icon }}</div>
            <h3 class="why-title">{{ w.title }}</h3>
            <p class="why-desc">{{ w.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="faq-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Frequently Asked <span class="gold-underline gold">Questions</span></h2>
        </div>
        <div class="faq-list">
          <div v-for="(faq, i) in faqs" :key="i" class="faq-item" :class="{ open: openFaq === i }">
            <button class="faq-question" @click="toggleFaq(i)">
              <span>{{ faq.q }}</span>
              <span class="faq-icon">{{ openFaq === i ? '−' : '+' }}</span>
            </button>
            <div v-if="openFaq === i" class="faq-answer">{{ faq.a }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-band">
      <div class="container cta-band-inner">
        <div>
          <h2 class="cta-title">Ready to Recover Your SSD Data?</h2>
          <p class="cta-sub">Free evaluation. Flat-rate pricing. No charge if we can't recover.</p>
        </div>
        <div class="cta-actions">
          <a href="tel:3236723000" class="btn btn-gold">📞 323-672-3000</a>
          <NuxtLink to="/data-recovery/free-quote" class="btn btn-outline-sm">Get Free Quote</NuxtLink>
        </div>
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
.process-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.process-num { font-family: var(--font-heading); font-size: 32px; font-weight: 900; color: var(--gold); margin-bottom: 12px; }
.process-title { font-family: var(--font-heading); font-size: 16px; font-weight: 700; color: var(--white); margin-bottom: 8px; }
.process-desc { font-size: 14px; color: var(--muted); line-height: 1.6; }
.why-card { text-align: center; }
.why-icon { font-size: 36px; margin-bottom: 12px; }
.why-title { font-family: var(--font-heading); font-size: 16px; font-weight: 700; color: var(--white); margin-bottom: 8px; }
.why-desc { font-size: 14px; color: var(--muted); }
.faq-list { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 8px; }
.faq-item { background: var(--card-bg); border: 1px solid var(--border); border-radius: 10px; overflow: hidden; transition: border-color 0.2s; }
.faq-item.open { border-color: var(--gold); }
.faq-question { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; background: none; border: none; color: var(--white); font-size: 16px; font-weight: 600; cursor: pointer; text-align: left; gap: 12px; font-family: var(--font-body); }
.faq-icon { color: var(--gold); font-size: 22px; font-weight: 400; flex-shrink: 0; }
.faq-answer { padding: 0 24px 20px; font-size: 15px; color: var(--muted); line-height: 1.7; }
.cta-band { background: linear-gradient(135deg, #0f1220, #13161F); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); padding: 56px 0; }
.cta-band-inner { display: flex; justify-content: space-between; align-items: center; gap: 32px; flex-wrap: wrap; }
.cta-title { font-family: var(--font-heading); font-size: 28px; font-weight: 900; color: var(--white); margin-bottom: 8px; }
.cta-sub { font-size: 16px; color: var(--muted); }
.cta-actions { display: flex; gap: 16px; flex-wrap: wrap; }
.btn-outline-sm { display: inline-block; padding: 14px 28px; border: 2px solid var(--gold); color: var(--gold); border-radius: 8px; font-weight: 700; font-size: 15px; text-decoration: none; transition: background 0.2s; }
.btn-outline-sm:hover { background: rgba(245,200,66,0.1); }
@media (max-width: 768px) { .signs-grid, .process-grid { grid-template-columns: 1fr; } .cta-band-inner { flex-direction: column; } }
</style>
