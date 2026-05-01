<script setup lang="ts">
useSeoMeta({
  title: 'Contact Five Star Data Recovery — 24/7 Support',
  description: 'Contact Five Star Data Recovery. Call 323-672-3000. Located at 1731 S Brand Blvd Suite 100, Glendale, CA 91204. Available 24/7/365. Free evaluation.'
})

const submitted = ref(false)
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  deviceType: '',
  issue: '',
  message: ''
})

function handleSubmit() {
  submitted.value = true
}
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="Contact Five Star Data Recovery"
      subtitle="Available 24/7/365. Free Evaluation on Every Case."
      description="Call us, fill out the form, or visit our Glendale lab. We respond within 1 hour and begin evaluation the same day we receive your device."
    >
      <template #badges>
        <div class="trust-badges">
          <span class="badge">📞 323-672-3000</span>
          <span class="badge">⏰ Available 24/7</span>
          <span class="badge">✅ Free Evaluation</span>
        </div>
      </template>
    </HeroSection>

    <section class="contact-section">
      <div class="container contact-grid">
        <!-- Left: Info -->
        <div class="contact-info">
          <h2 class="section-title">Get in <span class="gold-underline gold">Touch</span></h2>
          <p class="contact-intro">We respond to every inquiry within 1 hour. Our team is available 24 hours a day, 7 days a week, 365 days a year — including holidays.</p>

          <div class="contact-methods">
            <div class="contact-method">
              <div class="method-icon">📞</div>
              <div class="method-info">
                <div class="method-label">Call Us (Fastest)</div>
                <a href="tel:3236723000" class="method-value gold">323-672-3000</a>
                <div class="method-note">Available 24/7/365</div>
              </div>
            </div>
            <div class="contact-method">
              <div class="method-icon">📍</div>
              <div class="method-info">
                <div class="method-label">Visit Our Lab</div>
                <div class="method-value">1731 S Brand Blvd Suite 100</div>
                <div class="method-note">Glendale, CA 91204 — Walk-ins welcome</div>
              </div>
            </div>
            <div class="contact-method">
              <div class="method-icon">✉️</div>
              <div class="method-info">
                <div class="method-label">Email</div>
                <a href="mailto:info@fivestardatarecovery.com" class="method-value gold">info@fivestardatarecovery.com</a>
                <div class="method-note">Response within 1 hour</div>
              </div>
            </div>
            <div class="contact-method">
              <div class="method-icon">✈️</div>
              <div class="method-info">
                <div class="method-label">Free Nationwide Shipping</div>
                <div class="method-value">We send the prepaid label to you</div>
                <div class="method-note">Both ways, fully insured</div>
              </div>
            </div>
          </div>

          <div class="hours-card card">
            <h3 class="hours-title">Lab Hours</h3>
            <div class="hours-grid">
              <span class="day">Monday – Friday</span><span class="time">9:00 AM – 6:00 PM</span>
              <span class="day">Saturday</span><span class="time">10:00 AM – 4:00 PM</span>
              <span class="day">Sunday</span><span class="time">By Appointment</span>
              <span class="day">Phone / Emergency</span><span class="time gold">24/7/365</span>
            </div>
          </div>
        </div>

        <!-- Right: Form -->
        <div class="contact-form-wrap">
          <div v-if="!submitted" class="contact-form-card card">
            <h3 class="form-title">Send Us a Message</h3>
            <p class="form-intro">Fill out the form below and we'll respond within 1 hour.</p>
            <form @submit.prevent="handleSubmit" class="contact-form">
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
                <label>Email</label>
                <input v-model="form.email" type="email" placeholder="john@email.com" required />
              </div>
              <div class="form-group">
                <label>Phone</label>
                <input v-model="form.phone" type="tel" placeholder="(555) 000-0000" required />
              </div>
              <div class="form-group">
                <label>Device Type</label>
                <select v-model="form.deviceType" required>
                  <option value="" disabled>— Select device —</option>
                  <option>Hard Drive</option><option>SSD</option><option>RAID/Server</option>
                  <option>Laptop</option><option>External HDD</option><option>Mac/iMac</option>
                  <option>iPhone/Mobile</option><option>USB Flash Drive</option>
                  <option>SD Card</option><option>NAS Device</option><option>Other</option>
                </select>
              </div>
              <div class="form-group">
                <label>Message</label>
                <textarea v-model="form.message" rows="4" placeholder="Describe your data loss situation and what data you need recovered..." required />
              </div>
              <button type="submit" class="form-submit">Send Message →</button>
            </form>
          </div>
          <div v-else class="success-card card">
            <div class="success-icon">✅</div>
            <h3>Message Received!</h3>
            <p>We'll be in touch within 1 hour.</p>
            <p class="success-phone">Or call us now: <a href="tel:3236723000">323-672-3000</a></p>
          </div>
        </div>
      </div>
    </section>

    <FooterBar />
  </div>
</template>

<style scoped>
.trust-badges { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 8px; }
.badge { background: rgba(255,255,255,0.06); border: 1px solid var(--border); color: var(--white); padding: 7px 14px; border-radius: 20px; font-size: 13px; font-weight: 500; }
.contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; padding: 80px 0; }
.contact-intro { font-size: 16px; color: var(--muted); line-height: 1.7; margin-bottom: 32px; }
.contact-methods { display: flex; flex-direction: column; gap: 20px; margin-bottom: 32px; }
.contact-method { display: flex; gap: 16px; align-items: flex-start; }
.method-icon { font-size: 24px; flex-shrink: 0; }
.method-label { font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); font-weight: 600; margin-bottom: 4px; }
.method-value { font-size: 16px; font-weight: 600; color: var(--white); display: block; text-decoration: none; }
a.method-value:hover { text-decoration: underline; }
.method-note { font-size: 13px; color: var(--muted); margin-top: 2px; }
.hours-card { padding: 24px; }
.hours-title { font-family: var(--font-heading); font-size: 16px; font-weight: 700; color: var(--white); margin-bottom: 16px; }
.hours-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px 24px; font-size: 14px; }
.day { color: var(--muted); }
.time { color: var(--white); font-weight: 500; }
.contact-form-card { padding: 36px; }
.form-title { font-family: var(--font-heading); font-size: 22px; font-weight: 800; color: var(--white); margin-bottom: 6px; }
.form-intro { font-size: 14px; color: var(--muted); margin-bottom: 24px; }
.contact-form { display: flex; flex-direction: column; gap: 16px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.form-group { display: flex; flex-direction: column; gap: 6px; }
.form-group label { font-size: 12px; font-weight: 600; color: var(--muted); text-transform: uppercase; letter-spacing: 0.05em; }
.form-group input, .form-group select, .form-group textarea { padding: 12px 14px; border: 1.5px solid var(--border); border-radius: 8px; font-size: 14px; color: var(--white); background: rgba(255,255,255,0.04); font-family: var(--font-body); transition: border-color 0.2s; outline: none; }
.form-group input:focus, .form-group select:focus, .form-group textarea:focus { border-color: var(--gold); }
.form-group textarea { resize: vertical; }
.form-group select option { background: #13161F; }
.form-submit { background: var(--gold); color: #0A0C14; border: none; border-radius: 8px; padding: 14px; font-size: 16px; font-weight: 800; cursor: pointer; width: 100%; font-family: var(--font-heading); transition: background 0.2s; }
.form-submit:hover { background: var(--gold-dark); }
.success-card { text-align: center; padding: 56px 36px; }
.success-icon { font-size: 56px; margin-bottom: 16px; }
.success-card h3 { font-family: var(--font-heading); font-size: 26px; font-weight: 800; color: var(--white); margin-bottom: 10px; }
.success-card p { color: var(--muted); margin-bottom: 8px; }
.success-phone a { color: var(--gold); font-weight: 700; }
@media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr; } }
@media (max-width: 640px) { .form-row { grid-template-columns: 1fr; } }
</style>
