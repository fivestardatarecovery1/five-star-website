<script setup lang="ts">
const dismissed = ref(false)

onMounted(() => {
  try {
    if (localStorage.getItem('annBar_edo_v1') === 'dismissed') dismissed.value = true
  } catch {}
})

function dismiss() {
  dismissed.value = true
  try { localStorage.setItem('annBar_edo_v1', 'dismissed') } catch {}
}
</script>

<template>
  <div v-if="!dismissed" class="ann-bar" role="alert" aria-live="polite">
    <div class="ann-ticker-wrap">
      <div class="ann-ticker">
        <!-- Set 1 -->
        <span class="ann-item">
          <span class="ann-dot"></span>
          <strong>Starting June 1, 2026:</strong>&nbsp; An Express Drop-Off Form is required for all new cases — and all drop-offs &amp; pickups require a scheduled appointment.&nbsp;&nbsp;
          <NuxtLink to="/appointments" class="ann-link">Schedule an Appointment →</NuxtLink>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        <span class="ann-item">
          <span class="ann-dot"></span>
          <strong>Hours:</strong>&nbsp; Mon–Fri 10:00 AM – 6:00 PM &nbsp;&bull;&nbsp; Sat 10:00 AM – 2:00 PM
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        <span class="ann-item">
          <span class="ann-dot"></span>
          <strong>Same Day Appointments Available</strong>&nbsp;—&nbsp;
          <NuxtLink to="/appointments" class="ann-link">Book Now →</NuxtLink>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        <!-- Set 2 (duplicate for seamless loop) -->
        <span class="ann-item" aria-hidden="true">
          <span class="ann-dot"></span>
          <strong>Starting June 1, 2026:</strong>&nbsp; An Express Drop-Off Form is required for all new cases — and all drop-offs &amp; pickups require a scheduled appointment.&nbsp;&nbsp;
          <NuxtLink to="/appointments" class="ann-link">Schedule an Appointment →</NuxtLink>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        <span class="ann-item" aria-hidden="true">
          <span class="ann-dot"></span>
          <strong>Hours:</strong>&nbsp; Mon–Fri 10:00 AM – 6:00 PM &nbsp;&bull;&nbsp; Sat 10:00 AM – 2:00 PM
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        <span class="ann-item" aria-hidden="true">
          <span class="ann-dot"></span>
          <strong>Same Day Appointments Available</strong>&nbsp;—&nbsp;
          <NuxtLink to="/appointments" class="ann-link">Book Now →</NuxtLink>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      </div>
    </div>
    <button class="ann-close" @click="dismiss" aria-label="Dismiss announcement">✕</button>
  </div>
</template>

<style scoped>
.ann-bar {
  position: relative;
  z-index: 1000;
  background: #F5C842;
  color: #0A0C14;
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 36px;
}

.ann-ticker-wrap {
  flex: 1;
  overflow: hidden;
  height: 100%;
  display: flex;
  align-items: center;
}

.ann-ticker {
  display: flex;
  white-space: nowrap;
  animation: ticker-scroll 28s linear infinite;
  will-change: transform;
}

.ann-ticker:hover { animation-play-state: paused; }

.ann-item {
  display: inline-flex;
  align-items: center;
  font-size: 13px;
  font-weight: 500;
  padding: 0 0 0 40px;
  gap: 6px;
}

.ann-dot {
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #0A0C14;
  animation: blink 1.4s ease-in-out infinite;
  flex-shrink: 0;
}

.ann-link {
  font-weight: 700;
  color: #0A0C14;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.ann-close {
  flex-shrink: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 13px;
  font-weight: 700;
  color: rgba(10,12,20,0.6);
  padding: 0 12px;
  height: 100%;
  transition: color 0.15s;
  line-height: 1;
}
.ann-close:hover { color: #0A0C14; }

@keyframes ticker-scroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.3; }
}
</style>
