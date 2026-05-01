<script setup lang="ts">
useSeoMeta({
  title: "Drive Won't Power On? — Data Recovery Help | Five Star",
  description: "Hard drive or external drive not powering on? We diagnose and recover data from drives with PCB failures, motor failures, and electrical damage. Call 323-672-3000."
})

const causes = [
  { icon: '⚡', title: 'PCB (Circuit Board) Failure', desc: 'The printed circuit board that controls the drive has failed — often from a power surge or electrical short. This is actually one of the most recoverable failure types.' },
  { icon: '🔌', title: 'Bad USB/Power Connection', desc: 'For external drives, the USB connector or power supply may be faulty. We always rule this out before proceeding with recovery.' },
  { icon: '🔋', title: 'Spindle Motor Failure', desc: 'The motor that spins the drive platters has seized or failed. The drive makes no noise and won\'t spin up.' },
  { icon: '💥', title: 'Power Surge Damage', desc: 'A power surge can instantly fry the PCB and sometimes damage internal components. We replace the PCB with a matching donor board.' },
  { icon: '🌊', title: 'Liquid Damage', desc: 'Liquid can short-circuit the PCB and damage internal components. Early intervention significantly improves recovery odds.' },
  { icon: '🔥', title: 'Overheating / Burn Damage', desc: 'Excessive heat can cause component failure on the PCB or damage to internal parts of the drive.' },
]

const faqs = [
  { q: 'Can you really recover data from a drive that won\'t turn on?', a: 'Yes — frequently. A drive that won\'t power on is often the result of a failed PCB (circuit board) rather than damage to the data itself. By replacing the PCB with a matching donor board, we can often restore power and access the data.' },
  { q: 'What\'s the difference between a drive that doesn\'t spin and one that spins but isn\'t detected?', a: 'A drive that doesn\'t spin at all typically has a PCB failure or seized motor. A drive that spins but isn\'t detected usually has a head failure or firmware issue. Both are recoverable — we use different techniques for each.' },
  { q: 'My external drive fell and now won\'t power on. Is the data gone?', a: 'Not necessarily. The impact may have damaged the PCB or caused the heads to crash, but the platters containing your data are often intact. Contact us for a free evaluation.' },
  { q: 'Is it safe to try different USB cables or power adapters?', a: 'Yes — trying a different cable or power adapter is safe and advisable before contacting us. However, if the drive still won\'t respond after that, stop troubleshooting and call us.' },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="Drive Won't Power On? We Can Still Recover Your Data."
      subtitle="A Dead Drive Doesn't Mean Dead Data."
      description="When a hard drive or external drive won't power on, the cause is usually a failed PCB or motor — not damage to the data. Our engineers diagnose and recover from all power failure scenarios."
    >
      <template #badges>
        <div class="trust-badges">
          <span class="badge">✅ PCB Replacement</span>
          <span class="badge">✅ Motor Failure Recovery</span>
          <span class="badge">✅ Power Surge Recovery</span>
          <span class="badge">✅ No Data = No Charge</span>
        </div>
      </template>
    </HeroSection>

    <section class="intro-section">
      <div class="container">
        <div class="section-header"><h2 class="section-title">Why Your Drive <span class="gold-underline gold">Won't Power On</span></h2></div>
        <div class="intro-content">
          <p>When a hard drive refuses to power on, it feels like all hope is lost. But in reality, a drive that won't spin up is often one of the most recoverable failure types — because the data on the platters is frequently undamaged.</p>
          <p>The most common cause is a failed PCB (printed circuit board) — the electronics that control the drive. When the PCB fails, the drive simply gets no power or can't communicate. By replacing the failed PCB with a matching donor board (or repairing specific components), we can often restore functionality and recover all data.</p>
        </div>
        <div class="causes-grid">
          <div v-for="c in causes" :key="c.title" class="cause-card card">
            <div class="cause-icon">{{ c.icon }}</div>
            <h3 class="cause-title">{{ c.title }}</h3>
            <p class="cause-desc">{{ c.desc }}</p>
          </div>
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
        <div><h2 class="cta-title">Dead Drive? Let's Bring It Back.</h2><p class="cta-sub">Free evaluation. Flat-rate pricing. No charge if we can't recover.</p></div>
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
.causes-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 40px; }
.cause-icon { font-size: 32px; margin-bottom: 10px; }
.cause-title { font-family: var(--font-heading); font-size: 15px; font-weight: 700; color: var(--white); margin-bottom: 8px; }
.cause-desc { font-size: 14px; color: var(--muted); line-height: 1.6; }
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
@media (max-width: 768px) { .causes-grid { grid-template-columns: 1fr; } .cta-band-inner { flex-direction: column; } }
</style>
