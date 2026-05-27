<script setup lang="ts">
defineProps<{
  description?: string
  closing?: string
  bgImage?: string
  bullet1?: string
  bullet2?: string
  bullet3?: string
}>()

const form = reactive({
  name: '', email: '', phone: '',
  deviceType: '', issue: '', contact: 'call', responseTime: ''
})
const submitted = ref(false)
const handleSubmit = () => { submitted.value = true }
</script>

<template>
  <section class="quote-section">
    <div class="container">
      <div class="quote-wrap">

        <!-- LEFT — dark panel -->
        <div class="quote-left" :style="bgImage ? `background-image: linear-gradient(rgba(10,12,20,0.82), rgba(10,12,20,0.82)), url('${bgImage}')` : ''">
          <h2 class="quote-heading">Get a Free Quote within Minutes!</h2>
          <p class="quote-desc">{{ description || 'Our expert engineers use advanced technology to recover your data quickly and securely. We specialize in complex cases with high success rates, offering tailored solutions for both businesses and individuals. Fill out the form to start a seamless recovery process.' }}</p>
          <ul class="quote-bullets">
            <li><span class="qb-check">✓</span> <strong>{{ bullet1 || 'Quick and Secure Data Recovery' }}</strong></li>
            <li><span class="qb-check">✓</span> <strong>{{ bullet2 || 'Expert Engineers for All Devices' }}</strong></li>
            <li><span class="qb-check">✓</span> <strong>{{ bullet3 || 'No Data, No Fee Guarantee' }}</strong></li>
          </ul>
          <p class="quote-closing">{{ closing || "Contact our specialists today for a quick, hassle-free recovery. We're here to guide you every step of the way and ensure your data is securely restored. Your peace of mind is our priority." }}</p>
        </div>

        <!-- RIGHT — form -->
        <div class="quote-right">
          <div v-if="submitted" class="quote-success">
            <div class="success-icon">✓</div>
            <h3 class="success-title">We'll be in touch shortly!</h3>
            <p class="success-body">Our team will review your request and respond with a quote as soon as possible.</p>
          </div>
          <form v-else @submit.prevent="handleSubmit" class="quote-form">
            <div class="form-row">
              <div class="form-group">
                <label>NAME <span class="req">*</span></label>
                <input v-model="form.name" type="text" placeholder="Name / Required" required class="form-input" />
              </div>
              <div class="form-group">
                <label>EMAIL <span class="req">*</span></label>
                <input v-model="form.email" type="email" placeholder="Email Address / Required" required class="form-input" />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label>SELECT YOUR DEVICE TYPE</label>
                <div class="select-wrap">
                  <select v-model="form.deviceType" class="form-input">
                    <option value="">Device Type</option>
                    <option>Hard Drive</option>
                    <option>SSD</option>
                    <option>External Hard Drive</option>
                    <option>RAID / NAS</option>
                    <option>USB Flash Drive</option>
                    <option>SD Card / CFast / Memory Card</option>
                    <option>Apple / Mac Device</option>
                    <option>Laptop</option>
                    <option>Desktop Computer</option>
                    <option>Other - Not Listed</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label>PHONE</label>
                <input v-model="form.phone" type="tel" placeholder="Phone Number / Required" class="form-input" />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label>SELECT ISSUE WITH DEVICE</label>
                <div class="select-wrap">
                  <select v-model="form.issue" class="form-input">
                    <option value="">Select Issue with Device</option>
                    <option>No Power Issue</option>
                    <option>Clicking / Beeping (Mechanical Issue)</option>
                    <option>Not Spinning / Not Recognized</option>
                    <option>Damaged or Corrupted Files</option>
                    <option>Formatted Device / Deleted File</option>
                    <option>Liquid Damage</option>
                    <option>Failed RAID / NAS</option>
                    <option>Other - Not Listed</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label>PREFERRED CONTACT METHOD</label>
                <div class="radio-group">
                  <label class="radio-label"><input type="radio" v-model="form.contact" value="call" /> CALL</label>
                  <label class="radio-label"><input type="radio" v-model="form.contact" value="email" /> EMAIL</label>
                  <label class="radio-label"><input type="radio" v-model="form.contact" value="text" /> TEXT</label>
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group full">
                <label>PREFERRED RESPONSE TIME</label>
                <div class="select-wrap">
                  <select v-model="form.responseTime" class="form-input">
                    <option value="">Select Preferred Time</option>
                    <option>As Soon as Possible</option>
                    <option>Morning (9am – 12pm)</option>
                    <option>Afternoon (12pm – 5pm)</option>
                    <option>Evening (5pm – 8pm)</option>
                  </select>
                </div>
              </div>
            </div>
            <button type="submit" class="quote-btn">Get a Quote!</button>
          </form>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.quote-section { background: #f4f7fc; padding: 72px 0; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 28px; }
.quote-wrap { display: grid; grid-template-columns: 1fr 1fr; border-radius: 14px; overflow: hidden; box-shadow: 0 8px 40px rgba(0,0,0,0.1); }
.quote-left { background: #0a0c14 center/cover no-repeat; padding: 48px 44px; display: flex; flex-direction: column; gap: 20px; }
.quote-heading { font-size: clamp(1.5rem, 2.5vw, 2rem); font-weight: 900; color: #C9A84C; line-height: 1.2; margin: 0; }
.quote-desc { font-size: 0.93rem; color: rgba(255,255,255,0.75); line-height: 1.75; margin: 0; }
.quote-bullets { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px; }
.quote-bullets li { display: flex; align-items: flex-start; gap: 10px; font-size: 0.93rem; color: #fff; }
.qb-check { color: #C9A84C; font-weight: 900; flex-shrink: 0; margin-top: 1px; }
.quote-closing { font-size: 0.88rem; color: rgba(255,255,255,0.6); line-height: 1.7; margin: 0; }
.quote-right { background: #fff; padding: 40px 44px; }
.quote-form { display: flex; flex-direction: column; gap: 18px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.form-group { display: flex; flex-direction: column; gap: 6px; }
.form-group.full { grid-column: 1 / -1; }
.form-group label { font-size: 0.72rem; font-weight: 700; color: #4a5568; letter-spacing: 0.06em; }
.req { color: #e53e3e; }
.form-input { width: 100%; padding: 12px 14px; border: 1.5px solid #e2e6ee; border-radius: 6px; font-size: 0.9rem; color: #1a1a2e; background: #fff; outline: none; font-family: inherit; appearance: none; }
.form-input:focus { border-color: #C9A84C; }
.select-wrap { position: relative; }
.select-wrap::after { content: '▾'; position: absolute; right: 14px; top: 50%; transform: translateY(-50%); color: #4a5568; pointer-events: none; font-size: 0.85rem; }
.radio-group { display: flex; gap: 20px; align-items: center; padding-top: 8px; }
.radio-label { display: flex; align-items: center; gap: 6px; font-size: 0.85rem; font-weight: 600; color: #1a1a2e; cursor: pointer; }
.radio-label input { accent-color: #C9A84C; }
.quote-btn { width: 100%; background: #C9A84C; color: #1a1a1a; font-weight: 900; font-size: 1rem; padding: 16px; border: none; border-radius: 6px; cursor: pointer; transition: background 0.2s; font-family: inherit; letter-spacing: 0.02em; }
.quote-btn:hover { background: #b8923e; }
.quote-success { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; gap: 16px; text-align: center; padding: 40px 0; }
.success-icon { width: 64px; height: 64px; background: #C9A84C; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.8rem; font-weight: 900; }
.success-title { font-size: 1.3rem; font-weight: 900; color: #1a1a2e; margin: 0; }
.success-body { font-size: 0.9rem; color: #4a5568; line-height: 1.7; margin: 0; }
@media (max-width: 900px) { .quote-wrap { grid-template-columns: 1fr; } .form-row { grid-template-columns: 1fr; } }
</style>
