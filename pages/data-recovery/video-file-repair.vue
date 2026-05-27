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
                "author": { "@type": "Person", "name": "Emily S." },
                "datePublished": "2024-11-20",
                "reviewBody": "I thought I had lost all the footage from my sister's wedding after the memory card got corrupted. Five Star Data Recovery not only recovered the files, but they repaired the video so it actually played without glitches. Total lifesavers!",
                "name": "Video File Repair Success",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
              }
            ],
            "priceRange": "$300 - $950"
          },
          {
            "@type": "Service",
            "name": "Video File Repair Services",
            "url": "https://www.fivestardatarecovery.com/data-recovery/video-file-repair/",
            "areaServed": [{ "@type": "Country", "name": "United States" }],
            "description": "Professional video file repair for corrupted, damaged, and unplayable video footage. Supports MP4, MOV, MXF, R3D, BRAW, ProRes, ARRI, RED, and more. Flat-rate pricing, No Data No Charge. Serving Glendale, Los Angeles, and nationwide."
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fivestardatarecovery.com/" },
              { "@type": "ListItem", "position": 2, "name": "Data Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/" },
              { "@type": "ListItem", "position": 3, "name": "Video File Repair", "item": "https://www.fivestardatarecovery.com/data-recovery/video-file-repair/" }
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "What causes video files to become damaged or corrupted?", "acceptedAnswer": { "@type": "Answer", "text": "Video files can be damaged due to sudden power loss, system crashes, incomplete transfers, storage failure, or issues with the recording device. File header corruption, missing metadata, and interrupted write processes are all common culprits." } },
              { "@type": "Question", "name": "What should I do if my video files are corrupted?", "acceptedAnswer": { "@type": "Answer", "text": "The most important first step is to avoid working directly on the original device. Instead, perform a sector-level clone of the entire storage device where the damaged video files were stored. Once the cloning is complete, all repair or recovery attempts should be done on the cloned copy—not the original." } },
              { "@type": "Question", "name": "Can my video files still be repaired if I've already used First Aid or CHKDSK?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, in many cases we can still repair your video files even after First Aid or CHKDSK has been run. However, the outcome depends on what those utilities did to the file system. CHKDSK is more aggressive and can overwrite key file structures. If you've already run either tool, stop all further attempts and bring the drive to us for an evaluation." } },
              { "@type": "Question", "name": "Can you recover and repair videos from a RAID or NAS system?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We first safely image each drive in the array, perform a virtual RAID reconstruction, scan the entire array at sector level, then repair the damaged video files using specialized tools. We support RAID 0, 5, 6, 10, and custom NAS setups." } },
              { "@type": "Question", "name": "Can you repair professional camera video files like ARRI or RED footage?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We frequently repair high-bitrate professional footage from ARRI, RED, Canon C-series, Sony FS, and Blackmagic cameras. These formats often contain complex metadata that must be reconstructed accurately for successful playback." } },
              { "@type": "Question", "name": "What types of video files can you repair?", "acceptedAnswer": { "@type": "Answer", "text": "We repair .mov, .mp4, .mxf, .avi, .mts, .m2ts, .r3d, and .braw, as well as professional video formats from ARRI, RED, Sony, Canon, and Blackmagic cameras." } },
              { "@type": "Question", "name": "Can you recover deleted video files and repair them?", "acceptedAnswer": { "@type": "Answer", "text": "In some cases, yes. If the deleted video files are still intact on the drive and have not been overwritten, we may be able to recover them. However, deleted file recovery is not covered under our No Data, No Charge policy. Stop using the device immediately and contact us before attempting any DIY recovery." } }
            ]
          }
        ]
      })
    }
  ]
})

useSeoMeta({
  title: 'Video File Repair Service - Corrupted & Damaged Video Repair',
  ogTitle: 'Video File Repair Service - Corrupted & Damaged Video Repair',
  description: 'Struggling with broken or unplayable video files? Our expert Video File Repair service restores corrupted footage from any device.',
  ogDescription: 'Struggling with broken or unplayable video files? Our expert Video File Repair service restores corrupted footage from any device.',
})

const trustBadges = [
  { icon: 'clock', text: 'Available 24/7/365' },
  { icon: 'check', text: 'No Data = No Charge' },
  { icon: 'shield', text: '10+ Years in Business' },
  { icon: 'star', text: 'Free Nationwide Shipping' },
]

const reviews = [
  {
    text: "I thought I had lost all the footage from my sister's wedding after the memory card got corrupted. Five Star Data Recovery not only recovered the files, but they repaired the video so it actually played without glitches. Total lifesavers!",
    name: 'Emily S.',
    location: 'Los Angeles, CA',
  },
  {
    text: "We needed to repair several security camera files that wouldn't open after a power outage. These guys knew exactly what to do. The turnaround time was fast and they kept everything private—very professional.",
    name: 'Raj P.',
    location: 'San Jose, CA',
  },
  {
    text: "We had several .mxf video files from a Canon C300 that got corrupted after a drive failure during a commercial shoot. I was worried the entire project was lost. Five Star Data Recovery was able to repair every file, and the footage came back clean and usable. Highly recommended for anyone in the film or production world.",
    name: 'Daniel K.',
    location: 'Austin, TX',
  },
]

const faqs = [
  {
    q: 'What causes video files to become damaged or corrupted?',
    a: 'Video files can be damaged due to <strong>sudden power loss, system crashes, incomplete transfers, storage failure</strong>, or issues with the recording device. File header corruption, missing metadata, and interrupted write processes are all common culprits.',
  },
  {
    q: 'What should I do if my video files are corrupted?',
    a: 'The most important first step is to <strong>avoid working directly on the original device</strong>. Instead, perform a <strong>sector-level clone</strong> of the entire storage device where the damaged video files were stored. This creates an exact bit-by-bit copy, preserving the original data. Once cloning is complete, all repair or recovery attempts should be done on the cloned copy—not the original. <strong>Clone first. Only work from the clone. Preserve the original device as-is.</strong>',
  },
  {
    q: "Can my video files still be repaired if I've already used First Aid (Mac) or CHKDSK (Windows)?",
    a: 'Yes, in many cases we can still repair your video files even after First Aid or CHKDSK has been run. However, <strong>CHKDSK is more aggressive</strong> — it can sometimes relocate, truncate, or zero out sectors, potentially overwriting key video data. If you\'ve already run either tool, <strong>stop all further attempts</strong> and bring the drive to us for an evaluation as soon as possible.',
  },
  {
    q: 'Can you recover and repair videos from a RAID or NAS system?',
    a: 'Yes. We first safely <strong>image (clone) each individual drive</strong> in the array, then perform a <strong>virtual RAID reconstruction</strong>, scan the entire array at sector level for fragmented video files, and then proceed with the actual video file repair. Whether you\'re dealing with <strong>RAID 0, 5, 6, 10</strong>, or a custom NAS setup, our engineers are equipped to handle the complexities involved.',
  },
  {
    q: 'Video files on my RAID are starting to show 0MB capacity — what\'s going on?',
    a: 'This is usually a sign of <strong>file system corruption, metadata damage, or RAID integrity issues</strong>. The actual video data may still exist, but the system can no longer locate or interpret the file correctly. <strong>Do not run CHKDSK, disk repair tools, or file recovery software</strong> that writes to the array. Contact us immediately — early action gives you the best chance of saving your footage.',
  },
  {
    q: 'Can you repair professional camera video files like ARRI or RED footage?',
    a: 'Absolutely. We frequently repair high-bitrate professional footage from <strong>ARRI, RED, Canon C-series, Sony FS, and Blackmagic</strong> cameras. These formats contain complex metadata that must be reconstructed accurately for successful playback.',
  },
  {
    q: 'What types of video files can you repair?',
    a: 'We repair a wide variety of formats including <strong>.mov, .mp4, .mxf, .avi, .mts, .m2ts, .r3d, and .braw</strong>, as well as professional video formats from ARRI, RED, Sony, Canon, and Blackmagic cameras.',
  },
  {
    q: 'Do you offer repair services for partially recovered or fragmented video files?',
    a: 'Yes. We specialize in repairing <strong>fragmented, incomplete, or partially recovered video files</strong> — especially those extracted during data recovery. However, for the best results, we strongly prefer to work with the <strong>original storage device</strong> rather than just the damaged file. Having access to the original media gives us the highest likelihood of a successful reconstruction.',
  },
  {
    q: 'Can you recover deleted video files and repair them?',
    a: 'In some cases, yes — if the deleted files are still intact and have not been overwritten. However, this is <strong>not covered under our No Data, No Charge policy</strong>. If TRIM is active (common on SSDs and modern systems), deleted sectors may be wiped instantly. Stop using the device immediately and contact us before attempting any DIY recovery.',
  },
  {
    q: 'Can you combine multiple file fragments into a single working video?',
    a: 'Yes. If your footage was split into multiple segments due to corruption or incomplete recording, we can often <strong>reconstruct the original video by stitching the fragments back together</strong>. This is especially common with professional codecs like <strong>ProRes, MXF, RED, and ARRI</strong>, which rely on internal structures like GOP sequences, metadata tables, and codec-specific headers that must be carefully reassembled. Our repair process includes deep analysis of each segment&#39;s frame structure and timing, allowing us to manually re-link sequences and generate a functional video file.',
  },
  {
    q: 'How long does video file repair usually take?',
    a: 'Video file repair timelines vary based on <strong>file size, codec complexity, and the extent of corruption</strong>. For smaller drives up to 2TB, repairs are often completed within <strong>3 to 5 business days</strong>. Larger systems such as multi-drive RAID arrays require considerably more time due to cloning, RAID rebuilding, and deep file analysis. If you&#39;re on a tight production schedule, our <strong>Expedited Plus</strong> service gives your case top priority, runs 24/7/365, and assigns a dedicated engineer to your project.',
  },
  {
    q: 'How much does video file repair cost?',
    a: 'Video file repair pricing varies depending on the <strong>number of files, their length, codec type, and severity of corruption</strong>. Our quoting process: We begin by repairing one sample file, use that to estimate the full effort, then provide a detailed quote. If you approve, you pay a <strong>refundable deposit</strong> and the <strong>full balance is only due after successful repair</strong>.<br><br>The only exceptions where an upfront non-refundable fee applies: (1) <strong>Deleted file recovery</strong> required before repair, and (2) <strong>Expedited Plus Service</strong>. Outside of these, you won&#39;t pay anything unless we successfully repair your files.',
  },
  {
    q: 'Do you charge a fee if the video files cannot be repaired?',
    a: '<strong>No</strong> — we do not charge anything for video file repair unless we&#39;re successful. Our evaluation is completely free. If the files are beyond repair, you owe nothing for the repair portion. Upfront fees only apply for: (1) deleted file recovery before repair, and (2) Expedited Plus service. <strong>You will never pay unless we repair your video files.</strong>',
  },
  {
    q: 'Will I be able to preview the repaired video files before final delivery?',
    a: '<strong>Yes, absolutely.</strong> Once we&#39;ve completed the repair process, you&#39;ll have the opportunity to review the repaired video files before finalizing your case — either <strong>in person at our office or remotely</strong>, whichever is more convenient. You&#39;re welcome to test the files and ensure everything meets your expectations before completing payment or delivery arrangements.',
  },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <HeroSection
      title="Video File Repair"
      subtitle="Fix Corrupted & Damaged Video Files"
      description="At Five Star Data Recovery, we specialize in <strong>video file repair</strong> for customers facing the nightmare of corrupted, damaged, or unplayable video footage.<br><br>Whether you're a video production company, content creator, or an individual with precious memories on a damaged file, our team has the tools, expertise, and industry-leading technology to <strong>repair damaged video files</strong> and help restore what seemed lost."
      bgImage="/video-file-repair-hero.webp"
      :trustBadges="trustBadges"
    />

    <StatsBar />

    <!-- SECTION 1 — Why Files Get Corrupted + Formats -->
    <section class="s-white">
      <div class="container">
        <div class="two-col-layout">
          <div>
            <h2 class="s-heading">Why Do Video Files Get Corrupted?</h2>
            <p class="s-body">Video files can become damaged or corrupted for many reasons, including:</p>
            <ul class="content-list">
              <li>Power failures during recording or file transfer</li>
              <li>Camera or device crashes</li>
              <li>Improper ejection of external drives or SD cards</li>
              <li>File system corruption on the storage device</li>
              <li>Bad sectors or read errors on hard drives, SSDs, and external RAID systems</li>
              <li>Incomplete file saving due to interrupted recording sessions</li>
            </ul>
          </div>
          <div class="section-img-wrap">
            <img src="/video-file-repair-service.webp" alt="Video file repair service — corrupted footage recovery" class="section-img" />
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2 — Formats & Cameras -->
    <section class="s-grey">
      <div class="container">
        <div class="formats-grid">
          <div>
            <h2 class="s-heading">Common Video Formats We Repair</h2>
            <ul class="content-list">
              <li>.MP4</li>
              <li>.MOV</li>
              <li>.MXF</li>
              <li>.AVI</li>
              <li>.MTS / .M2TS</li>
              <li>.R3D (RED RAW)</li>
              <li>.BRAW (Blackmagic RAW)</li>
              <li>.ProRes</li>
              <li>.DNxHD / DNxHR</li>
              <li>.XAVC-S / XAVC-I</li>
            </ul>
          </div>
          <div>
            <h2 class="s-heading">Professional Camera Files We Work With</h2>
            <ul class="content-list">
              <li>ARRI ALEXA Series</li>
              <li>RED DSMC2 / KOMODO / V-RAPTOR</li>
              <li>Blackmagic URSA Mini Pro / Pocket Cinema 6K/12K</li>
              <li>Canon EOS C-Series (C200, C300, C500)</li>
              <li>Sony FS5, FS7, FX3, FX6, FX9, Venice</li>
              <li>Panasonic GH5 / EVA1 / Varicam</li>
              <li>DJI Drones</li>
              <li>GoPro Hero Series and more</li>
            </ul>
          </div>
          <div>
            <h2 class="s-heading">Video Codecs we Specialize in Repairing</h2>
            <ul class="content-list">
              <li>ARRIRAW, ProRes 4444 XQ</li>
              <li>REDCODE RAW (R3D)</li>
              <li>Blackmagic RAW (BRAW), ProRes</li>
              <li>Canon XF-AVC, Cinema RAW Light</li>
              <li>XAVC-I, XAVC-L, RAW via SDI</li>
              <li>AVC-Intra, ProRes RAW</li>
              <li>XDCAM DNxHD / DNxHR</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3 — Recovery Process -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Our Proven Video File Repair Process</h2>
        <p class="s-body">When you need video file repair, it's not just about fixing a single file—you're trusting us with your entire storage device to ensure the highest chance of success.</p>
        <div class="process-steps">
          <div class="process-step">
            <div class="step-num">1</div>
            <div>
              <h3 class="step-title">Full Drive Imaging and Cloning</h3>
              <p class="step-body">Before attempting any repair, we require the entire storage device (not just individual files). This is critical for preserving data integrity and preventing further corruption. Our first step is to create a sector-by-sector image (clone) of your drive, SD card, RAID array, or storage media. We never work directly on your original drive—this ensures your source data remains untouched and safe throughout the entire recovery and repair process.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">2</div>
            <div>
              <h3 class="step-title">Deep Scan for Damaged and Fragmented Files</h3>
              <p class="step-body">Our engineers run specialized data scans across the entire clone to locate not just obvious files, but also hidden, lost, or fragmented video file segments. This step is especially critical for drives showing 0 KB files or corrupt folder structures.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">3</div>
            <div>
              <h3 class="step-title">File Structure Analysis</h3>
              <p class="step-body">We perform a deep internal analysis of each file's structure — inspecting and rebuilding file headers and footers, video frame indexes, metadata tables, codec information, and missing moov atoms or corrupted containers. We use proprietary software and manual hex-level editing to fix corruption at the binary level.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">4</div>
            <div>
              <h3 class="step-title">Video File Integrity Repair</h3>
              <p class="step-body">We carefully rebuild and repair each video file while preserving original resolution, bitrate, frame rate, and codec specifications. Whether it's a .MP4, .MOV, .MXF, or RAW video format, our priority is to maintain original quality during the repair.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">5</div>
            <div>
              <h3 class="step-title">Quality Validation</h3>
              <p class="step-body">Before delivering your repaired files, we fully test and verify that each video plays back correctly from start to finish. We check both video and audio streams for integrity.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">6</div>
            <div>
              <h3 class="step-title">Secure Data Delivery</h3>
              <p class="step-body">Your repaired video files are saved to a new external drive (either provided by you or available for purchase from us). We can also provide a detailed list of repaired files for your review before delivery.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4 — Case Study -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Video File Repair Case Study: 72TB G-Shuttle Recovery</h2>
        <p class="s-body"><strong>Introduction to Case:</strong> One of our most challenging and rewarding video file repair projects came from a large production company based in Los Angeles. The company had just finished a 5-day commercial shoot, capturing RAW footage from multiple RED and Blackmagic cameras onto a 72TB G-Shuttle RAID storage system.</p>
        <p class="s-body"><strong>The Problem:</strong> When the production team attempted to access their footage, every video file displayed as 0 bytes, and none of the critical shoot footage could be played or opened. To make matters worse, additional files continued to drop to 0 bytes in real time, indicating an escalating issue with the RAID system.</p>
        <p class="s-body"><strong>Our Solution:</strong> Our engineers performed a sector-level image of the entire 72TB storage system, then conducted an advanced forensic file carving process to locate and reconstruct the missing video files, even though the file system was completely corrupt. After recovering the fragmented RAW video files, we began the video file repair process, reconstructing each damaged video container, metadata block, and frame index manually.</p>
        <p class="s-body"><strong>The Result:</strong> We successfully repaired all critical video files, maintaining their original quality, resolution, and file structure. Every clip was restored, allowing the production team to meet their delivery deadline without any delays or loss of footage.</p>
      </div>
    </section>

    <!-- SECTION 5 — Why Choose Five Star -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Why Choose Five Star Data Recovery for Video File Repair?</h2>
        <ul class="content-list">
          <li>Industry-Leading Tools</li>
          <li>In-House Engineering Team</li>
          <li>Experience Across Multiple Codecs</li>
          <li>Over 10+ Years Experience in Video File Repair</li>
          <li>No Data, No Charge (Most Cases)</li>
          <li>Expedited Plus Service available for Rush Cases</li>
          <li>Dedicated Engineer for your case!</li>
          <li>99% Success Rate</li>
        </ul>
      </div>
    </section>

    <!-- REVIEWS -->
    <ReviewsSection :reviews="reviews" />

    <!-- SECTION 6 — Secure & Confidential -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Corrupted Video Files? We'll Fix Them — Fast and Secure.</h2>
        <p class="s-body">Whether it's surveillance footage, wedding videos, or professional film files, our team specializes in repairing damaged, unplayable, or corrupted video files — quickly and discreetly.</p>
        <ul class="content-list">
          <li>100% in-house video repair — no third-party labs</li>
          <li>Recovered videos are securely stored and deleted after delivery</li>
          <li>NDAs available for confidential or high-profile projects</li>
          <li>Lab is secured with 24/7 surveillance and restricted access</li>
        </ul>
        <p class="s-body">No matter how critical the footage, we treat every recovery with the highest level of care and discretion. Contact us today to get your video files back.</p>
      </div>
    </section>

    <!-- QUOTE FORM -->
    <QuoteFormSection
      description="From wedding footage on a corrupted SD card to 72TB RED RAW RAID arrays — we've repaired it all. Our engineers work at the binary level to reconstruct headers, frame indexes, and codec metadata so your footage plays back exactly as it was captured."
      bullet1="MP4, MOV, MXF, R3D, BRAW, ProRes, ARRI, RED, and more"
      bullet2="Sector-level clone first — your originals are never touched"
      bullet3="No Data, No Charge (most cases)"
      closing="Don't attempt DIY repairs on corrupted footage — one wrong move can destroy the file permanently. Fill out the form for a free evaluation."
      bgImage="/video-file-repair-hero.webp"
    />

    <!-- CONTACT BAND -->
    <section class="s-contact-band contact-band-bg">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Start Your Professional Video File Repair Now!</h2>
        </div>
        <p class="contact-body-text">Don't risk losing irreplaceable footage by attempting risky DIY fixes. Let the professionals at Five Star Data Recovery provide you with a safe, reliable, and expert video file repair service.</p>
        <ul class="contact-bullets">
          <li>Call us at (818) 272-8866</li>
          <li>Fill out our online quote request form</li>
          <li>Visit our lab in Glendale, CA</li>
          <li>Free nationwide shipping for all mail-in customers</li>
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
.formats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; }
.process-steps { display: flex; flex-direction: column; }
.process-step { display: flex; align-items: flex-start; gap: 24px; padding: 28px 0; border-bottom: 1px solid #e2e6ee; }
.process-step:last-child { border-bottom: none; }
.step-num { width: 48px; height: 48px; background: #1a1a2e; color: #C9A84C; font-size: 1.2rem; font-weight: 900; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.step-title { font-size: 1rem; font-weight: 800; color: #1a1a2e; margin-bottom: 8px; }
.step-body { font-size: 0.93rem; color: #4a5568; line-height: 1.7; margin: 0; }
.s-contact-band { background: #0f1623; padding: 44px 0; border-top: 3px solid #C9A84C; border-bottom: 3px solid #C9A84C; }
.contact-band-bg { background: linear-gradient(to right, rgba(15,22,35,0.92) 0%, rgba(15,22,35,0.75) 60%, rgba(15,22,35,0.5) 100%), url('/video-file-repair-service.webp') center center / cover no-repeat !important; }
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
@media (max-width: 900px) { .formats-grid { grid-template-columns: 1fr; } .two-col-layout { grid-template-columns: 1fr; } }
</style>
