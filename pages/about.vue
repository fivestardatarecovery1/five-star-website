<script setup lang="ts">
useSeoMeta({
  title: 'About Us — Five Star Data Recovery',
  description: 'Learn about Five Star Data Recovery. We are a team of engineers dedicated to recovering your most important data.'
})
</script>

<template>
  <div class="page-wrapper">
    <NavBar />

    <section class="hero-section">
      <div class="container hero-inner">
        <div class="hero-text">
          <h1 class="hero-title">About Five Star Data Recovery</h1>
          <p class="hero-sub">Get Your Data Back In No Time.</p>
          <p class="hero-desc">At Five Star Data Recovery, we're more than just engineers — we're problem solvers dedicated to helping you recover what matters most. Our Glendale, CA lab is equipped with an on-site cleanroom and professional recovery tools.</p>
          <div class="hero-actions">
            <NuxtLink to="/start-recovery" class="btn-primary-red">Start Recovery</NuxtLink>
            <NuxtLink to="/data-recovery/free-quote" class="btn-secondary">Request a Quote</NuxtLink>
          </div>
          <div class="hero-trust">
            <span>✔ Available 24/7/365</span>
            <span>✔ No Data = No Charge</span>
            <span>✔ Free Nationwide Shipping</span>
            <span>✔ Flat Rate Pricing</span>
          </div>
        </div>
        <div class="hero-form-wrap">
          <div class="hero-form-card">
            <h3 class="form-title">Request a Free Consultation</h3>
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
              <button type="submit" class="btn-form-submit">Request a Consultation</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <StatsBar />

    <section class="light-section">
      <div class="container">
        <h2 class="section-heading">Who We Are</h2>
        <p class="body-text">At Five Star Data Recovery, we’re more than just engineers — we’re problem solvers dedicated to helping you recover what matters most. Based in Glendale, California, our team specializes in professional data recovery services for hard drives, SSDs, RAID systems, iPhones, USBs, and more.</p>
        <p class="body-text">With years of hands-on experience and a state-of-the-art Class 100 cleanroom lab, we’ve earned a reputation for delivering high success rates, honest diagnostics, and upfront pricing. Every case is handled by trained recovery experts who follow strict protocols to maximize the chances of success — all while maintaining full transparency with our clients.</p>
        <p class="body-text">We believe in doing things the right way — no gimmicks, no hidden fees, just skilled engineers working hard to recover your data as quickly and safely as possible.</p>
        <p class="body-text">Whether it’s a business-critical RAID system or a personal external hard drive, we treat every case with urgency and care — because behind every device is a story worth recovering.</p>
        <p class="body-text">At the core of everything we do is a commitment to honesty, integrity, and delivering real results. We believe that trust is earned — not claimed — which is why we never overpromise and always provide clear, honest assessments of your data recovery options.</p>
        <p class="body-text">Our team has successfully handled thousands of complex recovery cases, from failed RAID arrays to water-damaged SSDs. That depth of experience allows us to approach each job with confidence and care, using proven methods and industry-standard tools to give your data the best chance of recovery.</p>
      </div>
    </section>

    <section class="light-alt-section">
      <div class="container">
        <h2 class="section-heading center">Why Choose Five Star Data Recovery?</h2>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:32px;margin-top:40px">
          <div style="background:#fff;border-radius:12px;padding:28px;box-shadow:0 2px 12px rgba(0,0,0,0.06)">
            <div style="font-size:2rem;margin-bottom:12px">🏆</div>
            <h3 style="font-size:1.1rem;font-weight:700;color:#1a1a2e;margin-bottom:10px">10+ Years Experience</h3>
            <p class="body-text">Over a decade of professional data recovery experience handling thousands of cases.</p>
          </div>
          <div style="background:#fff;border-radius:12px;padding:28px;box-shadow:0 2px 12px rgba(0,0,0,0.06)">
            <div style="font-size:2rem;margin-bottom:12px">🔬</div>
            <h3 style="font-size:1.1rem;font-weight:700;color:#1a1a2e;margin-bottom:10px">On-Site Cleanroom</h3>
            <p class="body-text">Our Class 100 certified cleanroom is on-site, allowing us to handle physical drive repairs in-house.</p>
          </div>
          <div style="background:#fff;border-radius:12px;padding:28px;box-shadow:0 2px 12px rgba(0,0,0,0.06)">
            <div style="font-size:2rem;margin-bottom:12px">💰</div>
            <h3 style="font-size:1.1rem;font-weight:700;color:#1a1a2e;margin-bottom:10px">Flat-Rate Pricing</h3>
            <p class="body-text">Transparent flat-rate pricing — no hidden fees, no surprises. No Data, No Charge guarantee.</p>
          </div>
          <div style="background:#fff;border-radius:12px;padding:28px;box-shadow:0 2px 12px rgba(0,0,0,0.06)">
            <div style="font-size:2rem;margin-bottom:12px">🔒</div>
            <h3 style="font-size:1.1rem;font-weight:700;color:#1a1a2e;margin-bottom:10px">Secure & Confidential</h3>
            <p class="body-text">Your data is treated with strict confidentiality. We never share your files with anyone.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-band">
      <div class="container contact-band-inner">
        <div class="contact-band-text">
          <h2 class="contact-band-title">Get to Know Our Team</h2>
          <p class="contact-band-sub">Data loss is stressful — but working with us doesn't have to be. Our engineers are ready to help.</p>
        </div>
        <div class="contact-band-actions">
          <a href="tel:8182728866" class="btn-yellow">📞 818-272-8866</a>
          <NuxtLink to="/contact" class="btn-outline-white">Contact Us</NuxtLink>
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
