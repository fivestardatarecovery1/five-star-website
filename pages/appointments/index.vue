<script setup lang="ts">
useSeoMeta({
  title: 'Schedule an Appointment — Five Star Data Recovery',
  description: 'Schedule your drop-off or pickup appointment at Five Star Data Recovery in Glendale, CA. Required for all new cases starting June 1, 2026.',
})
</script>

<template>
  <div class="page-content">


    <section class="appt-hero">
      <img
        src="/start-recovery-hero-800.webp"
        srcset="/start-recovery-hero-480.webp 480w, /start-recovery-hero-800.webp 800w, /start-recovery-hero-1400.webp 1400w"
        sizes="(max-width: 768px) 100vw, 100vw"
        alt="" aria-hidden="true" fetchpriority="high" class="appt-bg"
      />
      <div class="appt-overlay"></div>

      <div class="container appt-inner">

        <!-- Row 1: Social proof pill + title + subtext -->
        <div class="appt-header">
          <div class="appt-proof">
            <span class="appt-stars">★★★★★</span>
            <span class="appt-rating">4.9 · 498 Reviews</span>
            <span class="appt-sep">|</span>
            <span class="appt-notice">📅 Appointments Required Starting June 1, 2026</span>
          </div>
          <h1 class="appt-title">Schedule Your <span class="appt-gold">Appointment</span></h1>
          <p class="appt-sub">Select the reason for your visit and we'll get you booked in minutes.</p>
        </div>

        <!-- Row 2: Badges -->
        <div class="appt-badges">
          <div class="appt-badge">⚡ Same-Day Available</div>
          <div class="appt-badge-sep"></div>
          <div class="appt-badge">📍 Glendale, CA Lab</div>
          <div class="appt-badge-sep"></div>
          <div class="appt-badge">⏰ Mon–Fri 10am–6pm · Sat 10am–2pm</div>
          <div class="appt-badge-sep"></div>
          <div class="appt-badge">📞 (818) 272-8866</div>
        </div>

        <!-- Row 3: Cards -->
        <div class="appt-cards">

          <!-- Card 1: New Case -->
          <div class="appt-card appt-card-primary">
            <div class="appt-card-header">
              <div class="appt-card-icon">🆕</div>
              <div>
                <p class="appt-card-tag">NEW RECOVERY CASE</p>
                <h3 class="appt-card-title">Drop Off a New Case</h3>
              </div>
            </div>
            <p class="appt-card-desc">Starting a new data recovery? Fill out our Express Drop-Off Form to schedule your arrival time — required for all new cases.</p>
            <ul class="appt-card-perks">
              <li>⚡ Same-day appointments available</li>
              <li>📋 Quick 5-minute form</li>
              <li>🕐 Select your exact drop-off time</li>
              <li>🧪 Same-day diagnostic report</li>
            </ul>
            <NuxtLink to="/data-recovery/express-drop-off-form" class="appt-btn appt-btn-gold">
              Express Drop-Off Form →
            </NuxtLink>
          </div>

          <!-- Divider -->
          <div class="appt-or">
            <div class="appt-or-line"></div>
            <span>OR</span>
            <div class="appt-or-line"></div>
          </div>

          <!-- Card 2: Existing Case -->
          <div class="appt-card appt-card-secondary">
            <div class="appt-card-header">
              <div class="appt-card-icon">🔄</div>
              <div>
                <p class="appt-card-tag">EXISTING CASE</p>
                <h3 class="appt-card-title">Transfer Drive Drop-Off or Case Pickup</h3>
              </div>
            </div>
            <p class="appt-card-desc">Have an open case with us? Schedule an appointment to drop off a transfer drive or pick up your fully recovered data.</p>
            <ul class="appt-card-perks">
              <li>📦 Transfer drive drop-off</li>
              <li>✅ Completed recovery pickup</li>
              <li>📅 Choose your appointment time</li>
              <li>⚡ In &amp; out in minutes</li>
            </ul>
            <NuxtLink to="/appointments/transfer-pickup-review" class="appt-btn appt-btn-outline">
              Schedule Appointment →
            </NuxtLink>
          </div>

        </div>
      </div>
    </section>

    <!-- Bottom CTA -->
    <section class="appt-cta">
      <div class="container appt-cta-inner">
        <div>
          <h2 class="appt-cta-title">Need Help Choosing?</h2>
          <p class="appt-cta-sub">Call us and we'll point you in the right direction — no hold music, real people.</p>
        </div>
        <a href="tel:+18182728866" class="appt-btn appt-btn-dark">📞 (818) 272-8866</a>
      </div>
    </section>


  </div>
</template>

<style scoped>
/* ═══════════════════════════ HERO ═══════════════════════════ */
.appt-hero {
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
}
.appt-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
  pointer-events: none;
  display: block;
  pointer-events: none;
}
.appt-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(
    to right,
    rgba(10,12,20,0.97) 0%,
    rgba(10,12,20,0.90) 45%,
    rgba(10,12,20,0.75) 75%,
    rgba(10,12,20,0.60) 100%
  );
}
.appt-inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding-top: 36px;
  padding-bottom: 48px;
}

/* ── Header ── */
.appt-header { max-width: 100%; }
.appt-proof {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
  flex-wrap: wrap;
}
.appt-stars { color: #F5C842; font-size: 15px; letter-spacing: 2px; }
.appt-rating { font-size: 13px; font-weight: 600; color: rgba(255,255,255,0.55); }
.appt-sep { color: rgba(255,255,255,0.2); font-size: 13px; }
.appt-notice {
  font-size: 12px;
  font-weight: 700;
  color: #F5C842;
  background: rgba(245,200,66,0.1);
  border: 1px solid rgba(245,200,66,0.25);
  padding: 4px 12px;
  border-radius: 999px;
  letter-spacing: 0.3px;
}
.appt-title {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(38px, 5.5vw, 64px);
  font-weight: 800;
  color: #fff;
  line-height: 1.05;
  white-space: nowrap;
  margin-bottom: 12px;
}
.appt-gold { color: #F5C842; }
.appt-sub {
  font-size: 16px;
  color: rgba(255,255,255,0.52);
  line-height: 1.6;
}

/* ── Badges ── */
.appt-badges {
  display: flex;
  align-items: center;
  gap: 0;
  flex-wrap: wrap;
}
.appt-badge {
  font-size: 13px;
  font-weight: 600;
  color: rgba(255,255,255,0.75);
  padding: 0 20px 0 0;
}
.appt-badge-sep {
  width: 1px;
  height: 14px;
  background: rgba(255,255,255,0.18);
  margin-right: 20px;
  flex-shrink: 0;
}

/* ── Cards ── */
.appt-cards {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 0;
  align-items: stretch;
}
.appt-card {
  background: rgba(10,14,24,0.80);
  border: 1px solid rgba(255,255,255,0.10);
  border-radius: 20px;
  padding: 36px 36px 32px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  display: flex;
  flex-direction: column;
  transition: border-color 0.25s, transform 0.2s, box-shadow 0.25s;
}
.appt-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
}
.appt-card-primary {
  border-color: rgba(245,200,66,0.35);
}
.appt-card-primary:hover {
  border-color: rgba(245,200,66,0.65);
  box-shadow: 0 20px 40px rgba(245,200,66,0.08);
}
.appt-card-secondary:hover {
  border-color: rgba(255,255,255,0.28);
}

.appt-card-header {
  display: flex;
  align-items: flex-start;
  gap: 18px;
  margin-bottom: 18px;
}
.appt-card-icon {
  font-size: 42px;
  line-height: 1;
  flex-shrink: 0;
}
.appt-card-tag {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #F5C842;
  margin-bottom: 6px;
}
.appt-card-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 800;
  color: #fff;
  line-height: 1.2;
}
.appt-card-desc {
  font-size: 14px;
  color: rgba(255,255,255,0.52);
  line-height: 1.7;
  margin-bottom: 22px;
  flex: 1;
}
.appt-card-perks {
  list-style: none;
  padding: 0;
  margin: 0 0 28px;
  display: flex;
  flex-direction: column;
  gap: 9px;
}
.appt-card-perks li {
  font-size: 13px;
  font-weight: 600;
  color: rgba(255,255,255,0.62);
}

/* ── OR divider ── */
.appt-or {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 0 28px;
  color: rgba(255,255,255,0.25);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  flex-shrink: 0;
}
.appt-or-line {
  width: 1px;
  flex: 1;
  background: rgba(255,255,255,0.1);
  min-height: 40px;
}

/* ── Buttons ── */
.appt-btn {
  display: block;
  padding: 16px 24px;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  transition: all 0.2s;
  font-family: inherit;
  cursor: pointer;
  border: none;
}
.appt-btn-gold { background: #F5C842; color: #0a0c14; }
.appt-btn-gold:hover { background: #e8b93c; transform: translateY(-1px); }
.appt-btn-outline {
  background: transparent;
  color: #fff;
  border: 1.5px solid rgba(255,255,255,0.28);
}
.appt-btn-outline:hover { background: rgba(255,255,255,0.07); border-color: rgba(255,255,255,0.55); }
.appt-btn-dark { background: #0a0c14; color: #F5C842; display: inline-block; }
.appt-btn-dark:hover { background: #1a2030; }

/* ═══════════════════════════ BOTTOM CTA ═══════════════════════════ */
.appt-cta { background: #F5C842; padding: 44px 0; }
.appt-cta-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}
.appt-cta-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 800;
  color: #0a0c14;
  margin-bottom: 4px;
}
.appt-cta-sub { font-size: 14px; color: rgba(10,12,20,0.6); }

/* ═══════════════════════════ MOBILE ═══════════════════════════ */
@media (max-width: 900px) {
  .appt-title { white-space: normal; }
  .appt-cards {
    grid-template-columns: 1fr;
  }
  .appt-or {
    flex-direction: row;
    padding: 16px 0;
    gap: 16px;
  }
  .appt-or-line {
    width: auto;
    flex: 1;
    height: 1px;
    min-height: unset;
  }
  .appt-card { padding: 24px 20px; }
  .appt-hero { min-height: unset; }
  .appt-cta-inner { flex-direction: column; align-items: flex-start; }
}
@media (max-width: 600px) {
  .appt-badges { gap: 8px; flex-direction: column; align-items: flex-start; }
  .appt-badge-sep { display: none; }
  .appt-badge { padding: 0; }
}
</style>
