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
                "author": { "@type": "Person", "name": "Mark S." },
                "datePublished": "2024-11-20",
                "reviewBody": "My Toshiba drive failed suddenly. Five Star recovered everything quickly and with excellent customer service.",
                "name": "Toshiba Drive Recovery Success",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
              }
            ],
            "priceRange": "$300 - $950"
          },
          {
            "@type": "Service",
            "name": "Toshiba Data Recovery Services",
            "url": "https://www.fivestardatarecovery.com/data-recovery/toshiba-data-recovery/",
            "areaServed": [{ "@type": "Country", "name": "United States" }],
            "description": "Professional Toshiba Data Recovery services for external hard drives, internal drives, and SSDs. Serving Glendale, Los Angeles, and nationwide with free round-trip shipping and flat-rate pricing."
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fivestardatarecovery.com/" },
              { "@type": "ListItem", "position": 2, "name": "Data Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/" },
              { "@type": "ListItem", "position": 3, "name": "Toshiba Data Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/toshiba-data-recovery/" }
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Can I mail in my Toshiba drive for recovery if I'm not local?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! We offer free round-trip nationwide shipping. Just fill out our mail-in form, and we'll send you a prepaid shipping label to get your Toshiba drive safely to our lab — no matter where you're located." } },
              { "@type": "Question", "name": "Do you support data recovery from Toshiba SSDs?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. In addition to HDDs, we provide Toshiba SSD data recovery services, including recovery from NVMe and SATA-based solid-state drives. Our team handles both logical and physical SSD failures." } },
              { "@type": "Question", "name": "Do you work with Mac-formatted Toshiba drives?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We support macOS, Windows, and Linux file systems across all Toshiba HDD and SSD models." } },
              { "@type": "Question", "name": "Can you recover data from Toshiba drives with physical damage?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. If your Toshiba drive is physically damaged (e.g., dropped, making clicking sounds, or not spinning), our lab is equipped with a Class 100 Cleanroom to safely perform mechanical repairs and recover your data." } },
              { "@type": "Question", "name": "My Toshiba external hard drive is not showing up. Can you still recover the data?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. A Toshiba external hard drive not showing up may be due to logical errors, firmware corruption, or a bad USB port. Our diagnostic process will pinpoint the issue and determine the best recovery method." } }
            ]
          }
        ]
      })
    }
  ]
})

useSeoMeta({
  title: 'Toshiba Data Recovery - Five Star Data Recovery',
  ogTitle: 'Toshiba Data Recovery - Five Star Data Recovery',
  description: 'Our engineers specialize in Toshiba Data Recovery. Get fast, reliable, secure, and cost-effective solutions for all your data recovery needs.',
  ogDescription: 'Our engineers specialize in Toshiba Data Recovery. Get fast, reliable, secure, and cost-effective solutions for all your data recovery needs.',
  ogImage: 'https://www.fivestardatarecovery.com/toshiba-data-recovery-hero.webp',
})

const trustBadges = [
  { icon: 'clock', text: 'Available 24/7/365' },
  { icon: 'check', text: 'No Data = No Charge' },
  { icon: 'shield', text: '10+ Years in Business' },
  { icon: 'star', text: 'Free Nationwide Shipping' },
]

const reviews: { text: string; name: string; location: string }[] = [
  { text: "My Toshiba drive failed suddenly. Five Star recovered everything quickly and with excellent customer service.", name: 'Mark S.', location: 'San Diego, CA' },
  { text: "I had over 2TB of business files on my Toshiba drive that suddenly failed. The drive wasn't making any noise but simply wouldn't show up on my PC. Five Star Data Recovery diagnosed the issue quickly and recovered nearly 98% of my data. They were honest, fast, and the flat-rate pricing made the whole process stress-free.", name: 'Rachel K.', location: 'Portland, OR' },
  { text: "My Toshiba laptop crashed and wouldn't boot, leaving me locked out of all my work files. Alex handled my recovery and explained every step they were taking. Within a few days, I had all my documents and client data back. Highly recommend Five Star if you're dealing with a Toshiba data loss situation.", name: 'Anthony L.', location: 'Glendale, CA' },
]

const faqs = [
  {
    q: "Can I mail in my Toshiba drive for recovery if I'm not local?",
    a: "<strong>Yes!</strong> We offer <strong>free round-trip nationwide shipping</strong>. Just fill out our mail-in form, and we'll send you a prepaid shipping label to get your Toshiba drive safely to our lab — no matter where you're located.",
  },
  {
    q: 'Do you support data recovery from Toshiba SSDs?',
    a: "Yes. In addition to HDDs, we provide <strong>Toshiba SSD data recovery services</strong>, including recovery from NVMe and SATA-based solid-state drives. Our team handles both logical and physical SSD failures.",
  },
  {
    q: 'Do you work with Mac-formatted Toshiba drives?',
    a: "Yes. We support <strong>macOS, Windows, and Linux</strong> file systems across all Toshiba HDD and SSD models.",
  },
  {
    q: 'Can you recover data from Toshiba drives with physical damage?',
    a: "Yes. If your Toshiba drive is physically damaged (e.g., dropped, making clicking sounds, or not spinning), our lab is equipped with a <strong>Class 100 Cleanroom</strong> to safely perform mechanical repairs and recover your data.",
  },
  {
    q: 'My Toshiba external hard drive is not showing up. Can you still recover the data?',
    a: "Absolutely. A Toshiba external hard drive not showing up may be due to <strong>logical errors, firmware corruption</strong>, or a bad USB port. Our diagnostic process will pinpoint the issue and determine the best recovery method.",
  },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <HeroSection
      title="Toshiba Data Recovery Services"
      subtitle="Get Your Data Back In No Time."
      description="Is your <strong>Toshiba external hard drive not working</strong>? You're not alone. Toshiba drives are commonly used for storing important files, backup data, and media collections. But like all storage devices, they can fail. When that happens, it's not just the device that's at risk—it's everything stored on it.<br><br>At Five Star Data Recovery, we offer specialized <strong>Toshiba data recovery services</strong> for customers dealing with failed drives, deleted files, and physical damage. Whether your Toshiba HDD stopped spinning, won't connect, or shows up blank, we have the tools and expertise to recover your data safely."
      bgImage="/toshiba-data-recovery-hero.webp"
      :trustBadges="trustBadges"
    />

    <StatsBar />

    <!-- SECTION 1 — Why Drives Stop Working -->
    <section class="s-white">
      <div class="container">
        <div class="two-col-layout">
          <div>
            <h2 class="s-heading">Why Toshiba Hard Drives Stop Working</h2>
            <p class="s-body">Toshiba drives are durable, but they're not immune to problems. Some of the most common reasons a Toshiba <NuxtLink to="/data-recovery/external-hard-drive-data-recovery" class="inline-link">external hard drive</NuxtLink> is not working include:</p>
            <ul class="content-list">
              <li>Power issues related to a faulty USB port or cable</li>
              <li>File system errors or corrupt partitions</li>
              <li>Disk drive not assigned a proper letter in disk management</li>
              <li>Physically damaged components from <NuxtLink to="/data-recovery/dropped-hard-drive" class="inline-link">drops</NuxtLink> or overheating</li>
              <li>Internal wear and tear or mechanical failure</li>
              <li>Errors after being accidentally deleted or formatted</li>
            </ul>
          </div>
          <div class="section-img-wrap">
            <img src="/toshiba-canvio-drive-recovery-640.webp" alt="Toshiba Canvio external hard drive data recovery" class="section-img" width="640" height="427" loading="lazy"
               srcset="/toshiba-canvio-drive-recovery-640.webp 640w, /toshiba-canvio-drive-recovery-800.webp 800w, /toshiba-canvio-drive-recovery-1280.webp 1280w"
               sizes="(max-width: 640px) 100vw, (max-width: 1024px) 800px, 640px" />
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2 — Signs -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Signs Your Toshiba Drive Needs Recovery</h2>
        <p class="s-body">If you notice any of the following issues, it's time to consider professional help:</p>
        <ul class="content-list">
          <li>The device powers on, but the drive <NuxtLink to="/data-recovery/hard-drive-not-showing-up" class="inline-link">doesn't show up on your computer</NuxtLink></li>
          <li>Your system asks to format the drive when connected</li>
          <li>The drive shows up in disk management but without a label</li>
          <li>You're unable to assign a drive letter and paths</li>
          <li><NuxtLink to="/hard-drive-clicking" class="inline-link">Clicking</NuxtLink> or buzzing noises from inside the Toshiba HDD</li>
          <li>Slow response, freezing, or missing folders</li>
          <li>You accidentally deleted files you now need back</li>
        </ul>
      </div>
    </section>

    <!-- SECTION 3 — What Not to Do -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">What Not to Do If Your Toshiba External Drive Fails</h2>
        <p class="s-body">Many users try DIY methods to fix Toshiba external drives using free recovery software or YouTube tutorials. But if your drive is physically damaged or not detected at all, using these tools could permanently overwrite or destroy recoverable data. Avoid these risky steps:</p>
        <ul class="content-list">
          <li>Don't open the drive casing yourself</li>
          <li>Don't run "chkdsk" or format utilities if the drive is unreadable</li>
          <li>Don't continue reconnecting the drive to different ports repeatedly</li>
          <li>Don't use system tools if you hear clicking or buzzing noises</li>
        </ul>
      </div>
    </section>

    <!-- SECTION 4 — Recovery Process -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Our Toshiba Data Recovery Process</h2>
        <p class="s-body">We take every case seriously and follow a step-by-step recovery plan:</p>
        <div class="process-steps">
          <div class="process-step">
            <div class="step-num">1</div>
            <div>
              <h3 class="step-title">Diagnostic Assessment</h3>
              <p class="step-body">We begin by inspecting your Toshiba hard disk to determine whether the issue is logical, physical, or firmware-related.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">2</div>
            <div>
              <h3 class="step-title">Secure Imaging</h3>
              <p class="step-body">If the drive is unstable, we clone it sector-by-sector to avoid damaging the original.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">3</div>
            <div>
              <h3 class="step-title">Data Extraction</h3>
              <p class="step-body">Using specialized tools, we extract files from the cloned image—even from corrupted sectors or formatted volumes.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">4</div>
            <div>
              <h3 class="step-title">File Verification</h3>
              <p class="step-body">You'll receive a file list to review. We recover full folder structures, filenames, and file types whenever possible.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">5</div>
            <div>
              <h3 class="step-title">Data Delivery</h3>
              <p class="step-body">Recovered data is returned on a new drive or USB, fully tested and verified.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 5 — Drive Types -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Types of Toshiba Drives We Recover</h2>
        <p class="s-body">We service all major Toshiba HDD and <NuxtLink to="/data-recovery/ssd-data-recovery" class="inline-link">SSD</NuxtLink> models, including:</p>
        <ul class="content-list">
          <li>Canvio Basics and Canvio Advance drives</li>
          <li>Toshiba desktop backup drives</li>
          <li>Toshiba internal SATA hard drives</li>
          <li>USB-powered portable drives</li>
          <li>External <NuxtLink to="/data-recovery/raid-data-recovery" class="inline-link">RAID enclosures</NuxtLink> and encrypted devices</li>
        </ul>
        <p class="s-body">The <NuxtLink to="/data-recovery" class="inline-link">data recovery</NuxtLink> cost can vary depending on the type of drive and the issue involved. After a full diagnostic, we'll provide a clear, flat-rate quote based on the specific device and recovery scenario.</p>
      </div>
    </section>

    <!-- SECTION 6 — Physical Damage -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Recovery for Physically Damaged Toshiba Drives</h2>
        <p class="s-body">If your Toshiba hard disk was dropped or suffered impact, recovery often requires <NuxtLink to="/data-recovery/clean-room-data-recovery" class="inline-link">cleanroom work</NuxtLink>. Our technicians can:</p>
        <ul class="content-list">
          <li>Replace failed read/write heads</li>
          <li>Repair damaged PCBs and firmware</li>
          <li>Realign components after physical shock</li>
          <li>Extract data from broken platters or enclosures</li>
        </ul>
        <p class="s-body">Physically damaged drives should never be powered on repeatedly. Doing so increases the risk of scratching platters or further degrading the drive.</p>
      </div>
    </section>

    <!-- SECTION 7 — Why Choose -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Why Choose Five Star Data Recovery?</h2>
        <ul class="content-list">
          <li>Cleanroom-certified repair environment</li>
          <li>Transparent, flat-rate pricing</li>
          <li>Free diagnostics and "no data, no charge" policy</li>
          <li>Real-time updates throughout the process</li>
          <li>Trusted by businesses, creatives, and individuals nationwide</li>
        </ul>
      </div>
    </section>

    <!-- SECTION 8 — File Types -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">What Types of Files Can Be Recovered?</h2>
        <p class="s-body">One of the most common questions we receive is whether we can recover specific file types. The good news is yes—we support virtually every common file type stored on Toshiba drives, including:</p>
        <ul class="content-list">
          <li><strong>Photos:</strong> JPG, PNG, TIFF, RAW</li>
          <li><strong>Videos:</strong> MP4, MOV, AVI, MXF</li>
          <li><strong>Documents:</strong> DOCX, PDF, XLSX, PPTX</li>
          <li><strong>Emails and archives:</strong> PST, OST, ZIP, RAR</li>
          <li><strong>Design files:</strong> PSD, INDD, CAD formats</li>
        </ul>
        <p class="s-body">Whether you're a photographer, business owner, or student, we can help recover everything from lost data to entire project folders.</p>
      </div>
    </section>

    <!-- SECTION 9 — Safe Troubleshooting -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">How to Troubleshoot a Toshiba Drive (Without Risk)</h2>
        <p class="s-body">There are a few safe steps you can try if your Toshiba drive stops working:</p>
        <ul class="content-list">
          <li>Try a different USB port or cable</li>
          <li>Check disk management to see if the drive appears</li>
          <li>Use Change drive letter and paths to assign a letter</li>
          <li>Restart your computer and reconnect the device</li>
        </ul>
        <p class="s-body">If none of these work—or if you hear noises—stop immediately. Attempting too much on your own could overwrite or damage your data permanently.</p>
      </div>
    </section>

    <!-- SECTION 10 — Why Timing Matters -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Why Timing Matters in Data Recovery</h2>
        <p class="s-body">The moment your Toshiba external hard drive is not working, every action you take can influence the outcome. Continuing to power the device on, scan it, or reformat it can make recovery harder—or impossible. By contacting us early, we have the highest chance to recover your data fully. This is especially true in cases involving:</p>
        <ul class="content-list">
          <li>Bad sectors or firmware corruption</li>
          <li>Physically damaged heads or platters</li>
          <li>Deleted file systems or accidental reformatting</li>
        </ul>
        <p class="s-body">Act fast, and you give your data the best chance of survival.</p>
      </div>
    </section>

    <!-- REVIEWS -->
    <ReviewsSection :reviews="reviews" />

    <!-- SECTION 11 — Nationwide -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Nationwide Service with Free Shipping</h2>
        <p class="s-body">Although we're based in Los Angeles, we serve clients across the U.S. We provide free round-trip shipping for Toshiba drive recovery cases. Simply start a case online, print the prepaid shipping label, and send your storage device to our lab. Once your case is complete, your lost data is returned securely.</p>
      </div>
    </section>

    <RelatedLinks :links="[
      { text: 'Hard Drive Recovery', href: '/data-recovery/hard-drive-recovery' },
      { text: 'External Hard Drive Recovery', href: '/data-recovery/external-hard-drive-data-recovery' },
      { text: 'WD Data Recovery', href: '/data-recovery/western-digital-data-recovery' },
      { text: 'Seagate Data Recovery', href: '/data-recovery/seagate-data-recovery' },
      { text: 'Samsung Data Recovery', href: '/data-recovery/samsung-data-recovery' },
      { text: 'SSD Data Recovery', href: '/data-recovery/ssd-data-recovery' },
    ]" />

    <!-- QUOTE FORM -->
    <QuoteFormSection
      description="Canvio, Backup Plus, or internal SATA — we recover data from every Toshiba model. Whether your drive stopped spinning, won't mount, or was accidentally formatted, our certified engineers diagnose and recover your data with flat-rate pricing and no surprises."
      bullet1="Free diagnostic — logical, physical, and firmware assessment"
      bullet2="Class 100 Cleanroom for physically damaged drives"
      bullet3="No Data, No Charge (most cases)"
      closing="Don't keep powering on a failing drive. Fill out the form and we'll evaluate your Toshiba case for free — then get to work."
      bgImage="/toshiba-data-recovery-hero.webp"
    />

    <!-- CONTACT BAND -->
    <section class="s-contact-band contact-band-bg">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Get Started with Toshiba Data Recovery</h2>
        </div>
        <p class="contact-body-text">Don't let data loss from a broken Toshiba HDD derail your work or memories. Whether your Toshiba external hard drive is not working, or you've suffered file corruption or deletion, we can help.</p>
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
.contact-band-bg { background: linear-gradient(to right, rgba(15,22,35,0.92) 0%, rgba(15,22,35,0.75) 60%, rgba(15,22,35,0.5) 100%), url('/toshiba-canvio-drive-recovery.webp') center center / cover no-repeat !important; }
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
@media (max-width: 768px) { .two-col-layout { grid-template-columns: 1fr; } }
</style>
