<script setup lang="ts">
useSeoMeta({
  title: 'Schedule an Appointment — Five Star Data Recovery',
  description: 'Schedule your drop-off or pickup appointment at Five Star Data Recovery in Glendale, CA. Required for all new cases starting June 1, 2026.',
})
</script>

<template>
  <div class="page-content">
    <NavBar />

    <!-- ═══════════════════════════════════════════════
         HERO — dark gradient + two CTA cards
    ════════════════════════════════════════════════ -->
    <section class="v3-hero">
      <div class="v3-hero-overlay"></div>

      <div class="container v3-hero-inner">

        <!-- ROW 1: Headline -->
        <div class="v3-header">
          <div class="v3-notice-pill">📅 Effective June 1, 2026 — Appointments Required</div>
          <h1 class="v3-title">Schedule Your <span class="v3-gold">Appointment</span></h1>
          <p class="v3-subtext">Starting June 1, 2026, all drop-offs and pickups require a scheduled appointment. Select the reason for your visit below.</p>
        </div>

        <!-- ROW 2: Two big cards side by side -->
        <div class="v3-cards">

          <!-- Card 1: Drop Off a New Case -->
          <div class="v3-card v3-card-primary">
            <div class="v3-card-top">
              <span class="v3-card-emoji">🆕</span>
              <div>
                <p class="v3-card-tag">NEW RECOVERY CASE</p>
                <h3 class="v3-card-title">Drop Off a New Case</h3>
              </div>
            </div>
            <p class="v3-card-desc">Fill out our Express Drop-Off Form to schedule your arrival time. Required for all new data recovery cases starting June 1, 2026.</p>
            <div class="v3-card-perks">
              <span>⚡ Same-day appointments available</span>
              <span>📋 Quick 5-minute form</span>
              <span>🕐 Select your drop-off time</span>
            </div>
            <NuxtLink to="/data-recovery/express-drop-off" class="v3-btn v3-btn-gold">
              Express Drop-Off Form →
            </NuxtLink>
          </div>

          <!-- Card 2: Transfer Drive / Pickup -->
          <div class="v3-card v3-card-secondary">
            <div class="v3-card-top">
              <span class="v3-card-emoji">🔄</span>
              <div>
                <p class="v3-card-tag">EXISTING CASE</p>
                <h3 class="v3-card-title">Drop Off a Transfer Drive or Pick Up a Completed Recovery</h3>
              </div>
            </div>
            <p class="v3-card-desc">Already have a case with us? Schedule an appointment to drop off your transfer drive or pick up your recovered data.</p>
            <div class="v3-card-perks">
              <span>📦 Transfer drive drop-off</span>
              <span>✅ Completed recovery pickup</span>
              <span>📅 Choose your appointment time</span>
            </div>
            <NuxtLink to="/appointments/transfer-pickup" class="v3-btn v3-btn-outline">
              Schedule Appointment →
            </NuxtLink>
          </div>

        </div>
      </div>
    </section>

    <!-- BOTTOM CTA BAND -->
    <section class="v3-bottom-cta">
      <div class="container v3-bottom-inner">
        <div>
          <h2 class="v3-bottom-title">Questions? We're Here to Help.</h2>
          <p class="v3-bottom-sub">Call us at (818) 272-8866 · Mon–Fri 9am–6pm · Glendale, CA</p>
        </div>
        <div class="v3-bottom-btns">
          <a href="tel:+18182728866" class="v3-btn v3-btn-dark">📞 Call Us Now</a>
          <NuxtLink to="/data-recovery/express-drop-off" class="v3-btn v3-btn-outline-dark">Express Drop-Off →</NuxtLink>
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
  background: linear-gradient(135deg, #0a0c14 0%, #0d1520 50%, #111827 100%);
}
.v3-hero-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(ellipse at 70% 50%, rgba(245,200,66,0.06) 0%, transparent 60%);
}
.v3-hero-inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: 52px;
  padding-bottom: 56px;
}

/* Header */
.v3-header { max-width: 760px; }
.v3-notice-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(245,200,66,0.12);
  border: 1px solid rgba(245,200,66,0.3);
  color: #F5C842;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
  padding: 6px 14px;
  border-radius: 999px;
  margin-bottom: 18px;
  text-transform: uppercase;
}
.v3-title {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(32px, 4.5vw, 54px);
  font-weight: 800;
  color: #fff;
  line-height: 1.1;
  margin-bottom: 16px;
}
.v3-gold { color: #F5C842; }
.v3-subtext {
  font-size: 16px;
  color: rgba(255,255,255,0.55);
  line-height: 1.65;
  max-width: 600px;
}

/* Cards */
.v3-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 960px;
}
.v3-card {
  background: rgba(12,18,30,0.82);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 18px;
  padding: 32px;
  backdrop-filter: blur(14px);
  transition: border-color 0.2s, transform 0.2s;
  display: flex;
  flex-direction: column;
}
.v3-card:hover {
  transform: translateY(-2px);
}
.v3-card-primary { border-color: rgba(245,200,66,0.35); }
.v3-card-primary:hover { border-color: rgba(245,200,66,0.6); }
.v3-card-secondary:hover { border-color: rgba(255,255,255,0.3); }

.v3-card-top {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 16px;
}
.v3-card-emoji { font-size: 36px; line-height: 1; flex-shrink: 0; }
.v3-card-tag {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #F5C842;
  margin-bottom: 5px;
}
.v3-card-title {
  font-size: 20px;
  font-weight: 800;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.25;
}
.v3-card-desc {
  font-size: 14px;
  color: rgba(255,255,255,0.55);
  line-height: 1.65;
  margin-bottom: 20px;
  flex: 1;
}
.v3-card-perks {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
}
.v3-card-perks span {
  font-size: 13px;
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
   BOTTOM CTA
════════════════════════════════════════ */
.v3-bottom-cta { background: #F5C842; padding: 52px 0; }
.v3-bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}
.v3-bottom-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 26px;
  font-weight: 800;
  color: #0a0c14;
  margin-bottom: 4px;
}
.v3-bottom-sub { font-size: 14px; color: rgba(10,12,20,0.6); }
.v3-bottom-btns { display: flex; gap: 14px; flex-wrap: wrap; }
.v3-btn-dark { background: #0a0c14; color: #F5C842; }
.v3-btn-dark:hover { background: #1a2030; }
.v3-btn-outline-dark {
  background: transparent;
  color: #0a0c14;
  border: 2px solid rgba(10,12,20,0.3);
}
.v3-btn-outline-dark:hover { background: rgba(10,12,20,0.08); }

/* ════════════════════════════════════════
   MOBILE
════════════════════════════════════════ */
@media (max-width: 768px) {
  .v3-cards { grid-template-columns: 1fr; gap: 16px; }
  .v3-card { padding: 24px 20px; }
  .v3-hero-inner { padding-top: 32px; padding-bottom: 40px; }
  .v3-bottom-inner { flex-direction: column; align-items: flex-start; }
}
</style>
