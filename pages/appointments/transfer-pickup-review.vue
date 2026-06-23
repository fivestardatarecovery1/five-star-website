<script setup lang="ts">
useSeoMeta({
  title: 'Schedule Transfer Drive or Pickup Appointment — Five Star Data Recovery',
  description: 'Schedule your transfer drive drop-off or completed recovery pickup appointment at Five Star Data Recovery in Glendale, CA.',
})

// Multi-step form
const step = ref(1)
const totalSteps = 4
const stepTitles = ['Reason', 'Your Info', 'Date & Time', 'Confirm']

const submitted = ref(false)
const submitting = ref(false)
const submitError = ref('')
const stepError = ref('')

const form = reactive({
  reason: '' as 'drop_off_transfer' | 'pickup_recovery' | 'review_data' | '',
  firstName: '', lastName: '', email: '', phone: '', caseNumber: '',
  appointmentDate: '', appointmentTime: '',
})

// ── Calendar & availability ──────────────────────────────────────────────
const availableHours = ref<string[]>([])
const scheduleLoading = ref(false)
const dateBlocked = ref(false)
const dateBlockedMsg = ref('')

const ALL_SLOTS = [
  '9:00 AM','9:30 AM','10:00 AM','10:30 AM','11:00 AM','11:30 AM',
  '12:00 PM','12:30 PM','1:00 PM','1:30 PM','2:00 PM','2:30 PM',
  '3:00 PM','3:30 PM','4:00 PM','4:30 PM','5:00 PM','5:30 PM',
]

const calYear = ref(0)
const calMonth = ref(0)
const calReady = ref(false)
const DOW_LABELS = ['Su','Mo','Tu','We','Th','Fr','Sa']
const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December']

const monthLabel = computed(() => calReady.value ? `${MONTH_NAMES[calMonth.value]} ${calYear.value}` : '')
const calendarOffset = computed(() => {
  if (!calReady.value) return 0
  return new Date(calYear.value, calMonth.value, 1).getDay()
})
const calendarDays = computed(() => {
  if (!calReady.value) return []
  const today = new Date(); today.setHours(0,0,0,0)
  const daysInMonth = new Date(calYear.value, calMonth.value + 1, 0).getDate()
  return Array.from({ length: daysInMonth }, (_, i) => {
    const d = i + 1
    const date = new Date(calYear.value, calMonth.value, d)
    return {
      num: d,
      date: `${calYear.value}-${String(calMonth.value+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`,
      isPast: date < today,
      isWeekend: date.getDay() === 0 || date.getDay() === 6,
      isToday: date.getTime() === today.getTime(),
    }
  })
})
const formattedSelectedDate = computed(() => {
  if (!form.appointmentDate) return ''
  const [y,m,d] = form.appointmentDate.split('-').map(Number)
  return new Date(y, m-1, d).toLocaleDateString('en-US', { weekday:'long', month:'long', day:'numeric' })
})

function prevMonth() {
  if (calMonth.value === 0) { calMonth.value = 11; calYear.value-- }
  else calMonth.value--
}
function nextMonth() {
  if (calMonth.value === 11) { calMonth.value = 0; calYear.value++ }
  else calMonth.value++
}
async function selectDate(date: string) {
  form.appointmentDate = date
  form.appointmentTime = ''
  availableHours.value = []
  dateBlocked.value = false
  scheduleLoading.value = true
  try {
    const res = await $fetch<any>(`/api/express-availability?date=${date}`)
    if (!res.available) {
      dateBlocked.value = true
      dateBlockedMsg.value = res.message || 'Not available this day — please choose another date.'
    } else {
      availableHours.value = res.availableHours || ALL_SLOTS
    }
  } catch {
    availableHours.value = [...ALL_SLOTS]
  } finally {
    scheduleLoading.value = false
  }
}
function selectTime(slot: string) {
  if (availableHours.value.includes(slot)) form.appointmentTime = slot
}

function formatPhone(e: Event) {
  const input = e.target as HTMLInputElement
  const digits = input.value.replace(/\D/g, '').slice(0, 10)
  let formatted = digits
  if (digits.length > 6) formatted = digits.slice(0, 3) + '-' + digits.slice(3, 6) + '-' + digits.slice(6)
  else if (digits.length > 3) formatted = digits.slice(0, 3) + '-' + digits.slice(3)
  form.phone = formatted
  input.value = formatted
}

function scrollToForm() {
  if (!import.meta.client) return
  const el = document.querySelector('.form-wrap')
  const nav = document.querySelector('nav')
  if (!el) return
  const navH = nav ? (nav as HTMLElement).offsetHeight : 86
  const viewportH = window.innerHeight
  const formH = (el as HTMLElement).offsetHeight
  const available = viewportH - navH
  const topInViewport = navH + Math.max(0, (available - formH) / 2)
  const formPageTop = el.getBoundingClientRect().top + window.scrollY
  const scrollTo = formPageTop - topInViewport
  window.scrollTo({ top: Math.max(0, scrollTo), behavior: 'smooth' })
}

function err(msg: string): false {
  stepError.value = msg
  return false
}

function validateStep(): boolean {
  stepError.value = ''
  if (step.value === 1) {
    if (!form.reason) return err('Please select a reason for your appointment.')
  }
  if (step.value === 2) {
    if (!form.firstName.trim()) return err('Please enter your first name.')
    if (!form.lastName.trim()) return err('Please enter your last name.')
    if (!form.email.trim() || !form.email.includes('@')) return err('Please enter a valid email address.')
    if (!form.phone.trim()) return err('Please enter your phone number.')
  }
  if (step.value === 3) {
    if (!form.appointmentDate) return err('Please select an appointment date.')
    if (dateBlocked.value) return err('That date is not available. Please choose another date.')
    if (!form.appointmentTime) return err('Please select an appointment time.')
  }
  return true
}

function nextStep() {
  if (!validateStep()) return
  if (step.value < totalSteps) {
    step.value++
    scrollToForm()
  }
}
function prevStep() {
  if (step.value > 1) {
    step.value--
    stepError.value = ''
    scrollToForm()
  }
}

function handleFormSubmit() {
  if (step.value < totalSteps) nextStep()
  else submitForm()
}

async function submitForm() {
  if (!validateStep()) return
  submitting.value = true
  submitError.value = ''
  try {
    const res = await $fetch<any>('/api/mc-leads/transfer-pickup-appointment', {
      method: 'POST',
      body: {
        reason: form.reason,
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phone: form.phone,
        caseNumber: form.caseNumber || null,
        appointmentDate: form.appointmentDate,
        appointmentTime: form.appointmentTime,
      }
    })
    if (res && res.ok === false && res.error) throw new Error(res.error)
    submitted.value = true
  } catch (e: any) {
    submitError.value = 'Something went wrong. Please call us at (818) 272-8866.'
  } finally {
    submitting.value = false
  }
}

const reasonLabel = computed(() => {
  if (form.reason === 'drop_off_transfer') return 'Drop Off a Transfer Drive'
  if (form.reason === 'pickup_recovery') return 'Pick Up My Recovered Data'
  if (form.reason === 'review_data') return 'Review Recovered Data In Person'
  return ''
})

onMounted(() => {
  if (!import.meta.client) return
  const now = new Date()
  calYear.value = now.getFullYear()
  calMonth.value = now.getMonth()
  calReady.value = true
})
</script>

<template>
  <div class="page-content">
    <NavBar />

    <!-- HERO -->
    <section class="edo-hero">
      <div class="edo-hero-overlay"></div>
      <div class="container edo-hero-inner">

        <div class="edo-proof-row">
          <span class="edo-stars">★★★★★</span>
          <span class="edo-rating">4.9 · 498 Online Reviews</span>
        </div>
        <h1 class="edo-title">Transfer Drive &amp; <span class="edo-gold">Pickup Appointments</span></h1>
        <div class="edo-badges-row">
          <span class="edo-bdg">📦 Transfer drive drop-off</span>
          <span class="edo-bsep"></span>
          <span class="edo-bdg">✅ Completed recovery pickup</span>
          <span class="edo-bsep"></span>
          <span class="edo-bdg">📅 Choose your time slot</span>
        </div>

        <!-- Form card -->
        <div class="form-wrap" :class="{ 'is-submitted': submitted }">

          <!-- ── Success screen ── -->
          <div v-if="submitted" class="confirm-wrap">
            <div class="confirm-header">
              <div class="confirm-check">✓</div>
              <h2 class="confirm-heading">Appointment Confirmed! 🎉</h2>
              <p class="confirm-intro">We'll see you then. If you need to make changes, please call us at <strong>(818) 272-8866</strong>.</p>
            </div>
            <div class="confirm-card">
              <div class="confirm-row confirm-row-highlight">
                <span class="confirm-lbl">Reason</span>
                <span class="confirm-val confirm-gold">{{ reasonLabel }}</span>
              </div>
              <div class="confirm-row">
                <span class="confirm-lbl">Name</span>
                <span class="confirm-val">{{ form.firstName }} {{ form.lastName }}</span>
              </div>
              <div class="confirm-row">
                <span class="confirm-lbl">Email</span>
                <span class="confirm-val">{{ form.email }}</span>
              </div>
              <div class="confirm-row">
                <span class="confirm-lbl">Phone</span>
                <span class="confirm-val">{{ form.phone }}</span>
              </div>
              <div v-if="form.caseNumber" class="confirm-row">
                <span class="confirm-lbl">Case #</span>
                <span class="confirm-val">{{ form.caseNumber }}</span>
              </div>
              <div class="confirm-row confirm-row-highlight">
                <span class="confirm-lbl">Date</span>
                <span class="confirm-val confirm-gold">🗓️ {{ formattedSelectedDate }}</span>
              </div>
              <div class="confirm-row confirm-row-highlight">
                <span class="confirm-lbl">Time</span>
                <span class="confirm-val confirm-gold">⏰ {{ form.appointmentTime }}</span>
              </div>
              <div class="confirm-row">
                <span class="confirm-lbl">Location</span>
                <span class="confirm-val">1731 S Brand Blvd., Glendale, CA 91204</span>
              </div>
            </div>
            <p class="confirm-note">📌 <strong>No printout required.</strong> Just show up at your scheduled time — our team will have your case ready.</p>
            <NuxtLink to="/" class="confirm-home">← Back to Home</NuxtLink>
          </div>

          <template v-else>
            <!-- Step progress -->
            <div class="stepper">
              <div
                v-for="(title, i) in stepTitles"
                :key="i"
                class="stepper-item"
                :class="{ active: step === i + 1, done: step > i + 1 }"
              >
                <div class="stepper-circle">
                  <span v-if="step > i + 1" class="check-mark">✓</span>
                  <span v-else>{{ i + 1 }}</span>
                </div>
                <span class="stepper-label">{{ title }}</span>
              </div>
              <div class="stepper-track">
                <div class="stepper-fill" :style="{ width: ((step - 1) / (totalSteps - 1) * 100) + '%' }"></div>
              </div>
            </div>

            <form class="edo-form" @submit.prevent="handleFormSubmit" novalidate>

              <!-- ── STEP 1: Reason ── -->
              <div v-show="step === 1" class="form-step">
                <h3 class="step-title">Reason for Your Appointment</h3>
                <p class="step-desc">Select the reason you're visiting us.</p>
                <div class="reason-cards">
                  <label class="reason-card" :class="{ selected: form.reason === 'drop_off_transfer' }">
                    <input type="radio" name="reason" v-model="form.reason" value="drop_off_transfer" />
                    <div class="rc-body">
                      <span class="rc-emoji">📦</span>
                      <div>
                        <strong class="rc-title">Drop Off a Transfer Drive</strong>
                        <p class="rc-desc">I have a drive to drop off for my completed recovery case</p>
                      </div>
                    </div>
                  </label>
                  <label class="reason-card" :class="{ selected: form.reason === 'pickup_recovery' }">
                    <input type="radio" name="reason" v-model="form.reason" value="pickup_recovery" />
                    <div class="rc-body">
                      <span class="rc-emoji">✅</span>
                      <div>
                        <strong class="rc-title">Pick Up My Recovered Data</strong>
                        <p class="rc-desc">My recovery is complete and I'd like to pick it up</p>
                      </div>
                    </div>
                  </label>
                  <label class="reason-card" :class="{ selected: form.reason === 'review_data' }">
                    <input type="radio" name="reason" v-model="form.reason" value="review_data" />
                    <div class="rc-body">
                      <span class="rc-emoji">🔍</span>
                      <div>
                        <strong class="rc-title">Review Recovered Data In Person</strong>
                        <p class="rc-desc">Some cases require the customer to review the results in person before approving &mdash; this appointment is for that purpose</p>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <!-- ── STEP 2: Your Info ── -->
              <div v-show="step === 2" class="form-step">
                <h3 class="step-title">Your Information</h3>
                <p class="step-desc">We'll use this to confirm your appointment.</p>
                <div class="form-grid-2">
                  <div class="fg">
                    <label class="fl">First Name <span class="req">*</span></label>
                    <input type="text" class="fi" v-model="form.firstName" placeholder="John" />
                  </div>
                  <div class="fg">
                    <label class="fl">Last Name <span class="req">*</span></label>
                    <input type="text" class="fi" v-model="form.lastName" placeholder="Smith" />
                  </div>
                </div>
                <div class="form-grid-2">
                  <div class="fg">
                    <label class="fl">Email Address <span class="req">*</span></label>
                    <input type="email" class="fi" v-model="form.email" placeholder="john@example.com" />
                  </div>
                  <div class="fg">
                    <label class="fl">Phone Number <span class="req">*</span></label>
                    <input type="tel" class="fi" :value="form.phone" @input="formatPhone" placeholder="555-000-0000" inputmode="numeric" maxlength="12" autocomplete="tel" />
                  </div>
                </div>
                <div class="fg">
                  <label class="fl">Case / Ticket Number <span class="fl-note">(if known)</span></label>
                  <input type="text" class="fi" v-model="form.caseNumber" placeholder="e.g. FS-1234 (optional)" />
                </div>
              </div>

              <!-- ── STEP 3: Date & Time ── -->
              <div v-show="step === 3" class="form-step">
                <h3 class="step-title">Select Date &amp; Time</h3>
                <p class="step-desc">Pick an available date and 30-minute arrival window. Mon–Fri, 9am–5:30pm.</p>

                <div class="sched-layout" v-if="calReady">
                  <!-- LEFT: Calendar -->
                  <div class="cal-wrap">
                    <div class="cal-header">
                      <button type="button" class="cal-nav" @click="prevMonth">&#8249;</button>
                      <span class="cal-month-label">{{ monthLabel }}</span>
                      <button type="button" class="cal-nav" @click="nextMonth">&#8250;</button>
                    </div>
                    <div class="cal-grid">
                      <div class="cal-dow" v-for="d in DOW_LABELS" :key="d">{{ d }}</div>
                      <div class="cal-empty" v-for="_ in calendarOffset" :key="'e'+_"></div>
                      <button
                        v-for="day in calendarDays" :key="day.date"
                        type="button"
                        class="cal-day"
                        :class="{
                          'cal-selected': form.appointmentDate === day.date,
                          'cal-past': day.isPast,
                          'cal-weekend': day.isWeekend,
                          'cal-today': day.isToday,
                        }"
                        :disabled="day.isPast || day.isWeekend"
                        @click="selectDate(day.date)"
                      >{{ day.num }}</button>
                    </div>
                    <div class="cal-legend">
                      <span class="leg-item"><span class="leg-dot leg-avail"></span> Available</span>
                      <span class="leg-item"><span class="leg-dot leg-sel"></span> Selected</span>
                      <span class="leg-item"><span class="leg-dot leg-book"></span> Booked</span>
                    </div>
                  </div>

                  <!-- RIGHT: Time slots -->
                  <div class="slots-panel">
                    <div v-if="!form.appointmentDate" class="slots-empty-state">
                      <span class="slots-empty-icon">🗓️</span>
                      <p class="slots-empty-text">← Select a date to see available times</p>
                    </div>
                    <template v-else>
                      <div class="slots-panel-header">
                        <p class="slots-date-label">{{ formattedSelectedDate }}</p>
                        <span v-if="scheduleLoading" class="slots-loading">Checking availability…</span>
                        <span v-else-if="dateBlocked" class="slots-blocked">⚠ {{ dateBlockedMsg }}</span>
                        <p v-else class="slots-subtitle">30-minute arrival windows</p>
                      </div>
                      <div v-if="!scheduleLoading && !dateBlocked" class="slots-grid">
                        <button
                          v-for="slot in ALL_SLOTS" :key="slot"
                          type="button"
                          class="slot-btn"
                          :class="{
                            'slot-available': availableHours.includes(slot) && form.appointmentTime !== slot,
                            'slot-selected': form.appointmentTime === slot,
                            'slot-booked': !availableHours.includes(slot),
                          }"
                          :disabled="!availableHours.includes(slot)"
                          @click="selectTime(slot)"
                        >{{ slot }}</button>
                      </div>
                      <p v-if="!scheduleLoading && !dateBlocked && availableHours.length === 0" class="slots-none">⚠ No times available. Please choose another day.</p>
                      <p v-if="form.appointmentTime" class="slots-confirmed">✓ {{ form.appointmentTime }} confirmed</p>
                    </template>
                  </div>
                </div>
              </div>

              <!-- ── STEP 4: Review & Confirm ── -->
              <div v-show="step === 4" class="form-step">
                <h3 class="step-title">Review &amp; Confirm</h3>
                <p class="step-desc">Please review your appointment details before confirming.</p>
                <div class="review-card">
                  <div class="review-row">
                    <span class="review-lbl">Reason</span>
                    <span class="review-val review-gold">{{ reasonLabel }}</span>
                  </div>
                  <div class="review-row">
                    <span class="review-lbl">Name</span>
                    <span class="review-val">{{ form.firstName }} {{ form.lastName }}</span>
                  </div>
                  <div class="review-row">
                    <span class="review-lbl">Email</span>
                    <span class="review-val">{{ form.email }}</span>
                  </div>
                  <div class="review-row">
                    <span class="review-lbl">Phone</span>
                    <span class="review-val">{{ form.phone }}</span>
                  </div>
                  <div v-if="form.caseNumber" class="review-row">
                    <span class="review-lbl">Case #</span>
                    <span class="review-val">{{ form.caseNumber }}</span>
                  </div>
                  <div class="review-row review-row-highlight">
                    <span class="review-lbl">Date</span>
                    <span class="review-val review-gold">🗓️ {{ formattedSelectedDate }}</span>
                  </div>
                  <div class="review-row review-row-highlight">
                    <span class="review-lbl">Time</span>
                    <span class="review-val review-gold">⏰ {{ form.appointmentTime }}</span>
                  </div>
                  <div class="review-row">
                    <span class="review-lbl">Location</span>
                    <span class="review-val">1731 S Brand Blvd., Glendale, CA 91204</span>
                  </div>
                </div>
              </div>

              <!-- Step error -->
              <p v-if="stepError" class="step-error">⚠ {{ stepError }}</p>

              <!-- Nav buttons -->
              <div v-if="step === totalSteps" class="form-nav-final">
                <p class="terms-notice">By submitting, you agree to our <a href="https://www.fivestardatarecovery.com/terms-and-conditions/" target="_blank" class="terms-link">terms and conditions.</a></p>
                <div class="final-btns">
                  <button type="button" class="btn-cancel" @click="prevStep">← Go Back</button>
                  <button type="submit" class="btn-submit-agree" :disabled="submitting">
                    {{ submitting ? 'Confirming…' : '✓ Confirm Appointment' }}
                  </button>
                </div>
                <p v-if="submitError" class="step-error">{{ submitError }}</p>
              </div>
              <div v-else class="form-nav">
                <button v-if="step > 1" type="button" class="btn-back" @click="prevStep">← Back</button>
                <div style="flex:1"></div>
                <span class="step-count">Step {{ step }} of {{ totalSteps }}</span>
                <button type="submit" class="btn-next">Continue →</button>
              </div>


            </form>
          </template>
        </div><!-- /.form-wrap -->

      </div>
    </section>

    <FooterBar />
  </div>
</template>

<style scoped>
*, *::before, *::after { box-sizing: border-box; }
.page-content { font-family: 'Inter', sans-serif; color: #1a1a2e; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 28px; }

/* ═══ HERO ═══ */
.edo-hero { position: relative; overflow: hidden; background: linear-gradient(135deg, #0a0c14 0%, #0d1520 50%, #111827 100%); }
.edo-hero-overlay { position: absolute; inset: 0; background: radial-gradient(ellipse at 70% 50%, rgba(245,200,66,0.05) 0%, transparent 60%); pointer-events: none; }
.edo-hero-inner { position: relative; z-index: 1; display: flex; flex-direction: column; gap: 16px; padding-top: 28px; padding-bottom: 36px; }
.edo-proof-row { display: flex; align-items: center; gap: 10px; }
.edo-stars { color: #F5C842; font-size: 17px; letter-spacing: 2px; }
.edo-rating { font-size: 13px; font-weight: 600; color: rgba(255,255,255,0.6); }
.edo-title { font-family: "Montserrat", sans-serif; font-size: clamp(26px, 4vw, 48px); font-weight: 800; color: #fff; line-height: 1.1; max-width: 900px; }
.edo-gold { color: #F5C842; }
.edo-badges-row { display: flex; align-items: center; flex-wrap: wrap; gap: 0; margin-bottom: 8px; }
.edo-bdg { font-size: 14px; font-weight: 600; color: rgba(255,255,255,0.82); padding: 0 20px 0 0; }
.edo-bsep { width: 1px; height: 16px; background: rgba(255,255,255,0.2); margin-right: 20px; flex-shrink: 0; }

/* ═══ FORM WRAP ═══ */
.form-wrap {
  max-width: 100%;
  width: 100%;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 20px 64px rgba(0,0,0,0.35);
  overflow: hidden;
  max-height: calc(100vh - 96px);
  display: flex;
  flex-direction: column;
}
.form-wrap.is-submitted { max-height: none; overflow-y: auto; }

/* ═══ STEPPER ═══ */
.stepper {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 24px 40px 20px;
  background: #fff;
  border-bottom: 1px solid #e8edf4;
}
.stepper-track {
  position: absolute;
  top: 54px;
  left: calc(40px + 20px);
  right: calc(40px + 20px);
  height: 3px;
  background: #e8edf4;
  border-radius: 2px;
  z-index: 0;
}
.stepper-fill { height: 100%; background: #F5C842; border-radius: 2px; transition: width 0.4s ease; }
.stepper-item { display: flex; flex-direction: column; align-items: center; gap: 10px; z-index: 1; flex: 1; }
.stepper-circle {
  width: 40px; height: 40px; border-radius: 50%;
  background: #e8edf4; color: #8a9bb8;
  font-size: 0.95rem; font-weight: 800;
  display: flex; align-items: center; justify-content: center;
  transition: background 0.3s, color 0.3s;
  border: 3px solid #fff; box-shadow: 0 0 0 2px #e8edf4;
}
.stepper-item.active .stepper-circle { background: #F5C842; color: #1a1a2e; box-shadow: 0 0 0 2px #F5C842; }
.stepper-item.done .stepper-circle { background: #22c55e; color: #fff; box-shadow: 0 0 0 2px #22c55e; }
.check-mark { font-size: 1rem; }
.stepper-label { font-size: 0.7rem; font-weight: 700; color: #8a9bb8; text-transform: uppercase; letter-spacing: 0.04em; text-align: center; white-space: nowrap; }
.stepper-item.active .stepper-label { color: #1a1a2e; }
.stepper-item.done .stepper-label { color: #22c55e; }

/* ═══ FORM BODY ═══ */
.edo-form { padding: 32px 44px 0; display: flex; flex-direction: column; gap: 0; flex: 1; min-height: 0; overflow: hidden; }
.form-step { display: flex; flex-direction: column; gap: 20px; flex: 1; min-height: 0; overflow-y: auto; padding-bottom: 20px; scrollbar-width: thin; }
.step-title { font-size: 1.35rem; font-weight: 900; color: #1a1a2e; margin: 0 0 4px; }
.step-desc { font-size: 0.93rem; color: #6b7280; margin: 0 0 8px; line-height: 1.6; }
.form-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
.fg { display: flex; flex-direction: column; gap: 6px; }
.fl { font-size: 0.75rem; font-weight: 700; color: #374151; text-transform: uppercase; letter-spacing: 0.06em; }
.fl-note { font-size: 0.72rem; font-weight: 400; color: #9ca3af; text-transform: none; letter-spacing: 0; }
.req { color: #ef4444; }
.fi {
  border: 1.5px solid #d1d9e6; border-radius: 10px; padding: 14px 16px;
  font-size: 1rem; color: #1a1a2e; background: #fff; font-family: inherit;
  transition: border-color 0.2s, box-shadow 0.2s; width: 100%;
}
.fi:focus { outline: none; border-color: #F5C842; box-shadow: 0 0 0 3px rgba(245,200,66,0.15); }

/* ── Reason Cards ── */
.reason-cards { display: flex; flex-direction: column; gap: 14px; }
.reason-card {
  display: flex; align-items: center;
  border: 2px solid #e8edf4; border-radius: 12px; padding: 18px 20px;
  cursor: pointer; transition: border-color 0.2s, box-shadow 0.2s;
}
.reason-card input[type="radio"] { display: none; }
.reason-card.selected { border-color: #F5C842; box-shadow: 0 0 0 3px rgba(245,200,66,0.12); background: #fffbeb; }
.rc-body { display: flex; align-items: center; gap: 16px; width: 100%; }
.rc-emoji { font-size: 32px; flex-shrink: 0; }
.rc-title { font-size: 1.05rem; font-weight: 800; color: #1a1a2e; display: block; margin-bottom: 4px; }
.rc-desc { font-size: 0.88rem; color: #6b7280; margin: 0; line-height: 1.5; }

/* ── Calendar ── */
.sched-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px; align-items: start; }
.cal-wrap { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 14px; padding: 18px; }
.cal-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
.cal-month-label { font-size: 15px; font-weight: 700; color: #0d1520; }
.cal-nav { background: #fff; border: 1px solid #e2e8f0; border-radius: 8px; width: 30px; height: 30px; font-size: 20px; cursor: pointer; color: #4a5568; display: flex; align-items: center; justify-content: center; transition: background .15s; line-height: 1; }
.cal-nav:hover { background: #f0f4f8; }
.cal-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 3px; }
.cal-dow { font-size: 10px; font-weight: 700; color: #94a3b8; text-align: center; padding: 3px 0 6px; text-transform: uppercase; }
.cal-day { background: #fff; border: 1px solid transparent; border-radius: 7px; padding: 7px 2px; font-size: 13px; font-weight: 600; cursor: pointer; color: #1a2030; text-align: center; transition: all .15s; width: 100%; }
.cal-day:hover:not(:disabled) { background: #fef9e7; border-color: #F5C842; }
.cal-day.cal-today { border-color: #F5C842; color: #92400e; background: #fffbeb; }
.cal-day.cal-selected { background: #F5C842; border-color: #e5b73e; color: #0a0c14; font-weight: 800; }
.cal-day.cal-past, .cal-day.cal-weekend { background: transparent; color: #d1d5db; cursor: not-allowed; }
.cal-legend { display: flex; gap: 12px; margin-top: 14px; padding-top: 12px; border-top: 1px solid #e2e8f0; }
.leg-item { display: flex; align-items: center; gap: 5px; font-size: 11px; color: #64748b; }
.leg-dot { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; }
.leg-avail { background: #86efac; }
.leg-sel { background: #F5C842; }
.leg-book { background: #e2e8f0; }

/* ── Time Slots ── */
.slots-panel { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 14px; padding: 18px; min-height: 280px; display: flex; flex-direction: column; }
.slots-empty-state { display: flex; flex-direction: column; align-items: center; justify-content: center; flex: 1; gap: 12px; }
.slots-empty-icon { font-size: 36px; opacity: 0.4; }
.slots-empty-text { font-size: 13px; color: #94a3b8; text-align: center; }
.slots-panel-header { margin-bottom: 14px; }
.slots-date-label { font-size: 14px; font-weight: 700; color: #0d1520; margin-bottom: 2px; }
.slots-subtitle { font-size: 11px; color: #94a3b8; }
.slots-loading { font-size: 12px; color: #94a3b8; }
.slots-blocked { font-size: 12px; color: #ef4444; font-weight: 600; }
.slots-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; flex: 1; }
.slot-btn { border-radius: 8px; padding: 9px 6px; font-size: 12px; font-weight: 700; cursor: pointer; border: 1.5px solid; text-align: center; transition: all .15s; width: 100%; }
.slot-available { background: #f0fdf4; border-color: #86efac; color: #166534; }
.slot-available:hover { background: #dcfce7; border-color: #4ade80; }
.slot-selected { background: #F5C842; border-color: #e5b73e; color: #0a0c14; }
.slot-booked { background: #f8fafc; border-color: #e2e8f0; color: #cbd5e1; cursor: not-allowed; }
.slots-none { font-size: 12px; color: #ef4444; font-weight: 600; margin-top: 8px; }
.slots-confirmed { font-size: 13px; color: #16a34a; font-weight: 700; margin-top: 12px; }

/* ── Review Card ── */
.review-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; }
.review-row { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 13px 20px; border-bottom: 1px solid #e2e8f0; }
.review-row:last-child { border-bottom: none; }
.review-row-highlight { background: #fffbeb; }
.review-lbl { font-size: 12px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px; flex-shrink: 0; }
.review-val { font-size: 14px; font-weight: 600; color: #1a2030; text-align: right; }
.review-gold { color: #b45309; font-size: 15px; font-weight: 800; }

/* ── Step error ── */
.step-error { background: #fef2f2; border: 1px solid #fecaca; color: #dc2626; border-radius: 8px; padding: 12px 16px; font-size: 0.88rem; font-weight: 600; margin-top: 20px; }

/* ── Nav ── */
.form-nav { display: flex; align-items: center; gap: 12px; padding: 20px 44px 24px; border-top: 1px solid #e8edf4; flex-shrink: 0; background: #fff; }
.step-count { font-size: 0.82rem; color: #9ca3af; font-weight: 600; }
.btn-back { background: none; border: 1.5px solid #d1d9e6; color: #4b5563; padding: 11px 22px; border-radius: 8px; font-size: 0.92rem; font-weight: 700; cursor: pointer; font-family: inherit; transition: border-color 0.2s; }
.btn-back:hover { border-color: #9ca3af; }
.btn-next { background: #F5C842; color: #1a1a1a; border: none; padding: 12px 28px; border-radius: 8px; font-size: 0.95rem; font-weight: 800; cursor: pointer; font-family: inherit; transition: background 0.2s; }
.btn-next:hover { background: #e0b43a; }
.form-nav-final { padding: 20px 44px 24px; border-top: 1px solid #e8edf4; flex-shrink: 0; background: #fff; }
.terms-notice { font-size: 12px; color: #94a3b8; margin-bottom: 14px; text-align: center; }
.terms-link { color: #64748b; text-decoration: underline; }
.final-btns { display: flex; gap: 12px; }
.btn-cancel { flex: 0 0 auto; background: #f1f5f9; color: #64748b; border: 1.5px solid #e2e8f0; padding: 14px 22px; border-radius: 8px; font-size: 0.9rem; font-weight: 700; cursor: pointer; font-family: inherit; transition: all 0.2s; }
.btn-cancel:hover { background: #e2e8f0; color: #1a2030; }
.btn-submit-agree { flex: 1; background: #16a34a; color: #fff; border: none; padding: 15px 24px; border-radius: 8px; font-size: 1rem; font-weight: 800; cursor: pointer; font-family: inherit; transition: background 0.2s; letter-spacing: 0.2px; }
.btn-submit-agree:hover { background: #15803d; }
.btn-submit-agree:disabled { opacity: 0.6; cursor: not-allowed; }
.form-powered { text-align: right; font-size: 10px; color: #b0b8cc; margin: 6px 0 0; }
.form-powered a { color: #b0b8cc; text-decoration: none; transition: color 0.2s; }
.form-powered a:hover { color: #F5C842; }

/* ── Confirmation screen ── */
.confirm-wrap { padding: 40px 36px; }
.confirm-header { text-align: center; margin-bottom: 28px; }
.confirm-check { width: 68px; height: 68px; border-radius: 50%; background: #22c55e; color: #fff; font-size: 2rem; font-weight: 800; display: flex; align-items: center; justify-content: center; margin: 0 auto 18px; }
.confirm-heading { font-family: 'Montserrat', sans-serif; font-size: 1.5rem; font-weight: 800; color: #0d1520; margin-bottom: 8px; line-height: 1.3; }
.confirm-intro { font-size: 15px; color: #64748b; }
.confirm-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; margin-bottom: 20px; }
.confirm-row { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 13px 20px; border-bottom: 1px solid #e2e8f0; }
.confirm-row:last-child { border-bottom: none; }
.confirm-row-highlight { background: #fffbeb; }
.confirm-lbl { font-size: 12px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px; flex-shrink: 0; }
.confirm-val { font-size: 14px; font-weight: 600; color: #1a2030; text-align: right; }
.confirm-gold { color: #b45309; font-size: 15px; font-weight: 800; }
.confirm-note { font-size: 12px; color: #64748b; background: #f8fafc; border-radius: 8px; padding: 10px 14px; margin-bottom: 20px; line-height: 1.6; }
.confirm-home { display: inline-block; font-size: 13px; color: #94a3b8; text-decoration: none; }
.confirm-home:hover { color: #475569; }

/* ── Mobile ── */
@media (max-width: 768px) {
  .form-wrap { border-radius: 0; }
  .stepper { padding: 24px 20px 20px; overflow-x: auto; gap: 4px; }
  .stepper-label { display: none; }
  .stepper-track { left: 30px; right: 30px; top: 44px; }
  .edo-form { padding: 28px 20px 24px; }
  .form-grid-2 { grid-template-columns: 1fr; }
  .sched-layout { grid-template-columns: 1fr; }
  .form-nav { padding: 16px 20px 20px; }
  .form-nav-final { padding: 16px 20px 20px; }
  .confirm-wrap { padding: 28px 20px; }
}
</style>
