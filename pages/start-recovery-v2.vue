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
  { q: 'Do I need to schedule an appointment before dropping off my device?', a: "No appointment is necessary. You're welcome to walk in during our business hours. However, submitting the Start Recovery Form in advance helps us prepare for your device and minimize your wait time." },
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

    <!-- ═══════════════════════════════════════════════════
         COMPACT SPLIT HERO — Headline left, CTAs right
    ════════════════════════════════════════════════════ -->
    <section class="srh">
      <div class="srh-bg" style="background-image: url('/start-recovery-hero.webp')"></div>
      <div class="srh-overlay"></div>
      <div class="container srh-inner">

        <!-- LEFT: Brand + trust -->
        <div class="srh-left">
          <!-- Social proof bar -->
          <div class="srh-social-proof">
            <span class="srh-stars">★★★★★</span>
            <span class="srh-rating-text">4.9 · 498 Google Reviews</span>
          </div>
          <h1 class="srh-title">Get Your Data Back<br><span class="srh-title-gold">Fast &amp; Risk-Free</span></h1>
          <p class="srh-sub">Free diagnosis. No upfront cost. If we don't recover your data, you don't pay.</p>
          <div class="srh-badges">
            <div class="srh-badge"><span class="srh-badge-icon">🧪</span> Clean Room On-Site</div>
            <div class="srh-badge"><span class="srh-badge-icon">🚚</span> Free Nationwide Shipping</div>
            <div class="srh-badge"><span class="srh-badge-icon">⏰</span> Available 24/7/365</div>
            <div class="srh-badge"><span class="srh-badge-icon">🏆</span> 10+ Years in Business</div>
          </div>
          <a href="tel:8182728866" class="srh-phone">
            <span class="srh-phone-icon">📞</span>
            <span class="srh-phone-text">
              <span class="srh-phone-label">Call Us Anytime, 24/7</span>
              <span class="srh-phone-number">818-272-8866</span>
            </span>
          </a>
        </div>

        <!-- RIGHT: CTA cards immediately visible -->
        <div class="srh-right">
          <p class="srh-right-label">How would you like to start?</p>

          <!-- Express Drop-Off -->
          <div class="srh-card srh-card-local">
            <div class="srh-card-header">
              <span class="srh-card-icon">🏪</span>
              <div>
                <p class="srh-card-tag">LOCAL — GLENDALE, CA</p>
                <h3 class="srh-card-title">Express Drop-Off</h3>
              </div>
            </div>
            <p class="srh-card-desc">Fill out our quick form ahead of time, then drop off your device and go. Same-day diagnostic report.</p>
            <div class="srh-card-perks">
              <span>⚡ Fastest option</span>
              <span>🕐 Same-day diagnosis</span>
            </div>
            <NuxtLink to="/data-recovery/express-drop-off" class="srh-btn srh-btn-gold">
              Express Drop-Off Form →
            </NuxtLink>
          </div>

          <!-- Mail-In -->
          <div class="srh-card srh-card-mail">
            <div class="srh-card-header">
              <span class="srh-card-icon">📦</span>
              <div>
                <p class="srh-card-tag">ANYWHERE IN THE US</p>
                <h3 class="srh-card-title">Mail-In Service</h3>
              </div>
            </div>
            <p class="srh-card-desc">We send you a free prepaid shipping label. Your device arrives in 1–2 days and we get straight to work.</p>
            <div class="srh-card-perks">
              <span>🚚 Free round-trip shipping</span>
              <span>📋 Prepaid label provided</span>
            </div>
            <NuxtLink to="/data-recovery/mail-in-service" class="srh-btn srh-btn-outline">
              Start Mail-In Recovery →
            </NuxtLink>
          </div>
        </div>

      </div>
    </section>

    <!-- STATS BAR -->
    <StatsBar />

    <!-- HOW IT WORKS — compact horizontal timeline -->
    <section class="srh-steps">
      <div class="container">
        <h2 class="srh-steps-title">How It Works</h2>
        <p class="srh-steps-sub">Five simple steps to get your data back — fast, secure, and stress-free.</p>
        <div class="srh-steps-row">
          <div v-for="(s, i) in steps" :key="i" class="srh-step">
            <div class="srh-step-num">{{ s.num }}</div>
            <h4 class="srh-step-title">{{ s.title }}</h4>
            <p class="srh-step-text">{{ s.text }}</p>
            <div v-if="i < steps.length - 1" class="srh-step-arrow">›</div>
          </div>
        </div>
      </div>
    </section>

    <!-- VIDEO -->
    <section class="srh-video">
      <div class="container srh-video-inner">
        <div class="srh-video-text">
          <h2 class="srh-video-title">See Why Thousands Trust Us<br>With Their Important Data</h2>
          <p class="srh-video-desc">Data loss is stressful — but working with us doesn't have to be. Watch how our team handles each recovery with care, professionalism, and precision. Flat-rate pricing. No hidden fees. Proven results.</p>
          <div class="srh-video-stats">
            <div class="srh-vstat"><span class="srh-vstat-num">26,000+</span><span class="srh-vstat-label">Drives Recovered</span></div>
            <div class="srh-vstat"><span class="srh-vstat-num">5.0 ★</span><span class="srh-vstat-label">Average Rating</span></div>
            <div class="srh-vstat"><span class="srh-vstat-num">100%</span><span class="srh-vstat-label">Confidential</span></div>
          </div>
        </div>
        <div class="srh-video-embed">
          <iframe src="https://www.youtube.com/embed/14ACFHJ24hg?start=60" title="Five Star Data Recovery" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="srh-faq">
      <div class="container">
        <h2 class="srh-faq-title">Frequently Asked Questions</h2>
        <div class="srh-faq-list">
          <div v-for="(f, i) in faqs" :key="i" class="srh-faq-item" @click="toggleFaq(i)">
            <div class="srh-faq-q">
              <span>{{ f.q }}</span>
              <span class="srh-faq-icon">{{ openFaq === i ? '−' : '+' }}</span>
            </div>
            <div v-if="openFaq === i" class="srh-faq-a">{{ f.a }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- BOTTOM CTA BAND -->
    <section class="srh-bottom-cta">
      <div class="container srh-bottom-inner">
        <div>
          <h2 class="srh-bottom-title">Ready to Start Your Recovery?</h2>
          <p class="srh-bottom-sub">Free evaluation · No upfront cost · No data = no charge</p>
        </div>
        <div class="srh-bottom-btns">
          <NuxtLink to="/data-recovery/express-drop-off" class="srh-btn srh-btn-gold">Express Drop-Off →</NuxtLink>
          <NuxtLink to="/data-recovery/mail-in-service" class="srh-btn srh-btn-outline">Mail-In Service →</NuxtLink>
        </div>
      </div>
    </section>

    <FooterBar />
  </div>
</template>

<style scoped>
/* ══════════════════════════════════════════
   COMPACT SPLIT HERO
══════════════════════════════════════════ */
.srh {
  position: relative;
  min-height: 540px;
  display: flex;
  align-items: center;
}
.srh-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center center;
}
.srh-overlay {
  position: absolute;
  inset: 0;
  /* Darker on left (text readable), fades to reveal image on right */
  background: linear-gradient(105deg,
    rgba(10,12,20,0.93) 0%,
    rgba(10,12,20,0.85) 45%,
    rgba(10,12,20,0.60) 100%
  );
}
.srh-inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 64px;
  align-items: center;
  padding-top: 64px;
  padding-bottom: 64px;
}

/* LEFT */
.srh-social-proof {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 22px;
}
.srh-stars {
  color: #F5C842;
  font-size: 17px;
  letter-spacing: 2px;
}
.srh-rating-text {
  font-size: 13px;
  font-weight: 600;
  color: rgba(255,255,255,0.65);
}
.srh-title {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(30px, 3.8vw, 48px);
  font-weight: 800;
  color: #fff;
  line-height: 1.12;
  margin-bottom: 18px;
}
.srh-title-gold { color: var(--gold); }
.srh-sub {
  font-size: 16px;
  color: rgba(255,255,255,0.65);
  margin-bottom: 32px;
  max-width: 420px;
  line-height: 1.7;
}
.srh-badges {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 36px;
  max-width: 440px;
}
.srh-badge {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.13);
  border-radius: 10px;
  padding: 13px 16px;
  font-size: 13px;
  font-weight: 600;
  color: rgba(255,255,255,0.9);
}
.srh-badge-icon { font-size: 16px; line-height: 1; flex-shrink: 0; }
/* Phone CTA — styled like a call button */
.srh-phone {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  background: rgba(245,200,66,0.12);
  border: 1.5px solid rgba(245,200,66,0.45);
  border-radius: 12px;
  padding: 14px 22px;
  text-decoration: none;
  transition: all 0.2s;
  max-width: 260px;
}
.srh-phone:hover {
  background: rgba(245,200,66,0.2);
  border-color: var(--gold);
}
.srh-phone-icon { font-size: 22px; line-height: 1; }
.srh-phone-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.srh-phone-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: rgba(255,255,255,0.55);
  text-transform: uppercase;
}
.srh-phone-number {
  font-size: 22px;
  font-weight: 800;
  color: var(--gold);
  letter-spacing: 0.5px;
  font-family: 'Montserrat', sans-serif;
}

/* RIGHT — CTA cards */
.srh-right {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.srh-right-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.45);
  margin-bottom: 2px;
}
.srh-card {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  padding: 22px 24px;
  backdrop-filter: blur(8px);
  transition: border-color 0.2s, background 0.2s;
}
.srh-card:hover {
  background: rgba(255,255,255,0.08);
  border-color: rgba(245,200,66,0.35);
}
.srh-card-local { border-color: rgba(245,200,66,0.25); }
.srh-card-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 10px;
}
.srh-card-icon { font-size: 28px; line-height: 1; }
.srh-card-tag {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 2px;
}
.srh-card-title {
  font-size: 18px;
  font-weight: 700;
  color: #fff;
}
.srh-card-desc {
  font-size: 13px;
  color: rgba(255,255,255,0.65);
  line-height: 1.55;
  margin-bottom: 12px;
}
.srh-card-perks {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}
.srh-card-perks span {
  font-size: 12px;
  font-weight: 600;
  color: rgba(255,255,255,0.6);
}

/* Buttons */
.srh-btn {
  display: inline-block;
  padding: 12px 22px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s;
  width: 100%;
  text-align: center;
}
.srh-btn-gold {
  background: var(--gold);
  color: #0a0c14;
}
.srh-btn-gold:hover { background: #e5b73e; }
.srh-btn-outline {
  background: transparent;
  color: #fff;
  border: 1.5px solid rgba(255,255,255,0.3);
}
.srh-btn-outline:hover {
  background: rgba(255,255,255,0.08);
  border-color: rgba(255,255,255,0.55);
}

/* ══════════════════════════════════════════
   HOW IT WORKS
══════════════════════════════════════════ */
.srh-steps {
  padding: 72px 0;
  background: #0d1520;
}
.srh-steps-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 28px;
  font-weight: 800;
  color: #fff;
  text-align: center;
  margin-bottom: 8px;
}
.srh-steps-sub {
  text-align: center;
  color: rgba(255,255,255,0.5);
  font-size: 15px;
  margin-bottom: 48px;
}
.srh-steps-row {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0;
  position: relative;
}
.srh-step {
  position: relative;
  text-align: center;
  padding: 0 16px;
}
.srh-step-num {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--gold);
  color: #0a0c14;
  font-size: 18px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 14px;
}
.srh-step-title {
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
  line-height: 1.3;
}
.srh-step-text {
  font-size: 12px;
  color: rgba(255,255,255,0.5);
  line-height: 1.5;
}
.srh-step-arrow {
  position: absolute;
  top: 11px;
  right: -12px;
  font-size: 24px;
  color: var(--gold);
  font-weight: 300;
  line-height: 1;
}

/* ══════════════════════════════════════════
   VIDEO
══════════════════════════════════════════ */
.srh-video {
  padding: 72px 0;
  background: #111827;
}
.srh-video-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: center;
}
.srh-video-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 26px;
  font-weight: 800;
  color: #fff;
  line-height: 1.25;
  margin-bottom: 14px;
}
.srh-video-desc {
  font-size: 15px;
  color: rgba(255,255,255,0.6);
  line-height: 1.65;
  margin-bottom: 28px;
}
.srh-video-stats {
  display: flex;
  gap: 28px;
}
.srh-vstat { display: flex; flex-direction: column; gap: 2px; }
.srh-vstat-num { font-size: 22px; font-weight: 800; color: var(--gold); font-family: 'Montserrat', sans-serif; }
.srh-vstat-label { font-size: 11px; color: rgba(255,255,255,0.45); text-transform: uppercase; letter-spacing: 1px; }
.srh-video-embed {
  border-radius: 14px;
  overflow: hidden;
  aspect-ratio: 16/9;
  background: #000;
}
.srh-video-embed iframe { width: 100%; height: 100%; display: block; }

/* ══════════════════════════════════════════
   FAQ
══════════════════════════════════════════ */
.srh-faq {
  padding: 72px 0;
  background: #fff;
}
.srh-faq-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 28px;
  font-weight: 800;
  color: #0d1520;
  text-align: center;
  margin-bottom: 40px;
}
.srh-faq-list { max-width: 760px; margin: 0 auto; display: flex; flex-direction: column; gap: 0; }
.srh-faq-item {
  border-bottom: 1px solid #e5e7eb;
  padding: 20px 0;
  cursor: pointer;
}
.srh-faq-q {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  font-size: 15px;
  font-weight: 600;
  color: #0d1520;
}
.srh-faq-icon {
  font-size: 20px;
  font-weight: 300;
  color: var(--gold);
  flex-shrink: 0;
}
.srh-faq-a {
  margin-top: 12px;
  font-size: 14px;
  color: #4a5568;
  line-height: 1.65;
}

/* ══════════════════════════════════════════
   BOTTOM CTA BAND
══════════════════════════════════════════ */
.srh-bottom-cta {
  background: var(--gold);
  padding: 44px 0;
}
.srh-bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}
.srh-bottom-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 800;
  color: #0a0c14;
  margin-bottom: 4px;
}
.srh-bottom-sub {
  font-size: 14px;
  color: rgba(10,12,20,0.65);
}
.srh-bottom-btns {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.srh-bottom-cta .srh-btn-gold {
  background: #0a0c14;
  color: var(--gold);
}
.srh-bottom-cta .srh-btn-gold:hover { background: #1a2030; }
.srh-bottom-cta .srh-btn-outline {
  border-color: rgba(10,12,20,0.35);
  color: #0a0c14;
}
.srh-bottom-cta .srh-btn-outline:hover { background: rgba(10,12,20,0.08); }

/* ══════════════════════════════════════════
   MOBILE
══════════════════════════════════════════ */
@media (max-width: 900px) {
  .srh-inner {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .srh-right { max-width: 100%; }
  .srh-steps-row {
    grid-template-columns: 1fr 1fr;
    gap: 28px;
  }
  .srh-step-arrow { display: none; }
  .srh-video-inner { grid-template-columns: 1fr; }
  .srh-video-text { order: 2; }
  .srh-video-embed { order: 1; }
}
@media (max-width: 600px) {
  .srh { min-height: auto; }
  .srh-title { font-size: 26px; }
  .srh-steps-row { grid-template-columns: 1fr; }
  .srh-bottom-inner { flex-direction: column; align-items: flex-start; }
}
</style>
