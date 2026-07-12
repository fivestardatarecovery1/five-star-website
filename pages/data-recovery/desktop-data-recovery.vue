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
                "author": { "@type": "Person", "name": "Olivia W." },
                "datePublished": "2024-11-19",
                "reviewBody": "Five Star recovered my entire photo archive from a dead desktop drive. Truly amazing work!",
                "name": "Desktop Drive Recovery",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
              }
            ],
            "priceRange": "$300 - $950"
          },
          {
            "@type": "Service",
            "name": "Desktop Data Recovery Services",
            "url": "https://www.fivestardatarecovery.com/data-recovery/desktop-data-recovery/",
            "areaServed": [{ "@type": "Country", "name": "United States" }],
            "description": "Professional Desktop Data Recovery services for both HDD and SSD storage devices from Windows, Mac, and custom-built PCs. Offering cleanroom services, logical recovery, and nationwide mail-in service."
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fivestardatarecovery.com/" },
              { "@type": "ListItem", "position": 2, "name": "Data Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/" },
              { "@type": "ListItem", "position": 3, "name": "Desktop Data Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/desktop-data-recovery/" }
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Can you recover data from a desktop that no longer powers on?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. If your desktop PC won't turn on, we can safely extract the internal hard drive or SSD and attempt a full data recovery. Common causes include motherboard failure, PSU issues, or drive-level faults." } },
              { "@type": "Question", "name": "Do you offer desktop data recovery for both HDDs and SSDs?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Whether your desktop has a traditional hard drive or a solid-state drive, we have the tools and expertise to recover data from all major desktop storage types." } },
              { "@type": "Question", "name": "What if my desktop hard drive is making clicking or grinding noises?", "acceptedAnswer": { "@type": "Answer", "text": "A clicking desktop hard drive often indicates a mechanical failure. Do not continue powering it on. We offer cleanroom-based recovery solutions to salvage data from physically damaged drives." } },
              { "@type": "Question", "name": "Can you recover deleted files from a desktop computer?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we provide deleted file recovery from desktop hard drives, as long as the data hasn't been overwritten. This includes accidental deletion, formatted partitions, or emptied recycle bins." } },
              { "@type": "Question", "name": "Do you offer desktop data recovery for Mac and Windows systems?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our services support both Windows desktop recovery and macOS desktop recovery, including iMacs, Mac Minis, custom-built PCs, and branded desktops from Dell, HP, Lenovo, and more." } },
              { "@type": "Question", "name": "What's the turnaround time for desktop data recovery?", "acceptedAnswer": { "@type": "Answer", "text": "Most desktop data recovery cases are completed within 3–5 business days. For urgent cases, we offer Expedited and Expedited Plus services with priority turnaround options." } },
              { "@type": "Question", "name": "Can you recover data from a desktop RAID setup?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we recover data from RAID-enabled desktop workstations, including RAID 0, 1, 5, or custom arrays commonly used in content creation or server-grade towers." } },
              { "@type": "Question", "name": "Do you offer pickup or mail-in options for desktop data recovery?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer free local pickup in the Los Angeles area and nationwide mail-in service for desktop data recovery. Just fill out the form and we'll provide a prepaid shipping label." } }
            ]
          }
        ]
      })
    }
  ]
})

useSeoMeta({
  title: 'Desktop Data Recovery - Five Star Data Recovery',
  ogTitle: 'Desktop Data Recovery - Five Star Data Recovery',
  description: 'Is your desktop computer no longer recognizing your drive? If yes, Give us a call so we can give you a FREE quote now.',
  ogDescription: 'Is your desktop computer no longer recognizing your drive? If yes, Give us a call so we can give you a FREE quote now.',
  ogImage: 'https://www.fivestardatarecovery.com/desktop-data-recovery-hero.webp',
})

const trustBadges = [
  { icon: 'clock', text: 'Available 24/7/365' },
  { icon: 'check', text: 'No Data = No Charge' },
  { icon: 'shield', text: '10+ Years in Business' },
  { icon: 'star', text: 'Free Nationwide Shipping' },
]

const reviews = [
  {
    text: "Five Star recovered my entire photo archive from a dead desktop drive. Truly amazing work!",
    name: 'Olivia W.',
    location: 'Glendale, CA',
  },
  {
    text: "My Windows desktop crashed after a power surge, and I feared my project files were gone. Vahan personally took the time to explain what likely happened and walked me through the recovery options. They recovered almost 99% of my documents and photos. The flat-rate pricing and no hidden fees were a huge relief.",
    name: 'Chris B.',
    location: 'Sacramento, CA',
  },
  {
    text: "I had a Seagate hard drive inside my desktop that stopped spinning. I found Five Star Data Recovery online and decided to give them a shot. Alex worked on my case and was able to recover almost all of my data, even though the drive had mechanical damage. The clean room service was worth every penny.",
    name: 'Samantha H.',
    location: 'Phoenix, AZ',
  },
]

const faqs = [
  {
    q: 'Can you recover data from a desktop that no longer powers on?',
    a: 'Yes. If your desktop PC <strong>won&#39;t turn on</strong>, we can safely extract the internal hard drive or SSD and attempt a full data recovery. Common causes include motherboard failure, PSU issues, or drive-level faults.',
  },
  {
    q: 'Do you offer desktop data recovery for both HDDs and SSDs?',
    a: 'Absolutely. Whether your desktop has a <strong>traditional hard drive or a solid-state drive</strong>, we have the tools and expertise to recover data from all major desktop storage types.',
  },
  {
    q: 'What if my desktop hard drive is making clicking or grinding noises?',
    a: 'A <strong>clicking desktop hard drive</strong> often indicates a mechanical failure. Do not continue powering it on. We offer <strong>cleanroom-based recovery solutions</strong> to salvage data from physically damaged drives.',
  },
  {
    q: 'Can you recover deleted files from a desktop computer?',
    a: 'Yes, we provide <strong>deleted file recovery from desktop hard drives</strong>, as long as the data hasn&#39;t been overwritten. This includes accidental deletion, formatted partitions, or emptied recycle bins.',
  },
  {
    q: 'Do you offer desktop data recovery for Mac and Windows systems?',
    a: 'Yes. Our services support both <strong>Windows desktop recovery and macOS desktop recovery</strong>, including iMacs, Mac Minis, custom-built PCs, and branded desktops from Dell, HP, Lenovo, and more.',
  },
  {
    q: 'What\'s the turnaround time for desktop data recovery?',
    a: 'Most desktop data recovery cases are completed within <strong>3&#8211;5 business days</strong>. For urgent cases, we offer <strong>Expedited and Expedited Plus</strong> services with priority turnaround options.',
  },
  {
    q: 'Can you recover data from a desktop RAID setup?',
    a: 'Yes, we recover data from <strong>RAID-enabled desktop workstations</strong>, including RAID 0, 1, 5, or custom arrays commonly used in content creation or server-grade towers.',
  },
  {
    q: 'Do you offer pickup or mail-in options for desktop data recovery?',
    a: 'Yes. We provide <strong>free local pickup in the Los Angeles area</strong>. We also offer <strong>nationwide data recovery mail-in service</strong> for desktop drives. Just fill out the form and we&#39;ll provide a prepaid shipping label.',
  },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <HeroSection
      title="Desktop Data Recovery"
      subtitle="Get Your Data Back In No Time."
      description="When your desktop computer stops working or a drive goes missing, it can feel like everything is lost. Important documents, family photos, and business files might seem gone forever. But in many cases, your data can be recovered — even if the system won&#39;t boot or the files were deleted.<br><br>At Five Star Data Recovery, we specialize in fast, safe, and secure desktop data recovery. Whether you&#39;ve experienced accidental deletion, file corruption, or a physically damaged hard drive, our team can help you recover lost data and get back to work quickly."
      bgImage="/desktop-data-recovery-hero.webp"
      :trustBadges="trustBadges"
    />

    <StatsBar />

    <!-- SECTION 1 — Common Reasons -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Common Reasons for Desktop Data Loss</h2>
        <p class="s-body">Many issues can lead to lost files on a desktop computer, including:</p>
        <ul class="content-list">
          <li>Accidental file deletion or emptying the recycle bin</li>
          <li>Corruption of the operating system after a failed update</li>
          <li>Crashes caused by power outages or hardware failure</li>
          <li>Lost partition due to formatting or bad sectors</li>
          <li>Damage to internal or external hard drives</li>
        </ul>
        <p class="s-body">Sometimes, problems arise from user error. Other times, it&#39;s a mechanical or software issue. Whatever the cause, our job is to help recover your files — whether you need a single document or an entire drive&#39;s contents.</p>
      </div>
    </section>

    <!-- SECTION 2 — Desktop Systems We Recover -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Types of Desktop Systems and Drives We Recover</h2>
        <p class="s-body">We work with almost all desktop computer models, including:</p>
        <ul class="content-list">
          <li>Windows PCs (Dell, HP, Lenovo, custom builds)</li>
          <li>macOS desktops (iMac, Mac Pro)</li>
          <li>Linux-based workstations</li>
          <li>Internal HDD and <NuxtLink to="/data-recovery/ssd-data-recovery">SSD</NuxtLink> recovery</li>
          <li>External drives used with desktop computers</li>
        </ul>
        <p class="s-body">We also recover data from USB drives, attached desktop hard drives, and file systems in Windows (NTFS, FAT32), macOS (APFS, HFS+), and Linux (ext3/ext4).</p>
      </div>
    </section>

    <!-- SECTION 3 — Signs -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Signs Your Desktop Needs Data Recovery</h2>
        <p class="s-body">You may need desktop data recovery services if:</p>
        <ul class="content-list">
          <li>The drive is not detected by your system</li>
          <li>The operating system crashes or won&#39;t load</li>
          <li>You hear clicking, buzzing, or grinding noises from the drive</li>
          <li>Files or folders are missing or won&#39;t open</li>
          <li>You accidentally formatted the drive or deleted specific files</li>
          <li>You emptied the recycle bin before realizing important items were inside</li>
        </ul>
        <p class="s-body">Even if your desktop seems completely dead, we may still be able to recover lost data.</p>
      </div>
    </section>

    <!-- SECTION 4 — File Systems -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">How File Systems Affect Recovery</h2>
        <p class="s-body">Your desktop&#39;s data is stored using a file system. File systems determine how files are organized, stored, and accessed. When a drive becomes corrupted or formatted, the file system often breaks down. We recover data from all major file systems:</p>
        <ul class="content-list">
          <li>NTFS and FAT32 (Windows)</li>
          <li>APFS and HFS+ (macOS)</li>
          <li>EXT3/EXT4 (Linux)</li>
        </ul>
        <p class="s-body">Understanding the file system helps us rebuild damaged directories and locate hidden or fragmented files. This is especially important when recovering lost files or specific files from formatted or failing drives.</p>
      </div>
    </section>

    <!-- SECTION 5 — File Types -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Importance of File Types in Recovery</h2>
        <p class="s-body">When scanning your desktop drive, we look for specific file signatures that match known file types. This includes:</p>
        <ul class="content-list">
          <li>Microsoft Office documents (Word, Excel, PowerPoint)</li>
          <li>PDFs, images (JPG, PNG, RAW), and video formats (MOV, MP4, AVI)</li>
          <li>Email files, databases, and ZIP archives</li>
        </ul>
        <p class="s-body">By identifying these patterns, we can recover data even when file names and folder structures are missing. This deep scan method is crucial when recovering file type data from deleted or damaged sectors.</p>
      </div>
    </section>

    <!-- SECTION 6 — Data Safety -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Your Data Is Always Safe with Us</h2>
        <p class="s-body">We understand how important your data is — and how private it can be. Whether you&#39;re recovering personal records, client files, or sensitive research, we handle everything securely and confidentially.</p>
        <ul class="content-list">
          <li>All recoveries are performed in-house</li>
          <li>No third-party labs or data transfers</li>
          <li>Final data is encrypted and stored temporarily until delivery</li>
          <li>Files are deleted from our systems after recovery is complete</li>
        </ul>
      </div>
    </section>

    <!-- SECTION 7 — Recovery Process -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Our Desktop Data Recovery Process</h2>
        <p class="s-body">Our step-by-step process is built for safety and success:</p>
        <div class="process-steps">
          <div class="process-step">
            <div class="step-num">1</div>
            <div>
              <h3 class="step-title">Free Diagnostic Evaluation</h3>
              <p class="step-body">We&#39;ll evaluate your drive or computer to determine the type of failure.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">2</div>
            <div>
              <h3 class="step-title">Disk Imaging</h3>
              <p class="step-body">We make a full image (clone) of the drive to avoid further damage during recovery.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">3</div>
            <div>
              <h3 class="step-title">Recovery Attempt</h3>
              <p class="step-body">Using advanced tools, we scan the image for recoverable file types, lost folders, and deleted items. This includes support for lost partitions and formatted volumes.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">4</div>
            <div>
              <h3 class="step-title">File Review</h3>
              <p class="step-body">We show you a preview list of recovered specific files, so you can confirm what we found.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">5</div>
            <div>
              <h3 class="step-title">Secure Delivery</h3>
              <p class="step-body">Once you approve the recovery, your data is copied to a new drive or USB drive and returned to you.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 8 — Logical vs Physical -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Logical vs. Physical Desktop Recovery</h2>
        <p class="s-body">Not all cases are the same. Some involve software-based issues, while others are caused by hardware damage.</p>
        <div class="recovery-types">
          <div class="recovery-type">
            <h3 class="recovery-type-title">Logical Recovery</h3>
            <ul class="content-list">
              <li>Deleted files or folders</li>
              <li>Recycle bin emptied by mistake</li>
              <li>Lost file systems or partitions</li>
            </ul>
          </div>
          <div class="recovery-type">
            <h3 class="recovery-type-title">Physical Recovery</h3>
            <ul class="content-list">
              <li>Damaged hard drive heads or motor</li>
              <li>Broken or burnt connectors</li>
              <li>Clicking or grinding sounds</li>
            </ul>
          </div>
        </div>
        <p class="s-body">If your drive is physically damaged, we use our cleanroom to repair the disk temporarily and create a safe image. From there, we can attempt full desktop hard drive data recovery.</p>
      </div>
    </section>

    <!-- SECTION 9 — Why Choose -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Why Choose Five Star Data Recovery?</h2>
        <ul class="content-list">
          <li>Experienced engineers with cleanroom facilities</li>
          <li>Flat-rate pricing with no hidden fees</li>
          <li>&ldquo;No Data, No Charge&rdquo; guarantee</li>
          <li>Secure, in-house data recovery only</li>
          <li>Same-day diagnostics and fast turnaround available</li>
        </ul>
        <p class="s-body">We provide expert desktop data recovery with fast turnaround and honest, upfront pricing. You&#39;ll always know the data recovery cost before we begin — no hidden fees, no surprises. Our goal is always the same — to recover lost data quickly and safely.</p>
      </div>
    </section>

    <!-- REVIEWS -->
    <ReviewsSection :reviews="reviews" />

    <!-- SECTION 10 — Nationwide -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">We Offer Nationwide Desktop Recovery</h2>
        <p class="s-body">Located outside of Los Angeles? No problem. We offer free round-trip shipping for all desktop recovery jobs in the U.S. Simply start a case online and we&#39;ll send you a prepaid shipping label to send in your desktop drive. Once we receive your device, diagnostics begin within 24 hours. Whether you&#39;re in California, New York, or Texas — we can help.</p>
      </div>
    </section>

    <!-- QUOTE FORM -->
    <QuoteFormSection
      description="Whether your Windows PC crashed after a power surge or your iMac won&#39;t boot, our engineers recover data from every type of desktop computer — HDD, SSD, RAID, internal or external — with flat-rate pricing and no surprises."
      bullet1="Windows PCs, iMac, Mac Pro, Linux workstations"
      bullet2="HDD, SSD, RAID, internal and external drives"
      bullet3="No Data, No Charge — free diagnostic included"
      closing="Don&#39;t keep powering on the drive — each attempt increases the risk. Fill out the form and let our desktop recovery specialists take it from here."
      bgImage="/desktop-data-recovery-hero.webp"
    />

    <!-- CONTACT BAND -->
    <section class="s-contact-band contact-band-bg">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Start Your Desktop Recovery Today</h2>
        </div>
        <p class="contact-body-text">If you need to recover data from a desktop hard drive or computer, don&#39;t wait. The longer you delay, the more complicated the recovery may become. Contact Five Star Data Recovery today for a free diagnostic.</p>
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
.recovery-types { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin-bottom: 20px; }
.recovery-type { background: #fff; border: 1px solid #e2e6ee; border-radius: 10px; padding: 24px; }
.recovery-type-title { font-size: 1rem; font-weight: 800; color: #1a1a2e; margin-bottom: 12px; }
.process-steps { display: flex; flex-direction: column; }
.process-step { display: flex; align-items: flex-start; gap: 24px; padding: 28px 0; border-bottom: 1px solid #e2e6ee; }
.process-step:last-child { border-bottom: none; }
.step-num { width: 48px; height: 48px; background: #1a1a2e; color: #C9A84C; font-size: 1.2rem; font-weight: 900; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.step-title { font-size: 1rem; font-weight: 800; color: #1a1a2e; margin-bottom: 8px; }
.step-body { font-size: 0.93rem; color: #4a5568; line-height: 1.7; margin: 0; }
.s-contact-band { background: #0f1623; padding: 44px 0; border-top: 3px solid #C9A84C; border-bottom: 3px solid #C9A84C; }
.contact-band-bg { background: linear-gradient(to right, rgba(15,22,35,0.92) 0%, rgba(15,22,35,0.75) 60%, rgba(15,22,35,0.5) 100%), url('/desktop-data-recovery-hero.webp') center center / cover no-repeat !important; }
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
@media (max-width: 768px) { .recovery-types { grid-template-columns: 1fr; } }
</style>
