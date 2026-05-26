<script setup lang="ts">
useSeoMeta({
  title: 'Data Recovery Services in Pasadena CA - Five Star Data Recovery',
  ogTitle: 'Data Recovery Pasadena',
  description: 'Need Data Recovery Services near the Pasadena, CA area? Our team can help you recover your lost data. Contact us for a free diagnosis!',
  ogDescription: 'Need Data Recovery Services near the Pasadena, CA area? Our team can help you recover your lost data. Contact us for a free diagnosis!',
})

const trustBadges = [
  { icon: 'clock', text: 'Available 24/7/365' },
  { icon: 'check', text: 'No Data = No Charge' },
  { icon: 'shield', text: '10+ Years in Business' },
  { icon: 'star', text: 'Free Nationwide Shipping' },
]

const reviews = [
  {
    text: 'I needed urgent help after my external hard drive suddenly stopped working. I called Five Star and was shocked at how fast they acted — they picked up my drive from my Pasadena office within an hour of creating the ticket. Two days later, I had all my data back. Truly professional and reliable.',
    name: 'Ann M.',
    location: 'Pasadena, CA',
  },
  {
    text: "Even though their lab isn't directly in Pasadena, it was only a 15-minute drive and well worth it. They recovered every single file from my failed MacBook, including irreplaceable family photos. The service was fast, friendly, and honest from start to finish.",
    name: 'Antonio R.',
    location: 'Pasadena, CA',
  },
  {
    text: "Five Star handled my NAS recovery like true pros. The diagnosis was free, pricing was transparent, and they even sent updates during the process. I was impressed with how knowledgeable the team was. I wouldn't trust anyone else with my data again.",
    name: 'Hillary T.',
    location: 'Pasadena, CA',
  },
]

const faqs = [
  {
    q: 'Is your lab located in Pasadena, CA?',
    a: "Although we are not located in Pasadena, CA, we're only minutes away and proudly offer same-day free pickup service for all Pasadena residents and businesses. Simply give us a call, and we'll create a ticket and schedule a pickup the same day to get your recovery started immediately.",
  },
  {
    q: 'Do you offer emergency data recovery services in Pasadena?',
    a: "Yes! We offer both Expedited Service (during business hours) and Expedited Plus (24/7/365) for Pasadena clients. If you need your data recovered urgently, just give us a call and we'll get your case prioritized immediately.",
  },
  {
    q: 'How quickly can you recover data for Pasadena customers?',
    a: "Most standard recoveries are completed within 1–3 business days, but we also offer same-day evaluations and rush service. Thanks to our free pickup option in Pasadena, we can begin recovery within hours of your call.",
  },
  {
    q: 'What types of devices do you recover data from in Pasadena?',
    a: "We recover data from external hard drives, MacBooks, PC laptops, RAID/NAS systems, USB drives, and SD cards — no matter the failure type or operating system. If you're in Pasadena and not sure if your device qualifies, we offer free diagnostics.",
  },
  {
    q: 'Is the pickup service really free for Pasadena clients?',
    a: "Yes — 100% free. There's no fee for pickup or evaluation. You only pay if you approve the recovery. We believe in fair, transparent service for all of Pasadena and surrounding areas.",
  },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <HeroSection
      title="Data Recovery Pasadena, CA"
      subtitle="Get Your Data Back In No Time."
      description="If you've experienced data loss—whether it's from a crashed hard drive, a damaged SD card, or a non-responsive USB stick—Five Star Data Recovery is here to help. We offer professional, affordable, and fast data recovery services tailored to the needs of clients in Pasadena, CA. While we're located in nearby Glendale, CA, we offer free same-day pickup in Pasadena for added convenience."
      bgImage="/data-recovery-pasadena-ca.jpg"
      :trustBadges="trustBadges"
    />

    <StatsBar />

    <!-- SECTION 1 — s-white -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Trusted Data Recovery Services in Pasadena</h2>
        <ul class="content-list">
          <li><NuxtLink to="/data-recovery/hard-drive-recovery" class="inline-link">Hard Drive Recovery</NuxtLink> — HDDs that fail, click, or stop responding</li>
          <li><NuxtLink to="/data-recovery/ssd-recovery" class="inline-link">SSD Recovery</NuxtLink> — Firmware failures, sudden death, unrecognized drives</li>
          <li><NuxtLink to="/data-recovery/raid-recovery" class="inline-link">RAID &amp; NAS Recovery</NuxtLink> — Business-critical arrays and home NAS systems</li>
          <li><NuxtLink to="/data-recovery/external-hard-drive" class="inline-link">External Hard Drive Recovery</NuxtLink> — Dropped, corrupt, or unresponsive externals</li>
          <li><NuxtLink to="/data-recovery/usb-recovery" class="inline-link">USB Flash Drive Recovery</NuxtLink> — Broken, unrecognized, or damaged drives</li>
          <li><NuxtLink to="/data-recovery/iphone-recovery" class="inline-link">iPhone &amp; Mobile Device Recovery</NuxtLink> — Component-level recovery from iOS devices</li>
        </ul>
        <p class="s-body">We handle each recovery case with care, precision, and confidentiality. From routine to complex cases, our engineers work to bring your data back safely and completely.</p>
      </div>
    </section>

    <!-- SECTION 2 — s-grey -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Why Choose Us for Data Recovery in Pasadena?</h2>
        <ul class="content-list">
          <li><strong>Free Diagnostics</strong> — No-cost, no-obligation evaluation to assess your data recovery case.</li>
          <li><strong>Fast Turnaround Options</strong> — Rush and Expedited services available for time-sensitive cases.</li>
          <li><strong>Flat Rate Pricing</strong> — Transparent pricing with no hidden fees or hourly charges.</li>
          <li><strong>ISO 5 Certified Cleanroom</strong> — Safe environment for physically damaged drives requiring internal repairs.</li>
          <li><strong>Free Same-Day Pickup in Pasadena</strong> — We come to you. No need to leave your home or office.</li>
        </ul>
      </div>
    </section>

    <!-- SECTION 3 — s-white: Our Recovery Process -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Our Recovery Process</h2>
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
          <h2 class="contact-banner-heading">Contact Us for Pasadena Data Recovery</h2>
        </div>
        <ul class="contact-bullets">
          <li>Free same-day pickup in Pasadena</li>
          <li>Free diagnostic</li>
          <li>1–3 business day standard turnaround</li>
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
