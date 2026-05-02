<script setup lang="ts">
useSeoMeta({
  title: 'Expedited Data Recovery Service — Five Star Data Recovery',
  description: 'Yes, of course. We understand that some recoveries are time sensitive and need to be completed as soon as possible. We offer an Expedited Service which would pu'
})
const faqs = [
  { q: '1. What is your expedited data recovery service?', a: 'Our expedited service is a rush option available during normal business hours. Your case is moved to the front of the queue, and our engineers start working on your device immediately.' },
  { q: '2. How fast is the turnaround time for expedited service?', a: 'Most expedited cases are completed within 1 to 3 business days, depending on the complexity of the recovery. Some simpler cases may even be finished the same day.' },
  { q: '3. Does expedited service include nights or weekends?', a: 'No. This service only applies to standard business hours, Monday through Friday. If you need after-hours or weekend service, we offer a separate Expedited Plus Service for that level of urgency.' },
  { q: '4. How much does expedited data recovery cost?', a: 'Our expedited service is an additional $200.00 per drive on top of the standard flat-rate data recovery fee. This fee is paid upfront and is non-refundable, regardless of the recovery outcome. It covers the cost of prioritizing your case and dedicating immediate engineering time during business hours.' },
  { q: '5. Will my recovery results be different with expedited service?', a: 'Not at all. The expedited service speeds up the start time and prioritizes your case, but the quality of work and recovery process remains the same as our standard service.' },
  { q: '6. How do I request expedited service?', a: 'Simply let us know when dropping off or shipping your device that you want expedited service. Our team will confirm the fee and prioritize your recovery right away.' }
]
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="Expedited Data Recovery Service"
      subtitle="When time is critical, our Expedited Data Recovery service gives your case immediate priority. Our engineers will begin working on your device right away—without waiting in the standard queue. Whether it’s during business hours, after hours, or on weekends, we offer fast-track options to meet your urgent needs. Every expedited case is handled with the highest level of attention and care to recover your data as quickly as possible."
      description="Yes, of course. We understand that some recoveries are time sensitive and need to be completed as soon as possible. We offer an Expedited Service which would put your case at the top of the que. With our Expedited Service, our Engineers will start working on your data recovery case within an hour of"
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
          <h2 class="section-title">Do you offer a Priority Data Recovery Service?</h2>
        </div>
        <div class="section-body">
          <p>Yes, of course. We understand that some recoveries are time sensitive and need to be completed as soon as possible. We offer an Expedited Service which would put your case at the top of the que. With our Expedited Service, our Engineers will start working on your data recovery case within an hour of drop off, and the case will be handled as a priority within business hours.</p>
          <p>With this service, you are guaranteed a diagnosis within 3 hours of the time you drop off your drive. Your case will be worked on non-stop during normal business hours.</p>
          <p>Data loss is stressful — but working with us doesn’t have to be. Watch how our team handles each recovery with care, professionalism, and precision. From diagnostics to delivery, we offer flat-rate pricing, honest communication, and proven results — all from our secure Glendale lab.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Whats the average turnaround time for Expedited Data Recovery Cases?</h2>
        </div>
        <div class="section-body">
          <p>This all really depends on the exact issue with your drive, along with the amount of data. With our Expedited Service, we can guarantee that the entire process will move forward without any delays, but it’s impossible to give an exact turnaround time.</p>
          <p>IF the issue with your drive is logical (bad sectors, firmware corruption, damaged file system, etc), and you have less than 2TB of data, we should be able to get the data back to you within 2-3 days.</p>
          <p>IF the issue with your drive is mechanical (clicking, beeping, stuck motor, etc), and you have less than 2TB of data, we should be able to get your data back to you within 3-5 days (the delay is for the time needed to source the donor parts).</p>
          <p>IF you have a lot of data on your drive, we can work with you to get you back the most important files needed first, then continue working on the rest of the recovery.</p>
        </div>
      </div>
    </section>
        <section class="process-section section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Data Recovery Process</h2>
          <p class="section-subtitle">Our data recovery process is built around security, transparency, and peace of mind. From start to finish, we keep you informed with clear updates at every stage.</p>
        </div>
        <div class="process-grid">
          <div class="process-card">
            <div class="process-num">01</div>
            <h3 class="process-title">Drop off or Mail in Your Drive</h3>
            <p class="process-desc">Bring your device to our Glendale lab or ship it to us free from anywhere in the U.S.</p>
          </div>
          <div class="process-card">
            <div class="process-num">02</div>
            <h3 class="process-title">Receive a Free Diagnosis</h3>
            <p class="process-desc">Our team will evaluate your device and provide a detailed diagnosis along with an initial quote — completely free of charge and with no obligation to proceed.</p>
          </div>
          <div class="process-card">
            <div class="process-num">03</div>
            <h3 class="process-title">Our Engineers Work on Recovering Your Data</h3>
            <p class="process-desc">We carefully begin the recovery process using advanced tools and cleanroom procedures.</p>
          </div>
          <div class="process-card">
            <div class="process-num">04</div>
            <h3 class="process-title">Review &amp; Approve the Recovered</h3>
            <p class="process-desc">After recovery is complete, you'll receive a detailed file list to review so you can confirm everything important has been successfully recovered.</p>
          </div>
          <div class="process-card">
            <div class="process-num">05</div>
            <h3 class="process-title">Receive Your Recovered Data</h3>
            <p class="process-desc">Once approved, we'll securely transfer your data to a new drive and return it to you via pickup or insured shipping — ready for immediate use.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Testimonials</h2>
        </div>
        <div class="section-body">
          <p>I had a project deadline and my external hard drive failed the night before. I called and opted for their expedited service. The team started the recovery immediately and had my files back within 24 hours. I honestly didn’t expect it to be that fast!</p>
          <p>Jason M.</p>
          <p>Pasadena, CA</p>
          <p>I was impressed with how quickly the engineers prioritized my case. I dropped off my drive in the morning, and by the afternoon I had a full update on the recovery status. They really deliver on their promise of fast service.</p>
          <p>Michael L.</p>
          <p>Los Angeles, CA</p>
          <p>I needed data from a failing SSD for a legal case and time was tight. Their expedited service was worth every penny. The communication was great and I had my recovered data the next day. Highly recommend for any urgent situation!</p>
          <p>Sophia K.</p>
          <p>Glendale, CA</p>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Your Data Stays Secure</h2>
        </div>
        <div class="section-body">
          <p>We understand your files are private. Whether you're recovering sensitive business files or personal memories, we keep your data protected from start to finish.</p>
          <ul class="content-list">
            <li>In-house recovery only — no third-party labs</li>
            <li>All data is securely stored and permanently deleted after final delivery</li>
            <li>NDA available for sensitive projects</li>
            <li>Our lab uses access control and 24/7 surveillance</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Get a Free Quote within Minutes!</h2>
        </div>
        <div class="section-body">

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
          <h2 class="cta-title">Need Help With Expedited Data Recovery Service?</h2>
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

/* Process cards */
.process-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px; margin-top: 40px; }
.process-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 28px 24px; }
.process-num { font-size: 2.5rem; font-weight: 900; color: #C9A84C; line-height: 1; margin-bottom: 12px; }
.process-title { font-size: 1rem; font-weight: 700; color: #fff; margin-bottom: 10px; }
.process-desc { font-size: 0.9rem; color: rgba(255,255,255,0.6); line-height: 1.6; }
/* Review cards */
.reviews-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-top: 40px; }
.review-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 28px; }
.review-stars { color: #C9A84C; font-size: 1.1rem; margin-bottom: 12px; }
.review-text { font-size: 0.95rem; color: rgba(255,255,255,0.75); line-height: 1.7; margin-bottom: 16px; font-style: italic; }
.review-author { font-size: 0.875rem; font-weight: 700; color: #C9A84C; }
/* Feature cards */
.grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; margin-top: 40px; }
.feature-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 28px 24px; }
.feature-icon { font-size: 1.5rem; color: #C9A84C; margin-bottom: 12px; }
.feature-title { font-size: 1rem; font-weight: 700; color: #fff; margin-bottom: 8px; }
.feature-desc { font-size: 0.9rem; color: rgba(255,255,255,0.6); line-height: 1.6; }
/* Issues list */
.issues-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; margin-top: 32px; align-items: start; }
.issues-intro p { font-size: 1rem; color: rgba(255,255,255,0.75); line-height: 1.8; }
.issues-list { list-style: none; padding: 0; margin: 0; }
.issues-list li { padding: 10px 0 10px 28px; position: relative; font-size: 0.95rem; color: rgba(255,255,255,0.75); border-bottom: 1px solid rgba(255,255,255,0.06); }
.issues-list li::before { content: '✓'; position: absolute; left: 0; color: #C9A84C; font-weight: 700; }
/* Content text sections */
.content-narrow { max-width: 860px; margin: 0 auto; }
.content-title { font-size: 1.75rem; font-weight: 800; color: #fff; margin-bottom: 24px; }
.content-narrow p { font-size: 1rem; color: rgba(255,255,255,0.75); line-height: 1.8; margin-bottom: 18px; }
.secure-list { list-style: none; padding: 0; margin: 0; }
.secure-list li { padding: 8px 0 8px 24px; position: relative; font-size: 0.95rem; color: rgba(255,255,255,0.75); }
.secure-list li::before { content: '→'; position: absolute; left: 0; color: #C9A84C; }
/* CTA extensions */
.cta-list { list-style: none; padding: 0; margin: 0 0 24px; }
.cta-list li { padding: 6px 0 6px 24px; position: relative; font-size: 0.95rem; color: rgba(255,255,255,0.75); }
.cta-list li::before { content: '→'; position: absolute; left: 0; color: #C9A84C; }

</style>
