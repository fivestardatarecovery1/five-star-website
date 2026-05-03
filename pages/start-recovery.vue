<script setup lang="ts">
useSeoMeta({
  title: 'Start Your Data Recovery — Five Star Data Recovery',
  description: 'Start your data recovery with Five Star Data Recovery. Fill out the form and our engineers will contact you immediately.'
})
</script>

<template>
  <div class="page-wrapper">
    <NavBar />

    <section class="hero-section">
      <div class="container hero-inner">
        <div class="hero-text">
          <h1 class="hero-title">Start Your Data Recovery Today</h1>
          <p class="hero-sub">Get Your Data Back In No Time.</p>
          <p class="hero-desc">Ready to get your data back? Starting your recovery with Five Star is simple. Fill out the form and one of our engineers will contact you right away.</p>
          <div class="hero-trust">
            <span>✔ Available 24/7/365</span>
            <span>✔ No Data = No Charge</span>
            <span>✔ Free Nationwide Shipping</span>
            <span>✔ Flat Rate Pricing</span>
          </div>
        </div>
        <div class="hero-form-wrap">
          <div class="hero-form-card">
            <h3 class="form-title">Start Your Recovery</h3>
            <form class="consult-form" @submit.prevent>
              <div class="form-row">
                <input type="text" placeholder="First Name" class="form-input" />
                <input type="text" placeholder="Last Name" class="form-input" />
              </div>
              <input type="email" placeholder="Email Address" class="form-input full" />
              <input type="tel" placeholder="Phone Number" class="form-input full" />
              <select class="form-input full">
                <option>Select Device Type</option>
                <option>Hard Drive (HDD)</option>
                <option>SSD</option>
                <option>External Drive</option>
                <option>RAID / NAS</option>
                <option>USB / Flash Drive</option>
                <option>Other</option>
              </select>
              <select class="form-input full">
                <option>Select Service Type</option>
                <option>Standard Service (3-5 days)</option>
                <option>Expedited Service (24-48 hrs)</option>
                <option>Expedited Plus (Same Day)</option>
              </select>
              <textarea class="form-input full" placeholder="Describe what happened to your device..." rows="3" style="resize:vertical"></textarea>
              <button type="submit" class="btn-form-submit">Start My Recovery</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <StatsBar />

    <section class="light-section">
      <div class="container">
        <h2 class="section-heading center">How to Get Started</h2>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:24px;margin-top:40px">
          <div style="background:#f7f9fc;border:1px solid #e2e8f0;border-radius:10px;padding:24px 20px">
            <div style="font-size:0.85rem;font-weight:700;color:#C9A84C;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:10px">Step 1</div>
            <h3 style="font-size:1rem;font-weight:700;color:#1a1a2e;margin-bottom:10px">Fill Out the Form</h3>
            <p style="font-size:0.9rem;color:#4a5568;line-height:1.7">Complete the form above with your contact info and device details. We'll contact you immediately.</p>
          </div>
          <div style="background:#f7f9fc;border:1px solid #e2e8f0;border-radius:10px;padding:24px 20px">
            <div style="font-size:0.85rem;font-weight:700;color:#C9A84C;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:10px">Step 2</div>
            <h3 style="font-size:1rem;font-weight:700;color:#1a1a2e;margin-bottom:10px">Drop Off or Ship</h3>
            <p style="font-size:0.9rem;color:#4a5568;line-height:1.7">Visit us in Glendale, CA or ship your device. We provide free shipping both ways for mail-in cases.</p>
          </div>
          <div style="background:#f7f9fc;border:1px solid #e2e8f0;border-radius:10px;padding:24px 20px">
            <div style="font-size:0.85rem;font-weight:700;color:#C9A84C;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:10px">Step 3</div>
            <h3 style="font-size:1rem;font-weight:700;color:#1a1a2e;margin-bottom:10px">Free Diagnostic</h3>
            <p style="font-size:0.9rem;color:#4a5568;line-height:1.7">We evaluate your device and provide a detailed report and flat-rate quote before starting.</p>
          </div>
          <div style="background:#f7f9fc;border:1px solid #e2e8f0;border-radius:10px;padding:24px 20px">
            <div style="font-size:0.85rem;font-weight:700;color:#C9A84C;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:10px">Step 4</div>
            <h3 style="font-size:1rem;font-weight:700;color:#1a1a2e;margin-bottom:10px">Get Your Data Back</h3>
            <p style="font-size:0.9rem;color:#4a5568;line-height:1.7">Approve the recovered file list and we'll deliver your data on a new storage device.</p>
          </div>
        </div>
        <div style="background:#1a1a2e;color:#fff;text-align:center;padding:16px 24px;border-radius:8px;font-size:0.95rem;margin-top:32px">
          <strong style="color:#C9A84C">No Data, No Charge Guarantee</strong> — If we can't recover your data, you owe nothing.
        </div>
      </div>
    </section>

    <section class="contact-band">
      <div class="container contact-band-inner">
        <div class="contact-band-text">
          <h2 class="contact-band-title">Questions Before Starting?</h2>
          <p class="contact-band-sub">Call us now for a free consultation. Our engineers will answer all your questions.</p>
        </div>
        <div class="contact-band-actions">
          <a href="tel:8182728866" class="btn-yellow">📞 818-272-8866</a>
          <NuxtLink to="/data-recovery/free-quote" class="btn-outline-white">Get Free Quote</NuxtLink>
        </div>
      </div>
    </section>

    <section class="yellow-band">
      <div class="container">
        <p class="yellow-band-text">Recovering what can't be replaced!</p>
      </div>
    </section>

    <FooterBar />
  </div>
</template>

<style scoped>
.page-wrapper{font-family:'Inter',sans-serif}.container{max-width:1200px;margin:0 auto;padding:0 24px}
.hero-section{background:#1a1a2e;padding:60px 0}.hero-title{font-size:clamp(1.8rem,3.5vw,2.8rem);font-weight:900;color:#fff;line-height:1.2;margin-bottom:12px}
.hero-sub{font-size:1.1rem;color:#C9A84C;font-weight:600;margin-bottom:16px}
.hero-desc{font-size:0.95rem;color:rgba(255,255,255,0.72);line-height:1.7;margin-bottom:28px}
.hero-inner{display:grid;grid-template-columns:1fr 420px;gap:48px;align-items:start}
.hero-actions{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:24px}
.btn-primary-red{background:#e53e3e;color:#fff;padding:14px 28px;border-radius:6px;font-weight:700;font-size:0.95rem;text-decoration:none;display:inline-block}
.btn-primary-red:hover{background:#c53030}
.btn-secondary{background:transparent;color:#fff;border:2px solid rgba(255,255,255,0.4);padding:12px 24px;border-radius:6px;font-weight:600;font-size:0.95rem;text-decoration:none;display:inline-block}
.btn-secondary:hover{border-color:#fff}
.hero-trust{display:flex;flex-wrap:wrap;gap:12px 24px}.hero-trust span{font-size:0.82rem;color:rgba(255,255,255,0.65)}
.hero-form-wrap{position:relative}.hero-form-card{background:#fff;border-radius:12px;padding:28px;box-shadow:0 8px 40px rgba(0,0,0,0.3)}
.form-title{font-size:1rem;font-weight:700;color:#1a1a2e;margin-bottom:20px}
.consult-form{display:flex;flex-direction:column;gap:10px}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.form-input{border:1px solid #d1d5db;border-radius:6px;padding:10px 14px;font-size:0.9rem;color:#1a1a2e;background:#fff;width:100%;box-sizing:border-box;font-family:inherit}
.form-input:focus{outline:none;border-color:#C9A84C}.form-input.full{width:100%}
.btn-form-submit{background:#C9A84C;color:#fff;border:none;border-radius:6px;padding:14px;font-size:1rem;font-weight:700;cursor:pointer;margin-top:4px;font-family:inherit}
.btn-form-submit:hover{background:#b8923e}
.light-section{background:#fff;padding:72px 0}.light-alt-section{background:#f7f9fc;padding:72px 0}
.section-heading{font-size:clamp(1.5rem,2.5vw,2rem);font-weight:800;color:#1a1a2e;margin-bottom:16px}
.section-heading.center{text-align:center}
.body-text{font-size:0.95rem;color:#4a5568;line-height:1.8;margin-bottom:16px}
.contact-band{background:#1a1a2e;padding:48px 0}
.contact-band-inner{display:flex;justify-content:space-between;align-items:center;gap:48px;flex-wrap:wrap}
.contact-band-title{font-size:1.5rem;font-weight:800;color:#fff;margin-bottom:12px}
.contact-band-sub{font-size:0.9rem;color:rgba(255,255,255,0.65);line-height:1.7;margin-bottom:16px;max-width:540px}
.contact-band-actions{display:flex;gap:14px;flex-shrink:0;flex-wrap:wrap}
.btn-yellow{display:inline-block;background:#C9A84C;color:#fff;padding:14px 28px;border-radius:6px;font-weight:800;font-size:1rem;text-decoration:none}
.btn-yellow:hover{background:#b8923e}
.btn-outline-white{display:inline-block;border:2px solid rgba(255,255,255,0.4);color:#fff;padding:12px 24px;border-radius:6px;font-weight:600;font-size:0.95rem;text-decoration:none}
.btn-outline-white:hover{border-color:#fff}
.yellow-band{background:#C9A84C;padding:24px 0;text-align:center}
.yellow-band-text{font-size:1.3rem;font-weight:800;color:#fff;margin:0}
.reviews-row{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;margin-top:40px}
.review-card{background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:28px;box-shadow:0 2px 12px rgba(0,0,0,0.06)}
.review-avatar{font-size:2rem;margin-bottom:12px}
.review-text{font-size:0.9rem;color:#4a5568;line-height:1.7;margin-bottom:16px;font-style:italic}
.review-stars{color:#C9A84C;font-size:1rem;margin-bottom:8px}
.review-name{font-weight:700;color:#1a1a2e;font-size:0.9rem}
.review-loc{font-size:0.82rem;color:#718096}
.contact-info-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:32px;margin-top:40px}
.contact-info-card{background:#f7f9fc;border-radius:12px;padding:28px}
.contact-info-icon{font-size:2rem;margin-bottom:12px}
.contact-info-title{font-size:1rem;font-weight:700;color:#1a1a2e;margin-bottom:8px}
.contact-info-text{font-size:0.9rem;color:#4a5568;line-height:1.7}
.contact-info-link{color:#C9A84C;text-decoration:none;font-weight:600}
.two-col{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center}
@media(max-width:900px){.hero-inner{grid-template-columns:1fr}.two-col{grid-template-columns:1fr}.contact-band-inner{flex-direction:column;align-items:flex-start}}
@media(max-width:600px){.form-row{grid-template-columns:1fr}}
</style>
