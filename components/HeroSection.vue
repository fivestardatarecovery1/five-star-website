<script setup lang="ts">
interface Props {
  title: string
  subtitle: string
  description?: string
}
defineProps<Props>()

const submitted = ref(false)
const form = reactive({
  deviceType: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  issue: '',
  description: ''
})

function handleSubmit() {
  submitted.value = true
}
</script>

<template>
  <section class="hero">
    <div class="container hero-inner">
      <!-- Left: Copy -->
      <div class="hero-copy">
        <div class="hero-badge">⭐ Trusted Data Recovery Experts</div>
        <h1 class="hero-title">{{ title }}</h1>
        <p class="hero-subtitle">{{ subtitle }}</p>
        <p v-if="description" class="hero-description">{{ description }}</p>

        <slot name="badges">
          <!-- Default trust badges slot — can be overridden -->
        </slot>
      </div>

      <!-- Right: Conversion Form -->
      <div class="hero-form-wrap">
        <div v-if="!submitted" class="hero-form-card">
          <h3 class="form-title">Request a Free <span class="form-title-underline">Consultation</span></h3>
          <p class="form-intro">Get a free quote within 1 hour. No commitment required.</p>

          <form @submit.prevent="handleSubmit" class="consult-form">
            <div class="form-group">
              <label>Select Your Device Type</label>
              <select v-model="form.deviceType" required>
                <option value="" disabled>— Choose device —</option>
                <option>Hard Drive</option>
                <option>SSD</option>
                <option>RAID/Server</option>
                <option>Laptop</option>
                <option>External HDD</option>
                <option>Mac/iMac</option>
                <option>iPhone/Mobile</option>
                <option>USB Flash Drive</option>
                <option>SD Card</option>
                <option>NAS Device</option>
                <option>Other</option>
              </select>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label>First Name</label>
                <input v-model="form.firstName" type="text" placeholder="John" required />
              </div>
              <div class="form-group">
                <label>Last Name</label>
                <input v-model="form.lastName" type="text" placeholder="Smith" required />
              </div>
            </div>

            <div class="form-group">
              <label>Email Address</label>
              <input v-model="form.email" type="email" placeholder="john@email.com" required />
            </div>

            <div class="form-group">
              <label>Phone Number</label>
              <input v-model="form.phone" type="tel" placeholder="(555) 000-0000" required />
            </div>

            <div class="form-group">
              <label>Select Your Issue</label>
              <select v-model="form.issue" required>
                <option value="" disabled>— Choose issue —</option>
                <option>Not Detected</option>
                <option>Clicking/Grinding Noise</option>
                <option>Water Damage</option>
                <option>Corrupted Files</option>
                <option>Accidental Deletion</option>
                <option>Physical Damage</option>
                <option>Not Spinning</option>
                <option>Other</option>
              </select>
            </div>

            <div class="form-group">
              <label>Describe Your Issue</label>
              <textarea v-model="form.description" rows="3" placeholder="Briefly describe what happened and what data you need recovered..." />
            </div>

            <button type="submit" class="form-submit">
              Get My Free Quote →
            </button>
          </form>
        </div>

        <div v-else class="form-success">
          <div class="success-icon">✅</div>
          <h3>Thank you!</h3>
          <p>We'll be in touch within 1 hour.</p>
          <p class="success-phone">Or call us now: <a href="tel:3236723000">323-672-3000</a></p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: linear-gradient(135deg, #0A0C14 0%, #0f1220 50%, #0A0C14 100%);
  padding: 80px 0 72px;
  position: relative;
  overflow: hidden;
}
.hero::before {
  content: '';
  position: absolute;
  top: -200px;
  right: -200px;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(245,200,66,0.06) 0%, transparent 70%);
  pointer-events: none;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1fr 480px;
  gap: 60px;
  align-items: start;
}

/* Copy */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(245, 200, 66, 0.1);
  border: 1px solid rgba(245, 200, 66, 0.3);
  color: var(--gold);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 24px;
}
.hero-title {
  font-family: var(--font-heading);
  font-size: clamp(32px, 4.5vw, 52px);
  font-weight: 900;
  line-height: 1.1;
  color: var(--white);
  margin-bottom: 20px;
}
.hero-subtitle {
  font-size: 22px;
  font-weight: 600;
  color: var(--gold);
  margin-bottom: 16px;
}
.hero-description {
  font-size: 17px;
  color: var(--muted);
  line-height: 1.7;
  margin-bottom: 32px;
}

/* Form card */
.hero-form-wrap { position: relative; }

.hero-form-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 36px 32px;
  box-shadow: 0 24px 60px rgba(0,0,0,0.4);
  color: #111;
}

.form-title {
  font-family: var(--font-heading);
  font-size: 22px;
  font-weight: 800;
  color: #111;
  margin-bottom: 6px;
}
.form-title-underline {
  display: inline-block;
  position: relative;
}
.form-title-underline::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--gold);
  border-radius: 2px;
}
.form-intro {
  font-size: 13px;
  color: #666;
  margin-bottom: 20px;
}

.consult-form { display: flex; flex-direction: column; gap: 14px; }

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.form-group label {
  font-size: 12px;
  font-weight: 600;
  color: #444;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.form-group input,
.form-group select,
.form-group textarea {
  padding: 10px 12px;
  border: 1.5px solid #dde0e8;
  border-radius: 8px;
  font-size: 14px;
  color: #111;
  background: #fafafa;
  font-family: var(--font-body);
  transition: border-color 0.2s;
  outline: none;
  width: 100%;
}
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: #F5C842;
  background: #fff;
}
.form-group textarea { resize: vertical; }

.form-submit {
  background: var(--gold);
  color: #0A0C14;
  border: none;
  border-radius: 8px;
  padding: 14px;
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;
  width: 100%;
  transition: background 0.2s, transform 0.15s;
  font-family: var(--font-heading);
  margin-top: 4px;
}
.form-submit:hover {
  background: var(--gold-dark);
  transform: translateY(-1px);
}

/* Success */
.form-success {
  background: #ffffff;
  border-radius: 16px;
  padding: 48px 32px;
  text-align: center;
  box-shadow: 0 24px 60px rgba(0,0,0,0.4);
  color: #111;
}
.success-icon { font-size: 48px; margin-bottom: 16px; }
.form-success h3 {
  font-family: var(--font-heading);
  font-size: 26px;
  font-weight: 800;
  color: #111;
  margin-bottom: 10px;
}
.form-success p { color: #555; margin-bottom: 8px; }
.success-phone { font-weight: 600; }
.success-phone a { color: var(--gold-dark); }

@media (max-width: 1024px) {
  .hero-inner { grid-template-columns: 1fr; gap: 48px; }
  .hero-form-wrap { max-width: 560px; }
}
@media (max-width: 640px) {
  .hero-form-card { padding: 28px 20px; }
  .form-row { grid-template-columns: 1fr; }
}
</style>
