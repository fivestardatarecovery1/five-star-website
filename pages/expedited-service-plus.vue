<script setup lang="ts">
useSeoMeta({
  title: 'Expedited Service Plus — Five Star Data Recovery',
  description: 'Need your data recovered as quickly as possible? Our Expedited Service Plus guarantees that your case is worked on immediately — 24/7, including nights, weekend'
})
const faqs = [
  { q: '1. What is Expedited Plus Data Recovery?', a: 'Expedited Plus is our highest-priority data recovery service, designed for urgent cases that require immediate attention. Your case is handled 24/7—including nights, weekends, and holidays—by our top-tier engineers. If your data recovery can’t wait, this is the fastest and most dedicated solution we offer.' },
  { q: '2. How is Expedited Plus different from your regular Expedited Service?', a: 'While our standard Expedited Service prioritizes your case during business hours, Expedited Plus goes beyond that. This service guarantees continuous, around-the-clock recovery efforts from the moment your device arrives at our lab. It’s ideal for critical business needs, time-sensitive data, or personal emergencies.' },
  { q: '3. How much does Expedited Plus Data Recovery cost?', a: 'The cost for our Expedited Plus Data Recovery service is $500.00 per drive or device, paid upfront and non-refundable regardless of the results. This fee is in addition to the standard data recovery fee and helps cover the extra resources, after-hours labor, and dedicated priority handling required to work on your case 24/7—including nights, weekends, and holidays.' },
  { q: '4. What types of devices are eligible for Expedited Plus?', a: 'We can perform Expedited Plus Data Recovery on hard drives, SSDs, RAID systems, iPhones, flash drives, and most other storage devices. This service is available for both physically damaged and logically failed devices.' },
  { q: '5. How long does Expedited Plus Data Recovery take?', a: 'Turnaround time for Expedited Plus Data Recovery typically ranges from a few hours to a couple of days, depending on the complexity of the case and the amount of data involved. If you urgently need just a few critical files to continue working, our engineers can prioritize and recover those files as quickly as humanly possible, while continuing to work on the full recovery in the background. This service ensures zero downtime, direct communication with a dedicated engineer, and continuous 24/7 recovery efforts until your case is complete.' },
  { q: '6. Is there a success guarantee with Expedited Plus?', a: 'The success rate of your recovery is the same whether you choose our Expedited Plus, Expedited Service, or Standard Service. The only difference between the service levels is turnaround time and priority handling—not the recovery outcome itself. Success largely depends on the condition of the device when it arrives at our lab. If the drive or device hasn’t been tampered with after failure, success rates are typically 98% or higher. However, if there have been multiple recovery attempts or further damage caused after the initial failure, the chances of a successful recovery can decrease.' },
  { q: '7. Can I ship my device for Expedited Plus Recovery?', a: 'Yes, absolutely. When you choose our Expedited Plus service, we provide free overnight shipping both ways to ensure the fastest turnaround possible. If the critical files you need are not too large, we can also upload the recovered files for immediate access while the full data transfer is being completed. This way, you can get back to work without delay.' },
  { q: '8. Do you provide updates throughout the Expedited Plus process?', a: 'Yes. With Expedited Plus, you’ll receive regular updates from our engineers and direct communication regarding the progress of your recovery. You’re never left in the dark.' },
  { q: '9. When should I choose Expedited Plus over standard service?', a: 'Choose Expedited Plus when time is critical. Whether you’re facing a business deadline, legal matter, or need emergency data recovery, this service ensures that your case gets uninterrupted attention from our most experienced recovery engineers.' }
]
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="Expedited Service Plus"
      subtitle="Get Your Data Back In No Time."
      description="Need your data recovered as quickly as possible? Our Expedited Service Plus guarantees that your case is worked on immediately — 24/7, including nights, weekends, and holidays. It’s the fastest and most dedicated recovery option we offer, ideal for urgent business needs or personal emergencies. With"
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
          <h2 class="section-title">What is Expedited Service Plus?</h2>
        </div>
        <div class="section-body">
          <p>At Five Star Data Recovery we’re happy to announce we now offer Expedited Service Plus. Is your recovery EXTREMELY time sensitive? Do you need a GUARANTEE that your case will be worked on diligently 24/7 to ensure you can meet your deadline? Then this service is for you.</p>
          <p>With our Expedited Service Plus, our Data Recovery Engineers will work on your case non-stop. They will start as soon as it arrives at our lab and continue until you get your data back. These cases do run 24/7, including nights, holidays, and weekends.</p>
          <p>We offer flat rate pricing for this service based on how long we believe the case will take. This fee is in addition to any Flat Rate Data Recovery costs. It’s hard to know exactly how much this service will cost. However, our Engineers can give you a good estimate after the initial diagnosis. Services start at $500.00 per drive.</p>
          <p>Simply provide the following information:</p>
          <ul class="content-list">
            <li>Is the drive clicking?</li>
            <li>Is the drive beeping?</li>
            <li>While connected, does Disk Utility or Disk Management recognize the drive?</li>
            <li>Has the drive been dropped?</li>
            <li>What make/model is the drive?</li>
            <li>What is the storage capacity of the drive?</li>
            <li>How much data needs to be recovered?</li>
            <li>What type of files are we recovering? (file extensions)</li>
          </ul>
          <p>(Please do not try to diagnose the drive yourself. Power down the drive and put it safely aside before you do anything).</p>
          <p>(Please be 100% honest and upfront about the events that led to your drive failing. Let us know if the drive has been acting up recently as well as any unusual activities you’ve realized with the drive before it failed. This will help keep the cost of the recovery MUCH lower since we’ll know exactly what the issue is and take the safest and quickest approach to recovering the data).</p>
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
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Get a Free Quote within Minutes!</h2>
        </div>
        <div class="section-body">
          <p>Our expert engineers use advanced technology to recover your data quickly and securely. We specialize in complex cases with high success rates, offering tailored solutions for both businesses and individuals. Fill out the form to start a seamless recovery process.</p>
          <ul class="content-list">
            <li>Quick and Secure Data Recovery</li>
            <li>Expert Engineers for All Devices</li>
            <li>No Data, No Fee Guarantee</li>
          </ul>
          <p>Contact our specialists today for a quick, hassle-free recovery. We’re here to guide you every step of the way and ensure your data is securely restored. Your peace of mind is our priority.</p>
          <p>Data loss is stressful — but working with us doesn’t have to be. Watch how our team handles each recovery with care, professionalism, and precision. From diagnostics to delivery, we offer flat-rate pricing, honest communication, and proven results — all from our secure Glendale lab.</p>
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
          <h2 class="cta-title">Need Help With Expedited Service Plus?</h2>
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
