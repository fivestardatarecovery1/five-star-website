<script setup lang="ts">
const step = ref(1)
const selections = reactive({ device: '', issue: '', urgency: '' })
const animating = ref(false)

const devices = [
  { id: 'hdd',      label: 'Hard Drive (HDD)',  icon: '🖴',  base: 350  },
  { id: 'ssd',      label: 'SSD',               icon: '⚡',  base: 450  },
  { id: 'external', label: 'External Drive',     icon: '📦',  base: 350  },
  { id: 'raid',     label: 'RAID / NAS',         icon: '🗄️', base: 800  },
  { id: 'usb',      label: 'USB / SD Card',      icon: '💾',  base: 250  },
  { id: 'phone',    label: 'Phone / Tablet',     icon: '📱',  base: 400  },
]

const issues = [
  { id: 'not-detected', label: 'Not Detected / Not Showing Up', icon: '🔌', add: 0   },
  { id: 'clicking',     label: 'Clicking or Grinding Noise',    icon: '🔊', add: 200 },
  { id: 'water',        label: 'Water Damage',                  icon: '💧', add: 250 },
  { id: 'corrupted',    label: 'Corrupted / Unreadable Files',  icon: '⚠️', add: 0   },
  { id: 'deleted',      label: 'Accidental Deletion',           icon: '🗑️', add: 50  },
  { id: 'physical',     label: 'Physical Damage',               icon: '💥', add: 200 },
  { id: 'no-power',     label: 'Not Powering On',               icon: '🔋', add: 100 },
]

const urgencies = [
  { id: 'standard',       label: 'Standard',       sub: '3–5 Business Days',             icon: '📅', add: 0   },
  { id: 'expedited',      label: 'Expedited',      sub: '1–2 Business Days',             icon: '🚀', add: 200 },
  { id: 'expedited-plus', label: 'Expedited Plus', sub: '24/7 Rush · Priority Engineer', icon: '⚡', add: 400 },
]

const quote = computed(() => {
  const d = devices.find(x => x.id === selections.device)
  const i = issues.find(x => x.id === selections.issue)
  const u = urgencies.find(x => x.id === selections.urgency)
  if (!d || !i || !u) return null
  return {
    price: d.base + i.add + u.add,
    deviceLabel:  d.label,
    issueLabel:   i.label,
    urgencyLabel: u.label,
  }
})

const stepLabels = ['Device Type', 'Issue', 'Urgency', 'Your Quote']

function pick(field: 'device' | 'issue' | 'urgency', val: string) {
  selections[field] = val
  animating.value = true
  setTimeout(() => {
    step.value++
    animating.value = false
  }, 220)
}

function goBack() {
  if (step.value > 1) step.value--
}

function reset() {
  animating.value = true
  setTimeout(() => {
    step.value = 1
    selections.device = ''
    selections.issue = ''
    selections.urgency = ''
    animating.value = false
  }, 180)
}
</script>

<template>
  <div class="iqt-wrap">
    <!-- Progress bar -->
    <div class="iqt-progress">
      <div
        v-for="(label, idx) in stepLabels"
        :key="label"
        class="iqt-step-dot"
        :class="{
          active: step === idx + 1,
          done: step > idx + 1,
        }"
      >
        <div class="iqt-dot-circle">
          <span v-if="step > idx + 1">✓</span>
          <span v-else>{{ idx + 1 }}</span>
        </div>
        <span class="iqt-dot-label">{{ label }}</span>
      </div>
      <div class="iqt-progress-track">
        <div class="iqt-progress-fill" :style="{ width: ((step - 1) / 3 * 100) + '%' }" />
      </div>
    </div>

    <!-- Step content -->
    <div class="iqt-body" :class="{ 'iqt-fade': animating }">

      <!-- Step 1: Device -->
      <div v-if="step === 1">
        <h3 class="iqt-question">What type of device needs recovery?</h3>
        <div class="iqt-grid iqt-grid-3">
          <button
            v-for="d in devices"
            :key="d.id"
            class="iqt-card"
            :class="{ selected: selections.device === d.id }"
            @click="pick('device', d.id)"
          >
            <span class="iqt-card-icon">{{ d.icon }}</span>
            <span class="iqt-card-label">{{ d.label }}</span>
          </button>
        </div>
      </div>

      <!-- Step 2: Issue -->
      <div v-else-if="step === 2">
        <h3 class="iqt-question">What's happening with your device?</h3>
        <div class="iqt-grid iqt-grid-2">
          <button
            v-for="i in issues"
            :key="i.id"
            class="iqt-card iqt-card-wide"
            :class="{ selected: selections.issue === i.id }"
            @click="pick('issue', i.id)"
          >
            <span class="iqt-card-icon">{{ i.icon }}</span>
            <span class="iqt-card-label">{{ i.label }}</span>
          </button>
        </div>
        <button class="iqt-back" @click="goBack">← Back</button>
      </div>

      <!-- Step 3: Urgency -->
      <div v-else-if="step === 3">
        <h3 class="iqt-question">How quickly do you need your data?</h3>
        <div class="iqt-grid iqt-grid-3">
          <button
            v-for="u in urgencies"
            :key="u.id"
            class="iqt-card iqt-card-urgency"
            :class="{ selected: selections.urgency === u.id, 'iqt-card-featured': u.id === 'expedited-plus' }"
            @click="pick('urgency', u.id)"
          >
            <span class="iqt-card-icon">{{ u.icon }}</span>
            <span class="iqt-card-label">{{ u.label }}</span>
            <span class="iqt-card-sub">{{ u.sub }}</span>
          </button>
        </div>
        <button class="iqt-back" @click="goBack">← Back</button>
      </div>

      <!-- Step 4: Result -->
      <div v-else-if="step === 4 && quote" class="iqt-result">
        <div class="iqt-result-badge">Free Estimate</div>
        <div class="iqt-price-range">
          ${{ quote.price.toLocaleString() }}
        </div>
        <p class="iqt-price-label">Flat-Rate Recovery Price</p>

        <div class="iqt-summary">
          <div class="iqt-summary-row"><span class="iqt-summary-key">Device</span><span class="iqt-summary-val">{{ quote.deviceLabel }}</span></div>
          <div class="iqt-summary-row"><span class="iqt-summary-key">Issue</span><span class="iqt-summary-val">{{ quote.issueLabel }}</span></div>
          <div class="iqt-summary-row"><span class="iqt-summary-key">Service</span><span class="iqt-summary-val">{{ quote.urgencyLabel }}</span></div>
        </div>

        <div class="iqt-guarantee">
          🛡 <strong>No Data, No Charge</strong> — If we can't recover your data, you pay nothing.
        </div>

        <div class="iqt-cta-row">
          <a href="/start-recovery" class="iqt-cta-btn">Start My Recovery →</a>
          <a href="tel:+18182728866" class="iqt-cta-call">📞 Call 818-272-8866</a>
        </div>

        <button class="iqt-restart" @click="reset">← Start Over</button>
      </div>

    </div>
  </div>
</template>

<style scoped>
.iqt-wrap {
  background: var(--color-card, #13161F);
  border: 1px solid var(--color-border, #1E2233);
  border-radius: 16px;
  padding: 40px 36px 36px;
  max-width: 800px;
  margin: 0 auto;
}

/* Progress */
.iqt-progress {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 40px;
}
.iqt-progress-track {
  position: absolute;
  top: 18px;
  left: 28px;
  right: 28px;
  height: 2px;
  background: var(--color-border, #1E2233);
  z-index: 0;
}
.iqt-progress-fill {
  height: 100%;
  background: var(--color-gold, #F5C842);
  transition: width 0.4s ease;
}
.iqt-step-dot {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  z-index: 1;
  flex: 1;
}
.iqt-dot-circle {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--color-bg, #0A0C14);
  border: 2px solid var(--color-border, #1E2233);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  color: var(--color-muted, #A0A8B8);
  transition: all 0.3s ease;
}
.iqt-step-dot.active .iqt-dot-circle {
  border-color: var(--color-gold, #F5C842);
  color: var(--color-gold, #F5C842);
  background: rgba(245, 200, 66, 0.08);
}
.iqt-step-dot.done .iqt-dot-circle {
  background: var(--color-gold, #F5C842);
  border-color: var(--color-gold, #F5C842);
  color: #000;
}
.iqt-dot-label {
  font-size: 11px;
  color: var(--color-muted, #A0A8B8);
  text-align: center;
  white-space: nowrap;
}
.iqt-step-dot.active .iqt-dot-label {
  color: var(--color-gold, #F5C842);
}

/* Body */
.iqt-body {
  transition: opacity 0.2s ease;
}
.iqt-fade {
  opacity: 0;
}
.iqt-question {
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 24px;
  text-align: center;
}

/* Grids */
.iqt-grid {
  display: grid;
  gap: 12px;
}
.iqt-grid-3 {
  grid-template-columns: repeat(3, 1fr);
}
.iqt-grid-2 {
  grid-template-columns: repeat(2, 1fr);
}

/* Cards */
.iqt-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px 14px;
  background: var(--color-bg, #0A0C14);
  border: 1.5px solid var(--color-border, #1E2233);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
}
.iqt-card:hover {
  border-color: var(--color-gold, #F5C842);
  background: rgba(245, 200, 66, 0.06);
  transform: translateY(-2px);
}
.iqt-card.selected {
  border-color: var(--color-gold, #F5C842);
  background: rgba(245, 200, 66, 0.1);
}
.iqt-card-wide {
  flex-direction: row;
  justify-content: flex-start;
  padding: 16px 20px;
  text-align: left;
  gap: 14px;
}
.iqt-card-urgency {
  padding: 24px 14px;
}
.iqt-card-featured {
  border-color: rgba(245, 200, 66, 0.4);
}
.iqt-card-icon {
  font-size: 1.6rem;
  line-height: 1;
  flex-shrink: 0;
}
.iqt-card-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #fff;
}
.iqt-card-sub {
  font-size: 0.75rem;
  color: var(--color-muted, #A0A8B8);
  margin-top: 2px;
}

/* Back button */
.iqt-back {
  margin-top: 20px;
  background: none;
  border: none;
  color: var(--color-muted, #A0A8B8);
  cursor: pointer;
  font-size: 0.875rem;
  padding: 4px 0;
  transition: color 0.2s;
}
.iqt-back:hover { color: #fff; }

/* Result */
.iqt-result {
  text-align: center;
  padding: 8px 0;
}
.iqt-result-badge {
  display: inline-block;
  background: rgba(245, 200, 66, 0.12);
  color: var(--color-gold, #F5C842);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 4px 14px;
  border-radius: 20px;
  border: 1px solid rgba(245, 200, 66, 0.3);
  margin-bottom: 16px;
}
.iqt-price-range {
  font-size: 3rem;
  font-weight: 800;
  color: var(--color-gold, #F5C842);
  line-height: 1.1;
  letter-spacing: -0.02em;
}
.iqt-price-label {
  color: var(--color-muted, #A0A8B8);
  font-size: 0.9rem;
  margin-top: 6px;
  margin-bottom: 28px;
}
.iqt-summary {
  background: var(--color-bg, #0A0C14);
  border: 1px solid var(--color-border, #1E2233);
  border-radius: 10px;
  padding: 16px 20px;
  margin-bottom: 20px;
  text-align: left;
}
.iqt-summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
  font-size: 0.875rem;
}
.iqt-summary-row + .iqt-summary-row {
  border-top: 1px solid var(--color-border, #1E2233);
}
.iqt-summary-key {
  color: var(--color-muted, #A0A8B8);
}
.iqt-summary-val {
  color: #fff;
  font-weight: 600;
}
.iqt-guarantee {
  background: rgba(245, 200, 66, 0.06);
  border: 1px solid rgba(245, 200, 66, 0.2);
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 0.875rem;
  color: #fff;
  margin-bottom: 24px;
}
.iqt-cta-row {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
.iqt-cta-btn {
  background: var(--color-gold, #F5C842);
  color: #000;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 14px 28px;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.2s;
}
.iqt-cta-btn:hover { background: var(--color-gold-dark, #E8A020); }
.iqt-cta-call {
  background: transparent;
  border: 1.5px solid var(--color-border, #1E2233);
  color: #fff;
  font-weight: 600;
  font-size: 0.95rem;
  padding: 14px 28px;
  border-radius: 8px;
  text-decoration: none;
  transition: border-color 0.2s;
}
.iqt-cta-call:hover { border-color: var(--color-gold, #F5C842); }
.iqt-restart {
  background: none;
  border: none;
  color: var(--color-muted, #A0A8B8);
  cursor: pointer;
  font-size: 0.8rem;
  padding: 4px 0;
  transition: color 0.2s;
}
.iqt-restart:hover { color: #fff; }

/* Responsive */
@media (max-width: 640px) {
  .iqt-wrap { padding: 28px 18px 24px; }
  .iqt-grid-3 { grid-template-columns: repeat(2, 1fr); }
  .iqt-grid-2 { grid-template-columns: 1fr; }
  .iqt-price-range { font-size: 2.2rem; }
  .iqt-dot-label { display: none; }
  .iqt-progress-track { top: 17px; }
}
@media (max-width: 400px) {
  .iqt-grid-3 { grid-template-columns: 1fr; }
}
</style>
