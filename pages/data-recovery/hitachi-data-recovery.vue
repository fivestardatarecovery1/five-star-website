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
                "author": { "@type": "Person", "name": "Sarah T." },
                "datePublished": "2024-11-18",
                "reviewBody": "Five Star recovered my business files from a failed Hitachi hard drive. Very professional team and transparent pricing.",
                "name": "Hitachi Recovery Success",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
              }
            ],
            "priceRange": "$300 - $950"
          },
          {
            "@type": "Service",
            "name": "Hitachi Data Recovery Services",
            "url": "https://www.fivestardatarecovery.com/data-recovery/hitachi-data-recovery/",
            "areaServed": [{ "@type": "Country", "name": "United States" }],
            "description": "Expert Hitachi Data Recovery services for internal and external hard drives, RAID arrays, and encrypted Hitachi storage devices. Serving Glendale, Los Angeles, and nationwide with flat-rate pricing and free mail-in service."
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fivestardatarecovery.com/" },
              { "@type": "ListItem", "position": 2, "name": "Data Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/" },
              { "@type": "ListItem", "position": 3, "name": "Hitachi Data Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/hitachi-data-recovery/" }
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Do you recover data from all types of Hitachi hard drives?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we recover data from Hitachi internal and external hard drives, including both consumer-grade and enterprise-level models. Whether you're dealing with an old Deskstar or a newer Ultrastar series, our experts are trained in Hitachi data recovery techniques." } },
              { "@type": "Question", "name": "Can you recover data from Hitachi drives that were part of a RAID array?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Our lab specializes in RAID data recovery, including arrays that contain Hitachi drives. We support all RAID levels (RAID 0, 1, 5, 10, etc.) and always clone the drives before working on them to ensure data integrity." } },
              { "@type": "Question", "name": "My Hitachi drive is not recognized by my computer — can you still recover the data?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. A Hitachi hard drive not showing up can be due to logical issues, firmware corruption, or physical damage. In most cases, our diagnostics will determine the cause, and we'll use the appropriate methods to recover the data from your Hitachi drive." } },
              { "@type": "Question", "name": "What if my Hitachi drive was making clicking noises before it failed?", "acceptedAnswer": { "@type": "Answer", "text": "A clicking sound usually points to mechanical failure, which is common with failing Hitachi drives. We perform cleanroom recoveries for these types of issues, allowing us to repair internal components and safely extract your data." } },
              { "@type": "Question", "name": "How long does Hitachi data recovery take?", "acceptedAnswer": { "@type": "Answer", "text": "Typical turnaround time is 3–5 business days, but it can vary based on the issue. We also offer Expedited and Expedited Plus services for urgent Hitachi data recovery cases. Contact us for a quote and timeline tailored to your specific situation." } },
              { "@type": "Question", "name": "Can you recover data from Hitachi drives with bad sectors?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Bad sectors on Hitachi hard drives are a common failure type, and our engineers are experienced in handling them. We use sector-by-sector cloning to isolate the healthy portions of the drive and maximize data recovery results." } },
              { "@type": "Question", "name": "Do you recover data from encrypted Hitachi hard drives?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we can recover data from BitLocker or third-party encrypted Hitachi drives as long as the correct encryption key or password is provided. Our secure systems are designed to handle encrypted data safely and confidentially." } }
            ]
          }
        ]
      })
    }
  ]
})

useSeoMeta({
  title: 'Hitachi Data Recovery - Five Star Data Recovery',
  ogTitle: 'Hitachi Data Recovery - Five Star Data Recovery',
  description: 'Our engineers specialize in Hitachi Data Recovery. Get fast, reliable, secure, and cost-effective solutions for all your data recovery needs.',
  ogDescription: 'Our engineers specialize in Hitachi Data Recovery. Get fast, reliable, secure, and cost-effective solutions for all your data recovery needs.',
})

const trustBadges = [
  { icon: 'clock', text: 'Available 24/7/365' },
  { icon: 'check', text: 'No Data = No Charge' },
  { icon: 'shield', text: '10+ Years in Business' },
  { icon: 'star', text: 'Free Nationwide Shipping' },
]

const reviews = [
  {
    text: "My Hitachi external hard drive suddenly stopped showing up, and I was devastated thinking years of photos were gone. Five Star Data Recovery not only diagnosed the issue quickly but also recovered 100% of my data. The process was smooth, and they kept me informed every step of the way. Highly recommended for anyone dealing with Hitachi drive issues!",
    name: 'Michael R.',
    location: 'Seattle, WA',
  },
  {
    text: "I had a Hitachi laptop drive with bad sectors, and my local computer shop told me it wasn't recoverable. Five Star Data Recovery proved them wrong! They were able to recover almost 92% of my files, including some important business documents. The flat-rate pricing was upfront, and there were no surprises. Excellent service from start to finish.",
    name: 'Sarah T.',
    location: 'Chicago, IL',
  },
  {
    text: "My Hitachi hard drive was making a clicking noise after I dropped it, and I knew it was serious. Five Star's clean room service saved the day. They replaced the internal parts and got my data back within a week. I was especially impressed with their no data, no charge policy. Great experience and true experts when it comes to Hitachi data recovery.",
    name: 'David N.',
    location: 'Glendale, CA',
  },
]

const faqs = [
  {
    q: 'Do you recover data from all types of Hitachi hard drives?',
    a: 'Yes, we recover data from <strong>Hitachi internal and external hard drives</strong>, including both consumer-grade and enterprise-level models. Whether you\'re dealing with an old Deskstar or a newer Ultrastar series, our experts are trained in Hitachi data recovery techniques.',
  },
  {
    q: 'Can you recover data from Hitachi drives that were part of a RAID array?',
    a: 'Absolutely. Our lab specializes in <strong>RAID data recovery</strong>, including arrays that contain Hitachi drives. We support all RAID levels (RAID 0, 1, 5, 10, etc.) and always clone the drives before working on them to ensure data integrity.',
  },
  {
    q: 'My Hitachi drive is not recognized by my computer — can you still recover the data?',
    a: 'Yes. A Hitachi hard drive not showing up can be due to <strong>logical issues, firmware corruption, or physical damage</strong>. In most cases, our diagnostics will determine the cause, and we\'ll use the appropriate methods to recover the data from your Hitachi drive.',
  },
  {
    q: 'What if my Hitachi drive was making clicking noises before it failed?',
    a: 'A clicking sound usually points to <strong>mechanical failure</strong>, which is common with failing Hitachi drives. We perform <strong>cleanroom recoveries</strong> for these types of issues, allowing us to repair internal components and safely extract your data.',
  },
  {
    q: 'How long does Hitachi data recovery take?',
    a: 'Typical turnaround time is <strong>3–5 business days</strong>, but it can vary based on the issue. We also offer <strong><a href="/expedited-service" class="faq-link">Expedited</a> and <a href="/expedited-service-plus" class="faq-link">Expedited Plus</a></strong> services for urgent Hitachi data recovery cases. Contact us for a quote and timeline tailored to your specific situation.',
  },
  {
    q: 'Can you recover data from Hitachi drives with bad sectors?',
    a: 'Yes. Bad sectors on Hitachi hard drives are a common failure type, and our engineers are experienced in handling them. We use <strong>sector-by-sector cloning</strong> to isolate the healthy portions of the drive and maximize data recovery results.',
  },
  {
    q: 'Do you recover data from encrypted Hitachi hard drives?',
    a: 'Yes, we can recover data from <strong>BitLocker or third-party encrypted Hitachi drives</strong> as long as the correct encryption key or password is provided. Our secure systems are designed to handle encrypted data safely and confidentially.',
  },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <HeroSection
      title="Hitachi Data Recovery Services"
      subtitle="Get Your Data Back In No Time."
      description="If your Hitachi hard drive has stopped working, is <strong>making clicking noises</strong>, or simply isn't being detected, don't panic—there's still hope. At Five Star Data Recovery, we specialize in professional <strong>Hitachi Data Recovery</strong> for individuals and businesses who need to get their important files back quickly and securely.<br><br>Whether you're dealing with <strong>accidental deletion</strong>, <strong>hardware failure</strong>, or <strong>file system corruption</strong>, our team has the tools and expertise to handle even the most complex recovery jobs. We're here to help <strong>recover data from Hitachi drives</strong>, no matter the cause of the issue."
      bgImage="/hitachi-data-recovery-hero.webp"
      :trustBadges="trustBadges"
    />

    <StatsBar />

    <!-- SECTION 1 — Common Causes -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Common Causes of Hitachi Drive Failure</h2>
        <p class="s-body">There are many reasons your Hitachi hard drive might fail. Understanding what went wrong can help us recover more data and prevent future issues. Some of the most common causes include:</p>
        <ul class="content-list">
          <li><NuxtLink to="/data-recovery/dropped-hard-drive" class="inline-link">Physical damage from drops</NuxtLink>, impacts, or overheating</li>
          <li><NuxtLink to="/data-recovery/bad-sectors" class="inline-link">Bad sectors</NuxtLink> that prevent the drive from reading or writing data</li>
          <li>Firmware corruption or manufacturing defects</li>
          <li>Accidental deletion or formatting of partitions</li>
          <li>Power surges and electrical issues</li>
          <li>File system corruption due to sudden shutdowns or software crashes</li>
        </ul>
      </div>
    </section>

    <!-- SECTION 2 — Signs of Failure -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Signs of Hitachi Hard Drive Failure</h2>
        <p class="s-body">If you notice any of the following symptoms, it's best to stop using the drive immediately and contact a recovery expert:</p>
        <ul class="content-list">
          <li><NuxtLink to="/hard-drive-clicking" class="inline-link">Clicking</NuxtLink>, beeping, or grinding noises</li>
          <li>The drive is <NuxtLink to="/data-recovery/hard-drive-not-showing-up" class="inline-link">not detected by your system</NuxtLink></li>
          <li>Extremely slow file transfers or system freezes</li>
          <li>Sudden appearance of missing files or folders</li>
          <li>Messages asking to format the drive</li>
          <li>Drive visible in Disk Management but inaccessible</li>
        </ul>
        <p class="s-body">Continuing to use a failing drive increases the chance of permanent drive data loss.</p>
      </div>
    </section>

    <!-- SECTION 3 — Drive Types -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Types of Hitachi Drives We Support</h2>
        <p class="s-body">Our team provides data recovery services for all types of Hitachi drives, including:</p>
        <ul class="content-list">
          <li>Desktop and laptop internal HDDs</li>
          <li>Portable <NuxtLink to="/data-recovery/external-hard-drive-data-recovery" class="inline-link">external hard drives</NuxtLink></li>
          <li>Enterprise-level Hitachi drives used in servers and data centers</li>
          <li><NuxtLink to="/data-recovery/raid-data-recovery" class="inline-link">RAID arrays</NuxtLink> containing Hitachi components</li>
          <li>USB-connected storage devices</li>
        </ul>
        <p class="s-body">No matter the drive type, we can help with Hitachi hard disk data recovery for a wide range of systems and storage capacities.</p>
      </div>
    </section>

    <!-- SECTION 4 — Recovery Process -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Our Hitachi Data Recovery Process</h2>
        <p class="s-body">When you bring your drive to us, we begin with a full diagnostic to determine the extent of the issue. Here's what you can expect:</p>
        <div class="process-steps">
          <div class="process-step">
            <div class="step-num">1</div>
            <div>
              <h3 class="step-title">Free Diagnostic</h3>
              <p class="step-body">We assess the health of the drive and confirm whether it's a logical or physical failure.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">2</div>
            <div>
              <h3 class="step-title">Cloning</h3>
              <p class="step-body">If the drive is unstable, we create a complete clone to avoid further wear on the original.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">3</div>
            <div>
              <h3 class="step-title">File System Repair</h3>
              <p class="step-body">For logical problems like file system corruption, we use advanced tools to reconstruct the partition.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">4</div>
            <div>
              <h3 class="step-title">File Recovery</h3>
              <p class="step-body">We extract recoverable files and check for lost files, folder structures, and data consistency.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">5</div>
            <div>
              <h3 class="step-title">Verification</h3>
              <p class="step-body">You'll receive a preview of the recovered content before final delivery.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 5 — Why Choose -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Why Choose Five Star Data Recovery?</h2>
        <p class="s-body">We know that losing important data can be stressful. That's why we've built a process that's fast, secure, and customer-friendly:</p>
        <ul class="content-list">
          <li><NuxtLink to="/data-recovery/clean-room-data-recovery" class="inline-link">Cleanroom environment</NuxtLink> for handling physically damaged drives</li>
          <li>Transparent pricing and no hidden fees</li>
          <li>"No Data, No Charge" policy for most recoveries</li>
          <li>High recovery rates for lost data from external hard drives</li>
          <li>Experience with thousands of successful drive data recovery cases</li>
          <li>Free round-trip shipping available nationwide</li>
        </ul>
      </div>
    </section>

    <!-- SECTION 6 — What Not to Do -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">What Not to Do if Your Hitachi Drive Fails</h2>
        <p class="s-body">Trying to fix a damaged hard drive yourself can often do more harm than good. Here are a few things to avoid:</p>
        <ul class="content-list">
          <li>Don't run free recovery tools if the drive is making noises</li>
          <li>Don't reformat or partition the drive</li>
          <li>Avoid opening the drive casing—this should only be done in a cleanroom</li>
          <li>Stop trying to copy data if the drive keeps disconnecting</li>
        </ul>
        <p class="s-body">Our team can help recover data without risking further drive data loss or overwriting your files.</p>
      </div>
    </section>

    <!-- SECTION 7 — Real Case Example -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Real Case Example: Recovering Hitachi Drive for a Design Studio</h2>
        <p class="s-body">A graphic design studio recently contacted us after a Hitachi external drive holding years of client work stopped mounting. The drive wasn't showing up in Explorer, but could still be seen in Disk Management. Clicking sounds were coming from the unit, and many of the folders were missing.</p>
        <p class="s-body">After a full diagnostic, we discovered the drive had multiple bad sectors and a failing read/write head. We immediately cloned the drive and recovered over <strong>95% of their project files</strong>, including layered PSDs, Illustrator files, and client invoices. The entire recovery was completed within <strong>5 business days</strong>.</p>
      </div>
    </section>

    <!-- SECTION 8 — Businesses & Individuals -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Our Support for Businesses and Individuals</h2>
        <p class="s-body">Whether you're a student who lost years of work or a business with terabytes of client data, we handle every recovery with care. We work with:</p>
        <ul class="content-list">
          <li>Creative professionals (photographers, designers, editors)</li>
          <li>Medical offices and law firms with sensitive records</li>
          <li>IT administrators and small business owners</li>
          <li>Personal users with family photos, tax records, and more</li>
        </ul>
        <p class="s-body">No recovery is too big or too small. If your Hitachi drive holds valuable data, we can help retrieve it.</p>
      </div>
    </section>

    <!-- SECTION 9 — Nationwide -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Nationwide Hitachi Data Recovery – Free Shipping</h2>
        <p class="s-body">Although our lab is based in Los Angeles, we offer free round-trip shipping for customers across the United States. Simply open a case online, print your shipping label, and send in your device. Once your recovery is complete, we'll ship your recovered data back to you on a new external drive. Your Hitachi hard drive data is handled with care every step of the way, no matter where you're located.</p>
      </div>
    </section>

    <RelatedLinks :links="[
      { text: 'WD Data Recovery', href: '/data-recovery/western-digital-data-recovery' },
      { text: 'Seagate Data Recovery', href: '/data-recovery/seagate-data-recovery' },
      { text: 'Toshiba Data Recovery', href: '/data-recovery/toshiba-data-recovery' },
      { text: 'Samsung Data Recovery', href: '/data-recovery/samsung-data-recovery' },
      { text: 'LaCie Data Recovery', href: '/data-recovery/lacie-data-recovery' },
      { text: 'Hard Drive Recovery', href: '/data-recovery/hard-drive-recovery' },
      { text: 'External Hard Drive Recovery', href: '/data-recovery/external-hard-drive-data-recovery' },
    ]" />

    <!-- REVIEWS -->
    <ReviewsSection :reviews="reviews" />

    <!-- QUOTE FORM -->
    <QuoteFormSection
      description="From clicking Deskstars to failed enterprise Ultrastar arrays, we've recovered data from every generation of Hitachi drive. Our certified engineers use sector-by-sector cloning and cleanroom procedures to give you the best chance of a full recovery."
      bullet1="Internal, external, enterprise, and RAID arrays"
      bullet2="BitLocker and encrypted drive recovery"
      bullet3="No Data, No Charge (most cases)"
      closing="Stop using the drive immediately — every spin cycle risks more damage. Fill out the form and let our Hitachi specialists evaluate your case for free."
      bgImage="/hitachi-data-recovery-hero.webp"
    />

    <!-- CONTACT BAND -->
    <section class="s-contact-band contact-band-bg">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Start Your Hitachi Data Recovery Today</h2>
        </div>
        <p class="contact-body-text">If your drive is failing or already dead, contact Five Star Data Recovery today. We offer industry-leading data recovery services for all Hitachi models. Your data could still be recoverable.</p>
        <ul class="contact-bullets">
          <li>Free diagnostic — no obligation</li>
          <li>Flat-rate pricing — no hidden fees</li>
          <li>No Data, No Charge (most cases)</li>
          <li>Free round-trip shipping nationwide</li>
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
.process-steps { display: flex; flex-direction: column; }
.process-step { display: flex; align-items: flex-start; gap: 24px; padding: 28px 0; border-bottom: 1px solid #e2e6ee; }
.process-step:last-child { border-bottom: none; }
.step-num { width: 48px; height: 48px; background: #1a1a2e; color: #C9A84C; font-size: 1.2rem; font-weight: 900; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.step-title { font-size: 1rem; font-weight: 800; color: #1a1a2e; margin-bottom: 8px; }
.step-body { font-size: 0.93rem; color: #4a5568; line-height: 1.7; margin: 0; }
.s-contact-band { background: #0f1623; padding: 44px 0; border-top: 3px solid #C9A84C; border-bottom: 3px solid #C9A84C; }
.contact-band-bg { background: linear-gradient(to right, rgba(15,22,35,0.92) 0%, rgba(15,22,35,0.75) 60%, rgba(15,22,35,0.5) 100%), url('/hitachi-data-recovery-hero.webp') center center / cover no-repeat !important; }
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
</style>
