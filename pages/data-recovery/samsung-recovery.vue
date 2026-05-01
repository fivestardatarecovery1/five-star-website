<script setup lang="ts">
useSeoMeta({
  title: 'Samsung Hard Drive & SSD Data Recovery | Five Star Data Recovery',
  description: 'Expert Samsung hard drive and SSD data recovery. All Samsung models recovered including SpinPoint, EVO, and PRO series. Call 323-672-3000.'
})
const faqs = [
  { q: 'How long does recovery take?', a: 'Standard recovery is 3-5 business days. Rush Expedited service is available for 24-48 hour turnaround. We provide a timeline during your free evaluation.' },
  { q: 'How much does this recovery cost?', a: 'Recovery starts at $300 for logical issues. Physical/cleanroom recovery ranges from $650-$950. You receive a flat-rate quote before any work begins — no surprises.' },
  { q: 'What if you cannot recover my data?', a: 'Simple — you pay nothing. Our No Data = No Charge guarantee means you only pay when we successfully recover your files.' },
  { q: 'Do I have to come in person?', a: 'No. We offer free nationwide shipping both ways. You can also visit our Glendale, CA lab in person. Either way, recovery starts with a free diagnosis.' },
]
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>
<template>
  <div>
    <NavBar />
    <HeroSection title="Samsung Data Recovery" subtitle="Recover Data from Any Samsung Drive." description="Samsung makes some of the world's most popular hard drives and SSDs. When a Samsung drive fails, our engineers have the expertise and tools to recover your data from any Samsung model.">
      <template #badges>
        <div class="trust-badges">
          <span class="badge">✅ Samsung HDD & SSD</span>
          <span class="badge">✅ All Samsung Models</span>
          <span class="badge">✅ Free Evaluation</span>
          <span class="badge">✅ No Data = No Charge</span>
        </div>
      </template>
    </HeroSection>
    <section class="intro-section">
      <div class="container">
        <div class="section-header"><h2 class="section-title">Samsung <span class="gold-underline gold">Recovery Service</span></h2></div>
        <div class="intro-content">
          <p>Samsung produces both hard drives (SpinPoint series) and SSDs (870 EVO, 870 PRO, 980 PRO, and others). Each product line has unique characteristics and failure modes that require specialized knowledge to recover from effectively.</p>
          <p>We recover from the full Samsung drive lineup: SpinPoint hard drives, 860/870 EVO and PRO SATA SSDs, 970/980 EVO and PRO NVMe SSDs, Samsung portable SSDs (T5, T7 series), and Samsung enterprise SSDs. Our specialized Samsung recovery tools handle firmware-level issues specific to Samsung storage.</p>
          <p>All recoveries begin with a free, no-obligation evaluation. We provide a flat-rate quote before any work begins. If we cannot recover your data, you pay nothing.</p>
        </div>
      </div>
    </section>
    <section class="why-section">
      <div class="container">
        <div class="section-header"><h2 class="section-title">Why Choose <span class="gold-underline gold">Five Star?</span></h2></div>
        <div class="grid-3">
          <div class="card why-card"><div class="why-icon">🏆</div><h3 class="why-title">No Data = No Charge</h3><p class="why-desc">You only pay when we successfully recover your data. Zero financial risk.</p></div>
          <div class="card why-card"><div class="why-icon">⚡</div><h3 class="why-title">Fast Turnaround</h3><p class="why-desc">Standard 3-5 day turnaround. Emergency Expedited service available 24/7.</p></div>
          <div class="card why-card"><div class="why-icon">🔒</div><h3 class="why-title">100% Confidential</h3><p class="why-desc">Your data is handled with strict confidentiality. NDA available on request.</p></div>
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
        <div><h2 class="cta-title">Ready to Recover Your Data?</h2><p class="cta-sub">Free evaluation · Flat-rate pricing · No charge if we can't recover</p></div>
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
.why-card { text-align: center; }
.why-icon { font-size: 36px; margin-bottom: 12px; }
.why-title { font-family: var(--font-heading); font-size: 16px; font-weight: 700; color: var(--white); margin-bottom: 8px; }
.why-desc { font-size: 14px; color: var(--muted); }
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
@media (max-width: 768px) { .cta-band-inner { flex-direction: column; } }
</style>
