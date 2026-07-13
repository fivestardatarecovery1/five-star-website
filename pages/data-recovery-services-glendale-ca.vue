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
            "@id": "https://www.fivestardatarecovery.com/#business",
            "name": "Five Star Data Recovery",
            "url": "https://www.fivestardatarecovery.com/",
            "telephone": "(818) 272-8866",
            "image": "https://www.fivestardatarecovery.com/logo.webp",
            "priceRange": "$300-$950",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1731 S Brand Blvd",
              "addressLocality": "Glendale",
              "addressRegion": "CA",
              "postalCode": "91204",
              "addressCountry": "US"
            },
            "areaServed": { "@type": "Country", "name": "United States" },
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "498" },
            "review": {
              "@type": "Review",
              "author": { "@type": "Person", "name": "Arthur C. (Glendale)" },
              "datePublished": "2024-10-22",
              "reviewRating": { "@type": "Rating", "ratingValue": "5" },
              "reviewBody": "Five Star Data Recovery exceeded my expectations. My external hard drive suddenly stopped working, and I was worried I had lost all my photos and videos. They diagnosed the issue the same day and recovered everything I needed. Their local service and fast turnaround really made the difference."
            }
          },
          {
            "@type": "WebPage",
            "@id": "https://www.fivestardatarecovery.com/data-recovery-services-glendale-ca/#webpage",
            "url": "https://www.fivestardatarecovery.com/data-recovery-services-glendale-ca/",
            "name": "Data Recovery Glendale, CA | Five Star Data Recovery",
            "description": "Local Glendale data recovery experts. We specialize in hard drive, SSD, flash drive, and iPhone data recovery. Visit our Glendale lab or use our free shipping service today."
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://www.fivestardatarecovery.com/data-recovery-services-glendale-ca/#breadcrumb",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fivestardatarecovery.com/" },
              { "@type": "ListItem", "position": 2, "name": "Data Recovery Glendale CA", "item": "https://www.fivestardatarecovery.com/data-recovery-services-glendale-ca/" }
            ]
          },
          {
            "@type": "FAQPage",
            "@id": "https://www.fivestardatarecovery.com/data-recovery-glendale-ca/#faq",
            "mainEntity": [
              { "@type": "Question", "name": "Where is your data recovery lab located in Glendale, CA?", "acceptedAnswer": { "@type": "Answer", "text": "Our data recovery lab is conveniently located in Glendale, CA, making it easy for local customers to drop off their devices for fast and reliable service. We also offer expedited options and same-day diagnostics." } },
              { "@type": "Question", "name": "How fast is your turnaround time for Glendale data recovery?", "acceptedAnswer": { "@type": "Answer", "text": "Most recoveries for Glendale clients are completed within 3\u20135 business days. For urgent cases, we offer Expedited and Expedited Plus services with priority handling, including nights and weekends." } },
              { "@type": "Question", "name": "Do you have a cleanroom at your Glendale location?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we use a certified Class 100 Clean Room environment for physically damaged hard drives at our Glendale facility, ensuring your device is handled with the highest level of care and precision." } },
              { "@type": "Question", "name": "Can I still use your services if I'm not located in Glendale?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. While our lab is based in Glendale, CA, we offer free round-trip nationwide data recovery services. Once you fill out our mail-in form, we'll send you a prepaid shipping label to get started quickly." } },
              { "@type": "Question", "name": "Do you offer payment plans at your Glendale location?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer interest-free payment plans to Glendale customers with no credit check required. A 25% down payment is required, and the remaining balance must be paid before data is released." } },
              { "@type": "Question", "name": "What is your success rate for data recovery at your Glendale lab?", "acceptedAnswer": { "@type": "Answer", "text": "We have a 98% success rate for data recovery. Whether your case involves logical damage, physical issues, or firmware problems, our Glendale engineers use advanced tools to safely retrieve your files." } },
              { "@type": "Question", "name": "How soon will I get an update after dropping off my device in Glendale?", "acceptedAnswer": { "@type": "Answer", "text": "Whether you drop off, mail in, or use our local pickup service, you'll receive an initial update the same day your device arrives at our Glendale lab. We'll keep you informed every step of the way." } }
            ]
          }
        ]
      })
    }
  ]
})

useSeoMeta({
  title: 'Data Recovery in Glendale CA - Five Star Data Recovery',
  ogTitle: 'Data Recovery in Glendale CA - Five Star Data Recovery',
  description: 'Need Data Recovery Services near the Glendale, CA area? Our team can help you recover your lost data. Contact us for a free diagnosis!',
  ogDescription: 'Need Data Recovery Services near the Glendale, CA area? Our team can help you recover your lost data. Contact us for a free diagnosis!',
  ogImage: 'https://www.fivestardatarecovery.com/data-recovery-glendale-ca.webp',
})

const trustBadges = [
  { icon: 'clock', text: 'Available 24/7/365' },
  { icon: 'check', text: 'No Data = No Charge' },
  { icon: 'shield', text: '10+ Years in Business' },
  { icon: 'star', text: 'Free Nationwide Shipping' },
]

const reviews = [
  {
    text: 'Five Star Data Recovery exceeded my expectations. My external hard drive suddenly stopped working, and I was worried I had lost all my photos and videos. They diagnosed the issue the same day and recovered everything I needed. Their local service and fast turnaround really made the difference.',
    name: 'Arthur C.',
    location: 'Glendale, CA',
  },
  {
    text: "I called multiple places before choosing Five Star, and I'm glad I did. They were honest about my options, gave me a flat-rate quote, and didn't charge me until the data was successfully recovered. Their lab is top-notch and the staff was incredibly helpful throughout the entire process.",
    name: 'Armen M.',
    location: 'Glendale, CA',
  },
  {
    text: "I had a clicking hard drive with years of business data at risk. The team handled it with professionalism and care. They kept me updated every step of the way, and the fact that they're located close by made dropping off and picking up my drive super convenient. Couldn't be happier with the results.",
    name: 'Armenay T.',
    location: 'Glendale, CA',
  },
]

const faqs = [
  {
    q: 'Where is your data recovery lab located in Glendale, CA?',
    a: 'Our data recovery lab is conveniently located in Glendale, CA, making it easy for local customers to drop off their devices for fast and reliable service. We also offer expedited options and same-day diagnostics.',
  },
  {
    q: 'How fast is your turnaround time for Glendale data recovery?',
    a: 'Most recoveries for Glendale clients are completed within 3–5 business days. For urgent cases, we offer Expedited and Expedited Plus services with priority handling, including nights and weekends.',
  },
  {
    q: 'Do you have a cleanroom at your Glendale location?',
    a: 'Yes, we use a certified Class 100 Clean Room environment for physically damaged hard drives at our Glendale facility, ensuring your device is handled with the highest level of care and precision.',
  },
  {
    q: "Can I still use your services if I'm not located in Glendale?",
    a: 'Absolutely. While our lab is based in Glendale, CA, we offer free round-trip <a href="/data-recovery/data-recovery-mail-in-service" class="faq-link">nationwide data recovery services</a>. Once you fill out our mail-in form, we\'ll send you a prepaid shipping label to get started quickly.',
  },
  {
    q: 'Do you offer payment plans at your Glendale location?',
    a: 'Yes. We offer interest-free payment plans to Glendale customers with no credit check required. A 25% down payment is required, and the remaining balance must be paid before data is released.',
  },
  {
    q: 'What is your success rate for data recovery at your Glendale lab?',
    a: 'We have a 98% success rate for data recovery. Whether your case involves logical damage, physical issues, or firmware problems, our Glendale engineers use advanced tools to safely retrieve your files.',
  },
  {
    q: 'How soon will I get an update after dropping off my device in Glendale?',
    a: 'Whether you drop off, mail in, or use our local pickup service, you\'ll receive an initial update the same day your device arrives at our Glendale lab. We\'ll keep you informed every step of the way.',
  },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <HeroSection
      title="Data Recovery Glendale, CA"
      subtitle="Get Your Data Back In No Time."
      description="If you've experienced data loss—whether it's from a crashed hard drive, a damaged SD card, or a non-responsive USB stick—Five Star Data Recovery is here to help. We offer professional, affordable, and fast data recovery services tailored to the needs of clients in Glendale, CA. Our lab is located right here in Glendale, CA, making it easy for locals to visit us directly or use our free pickup option."
      bgImage="/data-recovery-glendale-ca.webp"
      :trustBadges="trustBadges"
    />

    <StatsBar />

    <!-- SECTION 1 — s-white -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Trusted Data Recovery Services in Glendale</h2>
        <p class="s-body">Whether you’re a student with term papers, a small business owner safeguarding client data, or a creative professional preserving irreplaceable work, we know how critical your files are. At Five Star Data Recovery, our Glendale lab has rescued data from a wide range of failures, including:</p>
        <ul class="content-list">
          <li>Crashed hard drives that no longer boot</li>
          <li>Drives that <NuxtLink to="/hard-drive-clicking" class="inline-link">click</NuxtLink> or refuse to spin</li>
          <li>Failed SSDs and corrupted USB flash drives</li>
          <li>Water-soaked or dropped devices</li>
          <li>Accidentally <NuxtLink to="/data-recovery/deleted-files" class="inline-link">deleted files</NuxtLink> and reformatted media</li>
          <li>Damaged <NuxtLink to="/data-recovery/raid-data-recovery" class="inline-link">RAID arrays</NuxtLink> and server volumes</li>
        </ul>
        <p class="s-body">Every case receives meticulous care, precision engineering, and strict confidentiality. From straightforward recoveries to the most complex data loss scenarios, our team works tirelessly to restore your information safely.</p>
      </div>
    </section>

    <!-- SECTION 2 — s-grey -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Why Choose Us for Data Recovery in Glendale?</h2>
        <div class="reason-cards">
          <div class="reason-card">
            <h3 class="reason-title">Experienced Engineers</h3>
            <p class="s-body">Our team consists of certified data recovery professionals who specialize in recovering data from all types of storage devices — from simple issues to the most complex failures.</p>
          </div>
          <div class="reason-card">
            <h3 class="reason-title">State-of-the-Art Clean Room Lab</h3>
            <p class="s-body">All physical recoveries are performed in a certified clean room environment to ensure the safety of your device during disassembly and repair.</p>
          </div>
          <div class="reason-card">
            <h3 class="reason-title">Fast Turnaround Options</h3>
            <p class="s-body">Need your data urgently? We offer both Expedited and Expedited Plus services to prioritize your recovery based on your timeline and level of urgency.</p>
          </div>
          <div class="reason-card">
            <h3 class="reason-title">No Outsourcing – All Work Done In-House</h3>
            <p class="s-body">Your device stays in our Glendale lab from start to finish. We don’t ship your drive elsewhere or use third-party labs.</p>
          </div>
          <div class="reason-card">
            <h3 class="reason-title">Excellent Reputation &amp; Results</h3>
            <p class="s-body">With hundreds of 5-star reviews and an industry-leading success rate, our track record speaks for itself.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3 — s-white: Data Recovery Process -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Our Recovery Process</h2>
        <div class="process-steps">
          <div class="process-step">
            <div class="step-num">1</div>
            <div>
              <h3 class="step-title">Free Evaluation</h3>
              <p class="step-body">We assess your device and provide a detailed quote.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">2</div>
            <div>
              <h3 class="step-title">Cloning and Analysis</h3>
              <p class="step-body">If needed, we create a sector-by-sector clone to protect your data.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">3</div>
            <div>
              <h3 class="step-title">Data Extraction</h3>
              <p class="step-body">We extract and reconstruct your files with advanced tools.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">4</div>
            <div>
              <h3 class="step-title">Verification</h3>
              <p class="step-body">You preview your recovered files before final delivery.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">5</div>
            <div>
              <h3 class="step-title">Delivery</h3>
              <p class="step-body">Get your data on a new storage device or securely delivered via other methods.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- DEVICES WE RECOVER DATA FROM -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Devices We Recover Data From</h2>
        <ul class="content-list">
          <li>Internal HDDs</li>
          <li>External Hard Drives</li>
          <li>Solid-State Drives (SSDs) &amp; Flash Drives</li>
          <li>Memory Cards: SD, CF, &amp; microSD</li>
          <li>Laptops &amp; Desktops (Mac &amp; PC)</li>
          <li>NAS Devices</li>
          <li>RAID Systems</li>
          <li>iPhones &amp; iPads (Hardware Recovery Only)</li>
          <li>Samsung Smartphones (Hardware Recovery Only)</li>
        </ul>
      </div>
    </section>

    <!-- RAID DATA RECOVERY -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">RAID Data Recovery in Glendale</h2>
        <p class="s-body">In addition to standard hard drive recovery, we offer expert RAID data recovery services for both business and personal clients. Whether your RAID array has failed due to multiple disk errors, corrupted volumes, or a faulty controller, our engineers are equipped to safely rebuild your system and recover your data.</p>
        <p class="s-body">Our RAID Recovery Process Includes:</p>
        <ul class="content-list">
          <li>Cloning each drive to preserve the original data</li>
          <li>Rebuilding the RAID array from secure cloned images</li>
          <li>Using advanced tools to restore volumes and extract critical files</li>
          <li>Supporting RAID 0, 1, 5, 6, 10, 50, and hybrid configurations</li>
        </ul>
      </div>
    </section>

    <!-- WE RECOVER ALL FILE TYPES -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">We Recover All File Types</h2>
        <p class="s-body">At Five Star Data Recovery, we understand that every file matters. Whether you’re recovering family photos, tax documents, client archives, or entire business systems, we treat every file with care.</p>
        <ul class="content-list">
          <li>Photos and videos</li>
          <li>Documents and spreadsheets</li>
          <li>RAW camera files and project files</li>
          <li>Software builds and system images</li>
          <li>Backup Files &amp; Virtual Machines</li>
        </ul>
        <p class="s-body">Our process is designed to ensure the integrity of every recovered file so you don’t just get files—you get usable data back.</p>
      </div>
    </section>

    <!-- EMERGENCY AND EXPEDITED -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Emergency and Expedited Service Options</h2>
        <p class="s-body">We understand that some data simply can’t wait. That’s why we offer expedited and emergency services for clients who need fast turnaround.</p>
        <ul class="content-list">
          <li><strong><NuxtLink to="/expedited-service" class="inline-link">Expedited Service</NuxtLink>:</strong> Your case is placed at the top of the queue and worked on during normal business hours.</li>
          <li><strong><NuxtLink to="/expedited-service-plus" class="inline-link">Expedited Plus</NuxtLink>:</strong> Our top-tier emergency service ensures 24/7 recovery, including weekends and holidays.</li>
        </ul>
        <p class="s-body">Both options are available for an additional fee and are ideal for businesses facing tight deadlines or time-sensitive projects. If you need urgent help, we’re ready.</p>
      </div>
    </section>

    <!-- REVIEWS -->
    <ReviewsSection :reviews="reviews" />

    <!-- CONTACT BAND -->
    <section class="s-contact-band contact-band-bg">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Get a Free Quote within Minutes!</h2>
        </div>
        <ul class="contact-bullets">
          <li>Lab located in Glendale, CA</li>
          <li>Same-day diagnostic available</li>
          <li>98% recovery success rate</li>
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
.s-contact-band { background: #0f1623; padding: 44px 0; border-top: 3px solid #C9A84C; border-bottom: 3px solid #C9A84C; }
.contact-band-bg { background: linear-gradient(to right, rgba(15,22,35,0.92) 0%, rgba(15,22,35,0.75) 60%, rgba(15,22,35,0.5) 100%), url('/pasadena-contact-bg.jpg') center center / cover no-repeat !important; }
.contact-banner-card { border: none; border-radius: 0; padding: 0; margin-bottom: 16px; }
.contact-banner-heading { font-size: clamp(1.4rem, 2.5vw, 1.9rem); font-weight: 900; color: #fff; margin: 0; }
.reason-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
.reason-card { background: #fff; border: 1px solid #e2e6ee; border-radius: 10px; padding: 28px 24px; border-top: 4px solid #C9A84C; }
.reason-title { font-size: 1rem; font-weight: 800; color: #1a1a2e; margin-bottom: 12px; }
@media (max-width: 768px) { .reason-cards { grid-template-columns: 1fr; } }
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
</style>
