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
            "priceRange": "$300 - $950",
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "498" },
            "review": [
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Tom B." },
                "datePublished": "2024-11-05",
                "reviewBody": "They recovered my design projects from a LaCie Rugged drive that suddenly failed. Impressive speed and care!",
                "name": "Creative Lifesaver",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
              }
            ]
          },
          {
            "@type": "Service",
            "name": "LaCie Data Recovery Services",
            "url": "https://www.fivestardatarecovery.com/data-recovery/lacie-data-recovery/",
            "areaServed": [{ "@type": "Country", "name": "United States" }],
            "description": "Expert LaCie Data Recovery services for external drives, RAID arrays, and SSDs. Serving Glendale, Los Angeles, and nationwide with flat-rate pricing and free mail-in service."
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fivestardatarecovery.com/" },
              { "@type": "ListItem", "position": 2, "name": "Data Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/" },
              { "@type": "ListItem", "position": 3, "name": "LaCie Data Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/lacie-data-recovery/" }
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Can you recover data from a LaCie external drive that's not showing up?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we specialize in LaCie data recovery from drives that don't mount, aren't recognized by the system, or show errors. Whether it's a USB-C, Thunderbolt, or legacy FireWire connection, we can diagnose and recover your files." } },
              { "@type": "Question", "name": "Do you recover data from LaCie RAID and Rugged drives?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We offer LaCie RAID recovery for models like the 2big, 5big, and Rugged RAID Pro. Whether your RAID is degraded, failed, or reformatted, we can rebuild and extract your valuable data safely." } },
              { "@type": "Question", "name": "What are common failure symptoms with LaCie drives?", "acceptedAnswer": { "@type": "Answer", "text": "Frequent issues with LaCie drives include clicking noises, overheating, slow access times, file system corruption, or complete failure to mount. These symptoms indicate possible hardware or firmware problems that require professional recovery." } },
              { "@type": "Question", "name": "Can you recover files from a LaCie drive that was accidentally formatted?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. If your LaCie drive was accidentally formatted or partitioned, we use advanced recovery tools to perform deep scans and recover deleted files, directories, and folder structures—provided no significant data was overwritten." } },
              { "@type": "Question", "name": "What should I do if my LaCie drive starts making unusual noises?", "acceptedAnswer": { "@type": "Answer", "text": "Immediately power it down. Clicking, buzzing, or grinding noises often indicate mechanical failure. Continued use can cause permanent damage. Bring or send it in for a safe LaCie hard drive recovery evaluation." } },
              { "@type": "Question", "name": "Do you support recovery from encrypted LaCie drives?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we can recover data from encrypted LaCie drives—provided you supply the correct password or encryption key. Without it, data decryption is not possible due to security protocols." } },
              { "@type": "Question", "name": "Can you recover data from older LaCie drives with FireWire or legacy ports?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We maintain legacy hardware and connectors to perform data recovery on older LaCie drives, including FireWire 400/800 models. We've successfully restored data from LaCie devices over a decade old." } },
              { "@type": "Question", "name": "Is there a difference in recovery methods for LaCie SSDs vs. HDDs?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. LaCie SSD recovery requires different techniques than traditional hard drives due to TRIM commands, chip-level storage, and wear-leveling. Our engineers are trained in both technologies to ensure optimal results." } }
            ]
          }
        ]
      })
    }
  ]
})

useSeoMeta({
  title: 'Lacie Data Recovery - Five Star Data Recovery',
  ogTitle: 'Lacie Data Recovery - Five Star Data Recovery',
  description: 'Need help recovering data from your Lacie hard drive? Our team offers expert Lacie Data Recovery Services with quick turnaround times.',
  ogDescription: 'Need help recovering data from your Lacie hard drive? Our team offers expert Lacie Data Recovery Services with quick turnaround times.',
  ogImage: 'https://www.fivestardatarecovery.com/lacie-data-recovery-hero.webp',
})

const trustBadges = [
  { icon: 'clock', text: 'Available 24/7/365' },
  { icon: 'check', text: 'No Data = No Charge' },
  { icon: 'shield', text: '10+ Years in Business' },
  { icon: 'star', text: 'Free Nationwide Shipping' },
]

const reviews = [
  {
    text: "We lost an entire wedding video project after formatting our Lacie Rugged SSD. Five Star Data Recovery recovered all the footage in less than 72 hours. Total lifesavers.",
    name: 'Jenna M',
    location: 'Santa Monica, CA',
  },
  {
    text: "I had 4TB of files on my Lacie d2 drive that suddenly stopped mounting. Other places said it was hopeless. Five Star was able to recover 99% of my data.",
    name: 'Alex R',
    location: 'Austin, TX',
  },
  {
    text: "My team uses a 4big RAID for media production. One drive failed, then another. We thought we lost the whole project. Five Star not only recovered the files—they kept the folder structure completely intact.",
    name: 'Brandon H',
    location: 'New York, NY',
  },
]

const faqs = [
  {
    q: "Can you recover data from a LaCie external drive that's not showing up?",
    a: "Yes, we specialize in LaCie data recovery from drives that <strong>don't mount, <a href='/data-recovery/hard-drive-not-showing-up' class='faq-link'>aren't recognized by the system</a></strong>, or show errors. Whether it's a USB-C, Thunderbolt, or legacy FireWire connection, we can diagnose and recover your files.",
  },
  {
    q: 'Do you recover data from LaCie RAID and Rugged drives?',
    a: "Absolutely. We offer <strong>LaCie RAID recovery</strong> for models like the 2big, 5big, and Rugged RAID Pro. Whether your RAID is degraded, failed, or reformatted, we can rebuild and extract your valuable data safely.",
  },
  {
    q: 'What are common failure symptoms with LaCie drives?',
    a: "Frequent issues with LaCie drives include <strong><a href='/hard-drive-clicking' class='faq-link'>clicking noises</a></strong>, overheating, slow access times, file system corruption, or complete failure to mount. These symptoms indicate possible hardware or firmware problems that require professional recovery.",
  },
  {
    q: 'Can you recover files from a LaCie drive that was accidentally formatted?',
    a: "Yes. If your LaCie drive was <strong>accidentally formatted or partitioned</strong>, we use advanced recovery tools to perform deep scans and recover deleted files, directories, and folder structures—provided no significant data was overwritten.",
  },
  {
    q: 'What should I do if my LaCie drive starts making unusual noises?',
    a: "<strong>Immediately power it down.</strong> Clicking, buzzing, or grinding noises often indicate mechanical failure. Continued use can cause permanent damage. Bring or send it in for a safe LaCie hard drive recovery evaluation.",
  },
  {
    q: 'Do you support recovery from encrypted LaCie drives?',
    a: "Yes, we can recover data from <strong>encrypted LaCie drives</strong>—provided you supply the correct password or encryption key. Without it, data decryption is not possible due to security protocols.",
  },
  {
    q: 'Can you recover data from older LaCie drives with FireWire or legacy ports?',
    a: "Yes. We maintain <strong>legacy hardware and connectors</strong> to perform data recovery on older LaCie drives, including FireWire 400/800 models. We've successfully restored data from LaCie devices over a decade old.",
  },
  {
    q: 'Is there a difference in recovery methods for LaCie SSDs vs. HDDs?',
    a: "Yes. <strong>LaCie SSD recovery</strong> requires different techniques than traditional hard drives due to TRIM commands, chip-level storage, and wear-leveling. Our engineers are trained in both technologies to ensure optimal results.",
  },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <HeroSection
      title="Lacie Data Recovery Services You Can Trust"
      subtitle="Get Your Data Back In No Time."
      description="At Five Star Data Recovery, we specialize in comprehensive Lacie data recovery services. If you have lost files, we can help. This can happen because of accidental deletion, problems with the file system, physical damage, or sudden drive failure. We will recover your lost files quickly and safely."
      bgImage="/lacie-data-recovery-hero.webp"
      :trustBadges="trustBadges"
    />

    <StatsBar />

    <!-- SECTION 1 — Drive Types -->
    <section class="s-white">
      <div class="container">
        <div class="two-col-layout">
          <div>
            <h2 class="s-heading">Types of Lacie Drives We Recover From</h2>
            <p class="s-body">We provide recovery for a wide range of Lacie external hard drives and RAID systems, including:</p>
            <ul class="content-list">
              <li>Lacie Rugged Drives (HDD and SSD)</li>
              <li>Lacie d2 Professional Desktop Drives</li>
              <li>Lacie 2big, 4big, and 6big RAID arrays</li>
              <li>Lacie Mobile SSDs</li>
              <li>Lacie Porsche Design Drives</li>
              <li>USB-C and Thunderbolt-connected models</li>
              <li>Formatted or encrypted drives</li>
            </ul>
            <p class="s-body">No matter if you use a portable USB-C drive or a multi-disk Thunderbolt <NuxtLink to="/data-recovery/raid-data-recovery" class="inline-link">RAID array</NuxtLink>, our lab can help. We have the tools and knowledge to recover data from a Lacie device in any setup or condition.</p>
          </div>
          <div class="section-img-wrap">
            <img src="/lacie-rugged-drive-recovery-640.webp" alt="LaCie Rugged Thunderbolt USB-C drive data recovery" class="section-img" width="640" height="427" loading="lazy"
               srcset="/lacie-rugged-drive-recovery-640.webp 640w, /lacie-rugged-drive-recovery-1280.webp 1280w"
               sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2 — Common Issues -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Common Issues with Lacie Drives</h2>
        <p class="s-body">Despite their reputation for quality, Lacie drives can still fail or lose data because of a variety of issues. Below are some common causes of data loss that we see in our lab:</p>
        <div class="issues-grid">
          <div class="issue-card">
            <h3 class="issue-title">Accidental Deletion or Formatting</h3>
            <p class="s-body">One of the most common scenarios involves users accidentally deleting files or formatting a drive. In many cases, the data still exists on the drive but has been marked as "free space." Acting quickly increases the chances of successful recovery.</p>
          </div>
          <div class="issue-card">
            <h3 class="issue-title">File System Corruption</h3>
            <p class="s-body">Corruption in the file system can occur after improper disconnection, system crashes, or software bugs. A corrupted drive might appear blank, unmounted, or prompt you to format it when you connect your Lacie <NuxtLink to="/data-recovery/external-hard-drive-data-recovery" class="inline-link">external hard drive</NuxtLink>.</p>
          </div>
          <div class="issue-card">
            <h3 class="issue-title">Physical Damage</h3>
            <p class="s-body">Although Lacie drives withstand impact like the Rugged series, they're not indestructible. <NuxtLink to="/data-recovery/dropped-hard-drive" class="inline-link">Drops</NuxtLink>, water exposure, and electrical surges can cause mechanical failure or damage internal components.</p>
          </div>
          <div class="issue-card">
            <h3 class="issue-title">Disk Utility Errors</h3>
            <p class="s-body">Mac users often encounter issues when using Disk Utility. Clicking Erase or running First Aid incorrectly can result in losing data or triggering a drive reformat.</p>
          </div>
          <div class="issue-card">
            <h3 class="issue-title">Connection Problems</h3>
            <p class="s-body">Sometimes your computer might <NuxtLink to="/data-recovery/hard-drive-not-showing-up" class="inline-link">not recognize the drive</NuxtLink>. Faulty USB ports, bad cables, or issues with the bridge board inside the drive enclosure can cause this.</p>
          </div>
          <div class="issue-card">
            <h3 class="issue-title">Bad Sectors and Drive Degradation</h3>
            <p class="s-body">Over time, hard drives develop bad sectors—areas of the disk that can no longer be read. If not caught early, this can lead to permanent file loss.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3 — RAID Recovery -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Advanced Lacie RAID Drive Recovery</h2>
        <p class="s-body">Many professionals use Lacie RAID drives like the 2big, 4big, and 6big models for speed and redundancy. These systems often use RAID 0, RAID 1, RAID 5, or RAID 10 configurations. When one or more drives in a RAID array fail, recovery gets more complicated. This can also happen if the RAID is misconfigured or corrupted.</p>
        <p class="s-body">Here's how we handle Lacie RAID data recovery:</p>
        <ul class="content-list">
          <li>We never work on the original disks directly.</li>
          <li>Our engineers clone each drive to create exact disk images.</li>
          <li>We identify the RAID parameters, including block size, disk order, parity rotation, and stripe configuration.</li>
          <li>We virtually rebuild the RAID array using specialized software.</li>
          <li>We recover files from the rebuilt structure, even from partially degraded arrays.</li>
          <li>If we find damaged files, we attempt reconstruction using header repair and file stitching.</li>
        </ul>
        <p class="s-body">If you have lost data from a Lacie RAID system, we can help. Whether it was because of failure, formatting, or disk removal, we can rebuild the array and recover your data.</p>
      </div>
    </section>

    <!-- SECTION 4 — Recovery Process -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Our Lacie Drive Data Recovery Process</h2>
        <p class="s-body">We follow a safe, transparent recovery process:</p>
        <div class="process-steps">
          <div class="process-step">
            <div class="step-num">1</div>
            <div>
              <h3 class="step-title">Diagnostic</h3>
              <p class="step-body">We examine your device to determine the type of issue: logical, physical, or file system failure.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">2</div>
            <div>
              <h3 class="step-title">Imaging</h3>
              <p class="step-body">We create a read-only image of your drive to avoid further data loss.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">3</div>
            <div>
              <h3 class="step-title">Scanning</h3>
              <p class="step-body">We scan the image to locate deleted files, damaged partitions, or corrupted directories.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">4</div>
            <div>
              <h3 class="step-title">Recovery</h3>
              <p class="step-body">We extract and verify recovered files, checking their integrity.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">5</div>
            <div>
              <h3 class="step-title">Delivery</h3>
              <p class="step-body">We return your recovered data on a new storage device or one you provide.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 5 — File Types -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">File Types and Use Cases for Lacie Drives</h2>
        <p class="s-body">Lacie hard drives are trusted by professionals and creatives for their ability to store large amounts of data securely. Many users store:</p>
        <ul class="content-list">
          <li>High-resolution videos and photography</li>
          <li>RAW footage for film editing</li>
          <li>Adobe and Final Cut project files</li>
          <li>Audio and music production sessions</li>
          <li>CAD files and creative design assets</li>
          <li>Large client databases or backups</li>
        </ul>
        <p class="s-body">These file types are often critical and not easily recreated. When you experience losing data from a Lacie, especially project files or client deliverables, it's essential to work with a recovery team that understands the importance of fast and accurate file recovery.</p>
      </div>
    </section>

    <!-- SECTION 6 — How LaCie Differs -->
    <section class="s-grey">
      <div class="container">
        <div class="two-col-layout reverse">
          <div class="section-img-wrap">
            <img src="/lacie-creative-professional-recovery-640.webp" alt="Creative professional using LaCie drive on set" class="section-img" width="640" height="427" loading="lazy"
               srcset="/lacie-creative-professional-recovery-640.webp 640w, /lacie-creative-professional-recovery-1280.webp 1280w"
               sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div>
            <h2 class="s-heading">How Lacie Drives Differ from Other Storage Devices</h2>
            <p class="s-body">Lacie drives are built with performance in mind. They often have faster connections like Thunderbolt or USB-C. These are popular with Mac users and those who use creative software. These high-speed drives are great for video editing or accessing files quickly. However, their design can make recovery more complex.</p>
            <p class="s-body">Lacie external hard drives may also have embedded encryption, which makes DIY recovery risky. If someone uses the wrong tool, they could overwrite the encryption header or corrupt the file system entirely. That's why we always start with a forensic image. This keeps your original device safe during the recovery process.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 7 — What to Avoid -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">What You Should Avoid After Losing Data</h2>
        <p class="s-body">Many clients unintentionally make recovery more difficult by trying to fix the problem themselves. Here's what not to do if you're dealing with a failed or deleted Lacie drive:</p>
        <ul class="content-list">
          <li>Don't run Disk Utility's First Aid or CHKDSK</li>
          <li>Don't format the drive again</li>
          <li>Don't install recovery software directly on the same drive</li>
          <li>Don't keep connecting and disconnecting the drive</li>
        </ul>
        <p class="s-body">Each of these actions can reduce your chance of recovery. They may overwrite important areas or harm the file system further. If your Lacie external hard drive shows signs of failure, stop using it. Send it to a professional recovery service.</p>
      </div>
    </section>

    <!-- REVIEWS -->
    <ReviewsSection :reviews="reviews" />

    <!-- SECTION 8 — File Systems -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">File Systems We Work With</h2>
        <p class="s-body">Lacie drives may use different file systems depending on whether they're used on Mac or PC:</p>
        <ul class="content-list">
          <li><strong>exFAT or FAT32</strong> – Common for cross-platform usage, but prone to corruption</li>
          <li><strong>HFS+ and APFS</strong> – Used by macOS, especially on Time Machine and media storage</li>
          <li><strong>NTFS</strong> – Common for Windows users</li>
          <li><strong>EXT4</strong> – Used in Linux-based environments or NAS systems</li>
        </ul>
        <p class="s-body">Each file system stores and deletes data differently. Our tools allow us to recover lost files from a Lacie drive regardless of format. We also recover from drives showing as RAW or unallocated.</p>
      </div>
    </section>

    <!-- SECTION 9 — Creative Professionals -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Our Experience with Creative and Production Professionals</h2>
        <p class="s-body">Five Star Data Recovery has worked with countless production houses, creative agencies, and media professionals. Industries consider Lacie external hard drives a staple because they handle large files and support fast workflows. We understand how devastating it is to lose a wedding shoot, a commercial project, or hours of edited footage.</p>
        <p class="s-body">We've recovered data from Lacie devices used in film sets, music studios, animation workstations, and commercial photography sessions. Whether you formatted your Lacie hard disk, dropped it on location, or it became unreadable mid-edit, we're here to help. Our lab handles not just recovery, but also the specialized file types used in creative workflows.</p>
      </div>
    </section>

    <!-- SECTION 10 — Expedited -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Expedited Recovery Services</h2>
        <p class="s-body">If you're facing a deadline or business interruption, we offer expedited data recovery services:</p>
        <ul class="content-list">
          <li><strong>Expedited Service ($200 per device):</strong> Prioritized during business hours.</li>
          <li><strong>Expedited Plus Service ($500 per device):</strong> 24/7 emergency recovery with non-stop work on your case.</li>
        </ul>
        <p class="s-body">These expedited fees are non-refundable and are in addition to standard recovery charges.</p>
      </div>
    </section>

    <!-- SECTION 11 — Why Choose -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Why Choose Five Star Data Recovery?</h2>
        <ul class="content-list">
          <li>Specializing in Lacie external hard drives and RAID systems</li>
          <li>In-house <NuxtLink to="/data-recovery/clean-room-data-recovery" class="inline-link">cleanroom</NuxtLink> for physically damaged drives</li>
          <li>Industry-leading success rates</li>
          <li>Flat-rate pricing and free diagnostics</li>
          <li>"No data, no charge" guarantee (except expedited services)</li>
          <li>Forensic-grade tools and certified engineers</li>
          <li>Friendly support team with real-time updates</li>
        </ul>
      </div>
    </section>

    <!-- SECTION 12 — Prevention Tips -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Tips to Prevent Future Data Loss</h2>
        <p class="s-body">Once your data is recovered, we always recommend a few key steps to prevent future issues:</p>
        <ul class="content-list">
          <li>Use cloud backups or local mirroring tools to keep multiple copies of your files</li>
          <li>Avoid ejecting Lacie drives while files are still transferring</li>
          <li>Keep drives in dry, temperature-controlled spaces</li>
          <li>Replace older drives every few years as performance degrades</li>
        </ul>
        <p class="s-body">Even the best storage devices wear out over time. With proactive care and proper backup systems in place, you can avoid the stress of losing important files again.</p>
      </div>
    </section>

    <!-- SECTION 13 — Final Thoughts -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Final Thoughts: When in Doubt, Reach Out</h2>
        <p class="s-body">Lacie drives are built tough, but recovery requires expertise. If you have a single corrupted file or a whole RAID array that won't mount, we can help. We have the tools and experience to recover your data safely.</p>
        <p class="s-body">If you're ever unsure about what to do next, don't risk it. Reach out to our team for guidance. We'll walk you through the next steps, offer a free diagnostic, and help you get your files back with clarity and confidence.</p>
      </div>
    </section>

    <RelatedLinks :links="[
      { text: 'External Hard Drive Recovery', href: '/data-recovery/external-hard-drive-data-recovery' },
      { text: 'RAID Data Recovery', href: '/data-recovery/raid-data-recovery' },
      { text: 'Hard Drive Recovery', href: '/data-recovery/hard-drive-recovery' },
      { text: 'Dropped Hard Drive Recovery', href: '/data-recovery/dropped-hard-drive' },
      { text: 'Clean Room Data Recovery', href: '/data-recovery/clean-room-data-recovery' },
    ]" />

    <!-- QUOTE FORM -->
    <QuoteFormSection
      description="LaCie drives are built for creative professionals — and we know exactly how to recover them. From Rugged SSDs to 6big RAID arrays and Thunderbolt-encrypted models, we handle every LaCie configuration."
      bullet1="Specialists in LaCie Rugged, d2, and RAID systems"
      bullet2="Encrypted and Thunderbolt drive recovery"
      bullet3="No Data, No Charge (most cases)"
      closing="Don't reformat or run Disk Utility. Fill out the form and we'll get back to you with a free assessment and quote."
      bgImage="/lacie-data-recovery-hero.webp"
    />

    <!-- CONTACT BAND -->
    <section class="s-contact-band contact-band-bg">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Start Your Lacie Data Recovery Today</h2>
        </div>
        <p class="contact-body-text">If you're dealing with accidental deletion, physical damage, or corruption, don't wait. The longer you delay, the greater risk you take with your data.</p>
        <ul class="contact-bullets">
          <li>Free diagnostic — no obligation</li>
          <li>Flat-rate pricing — no hidden fees</li>
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
.issues-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; margin-top: 8px; }
.issue-card { background: #fff; border: 1px solid #e2e6ee; border-radius: 10px; padding: 24px; }
.issue-title { font-size: 1rem; font-weight: 800; color: #1a1a2e; margin-bottom: 10px; }
.process-steps { display: flex; flex-direction: column; }
.process-step { display: flex; align-items: flex-start; gap: 24px; padding: 28px 0; border-bottom: 1px solid #e2e6ee; }
.process-step:last-child { border-bottom: none; }
.step-num { width: 48px; height: 48px; background: #1a1a2e; color: #C9A84C; font-size: 1.2rem; font-weight: 900; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.step-title { font-size: 1rem; font-weight: 800; color: #1a1a2e; margin-bottom: 8px; }
.step-body { font-size: 0.93rem; color: #4a5568; line-height: 1.7; margin: 0; }
.s-contact-band { background: #0f1623; padding: 44px 0; border-top: 3px solid #C9A84C; border-bottom: 3px solid #C9A84C; }
.contact-band-bg { background: linear-gradient(to right, rgba(15,22,35,0.92) 0%, rgba(15,22,35,0.75) 60%, rgba(15,22,35,0.5) 100%), url('/lacie-rugged-drive-recovery.webp') center center / cover no-repeat !important; }
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
@media (max-width: 768px) { .two-col-layout, .two-col-layout.reverse { grid-template-columns: 1fr; direction: ltr; } .issues-grid { grid-template-columns: 1fr; } }
</style>
