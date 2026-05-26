<script setup lang="ts">
useSeoMeta({
  title: 'Data Recovery Services in Burbank CA - Five Star Data Recovery',
  ogTitle: 'Data Recovery Burbank',
  description: 'Need Data Recovery Services near the Burbank, CA area? Our team can help you recover your lost data. Contact us for a free diagnosis!',
  ogDescription: 'Need Data Recovery Services near the Burbank, CA area? Our team can help you recover your lost data. Contact us for a free diagnosis!',
})

const trustBadges = [
  { icon: 'clock', text: 'Available 24/7/365' },
  { icon: 'check', text: 'No Data = No Charge' },
  { icon: 'shield', text: '10+ Years in Business' },
  { icon: 'star', text: 'Free Nationwide Shipping' },
]

const reviews = [
  {
    text: 'I run a small video production company in Burbank and my primary editing drive died with an entire client project on it. Five Star had free pickup within hours and recovered every single file. Their pricing was fair and the communication was excellent throughout. Highly recommended for anyone in the industry.',
    name: 'Stephanie B.',
    location: 'Burbank, CA',
  },
  {
    text: "My laptop stopped recognizing its internal hard drive and I couldn't afford to lose the files inside. Five Star did a free diagnostic, gave me a flat-rate quote with no surprises, and had my data back in 3 days. They even delivered the recovered drive to my Burbank office. Outstanding service.",
    name: 'Mark T.',
    location: 'Burbank, CA',
  },
  {
    text: 'After dropping my external hard drive, I assumed my photos and videos were gone forever. Five Star assessed it in their cleanroom and recovered almost everything. The team was professional and patient with all my questions. I would not go anywhere else for data recovery.',
    name: 'Carla R.',
    location: 'Burbank, CA',
  },
]

const faqs = [
  {
    q: 'Do you have a data recovery lab in Burbank, CA?',
    a: "Our certified lab is located in Glendale, CA — just minutes from Burbank. We offer free local pickup in Burbank so you never have to leave your home or office. Simply call us to schedule and we'll handle the rest.",
  },
  {
    q: 'What kinds of data loss do you handle for Burbank clients?',
    a: 'We handle all types of data loss including mechanical hard drive failure, SSD failure, accidental deletion, RAID array failure, water or physical damage, and corrupted storage media. No case is too complex for our certified engineers.',
  },
  {
    q: 'How long does data recovery take?',
    a: 'Standard cases typically take 3–5 business days. We also offer <a href="/expedited-service" class="faq-link">Expedited Service</a> for priority business-hour recovery and <a href="/expedited-service-plus" class="faq-link">Expedited Service Plus</a> for 24/7 around-the-clock recovery when time is critical.',
  },
  {
    q: 'Do you offer a No Data, No Charge guarantee?',
    a: 'Yes — our No Data, No Charge (most cases) policy means if we cannot recover your data, you will not be charged for the recovery service. The free diagnostic is always included at no cost.',
  },
  {
    q: 'How much does data recovery cost in Burbank?',
    a: 'We use flat-rate pricing with no hidden fees. Recovery costs typically range from $300 to $950 depending on the device and failure type. All pricing is disclosed upfront after your free diagnosis before any work begins.',
  },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <HeroSection
      title="Professional Data Recovery Services in Burbank, CA"
      description="Five Star Data Recovery proudly serves businesses, content creators, and residents throughout Burbank, CA. Whether you've lost precious photos from an external drive or need urgent RAID recovery for your production team, our certified cleanroom lab is just minutes away — and offers free local pickup for Burbank clients. Simply give us a call or create a request on our website, and we'll handle the rest."
      bgImage="/data-recovery-burbank-ca.jpg"
      :trustBadges="trustBadges"
    />

    <StatsBar />

    <!-- SECTION 1 — s-white: two-col-layout -->
    <section class="s-white">
      <div class="container two-col-layout">
        <div>
          <h2 class="s-heading">What Is Data Recovery?</h2>
          <p class="s-body">Data recovery is the process of retrieving inaccessible, lost, corrupted, damaged, or formatted data from storage devices when it cannot be accessed normally. At Five Star Data Recovery, our certified engineers use advanced tools, a dedicated cleanroom, and years of experience to recover data from virtually any storage device under any failure condition.</p>
          <p class="s-body">Whether your hard drive has physically failed, your SSD is unresponsive, or your RAID array has crashed — data recovery is often possible. The key is to stop using the device immediately and contact a professional as soon as possible to maximize recovery chances.</p>
        </div>
        <div>
          <h2 class="s-heading">Common Scenarios We Handle in Burbank</h2>
          <ul class="content-list">
            <li>A photographer near Magnolia Blvd lost 5 years of Lightroom catalogs from an external Seagate drive — 100% recovered.</li>
            <li>A post-production company's RAID 5 failed mid-project. We cloned all drives and rebuilt their file system in under 3 days.</li>
            <li>A local home user had a dead WD Blue hard drive from an old desktop — all family photos retrieved.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- SECTION 2 — s-grey: We Specialize in Recovering Data From -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">We Specialize in Recovering Data From:</h2>
        <ul class="content-list">
          <li>Clicking or non-powering hard drives (HDDs)</li>
          <li>Solid State Drives (SSDs) with no response</li>
          <li>Water-damaged or dead iPhones</li>
          <li>Failed RAID 0, 1, 5, 6, or 10 arrays</li>
          <li>USB flash drives &amp; SD cards from DSLRs or video equipment</li>
          <li>Encrypted drives and BitLocker devices</li>
        </ul>
      </div>
    </section>

    <!-- SECTION 3 — s-white: Physical Damage + 3-Step Process -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Physical Damage? We Can Help.</h2>
        <p class="s-body">Our ISO 5 certified cleanroom allows our engineers to safely open and work on physically damaged hard drives in a particle-controlled environment. Whether your drive was dropped, submerged in water, or suffered an electrical surge, we have the capability to handle it. Don't attempt DIY repairs — contact us first for a free evaluation.</p>

        <h2 class="s-heading" style="margin-top: 48px;">Our 3&#8209;Step Recovery Process</h2>
        <div class="process-steps">
          <div class="process-step">
            <div class="step-num">1</div>
            <div>
              <h3 class="step-title">Free Diagnostic &amp; Quote</h3>
              <p class="step-body">We evaluate your device at no charge and provide a full diagnosis with transparent flat-rate pricing — no surprises, no hidden fees.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">2</div>
            <div>
              <h3 class="step-title">Data Recovery in Our Lab</h3>
              <p class="step-body">Once you approve the quote, our certified engineers begin the recovery process using professional tools and our ISO 5 cleanroom as needed.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">3</div>
            <div>
              <h3 class="step-title">Your Data Delivered</h3>
              <p class="step-body">After you review and approve the recovered file list, we transfer your data to a new drive and return it to you via pickup or insured shipping.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- REVIEWS -->
    <ReviewsSection :reviews="reviews" />

    <!-- CONTACT BAND -->
    <section class="s-contact-band">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Contact Us for Burbank Data Recovery</h2>
        </div>
        <ul class="contact-bullets">
          <li>Free local pickup in Burbank</li>
          <li>Certified cleanroom on-site</li>
          <li>3–5 business day turnaround</li>
          <li>No Data, No Charge (most cases)</li>
        </ul>
        <NuxtLink to="/start-recovery" class="btn-start-recovery">Start Your Recovery</NuxtLink>
      </div>
    </section>

    <!-- FAQ -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading" style="text-align:center; margin-bottom:36px;">Frequently Asked Questions</h2>
        <div class="faq-wrap">
          <div v-for="(faq, i) in faqs" :key="i" class="faq-row">
            <button class="faq-trigger" @click="toggleFaq(i)">
              <span>{{ faq.q }}</span>
              <span class="faq-toggle">{{ openFaq === i ? '−' : '+' }}</span>
            </button>
            <div v-if="openFaq === i" class="faq-answer" v-html="faq.a" />
          </div>
        </div>
      </div>
    </section>

    <FooterBar />
  </div>
</template>

<style scoped>
*, *::before, *::after { box-sizing: border-box; }
.page-content { font-family: 'Inter', sans-serif; color: #1a1a2e; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 28px; }
.s-white { background: #fff; padding: 72px 0; }
.s-grey { background: #f4f7fc; padding: 72px 0; }
.s-heading { font-size: clamp(1.5rem, 2.8vw, 2rem); font-weight: 900; color: #1a1a2e; line-height: 1.25; margin-bottom: 20px; }
.s-body { font-size: 0.95rem; color: #4a5568; line-height: 1.8; margin-bottom: 14px; }
.inline-link { color: #C9A84C; font-weight: 600; text-decoration: underline; }
.two-col-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
.content-list { list-style: none; padding: 0 0 0 20px; margin: 0 0 20px; display: flex; flex-direction: column; gap: 10px; }
.content-list li { font-size: 0.95rem; color: #4a5568; line-height: 1.65; position: relative; padding-left: 16px; }
.content-list li::before { content: '»'; color: #C9A84C; font-weight: 900; position: absolute; left: -4px; top: 0; }
.process-steps { display: flex; flex-direction: column; }
.process-step { display: flex; align-items: flex-start; gap: 24px; padding: 28px 0; border-bottom: 1px solid #e2e6ee; }
.process-step:last-child { border-bottom: none; }
.step-num { width: 48px; height: 48px; background: #1a1a2e; color: #C9A84C; font-size: 1.2rem; font-weight: 900; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.step-title { font-size: 1rem; font-weight: 800; color: #1a1a2e; margin-bottom: 8px; }
.step-body { font-size: 0.93rem; color: #4a5568; line-height: 1.7; margin: 0; }
.s-contact-band { background: #0f1623; padding: 72px 0; border-top: 3px solid #C9A84C; border-bottom: 3px solid #C9A84C; }
.contact-banner-card { border: 1px solid rgba(201,168,76,0.3); border-radius: 8px; padding: 28px 32px; margin-bottom: 28px; }
.contact-banner-heading { font-size: clamp(1.4rem, 2.5vw, 1.9rem); font-weight: 900; color: #fff; margin: 0; }
.contact-bullets { list-style: none; padding: 0; margin: 0 0 28px; display: flex; flex-direction: column; gap: 8px; }
.contact-bullets li { font-size: 0.93rem; color: rgba(255,255,255,0.65); display: flex; align-items: center; gap: 10px; }
.contact-bullets li::before { content: '✓'; color: #C9A84C; font-weight: 700; }
.btn-start-recovery { display: inline-block; background: #C9A84C; color: #1a1a1a; font-weight: 800; font-size: 1rem; padding: 16px 36px; border-radius: 6px; text-decoration: none; transition: background 0.2s; }
.btn-start-recovery:hover { background: #b8923e; }
.faq-wrap { display: flex; flex-direction: column; border: 1.5px solid #e2e6ee; border-radius: 12px; overflow: hidden; }
.faq-row { border-bottom: 1px solid #e2e6ee; }
.faq-row:last-child { border-bottom: none; }
.faq-trigger { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; background: #fff; border: none; cursor: pointer; text-align: left; gap: 16px; font-family: inherit; }
.faq-trigger span:first-child { font-size: 0.95rem; font-weight: 700; color: #1a1a2e; line-height: 1.4; }
.faq-toggle { font-size: 1.4rem; font-weight: 300; color: #C9A84C; flex-shrink: 0; }
.faq-answer { padding: 0 24px 22px; font-size: 0.92rem; color: #4a5568; line-height: 1.75; }
.faq-answer :deep(.faq-link) { color: #C9A84C; font-weight: 600; text-decoration: underline; }
@media (max-width: 768px) { .two-col-layout { grid-template-columns: 1fr; gap: 36px; } }
</style>
