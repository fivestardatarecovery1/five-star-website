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
                "author": { "@type": "Person", "name": "Mark D." },
                "datePublished": "2024-11-20",
                "reviewBody": "My hard drive had suffered a head crash, and I knew it needed clean room work. From the first call, the team at Five Star explained everything in detail. They handled my drive with care, provided a flat-rate quote, and kept me updated throughout. The clean room recovery was a success, and I highly recommend them!",
                "name": "Clean Room Recovery Success",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
              }
            ],
            "priceRange": "$300 - $950",
            "@id": "https://www.fivestardatarecovery.com/#fivestardatarecovery"
          },
          {
            "@type": "Service",
            "name": "Clean Room Data Recovery Services",
            "url": "https://www.fivestardatarecovery.com/data-recovery/clean-room-data-recovery/",
            "areaServed": [{ "@type": "Country", "name": "United States" }],
            "description": "Professional Clean Room Data Recovery services for physically damaged hard drives. Serving Glendale, Los Angeles, and nationwide with free mail-in service and flat-rate pricing."
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fivestardatarecovery.com/" },
              { "@type": "ListItem", "position": 2, "name": "Data Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/" },
              { "@type": "ListItem", "position": 3, "name": "Clean Room Data Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/clean-room-data-recovery/" }
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Why is a clean room necessary for data recovery?", "acceptedAnswer": { "@type": "Answer", "text": "A clean room is required when working on physically damaged hard drives, especially when opening the drive's internal components. Without a Class 100 clean room, dust or static can permanently damage the platters and make recovery impossible. Our controlled environment ensures maximum safety and data preservation during internal repairs." } },
              { "@type": "Question", "name": "What happens inside a data recovery clean room?", "acceptedAnswer": { "@type": "Answer", "text": "Inside the clean room, our engineers carefully disassemble hard drives, inspect internal components, and replace damaged parts (like read/write heads or actuator arms). Using specialized tools and microscopes, we access the platters to begin sector-level imaging, ensuring a safe and effective recovery." } },
              { "@type": "Question", "name": "Can all types of hard drives be opened in a clean room?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We work on 3.5 and 2.5 HDDs, as well as hybrid drives and enterprise-grade storage devices. Whether it's a standard consumer hard drive or a complex RAID member, any physically damaged drive that needs to be opened will be handled exclusively inside our certified clean room lab." } },
              { "@type": "Question", "name": "Is clean room recovery only for clicking or dead drives?", "acceptedAnswer": { "@type": "Answer", "text": "Not always. While clicking hard drives, non-spinning drives, and physically dead drives are common clean room cases, there are many other scenarios where clean room access is essential. This includes drives affected by impact, fire, water, or firmware-related read issues. At Five Star Data Recovery, we open the drive's cover inside our certified clean room to visually inspect the platters and slider assemblies. This allows our engineers to determine whether the read failure is due to surface damage, head crash, or severe bad sectors." } },
              { "@type": "Question", "name": "How can I tell if my drive needs clean room recovery?", "acceptedAnswer": { "@type": "Answer", "text": "If your hard drive is making unusual noises, is not recognized at all, or has been physically dropped, there's a strong chance it requires clean room intervention. Avoid powering it on repeatedly — contact us for a free evaluation to determine if a clean room recovery is necessary." } },
              { "@type": "Question", "name": "Do SSDs require clean room recovery too?", "acceptedAnswer": { "@type": "Answer", "text": "No. SSDs (Solid State Drives) do not contain spinning platters or moving parts, so they don't need a clean room. Instead, SSD recovery relies on specialized micro-soldering, chip-level access, and firmware repair — all done in an electronics-safe lab, but not in a clean room environment." } },
              { "@type": "Question", "name": "Is clean room recovery included in your flat-rate pricing?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. At Five Star Data Recovery, our clean room data recovery service is offered at a flat-rate price — with no hidden fees. This price includes all necessary donor parts, such as compatible heads or internal components required to complete the recovery. You will only pay if we successfully recover your data. If your data is not recoverable, there is absolutely no charge." } },
              { "@type": "Question", "name": "Do you offer emergency clean room data recovery services?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer Expedited and Expedited Plus Clean Room data recovery services for critical cases that require urgent turnaround. If your drive needs to be opened in our clean room and time is of the essence, our expedited options prioritize your recovery immediately—even outside normal business hours. Whether it's a business deadline or personal emergency, our 24/7 emergency data recovery service ensures you get the fastest possible access to your important files." } }
            ]
          }
        ]
      })
    }
  ]
})

useSeoMeta({
  title: 'Clean Room Data Recovery Services You Can Trust',
  ogTitle: 'Clean Room Data Recovery Services You Can Trust',
  description: 'Looking for an Affordable Clean Room Data Recovery Company? Five Star Data Recovery offers flat rate pricing and free same day diagnosis!',
  ogDescription: 'Looking for an Affordable Clean Room Data Recovery Company? Five Star Data Recovery offers flat rate pricing and free same day diagnosis!',
})

const trustBadges = [
  { icon: 'clock', text: 'Available 24/7/365' },
  { icon: 'check', text: 'No Data = No Charge' },
  { icon: 'shield', text: '10+ Years in Business' },
  { icon: 'star', text: 'Free Nationwide Shipping' },
]

const reviews = [
  {
    text: "My hard drive had suffered a head crash, and I knew it needed clean room work. From the first call, the team at Five Star explained everything in detail. They handled my drive with care, provided a flat-rate quote, and kept me updated throughout. The clean room recovery was a success, and I highly recommend them!",
    name: 'Mark D.',
    location: 'Pasadena, CA',
  },
  {
    text: "After my hard drive was dropped, it stopped spinning and made a grinding sound. I found Five Star Data Recovery online and saw they had a real clean room. They managed to recover 99% of my business documents, and I only paid once the data was fully recovered. Truly a life-saving service!",
    name: 'Nicole S.',
    location: 'Burbank, CA',
  },
  {
    text: "My hard drive was physically damaged after a power surge, and no local shop could help. Five Star Data Recovery diagnosed it quickly and performed clean room work to replace the damaged internal parts. I had my recovered files within a week, and they didn't charge me a dime until the data was in my hands.",
    name: 'Jonathan M.',
    location: 'Las Vegas, NV',
  },
]

const faqs = [
  {
    q: 'Why is a clean room necessary for data recovery?',
    a: 'A clean room is required when working on <strong>physically damaged hard drives</strong>, especially when opening the drive\'s internal components. Without a <strong>Class 100 clean room</strong>, dust or static can permanently damage the platters and make recovery impossible. Our controlled environment ensures maximum safety and data preservation during internal repairs.',
  },
  {
    q: 'What happens inside a data recovery clean room?',
    a: 'Inside the clean room, our engineers carefully disassemble hard drives, inspect internal components, and replace damaged parts (like <strong>read/write heads or actuator arms</strong>). Using specialized tools and microscopes, we access the platters to begin <strong>sector-level imaging</strong>, ensuring a safe and effective recovery.',
  },
  {
    q: 'Can all types of hard drives be opened in a clean room?',
    a: 'Yes. We work on <strong>3.5" and 2.5" HDDs</strong>, as well as hybrid drives and enterprise-grade storage devices. Whether it\'s a standard consumer hard drive or a complex RAID member, any physically damaged drive that needs to be opened will be handled exclusively inside our <strong>certified clean room lab</strong>.',
  },
  {
    q: 'Is clean room recovery only for clicking or dead drives?',
    a: 'Not always. While <strong>clicking hard drives, non-spinning drives</strong>, and physically dead drives are common clean room cases, there are many other scenarios where clean room access is essential. This includes drives affected by <strong>impact, fire, water</strong>, or firmware-related read issues. At Five Star Data Recovery, we open the drive&#39;s cover inside our certified clean room to visually inspect the platters and slider assemblies. This allows our engineers to determine whether the read failure is due to surface damage, head crash, or severe bad sectors. This critical step ensures we take the safest and most effective approach to recovering your data.',
  },
  {
    q: 'How can I tell if my drive needs clean room recovery?',
    a: 'If your hard drive is <strong>making unusual noises, is not recognized at all</strong>, or has been physically dropped, there\'s a strong chance it requires clean room intervention. Avoid powering it on repeatedly — contact us for a <strong>free evaluation</strong> to determine if a clean room recovery is necessary.',
  },
  {
    q: 'Do SSDs require clean room recovery too?',
    a: '<strong>No.</strong> SSDs do not contain spinning platters or moving parts, so they don\'t need a clean room. Instead, SSD recovery relies on specialized <strong>micro-soldering, chip-level access, and firmware repair</strong> — all done in an electronics-safe lab, but not in a clean room environment.',
  },
  {
    q: 'Is clean room recovery included in your flat-rate pricing?',
    a: 'Yes. Our clean room data recovery service is offered at a <strong>flat-rate price — with no hidden fees</strong>. This price includes all necessary donor parts, such as compatible heads or internal components required to complete the recovery. <strong>You will only pay if we successfully recover your data.</strong> If your data is not recoverable, there is absolutely no charge.',
  },
  {
    q: 'Do you offer emergency clean room data recovery services?',
    a: 'Yes. We offer <strong>Expedited and Expedited Plus</strong> Clean Room data recovery services for critical cases that require urgent turnaround. Our expedited options prioritize your recovery immediately — even outside normal business hours. Whether it\'s a business deadline or personal emergency, our <strong>24/7 emergency data recovery service</strong> ensures you get the fastest possible access to your important files.',
  },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <HeroSection
      title="Clean Room Data Recovery"
      subtitle="Get Your Data Back In No Time."
      description="When your hard drive has suffered <strong>physical damage</strong>, recovery isn't something you should attempt on your own. Opening a drive outside the proper environment can lead to permanent lost data.<br><br>We have helped thousands of customers recover data from drives that wouldn't spin, wouldn't mount, or that computers did not recognize. Our <strong>cleanroom procedures</strong> protect the delicate parts of your storage device. This gives your files the best chance for full recovery."
      bgImage="/clean-room-data-recovery-hero.webp"
      :trustBadges="trustBadges"
    />

    <StatsBar />

    <!-- SECTION 1 — What Is a Clean Room -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">What Is a Data Recovery Clean Room?</h2>
        <p class="s-body">A data recovery clean room maintains a highly controlled environment that filters out dust, static, and airborne particles. This sterile setup is essential for safely working on the internal components of a hard disk drive (HDD). Even the smallest contaminant can scratch a platter or interfere with a head replacement.</p>
        <p class="s-body">Our facility includes an <strong>ISO-certified Class 100 cleanroom environment</strong>, which means there are fewer than 100 particles per cubic foot of air. Inside, our engineers perform precision repairs like head swaps, spindle adjustments, and platter removal. These procedures are the core of lab data recovery, where success often depends on minimizing risk to fragile components.</p>
      </div>
    </section>

    <!-- SECTION 2 — When You Need Clean Room -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">When You Need Clean Room Recovery</h2>
        <p class="s-body">Not every data loss situation calls for a clean room, but some issues require it immediately. If your hard drive is:</p>
        <ul class="content-list">
          <li>Making clicking or grinding sounds</li>
          <li>Not spinning or not detected at all</li>
          <li>Dropped or crushed</li>
          <li>Exposed to water, smoke, or high heat</li>
          <li>Showing signs of internal failure</li>
        </ul>
        <p class="s-body">Then you're likely dealing with physical damage. Attempting software-based recovery in these cases can destroy your critical data. Our certified engineers use cleanroom tools to stabilize the drive, clone its contents safely, and extract your files.</p>
      </div>
    </section>

    <!-- SECTION 3 — Inside the Clean Room -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Inside the Clean Room: Our Data Recovery Process</h2>
        <p class="s-body">Our data recovery process inside the clean room begins with a detailed evaluation. A data recovery engineer opens the storage device in a static and dust-free environment to assess internal damage. If needed, we replace heads or repair mechanical parts.</p>
        <p class="s-body">We then use forensic-grade imaging tools to clone the drive, sector by sector. Once we've secured the data image, our software team takes over. They extract and organize the files using professional tools that can handle damaged partitions, bad sectors, and degraded media.</p>
        <p class="s-body">Because we handle both the hardware and software sides of the job, we maintain a high success rate and offer fast turnaround.</p>

        <div class="process-steps" style="margin-top:32px;">
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

    <!-- SECTION 4 — Why Clean Room Recovery Is Essential -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Why Clean Room Recovery Is Essential</h2>
        <p class="s-body">In professional data recovery, cutting corners can cost you your files. DIY attempts, or working with companies that lack cleanroom capabilities, often result in permanent data loss. That's because once someone scratches platters or misaligns heads, no tool—no matter how advanced—can undo the damage.</p>
        <p class="s-body">With Five Star Data Recovery, your critical data stays in expert hands. We never outsource and never open drives without cleanroom protection. You'll receive a full breakdown of what we can recover, along with professional drive recovery options if needed.</p>
      </div>
    </section>

    <!-- SECTION 5 — Who We Help -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Who We Help</h2>
        <p class="s-body">We serve individuals, businesses, and IT professionals across the U.S. Our data recovery labs regularly handle jobs involving:</p>
        <ul class="content-list">
          <li>Personal external hard drives with family photos</li>
          <li>Business servers with client data</li>
          <li>Law firms and healthcare organizations with sensitive documents</li>
          <li>Creative professionals with video footage and design files</li>
        </ul>
        <p class="s-body">No matter your situation, our cleanroom specialists are here to help you recover your data.</p>
      </div>
    </section>

    <!-- REVIEWS -->
    <ReviewsSection :reviews="reviews" />

    <!-- QUOTE FORM -->
    <QuoteFormSection
      description="Our ISO-certified Class 100 cleanroom is the safest environment on earth for your hard drive. Head swaps, platter removal, spindle repairs — we perform the most complex recoveries in-house with flat-rate pricing and zero hidden fees."
      bullet1="ISO-certified Class 100 cleanroom — fewer than 100 particles/ft³"
      bullet2="Head swaps, PCB repair, platter-level access"
      bullet3="No Data, No Charge — flat-rate, all donor parts included"
      closing="Don't power on a physically damaged drive — every spin risks more platter damage. Fill out the form for a free evaluation."
      bgImage="/clean-room-data-recovery-hero.webp"
    />

    <!-- CONTACT BAND -->
    <section class="s-contact-band contact-band-bg">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Start Your Recovery Today</h2>
        </div>
        <p class="contact-body-text">If you suspect your hard drive is physically damaged, don't take chances. Turn it off and bring it to Five Star Data Recovery for a professional assessment. The sooner we receive your drive, the better the chance we can recover what's important to you.</p>
        <ul class="contact-bullets">
          <li>Drop off your device or ship it to our lab</li>
          <li>Call now for a free diagnostic and quote</li>
          <li>Fast, honest, expert-level clean room data recovery</li>
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
.process-steps { display: flex; flex-direction: column; }
.process-step { display: flex; align-items: flex-start; gap: 24px; padding: 28px 0; border-bottom: 1px solid #e2e6ee; }
.process-step:last-child { border-bottom: none; }
.step-num { width: 48px; height: 48px; background: #1a1a2e; color: #C9A84C; font-size: 1.2rem; font-weight: 900; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.step-title { font-size: 1rem; font-weight: 800; color: #1a1a2e; margin-bottom: 8px; }
.step-body { font-size: 0.93rem; color: #4a5568; line-height: 1.7; margin: 0; }
.s-contact-band { background: #0f1623; padding: 44px 0; border-top: 3px solid #C9A84C; border-bottom: 3px solid #C9A84C; }
.contact-band-bg { background: linear-gradient(to right, rgba(15,22,35,0.92) 0%, rgba(15,22,35,0.75) 60%, rgba(15,22,35,0.5) 100%), url('/clean-room-data-recovery-hero.webp') center center / cover no-repeat !important; }
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
</style>
