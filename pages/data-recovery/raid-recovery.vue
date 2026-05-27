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
                "author": { "@type": "Person", "name": "Jason L." },
                "datePublished": "2024-11-20",
                "reviewBody": "After two drives failed in my RAID 5 setup, I thought years of client files were gone for good. The engineer I worked with was incredibly knowledgeable and explained every step of the recovery process. Within a week, I had nearly all my data back. The flat-rate pricing made the whole experience stress-free.",
                "name": "RAID 5 Recovery Success",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
              }
            ],
            "priceRange": "$300 - $950 per drive"
          },
          {
            "@type": "Service",
            "name": "RAID Data Recovery Services",
            "url": "https://www.fivestardatarecovery.com/data-recovery/raid-data-recovery/",
            "areaServed": [{ "@type": "Country", "name": "United States" }],
            "description": "Professional RAID data recovery for all RAID levels including RAID 0, 1, 5, 6, 10, 50, NAS and server arrays. Sector-by-sector cloning, virtual reconstruction, clean room repairs. Flat-rate pricing per drive. Serving Glendale, Los Angeles, and nationwide."
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fivestardatarecovery.com/" },
              { "@type": "ListItem", "position": 2, "name": "Data Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/" },
              { "@type": "ListItem", "position": 3, "name": "RAID Data Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/raid-data-recovery/" }
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "What types of RAID configurations do you recover data from?", "acceptedAnswer": { "@type": "Answer", "text": "We recover data from all RAID levels, including RAID 0, RAID 1, RAID 5, RAID 6, RAID 10, and custom configurations. Whether it's a small business NAS or a large server array, we're equipped to handle it." } },
              { "@type": "Question", "name": "Can you recover data from a failed RAID 5 array?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. RAID 5 failures are common due to multiple drive failures or degraded arrays. We can safely rebuild your RAID and recover the data without risking further loss." } },
              { "@type": "Question", "name": "What causes RAID data loss?", "acceptedAnswer": { "@type": "Answer", "text": "RAID data loss can result from multiple drive failures, controller malfunctions, power surges, human error, file system corruption, firmware issues, or failed RAID rebuilds." } },
              { "@type": "Question", "name": "Do you need the original RAID controller for recovery?", "acceptedAnswer": { "@type": "Answer", "text": "No. We use specialized hardware and software tools that allow us to virtually reconstruct your RAID array without the original controller, ensuring data safety during recovery." } },
              { "@type": "Question", "name": "How long does RAID data recovery take?", "acceptedAnswer": { "@type": "Answer", "text": "For most standard cases with 3 to 8 drives up to 20TB, average turnaround is 5 to 7 business days. Complex cases or physically damaged drives may take longer. Expedited and Expedited Plus services are available for urgent situations." } },
              { "@type": "Question", "name": "Do you recover data from NAS RAID systems like Synology or QNAP?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We frequently recover data from NAS devices such as Synology, QNAP, Drobo, Buffalo, and others that use RAID storage setups." } },
              { "@type": "Question", "name": "Can you recover data if one or more RAID drives are physically damaged?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. When a drive is physically damaged, our engineers perform component-level repairs in a certified Class 100 Clean Room. We clone all drives first, then virtually reconstruct the RAID from the clones." } },
              { "@type": "Question", "name": "Is there a risk of further data loss during the recovery process?", "acceptedAnswer": { "@type": "Answer", "text": "No. We never work on your original drives. Our process starts by cloning each RAID member drive. All recovery work happens from these cloned copies." } },
              { "@type": "Question", "name": "Do you offer a No Data, No Charge policy for RAID data recovery?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Most RAID data recovery cases qualify for our No Data, No Charge guarantee. You only pay if we successfully recover the data you need." } },
              { "@type": "Question", "name": "Can I drop off my RAID or ship it in for recovery?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! We offer both in-person drop-off at our Glendale, CA lab and free nationwide mail-in service. Fill out our Mail-In Recovery Form and we'll provide a prepaid shipping label." } },
              { "@type": "Question", "name": "How much does RAID Data Recovery cost?", "acceptedAnswer": { "@type": "Answer", "text": "Pricing is per drive: $300 for drives up to 2TB, $500 for drives up to 6TB, $600 for drives between 8TB-12TB, and $950 for drives requiring clean room repair. For a 4-drive RAID with 2TB drives, total cost would be $1,200." } }
            ]
          }
        ]
      })
    }
  ]
})

useSeoMeta({
  title: 'Data Recovery RAID Services - Five Star Data Recovery',
  ogTitle: 'Data Recovery RAID Services - Five Star Data Recovery',
  description: 'Lost Data and need Data Recovery RAID services? Our engineers provide RAID Data Recovery that can restore your valuable information.',
  ogDescription: 'Lost Data and need Data Recovery RAID services? Our engineers provide RAID Data Recovery that can restore your valuable information.',
})

const trustBadges = [
  { icon: 'clock', text: 'Available 24/7/365' },
  { icon: 'check', text: 'No Data = No Charge' },
  { icon: 'shield', text: '10+ Years in Business' },
  { icon: 'star', text: 'Free Nationwide Shipping' },
]

const reviews = [
  {
    text: "After two drives failed in my RAID 5 setup, I thought years of client files were gone for good. The engineer I worked with was incredibly knowledgeable and explained every step of the recovery process. Within a week, I had nearly all my data back. The flat-rate pricing made the whole experience stress-free.",
    name: 'Jason L.',
    location: 'Pasadena, CA',
  },
  {
    text: "Our office RAID suddenly failed and we couldn&#39;t access any of our files. Five Star Data Recovery handled it quickly and professionally. They kept us informed every step of the way, and the communication was excellent. If you&#39;re dealing with a serious data loss, this is the team you want on your side.",
    name: 'Maria P.',
    location: 'Burbank, CA',
  },
  {
    text: "When one of the drives in my RAID 0 array failed, I was told by two other places that recovery wasn&#39;t possible. I gave it one last try here, and thankfully they proved otherwise! They were able to rebuild the array and retrieve all my lost video editing projects. Highly recommend their RAID recovery service.",
    name: 'Daniel L.',
    location: 'New York, NY',
  },
]

const faqs = [
  {
    q: 'What types of RAID configurations do you recover data from?',
    a: 'We recover data from <strong>all RAID levels</strong>, including RAID 0, RAID 1, RAID 5, RAID 6, RAID 10, and custom configurations. Whether it&#39;s a small business NAS or a large server array, we&#39;re equipped to handle it.',
  },
  {
    q: 'Can you recover data from a failed RAID 5 array?',
    a: 'Yes. RAID 5 failures are common due to <strong>multiple drive failures or degraded arrays</strong>. We can safely rebuild your RAID and recover the data without risking further loss.',
  },
  {
    q: 'What causes RAID data loss?',
    a: 'RAID data loss can result from: <strong>multiple drive failures</strong>, controller/hardware malfunction, power surges or outages, human error (wrong drive replacement, incorrect rebuild), file system corruption, firmware issues, or <strong>failed RAID rebuilds</strong> that overwrite parity. Even with built-in redundancy, RAID systems are not immune to failure.',
  },
  {
    q: 'Do you need the original RAID controller for recovery?',
    a: '<strong>No.</strong> We use specialized hardware and software tools that allow us to <strong>virtually reconstruct your RAID array</strong> without the original controller, ensuring data safety during recovery.',
  },
  {
    q: 'How long does RAID data recovery take?',
    a: 'For most standard cases with 3 to 8 drives and up to 20TB, average turnaround is <strong>5 to 7 business days</strong>. Physically damaged drives or larger arrays may take longer due to clean room repairs and donor parts sourcing. <strong>Expedited and Expedited Plus</strong> services are available for urgent situations.',
  },
  {
    q: 'Do you recover data from NAS RAID systems like Synology or QNAP?',
    a: 'Yes. We frequently recover data from NAS devices such as <strong>Synology, QNAP, Drobo, Buffalo</strong>, and others that use RAID storage setups.',
  },
  {
    q: 'Can you recover data if one or more RAID drives are physically damaged?',
    a: 'Yes. When a drive is physically damaged — not spinning, clicking, beeping, or undetected — our engineers perform <strong>component-level repairs in a certified Class 100 Clean Room</strong>. We clone all drives first, then virtually reconstruct the RAID. Never keep using a degraded RAID or attempt DIY rebuilds — power it down and contact us immediately.',
  },
  {
    q: 'Is there a risk of further data loss during the recovery process?',
    a: '<strong>No.</strong> We <strong>never work on your original drives</strong>. Our process starts by creating 1-to-1 clones of each RAID member drive. All recovery work happens from these cloned copies to ensure your original data remains untouched.',
  },
  {
    q: 'Do you offer a No Data, No Charge policy for RAID data recovery?',
    a: 'Yes. Most RAID data recovery cases qualify for our <strong>No Data, No Charge guarantee</strong>. You only pay if we successfully recover the data you need. Some exceptions apply for deleted data or drives that were previously opened.',
  },
  {
    q: 'Can I drop off my RAID or ship it in for recovery?',
    a: '<strong>Yes!</strong> We offer both in-person drop-off at our <strong>Glendale, CA lab</strong> and <strong>free nationwide mail-in service</strong>. Fill out our Mail-In Recovery Form and we&#39;ll provide a prepaid shipping label.',
  },
  {
    q: 'How much does RAID Data Recovery cost?',
    a: 'We use the same flat-rate data recovery pricing for RAID drives as we do for standard hard drive recoveries. Pricing is based on the <strong>size of each individual drive</strong> in the array—not the total number of drives or total capacity. Here&#39;s a breakdown of our standard flat-rate pricing per drive:<br><br><strong>$300 per drive</strong> – Drives up to 2TB<br><strong>$500 per drive</strong> – Drives up to 6TB<br><strong>$600 per drive</strong> – Drives between 8TB–12TB<br><strong>$950 per drive</strong> – Drives requiring clean room repair<br><br>All RAID recoveries follow this flat rate model. For example, if you have a 4-drive RAID array made up of 2TB drives (no physical damage), the total recovery cost would be <strong>$1,200 ($300 × 4)</strong>. This includes full diagnostics, recovery, and return of your data. We also offer Expedited and Expedited Plus services if your RAID recovery is time-sensitive.',
  },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <HeroSection
      title="RAID Data Recovery Services"
      subtitle="Get Your Data Back In No Time."
      description="At Five Star Data Recovery, we focus on safe and dependable RAID data recovery. We help businesses, IT teams, and individual users. If your array has failed because of controller problems, drive wear, or accidental changes, we can help recover your files. Our engineers handle all RAID levels—from simple RAID 1 mirroring to complex RAID 10 and RAID 5 arrays.<br><br>We understand how critical RAID systems are to your operations. Data from RAID volumes often includes business databases, media libraries, customer records, and other irreplaceable data. Our goal is to help you recover data RAID systems store, with a focus on speed, precision, and safety."
      bgImage="/raid-data-recovery-hero.webp"
      :trustBadges="trustBadges"
    />

    <StatsBar />

    <!-- SECTION 1 — Understanding RAID -->
    <section class="s-white">
      <div class="container">
        <div class="two-col-layout">
          <div>
            <h2 class="s-heading">Understanding RAID Systems and Why They Fail</h2>
            <p class="s-body">RAID stands for Redundant Array of Independent Disks. It combines several drives into one unit to improve performance, redundancy, or both. RAID 0 is best for speed. RAID 1 is good for redundancy. RAID 5 and RAID 10 offer a balance of protection and performance.</p>
            <p class="s-body">Despite their design, RAID drives are not immune to failure. Common causes include multiple drive failures, broken RAID controllers, wrong RAID settings, power surges, and failed rebuilds. In some cases, a single failed drive in a degraded array can lead to complete system failure. Knowing your RAID type and setup is essential when seeking professional data recovery services.</p>
          </div>
          <div class="section-img-wrap">
            <img src="/raid-server-room-recovery.webp" alt="RAID server room data recovery" class="section-img" />
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2 — Recovery Process -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Our Safe and Secure RAID Recovery Process</h2>
        <p class="s-body">Every RAID recovery starts with detailed diagnostics and mapping of your RAID array. We document the block size, parity order, disk sequence, and configuration. Our engineers use specialized data recovery tools to identify the layout and virtually reconstruct the array. All work is done in a controlled lab using certified equipment. If you have a failed rebuild, corrupted files, or lost partitions, we can help. We find the problem, fix the issues, and recover your files using professional data recovery software.</p>
      </div>
    </section>

    <!-- SECTION 3 — Why We Clone -->
    <section class="s-white">
      <div class="container">
        <div class="two-col-layout reverse">
          <div class="section-img-wrap">
            <img src="/raid-recovery-engineers.webp" alt="RAID recovery engineers cloning drives" class="section-img" />
          </div>
          <div>
            <h2 class="s-heading">Why We Always Clone Drives First</h2>
            <p class="s-body">At Five Star, we <strong>never work directly on original RAID drives</strong>. Instead, we create a sector-by-sector clone of each disk, producing a perfect 1-to-1 image. This ensures your original data remains untouched and fully preserved.</p>
            <p class="s-body">By working only from cloned drives, we can safely rebuild, test, and analyze your RAID array without risking further damage. This is especially important for unstable or degraded disks, where even one more read could cause permanent data loss.</p>
            <p class="s-body">If a drive is physically damaged, we stabilize it in a Class 100 Clean Room and then attempt to image it safely. Once all clones are complete, we reconstruct the RAID using specialized tools — without ever touching the originals. Cloning is our first line of defense in protecting your data. It gives us the flexibility to recover files safely, even from complex or high-risk failures, while ensuring your drives remain exactly as they were when the issue occurred.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4 — RAID Levels -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Types of RAID Levels We Recover</h2>
        <p class="s-body">Our lab is equipped to recover all major RAID levels and combinations, including:</p>
        <ul class="content-list">
          <li><strong>RAID 0 (Striping)</strong> – No redundancy, high-speed, high-risk</li>
          <li><strong>RAID 1 (Mirroring)</strong> – Redundant, but vulnerable to simultaneous failures</li>
          <li><strong>RAID 5 (Parity)</strong> – Can survive one disk failure; risky during rebuild</li>
          <li><strong>RAID 10 (Striped Mirrors)</strong> – Combines performance and redundancy</li>
          <li><strong>RAID 6</strong> – Dual parity, survives two drive failures</li>
          <li><strong>RAID 50, RAID 60</strong> – Nested enterprise arrays</li>
          <li>RAID 2, RAID 3, RAID 6, RAID 50, and custom hybrid RAID types</li>
        </ul>
        <p class="s-body">Even when vendors use proprietary controllers or software-defined RAID, we can often reverse-engineer the structure. Our team has worked with thousands of variations, including legacy RAID setups on aging systems.</p>
      </div>
    </section>

    <!-- SECTION 5 — RAID Level Deep Dive -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">A Closer Look at Common RAID Levels</h2>
        <div class="raid-grid">
          <div class="raid-card">
            <h3 class="raid-title">RAID 0 (Striping)</h3>
            <p class="s-body">Splits data evenly across two or more drives to maximize speed. No redundancy — if one drive fails, the system loses all data. Recovery is challenging if more than one disk has corruption or physical damage.</p>
          </div>
          <div class="raid-card">
            <h3 class="raid-title">RAID 1 (Mirroring)</h3>
            <p class="s-body">Duplicates data across two drives, offering strong protection against single-drive failure. If someone attempts an incorrect rebuild or both drives experience issues, recovery is still often possible.</p>
          </div>
          <div class="raid-card">
            <h3 class="raid-title">RAID 5 (Striping with Parity)</h3>
            <p class="s-body">Balances speed, redundancy, and storage efficiency. If a single drive fails, the system can rebuild — but if a second drive fails during that rebuild, data loss occurs. One of the most common configurations in small to medium-sized businesses.</p>
          </div>
          <div class="raid-card">
            <h3 class="raid-title">RAID 6 (Dual Parity)</h3>
            <p class="s-body">Survives the failure of two drives. However, rebuild time is longer and more sensitive to further degradation. Recovery often involves detailed parity examination and controller-level diagnostics.</p>
          </div>
          <div class="raid-card">
            <h3 class="raid-title">RAID 10 (1+0)</h3>
            <p class="s-body">Mirrors data across pairs of striped drives — combining RAID 0 and RAID 1 benefits. Commonly used in video editing and database servers for both performance and redundancy.</p>
          </div>
          <div class="raid-card">
            <h3 class="raid-title">RAID 50 and RAID 60</h3>
            <p class="s-body">Nested RAID levels combining striping and distributed parity across multiple sub-arrays. Used in enterprise storage where redundancy and performance must scale. Experts should always handle recovery from these configurations.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 6 — Common Scenarios -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Common RAID Data Loss Scenarios</h2>
        <p class="s-body">RAID systems can fail for many reasons. Common causes of lost data include:</p>
        <ul class="content-list">
          <li>Multiple disk failures or degraded arrays</li>
          <li>Power loss or electrical surges</li>
          <li>Failed rebuilds or incorrect RAID level reconstructions</li>
          <li>Misconfigured RAID type after hardware swaps</li>
          <li>Bad sectors or firmware issues</li>
          <li>File corruption or accidental deletion</li>
          <li>Outdated or failed RAID controller firmware</li>
        </ul>
        <p class="s-body">In non-redundant systems like RAID 0, even a single disk issue can result in total data loss. In parity-based arrays like RAID 5, failure during rebuild can be catastrophic.</p>
      </div>
    </section>

    <!-- SECTION 7 — How Rebuilds Go Wrong -->
    <section class="s-white">
      <div class="container">
        <div class="two-col-layout">
          <div>
            <h2 class="s-heading">How RAID Rebuilds Can Go Wrong</h2>
            <p class="s-body">Trying to fix a broken RAID array without expert help is a common reason for losing data forever. If someone swaps the wrong disk or the rebuild miscalculates parity, the system can instantly overwrite data. We've seen rebuilds destroy good data because of mismatched configurations or improper controller behavior.</p>
            <p class="s-body">Even powerful software tools can't undo a corrupted rebuild. That's why we always image all disks before doing anything else — preserving every byte before rebuilding from clones.</p>
          </div>
          <div class="section-img-wrap">
            <img src="/raid-array-recovery.webp" alt="RAID array data recovery process" class="section-img" />
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 8 — What We Can Recover -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">What We Can Recover from a RAID System</h2>
        <p class="s-body">We've performed RAID drive data recovery on thousands of systems across virtually every setup. Common recoveries include:</p>
        <ul class="content-list">
          <li>Virtual machines, database files, and backups</li>
          <li>Email servers and Exchange/Outlook files</li>
          <li>Raw image and video libraries</li>
          <li>Corrupted or inaccessible file systems</li>
          <li>Accidentally deleted or formatted volumes</li>
          <li>Critical documents and user files from failed RAID drives</li>
          <li>Enterprise datasets, spreadsheets, ProRes video, CAD files, and more</li>
        </ul>
      </div>
    </section>

    <!-- SECTION 9 — Supported Platforms -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Supported RAID Configurations and Platforms</h2>
        <p class="s-body">Our RAID data recovery solutions support a wide range of platforms, including:</p>
        <ul class="content-list">
          <li>Windows, Linux, and macOS RAID</li>
          <li>NAS/SAN devices: Synology, QNAP, Drobo, Buffalo, and more</li>
          <li>Server-grade arrays and custom hardware</li>
          <li>Hardware/software RAID controllers (LSI, Dell PERC, Adaptec, etc.)</li>
          <li>Software-defined RAID, like Microsoft Storage Spaces</li>
          <li>Nested and hybrid RAID levels</li>
        </ul>
        <p class="s-body">If you are not sure about your RAID setup, our team can find and rebuild the RAID array. We use high-quality forensic tools for this.</p>
      </div>
    </section>

    <!-- SECTION 10 — Emergency & Expedited -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Emergency &amp; Expedited RAID Recovery Services</h2>
        <p class="s-body">RAID failures require urgent attention, especially where downtime equals lost revenue. We offer emergency RAID recovery services with prioritized diagnostics and 24/7 lab access for critical situations. MSPs, IT departments, and disaster recovery firms trust us. They rely on us as the last option when in-house efforts do not work. Our RAID 0 and RAID 10 recovery options include proactive cloning, rebuilding, and quick response times.</p>
        <ul class="content-list">
          <li><strong>Expedited Service ($200 per drive)</strong> – Case moves to the top of our recovery list during business hours. Fastest possible turnaround for urgent but non-emergency cases.</li>
          <li><strong>Expedited Plus Service ($500 per drive)</strong> – Our highest-priority tier. Engineers work 24/7, including weekends and holidays, until the recovery is complete. For mission-critical data outages.</li>
        </ul>
        <p class="s-body">These fees are in addition to standard flat-rate recovery fees and are non-refundable, regardless of outcome.</p>
      </div>
    </section>

    <!-- SECTION 11 — What Sets Engineers Apart -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">What Sets Our Engineers Apart</h2>
        <p class="s-body">At the heart of our RAID recovery success is our engineering team. Each specialist at Five Star is trained in disk architecture, file system repair, and binary analysis. We don&#39;t rely on automated tools alone — human experts carefully handle each case.</p>
        <p class="s-body">Many of our engineers have backgrounds in forensic computing and electronics. This helps us solve complex problems, such as controller-level failures, encrypted file systems, and undocumented RAID formats.</p>
      </div>
    </section>

    <!-- SECTION 12 — Failed Rebuild -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Can You Recover Data After a Failed RAID Rebuild?</h2>
        <p class="s-body">A failed RAID rebuild doesn&#39;t always mean you will lose your data forever, but it can make recovery much harder. If you try to rebuild the wrong RAID setup or drive, it can overwrite parity, corrupt partitions, or damage the file structure.</p>
        <p class="s-body">We&#39;ve recovered many arrays after failed rebuilds by using cloned drives to reverse-engineer the damage. If your system got worse after a rebuild attempt, there&#39;s still hope — call us before doing anything else.</p>
      </div>
    </section>

    <!-- REVIEWS -->
    <ReviewsSection :reviews="reviews" />

    <!-- SECTION 13 — Why Choose -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Why Choose Five Star for RAID Recovery</h2>
        <ul class="content-list">
          <li>We never recover from original drives — every case begins with exact 1-to-1 clones</li>
          <li><strong>"No-Recovery, No-Charge"</strong> policy — you only pay if we successfully retrieve your files</li>
          <li>Every quote is clear, honest, and upfront — no hidden charges</li>
          <li>Physically damaged drives handled in our certified Class 100 Clean Room</li>
          <li>Highly trained engineers in advanced RAID configurations, including complex hybrid setups</li>
          <li>Standard and emergency turnaround options available</li>
        </ul>
      </div>
    </section>

    <!-- QUOTE FORM -->
    <QuoteFormSection
      description="From a 2-drive RAID 1 at a small office to a 72TB enterprise RAID 60 array — we&#39;ve recovered them all. Our process always starts with 1-to-1 cloning before any reconstruction begins, so your originals are never touched."
      bullet1="All RAID levels — 0, 1, 5, 6, 10, 50, 60 + custom"
      bullet2="Synology, QNAP, Drobo, Dell PERC, LSI, Adaptec"
      bullet3="No Data, No Charge — flat-rate per drive from $300"
      closing="Don&#39;t attempt a rebuild — one wrong move can permanently overwrite your data. Fill out the form and let our RAID engineers take it from here."
      bgImage="/raid-data-recovery-hero.webp"
    />

    <!-- CONTACT BAND -->
    <section class="s-contact-band contact-band-bg">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Start Your RAID Data Recovery Today</h2>
        </div>
        <p class="contact-body-text">If your RAID array has failed, don&#39;t risk making it worse. Let our certified RAID recovery engineers handle it safely, securely, and professionally.</p>
        <ul class="contact-bullets">
          <li>Free diagnostic — full array mapping included</li>
          <li>Flat-rate per drive — no hidden fees</li>
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
.two-col-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
.two-col-layout.reverse { direction: rtl; }
.two-col-layout.reverse > * { direction: ltr; }
.section-img-wrap { border-radius: 12px; overflow: hidden; }
.section-img { width: 100%; height: auto; display: block; border-radius: 12px; object-fit: cover; }
.raid-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.raid-card { background: #f4f7fc; border: 1px solid #e2e6ee; border-radius: 10px; padding: 24px; }
.raid-title { font-size: 1rem; font-weight: 800; color: #1a1a2e; margin-bottom: 10px; }
.s-contact-band { background: #0f1623; padding: 44px 0; border-top: 3px solid #C9A84C; border-bottom: 3px solid #C9A84C; }
.contact-band-bg { background: linear-gradient(to right, rgba(15,22,35,0.92) 0%, rgba(15,22,35,0.75) 60%, rgba(15,22,35,0.5) 100%), url('/raid-server-room-recovery.webp') center center / cover no-repeat !important; }
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
@media (max-width: 900px) { .raid-grid { grid-template-columns: 1fr 1fr; } .two-col-layout, .two-col-layout.reverse { grid-template-columns: 1fr; direction: ltr; } }
@media (max-width: 600px) { .raid-grid { grid-template-columns: 1fr; } }
</style>
