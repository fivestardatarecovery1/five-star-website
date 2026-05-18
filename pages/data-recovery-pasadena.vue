<script setup lang="ts">
useSeoMeta({
  title: 'Data Recovery Services in Pasadena CA - Five Star Data Recovery',
  description: 'Need Data Recovery Services near the Pasadena, CA area? Our team can help you recover your lost data. Contact us for a free diagnosis!',
  ogTitle: 'Data Recovery Services in Pasadena CA - Five Star Data Recovery',
  ogDescription: 'Need Data Recovery Services near the Pasadena, CA area? Our team can help you recover your lost data. Contact us for a free diagnosis!',
  ogUrl: 'https://www.fivestardatarecovery.com/data-recovery-pasadena-ca/',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Data Recovery Services in Pasadena CA - Five Star Data Recovery',
  twitterDescription: 'Need Data Recovery Services near the Pasadena, CA area? Our team can help you recover your lost data. Contact us for a free diagnosis!',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
})

const trustedBullets = [
  'Crashed hard drives',
  'Clicking or non-spinning drives',
  'Failed SSDs and flash drives',
  'Water-damaged or dropped devices',
  'Deleted files and formatted media',
  'Damaged RAID arrays and servers',
]

const whyChooseUs = [
  { title: 'Free Diagnostics', text: 'No-cost, no-obligation evaluation to assess your data recovery case.' },
  { title: 'Fast Turnaround Options', text: 'Rush and Expedited services available for time-sensitive cases. Flat-rate pricing with no hidden fees.' },
  { title: 'Class 100 Clean Room', text: 'Safe environment for physically damaged drives and internal repairs.' },
  { title: 'Component-Level Repairs', text: "We specialize in board-level and firmware recovery others can't handle." },
  { title: 'Flat Rate Pricing', text: 'Transparent pricing — no hidden fees or hourly charges.' },
]

const recoveryDevices = [
  { title: 'Hard Drives (HDDs)', link: '/data-recovery/hard-drive-recovery', text: 'We recover data from failed internal and external hard drives due to mechanical or logical issues, including SSDs and USB flash drives.' },
  { title: 'Solid State Drives (SSDs)', link: '/data-recovery/ssd-recovery', text: 'We retrieve lost data from SSDs with firmware errors, bad blocks, or sudden failure.' },
  { title: 'iPhones and Mobile Devices', link: '/data-recovery/iphone-recovery', text: "We perform component-level recovery from iPhones that won't power on or are stuck in boot loops." },
  { title: 'RAID Arrays and NAS Devices', link: '/data-recovery/raid-recovery', text: 'We recover critical business and personal data from failed or degraded RAID/NAS systems.' },
  { title: 'USB Flash Drives', link: '/data-recovery/usb-recovery', text: 'We handle broken or corrupted USB drives, including chip-off recovery when needed.' },
]

const processIntro = ''
const steps = [
  { num: '1', title: 'Free Evaluation', text: 'We assess your device at no cost to determine the issue and recovery options.' },
  { num: '2', title: 'Cloning and Analysis', text: 'Your drive is cloned to avoid further damage, and our engineers analyze the copy.' },
  { num: '3', title: 'Data Extraction', text: 'We extract recoverable data from the cloned image using advanced tools.' },
  { num: '4', title: 'Verification', text: 'Recovered files are reviewed and validated for completeness and integrity.' },
  { num: '5', title: 'Delivery', text: 'Your data is transferred to a new drive and returned securely.' },
]

const driveTypesIntro = ''
const driveTypesOutro = ''

const tipIntro = 'Before bringing your device to us, here are a few basic checks:'
const tipOutro = 'If your device still does not work or makes unusual noises, stop using it immediately to prevent permanent data loss.'
const tips = [
  'Power off the device immediately if it makes unusual sounds',
  'Do not attempt to open the device or use DIY recovery software',
  'Contact our lab for a free evaluation before attempting any repairs',
  'Keep the device in a safe, dry location until you bring it to us',
]

const d2Texts = [
  'Many people assume that a manufacturer warranty covers data recovery. Unfortunately, this isn\'t true. Warranties typically cover hardware replacement—not data recovery services.',
  'In most cases, if you return the device to the manufacturer, they will wipe or destroy your data. Contact a professional data recovery lab before making any warranty claims.',
]
const d3Texts = [
  'Data Recovery Pasadena CA devices can fail due to a variety of causes including physical damage, firmware corruption, electrical issues, and normal wear over time.',
  'Even routine use can lead to data loss over time. That\'s why it\'s critical to address early signs of failure immediately and avoid DIY recovery attempts that can make recovery more difficult.',
]
const d4Texts = [
  'Once we complete the recovery process, we transfer your verified files to a clean, functioning drive. You can supply your own replacement drive or purchase one directly from us.',
  'We strongly recommend backing up your recovered files in at least two locations moving forward. That way, you\'ll never have to go through another data recovery process again.',
]

const midBody = [
  'Yes! We offer both Expedited Service (during business hours) and Expedited Plus (24/7/365) for Pasadena clients. If you need your data recovered urgently, just give us a call and we’ll get your case prioritized immediately.',
  'Yes! We offer both Expedited Service (during business hours) and Expedited Plus (24/7/365) for Pasadena clients. If you need your data recovered urgently, just give us a call and we’ll get your case prioritized immediately.',
]

const contactText = 'If you\'re experiencing issues with your Data Recovery Pasadena CA, don\'t wait. Acting early gives you the best chance of recovering your data safely and completely.'
const contactList = [
  'Visit our lab in Glendale, CA',
  'Mail your drive to us from anywhere in the U.S.',
  'Call us today for a free evaluation',
]
const contactOutro = 'Trust our experts for fast, secure, and professional data recovery pasadena ca — and get back what matters most.'

const reviews = [
  {
    text: 'I needed urgent help after my external hard drive suddenly stopped working. I called Five Star and was shocked at how fast they acted — they picked up my drive from my Pasadena office <strong>within an hour</strong> of creating the ticket. Two days later, I had all my data back. Truly professional and reliable.',
    name: 'Ann M',
    location: 'Pasadena, CA'
  },
  {
    text: "Even though their lab isn't directly in Pasadena, it was <strong>only a 15-minute drive</strong> and well worth it. They recovered every single file from my failed MacBook, including irreplaceable family photos. The service was fast, friendly, and honest from start to finish.",
    name: 'Antonio R.',
    location: 'Pasadena, CA'
  },
  {
    text: 'Five Star handled my NAS recovery like true pros. The diagnosis was free, pricing was transparent, and they even sent updates during the process. I was impressed with how knowledgeable the team was. I wouldn\'t trust anyone else with my data again.',
    name: 'Hillary T.',
    location: 'Pasadena, CA'
  },
]

const faqs = [
  { q: 'Is your lab located in Pasadena, CA?', a: 'Although we are not located in Pasadena, CA, we’re only minutes away and proudly offer same-day free pickup service for all Pasadena residents and businesses. Simply give us a call, and we’ll create a ticket and schedule a pickup the same day to get your recovery started immediately.' },
  { q: 'Do you offer emergency data recovery services in Pasadena?', a: 'Yes! We offer both Expedited Service (during business hours) and Expedited Plus (24/7/365) for Pasadena clients. If you need your data recovered urgently, just give us a call and we’ll get your case prioritized immediately.' },
  { q: 'How quickly can you recover data for Pasadena customers?', a: 'Most standard recoveries are completed within 1–3 business days, but we also offer same-day evaluations and rush service. Thanks to our free pickup option in Pasadena, we can begin recovery within hours of your call.' },
  { q: 'What types of devices do you recover data from in Pasadena?', a: 'We recover data from external hard drives, MacBooks, PC laptops, RAID/NAS systems, USB drives, and SD cards — no matter the failure type or operating system. If you’re in Pasadena and not sure if your device qualifies, we offer free diagnostics.' },
  { q: 'Is the pickup service really free for Pasadena clients?', a: 'Yes — 100% free. There’s no fee for pickup or evaluation. You only pay if you approve the recovery. We believe in fair, transparent service for all of Pasadena and surrounding areas.' },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }

useHead({
  script: [{
    type: 'application/ld+json',
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": "https://www.fivestardatarecovery.com/#localbusiness",
          "name": "Five Star Data Recovery",
          "image": "https://www.fivestardatarecovery.com/wp-content/uploads/logo.png",
          "url": "https://www.fivestardatarecovery.com/data-recovery-pasadena-ca/",
          "telephone": "(818) 272-8866",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1731 S Brand Blvd",
            "addressLocality": "Glendale",
            "addressRegion": "CA",
            "postalCode": "91204",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 34.1233,
            "longitude": -118.2567
          },
          "areaServed": [
            { "@type": "Place", "name": "Pasadena, CA" },
            { "@type": "Country", "name": "United States" }
          ],
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
              "opens": "10:00",
              "closes": "18:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "opens": "10:00",
              "closes": "14:00"
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "498"
          },
          "priceRange": "$300-$950",
          "review": [
            {
              "@type": "Review",
              "author": { "@type": "Person", "name": "Ann M. \u2013 Pasadena, CA" },
              "reviewRating": { "@type": "Rating", "ratingValue": 5 },
              "reviewBody": "I needed urgent help after my external hard drive suddenly stopped working. I called Five Star and was shocked at how fast they acted \u2014 they picked up my drive from my Pasadena office within an hour of creating the ticket. Two days later, I had all my data back. Truly professional and reliable.",
              "datePublished": "2025-07-11"
            },
            {
              "@type": "Review",
              "author": { "@type": "Person", "name": "Antonio R. \u2013 Pasadena, CA" },
              "reviewRating": { "@type": "Rating", "ratingValue": 5 },
              "reviewBody": "Even though their lab isn't directly in Pasadena, it was only a 15-minute drive and well worth it. They recovered every single file from my failed MacBook, including irreplaceable family photos. The service was fast, friendly, and honest from start to finish.",
              "datePublished": "2025-07-11"
            },
            {
              "@type": "Review",
              "author": { "@type": "Person", "name": "Hillary T. \u2013 Pasadena, CA" },
              "reviewRating": { "@type": "Rating", "ratingValue": 5 },
              "reviewBody": "Five Star handled my NAS recovery like true pros. The diagnosis was free, pricing was transparent, and they even sent updates during the process. I was impressed with how knowledgeable the team was. I wouldn't trust anyone else with my data again.",
              "datePublished": "2025-07-11"
            }
          ]
        },
        {
          "@type": "WebPage",
          "@id": "https://www.fivestardatarecovery.com/data-recovery-pasadena-ca/#webpage",
          "url": "https://www.fivestardatarecovery.com/data-recovery-pasadena-ca/",
          "name": "Data Recovery Pasadena CA - Five Star Data Recovery",
          "description": "Reliable and fast data recovery services for Pasadena, CA. We provide expert recovery for hard drives, SSDs, phones, and more with free same-day pickup and free diagnostics.",
          "inLanguage": "en-US",
          "isPartOf": { "@id": "https://www.fivestardatarecovery.com/#website" }
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.fivestardatarecovery.com/data-recovery-pasadena-ca/#breadcrumb",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fivestardatarecovery.com/" },
            { "@type": "ListItem", "position": 2, "name": "Data Recovery Pasadena CA", "item": "https://www.fivestardatarecovery.com/data-recovery-pasadena-ca/" }
          ]
        },
        {
          "@type": "Service",
          "serviceType": "Data Recovery Services in Pasadena CA",
          "areaServed": [
            { "@type": "Place", "name": "Pasadena, CA" },
            { "@type": "Country", "name": "United States" }
          ],
          "provider": { "@id": "https://www.fivestardatarecovery.com/#localbusiness" },
          "url": "https://www.fivestardatarecovery.com/data-recovery-pasadena-ca/",
          "description": "Five Star Data Recovery offers professional data recovery services to Pasadena, CA clients. Whether you're an individual or a business, we help recover data from hard drives, SSDs, RAID systems, and mobile devices."
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Is your lab located in Pasadena, CA?",
              "acceptedAnswer": { "@type": "Answer", "text": "Although we are not located in Pasadena, CA, we're only minutes away and proudly offer same-day free pickup service for all Pasadena residents and businesses. Simply give us a call, and we'll create a ticket and schedule a pickup the same day to get your recovery started immediately." }
            },
            {
              "@type": "Question",
              "name": "Do you offer emergency data recovery services in Pasadena?",
              "acceptedAnswer": { "@type": "Answer", "text": "Yes! We offer both Expedited Service (during business hours) and Expedited Plus (24/7/365) for Pasadena clients. If you need your data recovered urgently, just give us a call and we'll get your case prioritized immediately." }
            },
            {
              "@type": "Question",
              "name": "How quickly can you recover data for Pasadena customers?",
              "acceptedAnswer": { "@type": "Answer", "text": "Most standard recoveries are completed within 1\u20133 business days, but we also offer same-day evaluations and rush service. Thanks to our free pickup option in Pasadena, we can begin recovery within hours of your call." }
            },
            {
              "@type": "Question",
              "name": "What types of devices do you recover data from in Pasadena?",
              "acceptedAnswer": { "@type": "Answer", "text": "We recover data from external hard drives, MacBooks, PC laptops, RAID/NAS systems, USB drives, and SD cards \u2014 no matter the failure type or operating system. If you're in Pasadena and not sure if your device qualifies, we offer free diagnostics." }
            },
            {
              "@type": "Question",
              "name": "Is the pickup service really free for Pasadena clients?",
              "acceptedAnswer": { "@type": "Answer", "text": "Yes \u2014 100% free. There's no fee for pickup or evaluation. You only pay if you approve the recovery. We believe in fair, transparent service for all of Pasadena and surrounding areas." }
            }
          ]
        }
      ]
    })
  }]
})
</script>

<template>
  <div class="page-content">
    <NavBar />

    <HeroSection
      title="Data Recovery Pasadena, CA"
      subtitle="Get Your Data Back In No Time."
      description="If you&rsquo;ve experienced data loss&mdash;whether it&rsquo;s from a crashed hard drive, a damaged SD card, or a non-responsive USB stick&mdash;Five Star Data Recovery is here to help. We offer professional, affordable, and fast data recovery services tailored to the needs of clients in Pasadena, CA.<br><br>While we&rsquo;re located in nearby Glendale, CA, we offer free same-day pickup in Pasadena for added convenience."
      bgImage="/data-recovery-pasadena-ca.jpg"
    />

    <StatsBar />

    <!-- TRUSTED + WHY CHOOSE US — 2-col white -->
    <section class="s-white">
      <div class="container two-col-boxes">

        <!-- Left: Trusted Data Recovery Services -->
        <div class="info-box">
          <h2 class="info-box-heading">Trusted Data Recovery Services in Pasadena</h2>
          <p class="s-body">Whether you're a student, business owner, creative professional, or just someone with important files, we understand how devastating data loss can be. Our team has successfully recovered data from:</p>
          <ul class="bullet-list">
            <li v-for="b in trustedBullets" :key="b">{{ b }}</li>
          </ul>
          <p class="s-body s-mt">We handle each recovery case with care, precision, and confidentiality. From routine to complex cases, our engineers work to bring your data back safely.</p>
        </div>

        <!-- Right: Why Choose Us -->
        <div class="info-box">
          <h2 class="info-box-heading">Why Choose Us for Data Recovery in Pasadena?</h2>
          <ul class="why-list">
            <li v-for="item in whyChooseUs" :key="item.title">
              <strong>{{ item.title }}</strong>
              <span>{{ item.text }}</span>
            </li>
          </ul>
        </div>

      </div>
    </section>

    <!-- PROCESS + DEVICES — 2-col grey -->
    <section class="s-grey">
      <div class="container two-col-boxes">

        <!-- Left: Our Recovery Process -->
        <div class="info-box">
          <h2 class="info-box-heading">Our Recovery Process</h2>
          <ol class="process-ol">
            <li v-for="step in steps" :key="step.num">
              <strong>{{ step.title }}</strong>
              <span>{{ step.text }}</span>
            </li>
          </ol>
        </div>

        <!-- Right: Devices We Recover Data From -->
        <div class="info-box">
          <h2 class="info-box-heading">Devices We Recover Data From</h2>
          <ul class="device-list">
            <li v-for="d in recoveryDevices" :key="d.title">
              <NuxtLink :to="d.link" class="device-link"><strong>{{ d.title }}</strong></NuxtLink>
              <span>{{ d.text }}</span>
            </li>
          </ul>
        </div>

      </div>
    </section>

    <!-- FULL-WIDTH BANNER -->
    <section class="fullwidth-banner">
      <div class="banner-overlay" />
      <div class="container banner-inner">
        <h2 class="banner-heading">See Why Thousands Trust Us With Their Important Data</h2>
        <p class="banner-sub">Data loss is stressful — but working with us doesn't have to be. Watch how our team handles each recovery with care, professionalism, and precision. From diagnostics to delivery, we offer flat-rate pricing, honest communication, and proven results — all from our secure Glendale lab.</p>
        <div class="banner-stats">
          <div class="bstat"><span class="bstat-num">99%</span><span class="bstat-lbl">Recovery Success Rate</span></div>
          <div class="bstat-div" />
          <div class="bstat"><span class="bstat-num">3–5</span><span class="bstat-lbl">Day Standard Turnaround</span></div>
          <div class="bstat-div" />
          <div class="bstat"><span class="bstat-num">$0</span><span class="bstat-lbl">If We Can't Recover</span><em class="bstat-note">(Most Cases)</em></div>
          <div class="bstat-div" />
          <div class="bstat"><span class="bstat-num">24/7</span><span class="bstat-lbl">Available Support</span></div>
        </div>
      </div>
    </section>

    <!-- FAQ — grey -->
    <section class="s-grey">
      <div class="container">
        <div class="section-label center">Got Questions?</div>
        <h2 class="s-heading center">Frequently Asked Questions</h2>
        <div class="faq-wrap">
          <div v-for="(faq, i) in faqs" :key="i" class="faq-row" :class="{ active: openFaq === i }">
            <button class="faq-trigger" @click="toggleFaq(i)">
              <span>{{ faq.q }}</span>
              <span class="faq-toggle">{{ openFaq === i ? '−' : '+' }}</span>
            </button>
            <div v-if="openFaq === i" class="faq-answer" v-html="faq.a" />
          </div>
        </div>
      </div>
    </section>

    
    <!-- MID-PAGE FORM -->
    <section class="mid-form-section" style="background: linear-gradient(to right, rgba(50,52,58,0.92) 0%, rgba(50,52,58,0.72) 50%, rgba(30,32,38,0.2) 100%), url('/data-recovery-los-angeles-ca.webp') right center / cover no-repeat;">
      <div class="container mid-form-inner">
        <div class="mid-form-text">
          <div class="section-label light">Get Started</div>
          <h2 class="dark-heading">Need Help With Your Data Recovery Pasadena CA?</h2>
          <p v-for="t in midBody" :key="t" class="dark-body">{{ t }}</p>
          <div class="dark-features">
            <div class="df"><span class="df-check">✓</span> Free same-day evaluation</div>
            <div class="df"><span class="df-check">✓</span> Flat-rate pricing, no surprises</div>
            <div class="df"><span class="df-check">✓</span> No data recovered = no charge <em class="df-note">(most cases)</em></div>
          </div>
        </div>
        <div class="mid-form-card">
          <h3 class="mid-form-title">Get a Free Quote in Minutes!</h3>
          <form @submit.prevent class="mid-consult-form">
            <div class="mf-row">
              <div class="mf-group">
                <label>NAME <span class="mf-req">*</span></label>
                <input type="text" placeholder="Name / Required" class="mf-input" />
              </div>
              <div class="mf-group">
                <label>EMAIL <span class="mf-req">*</span></label>
                <input type="email" placeholder="Email Address / Required" class="mf-input" />
              </div>
            </div>
            <div class="mf-row">
              <div class="mf-group">
                <label for="mf-device-type">SELECT YOUR DEVICE TYPE</label>
                <div class="mf-select-wrap">
                  <select id="mf-device-type" class="mf-input">
                    <option value="">— Select (Optional) —</option>
                    <option>Hard Drive</option><option>SSD</option><option>RAID/Server</option>
                    <option>External HDD</option><option>Mac/iMac</option><option>iPhone/Mobile</option>
                    <option>USB Flash Drive</option><option>SD Card</option><option>NAS Device</option><option>Other</option>
                  </select>
                </div>
              </div>
              <div class="mf-group">
                <label>PHONE</label>
                <input type="tel" placeholder="Phone Number" class="mf-input" />
              </div>
            </div>
            <div class="mf-row">
              <div class="mf-group">
                <label for="mf-device-issue">SELECT ISSUE WITH DEVICE</label>
                <div class="mf-select-wrap">
                  <select id="mf-device-issue" class="mf-input">
                    <option value="">Select Issue</option>
                    <option>Not Detected / Not Showing Up</option><option>Clicking / Grinding Noise</option>
                    <option>Water Damage</option><option>Corrupted Files</option><option>Accidental Deletion</option>
                    <option>Physical Damage</option><option>Not Spinning</option><option>Other</option>
                  </select>
                </div>
              </div>
              <div class="mf-group">
                <label>Preferred Contact Method</label>
                <div class="mf-radio-group">
                  <label class="mf-radio"><input type="radio" name="contactDataRec" value="call" checked /> CALL</label>
                  <label class="mf-radio"><input type="radio" name="contactDataRec" value="email" /> EMAIL</label>
                  <label class="mf-radio"><input type="radio" name="contactDataRec" value="text" /> TEXT</label>
                </div>
              </div>
            </div>
            <div class="mf-group mf-full">
              <label for="mf-response-time">PREFERRED RESPONSE TIME</label>
              <div class="mf-select-wrap">
                <select id="mf-response-time" class="mf-input">
                  <option value="">Select Preferred Time</option>
                  <option>Immediately (24/7)</option><option>During Business Hours</option>
                  <option>Morning (8am – 12pm)</option><option>Afternoon (12pm – 5pm)</option><option>Evening (5pm – 8pm)</option>
                </select>
              </div>
            </div>
            <button type="submit" class="mf-submit">Request a Consultation</button>
          </form>
        </div>
      </div>
    </section>

    <!-- REVIEWS — white -->
    <ReviewsSection :reviews="reviews" />

    
    <!-- VIDEO SECTION -->
    <section class="page-video-section">
      <div class="container page-video-inner">
        <div class="page-video-copy">
          <h2 class="page-video-heading">See Why Thousands Trust Us With Their Important Data</h2>
          <p class="page-video-desc">Data loss is stressful — but working with us doesn't have to be. Watch how our team handles each recovery with care, professionalism, and precision. From diagnostics to delivery, we offer flat-rate pricing, honest communication, and proven results — all from our secure Glendale lab.</p>
        </div>
        <div class="page-video-embed">
          <iframe src="https://www.youtube.com/embed/14ACFHJ24hg?start=60" title="Five Star Data Recovery" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
        </div>
      </div>
    </section>

    <!-- CONTACT BAND -->
    <section class="s-contact-band">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Contact Us for Data Recovery Pasadena CA</h2>
        </div>
        <div class="contact-body">
          <p class="contact-body-text">{{ contactText }}</p>
          <ul class="contact-bullets">
            <li v-for="item in contactList" :key="item">{{ item }}</li>
          </ul>
          <p v-if="contactOutro" class="contact-outro">{{ contactOutro }}</p>
        </div>
        <NuxtLink to="/start-recovery" class="btn-start-recovery">Start Your Recovery</NuxtLink>
      </div>
    </section>

    <FooterBar />
  </div>
</template>

<style scoped>
*, *::before, *::after { box-sizing: border-box; }
.page-content { font-family: 'Inter', sans-serif; color: #1a1a2e; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 28px; }
.s-white { background: #fff; padding: 88px 0; }
.s-grey  { background: #f4f7fc; padding: 88px 0; }
.section-label { font-size: 0.72rem; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; color: #7a5900; margin-bottom: 10px; }
.section-label.center { text-align: center; }
.section-label.light { color: #C9A84C; }
.s-heading { font-size: clamp(1.5rem, 2.8vw, 2.1rem); font-weight: 900; color: #1a1a2e; line-height: 1.25; margin-bottom: 14px; }
.s-heading.center { text-align: center; }
.s-intro { font-size: 1rem; color: #4a5568; line-height: 1.75; margin-bottom: 40px; }
.s-intro.center { text-align: center; max-width: 680px; margin-left: auto; margin-right: auto; }
.s-body { font-size: 0.94rem; color: #4a5568; line-height: 1.8; margin-bottom: 14px; }
.s-outro { font-size: 0.94rem; color: #4a5568; line-height: 1.8; margin-top: 32px; padding-top: 24px; border-top: 1px solid #e8ecf2; }
.s-mt { margin-top: 16px; }
.issues-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 28px; }
.issue-card { background: #fff; border: 1px solid #e8ecf2; border-radius: 14px; padding: 36px 32px; box-shadow: 0 2px 20px rgba(0,0,0,0.06); position: relative; overflow: hidden; }
.issue-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: #C9A84C; }
.issue-icon { font-size: 1.8rem; margin-bottom: 14px; line-height: 1; }
.issue-title { font-size: 1.1rem; font-weight: 800; color: #1a1a2e; margin-bottom: 14px; line-height: 1.3; }
.issue-body { font-size: 0.91rem; color: #4a5568; line-height: 1.75; }
.asym-layout { display: grid; grid-template-columns: 2fr 3fr; gap: 64px; align-items: center; }
.asym-major { position: relative; }
.rounded-img { width: 100%; border-radius: 14px; display: block; object-fit: cover; max-height: 420px; }
.img-stat-badge { position: absolute; bottom: -20px; left: 24px; background: #C9A84C; color: #fff; border-radius: 10px; padding: 14px 22px; box-shadow: 0 8px 24px rgba(201,168,76,0.4); }
.stat-num { display: block; font-size: 1.6rem; font-weight: 900; line-height: 1; }
.stat-label { display: block; font-size: 0.75rem; font-weight: 600; opacity: 0.85; margin-top: 3px; }
.check-list { list-style: none; padding: 0; margin: 16px 0 0; }
.check-list li { padding: 9px 0 9px 26px; position: relative; font-size: 0.91rem; color: #4a5568; border-bottom: 1px solid #e8ecf2; }
.check-list li::before { content: '✓'; position: absolute; left: 0; color: #C9A84C; font-weight: 700; }
.process-track { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; position: relative; margin: 8px 0 36px; }
.process-node { position: relative; padding: 0 16px; text-align: center; }
.process-circle { width: 56px; height: 56px; border-radius: 50%; background: #1a1a2e; color: #C9A84C; font-size: 1.1rem; font-weight: 900; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; border: 2px solid #C9A84C; }
.process-connector { position: absolute; top: 27px; left: calc(50% + 28px); width: calc(100% - 56px); height: 2px; background: linear-gradient(90deg, #C9A84C, rgba(201,168,76,0.3)); }
.process-title { font-size: 0.85rem; font-weight: 700; color: #1a1a2e; margin-bottom: 10px; line-height: 1.3; }
.process-body { font-size: 0.83rem; color: #4a5568; line-height: 1.65; }
.guarantee-strip { background: #1a1a2e; border-radius: 10px; padding: 18px 28px; display: flex; align-items: center; gap: 16px; }
.guarantee-icon { font-size: 1.5rem; flex-shrink: 0; }
.guarantee-strip p { margin: 0; color: rgba(255,255,255,0.8); font-size: 0.92rem; line-height: 1.5; }
.guarantee-strip strong { color: #C9A84C; }
.split-40-60 { display: grid; grid-template-columns: 2fr 3fr; gap: 64px; align-items: center; }
.drives-table { width: 100%; border-collapse: collapse; margin-top: 16px; }
.drive-cell { padding: 10px 12px; font-size: 0.9rem; color: #2d3748; border-bottom: 1px solid #e8ecf2; vertical-align: top; width: 50%; }
.drive-check { color: #C9A84C; font-weight: 700; margin-right: 6px; }
.fullwidth-banner { position: relative; background: #0d111f; padding: 72px 0; overflow: hidden; }
.banner-overlay { position: absolute; inset: 0; background: url('/hard-drive-data-recovery-specialist-glendale-ca.jpg') center/cover no-repeat; opacity: 0.12; }
.banner-inner { position: relative; text-align: center; }
.banner-heading { font-size: clamp(1.6rem, 3vw, 2.4rem); font-weight: 900; color: #fff; margin-bottom: 14px; }
.banner-sub { font-size: 1rem; color: rgba(255,255,255,0.65); max-width: 640px; margin: 0 auto 48px; line-height: 1.7; }
.banner-stats { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; }
.bstat { text-align: center; padding: 0 40px; }
.bstat-num { display: block; font-size: 2.2rem; font-weight: 900; color: #C9A84C; line-height: 1; margin-bottom: 6px; }
.bstat-lbl { display: block; font-size: 0.82rem; color: rgba(255,255,255,0.6); }
.bstat-note { display: block; font-size: 0.72rem; color: rgba(255,255,255,0.4); font-style: italic; margin-top: 3px; }
.bstat-div { width: 1px; height: 48px; background: rgba(255,255,255,0.15); }
.dual-col { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
.dual-box { background: #fff; border: 1px solid #e8ecf2; border-radius: 14px; padding: 36px; }
.s-grey .dual-box { background: #fff; }
.dual-icon { font-size: 2rem; margin-bottom: 14px; }
.dual-heading { font-size: 1.1rem; font-weight: 800; color: #1a1a2e; margin-bottom: 14px; }
.arrow-list { list-style: none; padding: 0; margin: 12px 0 0; }
.arrow-list li { padding: 8px 0 8px 22px; position: relative; font-size: 0.88rem; color: #4a5568; }
.arrow-list li::before { content: '→'; position: absolute; left: 0; color: #C9A84C; font-weight: 700; }
.mid-form-section { position: relative; padding: 72px 0; overflow: hidden; }
.mid-form-inner { position: relative; display: grid; grid-template-columns: 1fr 480px; gap: 60px; align-items: center; }
.mid-form-card { background: #fff; border-radius: 8px; padding: 32px 32px 28px; box-shadow: 0 20px 60px rgba(0,0,0,0.4); }
.mid-form-title { font-size: 20px; font-weight: 800; color: #1a1a2e; margin-bottom: 20px; padding-bottom: 14px; border-bottom: 2px solid #f0f0f0; }
.mid-consult-form { display: flex; flex-direction: column; gap: 14px; }
.mf-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.mf-group { display: flex; flex-direction: column; gap: 5px; }
.mf-group label { font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: #555; }
.mf-req { color: #e53935; }
.mf-full { grid-column: 1 / -1; }
.mf-input { height: 52px; border: 1px solid #ddd; border-radius: 6px; padding: 0 16px; font-size: 15px; color: #333; background: #fff; width: 100%; box-sizing: border-box; font-family: inherit; appearance: none; }
.mf-input:focus { outline: none; border-color: #C9A84C; }
.mf-select-wrap { position: relative; }
.mf-select-wrap .mf-input { padding-right: 36px; cursor: pointer; }
.mf-radio-group { display: flex; gap: 14px; align-items: center; height: 40px; }
.mf-radio { display: flex; align-items: center; gap: 5px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #444; cursor: pointer; }
.mf-radio input { width: 14px; height: 14px; accent-color: #C9A84C; cursor: pointer; }
.mf-submit { width: 100%; height: 62px; background: #C9A84C; color: #1a1a1a; font-weight: 800; font-size: 18px; border: none; border-radius: 6px; cursor: pointer; font-family: inherit; margin-top: 4px; transition: background 0.2s; }
.mf-submit:hover { background: #b8923e; }
.dark-heading { font-size: clamp(1.5rem, 2.5vw, 2rem); font-weight: 900; color: #fff; margin-bottom: 18px; line-height: 1.25; }
.dark-body { font-size: 0.94rem; color: rgba(255,255,255,0.72); line-height: 1.8; margin-bottom: 14px; }
.dark-features { margin-top: 24px; display: flex; flex-direction: column; gap: 10px; }
.df { font-size: 0.9rem; color: rgba(255,255,255,0.85); display: flex; align-items: center; gap: 10px; }
.df-check { color: #C9A84C; font-weight: 700; }
.df-note { font-size: 0.8rem; color: rgba(255,255,255,0.5); }
.page-video-section { background: #2a2d38; padding: 70px 0; }
.page-video-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
.page-video-copy { display: flex; flex-direction: column; gap: 20px; }
.page-video-heading { font-size: clamp(1.4rem, 2.5vw, 2rem); font-weight: 800; color: #fff; line-height: 1.25; }
.page-video-desc { font-size: 0.95rem; color: #9ba3b8; line-height: 1.8; }
.page-video-embed { position: relative; border-radius: 14px; overflow: hidden; aspect-ratio: 16/9; box-shadow: 0 12px 48px rgba(0,0,0,0.4); }
.page-video-embed iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }
.s-contact-band { background: #fff; padding: 64px 0; }
.contact-banner-card { background: linear-gradient(to right, #1a1a2e 55%, rgba(26,26,46,0.75) 100%), url('/hard-drive-data-recovery-specialist-glendale-ca.jpg') right center / cover no-repeat; border-radius: 12px; padding: 40px 48px; margin-bottom: 28px; min-height: 120px; display: flex; align-items: center; overflow: hidden; }
.contact-banner-heading { font-size: clamp(1.3rem, 2.5vw, 1.8rem); font-weight: 900; color: #fff; line-height: 1.25; max-width: 560px; margin: 0; }
.contact-body { margin-bottom: 28px; }
.contact-body-text { font-size: 0.95rem; color: #2d3748; line-height: 1.75; margin-bottom: 14px; }
.contact-bullets { list-style: disc; padding-left: 20px; margin: 0 0 12px; }
.contact-bullets li { font-size: 0.9rem; color: #4a5568; padding: 3px 0; }
.contact-outro { font-size: 0.9rem; color: #4a5568; }
.btn-start-recovery { display: block; width: 100%; text-align: center; background: #C9A84C; color: #1a1a1a; padding: 18px; border-radius: 8px; font-weight: 800; font-size: 1.05rem; text-decoration: none; letter-spacing: 0.04em; transition: background 0.2s; }
.btn-start-recovery:hover { background: #b8923e; }
.faq-wrap { margin: 40px 0 0; display: flex; flex-direction: column; gap: 8px; }
.faq-row { border: 1.5px solid #e2e8f0; border-radius: 10px; overflow: hidden; background: #fff; }
.faq-row.active { border-color: #C9A84C; }
.faq-trigger { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; background: none; border: none; color: #1a1a2e; font-size: 1rem; font-weight: 700; cursor: pointer; text-align: left; gap: 16px; font-family: inherit; }
.faq-toggle { color: #C9A84C; font-size: 1.4rem; font-weight: 300; flex-shrink: 0; line-height: 1; }
.faq-answer { padding: 4px 24px 20px; font-size: 0.9rem; color: #4a5568; line-height: 1.8; border-top: 1px solid #f0f2f7; }
.faq-answer :deep(.faq-link) { color: #C9A84C; font-weight: 600; text-decoration: underline; }
.faq-answer :deep(.faq-link:hover) { color: #b8923e; }
@media (max-width: 1024px) {
  .asym-layout { grid-template-columns: 1fr 1fr; }
  .process-track { grid-template-columns: 1fr 1fr; gap: 24px; }
  .process-connector { display: none; }
  .mid-form-inner { grid-template-columns: 1fr 440px; gap: 40px; }
}
@media (max-width: 768px) {
  .asym-layout, .split-40-60, .mid-form-inner, .dual-col { grid-template-columns: 1fr; gap: 36px; }
  .page-video-inner { grid-template-columns: 1fr; }
  .issues-grid { grid-template-columns: 1fr; }
  .bstat-div { display: none; }
  .img-stat-badge { bottom: 12px; }
  .mf-row { grid-template-columns: 1fr; }
}
@media (max-width: 480px) {
  .process-track { grid-template-columns: 1fr; }
}

/* Two-column info boxes (Trusted + Why Choose Us / Process + Devices) */
.two-col-boxes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  align-items: start;
}
.info-box {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 36px 32px;
}
.s-grey .info-box { background: #fff; }
.info-box-heading {
  font-size: 1.15rem;
  font-weight: 800;
  color: #1a1a2e;
  margin-bottom: 18px;
  line-height: 1.3;
}
.bullet-list {
  list-style: disc;
  padding-left: 20px;
  margin: 14px 0;
  color: #4a5568;
  font-size: 0.94rem;
  line-height: 2;
}
.why-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.why-list li {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.why-list li strong {
  font-size: 0.95rem;
  font-weight: 700;
  color: #1a1a2e;
}
.why-list li span {
  font-size: 0.88rem;
  color: #4a5568;
  line-height: 1.65;
}
.process-ol {
  list-style: decimal;
  padding-left: 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
  color: #4a5568;
}
.process-ol li {
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding-left: 4px;
}
.process-ol li strong {
  font-size: 0.95rem;
  font-weight: 700;
  color: #1a1a2e;
}
.process-ol li span {
  font-size: 0.88rem;
  color: #4a5568;
  line-height: 1.65;
  font-style: italic;
}
.device-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.device-list li {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.device-link {
  text-decoration: none;
  color: inherit;
}
.device-link:hover strong { color: #c62828; text-decoration: underline; }
.device-list li strong {
  font-size: 0.95rem;
  font-weight: 700;
  color: #1a1a2e;
}
.device-list li span {
  font-size: 0.88rem;
  color: #4a5568;
  line-height: 1.65;
}
@media (max-width: 768px) {
  .two-col-boxes { grid-template-columns: 1fr; }
  .info-box { padding: 24px 20px; }
}
</style>
