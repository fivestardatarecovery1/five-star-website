<script setup lang="ts">
useSeoMeta({
  title: 'Start Recovery — Five Star Data Recovery',
  description: 'Ready to get your data back? Starting your recovery with Five Star Data Recovery is fast and hassle-free. You can drop off your device, ship it in with our free'
})
const faqs = [
  { q: '1. Can I start a data recovery case online?', a: 'Yes! You can easily start your data recovery case online by filling out our Start Recovery Form. Once submitted, our team will contact you to confirm the next steps, including drop-off or mail-in options.' },
  { q: '2. Do I need to schedule an appointment before dropping off my device?', a: 'No appointment is necessary. You’re welcome to walk in during our business hours. However, submitting the Start Recovery Form in advance helps us prepare for your device and minimize your wait time.' },
  { q: '3. What happens after I submit the Start Recovery Form?', a: 'After you submit the form, we’ll review your case details and reach out to you by phone or email to confirm receipt. From there, you can proceed with either dropping off your device in person or shipping it to our lab.' },
  { q: '4. Can I track the status of my data recovery case after starting it?', a: 'Yes. Once your case is checked in, you’ll receive all status updates exclusively through our ticketing system via email. This ensures clear, organized communication for every step of the recovery process. If you have questions, you can reply directly to your ticket at any time for further assistance.' },
  { q: '5. What if I’m not sure how to describe the issue with my device?', a: 'No problem. Just provide as much information as you can on the Start Recovery Form, and our engineers will diagnose the device after it arrives. If needed, we’ll contact you for clarification before proceeding.' },
  { q: '6. Is there a fee just for submitting the Start Recovery Form?', a: 'No, there’s no fee to submit the form. Filling it out simply allows us to prepare for your case and start the process efficiently. Any applicable fees (like the recovery fee or expedited services) will only be discussed and charged after diagnostics.' },
  { q: '7. How quickly will my case be checked in after drop-off or arrival?', a: 'We check in most cases within 1–2 hours of arrival during business hours. For mail-in devices, cases are usually entered into our system the same day they arrive, and you’ll receive confirmation once your device is logged.' },
  { q: '8. Can I submit the Start Recovery Form if I’m mailing my device?', a: 'Yes! In fact, submitting the form is highly recommended for mail-in clients. It helps us match your incoming shipment to your case file, reducing delays and ensuring faster processing once your device arrives.' }
]
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="Start Recovery"
      subtitle="Start Your Data Recovery Today"
      description="Ready to get your data back? Starting your recovery with Five Star Data Recovery is fast and hassle-free. You can drop off your device, ship it in with our free prepaid label, or schedule a free local pickup. For urgent cases, we offer Expedited and Expedited Plus services with priority turnaround. "
    >
      <template #badges>
        <div class="trust-badges">
          <span class="badge">✅ Free Evaluation</span>
          <span class="badge">✅ No Data, No Charge</span>
          <span class="badge">✅ Flat-Rate Pricing</span>
          <span class="badge">✅ 21,000+ Recoveries</span>
        </div>
      </template>
    </HeroSection>
    <StatsBar />

    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Start Your Data Recovery Today</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Ready to get your data back? Starting your recovery with Five Star Data Recovery is fast and hassle-free. You can drop off your device, ship it in with our free prepaid label, or schedule a free local pickup. For urgent cases, we offer Expedited and Expedited Plus services with priority turnaround. From hard drives and SSDs to phones and RAID arrays, our expert engineers are ready to help you recover your important files.</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">LOCAL?</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">EXPRESS DROP OFF</h2>
        </div>
        <div class="section-body">
          <p>We offer a faster way to start your recovery! Fill out the form to get started!</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">NOT LOCAL?</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">MAIL-IN SERVICE</h2>
        </div>
        <div class="section-body">
          <p>Not local? Not a problem! Fill out our Mail-In form to experience our FIVE STAR service!</p>
          <p>Data loss is stressful — but working with us doesn’t have to be. Watch how our team handles each recovery with care, professionalism, and precision. From diagnostics to delivery, we offer flat-rate pricing, honest communication, and proven results — all from our secure Glendale lab.</p>
          <p>https://youtu.be/14ACFHJ24hg?si=V88jCA7h-3SbSvyU</p>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Testimonials from Satisfied Clients</h2>
        </div>
        <div class="section-body">
          <p>“Starting my data recovery process with Five Star was incredibly simple. I filled out the online form and got a quote within minutes. The instructions were clear, and the free prepaid shipping label made sending in my drive super convenient. They kept me updated every step of the way, and I had my recovered files back sooner than expected.”</p>
          <p>Emily S.</p>
          <p>Summerlin, NV</p>
          <p>“The team made the whole data recovery process stress-free. From my initial phone call to dropping off my hard drive, they explained everything clearly. Within just a few days, they had recovered all my important files. Highly recommend!”</p>
          <p>Jessica R.</p>
          <p>Austin, TX</p>
          <p>Timothy A.</p>
          <p>New York, NY</p>
        </div>
      </div>
    </section>

    <section class="faq-section section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Frequently Asked Questions</h2>
        </div>
        <div class="faq-list">
          <div v-for="(faq, i) in faqs" :key="i" class="faq-item" :class="{ open: openFaq === i }">
            <button class="faq-question" @click="toggleFaq(i)">
              <span>{{ faq.q }}</span>
              <span class="faq-icon">{{ openFaq === i ? '−' : '+' }}</span>
            </button>
            <div v-if="openFaq === i" class="faq-answer">{{ faq.a }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-band section-bg-2">
      <div class="container cta-band-inner">
        <div>
          <h2 class="cta-title">Need Help With Start Recovery?</h2>
          <p class="cta-sub">Free evaluation. No data, no charge. Contact us today.</p>
        </div>
        <div class="cta-actions">
          <a href="tel:8182728866" class="btn btn-gold">📞 818-272-8866</a>
          <NuxtLink to="/data-recovery/free-quote" class="btn btn-outline-sm">Get Free Quote</NuxtLink>
        </div>
      </div>
    </section>
    <FooterBar />
  </div>
</template>

<style scoped>
.trust-badges { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 8px; }
.badge { background: rgba(255,255,255,0.06); border: 1px solid var(--border); color: var(--white); padding: 7px 14px; border-radius: 20px; font-size: 13px; font-weight: 500; }
.section-pad { padding: 72px 0; }
.section-body p { font-size: 16px; color: var(--muted); line-height: 1.8; margin-bottom: 16px; max-width: 860px; }
.section-body strong { color: var(--white); font-weight: 600; }
.content-list { padding-left: 20px; margin: 12px 0 16px; }
.content-list li { font-size: 15px; color: var(--muted); line-height: 1.7; margin-bottom: 8px; }
.faq-list { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 8px; }
.faq-item { background: var(--card-bg); border: 1px solid var(--border); border-radius: 10px; overflow: hidden; }
.faq-item.open { border-color: var(--gold); }
.faq-question { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; background: none; border: none; color: var(--white); font-size: 16px; font-weight: 600; cursor: pointer; text-align: left; gap: 12px; font-family: var(--font-body); }
.faq-icon { color: var(--gold); font-size: 22px; font-weight: 400; flex-shrink: 0; }
.faq-answer { padding: 0 24px 20px; font-size: 15px; color: var(--muted); line-height: 1.7; }
.cta-band { background: linear-gradient(135deg, #0f1220, #13161F); border-top: 1px solid var(--border); padding: 56px 0; }
.cta-band-inner { display: flex; justify-content: space-between; align-items: center; gap: 32px; flex-wrap: wrap; }
.cta-title { font-family: var(--font-heading); font-size: 28px; font-weight: 900; color: var(--white); margin-bottom: 8px; }
.cta-sub { font-size: 16px; color: var(--muted); }
.cta-actions { display: flex; gap: 16px; flex-wrap: wrap; }
.btn-outline-sm { display: inline-block; padding: 14px 28px; border: 2px solid var(--gold); color: var(--gold); border-radius: 8px; font-weight: 700; font-size: 15px; text-decoration: none; }
.btn-outline-sm:hover { background: rgba(245,200,66,0.1); }
@media (max-width: 768px) { .cta-band-inner { flex-direction: column; } }
</style>
