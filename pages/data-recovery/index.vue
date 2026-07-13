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
            "priceRange": "$$",
            "areaServed": [{ "@type": "Country", "name": "United States" }],
            "url": "https://www.fivestardatarecovery.com/",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "498"
            },
            "review": {
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": "5" },
              "author": { "@type": "Person", "name": "Michael D. (Los Angeles)" },
              "reviewBody": "Absolutely amazing service. I thought I lost 10 years of family photos after my hard drive died, but these guys brought everything back. Super professional and quick turnaround."
            }
          },
          {
            "@type": "Service",
            "name": "Data Recovery Services",
            "url": "https://www.fivestardatarecovery.com/data-recovery/",
            "areaServed": [{ "@type": "Country", "name": "United States" }],
            "description": "Professional Data Recovery Services specializing in hard drive recovery, SSD recovery, RAID recovery, and more. Free diagnostics and flat-rate pricing. Serving clients nationwide with mail-in and walk-in service options."
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fivestardatarecovery.com/" },
              { "@type": "ListItem", "position": 2, "name": "Data Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/" }
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "What does a data recovery lab do?", "acceptedAnswer": { "@type": "Answer", "text": "A data recovery lab specializes in retrieving lost files from storage devices that have failed, become unreadable, or suffered corruption. Using advanced hardware and custom software tools, engineers work on drives that can't be accessed through normal computer methods." } },
              { "@type": "Question", "name": "I'm not near your location. Can I still use your services?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We offer a mail-in recovery option with free round-trip shipping anywhere in the United States. Just fill out our form and we'll send you a prepaid label to ship your device to us securely." } },
              { "@type": "Question", "name": "How does your fastest recovery option work for emergencies?", "acceptedAnswer": { "@type": "Answer", "text": "Our Expedited Plus Service puts your recovery at the top of our priority list with non-stop engineer focus, day and night, until the process is complete. This is ideal for businesses or individuals with time-sensitive data loss." } },
              { "@type": "Question", "name": "Are there any hidden costs during the recovery process?", "acceptedAnswer": { "@type": "Answer", "text": "No. After diagnosing your case, we'll provide a clear, flat-rate quote upfront. The only additional fee would be if you select an expedited service like Expedited Plus." } },
              { "@type": "Question", "name": "Is there a way to check if my data is still recoverable before starting?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Before we begin any data recovery work, we always provide an initial quote after a free phone or email consultation. During this consultation, we'll ask detailed questions about your device, its failure symptoms, and any previous recovery attempts. Once you approve the quoted price range, we'll proceed with the diagnostic and recovery process. If we're able to successfully recover your data within the pricing we originally quoted, we'll automatically move forward with the recovery without requiring further approval\u2014this helps avoid unnecessary delays. If, during the process, we discover that the issue is different and falls into a higher recovery category, we'll contact you first with an updated quote before doing anything further. This approach ensures pricing transparency and keeps you fully informed throughout the entire process." } },
              { "@type": "Question", "name": "Is there a risk of further damage to my device during the recovery process?", "acceptedAnswer": { "@type": "Answer", "text": "No. At Five Star Data Recovery, we never work directly on your original storage device when performing recovery. We first create a sector-by-sector clone of your drive and conduct all recovery work on the clone to ensure the integrity of your original media." } },
              { "@type": "Question", "name": "Can I provide my own transfer drive for the recovered data?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Once your recovery is complete, you're welcome to provide your own external hard drive, SSD, or USB drive for us to transfer the recovered files. If you don't have one, we also offer new transfer drives for purchase." } },
              { "@type": "Question", "name": "How do I know if my data is actually recoverable?", "acceptedAnswer": { "@type": "Answer", "text": "Every case starts with a free consultation and diagnostic evaluation. Based on the symptoms and test results, we'll give you an honest assessment of the likelihood of recovery before you commit to the process." } },
              { "@type": "Question", "name": "Do you recover data from devices that have suffered water or fire damage?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we specialize in physically damaged storage devices, including those affected by water exposure, flooding, or even fire. These cases often require clean room service and component-level repairs." } },
              { "@type": "Question", "name": "What happens if my recovery case is extremely urgent?", "acceptedAnswer": { "@type": "Answer", "text": "For time-sensitive cases, we offer Expedited and Expedited Plus services. These options prioritize your case ahead of others and can dramatically reduce turnaround time\u2014even providing 24/7 service if needed." } },
              { "@type": "Question", "name": "Is there a size limit on the drives you work with?", "acceptedAnswer": { "@type": "Answer", "text": "No. We can recover data from drives as small as a USB flash drive to multi-terabyte enterprise RAID systems. Whether your storage device is 2GB or 20TB, we have the tools to handle it." } },
              { "@type": "Question", "name": "What payment methods do you accept?", "acceptedAnswer": { "@type": "Answer", "text": "We accept all major credit cards, debit cards, and cash payments. For larger recovery projects, we also offer in-house payment plans with no credit check. Please contact us for details." } },
              { "@type": "Question", "name": "Can you recover data from older hard drives and legacy storage formats?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! We regularly perform data recovery on older hard drive models, including IDE hard drives, early-generation SATA drives, and legacy internal laptop or desktop drives. If you have an older storage device and aren't sure if it's recoverable, contact us for a free consultation." } },
              { "@type": "Question", "name": "How should I package my device if I'm shipping it to you?", "acceptedAnswer": { "@type": "Answer", "text": "We recommend using anti-static materials and plenty of cushioning to prevent additional damage during transit. Once you fill out our Mail-In Recovery Form, we'll provide a prepaid shipping label along with detailed packaging instructions." } },
              { "@type": "Question", "name": "What if my drive was opened by another company before bringing it to you?", "acceptedAnswer": { "@type": "Answer", "text": "If the drive's cover (where the platters are located) was opened by another lab or repair shop before arriving here, a non-refundable evaluation fee will apply due to the added complexity and risk involved in such cases." } },
              { "@type": "Question", "name": "How much does Data Recovery Cost?", "acceptedAnswer": { "@type": "Answer", "text": "The cost of data recovery depends on several factors, including the type of device, the nature of the failure, and the complexity of the recovery process. For example, recovering data from a hard drive with logical issues is generally less expensive than performing a chip-off recovery on a physically damaged SD card or USB drive.\n\nAt Five Star Data Recovery, our pricing is flat-rate and transparent, with no hidden fees. We also offer a free evaluation in most cases, so you'll know exactly what to expect before moving forward. For certain recovery types\u2014like deleted file recovery or expedited services\u2014there may be an upfront labor fee, which will be explained before any work begins.\n\nTo see a full breakdown of our rates by device type and service level, please visit our Data Recovery Pricing Page at https://www.fivestardatarecovery.com/data-recovery-pricing/." } }
            ]
          }
        ]
      })
    }
  ]
})

useSeoMeta({
  title: 'Data Recovery Services - Five Star Data Recovery',
  ogTitle: 'Data Recovery Services - Five Star Data Recovery',
  description: 'Need help recovering data from a hard drive not being recognized? Our team offers expert Data Recovery Services with fast turnaround times.',
  ogDescription: 'Need help recovering data from a hard drive not being recognized? Our team offers expert Data Recovery Services with fast turnaround times.',
  ogImage: 'https://www.fivestardatarecovery.com/data-recovery-clean-room-technician-glendale-ca.jpg',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  ogImageAlt: 'Data Recovery Services - Five Star Data Recovery',
})

const services = [
  {
    icon: '💾',
    title: 'Hard Drive Recovery',
    text: 'We recover data from all HDD brands and models — clicking drives, firmware failures, bad sectors, and more.',
    href: '/data-recovery/hard-drive-recovery',
  },
  {
    icon: '⚡',
    title: 'SSD Recovery',
    text: 'Specialized tools for SATA, NVMe, and mSATA solid-state drives — including controller failures and NAND damage.',
    href: '/data-recovery/ssd-data-recovery',
  },
  {
    icon: '🖥️',
    title: 'RAID Recovery',
    text: 'We rebuild and recover from all RAID configurations (RAID 0, 1, 5, 6, 10) and NAS/server arrays.',
    href: '/data-recovery/raid-data-recovery',
  },
  {
    icon: '💻',
    title: 'Laptop Recovery',
    text: 'Crashed, dropped, or water-damaged laptop? We recover data from all laptop drive types.',
    href: '/data-recovery/laptop-data-recovery',
  },
  {
    icon: '🖥️',
    title: 'Desktop Recovery',
    text: 'From accidental deletion to complete drive failure — we recover files from desktop HDDs and SSDs.',
    href: '/data-recovery/desktop-data-recovery',
  },
  {
    icon: '📦',
    title: 'External HDD Recovery',
    text: 'WD My Passport, Seagate Backup Plus, LaCie, G-Drive — we specialize in external hard drive recovery.',
    href: '/data-recovery/external-hard-drive-data-recovery',
  },
  {
    icon: '🍎',
    title: 'Mac / iMac Recovery',
    text: 'Recovery for all Apple machines — MacBook Pro, MacBook Air, iMac, Mac Mini, and Mac Pro.',
    href: '/data-recovery/mac-data-recovery',
  },
  {
    icon: '📱',
    title: 'iPhone Recovery',
    text: 'Component-level iPhone data recovery for devices with water damage, screen damage, or boot failures.',
    href: '/data-recovery/iphone-data-recovery',
  },
  {
    icon: '🔌',
    title: 'USB Flash Drive',
    text: 'Chip-off and logical recovery for USB flash drives of all brands and capacities.',
    href: '/data-recovery/usb-data-recovery',
  },
  {
    icon: '📷',
    title: 'SD Card Recovery',
    text: 'Camera, drone, GoPro, or phone SD cards — we recover photos, videos, and all file types.',
    href: '/data-recovery/sd-card-data-recovery',
  },
  {
    icon: '🌐',
    title: 'NAS Recovery',
    text: 'Synology, QNAP, Drobo, and custom NAS arrays — multi-drive recovery handled with precision.',
    href: '/data-recovery/nas-data-recovery',
  },
  {
    icon: '🎥',
    title: 'Video File Repair',
    text: 'Corrupted or unplayable footage from cameras, drones, and professional video equipment.',
    href: '/data-recovery/video-file-repair',
  },
]

const brands = [
  { label: 'Western Digital', href: '/data-recovery/western-digital-data-recovery' },
  { label: 'Seagate', href: '/data-recovery/seagate-data-recovery' },
  { label: 'Samsung', href: '/data-recovery/samsung-data-recovery' },
  { label: 'LaCie', href: '/data-recovery/lacie-data-recovery' },
  { label: 'Toshiba', href: '/data-recovery/toshiba-data-recovery' },
  { label: 'Hitachi', href: '/data-recovery/hitachi-data-recovery' },
]

const problems = [
  { label: 'Hard Drive Clicking', href: '/hard-drive-clicking' },
  { label: "Drive Won't Power On", href: '/drive-doesnt-power-on' },
  { label: 'Dropped Hard Drive', href: '/data-recovery/dropped-hard-drive' },
  { label: 'Bad Sectors', href: '/data-recovery/bad-sectors' },
  { label: 'Drive Not Showing Up', href: '/data-recovery/hard-drive-not-showing-up' },
  { label: 'Deleted Files', href: '/data-recovery/deleted-files' },
]

const special = [
  { label: 'Clean Room Recovery', href: '/data-recovery/clean-room-data-recovery' },
  { label: 'Mail-In Service', href: '/data-recovery/data-recovery-mail-in-service' },
  { label: 'Express Drop-Off', href: '/data-recovery/express-drop-off-form' },
  { label: 'Free Quote', href: '/data-recovery/free-data-recovery-quote' },
  { label: 'Expedited Service', href: '/expedited-service' },
  { label: 'Expedited Service Plus', href: '/expedited-service-plus' },
]

const steps = [
  { num: '1', title: 'Drop Off or Mail In Your Drive', text: 'Visit our Glendale lab for a quick drop-off, or securely mail your device using our prepaid shipping label — whichever is more convenient for you.' },
  { num: '2', title: 'Receive a Free Diagnosis', text: 'Our team evaluates your device and provides a detailed diagnosis along with an initial quote — completely free of charge and with no obligation to proceed.' },
  { num: '3', title: 'Engineers Begin Recovery', text: 'We carefully begin the recovery process using advanced tools and cleanroom procedures for physically damaged media.' },
  { num: '4', title: 'Review Recovered Files', text: "After recovery is complete, you'll receive a detailed file list to review and confirm everything important has been successfully recovered." },
  { num: '5', title: 'Receive Your Data', text: "Once approved, we securely transfer your data to a new drive and return it via pickup or insured shipping — ready for immediate use." },
]

const faqs = [
  {
    q: '1. How much does Data Recovery Cost?',
    a: `The cost of data recovery depends on several factors, including the <strong>type of device</strong>, the <strong>nature of the failure</strong>, and the <strong>complexity of the recovery process</strong>. For example, recovering data from a hard drive with logical issues is generally less expensive than performing a chip-off recovery on a physically damaged SD card or USB drive.<br><br><em>Five Star Data Recovery</em>, our pricing is <strong>flat-rate and transparent</strong>, with no hidden fees. We also offer a <strong>free evaluation</strong> in most cases, so you’ll know exactly what to expect before moving forward. For certain recovery types—like deleted file recovery or expedited services—there may be an upfront labor fee, which will be explained before any work begins.<br><br>To see a full breakdown of our rates by device type and service level, please visit our <a href="/data-recovery-service-pricing" class="faq-link"><strong>Data Recovery Pricing Page</strong></a>.<br><br>
<table class="faq-table">
<thead><tr><th>Device / Service</th><th>Flat Rate Price</th></tr></thead>
<tbody>
<tr><td>Hard Drive Data Recovery (SATA)</td><td>$300.00 – $800.00</td></tr>
<tr><td>External USB 3.0/USB C Hard Drives (WD, SanDisk, G-Drive)</td><td>$600.00</td></tr>
<tr><td>SD Card Data Recovery (Logical)</td><td>$300.00</td></tr>
<tr><td>SD Card Chip-Off / Monolith Recovery</td><td>$950.00</td></tr>
<tr><td>USB Flash Drive Recovery</td><td>$300.00 – $950.00</td></tr>
<tr><td>iPhone Data Recovery (Component Level)</td><td>$950.00</td></tr>
<tr><td>RAID Data Recovery</td><td>Starting at $300/drive</td></tr>
<tr><td>Deleted File Recovery (Add-On)</td><td>$500.00 ($200 upfront)</td></tr>
<tr><td>Expedited Service (Business Hours)</td><td>+$200.00</td></tr>
<tr><td>Expedited Plus (Nights/Weekends)</td><td>+$500.00</td></tr>
</tbody>
</table>
<em class="faq-note">Note: All prices are flat rate. No data = no charge (unless noted).</em>`
  },
  {
    q: '2. What does a data recovery lab do?',
    a: 'A data recovery lab specializes in retrieving lost files from storage devices that have failed, become unreadable, or suffered corruption. Using advanced hardware and custom software tools, engineers work on drives that can’t be accessed through normal computer methods.'
  },
  {
    q: '3. I’m not near your location. Can I still use your services?',
    a: 'Absolutely. We offer a <a href="/data-recovery/data-recovery-mail-in-service" class="faq-link"><strong>mail-in recovery option with free round-trip shipping anywhere in the United States</strong></a>. Just fill out our form and we’ll send you a prepaid label to ship your device to us securely.'
  },
  {
    q: '4. How does your fastest recovery option work for emergencies?',
    a: 'Our <a href="/expedited-service-plus" class="faq-link"><strong>Expedited Plus Service</strong></a> puts your recovery at the top of our priority list with <strong>non-stop engineer focus</strong>, day and night, until the process is complete. This is ideal for businesses or individuals with time-sensitive data loss.'
  },
  {
    q: '5. Are there any hidden costs during the recovery process?',
    a: 'No. After diagnosing your case, we’ll provide a clear, <strong>flat-rate quote upfront</strong>. The only additional fee would be if you select an expedited service like <strong>Expedited Plus</strong>.'
  },
  {
    q: '6. Is there a way to check if my data is still recoverable before starting?',
    a: 'Yes. Before we begin any data recovery work, we always provide an <strong>initial quote after a free phone or email consultation</strong>. During this consultation, we’ll ask detailed questions about your device, its failure symptoms, and any previous recovery attempts.<br><br>Once you approve the quoted price range, we’ll proceed with the diagnostic and recovery process. If we’re able to successfully recover your data <strong>within the pricing we originally quoted</strong>, we’ll automatically move forward with the recovery without requiring further approval—this helps avoid unnecessary delays.<br><br>If, during the process, we discover that the issue is different and falls into a higher recovery category, we’ll contact you first with an updated quote before doing anything further.<br><br>This approach ensures <strong>pricing transparency</strong> and keeps you fully informed throughout the entire process.'
  },
  {
    q: '7. Is there a risk of further damage to my device during the recovery process?',
    a: 'No. At Five Star Data Recovery, we never work directly on your original storage device when performing recovery. We first create a sector-by-sector clone of your drive and conduct all recovery work on the clone to ensure the integrity of your original media.'
  },
  {
    q: '8. Can I provide my own transfer drive for the recovered data?',
    a: 'Absolutely. Once your recovery is complete, you’re welcome to provide your own external hard drive, SSD, or USB drive for us to transfer the recovered files. If you don’t have one, we also offer new transfer drives for purchase.'
  },
  {
    q: '9. How do I know if my data is actually recoverable?',
    a: 'Every case starts with a free consultation and diagnostic evaluation. Based on the symptoms and test results, we’ll give you an honest assessment of the likelihood of recovery before you commit to the process.'
  },
  {
    q: '10. Do you recover data from devices that have suffered water or fire damage?',
    a: 'Yes, we specialize in physically damaged storage devices, including those affected by water exposure, flooding, or even fire. These cases often require clean room service and component-level repairs.'
  },
  {
    q: '11. What happens if my recovery case is extremely urgent?',
    a: 'For time-sensitive cases, we offer <a href="/expedited-service" class="faq-link"><strong>Expedited</strong></a> and <a href="/expedited-service-plus" class="faq-link"><strong>Expedited Plus</strong></a> services. These options prioritize your case ahead of others and can dramatically reduce turnaround time—even providing 24/7 service if needed.'
  },
  {
    q: '12. Is there a size limit on the drives you work with?',
    a: 'No. We can recover data from drives as small as a USB flash drive to multi-terabyte enterprise RAID systems. Whether your storage device is 2GB or 20TB, we have the tools to handle it.'
  },
  {
    q: '13. What payment methods do you accept?',
    a: 'We accept all major credit cards, debit cards, and cash payments. For larger recovery projects, we also offer <strong>in-house payment plans</strong> with no credit check. Please contact us for details.'
  },
  {
    q: '14. Can you recover data from older hard drives and legacy storage formats?',
    a: 'Yes! We regularly perform data recovery on older hard drive models, including <strong>IDE hard drives</strong>, <strong>early-generation SATA drives</strong>, and legacy internal laptop or desktop drives. If you have an older storage device and aren’t sure if it’s recoverable, contact us for a free consultation.'
  },
  {
    q: '15. How should I package my device if I’m shipping it to you?',
    a: 'We recommend using anti-static materials and plenty of cushioning to prevent additional damage during transit. Once you fill out our Mail-In Recovery Form, we’ll provide a <strong>prepaid shipping label</strong> along with detailed packaging instructions.'
  },
  {
    q: '16. What if my drive was opened by another company before bringing it to you?',
    a: 'If the drive’s cover (where the platters are located) was opened by another lab or repair shop before arriving here, a non-refundable evaluation fee will apply due to the added complexity and risk involved in such cases.'
  },
]

const reviews = [
  {
    text: '“After my computer crashed unexpectedly, I thought I had lost all my important documents and photos. Five Star Data Recovery walked me through the process, kept me updated, and recovered everything I needed. Their flat-rate pricing and no data, no charge policy made the entire experience stress-free.”',
    name: 'Gregory T.',
    location: 'Los Angeles, CA'
  },
  {
    text: '“The level of professionalism here is unmatched. I had a failed external hard drive with thousands of work files on it. Other places gave me the runaround, but Five Star provided a free consultation and delivered results faster than I expected. Highly recommended for anyone dealing with data loss.”',
    name: 'Leo M',
    location: 'Pasadena, CA'
  },
  {
    text: '“What stood out to me most was the honesty and transparency. From the free diagnostic to the final recovery, everything was explained in detail. I knew exactly what to expect, and there were no hidden fees. They even provided a detailed file list before finalizing the recovery.”',
    name: 'Torey M.',
    location: 'Las Vegas, NV'
  },
]

const openFaq = ref<number | null>(null)
const videoClicked = ref(false)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <HeroSection
      title="Professional Data Recovery Services"
      subtitle="Get Your Data Back In No Time."
      description="Losing access to your photos, videos, or work files can feel overwhelming. Whether it's a failed hard drive, damaged phone, or broken USB stick, Five Star Data Recovery is here to help. Our lab handles everything from corrupted files to failed external hard drives. We offer expert, in-house data recovery services to restore your most important data—quickly, safely, and affordably."
      bgImage="/data-recovery-hero.jpg"
      :trustBadges="[
        { icon: 'clock', text: 'Available 24/7/365' },
        { icon: 'check', text: 'No Data = No Charge' },
        { icon: 'shield', text: '10+ Years in Business' },
        { icon: 'star', text: 'Free Nationwide Shipping' },
      ]"
    />

    <StatsBar />

    <!-- COMMON REASONS SECTION -->
    <section class="s-white">
      <div class="container reasons-layout">
        <div class="reasons-copy">
          <h2 class="reasons-heading">Common Reasons You May Need Data Recovery</h2>
          <p class="reasons-intro">Data loss can happen when you least expect it. Some of the most common causes include:</p>
          <ul class="reasons-list">
            <li>Accidental deletion of important files</li>
            <li>Reformatting the drive without backup</li>
            <li>Virus or ransomware attacks</li>
            <li>Failed iOS or system updates</li>
            <li>Drops, spills, or other physical damage</li>
            <li>Electrical surges or overheating</li>
            <li>Crashes or corruption caused by a failed operating system update</li>
          </ul>
          <p class="reasons-body">You still have options if your file system becomes corrupted or you work with damaged drives.</p>
          <p class="reasons-body">Our team can recover data quickly and professionally—even from completely dead devices.</p>
        </div>
        <div class="reasons-image">
          <img src="/common-reasons-data-recovery-640.webp"
               srcset="/common-reasons-data-recovery-480.webp 480w, /common-reasons-data-recovery-640.webp 640w, /common-reasons-data-recovery-800.webp 800w, /common-reasons-data-recovery-1280.webp 1280w"
               sizes="(max-width: 640px) 100vw, (max-width: 1024px) 800px, 640px"
               alt="Data recovery technician working on hard drive with blue gloves"
               class="reasons-img" width="640" height="427" loading="lazy" />
        </div>
      </div>
    </section>

    <!-- SERVICES GRID -->
    <section class="s-white">
      <div class="container">
        <div class="section-label center">What We Recover</div>
        <h2 class="s-heading center">Data Recovery for Every Device Type</h2>
        <p class="s-intro center">It doesn't matter if you are a student, a small business owner, a photographer, or an IT worker — we can help. Our team works with care, precision, and complete confidentiality.</p>
        <div class="services-grid">
          <NuxtLink v-for="svc in services" :key="svc.href" :to="svc.href" class="service-card">
            <div class="svc-icon">{{ svc.icon }}</div>
            <h3 class="svc-title">{{ svc.title }}</h3>
            <p class="svc-body">{{ svc.text }}</p>
            <span class="svc-link">Learn more →</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- BY BRAND + BY PROBLEM + SPECIAL -->
    <section class="s-grey">
      <div class="container three-col">
        <div class="ref-col">
          <div class="ref-col-header">Recovery by Brand</div>
          <NuxtLink v-for="b in brands" :key="b.href" :to="b.href" class="ref-link">
            <span class="ref-dot">›</span>{{ b.label }}
          </NuxtLink>
        </div>
        <div class="ref-col">
          <div class="ref-col-header">Recovery by Problem</div>
          <NuxtLink v-for="p in problems" :key="p.href" :to="p.href" class="ref-link">
            <span class="ref-dot">›</span>{{ p.label }}
          </NuxtLink>
        </div>
        <div class="ref-col">
          <div class="ref-col-header">Special Services</div>
          <NuxtLink v-for="s in special" :key="s.href" :to="s.href" class="ref-link">
            <span class="ref-dot">›</span>{{ s.label }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- WHY CHOOSE US — white -->
    <section class="s-white">
      <div class="container asym-layout">
        <div class="asym-minor">
          <div class="section-label">Why Choose Us</div>
          <h2 class="s-heading">Trusted by Thousands of Customers Nationwide</h2>
          <p class="s-body">At Five Star Data Recovery, we offer flat-rate pricing for all of our data recovery services. No need to wonder how much it's going to cost. Simply visit our pricing page for details — never any bait-and-switch gimmicks.</p>
          <div class="why-list">
            <div class="why-item">
              <div class="why-icon">🛡</div>
              <div>
                <strong class="why-title">No Data = No Charge</strong>
                <p class="why-body">If we aren't able to recover your data or you're not 100% satisfied with the results, you can decline the recovery and pay nothing (most cases).</p>
              </div>
            </div>
            <div class="why-item">
              <div class="why-icon">💰</div>
              <div>
                <strong class="why-title">Flat Rate Pricing</strong>
                <p class="why-body">All prices are upfront and transparent. Pricing is flat-rate depending on the exact issue with your drive. No hidden fees, ever.</p>
              </div>
            </div>
            <div class="why-item">
              <div class="why-icon">🔬</div>
              <div>
                <strong class="why-title">Top Notch Engineers</strong>
                <p class="why-body">All of our engineers have received the highest level of training — qualified to handle all types of logical and clean room recoveries.</p>
              </div>
            </div>
            <div class="why-item">
              <div class="why-icon">⭐</div>
              <div>
                <strong class="why-title">Five Star Service</strong>
                <p class="why-body">We take pride in providing only the best customer service possible. Five Star is more than just a name — it's our standard.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="asym-major">
          <img src="/hard-drive-recovery-service-los-angeles-1080.webp"
               srcset="/hard-drive-recovery-service-los-angeles-480.webp 480w, /hard-drive-recovery-service-los-angeles-640.webp 640w, /hard-drive-recovery-service-los-angeles-800.webp 800w, /hard-drive-recovery-service-los-angeles-1080.webp 1080w, /hard-drive-recovery-service-los-angeles-1400.webp 1400w"
               sizes="(max-width: 640px) 100vw, (max-width: 1024px) 800px, 1080px"
               alt="Data recovery lab Glendale CA" class="rounded-img" width="1080" height="486" loading="lazy" />
          <div class="img-stat-badge">
            <span class="stat-num">21,000+</span>
            <span class="stat-label">Successful Recoveries</span>
          </div>
        </div>
      </div>
    </section>

    <!-- SECURE + TIPS TWO-CARD SECTION -->
    <section class="s-white">
      <div class="container two-card-grid">

        <div class="info-card">
          <h3 class="info-card-heading">Secure, Confidential, and Professional Data Recovery</h3>
          <p class="info-card-intro">We understand that your data can be personal, private, or mission-critical. That’s why we:</p>
          <ul class="info-card-list">
            <li>Never outsource or ship your device</li>
            <li>Work exclusively in our secure, in-house facility</li>
            <li>Delete your recovered files from our system after delivery</li>
            <li>Offer NDAs for sensitive projects upon request</li>
          </ul>
          <p class="info-card-outro">Your trust is as important as your files—and we protect both.</p>
        </div>

        <div class="info-card">
          <h3 class="info-card-heading">Tips to Avoid Permanent Data Loss</h3>
          <p class="info-card-intro">While we’re here to help, we also want to help you prevent future issues. Follow these best practices:</p>
          <ul class="info-card-list">
            <li>Always back up important data (cloud + physical copy)</li>
            <li>Stop using a failing device immediately</li>
            <li>Don’t unplug a drive during file transfers</li>
            <li>Look out for early signs like freezing or clicking</li>
            <li>Contact a professional data recovery team before attempting DIY software or repair Early action can dramatically increase the chance of full recovery.</li>
          </ul>
          <p class="info-card-outro">Your trust is as important as your files—and we protect both.</p>
        </div>

      </div>
    </section>

    <!-- PROCESS — grey -->
    <section class="s-grey">
      <div class="container">
        <div class="section-label center">Our Process</div>
        <h2 class="s-heading center">How Our Recovery Process Works</h2>
        <p class="s-intro center">Our data recovery process is built around security, transparency, and peace of mind. From start to finish, we keep you informed with clear updates at every stage.</p>
        <div class="process-track">
          <div v-for="(step, i) in steps" :key="step.num" class="process-node">
            <div class="process-circle">{{ step.num }}</div>
            <div v-if="i < steps.length - 1" class="process-connector" />
            <h3 class="process-title">{{ step.title }}</h3>
            <p class="process-body">{{ step.text }}</p>
          </div>
        </div>
        <div class="guarantee-strip">
          <span class="guarantee-icon">🛡</span>
          <p><strong>No Data, No Charge Guarantee</strong> — If we can't recover your data, you owe nothing. <em>(most cases)</em></p>
        </div>
      </div>
    </section>

    <!-- FULL-WIDTH BANNER -->
    <section class="fullwidth-banner">
      <div class="banner-overlay" />
      <div class="container banner-inner">
        <h2 class="banner-heading">See Why Thousands Trust Us With Their Important Data</h2>
        <p class="banner-sub">Data loss is stressful — but working with us doesn't have to be. We offer flat-rate pricing, honest communication, and proven results — all from our secure Glendale lab.</p>
        <div class="banner-stats">
          <div class="bstat"><span class="bstat-num">99%</span><span class="bstat-lbl">Recovery Success Rate</span></div>
          <div class="bstat-div" />
          <div class="bstat"><span class="bstat-num">3–5</span><span class="bstat-lbl">Day Standard Turnaround</span></div>
          <div class="bstat-div" />
          <div class="bstat"><span class="bstat-num">$0</span><span class="bstat-lbl">If We Can't Recover</span><em class="bstat-note">(Most Cases)</em></div>
          <div class="bstat-div" />
          <div class="bstat"><span class="bstat-num">24/7</span><span class="bstat-lbl">Available Support</span></div>
        </div>
      </div>
    </section>

    <!-- MID-PAGE FORM -->
    <section class="mid-form-section" style="background: linear-gradient(to right, rgba(50,52,58,0.92) 0%, rgba(50,52,58,0.72) 50%, rgba(30,32,38,0.2) 100%), url('/hard-drive-recovery-service-los-angeles.webp') right center / cover no-repeat;">
      <div class="container mid-form-inner">
        <div class="mid-form-text">
          <div class="section-label light">Get Started</div>
          <h2 class="dark-heading">Start Your Data Recovery Today</h2>
          <p class="dark-body">Don't wait — the longer a failing drive is used, the lower the chances of a full recovery. Our engineers are standing by to evaluate your device and give you a free, no-obligation quote.</p>
          <p class="dark-body">Stop using the device immediately if you notice any unusual symptoms. The sooner you bring it to us, the better your chances of a full recovery.</p>
          <div class="dark-features">
            <div class="df"><span class="df-check">✓</span> Free same-day evaluation</div>
            <div class="df"><span class="df-check">✓</span> Flat-rate pricing, no surprises</div>
            <div class="df"><span class="df-check">✓</span> No data recovered = no charge <em class="df-note">(most cases)</em></div>
          </div>
        </div>
        <div class="mid-form-card">
          <h3 class="mid-form-title">Get a Free Quote in Minutes!</h3>
          <form @submit.prevent class="mid-consult-form">
            <div class="mf-row">
              <div class="mf-group">
                <label>NAME <span class="mf-req">*</span></label>
                <input type="text" placeholder="Name / Required" class="mf-input" />
              </div>
              <div class="mf-group">
                <label>EMAIL <span class="mf-req">*</span></label>
                <input type="email" placeholder="Email Address / Required" class="mf-input" />
              </div>
            </div>
            <div class="mf-row">
              <div class="mf-group">
                <label for="mf-device-type">SELECT YOUR DEVICE TYPE</label>
                <div class="mf-select-wrap">
                  <select id="mf-device-type" class="mf-input">
                    <option value="">— Select (Optional) —</option>
                    <option>Hard Drive</option><option>SSD</option><option>RAID/Server</option>
                    <option>External HDD</option><option>Mac/iMac</option><option>iPhone/Mobile</option>
                    <option>USB Flash Drive</option><option>SD Card</option><option>NAS Device</option><option>Other</option>
                  </select>
                </div>
              </div>
              <div class="mf-group">
                <label>PHONE</label>
                <input type="tel" placeholder="Phone Number" class="mf-input" />
              </div>
            </div>
            <div class="mf-row">
              <div class="mf-group">
                <label for="mf-device-issue">SELECT ISSUE WITH DEVICE</label>
                <div class="mf-select-wrap">
                  <select id="mf-device-issue" class="mf-input">
                    <option value="">Select Issue</option>
                    <option>Not Detected / Not Showing Up</option><option>Clicking / Grinding Noise</option>
                    <option>Water Damage</option><option>Corrupted Files</option><option>Accidental Deletion</option>
                    <option>Physical Damage</option><option>Not Spinning</option><option>Other</option>
                  </select>
                </div>
              </div>
              <div class="mf-group">
                <label>Preferred Contact Method</label>
                <div class="mf-radio-group">
                  <label class="mf-radio"><input type="radio" name="contactDataRecIdx" value="call" checked /> CALL</label>
                  <label class="mf-radio"><input type="radio" name="contactDataRecIdx" value="email" /> EMAIL</label>
                  <label class="mf-radio"><input type="radio" name="contactDataRecIdx" value="text" /> TEXT</label>
                </div>
              </div>
            </div>
            <div class="mf-group mf-full">
              <label for="mf-response-time">PREFERRED RESPONSE TIME</label>
              <div class="mf-select-wrap">
                <select id="mf-response-time" class="mf-input">
                  <option value="">Select Preferred Time</option>
                  <option>Immediately (24/7)</option><option>During Business Hours</option>
                  <option>Morning (8am – 12pm)</option><option>Afternoon (12pm – 5pm)</option><option>Evening (5pm – 8pm)</option>
                </select>
              </div>
            </div>
            <button type="submit" class="mf-submit">Request a Free Evaluation</button>
          </form>
        </div>
      </div>
    </section>

    <!-- FAQ — grey -->
    <section class="s-grey">
      <div class="container">
        <div class="section-label center">Got Questions?</div>
        <h2 class="s-heading center">Frequently Asked Questions</h2>
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

    <!-- VIDEO SECTION -->
    <section class="page-video-section">
      <div class="container page-video-inner">
        <div class="page-video-copy">
          <h2 class="page-video-heading">See Why Thousands Trust Us With Their Important Data</h2>
          <p class="page-video-desc">Data loss is stressful — but working with us doesn't have to be. Watch how our team handles each recovery with care, professionalism, and precision. From diagnostics to delivery, we offer flat-rate pricing, honest communication, and proven results — all from our secure Glendale lab.</p>
        </div>
        <!-- YouTube facade: loads thumbnail only, full player loads on click (saves ~900 KiB) -->
        <div class="page-video-embed" @click="videoClicked = true">
          <template v-if="!videoClicked">
            <img
              src="https://i.ytimg.com/vi/14ACFHJ24hg/hqdefault.jpg"
              alt="Five Star Data Recovery — Video"
              class="video-thumb"
              width="480" height="360"
              loading="lazy"
            />
            <button class="play-btn" aria-label="Play video">
              <svg viewBox="0 0 68 48" width="68" height="48">
                <path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="#f00"/>
                <path d="M45 24 27 14v20" fill="#fff"/>
              </svg>
            </button>
          </template>
          <iframe
            v-else
            src="https://www.youtube-nocookie.com/embed/14ACFHJ24hg?start=60&autoplay=1"
            title="Five Star Data Recovery"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>
    </section>

    <ReviewsSection :reviews="reviews" />

    <!-- CONTACT BAND -->
    <section class="s-contact-band">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Contact Us for Data Recovery Services</h2>
        </div>
        <div class="contact-body">
          <p class="contact-body-text">If you're experiencing data loss, don't wait. Acting early gives you the best chance of recovering your data safely and completely.</p>
          <ul class="contact-bullets">
            <li>Visit our lab in Glendale, CA</li>
            <li>Mail your drive to us from anywhere in the U.S.</li>
            <li>Call us today for a free evaluation</li>
          </ul>
          <p class="contact-outro">Trust our experts for fast, secure, and professional data recovery services — and get back what matters most.</p>
        </div>
        <NuxtLink to="/start-recovery" class="btn-start-recovery">Start Your Recovery</NuxtLink>
      </div>
    </section>

    <FooterBar />
  </div>
</template>

<style scoped>
*, *::before, *::after { box-sizing: border-box; }
.page-content { font-family: 'Inter', sans-serif; color: #1a1a2e; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 28px; }
.s-white { background: #fff; padding: 88px 0; }
.s-grey  { background: #f4f7fc; padding: 88px 0; }
.section-label { font-size: 0.72rem; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; color: #7a5900; margin-bottom: 10px; }
.section-label.center { text-align: center; }
.section-label.light { color: #C9A84C; }
.s-heading { font-size: clamp(1.5rem, 2.8vw, 2.1rem); font-weight: 900; color: #1a1a2e; line-height: 1.25; margin-bottom: 14px; }
.s-heading.center { text-align: center; }
.s-intro { font-size: 1rem; color: #4a5568; line-height: 1.75; margin-bottom: 40px; }
.s-intro.center { text-align: center; max-width: 680px; margin-left: auto; margin-right: auto; }
.s-body { font-size: 0.94rem; color: #4a5568; line-height: 1.8; margin-bottom: 14px; }

/* ── Services Grid ── */
.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 8px;
}
.service-card {
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1.5px solid #e8ecf2;
  border-radius: 14px;
  padding: 28px 24px;
  text-decoration: none;
  color: inherit;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
  position: relative;
  overflow: hidden;
}
.service-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: #C9A84C;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s ease;
}
.service-card:hover { border-color: #C9A84C; box-shadow: 0 8px 32px rgba(201,168,76,0.15); transform: translateY(-3px); }
.service-card:hover::before { transform: scaleX(1); }
.svc-icon { font-size: 1.8rem; margin-bottom: 12px; line-height: 1; }
.svc-title { font-size: 0.97rem; font-weight: 800; color: #1a1a2e; margin-bottom: 10px; line-height: 1.3; }
.svc-body { font-size: 0.85rem; color: #4a5568; line-height: 1.7; flex: 1; }
.svc-link { margin-top: 16px; font-size: 0.82rem; font-weight: 700; color: #111111; letter-spacing: 0.03em; text-decoration: underline; }

/* ── Three-col reference section ── */
.three-col { display: grid; grid-template-columns: repeat(3, 1fr); gap: 48px; }
.ref-col { display: flex; flex-direction: column; gap: 4px; }
.ref-col-header {
  font-size: 0.72rem; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase;
  color: #7a5900; margin-bottom: 14px; padding-bottom: 10px; border-bottom: 2px solid #e8ecf2;
}
.ref-link {
  display: flex; align-items: center; gap: 7px;
  padding: 8px 0;
  font-size: 0.9rem; color: #2d3748; text-decoration: none;
  border-bottom: 1px solid #e8ecf2;
  transition: color 0.15s, gap 0.15s;
}
.ref-link:hover { color: #C9A84C; gap: 12px; }
.ref-dot { color: #C9A84C; font-size: 1.1rem; line-height: 1; flex-shrink: 0; }

/* ── Why Choose Us ── */
.asym-layout { display: grid; grid-template-columns: 3fr 2fr; gap: 64px; align-items: center; }
.asym-major { position: relative; }
.rounded-img { width: 100%; border-radius: 14px; display: block; object-fit: cover; max-height: 460px; }
.img-stat-badge { position: absolute; bottom: -20px; left: 24px; background: #C9A84C; color: #111111; border-radius: 10px; padding: 14px 22px; box-shadow: 0 8px 24px rgba(201,168,76,0.4); }
.stat-num { display: block; font-size: 1.6rem; font-weight: 900; line-height: 1; color: #111111; }
.stat-label { display: block; font-size: 0.75rem; font-weight: 700; color: #333333; margin-top: 3px; }
.why-list { display: flex; flex-direction: column; gap: 24px; margin-top: 28px; }
.why-item { display: flex; gap: 18px; align-items: flex-start; }
.why-icon { font-size: 1.5rem; flex-shrink: 0; margin-top: 2px; }
.why-title { display: block; font-size: 0.97rem; font-weight: 800; color: #1a1a2e; margin-bottom: 5px; }
.why-body { font-size: 0.88rem; color: #4a5568; line-height: 1.7; margin: 0; }

/* ── Process ── */
.process-track { display: grid; grid-template-columns: repeat(5, 1fr); gap: 0; position: relative; margin: 8px 0 36px; }
.process-node { position: relative; padding: 0 12px; text-align: center; }
.process-circle { width: 56px; height: 56px; border-radius: 50%; background: #1a1a2e; color: #C9A84C; font-size: 1.1rem; font-weight: 900; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; border: 2px solid #C9A84C; }
.process-connector { position: absolute; top: 27px; left: calc(50% + 28px); width: calc(100% - 56px); height: 2px; background: linear-gradient(90deg, #C9A84C, rgba(201,168,76,0.3)); }
.process-title { font-size: 0.82rem; font-weight: 700; color: #1a1a2e; margin-bottom: 10px; line-height: 1.3; }
.process-body { font-size: 0.8rem; color: #4a5568; line-height: 1.65; }
.guarantee-strip { background: #1a1a2e; border-radius: 10px; padding: 18px 28px; display: flex; align-items: center; gap: 16px; }
.guarantee-icon { font-size: 1.5rem; flex-shrink: 0; }
.guarantee-strip p { margin: 0; color: rgba(255,255,255,0.8); font-size: 0.92rem; line-height: 1.5; }
.guarantee-strip strong { color: #C9A84C; }

/* ── Banner ── */
.fullwidth-banner { position: relative; background: #0d111f; padding: 72px 0; overflow: hidden; }
.banner-overlay { position: absolute; inset: 0; background: url('/hard-drive-data-recovery-specialist-glendale-ca.jpg') center/cover no-repeat; opacity: 0.12; }
.banner-inner { position: relative; text-align: center; }
.banner-heading { font-size: clamp(1.6rem, 3vw, 2.4rem); font-weight: 900; color: #fff; margin-bottom: 14px; }
.banner-sub { font-size: 1rem; color: rgba(255,255,255,0.65); max-width: 640px; margin: 0 auto 48px; line-height: 1.7; }
.banner-stats { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; }
.bstat { text-align: center; padding: 0 40px; }
.bstat-num { display: block; font-size: 2.2rem; font-weight: 900; color: #C9A84C; line-height: 1; margin-bottom: 6px; }
.bstat-lbl { display: block; font-size: 0.82rem; color: rgba(255,255,255,0.6); }
.bstat-note { display: block; font-size: 0.72rem; color: rgba(255,255,255,0.4); font-style: italic; margin-top: 3px; }
.bstat-div { width: 1px; height: 48px; background: rgba(255,255,255,0.15); }

/* ── Mid-page form ── */
.mid-form-section { position: relative; padding: 72px 0; overflow: hidden; }
.mid-form-inner { position: relative; display: grid; grid-template-columns: 1fr 480px; gap: 60px; align-items: center; }
.mid-form-card { background: #fff; border-radius: 8px; padding: 32px 32px 28px; box-shadow: 0 20px 60px rgba(0,0,0,0.4); }
.mid-form-title { font-size: 20px; font-weight: 800; color: #1a1a2e; margin-bottom: 20px; padding-bottom: 14px; border-bottom: 2px solid #f0f0f0; }
.mid-consult-form { display: flex; flex-direction: column; gap: 14px; }
.mf-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.mf-group { display: flex; flex-direction: column; gap: 5px; }
.mf-group label { font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: #555; }
.mf-req { color: #e53935; }
.mf-full { grid-column: 1 / -1; }
.mf-input { height: 52px; border: 1px solid #ddd; border-radius: 6px; padding: 0 16px; font-size: 15px; color: #333; background: #fff; width: 100%; box-sizing: border-box; font-family: inherit; appearance: none; }
.mf-input:focus { outline: none; border-color: #C9A84C; }
.mf-select-wrap { position: relative; }
.mf-select-wrap .mf-input { padding-right: 36px; cursor: pointer; }
.mf-radio-group { display: flex; gap: 14px; align-items: center; height: 40px; }
.mf-radio { display: flex; align-items: center; gap: 5px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #444; cursor: pointer; }
.mf-radio input { width: 14px; height: 14px; accent-color: #C9A84C; cursor: pointer; }
.mf-submit { width: 100%; height: 62px; background: #C9A84C; color: #1a1a1a; font-weight: 800; font-size: 18px; border: none; border-radius: 6px; cursor: pointer; font-family: inherit; margin-top: 4px; transition: background 0.2s; }
.mf-submit:hover { background: #b8923e; }
.dark-heading { font-size: clamp(1.5rem, 2.5vw, 2rem); font-weight: 900; color: #fff; margin-bottom: 18px; line-height: 1.25; }
.dark-body { font-size: 0.94rem; color: rgba(255,255,255,0.72); line-height: 1.8; margin-bottom: 14px; }
.dark-features { margin-top: 24px; display: flex; flex-direction: column; gap: 10px; }
.df { font-size: 0.9rem; color: rgba(255,255,255,0.85); display: flex; align-items: center; gap: 10px; }
.df-check { color: #C9A84C; font-weight: 700; }
.df-note { font-size: 0.8rem; color: rgba(255,255,255,0.5); }

/* ── FAQ ── */
.faq-wrap { margin: 40px 0 0; display: flex; flex-direction: column; gap: 8px; max-width: 820px; margin-left: auto; margin-right: auto; }
.faq-row { border: 1.5px solid #e2e8f0; border-radius: 10px; overflow: hidden; background: #fff; }
.faq-row.active { border-color: #C9A84C; }
.faq-trigger { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; background: none; border: none; color: #1a1a2e; font-size: 1rem; font-weight: 700; cursor: pointer; text-align: left; gap: 16px; font-family: inherit; }
.faq-toggle { color: #C9A84C; font-size: 1.4rem; font-weight: 300; flex-shrink: 0; line-height: 1; }
.faq-answer { padding: 4px 24px 20px; font-size: 0.9rem; color: #4a5568; line-height: 1.8; border-top: 1px solid #f0f2f7; }

/* ── Video ── */
.page-video-section { background: #2a2d38; padding: 70px 0; }
.page-video-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
.page-video-copy { display: flex; flex-direction: column; gap: 20px; }
.page-video-heading { font-size: clamp(1.4rem, 2.5vw, 2rem); font-weight: 800; color: #fff; line-height: 1.25; }
.page-video-desc { font-size: 0.95rem; color: #9ba3b8; line-height: 1.8; }
.page-video-embed { position: relative; border-radius: 14px; overflow: hidden; aspect-ratio: 16/9; box-shadow: 0 12px 48px rgba(0,0,0,0.4); cursor: pointer; background: #000; }
.page-video-embed iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }
.video-thumb { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; display: block; }
.play-btn { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: none; border: none; cursor: pointer; padding: 0; opacity: 0.9; transition: opacity 0.2s, transform 0.2s; }
.play-btn:hover { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }

/* ── Contact Band ── */
.s-contact-band { background: #fff; padding: 64px 0; }
.contact-banner-card { background: linear-gradient(to right, #1a1a2e 55%, rgba(26,26,46,0.75) 100%), url('/hard-drive-data-recovery-specialist-glendale-ca.jpg') right center / cover no-repeat; border-radius: 12px; padding: 40px 48px; margin-bottom: 28px; min-height: 120px; display: flex; align-items: center; overflow: hidden; }
.contact-banner-heading { font-size: clamp(1.3rem, 2.5vw, 1.8rem); font-weight: 900; color: #fff; line-height: 1.25; max-width: 560px; margin: 0; }
.contact-body { margin-bottom: 28px; }
.contact-body-text { font-size: 0.95rem; color: #2d3748; line-height: 1.75; margin-bottom: 14px; }
.contact-bullets { list-style: disc; padding-left: 20px; margin: 0 0 12px; }
.contact-bullets li { font-size: 0.9rem; color: #4a5568; padding: 3px 0; }
.contact-outro { font-size: 0.9rem; color: #4a5568; }
.btn-start-recovery { display: block; width: 100%; text-align: center; background: #C9A84C; color: #1a1a1a; padding: 18px; border-radius: 8px; font-weight: 800; font-size: 1.05rem; text-decoration: none; letter-spacing: 0.04em; transition: background 0.2s; }
.btn-start-recovery:hover { background: #b8923e; }

/* ── Two-Card Section ── */
.two-card-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}
.info-card {
  border: 1.5px solid #e2e6ee;
  border-radius: 12px;
  padding: 36px 32px;
  background: #fff;
}
.info-card-heading {
  font-size: 1.05rem;
  font-weight: 800;
  color: #1a1a2e;
  margin-bottom: 14px;
  line-height: 1.3;
}
.info-card-intro {
  font-size: 0.93rem;
  color: #4a5568;
  line-height: 1.7;
  margin-bottom: 16px;
}
.info-card-list {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.info-card-list li {
  font-size: 0.93rem;
  color: #4a5568;
  line-height: 1.6;
  display: flex;
  align-items: flex-start;
  gap: 10px;
}
.info-card-list li::before {
  content: '»';
  color: #C9A84C;
  font-weight: 900;
  font-size: 1rem;
  flex-shrink: 0;
  margin-top: 1px;
}
.info-card-outro {
  font-size: 0.93rem;
  color: #4a5568;
  line-height: 1.7;
  margin: 0;
}

/* ── Common Reasons Section ── */
.reasons-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}
.reasons-heading {
  font-size: clamp(1.6rem, 2.8vw, 2.2rem);
  font-weight: 900;
  color: #1a1a2e;
  line-height: 1.2;
  margin-bottom: 18px;
}
.reasons-intro {
  font-size: 0.95rem;
  color: #4a5568;
  line-height: 1.75;
  margin-bottom: 14px;
}
.reasons-list {
  margin: 0 0 18px 0;
  padding: 0 0 0 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.reasons-list li {
  font-size: 0.95rem;
  color: #4a5568;
  line-height: 1.6;
}
.reasons-body {
  font-size: 0.95rem;
  color: #4a5568;
  line-height: 1.75;
  margin-bottom: 8px;
}
.reasons-img {
  width: 100%;
  height: auto;
  border-radius: 16px;
  display: block;
  object-fit: cover;
}

/* ── FAQ Table ── */
.faq-answer :deep(.faq-table) {
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0 12px;
  font-size: 0.88rem;
}
.faq-answer :deep(.faq-table th) {
  background: #1a1a2e;
  color: #C9A84C;
  text-align: left;
  padding: 10px 14px;
  font-weight: 700;
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.faq-answer :deep(.faq-table td) {
  padding: 9px 14px;
  border-bottom: 1px solid #eee;
  color: #333;
}
.faq-answer :deep(.faq-table tr:nth-child(even) td) {
  background: #f8f9fb;
}
.faq-answer :deep(.faq-note) {
  display: block;
  font-size: 0.82rem;
  color: #777;
  font-style: italic;
  margin-top: 8px;
}
.faq-answer :deep(.faq-link) {
  color: #C9A84C;
  font-weight: 600;
  text-decoration: underline;
}

/* ── Responsive ── */
@media (max-width: 1200px) {
  .services-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 1024px) {
  .process-track { grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .process-connector { display: none; }
  .mid-form-inner { grid-template-columns: 1fr 440px; gap: 40px; }
  .asym-layout { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 900px) {
  .services-grid { grid-template-columns: repeat(2, 1fr); }
  .three-col { grid-template-columns: 1fr; gap: 32px; }
}
@media (max-width: 768px) {
  .asym-layout, .mid-form-inner, .reasons-layout, .two-card-grid { grid-template-columns: 1fr; gap: 36px; }
  .page-video-inner { grid-template-columns: 1fr; }
  .bstat-div { display: none; }
  .img-stat-badge { bottom: 12px; }
  .mf-row { grid-template-columns: 1fr; }
}
@media (max-width: 600px) {
  .services-grid { grid-template-columns: 1fr; }
  .process-track { grid-template-columns: 1fr; }
}
</style>
