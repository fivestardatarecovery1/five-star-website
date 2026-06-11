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
            "image": "https://www.fivestardatarecovery.com/wp-content/uploads/logo.png",
            "telephone": "+1-818-272-8866",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1731 S Brand Blvd.",
              "addressLocality": "Glendale",
              "addressRegion": "CA",
              "postalCode": "91204",
              "addressCountry": "US"
            },
            "areaServed": [{ "@type": "Country", "name": "United States" }],
            "url": "https://www.fivestardatarecovery.com/",
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "498" },
            "review": [
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Amanda S." },
                "datePublished": "2024-11-20",
                "reviewBody": "I thought all hope was lost after my iPhone completely shut down and wouldn't turn back on. Apple couldn't help, but Five Star Data Recovery recovered all my photos and videos! The team was professional, patient, and explained every step. Worth every penny.",
                "name": "iPhone Recovery Success",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
              }
            ],
            "priceRange": "$950 flat rate"
          },
          {
            "@type": "Service",
            "name": "iPhone Data Recovery Services",
            "url": "https://www.fivestardatarecovery.com/data-recovery/iphone-data-recovery/",
            "areaServed": [{ "@type": "Country", "name": "United States" }],
            "description": "Advanced component-level iPhone data recovery for water-damaged, dead, or non-functional iPhones. Logic board repair, NAND extraction. $950 flat rate, $200 refundable deposit. No Data No Charge. Serving Glendale, Los Angeles, and nationwide."
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fivestardatarecovery.com/" },
              { "@type": "ListItem", "position": 2, "name": "Data Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/" },
              { "@type": "ListItem", "position": 3, "name": "iPhone Data Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/iphone-data-recovery/" }
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Can you recover data from a physically damaged iPhone?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our iPhone data recovery service specializes in retrieving data from physically damaged devices, including those with water damage, broken logic boards, or failed components. We perform component-level repairs in-house to safely extract data when standard software tools won't work." } },
              { "@type": "Question", "name": "What types of data can you recover from an iPhone?", "acceptedAnswer": { "@type": "Answer", "text": "We can recover photos, videos, contacts, messages, call logs, notes, and other important data stored directly on your iPhone. If the data is still on the device and hasn't been overwritten, we have a strong chance of recovering it\u2014even if the phone is no longer powering on." } },
              { "@type": "Question", "name": "Can you recover deleted files from an iPhone?", "acceptedAnswer": { "@type": "Answer", "text": "No, we do not offer deleted file recovery for iPhones. Our focus is on recovering data from physically damaged or non-functional iPhones, not files that were accidentally deleted from working devices." } },
              { "@type": "Question", "name": "How much does iPhone data recovery cost?", "acceptedAnswer": { "@type": "Answer", "text": "Our Component Level iPhone Data Recovery is offered at a flat rate of $950.00, with no hidden fees. When your case is brought in, we collect a $200 refundable deposit to begin the process. If we're unable to recover your data, the deposit is fully refunded\u2014as long as the device hasn't been previously tampered with at the component level. If the recovery is successful, the $200 deposit is applied toward the total cost, and the customer simply pays the remaining $750.00 balance. You only pay if we recover your data." } },
              { "@type": "Question", "name": "Can I ship my iPhone in for recovery?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer free nationwide shipping within the U.S. If you're located outside of our service area, we'll provide a prepaid shipping label so you can send your iPhone to our secure recovery lab with ease." } },
              { "@type": "Question", "name": "Is my data safe during the recovery process?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We follow strict security protocols and never access or share your personal data. Your privacy is a top priority, and all recovered data is returned to you securely." } },
              { "@type": "Question", "name": "Is there a no data, no charge policy?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our No Data, No Charge policy applies to all iPhone recoveries\u2014you only pay if we successfully recover your data. The only exceptions are cases where the phone's internal components have been tampered with or the cover has been opened, which may require a non-refundable evaluation fee." } },
              { "@type": "Question", "name": "What if my iPhone was repaired by another shop before I brought it in?", "acceptedAnswer": { "@type": "Answer", "text": "We can still attempt iPhone data recovery, even if another repair shop has worked on the device. However, if the iPhone has had component-level repair attempts (such as board work, micro-soldering, or chip replacements), a non-refundable $200.00 evaluation fee will apply due to the increased complexity and risk. This fee does not apply to basic repairs like screen or battery replacements. If your device has been previously opened for board-level service, please let us know during your consultation." } },
              { "@type": "Question", "name": "Can you recover data from an iPhone stuck in a boot loop or showing the Apple logo?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we specialize in iPhone data recovery from devices stuck in a boot loop or frozen on the Apple logo. These issues are often caused by system corruption or hardware failure. Our engineers perform board-level diagnostics to restore temporary functionality and extract your important files safely." } },
              { "@type": "Question", "name": "Do you recover data from iPhones that have been in saltwater or extreme conditions?", "acceptedAnswer": { "@type": "Answer", "text": "We do recover data from water-damaged iPhones, including those exposed to saltwater, rain, or extreme heat. Saltwater damage is particularly aggressive, so immediate evaluation is critical. Bring the phone to us as soon as possible and avoid powering it on\u2014this increases the chances of a successful iPhone data recovery." } }
            ]
          }
        ]
      })
    }
  ]
})

useSeoMeta({
  title: 'iPhone Data Recovery Services Experts - Five Star Data Recovery',
  ogTitle: 'iPhone Data Recovery Services Experts - Five Star Data Recovery',
  description: 'Is your iPhone stuck or not powering on? Our data recovery engineers specialize in component level recoveries on iPhones.',
  ogDescription: 'Is your iPhone stuck or not powering on? Our data recovery engineers specialize in component level recoveries on iPhones.',
})

const trustBadges = [
  { icon: 'clock', text: 'Available 24/7/365' },
  { icon: 'check', text: 'No Data = No Charge' },
  { icon: 'shield', text: '10+ Years in Business' },
  { icon: 'star', text: 'Free Nationwide Shipping' },
]

const reviews = [
  {
    text: "I thought all hope was lost after my iPhone completely shut down and wouldn&#39;t turn back on. Apple couldn&#39;t help, but Five Star Data Recovery recovered all my photos and videos! The team was professional, patient, and explained every step. Worth every penny.",
    name: 'Amanda S.',
    location: 'West Covina, CA',
  },
  {
    text: "I dropped my iPhone in a pool and thought everything was lost. Five Star recovered all of my data and gave me a clean iTunes backup I could restore to a new device. Their team kept me informed the whole time and the process was smooth and transparent.",
    name: 'Jason H.',
    location: 'Burbank, CA',
  },
  {
    text: "My iPhone wouldn&#39;t power on after a bad update, and no one else had a solution. Five Star was able to extract all of my important files, including family photos and notes, without restoring the full device. They let me choose what I wanted recovered, and delivered exactly that.",
    name: 'Emily T.',
    location: 'New York, NY',
  },
]

const faqs = [
  {
    q: 'Can you recover data from a physically damaged iPhone?',
    a: 'Yes. Our iPhone data recovery service specializes in retrieving data from physically damaged devices, including those with water damage, broken logic boards, or failed components. We perform <strong>component-level repairs in-house</strong> to safely extract data when standard software tools won&#39;t work.',
  },
  {
    q: 'What types of data can you recover from an iPhone?',
    a: 'We can recover <strong>photos, videos, contacts, messages, call logs, notes</strong>, and other important data stored directly on your iPhone. If the data is still on the device and hasn&#39;t been overwritten, we have a strong chance of recovering it — even if the phone is no longer powering on.',
  },
  {
    q: 'Can you recover deleted files from an iPhone?',
    a: '<strong>No</strong>, we do not offer deleted file recovery for iPhones. Our focus is on recovering data from <strong>physically damaged or non-functional iPhones</strong>, not files that were accidentally deleted from working devices.',
  },
  {
    q: 'How much does iPhone data recovery cost?',
    a: 'Our <strong>Component Level iPhone Data Recovery is offered at a flat rate of $950.00</strong>, with no hidden fees. When your case is brought in, we collect a <strong>$200 refundable deposit</strong> to begin the process. If we&#39;re unable to recover your data, the deposit is <strong>fully refunded</strong> — as long as the device hasn&#39;t been previously tampered with at the component level. If the recovery is successful, the $200 deposit is applied toward the total cost, and the customer simply pays the remaining $750.00 balance. You only pay if we recover your data. For more information, please visit our <a href="/data-recovery-service-pricing" class="faq-link">Pricing Page</a> or contact us for a free consultation.',
  },
  {
    q: 'Can I ship my iPhone in for recovery?',
    a: '<strong>Yes.</strong> We offer free nationwide shipping within the U.S. If you&#39;re located outside of our service area, we&#39;ll provide a prepaid shipping label so you can send your iPhone to our secure recovery lab with ease.',
  },
  {
    q: 'Is my data safe during the recovery process?',
    a: '<strong>Absolutely.</strong> We follow strict security protocols and never access or share your personal data. Your privacy is a top priority, and all recovered data is returned to you securely.',
  },
  {
    q: 'Is there a no data, no charge policy?',
    a: 'Yes. Our <strong>No Data, No Charge policy</strong> applies to all iPhone recoveries — you only pay if we successfully recover your data. The only exceptions are cases where the phone&#39;s internal components have been tampered with or the cover has been opened, which may require a non-refundable evaluation fee.',
  },
  {
    q: 'What if my iPhone was repaired by another shop before I brought it in?',
    a: 'We can still attempt iPhone data recovery, even if another repair shop has worked on the device. However, if the iPhone has had <strong>component-level repair attempts</strong> (such as board work, micro-soldering, or chip replacements), a <strong>non-refundable $200.00 evaluation fee</strong> will apply due to the increased complexity and risk. This fee does not apply to basic repairs like screen or battery replacements. If your device has been previously opened for board-level service, please let us know during your consultation.',
  },
  {
    q: 'Can you recover data from an iPhone stuck in a boot loop or showing the Apple logo?',
    a: 'Yes, we specialize in iPhone data recovery from devices <strong>stuck in a boot loop or frozen on the Apple logo</strong>. These issues are often caused by system corruption or hardware failure. Our engineers perform board-level diagnostics to restore temporary functionality and extract your important files safely.',
  },
  {
    q: 'Do you recover data from iPhones that have been in saltwater or extreme conditions?',
    a: 'We do recover data from water-damaged iPhones, including those exposed to <strong>saltwater, rain, or extreme heat</strong>. Saltwater damage is particularly aggressive, so <strong>immediate evaluation is critical</strong>. Bring the phone to us as soon as possible and avoid powering it on — this increases the chances of a successful iPhone data recovery.',
  },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <HeroSection
      title="iPhone Data Recovery Services"
      subtitle="Get Your Data Back In No Time."
      description="Has your iPhone suddenly gone dead? Water damaged? Stuck on the Apple logo or showing no signs of life? At Five Star Data Recovery, we specialize in advanced, component-level iPhone data recovery.<br><br>We do not offer deleted file recovery—our focus is on physically or electrically damaged iPhones. We may still be able to recover your data, even if someone says it&#39;s gone."
      bgImage="/iphone-data-recovery-hero.webp"
      :trustBadges="trustBadges"
    />

    <StatsBar />

    <!-- SECTION 1 — What We Can Recover -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">What We Can Recover</h2>
        <p class="s-body">Once we gain access to your iPhone&#39;s storage, we can recover:</p>
        <ul class="content-list">
          <li>Photos and videos</li>
          <li>Text messages and iMessages</li>
          <li>Contacts and calendars</li>
          <li>Call history</li>
          <li>WhatsApp and app data</li>
          <li>Full iTunes Backup of iPhone</li>
        </ul>
        <p class="s-body">If you have lost data from a drop, water damage, or a failed update, we can help. We will safely and professionally recover your data from your iPhone.</p>
      </div>
    </section>

    <!-- SECTION 2 — Common Reasons -->
    <section class="s-grey">
      <div class="container">
        <div class="two-col-layout">
          <div>
            <h2 class="s-heading">Common Reasons iPhones Need Data Recovery</h2>
            <p class="s-body">Many clients come to us after Apple or another repair shop says the phone is &ldquo;non-repairable.&rdquo; We work on iPhones with:</p>
            <ul class="content-list">
              <li>Water or liquid damage</li>
              <li>Complete power failure</li>
              <li>iPhones stuck in boot loop or Apple logo</li>
              <li>Burned logic boards</li>
              <li>Broken NAND or baseband components</li>
              <li>Short circuits after third-party repair attempts</li>
            </ul>
            <p class="s-body">If you lost data on your iPhone or iOS device, we can help. Our data recovery services can get your data back.</p>
          </div>
          <div class="section-img-wrap">
            <img src="/iphone-component-recovery.webp" alt="iPhone component-level data recovery — disassembled iPhone logic board repair" class="section-img" width="1600" height="1200" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3 — Component-Level Recovery -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">What Is Component-Level iPhone Data Recovery?</h2>
        <p class="s-body">Unlike basic repair shops or software tools, we don&#39;t rely on the phone&#39;s system to be working. Instead, our engineers perform iPhone data recovery directly at the logic board level. This means:</p>
        <ul class="content-list">
          <li>We repair individual chips and traces on the board.</li>
          <li>We revive critical circuits like NAND, CPU, and power management ICs.</li>
          <li>Once stable, we extract the full data from the device&#39;s internal memory.</li>
        </ul>
        <p class="s-body">This process is essential when the phone is dead, water-damaged, or severely malfunctioning. The most advanced and accurate method of iOS data recovery available is this.</p>
      </div>
    </section>

    <!-- SECTION 4 — Recovery Process -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Our iPhone Data Recovery Process</h2>
        <p class="s-body">Our recovery process is safe, thorough, and 100% focused on recovering your data—not fixing your phone.</p>
        <div class="process-steps">
          <div class="process-step">
            <div class="step-num">1</div>
            <div>
              <h3 class="step-title">Free Diagnostic</h3>
              <p class="step-body">We assess the board for damage.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">2</div>
            <div>
              <h3 class="step-title">Flat-Rate Quote</h3>
              <p class="step-body">We provide upfront <NuxtLink to="/data-recovery-service-pricing" class="inline-link">pricing</NuxtLink> before any recovery work begins.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">3</div>
            <div>
              <h3 class="step-title">Board-Level Repair</h3>
              <p class="step-body">We restore basic functions only to access your data.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">4</div>
            <div>
              <h3 class="step-title">Secure Extraction</h3>
              <p class="step-body">We perform a complete data recovery from iPhone memory.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">5</div>
            <div>
              <h3 class="step-title">Delivery</h3>
              <p class="step-body">We return your files on a USB drive or through secure digital transfer.</p>
            </div>
          </div>
        </div>
        <p class="s-body" style="margin-top:24px;">Our secure Glendale lab handles all data recovery in-house. No outsourcing. No third-party access.</p>
      </div>
    </section>

    <!-- SECTION 5 — Trusted Recovery -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Trusted iPhone Data Recovery in Glendale, CA</h2>
        <p class="s-body">We serve clients locally in Glendale and across the country via our mail-in service. Whether you&#39;re nearby or out-of-state, you&#39;ll receive the same expert care and high success rate. We support:</p>
        <ul class="content-list">
          <li>All iPhone models (6 through 15, including Pro/Pro Max)</li>
          <li>iOS devices like iPads (select cases)</li>
          <li>Devices damaged by fire, liquid, or failed repairs</li>
        </ul>
        <p class="s-body">We are proud to be a leading iPhone data recovery service with thousands of successful cases.</p>
      </div>
    </section>

    <!-- REVIEWS -->
    <ReviewsSection :reviews="reviews" />

    <!-- SECTION 6 — Why Clients Choose -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Why Clients Choose Five Star Data Recovery</h2>
        <ul class="content-list">
          <li>Real component-level logic board repair</li>
          <li>Specialized equipment for iPhone-level diagnostics</li>
          <li>Private, secure, and confidential service</li>
          <li>Transparent communication throughout the process</li>
          <li>No data, no charge – guaranteed</li>
        </ul>
      </div>
    </section>

    <!-- QUOTE FORM -->
    <QuoteFormSection
      description="When Apple says it&#39;s gone and no one else can help, our engineers work at the logic board level to revive just enough of your iPhone to extract every photo, message, and file you need."
      bullet1="All iPhone models — 6 through 15 Pro Max"
      bullet2="Water damage, dead phones, boot loops, burned boards"
      bullet3="$950 flat rate — $200 refundable deposit, no data no charge"
      closing="Don&#39;t power it on again — every boot attempt risks more damage. Fill out the form and let our iPhone specialists evaluate your device for free."
      bgImage="/iphone-data-recovery-hero.webp"
    />

    <!-- CONTACT BAND -->
    <section class="s-contact-band contact-band-bg">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Start Your Data Recovery Today</h2>
        </div>
        <p class="contact-body-text">If you have lost important data on your iPhone or iOS device, our team can help you recover it. We provide the best data recovery service for iPhones in Glendale and nearby areas. We can help with water-damaged devices and completely dead phones.</p>
        <ul class="contact-bullets">
          <li>Walk in to our lab in Glendale, CA</li>
          <li>Mail in your device from anywhere in the U.S.</li>
          <li>Call now for a free diagnostic</li>
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
.content-list { list-style: none; padding: 0 0 0 20px; margin: 0 0 20px; display: flex; flex-direction: column; gap: 10px; }
.content-list li { font-size: 0.95rem; color: #4a5568; line-height: 1.65; position: relative; padding-left: 16px; }
.content-list li::before { content: '»'; color: #C9A84C; font-weight: 900; position: absolute; left: -4px; top: 0; }
.two-col-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
.section-img-wrap { border-radius: 12px; overflow: hidden; }
.section-img { width: 100%; height: auto; display: block; border-radius: 12px; object-fit: cover; }
.process-steps { display: flex; flex-direction: column; }
.process-step { display: flex; align-items: flex-start; gap: 24px; padding: 28px 0; border-bottom: 1px solid #e2e6ee; }
.process-step:last-child { border-bottom: none; }
.step-num { width: 48px; height: 48px; background: #1a1a2e; color: #C9A84C; font-size: 1.2rem; font-weight: 900; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.step-title { font-size: 1rem; font-weight: 800; color: #1a1a2e; margin-bottom: 8px; }
.step-body { font-size: 0.93rem; color: #4a5568; line-height: 1.7; margin: 0; }
.s-contact-band { background: #0f1623; padding: 44px 0; border-top: 3px solid #C9A84C; border-bottom: 3px solid #C9A84C; }
.contact-band-bg { background: linear-gradient(to right, rgba(15,22,35,0.92) 0%, rgba(15,22,35,0.75) 60%, rgba(15,22,35,0.5) 100%), url('/iphone-component-recovery.webp') center center / cover no-repeat !important; }
.contact-banner-card { border: none; border-radius: 0; padding: 0; margin-bottom: 16px; }
.contact-banner-heading { font-size: clamp(1.4rem, 2.5vw, 1.9rem); font-weight: 900; color: #fff; margin: 0; }
.contact-body-text { font-size: 0.95rem; color: rgba(255,255,255,0.7); line-height: 1.75; margin-bottom: 20px; }
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
@media (max-width: 768px) { .two-col-layout { grid-template-columns: 1fr; } }
</style>
