<script setup lang="ts">
useSeoMeta({
  title: 'Data Recovery in Beverly Hills CA - Five Star Data Recovery',
  ogTitle: 'Data Recovery Beverly Hills',
  description: 'Need Data Recovery Services near the Beverly Hills, CA area? Our team can help you recover your lost data. Contact us for a free diagnosis!',
  ogDescription: 'Need Data Recovery Services near the Beverly Hills, CA area? Our team can help you recover your lost data. Contact us for a free diagnosis!',
})

const trustBadges = [
  { icon: 'clock', text: 'Available 24/7/365' },
  { icon: 'check', text: 'No Data = No Charge' },
  { icon: 'shield', text: '10+ Years in Business' },
  { icon: 'star', text: 'Free Nationwide Shipping' },
]

const reviews = [
  {
    text: 'I thought my files were gone forever after my hard drive started making clicking sounds. Five Star Data Recovery came through and recovered everything—from important business documents to personal photos. The flat-rate pricing and no data, no charge policy made me feel comfortable throughout the process.',
    name: 'Ashton M.',
    location: 'Beverly Hills, CA',
  },
  {
    text: 'Excellent service from start to finish. I had a RAID failure and was quoted outrageous prices by other companies. Five Star gave me a fair, flat-rate quote and stuck to it. Communication was great, and I was able to get back critical business files in time for an important deadline.',
    name: 'Anthony R.',
    location: 'Beverly Hills, CA',
  },
  {
    text: 'My SSD completely failed without warning, and I was in a panic. The team at Five Star provided a free consultation, explained all my options, and managed to recover 100% of my data within just a few days. They were fast, professional, and truly lived up to their name.',
    name: 'Michael B.',
    location: 'Beverly Hills, CA',
  },
]

const faqs = [
  {
    q: 'Do you have a lab in Beverly Hills, CA?',
    a: "Our certified lab is located in Glendale, CA — just a short drive from Beverly Hills. We offer free same-day pickup throughout Beverly Hills, so you don't need to come to us. Simply give us a call and we'll schedule a pickup at your convenience."
  },
  {
    q: 'What types of devices do you recover data from for Beverly Hills clients?',
    a: "We recover data from hard drives (HDDs), solid state drives (SSDs), RAID arrays, NAS devices, USB flash drives, SD cards, iPhones, and more. Whether it's a personal device or a business server, we handle it all."
  },
  {
    q: 'How long does data recovery take?',
    a: 'Standard recovery cases for Beverly Hills clients typically take 3–5 business days. We also offer <a href="/expedited-service" class="faq-link">Expedited Service</a> for priority same-day start, and <a href="/expedited-service-plus" class="faq-link">Expedited Service Plus</a> for 24/7 around-the-clock recovery.',
  },
  {
    q: 'What is your No Data, No Charge policy?',
    a: 'Our No Data, No Charge (most cases) policy means that if we are unable to successfully recover your data, you will not be charged for the recovery service. The free diagnostic is always included at no cost or obligation.',
  },
  {
    q: 'How much does data recovery cost in Beverly Hills?',
    a: 'We use flat-rate pricing — no hourly fees, no hidden charges. Recovery pricing typically ranges from $300 to $950 depending on the device type and complexity of the failure. All pricing is disclosed upfront after your free diagnosis.',
  },
  {
    q: 'Is my data kept confidential?',
    a: 'Absolutely. All data and devices are handled with the highest level of confidentiality. We never share, copy, or retain your personal or business data. Our lab operates with strict data security protocols.',
  },
  {
    q: 'Can you recover data from a physically damaged hard drive?',
    a: 'Yes — our ISO 5 certified cleanroom allows us to safely open and repair mechanically or physically damaged hard drives. From clicking drives to drives damaged by water or drops, we have the tools and expertise to handle complex physical recovery cases.',
  },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <HeroSection
      title="Data Recovery Beverly Hills, CA"
      subtitle="Get Your Data Back In No Time."
      description="When critical data goes missing, trust Five Star Data Recovery to help recover what you thought was lost forever. We offer expert data recovery services for customers in Beverly Hills, CA and surrounding areas. We're located just a short distance from Beverly Hills and provide free same-day pickup throughout the area."
      bgImage="/data-recovery-los-angeles-ca.webp"
      :trustBadges="trustBadges"
    />

    <StatsBar />

    <!-- SECTION 1 — s-white: Your Local Recovery Experts -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Your Local Recovery Experts</h2>
        <p class="s-body">Five Star Data Recovery serves clients throughout Beverly Hills and the greater Los Angeles area. Whether you've lost files from a crashed hard drive, a corrupted SSD, or a damaged RAID array, we have the tools and experience to get your data back. We specialize in:</p>
        <ul class="content-list">
          <li><NuxtLink to="/data-recovery/hard-drive-recovery" class="inline-link">Hard Drive Recovery</NuxtLink> — HDDs that won't spin, click, or show up</li>
          <li><NuxtLink to="/data-recovery/ssd-recovery" class="inline-link">SSD Recovery</NuxtLink> — Failed solid-state drives with firmware or electrical issues</li>
          <li><NuxtLink to="/data-recovery/raid-recovery" class="inline-link">RAID &amp; NAS Recovery</NuxtLink> — Multi-drive arrays and business storage systems</li>
          <li><NuxtLink to="/data-recovery/external-hard-drive" class="inline-link">External Hard Drive Recovery</NuxtLink> — Dropped, unresponsive, or corrupted external drives</li>
          <li><NuxtLink to="/data-recovery/usb-recovery" class="inline-link">USB Flash Drive Recovery</NuxtLink> — Broken, corrupt, or unrecognized flash drives</li>
          <li><NuxtLink to="/data-recovery/sd-card-recovery" class="inline-link">SD Card Recovery</NuxtLink> — Memory cards from cameras, drones, and mobile devices</li>
        </ul>
      </div>
    </section>

    <!-- SECTION 2 — s-grey: Why Beverly Hills Clients Choose Us -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Why Beverly Hills Clients Choose Us</h2>
        <div class="reason-cards">
          <div class="reason-card">
            <h3 class="reason-title">Free Same-Day Pickup</h3>
            <p class="s-body">We come to you. Our free pickup service means you don't have to drive anywhere — we collect your device directly from your home or office in Beverly Hills at no charge.</p>
          </div>
          <div class="reason-card">
            <h3 class="reason-title">Flat-Rate Transparent Pricing</h3>
            <p class="s-body">No hourly fees, no surprises. You'll know the full cost before we begin. Our No Data, No Charge (most cases) policy means you only pay if we successfully recover your data.</p>
          </div>
          <div class="reason-card">
            <h3 class="reason-title">ISO 5 Certified Cleanroom</h3>
            <p class="s-body">Our on-site certified cleanroom allows us to safely handle physically damaged drives that require internal work — the same standard used by the world's top data recovery labs.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3 — s-white: The Recovery Process -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">The Recovery Process</h2>
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
          <h2 class="contact-banner-heading">Contact Us for Beverly Hills Data Recovery</h2>
        </div>
        <ul class="contact-bullets">
          <li>Free same-day pickup in Beverly Hills</li>
          <li>Free diagnostic — no obligation</li>
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
.content-list { list-style: none; padding: 0 0 0 20px; margin: 0 0 20px; display: flex; flex-direction: column; gap: 10px; }
.content-list li { font-size: 0.95rem; color: #4a5568; line-height: 1.65; position: relative; padding-left: 16px; }
.content-list li::before { content: '»'; color: #C9A84C; font-weight: 900; position: absolute; left: -4px; top: 0; }
.reason-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
.reason-card { background: #fff; border: 1px solid #e2e6ee; border-radius: 10px; padding: 28px 24px; border-top: 4px solid #C9A84C; }
.reason-title { font-size: 1rem; font-weight: 800; color: #1a1a2e; margin-bottom: 12px; }
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
@media (max-width: 768px) { .reason-cards { grid-template-columns: 1fr; } }
</style>
