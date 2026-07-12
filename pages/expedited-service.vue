<script setup lang="ts">
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "LocalBusiness",
            "name": "Five Star Data Recovery",
            "image": "https://www.fivestardatarecovery.com/logo.webp",
            "telephone": "+1-818-272-8866",
            "priceRange": "$200+",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1731 S Brand Blvd.",
              "addressLocality": "Glendale",
              "addressRegion": "CA",
              "postalCode": "91204",
              "addressCountry": "US"
            },
            "areaServed": { "@type": "Country", "name": "United States" },
            "url": "https://www.fivestardatarecovery.com/",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "498"
            }
          },
          {
            "@type": "Service",
            "name": "Expedited Data Recovery Service",
            "url": "https://www.fivestardatarecovery.com/expedited-service/",
            "areaServed": { "@type": "Country", "name": "United States" },
            "description": "Our Expedited Data Recovery service offers prioritized recovery during normal business hours for customers needing faster turnaround. Available Monday through Friday with a $200 upfront fee."
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fivestardatarecovery.com/" },
              { "@type": "ListItem", "position": 2, "name": "Expedited Service", "item": "https://www.fivestardatarecovery.com/expedited-service/" }
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is your expedited data recovery service?",
                "acceptedAnswer": { "@type": "Answer", "text": "Our expedited service is a rush option available during normal business hours. Your case is moved to the front of the queue, and our engineers start working on your device immediately." }
              },
              {
                "@type": "Question",
                "name": "How fast is the turnaround time for expedited service?",
                "acceptedAnswer": { "@type": "Answer", "text": "Most expedited cases are completed within 1 to 3 business days, depending on the complexity of the recovery. Some simpler cases may even be finished the same day." }
              },
              {
                "@type": "Question",
                "name": "Does expedited service include nights or weekends?",
                "acceptedAnswer": { "@type": "Answer", "text": "No. This service only applies to standard business hours, Monday through Friday. If you need after-hours or weekend service, we offer a separate Expedited Plus Service for that level of urgency." }
              },
              {
                "@type": "Question",
                "name": "How much does expedited data recovery cost?",
                "acceptedAnswer": { "@type": "Answer", "text": "Our expedited service is an additional $200.00 per drive on top of the standard flat-rate data recovery fee. This fee is paid upfront and is non-refundable, regardless of the recovery outcome. It covers the cost of prioritizing your case and dedicating immediate engineering time during business hours." }
              },
              {
                "@type": "Question",
                "name": "Will my recovery results be different with expedited service?",
                "acceptedAnswer": { "@type": "Answer", "text": "Not at all. The expedited service speeds up the start time and prioritizes your case, but the quality of work and recovery process remains the same as our standard service." }
              },
              {
                "@type": "Question",
                "name": "How do I request expedited service?",
                "acceptedAnswer": { "@type": "Answer", "text": "Simply let us know when dropping off or shipping your device that you want expedited service. Our team will confirm the fee and prioritize your recovery right away." }
              }
            ]
          }
        ]
      })
    }
  ]
})

useSeoMeta({
  title: 'Expedited Data Recovery Service - Five Star Data Recovery',
  ogTitle: 'Expedited Data Recovery Service - Five Star Data Recovery',
  description: 'Five Star Data Recovery offers an expedited data recovery service for our customers. Please feel free to contact us to get this started!',
  ogDescription: 'Five Star Data Recovery offers an expedited data recovery service for our customers. Please feel free to contact us to get this started!',
  ogImage: 'https://www.fivestardatarecovery.com/expedited-service-hero.jpg',
})

const trustBadges = [
  { icon: 'clock', text: 'Available 24/7/365' },
  { icon: 'check', text: 'No Data = No Charge' },
  { icon: 'shield', text: '10+ Years in Business' },
  { icon: 'star', text: 'Free Nationwide Shipping' },
]

const reviews = [
  {
    text: "I had a project deadline and my external hard drive failed the night before. I called and opted for their expedited service. The team started the recovery immediately and had my files back within 24 hours. I honestly didn't expect it to be that fast!",
    name: 'Jason M.',
    location: 'Pasadena, CA',
  },
  {
    text: "I was impressed with how quickly the engineers prioritized my case. I dropped off my drive in the morning, and by the afternoon I had a full update on the recovery status. They really deliver on their promise of fast service.",
    name: 'Michael L.',
    location: 'Los Angeles, CA',
  },
  {
    text: 'I needed data from a failing SSD for a legal case and time was tight. Their expedited service was worth every penny. The communication was great and I had my recovered data the next day. Highly recommend for any urgent situation!',
    name: 'Sophia K.',
    location: 'Glendale, CA',
  },
]

const faqs = [
  {
    q: 'What is your expedited data recovery service?',
    a: 'Our expedited service is a rush option available during normal business hours. Your case is moved to the front of the queue, and our engineers start working on your device immediately.',
  },
  {
    q: 'How fast is the turnaround time for expedited service?',
    a: 'Most expedited cases are completed within 1 to 3 business days, depending on the complexity of the recovery. Some simpler cases may even be finished the same day.',
  },
  {
    q: 'Does expedited service include nights or weekends?',
    a: 'No. This service only applies to standard business hours, Monday through Friday. If you need after-hours or weekend service, we offer a separate <a href="/expedited-service-plus" class="faq-link">Expedited Plus Service</a> for that level of urgency.',
  },
  {
    q: 'How much does expedited data recovery cost?',
    a: 'Our expedited service is an additional $200.00 per drive on top of the standard flat-rate data recovery fee. This fee is paid upfront and is non-refundable, regardless of the recovery outcome. It covers the cost of prioritizing your case and dedicating immediate engineering time during business hours.',
  },
  {
    q: 'Will my recovery results be different with expedited service?',
    a: 'Not at all. The expedited service speeds up the start time and prioritizes your case, but the quality of work and recovery process remains the same as our standard service.',
  },
  {
    q: 'How do I request expedited service?',
    a: 'Simply let us know when dropping off or shipping your device that you want expedited service. Our team will confirm the fee and prioritize your recovery right away.',
  },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <HeroSection
      title="Expedited Data Recovery Service"
      description="When time is critical, our Expedited Data Recovery service gives your case immediate priority. Our engineers will begin working on your device right away—without waiting in the standard queue. Whether it's during business hours, after hours, or on weekends, we offer fast-track options to meet your urgent needs. Every expedited case is handled with the highest level of attention and care to recover your data as quickly as possible."
      bgImage="/expedited-service-hero.jpg"
      :trustBadges="trustBadges"
    />

    <StatsBar />

    <!-- SECTION 1 — s-white -->
    <section class="s-white">
      <div class="container">
        <div class="two-col-layout">
          <div>
            <h4 class="s-heading">Do you offer a Priority Data Recovery Service?</h4>
            <p class="s-body">Yes, of course. We understand that some recoveries are time sensitive and need to be completed as soon as possible. We offer an Expedited Service which would put your case at the top of the que. With our Expedited Service, our Engineers will start working on your data recovery case within an hour of drop off, and the case will be handled as a priority within business hours. With this service, you are guaranteed a diagnosis within 3 hours of the time you drop off your drive. Your case will be worked on non-stop during normal business hours.</p>
          </div>
          <div class="section-img-wrap">
            <img src="/expedited-service-technician.jpg" alt="Data recovery technician working on hard drive" class="section-img" width="768" height="512" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2 — s-grey -->
    <section class="s-grey">
      <div class="container">
        <div class="two-col-layout reverse">
          <div class="section-img-wrap">
            <img src="/expedited-service-shipping.jpg" alt="Expedited data recovery mail-in shipping service" class="section-img" width="768" height="512" loading="lazy" />
          </div>
          <div>
            <h2 class="s-heading">Whats the average turnaround time for Expedited Data Recovery Cases?</h2>
            <p class="s-body">This all really depends on the exact issue with your drive, along with the amount of data. With our Expedited Service, we can guarantee that the entire process will move forward without any delays, but it's impossible to give an exact turnaround time.</p>
            <p class="s-body"><strong>IF</strong> the issue with your drive is logical (<NuxtLink to="/data-recovery/bad-sectors" class="inline-link">bad sectors</NuxtLink>, firmware corruption, damaged file system, etc), and you have less than 2TB of data, we should be able to get the data back to you within 2-3 days.</p>
            <p class="s-body"><strong>IF</strong> the issue with your drive is mechanical (<NuxtLink to="/hard-drive-clicking" class="inline-link">clicking</NuxtLink>, beeping, stuck motor, etc), and you have less than 2TB of data, we should be able to get your data back to you within 3-5 days (the delay is for the time needed to source the donor parts).</p>
            <p class="s-body"><strong>IF</strong> you have a lot of data on your drive, we can work with you to get you back the most important files needed first, then continue working on the rest of the recovery.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3 — s-white: Data Recovery Process -->
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

    <!-- YOUR DATA STAYS SECURE -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Your Data Stays Secure</h2>
        <p class="s-body">We understand your files are private. Whether you're recovering sensitive business files or personal memories, we keep your data protected from start to finish.</p>
        <ul class="content-list">
          <li>In-house recovery only — no third-party labs</li>
          <li>All data is securely stored and permanently deleted after final delivery</li>
          <li>NDA available for sensitive projects</li>
          <li>Our lab uses access control and 24/7 surveillance</li>
        </ul>
      </div>
    </section>

    <!-- CONTACT BAND -->
    <section class="s-contact-band">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Get a Free Quote within Minutes!</h2>
        </div>
        <ul class="contact-bullets">
          <li>Priority queue — work starts within 1 hour of drop-off</li>
          <li>Diagnosis guaranteed within 3 hours</li>
          <li>Non-stop work during business hours</li>
          <li>Flat-rate pricing + $200 expedited fee (upfront)</li>
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
.s-heading.center { text-align: center; }
.s-body { font-size: 0.95rem; color: #4a5568; line-height: 1.8; margin-bottom: 14px; }
.s-intro { font-size: 1rem; color: #4a5568; line-height: 1.75; margin-bottom: 20px; }
.inline-link { color: #C9A84C; font-weight: 600; text-decoration: underline; }
.two-col-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
.two-col-layout.reverse { direction: rtl; }
.two-col-layout.reverse > * { direction: ltr; }
.section-img-wrap { border-radius: 12px; overflow: hidden; }
.section-img { width: 100%; height: auto; display: block; border-radius: 12px; object-fit: cover; }
@media (max-width: 768px) { .two-col-layout, .two-col-layout.reverse { grid-template-columns: 1fr; direction: ltr; } }
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
.contact-body-text { font-size: 0.95rem; color: rgba(255,255,255,0.7); line-height: 1.75; margin-bottom: 14px; }
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
