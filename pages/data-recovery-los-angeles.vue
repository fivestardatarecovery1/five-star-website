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
            "image": "https://www.fivestardatarecovery.com/logo.png",
            "priceRange": "$$",
            "telephone": "(818) 272-8866",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1731 S Brand Blvd",
              "addressLocality": "Glendale",
              "addressRegion": "CA",
              "postalCode": "91204",
              "addressCountry": "US"
            },
            "url": "https://www.fivestardatarecovery.com",
            "areaServed": { "@type": "Country", "name": "United States" },
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "498" }
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fivestardatarecovery.com/" },
              { "@type": "ListItem", "position": 2, "name": "Data Recovery Los Angeles", "item": "https://www.fivestardatarecovery.com/data-recovery-los-angeles/" }
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Do you offer professional data recovery services in Los Angeles, CA?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we specialize in professional data recovery in Los Angeles. Whether you're facing a failed hard drive, a corrupted SSD, or a non-responsive USB flash drive, our local recovery experts are here to help. We have over a decade of experience handling complex data loss scenarios, right here in the heart of Los Angeles." } },
              { "@type": "Question", "name": "How long does a typical Los Angeles data recovery take?", "acceptedAnswer": { "@type": "Answer", "text": "Most standard recoveries take 3\u20135 business days. If your situation is urgent, we offer both Expedited and Expedited Plus services. Every recovery begins with a thorough diagnostic and we provide same-day updates for all Los Angeles-based drop-offs or pickups." } },
              { "@type": "Question", "name": "Where is your data recovery lab located in Los Angeles?", "acceptedAnswer": { "@type": "Answer", "text": "Our certified recovery lab is just outside Los Angeles in Glendale, CA, and we proudly serve clients across the entire Los Angeles area. We also offer free same-day pickup for local clients and nationwide mail-in service for out-of-area recoveries." } },
              { "@type": "Question", "name": "Is there a free diagnostic included with your Los Angeles data recovery service?", "acceptedAnswer": { "@type": "Answer", "text": "Yes\u2014your diagnostic is free as long as you're comfortable with the initial flat-rate quote we provide upfront. There are no hidden fees or surprises. If the scope of the recovery changes, you'll have the option to approve the new rate or walk away without paying anything." } },
              { "@type": "Question", "name": "What types of devices do you recover data from in Los Angeles?", "acceptedAnswer": { "@type": "Answer", "text": "We recover data from hard drives, SSDs, external drives, USB flash drives, SD cards, iPhones, MacBooks, iMacs, RAID arrays, and more. Whether you lost files due to accidental deletion, physical damage, or logical failure, our team is equipped to recover your data securely and efficiently." } },
              { "@type": "Question", "name": "Do you offer emergency or same-day data recovery in Los Angeles?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we offer emergency data recovery services for Los Angeles clients. Our Expedited Plus Service is available 24/7 for time-sensitive situations. Your case is prioritized immediately, even outside normal business hours." } },
              { "@type": "Question", "name": "Can you recover data from water-damaged or physically broken devices in Los Angeles?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We specialize in recovering data from physically damaged devices\u2014including water-damaged hard drives, phones, MacBooks and SSDs. Our Los Angeles cleanroom lab is fully equipped to handle severe cases involving hardware failure." } },
              { "@type": "Question", "name": "Do you provide business data recovery for companies in Los Angeles?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we offer professional data recovery services for businesses throughout Los Angeles. From RAID systems and servers to encrypted drives and file systems, we handle business-critical recoveries with confidentiality and offer NDAs upon request." } },
              { "@type": "Question", "name": "What is your success rate for data recovery in Los Angeles?", "acceptedAnswer": { "@type": "Answer", "text": "We maintain a 98% success rate across most recovery cases. Thanks to our experienced engineers and certified cleanroom lab in Los Angeles, we're able to recover data from a wide range of devices, even those considered unrecoverable by others." } },
              { "@type": "Question", "name": "Is your Los Angeles data recovery lab certified?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, our facility is ISO-certified and operates in a professional Class 100 cleanroom environment. This ensures all physically damaged drives are handled under optimal conditions for maximum recovery success." } }
            ]
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Sarah K. (Los Angeles, CA)" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "Five Star Data Recovery saved my business files after a failed hard drive. Fast, transparent, and professional from start to finish.",
            "itemReviewed": { "@type": "LocalBusiness", "@id": "https://www.fivestardatarecovery.com/#business", "name": "Five Star Data Recovery" }
          }
        ]
      })
    }
  ]
})

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
    text: "After my external hard drive suddenly stopped showing up, I reached out to Five Star Data Recovery. They explained the process clearly and gave me a flat-rate price with no hidden fees. Within a few days, I had all my files back—including hundreds of family photos I thought were gone forever. Highly recommended!",
    name: 'Melissa C.',
    location: 'Los Angeles, CA',
  },
  {
    text: 'The team at Five Star was incredible! My RAID system failed, and I was on the verge of losing years of business data. They walked me through the recovery process, kept me updated daily, and delivered a full recovery within the estimated timeframe. Their professionalism and expertise gave me real peace of mind.',
    name: 'David R.',
    location: 'Los Angeles, CA',
  },
  {
    text: "I had a clicking hard drive that I thought was beyond saving. Five Star Data Recovery handled everything quickly and professionally. The fact that they don't charge unless they recover your data made the decision stress-free. Thankfully, they were able to recover everything I needed.",
    name: 'Jennifer M.',
    location: 'Los Angeles, CA',
  },
]

const faqs = [
  {
    q: 'Do you offer professional data recovery services in Los Angeles, CA?',
    a: "Yes, we specialize in professional data recovery in Los Angeles. Whether you're facing a failed hard drive, a corrupted SSD, or a non-responsive USB flash drive, our local recovery experts are here to help. We have over a decade of experience handling complex data loss scenarios, right here in the heart of Los Angeles.",
  },
  {
    q: 'How long does a typical Los Angeles data recovery take?',
    a: 'Most standard recoveries take 3–5 business days. If your situation is urgent, we offer both Expedited and Expedited Plus services. Every recovery begins with a thorough diagnostic and we provide same-day updates for all Los Angeles-based drop-offs or pickups.',
  },
  {
    q: 'Where is your data recovery lab located in Los Angeles?',
    a: 'Our certified recovery lab is just outside Los Angeles in Glendale, CA, and we proudly serve clients across the entire Los Angeles area. We also offer free same-day pickup for local clients and nationwide mail-in service for out-of-area recoveries.',
  },
  {
    q: 'Is there a free diagnostic included with your Los Angeles data recovery service?',
    a: "Yes—your diagnostic is free as long as you're comfortable with the initial flat-rate quote we provide upfront. There are no hidden fees or surprises. If the scope of the recovery changes, you'll have the option to approve the new rate or walk away without paying anything.",
  },
  {
    q: 'What types of devices do you recover data from in Los Angeles?',
    a: 'We recover data from hard drives, SSDs, external drives, USB flash drives, SD cards, iPhones, MacBooks, iMacs, RAID arrays, and more. Whether you lost files due to accidental deletion, physical damage, or logical failure, our team is equipped to recover your data securely and efficiently.',
  },
  {
    q: 'Do you offer emergency or same-day data recovery in Los Angeles?',
    a: 'Yes, we offer emergency data recovery services for Los Angeles clients. Our Expedited Plus Service is available 24/7 for time-sensitive situations. Your case is prioritized immediately, even outside normal business hours.',
  },
  {
    q: 'Can you recover data from water-damaged or physically broken devices in Los Angeles?',
    a: 'Absolutely. We specialize in recovering data from physically damaged devices—including water-damaged hard drives, phones, MacBooks and SSDs. Our Los Angeles cleanroom lab is fully equipped to handle severe cases involving hardware failure.',
  },
  {
    q: 'Do you provide business data recovery for companies in Los Angeles?',
    a: 'Yes, we offer professional data recovery services for businesses throughout Los Angeles. From RAID systems and servers to encrypted drives and file systems, we handle business-critical recoveries with confidentiality and offer NDAs upon request.',
  },
  {
    q: 'What is your success rate for data recovery in Los Angeles?',
    a: "We maintain a 98% success rate across most recovery cases. Thanks to our experienced engineers and certified cleanroom lab in Los Angeles, we're able to recover data from a wide range of devices, even those considered unrecoverable by others.",
  },
  {
    q: 'Is your Los Angeles data recovery lab certified?',
    a: 'Yes, our facility is ISO-certified and operates in a professional Class 100 cleanroom environment. This ensures all physically damaged drives are handled under optimal conditions for maximum recovery success.',
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
        <div class="two-col-layout">
          <div>
            <h2 class="s-heading">Free Same-Day Pickup in Los Angeles</h2>
            <p class="s-body">Can’t make it out to our lab? No problem. We offer free same-day pickup from most areas across Los Angeles. Whether you’re at your home, office, or school, just contact us before noon, and we’ll come to you. The easiest way to get your recovery started without leaving your space is available. This service is available from Monday to Friday. One more reason data recovery clients trust us to make the process easy.</p>
          </div>
          <div class="section-img-wrap">
            <img src="/los-angeles-data-recovery-lab.webp" alt="Free same-day pickup data recovery Los Angeles" class="section-img" width="1024" height="683" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2 — s-grey: Trusted by Locals Across LA -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Trusted by Locals Across LA</h2>
        <p class="s-body">We’re proud to be a top-rated data recovery company serving customers all over Los Angeles. Our data recovery clients include students, photographers, businesses, and IT teams. They come to us when it matters most. With high success rates, secure handling, and real technical expertise, we’ve helped thousands of satisfied customers. If you’re searching for Los Angeles data recovery that’s reliable and local—we’re the team to call.</p>
      </div>
    </section>

    <!-- SECTION 3 — s-white: What We Recover -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">What We Recover</h2>
        <p class="s-body">Our engineers recover files from nearly any storage device, including:</p>
        <ul class="content-list">
          <li>External and internal hard drives</li>
          <li>SSDs and hybrid drives</li>
          <li>Flash drives and SD cards</li>
          <li>Encrypted or password-protected storage</li>
          <li>RAID arrays, NAS, and servers</li>
          <li>Windows, macOS, and Linux systems</li>
        </ul>
        <p class="s-body">We handle cases involving physically damaged devices, accidental deletion, formatting, failed updates, and more. Whether you’re facing data loss after a crash or corruption, we’ll work to recover the data that matters to you.</p>
      </div>
    </section>

    <!-- SECTION 4 — s-grey: Hardware and Software Expertise -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Hardware and Software Expertise</h2>
        <p class="s-body">Hardware issues cause some data loss, while software failure causes others. Our recovery experts receive training in both hardware and software data recovery. Whether it’s a head crash or a virus, we’ll know how to handle it. We perform all recoveries that involve fixing internal drives in our Class 100 cleanroom. This cleanroom keeps delicate parts safe from dust and damage. Every cleanroom procedure is handled by certified engineers using anti-static protocols to ensure data integrity.</p>
        <p class="s-body">Our team also uses specialized tools to address firmware corruption, file system damage, and partition-level failures—ensuring we can recover data even from complex or hybrid failure scenarios.</p>
      </div>
    </section>

    <!-- SECTION 5 — s-white: Data Recovery Process -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Our 5-Step Data Recovery Process</h2>
        <div class="process-steps">
          <div class="process-step">
            <div class="step-num">1</div>
            <div>
              <h3 class="step-title">Free Evaluation</h3>
              <p class="step-body">We assess your device and provide a diagnostic report with a flat-rate quote—no obligation.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">2</div>
            <div>
              <h3 class="step-title">Drive Imaging</h3>
              <p class="step-body">We create a sector-by-sector clone of your storage device to preserve the original data.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">3</div>
            <div>
              <h3 class="step-title">Recovery Process</h3>
              <p class="step-body">Using advanced tools, we extract and rebuild the data from the cloned image.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">4</div>
            <div>
              <h3 class="step-title">File Review</h3>
              <p class="step-body">You review a list or preview of the recovered files before finalizing the case.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">5</div>
            <div>
              <h3 class="step-title">Data Delivery</h3>
              <p class="step-body">We transfer your recovered data to a new drive and return it securely.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- YOUR PRIVACY COMES FIRST -->
    <section class="s-grey">
      <div class="container">
        <div class="two-col-layout reverse">
          <div class="section-img-wrap">
            <img src="/los-angeles-data-recovery-service.webp" alt="Secure data recovery privacy Los Angeles" class="section-img" width="1024" height="683" loading="lazy" />
          </div>
          <div>
            <h2 class="s-heading">Your Privacy Comes First</h2>
            <p class="s-body">We treat your data with complete confidentiality—just like we’d want our own handled. Whether you are a student with lost essays or a business with private files, we take steps to keep your data safe. We also offer:</p>
            <ul class="content-list">
              <li>Optional NDAs for sensitive projects</li>
              <li>Secure file transfers and storage</li>
              <li>Permanent file deletion after delivery (on request)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- WHO WE HELP -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Who We Help</h2>
        <p class="s-body">We provide data recovery services in Los Angeles for a wide range of people and businesses, including:</p>
        <ul class="content-list">
          <li>Students who accidentally deleted assignments or lost access to school projects</li>
          <li>Small businesses experiencing server crashes or corrupted files</li>
          <li>Creative professionals like photographers, editors, and producers who need to restore media</li>
          <li>Home users trying to recover family photos, videos, or personal documents</li>
          <li>IT departments and tech consultants managing RAID, NAS, or multi-drive failures</li>
          <li>Legal, healthcare, and finance professionals needing secure, confidential recovery</li>
        </ul>
      </div>
    </section>

    <!-- REVIEWS -->
    <ReviewsSection :reviews="reviews" />

    <!-- CONTACT BAND -->
    <section class="s-contact-band contact-band-bg">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Let’s Recover Your Files</h2>
        </div>
        <p class="contact-body-text">If your files are stuck, corrupted, or just gone—don’t wait. Reach out to Five Star Data Recovery today. The sooner we start, the better your chance of a full recovery.</p>
        <ul class="contact-bullets">
          <li>Based near Los Angeles – Serving all surrounding areas</li>
          <li>Free same-day pickup available (Mon–Fri)</li>
          <li>Call us now or create a ticket online</li>
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
.s-contact-band { background: #0f1623; padding: 44px 0; border-top: 3px solid #C9A84C; border-bottom: 3px solid #C9A84C; }
.contact-band-bg { background: linear-gradient(to right, rgba(15,22,35,0.92) 0%, rgba(15,22,35,0.75) 60%, rgba(15,22,35,0.5) 100%), url('/los-angeles-contact-bg.webp') center center / cover no-repeat !important; }
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
.faq-answer :deep(.faq-link) { color: #C9A84C; font-weight: 600; text-decoration: underline; }
.two-col-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
.two-col-layout.reverse { direction: rtl; }
.two-col-layout.reverse > * { direction: ltr; }
.section-img-wrap { border-radius: 12px; overflow: hidden; }
.section-img { width: 100%; height: auto; display: block; border-radius: 12px; object-fit: cover; }
@media (max-width: 768px) { .two-col-layout, .two-col-layout.reverse { grid-template-columns: 1fr; direction: ltr; } }
</style>
