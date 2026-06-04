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
                "author": { "@type": "Person", "name": "Gina L." },
                "datePublished": "2024-11-26",
                "reviewBody": "I thought my deleted work files were gone forever, but they recovered them quickly. Definitely recommend!",
                "name": "Saved Deleted Files",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
              }
            ],
            "priceRange": "$200 flat rate"
          },
          {
            "@type": "Service",
            "name": "Deleted File Recovery",
            "url": "https://www.fivestardatarecovery.com/data-recovery/deleted-file-recovery/",
            "areaServed": [{ "@type": "Country", "name": "United States" }],
            "description": "Professional deleted file recovery services by Five Star Data Recovery. We recover accidentally deleted files from hard drives, SSDs, USB flash drives, and external storage devices. Serving Glendale, Los Angeles, and nationwide via mail-in."
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fivestardatarecovery.com/" },
              { "@type": "ListItem", "position": 2, "name": "Data Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/" },
              { "@type": "ListItem", "position": 3, "name": "Deleted File Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/deleted-file-recovery/" }
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Can you recover files that I accidentally deleted?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our deleted file recovery service is designed specifically to recover data that was accidentally deleted—whether from a hard drive, SSD, external drive, or USB. Acting quickly gives you the best chance of recovery before files are overwritten." } },
              { "@type": "Question", "name": "How long does deleted file recovery take?", "acceptedAnswer": { "@type": "Answer", "text": "Typical deleted file recovery cases take 1–3 business days. For critical situations, our Expedited Plus service provides 24/7, around-the-clock processing until your case is complete." } },
              { "@type": "Question", "name": "How much does deleted file recovery cost and what does it include?", "acceptedAnswer": { "@type": "Answer", "text": "Our flat rate for deleted file recovery is $200, which covers the full scan, file analysis, and recovery process for all supported device types. This fee is non-refundable and is collected upfront when your case is checked in." } },
              { "@type": "Question", "name": "Is there an upfront fee for deleted file recovery?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, the $200 flat rate is due at the time of drop-off or mailing in your device. This covers all labor involved in the deep scanning and recovery of your deleted files." } },
              { "@type": "Question", "name": "Can you recover deleted files from external hard drives, USB flash drives, and SSDs?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We recover deleted files from a wide range of devices including external hard drives, USB flash drives, SSDs, and SD cards. Each storage device type requires different tools, and we're fully equipped for all scenarios." } },
              { "@type": "Question", "name": "Can you recover data from a formatted drive?", "acceptedAnswer": { "@type": "Answer", "text": "Often, yes. If your drive was accidentally formatted and new data hasn't heavily overwritten it, we can perform a forensic scan to locate and recover previously deleted files." } },
              { "@type": "Question", "name": "Why isn't deleted file recovery covered by your No Data, No Charge policy?", "acceptedAnswer": { "@type": "Answer", "text": "Deleted file recovery requires a deep forensic scan with no guaranteed results. Since the chance of success depends on overwrite levels and drive condition, the $200 fee remains non-refundable even if the data is unrecoverable." } },
              { "@type": "Question", "name": "Can I see a file list before committing to full recovery?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. After we complete the deleted file recovery process, we'll provide you with a detailed file list showing all recoverable files. If the recovery is less than 99% successful, you'll have the option to decline the recovery and owe nothing further—other than the $200 labor fee already paid. This way, you stay fully informed and in control before making any final decision." } },
              { "@type": "Question", "name": "What's the difference between Expedited and Expedited Plus service for deleted file recovery?", "acceptedAnswer": { "@type": "Answer", "text": "Expedited Service prioritizes your job during business hours, while Expedited Plus gives you 24/7 nonstop engineer attention until the recovery is complete—even on weekends and holidays." } },
              { "@type": "Question", "name": "How can I increase my chances of recovering deleted files?", "acceptedAnswer": { "@type": "Answer", "text": "Stop using the affected drive immediately. Continued use can overwrite deleted sectors and make recovery impossible. Power down the device and bring it to Five Star Data Recovery as soon as possible." } }
            ]
          }
        ]
      })
    }
  ]
})

useSeoMeta({
  title: 'Deleted File Recovery - Five Star Data Recovery',
  ogTitle: 'Deleted File Recovery - Five Star Data Recovery',
  description: 'Accidentally deleted important files? Five Star Data Recovery recovers deleted files from hard drives, SSDs, USB drives, and SD cards. $200 flat rate. Free nationwide shipping.',
  ogDescription: 'Accidentally deleted important files? Five Star Data Recovery recovers deleted files from hard drives, SSDs, USB drives, and SD cards. $200 flat rate. Free nationwide shipping.',
})

const trustBadges = [
  { icon: 'clock', text: 'Available 24/7/365' },
  { icon: 'check', text: 'No Data = No Charge' },
  { icon: 'shield', text: '10+ Years in Business' },
  { icon: 'star', text: 'Free Nationwide Shipping' },
]

const reviews = [
  {
    text: "I accidentally deleted an entire folder of client projects from my external hard drive. I contacted Five Star Data Recovery, and Elen was incredibly helpful in walking me through the process. They were able to recover all the files I needed within just a couple of days. The flat-rate pricing made it simple, and there were no surprises.",
    name: 'Michelle D.',
    location: 'Pasadena, CA',
  },
  {
    text: "I thought I had permanently lost over a year's worth of photos after formatting my USB drive by mistake. Five Star Data Recovery recovered over 95% of my deleted files, including every single photo I cared about. Alex handled my case and kept me updated every step of the way. I'm extremely grateful for their expertise.",
    name: 'Tom R.',
    location: 'Denver, CO',
  },
  {
    text: "I deleted some important Excel spreadsheets from my laptop and emptied the recycle bin before realizing the mistake. Five Star Data Recovery was able to get everything back. Their service was fast, and they explained the entire deleted file recovery process in detail. Highly recommended!",
    name: 'Sofia L.',
    location: 'Glendale, CA',
  },
]

const faqs = [
  {
    q: 'Can you recover files that I accidentally deleted?',
    a: 'Yes. Our deleted file recovery service is designed specifically to recover data that was accidentally deleted—whether from a hard drive, SSD, external drive, or USB. Acting quickly gives you the best chance of recovery before files are overwritten.',
  },
  {
    q: 'How long does deleted file recovery take?',
    a: 'Typical deleted file recovery cases take 1–3 business days. For critical situations, our Expedited Plus service provides 24/7, around-the-clock processing until your case is complete.',
  },
  {
    q: 'How much does deleted file recovery cost and what does it include?',
    a: 'Our flat rate for deleted file recovery is $200, which covers the full scan, file analysis, and recovery process for all supported device types. This fee is non-refundable and is collected upfront when your case is checked in.',
  },
  {
    q: 'Is there an upfront fee for deleted file recovery?',
    a: 'Yes, the $200 flat rate is due at the time of drop-off or mailing in your device. This covers all labor involved in the deep scanning and recovery of your deleted files.',
  },
  {
    q: 'Can you recover deleted files from external hard drives, USB flash drives, and SSDs?',
    a: "Yes. We recover deleted files from a wide range of devices including external hard drives, USB flash drives, SSDs, and SD cards. Each storage device type requires different tools, and we're fully equipped for all scenarios.",
  },
  {
    q: 'Can you recover data from a formatted drive?',
    a: "Often, yes. If your drive was accidentally formatted and new data hasn't heavily overwritten it, we can perform a forensic scan to locate and recover previously deleted files.",
  },
  {
    q: "Why isn't deleted file recovery covered by your No Data, No Charge policy?",
    a: 'Deleted file recovery requires a deep forensic scan with no guaranteed results. Since the chance of success depends on overwrite levels and drive condition, the $200 fee remains non-refundable even if the data is unrecoverable.',
  },
  {
    q: 'Can I see a file list before committing to full recovery?',
    a: "Yes. After we complete the deleted file recovery process, we'll provide you with a detailed file list showing all recoverable files. If the recovery is less than 99% successful, you'll have the option to decline the recovery and owe nothing further—other than the $200 labor fee already paid. This way, you stay fully informed and in control before making any final decision.",
  },
  {
    q: "What's the difference between Expedited and Expedited Plus service for deleted file recovery?",
    a: "Expedited Service prioritizes your job during business hours, while Expedited Plus gives you 24/7 nonstop engineer attention until the recovery is complete—even on weekends and holidays.",
  },
  {
    q: 'How can I increase my chances of recovering deleted files?',
    a: 'Stop using the affected drive immediately. Continued use can overwrite deleted sectors and make recovery impossible. Power down the device and bring it to Five Star Data Recovery as soon as possible.',
  },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <HeroSection
      title="Deleted File Recovery"
      subtitle="Get Your Data Back In No Time."
      description="Accidentally deleted an important document, video, or entire folder? You're not alone. Every day, users lose valuable data because of accidental deletion, formatting errors, or corrupt storage devices. At Five Star Data Recovery, we help people and businesses recover deleted files. We do this quickly, safely, and professionally. If you've lost a video project, important photos, or key work files, we can help. We have the skills and tools to recover deleted files from many devices."
      bgImage="/deleted-file-recovery-hero.webp"
      :trustBadges="trustBadges"
    />

    <StatsBar />

    <!-- SECTION 1 — Devices -->
    <section class="s-white">
      <div class="container">
        <div class="two-col-layout">
          <div>
            <h2 class="s-heading">Devices We Offer Deleted File Recovery From</h2>
            <p class="s-body">We offer professional deleted file recovery from nearly all types of local storage devices, including:</p>
            <ul class="content-list">
              <li>External and internal hard drives (HDD/SSD)</li>
              <li>USB flash drives</li>
              <li>SD cards (including microSD)</li>
              <li>CompactFlash cards</li>
              <li>RAID arrays</li>
              <li>NAS devices</li>
              <li>Desktop and laptop computers</li>
            </ul>
            <p class="s-body"><strong>Please Note:</strong> We do not offer deleted file recovery services for smartphones (iPhones or Androids). Smartphones use encrypted NAND flash storage with TRIM enabled. This means that deleted data is usually unrecoverable right away.</p>
          </div>
          <div class="section-img-wrap">
            <NuxtImg src="/deleted-file-recovery-devices.webp" alt="Storage devices for deleted file recovery — HDD, SSD, external drive" class="section-img" width="1600" height="900" loading="lazy" format="webp" sizes="xs:100vw sm:100vw md:100vw lg:50vw xl:50vw" />
          </div>
        </div>
        <p class="s-body" style="margin-top:32px;">Each type of device stores data differently. For example:</p>
        <ul class="content-list">
          <li>Traditional hard drives (HDDs) may retain deleted file data in unallocated space until it is overwritten.</li>
          <li>Solid state drives (SSDs) typically have TRIM enabled, which tells the device to erase deleted blocks instantly, reducing recovery chances.</li>
          <li>SD cards and USB flash drives store data linearly, but when formatted or overwritten, metadata that maps the file system is often erased, complicating recovery.</li>
        </ul>
        <p class="s-body">Understanding these technical differences is crucial to developing the right recovery process.</p>
      </div>
    </section>

    <!-- SECTION 2 — Process -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Our Deleted File Recovery Process</h2>
        <p class="s-body">We approach deleted file recovery with forensic-level precision to ensure we don't further damage the data or lose potential recovery chances. Our process includes:</p>
        <div class="process-steps">
          <div class="process-step">
            <div class="step-num">1</div>
            <div>
              <h3 class="step-title">Forensic Clone of the Device</h3>
              <p class="step-body">We begin by creating a 1-to-1 sector-level image of your device using specialized hardware. This ensures we never work directly on the original device, preserving its current state.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">2</div>
            <div>
              <h3 class="step-title">Deep Scan of the Clone</h3>
              <p class="step-body">Once the clone is created, we scan it thoroughly using commercial-grade recovery tools. We search for unallocated space, file tables, and fragments. This helps us locate traces of deleted files, even if someone partially overwrote them.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">3</div>
            <div>
              <h3 class="step-title">Attempt to Recover Lost Files</h3>
              <p class="step-body">We extract as many deleted files as possible. This can include documents, photos, videos, email databases, and other file types.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">4</div>
            <div>
              <h3 class="step-title">File Repair (If Needed)</h3>
              <p class="step-body">If files—especially videos—are corrupted or partially damaged, we attempt to rebuild them. This includes header repair, data stitching, and restoring file structures when possible.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3 — DIY Warning -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Why DIY Tools Can Make Things Worse</h2>
        <p class="s-body">Many people try to recover lost data using free or low-cost software. Unfortunately, these tools often scan the drive directly and can overwrite deleted data during installation or operation.</p>
        <p class="s-body">If your device has TRIM enabled, which most modern SSDs and Macs do, the system may erase deleted files quickly. This happens at the system level before any tool can recover them. TRIM is a background process. It cleans up deleted data blocks to improve efficiency. However, it makes data recovery much harder.</p>
        <p class="s-body">Also, failed recovery attempts may corrupt the file system or destroy file fragments. If your data is valuable, we strongly recommend contacting us before attempting DIY recovery.</p>
      </div>
    </section>

    <!-- SECTION 4 — Pricing -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Pricing: $200 Upfront, Pay the Rest Only If Successful</h2>
        <p class="s-body">Deleted file recovery requires advanced tools, time, and expertise. Because of the complexity, we charge a non-refundable fee of $200.00 for all deleted file recovery cases.</p>
        <p class="s-body">If we successfully recover your files and you are satisfied with the results, you pay the remaining balance at that time. If we are unable to recover the files you need, there is no additional charge beyond the $200 diagnostic fee.</p>
        <p class="s-body">This model ensures transparency, fairness, and trust. Our deleted file recovery process is secure and efficient, and you'll always know the exact cost of recovery before we begin.</p>
      </div>
    </section>

    <!-- SECTION 5 — Nationwide -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Nationwide Service with Free Round-Trip Shipping</h2>
        <p class="s-body">Located in Los Angeles, we proudly serve customers across the United States. Our deleted file recovery services are available nationwide with free round-trip shipping. We'll email you a prepaid shipping label and packing instructions. Once we get your device, we start the recovery process. We will return your recovered files on an external drive (which you can provide or purchase from us) when we finish.</p>
      </div>
    </section>

    <!-- SECTION 6 — Why Choose Five Star -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Why Choose Five Star for Deleted File Recovery?</h2>
        <p class="s-body">With so many options online, here's why customers consistently choose Five Star Data Recovery:</p>
        <ul class="content-list">
          <li>We never work on your original device—only forensic clones</li>
          <li>High success rates, even on formatted SD cards and USB flash drives</li>
          <li>Experience recovering video files, RAW photos, Final Cut projects, and more</li>
          <li>Certified cleanroom and advanced data repair tools</li>
          <li>Transparent pricing and satisfaction-based billing</li>
          <li>Secure, in-house recovery—no outsourcing</li>
          <li>Free nationwide shipping</li>
        </ul>
        <p class="s-body">We treat every recovery as if it's our data on the line.</p>
      </div>
    </section>

    <!-- SECTION 7 — What files from formatted drives -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">What types of files can you recover from formatted drives?</h2>
        <p class="s-body">When someone formats a drive—whether accidentally or during troubleshooting—data doesn't immediately disappear. Instead, the file system is reset, and the space is marked as available for new data. This gives us a window of opportunity to recover the files before they're overwritten.</p>
        <p class="s-body">We commonly recover file types such as:</p>
        <ul class="content-list">
          <li>Photos (JPG, PNG, RAW, HEIC)</li>
          <li>Videos (MOV, MP4, AVI, MXF, ProRes)</li>
          <li>Documents (DOCX, PDF, XLSX, TXT)</li>
          <li>Project files (Final Cut Pro, Adobe Premiere, Photoshop, DaVinci Resolve)</li>
          <li>Audio files (WAV, MP3, AIFF)</li>
          <li>Databases and system logs</li>
        </ul>
        <p class="s-body">Whether we can restore your files with full file names and folder structure depends largely on the original file system:</p>
        <ul class="content-list">
          <li><strong>exFAT and FAT32</strong> – Frequently used on SD cards and flash drives. These systems are more likely to lose directory information, which may limit structured recovery.</li>
          <li><strong>NTFS (Windows)</strong> – Offers better metadata retention, giving us a higher chance of recovering files with names and folders intact.</li>
          <li><strong>APFS/HFS+ (Mac)</strong> – Can be tricky due to frequent metadata flushing, but structured recovery is possible in some cases if the device hasn't been used post-format.</li>
        </ul>
        <p class="s-body">When metadata is lost, we do a RAW recovery. This process extracts data by file type, without using original names or folders. While less organized, it still allows access to the actual content.</p>
      </div>
    </section>

    <!-- SECTION 8 — Expedited -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Expedited Deleted File Recovery Services</h2>
        <p class="s-body">If you have a tight deadline or need your data back quickly, we have two fast recovery service options:</p>
        <ul class="content-list">
          <li><strong>Expedited Service</strong> – For an additional $200 per device, your case will be prioritized during business hours. We place it at the top of our recovery queue to ensure the fastest possible turnaround.</li>
          <li><strong>Expedited Plus Service</strong> – For an additional $500 per device, your case becomes our highest priority. Our engineers will work on your recovery 24/7—nights, weekends, and holidays—until the job is complete.</li>
        </ul>
        <p class="s-body"><strong>Please Note:</strong> Both expedited options are in addition to standard data recovery fees. These fees are non-refundable, regardless of the outcome. Expedited service is ideal for time-sensitive recoveries where every hour matters.</p>
        <p class="s-body">If you're unsure whether your device can be saved, don't throw it away. We may be able to recover more than you think.</p>
      </div>
    </section>

    <!-- REVIEWS -->
    <ReviewsSection :reviews="reviews" />

    <!-- SECTION 9 — How to Improve Chances -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">How to Improve Your Chances of Successful Recovery</h2>
        <p class="s-body">If you've just deleted files or formatted a drive, stop using the device immediately. Every new file you save—or action you take—can overwrite the lost data. Here are a few things you can do to help increase your chances of successful recovery:</p>
        <ul class="content-list">
          <li>Do not save new files to the drive</li>
          <li>Do not run software that writes to the disk</li>
          <li>Do not attempt to reinstall or update your operating system</li>
        </ul>
        <p class="s-body">The less you use the device after deleting files, the better the chance we can fully recover them. This includes keeping their original folder structure. If you're unsure what to do, just contact us—we'll guide you through the next steps.</p>
      </div>
    </section>

    <!-- QUOTE FORM -->
    <QuoteFormSection
      description="When deleted files seem gone forever, our forensic engineers dig deeper. We perform sector-level scans to locate and reconstruct files before they're permanently overwritten."
      bullet1="Flat $200 rate — paid upfront, no surprises"
      bullet2="File list review before final delivery"
      bullet3="No Data, No Fee (beyond the $200 forensic fee)"
      closing="Don't install new software or save files to the affected drive. Every second counts. Fill out the form and let us evaluate your case for free."
      bgImage="/deleted-file-recovery-hero.webp"
    />

    <!-- CONTACT BAND -->
    <section class="s-contact-band contact-band-bg">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Recover Your Deleted Files Today</h2>
        </div>
        <p class="contact-body-text">Stop using the device immediately — every second counts. Contact Five Star Data Recovery now for a free consultation and let our engineers get to work.</p>
        <ul class="contact-bullets">
          <li>$200 flat rate — paid upfront, no surprises</li>
          <li>Free nationwide shipping both ways</li>
          <li>1–3 business day turnaround</li>
          <li>File list review before final delivery</li>
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
.two-col-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
.section-img-wrap { border-radius: 12px; overflow: hidden; }
.section-img { width: 100%; height: auto; display: block; border-radius: 12px; object-fit: cover; }
.process-steps { display: flex; flex-direction: column; }
.process-step { display: flex; align-items: flex-start; gap: 24px; padding: 28px 0; border-bottom: 1px solid #e2e6ee; }
.process-step:last-child { border-bottom: none; }
.step-num { width: 48px; height: 48px; background: #1a1a2e; color: #C9A84C; font-size: 1.2rem; font-weight: 900; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.step-title { font-size: 1rem; font-weight: 800; color: #1a1a2e; margin-bottom: 8px; }
.step-body { font-size: 0.93rem; color: #4a5568; line-height: 1.7; margin: 0; }
.s-contact-band { background: #0f1623; padding: 44px 0; border-top: 3px solid #C9A84C; border-bottom: 3px solid #C9A84C; }
.contact-band-bg { background: linear-gradient(to right, rgba(15,22,35,0.92) 0%, rgba(15,22,35,0.75) 60%, rgba(15,22,35,0.5) 100%), url('/deleted-file-recovery-devices.webp') center center / cover no-repeat !important; }
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
