<script setup lang="ts">
useSeoMeta({
  title: 'Data Recovery Services near Pasadena CA - Five Star Data Recovery',
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
    text: 'I needed urgent help after my external hard drive suddenly stopped working. I called Five Star and was shocked at how fast they acted - they picked up my drive from my Pasadena office within an hour of creating the ticket. Two days later, I had all my data back. Truly professional and reliable.',
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
    q: 'Do you offer emergency data recovery services near Pasadena?',
    a: "Yes! We offer both <a href='/expedited-service' class='faq-link'>Expedited Service</a> (during business hours) and <a href='/expedited-service-plus' class='faq-link'>Expedited Plus</a> (24/7/365) for Pasadena clients. If you need your data recovered urgently, just give us a call and we'll get your case prioritized immediately.",
  },
  {
    q: 'How quickly can you recover data for Pasadena customers?',
    a: "Most standard recoveries are completed within 1-3 business days, but we also offer same-day evaluations and rush service. Thanks to our free pickup option near Pasadena, we can begin recovery within hours of your call.",
  },
  {
    q: 'What types of devices do you recover data from near Pasadena?',
    a: "We recover data from <a href='/data-recovery/external-hard-drive-data-recovery' class='faq-link'>external hard drives</a>, <a href='/data-recovery/mac-data-recovery' class='faq-link'>MacBooks</a>, PC laptops, <a href='/data-recovery/raid-data-recovery' class='faq-link'>RAID</a>/NAS systems, <a href='/data-recovery/usb-data-recovery' class='faq-link'>USB drives</a>, and <a href='/data-recovery/sd-card-data-recovery' class='faq-link'>SD cards</a> — no matter the failure type or operating system. If you're near Pasadena and not sure if your device qualifies, we offer free diagnostics.",
  },
  {
    q: 'Is the pickup service really free for Pasadena clients?',
    a: "Yes - 100% free. There's no fee for pickup or evaluation. You only pay if you approve the recovery. We believe in fair, transparent service for all of Pasadena and surrounding areas.",
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
      description="If you've experienced data loss-whether it's from a crashed hard drive, a damaged SD card, or a non-responsive USB stick-Five Star Data Recovery is here to help. We offer professional, affordable, and fast data recovery services tailored to the needs of clients near Pasadena, CA. While we're located in nearby Glendale, CA, we offer free same-day pickup near Pasadena for added convenience."
      bgImage="/data-recovery-pasadena-ca.jpg"
      :trustBadges="trustBadges"
    />

    <StatsBar />

    <!-- SECTION 1 - s-white -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Trusted Data Recovery Services near Pasadena</h2>
        <p class="s-body">Whether you're a student, business owner, creative professional, or just someone with important files, we understand how devastating data loss can be. Our team has successfully recovered data from:</p>
        <ul class="content-list">
          <li>Crashed <NuxtLink to="/data-recovery/hard-drive-recovery" class="inline-link">hard drives</NuxtLink></li>
          <li><NuxtLink to="/hard-drive-clicking" class="inline-link">Clicking</NuxtLink> or non-spinning drives</li>
          <li>Failed <NuxtLink to="/data-recovery/ssd-data-recovery" class="inline-link">SSDs</NuxtLink> and flash drives</li>
          <li>Water-damaged or dropped devices</li>
          <li><NuxtLink to="/data-recovery/deleted-files" class="inline-link">Deleted files</NuxtLink> and formatted media</li>
          <li>Damaged <NuxtLink to="/data-recovery/raid-data-recovery" class="inline-link">RAID</NuxtLink> arrays and servers</li>
        </ul>
        <p class="s-body">We handle each recovery case with care, precision, and confidentiality. From routine to complex cases, our engineers work to bring your data back safely.</p>
      </div>
    </section>

    <!-- SECTION 2 - s-grey -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Why Choose Us for Data Recovery near Pasadena?</h2>
        <div class="reason-cards">
          <div class="reason-card">
            <h3 class="reason-title">Free Diagnostics</h3>
            <p class="s-body">No-cost, no-obligation evaluation to assess your data recovery case.</p>
          </div>
          <div class="reason-card">
            <h3 class="reason-title">Fast Turnaround Options</h3>
            <p class="s-body">Rush and Expedited services available for time-sensitive cases.</p>
          </div>
          <div class="reason-card">
            <h3 class="reason-title">Class 100 Clean Room</h3>
            <p class="s-body">Safe environment for physically damaged drives and internal repairs.</p>
          </div>
          <div class="reason-card">
            <h3 class="reason-title">Component-Level Repairs</h3>
            <p class="s-body">We specialize in board-level and firmware recovery others can't handle.</p>
          </div>
          <div class="reason-card">
            <h3 class="reason-title">Flat Rate Pricing</h3>
            <p class="s-body">Transparent pricing - no hidden fees or hourly charges.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3 - s-white: Our Recovery Process -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Our Recovery Process</h2>
        <div class="process-steps">
          <div class="process-step">
            <div class="step-num">1</div>
            <div>
              <h3 class="step-title">Free Evaluation</h3>
              <p class="step-body">We assess your device at no cost to determine the issue and recovery options.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">2</div>
            <div>
              <h3 class="step-title">Cloning and Analysis</h3>
              <p class="step-body">Your drive is cloned to avoid further damage, and our engineers analyze the copy.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">3</div>
            <div>
              <h3 class="step-title">Data Extraction</h3>
              <p class="step-body">We extract recoverable data from the cloned image using advanced tools.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">4</div>
            <div>
              <h3 class="step-title">Verification</h3>
              <p class="step-body">Recovered files are reviewed and validated for completeness and integrity.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">5</div>
            <div>
              <h3 class="step-title">Delivery</h3>
              <p class="step-body">Your data is transferred to a new drive and returned securely.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- DEVICES WE RECOVER DATA FROM -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Devices We Recover Data From</h2>
        <div class="device-cards">
          <div class="device-card">
            <h3 class="device-title">Hard Drives (HDDs)</h3>
            <p class="s-body">We recover data from failed internal and external hard drives due to mechanical or logical issues.</p>
          </div>
          <div class="device-card">
            <h3 class="device-title">Solid State Drives (SSDs)</h3>
            <p class="s-body">We retrieve lost data from SSDs with firmware errors, bad blocks, or sudden failure.</p>
          </div>
          <div class="device-card">
            <h3 class="device-title">iPhones and Mobile Devices</h3>
            <p class="s-body">We perform component-level recovery from <NuxtLink to="/data-recovery/iphone-data-recovery" class="inline-link">iPhones</NuxtLink> that won't power on or are stuck in boot loops.</p>
          </div>
          <div class="device-card">
            <h3 class="device-title">RAID Arrays and NAS Devices</h3>
            <p class="s-body">We recover critical business and personal data from failed or degraded RAID/<NuxtLink to="/data-recovery/nas-data-recovery" class="inline-link">NAS</NuxtLink> systems.</p>
          </div>
          <div class="device-card">
            <h3 class="device-title">USB Flash Drives</h3>
            <p class="s-body">We handle broken or corrupted USB drives, including chip-off recovery when needed.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- REVIEWS -->
    <ReviewsSection :reviews="reviews" />

    <!-- CONTACT BAND -->
    <section class="s-contact-band contact-band-bg">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Get Started Today</h2>
        </div>
        <p class="contact-body-text">Need data recovery near Pasadena, CA? Don't wait-contact Five Star Data Recovery today for a free diagnostic and same-day support.</p>
        <ul class="contact-bullets">
          <li>Free same-day pickup near Pasadena</li>
          <li>Free diagnostic - no obligation</li>
          <li>1-3 business day standard turnaround</li>
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
              <span class="faq-toggle">{{ openFaq === i ? '-' : '+' }}</span>
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
.contact-banner-card { border: none; border-radius: 0; padding: 0; margin-bottom: 16px; }
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
.reason-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
.reason-card { background: #fff; border: 1px solid #e2e6ee; border-radius: 10px; padding: 28px 24px; border-top: 4px solid #C9A84C; }
.reason-title { font-size: 1rem; font-weight: 800; color: #1a1a2e; margin-bottom: 12px; }
.device-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.device-card { background: #fff; border: 1px solid #e2e6ee; border-radius: 10px; padding: 24px; }
.device-title { font-size: 1rem; font-weight: 800; color: #1a1a2e; margin-bottom: 10px; }
.contact-band-bg { background: linear-gradient(to right, rgba(15,22,35,0.92) 0%, rgba(15,22,35,0.75) 60%, rgba(15,22,35,0.5) 100%), url('/pasadena-contact-bg.jpg') center center / cover no-repeat !important; }
.contact-banner-card { border: none; padding: 0; margin-bottom: 16px; }
.contact-banner-heading { font-size: clamp(1.4rem, 2.5vw, 1.9rem); font-weight: 900; color: #fff; margin: 0; }
.contact-body-text { font-size: 0.95rem; color: rgba(255,255,255,0.7); line-height: 1.75; margin-bottom: 20px; }
.s-contact-band { padding: 44px 0; }
@media (max-width: 768px) { .reason-cards, .device-cards { grid-template-columns: 1fr; } }
</style>
