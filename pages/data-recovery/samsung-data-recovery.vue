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
                "author": { "@type": "Person", "name": "Ethan P." },
                "datePublished": "2024-11-18",
                "reviewBody": "My Samsung SSD crashed without warning. Five Star got everything back and the process was very smooth.",
                "name": "Samsung SSD Recovery Review",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
              }
            ],
            "priceRange": "$300 - $950"
          },
          {
            "@type": "Service",
            "name": "Samsung Data Recovery Services",
            "url": "https://www.fivestardatarecovery.com/data-recovery/samsung-data-recovery/",
            "areaServed": [{ "@type": "Country", "name": "United States" }],
            "description": "Professional Samsung Data Recovery services for non-working Samsung phones, including power failures, boot loops, water damage, and motherboard-level issues. Serving Glendale, Los Angeles, and nationwide with free mail-in service and flat-rate pricing."
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fivestardatarecovery.com/" },
              { "@type": "ListItem", "position": 2, "name": "Data Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/" },
              { "@type": "ListItem", "position": 3, "name": "Samsung Data Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/samsung-data-recovery/" }
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Can you recover data from a Samsung phone that won't turn on?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We specialize in recovering data from non-working Samsung phones, including devices that won't power on due to motherboard failure, power issues, or internal damage. Our engineers perform component-level board repairs to safely extract your data." } },
              { "@type": "Question", "name": "What types of data can you recover from my Samsung device?", "acceptedAnswer": { "@type": "Answer", "text": "We can recover critical data stored on the internal memory of your Samsung phone, including photos, videos, contacts, text messages, call logs, notes, and app data. Once recovered, your files can be delivered as a full phone image or as individual folders, depending on your preference." } },
              { "@type": "Question", "name": "Do you offer deleted file recovery for Samsung phones?", "acceptedAnswer": { "@type": "Answer", "text": "No, we do not offer deleted file recovery for Samsung devices. Our service is strictly focused on physically damaged or non-functional phones that require component-level repairs to access the data." } },
              { "@type": "Question", "name": "What are the most common Samsung issues you handle for data recovery?", "acceptedAnswer": { "@type": "Answer", "text": "We frequently recover data from Samsung phones with power failures, boot loops, black screens, motherboard shorts, failed firmware updates, and water, fire or liquid damage. If the phone won't turn on or is stuck at the Samsung logo, we can help." } },
              { "@type": "Question", "name": "How much does Samsung data recovery cost?", "acceptedAnswer": { "@type": "Answer", "text": "Our Tier 3 Component Level Data Recovery fee for Samsung phones is $950.00 flat rate. This covers most Samsung cases that require board-level repair and advanced micro-soldering to retrieve your data. Very rarely, a case may require a higher-tier recovery known as a \"Chip-Off\" procedure, which is only used when all other recovery methods have been exhausted and unsuccessful. If that happens, we will provide an updated quote before proceeding, and you will have the option to approve or decline the next step. We believe in full transparency—no hidden fees or surprise charges." } },
              { "@type": "Question", "name": "Will my Samsung phone be repaired after the data recovery?", "acceptedAnswer": { "@type": "Answer", "text": "No. Our goal is to temporarily repair your phone just enough to extract the data safely. Once the recovery process is complete, the phone will not be returned in working condition for future use. The focus is strictly on recovering your files." } },
              { "@type": "Question", "name": "How long does Samsung phone data recovery take?", "acceptedAnswer": { "@type": "Answer", "text": "Our standard turnaround time for Samsung component-level data recovery is 1 to 2 weeks, depending on the complexity of the issue and parts availability. If you need your data back faster, we offer two expedited options: Expedited Service: Recovery completed within 3–5 business days. Expedited Plus Service: Recovery completed within 1–3 days, including weekends and holidays. For detailed pricing on these expedited services, please visit our Pricing Page." } },
              { "@type": "Question", "name": "Is my data safe and confidential during the recovery process?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Your data privacy is our top priority. We never access, share, or view your personal files beyond what's necessary to complete the recovery. All data is handled securely within our lab." } },
              { "@type": "Question", "name": "Can I mail in my Samsung phone for data recovery?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! We offer free, fast, and insured round-trip shipping within the United States for Samsung data recovery clients. If you're not located near our Glendale, CA office, our mail-in program makes the process simple and convenient." } },
              { "@type": "Question", "name": "Do you charge a fee if the data isn't recoverable?", "acceptedAnswer": { "@type": "Answer", "text": "We do not charge a recovery fee if the data is not recoverable. However, there is a fully refundable $200.00 deposit that is collected when the case is checked in. If we're unable to recover your data, this deposit will be refunded in full. If we do recover your data, the $200 is applied toward your final recovery cost. Important exception: If your Samsung phone has already been worked on at the component level by another lab or repair shop (such as prior micro-soldering, chip replacements, or board work), a non-refundable evaluation fee of $200.00 will apply due to the increased risk and complexity. This exception does not apply to simple part replacements like screens or batteries—it's strictly for phones that have had prior board-level work done." } }
            ]
          }
        ]
      })
    }
  ]
})

await usePageSeo({
  path: "/data-recovery/samsung-data-recovery",
  defaults: {
    title: "Samsung Data Recovery - Five Star Data Recovery",
    description: "Our Team specializes in Samsung Data Recovery Services. We offer reliable solutions to recover lost data from your External devices.",
    ogTitle: "Samsung Data Recovery - Five Star Data Recovery",
    ogDescription: "Our Team specializes in Samsung Data Recovery Services. We offer reliable solutions to recover lost data from your External devices."
  }
})

const trustBadges = [
  { icon: 'clock', text: 'Available 24/7/365' },
  { icon: 'check', text: 'No Data = No Charge' },
  { icon: 'shield', text: '10+ Years in Business' },
  { icon: 'star', text: 'Free Nationwide Shipping' },
]

const reviews = [
  {
    text: "My Samsung Galaxy phone completely died after a sudden power failure. Other repair shops told me the motherboard was fried and the data was gone. Five Star Data Recovery was my last hope—and they pulled through! They recovered my entire photo gallery and contacts. The communication from Elen was excellent, and I'm beyond grateful for their expertise.",
    name: 'Kevin R.',
    location: 'Dallas, TX',
  },
  {
    text: "My Samsung S10 was stuck in a boot loop after a system crash. I was terrified I had lost years of messages and pictures. Alex from Five Star Data Recovery worked on my phone at the component level and managed to retrieve a full copy of my internal storage. They saved memories I thought were gone forever.",
    name: 'Maria G.',
    location: 'Glendale, CA',
  },
  {
    text: "I had important business files saved only on my Samsung Galaxy that suddenly stopped powering on. After calling around, I found Five Star Data Recovery. Vahan took the time to explain how component-level recovery works and gave me realistic expectations. Thankfully, they recovered all my documents and photos. Highly recommended for Samsung phone data recovery!",
    name: 'Emilie K.',
    location: 'Seattle, WA',
  },
]

const faqs = [
  {
    q: "Can you recover data from a Samsung phone that won't turn on?",
    a: "Yes. We specialize in recovering data from <strong>non-working Samsung phones</strong>, including devices that won't power on due to motherboard failure, power issues, or internal damage. Our engineers perform <strong>component-level board repairs</strong> to safely extract your data.",
  },
  {
    q: 'What types of data can you recover from my Samsung device?',
    a: "We can recover critical data stored on the internal memory of your Samsung phone, including <strong>photos, videos, contacts, text messages, call logs, notes, and app data</strong>. Once recovered, your files can be delivered as a full phone image or as individual folders, depending on your preference.",
  },
  {
    q: 'Do you offer deleted file recovery for Samsung phones?',
    a: "<strong>No</strong>, we do not offer deleted file recovery for Samsung devices. Our service is strictly focused on <strong>physically damaged or non-functional phones</strong> that require component-level repairs to access the data.",
  },
  {
    q: 'What are the most common Samsung issues you handle for data recovery?',
    a: "We frequently recover data from Samsung phones with <strong>power failures, boot loops, black screens, motherboard shorts, failed firmware updates</strong>, and water, fire or liquid damage. If the phone won't turn on or is stuck at the Samsung logo, we can help.",
  },
  {
    q: 'How much does Samsung data recovery cost?',
    a: "Our <strong>Tier 3 Component Level Data Recovery fee</strong> for Samsung phones is <strong>$950.00 flat rate</strong>. This covers most Samsung cases that require board-level repair and advanced micro-soldering to retrieve your data. Very rarely, a case may require a higher-tier recovery known as a \"Chip-Off\" procedure, which is only used when all other recovery methods have been exhausted and unsuccessful. If that happens, we will provide an updated quote before proceeding, and you will have the option to approve or decline the next step. We believe in full transparency—no hidden fees or surprise charges.",
  },
  {
    q: 'Will my Samsung phone be repaired after the data recovery?',
    a: "<strong>No.</strong> Our goal is to temporarily repair your phone just enough to extract the data safely. Once the recovery process is complete, the phone will not be returned in working condition for future use. The focus is strictly on recovering your files.",
  },
  {
    q: 'How long does Samsung phone data recovery take?',
    a: "Our standard turnaround time for Samsung component-level data recovery is <strong>1 to 2 weeks</strong>, depending on the complexity of the issue and parts availability. If you need your data back faster, we offer two expedited options:<br><br><strong><a href='/expedited-service' class='faq-link'>Expedited Service</a>:</strong> Recovery completed within 3–5 business days.<br><strong><a href='/expedited-service-plus' class='faq-link'>Expedited Plus Service</a>:</strong> Recovery completed within 1–3 days, including weekends and holidays.<br><br>For detailed pricing on these expedited services, please visit our <a href='/data-recovery-service-pricing/' class='faq-link'>Pricing Page</a>.",
  },
  {
    q: 'Is my data safe and confidential during the recovery process?',
    a: "<strong>Absolutely.</strong> Your data privacy is our top priority. We never access, share, or view your personal files beyond what's necessary to complete the recovery. All data is handled securely within our lab.",
  },
  {
    q: 'Can I mail in my Samsung phone for data recovery?',
    a: "<strong>Yes!</strong> We offer <strong>free, fast, and insured round-trip shipping</strong> within the United States for Samsung data recovery clients. If you are not near our Glendale, CA, office, you can use our easy <a href='/data-recovery/data-recovery-mail-in-service/' class='faq-link'>mail-in data recovery service</a>.",
  },
  {
    q: "Do you charge a fee if the data isn't recoverable?",
    a: "We <strong>do not charge a recovery fee</strong> if the data is not recoverable. However, there is a <strong>fully refundable $200.00 deposit</strong> that is collected when the case is checked in. If we're unable to recover your data, this deposit will be refunded in full. If we do recover your data, the $200 is applied toward your final recovery cost.<br><br><strong>Important exception:</strong> If your Samsung phone has already been worked on at the component level by another lab or repair shop, a <strong>non-refundable evaluation fee of $200.00</strong> will apply. This exception does not apply to simple part replacements like screens or batteries—it's strictly for phones that have had prior board-level work done.",
  },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <HeroSection
      title="Samsung Data Recovery"
      subtitle="Get Your Data Back In No Time."
      description="If your Samsung phone has suffered liquid damage, a serious drop, or severe physical failure, we're here to help. At Five Star Data Recovery, we specialize in component-level Samsung mobile data recovery from devices that no longer power on, are stuck in a boot loop, or have suffered board-level damage. Whether it's a Samsung Galaxy phone or another model, our engineers are trained to safely repair hardware issues just enough to extract your important data — including photos, messages, and app content — and deliver it back to you securely."
      bgImage="/samsung-data-recovery-hero.webp"
      :trustBadges="trustBadges"
    />

    <StatsBar />

    <!-- SECTION 1 — Common Causes -->
    <section class="s-white">
      <div class="container">
        <div class="two-col-layout">
          <div>
            <h2 class="s-heading">Common Causes of Data Loss on Samsung Devices</h2>
            <p class="s-body">The most common reason customers come to us is physical damage to their Samsung phone. This includes:</p>
            <ul class="content-list">
              <li>Water or liquid damage</li>
              <li>Severe impact from drops</li>
              <li>Burnt components or short circuits</li>
              <li>Devices that no longer power on or enter boot loops</li>
            </ul>
            <p class="s-body">Our lab focuses on recovering data from Samsung phones. We help with hardware failures, damaged logic boards, and broken devices. If your phone has physical damage and contains important data, we're here to help.</p>
          </div>
          <div class="section-img-wrap">
            <img src="/samsung-water-damage-recovery.webp" alt="Samsung water damage data recovery" class="section-img" width="1536" height="864" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2 — Devices We Recover From -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Devices We Recover From</h2>
        <p class="s-body">We work with nearly every model of Samsung Galaxy phone and tablet, including:</p>
        <ul class="content-list">
          <li>Galaxy S21, S22, S23 Series</li>
          <li>Galaxy Note 8, 9, 10, 20</li>
          <li>Galaxy Z Fold and Z Flip</li>
          <li>Galaxy A and M Series</li>
          <li>Galaxy Tab devices</li>
        </ul>
        <p class="s-body">No matter if your device turns on or is completely dead, we can often recover lost data. We use special techniques to access the internal storage.</p>
      </div>
    </section>

    <!-- SECTION 3 — Recovery Process -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Our Samsung Data Recovery Process</h2>
        <p class="s-body">At Five Star Data Recovery, we specialize in component-level Samsung mobile data recovery. We recover data from physically damaged Samsung phones. This includes phones with liquid spills, motherboard failures, or severe impacts.</p>
        <div class="process-steps">
          <div class="process-step">
            <div class="step-num">1</div>
            <div>
              <h3 class="step-title">Physical Diagnostic</h3>
              <p class="step-body">We inspect the Samsung device for board-level issues, such as short circuits, power failures, or corrosion.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">2</div>
            <div>
              <h3 class="step-title">Component-Level Repair</h3>
              <p class="step-body">Using micro-soldering and hardware diagnostics, we repair the device just enough to bring it back to life temporarily. This allows us to access the internal storage without altering or overwriting data.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">3</div>
            <div>
              <h3 class="step-title">Full Backup with Smart Switch</h3>
              <p class="step-body">Once the phone powers on, we create a complete backup using Smart Switch on your computer. This preserves all contacts, messages, app data, and settings.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">4</div>
            <div>
              <h3 class="step-title">Backup Delivery</h3>
              <p class="step-body">We provide the full backup to the customer on an external drive or help restore it to a new Samsung device. This method ensures a complete snapshot of your Samsung mobile phone data is saved without relying on third-party software or apps.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4 — Important Limitations -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">What You Need to Know</h2>
        <p class="s-body">While we are experts in hardware-level Samsung phone data recovery, there are some important limitations to note:</p>
        <ul class="content-list">
          <li>We do not offer deleted file recovery or software-based data recovery from working Samsung phones.</li>
          <li>We focus on phones that are physically damaged, such as those exposed to liquid or with failed motherboards.</li>
          <li>Our process requires that we temporarily power on the device in order to extract data.</li>
          <li>We do not use consumer recovery apps or offer services for phones with accidental file deletions but no hardware issues.</li>
        </ul>
      </div>
    </section>

    <!-- SECTION 5 — Why Smart Switch -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Why We Use Smart Switch</h2>
        <p class="s-body">After repairing a physically damaged Samsung phone, we use Smart Switch on your computer to make a full backup of the device. This tool is the safest and most complete way to extract user data, allowing us to save everything — including settings, apps, contacts, messages, and photos — in a structured backup file.</p>
        <p class="s-body">This backup can then be restored onto a new Samsung Galaxy phone or saved to an external storage device for future use.</p>
      </div>
    </section>

    <!-- SECTION 6 — Your Data Is Safe -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Your Data Is Safe with Us</h2>
        <p class="s-body">We understand how private your files can be. Whether it's family photos, business documents, or sensitive texts, your data is handled with the highest level of confidentiality.</p>
        <ul class="content-list">
          <li>All recovery is done in-house — nothing is sent to third-party labs</li>
          <li>Devices and recovered files are kept secure and encrypted</li>
          <li>We permanently delete any copies after delivery</li>
        </ul>
        <p class="s-body">You can trust our team for secure and discreet Samsung cell phone data recovery.</p>
      </div>
    </section>

    <!-- SECTION 7 — Nationwide -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">We Serve Clients Nationwide</h2>
        <p class="s-body">Although we are based in Los Angeles, we work with customers all across the United States. If you're not local, we offer free round-trip shipping for all approved Samsung data recovery cases via our <NuxtLink to="/data-recovery/data-recovery-mail-in-service" class="inline-link">mail-in service</NuxtLink>. Simply start a case on our website, and we'll email you a prepaid label. Once your device arrives, our engineers begin the recovery process immediately.</p>
      </div>
    </section>

    <!-- REVIEWS -->
    <ReviewsSection :reviews="reviews" />

    <!-- SECTION 8 — Why Choose -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Why Choose Five Star Data Recovery?</h2>
        <ul class="content-list">
          <li>We specialize in Samsung phone data recovery</li>
          <li>Cleanroom-certified lab for hardware-level recovery</li>
          <li>Flat-rate <NuxtLink to="/data-recovery-service-pricing" class="inline-link">pricing</NuxtLink> with no hidden fees</li>
          <li>"No data, no charge" policy (except expedited fees)</li>
          <li>Fast turnaround and expert support</li>
        </ul>
        <p class="s-body">We've helped hundreds of clients with data recovery Samsung phone cases involving water damage, dead logic boards, and phones that wouldn't power on — all using safe and proven hardware-level methods.</p>
      </div>
    </section>

    <RelatedLinks :links="[
      { text: 'iPhone Data Recovery', href: '/data-recovery/iphone-data-recovery' },
      { text: 'Mac Data Recovery', href: '/data-recovery/mac-data-recovery' },
      { text: 'SSD Data Recovery', href: '/data-recovery/ssd-data-recovery' },
      { text: 'External Hard Drive Recovery', href: '/data-recovery/external-hard-drive-data-recovery' },
    ]" />

    <!-- QUOTE FORM -->
    <QuoteFormSection
      description="Samsung Galaxy phones store everything that matters — photos, messages, app data, contacts. When a motherboard failure or water damage locks you out, our component-level engineers repair just enough to safely extract your data."
      bullet1="$950 flat rate — board repair + data extraction"
      bullet2="Fully refundable $200 deposit if data unrecoverable"
      bullet3="Free insured round-trip shipping nationwide"
      closing="Don't let another repair shop make things worse. Component-level recovery requires certified engineers. Fill out the form and we'll evaluate your Samsung case for free."
      bgImage="/samsung-data-recovery-hero.webp"
    />

    <!-- CONTACT BAND -->
    <section class="s-contact-band contact-band-bg">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Get Started with Samsung Data Recovery Today</h2>
        </div>
        <p class="contact-body-text">Losing access to your phone data is stressful, especially when backups fail. Whether your Samsung Galaxy phone won't turn on or was physically damaged, we'll do everything we can to recover what matters most.</p>
        <ul class="contact-bullets">
          <li>Free diagnostic — no obligation</li>
          <li>$950 flat rate — all board repair included</li>
          <li>Fully refundable $200 deposit if unrecoverable</li>
          <li>Free insured round-trip shipping</li>
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
.contact-band-bg { background: linear-gradient(to right, rgba(15,22,35,0.92) 0%, rgba(15,22,35,0.75) 60%, rgba(15,22,35,0.5) 100%), url('/samsung-water-damage-recovery.webp') center center / cover no-repeat !important; }
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
