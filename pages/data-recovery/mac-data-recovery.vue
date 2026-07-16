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
                "author": { "@type": "Person", "name": "Jessica M." },
                "datePublished": "2024-11-20",
                "reviewBody": "When my MacBook Pro suddenly wouldn't turn on after a liquid spill, I thought I had lost everything. Five Star Data Recovery performed a full component-level repair and managed to extract all of my important photos, documents, and work files. They explained the entire Mac data recovery process clearly and were upfront about pricing. Highly recommend for anyone with a non-booting MacBook!",
                "name": "Mac Recovery Success",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
              }
            ],
            "priceRange": "$300 - $950"
          },
          {
            "@type": "Service",
            "name": "Mac Data Recovery Services",
            "url": "https://www.fivestardatarecovery.com/data-recovery/mac-data-recovery/",
            "areaServed": [{ "@type": "Country", "name": "United States" }],
            "description": "Professional Mac data recovery for MacBook, iMac, Mac Pro, Mac Mini. Supports T2 chips, APFS, soldered SSDs, M1/M2, Fusion Drives, and liquid-damaged logic boards. Flat-rate pricing, No Data No Charge. Serving Glendale, Los Angeles, and nationwide."
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fivestardatarecovery.com/" },
              { "@type": "ListItem", "position": 2, "name": "Data Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/" },
              { "@type": "ListItem", "position": 3, "name": "Mac Data Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/mac-data-recovery/" }
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Can you recover data from a Mac that won't boot after a macOS update?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. macOS updates can sometimes cause boot failures or file system corruption. We specialize in recovering data from Macs that won't boot after failed updates or system crashes." } },
              { "@type": "Question", "name": "Do you work on both Intel-based and Apple Silicon (M1/M2) Macs?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We recover data from all Mac models, including older Intel-based systems and the latest Apple Silicon (M1 and M2) Macs. Each type has unique recovery challenges, but we're equipped to handle both." } },
              { "@type": "Question", "name": "Can you recover data from a Mac with liquid damage?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Liquid damage can cause short circuits and motherboard failures, making the Mac unbootable. Our engineers specialize in component-level recovery and can often retrieve data even from heavily damaged logic boards." } },
              { "@type": "Question", "name": "Do you offer clean room recovery for Mac hard drives?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. If your Mac uses a traditional spinning hard drive (HDD) and has internal mechanical damage (e.g., clicking sounds), we will perform the recovery inside our Class 100 clean room to ensure maximum data safety." } },
              { "@type": "Question", "name": "Can you recover data from a Mac with FileVault encryption enabled?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we can recover data from FileVault-encrypted Macs as long as you can provide the password or recovery key. Without the encryption credentials, recovery is not possible due to Apple's built-in security protocols." } },
              { "@type": "Question", "name": "Is there a risk of voiding my Apple warranty during data recovery?", "acceptedAnswer": { "@type": "Answer", "text": "In most cases, data recovery involves opening the device or working on internal components, which can void your manufacturer warranty. If data preservation is your priority, we recommend proceeding with recovery first, then addressing any warranty concerns later." } },
              { "@type": "Question", "name": "Can you recover data from a Mac Fusion Drive?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. At Five Star Data Recovery, we specialize in iMac Fusion Drive data recovery. A Fusion Drive stores data across both an SSD and a traditional hard drive, so both parts must be recovered and combined to rebuild the full volume. We start by creating sector-by-sector images of both drives, then use specialized tools to reconstruct the CoreStorage logical volume. This allows us to safely extract your files while keeping your original drives untouched. Whether the failure is logical or hardware-related, we're equipped to handle both." } },
              { "@type": "Question", "name": "Do you offer emergency Mac data recovery services?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. For critical situations, we offer both Expedited Service and Expedited Plus Service, giving you priority turnaround with 24/7 engineer availability." } },
              { "@type": "Question", "name": "My MacBook's Logic Board is dead, can you still recover the data?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, data recovery is often possible even if your MacBook's logic board is dead\u2014though the method depends on the model. For older MacBooks (typically 2015 and earlier) with removable drives, we can physically remove the SSD or hard drive and attempt recovery directly. For newer models (2016 and later), the internal storage consists of NAND flash chips soldered directly onto the logic board. In these cases, recovery requires component-level logic board repair using detailed schematics and advanced micro-soldering techniques to bring the board to a semi-functional state\u2014just enough to extract the data. Please note: this process is strictly for data recovery. The MacBook will not be fully repaired or usable afterward." } },
              { "@type": "Question", "name": "If you repair my Mac's logic board but I can't provide my login password, do I still owe the full balance?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. On newer Mac models with soldered storage, the most difficult part of the entire recovery process is performing the board-level repair needed to restore power to the machine and gain access to the user account. Once our engineers successfully complete that repair, the technical work is done — regardless of what happens next. If you are unable to provide the correct login password at that point, we cannot access or transfer your data, but the full remaining balance of your recovery quote is still owed before the device can be released. We strongly encourage all customers to confirm their login credentials before dropping off their Mac." } },
              { "@type": "Question", "name": "How much does Mac Data Recovery cost?", "acceptedAnswer": { "@type": "Answer", "text": "The cost of Mac data recovery depends on the model and type of failure. Logical Recovery (file system corruption, macOS errors, drives that mount but show no files): $300 flat rate. Removable SSD/HDD Recovery (2015 and earlier models): $300\u2013$650 depending on whether there's logical corruption or hardware-level issues. Soldered NAND/Logic Board Recovery (2016 and newer, including M1/M2): $950 for cases requiring board-level component repair. Deleted File Recovery: $500, which includes a $200 upfront non-refundable labor fee; the balance is only due if recovery is successful and approved. We provide free evaluations in most cases, and you'll always receive a clear quote before proceeding." } },
              { "@type": "Question", "name": "Can you recover deleted files from an M1 MacBook Pro?", "acceptedAnswer": { "@type": "Answer", "text": "In most cases, no. Deleted file recovery from M1 and M2 MacBook Pros is extremely limited due to Apple's hardware-level encryption and how APFS handles deletions. Once a file is deleted on these machines, the data is often immediately overwritten or rendered inaccessible because of how Apple integrates the SSD with the T2 or M-series security architecture. If the MacBook is still functional and files were recently deleted, there may be a very small window of opportunity\u2014but only if the machine hasn't been heavily used since the deletion. Even then, success is rare. Feel free to contact us for a free evaluation to see if your case qualifies." } }
            ]
          }
        ]
      })
    }
  ]
})

useSeoMeta({
  title: 'Mac Data Recovery - Five Star Data Recovery',
  ogTitle: 'Mac Data Recovery - Five Star Data Recovery',
  description: 'Five Star Data Recovery is the premier Mac Data Recovery Company. Our team offers reliable services for Mac to help recover lost files.',
  ogDescription: 'Five Star Data Recovery is the premier Mac Data Recovery Company. Our team offers reliable services for Mac to help recover lost files.',
  ogImage: 'https://www.fivestardatarecovery.com/mac-data-recovery-hero.webp',
})

const trustBadges = [
  { icon: 'clock', text: 'Available 24/7/365' },
  { icon: 'check', text: 'No Data = No Charge' },
  { icon: 'shield', text: '10+ Years in Business' },
  { icon: 'star', text: 'Free Nationwide Shipping' },
]

const reviews = [
  {
    text: "When my MacBook Pro suddenly wouldn&#39;t turn on after a liquid spill, I thought I had lost everything. Five Star Data Recovery performed a full component-level repair and managed to extract all of my important photos, documents, and work files. They explained the entire Mac data recovery process clearly and were upfront about pricing. Highly recommend for anyone with a non-booting MacBook!",
    name: 'Jessica M.',
    location: 'Burbank, CA',
  },
  {
    text: "I spilled coffee on my MacBook Air and it wouldn&#39;t power on afterward. After hearing good things about Five Star Data Recovery, I brought it in. Their engineers performed component-level board repairs and successfully recovered my data. The turnaround time was fast, and the pricing was exactly what they quoted—no surprises. I&#39;m so grateful!",
    name: 'Omar V.',
    location: 'Sherman Oaks, CA',
  },
  {
    text: "My iMac with a Fusion Drive fell off my desk during a home renovation, and it wouldn&#39;t turn on afterward. I thought the data was gone for good. Five Star Data Recovery handled everything from diagnosing the damage to performing a cleanroom-level recovery on the hard drive portion of the Fusion Drive. They were able to recover nearly 100% of my important files. I can&#39;t thank them enough!",
    name: 'Sarah W.',
    location: 'Glendale, CA',
  },
]

const faqs = [
  {
    q: 'Can you recover data from a Mac that won\'t boot after a macOS update?',
    a: 'Yes. macOS updates can sometimes cause boot failures or file system corruption. We specialize in recovering data from Macs that <strong>won&#39;t boot after failed updates or system crashes</strong>.',
  },
  {
    q: 'My MacBook\'s logic board is dead. Can you still recover the data?',
    a: 'Yes, data recovery is often possible even if your MacBook&#39;s logic board is dead — though the method depends on the model.<br><br>For <strong>older MacBooks (typically 2015 and earlier)</strong> with removable drives, we can physically remove the SSD or hard drive and attempt recovery directly from the device.<br><br>For <strong>newer models (2016 and later)</strong>, the internal storage consists of NAND flash chips soldered directly onto the logic board, meaning the data cannot be removed or accessed separately. In these cases, recovery requires <strong>component-level logic board repair</strong>. This involves using detailed schematics and advanced micro-soldering techniques to bring the board to a semi-functional state — just enough to extract the data.<br><br>Please note: this process is strictly for data recovery. The MacBook will not be fully repaired or usable afterward. Our only goal is to retrieve your data safely and efficiently.',
  },
  {
    q: 'If you repair my Mac\'s logic board but I can\'t provide my login password, do I still owe the full balance?',
    a: 'Yes. On newer Mac models (2016 and later) with soldered NAND storage, the most difficult and labor-intensive part of the entire recovery process is performing the board-level component repair required to restore power to the machine — this is what allows our engineers to access the user account and retrieve your data.<br><br>Once we successfully complete that repair and the machine powers on, the core engineering work is done. <strong>If you are unable to provide the correct login password at that point, we cannot access or transfer your files — however, the full remaining balance of your recovery quote is still owed before the device can be released.</strong><br><br>This policy reflects the significant engineering effort completed regardless of account access. We strongly encourage all customers to confirm their login credentials before dropping off their Mac.',
  },
  {
    q: 'How much does Mac Data Recovery Cost?',
    a: 'The cost of Mac data recovery depends on the model of your Mac and the type of failure involved.<br><br><strong>Logical Recovery</strong> (e.g., file system corruption, macOS errors, drives that mount but show no files): <strong>$300 flat rate</strong>. This applies to cases where the internal SSD or hard drive is physically healthy but data is inaccessible.<br><br><strong>Removable SSD/HDD Recovery</strong> (2015 and earlier models): <strong>$300&#8211;$650</strong> depending on whether there&#39;s logical corruption or hardware-level issues.<br><br><strong>Soldered NAND/Logic Board Recovery</strong> (2016 and newer models, including M1/M2 chips): <strong>$950</strong> for cases requiring board-level component repair to access the data.<br><br><strong>Deleted File Recovery: $500</strong>, which includes a <strong>$200 upfront non-refundable labor fee</strong>. The balance is only due if the recovery is successful and approved.<br><br>We provide free evaluations in most cases, and you&#39;ll always receive a clear quote before proceeding.',
  },
  {
    q: 'Do you recover deleted files from an M1 MacBook Pro?',
    a: 'In most cases, <strong>no</strong>. Deleted file recovery from M1 and M2 MacBook Pros is extremely limited due to Apple&#39;s hardware-level encryption and how the file system (APFS) handles deletions. Once a file is deleted on these machines, the data is often immediately overwritten or rendered inaccessible because of how Apple integrates the SSD with the T2 or M-series security architecture.<br><br>If the MacBook is still functional and files were recently deleted, there may be a very small window of opportunity — but only if the machine hasn&#39;t been heavily used since the deletion. Even then, success is rare. We do not currently offer deleted file recovery for M1/M2 MacBooks unless extremely specific conditions are met. If you&#39;re unsure, feel free to contact us for a free evaluation and we&#39;ll let you know if your case qualifies.',
  },
  {
    q: 'Do you work on both Intel-based and Apple Silicon (M1/M2) Macs?',
    a: 'Yes. We recover data from all Mac models, including <strong>older Intel-based systems and the latest Apple Silicon (M1 and M2) Macs</strong>. Each type has unique recovery challenges, but we&#39;re equipped to handle both.',
  },
  {
    q: 'Can you recover data from a Mac with liquid damage?',
    a: 'Absolutely. Liquid damage can cause short circuits and motherboard failures, making the Mac unbootable. Our engineers specialize in <strong>component-level recovery</strong> and can often retrieve data even from heavily damaged logic boards.',
  },
  {
    q: 'Do you offer clean room recovery for Mac hard drives?',
    a: 'Yes. If your Mac uses a traditional spinning hard drive (HDD) and has internal mechanical damage (e.g., clicking sounds), we will perform the recovery inside our <strong>Class 100 clean room</strong> to ensure maximum data safety.',
  },
  {
    q: 'Can you recover data from a Mac with FileVault encryption enabled?',
    a: 'Yes, we can recover data from <strong>FileVault-encrypted Macs</strong> as long as you can provide the password or recovery key. Without the encryption credentials, recovery is not possible due to Apple&#39;s built-in security protocols.',
  },
  {
    q: 'Is there a risk of voiding my Apple warranty during data recovery?',
    a: 'In most cases, data recovery involves opening the device or working on internal components, which can void your manufacturer warranty. If data preservation is your priority, we recommend <strong>proceeding with recovery first</strong>, then addressing any warranty concerns later.',
  },
  {
    q: 'Can you recover data from a Mac Fusion Drive?',
    a: 'Yes. At Five Star Data Recovery, we specialize in <strong>iMac Fusion Drive data recovery</strong>. A Fusion Drive stores data across both an SSD and a traditional hard drive, so both parts must be recovered and combined to rebuild the full volume.<br><br>We start by creating sector-by-sector images of both drives, then use specialized tools to reconstruct the CoreStorage logical volume. This allows us to safely extract your files while keeping your original drives untouched. Whether the failure is logical or hardware-related, we&#39;re equipped to handle both.',
  },
  {
    q: 'Do you offer emergency Mac data recovery services?',
    a: 'Yes. For critical situations, we offer both <strong>Expedited Service</strong> and <strong>Expedited Plus Service</strong>, giving you priority turnaround with 24/7 engineer availability. Visit our Pricing Page for full details.',
  },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">


    <HeroSection
      title="Mac Data Recovery"
      subtitle="Get Your Data Back In No Time."
      description="When your MacBook, iMac, or Mac Mini stops working and your files become inaccessible, trust the professionals at Five Star Data Recovery. We specialize in Mac data recovery for all types of Apple computers and storage devices — including models with T2 chips, APFS file systems, and soldered SSDs.<br><br>Whether you&#39;re dealing with accidental deletion, hardware failure, or a macOS crash, our engineers use safe, proven methods to recover data from Mac systems. Our goal is to retrieve your valuable data — documents, media, creative projects, and more — quickly and securely."
      bgImage="/mac-data-recovery-hero.webp"
      :trustBadges="trustBadges"
    />

    <StatsBar />

    <!-- SECTION 1 — Mac Devices We Recover -->
    <section class="s-white">
      <div class="container">
        <div class="two-col-layout">
          <div>
            <h2 class="s-heading">Mac Devices We Recover Data From</h2>
            <p class="s-body">We provide data recovery Mac services for nearly every type of Apple device, including:</p>
            <ul class="content-list">
              <li>MacBook Air (Intel and M-series)</li>
              <li>MacBook Pro (all models and screen sizes)</li>
              <li>MacBook</li>
              <li>iMac (standard and Retina models)</li>
              <li>Mac Pro</li>
              <li>Mac Mini</li>
              <li>Apple Time Machine backups</li>
              <li>External hard drives formatted for macOS (HFS+, APFS)</li>
            </ul>
            <p class="s-body">No matter what kind of Apple device you&#39;re using, if there&#39;s data on it—we can help recover it.</p>
          </div>
          <div class="section-img-wrap">
            <img src="/mac-imac-macbook-recovery-640.webp" alt="iMac and MacBook data recovery — Apple Mac devices" class="section-img" width="640" height="427" loading="lazy"
               srcset="/mac-imac-macbook-recovery-640.webp 640w, /mac-imac-macbook-recovery-800.webp 800w, /mac-imac-macbook-recovery-1280.webp 1280w"
               sizes="(max-width: 640px) 100vw, (max-width: 1024px) 800px, 640px" />
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2 — Common Causes -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Common Causes of Data Loss on Macs</h2>
        <p class="s-body">Mac devices are known for reliability, but data loss can still happen. Here are some of the most common situations we see:</p>
        <ul class="content-list">
          <li>Accidental file deletion or disk formatting</li>
          <li>File system corruption (HFS+, APFS)</li>
          <li>macOS upgrade failure</li>
          <li>Time Machine backup drive corruption</li>
          <li>No power or startup failure</li>
          <li>Liquid spills on MacBooks</li>
          <li>Physical damage to SSDs or HDDs</li>
          <li>Clicking or beeping internal drives</li>
          <li>Failed Mac hard drive recovery attempts from other services</li>
        </ul>
        <p class="s-body">In many cases, we can recover lost data even when the system is completely non-bootable.</p>
      </div>
    </section>

    <!-- SECTION 3 — Component-Level Recovery -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Specialized Component-Level Recovery for MacBooks</h2>
        <p class="s-body">Most modern MacBooks, especially those with M1 or M2 chips, have their storage soldered to the logic board. This is different from many PCs. This means traditional data recovery methods won&#39;t work, and there&#39;s no simple way to &ldquo;remove the drive.&rdquo;</p>
        <p class="s-body">At Five Star Data Recovery, we specialize in component-level Mac data recovery. Our team has the skills and tools to diagnose, repair, and extract data from logic boards when needed. This type of recovery needs skilled micro-soldering and special Apple tools. Few labs in the U.S. provide these services.</p>
        <p class="s-body">If your Mac has no power, was liquid damaged, or has a failed onboard SSD, don&#39;t give up hope. Our recovery process can help recover data from Mac hard drive systems even in complex chip-level scenarios.</p>
      </div>
    </section>

    <!-- SECTION 4 — Recovery Process -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Our Mac Data Recovery Process</h2>
        <p class="s-body">We&#39;ve developed a safe, transparent, and proven process for recovering data from Mac devices:</p>
        <ul class="content-list">
          <li><strong>Free Diagnostic</strong> — We start with a full evaluation of your Mac or external drive. We determine the cause of failure and provide a quote before starting.</li>
          <li><strong>Drive Imaging or Board Repair</strong> — Depending on the situation, we either image the drive or perform component-level repair on logic boards to access data.</li>
          <li><strong>Deep Scan for Recoverable Data</strong> — We use professional recovery tools to do a deep scan. This helps us find lost partitions, deleted files, and corrupted volumes.</li>
          <li><strong>File Verification and Testing</strong> — We test recovered files for integrity and preview the results for your review.</li>
          <li><strong>Secure Return of Your Data</strong> — We return your data on a new drive or USB—never on the original failing drive.</li>
        </ul>
        <p class="s-body">Whether you need help recovering files from Time Machine backups or need full-scale Mac hard drive recovery, our process ensures the highest success rate possible.</p>
      </div>
    </section>

    <!-- SECTION 5 — File Types -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">What File Types Can Be Recovered?</h2>
        <p class="s-body">We recover nearly all file types commonly used on macOS systems, including:</p>
        <ul class="content-list">
          <li>Photos (JPG, HEIC, RAW, TIFF)</li>
          <li>Videos (MOV, MP4, ProRes, Final Cut Pro files)</li>
          <li>Documents (Pages, Keynote, Numbers, DOCX, PDF)</li>
          <li>Music (Logic Pro, GarageBand, WAV, MP3)</li>
          <li>Email and archive files</li>
          <li>Time Machine sparse bundles and disk images</li>
          <li>Application and library files</li>
        </ul>
        <p class="s-body">From personal memories to creative projects, we help recover lost data for students, professionals, and enterprise users. Whether you&#39;re editing in Final Cut Pro, producing music in Logic, or managing documents in Pages or Word, our recovery process ensures your most important files — no matter the type — have the best chance of being restored.</p>
      </div>
    </section>

    <!-- SECTION 6 — External Drives -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Recovering Data from Mac External Hard Drives</h2>
        <p class="s-body">Many Mac users rely on <NuxtLink to="/data-recovery/external-hard-drive-data-recovery" class="inline-link">external hard drives</NuxtLink> for extra storage, Time Machine backups, and transferring large media files. External drives can fail, too. This can happen if someone drops them, disconnects them the wrong way, or exposes them to power surges.</p>
        <p class="s-body">We recover data from all kinds of external storage devices for macOS. This includes USB, Thunderbolt, and FireWire drives. We work with file systems like HFS+, APFS, and exFAT. Common issues we see include:</p>
        <ul class="content-list">
          <li>Drives not mounting or recognized on Mac</li>
          <li>&ldquo;Disk not ejected properly&rdquo; errors leading to corruption</li>
          <li>Partitions appearing as unallocated or RAW</li>
          <li>Clicking or non-spinning external drives</li>
          <li>Time Machine volumes that no longer open or show backups</li>
        </ul>
        <p class="s-body">Our recovery process ensures your external drive is safely imaged, deeply scanned, and reconstructed — even if it&#39;s been physically damaged. If the data matters, we can help recover it — even when the system says it&#39;s gone.</p>
      </div>
    </section>

    <!-- SECTION 7 — Why Choose -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Why Choose Five Star Data Recovery?</h2>
        <p class="s-body">When it comes to recovering files from Mac devices, experience matters. Here&#39;s why customers across the U.S. trust Five Star:</p>
        <ul class="content-list">
          <li>Expert knowledge of Apple file systems (APFS, HFS+, encrypted drives)</li>
          <li>Component-level micro-soldering and SSD chip-off capabilities</li>
          <li>Transparent pricing and no data, no charge policy</li>
          <li>Secure in-house recovery lab — no outsourcing</li>
          <li>Free round-trip nationwide shipping</li>
          <li>High success rates — even with complex Mac failures</li>
          <li>Lightning-Fast Response Time</li>
          <li>Hundreds of 5-Star Reviews</li>
          <li>10+ Years in Business</li>
          <li>Advanced Tools &amp; Cleanroom Lab</li>
        </ul>
        <p class="s-body">We&#39;re one of the few labs that can handle M-series MacBooks, failed Time Machine drives, and heavily corrupted volumes with confidence.</p>
      </div>
    </section>

    <!-- REVIEWS -->
    <LazyReviewsSection :reviews="reviews" />

    <!-- SECTION 8 — Nationwide -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Nationwide Mac Data Recovery Free Round Trip Shipping</h2>
        <p class="s-body">Even though our recovery lab is located in California, we serve clients all over the country. Our free round-trip shipping makes it easy to get your device to us securely. We will send you a prepaid shipping label and instructions. After we recover your data, we will return it on a new drive for free.</p>
        <p class="s-body">You don&#39;t need to leave your home or office to work with one of the most trusted names in Mac data recovery. Our nationwide service is designed for convenience. Whether you&#39;re in New York, Miami, Chicago, or a remote area — you&#39;ll get the same expert-level recovery without needing to find a local provider.</p>
      </div>
    </section>

    <!-- QUOTE FORM -->
    <LazyQuoteFormSection
      description="From a liquid-damaged MacBook Air to a failed Fusion Drive iMac — our engineers work at the chip and logic board level to recover data that other labs can&#39;t reach. We support every Mac model including M1, M2, T2-chip models, and everything in between."
      bullet1="All Mac models — MacBook, iMac, Mac Pro, Mac Mini"
      bullet2="M1/M2, T2 chip, soldered SSD, Fusion Drive, FileVault"
      bullet3="No Data, No Charge — free diagnostic included"
      closing="Don&#39;t power it on or run Disk Utility. Fill out the form and let our Mac recovery specialists evaluate your device for free."
      bgImage="/mac-data-recovery-hero.webp"
    />

    <!-- CONTACT BAND -->
    <section class="s-contact-band contact-band-bg">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Start Your Mac Recovery Today</h2>
        </div>
        <p class="contact-body-text">If you need to recover data from a Mac hard drive, MacBook, or external drive, don&#39;t wait. The longer you delay, the more complicated the recovery may become. Contact Five Star Data Recovery today for a free diagnostic or start your case online.</p>
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
.s-contact-band { background: #0f1623; padding: 44px 0; border-top: 3px solid #C9A84C; border-bottom: 3px solid #C9A84C; }
.contact-band-bg { background: linear-gradient(to right, rgba(15,22,35,0.92) 0%, rgba(15,22,35,0.75) 60%, rgba(15,22,35,0.5) 100%), url('/mac-imac-macbook-recovery.webp') center center / cover no-repeat !important; }
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
