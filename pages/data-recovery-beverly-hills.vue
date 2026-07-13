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
            "url": "https://www.fivestardatarecovery.com/data-recovery-beverly-hills-ca/",
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
              { "@type": "Place", "name": "Beverly Hills, CA" },
              { "@type": "Country", "name": "United States" }
            ],
            "openingHoursSpecification": [
              { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "10:00", "closes": "18:00" },
              { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "10:00", "closes": "14:00" }
            ],
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "498" },
            "priceRange": "$300-$950"
          },
          {
            "@type": "WebPage",
            "@id": "https://www.fivestardatarecovery.com/data-recovery-beverly-hills-ca/#webpage",
            "url": "https://www.fivestardatarecovery.com/data-recovery-beverly-hills-ca/",
            "name": "Data Recovery Beverly Hills CA - Five Star Data Recovery",
            "description": "Fast and affordable data recovery services in Beverly Hills, CA. We recover data from hard drives, SSDs, iPhones, RAIDs, and more with free local pickup and flat-rate pricing.",
            "inLanguage": "en-US",
            "isPartOf": { "@id": "https://www.fivestardatarecovery.com/#website" }
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://www.fivestardatarecovery.com/data-recovery-beverly-hills-ca/#breadcrumb",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fivestardatarecovery.com/" },
              { "@type": "ListItem", "position": 2, "name": "Data Recovery Beverly Hills CA", "item": "https://www.fivestardatarecovery.com/data-recovery-beverly-hills-ca/" }
            ]
          },
          {
            "@type": "Service",
            "serviceType": "Data Recovery Services in Beverly Hills CA",
            "areaServed": [
              { "@type": "Place", "name": "Beverly Hills, CA" },
              { "@type": "Country", "name": "United States" }
            ],
            "provider": { "@id": "https://www.fivestardatarecovery.com/#localbusiness" },
            "url": "https://www.fivestardatarecovery.com/data-recovery-beverly-hills-ca/",
            "description": "Five Star Data Recovery offers professional data recovery services to clients in Beverly Hills, CA. Whether it's a hard drive, SSD, smartphone, or RAID, we provide fast and reliable recovery solutions."
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Do you offer data recovery services specifically in Beverly Hills?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! While our main lab is located nearby, we proudly offer professional data recovery services in Beverly Hills with free same-day pickup. Whether it's a failed hard drive, SSD, iPhone, or RAID system, our team is ready to help recover your data quickly and securely." } },
              { "@type": "Question", "name": "How fast can you recover data for Beverly Hills customers?", "acceptedAnswer": { "@type": "Answer", "text": "Most standard Beverly Hills data recovery cases are completed within 3\u20135 business days. For urgent needs, we also offer Expedited and Expedited Plus services with 24/7 priority support. Call us for a free phone consultation." } },
              { "@type": "Question", "name": "What types of devices can you recover data from in Beverly Hills?", "acceptedAnswer": { "@type": "Answer", "text": "We specialize in recovering data from external and internal hard drives, solid-state drives (SSDs), iPhones and Android devices, USB flash drives, SD cards, and RAID and NAS systems. Whatever your storage device, our data recovery experts in Beverly Hills can help." } },
              { "@type": "Question", "name": "Is there a fee if you can't recover my data?", "acceptedAnswer": { "@type": "Answer", "text": "We follow a No Data, No Charge policy for most standard recoveries in Beverly Hills. You only pay if we successfully recover your files. Some exceptions apply, such as deleted file cases or previously tampered drives." } },
              { "@type": "Question", "name": "Do you provide free pickup in Beverly Hills for data recovery?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! We offer free same-day pickup in Beverly Hills for all data recovery jobs. Just give us a call or fill out our request form, and we'll arrange secure transportation of your device to our lab." } },
              { "@type": "Question", "name": "What makes your Beverly Hills data recovery service different from others?", "acceptedAnswer": { "@type": "Answer", "text": "We stand out with our transparent flat-rate pricing, no data, no charge policy, and in-house recovery lab. Unlike many companies, we never outsource\u2014we perform all recoveries ourselves to maintain the highest success rate and confidentiality for our Beverly Hills data recovery clients." } },
              { "@type": "Question", "name": "Can you recover data from physically damaged hard drives in Beverly Hills?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we specialize in physically damaged drive recovery. Whether your drive is clicking, not powering on, or has water or impact damage, our data recovery engineers near Beverly Hills are equipped with cleanroom tools to handle complex cases." } },
              { "@type": "Question", "name": "How secure is your data recovery process for Beverly Hills clients?", "acceptedAnswer": { "@type": "Answer", "text": "We prioritize data privacy and security. All Beverly Hills data recovery cases are handled in a secure environment, and your files are never shared or stored beyond the recovery process. Confidentiality agreements are also available upon request." } },
              { "@type": "Question", "name": "Do you recover data from iPhones and smartphones in Beverly Hills?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! We offer component-level iPhone data recovery in Beverly Hills and can recover data even from non-booting or physically damaged iPhones. Whether you need a full iTunes backup or file extraction, we're here to help." } },
              { "@type": "Question", "name": "How do I get started with your Beverly Hills data recovery service?", "acceptedAnswer": { "@type": "Answer", "text": "Getting started is easy. Call us for a free consultation or request a free same-day pickup in Beverly Hills. You can also mail your device or visit our lab. Once we receive it, we'll provide a diagnostic and begin recovery as soon as you approve." } }
            ]
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Ashton M. (Beverly Hills)" },
            "reviewRating": { "@type": "Rating", "ratingValue": 5 },
            "reviewBody": "I thought my files were gone forever after my hard drive started making clicking sounds. Five Star Data Recovery came through and recovered everything\u2014from important business documents to personal photos. The flat-rate pricing and no data, no charge policy made me feel comfortable throughout the process.",
            "datePublished": "2025-07-11",
            "itemReviewed": { "@type": "LocalBusiness", "name": "Five Star Data Recovery", "@id": "https://www.fivestardatarecovery.com/#localbusiness" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Anthony R. (Beverly Hills)" },
            "reviewRating": { "@type": "Rating", "ratingValue": 5 },
            "reviewBody": "Excellent service from start to finish. I had a RAID failure and was quoted outrageous prices by other companies. Five Star gave me a fair, flat-rate quote and stuck to it. Communication was great, and I was able to get back critical business files in time for an important deadline.",
            "datePublished": "2025-07-10",
            "itemReviewed": { "@type": "LocalBusiness", "name": "Five Star Data Recovery", "@id": "https://www.fivestardatarecovery.com/#localbusiness" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Michael B. (Beverly Hills)" },
            "reviewRating": { "@type": "Rating", "ratingValue": 5 },
            "reviewBody": "My SSD completely failed without warning, and I was in a panic. The team at Five Star provided a free consultation, explained all my options, and managed to recover 100% of my data within just a few days. They were fast, professional, and truly lived up to their name.",
            "datePublished": "2025-07-09",
            "itemReviewed": { "@type": "LocalBusiness", "name": "Five Star Data Recovery", "@id": "https://www.fivestardatarecovery.com/#localbusiness" }
          }
        ]
      })
    }
  ]
})

useSeoMeta({
  title: 'Data Recovery in Beverly Hills CA - Five Star Data Recovery',
  ogTitle: 'Data Recovery in Beverly Hills CA - Five Star Data Recovery',
  description: 'Need Data Recovery Services near the Beverly Hills, CA area? Our team can help you recover your lost data. Contact us for a free diagnosis!',
  ogDescription: 'Need Data Recovery Services near the Beverly Hills, CA area? Our team can help you recover your lost data. Contact us for a free diagnosis!',
  ogImage: 'https://www.fivestardatarecovery.com/beverly-hills-hero.jpg',
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
    q: 'Do you offer data recovery services specifically in Beverly Hills?',
    a: "Yes! While our main lab is located nearby, we proudly offer professional data recovery services in Beverly Hills with free same-day pickup. Whether it's a failed hard drive, SSD, iPhone, or RAID system, our team is ready to help recover your data quickly and securely."
  },
  {
    q: 'How fast can you recover data for Beverly Hills customers?',
    a: 'Most standard Beverly Hills data recovery cases are completed within 3–5 business days. For urgent needs, we also offer <a href="/expedited-service" class="faq-link">Expedited</a> and <a href="/expedited-service-plus" class="faq-link">Expedited Plus</a> services with 24/7 priority support. Call us for a free phone consultation.',
  },
  {
    q: 'What types of devices can you recover data from in Beverly Hills?',
    a: 'We specialize in recovering data from: External and internal hard drives, Solid-state drives (SSDs), iPhones and Android devices, USB flash drives, SD cards, RAID and NAS systems. Whatever your storage device, our data recovery experts in Beverly Hills can help.',
  },
  {
    q: 'Is there a fee if you can\'t recover my data?',
    a: 'We follow a No Data, No Charge policy for most standard recoveries in Beverly Hills. You only pay if we successfully recover your files. Some exceptions apply, such as deleted file cases or previously tampered drives.',
  },
  {
    q: 'Do you provide free pickup in Beverly Hills for data recovery?',
    a: "Yes! We offer free same-day pickup in Beverly Hills for all data recovery jobs. Just give us a call or fill out our request form, and we'll arrange secure transportation of your device to our lab."
  },
  {
    q: 'What makes your Beverly Hills data recovery service different from others?',
    a: 'We stand out with our transparent flat-rate pricing, no data, no charge policy, and in-house recovery lab. Unlike many companies, we never outsource—we perform all recoveries ourselves to maintain the highest success rate and confidentiality for our Beverly Hills data recovery clients.',
  },
  {
    q: 'Can you recover data from physically damaged hard drives in Beverly Hills?',
    a: 'Yes, we specialize in physically damaged drive recovery. Whether your drive is clicking, not powering on, or has water or impact damage, our data recovery engineers near Beverly Hills are equipped with cleanroom tools to handle complex cases.',
  },
  {
    q: 'How secure is your data recovery process for Beverly Hills clients?',
    a: 'We prioritize data privacy and security. All Beverly Hills data recovery cases are handled in a secure environment, and your files are never shared or stored beyond the recovery process. Confidentiality agreements are also available upon request.',
  },
  {
    q: 'Do you recover data from iPhones and smartphones in Beverly Hills?',
    a: "Yes! We offer component-level iPhone data recovery in Beverly Hills and can recover data even from non-booting or physically damaged iPhones. Whether you need a full iTunes backup or file extraction, we're here to help."
  },
  {
    q: 'How do I get started with your Beverly Hills data recovery service?',
    a: 'Getting started is easy. Call us for a free consultation or request a free same-day pickup in Beverly Hills. You can also mail your device or visit our lab. Once we receive it, we\'ll provide a diagnostic and begin recovery as soon as you approve.',
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
      bgImage="/beverly-hills-hero.jpg"
      :trustBadges="trustBadges"
    />

    <StatsBar />

    <!-- SECTION 1 — s-white: Your Local Recovery Experts -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Your Local Recovery Experts</h2>
        <p class="s-body">From luxury retailers to entertainment professionals, we've assisted Beverly Hills clients in recovering critical data from:</p>
        <ul class="content-list">
          <li><NuxtLink to="/hard-drive-clicking" class="inline-link">Hard drives that are clicking</NuxtLink>, unresponsive, or damaged</li>
          <li>Devices exposed to water or showing signs of physical damage</li>
          <li>Drives with <NuxtLink to="/data-recovery/deleted-files" class="inline-link">deleted files</NuxtLink> or formatted partitions</li>
          <li><NuxtLink to="/data-recovery/ssd-data-recovery" class="inline-link">SSDs</NuxtLink> and flash drives experiencing failures</li>
          <li><NuxtLink to="/data-recovery/raid-data-recovery" class="inline-link">RAID systems</NuxtLink> suffering from corruption or multiple drive failures</li>
        </ul>
        <p class="s-body">Every recovery is performed securely, confidentially, and in-house by our expert engineers.</p>
      </div>
    </section>

    <!-- SECTION 2 — s-grey: Why Beverly Hills Clients Choose Us -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Why Beverly Hills Clients Choose Us</h2>
        <div class="reason-cards">
          <div class="reason-card">
            <h3 class="reason-title">No Recovery, No Charge Policy</h3>
            <p class="s-body">Clients pay only if the recovery is successful. We charge no upfront fees (except in specific cases like deleted file recovery) — giving you peace of mind and risk-free service.</p>
          </div>
          <div class="reason-card">
            <h3 class="reason-title">Free Same-Day Pickup in Beverly Hills</h3>
            <p class="s-body">If you're in a rush or can't come to us, we'll come to you. Our free same-day pickup service in Beverly Hills makes the process effortless.</p>
          </div>
          <div class="reason-card">
            <h3 class="reason-title">Fast Turnaround with Optional Expedited Services</h3>
            <p class="s-body">Standard recoveries take 3–5 business days, but we also offer two levels of expedited services for clients on tight deadlines.</p>
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
              <h3 class="step-title">Initial Device Check-Up and Diagnostics</h3>
              <p class="step-body">We begin by inspecting the device in a safe environment to determine the cause of failure.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">2</div>
            <div>
              <h3 class="step-title">Non-Invasive Cloning of the Device</h3>
              <p class="step-body">Our first recovery step is always to clone the original drive sector by sector.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">3</div>
            <div>
              <h3 class="step-title">File System and Data Repair</h3>
              <p class="step-body">After cloning, we analyze and rebuild the file system.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">4</div>
            <div>
              <h3 class="step-title">Client Review and Approval</h3>
              <p class="step-body">You'll receive a full list of the recovered files to review.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">5</div>
            <div>
              <h3 class="step-title">Final Delivery or Secure Upload</h3>
              <p class="step-body">Your recovered data is returned to you.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- DEVICES WE SUPPORT -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Devices We Support</h2>
        <ul class="content-list">
          <li><strong>USB Drives, SSDs, and HDD Storage</strong> — From portable USB flash drives to internal and external hard drives (both solid-state and spinning disks).</li>
          <li><strong>SD, microSD, and CF Cards</strong> — We recover lost files from memory cards used in cameras, phones, drones, and other digital devices.</li>
          <li><strong>RAID Arrays</strong> — Our engineers specialize in RAID data recovery for RAID 0, 1, 5, 10, and hybrid configurations.</li>
          <li><strong>iPhones (Component-Level Recovery)</strong> — We perform advanced hardware-level recovery on iPhones that have suffered severe physical damage or liquid exposure.</li>
          <li><strong>MacBooks &amp; iMacs (Component-Level Recovery)</strong> — If your Apple device won't turn on due to logic board damage, we can perform board level repairs to retrieve your data.</li>
        </ul>
      </div>
    </section>

    <!-- REVIEWS -->
    <ReviewsSection :reviews="reviews" />

    <!-- CONTACT BAND -->
    <section class="s-contact-band contact-band-bg">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Ready to Start?</h2>
        </div>
        <p class="contact-body-text">Five Star Data Recovery brings expert-level care and precision to your doorstep. Contact us today for data recovery in Beverly Hills, CA.</p>
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
.inline-link { color: #7A5500; font-weight: 600; text-decoration: underline; }
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
.s-contact-band { background: #0f1623; padding: 44px 0; border-top: 3px solid #C9A84C; border-bottom: 3px solid #C9A84C; }
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
.contact-band-bg { background: linear-gradient(to right, rgba(15,22,35,0.92) 0%, rgba(15,22,35,0.75) 60%, rgba(15,22,35,0.5) 100%), url('/contact-band-bg.jpg') center center / cover no-repeat !important; }
@media (max-width: 768px) { .reason-cards { grid-template-columns: 1fr; } }
</style>
