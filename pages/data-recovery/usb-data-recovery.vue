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
                "author": { "@type": "Person", "name": "Sarah M." },
                "datePublished": "2024-11-20",
                "reviewBody": "I thought I had lost all my college work after accidentally deleting my USB drive, but Five Star Data Recovery got it all back! They were fast, honest, and super professional. Highly recommend if you're panicking like I was.",
                "name": "USB Recovery Success",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
              }
            ],
            "priceRange": "$300 - $950"
          },
          {
            "@type": "Service",
            "name": "USB Data Recovery Services",
            "url": "https://www.fivestardatarecovery.com/data-recovery/usb-data-recovery/",
            "areaServed": [{ "@type": "Country", "name": "United States" }],
            "description": "Professional USB flash drive data recovery for all brands and failure types. Logical recovery, chip-off, monolith recovery. Flat-rate pricing, No Data No Charge. Serving Glendale, Los Angeles, and nationwide."
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fivestardatarecovery.com/" },
              { "@type": "ListItem", "position": 2, "name": "Data Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/" },
              { "@type": "ListItem", "position": 3, "name": "USB Data Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/usb-data-recovery/" }
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "What are common causes of USB drive failure?", "acceptedAnswer": { "@type": "Answer", "text": "USB drives can fail due to physical damage such as broken connectors, file system corruption, water exposure, electrical surges, firmware issues, or improper removal during file transfers. Even simple wear and tear can cause data loss over time." } },
              { "@type": "Question", "name": "Can you recover data from a physically damaged USB drive?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, depending on the type of physical damage. If the USB connector or circuit board is broken, recovery is often still possible. In these cases, we can attempt a monolith or chip-off recovery, which involves accessing the memory chip directly. However, if the NAND chip itself is cracked or physically damaged, recovery becomes impossible since that chip holds the only copy of your data." } },
              { "@type": "Question", "name": "I accidentally deleted files from my USB drive. Can you get them back?", "acceptedAnswer": { "@type": "Answer", "text": "In many cases, yes. As long as the files haven't been overwritten and TRIM hasn't been activated, the chances of recovery are very high. TRIM is a feature that automatically clears deleted data at the controller level and is not enabled manually by the user. Some USB drive controllers trigger TRIM sooner than others. For the best chance of recovery, stop using the drive immediately and bring it in for evaluation." } },
              { "@type": "Question", "name": "Do you recover data from encrypted or BitLocker USB drives?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. If you still have the correct BitLocker password or recovery key, we can usually retrieve data from encrypted USB flash drives, even if the device is corrupted or unmountable. Our recovery process preserves the encryption and avoids data loss during repair. Having the BitLocker credentials is mandatory. We cannot bypass or brute-force BitLocker encryption. If the password or recovery key is unavailable, the data cannot be recovered." } },
              { "@type": "Question", "name": "Can you recover data from USB drives that show 0 bytes or don't mount?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Drives that appear as 0 bytes or don't mount can still hold recoverable data. These symptoms often point to logical or firmware issues. We use advanced tools to bypass these errors and access the underlying memory." } },
              { "@type": "Question", "name": "How long does USB data recovery take?", "acceptedAnswer": { "@type": "Answer", "text": "Most USB data recovery cases are completed within 3 to 5 business days. However, cases involving physical damage or complex firmware issues may take longer. Expedited and Expedited Plus Services are available for urgent cases." } },
              { "@type": "Question", "name": "How much does USB data recovery cost?", "acceptedAnswer": { "@type": "Answer", "text": "Pricing depends on the type of failure and the condition of the USB drive. Logical recovery typically ranges from $300 to $500, depending on storage capacity and whether the drive is encrypted. Chip-off or monolith recovery for physically damaged or unrecognized USB drives is $950 flat. We provide free evaluations before starting any recovery, and there is no charge unless we're successful, excluding deleted file recovery or expedited service which may require upfront payment." } },
              { "@type": "Question", "name": "Do you offer free evaluations?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We provide free evaluations on all USB data recovery cases. When you drop off or mail in your device, we'll first review the issue and provide you with an initial quote based on the symptoms and failure type. As long as you're okay with that quote range, we'll proceed with the full diagnostic at no cost. If we're able to recover your data, you will be expected to pay the full recovery fee based on the quote provided. If the actual recovery ends up requiring more work than expected and the final cost exceeds the quote, we'll pause and get your approval first." } },
              { "@type": "Question", "name": "Do you offer nationwide USB data recovery services?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We provide USB data recovery services to customers across the United States. If you're not located near our Glendale, CA office, you can safely ship your USB drive to us for evaluation and recovery. Before you send anything in, we'll speak with you by phone or email to review the issue and provide an initial quote based on the symptoms. This way, you'll know what to expect before you ship the device. Once your device arrives, we'll confirm the quote and proceed with the evaluation. As always, you'll only pay if we're successful at recovering your data, unless deleted file recovery or expedited service applies." } }
            ]
          }
        ]
      })
    }
  ]
})

useSeoMeta({
  title: 'USB Data Recovery Services \u2013 Five Star Data Recovery',
  ogTitle: 'USB Data Recovery Services \u2013 Five Star Data Recovery',
  description: 'Lost data on your USB flash drive? We recover files from broken, corrupted, or unrecognized USB drives. No Data = No Charge Policy.',
  ogDescription: 'Lost data on your USB flash drive? We recover files from broken, corrupted, or unrecognized USB drives. No Data = No Charge Policy.',
  ogImage: 'https://www.fivestardatarecovery.com/usb-data-recovery-hero.webp',
})

const trustBadges = [
  { icon: 'clock', text: 'Available 24/7/365' },
  { icon: 'check', text: 'No Data = No Charge' },
  { icon: 'shield', text: '10+ Years in Business' },
  { icon: 'star', text: 'Free Nationwide Shipping' },
]

const reviews = [
  {
    text: "I thought I had lost all my college work after accidentally deleting my USB drive, but Five Star Data Recovery got it all back! They were fast, honest, and super professional. Highly recommend if you&#39;re panicking like I was.",
    name: 'Sarah M.',
    location: 'Pasadena, CA',
  },
  {
    text: "I had a BitLocker-encrypted USB flash drive that got corrupted and wouldn&#39;t unlock. Other places told me it was hopeless, but Five Star recovered everything without damaging the encryption. I&#39;m incredibly impressed.",
    name: 'Nina K.',
    location: 'Glendale, CA',
  },
  {
    text: "We had client files on a USB drive that suddenly stopped showing up. Five Star handled the entire recovery process smoothly and professionally. They kept us updated, and within a few days we had all our documents back. Great service for business needs.",
    name: 'Daniel S.',
    location: 'College Station, TX',
  },
]

const faqs = [
  {
    q: 'What are common causes of USB drive failure?',
    a: 'USB drives can fail due to <strong>physical damage</strong> (e.g., broken connectors), file system corruption, water exposure, electrical surges, firmware issues, or improper removal during file transfers. Even simple wear and tear can cause data loss over time.',
  },
  {
    q: 'Can you recover data from a physically damaged USB drive?',
    a: 'Yes, depending on the type of physical damage. If the USB connector or circuit board is broken, recovery is often still possible. In these cases, we can attempt a <strong>monolith or chip-off recovery</strong>, which involves accessing the memory chip directly. However, if the NAND chip itself (where the data is actually stored) is cracked or physically damaged, recovery becomes impossible\u2014since that chip holds the only copy of your data.',
  },
  {
    q: 'I accidentally deleted files from my USB drive. Can you get them back?',
    a: 'In many cases, yes. As long as the files haven&#39;t been overwritten and TRIM hasn&#39;t been activated, the chances of recovery are very high. TRIM is a feature that automatically clears deleted data at the controller level\u2014it&#39;s not enabled manually by the user. Some USB drive controllers trigger TRIM sooner than others, which can affect recoverability. For the best chance of recovery, <strong>stop using the drive immediately</strong> and bring it in for evaluation.',
  },
  {
    q: 'Do you recover data from encrypted or BitLocker USB drives?',
    a: 'Yes. If you still have the correct <strong>BitLocker password or recovery key</strong>, we can usually retrieve data from encrypted USB flash drives\u2014even if the device is corrupted or unmountable. Our recovery process preserves the encryption and avoids data loss during repair.<br><br><strong>Having the BitLocker credentials is mandatory.</strong> We cannot bypass or brute-force BitLocker encryption. If the password or recovery key is unavailable, the data cannot be recovered.',
  },
  {
    q: 'Can you recover data from USB drives that show 0 bytes or don&#39;t mount?',
    a: 'Yes. Drives that appear as &ldquo;0 bytes&rdquo; or don&#39;t mount can still hold recoverable data. These symptoms often point to logical or firmware issues. We use advanced tools to bypass these errors and access the underlying memory.',
  },
  {
    q: 'How long does USB data recovery take?',
    a: 'Most USB data recovery cases are completed within <strong>3 to 5 business days</strong>. However, cases involving physical damage or complex firmware issues may take longer. <strong><a href="/expedited-service" class="faq-link">Expedited</a> and <a href="/expedited-service-plus" class="faq-link">Expedited Plus</a> Services</strong> are available for urgent cases.',
  },
  {
    q: 'How much does USB data recovery cost?',
    a: 'Pricing depends on the type of failure and the condition of the USB drive. <strong>Logical recovery</strong> typically ranges from <strong>$300 to $500</strong>, depending on storage capacity and whether the drive is encrypted. <strong>Chip-off or monolith recovery</strong> for physically damaged or unrecognized USB drives is <strong>$950 flat</strong>.<br><br>We provide free evaluations before starting any recovery, and there is no charge unless we&#39;re successful (excluding deleted file recovery or expedited service, which may require upfront payment). For a full breakdown of recovery options and pricing, please visit our <a href="/data-recovery-service-pricing" class="faq-link">cost page</a>.',
  },
  {
    q: 'Do you offer free evaluations?',
    a: 'Yes. We provide free evaluations on all USB data recovery cases. When you drop off or mail in your device, we&#39;ll first review the issue and provide you with an initial quote based on the symptoms and failure type. As long as you&#39;re okay with that quote range, we&#39;ll proceed with the full diagnostic at no cost. If we&#39;re able to recover your data, you will be expected to pay the full recovery fee based on the quote provided. If the actual recovery ends up requiring more work than expected and the final cost exceeds the quote, we&#39;ll pause and get your approval first before moving forward.',
  },
  {
    q: 'Do you offer nationwide USB data recovery services?',
    a: 'Yes. We provide USB data recovery services to customers across the United States. If you&#39;re not located near our Glendale, CA office, you can safely ship your USB drive to us for evaluation and recovery. Before you send anything in, we&#39;ll speak with you by phone or email to review the issue and provide an initial quote based on the symptoms. This way, you&#39;ll know what to expect before you ship the device. Once your device arrives, we&#39;ll confirm the quote and proceed with the evaluation. As always, you&#39;ll only pay if we&#39;re successful at recovering your data\u2014unless deleted file recovery or expedited service applies.',
  },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <HeroSection
      title="USB Data Recovery"
      subtitle="Professional USB Flash Drive Data Recovery Services"
      description="At Five Star Data Recovery, we specialize in USB data recovery for all types of <strong>USB flash drives</strong>, thumb drives, and external USB storage devices. Whether you&#39;ve accidentally deleted files, suffered physical damage to your USB stick, or are dealing with a corrupted or unrecognized drive, our professional data recovery services can help you <strong>recover data from a USB stick</strong> quickly and safely."
      bgImage="/usb-data-recovery-hero.webp"
      :trustBadges="trustBadges"
    />

    <StatsBar />

    <!-- SECTION 1 — Common Causes -->
    <section class="s-white">
      <div class="container">
        <div class="two-col-layout">
          <div>
            <h2 class="s-heading">Common Causes of USB Data Loss</h2>
            <p class="s-body">USB drives are small, portable, and easy to use, but they&#39;re also vulnerable to a variety of failures that can result in lost data, including:</p>
            <ul class="content-list">
              <li>Accidental file deletion</li>
              <li>File system corruption</li>
              <li>Physical damage (broken connectors, bent or cracked drives)</li>
              <li>Water damage or exposure to extreme temperatures</li>
              <li>Electrical surges or static discharge</li>
              <li>Firmware corruption</li>
              <li>Failed controller chips</li>
              <li>Improper removal from a computer</li>
            </ul>
            <p class="s-body">If any of these issues sound familiar, don&#39;t worry\u2014you&#39;re not alone. We help customers every day recover deleted files and lost data from corrupted USB drives of all brands and capacities.</p>
          </div>
          <div class="section-img-wrap">
            <img src="/usb-flash-drive-recovery-640.webp" alt="USB flash drive data recovery service" class="section-img" width="640" height="427" loading="lazy"
               srcset="/usb-flash-drive-recovery-640.webp 640w, /usb-flash-drive-recovery-1280.webp 1280w"
               sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2 — Types We Recover -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Types of USB Drives We Recover From</h2>
        <p class="s-body">We provide USB data recovery services for all types of USB storage devices, including:</p>
        <ul class="content-list">
          <li>Standard USB 2.0, USB 3.0, and USB-C flash drives</li>
          <li>USB external solid-state drives (SSDs)</li>
          <li>USB pen drives and thumb drives</li>
          <li>USB external hard drives</li>
          <li>Encrypted USB flash drives (BitLocker, hardware encrypted, etc.)</li>
        </ul>
        <p class="s-body">We&#39;ve successfully recovered data from thousands of USB devices\u2014no matter the brand, form factor, or failure type. Whether your drive is physically damaged, not recognized by your computer, or showing as empty, our team can help restore what matters most.</p>
        <p class="s-body"><strong>Popular Brands we Recover From:</strong> SanDisk, Kingston, Samsung, PNY, Corsair, Lexar, Toshiba, Transcend, Verbatim, and many more.</p>
      </div>
    </section>

    <!-- SECTION 3 — Recovery Process -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Our USB Data Recovery Process</h2>
        <p class="s-body">When you trust us with your USB data recovery, here&#39;s how the process works:</p>
        <div class="process-steps">
          <div class="process-step">
            <div class="step-num">1</div>
            <div>
              <h3 class="step-title">Free Consultation and Quote</h3>
              <p class="step-body">Before you drop off or ship your USB drive, we&#39;ll ask a few questions about the issue you&#39;re experiencing. Based on your description, we&#39;ll provide an initial quote and explain the likely recovery process. We&#39;ll determine whether your case involves logical corruption, firmware issues, or physical damage to the USB connector or internal components. If your USB contains important personal files or business-critical data, we&#39;ll explain how we handle and protect your information throughout the process. Our goal is full transparency \u2014 no pressure, no hidden fees. The consultation is always free, and you&#39;re under no obligation to proceed.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">2</div>
            <div>
              <h3 class="step-title">Drive Imaging and Safe Handling</h3>
              <p class="step-body">Once we receive your USB device, our first step is to create a full sector-by-sector image (clone) of the drive. This ensures your original data remains untouched during the recovery process. By working exclusively from the cloned copy, we eliminate the risk of further damage to your original USB drive. Whether your issue is caused by physical wear, connector damage, or internal chip failure, imaging preserves every recoverable bit exactly as it exists. This step is especially critical if your device is unstable or intermittently disconnecting. Safe handling and proper isolation of the original hardware allow us to perform advanced recovery techniques with full confidence.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">3</div>
            <div>
              <h3 class="step-title">Failure Type Diagnosis</h3>
              <p class="step-body">We categorize USB failures into two main types to determine the best recovery method: <strong>Logical Recovery</strong> \u2013 These cases include file system corruption, accidental deletion, or drives that don&#39;t mount but are still recognized by a computer. We use specialized tools to safely extract the data without altering the drive&#39;s structure. <strong>Chip-Off Recovery</strong> \u2013 For physically damaged drives or those that are completely unrecognized, we remove the NAND memory chip and access the raw data directly. This advanced process is used when the controller chip has failed or the USB is beyond standard repair.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">4</div>
            <div>
              <h3 class="step-title">File Recovery and Reconstruction</h3>
              <p class="step-body">Using advanced tools and proprietary software, we perform a deep scan on the cloned drive to recover data from the USB stick. This includes rebuilding file systems, locating file types, and piecing together fragmented files.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">5</div>
            <div>
              <h3 class="step-title">File Review and Approval</h3>
              <p class="step-body">Once recovery is complete, we&#39;ll provide you with a file list showing the names of the files we were able to recover. If you&#39;re happy with the results, we proceed to final data delivery.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">6</div>
            <div>
              <h3 class="step-title">Secure Data Delivery</h3>
              <p class="step-body">Your recovered files from the USB drive will be transferred onto a new external drive you provide (or you may purchase one from us).</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4 — Deleted Files -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Can You Recover Deleted Files from a USB Flash Drive?</h2>
        <p class="s-body">Yes, in many cases. If you&#39;ve accidentally deleted files and haven&#39;t written new data to the USB drive, the chances of recovery are high. However, with certain brands like <strong>Western Digital, SanDisk, or G-Drive</strong> external hard drives, deleted file recovery can be more complex due to firmware translation issues.</p>
        <p class="s-body">If you accidentally deleted files from a USB drive, <strong>stop using the drive immediately</strong> to avoid overwriting data. Call us right away for the best chance of successful recovery. Our engineers use advanced forensic tools to identify deleted file remnants that consumer software often misses.</p>
      </div>
    </section>

    <!-- SECTION 5 — Common Scenarios -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Common USB Data Recovery Scenarios</h2>
        <p class="s-body">Here are some of the most common scenarios we help with:</p>
        <ul class="content-list">
          <li>USB drive asks to be formatted when inserted</li>
          <li>USB not showing up at all</li>
          <li>USB detected, but no files visible</li>
          <li>USB drive showing wrong capacity</li>
          <li>Physically broken USB connectors</li>
          <li>Unreadable or inaccessible file system errors (FAT32, exFAT, NTFS, etc.)</li>
          <li>Corrupted USB drives with partial or fragmented files</li>
          <li>Flash drives with slow read speeds or frequent disconnections</li>
        </ul>
      </div>
    </section>

    <!-- SECTION 6 — File Types -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">What File Types Can We Recover?</h2>
        <p class="s-body">We can recover data from USB drives across a wide range of file types, including but not limited to:</p>
        <ul class="content-list">
          <li>Documents (Word, Excel, PowerPoint, PDF)</li>
          <li>Photos (JPG, PNG, TIFF, RAW formats)</li>
          <li>Videos (MP4, MOV, AVI, etc.)</li>
          <li>Audio Files (MP3, WAV, etc.)</li>
          <li>Project files (Photoshop PSDs, Premiere Projects)</li>
          <li>Archives (ZIP, RAR)</li>
        </ul>
        <p class="s-body">No matter what file types you&#39;ve lost, we&#39;ll do everything we can to recover your data from the USB stick.</p>
      </div>
    </section>

    <!-- SECTION 7 — Pricing -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Pricing for USB Data Recovery</h2>
        <p class="s-body">Our USB Data Recovery fees are flat-rate with no hidden charges. See our <NuxtLink to="/data-recovery-service-pricing" class="inline-link">pricing page</NuxtLink> for full details \u2014 fees depend on the type of failure:</p>
        <ul class="content-list">
          <li><strong>Logical USB Data Recovery:</strong> $300.00\u2013$500.00</li>
          <li><strong>Chip-Off USB Data Recovery:</strong> $950.00</li>
          <li><strong>Monolith USB Data Recovery:</strong> $950.00</li>
        </ul>
        <p class="s-body">During your initial consultation, we&#39;ll help identify which category your case falls under.</p>
      </div>
    </section>

    <!-- SECTION 8 — Turnaround -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">How Long Does USB Data Recovery Take?</h2>
        <p class="s-body">Most USB flash drive data recovery jobs take <strong>2\u20135 business days</strong>, depending on the failure type. We also offer <strong><NuxtLink to="/expedited-service" class="inline-link">Expedited and Expedited Plus</NuxtLink></strong> services for customers who need their data urgently.</p>
      </div>
    </section>

    <!-- SECTION 9 — Nationwide -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Nationwide Service \u2013 Free Round Trip Shipping Available</h2>
        <p class="s-body">Not local to Glendale, CA? No problem. We offer free round-trip shipping within the United States for all USB data recovery cases. Simply fill out our <NuxtLink to="/data-recovery/data-recovery-mail-in-service" class="inline-link">Mail-In Recovery Form</NuxtLink>, and we'll provide a prepaid shipping label to get your device safely to our lab.</p>
      </div>
    </section>

    <!-- REVIEWS -->
    <ReviewsSection :reviews="reviews" />

    <!-- SECTION 10 — Your Data Stays Secure -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Your Data Stays Secure</h2>
        <p class="s-body">From physically damaged USB flash drives to complex controller failures, our engineers treat every case with precision and professionalism. We&#39;ve recovered critical files for photographers, students, IT departments, and businesses of all sizes.</p>
        <ul class="content-list">
          <li>Flat-Rate Pricing with No Hidden Fees</li>
          <li>Free Diagnostics with Same-Day Status Updates</li>
          <li>High Success Rates for Physically Damaged USB Drives</li>
          <li>Fast Turnaround with Expedited Service Options</li>
          <li>No Data, No Charge Policy for Most Cases</li>
        </ul>
        <p class="s-body">Whether your USB drive is cracked, unrecognized, or showing 0 bytes, we&#39;re here to help restore what matters most.</p>
      </div>
    </section>

    <!-- QUOTE FORM -->
    <QuoteFormSection
      description="From broken connectors to failed controller chips, we&#39;ve recovered data from every type of USB failure. Our chip-off and monolith recovery techniques reach data that standard tools can&#39;t touch \u2014 with flat-rate pricing and no surprises."
      bullet1="Logical, chip-off, and monolith recovery available"
      bullet2="BitLocker and encrypted USB drives supported"
      bullet3="No Data, No Charge \u2014 free evaluation included"
      closing="Stop using the drive immediately \u2014 every write increases overwrite risk. Fill out the form and let our USB specialists evaluate your case for free."
      bgImage="/usb-data-recovery-hero.webp"
    />

    <!-- CONTACT BAND -->
    <section class="s-contact-band contact-band-bg">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Get Started with Your USB Data Recovery Today</h2>
        </div>
        <p class="contact-body-text">If you&#39;ve experienced data loss on your USB drive, don&#39;t risk making it worse by trying DIY tools. Let the professionals at Five Star Data Recovery help you recover your files from your USB drive safely, quickly, and affordably.</p>
        <ul class="contact-bullets">
          <li>Call us at (818) 272-8866</li>
          <li>Fill out our online quote form</li>
          <li>Bring your drive to our Glendale, CA lab</li>
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
.contact-band-bg { background: linear-gradient(to right, rgba(15,22,35,0.92) 0%, rgba(15,22,35,0.75) 60%, rgba(15,22,35,0.5) 100%), url('/usb-flash-drive-recovery.webp') center center / cover no-repeat !important; }
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
