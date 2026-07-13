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
            "@id": "https://www.fivestardatarecovery.com/#fivestardatarecovery",
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
                "author": { "@type": "Person", "name": "Mark T." },
                "datePublished": "2024-12-15",
                "reviewBody": "They were able to recover my files even after my drive showed hundreds of bad sectors. Super knowledgeable team.",
                "name": "Saved My Data",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
              }
            ],
            "priceRange": "$300 - $950"
          },
          {
            "@type": "Service",
            "name": "Bad Sector Data Recovery Services",
            "url": "https://www.fivestardatarecovery.com/data-recovery/bad-sectors/",
            "areaServed": [{ "@type": "Country", "name": "United States" }],
            "description": "Professional Bad Sector Data Recovery services for HDDs and SSDs with sector damage. Serving Glendale, Los Angeles, and nationwide with flat-rate pricing and free mail-in service."
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fivestardatarecovery.com/" },
              { "@type": "ListItem", "position": 2, "name": "Data Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/" },
              { "@type": "ListItem", "position": 3, "name": "Bad Sectors", "item": "https://www.fivestardatarecovery.com/data-recovery/bad-sectors/" }
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "What are bad sectors on a hard drive?", "acceptedAnswer": { "@type": "Answer", "text": "Bad sectors are areas on a hard drive or SSD that have become unreadable due to physical damage or corruption. These sectors prevent the system from reading or writing data properly and are a common cause of data loss, system crashes, and drive inaccessibility." } },
              { "@type": "Question", "name": "Can you recover data from a hard drive with bad sectors?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. At Five Star Data Recovery, we specialize in data recovery from bad sectors using advanced imaging tools and proprietary techniques. We clone the failing drive sector by sector to avoid further damage and safely extract the accessible data." } },
              { "@type": "Question", "name": "What causes bad sectors on a hard drive?", "acceptedAnswer": { "@type": "Answer", "text": "Bad sectors can develop due to physical wear, power failures, manufacturing defects, excessive heat, or improper handling of the device. Over time, all drives are at risk of sector degradation, especially mechanical hard drives (HDDs)." } },
              { "@type": "Question", "name": "How do I know if my hard drive has bad sectors?", "acceptedAnswer": { "@type": "Answer", "text": "Symptoms include slow read/write performance, frequent system crashes, files that won't open, and error messages during backups or file transfers. Tools like CrystalDiskInfo or SMART diagnostics may also show warnings about sector damage." } },
              { "@type": "Question", "name": "Is it safe to continue using a drive with bad sectors?", "acceptedAnswer": { "@type": "Answer", "text": "No. Using a failing drive can make the issue worse and lead to permanent data loss. If your drive is showing signs of bad sectors, stop using it immediately and contact a professional data recovery service to avoid further damage." } },
              { "@type": "Question", "name": "Do you work on both HDDs and SSDs with bad sectors?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our lab is equipped to handle bad sector recovery from both mechanical hard drives and solid-state drives (SSDs). Each type of device requires different tools and techniques, and we tailor the process accordingly." } },
              { "@type": "Question", "name": "How long does bad sector data recovery take?", "acceptedAnswer": { "@type": "Answer", "text": "The data recovery process for bad sector drives typically takes 3–7 business days, depending on the severity of the damage. For urgent cases, we offer Expedited and Expedited Plus services with 24/7 engineer availability." } },
              { "@type": "Question", "name": "Is there a risk of further damage during recovery?", "acceptedAnswer": { "@type": "Answer", "text": "No. At Five Star Data Recovery, we prioritize data safety by never working directly on your original drive once bad sectors are detected. We use specialized hardware like the PC-3000 by Ace Labs to create a sector-by-sector image of your drive. This process allows us to safely clone as much data as possible while bypassing unstable or unreadable sectors. Once a full image is secured, we work from the clone, rebuilding the file system and extracting your recoverable data—completely safeguarding your original media from further harm." } },
              { "@type": "Question", "name": "What is the cost of bad sector data recovery?", "acceptedAnswer": { "@type": "Answer", "text": "We offer flat-rate pricing based on the issue and drive type. For a specific quote, we recommend calling us or visiting our pricing page. Diagnostics are always free, and you're never charged unless we recover your data." } },
              { "@type": "Question", "name": "Do you offer bad sector recovery for external hard drives too?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We recover data from external hard drives with bad sectors, including popular brands like Seagate, Western Digital, Toshiba, and LaCie." } }
            ]
          }
        ]
      })
    }
  ]
})

useSeoMeta({
  title: 'Bad Sectors Data Recovery - Five Star Data Recovery',
  ogTitle: 'Bad Sectors Data Recovery - Five Star Data Recovery',
  description: "If your hard drive has bad sectors then it's time to bring it in to Five Star Data Recovery to receive a free diagnosis and price quote.",
  ogDescription: "If your hard drive has bad sectors then it's time to bring it in to Five Star Data Recovery to receive a free diagnosis and price quote.",
  ogImage: 'https://www.fivestardatarecovery.com/bad-sectors-hard-drive-recovery.webp',
})

const trustBadges = [
  { icon: 'clock', text: 'Available 24/7/365' },
  { icon: 'check', text: 'No Data = No Charge' },
  { icon: 'shield', text: '10+ Years in Business' },
  { icon: 'star', text: 'Free Nationwide Shipping' },
]

const reviews = [
  {
    text: "My external hard drive suddenly started acting up and wouldn't open any files. I found out it had bad sectors and thought everything was lost. Five Star Data Recovery recovered all of my documents, including years of business data. Their team was professional, honest, and incredibly skilled.",
    name: 'Mark R.',
    location: 'West Covina, CA',
  },
  {
    text: "My old hard drive was full of irreplaceable family memories, but it stopped responding due to bad sectors. I brought it to Five Star Data Recovery, and within days they recovered every last photo. I can't thank them enough for saving what I thought was gone forever.",
    name: 'Samantha L.',
    location: 'Burbank, CA',
  },
  {
    text: "After being told by another company that my hard drive was unrecoverable due to bad sectors, I decided to get a second opinion. Five Star Data Recovery not only diagnosed the issue accurately but used advanced imaging tools to safely recover my data. Worth every penny.",
    name: 'David N.',
    location: 'New York, NY',
  },
]

const faqs = [
  {
    q: 'What are bad sectors on a hard drive?',
    a: 'Bad sectors are areas on a hard drive or SSD that have become <strong>unreadable due to physical damage or corruption</strong>. These sectors prevent the system from reading or writing data properly and are a common cause of data loss, system crashes, and drive inaccessibility.',
  },
  {
    q: 'Can you recover data from a hard drive with bad sectors?',
    a: 'Yes. At Five Star Data Recovery, we specialize in data recovery from bad sectors using <strong>advanced imaging tools and proprietary techniques</strong>. We clone the failing drive sector by sector to avoid further damage and safely extract the accessible data.',
  },
  {
    q: 'What causes bad sectors on a hard drive?',
    a: 'Bad sectors can develop due to <strong>physical wear, power failures, manufacturing defects, excessive heat</strong>, or improper handling of the device. Over time, all drives are at risk of sector degradation, especially mechanical hard drives (HDDs).',
  },
  {
    q: 'How do I know if my hard drive has bad sectors?',
    a: 'Symptoms include <strong>slow read/write performance</strong>, frequent system crashes, files that won\'t open, and error messages during backups or file transfers. Tools like CrystalDiskInfo or SMART diagnostics may also show warnings about sector damage.',
  },
  {
    q: 'Is it safe to continue using a drive with bad sectors?',
    a: '<strong>No.</strong> Using a failing drive can make the issue worse and lead to <strong>permanent data loss</strong>. If your drive is showing signs of bad sectors, stop using it immediately and contact a professional data recovery service to avoid further damage.',
  },
  {
    q: 'Do you work on both HDDs and SSDs with bad sectors?',
    a: 'Yes. Our lab is equipped to handle bad sector recovery from both <strong>mechanical hard drives and solid-state drives (SSDs)</strong>. Each type of device requires different tools and techniques, and we tailor the process accordingly.',
  },
  {
    q: 'How long does bad sector data recovery take?',
    a: 'The data recovery process for bad sector drives typically takes <strong>3–7 business days</strong>, depending on the severity of the damage. For urgent cases, we offer <strong>Expedited and Expedited Plus</strong> services with 24/7 engineer availability.',
  },
  {
    q: 'Is there a risk of further damage during recovery?',
    a: '<strong>No.</strong> At Five Star Data Recovery, we prioritize data safety by never working directly on your original drive once bad sectors are detected. We use specialized hardware like the <strong>PC-3000 by Ace Labs</strong> to create a sector-by-sector image of your drive. This process allows us to safely clone as much data as possible while bypassing unstable or unreadable sectors. Once a full image is secured, we work from the <strong>clone</strong>, rebuilding the file system and extracting your recoverable data—completely safeguarding your original media from further harm.',
  },
  {
    q: 'What is the cost of bad sector data recovery?',
    a: 'We offer <strong>flat-rate pricing</strong> based on the issue and drive type. For a specific quote, we recommend calling us or visiting our <a href="/data-recovery-service-pricing" class="faq-link">pricing page</a>. <strong>Diagnostics are always free</strong>, and you\'re never charged unless we recover your data.',
  },
  {
    q: 'Do you offer bad sector recovery for external hard drives too?',
    a: 'Absolutely. We recover data from <strong>external hard drives with bad sectors</strong>, including popular brands like Seagate, Western Digital, Toshiba, and others. Whether internal or external, our recovery approach is the same\u2014safe, transparent, and effective.',
  },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <HeroSection
      title="Bad Sectors Data Recovery"
      subtitle="Get Your Data Back In No Time."
      description="Is your hard drive slowing down, freezing, or showing error messages? You may be dealing with bad sectors. At Five Star Data Recovery, we specialize in safely recovering data from drives with bad sectors using advanced imaging tools and certified engineers."
      bgImage="/bad-sectors-hard-drive-recovery.webp"
      :trustBadges="trustBadges"
    />

    <StatsBar />

    <!-- SECTION 1 — What Are Bad Sectors -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">What Are Bad Sectors?</h2>
        <p class="s-body">A bad sector is a small portion of your hard drive that becomes unreadable or damaged. These areas may develop due to wear and tear, manufacturing flaws, or physical damage. Over time, bad sectors on your hard drive can spread, affecting your file system and causing operating system instability or data loss.</p>
        <p class="s-body">There are two main types:</p>
        <ul class="content-list">
          <li><strong>Logical bad sectors</strong> – Caused by software errors or power interruptions and may be fixed with tools or professional help.</li>
          <li><strong>Physical bad sectors</strong> – Occur when the actual disk surface is damaged. These are more serious and often require cleanroom recovery.</li>
        </ul>
      </div>
    </section>

    <!-- SECTION 2 — Signs -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Signs Your Drive Has Bad Sectors</h2>
        <p class="s-body">It's not always easy to tell if your drive has bad sectors, but common signs include:</p>
        <ul class="content-list">
          <li>Slow file access or freezing during transfers</li>
          <li>Crashing while copying or saving files</li>
          <li>Files disappearing or becoming corrupt</li>
          <li>The drive not showing up in File Explorer but appearing in Disk Management</li>
          <li>Error messages related to the file system</li>
          <li>Clicking or beeping sounds from the HDD with bad sectors</li>
        </ul>
      </div>
    </section>

    <!-- SECTION 3 — Why Bad Sectors Lead to Data Loss -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Why Bad Sectors Can Lead to Data Loss</h2>
        <p class="s-body">Every time you try to read or write data on a sector that's gone bad, the drive may struggle and cause file corruption. In the worst cases, the system can overwrite important data or make the entire drive unreadable.</p>
        <p class="s-body">If you rely on data recovery software, there's a risk of worsening the situation if the drive has physical damage. We recommend shutting the drive down and contacting a professional drive data recovery service, especially if your data is important or irreplaceable.</p>
      </div>
    </section>

    <!-- SECTION 4 — Should You Use Software -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Should You Use Software to Fix Bad Sectors?</h2>
        <p class="s-body">You may have come across programs that claim to fix bad sectors or recover data from failing drives. While data recovery software may help in some situations, it also carries significant risk. These tools work by scanning the drive over and over, which can further damage unstable sectors.</p>
        <p class="s-body">If your drive has physical damage, DIY attempts can make recovery harder—or impossible. Instead of using software that might cause more data loss, let professionals safely clone and extract your files.</p>
      </div>
    </section>

    <!-- SECTION 5 — Recovery Process -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Our Data Recovery Process for Drives with Bad Sectors</h2>
        <p class="s-body">At Five Star Data Recovery, we follow a secure and proven process for drives with bad sectors:</p>
        <div class="process-steps">
          <div class="process-step">
            <div class="step-num">1</div>
            <div>
              <h3 class="step-title">Free Evaluation</h3>
              <p class="step-body">We test the drive to confirm whether the issue is logical, physical, or both.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">2</div>
            <div>
              <h3 class="step-title">Imaging the Drive</h3>
              <p class="step-body">We create a sector-by-sector clone of the drive using specialized hardware. This prevents further wear and preserves your data as-is.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">3</div>
            <div>
              <h3 class="step-title">Locating the Data</h3>
              <p class="step-body">We use metadata and partition information to locate bad sectors and reconstruct the file system.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">4</div>
            <div>
              <h3 class="step-title">Data Extraction</h3>
              <p class="step-body">We safely extract recoverable files from the cloned image.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">5</div>
            <div>
              <h3 class="step-title">Verification and Delivery</h3>
              <p class="step-body">We check the files for integrity and return your recovered data on a new external hard drive.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 6 — Drive Types -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">What Types of Drives Do We Recover?</h2>
        <p class="s-body">We work with all major brands and models of hard drives, including:</p>
        <ul class="content-list">
          <li>Internal desktop and laptop hard drives (HDDs)</li>
          <li>Portable and external hard drives</li>
          <li>SSDs with logical bad sectors</li>
          <li>RAID configurations with degraded or damaged disks</li>
          <li>Enterprise-level drives with firmware issues</li>
        </ul>
        <p class="s-body">Whether you're facing a failed backup drive or a crashing system disk, we can help recover data from hard drive with bad sectors in most cases.</p>
      </div>
    </section>

    <!-- SECTION 7 — What Causes Bad Sectors -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">What Causes Bad Sectors?</h2>
        <p class="s-body">Bad sectors may form for many reasons, such as:</p>
        <ul class="content-list">
          <li>Physical shock from drops or impacts</li>
          <li>Power outages or sudden shutdowns</li>
          <li>Aging HDD with bad sectors</li>
          <li>Manufacturing flaws</li>
          <li>Overheating or poor ventilation</li>
          <li>Viruses that damage the file system</li>
        </ul>
        <p class="s-body">Understanding the cause helps us determine the best way of repairing bad sectors and safeguarding your data.</p>
      </div>
    </section>

    <!-- SECTION 8 — Prevention -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">How to Prevent Bad Sectors in the Future</h2>
        <p class="s-body">While not all bad sectors can be avoided, you can reduce the risk:</p>
        <ul class="content-list">
          <li>Back up regularly to a second external hard drive</li>
          <li>Use a surge protector or UPS to avoid power fluctuations</li>
          <li>Run regular health scans using disk management tools</li>
          <li>Avoid rough handling or hot environments</li>
          <li>Shut down your system properly instead of hard resets</li>
        </ul>
        <p class="s-body">Catching bad sectors on your hard drive early can make a big difference in avoiding data loss.</p>
      </div>
    </section>

    <!-- SECTION 9 — Why Choose Five Star -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Why Choose Five Star Data Recovery?</h2>
        <ul class="content-list">
          <li>Cleanroom environment and certified engineers</li>
          <li>Flat-rate <NuxtLink to="/data-recovery-service-pricing" class="inline-link">pricing</NuxtLink> and no hidden fees</li>
          <li>"No Data, No Charge" policy</li>
          <li>Secure, professional imaging and extraction tools</li>
          <li>Nationwide service with free round-trip shipping</li>
          <li>Trusted by thousands of clients across the U.S.</li>
        </ul>
        <p class="s-body">From data loss emergencies to advanced drive data recovery, we've helped individuals, businesses, and IT teams retrieve important files from failed drives with bad sectors.</p>
      </div>
    </section>

    <!-- SECTION 10 — External Drives -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Bad Sectors on External Hard Drives</h2>
        <p class="s-body">External drives are more prone to bad sectors due to frequent handling and power interruptions. Drops, cable issues, and improper ejections can all lead to problems that affect both hardware and the file system.</p>
        <p class="s-body">If your external hard drive is disconnecting, slowing down, or making noises—stop using it immediately. Continued use can increase the number of bad sectors and reduce the chance of a full recovery.</p>
      </div>
    </section>

    <!-- SECTION 11 — Real-World Example -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Real-World Example: A Photographer's External Drive</h2>
        <p class="s-body">A professional photographer came to us after their 2TB external drive started freezing during file transfers. It contained years of weddings, portrait sessions, and client archives. The drive appeared in disk management but would disappear from the desktop frequently.</p>
        <p class="s-body">Our diagnostic revealed over <strong>1,000 bad sectors</strong>. We created a secure disk image, filtered out the unstable regions, and recovered over <strong>98% of the original file structure</strong>. All recovered data was delivered on a new portable drive—ready for editing, backup, and client delivery.</p>
      </div>
    </section>

    <!-- SECTION 12 — Expedited -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Expedited Recovery Services Available</h2>
        <p class="s-body">Need your files back fast? We offer two levels of expedited services:</p>
        <ul class="content-list">
          <li><strong>Expedited Service</strong> – $200 per drive. Your case is prioritized during business hours and placed at the top of our queue.</li>
          <li><strong>Expedited Plus Service</strong> – $500 per drive. Our highest-priority tier. We work on your case 24/7, including weekends and holidays.</li>
        </ul>
        <p class="s-body">These fees are in addition to standard recovery costs and are non-refundable. If you're dealing with tight deadlines, our expedited services are your fastest path to a solution.</p>
      </div>
    </section>

    <!-- REVIEWS -->
    <ReviewsSection :reviews="reviews" />

    <!-- QUOTE FORM -->
    <QuoteFormSection
      description="Bad sectors don't have to mean permanent data loss. Our PC-3000 imaging hardware bypasses unstable sectors and clones your drive safely — so we work from a copy, never the original."
      bullet1="Sector-by-sector imaging — your original drive is never touched"
      bullet2="Logical and physical bad sector recovery"
      bullet3="No Data, No Charge (most cases)"
      closing="Stop using the drive immediately. Every read attempt on a degrading drive increases the risk. Fill out the form for a free evaluation."
      bgImage="/bad-sectors-hard-drive-recovery.webp"
    />

    <!-- CONTACT BAND -->
    <section class="s-contact-band contact-band-bg">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Ready to Recover Your Data?</h2>
        </div>
        <p class="contact-body-text">Don't risk permanent loss by using a failing drive. Whether it's freezing, clicking, or just not opening files, we're ready to help. Reach out to Five Star Data Recovery today for a free diagnostic.</p>
        <ul class="contact-bullets">
          <li>Free diagnostic — no obligation</li>
          <li>Flat-rate pricing — no hidden fees</li>
          <li>No Data, No Charge (most cases)</li>
          <li>Free nationwide shipping both ways</li>
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
.contact-band-bg { background: linear-gradient(to right, rgba(15,22,35,0.92) 0%, rgba(15,22,35,0.75) 60%, rgba(15,22,35,0.5) 100%), url('/bad-sectors-hard-drive-recovery.webp') center center / cover no-repeat !important; }
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
