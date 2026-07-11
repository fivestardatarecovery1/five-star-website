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
                "author": { "@type": "Person", "name": "Emilie R" },
                "datePublished": "2024-11-20",
                "reviewBody": "I thought my vacation memories were gone forever when my SD card got corrupted. Thankfully, Five Star Data Recovery was able to recover all my photos and videos from the trip. The turnaround time was quick, and the customer service was excellent. Highly recommended for anyone needing professional SD card data recovery.",
                "name": "SD Card Recovery Success",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
              }
            ],
            "priceRange": "$300 - $950"
          },
          {
            "@type": "Service",
            "name": "SD Card Data Recovery Services",
            "url": "https://www.fivestardatarecovery.com/data-recovery/sd-card-data-recovery/",
            "areaServed": [{ "@type": "Country", "name": "United States" }],
            "description": "Professional SD card data recovery for cameras, drones, phones, and action cameras. Logical recovery, chip-off, video file repair. Flat-rate pricing, No Data No Charge. Serving Glendale, Los Angeles, and nationwide."
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fivestardatarecovery.com/" },
              { "@type": "ListItem", "position": 2, "name": "Data Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/" },
              { "@type": "ListItem", "position": 3, "name": "SD Card Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/sd-card-data-recovery/" }
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Can you recover data from physically broken SD cards?", "acceptedAnswer": { "@type": "Answer", "text": "It depends on the type of physical damage. If the SD card is cracked\u2014even slightly\u2014data recovery is not possible, as the internal memory chip is almost always destroyed. However, if the damage is limited to broken connector pins or minor board issues (without cracking the chip), we may be able to recover the data using advanced chip-off techniques. Each case is evaluated carefully to determine if the memory chip is still intact and readable." } },
              { "@type": "Question", "name": "What types of devices do you recover SD cards from?", "acceptedAnswer": { "@type": "Answer", "text": "We recover SD cards used in digital cameras, smartphones, drones, GoPros, dash cams, and other portable devices. No matter where the SD card was used, we can assess and recover the data." } },
              { "@type": "Question", "name": "Can you recover data from an SD card that shows the wrong capacity or is not recognized at all?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. If your SD card shows zero capacity, an incorrect size, or is not being recognized by your computer or camera, these are common signs of internal chip failure or controller issues. We handle these types of recoveries regularly." } },
              { "@type": "Question", "name": "Do you recover data from microSD cards as well?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We recover data from standard SD cards, microSD cards, and miniSD cards, including all major brands like SanDisk, Samsung, Lexar, and Kingston." } },
              { "@type": "Question", "name": "Is it safe to run recovery software on a failing SD card?", "acceptedAnswer": { "@type": "Answer", "text": "If your SD card shows signs of physical failure (like not mounting, not being recognized, or showing corrupted file structures), it's best not to run recovery software. DIY software attempts can worsen damage on failing cards. Professional imaging and recovery tools offer a much safer approach." } },
              { "@type": "Question", "name": "How long does SD card data recovery take?", "acceptedAnswer": { "@type": "Answer", "text": "Most standard SD card recoveries are completed within 3\u20135 business days, depending on the severity of the issue. For urgent cases, we also offer Expedited and Expedited Plus service options for faster turnaround." } },
              { "@type": "Question", "name": "What file types can you recover from an SD card?", "acceptedAnswer": { "@type": "Answer", "text": "We commonly recover photos (JPG, RAW, PNG), videos (MP4, MOV, AVI), documents, and other media files from SD cards. If your card was used in a camera or mobile device, there's a high chance we can retrieve your images and video files." } },
              { "@type": "Question", "name": "Do you offer a no data, no charge policy for SD card recovery?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, in most cases. We follow a No Data, No Charge policy for SD card recoveries unless the card has been physically tampered with or damaged from previous recovery attempts. If that applies, we'll explain any special evaluation fees upfront before starting." } },
              { "@type": "Question", "name": "The videos on my SD Card are damaged. How much does video file repair from an SD card cost?", "acceptedAnswer": { "@type": "Answer", "text": "The cost for SD card video file repair depends on several factors, including the number of damaged video files, the length and size of each file, the complexity of the video format (codec), and the extent of corruption. In most cases, you'll first pay our standard SD card data recovery fee, which covers the process of extracting and stabilizing the raw video files from your card. After that, video file repair services are quoted separately based on the specifics of the files needing repair." } },
              { "@type": "Question", "name": "I can see the videos on my SD card but they are damaged. Is it possible to repair damaged video files?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. At Five Star Data Recovery, we specialize in video file repair from SD cards, even when the files appear to be corrupted or unplayable. Our engineers use professional forensic-level tools that rebuild damaged video headers, correct missing or fragmented data blocks, and reconstruct the file structure to make your videos playable again. It's very important that you avoid running tools like First Aid, CHKDSK, or any other disk repair utilities on your SD card. These tools often overwrite or further corrupt the fragmented video data, making professional repair much more difficult or even impossible. If you notice that your video files are damaged, stop using the SD card immediately and contact us for a free consultation." } },
              { "@type": "Question", "name": "How much does SD card data recovery cost?", "acceptedAnswer": { "@type": "Answer", "text": "At Five Star Data Recovery, SD card recovery is priced based on the type of failure and the method required to retrieve the data. Logical Data Recovery \u2013 $300: Applies to SD cards that are physically intact but are no longer recognized properly. Common symptoms include 'Card needs to be formatted' errors, file system corruption, cards that mount but show no files, or cards with read errors. Chip-Off or Monolith Recovery \u2013 $950: Applies when the SD card has physical damage or internal faults that prevent any software-based recovery, such as broken connectors, internal short circuits, water damage, or complete unresponsiveness. Deleted File Recovery \u2013 $500: If the SD card was formatted or you accidentally deleted files. Includes a $200 non-refundable labor fee paid upfront; the remaining $300 is only due if recovery is successful. Video File Repair (Optional Add-On): Recovered video files that are damaged or corrupted may require repair, quoted separately after evaluation. All SD card recoveries start with a free evaluation and flat-rate pricing\u2014no hidden fees. You only pay if recovery is successful (except for deleted file cases with the $200 labor fee)." } }
            ]
          }
        ]
      })
    }
  ]
})

useSeoMeta({
  title: 'SD Card Recovery - Five Star Data Recovery',
  ogTitle: 'SD Card Recovery - Five Star Data Recovery',
  description: 'Looking for a reliable SD Card Recovery Company? We got you covered! Our Professional Recovery Services offer a fast turnaround of your data.',
  ogDescription: 'Looking for a reliable SD Card Recovery Company? We got you covered! Our Professional Recovery Services offer a fast turnaround of your data.',
})

const trustBadges = [
  { icon: 'clock', text: 'Available 24/7/365' },
  { icon: 'check', text: 'No Data = No Charge' },
  { icon: 'shield', text: '10+ Years in Business' },
  { icon: 'star', text: 'Free Nationwide Shipping' },
]

const reviews = [
  {
    text: "I thought my vacation memories were gone forever when my SD card got corrupted. Thankfully, Five Star Data Recovery was able to recover all my photos and videos from the trip. The turnaround time was quick, and the customer service was excellent. Highly recommended for anyone needing professional SD card data recovery.",
    name: 'Emilie R',
    location: 'San Diego, CA',
  },
  {
    text: "I had an SD card from my digital camera with important work files and client images that suddenly became unreadable. After contacting Five Star Data Recovery, they recovered 98% of my data. I&#39;m impressed with their transparency, fair pricing, and fast communication throughout the process.",
    name: 'David L.',
    location: 'College Station, TX',
  },
  {
    text: "I accidentally deleted all the files on my SD card without backing them up. I was sure it was all lost, but Five Star Data Recovery was able to recover most of my deleted photos and videos. Their data recovery for SD cards was fast, affordable, and stress-free.",
    name: 'Jason P.',
    location: 'New York, NY',
  },
]

const faqs = [
  {
    q: 'How much does SD card data recovery cost?',
    a: 'At Five Star Data Recovery, SD card recovery is priced based on the type of failure and the method required to retrieve the data. Here&#39;s a breakdown of our standard pricing:<br><br><strong>1. Logical Data Recovery \u2013 $300.00</strong><br>This applies to SD cards that are physically intact but are no longer recognized properly by your device or computer. Common symptoms include: &ldquo;Card needs to be formatted&rdquo; errors, file system corruption, the card mounts but shows no files, or read errors during access. In these cases, we use specialized tools to safely extract your files without altering or damaging the card.<br><br><strong>2. Chip-Off or Monolith Recovery \u2013 $950.00</strong><br>This applies when the SD card has physical damage or internal faults that prevent any software-based recovery. These are complex recoveries that require desoldering the memory chip from the card (chip-off), or microscopic pinout mapping and direct readout (monolith recovery). These methods are used when the SD card has broken connectors, internal short circuits, water damage, or is completely unresponsive.<br><br><strong>3. Deleted File Recovery \u2013 $500.00</strong><br>If the SD card was formatted or you accidentally deleted files, the cost is $500.00. This includes a <strong>$200.00 non-refundable labor fee</strong>, paid upfront. The remaining $300.00 is only paid if we successfully recover the deleted files and you approve the results. Deleted file recovery is more complex because deleted data may be partially overwritten, and the card&#39;s internal file structure must be carefully rebuilt.<br><br><strong>4. Video File Repair (Optional Add-On)</strong><br>In rare cases, recovered video files may be damaged or corrupted and require repair. We offer a specialized video file repair service in these situations. This is quoted separately, after evaluation. Fees depend on file types, damage level, and number of corrupted clips. Video repair is in addition to the data recovery cost.<br><br><strong>Transparent Pricing, No Surprises</strong><br>All SD card recoveries start with a free evaluation, and our pricing is flat rate \u2014 no hidden fees. You&#39;ll always be informed of the total cost before we begin, and you only pay if recovery is successful (except for deleted file cases with the $200 labor fee).',
  },
  {
    q: 'How long does SD card data recovery take?',
    a: 'Most standard SD card recoveries are completed within <strong>3\u20135 business days</strong>, depending on the severity of the issue. For urgent cases, we also offer <strong>Expedited and Expedited Plus</strong> service options for faster turnaround.',
  },
  {
    q: 'What file types can you recover from an SD card?',
    a: 'We commonly recover <strong>photos (JPG, RAW, PNG)</strong>, <strong>videos (MP4, MOV, AVI)</strong>, documents, and other media files from SD cards. If your card was used in a camera or mobile device, there&#39;s a high chance we can retrieve your images and video files.',
  },
  {
    q: 'Do you recover data from microSD cards as well?',
    a: 'Absolutely. We recover data from <strong>standard SD cards, microSD cards</strong>, and miniSD cards, including all major brands like SanDisk, Samsung, Lexar, and Kingston.',
  },
  {
    q: 'What types of devices do you recover SD cards from?',
    a: 'We recover SD cards used in <strong>digital cameras, smartphones, drones, GoPros, dash cams</strong>, and other portable devices. No matter where the SD card was used, we can assess and recover the data.',
  },
  {
    q: 'Can you recover data from physically broken SD cards?',
    a: 'It depends on the type of physical damage. If the SD card is crackedu2014even slightlyu2014data recovery is <strong>not possible</strong>, as the internal memory chip is almost always destroyed. However, if the damage is limited to broken connector pins or minor board issues (without cracking the chip), we may be able to recover the data using advanced chip-off techniques. Each case is evaluated carefully to determine if the memory chip is still intact and readable.',
  },
  {
    q: 'Is it safe to run recovery software on a failing SD card?',
    a: 'If your SD card shows signs of physical failure (like not mounting, not being recognized, or showing corrupted file structures), it&#39;s best <strong>not to run recovery software</strong>. DIY software attempts can worsen damage on failing cards. Professional imaging and recovery tools offer a much safer approach.',
  },
  {
    q: 'Do you offer a no data, no charge policy for SD card recovery?',
    a: 'Yes, in most cases. We follow a <strong>No Data, No Charge policy</strong> for SD card recoveries unless the card has been physically tampered with or damaged from previous recovery attempts. If that applies, we&#39;ll explain any special evaluation fees upfront before starting.',
  },
  {
    q: 'Can you recover data from an SD card that shows the wrong capacity or is not recognized at all?',
    a: 'Yes. If your SD card shows <strong>zero capacity, an incorrect size</strong>, or is not being recognized by your computer or camera, these are common signs of internal chip failure or controller issues. We handle these types of recoveries regularly.',
  },
  {
    q: 'The videos on my SD Card are damaged. How much does video file repair from an SD card cost?',
    a: 'The cost for SD card video file repair depends on several factors, including the <strong>number of damaged video files</strong>, the length and size of each file, the complexity of the video format (codec), and the extent of corruption.<br><br>In most cases, you&#39;ll first pay our standard SD card data recovery fee, which covers the process of extracting and stabilizing the raw video files from your card. After that, <strong>video file repair services are quoted separately</strong> based on the specifics of the files needing repair. For an exact quote, please contact us or visit our pricing page for more details.',
  },
  {
    q: 'I can see the videos on my SD card but they are damaged. Is it possible to repair damaged video files?',
    a: 'Yes. At Five Star Data Recovery, we specialize in <strong>video file repair from SD cards</strong>, even when the files appear to be corrupted or unplayable. Our engineers use professional forensic-level tools that rebuild damaged video headers, correct missing or fragmented data blocks, and reconstruct the file structure to make your videos playable again.<br><br>It&#39;s very important that you <strong>avoid running tools like First Aid, CHKDSK</strong>, or any other disk repair utilities on your SD card. These tools often overwrite or further corrupt the fragmented video data, making professional repair much more difficult or even impossible.<br><br>If you notice that your video files are damaged, stop using the SD card immediately and contact us for a free consultation.',
  },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <HeroSection
      title="SD Card Recovery"
      subtitle="Get Your Data Back In No Time."
      description="Whether it&#39;s from a camera, phone, drone, or GoPro, losing files on your SD card is frustrating—and often devastating. At Five Star Data Recovery, we focus on quick, safe, and professional SD card recovery.<br><br>We help individuals, photographers, businesses, and content creators all over the U.S. If your SD card isn&#39;t being read, was accidentally deleted, or has been physically damaged, we&#39;re here to help. We recover files others can&#39;t—and we do it without gimmicks or guesswork."
      bgImage="/sd-card-data-recovery-hero.webp"
      :trustBadges="trustBadges"
    />

    <StatsBar />

    <!-- SECTION 1 — Common Reasons -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Common Reasons SD Cards Fail</h2>
        <p class="s-body">SD cards may be small, but they&#39;re not immune to damage or corruption. Some of the most common reasons customers need SD card data recovery services include:</p>
        <ul class="content-list">
          <li>Corrupted SD card that suddenly won&#39;t mount or read</li>
          <li>Files were accidentally deleted or formatted</li>
          <li>SD card says &ldquo;empty&rdquo; even though you know files were saved</li>
          <li>Bent, cracked, or physically damaged cards</li>
          <li>Need to recover photos or photo and video files from a camera</li>
          <li>Card was used with faulty or generic data recovery software</li>
          <li>Power loss during transfer caused damaged video files</li>
        </ul>
        <p class="s-body">We have the tools and experience to recover your lost content. This includes important photos, documents, and work files.</p>
      </div>
    </section>

    <!-- SECTION 2 — Trusted by Locals -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Trusted by Locals Across LA</h2>
        <p class="s-body">We provide SD card file recovery for a wide range of devices and card types, including:</p>
        <ul class="content-list">
          <li>DSLR and mirrorless digital cameras (Canon, Nikon, Sony, etc.)</li>
          <li>Android smartphones and tablets</li>
          <li>Drone cameras (DJI and others)</li>
          <li>Action cameras and camcorders (GoPro, Insta360)</li>
          <li>Professional camera media: <NuxtLink to="/data-recovery/cfast-card-data-recovery">CFast</NuxtLink>, CFexpress, REDMAG, and other high-end storage cards</li>
          <li>Standard SD, microSD, miniSD, SDHC, and SDXC cards</li>
          <li>Laptops, card readers, and all major operating systems</li>
        </ul>
      </div>
    </section>

    <!-- SECTION 3 — Recovery Process -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Our Recovery Process</h2>
        <p class="s-body">At Five Star Data Recovery, we implement a proven recovery process designed for safety and results. Our goal is to retrieve files from damaged SD cards without causing further harm to the data.</p>
        <div class="process-steps">
          <div class="process-step">
            <div class="step-num">1</div>
            <div>
              <h3 class="step-title">Free Diagnostic</h3>
              <p class="step-body">We look at your SD card to figure out if the problem is physical, software-related, or a bit of both. You&#39;ll receive a clear explanation and a quote up front.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">2</div>
            <div>
              <h3 class="step-title">Safe Imaging</h3>
              <p class="step-body">If the card is failing or unstable, we use professional tools to create a digital image of the data. This prevents further wear and avoids data loss during recovery.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">3</div>
            <div>
              <h3 class="step-title">Deep Scanning and File Extraction</h3>
              <p class="step-body">We use advanced data recovery tool suites to handle the recovery process. These tools perform a deep scanning search, going sector by sector to locate files that users can still recover. We can recover over 100+ file types, including RAW photos, 4K videos, PDFs, and more.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">4</div>
            <div>
              <h3 class="step-title">File Verification and Return</h3>
              <p class="step-body">We provide you with a preview of what we can recover. Once approved, we copy your files to a <NuxtLink to="/data-recovery/usb-data-recovery">USB</NuxtLink> or drive you provide—or one you can purchase from us. If we can&#39;t recover your data, you pay nothing.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4 — Physical Damage -->
    <section class="s-grey">
      <div class="container">
        <div class="two-col-layout">
          <div>
            <h2 class="s-heading">What If My SD Card Is Physically Damaged?</h2>
            <p class="s-body">Not all physical damage to SD cards is the same. In some casesu2014such as broken connectors or minor board damageu2014recovery may be possible using advanced micro soldering techniques to access the internal memory chip.</p>
            <p class="s-body">However, if the SD card is crackedu2014even slightlyu2014<strong>recovery is impossible</strong>, as the memory chip itself is typically damaged beyond repair. Once the chip is fractured, there is no method to retrieve the data.</p>
          </div>
          <div class="section-img-wrap">
            <img src="/sd-card-physical-damage-recovery.webp" alt="Physically broken SD card — data recovery assessment" class="section-img" width="1024" height="576" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 5 — Why Not Free Software -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Why Not Just Use Free Software?</h2>
        <p class="s-body">You&#39;ve probably seen free data recovery software or apps that promise fast results. In some cases, those tools can help. But when a card is corrupted or physically damaged, DIY software can make things worse. Free tools often:</p>
        <ul class="content-list">
          <li>Write temporary data to the card, overwriting your original files</li>
          <li>Fail to detect deeper issues, leading to partial recovery</li>
          <li>Don&#39;t support specialized file types or raw formats</li>
          <li>Lack the safety features of professional tools</li>
        </ul>
        <p class="s-body">If your files are valuable or irreplaceable, trust a real data recovery service with the experience and tools to get it right the first time.</p>
      </div>
    </section>

    <!-- SECTION 6 — Why Choose Five Star -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Why Choose Five Star for SD Card Recovery?</h2>
        <ul class="content-list">
          <li>In-house lab with certified engineers</li>
          <li>Industry-grade recovery tools for deep-level access</li>
          <li>Transparent <NuxtLink to="/data-recovery-service-pricing">pricing</NuxtLink> and honest diagnostics</li>
          <li>High recovery success rates—even with severe damage</li>
          <li>Local drop-off or nationwide mail-in data recovery options</li>
          <li>No data, no charge (most cases)</li>
        </ul>
        <p class="s-body">Our services are user friendly, even if you&#39;re not tech-savvy. We&#39;ll guide you through every step.</p>
      </div>
    </section>

    <!-- REVIEWS -->
    <ReviewsSection :reviews="reviews" />

    <!-- SECTION 7 — What We Can Recover -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">What We Can Recover</h2>
        <p class="s-body">We can retrieve nearly any type of content, including:</p>
        <ul class="content-list">
          <li>RAW and JPEG image files</li>
          <li>MP4, MOV, and damaged video files</li>
          <li>PDFs, Word, Excel, and other work docs</li>
          <li>Audio files and voice memos</li>
          <li>App data and system logs</li>
          <li>Deleted or hidden file folders</li>
        </ul>
        <p class="s-body">We&#39;ve recovered deleted wedding photos, priceless travel footage, business contracts, and years of family memories. If it was on the card, there&#39;s a good chance we can bring it back.</p>
      </div>
    </section>

    <!-- QUOTE FORM -->
    <QuoteFormSection
      description="From a corrupted wedding shoot to drone footage that won&#39;t mount — we&#39;ve recovered data from every type of SD card failure. Our engineers go sector-by-sector to find files that generic tools miss, with flat-rate pricing and zero surprises."
      bullet1="SD, microSD, SDHC, SDXC, CFast, CFexpress"
      bullet2="Cameras, drones, GoPros, phones, dash cams"
      bullet3="No Data, No Charge — free evaluation included"
      closing="Stop using the card immediately — don&#39;t format or run recovery software. Fill out the form and let our SD card specialists take it from here."
      bgImage="/sd-card-data-recovery-hero.webp"
    />

    <!-- CONTACT BAND -->
    <section class="s-contact-band contact-band-bg">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Start Your SD Card Recovery Today</h2>
        </div>
        <p class="contact-body-text">Whether you&#39;ve got a corrupted SD card or a deleted photo shoot, we&#39;re ready to help. The sooner we start, the better the chance of full recovery.</p>
        <ul class="contact-bullets">
          <li>Drop off your card or ship it to our lab</li>
          <li>Free diagnostic and no-recovery-no-charge guarantee</li>
          <li>Call us now or start your recovery request online</li>
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
.contact-band-bg { background: linear-gradient(to right, rgba(15,22,35,0.92) 0%, rgba(15,22,35,0.75) 60%, rgba(15,22,35,0.5) 100%), url('/sd-card-physical-damage-recovery.webp') center center / cover no-repeat !important; }
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
