<script setup lang="ts">
useSeoMeta({
  title: 'Hard Drive Clicking? — Emergency Data Recovery | Five Star',
  description: 'Hard drive making clicking sounds? Stop using it immediately. This is the "click of death" — a serious mechanical failure. Call Five Star Data Recovery now: 323-672-3000.'
})

const steps = [
  { num: '01', title: 'Stop Using the Drive', desc: 'Power down immediately. Every additional spin cycle risks further platter damage. Do not plug it back in.' },
  { num: '02', title: 'Do Not Shake or Drop', desc: 'Never shake, tap, or attempt to fix a clicking drive yourself. This causes additional platter scoring and reduces recovery odds.' },
  { num: '03', title: 'Do Not Use Recovery Software', desc: 'Running software on a clicking drive stresses it further and may cause heads to crash repeatedly into the platters.' },
  { num: '04', title: 'Call Us Immediately', desc: 'Call 323-672-3000 right now. We offer emergency intake and our Glendale lab is available for immediate drop-off.' },
  { num: '05', title: 'Free Diagnosis', desc: 'We evaluate your drive at no charge, identify the exact cause of the clicking, and give you a flat-rate recovery quote.' },
  { num: '06', title: 'Cleanroom Recovery', desc: 'Our engineers perform head replacement or other precision repairs in our ISO Class 5 cleanroom to extract your data.' },
]

const causes = [
  { title: 'Read/Write Head Failure', desc: 'The most common cause. Heads fail to locate data on the correct track and reset repeatedly — causing the clicking sound.' },
  { title: 'Head Crash', desc: 'Heads made physical contact with the platters, causing damage. Often from drops, vibration, or sudden power loss.' },
  { title: 'Mechanical Arm Failure', desc: 'The actuator arm that moves the heads gets stuck or fails to reach correct positions.' },
  { title: 'Platter Damage', desc: 'Scored or scratched platters from head contact, causing read errors and repeated retry attempts.' },
  { title: 'Firmware Corruption', desc: 'In some cases, firmware-level failures can cause clicking-like behavior as the drive repeatedly resets.' },
  { title: 'Spindle Motor Problems', desc: 'Weak or failing spindle motor causes the platters to spin inconsistently, triggering head failures.' },
]

const faqs = [
  { q: 'What does hard drive clicking actually sound like?', a: 'The clicking sound is typically a rhythmic "click-click-click" or "tick-tick-tick" during startup or file access. Some drives make a single loud clunk. Any repeated abnormal noise is a warning sign.' },
  { q: 'Can I recover data from a clicking hard drive myself?', a: 'No. Attempting DIY recovery on a clicking drive is very likely to cause additional damage. The drive needs to be opened in a cleanroom environment by a professional engineer.' },
  { q: 'What are my chances of data recovery?', a: 'With professional intervention and minimal additional use of the drive, success rates are high — often 80-95%. The key factors are how quickly you stop using the drive and how severe the initial damage was.' },
  { q: 'How much does clicking hard drive recovery cost?', a: 'Cleanroom recovery for a clicking drive typically ranges from $650-$950, depending on the model and severity of damage. You receive an exact quote before any work begins.' },
  { q: 'How long will recovery take?', a: 'Standard cleanroom recovery takes 3-7 business days. Expedited service (24-48 hours) is available for emergencies.' },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />

    <HeroSection
      title="Hard Drive Clicking? This Is an Emergency."
      subtitle="The Click of Death Is Serious. Stop Using Your Drive NOW."
      description="A clicking hard drive means mechanical failure — specifically, your read/write heads are failing. Every second the drive runs increases the damage. Call us immediately for emergency intake and professional cleanroom recovery."
    >
      <template #badges>
        <div class="trust-badges">
          <span class="badge">🚨 Emergency Service</span>
          <span class="badge">✅ Cleanroom Recovery</span>
          <span class="badge">✅ No Data = No Charge</span>
          <span class="badge">✅ Call Now: 323-672-3000</span>
        </div>
      </template>
    </HeroSection>

    <!-- Emergency banner -->
    <section class="emergency-banner">
      <div class="container">
        <div class="emergency-box">
          <div class="emergency-icon">🚨</div>
          <div>
            <h2 class="emergency-title">Your Drive Is Failing Right Now</h2>
            <p class="emergency-text">If your hard drive is clicking, grinding, or making any unusual sounds — stop using it immediately. Do not power it back on. Do not attempt to copy files. Call us right now.</p>
          </div>
          <a href="tel:3236723000" class="btn btn-gold emergency-btn">📞 Call 323-672-3000 Now</a>
        </div>
      </div>
    </section>

    <!-- What is clicking -->
    <section class="intro-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Why Is My <span class="gold-underline gold">Hard Drive Clicking?</span></h2>
        </div>
        <div class="intro-content">
          <p>When you hear a clicking or ticking sound from your hard drive, you're hearing the read/write head attempting to find data on the magnetic platters — and repeatedly failing. Instead of reading the correct track, the head resets and tries again, causing that rhythmic clicking noise.</p>
          <p>This condition is commonly called the "click of death," and it represents one of the most serious failure modes a hard drive can experience. In most cases, it's a mechanical failure — a component inside the drive has broken or become misaligned.</p>
          <p>The most critical thing to understand: every time you power on a clicking drive, you risk further platter damage. The longer the drive runs, the harder recovery becomes.</p>
        </div>
        <div class="causes-grid">
          <div v-for="c in causes" :key="c.title" class="cause-card card">
            <h3 class="cause-title">{{ c.title }}</h3>
            <p class="cause-desc">{{ c.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- What to do -->
    <section class="process-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What To Do <span class="gold-underline gold">Right Now</span></h2>
          <p class="section-subtitle">Follow these steps exactly to maximize your recovery chances.</p>
        </div>
        <div class="process-grid">
          <div v-for="s in steps" :key="s.num" class="process-card card">
            <div class="process-num">{{ s.num }}</div>
            <h3 class="process-title">{{ s.title }}</h3>
            <p class="process-desc">{{ s.desc }}</p>
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

    <section class="cta-band">
      <div class="container cta-band-inner">
        <div>
          <h2 class="cta-title">Don't Wait — Call Us Right Now</h2>
          <p class="cta-sub">Every minute matters. Our emergency intake is available 24/7.</p>
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
.emergency-banner { background: rgba(220, 38, 38, 0.08); border-top: 1px solid rgba(220,38,38,0.3); border-bottom: 1px solid rgba(220,38,38,0.3); padding: 32px 0; }
.emergency-box { display: flex; align-items: center; gap: 24px; flex-wrap: wrap; }
.emergency-icon { font-size: 48px; flex-shrink: 0; }
.emergency-title { font-family: var(--font-heading); font-size: 22px; font-weight: 900; color: #ff6b6b; margin-bottom: 6px; }
.emergency-text { font-size: 15px; color: var(--muted); line-height: 1.6; }
.emergency-btn { flex-shrink: 0; margin-left: auto; white-space: nowrap; }
.intro-content p { font-size: 16px; color: var(--muted); line-height: 1.8; margin-bottom: 16px; max-width: 800px; }
.causes-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 40px; }
.cause-title { font-family: var(--font-heading); font-size: 15px; font-weight: 700; color: var(--gold); margin-bottom: 8px; }
.cause-desc { font-size: 14px; color: var(--muted); line-height: 1.6; }
.process-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.process-num { font-family: var(--font-heading); font-size: 32px; font-weight: 900; color: var(--gold); margin-bottom: 12px; }
.process-title { font-family: var(--font-heading); font-size: 16px; font-weight: 700; color: var(--white); margin-bottom: 8px; }
.process-desc { font-size: 14px; color: var(--muted); line-height: 1.6; }
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
@media (max-width: 768px) { .causes-grid, .process-grid { grid-template-columns: 1fr; } .cta-band-inner, .emergency-box { flex-direction: column; } .emergency-btn { margin-left: 0; } }
</style>
