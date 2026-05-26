<script setup lang="ts">
useSeoMeta({
  title: 'Data Recovery in Hollywood CA - Five Star Data Recovery',
  ogTitle: 'Data Recovery Hollywood',
  description: 'Need Data Recovery Services near the Hollywood, CA area? Our team can help you recover your lost data. Contact us for a free diagnosis!',
  ogDescription: 'Need Data Recovery Services near the Hollywood, CA area? Our team can help you recover your lost data. Contact us for a free diagnosis!',
})

const trustBadges = [
  { icon: 'clock', text: 'Available 24/7/365' },
  { icon: 'check', text: 'No Data = No Charge' },
  { icon: 'shield', text: '10+ Years in Business' },
  { icon: 'star', text: 'Free Nationwide Shipping' },
]

const reviews = [
  {
    text: 'My hard drive failed right before a big deadline, and I was in full panic mode. I called Five Star Data Recovery, and to my surprise, they offered same-day pickup from my apartment in Hollywood. Within days, I had all my files back — including my client\'s entire photo shoot. Incredible service from start to finish.',
    name: 'Tiffany R.',
    location: 'Hollywood, CA',
  },
  {
    text: 'As a music producer, losing sessions is my worst nightmare. My RAID failed without warning, and I had no backup. The team at Five Star diagnosed it quickly and explained everything clearly. They got 100% of my files back, and the turnaround was quicker than expected. Highly recommend them!',
    name: 'Nina L.',
    location: 'Hollywood, CA',
  },
  {
    text: 'I was skeptical at first, but after reading reviews, I gave them a shot. My external SSD stopped working after a drop, and no software could read it. These guys recovered every single file — including my tax documents, family videos, and work archives. Their service was worth every penny.',
    name: 'Anthony K.',
    location: 'Hollywood, CA',
  },
]

const faqs = [
  {
    q: 'Do you offer data recovery services in Hollywood, CA?',
    a: 'Yes — although our lab is based in Glendale, CA, we proudly serve Hollywood clients with free same-day pickup. Just give us a call or fill out an online request, and we\'ll come to your location in Hollywood at no charge.',
  },
  {
    q: 'What types of storage devices can you recover data from?',
    a: 'We recover data from hard drives, SSDs, RAID arrays, NAS devices, USB flash drives, SD cards, iPhones, and more. Whether it\'s a personal device or a professional production drive, we handle all types of storage media.',
  },
  {
    q: 'How long does a standard data recovery take for Hollywood clients?',
    a: 'Standard cases typically take 3–5 business days. If you need faster turnaround, we offer <a href="/expedited-service" class="faq-link">Expedited Service</a> (priority during business hours) and <a href="/expedited-service-plus" class="faq-link">Expedited Service Plus</a> (24/7 recovery).',
  },
  {
    q: 'What does your No Data, No Charge policy mean?',
    a: 'If we are unable to recover your data, you will not be charged for the recovery service (most cases). The diagnostic is always free — no obligation to proceed. You only pay when we successfully recover your files.',
  },
  {
    q: 'How much does data recovery cost?',
    a: 'We use flat-rate pricing with no hidden fees. Recovery costs typically range from $300 to $950 depending on the device type and severity of the failure. You\'ll receive a full quote after the free diagnosis before any work begins.',
  },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <HeroSection
      title="Data Recovery Hollywood, CA"
      subtitle="Get Your Data Back In No Time."
      description="If you've lost data from a hard drive, flash drive, memory card, or RAID system—Five Star Data Recovery is here to help. We provide expert-level service to clients in Hollywood, CA with fast turnaround and fair pricing. Although our lab is based in Glendale, CA, we offer free same-day pickup for customers in Hollywood."
      bgImage="/data-recovery-los-angeles-ca.webp"
      :trustBadges="trustBadges"
    />

    <StatsBar />

    <!-- SECTION 1 — s-white -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Trusted Data Recovery Services in Hollywood</h2>
        <p class="s-body">Hollywood is home to creators, producers, and professionals who rely on their data every day. When a drive fails, the stakes are high. Five Star Data Recovery offers expert recovery services for all types of storage media, including:</p>
        <ul class="content-list">
          <li><NuxtLink to="/data-recovery/hard-drive-recovery" class="inline-link">Hard Drive Recovery</NuxtLink> — Mechanical and logical failures, clicking drives, unresponsive HDDs</li>
          <li><NuxtLink to="/data-recovery/ssd-recovery" class="inline-link">SSD Recovery</NuxtLink> — Firmware errors, sudden failure, unrecognized drives</li>
          <li><NuxtLink to="/data-recovery/raid-recovery" class="inline-link">RAID &amp; NAS Recovery</NuxtLink> — All RAID levels, production servers, studio storage arrays</li>
          <li><NuxtLink to="/data-recovery/external-hard-drive" class="inline-link">External Hard Drive Recovery</NuxtLink> — Dropped, damaged, or corrupted external drives</li>
          <li><NuxtLink to="/data-recovery/usb-recovery" class="inline-link">USB Flash Drive Recovery</NuxtLink> — Broken connectors, corrupted drives, chip-level recovery</li>
          <li><NuxtLink to="/data-recovery/sd-card-recovery" class="inline-link">SD Card Recovery</NuxtLink> — Camera cards, drone footage, corrupted memory cards</li>
        </ul>
      </div>
    </section>

    <!-- SECTION 2 — s-grey -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Why Choose Us for Data Recovery in Hollywood?</h2>
        <ul class="content-list">
          <li><strong>Free Same-Day Pickup in Hollywood</strong> — We come to you. No need to drive to our lab. We pick up your device directly from your Hollywood address at no cost.</li>
          <li><strong>Free Diagnostic with No Obligation</strong> — Our engineers assess your device and provide a full quote for free. You decide whether to proceed — no pressure, no charge if you don't.</li>
          <li><strong>Flat-Rate Pricing &amp; No Data, No Charge</strong> — Transparent pricing with no hidden fees. If we can't recover your data, you don't pay for the recovery (most cases).</li>
          <li><strong>Certified Cleanroom On-Site</strong> — Our ISO 5 certified cleanroom allows us to safely open and repair physically damaged drives that would be impossible to recover otherwise.</li>
        </ul>
      </div>
    </section>

    <!-- SECTION 3 — s-white: Data Recovery Process -->
    <section class="s-white">
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
          <h2 class="contact-banner-heading">Contact Us for Hollywood Data Recovery</h2>
        </div>
        <ul class="contact-bullets">
          <li>Free same-day pickup in Hollywood</li>
          <li>Free diagnostic</li>
          <li>3–5 business day standard turnaround</li>
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
