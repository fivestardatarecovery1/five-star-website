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
            "@id": "https://www.fivestardatarecovery.com/#localbusiness",
            "name": "Five Star Data Recovery",
            "image": "https://www.fivestardatarecovery.com/logo.webp",
            "url": "https://www.fivestardatarecovery.com/data-recovery-hollywood-ca/",
            "telephone": "(818) 272-8866",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1731 S Brand Blvd",
              "addressLocality": "Glendale",
              "addressRegion": "CA",
              "postalCode": "91204",
              "addressCountry": "US"
            },
            "geo": { "@type": "GeoCoordinates", "latitude": 34.1233, "longitude": -118.2567 },
            "areaServed": [
              { "@type": "Place", "name": "Hollywood, CA" },
              { "@type": "Country", "name": "United States" }
            ],
            "openingHoursSpecification": [
              { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "10:00", "closes": "18:00" },
              { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "10:00", "closes": "14:00" }
            ],
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "498" },
            "priceRange": "$$",
            "review": [
              { "@type": "Review", "author": { "@type": "Person", "name": "Tiffany R." }, "reviewBody": "My hard drive failed right before a big deadline, and I was in full panic mode. I called Five Star Data Recovery, and to my surprise, they offered same-day pickup from my apartment in Hollywood. Within days, I had all my files back \u2014 including my client's entire photo shoot. Incredible service from start to finish." },
              { "@type": "Review", "author": { "@type": "Person", "name": "Nina L." }, "reviewBody": "As a music producer, losing sessions is my worst nightmare. My RAID failed without warning, and I had no backup. The team at Five Star diagnosed it quickly and explained everything clearly. They got 100% of my files back, and the turnaround was quicker than expected. Highly recommend them!" },
              { "@type": "Review", "author": { "@type": "Person", "name": "Anthony K." }, "reviewBody": "I was skeptical at first, but after reading reviews, I gave them a shot. My external SSD stopped working after a drop, and no software could read it. These guys recovered every single file \u2014 including my tax documents, family videos, and work archives. Their service was worth every penny." }
            ]
          },
          {
            "@type": "WebPage",
            "@id": "https://www.fivestardatarecovery.com/data-recovery-hollywood-ca/#webpage",
            "url": "https://www.fivestardatarecovery.com/data-recovery-hollywood-ca/",
            "name": "Data Recovery Hollywood CA - Five Star Data Recovery",
            "description": "Expert data recovery services for Hollywood, CA. We serve media professionals and residents needing urgent or standard data recovery solutions for hard drives, SSDs, phones, and more.",
            "inLanguage": "en-US",
            "isPartOf": { "@id": "https://www.fivestardatarecovery.com/#website" }
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://www.fivestardatarecovery.com/data-recovery-hollywood-ca/#breadcrumb",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fivestardatarecovery.com/" },
              { "@type": "ListItem", "position": 2, "name": "Data Recovery Hollywood CA", "item": "https://www.fivestardatarecovery.com/data-recovery-hollywood-ca/" }
            ]
          },
          {
            "@type": "Service",
            "serviceType": "Data Recovery Services in Hollywood CA",
            "areaServed": [
              { "@type": "Place", "name": "Hollywood, CA" },
              { "@type": "Country", "name": "United States" }
            ],
            "provider": { "@id": "https://www.fivestardatarecovery.com/#localbusiness" },
            "url": "https://www.fivestardatarecovery.com/data-recovery-hollywood-ca/",
            "description": "Five Star Data Recovery offers specialized data recovery services for Hollywood, CA clients. We support media professionals, businesses, and residents with expert recovery for hard drives, SSDs, mobile devices, and RAID systems."
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Do you offer same-day pickup in Hollywood?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we offer free same-day pickup in Hollywood for customers needing urgent data recovery services. Just give us a call and we'll schedule a pickup." } },
              { "@type": "Question", "name": "What types of storage devices can you recover data from?", "acceptedAnswer": { "@type": "Answer", "text": "We recover data from hard drives, SSDs, USB flash drives, SD cards, RAID systems, MacBooks, iPhones, Samsung Phones, external drives, and more. If it stores data, there's a good chance we can recover it." } },
              { "@type": "Question", "name": "If I schedule same day pickup from Hollywood, how do I get my recovered data back?", "acceptedAnswer": { "@type": "Answer", "text": "Once your data recovery is complete, you have two convenient options: you can pick up your recovered data from our Glendale office, or we can ship it back to you at no additional cost. Just let us know which option works best for you." } },
              { "@type": "Question", "name": "How long does the data recovery process take?", "acceptedAnswer": { "@type": "Answer", "text": "Standard recoveries take about 3\u20135 business days, but we also offer Expedited and Expedited Plus services for urgent cases. These services prioritize your recovery based on the level of urgency." } },
              { "@type": "Question", "name": "Do you work on drives that have been dropped or physically damaged?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We specialize in physical data recovery, including dropped drives, water-damaged devices, and drives with internal mechanical failure. All work is done in a certified clean room environment." } }
            ]
          }
        ]
      })
    }
  ]
})

useSeoMeta({
  title: 'Data Recovery in Hollywood CA - Five Star Data Recovery',
  ogTitle: 'Data Recovery in Hollywood CA - Five Star Data Recovery',
  description: 'Need Data Recovery Services near the Hollywood, CA area? Our team can help you recover your lost data. Contact us for a free diagnosis!',
  ogDescription: 'Need Data Recovery Services near the Hollywood, CA area? Our team can help you recover your lost data. Contact us for a free diagnosis!',
  ogImage: 'https://www.fivestardatarecovery.com/hollywood-hero.jpg',
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
    q: 'Do you offer same-day pickup near Hollywood?',
    a: "Yes! We provide free same-day pickup near Hollywood for customers who can't visit our Glendale lab. Just give us a call and we'll schedule a pickup right away."
  },
  {
    q: 'What types of storage devices can you recover data from?',
    a: 'We recover data from <a href="/data-recovery/hard-drive-recovery" class="faq-link">hard drives</a>, <a href="/data-recovery/ssd-data-recovery" class="faq-link">SSDs</a>, <a href="/data-recovery/usb-data-recovery" class="faq-link">USB flash drives</a>, <a href="/data-recovery/sd-card-data-recovery" class="faq-link">SD cards</a>, <a href="/data-recovery/raid-data-recovery" class="faq-link">RAID systems</a>, <a href="/data-recovery/mac-data-recovery" class="faq-link">MacBooks</a>, <a href="/data-recovery/iphone-data-recovery" class="faq-link">iPhones</a>, <a href="/data-recovery/samsung-data-recovery" class="faq-link">Samsung Phones</a>, <a href="/data-recovery/external-hard-drive-data-recovery" class="faq-link">external drives</a>, and more. If it stores data, there\'s a good chance we can recover it.',
  },
  {
    q: 'If I schedule same day pickup from Hollywood, how do I get my recovered data back?',
    a: 'Once your data recovery is complete, you have two convenient options: you can pick up your recovered data from our Glendale office, or we can ship it back to you at no additional cost. Just let us know which option works best for you.',
  },
  {
    q: 'How long does the data recovery process take?',
    a: 'Standard recoveries take about 3–5 business days, but we also offer <a href="/expedited-service" class="faq-link">Expedited</a> and <a href="/expedited-service-plus" class="faq-link">Expedited Plus</a> services for urgent cases. These services prioritize your recovery based on the level of urgency.',
  },
  {
    q: 'Do you work on drives that have been dropped or physically damaged?',
    a: 'Absolutely. We specialize in physical data recovery, including dropped drives, water-damaged devices, and drives with internal mechanical failure. All work is done in a certified clean room environment.',
  },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">


    <HeroSection
      title="Data Recovery Hollywood, CA"
      subtitle="Get Your Data Back In No Time."
      description="If you've lost data from a hard drive, flash drive, memory card, or RAID system—Five Star Data Recovery is here to help. We provide expert-level service to clients near Hollywood, CA with fast turnaround and fair pricing. Although our lab is based in Glendale, CA, we offer free same-day pickup for customers near Hollywood."
      bgImage="/hollywood-hero.jpg"
      :trustBadges="trustBadges"
    />

    <StatsBar />

    <!-- SECTION 1 — s-white -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Trusted Data Recovery Services near Hollywood</h2>
        <p class="s-body">We’ve helped thousands of customers recover lost data from:</p>
        <ul class="content-list">
          <li><NuxtLink to="/data-recovery/mac-data-recovery" class="inline-link"><strong>Mac Data Recovery</strong></NuxtLink> – Specializing in component-level recovery for no-power MacBooks, including M1 and M2 models.</li>
          <li><NuxtLink to="/data-recovery/hard-drive-recovery" class="inline-link"><strong>Hard Drive Data Recovery</strong></NuxtLink> – Expert recovery from drives with mechanical failure or logical corruption.</li>
          <li><NuxtLink to="/data-recovery/raid-data-recovery" class="inline-link"><strong>RAID Data Recovery</strong></NuxtLink> – Safe and precise recovery from RAID 0, 1, 5, 10, and custom RAID configurations.</li>
          <li><NuxtLink to="/data-recovery/ssd-data-recovery" class="inline-link"><strong>SSD Data Recovery</strong></NuxtLink> – Advanced tools to recover data from physically or electronically failed SSDs.</li>
          <li><NuxtLink to="/data-recovery/external-hard-drive-data-recovery" class="inline-link"><strong>External Hard Drive Data Recovery</strong></NuxtLink> – Recovering data from non-detected, clicking, or accidentally dropped external drives.</li>
        </ul>
        <p class="s-body">Every recovery is handled by experienced engineers using safe and proven methods.</p>
      </div>
    </section>

    <!-- SECTION 2 — s-grey -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Why Choose Us for Data Recovery near Hollywood?</h2>
        <div class="reason-cards">
          <div class="reason-card">
            <h3 class="reason-title">Over a Decade of Experience</h3>
            <p class="s-body">Trusted by thousands, we’ve been recovering data for over 10 years with industry-leading expertise.</p>
          </div>
          <div class="reason-card">
            <h3 class="reason-title">Hundreds of 5-Star Reviews</h3>
            <p class="s-body">Our reputation speaks for itself — hundreds of satisfied customers have left glowing reviews online.</p>
          </div>
          <div class="reason-card">
            <h3 class="reason-title">Free Evaluation &amp; No Data, No Charge</h3>
            <p class="s-body">You only pay if we recover your data; we offer free diagnostics and transparent, flat-rate pricing.</p>
          </div>
          <div class="reason-card">
            <h3 class="reason-title">Same-Day Pickup near Hollywood</h3>
            <p class="s-body">Located minutes from Hollywood, we offer fast, free same-day pickup to get your recovery started immediately.</p>
          </div>
          <div class="reason-card">
            <h3 class="reason-title">Expedited and 24/7 Services Available</h3>
            <p class="s-body">For urgent cases, we offer rush recovery options — including after-hours and weekend availability.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3 — s-white: Recovery Process -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Our Recovery Process</h2>
        <div class="process-steps">
          <div class="process-step">
            <div class="step-num">1</div>
            <div>
              <h3 class="step-title">Free Evaluation</h3>
              <p class="step-body">We begin by diagnosing your device to identify the problem and determine the best recovery strategy—completely free of charge.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">2</div>
            <div>
              <h3 class="step-title">Secure Imaging</h3>
              <p class="step-body">A sector-by-sector clone of your storage device is created to protect the original data from further damage during the recovery process.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">3</div>
            <div>
              <h3 class="step-title">Advanced Scanning</h3>
              <p class="step-body">Our engineers scan the cloned image using professional tools to locate lost files, partitions, and file structures.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">4</div>
            <div>
              <h3 class="step-title">Data Extraction &amp; Repair</h3>
              <p class="step-body">We extract all recoverable data and, if needed, repair damaged files to ensure they’re usable and complete.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">5</div>
            <div>
              <h3 class="step-title">File Review &amp; Delivery</h3>
              <p class="step-body">You preview the recovered files, and once approved, we deliver your data on a new drive or via a secure transfer method.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CLIENT SUCCESS STORY -->
    <section class="s-grey">
      <div class="container">
        <div class="success-story">
          <h2 class="s-heading">⭐ Client Success Story – Hollywood Film Editor Recovers 2TB of Critical Project Files</h2>
          <p class="s-body">A Hollywood film editor reached out after their external hard drive stopped showing up. It contained over 2TB of raw footage, edited timelines, and sound libraries for an indie film nearing its premiere.</p>
          <p class="s-body">Our diagnostics revealed a mechanical failure caused by a drop, and our engineers performed a clean room head swap followed by a full clone of the drive. Using deep scan tools, we successfully recovered all critical files in their original structure.</p>
          <p class="s-body">The client received their data just in time to meet their deadline — and later thanked us during their post-screening Q&amp;A. They admitted they had lost all hope before finding our lab. Now, we’re the first call they make for any data-related emergency on set.</p>
          <p class="s-body">The successful recovery saved not only the project, but also the client’s reputation with investors and the production team.</p>
        </div>
      </div>
    </section>

    <!-- REVIEWS -->
    <LazyReviewsSection :reviews="reviews" />

    <!-- CONTACT BAND -->
    <section class="s-contact-band">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Let’s Get Your Files Back</h2>
        </div>
        <p class="contact-body-text">If you’re near Hollywood, CA and need help fast—call Five Star Data Recovery today for same-day pickup and expert service.</p>
        <ul class="contact-bullets">
          <li>Free same-day pickup near Hollywood</li>
          <li>Free diagnostic — no obligation</li>
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
.inline-link { color: #7A5500; font-weight: 600; text-decoration: underline; }
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
.faq-toggle { font-size: 1.4rem; font-weight: 300; color: #7A5500; flex-shrink: 0; }
.faq-answer { padding: 0 24px 22px; font-size: 0.92rem; color: #4a5568; line-height: 1.75; }
.faq-answer :deep(.faq-link) { color: #7A5500; font-weight: 600; text-decoration: underline; }
.reason-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
.reason-card { background: #fff; border: 1px solid #e2e6ee; border-radius: 10px; padding: 28px 24px; border-top: 4px solid #C9A84C; }
.reason-title { font-size: 1rem; font-weight: 800; color: #1a1a2e; margin-bottom: 12px; }
.success-story { max-width: 860px; }
.contact-banner-card { border: none; border-radius: 0; padding: 0; margin-bottom: 16px; }
.contact-body-text { font-size: 0.95rem; color: rgba(255,255,255,0.7); line-height: 1.75; margin-bottom: 20px; }
.s-contact-band { padding: 44px 0; }
@media (max-width: 768px) { .reason-cards { grid-template-columns: 1fr; } }
</style>
