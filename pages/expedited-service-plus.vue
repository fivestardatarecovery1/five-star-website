<script setup lang="ts">
useSeoMeta({
  title: 'Expedited Service Plus - Five Star Data Recovery',
  ogTitle: 'Expedited Service Plus',
  description: 'Five Star Data Recovery offers customers the opportunity to expedite their case at the fastest level called Expedited Service Plus.',
  ogDescription: 'Five Star Data Recovery offers customers the opportunity to expedite their case at the fastest level called Expedited Service Plus.',
})

const trustBadges = [
  { icon: 'clock', text: 'Available 24/7/365' },
  { icon: 'check', text: 'No Data = No Charge' },
  { icon: 'shield', text: '10+ Years in Business' },
  { icon: 'star', text: 'Free Nationwide Shipping' },
]

const reviews = [
  {
    text: "My company's server failed on a Friday night, and we needed our data back by Monday. Five Star's Expedited Plus team worked through the entire weekend and had everything recovered before we even came in Monday morning. Truly a lifesaver for our business.",
    name: 'Sandra K.',
    location: 'Los Angeles, CA',
  },
  {
    text: "I flew in from New York specifically to use Five Star's Expedited Plus service for a critical hard drive failure. Their engineers worked overnight and delivered results faster than I thought possible. The communication was excellent throughout the whole process.",
    name: 'Robert M.',
    location: 'New York, NY',
  },
  {
    text: 'When my external drive died and I had a client deadline the next morning, Five Star activated their Expedited Plus service immediately. They worked through the night and I had my data back at 7am. This is the kind of service that separates the best from the rest.',
    name: 'Karen T.',
    location: 'Beverly Hills, CA',
  },
]

const faqs = [
  {
    q: 'What is Expedited Service Plus?',
    a: 'Expedited Service Plus is our fastest and most dedicated recovery option. Unlike our standard Expedited Service which operates during business hours, Expedited Plus means our engineers work on your case non-stop — 24/7 including nights, weekends, and holidays — from the moment your device arrives until recovery is complete.',
  },
  {
    q: 'How much does Expedited Service Plus cost?',
    a: 'Expedited Service Plus starts at $500.00 per drive. This fee is in addition to the standard flat-rate data recovery cost. The exact total depends on how long we estimate the case will take. Our engineers will provide a detailed estimate after the initial free diagnosis.',
  },
  {
    q: 'How fast can you recover my data with Expedited Service Plus?',
    a: 'Because engineers work around the clock without stopping, recovery times are significantly faster than standard or even regular expedited service. Logical failures can often be resolved within 24–48 hours. Mechanical failures requiring donor parts may take slightly longer, but we source parts as quickly as possible to minimize delay.',
  },
  {
    q: 'Does Expedited Service Plus really run nights, weekends, and holidays?',
    a: 'Yes — absolutely. Expedited Service Plus is truly 24/7/365. Your case is assigned a dedicated engineer who works continuously until your data is recovered. This is our highest-tier service designed for genuine emergencies.',
  },
  {
    q: 'Do I need to provide information before dropping off my device?',
    a: 'Yes, it helps significantly. Before bringing or shipping your device, please have ready: whether the drive is clicking or beeping, whether it is recognized by Disk Utility or Disk Management, whether it has been dropped, the make/model and storage capacity, how much data needs to be recovered, and what file types are on it. Do not attempt to diagnose or repair the drive yourself — power it down and set it aside until you contact us.',
  },
  {
    q: 'Can I ship my drive in for Expedited Service Plus?',
    a: 'Yes — we accept devices nationwide via our free prepaid shipping labels. Please call us first so we can prepare your dedicated engineer slot before your drive arrives. The 24/7 recovery clock starts the moment your device is received at our lab.',
  },
  {
    q: 'Does No Data, No Charge apply to Expedited Service Plus?',
    a: 'The Expedited Service Plus fee (starting at $500/drive) is paid upfront and is non-refundable as it covers dedicated engineering time. However, if we cannot recover your data, the standard flat-rate recovery fee will not be charged — our No Data, No Charge (most cases) policy still applies to the recovery portion of the cost.',
  },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <HeroSection
      title="Expedited Service Plus"
      subtitle="Get Your Data Back In No Time."
      description="Need your data recovered as quickly as possible? Our Expedited Service Plus guarantees that your case is worked on immediately — 24/7, including nights, weekends, and holidays. It's the fastest and most dedicated recovery option we offer, ideal for urgent business needs or personal emergencies."
      bgImage="/data-recovery-pricing-los-angeles.jpg"
      :overlayOpacity="0.8"
      :trustBadges="trustBadges"
    />

    <StatsBar />

    <!-- SECTION 1 — s-white -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">What is Expedited Service Plus?</h2>
        <p class="s-body">At Five Star Data Recovery we're happy to announce we now offer Expedited Service Plus. Is your recovery <strong>EXTREMELY</strong> time sensitive? Do you need a <strong>GUARANTEE</strong> that your case will be worked on diligently 24/7 to ensure you can meet your deadline? Then this service is for you.</p>
        <p class="s-body">With our Expedited Service Plus, our Data Recovery Engineers will work on your case non-stop. They will start as soon as it arrives at our lab and continue until you get your data back. These cases do run 24/7, including nights, holidays, and weekends.</p>
        <p class="s-body">We offer flat rate pricing for this service based on how long we believe the case will take. This fee is in addition to any Flat Rate Data Recovery costs. It's hard to know exactly how much this service will cost. However, our Engineers can give you a good estimate after the initial diagnosis. Services start at $500.00 per drive.</p>
        <p class="s-body">Simply provide the following information:</p>
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
        <p class="s-body">(Please do not try to diagnose the drive yourself. Power down the drive and put it safely aside before you do anything).</p>
        <p class="s-body">(Please be 100% honest and upfront about the events that led to your drive failing. Let us know if the drive has been acting up recently as well as any unusual activities you've realized with the drive before it failed. This will help keep the cost of the recovery <strong>MUCH</strong> lower since we'll know exactly what the issue is and take the safest and quickest approach to recovering the data).</p>
      </div>
    </section>

    <!-- SECTION 2 — s-grey: Data Recovery Process -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Data Recovery Process</h2>
        <div class="process-steps">
          <div class="process-step">
            <div class="step-num">1</div>
            <div>
              <h3 class="step-title">Drop off or Mail in Your Drive</h3>
              <p class="step-body">You can visit our Glendale lab for a quick drop-off, or securely mail your device using our prepaid shipping label — whichever is more convenient for you.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">2</div>
            <div>
              <h3 class="step-title">Receive a Free Diagnosis</h3>
              <p class="step-body">Our team will evaluate your device and provide a detailed diagnosis along with an initial quote — completely free of charge and with no obligation to proceed.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">3</div>
            <div>
              <h3 class="step-title">Our Engineers work on Recovering your Data</h3>
              <p class="step-body">We carefully begin the recovery process using advanced tools and cleanroom procedures.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">4</div>
            <div>
              <h3 class="step-title">Review &amp; Approve the Recovered</h3>
              <p class="step-body">After recovery is complete, you'll receive a detailed file list to review so you can confirm everything important has been successfully recovered.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">5</div>
            <div>
              <h3 class="step-title">Receive your recovered data</h3>
              <p class="step-body">Once approved, we'll securely transfer your data to a new drive and return it to you via pickup or insured shipping — ready for immediate use.</p>
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
          <h2 class="contact-banner-heading">Start Your Expedited Plus Recovery Now</h2>
        </div>
        <ul class="contact-bullets">
          <li>24/7 recovery — nights, weekends, holidays</li>
          <li>Engineers start immediately upon arrival</li>
          <li>Direct communication with your dedicated engineer</li>
          <li>Starts at $500/drive (in addition to flat-rate recovery fee)</li>
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
</style>
