<script setup lang="ts">
useSeoMeta({
  title: 'Frequently Asked Questions — Five Star Data Recovery',
  description: 'Frequently asked questions about data recovery services at Five Star Data Recovery. Get answers about pricing, process, and more.'
})

const faqs = [
  { q: 'Expedited Plus is our highest-priority data recovery service, designed for urgent cases that require immediate attention. Your case is handled 24/7—including nights, weekends, and holidays—by our top-', a: 'While our standard Expedited Service prioritizes your case during business hours, Expedited Plus goes beyond that. This service guarantees continuous, around-the-clock recovery efforts from the moment your device arrives at our lab. It’s ideal for critical business needs, time-sensitive data, or personal emergencies.' },
  { q: 'The process starts with an evaluation of your device to diagnose the issue. We then create a clone of the storage media to prevent further damage. Using advanced tools, our experts attempt to retrieve', a: 'The process starts with an evaluation of your device to diagnose the issue. We then create a clone of the storage media to prevent further damage. Using advanced tools, our experts attempt to retrieve the lost data, ensuring the highest possible recovery success rate.' },
  { q: 'The cost of data recovery depends on factors like the type of device, the extent of the damage, and the complexity of the issue. We provide a detailed quote after the initial evaluation. Recovery time', a: 'Yes. With Expedited Plus, you’ll receive regular updates from our engineers and direct communication regarding the progress of your recovery. You’re never left in the dark.' },
  { q: 'Choose Expedited Plus when time is critical. Whether you\'re facing a business deadline, legal matter, or need emergency data recovery, this service ensures that your case gets uninterrupted attention ', a: 'Expedited Plus is our highest-priority data recovery service, designed for urgent cases that require immediate attention. Your case is handled 24/7—including nights, weekends, and holidays—by our top-tier engineers. If your data recovery can’t wait, this is the fastest and most dedicated solution we offer.' },
  { q: 'While our standard Expedited Service prioritizes your case during business hours, Expedited Plus goes beyond that. This service guarantees continuous, around-the-clock recovery efforts from the moment', a: 'The process starts with an evaluation of your device to diagnose the issue. We then create a clone of the storage media to prevent further damage. Using advanced tools, our experts attempt to retrieve the lost data, ensuring the highest possible recovery success rate.' },
  { q: 'The process starts with an evaluation of your device to diagnose the issue. We then create a clone of the storage media to prevent further damage. Using advanced tools, our experts attempt to retrieve', a: 'The cost of data recovery depends on factors like the type of device, the extent of the damage, and the complexity of the issue. We provide a detailed quote after the initial evaluation. Recovery times can vary from a few hours to several days, depending on the situation.' },
  { q: 'Yes. With Expedited Plus, you’ll receive regular updates from our engineers and direct communication regarding the progress of your recovery. You’re never left in the dark.', a: 'Choose Expedited Plus when time is critical. Whether you\'re facing a business deadline, legal matter, or need emergency data recovery, this service ensures that your case gets uninterrupted attention from our most experienced recovery engineers.' },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-wrapper">
    <NavBar />

    <section class="hero-section">
      <div class="container" style="padding: 60px 24px;">
        <h1 class="hero-title">Frequently Asked Questions</h1>
        <p class="hero-sub">Get Answers About Data Recovery</p>
        <p class="hero-desc">Have questions about data recovery? We've compiled answers to the most common questions our customers ask. If you don't see your question, call us at 818-272-8866.</p>
      </div>
    </section>

    <StatsBar />

    <section class="light-section">
      <div class="container">
        <h2 class="section-heading center">Frequently Asked Questions</h2>
        <div class="faq-list">
          <div v-for="(faq, i) in faqs" :key="i" class="faq-item" :class="{ open: openFaq === i }">
            <button class="faq-q" @click="toggleFaq(i)">
              <span>{{ faq.q }}</span>
              <span class="faq-icon">{{ openFaq === i ? '−' : '+' }}</span>
            </button>
            <div v-if="openFaq === i" class="faq-a">{{ faq.a }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-band">
      <div class="container contact-band-inner">
        <div class="contact-band-text">
          <h2 class="contact-band-title">Still Have Questions?</h2>
          <p class="contact-band-sub">Our engineers are available to answer any questions about data recovery, pricing, and our process.</p>
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
.faq-list{max-width:800px;margin:40px auto 0;display:flex;flex-direction:column;gap:6px}
.faq-item{border:1px solid #e2e8f0;border-radius:8px;overflow:hidden}
.faq-item.open{border-color:#C9A84C}
.faq-q{width:100%;display:flex;justify-content:space-between;align-items:center;padding:18px 20px;background:none;border:none;color:#1a1a2e;font-size:0.95rem;font-weight:600;cursor:pointer;text-align:left;gap:12px;font-family:inherit}
.faq-icon{color:#C9A84C;font-size:1.4rem;font-weight:400;flex-shrink:0}
.faq-a{padding:0 20px 18px;font-size:0.9rem;color:#4a5568;line-height:1.7}
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
