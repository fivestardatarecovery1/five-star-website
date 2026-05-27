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
                "author": { "@type": "Person", "name": "Laura S." },
                "datePublished": "2024-11-20",
                "reviewBody": "I was in a panic when my QNAP NAS crashed and none of my devices could connect to it. A friend recommended Five Star Data Recovery, and I'm so glad I called them. They recovered all my photos and important work documents within a few days. Super helpful team and great customer service.",
                "name": "NAS Recovery Success",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
              }
            ],
            "priceRange": "$300 - $950"
          },
          {
            "@type": "Service",
            "name": "NAS Data Recovery Services",
            "url": "https://www.fivestardatarecovery.com/data-recovery/nas-data-recovery/",
            "areaServed": [{ "@type": "Country", "name": "United States" }],
            "description": "Professional NAS data recovery for Synology, QNAP, Drobo, Buffalo, WD My Cloud, and all major NAS devices. RAID reconstruction, clean room repairs, free diagnostic. Flat-rate pricing, No Data No Charge. Serving Glendale, Los Angeles, and nationwide."
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fivestardatarecovery.com/" },
              { "@type": "ListItem", "position": 2, "name": "Data Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/" },
              { "@type": "ListItem", "position": 3, "name": "NAS Data Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/nas-data-recovery/" }
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Can you recover data from a NAS that shows as 'Degraded' or 'Failed'?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Whether your NAS is showing a Degraded, Failed, or Volume Offline status, we specialize in recovering data from partially failed or fully failed RAID arrays within NAS systems." } },
              { "@type": "Question", "name": "Do you work on all NAS brands and models?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We provide NAS data recovery for all major brands including Synology, QNAP, Drobo, Buffalo, Netgear ReadyNAS, WD My Cloud, and others." } },
              { "@type": "Question", "name": "Can you recover data if my NAS was accidentally reformatted?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, data recovery is often possible even after a reformat or volume deletion — but only if the system is powered down immediately. Power off the NAS right away and avoid any further writes to the drives." } },
              { "@type": "Question", "name": "How long does NAS data recovery take?", "acceptedAnswer": { "@type": "Answer", "text": "For a standard NAS case with 4 to 8 drives up to 20TB, typical turnaround is 5 to 7 business days. Complex cases or physical damage may take longer. Expedited and Expedited Plus options are available for urgent cases." } }
            ]
          }
        ]
      })
    }
  ]
})

useSeoMeta({
  title: 'NAS Data Recovery - Five Star Data Recovery',
  ogTitle: 'NAS Data Recovery - Five Star Data Recovery',
  description: 'We specialize in NAS Server Data Recovery. Our engineers offer a fast and reliable turn around for all NAS units. Give us a call today.',
  ogDescription: 'We specialize in NAS Server Data Recovery. Our engineers offer a fast and reliable turn around for all NAS units. Give us a call today.',
})

const trustBadges = [
  { icon: 'clock', text: 'Available 24/7/365' },
  { icon: 'check', text: 'No Data = No Charge' },
  { icon: 'shield', text: '10+ Years in Business' },
  { icon: 'star', text: 'Free Nationwide Shipping' },
]

const reviews = [
  {
    text: "I was in a panic when my QNAP NAS crashed and none of my devices could connect to it. A friend recommended Five Star Data Recovery, and I&#39;m so glad I called them. They recovered all my photos and important work documents within a few days. Super helpful team and great customer service.",
    name: 'Laura S.',
    location: 'New York, NY',
  },
  {
    text: "My Synology NAS suddenly stopped working, and I couldn&#39;t access any of my business documents. The engineer I spoke with explained everything in plain language and walked me through the recovery process. Within a few days, I had all my important files back. Very professional and easy to work with.",
    name: 'Mark D.',
    location: 'Los Angeles, CA',
  },
  {
    text: "My QNAP NAS had multiple issues, and I was preparing for the worst. Thankfully, the recovery team was able to save nearly all my files. Communication was clear, pricing was fair, and the entire experience was much smoother than I expected. Highly recommend for NAS recovery needs.",
    name: 'James T.',
    location: 'North Hollywood, CA',
  },
]

const faqs = [
  {
    q: 'Can you recover data from a NAS that shows as "Degraded" or "Failed" in the management software?',
    a: 'Yes. Whether your NAS is showing a <strong>Degraded, Failed, or Volume Offline</strong> status in the control panel, we specialize in recovering data from partially failed or fully failed RAID arrays within NAS systems.',
  },
  {
    q: 'Do you work on all NAS brands and models?',
    a: 'Yes. We provide NAS data recovery services for all major brands, including <strong>Synology, QNAP, Drobo, Buffalo, Netgear ReadyNAS, WD My Cloud</strong>, and others. No matter the make or model, we have the tools and expertise to handle your recovery.',
  },
  {
    q: 'Can you recover data if my NAS was accidentally reformatted or the volume was deleted?',
    a: '<strong>Yes</strong>, data recovery is often possible even after a reformat or volume deletion — but only if the system is <strong>powered down immediately</strong>. The longer the NAS stays on, the higher the chance that new data (system logs, indexing, or background tasks) will overwrite the deleted volume. To maximize recovery success, power off the NAS right away and avoid any further writes to the drives.',
  },
  {
    q: 'Is it safe to rebuild my NAS RAID array after a failure?',
    a: 'Not always—and doing so could make things worse. Rebuilding a NAS RAID array after a failure might seem like the right move, especially if your NAS system (like <strong>Synology, QNAP, or TrueNAS</strong>) prompts you to do it. But in many cases, initiating a rebuild without verifying drive health and array integrity can lead to <strong>permanent data loss</strong>. Network Attached Storage (NAS) systems are often relied on for centralizing and protecting data—but that doesn&#39;t mean they&#39;re immune to failure or missteps during recovery.<br><br><strong>Why rebuilding your NAS RAID can be dangerous:</strong><br><br><strong>Your NAS assumes the drives are healthy</strong><br>In most NAS devices, the RAID management software doesn&#39;t perform a deep integrity check before a rebuild. If a second drive is unstable, has unreadable sectors, or is already degrading, the rebuild process can destroy what&#39;s left of your good data.<br><br><strong>A rebuild is a write operation</strong><br>When you rebuild a NAS RAID array, you&#39;re not recovering the old data—you&#39;re writing new parity or mirror data based on the current state of the remaining disks. If those disks have logical or physical damage, you may overwrite valid data with corrupted parity.<br><br><strong>NAS systems often mask warning signs</strong><br>Many NAS platforms attempt to maintain uptime, even when drives are degraded or syncing improperly. What looks like a single-disk failure might actually involve deeper RAID degradation. Starting a rebuild under those conditions can finalize the damage.<br><br><strong>When is it safe to rebuild your NAS RAID?</strong><br>It may be safe only if:<br>• You&#39;re using RAID 1 (mirror) and only one drive has failed.<br>• You&#39;re using RAID 5 or RAID 6 and only one drive is offline, and the others have been confirmed to be fully healthy with no bad sectors or SMART warnings.<br>• You have already backed up or cloned the remaining NAS drives before proceeding.<br><br>If your NAS shows multiple drive errors, degraded performance, or you&#39;ve heard clicking or beeping noises from the drives, stop immediately. Any rebuild attempt could compromise data that is still salvageable.<br><br><strong>The safer option: Clone and Analyze before rebuilding</strong><br>If your NAS holds irreplaceable data (business files, media archives, surveillance footage, etc.), here&#39;s what you should do before attempting any rebuild:<br>• Shut down the NAS to avoid further degradation or auto-rebuild attempts.<br>• Clone all drives in the RAID array using forensic imaging tools.<br>• Recreate the NAS RAID structure virtually using software like UFS Explorer, R-Studio, or PC-3000 RAID (in labs) to safely test configurations without modifying the original disks.<br>• If you&#39;re unsure, consult a professional data recovery service with experience in NAS RAID systems.<br><br><strong>Final thoughts</strong><br>Network Attached Storage systems are convenient, but they can give a false sense of security during RAID failures. If your NAS RAID array has failed, don&#39;t rush into a rebuild unless you&#39;re absolutely sure it&#39;s safe. In most cases, cloning the drives and analyzing the structure offline is the safest path. If your NAS RAID contains mission-critical data, reach out to a professional NAS data recovery service before making irreversible changes. One wrong move can wipe out your last chance at recovery.'
  },
  {
    q: 'Do you need the entire NAS unit, or just the hard drives?',
    a: 'We <strong>never recover data using the NAS enclosure itself</strong>. To ensure the safest and most effective recovery, we remove each drive from the NAS, <strong>clone them individually</strong>, and then use a virtual RAID controller to reconstruct the array. This approach prevents further damage and allows us full control over the recovery process.',
  },
  {
    q: 'Can you recover data from NAS drives with physical damage?',
    a: '<strong>Yes</strong>, data can often be recovered from physically damaged NAS drives, depending on the severity of the issue. Common symptoms like clicking, beeping, or failure to spin indicate mechanical problems such as failed read/write heads or motor issues. In these cases, the drive must be handled in a <strong>clean room environment</strong>.<br><br>Powering off the NAS immediately is crucial — continuing to use the system can cause further damage. Once the damaged drive is repaired, we create a sector-by-sector clone, along with clones of all other drives in the array. Only then do we begin the logical RAID reconstruction process using the cloned images — <strong>never the original drives</strong>.',
  },
  {
    q: 'How long does NAS data recovery take?',
    a: 'For a standard NAS data recovery case involving 4 to 8 drives and up to 20TB of data, the typical turnaround time is <strong>5 to 7 business days</strong> with our regular service. This assumes the drives are in good physical condition and the failure is logical.<br><br>The recovery timeframe can increase depending on: a larger number of drives, larger overall capacity, more complex RAID configurations, or physical damage requiring clean room work and donor parts.<br><br>If your NAS failure is time-sensitive, we offer <strong>Expedited Service</strong> and <strong>Expedited Plus Service</strong>. In urgent cases, we can also work with you to identify and recover critical files first, so you can access what&#39;s most important while the rest of the recovery continues in parallel.',
  },
  {
    q: 'Is my data safe and confidential during NAS recovery?',
    a: 'Yes, your data is handled with the highest level of security and confidentiality. We follow strict internal protocols to ensure your files remain private and protected at all times.<br><br>For customers who require added protection, we also offer <strong>Non-Disclosure Agreements (NDAs)</strong>. With an NDA in place, your NAS data remains fully confidential under a legally binding agreement. Please note: recovery reports cannot be emailed under NDA terms — you&#39;ll need to review results in person or provide written consent.<br><br>We <strong>do not retain any recovery images after the case is complete</strong>. Unlike standard cases where we hold a cloned image for 7 days as a safety backup, NDA cases are handled differently — the cloned images are <strong>permanently deleted immediately upon pickup or return shipping</strong>.',
  },
  {
    q: 'Can you recover data from a NAS that failed during a firmware update or has corrupted system files?',
    a: 'Yes, we can often recover data from NAS systems affected by <strong>failed firmware updates, corrupted system partitions, or OS-level file system damage</strong>. These issues typically prevent the NAS from booting or accessing shared volumes, but the data on the drives may still be fully intact.<br><br>We remove the drives from the NAS enclosure and analyze them individually, then reconstruct the original RAID layout using specialized recovery tools to bypass the failed NAS operating system and access the underlying data directly. As long as the drives themselves are physically healthy, recovery success rates are typically very high.',
  },
  {
    q: 'What happens if multiple drives in my NAS fail at the same time?',
    a: 'If multiple drives in your NAS fail simultaneously, the situation becomes more complex — but <strong>recovery may still be possible</strong>. The most important thing is to <strong>power down the NAS immediately</strong> to prevent further damage.<br><br>We remove all drives and perform a sector-by-sector clone of each one. Using those clones, we analyze the array structure and attempt to virtually rebuild the RAID in a controlled environment — without risking the original drives. Even when multiple drives have failed, recovery is sometimes still achievable, especially if one or more of the drives are only partially degraded or intermittently accessible. <strong>Never attempt to force a rebuild or reinitialize the volume</strong>, as this can make recovery much more difficult or even impossible.',
  },
  {
    q: 'Can you recover data from a NAS that failed during a RAID rebuild?',
    a: 'Yes. RAID rebuild failures are a common cause of NAS data loss. Attempting a rebuild on failing drives can make recovery more difficult, but we specialize in <strong>post-rebuild failure recoveries</strong>. We work from cloned images and use manual RAID reconstruction tools to safely recover your data.',
  },
  {
    q: 'My NAS volume is showing as RAW or unformatted. Can you recover the data?',
    a: 'Yes. If your NAS volume shows as <strong>RAW, unformatted, or inaccessible</strong>, it often indicates file system corruption or RAID metadata loss. We can perform deep-level scans and manually rebuild the RAID structure to recover your files safely.',
  },
  {
    q: 'Can you recover data from NAS drives with bad sectors?',
    a: 'Absolutely. We handle NAS recovery cases where one or more drives have <strong>bad sectors or are starting to fail</strong>. Our imaging tools allow us to bypass bad sectors and recover as much data as possible before the array is virtually reconstructed for file extraction.',
  },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <HeroSection
      title="NAS Data Recovery"
      subtitle="Get Your Data Back In No Time."
      description="At Five Star Data Recovery, we focus on advanced NAS data recovery. We work with all types of NAS devices, setups, and RAID volumes. It doesn&#39;t matter if you use your NAS system at home, in a small office, or a large corporate environment. We are here to help.<br><br>We will recover your data safely, quickly, and professionally. We handle everything from accidental deletions to complete system failures. Whether your NAS is a single-drive unit or a multi-bay RAID array, we have the tools and experience to recover your data."
      bgImage="/nas-data-recovery-hero.webp"
      :trustBadges="trustBadges"
    />

    <StatsBar />

    <!-- SECTION 1 — Common Issues -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Common Issues That Cause NAS Failures</h2>
        <p class="s-body">NAS devices are designed for reliability, but they&#39;re still vulnerable to failure. Some of the most common reasons for NAS recovery include:</p>
        <ul class="content-list">
          <li>Multiple drive failures in RAID-based NAS systems</li>
          <li>Power surges or electrical damage</li>
          <li>Overheating and cooling fan failure</li>
          <li>NAS volumes not mounting or becoming inaccessible</li>
          <li>Software or firmware corruption</li>
          <li>File system corruption after firmware updates</li>
          <li>Human error, such as accidental reformatting or file deletion</li>
          <li>Failed RAID rebuilds or incorrect RAID configuration</li>
        </ul>
        <p class="s-body">If your NAS device shows error messages, does not mount correctly, or makes strange noises, turn it off right away. This will help prevent more damage.</p>
      </div>
    </section>

    <!-- SECTION 2 — Supported Manufacturers -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Supported NAS Manufacturers</h2>
        <p class="s-body">We provide NAS drive data recovery from nearly all major NAS device manufacturers, including:</p>
        <ul class="content-list">
          <li>Synology</li>
          <li>QNAP</li>
          <li>Western Digital (WD My Cloud)</li>
          <li>Buffalo</li>
          <li>Drobo</li>
          <li>Seagate BlackArmor</li>
          <li>Netgear ReadyNAS</li>
          <li>Asustor</li>
          <li>TerraMaster</li>
          <li>LaCie and more</li>
        </ul>
        <p class="s-body">If your NAS uses custom hardware, proprietary RAID levels, or encryption, we can still help. Our engineers are experienced in working with even the most complex NAS recovery cases.</p>
      </div>
    </section>

    <!-- SECTION 3 — What Not to Do -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">What Not to Do If Your NAS Fails</h2>
        <ul class="content-list">
          <li>Do not attempt to rebuild the RAID.</li>
          <li>Do not attempt file recovery using consumer-level software — it may corrupt your NAS volumes.</li>
          <li>Do not remove or reinsert drives into a different order.</li>
          <li>Do not continue using the NAS if you suspect one or more drives are failing.</li>
        </ul>
        <p class="s-body">These steps may cause permanent data loss or overwrite critical RAID metadata. If your data is important, power down the NAS and contact a professional data recovery team immediately.</p>
      </div>
    </section>

    <!-- SECTION 4 — Recovery Process -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Our NAS Data Recovery Process</h2>
        <p class="s-body">Every NAS data recovery begins with safety and structure. Our lab follows a six-step process to recover data from NAS drives and RAID arrays:</p>
        <div class="process-steps">
          <div class="process-step">
            <div class="step-num">1</div>
            <div>
              <h3 class="step-title">Remove Drives from Enclosure</h3>
              <p class="step-body">We begin by safely removing each drive from your NAS system.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">2</div>
            <div>
              <h3 class="step-title">Clone Each Drive Individually</h3>
              <p class="step-body">Each disk is imaged sector-by-sector to create exact working copies. We never operate on the original drives.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">3</div>
            <div>
              <h3 class="step-title">Scan Each Drive for Metadata</h3>
              <p class="step-body">We analyze each clone to locate RAID metadata, parity information, and file system structures.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">4</div>
            <div>
              <h3 class="step-title">Use Metadata to Rebuild RAID</h3>
              <p class="step-body">Our engineers use this data to reconstruct the original NAS RAID array virtually.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">5</div>
            <div>
              <h3 class="step-title">File System Verification</h3>
              <p class="step-body">We verify file system integrity and validate recovered data with directory structure and file previews.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">6</div>
            <div>
              <h3 class="step-title">Save and Deliver Files</h3>
              <p class="step-body">Recovered data is copied to a new storage device and tested for integrity before being returned to you.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- REVIEWS -->
    <ReviewsSection :reviews="reviews" />

    <!-- SECTION 5 — Nationwide -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Free Nationwide Service with Round-Trip Shipping</h2>
        <p class="s-body">Although we&#39;re based in Los Angeles, our NAS recovery services are available across the U.S. We provide free round-trip shipping for all approved recovery cases. Just create a recovery ticket on our site, and we&#39;ll email you a prepaid shipping label with instructions. Once recovery is complete, we&#39;ll return your data on a new drive securely and at no extra cost.</p>
      </div>
    </section>

    <!-- QUOTE FORM -->
    <QuoteFormSection
      description="From a 2-bay home Synology to a 24-drive enterprise QNAP RAID — our engineers clone every drive first, then virtually reconstruct the NAS array without ever touching your originals. We recover data that other labs give up on."
      bullet1="Synology, QNAP, Drobo, Buffalo, WD My Cloud, and more"
      bullet2="Physical damage, bad sectors, failed rebuilds, firmware failures"
      bullet3="No Data, No Charge — free diagnostic included"
      closing="Power down your NAS now and don&#39;t attempt a rebuild. Fill out the form and our NAS engineers will evaluate your case for free."
      bgImage="/nas-data-recovery-hero.webp"
    />

    <!-- CONTACT BAND -->
    <section class="s-contact-band contact-band-bg">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Contact Us for Expert NAS Recovery</h2>
        </div>
        <p class="contact-body-text">If your NAS system has failed, don&#39;t panic — and don&#39;t risk your data with unproven methods. Our team has recovered data from thousands of NAS devices and RAID configurations. Whether you need basic file recovery or advanced NAS RAID data recovery, we&#39;re here to help.</p>
        <ul class="contact-bullets">
          <li>Call us today for a free diagnostic</li>
          <li>Start your case online now</li>
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
.contact-band-bg { background: linear-gradient(to right, rgba(15,22,35,0.92) 0%, rgba(15,22,35,0.75) 60%, rgba(15,22,35,0.5) 100%), url('/nas-data-recovery-hero.webp') center center / cover no-repeat !important; }
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
