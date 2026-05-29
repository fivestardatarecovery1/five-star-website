<script setup lang="ts">
interface TrustBadge {
  icon: 'clock' | 'shield' | 'check' | 'star'
  text: string
}
interface Props {
  title: string
  subtitle?: string
  description?: string
  showTrustBadges?: boolean
  showForm?: boolean
  showButtons?: boolean
  bgImage?: string
  bgSize?: string
  overlayOpacity?: number
  trustBadges?: TrustBadge[]
}
const props = withDefaults(defineProps<Props>(), {
  showTrustBadges: true,
  showForm: true,
  showButtons: true,
  bgSize: 'cover',
  overlayOpacity: 0.95,
  bgImage: '/data-recovery-clean-room-technician-glendale-ca.jpg',
  trustBadges: () => [
    { icon: 'clock', text: 'Available 24/7/365' },
    { icon: 'shield', text: 'Clean Room On-Site' },
    { icon: 'check', text: 'Flat Rate Pricing' },
    { icon: 'star', text: 'Free Nationwide Shipping' },
  ]
})

const isMobile = typeof window !== 'undefined' ? window.innerWidth <= 768 : false

const heroStyle = computed(() => ({
  background: `linear-gradient(to right, rgba(20,22,30,${props.overlayOpacity}) 0%, rgba(20,22,30,${Math.max(props.overlayOpacity - 0.15, 0)}) 50%, rgba(20,22,30,${Math.max(props.overlayOpacity - 0.35, 0)}) 100%), url('${props.bgImage}') center center / ${props.bgSize} no-repeat`
}))

const submitted = ref(false)
const form = reactive({
  name: '',
  email: '',
  deviceType: '',
  phone: '',
  issue: '',
  contact: 'call',
  responseTime: ''
})

function handleSubmit() {
  submitted.value = true
}
</script>

<template>
  <section class="hero" :style="heroStyle">
    <div class="container hero-inner">

      <!-- LEFT: Copy -->
      <div class="hero-copy">
        <h1 class="hero-title">{{ title }}</h1>
        <p v-if="subtitle" class="hero-subtitle">{{ subtitle }}</p>
        <p v-if="description" class="hero-desc" v-html="description"></p>

        <div v-if="showButtons" class="hero-buttons">
          <NuxtLink to="/start-recovery" class="btn-start">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <span class="btn-inner">
              <span class="btn-main-text">Start Recovery</span>
              <em class="btn-sub">(Local &amp; Nationwide)</em>
            </span>
          </NuxtLink>
          <NuxtLink to="/appointments" class="btn-quote">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
            <span class="btn-inner">
              <span class="btn-main-text">Schedule an Appointment</span>
              <em class="btn-sub">(For Local Customers)</em>
            </span>
          </NuxtLink>
        </div>

        <div v-if="showTrustBadges" class="trust-box">
          <div v-for="badge in trustBadges" :key="badge.text" class="trust-item">
            <svg v-if="badge.icon === 'clock'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5C842" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            <svg v-else-if="badge.icon === 'shield'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5C842" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <svg v-else-if="badge.icon === 'check'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5C842" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            <svg v-else width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5C842" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <span>{{ badge.text }}</span>
          </div>
        </div>

        <slot />
      </div>

      <!-- RIGHT: Instant Quote Tool -->
      <div v-if="props.showForm" class="hero-form-wrap">
        <div class="hero-form-card">
          <p class="form-title">Get an Instant Quote</p>

          <InstantQuoteTool :light="true" :compact="true" />
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.hero {
  /* background set via :style binding */
  padding: 60px 0 60px;
  position: relative;
  overflow: hidden;
  border-bottom: 2px solid rgba(245,200,66,0.2);
}

.hero-inner {
  display: grid;
  grid-template-columns: 1fr 480px;
  gap: 60px;
  align-items: center;
}

/* ── Left copy ── */
.hero-copy { padding-right: 10px; }

.hero-title {
  font-family: var(--font-heading);
  font-size: clamp(32px, 4vw, 52px);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.15;
  margin-bottom: 16px;
  letter-spacing: -0.02em;
}

.hero-subtitle {
  font-size: 18px;
  font-weight: 700;
  color: var(--gold);
  margin-bottom: 16px;
  letter-spacing: 0.01em;
}

.hero-desc {
  font-size: 15px;
  color: #c0c8d8;
  line-height: 1.75;
  margin-bottom: 28px;
  max-width: 520px;
}

/* ── CTA Buttons ── */
.hero-buttons {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 32px;
  align-items: stretch;
}
.btn-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}
.btn-main-text {
  font-size: 15px;
  font-weight: 800;
  line-height: 1.2;
}
.btn-sub {
  font-size: 11px;
  font-weight: 400;
  font-style: italic;
  opacity: 0.72;
  line-height: 1;
}

.btn-start {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #c62828;
  color: #fff;
  font-weight: 800;
  font-size: 15px;
  padding: 14px 28px;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.2s, transform 0.15s;
  letter-spacing: 0.01em;
}
.btn-start:hover {
  background: #c62828;
  transform: translateY(-1px);
}

.btn-quote {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  padding: 13px 26px;
  border-radius: 6px;
  border: 2px solid rgba(255,255,255,0.4);
  text-decoration: none;
  transition: border-color 0.2s, background 0.2s, transform 0.15s;
}
.btn-quote:hover {
  border-color: #fff;
  background: rgba(255,255,255,0.08);
  transform: translateY(-1px);
}

/* ── Trust box ── */
.trust-box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px 40px;
  background: rgba(30,32,40,0.92);
  border-radius: 14px;
  padding: 24px 28px;
  backdrop-filter: blur(8px);
  max-width: 520px;
}
.trust-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  font-weight: 700;
  color: #ffffff;
  white-space: nowrap;
}
.trust-item svg { flex-shrink: 0; }

/* ── Form card ── */
.hero-form-wrap { position: relative; z-index: 2; }

.hero-form-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 0;
  box-shadow: 0 20px 60px rgba(0,0,0,0.4);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.form-title {
  font-family: var(--font-heading);
  font-size: 16px;
  font-weight: 800;
  color: #fff;
  background: linear-gradient(135deg, #1a1a2e 0%, #0f1623 100%);
  margin: 0;
  padding: 14px 20px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  border-bottom: 2px solid #F5C842;
  display: flex;
  align-items: center;
  gap: 8px;
}
.form-title::before {
  content: '⚡';
  font-size: 14px;
}

.consult-form { display: flex; flex-direction: column; gap: 14px; }

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.form-group label {
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #555;
}

.req { color: #e53935; }

.full-width { grid-column: 1 / -1; }
.form-group input {
  height: 52px;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 0 16px;
  font-size: 15px;
  color: #333;
  background: #fff;
  transition: border-color 0.2s;
  width: 100%;
  box-sizing: border-box;
  font-family: var(--font-body);
}
.form-group input:focus {
  outline: none;
  border-color: var(--gold);
}
.form-group input::placeholder { color: #aaa; }

.select-wrap {
  position: relative;
}
.select-wrap select {
  width: 100%;
  height: 52px;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 0 40px 0 16px;
  font-size: 15px;
  color: #333;
  background: #fff;
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  transition: border-color 0.2s;
  font-family: var(--font-body);
  box-sizing: border-box;
}
.select-wrap select:focus { outline: none; border-color: var(--gold); }
.select-arrow {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

/* Radio group */
.radio-group {
  display: flex;
  gap: 14px;
  align-items: center;
  height: 40px;
}
.radio-label {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px !important;
  font-weight: 600 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.06em !important;
  color: #444 !important;
  cursor: pointer;
}
.radio-label input[type="radio"] {
  width: 14px;
  height: 14px;
  accent-color: var(--gold);
  cursor: pointer;
}

/* Submit */
.full-width { grid-column: 1 / -1; }
.btn-submit {
  width: 100%;
  height: 62px;
  background: var(--gold);
  color: #1a1a1a;
  font-weight: 800;
  font-size: 18px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s, transform 0.15s;
  letter-spacing: 0.02em;
  font-family: var(--font-body);
  margin-top: 4px;
}
.btn-submit:hover {
  background: var(--gold-dark);
  transform: translateY(-1px);
}

/* Success */
.form-success {
  background: #fff;
  border-radius: 8px;
  padding: 48px 32px;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0,0,0,0.4);
}
.success-icon {
  width: 56px;
  height: 56px;
  background: var(--gold);
  color: #fff;
  font-size: 28px;
  font-weight: 800;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}
.form-success h3 {
  font-family: var(--font-heading);
  font-size: 22px;
  font-weight: 800;
  color: #1a1a2e;
  margin-bottom: 10px;
}
.form-success p { color: #666; font-size: 15px; margin-bottom: 16px; }
.success-phone {
  display: inline-block;
  color: var(--gold);
  font-weight: 800;
  font-size: 22px;
  text-decoration: none;
}

/* ── Responsive ── */


@media (max-width: 1024px) {
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .hero { padding: 50px 0; }
}

@media (max-width: 640px) {
  .hero { padding: 36px 0 44px; }
  .hero-inner { gap: 28px; padding: 0 20px; box-sizing: border-box; width: 100%; }
  .hero-title { font-size: clamp(26px, 7vw, 36px); letter-spacing: -0.01em; }
  .hero-subtitle { font-size: 15px; }
  .hero-desc { font-size: 14px; margin-bottom: 20px; max-width: 100%; }
  .hero-copy { padding-right: 0; width: 100%; box-sizing: border-box; }
  .form-row { grid-template-columns: 1fr; }
  .trust-bar { flex-direction: column; gap: 12px; }
  .trust-divider { display: none; }
  .hero-buttons { flex-direction: column; width: 100%; }
  .btn-start, .btn-quote { justify-content: center; width: 100%; box-sizing: border-box; }
  .btn-inner { align-items: center; }
  .hero-form-card { padding: 20px 16px; }
  .trust-box {
    max-width: 100%;
    width: 100%;
    box-sizing: border-box;
    gap: 12px 16px;
    padding: 20px;
    grid-template-columns: 1fr 1fr;
  }
  .trust-item { font-size: 12px; gap: 8px; white-space: normal; }
  .trust-item svg { flex-shrink: 0; width: 18px; height: 18px; }
}
</style>
