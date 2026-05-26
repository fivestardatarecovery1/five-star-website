<script setup lang="ts">
useSeoMeta({
  title: 'Data Recovery in Los Angeles CA - Five Star Data Recovery',
  ogTitle: 'Data Recovery Los Angeles',
  description: 'Need Data Recovery Services near the Los Angeles, CA area? Our team can help you recover your lost data. Contact us for a free diagnosis!',
  ogDescription: 'Need Data Recovery Services near the Los Angeles, CA area? Our team can help you recover your lost data. Contact us for a free diagnosis!',
})

const trustBadges = [
  { icon: 'clock', text: 'Available 24/7/365' },
  { icon: 'check', text: 'No Data = No Charge' },
  { icon: 'shield', text: '10+ Years in Business' },
  { icon: 'star', text: 'Free Nationwide Shipping' },
]

const reviews = [
  {
    text: "I was devastated when my hard drive failed and I thought I'd lost years of photos and work documents. Five Star Data Recovery not only recovered everything, but they offered free same-day pickup right here in Los Angeles. The process was smooth, professional, and the pricing was completely transparent.",
    name: 'Melissa C.',
    location: 'Los Angeles, CA',
  },
  {
    text: "My external SSD stopped working out of nowhere and I had no backup. Five Star's team in Glendale diagnosed it the same day and recovered 100% of my data within 3 business days. The free pickup from my LA office made it incredibly easy. I can't recommend them highly enough.",
    name: 'David R.',
    location: 'Los Angeles, CA',
  },
  {
    text: "After a water spill destroyed my laptop, I was sure everything was gone. Five Star assessed the drive in their cleanroom and managed to recover all of my client files and personal photos. The flat-rate pricing meant no surprises, and their No Data, No Charge policy gave me total peace of mind.",
    name: 'Jennifer M.',
    location: 'Los Angeles, CA',
  },
]

const faqs = [
  {
    q: 'Do you offer data recovery services in Los Angeles?',
    a: "Yes — Five Star Data Recovery serves all of Los Angeles and surrounding areas. Our lab is based in Glendale, CA and we offer free same-day pickup Monday through Friday throughout Los Angeles. Simply call us or submit an online request to get started.",
  },
  {
    q: 'How does your free same-day pickup work?',
    a: "Give us a call or fill out a request online. We'll schedule a pickup from your Los Angeles home or office at no charge, typically the same day. Your device will be transported securely to our Glendale lab and evaluated immediately upon arrival.",
  },
  {
    q: 'What types of devices can you recover data from in Los Angeles?',
    a: 'We recover data from hard drives, SSDs, external drives, RAID arrays, NAS devices, USB flash drives, SD cards, iPhones, and more. Whether it\'s a personal device or a business server, we handle all storage media types.',
  },
  {
    q: 'How long does data recovery take?',
    a: 'Standard cases for Los Angeles clients are typically completed within 3–5 business days. We also offer <a href="/expedited-service" class="faq-link">Expedited Service</a> for priority business-hour recovery and <a href="/expedited-service-plus" class="faq-link">Expedited Service Plus</a> for 24/7 around-the-clock recovery.',
  },
  {
    q: 'What does No Data, No Charge mean?',
    a: 'Our No Data, No Charge (most cases) policy means that if we cannot recover your data, you will not be charged for the recovery service. The free diagnostic evaluation is always included at no cost and with no obligation to proceed.',
  },
  {
    q: 'How much does data recovery cost in Los Angeles?',
    a: 'We use flat-rate pricing with no hidden fees. Recovery costs typically range from $300 to $950 depending on the device type and severity of the failure. You\'ll receive a complete quote after the free diagnosis before any work begins.',
  },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <HeroSection
      title="Data Recovery Los Angeles"
      subtitle="Get Your Data Back In No Time."
      description="If you've lost important files, you're not alone—and you're not out of options. At Five Star Data Recovery, we offer fast, expert help with data recovery in Los Angeles. If your hard drive fails, your USB breaks or your SSD doesn't appear, we can help. We will recover your files quickly and safely."
      bgImage="/data-recovery-los-angeles-ca.webp"
      :trustBadges="trustBadges"
    />

    <StatsBar />

    <!-- SECTION 1 — s-white: Free Same-Day Pickup -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Free Same-Day Pickup in Los Angeles</h2>
        <p class="s-body">We know that dealing with data loss is stressful enough without having to figure out how to get your device to a lab. That's why Five Star Data Recovery offers free same-day pickup throughout Los Angeles — Monday through Friday. Just give us a call or submit an online request, and we'll come to you.</p>
        <p class="s-body">Whether you're in Downtown LA, West Hollywood, Culver City, Santa Monica, or anywhere else in the city, our team will pick up your device at no charge. We bring it securely to our Glendale lab where our certified engineers begin the evaluation immediately.</p>
        <p class="s-body">No need to worry about packaging, shipping, or finding a way to transport a damaged or sensitive device. Our free pickup service is designed to make the recovery process as simple and stress-free as possible for every Los Angeles client.</p>
      </div>
    </section>

    <!-- SECTION 2 — s-grey: Trusted by Locals Across LA -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Trusted by Locals Across LA</h2>
        <p class="s-body">Five Star Data Recovery has helped thousands of individuals and businesses across Los Angeles recover their most important data. From Hollywood film producers and Culver City tech startups to Westside families and downtown businesses, we've built our reputation on results, transparency, and genuine care for our clients.</p>
        <p class="s-body">Our engineers have successfully recovered data from every major brand and device type — including Seagate, Western Digital, Samsung, Toshiba, LaCie, and more. With a 98% recovery success rate and flat-rate pricing, Los Angeles residents trust us because we deliver.</p>
      </div>
    </section>

    <!-- SECTION 3 — s-white: What We Recover -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">What We Recover</h2>
        <ul class="content-list">
          <li><NuxtLink to="/data-recovery/hard-drive-recovery" class="inline-link">Hard Drive Recovery</NuxtLink> — Mechanical failures, clicking drives, unresponsive HDDs</li>
          <li><NuxtLink to="/data-recovery/ssd-recovery" class="inline-link">SSD Recovery</NuxtLink> — Firmware errors, controller failures, sudden death</li>
          <li><NuxtLink to="/data-recovery/raid-recovery" class="inline-link">RAID &amp; NAS Recovery</NuxtLink> — All RAID levels, NAS devices, business servers</li>
          <li><NuxtLink to="/data-recovery/external-hard-drive" class="inline-link">External Hard Drive Recovery</NuxtLink> — Dropped, damaged, or corrupt external drives</li>
          <li><NuxtLink to="/data-recovery/usb-recovery" class="inline-link">USB Flash Drive Recovery</NuxtLink> — Broken connectors, unrecognized drives</li>
          <li><NuxtLink to="/data-recovery/sd-card-recovery" class="inline-link">SD Card Recovery</NuxtLink> — Camera cards, drone media, corrupted memory</li>
          <li><NuxtLink to="/data-recovery/iphone-recovery" class="inline-link">iPhone &amp; Mobile Recovery</NuxtLink> — Component-level iOS device recovery</li>
        </ul>
      </div>
    </section>

    <!-- SECTION 4 — s-grey: Hardware and Software Expertise -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Hardware and Software Expertise</h2>
        <p class="s-body">Our team specializes in both hardware-level and software-level data recovery. For mechanically damaged drives — including those with clicking read/write heads, seized motors, or damaged platters — we use our ISO 5 certified cleanroom to safely perform component-level repairs before extracting data.</p>
        <p class="s-body">For logical failures such as corrupted file systems, accidental formatting, bad sectors, and deleted files, we use industry-leading imaging and reconstruction tools to retrieve your data without risking further damage. Every recovery is handled with the utmost care and precision.</p>
      </div>
    </section>

    <!-- SECTION 5 — s-white: Data Recovery Process -->
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
          <h2 class="contact-banner-heading">Contact Us for Los Angeles Data Recovery</h2>
        </div>
        <ul class="contact-bullets">
          <li>Free same-day pickup Monday–Friday</li>
          <li>Free diagnostic</li>
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
