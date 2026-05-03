<script setup lang="ts">
useSeoMeta({
  title: 'Terms and Conditions — Five Star Data Recovery',
  description: 'Read the terms and conditions for Five Star Data Recovery services. Understand our policies before starting your data recovery.'
})
</script>

<template>
  <div class="page-wrapper">
    <NavBar />

    <section class="hero-section">
      <div class="container">
        <h1 class="hero-title" style="padding: 40px 0;">Terms and Conditions</h1>
      </div>
    </section>

    <section class="light-section">
      <div class="container" style="max-width: 800px;">
        <h2 class="section-heading">Terms And Conditions</h2>
        <p class="body-text">At Five Star Data Recovery, we value transparency and want every customer to fully understand our process. Our Terms and Conditions outline important details about our services, including pricing, turnaround times, liability limitations, and how recovered data is handled. We also explain our No Data, No Charge policy, as well as any non-refundable fees that may apply in special case types. By proceeding with our services, you agree to these terms. If you have any questions, our team is happy to help clarify before we begin your recovery.</p>
      </div>
    </section>

    <section class="contact-band">
      <div class="container contact-band-inner">
        <div class="contact-band-text">
          <h2 class="contact-band-title">Have Questions?</h2>
          <p class="contact-band-sub">Contact us for more information about our services and policies.</p>
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
.hero-section{background:#1a1a2e;padding:60px 0}
.hero-title{font-size:clamp(1.8rem,3.5vw,2.8rem);font-weight:900;color:#fff;line-height:1.2}
.light-section{background:#fff;padding:72px 0}
.section-heading{font-size:clamp(1.5rem,2.5vw,2rem);font-weight:800;color:#1a1a2e;margin-bottom:24px}
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
@media(max-width:900px){.contact-band-inner{flex-direction:column;align-items:flex-start}}
</style>
