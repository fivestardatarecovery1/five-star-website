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
            "priceRange": "$$",
            "areaServed": [{ "@type": "Country", "name": "United States" }],
            "url": "https://www.fivestardatarecovery.com/"
          },
          {
            "@type": "Service",
            "name": "Hard Drive Data Recovery",
            "url": "https://www.fivestardatarecovery.com/data-recovery/hard-drive-recovery/",
            "areaServed": [{ "@type": "Country", "name": "United States" }],
            "description": "Professional hard drive data recovery services for internal and external HDDs. Cleanroom recovery, flat-rate pricing, no data no charge. Serving clients nationwide."
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fivestardatarecovery.com/" },
              { "@type": "ListItem", "position": 2, "name": "Data Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/" },
              { "@type": "ListItem", "position": 3, "name": "Hard Drive Data Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/hard-drive-recovery/" }
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Do you recover data from both internal and external hard drives?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! We recover data from both internal hard drives (HDDs) and external hard drives. Whether the drive was inside a laptop, desktop, or inside an external enclosure, we have the tools and experience to help." } },
              { "@type": "Question", "name": "Can you recover data from a hard drive that was previously reformatted?", "acceptedAnswer": { "@type": "Answer", "text": "In many cases, yes. If your hard drive was reformatted and the data hasn't been heavily overwritten, we may still be able to recover your files. Contact us for a free evaluation so we can assess your specific situation." } },
              { "@type": "Question", "name": "Do you handle hard drives with bad sectors or slow read speeds?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Drives with bad sectors, read instability, or extremely slow transfer speeds are one of the most common recovery scenarios we handle. We use professional imaging tools that can safely read around damaged areas." } },
              { "@type": "Question", "name": "What brands of hard drives do you specialize in?", "acceptedAnswer": { "@type": "Answer", "text": "We work on all major hard drive brands, including Western Digital, Seagate, Toshiba, Hitachi, and others. No matter the manufacturer, our clean room and imaging tools are fully equipped for professional recovery." } },
              { "@type": "Question", "name": "Can I open the hard drive myself to check for damage before sending it in?", "acceptedAnswer": { "@type": "Answer", "text": "No. We strongly advise against opening your hard drive. Even a small amount of dust entering the drive can cause irreversible platter damage. All internal inspections are performed inside our certified clean room environment." } },
              { "@type": "Question", "name": "How do you recover data from hard drives with mechanical failure?", "acceptedAnswer": { "@type": "Answer", "text": "For mechanical issues like clicking, buzzing, or non-spinning drives, we perform component-level repairs inside our clean room. This may involve replacing internal parts like read/write heads or actuator arms to temporarily restore functionality for imaging." } },
              { "@type": "Question", "name": "What file types can you recover from a hard drive?", "acceptedAnswer": { "@type": "Answer", "text": "We can recover almost all file types, including documents, photos, videos, databases, system files, and email archives. After the recovery, we provide you with a full list of the recovered files for review." } },
              { "@type": "Question", "name": "Do you work on both Windows and Mac formatted hard drives?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We recover data from NTFS, exFAT, HFS+, APFS, and other file systems used in both Windows and Mac environments." } }
            ]
          }
        ]
      })
    }
  ]
})

useSeoMeta({
  title: 'Hard Drive Data Recovery - Five Star Data Recovery',
  ogTitle: 'Hard Drive Data Recovery Services',
  description: 'Lost Data? We can help with professional data recovery services. We specialize in HDD Data Recovery and Internal Hard Drive Data Recovery.',
  ogDescription: 'Lost Data? We can help with professional data recovery services. We specialize in HDD Data Recovery and Internal Hard Drive Data Recovery.',
  ogImage: 'https://www.fivestardatarecovery.com/wp-content/uploads/2025/05/Logo-01-1024x1024.png',
})

const reviews = [
  {
    text: '\u201cI\u2019m based in Seattle, Washington, and shipped my dead external hard drive to Five Star Data Recovery after it suddenly stopped showing up. The free shipping both ways made the process easy, and within a few days, they recovered all my photos and business files. Highly recommend their service!\u201d',
    name: 'Daniel P.',
    location: 'Seattle, WA'
  },
  {
    text: '\u201cAfter my hard drive started making clicking noises, I contacted several local places in my area, but wasn\u2019t impressed. Five Star Data Recovery provided a flat-rate quote upfront and offered free shipping for my case. They recovered 98% of my data, and I\u2019m so grateful for their transparency and professionalism.\u201d',
    name: 'Monica R.',
    location: 'Chicago, IL'
  },
  {
    text: '\u201cI live in Houston, Texas, and my external hard drive failed with no warning. Five Star\u2019s team guided me through their mail-in process, provided daily updates, and successfully recovered all my important documents. Their no hidden fees policy made the experience stress-free.\u201d',
    name: 'Kevin L.',
    location: 'Houston, TX'
  },
]

const faqs = [
  {
    q: '1. Do you recover data from both internal and external hard drives?',
    a: 'Yes! We recover data from both <strong>internal hard drives (HDDs)</strong> and <strong>external hard drives</strong>. Whether the drive was inside a laptop, desktop, or inside an external enclosure, we have the tools and experience to help.'
  },
  {
    q: '2. Can you recover data from a hard drive that was previously reformatted?',
    a: 'In many cases, yes. If your hard drive was reformatted and the data hasn\u2019t been heavily overwritten, we may still be able to recover your files. Contact us for a free evaluation so we can assess your specific situation.'
  },
  {
    q: '3. Do you handle hard drives with bad sectors or slow read speeds?',
    a: 'Yes. Drives with <strong>bad sectors</strong>, <strong>read instability</strong>, or <strong>extremely slow transfer speeds</strong> are one of the most common recovery scenarios we handle. We use professional imaging tools that can safely read around damaged areas.'
  },
  {
    q: '4. What brands of hard drives do you specialize in?',
    a: 'We work on all major hard drive brands, including <strong>Western Digital, Seagate, Toshiba, Hitachi</strong>, and others. No matter the manufacturer, our clean room and imaging tools are fully equipped for professional recovery.'
  },
  {
    q: '5. Can I open the hard drive myself to check for damage before sending it in?',
    a: 'No. We strongly advise against opening your hard drive. Even a small amount of dust entering the drive can cause irreversible platter damage. All internal inspections are performed inside our <strong>certified clean room environment</strong>.'
  },
  {
    q: '6. How do you recover data from hard drives with mechanical failure?',
    a: 'For mechanical issues like <strong>clicking</strong>, <strong>buzzing</strong>, or <strong>non-spinning drives</strong>, we perform component-level repairs inside our clean room. This may involve replacing internal parts like read/write heads or actuator arms to temporarily restore functionality for imaging.'
  },
  {
    q: '7. What file types can you recover from a hard drive?',
    a: 'We can recover almost all file types, including <strong>documents, photos, videos, databases, system files</strong>, and <strong>email archives</strong>. After the recovery, we provide you with a full list of the recovered files for review.'
  },
  {
    q: '8. Do you work on both Windows and Mac formatted hard drives?',
    a: 'Yes. We recover data from <strong>NTFS, exFAT, HFS+, APFS</strong>, and other file systems used in both Windows and Mac environments.'
  },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <HeroSection
      title="Hard Drive Data Recovery Services"
      subtitle="Get Your Data Back In No Time."
      description="When a hard drive fails, it can feel like everything is lost. Lost data can be profoundly upsetting. This includes personal memories, important work files, and family photos. At Five Star Data Recovery, we specialize in fast, secure, and professional hard drive data recovery for individuals, businesses, and organizations nationwide."
      bgImage="/hard-drive-recovery-hero.jpg"
      :trustBadges="[
        { icon: 'clock', text: 'Available 24/7/365' },
        { icon: 'check', text: 'No Data = No Charge' },
        { icon: 'shield', text: '10+ Years in Business' },
        { icon: 'star', text: 'Free Nationwide Shipping' },
      ]"
    />

    <StatsBar />

    <!-- INTRO -->
    <section class="s-white">
      <div class="container">
        <p class="s-body">We recover files from all types of storage devices, no matter the brand, operating system, or failure type. If your <NuxtLink to="/hard-drive-clicking" class="inline-link">drive clicks</NuxtLink>, won't mount, or your <NuxtLink to="/data-recovery/hard-drive-not-showing-up" class="inline-link">system doesn't recognize it</NuxtLink>, our team of experienced engineers will be able to help you.</p>
        <p class="s-body">Our <NuxtLink to="/data-recovery" class="inline-link">data recovery service</NuxtLink> is for everyone. It doesn't matter if you are a student, a small business owner, a photographer, or an IT worker. We can help you. Our team works with care, precision, and complete confidentiality.</p>
        <p class="s-body">We also understand how overwhelming data loss can feel. That's why our staff takes the time to explain the process clearly, answer your questions, and keep you updated at every stage.</p>
        <p class="s-body"><em>Expert service with real results always keeps you informed.</em></p>
      </div>
    </section>

    <!-- WHAT IS HDD RECOVERY + COMMON REASONS -->
    <section class="s-grey">
      <div class="container two-col-layout">
        <div>
          <h2 class="s-heading">What Is Hard Drive Data Recovery?</h2>
          <p class="s-body">The process of hard drive data recovery involves retrieving files that someone has lost, deleted, or damaged. This applies to hard drives that have failed or are not working properly. This may include fixing hardware, extracting data from software, or making a full disk image. This helps examine and recover files from the drive without causing more damage.</p>
          <p class="s-body">The <NuxtLink to="/pricing" class="inline-link">cost of recovery</NuxtLink> depends on the type of failure, but we always provide a flat-rate quote with no hidden fees before any work begins.</p>
          <p class="s-body">Our recovery process applies to both internal and <NuxtLink to="/data-recovery/external-hard-drive" class="inline-link">external hard drives</NuxtLink>, including <NuxtLink to="/data-recovery/desktop-recovery" class="inline-link">desktop computers</NuxtLink>, laptops, <NuxtLink to="/data-recovery/raid-recovery" class="inline-link">servers</NuxtLink>, and portable enclosures.</p>
        </div>
        <div>
          <h2 class="s-heading">Common Reasons Hard Drives Fail</h2>
          <p class="s-body">Many ways exist for a hard drive to fail, including physical damage, electrical failure, and file system corruption. Some of the most common situations we see include:</p>
          <ul class="content-list">
            <li>Power surges or electrical damage</li>
            <li>Drops, impacts, or vibration damage</li>
            <li>Water, moisture, or liquid exposure</li>
            <li>Overheating or poor ventilation</li>
            <li>Accidental formatting or file deletion</li>
            <li>Corrupted file systems and partitions</li>
            <li>Malware, viruses, or software conflicts</li>
            <li>Operating system failure or boot loop</li>
          </ul>
          <p class="s-body">You can recover data from a damaged hard drive or software problems with our tools and experience to help you succeed.</p>
        </div>
      </div>
    </section>

    <!-- RECOVERY PROCESS -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading center">Our Hard Drive Recovery Process</h2>
        <p class="s-intro center">At Five Star Data Recovery, our approach is precise and secure:</p>
        <div class="process-steps">
          <div class="process-step">
            <div class="step-num">1</div>
            <div>
              <h3 class="step-title">Free Diagnostic</h3>
              <p class="step-body">We begin with a full diagnostic of your device to understand the nature of the failure. Whether it's a flash drive, RAID array, or traditional spinning disk, we provide clear results before proceeding.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">2</div>
            <div>
              <h3 class="step-title">Disk Imaging</h3>
              <p class="step-body">If the drive has bad or unstable sectors, we quickly make a disk image. This keeps the drive's contents safe. This protects your data during the recovery process and avoids further degradation.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">3</div>
            <div>
              <h3 class="step-title">Recovery</h3>
              <p class="step-body">Our engineers fix problems or replace parts in our <NuxtLink to="/data-recovery/clean-room" class="inline-link">cleanroom</NuxtLink>. They work to recover lost data from your device.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">4</div>
            <div>
              <h3 class="step-title">File Verification</h3>
              <p class="step-body">Once recovery is complete, we provide a preview of your recovered files so you can confirm what's been retrieved.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">5</div>
            <div>
              <h3 class="step-title">Final Delivery</h3>
              <p class="step-body">We return your recovered files on a blank drive that you provide or purchase from us.</p>
            </div>
          </div>
        </div>
        <div class="guarantee-strip">
          <span class="guarantee-icon">🛡</span>
          <p><strong>No Data, No Charge</strong> — If we can't recover your hard drive data, you don't pay. <em>(most cases)</em></p>
        </div>
      </div>
    </section>

    <!-- HOW HARD DRIVES WORK -->
    <section class="s-grey">
      <div class="container two-col-layout">
        <div>
          <h2 class="s-heading">How Hard Drives Work (And Why They Fail)</h2>
          <p class="s-body">A hard drive stores data on spinning magnetic disks known as platters. When you save a file, a tiny read/write head moves across the platter to write or retrieve information. These parts work with incredible precision—but they're also extremely fragile.</p>
          <p class="s-body">Failed hard drives can happen in several ways:</p>
          <ul class="content-list">
            <li>Mechanical failure — such as a head crash or stuck spindle</li>
            <li>Electrical failure — power surges can fry the drive's PCB</li>
            <li>Firmware corruption — software inside the drive malfunctions</li>
            <li>Logical errors — corruption in the file system or partition table</li>
            <li>Encryption lockout — inaccessible because of failed password or software (correct password must be provided)</li>
            <li>Virus damage — some malware destroys key structures or the boot sector. In some cases, the computer may still see the drive, but the user interface will freeze or the contents appear blank. In some cases, the drive won't spin or the system won't detect it at all.</li>
          </ul>
          <p class="s-body">We can recover hard drive data from almost any model or format. This includes brands like Seagate, Western Digital, Toshiba, and Samsung.</p>
        </div>
        <div>
          <img src="/hard-drive-internal-platters.jpg" alt="Open hard drive showing internal platters and read/write heads" class="rounded-img" />
        </div>
      </div>
    </section>

    <!-- LOGICAL VS PHYSICAL -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading center">Logical vs. Physical Recovery</h2>
        <p class="s-intro center">Understanding your type of failure helps determine the right solution.</p>
        <div class="two-col-cards">
          <div class="type-card">
            <h3 class="type-card-title">Logical Failures</h3>
            <ul class="content-list">
              <li>The drive is detected, but inaccessible</li>
              <li>Deleted files, missing folders, or lost partitions</li>
              <li>File systems appear RAW or unformatted</li>
              <li>Recovery is software-based</li>
              <li>Faster turnaround and lower cost</li>
            </ul>
          </div>
          <div class="type-card">
            <h3 class="type-card-title">Physical Failures</h3>
            <ul class="content-list">
              <li>The drive clicks, beeps, or doesn't spin</li>
              <li>The system doesn't detect the device</li>
              <li>Requires component repair or replacement</li>
              <li>Performed in a cleanroom</li>
              <li>More complex but often recoverable</li>
            </ul>
          </div>
        </div>
        <p class="s-body" style="margin-top: 24px; text-align: center;">No matter the type, we provide professional data recovery hard drive solutions designed for long-term safety and success.</p>
      </div>
    </section>

    <!-- WHY DIY IS RISKY -->
    <section class="s-grey">
      <div class="container two-col-layout">
        <div>
          <h2 class="s-heading">Why DIY Recovery Can Be Risky</h2>
          <p class="s-body">We know you want to try software tools or YouTube tricks. However, this can make things worse. This is especially true for failed hard drives or sensitive parts.</p>
          <ul class="content-list">
            <li>Running recovery software on a failing drive can cause permanent platter damage</li>
            <li>Opening a drive outside a cleanroom can introduce dust and contamination</li>
            <li>DIY recovery often overwrites the critical data you're trying to recover</li>
          </ul>
          <p class="s-body">Once overwritten, even the best data drive hard recovery techniques can't help. Let our trained professionals protect your data from further loss.</p>
        </div>
        <div>
          <h2 class="s-heading">Why Choose Five Star Data Recovery?</h2>
          <p class="s-body">We're not a repair shop dabbling in recovery—we're a dedicated data recovery service trusted by individuals and businesses across the U.S.</p>
          <ul class="content-list">
            <li>Certified Cleanroom Lab</li>
            <li>Skilled Engineers &amp; Recovery Specialists</li>
            <li>Confidential &amp; Secure Handling</li>
            <li>Transparent Quotes &amp; No Unexpected Fees</li>
            <li>"No Data, No Charge" Guarantee <em>(most cases)</em></li>
            <li>Based in Glendale, CA — Nationwide Service Available</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- YOUR DATA STAYS SECURE -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Your Data Stays Secure</h2>
        <p class="s-body">We understand your files are private. Whether you're recovering sensitive business files or personal memories, we keep your data protected from start to finish.</p>
        <ul class="content-list">
          <li>In-house recovery only — no third-party labs</li>
          <li>All data is securely stored and permanently deleted after final delivery</li>
          <li>NDA available for sensitive projects</li>
          <li>Our lab uses access control and 24/7 surveillance</li>
        </ul>
      </div>
    </section>

    <!-- REVIEWS -->
    <ReviewsSection :reviews="reviews" />

    <!-- CONTACT BAND -->
    <section class="s-contact-band">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Contact Us for Hard Drive Recovery</h2>
        </div>
        <div class="contact-body">
          <p class="contact-body-text">If you're dealing with lost data, clicking drives, or a failed system, don't wait—reach out today. The sooner you call, the better the chances of full recovery.</p>
          <ul class="contact-bullets">
            <li>Visit our lab in Glendale, CA</li>
            <li><NuxtLink to="/data-recovery/mail-in-service" class="contact-link">Mail in your drive</NuxtLink> from anywhere in the U.S.</li>
            <li>Call us now for your free diagnostic</li>
          </ul>
          <p class="contact-body-text">The drive may be broken, but your files aren't gone forever. Let us help you recover lost data today.</p>
        </div>
        <NuxtLink to="/start-recovery" class="btn-start-recovery">Start Your Recovery</NuxtLink>
      </div>
    </section>

    <!-- FAQ -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading" style="text-align: center; margin-bottom: 36px;">Frequently Asked Questions</h2>
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

    <FooterBar />
  </div>
</template>

<style scoped>
*, *::before, *::after { box-sizing: border-box; }
.page-content { font-family: 'Inter', sans-serif; color: #1a1a2e; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 28px; }
.s-white { background: #fff; padding: 72px 0; }
.s-grey  { background: #f4f7fc; padding: 72px 0; }

.s-heading { font-size: clamp(1.5rem, 2.8vw, 2rem); font-weight: 900; color: #1a1a2e; line-height: 1.25; margin-bottom: 20px; }
.s-heading.center { text-align: center; }
.s-body { font-size: 0.95rem; color: #4a5568; line-height: 1.8; margin-bottom: 14px; }
.s-intro { font-size: 1rem; color: #4a5568; line-height: 1.75; margin-bottom: 36px; }
.s-intro.center { text-align: center; }

.inline-link { color: #C9A84C; font-weight: 600; text-decoration: underline; }

/* Content list */
.content-list { list-style: none; padding: 0 0 0 20px; margin: 0 0 20px; display: flex; flex-direction: column; gap: 10px; }
.content-list li { font-size: 0.95rem; color: #4a5568; line-height: 1.65; position: relative; padding-left: 16px; }
.content-list li::before { content: '»'; color: #C9A84C; font-weight: 900; position: absolute; left: -4px; top: 0; }

/* Two-col */
.two-col-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
.rounded-img { width: 100%; height: auto; border-radius: 16px; display: block; object-fit: cover; }

/* Process steps */
.process-steps { display: flex; flex-direction: column; gap: 0; margin-bottom: 36px; }
.process-step { display: flex; align-items: flex-start; gap: 24px; padding: 28px 0; border-bottom: 1px solid #eee; }
.process-step:last-child { border-bottom: none; }
.step-num { width: 48px; height: 48px; background: #1a1a2e; color: #C9A84C; font-size: 1.2rem; font-weight: 900; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.step-title { font-size: 1rem; font-weight: 800; color: #1a1a2e; margin-bottom: 8px; }
.step-body { font-size: 0.93rem; color: #4a5568; line-height: 1.7; margin: 0; }

/* Guarantee strip */
.guarantee-strip { background: #1a1a2e; border-radius: 10px; padding: 20px 28px; display: flex; align-items: center; gap: 16px; }
.guarantee-icon { font-size: 1.4rem; }
.guarantee-strip p { color: #fff; font-size: 0.95rem; margin: 0; }

/* Logical vs Physical cards */
.two-col-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
.type-card { background: #f4f7fc; border-radius: 12px; padding: 32px 28px; border-top: 4px solid #C9A84C; }
.type-card-title { font-size: 1.1rem; font-weight: 800; color: #1a1a2e; margin-bottom: 18px; }

/* FAQ */
.faq-wrap { display: flex; flex-direction: column; gap: 0; border: 1.5px solid #e2e6ee; border-radius: 12px; overflow: hidden; }
.faq-row { border-bottom: 1px solid #e2e6ee; }
.faq-row:last-child { border-bottom: none; }
.faq-row.active { background: #fff; }
.faq-trigger { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; background: #fff; border: none; cursor: pointer; text-align: left; gap: 16px; font-family: inherit; }
.faq-trigger span:first-child { font-size: 0.95rem; font-weight: 700; color: #1a1a2e; line-height: 1.4; }
.faq-toggle { font-size: 1.4rem; font-weight: 300; color: #C9A84C; flex-shrink: 0; }
.faq-answer { padding: 0 24px 22px; font-size: 0.92rem; color: #4a5568; line-height: 1.75; }

/* Contact band */
.s-contact-band { background: #0a0c14; padding: 72px 0; border-bottom: 3px solid #C9A84C; }
.contact-banner-card { border: 1px solid rgba(201,168,76,0.3); border-radius: 8px; padding: 28px 32px; margin-bottom: 28px; }
.contact-banner-heading { font-size: clamp(1.4rem, 2.5vw, 1.9rem); font-weight: 900; color: #fff; margin: 0; }
.contact-body-text { font-size: 0.95rem; color: rgba(255,255,255,0.7); line-height: 1.75; margin-bottom: 16px; }
.contact-bullets { list-style: none; padding: 0; margin: 0 0 28px; display: flex; flex-direction: column; gap: 8px; }
.contact-bullets li { font-size: 0.93rem; color: rgba(255,255,255,0.65); display: flex; align-items: center; gap: 10px; }
.contact-bullets li::before { content: '✓'; color: #C9A84C; font-weight: 700; }
.contact-link { color: #C9A84C; text-decoration: underline; }
.btn-start-recovery { display: inline-block; background: #C9A84C; color: #1a1a1a; font-weight: 800; font-size: 1rem; padding: 16px 36px; border-radius: 6px; text-decoration: none; transition: background 0.2s; }
.btn-start-recovery:hover { background: #b8923e; }

@media (max-width: 900px) {
  .two-col-layout, .two-col-cards { grid-template-columns: 1fr; gap: 36px; }
}
@media (max-width: 640px) {
  .process-step { flex-direction: column; gap: 14px; }
}
</style>
