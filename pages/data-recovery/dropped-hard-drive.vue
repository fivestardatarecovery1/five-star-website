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
            "name": "Dropped Hard Drive Data Recovery",
            "url": "https://www.fivestardatarecovery.com/data-recovery/dropped-hard-drive/",
            "areaServed": [{ "@type": "Country", "name": "United States" }],
            "description": "Professional data recovery for dropped hard drives. Five Star Data Recovery uses a certified cleanroom and advanced tools to recover data from physically damaged HDDs. Free diagnostic, flat-rate pricing, No Data No Charge."
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fivestardatarecovery.com/" },
              { "@type": "ListItem", "position": 2, "name": "Data Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/" },
              { "@type": "ListItem", "position": 3, "name": "Dropped Hard Drive Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/dropped-hard-drive/" }
            ]
          }
        ]
      })
    }
  ]
})

useSeoMeta({
  title: 'Dropped Hard Drive Recovery Services - Five Star Data Recovery',
  ogTitle: 'Dropped Hard Drive Recovery Services - Five Star Data Recovery',
  description: 'Accidentally dropped your hard drive? Our data recovery engineers specialize in recovering data from drives with physical damage from a drop.',
  ogDescription: 'Accidentally dropped your hard drive? Our data recovery engineers specialize in recovering data from drives with physical damage from a drop.',
  ogImage: 'https://www.fivestardatarecovery.com/dropped-hard-drive-hero.webp',
})

const trustBadges = [
  { icon: 'clock', text: 'Available 24/7/365' },
  { icon: 'check', text: 'No Data = No Charge' },
  { icon: 'shield', text: '10+ Years in Business' },
  { icon: 'star', text: 'Free Nationwide Shipping' },
]

const reviews = [
  {
    text: "I accidentally knocked my external hard drive off my desk while it was plugged in. It started making clicking noises and wouldn't show up on my computer. I brought it to Five Star Data Recovery, and they explained the clean room process clearly. Within a few days, I had all of my family photos and videos back.",
    name: 'Rachel R.',
    location: 'Reno, NV',
  },
  {
    text: "I was devastated after my portable drive fell off the nightstand and wouldn't mount on my Mac. I found Five Star Data Recovery through a friend and I'm so glad I did. They replaced the damaged heads in a clean room and got all my documents back. Transparent, fast, and worth every penny!",
    name: 'Emily L',
    location: 'Burbank, CA',
  },
  {
    text: "My hard drive took a bad fall, and every other place I called gave me vague answers. Five Star was different\u2014they were upfront about the process and pricing. They even showed me a full list of the recovered files before I paid. Top-tier service all the way.",
    name: 'Linda G',
    location: 'New York, NY',
  },
]

const faqs = [
  {
    q: 'What should I do immediately after dropping my hard drive?',
    a: 'If your hard drive has been dropped, <strong>power it off immediately</strong> and avoid trying to turn it back on. Running a damaged drive can worsen internal damage, especially if the read/write heads are misaligned. Call us right away at Five Star Data Recovery so we can guide you through the safest next steps and help prevent permanent data loss.',
  },
  {
    q: 'Can you recover data from a drive that is clicking after being dropped?',
    a: 'Yes. A clicking sound usually indicates <strong>internal damage to the read/write heads or actuator arm</strong>, which often occurs when a drive is dropped. Most of the time, we can recover the data using clean room tools and donor parts. The main deciding factor in whether the data is recoverable is the <strong>condition of the platters</strong>—which depends on how many times the drive was powered on after the drop. The fewer attempts made to power it on, the higher the chances of a successful recovery.',
  },
  {
    q: 'Is it safe to use data recovery software on a dropped hard drive?',
    a: '<strong>No.</strong> Using DIY data recovery software on a physically damaged drive can lead to further data loss or permanent damage. If your drive has been dropped and is showing signs of failure (clicking, not spinning, or not recognized), it’s best to consult a professional recovery service.',
  },
  {
    q: 'How much does dropped hard drive recovery cost?',
    a: 'We offer <strong>flat-rate pricing</strong> for dropped hard drive recovery, with rates depending on the type and extent of physical damage. There are <strong>no hidden fees</strong>, and diagnostics are always free. You only pay if we successfully recover your data.',
  },
  {
    q: 'Can data still be recovered if the drive was dropped while in use?',
    a: 'Yes. Drives that were dropped while powered on are more likely to suffer internal damage, such as head crashes or platter contact—but recovery is often still possible. At Five Star Data Recovery, the process does not begin with imaging for mechanically damaged drives. Instead, we start with a <strong>clean room inspection</strong> to assess internal damage. If the read/write heads are physically damaged, they must be replaced using <strong>compatible donor parts</strong> before we can safely proceed. Once the new heads are installed, we begin carefully <strong>imaging or cloning the drive sector by sector</strong> to recover your data safely and effectively.',
  },
  {
    q: 'How long does dropped hard drive data recovery take?',
    a: 'Most recoveries take <strong>3–5 business days</strong>, depending on the severity of the damage. We also offer <strong>Expedited</strong> and <strong>Expedited Plus</strong> services for urgent situations, giving your case immediate priority—even after hours or on weekends.',
  },
  {
    q: 'Will I get a list of the recovered files before I pay?',
    a: 'Yes. Once we complete the recovery process, we’ll provide you with a <strong>detailed file list</strong> showing exactly what was recovered. At that point, you can choose whether or not to move forward with the recovery. If you decide not to proceed, <strong>you pay nothing</strong>. However, once you approve the recovery and we deliver the data, payment is required in full.',
  },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">


    <HeroSection
      title="Dropped Hard Drive Recovery Services"
      subtitle="Get Your Data Back In No Time."
      description="Accidentally dropped your hard drive? At Five Star Data Recovery, we specialize in recovering data from physically damaged drives using advanced tools and Class 100 clean room technology. Whether your drive is clicking, not spinning, or not being recognized, our engineers can diagnose and recover your data safely. We offer flat-rate pricing, free diagnostics, and a strict no data, no charge policy."
      bgImage="/dropped-hard-drive-hero.webp"
      :trustBadges="trustBadges"
    />

    <StatsBar />

    <!-- SECTION 1 — Why Hard Drives Fail -->
    <section class="s-white">
      <div class="container">
        <div class="two-col-layout">
          <div>
            <h2 class="s-heading">Why Hard Drives Fail After Being Dropped</h2>
            <p class="s-body">Most modern hard drives have delicate moving parts inside. When a drive is dropped, even from a low height, the sudden impact can damage key components. One of the most common issues is a misaligned or broken read/write head—the part responsible for reading data from the spinning disks (platters). In some cases, the platters themselves may become scratched. Other times, the damage causes <NuxtLink to="/data-recovery/bad-sectors">bad sectors</NuxtLink> that prevent the drive from loading properly. The result can be a drive that clicks, spins up without mounting, or is not recognized by your computer at all.</p>
          </div>
          <div class="section-img-wrap">
            <img src="/dropped-hard-drive-section-640.webp" alt="Inside a dropped hard drive — damaged platters and read/write head" class="section-img" width="640" height="427" loading="lazy"
               srcset="/dropped-hard-drive-section-640.webp 640w, /dropped-hard-drive-section-800.webp 800w, /dropped-hard-drive-section-1280.webp 1280w"
               sizes="(max-width: 640px) 100vw, (max-width: 1024px) 800px, 640px" />
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2 — Common Symptoms -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Common Symptoms of a Dropped Hard Drive</h2>
        <p class="s-body">Not all dropped drives show the same signs of failure. Some common symptoms include:</p>
        <ul class="content-list">
          <li>Clicking hard drive noises when powered on</li>
          <li>Drive spins up, but doesn't appear on your desktop or file manager</li>
          <li>Slower performance or freezing when trying to access files</li>
          <li>Complete failure to mount or detect</li>
          <li>Grinding, buzzing, or beeping sounds</li>
        </ul>
        <p class="s-body">If you notice any of these symptoms, stop using the drive immediately. Continuing to power on or scan a damaged drive can make recovering data much harder—or even impossible.</p>
      </div>
    </section>

    <!-- SECTION 3 — What To Do -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">What to Do When You Drop Your Hard Drive</h2>
        <p class="s-body">When dealing with data from a dropped hard drive, the most important thing to do is avoid DIY fixes or recovery software. These tools are not designed for mechanically damaged drives and can make the problem worse. Here's what you should do:</p>
        <ul class="content-list">
          <li>Unplug the drive and do not try to open it.</li>
          <li>Avoid running disk repair or scan tools.</li>
          <li>Contact a professional data recovery lab as soon as possible.</li>
          <li>Describe the symptoms and how the accident happened.</li>
        </ul>
        <p class="s-body">We strongly advise against continuing to power the drive on, especially if you hear clicking or unusual noises. These sounds often indicate that the read/write head is damaged or misaligned.</p>
      </div>
    </section>

    <!-- SECTION 4 — How We Recover -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">How We Recover Data from a Dropped External HDD</h2>
        <p class="s-body">At Five Star Data Recovery, we use advanced cleanroom equipment and tools designed specifically for recovering data from physically damaged hard drives.</p>
        <div class="process-steps">
          <div class="process-step">
            <div class="step-num">1</div>
            <div>
              <h3 class="step-title">Free Diagnostic Evaluation</h3>
              <p class="step-body">We inspect the hard drive to assess internal damage, look for platter scratches, and determine whether components like the actuator arm or head stack are affected.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">2</div>
            <div>
              <h3 class="step-title">Cleanroom Repair</h3>
              <p class="step-body">If necessary, our engineers open the drive in a certified cleanroom and replace or reposition the read/write head to stabilize the disk.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">3</div>
            <div>
              <h3 class="step-title">Imaging the Drive</h3>
              <p class="step-body">Once the drive is stable, we create a sector-by-sector image of the entire disk. This preserves the state of the drive and allows us to work off a clone.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">4</div>
            <div>
              <h3 class="step-title">Data Extraction</h3>
              <p class="step-body">We scan the image for recoverable files, even if some sectors are damaged or corrupted. Our software is capable of pulling files out from drives with thousands of bad sectors.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">5</div>
            <div>
              <h3 class="step-title">File Verification and Delivery</h3>
              <p class="step-body">We provide you with a file list of all recoverable data and deliver the recovered content on a new drive.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 5 — Why Choose Five Star -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Why Choose Five Star Data Recovery?</h2>
        <ul class="content-list">
          <li>Certified cleanroom for mechanical repairs</li>
          <li>Flat-rate pricing and free diagnostic</li>
          <li>No data, no charge guarantee</li>
          <li>Fast turnaround options, including expedited service</li>
          <li>Transparent communication every step of the way</li>
        </ul>
        <p class="s-body">We've recovered lost data from thousands of drives—many of them dropped, water-damaged, or completely unresponsive. Our experience with dropped hard drive recovery helps ensure your best chance at a full recovery.</p>
      </div>
    </section>

    <!-- SECTION 6 — Real-World Examples -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Real-World Examples</h2>
        <div class="examples-list">
          <div class="example-item">
            <p class="s-body">A client dropped their 2TB WD external hard drive down a flight of stairs. It began making a clicking hard drive noise and wasn't recognized by their Mac. We replaced the damaged head stack in our cleanroom and successfully recovered 98% of the data.</p>
          </div>
          <div class="example-item">
            <p class="s-body">A wedding photographer brought in a dropped external hard drive containing all footage from a recent event. Despite internal damage, we were able to recover all photo and video files within 48 hours using expedited recovery service.</p>
          </div>
          <div class="example-item">
            <p class="s-body">A university researcher lost 4 years of data after the drive fell off their desk. We imaged the failing disk and recovered data even from areas affected by bad sectors.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 7 — How to Avoid Future Data Loss -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">How to Avoid Future Data Loss</h2>
        <p class="s-body">While accidents happen, there are a few steps you can take to reduce the risk of dropping your drive again:</p>
        <ul class="content-list">
          <li>Always use a padded case when carrying your external drive</li>
          <li>Avoid placing it on edges or unstable surfaces</li>
          <li>Use drives with drop-resistant housing</li>
          <li>Back up important files regularly to a cloud or second device</li>
        </ul>
        <p class="s-body">If your drive is already damaged, remember: trying to fix it on your own can lead to permanent data loss.</p>
      </div>
    </section>

    <!-- SECTION 8 — Types of Drives -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Types of Dropped Drives We Recover</h2>
        <p class="s-body">At Five Star Data Recovery, we recover data from all major brands and formats of external and internal hard drives, including:</p>
        <ul class="content-list">
          <li>Western Digital (WD) My Passport and Elements drives</li>
          <li>Seagate Backup Plus and Expansion drives</li>
          <li>Toshiba Canvio drives</li>
          <li>LaCie rugged external drives</li>
          <li>G-Technology portable drives</li>
          <li>Internal laptop and desktop HDDs (2.5" and 3.5")</li>
        </ul>
        <p class="s-body">Each of these models has different mechanical structures. Some may be more resistant to impact than others, but none are immune to failure when dropped. If your external or internal hard drive was dropped and is now acting up, we have the tools and experience to help.</p>
      </div>
    </section>

    <!-- SECTION 9 — What Gets Damaged Inside -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">What Gets Damaged Inside When a Drive Is Dropped?</h2>
        <p class="s-body">When a hard drive experiences sudden impact, several internal components may be affected:</p>
        <ul class="content-list">
          <li><strong>Read/Write Head Crash:</strong> The head may land on the platter, scratching the surface and making data unreadable.</li>
          <li><strong>Actuator Arm Misalignment:</strong> The moving arm that holds the head may get stuck or misaligned, causing clicking or buzzing sounds.</li>
          <li><strong>Spindle Motor Failure:</strong> If the impact is hard enough, the spindle that spins the platters may get damaged or stop functioning.</li>
          <li><strong>Firmware Corruption:</strong> Sudden power loss or mechanical impact can corrupt firmware stored on the disk's ROM chip.</li>
        </ul>
        <p class="s-body">Understanding which part is damaged is key to recovering data from a dropped external hard drive safely.</p>
      </div>
    </section>

    <!-- SECTION 10 — <NuxtLink to="/expedited-service">Expedited</NuxtLink> Options -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Expedited Recovery Options for Urgent Cases</h2>
        <p class="s-body">We understand that some projects, especially those related to business, legal, or creative work, can't wait days or weeks. That's why we offer two levels of expedited service:</p>
        <ul class="content-list">
          <li><strong>Expedited Service</strong> — We place your case at the top of our recovery queue during regular business hours. Fee: $200 per drive.</li>
          <li><strong>Expedited Plus Service</strong> — We work on your case 24/7, even on nights, weekends, and holidays. Fee: $500 per drive.</li>
        </ul>
        <p class="s-body">These services are optional and are added to our standard recovery rate. Please note: all expedited fees are non-refundable and must be paid upfront.</p>
      </div>
    </section>

    <!-- SECTION 11 — Nationwide -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Serving Clients Nationwide</h2>
        <p class="s-body">Although our lab is based in Los Angeles, we help customers across the United States. With free round-trip shipping, we make it easy to send us your dropped hard drive no matter where you live. Simply create a recovery ticket on our website, and we'll send you a prepaid shipping label. Once your device arrives, we'll run diagnostics and contact you with a detailed recovery plan.</p>
      </div>
    </section>

    <!-- REVIEWS -->
    <ClientOnly>
      <LazyReviewsSection :reviews="reviews" />
    </ClientOnly>
    <!-- QUOTE FORM -->
    <ClientOnly>
    <LazyQuoteFormSection
      description="Physical impact is one of the most common causes of drive failure — and one of our specialties. Our cleanroom team handles head crashes, actuator arm damage, and platter scratches every day."
      bullet1="Free diagnostic — full internal assessment"
      bullet2="Cleanroom head swap and imaging"
      bullet3="No Data, No Charge (most cases)"
      closing="Stop powering on the drive. The more spin cycles after a drop, the harder recovery becomes. Fill out the form now."
      bgImage="/dropped-hard-drive-hero.webp"
    />
    </ClientOnly>

    <!-- CONTACT BAND -->
    <section class="s-contact-band contact-band-bg">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Ready to Recover Your Dropped Hard Drive?</h2>
        </div>
        <p class="contact-body-text">If you're facing data loss due to a dropped drive, don't wait. The sooner you contact a professional, the better your chances of recovering data successfully.</p>
        <ul class="contact-bullets">
          <li>Visit our Glendale, CA lab</li>
          <li>Ship your drive to us from anywhere in the U.S.</li>
          <li>Call now for a free diagnosis</li>
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
              <span class="faq-toggle">{{ openFaq === i ? '\u2212' : '+' }}</span>
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
.process-steps { display: flex; flex-direction: column; }
.process-step { display: flex; align-items: flex-start; gap: 24px; padding: 28px 0; border-bottom: 1px solid #e2e6ee; }
.process-step:last-child { border-bottom: none; }
.step-num { width: 48px; height: 48px; background: #1a1a2e; color: #C9A84C; font-size: 1.2rem; font-weight: 900; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.step-title { font-size: 1rem; font-weight: 800; color: #1a1a2e; margin-bottom: 8px; }
.step-body { font-size: 0.93rem; color: #4a5568; line-height: 1.7; margin: 0; }
.s-contact-band { background: #0f1623; padding: 44px 0; border-top: 3px solid #C9A84C; border-bottom: 3px solid #C9A84C; }
.contact-band-bg { background: linear-gradient(to right, rgba(15,22,35,0.92) 0%, rgba(15,22,35,0.75) 60%, rgba(15,22,35,0.5) 100%), url('/dropped-hard-drive-section.webp') center center / cover no-repeat !important; }
.contact-banner-card { border: none; border-radius: 0; padding: 0; margin-bottom: 16px; }
.contact-banner-heading { font-size: clamp(1.4rem, 2.5vw, 1.9rem); font-weight: 900; color: #fff; margin: 0; }
.contact-body-text { font-size: 0.95rem; color: rgba(255,255,255,0.7); line-height: 1.75; margin-bottom: 20px; }
.contact-bullets { list-style: none; padding: 0; margin: 0 0 28px; display: flex; flex-direction: column; gap: 8px; }
.contact-bullets li { font-size: 0.93rem; color: rgba(255,255,255,0.65); display: flex; align-items: center; gap: 10px; }
.contact-bullets li::before { content: '✓'; color: #C9A84C; font-weight: 700; }
.btn-start-recovery { display: inline-block; background: #C9A84C; color: #1a1a1a; font-weight: 800; font-size: 1rem; padding: 16px 36px; border-radius: 6px; text-decoration: none; transition: background 0.2s; }
.btn-start-recovery:hover { background: #b8923e; }
.examples-list { display: flex; flex-direction: column; gap: 0; }
.example-item { padding: 24px 0; border-bottom: 1px solid #e2e6ee; }
.example-item:last-child { border-bottom: none; }
.example-item .s-body { margin: 0; }
.faq-wrap { display: flex; flex-direction: column; border: 1.5px solid #e2e6ee; border-radius: 12px; overflow: hidden; }
.faq-row { border-bottom: 1px solid #e2e6ee; }
.faq-row:last-child { border-bottom: none; }
.faq-trigger { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; background: #fff; border: none; cursor: pointer; text-align: left; gap: 16px; font-family: inherit; }
.faq-trigger span:first-child { font-size: 0.95rem; font-weight: 700; color: #1a1a2e; line-height: 1.4; }
.faq-toggle { font-size: 1.4rem; font-weight: 300; color: #7A5500; flex-shrink: 0; }
.faq-answer { padding: 0 24px 22px; font-size: 0.92rem; color: #4a5568; line-height: 1.75; }
@media (max-width: 768px) { .two-col-layout { grid-template-columns: 1fr; } }
</style>
