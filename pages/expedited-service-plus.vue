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
    q: 'What is Expedited Plus Data Recovery?',
    a: 'Expedited Plus is our highest-priority data recovery service, designed for urgent cases that require immediate attention. Your case is handled 24/7—including nights, weekends, and holidays—by our top-tier engineers. If your data recovery can\'t wait, this is the fastest and most dedicated solution we offer.',
  },
  {
    q: 'How is Expedited Plus different from your regular Expedited Service?',
    a: 'While our standard Expedited Service prioritizes your case during business hours, Expedited Plus goes beyond that. This service guarantees continuous, around-the-clock recovery efforts from the moment your device arrives at our lab. It\'s ideal for critical business needs, time-sensitive data, or personal emergencies.',
  },
  {
    q: 'How much does Expedited Plus Data Recovery cost?',
    a: 'The cost for our Expedited Plus Data Recovery service is $500.00 per drive or device, paid upfront and non-refundable regardless of the results. This fee is in addition to the standard data recovery fee and helps cover the extra resources, after-hours labor, and dedicated priority handling required to work on your case 24/7—including nights, weekends, and holidays.',
  },
  {
    q: 'What types of devices are eligible for Expedited Plus?',
    a: 'We can perform Expedited Plus Data Recovery on hard drives, SSDs, RAID systems, iPhones, flash drives, and most other storage devices. This service is available for both physically damaged and logically failed devices.',
  },
  {
    q: 'How long does Expedited Plus Data Recovery take?',
    a: 'Turnaround time for Expedited Plus Data Recovery typically ranges from a few hours to a couple of days, depending on the complexity of the case and the amount of data involved. If you urgently need just a few critical files to continue working, our engineers can prioritize and recover those files as quickly as humanly possible, while continuing to work on the full recovery in the background. This service ensures zero downtime, direct communication with a dedicated engineer, and continuous 24/7 recovery efforts until your case is complete.',
  },
  {
    q: 'Is there a success guarantee with Expedited Plus?',
    a: 'The success rate of your recovery is the same whether you choose our Expedited Plus, Expedited Service, or Standard Service. The only difference between the service levels is turnaround time and priority handling—not the recovery outcome itself. Success largely depends on the condition of the device when it arrives at our lab. If the drive or device hasn\'t been tampered with after failure, success rates are typically 98% or higher. However, if there have been multiple recovery attempts or further damage caused after the initial failure, the chances of a successful recovery can decrease.',
  },
  {
    q: 'Can I ship my device for Expedited Plus Recovery?',
    a: 'Yes, absolutely. When you choose our Expedited Plus service, we provide free overnight shipping both ways to ensure the fastest turnaround possible. If the critical files you need are not too large, we can also upload the recovered files for immediate access while the full data transfer is being completed. This way, you can get back to work without delay.',
  },
  {
    q: 'Do you provide updates throughout the Expedited Plus process?',
    a: 'Yes. With Expedited Plus, you\'ll receive regular updates from our engineers and direct communication regarding the progress of your recovery. You\'re never left in the dark.',
  },
  {
    q: 'When should I choose Expedited Plus over standard service?',
    a: 'Choose Expedited Plus when time is critical. Whether you\'re facing a business deadline, legal matter, or need emergency data recovery, this service ensures that your case gets uninterrupted attention from our most experienced recovery engineers.',
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
      bgImage="/expedited-service-plus-hero.jpg"
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
        <div class="warning-box">
          <p class="warning-text">⚠️ Please do not try to diagnose the drive yourself. Power down the drive and put it safely aside before you do anything.</p>
        </div>
        <div class="warning-box">
          <p class="warning-text">⚠️ Please be 100% honest and upfront about the events that led to your drive failing. Let us know if the drive has been acting up recently as well as any unusual activities you've realized with the drive before it failed. This will help keep the cost of the recovery <strong>MUCH</strong> lower since we'll know exactly what the issue is and take the safest and quickest approach to recovering the data.</p>
        </div>
      </div>
    </section>

    <!-- COMPARISON TABLE -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading center">Expedited vs. Expedited Plus — What's the Difference?</h2>
        <p class="s-body" style="text-align:center; margin-bottom: 40px;">Not sure which service is right for you? Here's a quick side-by-side breakdown.</p>
        <div class="compare-table-wrap">
          <table class="compare-table">
            <thead>
              <tr>
                <th class="col-feature">Feature</th>
                <th class="col-expedited">Expedited</th>
                <th class="col-plus">Expedited Plus ⚡</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hours of Operation</td>
                <td>Business hours only<br><span class="sub">Mon – Fri</span></td>
                <td class="plus-col">24/7 — nights, weekends &amp; holidays</td>
              </tr>
              <tr class="alt">
                <td>Work Starts</td>
                <td>Within 1 hour of drop-off</td>
                <td class="plus-col">Immediately upon arrival</td>
              </tr>
              <tr>
                <td>Diagnosis</td>
                <td>Within 3 hours</td>
                <td class="plus-col">Immediate</td>
              </tr>
              <tr class="alt">
                <td>Upfront Fee</td>
                <td>$200 per drive</td>
                <td class="plus-col">Starting at $500 per drive</td>
              </tr>
              <tr>
                <td>Turnaround Time</td>
                <td>2–5 business days</td>
                <td class="plus-col">Few hours to 2 days</td>
              </tr>
              <tr class="alt">
                <td>Engineer Communication</td>
                <td>Standard updates</td>
                <td class="plus-col">Direct dedicated engineer</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>Free prepaid label</td>
                <td class="plus-col">Free overnight — both ways</td>
              </tr>
              <tr class="alt">
                <td>Best For</td>
                <td>Urgent but flexible deadlines</td>
                <td class="plus-col">True emergencies — zero downtime</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- DATA RECOVERY PROCESS -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Data Recovery Process</h2>
        <p class="s-body">Our data recovery process is built around security, transparency, and peace of mind. From start to finish, we keep you informed with clear updates at every stage. With a commitment to honest service and no hidden fees, we follow through on every promise — ensuring a smooth and stress-free experience.</p>
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
          <h2 class="contact-banner-heading">Get a Free Quote within Minutes!</h2>
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

/* Warning boxes */
.warning-box { background: #fff5f5; border-left: 4px solid #e53e3e; border-radius: 6px; padding: 16px 20px; margin-bottom: 16px; }
.warning-text { color: #c53030; font-size: 0.95rem; font-weight: 700; line-height: 1.7; margin: 0; }
.warning-text strong { color: #c53030; }

/* Comparison table */
.compare-table-wrap { overflow-x: auto; border-radius: 12px; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
.compare-table { width: 100%; border-collapse: collapse; font-size: 0.93rem; }
.compare-table thead tr { background: #1a1a2e; }
.compare-table thead th { padding: 18px 20px; text-align: left; font-weight: 800; font-size: 0.9rem; letter-spacing: 0.03em; }
.col-feature { color: rgba(255,255,255,0.6); width: 28%; }
.col-expedited { color: #fff; width: 32%; }
.col-plus { color: #C9A84C; width: 40%; }
.compare-table tbody tr { border-bottom: 1px solid #e2e6ee; }
.compare-table tbody tr.alt { background: #f9fafc; }
.compare-table tbody td { padding: 16px 20px; color: #4a5568; vertical-align: middle; line-height: 1.5; }
.compare-table tbody td:first-child { font-weight: 700; color: #1a1a2e; }
.plus-col { color: #1a1a2e; font-weight: 700; }
.sub { font-size: 0.8rem; color: #718096; }
.s-heading.center { text-align: center; }
@media (max-width: 640px) { .compare-table thead th, .compare-table tbody td { padding: 12px 12px; font-size: 0.85rem; } }
</style>
