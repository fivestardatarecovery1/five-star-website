<script setup lang="ts">
useSeoMeta({
  title: 'Data Recovery Beverly Hills, CA — Five Star Data Recovery',
  description: 'When critical data goes missing, trust Five Star Data Recovery to help recover what you thought was lost forever. We offer expert data recovery services for cus'
})
const faqs = [
  { q: '1. Do you offer data recovery services specifically in Beverly Hills?', a: 'Yes! While our main lab is located nearby, we proudly offer professional data recovery services in Beverly Hills with free same-day pickup. Whether it’s a failed hard drive, SSD, iPhone, or RAID system, our team is ready to help recover your data quickly and securely.' },
  { q: '2. How fast can you recover data for Beverly Hills customers?', a: 'Most standard Beverly Hills data recovery cases are completed within 3–5 business days . For urgent needs, we also offer Expedited and Expedited Plus services with 24/7 priority support. Call us for a free phone consultation.' },
  { q: '3. What types of devices can you recover data from in Beverly Hills?', a: 'We specialize in recovering data from: External and internal hard drives Solid-state drives (SSDs) iPhones and Android devices USB flash drives SD cards RAID and NAS systems Whatever your storage device, our data recovery experts in Beverly Hills can help.' },
  { q: '4. Is there a fee if you can’t recover my data?', a: 'We follow a No Data, No Charge policy for most standard recoveries in Beverly Hills. You only pay if we successfully recover your files. Some exceptions apply, such as deleted file cases or previously tampered drives.' },
  { q: '5. Do you provide free pickup in Beverly Hills for data recovery?', a: 'Yes! We offer free same-day pickup in Beverly Hills for all data recovery jobs. Just give us a call or fill out our request form, and we’ll arrange secure transportation of your device to our lab.' },
  { q: '6. What makes your Beverly Hills data recovery service different from others?', a: 'We stand out with our transparent flat-rate pricing , no data, no charge policy , and in-house recovery lab. Unlike many companies, we never outsource—we perform all recoveries ourselves to maintain the highest success rate and confidentiality for our Beverly Hills data recovery clients .' },
  { q: '7. Can you recover data from physically damaged hard drives in Beverly Hills?', a: 'Yes, we specialize in physically damaged drive recovery. Whether your drive is clicking, not powering on, or has water or impact damage, our data recovery engineers near Beverly Hills are equipped with cleanroom tools to handle complex cases.' },
  { q: '8. How secure is your data recovery process for Beverly Hills clients?', a: 'We prioritize data privacy and security. All Beverly Hills data recovery cases are handled in a secure environment, and your files are never shared or stored beyond the recovery process. Confidentiality agreements are also available upon request.' },
  { q: '9. Do you recover data from iPhones and smartphones in Beverly Hills?', a: 'Yes! We offer component-level iPhone data recovery in Beverly Hills and can recover data even from non-booting or physically damaged iPhones. Whether you need a full iTunes backup or file extraction, we’re here to help.' },
  { q: '10. How do I get started with your Beverly Hills data recovery service?', a: 'Getting started is easy. Call us for a free consultation or request a free same-day pickup in Beverly Hills. You can also mail your device or visit our lab. Once we receive it, we’ll provide a diagnostic and begin recovery as soon as you approve.' }
]
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="Data Recovery Beverly Hills, CA"
      subtitle="Get Your Data Back In No Time."
      description="When critical data goes missing, trust Five Star Data Recovery to help recover what you thought was lost forever. We offer expert data recovery services for customers in Beverly Hills, CA and surrounding areas. We’re located just a short distance from Beverly Hills and provide free same-day pickup t"
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

        <section class="process-section section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">The Recovery Process</h2>
        </div>
        <div class="process-grid">
          <div class="process-card">
            <div class="process-num">01</div>
            <h3 class="process-title">Initial Device Check-Up and DiagnosticsWe begin by inspecting the device in a safe environment to determine the cause of failure</h3>
            <p class="process-desc"></p>
          </div>
          <div class="process-card">
            <div class="process-num">02</div>
            <h3 class="process-title">Non-Invasive Cloning of the DeviceOur first recovery step is always to clone the original drive sector by sector.</h3>
            <p class="process-desc"></p>
          </div>
          <div class="process-card">
            <div class="process-num">03</div>
            <h3 class="process-title">File System and Data RepairAfter cloning, we analyze and rebuild the file system.</h3>
            <p class="process-desc"></p>
          </div>
          <div class="process-card">
            <div class="process-num">04</div>
            <h3 class="process-title">Client Review and ApprovalYou’ll receive a full list of the recovered files to review.</h3>
            <p class="process-desc"></p>
          </div>
          <div class="process-card">
            <div class="process-num">05</div>
            <h3 class="process-title">Final Delivery or Secure UploadYour recovered data is returned to you.</h3>
            <p class="process-desc"></p>
          </div>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Devices We Support</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>USB Drives, SSDs, and HDD Storage - From portable USB flash drives to internal and external hard drives (both solid-state and spinning disks).</li>
            <li>SD, microSD, and CF Cards - We recover lost files from memory cards used in cameras, phones, drones, and other digital devices.</li>
            <li>RAID Arrays - Our engineers specialize in RAID data recovery for RAID 0, 1, 5, 10, and hybrid configurations.</li>
            <li>iPhones (Component-Level Recovery) - We perform advanced hardware-level recovery on iPhones that have suffered severe physical damage or liquid exposure.</li>
            <li>MacBooks &amp; iMacs (Component-Level Recovery)If your Apple device won’t turn on due to logic board damage, we can perform board level repairs to retrieve your data.</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What customers Say</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Get a Free Quote within Minutes!</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Quick and Secure Data Recovery</li>
            <li>Expert Engineers for All Devices</li>
            <li>No Data, No Fee Guarantee</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Ready to Start?</h2>
        </div>
        <div class="section-body">
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
          <h2 class="cta-title">Need Help With Data Recovery Beverly Hills, CA?</h2>
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
