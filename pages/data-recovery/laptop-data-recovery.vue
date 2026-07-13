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
            "review": [{
              "@type": "Review",
              "author": { "@type": "Person", "name": "Anna R." },
              "datePublished": "2024-11-12",
              "reviewBody": "They recovered all my business documents from a non-booting laptop. Quick service and very professional!",
              "name": "Highly Recommend",
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
            }],
            "priceRange": "$300 - $950",
            "@id": "https://www.fivestardatarecovery.com/#fivestardatarecovery"
          },
          {
            "@type": "Service",
            "name": "Laptop Data Recovery Services",
            "url": "https://www.fivestardatarecovery.com/data-recovery/laptop-data-recovery/",
            "areaServed": [{ "@type": "Country", "name": "United States" }],
            "description": "Expert Laptop Data Recovery services for all major brands and models. Serving Glendale, Los Angeles, and nationwide with free mail-in service and flat-rate pricing."
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fivestardatarecovery.com/" },
              { "@type": "ListItem", "position": 2, "name": "Data Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/" },
              { "@type": "ListItem", "position": 3, "name": "Laptop Data Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/laptop-data-recovery/" }
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Can you recover data from a laptop that won't turn on?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we can recover data even if your laptop doesn't power on at all. In most cases, we remove the internal hard drive or SSD and perform recovery directly from that storage device using specialized imaging equipment. However, some modern laptops—especially ultra-thin models or MacBooks with soldered storage—do not have removable drives. In these cases, we perform component-level recovery, which involves working directly on the laptop's logic board or storage chips using advanced tools." } },
              { "@type": "Question", "name": "What types of laptop issues can you recover data from?", "acceptedAnswer": { "@type": "Answer", "text": "We recover data from laptops affected by a wide range of issues, including accidental deletion, liquid damage, mechanical hard drive failure, bad sectors, operating system crashes, and more." } },
              { "@type": "Question", "name": "Do you recover data from all laptop brands?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer laptop data recovery services for all major brands, including HP, Dell, Lenovo, Apple (MacBook), Asus, Acer, and others." } },
              { "@type": "Question", "name": "What if my laptop hard drive is physically damaged?", "acceptedAnswer": { "@type": "Answer", "text": "If your laptop's hard drive has physical damage (like clicking, grinding, or not spinning up), we use cleanroom technology and specialized tools to safely extract data." } },
              { "@type": "Question", "name": "How long does laptop data recovery take?", "acceptedAnswer": { "@type": "Answer", "text": "Standard laptop recovery takes about 3–5 business days, depending on the issue. For urgent cases, we offer Expedited and Expedited Plus services that prioritize your case 24/7 until completion." } },
              { "@type": "Question", "name": "Can you recover files from a formatted or deleted laptop drive?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, in many cases. If the data has not been overwritten, we can often recover files from a formatted laptop drive or restore accidentally deleted files using advanced forensic techniques." } },
              { "@type": "Question", "name": "Is your laptop data recovery service flat-rate?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer flat-rate laptop data recovery pricing based on the type of failure. There are no hidden fees, and diagnostics are always free. You only pay if you approve the quote and we successfully recover your data." } },
              { "@type": "Question", "name": "Can I mail in my laptop for recovery?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We provide free nationwide shipping for customers across the U.S. We also accept drop-offs at our Glendale, CA lab and offer local pickup for nearby cities." } },
              { "@type": "Question", "name": "Will you work directly on my laptop to recover the data?", "acceptedAnswer": { "@type": "Answer", "text": "No. To protect your data, we always remove the drive and create a full clone before performing recovery. This ensures that your original laptop drive remains untouched and safe throughout the entire recovery process." } },
              { "@type": "Question", "name": "What kind of data can you recover from a laptop?", "acceptedAnswer": { "@type": "Answer", "text": "We recover a wide range of file types including documents, photos, videos, emails, databases, and application files. Whether it's personal files or business-critical data, we aim to recover everything that matters to you." } }
            ]
          }
        ]
      })
    }
  ]
})

useSeoMeta({
  title: 'Laptop Data Recovery - Get Your Data Recovered In No Time!',
  ogTitle: 'Laptop Data Recovery - Get Your Data Recovered In No Time!',
  description: 'Experiencing laptop troubles? Our Laptop Data Recovery experts can help you retrieve lost data quickly and safely.',
  ogDescription: 'Experiencing laptop troubles? Our Laptop Data Recovery experts can help you retrieve lost data quickly and safely.',
  ogImage: 'https://www.fivestardatarecovery.com/laptop-data-recovery-service-glendale-ca.jpg',
})

const reviews = [
  {
    text: '\u201cMy laptop completely shut down the week before my master\u2019s thesis was due. I was panicking. Five Star Data Recovery diagnosed the issue as a failed SSD and recovered everything within a few days. They literally saved my degree!\u201d',
    name: 'Emily K.',
    location: 'Northridge, CA'
  },
  {
    text: '\u201cAfter spilling coffee on my MacBook, it wouldn\u2019t turn back on. Apple told me the data was gone. Five Star Data Recovery was able to recover all of my files through component-level work. Their expertise in laptop data recovery is unmatched!\u201d',
    name: 'Jason T.',
    location: 'Santa Monica, CA'
  },
  {
    text: '\u201cMy Dell laptop stopped booting after a Windows update. I had years of family photos on there and thought they were lost. Five Star diagnosed it as a corrupted hard drive and got everything back quickly. Their pricing was flat-rate and transparent.\u201d',
    name: 'Lindsey M.',
    location: 'New York, NY'
  },
]

const faqs = [
  {
    q: '1. Can you recover data from a laptop that won\u2019t turn on?',
    a: 'Yes, we can recover data even if your laptop doesn\u2019t power on at all. In most cases, we remove the internal hard drive or SSD and perform recovery directly from that storage device using specialized imaging equipment. However, some modern laptops\u2014especially <strong>ultra-thin models or MacBooks with soldered storage</strong>\u2014do not have removable drives. In these cases, we perform <strong>component-level recovery</strong>, which involves working directly on the laptop\u2019s logic board or storage chips using advanced tools. Our team is fully equipped to handle both standard and complex laptop recovery scenarios.'
  },
  {
    q: '2. What types of laptop issues can you recover data from?',
    a: 'We recover data from laptops affected by a wide range of issues, including <strong>accidental deletion</strong>, <strong>liquid damage</strong>, <strong>mechanical hard drive failure</strong>, <strong>bad sectors</strong>, <strong>operating system crashes</strong>, and more. Our team has experience with <strong>Windows</strong>, <strong>Mac</strong>, and other systems.'
  },
  {
    q: '3. Do you recover data from all laptop brands?',
    a: 'Yes. We offer <strong>laptop data recovery services</strong> for all major brands, including <strong>HP</strong>, <strong>Dell</strong>, <strong>Lenovo</strong>, <strong>Apple (MacBook)</strong>, <strong>Asus</strong>, <strong>Acer</strong>, and others. No matter the brand or model, our process is tailored to retrieve your lost data safely and efficiently.'
  },
  {
    q: '4. What if my laptop hard drive is physically damaged?',
    a: 'If your laptop\u2019s hard drive has <strong>physical damage</strong> (like clicking, grinding, or not spinning up), we use cleanroom technology and specialized tools to safely extract data. Our engineers are trained in <strong>component-level repairs</strong> and <strong>sector-by-sector imaging</strong> for complex cases.'
  },
  {
    q: '5. How long does laptop data recovery take?',
    a: 'Standard <strong>laptop recovery</strong> takes about <strong>3\u20135 business days</strong>, depending on the issue. For urgent cases, we offer <strong>Expedited</strong> and <strong>Expedited Plus</strong> services that prioritize your case 24/7 until completion.'
  },
  {
    q: '6. Can you recover files from a formatted or deleted laptop drive?',
    a: 'Yes, in many cases. If the data has not been overwritten, we can often <strong>recover files from a formatted laptop drive</strong> or restore <strong>accidentally deleted files</strong> using advanced forensic techniques. Call us for a free consultation to evaluate your specific case.'
  },
  {
    q: '7. Is your laptop data recovery service flat-rate?',
    a: 'Yes. We offer <strong>flat-rate laptop data recovery pricing</strong> based on the type of failure. There are no hidden fees, and diagnostics are always free. You only pay if you approve the quote and we successfully recover your data.'
  },
  {
    q: '8. Can I mail in my laptop for recovery?',
    a: 'Absolutely. We provide <strong>free nationwide shipping</strong> for customers across the U.S. We also accept drop-offs at our <strong>Glendale, CA lab</strong> and offer local pickup for nearby cities.'
  },
  {
    q: '9. Will you work directly on my laptop to recover the data?',
    a: 'No. To protect your data, we always remove the drive and <strong>create a full clone</strong> before performing recovery. This ensures that your original laptop drive remains untouched and safe throughout the entire recovery process.'
  },
  {
    q: '10. What kind of data can you recover from a laptop?',
    a: 'We recover a wide range of file types including <strong>documents</strong>, <strong>photos</strong>, <strong>videos</strong>, <strong>emails</strong>, <strong>databases</strong>, and <strong>application files</strong>. Whether it\u2019s <strong>personal files</strong> or <strong>business-critical data</strong>, we aim to recover everything that matters to you.'
  },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <HeroSection
      title="Laptop Data Recovery Services"
      subtitle="Get Your Data Back In No Time."
      description="Losing files on your laptop can happen without warning. Whether it's an accidental deletion, system crash, or physical damage, the results can be stressful. At Five Star Data Recovery, we specialize in fast, secure, and professional laptop data recovery. If you have a broken drive or a software error, we can help you recover your data fast."
      bgImage="/laptop-recovery-hero.jpg"
      :overlayOpacity="0.75"
      :trustBadges="[
        { icon: 'clock', text: 'Available 24/7/365' },
        { icon: 'check', text: 'No Data = No Charge' },
        { icon: 'shield', text: '10+ Years in Business' },
        { icon: 'star', text: 'Free Nationwide Shipping' },
      ]"
    />

    <StatsBar />

    <!-- COMMON CAUSES + TYPES OF DRIVES -->
    <section class="s-white">
      <div class="container two-col-layout">
        <div>
          <h2 class="s-heading">Common Causes of Laptop Data Loss</h2>
          <p class="s-body">Laptops are prone to various types of damage and data loss. Spills, impacts, overheating, or corrupted software can all lead to file issues. We've handled everything from <NuxtLink to="/data-recovery/dropped-hard-drive">dropped</NuxtLink> laptops to failed Windows updates and malware infections. In many cases, you can still recover personal files if you act quickly.</p>
          <p class="s-body">We often see common problems like broken hard drives, accidental formatting, damaged partitions, power surges, and failed Windows updates. These events can quickly corrupt the file system, making your data inaccessible—but not gone.</p>
        </div>
        <div>
          <h2 class="s-heading">Types of Laptop Drives We Recover</h2>
          <p class="s-body">Our lab handles all major types of laptop hard drives. Whether you're dealing with traditional HDDs or modern SSDs, we can help. We frequently assist with laptop hard disk data recovery for brands like Dell, Lenovo, ASUS, and Apple, as well as recovery hp notebook models affected by disk issues or firmware corruption.</p>
          <p class="s-body">We work on Windows, macOS, and Linux laptops. Our team can safely extract data from any drive. It doesn't matter if the drive is removable or soldered to the board. We have the right tools to do this without causing more damage.</p>
        </div>
      </div>
    </section>

    <!-- OUR PROCESS -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading center">Our Laptop Data Recovery Process</h2>
        <p class="s-intro center">Every case starts with a full diagnostic. We assess the health of your drive and determine whether the issue is hardware- or software-related. From there, our engineers follow a proven data recovery process to extract and reconstruct your files safely.</p>
        <p class="s-body" style="text-align:center; margin-bottom: 12px;">We always work directly from the drive where the data is stored. We never use the laptop for recovery.</p>
        <p class="s-body" style="text-align:center; margin-bottom: 40px;">Once we've identified what's wrong, we'll explain the recovery steps and give you a realistic timeline. You'll always know what we're doing and what to expect. If we can't recover the data, we won't charge you.</p>
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

    <!-- WHEN TO REMOVE THE <NuxtLink to="/data-recovery/hard-drive-recovery">hard drive</NuxtLink> -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">When Should You Remove the Hard Drive?</h2>
        <p class="s-body">If your laptop won't boot or shows no sign of power, you may need to remove the hard drive for evaluation. If you're unsure how to do this, our technicians can help or walk you through it safely. In some cases, removing the drive helps us isolate the issue without risking further damage to the system.</p>
        <p class="s-body">Removing the drive is especially helpful when a system is water-damaged or stuck in a boot loop. This step allows us to bypass system-level issues and focus directly on the drive itself.</p>
      </div>
    </section>

    <!-- WE RECOVER ALL FILE TYPES -->
    <section class="s-grey">
      <div class="container two-col-layout align-center">
        <div>
          <h2 class="s-heading">We Recover All File Types and Scenarios</h2>
          <p class="s-body">Our team can recover lost files in almost any situation. This includes retrieving a deleted file from the recycle bin, restoring formatted partitions, and resolving file system corruption. We work with hundreds of file types—from documents and spreadsheets to photos, videos, and business data.</p>
          <p class="s-body">Whether you lost personal data from a failed backup or deleted work files by mistake, we can help. We also recover data from systems affected by failed software updates, virus damage, or even factory resets. Whether you need a single presentation back or your entire photo library, we're ready to help.</p>
        </div>
        <div class="file-types-col">
          <img src="/laptop-file-types.webp" alt="File types we recover including SVG, AI, PDF, EPS, WMF, DXF, CDR" class="file-types-img-large" width="1200" height="630" loading="lazy" />
        </div>
      </div>
    </section>

    <!-- WHY CHOOSE US -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Why Choose Our Data Recovery Service</h2>
        <p class="s-body">Five Star Data Recovery is known for reliable turnaround, transparent <NuxtLink to="/data-recovery-service-pricing">pricing</NuxtLink>, and a high success rate. We handle both hardware and software-related issues, including failed boots and windows recovery. Our data recovery team is here to help you restore your system or recover specific files. We will assist you at every step.</p>
        <p class="s-body">We help home users, business owners, students, and IT professionals. We assist them in recovering data from laptops that stopped working or became inaccessible overnight.</p>
        <div class="why-grid">
          <div class="why-item"><div class="why-icon">🛡</div><div><strong>No Data, No Charge</strong> <em>(most cases)</em><p>You only pay when we recover your data successfully.</p></div></div>
          <div class="why-item"><div class="why-icon">💰</div><div><strong>Flat-Rate Pricing</strong><p>No hidden fees. Transparent quotes before any work begins.</p></div></div>
          <div class="why-item"><div class="why-icon">🔬</div><div><strong>ISO 5 Cleanroom</strong><p>Certified cleanroom for physical drive repairs and imaging.</p></div></div>
          <div class="why-item"><div class="why-icon">📦</div><div><strong>Free Nationwide Shipping</strong><p>Mail in from anywhere in the U.S. — we cover the shipping.</p></div></div>
        </div>
      </div>
    </section>

    <!-- DATA RECOVERY PROCESS BAND -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading center">Data Recovery Process</h2>
        <p class="s-intro center">Our data recovery process is built around security, transparency, and peace of mind. From start to finish, we keep you informed with clear updates at every stage. With a commitment to honest service and no hidden fees, we follow through on every promise — ensuring a smooth and stress-free experience.</p>
      </div>
    </section>

    <!-- REVIEWS -->
    <ReviewsSection :reviews="reviews" />

    <!-- CONTACT BAND -->
    <section class="s-contact-band">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Start Your Laptop Computer Recovery Today</h2>
        </div>
        <div class="contact-body">
          <p class="contact-body-text">Don't wait—every failed boot or corrupted file increases the risk of permanent data loss. Contact us now to begin your laptop computer recovery. We'll assess your device, explain your options, and work to recover your files with care. Whether it's a failed Windows operating system or a mechanical issue, we're ready to help.</p>
          <p class="contact-body-text">Our team is standing by to recover your files and give you peace of mind.</p>
          <ul class="contact-bullets">
            <li>Visit our lab in Glendale, CA</li>
            <li>Call us for a diagnostic</li>
            <li>You can also send your laptop from anywhere in the U.S.</li>
            <li>We will take care of your data like it is our own</li>
          </ul>
        </div>
        <NuxtLink to="/start-recovery" class="btn-start-recovery">Start Your Recovery</NuxtLink>
      </div>
    </section>

    <!-- FAQ -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading" style="text-align: center; margin-bottom: 36px;">Frequently Asked Questions</h2>
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

    <FooterBar />
  </div>
</template>

<style scoped>
*, *::before, *::after { box-sizing: border-box; }
.page-content { font-family: 'Inter', sans-serif; color: #1a1a2e; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 28px; }
.s-white { background: #fff; padding: 72px 0; }
.s-grey  { background: #f4f7fc; padding: 72px 0; }

.s-heading { font-size: clamp(1.5rem, 2.8vw, 2rem); font-weight: 900; color: #1a1a2e; line-height: 1.25; margin-bottom: 20px; }
.s-heading.center { text-align: center; }
.s-body { font-size: 0.95rem; color: #4a5568; line-height: 1.8; margin-bottom: 14px; }
.s-intro { font-size: 1rem; color: #4a5568; line-height: 1.75; margin-bottom: 20px; }
.s-intro.center { text-align: center; }

.inline-link { color: #7A5500; font-weight: 600; text-decoration: underline; }

/* Two-col */
.two-col-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
.file-types-img { width: 100%; max-width: 420px; height: auto; display: block; border-radius: 12px; margin-top: 20px; }
.two-col-layout.align-center { align-items: center; }
.file-types-col { display: flex; align-items: center; justify-content: center; }
.file-types-img-large { width: 100%; height: auto; display: block; border-radius: 16px; }

/* Content list */
.content-list { list-style: none; padding: 0 0 0 20px; margin: 0 0 20px; display: flex; flex-direction: column; gap: 10px; }
.content-list li { font-size: 0.95rem; color: #4a5568; line-height: 1.65; position: relative; padding-left: 16px; }
.content-list li::before { content: '»'; color: #C9A84C; font-weight: 900; position: absolute; left: -4px; top: 0; }

/* Process steps */
.process-steps { display: flex; flex-direction: column; gap: 0; }
.process-step { display: flex; align-items: flex-start; gap: 24px; padding: 28px 0; border-bottom: 1px solid #e2e6ee; }
.process-step:last-child { border-bottom: none; }
.step-num { width: 48px; height: 48px; background: #1a1a2e; color: #C9A84C; font-size: 1.2rem; font-weight: 900; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.step-title { font-size: 1rem; font-weight: 800; color: #1a1a2e; margin-bottom: 8px; }
.step-body { font-size: 0.93rem; color: #4a5568; line-height: 1.7; margin: 0; }

/* Why grid */
.why-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; margin-top: 32px; }
.why-item { display: flex; align-items: flex-start; gap: 16px; background: #fff; border-radius: 12px; padding: 24px; border: 1.5px solid #e2e6ee; }
.why-icon { font-size: 1.5rem; flex-shrink: 0; }
.why-item strong { display: block; font-size: 0.95rem; font-weight: 800; color: #1a1a2e; margin-bottom: 4px; }
.why-item p { font-size: 0.88rem; color: #4a5568; margin: 0; line-height: 1.6; }

/* FAQ */
.faq-wrap { display: flex; flex-direction: column; border: 1.5px solid #e2e6ee; border-radius: 12px; overflow: hidden; }
.faq-row { border-bottom: 1px solid #e2e6ee; }
.faq-row:last-child { border-bottom: none; }
.faq-trigger { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; background: #fff; border: none; cursor: pointer; text-align: left; gap: 16px; font-family: inherit; }
.faq-trigger span:first-child { font-size: 0.95rem; font-weight: 700; color: #1a1a2e; line-height: 1.4; }
.faq-toggle { font-size: 1.4rem; font-weight: 300; color: #C9A84C; flex-shrink: 0; }
.faq-answer { padding: 0 24px 22px; font-size: 0.92rem; color: #4a5568; line-height: 1.75; }

/* Contact band — dark navy instead of full black */
.s-contact-band { background: #0f1623; padding: 72px 0; border-top: 3px solid #C9A84C; border-bottom: 3px solid #C9A84C; }
.contact-banner-card { border: 1px solid rgba(201,168,76,0.3); border-radius: 8px; padding: 28px 32px; margin-bottom: 28px; }
.contact-banner-heading { font-size: clamp(1.4rem, 2.5vw, 1.9rem); font-weight: 900; color: #fff; margin: 0; }
.contact-body-text { font-size: 0.95rem; color: rgba(255,255,255,0.7); line-height: 1.75; margin-bottom: 14px; }
.contact-bullets { list-style: none; padding: 0; margin: 0 0 28px; display: flex; flex-direction: column; gap: 8px; }
.contact-bullets li { font-size: 0.93rem; color: rgba(255,255,255,0.65); display: flex; align-items: center; gap: 10px; }
.contact-bullets li::before { content: '✓'; color: #C9A84C; font-weight: 700; }
.btn-start-recovery { display: inline-block; background: #C9A84C; color: #1a1a1a; font-weight: 800; font-size: 1rem; padding: 16px 36px; border-radius: 6px; text-decoration: none; transition: background 0.2s; }
.btn-start-recovery:hover { background: #b8923e; }

@media (max-width: 900px) {
  .two-col-layout, .why-grid { grid-template-columns: 1fr; gap: 32px; }
}
@media (max-width: 640px) {
  .process-step { flex-direction: column; gap: 14px; }
}
</style>
