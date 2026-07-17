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
                "author": { "@type": "Person", "name": "Elijah B." },
                "datePublished": "2024-11-21",
                "reviewBody": "My external drive was clicking and completely inaccessible. These guys recovered everything\u2014amazing service!",
                "name": "Clicking Drive Recovery",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
              }
            ],
            "priceRange": "$300 - $950"
          },
          {
            "@type": "Service",
            "name": "Clicking Hard Drive Data Recovery",
            "url": "https://www.fivestardatarecovery.com/data-recovery/clicking-hard-drive-data-recovery/",
            "areaServed": [{ "@type": "Country", "name": "United States" }],
            "description": "Professional data recovery for clicking hard drives. Flat-rate pricing, cleanroom repairs, and expedited services available. Serving Glendale, Los Angeles, and offering nationwide mail-in recovery."
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fivestardatarecovery.com/" },
              { "@type": "ListItem", "position": 2, "name": "Data Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/" },
              { "@type": "ListItem", "position": 3, "name": "Clicking Hard Drive Data Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/clicking-hard-drive-data-recovery/" }
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "What causes a hard drive to start clicking?", "acceptedAnswer": { "@type": "Answer", "text": "A clicking hard drive usually indicates internal mechanical failure. This often happens due to damaged read/write heads, actuator arm issues, or spindle motor problems. When your HDD starts clicking, it's critical to stop using the drive immediately to prevent further platter damage and permanent data loss." } },
              { "@type": "Question", "name": "Can you recover data from a clicking hard drive?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. At Five Star Data Recovery, we specialize in clicking hard drive recovery. Our engineers use Class 100 clean room technology to safely open the drive and replace damaged components like heads or actuators, giving us the best chance at recovering your important files." } },
              { "@type": "Question", "name": "Is it safe to power on a clicking hard drive multiple times?", "acceptedAnswer": { "@type": "Answer", "text": "No. Powering on a clicking hard drive repeatedly can cause the heads to scratch the platters, making data recovery much more difficult or impossible. If your HDD is clicking, turn it off immediately and contact a professional data recovery service." } },
              { "@type": "Question", "name": "How long does hard drive clicking recovery take?", "acceptedAnswer": { "@type": "Answer", "text": "Standard turnaround for hard drive clicking cases is 3–5 business days. However, if you need faster service, we offer Expedited and Expedited Plus options for priority handling. Expedited Plus gives you 24/7 engineer attention until the recovery is complete." } },
              { "@type": "Question", "name": "How much does clicking hard drive recovery cost?", "acceptedAnswer": { "@type": "Answer", "text": "We offer a flat-rate fee of $950 for all hard drive clicking data recovery cases. This price includes all clean room labor and necessary donor parts. There are no hidden fees, and you only pay if we successfully recover your data." } },
              { "@type": "Question", "name": "Do all clicking hard drives require clean room service?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Clicking sounds almost always indicate internal mechanical failure. These cases require clean room opening and part replacement to safely access the data." } },
              { "@type": "Question", "name": "Can data recovery software fix a clicking hard drive?", "acceptedAnswer": { "@type": "Answer", "text": "No. Software cannot repair physical damage inside a clicking hard drive. Attempting software recovery on a mechanically failing drive can worsen the issue and reduce your chances of successful recovery." } },
              { "@type": "Question", "name": "Do you recover all brands of clicking hard drives?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We recover data from all major hard drive brands including Western Digital, Seagate, Toshiba, Hitachi, and others. Whether internal or external, we handle all types of clicking HDD recoveries." } },
              { "@type": "Question", "name": "What type of data can you recover from a clicking drive?", "acceptedAnswer": { "@type": "Answer", "text": "We can recover photos, videos, documents, databases, and other important files from clicking hard drives. Once the recovery is complete, we provide you with a full file list before you decide to proceed." } },
              { "@type": "Question", "name": "Do you offer a No Data, No Charge policy for clicking hard drives?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. For all standard clicking hard drive recovery cases, you won't pay anything unless we successfully recover your data. The only exceptions are for drives previously opened or tampered with." } }
            ]
          }
        ]
      })
    }
  ]
})

useSeoMeta({
  title: 'Hard Drive Clicking - Five Star Data Recovery',
  ogTitle: 'Hard Drive Clicking - Five Star Data Recovery',
  description: 'Trust our certified engineers for Hard Drive Clicking Sound Fixing Services. Get fast data recovery with a free consultation and diagnosis.',
  ogDescription: 'Trust our certified engineers for Hard Drive Clicking Sound Fixing Services. Get fast data recovery with a free consultation and diagnosis.',
  ogImage: 'https://www.fivestardatarecovery.com/hard-drive-clicking-sound-data-recovery.webp',
})

const trustBadges = [
  { icon: 'clock', text: 'Available 24/7/365' },
  { icon: 'check', text: 'No Data = No Charge' },
  { icon: 'shield', text: '10+ Years in Business' },
  { icon: 'star', text: 'Free Nationwide Shipping' },
]

const reviews = [
  {
    text: "My external hard drive started making loud clicking sounds, and I knew something was seriously wrong. I called Five Star Data Recovery, and Elen explained the process and got my case checked in right away. Within a week, they recovered all of my photos and work documents. Their communication was excellent from start to finish.",
    name: 'Eric S.',
    location: 'Burbank, CA',
  },
  {
    text: "I had a Western Digital drive that started clicking and wouldn't mount at all. After reading reviews, I shipped it to Five Star Data Recovery. Vahan and his team did an amazing job. They explained that the heads had failed and performed a clean room recovery. I got back 97% of my files!",
    name: 'Jasmine T.',
    location: 'Dallas, TX',
  },
  {
    text: "My desktop hard drive was making a clicking noise after a power outage. Alex handled the recovery and explained that the internal heads were damaged. They replaced the parts and recovered almost all of my data. The flat-rate pricing with no surprises made the experience stress-free.",
    name: 'Luis M.',
    location: 'Glendale, CA',
  },
]

const faqs = [
  {
    q: 'What causes a hard drive to start clicking?',
    a: "A clicking hard drive usually indicates internal mechanical failure. This often happens due to damaged read/write heads, actuator arm issues, or spindle motor problems. When your HDD starts clicking, it's critical to stop using the drive immediately to prevent further platter damage and permanent data loss.",
  },
  {
    q: 'Can you recover data from a clicking hard drive?',
    a: "Yes. At Five Star Data Recovery, we specialize in clicking hard drive recovery. Our engineers use Class 100 clean room technology to safely open the drive and replace damaged components like heads or actuators, giving us the best chance at recovering your important files.",
  },
  {
    q: 'Is it safe to power on a clicking hard drive multiple times?',
    a: "No. Powering on a clicking hard drive repeatedly can cause the heads to scratch the platters, making data recovery much more difficult or impossible. If your HDD is clicking, turn it off immediately and contact a professional data recovery service.",
  },
  {
    q: 'How long does hard drive clicking recovery take?',
    a: "Standard turnaround for hard drive clicking cases is 3–5 business days. However, if you need faster service, we offer Expedited and Expedited Plus options for priority handling. Expedited Plus gives you 24/7 engineer attention until the recovery is complete.",
  },
  {
    q: 'How much does clicking hard drive recovery cost?',
    a: "We offer a flat-rate fee of $950 for all hard drive clicking data recovery cases. This price includes all clean room labor and necessary donor parts. There are no hidden fees, and you only pay if we successfully recover your data.",
  },
  {
    q: 'Do all clicking hard drives require clean room service?',
    a: "Yes. Clicking sounds almost always indicate internal mechanical failure. These cases require clean room opening and part replacement to safely access the data.",
  },
  {
    q: 'Can data recovery software fix a clicking hard drive?',
    a: "No. Software cannot repair physical damage inside a clicking hard drive. Attempting software recovery on a mechanically failing drive can worsen the issue and reduce your chances of successful recovery.",
  },
  {
    q: 'Do you recover all brands of clicking hard drives?',
    a: "Yes. We recover data from all major hard drive brands including Western Digital, Seagate, Toshiba, Hitachi, and others. Whether internal or external, we handle all types of clicking HDD recoveries.",
  },
  {
    q: 'What type of data can you recover from a clicking drive?',
    a: "We can recover photos, videos, documents, databases, and other important files from clicking hard drives. Once the recovery is complete, we provide you with a full file list before you decide to proceed.",
  },
  {
    q: "Do you offer a No Data, No Charge policy for clicking hard drives?",
    a: "Yes. For all standard clicking hard drive recovery cases, you won't pay anything unless we successfully recover your data. The only exceptions are for drives previously opened or tampered with.",
  },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">


    <HeroSection
      title="Hard Drive Clicking"
      subtitle="Get Your Data Back In No Time."
      description="Is your hard drive suddenly making a clicking sound? Don't ignore it—this could be a serious warning sign. At Five Star Data Recovery, we focus on getting data back from drives with mechanical issues. This includes the annoying hard drive clicking sound. If your drive has started clicking, ticking, or making repeated noises when powered on, power it down immediately. A clicking hard drive can get worse quickly. The longer it runs, the harder and more costly it is to recover your data."
      bgImage="/hard-drive-clicking-sound-data-recovery.webp"
      :trustBadges="trustBadges"
    />

    <StatsBar />

    <!-- SECTION 1 — What Is the Clicking Sound -->
    <section class="s-white">
      <div class="container">
        <div class="two-col-layout">
          <div>
            <h2 class="s-heading">What Is the Clicking Sound in a Hard Drive?</h2>
            <p class="s-body">When you hear a clicking hard disk drive, you're likely hearing the read/write head trying to find data, but failing. Instead of reading the correct track, it keeps resetting and trying again, causing a rhythmic "click-click-click" sound. People commonly refer to this issue as the <strong>click of death</strong>, and it represents one of the most serious symptoms a drive can show. In most cases, it's a mechanical failure—something inside the drive is either broken or misaligned.</p>
          </div>
          <div class="section-img-wrap">
            <img src="/clicking-hard-drive-internal-640.webp" alt="Open hard drive internal components — platters and read/write heads" class="section-img" width="640" height="427" loading="lazy"
               srcset="/clicking-hard-drive-internal-640.webp 640w, /clicking-hard-drive-internal-800.webp 800w, /clicking-hard-drive-internal-1280.webp 1280w"
               sizes="(max-width: 640px) calc(100vw - 48px), (max-width: 1024px) 50vw, 640px" />
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2 — Common Causes -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Common causes of a clicking hard drive</h2>
        <p class="s-body">A hard drive making clicking noise usually signals internal damage. Some of the most common causes include:</p>
        <ul class="content-list">
          <li><strong>Head Crash:</strong> The read/write head physically touches the platter, damaging the surface and data.</li>
          <li><strong>Power Surge:</strong> Electrical spikes can damage the circuit board or firmware.</li>
          <li><strong>Stuck Heads:</strong> The heads fail to return to the parked position and keep trying to reset.</li>
          <li><strong>Factory Defects:</strong> Sometimes, drives leave the factory with underlying issues that worsen over time.</li>
          <li><strong>Impact Damage:</strong> Drops or shocks, especially while running, can cause severe internal damage.</li>
        </ul>
        <p class="s-body">Regardless of the cause, if your HDD is clicking, it's best to stop using it immediately to prevent further damage.</p>
      </div>
    </section>

    <!-- SECTION 3 — Why Not DIY -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Why you shouldn't try to fix a clicking hard drive yourself</h2>
        <p class="s-body">We understand—you want your data back fast, and DIY videos make it look simple. But opening a drive or running software on a damaged disk often causes more harm than good. Here's why you should avoid DIY recovery on a clicking hard disk drive:</p>
        <ul class="content-list">
          <li>Opening a drive outside a <NuxtLink to="/data-recovery/clean-room-data-recovery" class="inline-link">cleanroom</NuxtLink> introduces dust and contamination.</li>
          <li>Trying to restart or format the drive can overwrite recoverable data.</li>
          <li>Recovery software doesn't fix mechanical issues—it can actually make them worse.</li>
          <li>Failed DIY attempts often increase the cost of professional recovery.</li>
        </ul>
        <p class="s-body">If your hard drive is clicking, unplug it and bring it to a professional. Every second it runs can reduce the chance of recovery.</p>
      </div>
    </section>

    <!-- SECTION 4 — How We Recover -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">How We Recover Data from a Clicking Hard Drive</h2>
        <p class="s-body">At Five Star Data Recovery, we use advanced tools and a certified cleanroom to safely recover data from physically damaged drives—including those with head crashes and hard drive clicking symptoms.</p>
        <div class="process-steps">
          <div class="process-step">
            <div class="step-num">1</div>
            <div>
              <h3 class="step-title">Free Diagnostic</h3>
              <p class="step-body">We start by evaluating your drive in our lab. If it's clicking, we'll perform non-invasive tests to confirm the type of failure and estimate the chance of recovery.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">2</div>
            <div>
              <h3 class="step-title">Cleanroom Evaluation</h3>
              <p class="step-body">If internal repair is needed, we open the drive in our certified cleanroom. Our engineers inspect the heads, platters, PCB, and other components.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">3</div>
            <div>
              <h3 class="step-title">Component Replacement</h3>
              <p class="step-body">We may replace damaged parts (like the read/write heads) using donor drives with matching firmware and parts.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">4</div>
            <div>
              <h3 class="step-title">Imaging and Recovery</h3>
              <p class="step-body">Once the drive is stable, we create a full disk image. This lets us extract data without relying on the original, unstable hardware.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">5</div>
            <div>
              <h3 class="step-title">File Verification and Delivery</h3>
              <p class="step-body">We verify your recovered files and transfer them to a new drive that you provide or purchase from us. No Data, No Charge — If we can't recover your data, you don't pay.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 5 — What to Do -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">What to Do if Your HDD Is Clicking</h2>
        <p class="s-body">If your HDD is clicking, follow these steps immediately:</p>
        <ul class="content-list">
          <li><strong>Turn It Off</strong> — Do not power on the drive again until a qualified data recovery professional has properly diagnosed it.</li>
          <li><strong>Do Not Attempt Repairs</strong> — Avoid opening the drive or tapping on it to stop the sound.</li>
          <li><strong>Avoid Software Scans</strong> — Do not attempt to use any data recovery software on a hard drive that clicks.</li>
          <li><strong>Contact a Specialist</strong> — Time is critical. The longer a failing drive runs, the worse the damage can get.</li>
        </ul>
      </div>
    </section>

    <!-- SECTION 6 — Drives We Commonly See -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Drives We Commonly See with Clicking Issues</h2>
        <p class="s-body">We recover data from all brands and models affected by hard drive clicking, including:</p>
        <ul class="content-list">
          <li>Seagate</li>
          <li>Western Digital (WD)</li>
          <li>Toshiba</li>
          <li>Samsung</li>
          <li>Hitachi (HGST)</li>
          <li>LaCie external drives</li>
          <li>G-Technology drives</li>
          <li>RAID arrays and NAS units</li>
        </ul>
        <p class="s-body">Whether it's an internal desktop HDD or an external portable drive, we have the tools and experience to help.</p>
      </div>
    </section>

    <!-- SECTION 7 — Secure & Confidential -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Secure, Confidential, and In-House</h2>
        <p class="s-body">Your data is private—and we treat it that way. All recoveries are performed in our secure Glendale, CA lab. We never outsource your device, and we permanently delete recovered data after delivery.</p>
        <ul class="content-list">
          <li>Certified Cleanroom Lab</li>
          <li>In-House Engineers Only</li>
          <li>Surveillance and Access Control</li>
          <li>NDA Available Upon Request</li>
        </ul>
      </div>
    </section>

    <!-- REVIEWS -->
    <ClientOnly>
      <LazyReviewsSection :reviews="reviews" />
    </ClientOnly>
    <!-- SECTION 8 — Why Choose Five Star -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Why Choose Five Star Data Recovery?</h2>
        <ul class="content-list">
          <li>Experts in clicking hard drive recovery</li>
          <li>Full in-house cleanroom repair</li>
          <li>Clear communication throughout</li>
          <li>Flat-rate pricing — no surprise fees</li>
          <li>"No Data, No Charge" guarantee</li>
          <li>Located in Glendale, CA — Nationwide mail-in service available</li>
        </ul>
      </div>
    </section>

    <!-- QUOTE FORM -->
    <ClientOnly>
    <LazyQuoteFormSection
      description="A clicking hard drive is a medical emergency for your data. Our ISO 5 cleanroom engineers use donor parts and precision head-swap procedures to stabilize and image your drive before the platters sustain further damage."
      bullet1="ISO 5 Certified Cleanroom"
      bullet2="$950 flat rate — all parts included"
      bullet3="No Data, No Charge (most cases)"
      closing="Power off your drive now and do not plug it back in. Fill out the form and we'll reach out with a free evaluation."
      bgImage="/hard-drive-clicking-sound-data-recovery.webp"
    />
    </ClientOnly>

    <!-- CONTACT BAND -->
    <section class="s-contact-band contact-band-bg">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Contact Us for Clicking Hard Drive Recovery</h2>
        </div>
        <p class="contact-body-text">If your hard drive is making a clicking noise, don't wait. The sooner we look at it, the better your chances of a full recovery. We're here to help you safely and professionally recover what matters most.</p>
        <ul class="contact-bullets">
          <li>Power down immediately — every second counts</li>
          <li>Free diagnostic — no obligation</li>
          <li>$950 flat-rate — no hidden fees</li>
          <li>ISO 5 certified cleanroom</li>
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
.content-list { list-style: none; padding: 0 0 0 20px; margin: 0 0 20px; display: flex; flex-direction: column; gap: 10px; }
.content-list li { font-size: 0.95rem; color: #4a5568; line-height: 1.65; position: relative; padding-left: 16px; }
.content-list li::before { content: '»'; color: #C9A84C; font-weight: 900; position: absolute; left: -4px; top: 0; }
.two-col-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
.section-img-wrap { border-radius: 12px; overflow: hidden; }
.section-img { width: 100%; height: auto; display: block; border-radius: 12px; object-fit: cover; }
@media (max-width: 768px) { .two-col-layout { grid-template-columns: 1fr; } }
.process-steps { display: flex; flex-direction: column; }
.process-step { display: flex; align-items: flex-start; gap: 24px; padding: 28px 0; border-bottom: 1px solid #e2e6ee; }
.process-step:last-child { border-bottom: none; }
.step-num { width: 48px; height: 48px; background: #1a1a2e; color: #C9A84C; font-size: 1.2rem; font-weight: 900; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.step-title { font-size: 1rem; font-weight: 800; color: #1a1a2e; margin-bottom: 8px; }
.step-body { font-size: 0.93rem; color: #4a5568; line-height: 1.7; margin: 0; }
.s-contact-band { background: #0f1623; padding: 44px 0; border-top: 3px solid #C9A84C; border-bottom: 3px solid #C9A84C; }
.contact-band-bg { background: linear-gradient(to right, rgba(15,22,35,0.92) 0%, rgba(15,22,35,0.75) 60%, rgba(15,22,35,0.5) 100%), url('/hard-drive-clicking-contact-bg.webp') center center / cover no-repeat !important; }
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
.faq-toggle { font-size: 1.4rem; font-weight: 300; color: #7A5500; flex-shrink: 0; }
.faq-answer { padding: 0 24px 22px; font-size: 0.92rem; color: #4a5568; line-height: 1.75; }
</style>
