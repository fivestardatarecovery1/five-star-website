<script setup lang="ts">
useSeoMeta({
  title: 'Laptop Data Recovery — All Brands | Five Star Data Recovery',
  description: 'Professional laptop data recovery for all brands. Dropped laptops, liquid spills, failed drives, corrupted OS. No data = no charge. Free evaluation. Call 323-672-3000.'
})

const signs = [
  'Laptop dropped and drive no longer recognized',
  'Liquid spill causing drive failure or corruption',
  'Files missing after Windows Update or OS reinstall',
  'Laptop fails to boot — spinning wheel or black screen',
  'Drive shows as RAW or "not formatted"',
  'Accidental deletion or factory reset',
  'Overheating caused drive failure',
  'Malware or ransomware encrypted your files',
]

const brands = ['Dell', 'HP', 'Lenovo', 'ASUS', 'Acer', 'Toshiba', 'Samsung', 'MSI', 'Razer', 'Microsoft Surface', 'Sony VAIO', 'LG Gram']

const faqs = [
  { q: 'Can you recover data from a laptop that won\'t turn on?', a: 'Yes. In many cases, the drive is still intact even if the laptop itself is dead. We remove the drive and perform direct recovery from it in our lab.' },
  { q: 'I spilled liquid on my laptop. What should I do?', a: 'Turn it off immediately, do not try to turn it back on, and contact us. Time is critical with liquid damage. The faster we receive the device, the better your recovery chances.' },
  { q: 'Can you recover data after a factory reset?', a: 'Sometimes, depending on the type of storage and what was done after the reset. Contact us to evaluate your specific case.' },
  { q: 'Do you work on Mac laptops?', a: 'Yes — we have a dedicated Mac recovery service for MacBook, MacBook Pro, and MacBook Air, including models with Apple Silicon (M1, M2, M3). See our Mac Recovery page for details.' },
  { q: 'How long does laptop recovery take?', a: 'Standard recovery is 3-5 business days. Rush service is available. We give you a timeline after the free evaluation.' },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="Laptop Data Recovery"
      subtitle="Dropped. Spilled On. Dead. We Get the Data Back."
      description="Laptops are vulnerable to drops, spills, and hardware failures. Our engineers recover data from all laptop brands and all failure types — from physically damaged drives to corrupted operating systems."
    >
      <template #badges>
        <div class="trust-badges">
          <span class="badge">✅ All Laptop Brands</span>
          <span class="badge">✅ Physical Damage OK</span>
          <span class="badge">✅ Liquid Spill Recovery</span>
          <span class="badge">✅ No Data = No Charge</span>
        </div>
      </template>
    </HeroSection>

    <section class="intro-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Laptop <span class="gold-underline gold">Data Recovery</span></h2>
        </div>
        <div class="intro-content">
          <p>Laptops are the most used and most vulnerable computers. They travel with us, sit on desks near drinks, and get dropped more often than we'd like. When a laptop drive fails — whether from physical damage, a corrupted operating system, or hardware malfunction — your files can disappear in an instant.</p>
          <p>Our team handles all types of laptop data loss. We commonly recover from dropped laptops with damaged internal drives, liquid spill victims, systems corrupted by failed Windows or macOS updates, malware-encrypted drives, and laptops that simply won't boot one day.</p>
          <p>We always work directly from the drive, never from the laptop itself. This ensures the safest possible recovery without risking further data loss.</p>
        </div>
      </div>
    </section>

    <section class="signs-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Signs You Need <span class="gold-underline gold">Laptop Recovery</span></h2>
        </div>
        <div class="signs-grid">
          <div v-for="sign in signs" :key="sign" class="sign-item">
            <span class="sign-check">✓</span>
            <span>{{ sign }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="brands-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Brands We <span class="gold-underline gold">Recover From</span></h2>
        </div>
        <div class="brands-grid">
          <div v-for="b in brands" :key="b" class="brand-tag">{{ b }}</div>
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
          <h2 class="cta-title">Ready to Recover Your Laptop Data?</h2>
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
