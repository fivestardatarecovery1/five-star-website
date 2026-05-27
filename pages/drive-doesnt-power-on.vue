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
                "author": { "@type": "Person", "name": "Martin P." },
                "datePublished": "2024-12-01",
                "reviewBody": "My hard drive had no signs of power. Five Star brought it back to life and recovered all my files!",
                "name": "Dead Drive Recovery Success",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
              }
            ],
            "priceRange": "$300 - $950"
          },
          {
            "@type": "Service",
            "name": "Hard Drive Doesn't Power On Data Recovery",
            "url": "https://www.fivestardatarecovery.com/data-recovery/hard-drive-no-power/",
            "areaServed": [{ "@type": "Country", "name": "United States" }],
            "description": "Expert data recovery services for hard drives that won't power on. Specialized tools for PCB repair, clean room recovery, and flat-rate pricing. Serving Glendale, Los Angeles, and nationwide via mail-in."
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fivestardatarecovery.com/" },
              { "@type": "ListItem", "position": 2, "name": "Data Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/" },
              { "@type": "ListItem", "position": 3, "name": "Hard Drive No Power", "item": "https://www.fivestardatarecovery.com/data-recovery/hard-drive-no-power/" }
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Can you recover data from a drive that shows no signs of life?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Even if your hard drive appears completely dead with no lights or activity, we have specialized tools and recovery techniques to extract data directly from non-functioning drives." } },
              { "@type": "Question", "name": "Can I get a detailed file list before finalizing the recovery?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. After completing the recovery, we'll provide you with a list of the files found. This lets you review the results before proceeding with final data delivery." } },
              { "@type": "Question", "name": "Is there an additional fee for replacement parts if needed?", "acceptedAnswer": { "@type": "Answer", "text": "No. Our flat-rate pricing includes all necessary donor parts such as matching PCBs or compatible heads (if clean room service is required). There are never any surprise part charges." } },
              { "@type": "Question", "name": "If my hard drive gets no power, can I recover the data?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Even if your hard drive shows no signs of power, data recovery is often still possible. The issue could be related to a failed circuit board (PCB), power surge damage, or internal electrical failure. At Five Star Data Recovery, we use specialized tools and donor parts to repair the electronic components or bypass the failure entirely. Once the drive powers on safely, we create a sector-by-sector clone to recover your important files. For urgent cases, our Expedited Plus Service ensures 24/7 engineer attention until your recovery is complete." } },
              { "@type": "Question", "name": "What happens if the recovery is unsuccessful?", "acceptedAnswer": { "@type": "Answer", "text": "If we're unable to recover your data, you won't owe anything further beyond any required upfront fees (only applies in special non-standard cases like deleted files or prior tampering). For most standard cases, our No Data, No Charge policy applies." } },
              { "@type": "Question", "name": "What are common signs that my hard drive has no power?", "acceptedAnswer": { "@type": "Answer", "text": "If your hard drive is not spinning, makes no sound, shows no lights, and is not recognized by any computer or external enclosure, it likely has a power-related failure. Stop all DIY attempts and contact a professional recovery lab." } },
              { "@type": "Question", "name": "Can you recover data from all brands of hard drives with power failure?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We perform no-power data recovery on all major brands including Western Digital, Seagate, Toshiba, Hitachi, and others—whether it's an internal drive or an external USB drive." } }
            ]
          }
        ]
      })
    }
  ]
})

useSeoMeta({
  title: "Drive Doesn't Power On - Five Star Data Recovery",
  ogTitle: "Drive Doesn't Power On - Five Star Data Recovery",
  description: "Get professional services for when your Drive Doesn't Power On. Our certified engineers provide data recovery services at the best prices.",
  ogDescription: "Get professional services for when your Drive Doesn't Power On. Our certified engineers provide data recovery services at the best prices.",
})

const trustBadges = [
  { icon: 'clock', text: 'Available 24/7/365' },
  { icon: 'check', text: 'No Data = No Charge' },
  { icon: 'shield', text: '10+ Years in Business' },
  { icon: 'star', text: 'Free Nationwide Shipping' },
]

const reviews = [
  {
    text: "My external hard drive suddenly started acting up and wouldn't open any files. I found out it had bad sectors and thought everything was lost. Five Star Data Recovery recovered all of my documents, including years of business data. Their team was professional, honest, and incredibly skilled.",
    name: 'Mark R.',
    location: 'West Covina, CA',
  },
  {
    text: "My old hard drive was full of irreplaceable family memories, but it stopped responding due to bad sectors. I brought it to Five Star Data Recovery, and within days they recovered every last photo. I can't thank them enough for saving what I thought was gone forever.",
    name: 'Samantha L.',
    location: 'Burbank, CA',
  },
  {
    text: "After being told by another company that my hard drive was unrecoverable due to bad sectors, I decided to get a second opinion. Five Star Data Recovery not only diagnosed the issue accurately but used advanced imaging tools to safely recover my data. Worth every penny.",
    name: 'David N.',
    location: 'New York, NY',
  },
]

const faqs = [
  {
    q: 'Can you recover data from a drive that shows no signs of life?',
    a: "Yes. Even if your hard drive appears completely dead with no lights or activity, we have specialized tools and recovery techniques to extract data directly from non-functioning drives.",
  },
  {
    q: 'Can I get a detailed file list before finalizing the recovery?',
    a: "Yes. After completing the recovery, we'll provide you with a list of the files found. This lets you review the results before proceeding with final data delivery.",
  },
  {
    q: 'Is there an additional fee for replacement parts if needed?',
    a: "No. Our flat-rate pricing includes all necessary donor parts such as matching PCBs or compatible heads (if clean room service is required). There are never any surprise part charges.",
  },
  {
    q: 'If my hard drive gets no power, can I recover the data?',
    a: "Yes. Even if your hard drive shows no signs of power, data recovery is often still possible. The issue could be related to a failed circuit board (PCB), power surge damage, or internal electrical failure. At Five Star Data Recovery, we use specialized tools and donor parts to repair the electronic components or bypass the failure entirely. Once the drive powers on safely, we create a sector-by-sector clone to recover your important files. For urgent cases, our Expedited Plus Service ensures 24/7 engineer attention until your recovery is complete.",
  },
  {
    q: 'What happens if the recovery is unsuccessful?',
    a: "If we're unable to recover your data, you won't owe anything further beyond any required upfront fees (only applies in special non-standard cases like deleted files or prior tampering). For most standard cases, our No Data, No Charge policy applies.",
  },
  {
    q: 'What are common signs that my hard drive has no power?',
    a: "If your hard drive is not spinning, makes no sound, shows no lights, and is not recognized by any computer or external enclosure, it likely has a power-related failure. Stop all DIY attempts and contact a professional recovery lab.",
  },
  {
    q: 'Can you recover data from all brands of hard drives with power failure?',
    a: "Yes. We perform no-power data recovery on all major brands including Western Digital, Seagate, Toshiba, Hitachi, and others—whether it's an internal drive or an external USB drive.",
  },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <HeroSection
      title="Drive Doesn't Power On"
      subtitle="Get Your Data Back In No Time."
      description="Is your hard drive not spinning, not lighting up, or completely unresponsive? A drive that doesn't power on can be caused by several different issues — from a simple cable problem to a more serious internal failure. At Five Star Data Recovery, we specialize in recovering data from drives that show no signs of power. Whether it's a failed PCB, power surge damage, or an internal short, our certified engineers have the tools and experience to bring your data back."
      bgImage="/drive-no-power-hero.webp"
      :trustBadges="trustBadges"
    />

    <StatsBar />

    <!-- SECTION 1 — Signs of No Power -->
    <section class="s-white">
      <div class="container">
        <div class="two-col-layout">
          <div>
            <h2 class="s-heading">What Are the Signs of a No Power Issue?</h2>
            <p class="s-body">A hard drive with no power will usually show some or all of these signs:</p>
            <ul class="content-list">
              <li>The drive is not spinning or making any noise</li>
              <li>Your computer doesn't detect the drive</li>
              <li>No LED lights turn on (for external drives)</li>
              <li>You don't hear the usual clicking or humming sounds</li>
            </ul>
            <p class="s-body">In these cases, the drive is likely not receiving electricity. This could be from a failed circuit board, damaged cable, or even a shorted power supply.</p>
          </div>
          <div class="section-img-wrap">
            <img src="/drive-no-power-pcb.webp" alt="Hard drive inspection — signs of no power failure" class="section-img" />
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2 — Common Reasons -->
    <section class="s-grey">
      <div class="container">
        <div class="two-col-layout reverse">
          <div class="section-img-wrap">
            <img src="/drive-no-power-diy.webp" alt="Cleanroom technician — PCB and hard drive repair" class="section-img" />
          </div>
          <div>
            <h2 class="s-heading">Common Reasons Why a Hard Drive Doesn't Power On</h2>
            <p class="s-body">Several problems can cause your hard drive to not power on:</p>
            <ul class="content-list">
              <li><strong>Faulty power adapter or USB cable</strong> – Sometimes the problem is not the drive itself, but the cable or power source</li>
              <li><strong>Damaged PCB (Printed Circuit Board)</strong> – The board on the bottom of the drive can get fried due to power surges or age</li>
              <li><strong>Burnt components</strong> – Overheating or electrical damage can cause parts inside the drive to fail</li>
              <li><strong>Incorrect power connection</strong> – Plugging a 12V adapter into a 5V port can instantly damage the drive</li>
              <li><strong>Internal short circuit</strong> – This can stop power from reaching the motor or heads inside the drive</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3 — What To Do -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">What You Should (and Shouldn't) Do</h2>
        <p class="s-body">If your hard drive doesn't power on, the most important thing is to avoid doing anything that could make the situation worse.</p>
        <div class="do-dont-grid">
          <div class="dont-col">
            <h3 class="col-label dont">Don't:</h3>
            <ul class="content-list">
              <li>Try to open the hard drive</li>
              <li>Swap circuit boards between different drives</li>
              <li>Plug and unplug the drive repeatedly</li>
              <li>Use DIY software—these tools won't help if the drive is not spinning</li>
            </ul>
          </div>
          <div class="do-col">
            <h3 class="col-label do">Do:</h3>
            <ul class="content-list">
              <li>Check your cables and power source</li>
              <li>Try the drive on another computer or enclosure</li>
              <li>Bring it to a professional recovery lab if the issue continues</li>
            </ul>
          </div>
        </div>
        <p class="s-body">A drive that doesn't spin can still hold your files. We have tools and cleanroom environments that allow us to fix hard drives and safely extract data without causing additional damage.</p>
      </div>
    </section>

    <!-- SECTION 4 — Our Recovery Process -->
    <section class="s-grey">
      <div class="container">
        <div class="two-col-layout">
          <div>
            <h2 class="s-heading">Our Hard Drive Recovery Process</h2>
            <p class="s-body">At Five Star Data Recovery, we follow a step-by-step method to recover data from drives with no power:</p>
            <ul class="content-list">
              <li><strong>Free Diagnostic</strong> – We inspect the drive's board, connectors, and internal parts</li>
              <li><strong>Safe Imaging</strong> – If the drive powers on after repair, we create a full image of the data to prevent further wear</li>
              <li><strong>Data Extraction</strong> – We extract and rebuild the file structure, so your data is delivered exactly as it was before</li>
              <li><strong>Verification</strong> – You'll see a file list and confirm that the data is correct before final delivery</li>
            </ul>
            <p class="s-body">If your hard drive has no power, we will first determine if the issue is external (cable or enclosure) or internal (board or heads). If needed, we can replace damaged parts using donor drives matched to your specific model.</p>
          </div>
          <div class="section-img-wrap">
            <img src="/drive-no-power-recovery.webp" alt="Hard drive data recovery process — certified engineers" class="section-img" />
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 5 — Data Recovery Process Steps -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Data Recovery Process</h2>
        <p class="s-body">Our data recovery process is built around security, transparency, and peace of mind. From start to finish, we keep you informed with clear updates at every stage. With a commitment to honest service and no hidden fees, we follow through on every promise — ensuring a smooth and stress-free experience.</p>
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

    <!-- SECTION 6 — Why Choose Five Star -->
    <section class="s-grey">
      <div class="container">
        <div class="two-col-layout reverse">
          <div class="section-img-wrap">
            <img src="/drive-no-power-why.webp" alt="Five Star Data Recovery certified cleanroom lab" class="section-img" />
          </div>
          <div>
            <h2 class="s-heading">Why Choose Five Star Data Recovery?</h2>
            <p class="s-body">We have helped thousands of clients recover files from drives not spinning or completely dead. Here's what makes us different:</p>
            <ul class="content-list">
              <li>Upfront, Flat Rate Pricing</li>
              <li>Cleanroom for safe hardware work</li>
              <li>Years of experience with no-power drives</li>
              <li>"No Data, No Charge" policy</li>
              <li>Clear communication and flat-rate pricing</li>
              <li>Fast turnaround with Expedited and Expedited Plus Service options</li>
            </ul>
            <p class="s-body">Our goal is simple: recover your data safely, affordably, and quickly—even when the hard drive doesn't power on.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- REVIEWS -->
    <ReviewsSection :reviews="reviews" />

    <!-- CONTACT BAND -->
    <section class="s-contact-band contact-band-bg">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Start Your Recovery Today</h2>
        </div>
        <p class="contact-body-text">Don't let a non-working drive turn into a permanent data loss situation. If your hard drive has no power, let the experts at Five Star Data Recovery bring it back to life. Contact us today for a free evaluation.</p>
        <ul class="contact-bullets">
          <li>Free diagnostic — no obligation</li>
          <li>Flat-rate pricing — no hidden fees</li>
          <li>ISO 5 certified cleanroom</li>
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
.two-col-layout.reverse { direction: rtl; }
.two-col-layout.reverse > * { direction: ltr; }
.section-img-wrap { border-radius: 12px; overflow: hidden; }
.section-img { width: 100%; height: auto; display: block; border-radius: 12px; object-fit: cover; }
.process-steps { display: flex; flex-direction: column; }
.process-step { display: flex; align-items: flex-start; gap: 24px; padding: 28px 0; border-bottom: 1px solid #e2e6ee; }
.process-step:last-child { border-bottom: none; }
.step-num { width: 48px; height: 48px; background: #1a1a2e; color: #C9A84C; font-size: 1.2rem; font-weight: 900; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.step-title { font-size: 1rem; font-weight: 800; color: #1a1a2e; margin-bottom: 8px; }
.step-body { font-size: 0.93rem; color: #4a5568; line-height: 1.7; margin: 0; }
.s-contact-band { background: #0f1623; padding: 44px 0; border-top: 3px solid #C9A84C; border-bottom: 3px solid #C9A84C; }
.contact-band-bg { background: linear-gradient(to right, rgba(15,22,35,0.92) 0%, rgba(15,22,35,0.75) 60%, rgba(15,22,35,0.5) 100%), url('/drive-no-power-process.webp') center center / cover no-repeat !important; }
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
.do-dont-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 20px; }
.col-label { font-size: 1rem; font-weight: 800; margin-bottom: 12px; }
.col-label.dont { color: #c0392b; }
.col-label.do { color: #27ae60; }
@media (max-width: 768px) { .two-col-layout, .two-col-layout.reverse { grid-template-columns: 1fr; direction: ltr; } .do-dont-grid { grid-template-columns: 1fr; } }
</style>
