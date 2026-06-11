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
                "author": { "@type": "Person", "name": "Jason M." },
                "datePublished": "2024-11-16",
                "reviewBody": "They recovered my entire archive from a Seagate Expansion drive that stopped responding. Excellent service!",
                "name": "Seagate Drive Recovery Success",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
              }
            ],
            "priceRange": "$300 - $950"
          },
          {
            "@type": "Service",
            "name": "Seagate Data Recovery Services",
            "url": "https://www.fivestardatarecovery.com/data-recovery/seagate-data-recovery/",
            "areaServed": [{ "@type": "Country", "name": "United States" }],
            "description": "Professional Seagate Data Recovery services for HDDs, SSDs, external drives, and RAID arrays. Serving Glendale, Los Angeles, and offering nationwide mail-in service with flat-rate pricing and no hidden fees."
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fivestardatarecovery.com/" },
              { "@type": "ListItem", "position": 2, "name": "Data Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/" },
              { "@type": "ListItem", "position": 3, "name": "Seagate Data Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/seagate-data-recovery/" }
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Do you recover data from all types of Seagate drives?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we recover data from all Seagate storage devices, including Seagate Barracuda, IronWolf, Expansion, Backup Plus, and portable external drives. Whether it's internal or external, HDD or SSD — we've got you covered." } },
              { "@type": "Question", "name": "Can you recover data from Seagate drives that are no longer detected by the computer?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. If your Seagate hard drive is not showing up, the issue could be with the firmware, file system, USB controller, or internal damage. We perform thorough diagnostics to find the cause and recover your files." } },
              { "@type": "Question", "name": "What causes the \'Seagate drive light is on but not working\' issue?", "acceptedAnswer": { "@type": "Answer", "text": "This is a common issue in Seagate external drives. The drive may receive power but fail to initialize due to PCB failure, firmware corruption, or a bad USB-to-SATA bridge. We have the tools and expertise to recover your data in these cases." } },
              { "@type": "Question", "name": "How do you handle clicking Seagate hard drives?", "acceptedAnswer": { "@type": "Answer", "text": "A clicking Seagate drive typically means a mechanical failure, such as damaged read/write heads or motor issues. We recover these in a cleanroom using donor parts to safely extract your data without causing more harm." } },
              { "@type": "Question", "name": "How much does Seagate Data Recovery cost?", "acceptedAnswer": { "@type": "Answer", "text": "At Five Star Data Recovery, our Seagate data recovery pricing is based on the drive's capacity, connection type, and condition. All pricing is flat-rate — no hourly billing or surprise charges. $300.00 for standard Seagate SATA drives up to 2TB. $500.00 for Seagate External Hard Drives and internal drives up to 6TB. $600.00 for Seagate external drives between 8TB and 12TB. $800.00 for very high-capacity Seagate drives over 12TB. $950.00 for Seagate drives with mechanical issues requiring clean room repair. We offer a free evaluation before starting any recovery." } },
              { "@type": "Question", "name": "How long does Seagate Data Recovery take?", "acceptedAnswer": { "@type": "Answer", "text": "Most Seagate data recovery cases are completed within 3 to 5 business days. For clean room cases with mechanical failures, recovery can take a few extra days. We also offer Expedited and Expedited Plus options for priority turnaround." } },
              { "@type": "Question", "name": "Can you recover data from a Seagate drive that was dropped?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, drops and shocks can lead to mechanical failure or head misalignment. We frequently perform physical data recovery from dropped Seagate drives and have high success rates in such scenarios." } },
              { "@type": "Question", "name": "Do you provide Seagate data recovery for RAID arrays?", "acceptedAnswer": { "@type": "Answer", "text": "We specialize in Seagate RAID recovery for all configurations — including RAID 0, RAID 1, RAID 5, and hybrid setups. Whether it's a NAS using Seagate IronWolf drives or a server array, we clone the drives and recover the data without using the originals." } },
              { "@type": "Question", "name": "Is it possible to recover data from a Seagate SSD?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We handle Seagate SSD data recovery as well, including cases of NAND failure, firmware issues, or damaged controllers. SSDs are complex, but our engineers are trained in both chip-level and software-level recovery techniques." } }
            ]
          }
        ]
      })
    }
  ]
})

useSeoMeta({
  title: 'Seagate Data Recovery - Five Star Data Recovery',
  ogTitle: 'Seagate Data Recovery - Five Star Data Recovery',
  description: 'Struggling with a Seagate external hard drive not working? We offer expert and reliable recovery services to help you retrieve your data.',
  ogDescription: 'Struggling with a Seagate external hard drive not working? We offer expert and reliable recovery services to help you retrieve your data.',
})

const trustBadges = [
  { icon: 'clock', text: 'Available 24/7/365' },
  { icon: 'check', text: 'No Data = No Charge' },
  { icon: 'shield', text: '10+ Years in Business' },
  { icon: 'star', text: 'Free Nationwide Shipping' },
]

const reviews = [
  {
    text: "I had a Seagate external hard drive that suddenly stopped working. It wasn't showing up on my computer at all. I called Five Star Data Recovery and Elen answered all my questions and made me feel at ease. Within a few days, they recovered 100% of my important files. The communication and service were outstanding!",
    name: 'Jessica L.',
    location: 'Los Angeles',
  },
  {
    text: "My Seagate drive started making clicking noises, and I panicked. After some research, I found Five Star Data Recovery. Alex worked on my case and explained that the issue was mechanical. They performed a clean room recovery and were able to retrieve almost 99% of my data. I couldn't be happier with the results.",
    name: 'Robert M.',
    location: 'Phoenix, AZ',
  },
  {
    text: "My Seagate drive showed up as RAW format and none of my files were accessible. Five Star Data Recovery diagnosed it quickly and got back almost all of my documents and photos. Their honesty, speed, and professionalism stood out. I highly recommend them for Seagate data recovery.",
    name: 'Daniel T.',
    location: 'Denver, CA',
  },
]

const faqs = [
  {
    q: 'How much does Seagate Data Recovery cost?',
    a: 'At Five Star Data Recovery, our Seagate data recovery pricing is based on the drive\'s capacity, connection type, and condition. All pricing is <strong>flat-rate</strong> — no hourly billing or surprise charges.<br><br><strong>$300.00</strong> – Standard Seagate SATA drives (desktop or laptop) up to 2TB.<br><strong>$500.00</strong> – Seagate External Hard Drives and internal drives up to 6TB.<br><strong>$600.00</strong> – Seagate external drives between 8TB and 12TB, including USB 3.0 and USB-C models.<br><strong>$800.00</strong> – Very high-capacity Seagate drives over 12TB.<br><strong>$950.00</strong> – Seagate drives with mechanical issues requiring clean room repair.<br><br>We offer a <strong>free evaluation</strong> before starting any recovery to determine the correct pricing tier.',
  },
  {
    q: 'Do you recover data from all types of Seagate drives?',
    a: 'Yes, we recover data from all Seagate storage devices, including <strong>Seagate Barracuda, IronWolf, Expansion, Backup Plus</strong>, and portable external drives. Whether it\'s internal or external, HDD or SSD — we\'ve got you covered.',
  },
  {
    q: 'Can you recover data from Seagate drives that are no longer detected by the computer?',
    a: 'Absolutely. If your Seagate hard drive is <a href="/data-recovery/hard-drive-not-showing-up" class="faq-link">not showing up</a>, the issue could be with the <strong>firmware, file system, USB controller, or internal damage</strong>. We perform thorough diagnostics to find the cause and recover your files.',
  },
  {
    q: 'What causes the "Seagate drive light is on but not working" issue?',
    a: 'This is a common issue in Seagate external drives. The drive may receive power but fail to initialize due to <strong>PCB failure, firmware corruption, or a bad USB-to-SATA bridge</strong>. We have the tools and expertise to recover your data in these cases.',
  },
  {
    q: 'How do you handle clicking Seagate hard drives?',
    a: 'A clicking Seagate drive typically means a <strong>mechanical failure</strong>, such as damaged read/write heads or motor issues. We recover these in a <strong>cleanroom using donor parts</strong> to safely extract your data without causing more harm.',
  },
  {
    q: 'Can you recover data from a Seagate drive that was dropped?',
    a: 'Yes, drops and shocks can lead to <strong>mechanical failure or head misalignment</strong>. We frequently perform physical data recovery from dropped Seagate drives and have high success rates in such scenarios.',
  },
  {
    q: 'Do you provide Seagate data recovery for RAID arrays?',
    a: 'We specialize in <strong>Seagate <a href="/data-recovery/raid-data-recovery" class="faq-link">RAID</a> recovery</strong> for all configurations — including RAID 0, RAID 1, RAID 5, and hybrid setups. Whether it\'s a NAS using Seagate IronWolf drives or a server array, we clone the drives and recover the data without using the originals.',
  },
  {
    q: 'Is it possible to recover data from a Seagate SSD?',
    a: 'Yes. We handle <strong>Seagate SSD data recovery</strong> as well, including cases of NAND failure, firmware issues, or damaged controllers. SSDs are complex, but our engineers are trained in both chip-level and software-level recovery techniques.',
  },
  {
    q: 'How long does Seagate Data Recovery take?',
    a: 'Most Seagate data recovery cases are completed within <strong>3 to 5 business days</strong>. For cleanroom cases with mechanical failures, recovery may take a few extra days due to the time needed to find compatible donor parts. If you need faster service, we offer <strong><a href="/expedited-service" class="faq-link">Expedited</a> and <a href="/expedited-service-plus" class="faq-link">Expedited Plus</a></strong> options for priority turnaround.',
  },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <HeroSection
      title="Seagate Data Recovery"
      subtitle="Get Your Data Back In No Time."
      description="When your <strong>Seagate hard drive stops working</strong>, it can feel like everything is lost. At Five Star Data Recovery, we focus on Seagate Data Recovery. We help people and businesses recover their important files quickly, safely, and affordably.<br><br>Whether you're dealing with a <strong>corrupted partition</strong> or a <strong>physically damaged drive</strong>, our experts are ready to help."
      bgImage="/seagate-data-recovery-hero.webp"
      :trustBadges="trustBadges"
    />

    <StatsBar />

    <!-- SECTION 1 — Common Issues -->
    <section class="s-white">
      <div class="container">
        <div class="two-col-layout">
          <div>
            <h2 class="s-heading">Common Seagate Drive Issues</h2>
            <p class="s-body">We see a wide range of problems with Seagate devices. Whether it's a backup drive, a desktop model, or a portable USB, issues can strike at any time. Some of the most common include:</p>
            <ul class="content-list">
              <li><NuxtLink to="/data-recovery/external-hard-drive-data-recovery" class="inline-link">Seagate external hard drive</NuxtLink> not working or not powering on</li>
              <li><NuxtLink to="/hard-drive-clicking" class="inline-link">Clicking</NuxtLink> or grinding noises from the drive</li>
              <li>Seagate hard drive not working after an unexpected shutdown</li>
              <li>Devices that appear in Disk Management but <NuxtLink to="/data-recovery/hard-drive-not-showing-up" class="inline-link">not in File Explorer</NuxtLink></li>
              <li>Corrupted or unreadable file system errors</li>
            </ul>
            <p class="s-body">No matter the issue, our team is skilled at diagnosing and recovering data from any damaged device.</p>
          </div>
          <div class="section-img-wrap">
            <img src="/seagate-expansion-drive-recovery.webp" alt="Seagate Expansion drive connected to iMac — data recovery" class="section-img" width="1312" height="738" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2 — How We Recover -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">How We Recover Seagate Data</h2>
        <p class="s-body">Our lab is equipped with the tools and expertise to work on HDDs, SSDs, or flash devices from Seagate. If you <NuxtLink to="/data-recovery/dropped-hard-drive" class="inline-link">dropped your external drive</NuxtLink>, exposed it to liquid, or it suddenly stopped working, don't worry. We'll safely open the device, learn what went wrong, and start salvaging data from corrupted hardware.</p>
        <p class="s-body">Depending on the issue, your drive may need internal repairs in our cleanroom. Once stable, we create a secure image of the device and extract as much recoverable data as possible. We then copy all files stored onto a new drive that you provide or purchase from us.</p>
        <p class="s-body">Our pricing is based on the type of failure and drive model, and we'll always provide a clear data recovery cost quote before starting.</p>
      </div>
    </section>

    <!-- SECTION 3 — What Causes Data Loss -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">What Causes Data Loss on Seagate Drives?</h2>
        <p class="s-body">Data loss can happen for many reasons. Some problems are software-related, like file system corruption or a failed operating system update. Other failures stem from physical damage, such as head crashes, bad sectors, or worn-out components.</p>
        <p class="s-body">We also recover from accidental formatting, power surges, and damaged storage media devices that users improperly removed or mishandled.</p>
      </div>
    </section>

    <!-- SECTION 4 — Why Choose Us -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Why Choose Us for Seagate Hard Disk Data Recovery?</h2>
        <ul class="content-list">
          <li>Years of experience handling all types of Seagate models</li>
          <li>High recovery success rates for even severely damaged devices</li>
          <li>In-house cleanroom for safe internal repairs</li>
          <li>Encrypted or password-protected storage recovery</li>
          <li>No data, no charge — if we can't recover anything, you pay nothing</li>
          <li>Transparent pricing and clear communication every step of the way</li>
        </ul>
        <p class="s-body">We've helped thousands of customers recover their data with care and confidence. From standard desktop models to encrypted SSDs or flash drives, our team handles each recovery with expert attention.</p>
      </div>
    </section>

    <!-- SECTION 5 — Recovery Process -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Data Recovery Process</h2>
        <p class="s-body">Our data recovery process is built around security, transparency, and peace of mind. From start to finish, we keep you informed with clear updates at every stage.</p>
        <div class="process-steps">
          <div class="process-step">
            <div class="step-num">1</div>
            <div>
              <h3 class="step-title">Drop off or Mail in Your Drive</h3>
              <p class="step-body">You can visit our Glendale lab for a quick drop-off, or securely mail your device using our prepaid shipping label — whichever is more convenient for you.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">2</div>
            <div>
              <h3 class="step-title">Receive a Free Diagnosis</h3>
              <p class="step-body">Our team will evaluate your device and provide a detailed diagnosis along with an initial quote — completely free of charge and with no obligation to proceed.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">3</div>
            <div>
              <h3 class="step-title">Our Engineers work on Recovering your Data</h3>
              <p class="step-body">We carefully begin the recovery process using advanced tools and cleanroom procedures.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">4</div>
            <div>
              <h3 class="step-title">Review &amp; Approve the Recovered</h3>
              <p class="step-body">After recovery is complete, you'll receive a detailed file list to review so you can confirm everything important has been successfully recovered.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">5</div>
            <div>
              <h3 class="step-title">Receive your recovered data</h3>
              <p class="step-body">Once approved, we'll securely transfer your data to a new drive and return it to you via pickup or insured shipping — ready for immediate use.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- REVIEWS -->
    <ReviewsSection :reviews="reviews" />

    <!-- SECTION 6 — Fast & Secure -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Fast Service and Secure Handling</h2>
        <p class="s-body">We know how important your data is, and we work fast to get it back to you. After your free diagnostic, you will get an estimated turnaround time. This will depend on your drive's condition and the recovery's complexity. In many cases, we complete recoveries in just a few business days.</p>
        <p class="s-body">We handle all data in-house under strict security standards to protect your privacy. We never outsource, and we return all drives safely, whether you choose to pick up your files or have us ship them back.</p>
      </div>
    </section>

    <RelatedLinks :links="[
      { text: 'Hard Drive Recovery', href: '/data-recovery/hard-drive-recovery' },
      { text: 'External Hard Drive Recovery', href: '/data-recovery/external-hard-drive-data-recovery' },
      { text: 'Dropped Hard Drive Recovery', href: '/data-recovery/dropped-hard-drive' },
      { text: 'WD Data Recovery', href: '/data-recovery/western-digital-data-recovery' },
      { text: 'Toshiba Data Recovery', href: '/data-recovery/toshiba-data-recovery' },
      { text: 'RAID Data Recovery', href: '/data-recovery/raid-data-recovery' },
    ]" />

    <!-- QUOTE FORM -->
    <QuoteFormSection
      description="From Barracuda to IronWolf RAID arrays, we recover data from every Seagate model. Clicking drives, RAW partitions, drives not showing up — our certified engineers handle it all with flat-rate pricing and no hidden fees."
      bullet1="Seagate Barracuda, IronWolf, Expansion, Backup Plus"
      bullet2="Cleanroom recovery for clicking & mechanical failures"
      bullet3="No Data, No Charge (most cases)"
      closing="Don't power on the drive repeatedly — every spin risks more damage. Fill out the form and let us evaluate your Seagate case for free."
      bgImage="/seagate-data-recovery-hero.webp"
    />

    <!-- CONTACT BAND -->
    <section class="s-contact-band contact-band-bg">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Start Your Seagate Recovery Today</h2>
        </div>
        <p class="contact-body-text">If your Seagate hard disk data recovery situation feels urgent, don't wait. Powering the drive on repeatedly can make things worse. Let our professionals handle the recovery process the right way.</p>
        <ul class="contact-bullets">
          <li>Drop off your drive at our lab</li>
          <li>Ship it to us from anywhere in the U.S.</li>
          <li>Call now for a free evaluation and quote</li>
          <li>No Data, No Charge (most cases)</li>
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
.contact-band-bg { background: linear-gradient(to right, rgba(15,22,35,0.92) 0%, rgba(15,22,35,0.75) 60%, rgba(15,22,35,0.5) 100%), url('/seagate-expansion-drive-recovery.webp') center center / cover no-repeat !important; }
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
