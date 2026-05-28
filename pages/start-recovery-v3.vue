<script setup lang="ts">
useSeoMeta({
  title: 'Start Recovery of Data - Five Star Data Recovery',
  description: 'Lost important files? Start Recovery of Data now! Drop-off or mail-in your device to get a free diagnosis from our certified engineers.',
})

const steps = [
  { num: '1', title: 'Drop Off or Ship Your Drive', text: 'Bring your device to our Glendale lab or ship it free with our prepaid label — no appointment needed.' },
  { num: '2', title: 'Free Diagnosis', text: 'Our certified engineers evaluate your device at no charge and identify the exact cause of data loss.' },
  { num: '3', title: 'Recovery in Progress', text: 'Engineers work in a certified ISO Class 5 cleanroom using advanced tools to safely recover your files.' },
  { num: '4', title: 'Review & Approve', text: 'We send you a full file listing before completing recovery. You only pay when you approve the results.' },
  { num: '5', title: 'Receive Your Data', text: 'Recovered files delivered on a new drive or via secure cloud transfer — fast and fully guaranteed.' },
]

const faqs = [
  { q: 'Can I start a data recovery case online?', a: 'Yes! You can easily start your data recovery case online by filling out our Start Recovery Form. Once submitted, our team will contact you to confirm the next steps, including drop-off or mail-in options.' },
  { q: 'Do I need to schedule an appointment before dropping off my device?', a: "No appointment is necessary. You're welcome to walk in during our business hours. However, submitting the form in advance helps us prepare for your device and minimize your wait time." },
  { q: 'What happens after I submit the Start Recovery Form?', a: "After you submit the form, we'll review your case details and reach out to you by phone or email to confirm receipt. From there, you can proceed with either dropping off your device in person or shipping it to our lab." },
  { q: 'Is there a fee just for submitting the form?', a: "No, there's no fee to submit the form. Any applicable fees will only be discussed and charged after diagnostics and your approval." },
  { q: "Can I submit the form if I'm mailing my device?", a: "Yes! In fact, submitting the form is highly recommended for mail-in clients. It helps us match your incoming shipment to your case file, reducing delays." },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <!-- ═══════════════════════════════════════════════
         HERO — 3-zone layout:
         Top: Left brand | Right photo bleeds through
         Bottom: Label + two large CTA cards side by side
    ════════════════════════════════════════════════ -->
    <section class="v3-hero">
      <div class="v3-hero-bg" style="background-image: url('/start-recovery-hero.webp')"></div>
      <div class="v3-hero-overlay"></div>

      <div class="container v3-hero-inner">

        <!-- LEFT: compact brand -->
        <div class="v3-brand">
          <div class="v3-social-proof">
            <span class="v3-stars">★★★★★</span>
            <span class="v3-rating">4.9 · 498 Reviews</span>
          </div>
          <h1 class="v3-title">Get Your Data Back<br><span class="v3-gold">Fast &amp; Risk-Free</span></h1>
          <p class="v3-sub">Free diagnosis. No upfront cost.<br>No recovery = no charge.</p>
          <div class="v3-badges">
            <div class="v3-badge">🧪 Clean Room On-Site</div>
            <div class="v3-badge">🚚 Free Nationwide Shipping</div>
            <div class="v3-badge">⏰ Available 24/7/365</div>
            <div class="v3-badge">🏆 10+ Years in Business</div>
          </div>
          <a href="tel:8182728866" class="v3-phone">
            <span class="v3-phone-icon">📞</span>
            <span class="v3-phone-text">
              <span class="v3-phone-label">Call Us Anytime, 24/7</span>
              <span class="v3-phone-number">818-272-8866</span>
            </span>
          </a>
        </div>

        <!-- CARD 1: Express Drop-Off -->
        <div class="v3-card v3-card-local">
          <div class="v3-card-top">
            <span class="v3-card-emoji">🏪</span>
            <div>
              <p class="v3-card-tag">LOCAL — GLENDALE, CA</p>
              <h3 class="v3-card-title">Express Drop-Off</h3>
            </div>
          </div>
          <p class="v3-card-desc">Fill out our quick form ahead of time, drop off your device, and go. Same-day diagnostic report included.</p>
          <div class="v3-card-perks">
            <span>⚡ Fastest option</span>
            <span>🕐 Same-day diagnosis</span>
            <span>📋 No appointment needed</span>
          </div>
          <NuxtLink to="/data-recovery/express-drop-off" class="v3-btn v3-btn-gold">
            Express Drop-Off Form →
          </NuxtLink>
        </div>

        <!-- CARD 2: Mail-In -->
        <div class="v3-card v3-card-mail">
          <div class="v3-card-top">
            <span class="v3-card-emoji">📦</span>
            <div>
              <p class="v3-card-tag">ANYWHERE IN THE US</p>
              <h3 class="v3-card-title">Mail-In Service</h3>
            </div>
          </div>
          <p class="v3-card-desc">We send you a free prepaid shipping label — your device arrives in 1–2 days and we get straight to work.</p>
          <div class="v3-card-perks">
            <span>🚚 Free round-trip shipping</span>
            <span>📋 Prepaid label provided</span>
            <span>🌎 All 50 states</span>
          </div>
          <NuxtLink to="/data-recovery/mail-in-service" class="v3-btn v3-btn-outline">
            Start Mail-In Recovery →
          </NuxtLink>
        </div>

      </div>
    </section>

    <!-- STATS BAR -->
    <StatsBar />

    <!-- HOW IT WORKS -->
    <section class="v3-steps">
      <div class="container">
        <h2 class="v3-steps-title">How It Works</h2>
        <p class="v3-steps-sub">Five simple steps to get your data back — fast, secure, and stress-free.</p>
        <div class="v3-steps-row">
          <div v-for="(s, i) in steps" :key="i" class="v3-step">
            <div class="v3-step-num">{{ s.num }}</div>
            <h4 class="v3-step-title">{{ s.title }}</h4>
            <p class="v3-step-text">{{ s.text }}</p>
            <div v-if="i < steps.length - 1" class="v3-step-arrow">›</div>
          </div>
        </div>
      </div>
    </section>

    <!-- VIDEO -->
    <section class="v3-video">
      <div class="container v3-video-inner">
        <div class="v3-video-text">
          <h2 class="v3-video-title">See Why Thousands Trust Us<br>With Their Important Data</h2>
          <p class="v3-video-desc">Data loss is stressful — but working with us doesn't have to be. Flat-rate pricing. No hidden fees. Proven results from our Glendale lab.</p>
          <div class="v3-video-stats">
            <div class="v3-vstat"><span class="v3-vstat-num">26,000+</span><span class="v3-vstat-label">Drives Recovered</span></div>
            <div class="v3-vstat"><span class="v3-vstat-num">5.0 ★</span><span class="v3-vstat-label">Average Rating</span></div>
            <div class="v3-vstat"><span class="v3-vstat-num">100%</span><span class="v3-vstat-label">Confidential</span></div>
          </div>
        </div>
        <div class="v3-video-embed">
          <iframe src="https://www.youtube.com/embed/14ACFHJ24hg?start=60" title="Five Star Data Recovery" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="v3-faq">
      <div class="container">
        <h2 class="v3-faq-title">Frequently Asked Questions</h2>
        <div class="v3-faq-list">
          <div v-for="(f, i) in faqs" :key="i" class="v3-faq-item" @click="toggleFaq(i)">
            <div class="v3-faq-q">
              <span>{{ f.q }}</span>
              <span class="v3-faq-icon">{{ openFaq === i ? '−' : '+' }}</span>
            </div>
            <div v-if="openFaq === i" class="v3-faq-a">{{ f.a }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- BOTTOM CTA -->
    <section class="v3-bottom-cta">
      <div class="container v3-bottom-inner">
        <div>
          <h2 class="v3-bottom-title">Ready to Start Your Recovery?</h2>
          <p class="v3-bottom-sub">Free evaluation · No upfront cost · No data = no charge</p>
        </div>
        <div class="v3-bottom-btns">
          <NuxtLink to="/data-recovery/express-drop-off" class="v3-btn v3-btn-dark">Express Drop-Off →</NuxtLink>
          <NuxtLink to="/data-recovery/mail-in-service" class="v3-btn v3-btn-outline-dark">Mail-In Service →</NuxtLink>
        </div>
      </div>
    </section>

    <FooterBar />
  </div>
</template>

<style scoped>
/* ════════════════════════════════════════
   HERO
════════════════════════════════════════ */
.v3-hero {
  position: relative;
  overflow: hidden;
}
.v3-hero-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center center;
}
.v3-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(10,12,20,0.97) 0%,
    rgba(10,12,20,0.88) 40%,
    rgba(10,12,20,0.70) 70%,
    rgba(10,12,20,0.55) 100%
  );
}
/* 3-COLUMN FLAT GRID: brand | card1 | card2 — everything above the fold */
.v3-hero-inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 280px 1fr 1fr;
  gap: 28px;
  align-items: stretch;
  padding-top: 44px;
  padding-bottom: 44px;
}

/* Brand column */
.v3-social-proof {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 14px;
}
.v3-stars { color: #F5C842; font-size: 15px; letter-spacing: 1px; }
.v3-rating { font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.6); }

.v3-title {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(22px, 2.5vw, 34px);
  font-weight: 800;
  color: #fff;
  line-height: 1.15;
  margin-bottom: 12px;
}
.v3-gold { color: #F5C842; }

.v3-sub {
  font-size: 13px;
  color: rgba(255,255,255,0.6);
  line-height: 1.6;
  margin-bottom: 20px;
}

.v3-badges {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 22px;
}
.v3-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 600;
  color: rgba(255,255,255,0.8);
  padding: 6px 0;
  border-bottom: 1px solid rgba(255,255,255,0.07);
}

/* Phone */
.v3-phone {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(245,200,66,0.12);
  border: 1.5px solid rgba(245,200,66,0.4);
  border-radius: 10px;
  padding: 11px 16px;
  text-decoration: none;
  transition: all 0.2s;
}
.v3-phone:hover { background: rgba(245,200,66,0.2); border-color: #F5C842; }
.v3-phone-icon { font-size: 18px; }
.v3-phone-text { display: flex; flex-direction: column; gap: 1px; }
.v3-phone-label { font-size: 10px; font-weight: 600; letter-spacing: 0.5px; color: rgba(255,255,255,0.45); text-transform: uppercase; }
.v3-phone-number { font-size: 18px; font-weight: 800; color: #F5C842; font-family: 'Montserrat', sans-serif; }

/* Cards */
.v3-card {
  background: rgba(12,18,30,0.82);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 18px;
  padding: 28px 28px;
  backdrop-filter: blur(14px);
  transition: border-color 0.2s, transform 0.2s;
  display: flex;
  flex-direction: column;
}
.v3-card:hover {
  border-color: rgba(245,200,66,0.45);
  transform: translateY(-2px);
}
.v3-card-local { border-color: rgba(245,200,66,0.3); }

.v3-card-top {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 14px;
}
.v3-card-emoji { font-size: 34px; line-height: 1; }
.v3-card-tag {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #F5C842;
  margin-bottom: 3px;
}
.v3-card-title {
  font-size: 20px;
  font-weight: 800;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
}
.v3-card-desc {
  font-size: 13px;
  color: rgba(255,255,255,0.58);
  line-height: 1.6;
  margin-bottom: 16px;
  flex: 1;
}
.v3-card-perks {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 20px;
}
.v3-card-perks span {
  font-size: 12px;
  font-weight: 600;
  color: rgba(255,255,255,0.6);
}

/* Buttons */
.v3-btn {
  display: block;
  padding: 15px 24px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  transition: all 0.2s;
}
.v3-btn-gold { background: #F5C842; color: #0a0c14; }
.v3-btn-gold:hover { background: #e5b73e; }
.v3-btn-outline {
  background: transparent;
  color: #fff;
  border: 1.5px solid rgba(255,255,255,0.3);
}
.v3-btn-outline:hover { background: rgba(255,255,255,0.07); border-color: rgba(255,255,255,0.6); }

/* ════════════════════════════════════════
   HOW IT WORKS
════════════════════════════════════════ */
.v3-steps { padding: 80px 0; background: #0d1520; }
.v3-steps-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 30px; font-weight: 800; color: #fff;
  text-align: center; margin-bottom: 10px;
}
.v3-steps-sub { text-align: center; color: rgba(255,255,255,0.45); font-size: 15px; margin-bottom: 56px; }
.v3-steps-row {
  display: grid; grid-template-columns: repeat(5, 1fr);
  gap: 0; position: relative;
}
.v3-step { position: relative; text-align: center; padding: 0 20px; }
.v3-step-num {
  width: 48px; height: 48px; border-radius: 50%;
  background: #F5C842; color: #0a0c14;
  font-size: 20px; font-weight: 800;
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 16px;
}
.v3-step-title { font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 10px; line-height: 1.3; }
.v3-step-text { font-size: 12px; color: rgba(255,255,255,0.45); line-height: 1.6; }
.v3-step-arrow {
  position: absolute; top: 13px; right: -10px;
  font-size: 26px; color: #F5C842; font-weight: 300; line-height: 1;
}

/* ════════════════════════════════════════
   VIDEO
════════════════════════════════════════ */
.v3-video { padding: 80px 0; background: #111827; }
.v3-video-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
.v3-video-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 28px; font-weight: 800; color: #fff; line-height: 1.25; margin-bottom: 16px;
}
.v3-video-desc { font-size: 15px; color: rgba(255,255,255,0.55); line-height: 1.7; margin-bottom: 32px; }
.v3-video-stats { display: flex; gap: 32px; }
.v3-vstat { display: flex; flex-direction: column; gap: 3px; }
.v3-vstat-num { font-size: 24px; font-weight: 800; color: #F5C842; font-family: 'Montserrat', sans-serif; }
.v3-vstat-label { font-size: 11px; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 1px; }
.v3-video-embed { border-radius: 16px; overflow: hidden; aspect-ratio: 16/9; background: #000; }
.v3-video-embed iframe { width: 100%; height: 100%; display: block; }

/* ════════════════════════════════════════
   FAQ
════════════════════════════════════════ */
.v3-faq { padding: 80px 0; background: #fff; }
.v3-faq-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 30px; font-weight: 800; color: #0d1520;
  text-align: center; margin-bottom: 48px;
}
.v3-faq-list { max-width: 760px; margin: 0 auto; }
.v3-faq-item { border-bottom: 1px solid #e5e7eb; padding: 22px 0; cursor: pointer; }
.v3-faq-q { display: flex; justify-content: space-between; align-items: center; gap: 16px; font-size: 15px; font-weight: 600; color: #0d1520; }
.v3-faq-icon { font-size: 22px; font-weight: 300; color: #F5C842; flex-shrink: 0; }
.v3-faq-a { margin-top: 14px; font-size: 14px; color: #4a5568; line-height: 1.7; }

/* ════════════════════════════════════════
   BOTTOM CTA
════════════════════════════════════════ */
.v3-bottom-cta { background: #F5C842; padding: 48px 0; }
.v3-bottom-inner { display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap; }
.v3-bottom-title { font-family: 'Montserrat', sans-serif; font-size: 26px; font-weight: 800; color: #0a0c14; margin-bottom: 4px; }
.v3-bottom-sub { font-size: 14px; color: rgba(10,12,20,0.6); }
.v3-bottom-btns { display: flex; gap: 14px; flex-wrap: wrap; }
.v3-btn-dark { background: #0a0c14; color: #F5C842; }
.v3-btn-dark:hover { background: #1a2030; }
.v3-btn-outline-dark { background: transparent; color: #0a0c14; border: 2px solid rgba(10,12,20,0.3); }
.v3-btn-outline-dark:hover { background: rgba(10,12,20,0.08); }

/* ════════════════════════════════════════
   MOBILE
════════════════════════════════════════ */
@media (max-width: 1024px) {
  .v3-hero-inner { grid-template-columns: 1fr 1fr; }
  .v3-brand { grid-column: 1 / -1; }
}
@media (max-width: 680px) {
  .v3-hero-inner { grid-template-columns: 1fr; }
  .v3-steps-row { grid-template-columns: 1fr 1fr; gap: 32px; }
  .v3-step-arrow { display: none; }
  .v3-video-inner { grid-template-columns: 1fr; }
  .v3-bottom-inner { flex-direction: column; align-items: flex-start; }
}
</style>
