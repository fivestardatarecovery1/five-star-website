<script setup lang="ts">
useSeoMeta({
  title: 'Hitachi Data Recovery Services — Five Star Data Recovery',
  description: 'If your Hitachi hard drive has stopped working, is making clicking noises, or simply isn’t being detected, don’t panic—there’s still hope. At Five Star Data Rec'
})
const faqs = [
  { q: '1. Do you recover data from all types of Hitachi hard drives?', a: 'Yes, we recover data from Hitachi internal and external hard drives, including both consumer-grade and enterprise-level models. Whether you’re dealing with an old Deskstar or a newer Ultrastar series, our experts are trained in Hitachi data recovery techniques.' },
  { q: '2. Can you recover data from Hitachi drives that were part of a RAID array?', a: 'Absolutely. Our lab specializes in RAID data recovery, including arrays that contain Hitachi drives. We support all RAID levels (RAID 0, 1, 5, 10, etc.) and always clone the drives before working on them to ensure data integrity.' },
  { q: '3. My Hitachi drive is not recognized by my computer — can you still recover the data?', a: 'Yes. A Hitachi hard drive not showing up can be due to logical issues, firmware corruption, or physical damage. In most cases, our diagnostics will determine the cause, and we’ll use the appropriate methods to recover the data from your Hitachi drive.' },
  { q: '4. What if my Hitachi drive was making clicking noises before it failed?', a: 'A clicking sound usually points to mechanical failure, which is common with failing Hitachi drives. We perform cleanroom recoveries for these types of issues, allowing us to repair internal components and safely extract your data.' },
  { q: '5. How long does Hitachi data recovery take?', a: 'Typical turnaround time is 3–5 business days, but it can vary based on the issue. We also offer Expedited and Expedited Plus services for urgent Hitachi data recovery cases. Contact us for a quote and timeline tailored to your specific situation.' },
  { q: '6. Can you recover data from Hitachi drives with bad sectors?', a: 'Yes. Bad sectors on Hitachi hard drives are a common failure type, and our engineers are experienced in handling them. We use sector-by-sector cloning to isolate the healthy portions of the drive and maximize data recovery results.' },
  { q: '7. Do you recover data from encrypted Hitachi hard drives?', a: 'Yes, we can recover data from BitLocker or third-party encrypted Hitachi drives as long as the correct encryption key or password is provided. Our secure systems are designed to handle encrypted data safely and confidentially.' }
]
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="Hitachi Data Recovery Services"
      subtitle=""
      description="If your Hitachi hard drive has stopped working, is making clicking noises, or simply isn’t being detected, don’t panic—there’s still hope. At Five Star Data Recovery, we specialize in professional Hitachi Data Recovery for individuals and businesses who need to get their important files back quickly"
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
          <h2 class="section-title">Common Causes of Hitachi Drive Failure</h2>
        </div>
        <div class="section-body">
          <p>There are many reasons your Hitachi hard drive might fail. Understanding what wentwrong can help us recover more data and prevent future issues. Some of the mostcommon causes include:</p>
          <ul class="content-list">
            <li>Physical damage from drops, impacts, or overheating</li>
            <li>Bad sectors that prevent the drive from reading or writing data</li>
            <li>Firmware corruption or manufacturing defects</li>
            <li>Accidental deletion or formatting of partitions</li>
            <li>Power surges and electrical issues</li>
            <li>File system corruption due to sudden shutdowns or software crashes</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Signs of Hitachi Hard Drive Failure</h2>
        </div>
        <div class="section-body">
          <p>If you notice any of the following symptoms, it’s best to stop using the drive immediately and contact a recovery expert:</p>
          <ul class="content-list">
            <li>Clicking, beeping, or grinding noises</li>
            <li>The drive is not detected by your system</li>
            <li>Extremely slow file transfers or system freezes</li>
            <li>Sudden appearance of missing files or folders</li>
            <li>Messages asking to format the drive</li>
            <li>Drive visible in Disk Management but inaccessible</li>
          </ul>
          <p>Continuing to use a failing drive increases the chance of permanent drive data loss.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Types of Hitachi Drives We Support</h2>
        </div>
        <div class="section-body">
          <p>Our team provides data recovery services for all types of Hitachi drives, including:</p>
          <ul class="content-list">
            <li>Desktop and laptop internal HDDs</li>
            <li>Portable external hard drives</li>
            <li>Enterprise-level Hitachi drives used in servers and data centers</li>
            <li>RAID arrays containing Hitachi components</li>
            <li>USB-connected storage devices</li>
          </ul>
          <p>No matter the drive type, we can help with hitachi hard disk data recovery for a wide range of systems and storage capacities.</p>
        </div>
      </div>
    </section>
        <section class="process-section section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Hitachi Data Recovery Process</h2>
          <p class="section-subtitle">When you bring your drive to us, we begin with a full diagnostic to determine the extent of the issue. Here's what you can expect:</p>
        </div>
        <div class="process-grid">
          <div class="process-card">
            <div class="process-num">01</div>
            <h3 class="process-title">Free Diagnostic</h3>
            <p class="process-desc">We assess the health of the drive and confirm whether it's a logical or physical failure.</p>
          </div>
          <div class="process-card">
            <div class="process-num">02</div>
            <h3 class="process-title">Cloning</h3>
            <p class="process-desc">If the drive is unstable, we create a complete clone to avoid further wear on the original.</p>
          </div>
          <div class="process-card">
            <div class="process-num">03</div>
            <h3 class="process-title">File System Repair</h3>
            <p class="process-desc">For logical problems like file system corruption, we use advanced tools to reconstruct the partition.</p>
          </div>
          <div class="process-card">
            <div class="process-num">04</div>
            <h3 class="process-title">File Recovery</h3>
            <p class="process-desc">We extract recoverable files and check for lost files, folder structures, and data consistency.</p>
          </div>
          <div class="process-card">
            <div class="process-num">05</div>
            <h3 class="process-title">Verification</h3>
            <p class="process-desc">You'll receive a preview of the recovered content before final delivery. We work to recover as much data as possible while maintaining the integrity of your original hitachi hard drive data.</p>
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
          <p>We know that losing important data can be stressful. That’s why we’ve built a process that’s fast, secure, and customer-friendly:</p>
          <ul class="content-list">
            <li>Cleanroom environment for handling physically damaged drives</li>
            <li>Transparent pricing and no hidden fees</li>
            <li>“No Data, No Charge” policy for most recoveries</li>
            <li>High recovery rates for lost data from external hard drives</li>
            <li>Experience with thousands of successful drive data recovery cases</li>
            <li>Free round-trip shipping available nationwide</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What Not to Do if Your Hitachi Drive Fails</h2>
        </div>
        <div class="section-body">
          <p>Trying to fix a damaged hard drive yourself can often do more harm than good. Here are a few things to avoid:</p>
          <ul class="content-list">
            <li>Don’t run free recovery tools if the drive is making noises</li>
            <li>Don’t reformat or partition the drive</li>
            <li>Avoid opening the drive casing—this should only be done in a cleanroom</li>
            <li>Stop trying to copy data if the drive keeps disconnecting</li>
          </ul>
          <p>Our team can help recover data without risking further drive data loss or overwriting your files.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Start YourRecovery Today</h2>
        </div>
        <div class="section-body">
          <p>If your drive is failing or already dead, contact Five Star Data Recovery today. We offer industry-leading data recovery services for all Hitachi models.</p>
          <p>Whether you’re dealing with bad sectors, lost files, or physical damage, our engineers are ready to help. We’ve recovered files from drives others considered a lost cause.</p>
          <p>Let us help you safely and securely recover data from Hitachi drives. Start your recovery with a free diagnostic—your data could still be recoverable.</p>
          <p>Data loss is stressful — but working with us doesn’t have to be. Watch how our team handles each recovery with care, professionalism, and precision. From diagnostics to delivery, we offer flat-rate pricing, honest communication, and proven results — all from our secure Glendale lab.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Real Case Example: Recovering Hitachi Drive for a Design Studio</h2>
        </div>
        <div class="section-body">
          <p>A graphic design studio recently contacted us after a Hitachi external drive holding years of client work stopped mounting. The drive wasn’t showing up in Explorer, but could still be seen in Disk Management. Clicking sounds were coming from the unit, and many of the folders were missing.</p>
          <p>After a full diagnostic, we discovered the drive had multiple bad sectors and a failing read/write head. We immediately cloned the drive and recovered over 95% of their project files, including layered PSDs, Illustrator files, and client invoices. The entire recovery was completed within 5 business days.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Support for Businesses and Individuals</h2>
        </div>
        <div class="section-body">
          <p>Whether you're a student who lost years of work or a business with terabytes of client data, we handle every recovery with care. We work with:</p>
          <ul class="content-list">
            <li>Creative professionals (photographers, designers, editors)</li>
            <li>Medical offices and law firms with sensitive records</li>
            <li>IT administrators and small business owners</li>
            <li>Personal users with family photos, tax records, and more</li>
          </ul>
          <p>No recovery is too big or too small. If your Hitachi drive holds valuable data, we can help retrieve it.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Nationwide Hitachi Data Recovery – Free Shipping</h2>
        </div>
        <div class="section-body">
          <p>Although our lab is based in Los Angeles, we offer free round-trip shipping for customers across the United States. Simply open a case online, print your shipping label, and send in your device. Once your recovery is complete, we’ll ship your recovered data back to you on a new external drive.</p>
          <p>Your hitachi hard drive data is handled with care every step of the way, no matter where you're located.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Testimonials from Satisfied Clients</h2>
        </div>
        <div class="section-body">
          <div class="reviews-grid">
            <div class="review-card">
              <div class="review-stars">★★★★★</div>
              <p class="review-text">"My Hitachi external hard drive suddenly stopped showing up, and I was devastated thinking years of photos were gone. Five Star Data Recovery not only diagnosed the issue quickly but also recovered 100% of my data. The process was smooth, and they kept me informed every step of the way. Highly recommended for anyone dealing with Hitachi drive issues!"</p>
              <div class="review-author">Michael R. — Seattle, WA</div>
            </div>
            <div class="review-card">
              <div class="review-stars">★★★★★</div>
              <p class="review-text">"I had a Hitachi laptop drive with bad sectors, and my local computer shop told me it wasn’t recoverable. Five Star Data Recovery proved them wrong! They were able to recover almost 92% of my files, including some important business documents. The flat-rate pricing was upfront, and there were no surprises. Excellent service from start to finish."</p>
              <div class="review-author">Sarah T. — Chicago, IL</div>
            </div>
            <div class="review-card">
              <div class="review-stars">★★★★★</div>
              <p class="review-text">"My Hitachi hard drive was making a clicking noise after I dropped it, and I knew it was serious. Five Star’s clean room service saved the day. They replaced the internal parts and got my data back within a week. I was especially impressed with their no data, no charge policy. Great experience and true experts when it comes to Hitachi data recovery."</p>
              <div class="review-author">David N. — Glendale, CA</div>
            </div>
          </div>
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
          <h2 class="cta-title">Need Help With Hitachi Data Recovery Services?</h2>
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
