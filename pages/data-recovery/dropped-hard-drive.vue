<script setup lang="ts">
useSeoMeta({
  title: 'Dropped Hard Drive Recovery Services — Five Star Data Recovery',
  description: 'At Five Star Data Recovery, we use advanced cleanroom equipment and tools designed specifically for recovering data from physically damaged hard drives.'
})
const faqs = [
  { q: '1. What should I do immediately after dropping my hard drive?', a: 'If your hard drive has been dropped, power it off immediately and avoid trying to turn it back on. Running a damaged drive can worsen internal damage, especially if the read/write heads are misaligned. Call us right away at Five Star Data Recovery so we can guide you through the safest next steps and help prevent permanent data loss.' },
  { q: '2. Can you recover data from a drive that is clicking after being dropped?', a: 'Yes. A clicking sound usually indicates internal damage to the read/write heads or actuator arm, which often occurs when a drive is dropped. Most of the time, we can recover the data using clean room tools and donor parts. The main deciding factor in whether the data is recoverable is the condition of the platters —which depends on how many times the drive was powered on after the drop. The fewer attempts made to power it on, the higher the chances of a successful recovery.' },
  { q: '3. Is it safe to use data recovery software on a dropped hard drive?', a: 'No. Using DIY data recovery software on a physically damaged drive can lead to further data loss or permanent damage. If your drive has been dropped and is showing signs of failure (clicking, not spinning, or not recognized), it’s best to consult a professional recovery service.' },
  { q: '4. How much does dropped hard drive recovery cost?', a: 'We offer flat-rate pricing for dropped hard drive recovery, with rates depending on the type and extent of physical damage. There are no hidden fees, and diagnostics are always free. You only pay if we successfully recover your data.' },
  { q: '5. Can data still be recovered if the drive was dropped while in use?', a: 'Yes. Drives that were dropped while powered on are more likely to suffer internal damage, such as head crashes or platter contact—but recovery is often still possible. At Five Star Data Recovery, the process does not begin with imaging for mechanically damaged drives. Instead, we start with a clean room inspection to assess internal damage. If the read/write heads are physically damaged, they must be replaced using compatible donor parts before we can safely proceed. Once the new heads are installed, we begin carefully imaging or cloning the drive sector by sector to recover your data safely and effectively.' },
  { q: '6. How long does dropped hard drive data recovery take?', a: 'Most recoveries take 3–5 business days, depending on the severity of the damage. We also offer Expedited and Expedited Plus services for urgent situations, giving your case immediate priority—even after hours or on weekends.' },
  { q: '7. Will I get a list of the recovered files before I pay?', a: 'Yes. Once we complete the recovery process, we’ll provide you with a detailed file list showing exactly what was recovered. At that point, you can choose whether or not to move forward with the recovery . If you decide not to proceed, you pay nothing . However, once you approve the recovery and we deliver the data, payment is required in full.' }
]
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="Dropped Hard Drive Recovery Services"
      subtitle="Accidentally dropped your hard drive? At Five Star Data Recovery, we specialize in recovering data from physically damaged drives using advanced tools and Class 100 clean room technology. Whether your drive is clicking, not spinning, or not being recognized, our engineers can diagnose and recover your data safely. We offer flat-rate pricing, free diagnostics, and a strict no data, no charge policy."
      description="At Five Star Data Recovery, we use advanced cleanroom equipment and tools designed specifically for recovering data from physically damaged hard drives."
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
          <h2 class="section-title">How We Recover Data from a Dropped External HDD</h2>
        </div>
        <div class="process-grid">
          <div class="process-card">
            <div class="process-num">01</div>
            <h3 class="process-title">Free Diagnostic Evaluation</h3>
            <p class="process-desc"></p>
          </div>
          <div class="process-card">
            <div class="process-num">02</div>
            <h3 class="process-title">Cleanroom Repair</h3>
            <p class="process-desc"></p>
          </div>
          <div class="process-card">
            <div class="process-num">03</div>
            <h3 class="process-title">Imaging the Drive</h3>
            <p class="process-desc"></p>
          </div>
          <div class="process-card">
            <div class="process-num">04</div>
            <h3 class="process-title">Data Extraction</h3>
            <p class="process-desc"></p>
          </div>
          <div class="process-card">
            <div class="process-num">05</div>
            <h3 class="process-title">File Verification and Delivery</h3>
            <p class="process-desc"></p>
          </div>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Why Choose Five Star Data Recovery?</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Certified cleanroom for mechanical repairs</li>
            <li>Flat-rate pricing and free diagnostic</li>
            <li>No data, no charge guarantee</li>
            <li>Fast turnaround options, including expedited service</li>
            <li>Transparent communication every step of the way</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Real-World Examples</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>A client dropped their 2TB WD external hard drive down a flight of stairs. It began making a clicking hard drive noise and wasn’t recognized by their Mac. We replaced the damaged head stack in our cleanroom and successfully recovered 98% of the data.</li>
            <li>A wedding photographer brought in a dropped external hard drive containing all footage from a recent event. Despite internal damage, we were able to recover all photo and video files within 48 hours using expedited recovery service.</li>
            <li>A university researcher lost 4 years of data after the drive fell off their desk. We imaged the failing disk and recovered data even from areas affected by bad sectors.</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">How to Avoid Future Data Loss</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Always use a padded case when carrying your external drive</li>
            <li>Avoid placing it on edges or unstable surfaces</li>
            <li>Use drives with drop-resistant housing</li>
            <li>Back up important files regularly to a cloud or second device</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Ready to Recover Your Dropped Hard Drive?</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Types of Dropped Drives We Recover</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Western Digital (WD) My Passport and Elements drives</li>
            <li>Seagate Backup Plus and Expansion drives</li>
            <li>Toshiba Canvio drives</li>
            <li>LaCie rugged external drives</li>
            <li>G-Technology portable drives</li>
            <li>Internal laptop and desktop HDDs (2.5" and 3.5")</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What Gets Damaged Inside When a Drive Is Dropped?</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Read/Write Head Crash: The head may land on the platter, scratching the surface and making data unreadable.</li>
            <li>Actuator Arm Misalignment: The moving arm that holds the head may get stuck or misaligned, causing clicking or buzzing sounds.</li>
            <li>Spindle Motor Failure: If the impact is hard enough, the spindle that spins the platters may get damaged or stop functioning.</li>
            <li>Firmware Corruption: Sudden power loss or mechanical impact can corrupt firmware stored on the disk’s ROM chip.</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Expedited Recovery Options for Urgent Cases</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Serving Clients Nationwide</h2>
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
          <h2 class="section-title">Testimonials from Satisfied Clients</h2>
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
          <h2 class="cta-title">Need Help With Dropped Hard Drive Recovery Services?</h2>
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
