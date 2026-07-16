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
                "author": { "@type": "Person", "name": "Emily R." },
                "datePublished": "2024-11-20",
                "reviewBody": "My Samsung SSD suddenly stopped working and wasn't showing up on any computer. I was sure my business documents were lost forever. The team at Five Star Data Recovery explained the process and within a few days, they recovered everything I needed. Great service and great communication.",
                "name": "SSD Recovery Success",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
              }
            ],
            "priceRange": "$300 - $950"
          },
          {
            "@type": "Service",
            "name": "SSD Data Recovery Services",
            "url": "https://www.fivestardatarecovery.com/data-recovery/ssd-data-recovery/",
            "areaServed": [{ "@type": "Country", "name": "United States" }],
            "description": "Professional SSD data recovery for all makes and models. Controller failures, firmware corruption, NAND chip damage, formatted SSDs, and MacBook integrated storage. Flat-rate pricing, No Data No Charge. Serving Glendale, Los Angeles, and nationwide."
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fivestardatarecovery.com/" },
              { "@type": "ListItem", "position": 2, "name": "Data Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/" },
              { "@type": "ListItem", "position": 3, "name": "SSD Data Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/ssd-data-recovery/" }
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Can data be recovered from a failed SSD?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Even when an SSD fails, data recovery is often possible. Our engineers specialize in recovering data from drives with controller failures, firmware corruption, bad NAND chips, or logical file system issues." } },
              { "@type": "Question", "name": "What are common signs of SSD failure?", "acceptedAnswer": { "@type": "Answer", "text": "Common signs include the drive not being recognized by your computer, sudden loss of files, very slow read/write speeds, or the drive appearing with 0GB capacity. In some cases, the SSD may not power on at all." } },
              { "@type": "Question", "name": "Can you recover data from an SSD that shows 0GB capacity or incorrect drive size?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we specialize in SSD data recovery, including cases where the drive reports a 0GB capacity or an incorrect size. This issue is often caused by firmware corruption, controller failure, or internal chip damage. Our engineers use advanced tools to access the NAND memory chips directly or repair the SSD's firmware, allowing us to rebuild the file structure and recover your data. If you notice this issue, it's important to stop using the SSD immediately to avoid further complications. Contact us for a free consultation to evaluate your specific case." } },
              { "@type": "Question", "name": "What brands of SSDs do you recover data from?", "acceptedAnswer": { "@type": "Answer", "text": "We recover data from all major SSD brands, including Samsung (EVO, PRO, QVO, and NVMe models), SanDisk, Crucial, Western Digital (WD), Kingston, Seagate, Intel, ADATA, SK Hynix, Toshiba, Corsair, PNY, and Transcend. Whether you're using a SATA SSD, an NVMe M.2 drive, or an older-generation solid-state drive, our engineers are fully equipped to handle both logical failures (like file system corruption or accidental formatting) and physical issues (such as controller failure, firmware corruption, or NAND chip damage). Even if your brand isn't listed here, there's a very good chance we can help\u2014feel free to contact us for a free consultation." } },
              { "@type": "Question", "name": "Can you recover data from an SSD inside a MacBook or non-removable storage device?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We specialize in recovering data from MacBooks and other laptops with non-removable SSDs. Many modern MacBooks and ultra-thin laptops have SSD chips that are soldered directly to the motherboard, making traditional data recovery impossible for most shops. At Five Star Data Recovery, our engineers perform component-level repairs and use advanced micro-soldering and chip-off techniques (when necessary) to access the storage directly and extract your data safely. Whether it's a MacBook Pro, MacBook Air, or any other device with integrated storage, we have the tools and expertise to help." } },
              { "@type": "Question", "name": "How is SSD data recovery different from hard drive recovery?", "acceptedAnswer": { "@type": "Answer", "text": "Unlike traditional hard drives, SSDs use NAND flash memory with no moving parts. Recovery often involves advanced techniques like chip-off recovery or firmware-level repairs, which require specialized tools and expertise." } },
              { "@type": "Question", "name": "Is TRIM command a problem for SSD data recovery?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, the TRIM command can complicate recovery. When TRIM is enabled, deleted data is often overwritten and becomes unrecoverable. However, if your data loss wasn't due to file deletion (e.g., hardware failure), recovery is still very possible." } },
              { "@type": "Question", "name": "How long does SSD data recovery take?", "acceptedAnswer": { "@type": "Answer", "text": "Typical turnaround time is 3 to 5 business days, but more complex cases involving chip-level work may take longer. If you're in a hurry, expedited service options are available." } },
              { "@type": "Question", "name": "Will opening my SSD or trying DIY recovery hurt my chances?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Attempting to open the drive or use third-party software can make recovery more difficult or even impossible. It's always best to power off the device and let a professional data recovery lab handle the process." } },
              { "@type": "Question", "name": "How much does SSD data recovery cost?", "acceptedAnswer": { "@type": "Answer", "text": "At Five Star Data Recovery, SSD data recovery is priced using the same flat-rate model as our other services, ensuring transparency and predictability for every case. Our rates are based on the drive's storage capacity and the nature of the failure, not on the value of your data or the time it takes to recover it. Here's a breakdown of our standard SSD recovery pricing: SSDs up to 2TB: $300. SSDs between 2TB and 6TB: $500. SSDs between 8TB and 12TB: $600. SSDs with physical or component-level issues requiring cleanroom repairs: $950 (any size). We never charge any upfront fees, and if we are unable to recover your data, you pay nothing. Optional expedited service is also available for time-sensitive projects and will be quoted based on urgency. Every SSD case is handled with care by our experienced recovery engineers using proprietary tools and safe imaging procedures. If you're unsure about your SSD issue, feel free to contact us for a free diagnostic and exact quote before moving forward." } }
            ]
          }
        ]
      })
    }
  ]
})

useSeoMeta({
  title: 'SSD Data Recovery - Five Star Data Recovery',
  ogTitle: 'SSD Data Recovery - Five Star Data Recovery',
  description: 'Need help Recovering Data from your SSD? We offers affordable SSD Hard Drive Data Recovery Services. Get your data back with us.',
  ogDescription: 'Need help Recovering Data from your SSD? We offers affordable SSD Hard Drive Data Recovery Services. Get your data back with us.',
  ogImage: 'https://www.fivestardatarecovery.com/ssd-data-recovery-hero.webp',
})

const trustBadges = [
  { icon: 'clock', text: 'Available 24/7/365' },
  { icon: 'check', text: 'No Data = No Charge' },
  { icon: 'shield', text: '10+ Years in Business' },
  { icon: 'star', text: 'Free Nationwide Shipping' },
]

const reviews = [
  {
    text: "My Samsung SSD suddenly stopped working and wasn&#39;t showing up on any computer. I was sure my business documents were lost forever. The team at Five Star Data Recovery explained the process and within a few days, they recovered everything I needed. Great service and great communication.",
    name: 'Emily R.',
    location: 'Los Angeles, CA',
  },
  {
    text: "My Crucial SSD suddenly showed 0GB capacity and none of my data was accessible. I dropped it off with Five Star Data Recovery, and within days, they recovered over 95% of my files. They kept me updated every step of the way and there were no hidden fees.",
    name: 'Maria L.',
    location: 'Las Vegas, NV',
  },
  {
    text: "When my Seagate SSD stopped working after a power surge, I thought everything was gone. The engineers explained the issue in simple terms and reassured me they had handled many cases like mine. A few days later, I had my important photos and documents back. Highly recommend!",
    name: 'Robert D.',
    location: 'New York, NY',
  },
]

const faqs = [
  {
    q: 'Can data be recovered from a failed SSD?',
    a: 'Yes. Even when an SSD fails, data recovery is often possible. Our engineers specialize in recovering data from drives with <strong>controller failures, firmware corruption, bad NAND chips</strong>, or logical file system issues.',
  },
  {
    q: 'What are common signs of SSD failure?',
    a: 'Common signs include the drive <strong>not being recognized by your computer</strong>, sudden loss of files, very slow read/write speeds, or the drive appearing with <strong>0GB capacity</strong>. In some cases, the SSD may not power on at all.',
  },
  {
    q: 'Can you recover data from an SSD that shows 0GB capacity or incorrect drive size?',
    a: 'Yes, we specialize in SSD data recovery including cases where the drive reports <strong>0GB capacity or an incorrect size</strong>. This is often caused by firmware corruption, controller failure, or internal chip damage. Our engineers use advanced tools to access the NAND memory chips directly or repair the firmware. Stop using the SSD immediately and contact us for a free consultation.',
  },
  {
    q: 'What brands of SSDs do you recover data from?',
    a: 'We recover data from all major SSD brands including <strong>Samsung, SanDisk, Crucial, Western Digital, Kingston, Seagate, Intel, ADATA, SK Hynix, Toshiba, Corsair, PNY, and Transcend</strong> — whether SATA, NVMe M.2, or older-generation SSDs. Even if your brand isn&#39;t listed, contact us for a free consultation.',
  },
  {
    q: 'Can you recover data from an SSD that was inside a MacBook or other non-removable storage device?',
    a: 'Yes. We specialize in recovering data from <strong>MacBooks and other laptops with non-removable SSDs</strong>. Many modern MacBooks have SSD chips soldered directly to the motherboard. Our engineers perform component-level repairs and use advanced <strong>micro-soldering and chip-off techniques</strong> to access the storage directly.',
  },
  {
    q: 'How is SSD data recovery different from hard drive recovery?',
    a: 'Unlike traditional hard drives, SSDs use <strong>NAND flash memory with no moving parts</strong>. Recovery often involves <strong>chip-off recovery or firmware-level repairs</strong>, which require specialized tools and expertise beyond what most data recovery labs offer.',
  },
  {
    q: 'Is TRIM command a problem for SSD data recovery?',
    a: 'Yes, the <strong>TRIM command can complicate recovery</strong>. When TRIM is enabled, deleted data is often overwritten and becomes unrecoverable. That&#39;s why time is critical — stop using the SSD immediately after data loss. However, if your data loss wasn&#39;t due to file deletion (e.g., hardware failure), recovery is still very possible.',
  },
  {
    q: 'How long does SSD data recovery take?',
    a: 'Typical turnaround time is <strong>3 to 5 business days</strong>, but more complex cases involving chip-level work may take longer. If you&#39;re in a hurry, <strong>expedited service options</strong> are available.',
  },
  {
    q: 'Will opening my SSD or trying DIY recovery hurt my chances?',
    a: '<strong>Yes.</strong> Attempting to open the drive or use third-party software can make recovery more difficult or even impossible. It&#39;s always best to <strong>power off the device</strong> and let a professional data recovery lab handle the process.',
  },
  {
    q: 'How much does SSD data recovery cost?',
    a: 'Our flat-rate SSD recovery pricing:<br><strong>$300</strong> – SSDs up to 2TB<br><strong>$500</strong> – SSDs between 2TB and 6TB<br><strong>$600</strong> – SSDs between 8TB and 12TB<br><strong>$950</strong> – SSDs with physical/component-level issues requiring cleanroom repairs<br><br><strong>No upfront fees</strong> — you only pay if we successfully recover your data.',
  },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <HeroSection
      title="Solid State Drive Recovery"
      subtitle="Get Your Data Back In No Time."
      description="<strong>Solid State Drives (SSDs)</strong> are fast, reliable, and small. However, if they fail, you need special tools and skills to recover your data. At Five Star Data Recovery, we offer expert-level <strong>SSD data recovery</strong> for all makes and models.<br><br>If you have a logical failure, controller issue, or file system corruption, we can help. We recover data from solid-state hard drives quickly and securely. Our team handles everything from deleted files to physical damage. If your SSD is no longer recognized, has been formatted, or has suffered a sudden power loss, don&#39;t panic. We use professional tools to recover the data and get you back on track."
      bgImage="/ssd-data-recovery-hero.webp"
      :trustBadges="trustBadges"
    />

    <StatsBar />

    <!-- SECTION 1 — What We Can Recover -->
    <section class="s-white">
      <div class="container">
        <div class="two-col-layout">
          <div>
            <h2 class="s-heading">What We Can Recover</h2>
            <p class="s-body">Our professional data recovery services cover a wide range of issues and file types. We can recover:</p>
            <ul class="content-list">
              <li>Documents, photos, and video files</li>
              <li>Files from damaged file systems and corrupted partitions</li>
              <li>Deleted files from formatted SSDs</li>
              <li>Lost partitions and boot sectors</li>
              <li>Data from an SSD affected by a failed OS update</li>
              <li>Files from SSDs used in <NuxtLink to="/data-recovery/raid-data-recovery">RAID</NuxtLink> arrays or enterprise systems</li>
              <li>Data affected by ransomware, partition table damage, or accidental OS reinstallation</li>
              <li>Data from SSDs with failing NAND chips, bad sectors, or firmware corruption</li>
            </ul>
          </div>
          <div class="section-img-wrap">
            <img src="/ssd-data-recovery-install-640.webp" alt="SSD data recovery — solid state drive installation and repair" class="section-img" width="640" height="427" loading="lazy"
               srcset="/ssd-data-recovery-install-640.webp 640w, /ssd-data-recovery-install-800.webp 800w, /ssd-data-recovery-install-1280.webp 1280w"
               sizes="(max-width: 640px) 100vw, (max-width: 1024px) 800px, 640px" />
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2 — Common Scenarios -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Common SSD Data Loss Scenarios</h2>
        <p class="s-body">Even though SSDs are more durable than hard drives, they still fail. Here are some common data loss scenarios we see with solid state drives:</p>
        <ul class="content-list">
          <li>Accidental deletion or formatted SSD</li>
          <li>Power surge or sudden shutdown during data transfer</li>
          <li>File system corruption and boot issues</li>
          <li>Firmware bugs or controller failure</li>
          <li>Trimmed files that bypass the recycle bin</li>
          <li>Liquid or impact-related physical damage</li>
        </ul>
        <p class="s-body">If you've experienced any of these events, <strong>stop using the drive immediately</strong>. The sooner we receive the SSD, the higher the chance we can recover your data.</p>
        <p class="s-body">Some SSDs may also suffer from gradual performance degradation, eventually leading to read-only status. Power interruptions and aging memory cells can cause this behavior — especially in lower-grade or heavily used SSDs. Our tools allow us to access the NAND memory directly and attempt recovery even when standard connections fail.</p>
      </div>
    </section>

    <!-- SECTION 3 — Recovery Process -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Our SSD Data Recovery Process</h2>
        <div class="process-steps">
          <div class="process-step">
            <div class="step-num">1</div>
            <div>
              <h3 class="step-title">Initial Assessment and Diagnostics</h3>
              <p class="step-body">We begin by evaluating the SSD to determine whether the failure is logical, physical, or firmware-related.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">2</div>
            <div>
              <h3 class="step-title">Non-Invasive Imaging</h3>
              <p class="step-body">If possible, we create a complete sector-by-sector clone of the SSD to ensure data safety and integrity.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">3</div>
            <div>
              <h3 class="step-title">Firmware or Component-Level Repair</h3>
              <p class="step-body">We perform advanced firmware fixes or physical repairs when the SSD has controller, NAND, or PCB-related issues.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">4</div>
            <div>
              <h3 class="step-title">File System and Data Recovery</h3>
              <p class="step-body">We analyze the image to reconstruct file systems, recover lost partitions, and extract user data.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">5</div>
            <div>
              <h3 class="step-title">Data Approval and Delivery</h3>
              <p class="step-body">We provide a recovery report, and once approved, transfer the data securely to a new storage device or through encrypted delivery.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4 — How SSDs Work -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">How SSDs Work & Why It&#39;s Different</h2>
        <p class="s-body">Unlike traditional hard drives, an SSD has no moving parts. It stores data on flash memory chips and uses a controller to manage data placement. This makes it faster and more durable than spinning disks. However, recovering data from an SSD needs a different approach.</p>
        <p class="s-body">SSDs rely on wear leveling, block management, and background processes that continuously change how and where data is stored. These features make recovering data from solid state disks more complex — especially when built-in encryption exists or when a firmware failure occurs.</p>
      </div>
    </section>

    <!-- SECTION 5 — TRIM -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">TRIM Command and Its Impact on Recovery</h2>
        <p class="s-body">One challenge with SSD data recovery is the <strong>TRIM command</strong>. When TRIM is enabled, the SSD can permanently erase deleted files in the background. This makes recovery almost impossible after a while. That&#39;s why time is critical.</p>
        <p class="s-body">If you&#39;ve accidentally deleted files or formatted the SSD, stop using it immediately. Continuing to write new data can trigger TRIM and erase previously recoverable content. Our engineers know how to find lost data and use best practices for working with trimmed and partially overwritten blocks.</p>
      </div>
    </section>

    <!-- SECTION 6 — Brands -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">SSD Brands and Devices We Support</h2>
        <p class="s-body">We recover data from SSDs used in desktops, laptops, servers, and external enclosures. Brands we support include:</p>
        <ul class="content-list">
          <li>Samsung, SanDisk, Crucial, Kingston, Intel</li>
          <li>Western Digital, Seagate, Toshiba, SK Hynix</li>
          <li>Apple SSDs, NVMe drives, PCIe M.2, and SATA III SSDs</li>
        </ul>
        <p class="s-body">If your SSD isn&#39;t listed here, don&#39;t worry — we likely support it. Our lab has the equipment and experience to recover data from all types of storage devices.</p>
      </div>
    </section>

    <!-- REVIEWS -->
    <LazyReviewsSection :reviews="reviews" />

    <!-- SECTION 7 — Why Choose -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Why Choose Five Star Data Recovery?</h2>
        <p class="s-body">Our team has years of experience with SSD architecture and recovery engineering. We invest in the newest SSD data recovery tools and firmware analyzers. Clients choose Five Star for:</p>
        <ul class="content-list">
          <li>Honest diagnostics and flat-rate pricing</li>
          <li>No-recovery, no-charge guarantee</li>
          <li>Advanced options for encrypted or damaged SSDs</li>
          <li>High success rates in difficult SSD data recovery cases</li>
          <li>Free Nationwide Priority Shipping (Round Trip)</li>
        </ul>
        <p class="s-body">Our secure lab environment ensures your data remains confidential. All work is done in-house by certified professionals.</p>
      </div>
    </section>

    <!-- QUOTE FORM -->
    <LazyQuoteFormSection
      description="SSDs fail differently than hard drives — TRIM, controller failures, and NAND chip damage require specialized tools that most shops don&#39;t have. Our engineers recover data from every SSD make, model, and failure type, including MacBook integrated storage."
      bullet1="All SSD types — SATA, NVMe, M.2, PCIe, MacBook integrated"
      bullet2="Firmware repair, chip-off, and NAND-level access"
      bullet3="No Data, No Charge — flat-rate from $300"
      closing="Stop using the SSD immediately — every write can trigger TRIM and erase recoverable data. Fill out the form for a free evaluation."
      bgImage="/ssd-data-recovery-hero.webp"
    />

    <!-- CONTACT BAND -->
    <section class="s-contact-band contact-band-bg">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Start Your SSD Data Recovery Today</h2>
        </div>
        <p class="contact-body-text">If you&#39;re experiencing SSD failure, don&#39;t risk making it worse with DIY utilities. Let our specialists handle the recovery safely, securely, and professionally.</p>
        <ul class="contact-bullets">
          <li>Call us for a free diagnostic</li>
          <li>Mail your drive to our recovery lab</li>
          <li>Flat-rate <NuxtLink to="/data-recovery-service-pricing">pricing</NuxtLink> — no hidden fees</li>
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
.contact-band-bg { background: linear-gradient(to right, rgba(15,22,35,0.92) 0%, rgba(15,22,35,0.75) 60%, rgba(15,22,35,0.5) 100%), url('/ssd-data-recovery-install.webp') center center / cover no-repeat !important; }
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
