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
            "priceRange": "$300 - $950"
          },
          {
            "@type": "Service",
            "name": "Hard Drive Not Showing Up Data Recovery",
            "url": "https://www.fivestardatarecovery.com/data-recovery/hard-drive-not-showing-up/",
            "areaServed": [{ "@type": "Country", "name": "United States" }],
            "description": "Professional data recovery for hard drives not showing up on Windows or Mac. Five Star Data Recovery diagnoses and recovers data from unrecognized, unallocated, and failed drives. Free diagnostic, flat-rate pricing."
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fivestardatarecovery.com/" },
              { "@type": "ListItem", "position": 2, "name": "Data Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/" },
              { "@type": "ListItem", "position": 3, "name": "Hard Drive Not Showing Up", "item": "https://www.fivestardatarecovery.com/data-recovery/hard-drive-not-showing-up/" }
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Can a failed hard drive PCB cause the drive to not show up?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. A failed printed circuit board (PCB) is a common cause of a hard drive not being recognized. PCB failures can result from power surges or electrical shorts and typically require component-level repair or replacement to restore functionality." } },
              { "@type": "Question", "name": "Does firmware corruption cause hard drives to disappear from the system?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Firmware corruption can prevent the drive from initializing correctly, making it invisible to both the BIOS and the operating system. Specialized tools and professional recovery labs are required to fix firmware issues safely." } },
              { "@type": "Question", "name": "Will a hard drive not showing up on one computer still work on another?", "acceptedAnswer": { "@type": "Answer", "text": "Possibly. Sometimes the issue lies with the original computer's USB port, SATA port, or power supply. Testing the drive on a different system can help rule out host-side problems—but if the drive still doesn't show up, it likely needs professional evaluation." } },
              { "@type": "Question", "name": "Can file system corruption prevent my hard drive from showing up?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Severe file system corruption can make the drive appear unallocated, raw, or invisible in the OS. In such cases, data recovery software or professional services may be required to extract the data without making things worse." } },
              { "@type": "Question", "name": "Is it safe to run CHKDSK or Disk Utility First Aid on a drive that isn't showing up?", "acceptedAnswer": { "@type": "Answer", "text": "No. Running CHKDSK (on Windows) or First Aid (on Mac) on an unstable or failing drive can cause further corruption or permanent data loss. These tools attempt to repair file system errors, but in doing so, they can overwrite damaged sectors or delete critical file structures. This can make the data unrecoverable—even by professional data recovery labs. If your drive isn't showing up, it's best to avoid any repair utilities and contact a recovery expert first." } },
              { "@type": "Question", "name": "Can a damaged USB enclosure prevent an external hard drive from being detected?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. In many external drives, the USB-to-SATA bridge board inside the enclosure can fail. Removing the drive from the enclosure and connecting it directly via SATA can help determine if the issue is with the enclosure or the drive itself. However, if your external drive is a Western Digital, SanDisk, or G-Drive, do not attempt to remove it from the enclosure yourself. Many of these drives have the USB 3.0 connector permanently soldered directly onto the drive's PCB, and they often include built-in hardware encryption that is tied to that specific board. Always consult a professional data recovery service first." } },
              { "@type": "Question", "name": "How do I know if my hard drive not showing up is due to physical damage?", "acceptedAnswer": { "@type": "Answer", "text": "Common signs of physical damage include clicking, buzzing, grinding sounds, or the drive remaining completely silent. If your drive shows any of these symptoms, stop all DIY attempts and contact a professional data recovery lab." } },
              { "@type": "Question", "name": "Can overheating cause a hard drive to stop showing up?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Prolonged exposure to high temperatures can damage the internal components of a hard drive, leading to immediate failure or intermittent recognition issues." } },
              { "@type": "Question", "name": "What's the difference between a hard drive not showing up in BIOS vs. not showing up in Windows?", "acceptedAnswer": { "@type": "Answer", "text": "If the drive doesn't show in BIOS, it suggests a hardware-level issue (such as PCB failure or firmware corruption). If the drive shows in BIOS but not in Windows, it's often a file system issue, driver problem, or logical failure." } },
              { "@type": "Question", "name": "Can bad sectors prevent my hard drive from being recognized at all?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Severe bad sector damage can make the drive unresponsive or prevent it from mounting. In these cases, sector-by-sector imaging tools used by professional data recovery engineers are often the safest recovery option." } }
            ]
          }
        ]
      })
    }
  ]
})

useSeoMeta({
  title: 'Hard Drive Not Showing Up - Five Star Data Recovery',
  ogTitle: 'Hard Drive Not Showing Up - Five Star Data Recovery',
  description: 'Need help recovering data from a hard drive not showing up? Our team offers expert Data Recovery Services with quick turnaround times.',
  ogDescription: 'Need help recovering data from a hard drive not showing up? Our team offers expert Data Recovery Services with quick turnaround times.',
  ogImage: 'https://www.fivestardatarecovery.com/hard-drive-not-showing-up-hero.webp',
})

const trustBadges = [
  { icon: 'clock', text: 'Available 24/7/365' },
  { icon: 'check', text: 'No Data = No Charge' },
  { icon: 'shield', text: '10+ Years in Business' },
  { icon: 'star', text: 'Free Nationwide Shipping' },
]

const reviews = [
  {
    text: "My external hard drive suddenly stopped showing up on my computer, and I couldn't access any of my files. I contacted Five Star Data Recovery and spoke with Elen, who explained the process clearly and helped me get the drive checked in. Within a few days, they recovered all of my photos and business documents. Their service was fast, professional, and affordable.",
    name: 'Brian K.',
    location: 'Los Angeles, CA',
  },
  {
    text: "My hard drive wasn't showing up in Disk Management, and I thought my data was gone for good. Five Star Data Recovery was able to diagnose the problem and recover 99% of my files. Their flat-rate pricing and No Data, No Charge policy gave me peace of mind. I'm so glad I found them!",
    name: 'Melissa R.',
    location: 'San Diego, CA',
  },
  {
    text: "I had a Seagate external hard drive that just stopped appearing on my Mac. Vahan personally reviewed my case and explained that the issue was with the drive's internal firmware. They recovered everything within a week. The communication and updates were top-notch.",
    name: 'Henry T',
    location: 'Summerlin, NV',
  },
]

const faqs = [
  {
    q: 'Can a failed hard drive PCB cause the drive to not show up?',
    a: 'Yes. A <strong>failed printed circuit board (PCB)</strong> is a common cause of a hard drive not being recognized. PCB failures can result from power surges or electrical shorts and typically require component-level repair or replacement to restore functionality.',
  },
  {
    q: 'Does firmware corruption cause hard drives to disappear from the system?',
    a: 'Yes. <strong>Firmware corruption</strong> can prevent the drive from initializing correctly, making it invisible to both the BIOS and the operating system. Specialized tools and professional recovery labs are required to fix firmware issues safely.',
  },
  {
    q: 'Will a hard drive not showing up on one computer still work on another?',
    a: 'Possibly. Sometimes the issue lies with the original computer\'s USB port, SATA port, or power supply. Testing the drive on a different system can help rule out host-side problems—but if the drive still doesn\'t show up, it likely needs professional evaluation.',
  },
  {
    q: 'Can file system corruption prevent my hard drive from showing up?',
    a: 'Yes. Severe <strong>file system corruption</strong> can make the drive appear unallocated, raw, or invisible in the OS. In such cases, data recovery software or professional services may be required to extract the data without making things worse.',
  },
  {
    q: "Is it safe to run CHKDSK or Disk Utility First Aid on a drive that isn't showing up?",
    a: '<strong>No.</strong> Running CHKDSK (on Windows) or First Aid (on Mac) on an unstable or failing drive can cause further corruption or permanent data loss. These tools attempt to repair file system errors, but in doing so, they can overwrite damaged sectors or delete critical file structures. This can make the data <strong>unrecoverable—even by professional data recovery labs</strong>. If your drive isn\'t showing up, it\'s best to avoid any repair utilities and contact a recovery expert first.',
  },
  {
    q: 'Can a damaged USB enclosure prevent an external hard drive from being detected?',
    a: 'Absolutely. In many external drives, the <strong>USB-to-SATA bridge board</strong> inside the enclosure can fail. Removing the drive from the enclosure and connecting it directly via SATA can help determine if the issue is with the enclosure or the drive itself. However, if your external drive is a <strong>Western Digital, SanDisk, or G-Drive</strong>, do not attempt to remove it from the enclosure yourself. Many of these drives have the USB 3.0 connector permanently soldered directly onto the drive\'s PCB, and they often include built-in hardware encryption that is tied to that specific board. Always consult a professional data recovery service first.',
  },
  {
    q: 'How do I know if my hard drive not showing up is due to physical damage?',
    a: 'Common signs of physical damage include <strong>clicking, buzzing, grinding sounds</strong>, or the drive remaining completely silent. If your drive shows any of these symptoms, stop all DIY attempts and contact a professional data recovery lab.',
  },
  {
    q: 'Can overheating cause a hard drive to stop showing up?',
    a: 'Yes. Prolonged exposure to <strong>high temperatures</strong> can damage the internal components of a hard drive, leading to immediate failure or intermittent recognition issues.',
  },
  {
    q: "What's the difference between a hard drive not showing up in BIOS vs. not showing up in Windows?",
    a: 'If the drive doesn\'t show in <strong>BIOS</strong>, it suggests a hardware-level issue (such as PCB failure or firmware corruption). If the drive shows in BIOS but <strong>not in Windows</strong>, it\'s often a file system issue, driver problem, or logical failure.',
  },
  {
    q: 'Can bad sectors prevent my hard drive from being recognized at all?',
    a: 'Yes. Severe <strong>bad sector damage</strong> can make the drive unresponsive or prevent it from mounting. In these cases, sector-by-sector imaging tools used by professional data recovery engineers are often the safest recovery option.',
  },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <HeroSection
      title="Hard Drive Not Showing Up?"
      subtitle="Get Your Data Back In No Time."
      description="A hard drive that suddenly disappears from your computer is frustrating—and scary if you think you've lost important files. Whether it's an internal or external hard drive, the issue can happen on both Windows and macOS. If your hard drive is not showing up, don't panic. There are safe steps you can take—and some things you definitely should avoid."
      bgImage="/hard-drive-not-showing-up-hero.webp"
      :trustBadges="trustBadges"
    />

    <StatsBar />

    <!-- SECTION 1 — Why -->
    <section class="s-white">
      <div class="container">
        <div class="two-col-layout">
          <div>
            <h2 class="s-heading">Why Your Hard Drive Isn't Showing Up</h2>
            <p class="s-body">Several reasons exist why a hard drive might not appear on your computer. Sometimes it's a minor connection issue. Other times, it could point to physical damage or corruption inside the drive. Understanding what might be happening helps you know what to try—and what to leave alone.</p>
            <p class="s-body">Common causes include:</p>
            <ul class="content-list">
              <li>Loose or faulty USB port</li>
              <li>A damaged file system</li>
              <li>Power issues or bad cables</li>
              <li>Errors with the operating system</li>
              <li>Mechanical failure inside the drive</li>
            </ul>
            <p class="s-body">Whether it's a desktop drive, portable external disk, or flash drive, the symptoms are similar. It powers on—or maybe it doesn't—but your system can't detect it.</p>
          </div>
          <div class="section-img-wrap">
            <img src="/hard-drive-not-showing-up-section-640.webp" alt="Hard drive not showing up error on computer screen" class="section-img" width="640" height="427" loading="lazy"
               srcset="/hard-drive-not-showing-up-section-640.webp 640w, /hard-drive-not-showing-up-section-800.webp 800w, /hard-drive-not-showing-up-section-1280.webp 1280w"
               sizes="(max-width: 640px) 100vw, (max-width: 1024px) 800px, 640px" />
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2 — Windows & Mac -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Windows and macOS: Same Problem, Different Fixes</h2>
        <p class="s-body">If your hard drive is not showing up on Mac, start by opening Disk Utility. The drive may appear there but not mount properly. Sometimes the Mac not recognizing the drive in Finder doesn't mean it's completely gone.</p>
        <p class="s-body">On Windows, open Device Manager and look under disk drives. You can also check System Information and Disk Management. If your Windows device doesn't list the drive anywhere, it's likely a hardware failure or file system issue. It's a common situation—your hard drive does not show up, even though it worked yesterday.</p>
      </div>
    </section>

    <!-- SECTION 3 — Safe Troubleshooting -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Safe Troubleshooting You Can Try</h2>
        <p class="s-body">You can rule out simple problems with a few safe checks:</p>
        <div class="process-steps">
          <div class="process-step">
            <div class="step-num">1</div>
            <div>
              <h3 class="step-title">Check the cables and ports</h3>
              <p class="step-body">Try a new USB cable and a different USB port. Cables fail more often than you might expect.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">2</div>
            <div>
              <h3 class="step-title">Try a different computer</h3>
              <p class="step-body">See if the drive shows up on another system to rule out device-specific issues.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">3</div>
            <div>
              <h3 class="step-title">Restart and check settings</h3>
              <p class="step-body">A reboot can reset system detection. Also, open your system settings to ensure the drive hasn't been disabled.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">4</div>
            <div>
              <h3 class="step-title">Look in system tools</h3>
              <p class="step-body">On Mac: Open Disk Utility. On Windows: Use Device Manager, Disk Management, or System Information. If your drive is there but shows up as "RAW" or unallocated, that indicates file system corruption.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4 — What Not To Do -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">What You Should Not Do</h2>
        <p class="s-body">Trying to fix things yourself can make the problem worse. We regularly see people permanently lose data after trying one of the following:</p>
        <ul class="content-list">
          <li>Clicking "format" or "erase" when prompted</li>
          <li>Running recovery software without checking for physical issues</li>
          <li>Constantly unplugging and replugging the drive into different ports</li>
          <li>Attempting to rebuild a partition on an unstable drive</li>
        </ul>
        <p class="s-body">If your goal is fixing the hard drive and saving your files, these DIY steps can do the opposite. Drives with mechanical problems should only be opened in a cleanroom. Each time you power them on, you risk damaging your data more.</p>
      </div>
    </section>

    <!-- SECTION 5 — First Aid & CHKDSK Warning -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Why First Aid and CHKDSK Can Make Things Worse</h2>
        <p class="s-body">When your hard drive doesn't appear, it's tempting to use tools like First Aid on a Mac or CHKDSK on Windows. But they can cause permanent data loss if your drive is damaged.</p>
        <h3 class="s-subheading">First Aid on Mac: Risky for Failing Drives</h3>
        <p class="s-body">First Aid, found in Disk Utility, is made to fix basic file system issues. But when the drive is unstable or corrupted, First Aid might shift or rewrite data structures. That can cause files to vanish or prevent the drive from mounting at all. We've seen cases where running First Aid made some data completely inaccessible. This is especially true for older or <NuxtLink to="/data-recovery/dropped-hard-drive">dropped</NuxtLink> drives.</p>
        <h3 class="s-subheading">CHKDSK on Windows: Can Delete Your Data</h3>
        <p class="s-body">CHKDSK helps users find and fix errors on Windows computers, but it does not address failing hardware. It often deletes file pointers that it considers broken, which can wipe out your actual files. If your external storage device is failing, CHKDSK may overwrite valuable data while trying to mark <NuxtLink to="/data-recovery/bad-sectors">bad sectors</NuxtLink>.</p>
      </div>
    </section>

    <!-- SECTION 6 — What Makes a Drive Unrecognizable -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">What Makes a Drive "Unrecognizable"?</h2>
        <p class="s-body">When a drive becomes unrecognizable, it means your computer can no longer communicate with it properly. This can happen due to two main types of failures: logical and physical.</p>
        <ul class="content-list">
          <li><strong>A logical failure</strong> occurs when the structure of your data is damaged. This might include corruption in the file system, missing partitions, or a drive that appears unallocated. In these cases, the computer might still "see" the drive, but it can't understand what's on it.</li>
          <li><strong>A physical failure</strong> means something is wrong with the internal hardware. That might be a damaged read/write head, a failed motor, or an issue with the drive's circuit board. These problems often show up as <NuxtLink to="/hard-drive-clicking">clicking</NuxtLink>, grinding, or beeping sounds.</li>
        </ul>
      </div>
    </section>

    <!-- SECTION 7 — File System Corruption -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Understanding File System Corruption</h2>
        <p class="s-body">The file system acts like a map—it tells your computer how to find and access your files. When the file system gets damaged, your files might still remain on the drive, but your computer no longer knows where to find them.</p>
        <p class="s-body">Corruption can happen for many reasons. It can occur if you remove the drive during a file transfer. Power surges, improper ejection, or failing hardware can also cause it. On Mac, this often appears as an unmounted drive in Disk Utility. On Windows, it might appear as "RAW" or "unallocated" in Disk Management.</p>
        <p class="s-body">The good news? File system corruption can often be fixed. Just stop using the drive and do not run any repair tools. Instead, a professional can clone the drive and extract your data safely.</p>
      </div>
    </section>

    <!-- SECTION 8 — Real-World Examples -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Real-World Recovery Examples</h2>
        <p class="s-body">Here are a few real cases we've handled that started with a hard drive not being recognized:</p>
        <div class="examples-list">
          <div class="example-item">
            <p class="s-body">A photographer dropped a portable external drive while traveling. It didn't appear on their MacBook afterward. We diagnosed internal head damage and performed a cleanroom recovery to restore over 10,000 RAW image files.</p>
          </div>
          <div class="example-item">
            <p class="s-body">A college student's Windows laptop wouldn't boot, and their external backup didn't appear in File Explorer. We found file system corruption and safely recovered their documents and semester projects.</p>
          </div>
          <div class="example-item">
            <p class="s-body">A business client brought in a flash-based external storage unit that failed after a system update. The device wouldn't mount, but we imaged the drive and recovered customer records that we would have permanently lost.</p>
          </div>
        </div>
        <p class="s-body">Even with good habits, failure can still happen—but early detection and fast action can prevent permanent data loss.</p>
      </div>
    </section>

    <!-- SECTION 9 — When to Call -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">When to Call a Recovery Expert</h2>
        <p class="s-body">If your hard drive not showing up on Mac or Windows continues after basic checks, it's time to contact a pro. Don't keep experimenting—especially if the drive makes noises or clicks. That's a sign of physical failure.</p>
        <p class="s-body">At Five Star Data Recovery, we specialize in safe recoveries from:</p>
        <ul class="content-list">
          <li>Drives with corrupted or unreadable partitions</li>
          <li>Damaged storage media devices (internal or external)</li>
          <li>Accidentally formatted or deleted drives</li>
          <li>Broken USB ports or failed connection issues</li>
        </ul>
        <p class="s-body">We recover data from HDDs, SSDs, and flash devices of all brands. We will return the recovered files on a new drive or through secure transfer.</p>
      </div>
    </section>

    <!-- REVIEWS -->
    <LazyReviewsSection :reviews="reviews" />

    <!-- SECTION 10 — What to Expect -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">What to Expect From Us</h2>
        <p class="s-body">Once you submit your quote request, our team will review the details you provide and respond with an accurate, initial price estimate based on your device type and symptoms. Once we receive your actual device, our engineers will perform a full diagnostic to confirm the issue and finalize your quote—always staying within the same pricing tier unless the issue turns out to be different than described.</p>
        <p class="s-body">You'll also receive a clear turnaround estimate, so you know what to expect. For many standard cases, we're able to recover and return your data within just a few days. All recovery work is performed 100% in-house at our Glendale, CA lab, ensuring your data stays private, secure, and never outsourced.</p>
        <p class="s-body">Whether you're dropping off locally or using our nationwide mail-in service, you'll receive fast communication and professional care.</p>
      </div>
    </section>

    <!-- QUOTE FORM -->
    <LazyQuoteFormSection
      description="Whether your drive shows as RAW, unallocated, or completely invisible — our engineers diagnose the exact cause and recover your data without risky repair tools that can make things worse."
      bullet1="Free diagnostic — logical and physical assessment"
      bullet2="Safe cloning before any recovery attempt"
      bullet3="No Data, No Charge (most cases)"
      closing="Do not run CHKDSK, First Aid, or format the drive. Fill out the form and let us evaluate it safely."
      bgImage="/hard-drive-not-showing-up-hero.webp"
    />

    <!-- CONTACT BAND -->
    <section class="s-contact-band contact-band-bg">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Let's Recover Your Files</h2>
        </div>
        <p class="contact-body-text">If your hard drive is not showing up, stop troubleshooting on your own. One wrong click can make things worse. Let Five Star Data Recovery handle it with care.</p>
        <ul class="contact-bullets">
          <li>Visit us in person or mail in your drive</li>
          <li>Call now for a free evaluation</li>
          <li>Safe. Fast. Professional recovery every step of the way.</li>
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
.s-subheading { font-size: 1.1rem; font-weight: 800; color: #1a1a2e; margin: 24px 0 10px; }
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
.examples-list { display: flex; flex-direction: column; }
.example-item { padding: 24px 0; border-bottom: 1px solid #e2e6ee; }
.example-item:last-child { border-bottom: none; }
.example-item .s-body { margin: 0; }
.s-contact-band { background: #0f1623; padding: 44px 0; border-top: 3px solid #C9A84C; border-bottom: 3px solid #C9A84C; }
.contact-band-bg { background: linear-gradient(to right, rgba(15,22,35,0.92) 0%, rgba(15,22,35,0.75) 60%, rgba(15,22,35,0.5) 100%), url('/hard-drive-not-showing-up-section.webp') center center / cover no-repeat !important; }
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
