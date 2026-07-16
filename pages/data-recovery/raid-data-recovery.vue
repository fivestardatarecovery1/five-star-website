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
              { "@type": "Question", "name": "What causes RAID data loss?", "acceptedAnswer": { "@type": "Answer", "text": "RAID data loss can happen for a variety of reasons\u2014and often, it's not just one issue but a combination of factors that lead to failure. Some of the most common causes include multiple drive failures, where RAID setups are designed to handle a single drive failure (depending on the RAID level), but if two or more drives fail\u2014especially in RAID 5 or 6\u2014it can result in total data loss. Controller or hardware malfunction is another issue; if the RAID controller card, backplane, or power supply fails, the system may not recognize the array or could corrupt the configuration. Power surges or outages can also interrupt writes or damage drives, leaving the array in an inconsistent or degraded state. Human error, such as accidental deletion, formatting, or incorrect rebuild attempts (like replacing drives in the wrong order), frequently contributes to RAID failures. File system corruption due to software bugs, forced shutdowns, or malware can prevent access to otherwise healthy data. Firmware issues, such as bugs or mismatches between drives, can disrupt synchronization or render an entire RAID volume unreadable. Lastly, failed RAID rebuilds\u2014especially those performed incorrectly or with the wrong drive order\u2014can permanently overwrite otherwise recoverable data. Even with built-in redundancy, RAID systems are not immune to failure. That's why it's important to avoid running any utilities or rebuilds after a failure and to contact a professional recovery lab immediately." } },
              { "@type": "Question", "name": "Do you need the original RAID controller for recovery?", "acceptedAnswer": { "@type": "Answer", "text": "No. We use specialized hardware and software tools that allow us to virtually reconstruct your RAID array without the original controller. This ensures data safety during recovery." } },
              { "@type": "Question", "name": "Do you recover data from NAS RAID systems like Synology or QNAP?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We frequently recover data from NAS devices such as Synology, QNAP, Drobo, Buffalo, and others that use RAID storage setups." } },
              { "@type": "Question", "name": "Is there a risk of further data loss during the recovery process?", "acceptedAnswer": { "@type": "Answer", "text": "No. We never work on your original drives. Our process starts by cloning each RAID member drive. All recovery work happens from these cloned copies to ensure your original data remains untouched." } },
              { "@type": "Question", "name": "Do you offer a No Data, No Charge policy for RAID data recovery?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Most RAID data recovery cases qualify for our No Data, No Charge guarantee. You only pay if we successfully recover the data you need. Some exceptions apply for deleted data or drives that were previously opened." } },
              { "@type": "Question", "name": "Can I drop off my RAID or ship it in for recovery?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! We offer both in-person drop-off at our Glendale, CA lab and free nationwide mail-in service. Just fill out our Mail-In Recovery Form and we'll provide a prepaid shipping label." } },
              { "@type": "Question", "name": "How long does RAID data recovery take?", "acceptedAnswer": { "@type": "Answer", "text": "The timeframe for RAID data recovery can vary depending on the number of drives, total storage capacity, and the type of failure. For most standard cases with 3 to 8 drives and capacities up to 20TB, our average turnaround is 5 to 7 business days under normal service. However, several factors can affect this timeline, including larger RAID arrays with more drives, greater total data volume, unusual or custom RAID configurations, and physical damage such as dropped, non-spinning, or clicking drives. If any drives have mechanical issues, additional time is needed for clean room repairs, locating compatible donor parts, and safely cloning the drives. At Five Star Data Recovery, we always create 1-to-1 clones of all drives in the array, regardless of their condition. This ensures your original data stays untouched throughout the entire recovery process. For time-sensitive projects, we offer Expedited and Expedited Plus services that prioritize your case immediately. These options accelerate every phase of the recovery\u2014from diagnostics to final data delivery\u2014and include extended engineer hours, even outside normal business days if needed. If you're working under a deadline, we can also begin recovery on your most important files first, so you get early access to critical data while the full recovery continues in parallel." } },
              { "@type": "Question", "name": "Can you recover data if one or more RAID drives are physically damaged?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we specialize in recovering data even when one or more drives in your RAID array are physically damaged. In fact, many RAID failures involve at least one degraded or completely failed drive\u2014especially in configurations like RAID 5, RAID 6, and RAID 10, where redundancy can mask early issues until multiple drives fail. When a drive is physically damaged\u2014whether it's not spinning, clicking, beeping, or completely undetected\u2014our engineers perform component-level repairs in a certified Class 100 Clean Room. This environment ensures the internal components of the drive, like the platters and read/write heads, remain protected during the repair and imaging process. We never work off the original drives. All RAID recoveries begin by creating exact 1-to-1 clones of every drive in the array\u2014including the damaged ones\u2014to preserve your data. If clean room repairs are necessary, we source donor parts and stabilize the drive enough to make a full sector-by-sector image. Once all drive images are complete, we reconstruct the RAID virtually using specialized tools and metadata from the drives to rebuild the original array. From there, we verify file structure integrity and recover your data in its most complete form. It's important to not keep using a degraded RAID or attempt DIY rebuilds, as this can permanently overwrite data or make recovery more difficult. If you suspect physical damage, power down the device and contact us right away\u2014the sooner we receive the drives, the better your chances of a full recovery." } },
              { "@type": "Question", "name": "How much does RAID Data Recovery cost?", "acceptedAnswer": { "@type": "Answer", "text": "We use the same flat-rate data recovery pricing for RAID drives as we do for standard hard drive recoveries. Pricing is based on the size of each individual drive in the array\u2014not the total number of drives or total capacity. Here's a breakdown of our standard flat-rate pricing per drive: Drives up to 2TB: $300 per drive. Drives up to 6TB: $500 per drive. Drives between 8TB\u201312TB: $600 per drive. Drives requiring clean room repair: $950 per drive. All RAID recoveries follow this flat rate model. For example, if you have a 4-drive RAID array made up of 2TB drives (no physical damage), the total recovery cost would be $1,200 ($300 x 4). This includes full diagnostics, recovery, and return of your data. We also offer Expedited and Expedited Plus services if your RAID recovery is time-sensitive." } }
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
  ogImage: 'https://www.fivestardatarecovery.com/raid-data-recovery-hero.webp',
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
    a: 'RAID data loss can happen for a variety of reasons — and often, it&#39;s not just one issue but a combination of factors that lead to failure. Some of the most common causes include:<br><br><strong>Multiple Drive Failures:</strong> RAID setups are designed to handle a single drive failure (depending on the RAID level), but if two or more drives fail — especially in RAID 5 or 6 — it can result in total data loss.<br><strong>Controller or Hardware Malfunction:</strong> If the RAID controller card, backplane, or power supply fails, the system may not recognize the array or could corrupt the configuration.<br><strong>Power Surges or Outages:</strong> Unexpected power events can interrupt writes or damage drives, leaving the array in an inconsistent or degraded state.<br><strong>Human Error:</strong> Accidental deletion, formatting, or incorrect rebuild attempts (e.g., replacing drives in the wrong order) are common reasons RAID systems go down.<br><strong>File System Corruption:</strong> Logical damage to the file system, caused by software bugs, forced shutdowns, or malware, can prevent access to otherwise healthy data.<br><strong>Firmware Issues:</strong> Firmware bugs or mismatches between drives can affect synchronization or even render an entire RAID volume unreadable.<br><strong>Failed RAID Rebuilds:</strong> A rebuild done improperly or using the wrong drive order can permanently overwrite recoverable data.<br><br>Even with built-in redundancy, RAID systems are not immune to failure. That&#39;s why it&#39;s important to avoid running any utilities or rebuilds after a failure and contact a professional recovery lab immediately.',
  },
  {
    q: 'Do you need the original RAID controller for recovery?',
    a: '<strong>No.</strong> We use specialized hardware and software tools that allow us to <strong>virtually reconstruct your RAID array</strong> without the original controller, ensuring data safety during recovery.',
  },
  {
    q: 'How long does RAID data recovery take?',
    a: 'The timeframe for RAID data recovery can vary depending on the number of drives, total storage capacity, and the type of failure. For most standard cases with 3 to 8 drives and capacities up to 20TB, our average turnaround is <strong>5 to 7 business days</strong> under normal service. However, several factors can affect this timeline:<br><br>• Larger RAID arrays with more drives<br>• Greater total data volume<br>• Unusual or custom RAID configurations<br>• Physical damage such as dropped, non-spinning, or clicking drives<br><br>If any drives have mechanical issues, additional time is needed for clean room repairs, locating compatible donor parts, and safely cloning the drives. At Five Star Data Recovery, we always create 1-to-1 clones of all drives in the array, regardless of their condition. This ensures your original data stays untouched throughout the entire recovery process.<br><br>For time-sensitive projects, we offer <strong>Expedited and Expedited Plus</strong> services that prioritize your case immediately. These options accelerate every phase of the recovery — from diagnostics to final data delivery — and include extended engineer hours, even outside normal business days if needed. If you&#39;re working under a deadline, we can also begin recovery on your most important files first, so you get early access to critical data while the full recovery continues in parallel.',
  },
  {
    q: 'Do you recover data from NAS RAID systems like Synology or QNAP?',
    a: 'Yes. We frequently recover data from NAS devices such as <strong>Synology, QNAP, Drobo, Buffalo</strong>, and others that use RAID storage setups.',
  },
  {
    q: 'Can you recover data if one or more RAID drives are physically damaged?',
    a: 'Yes, we specialize in recovering data even when one or more drives in your RAID array are physically damaged. In fact, many RAID failures involve at least one degraded or completely failed drive — especially in configurations like <strong>RAID 5, RAID 6, and RAID 10</strong>, where redundancy can mask early issues until multiple drives fail.<br><br>When a drive is physically damaged — whether it&#39;s not spinning, clicking, beeping, or completely undetected — our engineers perform component-level repairs in a certified <strong>Class 100 Clean Room</strong>. This environment ensures the internal components of the drive, like the platters and read/write heads, remain protected during the repair and imaging process.<br><br>Here&#39;s how we handle these cases:<br>• We never work off the original drives. All RAID recoveries begin by creating exact 1-to-1 clones of every drive in the array — including the damaged ones — to preserve your data.<br>• If clean room repairs are necessary, we source donor parts and stabilize the drive enough to make a full sector-by-sector image.<br>• Once all drive images are complete, we reconstruct the RAID virtually using specialized tools and metadata from the drives to rebuild the original array.<br>• From there, we verify file structure integrity and recover your data in its most complete form.<br><br>It&#39;s important to not keep using a degraded RAID or attempt DIY rebuilds, as this can permanently overwrite data or make recovery more difficult. If you suspect physical damage, power down the device and contact us right away — the sooner we receive the drives, the better your chances of a full recovery.',
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
            <img src="/raid-server-room-recovery-640.webp"
               srcset="/raid-server-room-recovery-640.webp 640w, /raid-server-room-recovery-800.webp 800w, /raid-server-room-recovery-1280.webp 1280w"
               sizes="(max-width: 640px) 100vw, (max-width: 1024px) 800px, 640px"
               alt="RAID server room data recovery" class="section-img" width="640" height="360" loading="lazy" />
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
            <img src="/raid-recovery-engineers-640.webp"
               srcset="/raid-recovery-engineers-640.webp 640w, /raid-recovery-engineers-800.webp 800w, /raid-recovery-engineers-1280.webp 1280w"
               sizes="(max-width: 640px) 100vw, (max-width: 1024px) 800px, 640px"
               alt="RAID recovery engineers cloning drives" class="section-img" width="640" height="437" loading="lazy" />
          </div>
          <div>
            <h2 class="s-heading">Why We Always Clone Drives First</h2>
            <p class="s-body">At Five Star, we <strong>never work directly on original RAID drives</strong>. Instead, we create a sector-by-sector clone of each disk, producing a perfect 1-to-1 image. This ensures your original data remains untouched and fully preserved.</p>
            <p class="s-body">By working only from cloned drives, we can safely rebuild, test, and analyze your RAID array without risking further damage. This is especially important for unstable or degraded disks, where even one more read could cause permanent data loss.</p>
            <p class="s-body">If a drive is physically damaged, we stabilize it in a Class 100 <NuxtLink to="/data-recovery/clean-room-data-recovery">clean room</NuxtLink> and then attempt to image it safely. Once all clones are complete, we reconstruct the RAID using specialized tools — without ever touching the originals. Cloning is our first line of defense in protecting your data. It gives us the flexibility to recover files safely, even from complex or high-risk failures, while ensuring your drives remain exactly as they were when the issue occurred.</p>
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
            <img src="/raid-array-recovery-640.webp"
               srcset="/raid-array-recovery-640.webp 640w, /raid-array-recovery-800.webp 800w, /raid-array-recovery-1280.webp 1280w"
               sizes="(max-width: 640px) 100vw, (max-width: 1024px) 800px, 640px"
               alt="RAID array data recovery process" class="section-img" width="640" height="427" loading="lazy" />
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
        <p class="s-body">Our recovery process handles high-volume data structures, foreign file systems, and partially overwritten drives. This allows us to reconstruct folders, restore file names, and retrieve file trees whenever possible.</p>
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

    <!-- SECTION 10 — Emergency & <NuxtLink to="/expedited-service">Expedited</NuxtLink> -->
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
    <LazyReviewsSection :reviews="reviews" />

    <!-- SECTION 13 — Why Choose -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Why Choose Five Star for RAID Recovery</h2>
        <ul class="content-list">
          <li>We never recover from original drives — every case begins by creating exact 1-to-1 clones to preserve the integrity of your data.</li>
          <li>Our "No-Recovery, No-Charge" policy ensures you only pay if we&#39;re able to successfully retrieve your files.</li>
          <li>Every quote we provide is clear, honest, and upfront — with no hidden charges or surprise fees during the recovery process.</li>
          <li>Physically damaged drives are handled in our certified Class 100 Clean Room to protect sensitive internal components during repair.</li>
          <li>Our engineers are highly trained in advanced RAID configurations, including complex hybrid and custom setups.</li>
          <li>We offer both standard and emergency turnaround options, so you get your critical data back exactly when you need it.</li>
        </ul>
      </div>
    </section>

    <!-- QUOTE FORM -->
    <LazyQuoteFormSection
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
.faq-toggle { font-size: 1.4rem; font-weight: 300; color: #7A5500; flex-shrink: 0; }
.faq-answer { padding: 0 24px 22px; font-size: 0.92rem; color: #4a5568; line-height: 1.75; }
@media (max-width: 900px) { .raid-grid { grid-template-columns: 1fr 1fr; } .two-col-layout, .two-col-layout.reverse { grid-template-columns: 1fr; direction: ltr; } }
@media (max-width: 600px) { .raid-grid { grid-template-columns: 1fr; } }
</style>
