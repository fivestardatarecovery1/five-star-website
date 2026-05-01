<script setup lang="ts">
useSeoMeta({
  title: 'Hard Drive Data Recovery — All Brands & Failure Types',
  description: 'Expert hard drive data recovery in Glendale, CA. Clicking drives, head failures, firmware corruption, water damage. No data = no charge. Free evaluation. Call 323-672-3000.'
})

const signs = [
  'Hard drive making clicking, grinding, or beeping sounds',
  'Drive not recognized by your computer or BIOS',
  'Files or folders suddenly missing or showing as empty',
  'Drive spins up but the system cannot read it',
  'Error messages like "Drive Not Formatted" or "Disk Error"',
  'Extremely slow performance or freezing when accessing files',
  'Drive dropped, submerged in water, or exposed to heat/fire',
  'Accidental format, deletion, or partition wipe',
]

const process = [
  { step: '01', title: 'Free Diagnosis', desc: 'We evaluate your drive at no cost using specialized hardware tools, checking heads, platters, PCB, and firmware.' },
  { step: '02', title: 'Quote & Approval', desc: 'You receive a flat-rate quote before any work begins. No surprises, no hidden fees.' },
  { step: '03', title: 'Cleanroom Recovery', desc: 'For mechanical failures, our engineers open the drive in our ISO Class 5 cleanroom and perform head swaps or platter transfers.' },
  { step: '04', title: 'Full Disk Imaging', desc: 'We create a sector-level clone of your drive, then perform recovery on the image — your original drive is never put at risk.' },
  { step: '05', title: 'File Verification', desc: 'Recovered files are verified and organized. You review the file list before we transfer anything.' },
  { step: '06', title: 'Data Delivery', desc: 'Data is delivered on a new drive or via secure download. You only pay when satisfied.' },
]

const whyUs = [
  { icon: '🏭', title: 'ISO Class 5 Cleanroom', desc: 'Our state-of-the-art cleanroom prevents further damage during head replacements and platter work.' },
  { icon: '🔒', title: 'No Data = No Charge', desc: 'If we cannot recover your data or you decline the results, you pay absolutely nothing.' },
  { icon: '⚡', title: 'Emergency Service Available', desc: 'We offer Expedited and Expedited Plus service for time-critical recoveries — 24-48 hour turnaround.' },
]

const faqs = [
  { q: 'How much does hard drive recovery cost?', a: 'Our flat-rate pricing starts at $300 for logical/firmware issues and $650-$950 for cleanroom mechanical recovery. You receive an exact quote before any work begins.' },
  { q: 'My hard drive is clicking — can you still recover it?', a: 'Yes. A clicking hard drive typically means read/write head failure. Stop using the drive immediately and contact us. The sooner we receive it, the better the recovery odds.' },
  { q: 'How long does hard drive recovery take?', a: 'Standard recovery takes 3-5 business days. Rush service (Expedited) takes 24-48 hours. We give you a timeline during the free evaluation.' },
  { q: 'Do you recover data from all hard drive brands?', a: 'Yes — Western Digital, Seagate, Toshiba, Hitachi, HGST, Samsung, Maxtor, Fujitsu, and all other HDD manufacturers.' },
  { q: 'Can you recover data from a fire or water-damaged hard drive?', a: 'Often yes, but speed is critical. Contact us immediately — the sooner we can begin treatment, the higher your chances of recovery.' },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />

    <HeroSection
      title="Hard Drive Data Recovery"
      subtitle="We Recover What Others Can't."
      description="From clicking and grinding drives to water-damaged platters and failed PCBs — our certified engineers use ISO Class 5 cleanroom technology to recover your critical data from any hard drive."
    >
      <template #badges>
        <div class="trust-badges">
          <span class="badge">✅ No Data = No Charge</span>
          <span class="badge">✅ ISO Class 5 Cleanroom</span>
          <span class="badge">✅ All HDD Brands</span>
          <span class="badge">✅ Free Evaluation</span>
        </div>
      </template>
    </HeroSection>

    <!-- What is Hard Drive Recovery -->
    <section class="intro-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What Is <span class="gold-underline gold">Hard Drive Recovery?</span></h2>
        </div>
        <div class="intro-content">
          <p>Hard drive data recovery is the process of extracting inaccessible, lost, or corrupted data from a failed or damaged hard disk drive (HDD). Hard drives are mechanical devices — they contain spinning magnetic platters and read/write heads that move at incredible precision. When any component fails, your data becomes inaccessible.</p>
          <p>We recover files from all types of hard drive failures — from simple logical errors that can be addressed with software, to complex mechanical failures requiring full cleanroom intervention. Our engineers have successfully recovered data from drives that other companies declared "unrecoverable."</p>
          <p>Whether your drive is making a clicking sound, has suffered physical damage, or simply stopped working one day, contact us for a free evaluation. We'll tell you exactly what's wrong and what we can do about it.</p>
        </div>
      </div>
    </section>

    <!-- Signs You Need Recovery -->
    <section class="signs-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Signs You Need <span class="gold-underline gold">Hard Drive Recovery</span></h2>
        </div>
        <div class="signs-grid">
          <div v-for="sign in signs" :key="sign" class="sign-item">
            <span class="sign-check">✓</span>
            <span>{{ sign }}</span>
          </div>
        </div>
        <div class="signs-warning">
          <strong>⚠️ Important:</strong> If your hard drive is making unusual sounds, stop using it immediately. Continued use can cause further damage and make recovery more difficult or impossible. Call us at <a href="tel:3236723000">323-672-3000</a> right away.
        </div>
      </div>
    </section>

    <!-- Recovery Process -->
    <section class="process-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our <span class="gold-underline gold">Recovery Process</span></h2>
          <p class="section-subtitle">A transparent, step-by-step process with updates at every stage.</p>
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

    <!-- Why Choose Five Star -->
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

    <!-- FAQ -->
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

    <!-- CTA -->
    <section class="cta-band">
      <div class="container cta-band-inner">
        <div>
          <h2 class="cta-title">Ready to Recover Your Data?</h2>
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
.badge {
  background: rgba(255,255,255,0.06);
  border: 1px solid var(--border);
  color: var(--white);
  padding: 7px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
}

.intro-content p {
  font-size: 16px;
  color: var(--muted);
  line-height: 1.8;
  margin-bottom: 16px;
  max-width: 800px;
}

.signs-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  margin-bottom: 32px;
}
.sign-item {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  font-size: 15px;
  color: var(--muted);
}
.sign-check {
  color: var(--gold);
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 1px;
}
.signs-warning {
  background: rgba(245, 200, 66, 0.08);
  border: 1px solid rgba(245, 200, 66, 0.3);
  border-radius: 10px;
  padding: 20px 24px;
  font-size: 15px;
  color: var(--muted);
  line-height: 1.6;
}
.signs-warning a { color: var(--gold); font-weight: 700; }

.process-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.process-num {
  font-family: var(--font-heading);
  font-size: 32px;
  font-weight: 900;
  color: var(--gold);
  margin-bottom: 12px;
}
.process-title {
  font-family: var(--font-heading);
  font-size: 16px;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 8px;
}
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

@media (max-width: 768px) {
  .signs-grid, .process-grid { grid-template-columns: 1fr; }
  .cta-band-inner { flex-direction: column; }
}
</style>
