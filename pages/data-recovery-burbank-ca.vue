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
            "areaServed": [
              { "@type": "City", "name": "Burbank" },
              { "@type": "Country", "name": "United States" }
            ],
            "url": "https://www.fivestardatarecovery.com/",
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "498" },
            "review": [
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Melissa J." },
                "datePublished": "2024-10-03",
                "reviewBody": "Same-day pickup in Burbank was super convenient. They recovered my SSD data fast and professionally.",
                "name": "Great Burbank Service",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
              }
            ],
            "priceRange": "$300 - $950",
            "@id": "https://www.fivestardatarecovery.com/#fivestardatarecovery"
          },
          {
            "@type": "Service",
            "name": "Data Recovery Services in Burbank, CA",
            "url": "https://www.fivestardatarecovery.com/data-recovery-burbank-ca/",
            "areaServed": [
              { "@type": "City", "name": "Burbank" },
              { "@type": "Country", "name": "United States" }
            ],
            "description": "Professional Data Recovery services for Burbank, CA residents and businesses. Free same-day pickup available. Serving all device types including hard drives, SSDs, RAID, and iPhones."
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fivestardatarecovery.com/" },
              { "@type": "ListItem", "position": 2, "name": "Data Recovery Burbank", "item": "https://www.fivestardatarecovery.com/data-recovery-burbank-ca/" }
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Is your data recovery lab located in Burbank, CA?", "acceptedAnswer": { "@type": "Answer", "text": "While our main lab is not physically located in Burbank, we proudly serve the Burbank area and offer free same-day pickup for local residents and businesses. Our close proximity allows us to provide fast, convenient, and professional service throughout the region." } },
              { "@type": "Question", "name": "How long does the data recovery process take in Burbank?", "acceptedAnswer": { "@type": "Answer", "text": "Most data recovery cases are completed in 3-5 business days, depending on the issue. Whether you choose to drop off, mail in, or schedule a free pickup in Burbank, you will always receive a status update the same day your device arrives. Our goal is to keep you informed every step of the way while working efficiently to recover your data." } },
              { "@type": "Question", "name": "What types of devices do you recover data from?", "acceptedAnswer": { "@type": "Answer", "text": "We recover data from hard drives, SSDs, USB flash drives, iPhones, RAID setups, SD cards, and more. If you've experienced data loss in Burbank, we can help." } },
              { "@type": "Question", "name": "Do you offer free pickup in the Burbank area?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! We offer free local pickup for most addresses in Burbank. Simply contact us to schedule a same-day pickup and we'll handle the logistics." } },
              { "@type": "Question", "name": "What happens if my data can't be recovered?", "acceptedAnswer": { "@type": "Answer", "text": "We follow a No Data, No Charge policy. If your data is unrecoverable, you won't owe us anything for most standard recovery cases." } }
            ]
          }
        ]
      })
    }
  ]
})

useSeoMeta({
  title: 'Data Recovery Services in Burbank CA - Five Star Data Recovery',
  ogTitle: 'Data Recovery Burbank',
  description: 'Need Data Recovery Services near the Burbank, CA area? Our team can help you recover your lost data. Contact us for a free diagnosis!',
  ogDescription: 'Need Data Recovery Services near the Burbank, CA area? Our team can help you recover your lost data. Contact us for a free diagnosis!',
})

const trustBadges = [
  { icon: 'clock', text: 'Available 24/7/365' },
  { icon: 'check', text: 'No Data = No Charge' },
  { icon: 'shield', text: '10+ Years in Business' },
  { icon: 'star', text: 'Free Nationwide Shipping' },
]

const reviews = [
  {
    text: "They recovered all my footage in 2 days \u2014 saved my entire project. Absolutely worth it.",
    name: 'John H., Video Editor',
    location: 'Burbank, CA',
  },
  {
    text: 'Professional, transparent, and fast. They kept me updated the whole time.',
    name: 'Emily P., Photographer',
    location: 'Burbank, CA',
  },
  {
    text: "My team uses a 4big RAID for media production. One drive failed, then another. We thought we lost the whole project. Five Star not only recovered the files\u2014they kept the folder structure completely intact.",
    name: 'Brandon H., Editor',
    location: 'Burbank, CA',
  },
]

const faqs = [
  {
    q: 'Is your data recovery lab located in Burbank, CA?',
    a: 'While our main lab is not physically located in Burbank, we proudly serve the Burbank area and offer free same-day pickup for local residents and businesses. Our close proximity allows us to provide fast, convenient, and professional service throughout the region.',
  },
  {
    q: 'How long does the data recovery process take in Burbank?',
    a: 'Most data recovery cases are completed in 3–5 business days, depending on the issue. Whether you choose to drop off, mail in, or schedule a free pickup in Burbank, you will always receive a status update the same day your device arrives. Our goal is to keep you informed every step of the way while working efficiently to recover your data.',
  },
  {
    q: 'What types of devices do you recover data from?',
    a: "We recover data from hard drives, SSDs, USB flash drives, iPhones, RAID setups, SD cards, and more. If you've experienced data loss near Burbank, we can help.",
  },
  {
    q: 'Do you offer free pickup in the Burbank area?',
    a: "Yes! We offer free local pickup for most addresses near Burbank. Simply contact us to schedule a same-day pickup and we'll handle the logistics.",
  },
  {
    q: "What happens if my data can't be recovered?",
    a: "We follow a No Data, No Charge policy. If your data is unrecoverable, you won't owe us anything for most standard recovery cases.",
  },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <HeroSection
      title="Professional Data Recovery Services in Burbank, CA"
      description="Five Star Data Recovery proudly serves businesses, content creators, and residents throughout Burbank, CA. Whether you've lost precious photos from an external drive or need urgent RAID recovery for your production team, our certified cleanroom lab is just minutes away — and offers free local pickup for Burbank clients. Simply give us a call or create a request on our website, and we'll handle the rest."
      bgImage="/data-recovery-burbank-ca.jpg"
      :trustBadges="trustBadges"
    />

    <StatsBar />

    <!-- SECTION 1 — s-white: What Is Data Recovery -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">What Is Data Recovery?</h2>
        <p class="s-body">Data recovery is the process of retrieving lost, deleted, or inaccessible files from storage devices. These devices might include hard drives, SSDs, USB flash drives, and SD cards. When a device stops working, you might think you have lost your data for good—but that’s rarely the case. Even if your device doesn’t power on, or your computer can no longer recognize it, your data is often still there. Our experienced engineers use specialized tools to locate and recover your lost files, even in the most difficult cases.</p>
        <h2 class="s-heading" style="margin-top:40px;">Common Scenarios We Handle near Burbank</h2>
        <ul class="content-list">
          <li>A photographer near Magnolia Blvd lost 5 years of Lightroom catalogs from an external Seagate drive — 100% recovered.</li>
          <li>A post‑production company’s RAID 5 failed mid‑project. We cloned all drives and rebuilt their file system in under 3 days.</li>
          <li>A local home user had a dead WD Blue hard drive from an old desktop — all family photos retrieved.</li>
        </ul>
      </div>
    </section>

    <!-- SECTION 2 — s-grey: We Specialize In -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">We Specialize in Recovering Data From:</h2>
        <ul class="content-list">
          <li>Clicking or non-powering hard drives (HDDs)</li>
          <li>Solid State Drives (SSDs) with no response</li>
          <li>Water-damaged or dead iPhones</li>
          <li>Failed RAID 0, 1, 5, 6, or 10 arrays</li>
          <li>USB flash drives &amp; SD cards from DSLRs or video equipment</li>
          <li>Encrypted drives and BitLocker devices</li>
        </ul>
      </div>
    </section>

    <!-- SECTION 3 — s-white: Physical Damage + 3-Step Process -->
    <section class="s-white">
      <div class="container">
        <div class="two-col-img-layout">
          <div>
            <h2 class="s-heading">Physical Damage? We Can Help.</h2>
            <p class="s-body">Devices with physical damage often require cleanroom recovery. This applies to drives that someone has dropped, bumped, or exposed to liquid. We’re one of the few data recovery labs near Burbank equipped with a certified cleanroom. Our engineers can carefully take apart your drive. They can fix or replace parts and recover your data. This is done without causing more damage. If you’re unsure whether your device can be saved, don’t throw it away. We may be able to recover more than you think.</p>
          </div>
          <div class="section-img-wrap">
            <NuxtImg src="/burbank-hdd-components.jpg" alt="Hard drive components disassembled" class="section-img" width="1024" height="683" loading="lazy" format="webp" sizes="xs:100vw sm:100vw md:100vw lg:50vw xl:50vw" />
          </div>
        </div>
        <h2 class="s-heading" style="margin-top:48px;">Our 3‑Step Recovery Process</h2>
        <p class="s-body">We’ve designed our process to be simple, transparent, and stress-free:</p>
        <div class="process-steps">
          <div class="process-step">
            <div class="step-num">1</div>
            <div>
              <h3 class="step-title">Free Diagnostic &amp; Quote</h3>
              <p class="step-body">We evaluate your drive and give you a flat‑rate price. No surprises.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">2</div>
            <div>
              <h3 class="step-title">Data Recovery in Our Lab</h3>
              <p class="step-body">Recovery is performed by trained engineers — never outsourced.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">3</div>
            <div>
              <h3 class="step-title">Your Data, Delivered</h3>
              <p class="step-body">We return your recovered data on a new drive or USB securely.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WHO WE WORK WITH -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Who We Work With</h2>
        <p class="s-body">We assist a wide range of clients throughout Burbank:</p>
        <ul class="content-list">
          <li><strong>Students</strong> who have lost important schoolwork, research files, or media projects</li>
          <li><strong>Small businesses</strong> dealing with lost invoices, accounting records, or databases</li>
          <li><strong>Creative professionals</strong> recovering photos, videos, and editing files from damaged devices</li>
          <li><strong>Everyday users</strong> looking to recover family photos, tax files, and personal documents</li>
        </ul>
        <p class="s-body">Regardless of your background or profession, our goal is the same: to recover your data and give you peace of mind.</p>
      </div>
    </section>

    <!-- AREAS WE SERVE -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Areas We Serve near Burbank</h2>
        <p class="s-body">We offer pickup service across the entire city, including:</p>
        <ul class="content-list">
          <li>Magnolia Park</li>
          <li>Downtown Burbank</li>
          <li>Media District</li>
          <li>Rancho Equestrian &amp; Toluca Woods</li>
          <li>McNeil &amp; Chandler Park</li>
        </ul>
        <p class="s-body">Or visit our lab directly — we’re just a short drive down the 5 freeway.</p>
      </div>
    </section>

    <!-- YOUR DATA IS SAFE -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Your Data Is Safe With Us</h2>
        <p class="s-body">We treat your data with the highest level of confidentiality and security. From start to finish, we protect your files. Whether you’re a private individual or a business, we handle your information with care. We also offer:</p>
        <ul class="content-list">
          <li>Encrypted data storage and transfers</li>
          <li>Non-disclosure agreements for business clients</li>
          <li>Secure deletion of temporary recovery files upon completion</li>
        </ul>
      </div>
    </section>

    <!-- REVIEWS -->
    <ReviewsSection :reviews="reviews" />

    <!-- CONTACT BAND -->
    <section class="s-contact-band contact-band-bg">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Let’s Recover Your Files</h2>
        </div>
        <p class="contact-body-text">Data loss doesn’t have to be permanent. If your device has failed, your files may still be recoverable—but time matters. The sooner we start the process, the better the outcome.</p>
        <ul class="contact-bullets">
          <li>We’re located in Glendale—just minutes from Burbank</li>
          <li>Same-day pickup near Burbank available Monday through Friday</li>
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
.inline-link { color: #C9A84C; font-weight: 600; text-decoration: underline; }
.two-col-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
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
.contact-band-bg { background: linear-gradient(to right, rgba(15,22,35,0.92) 0%, rgba(15,22,35,0.75) 60%, rgba(15,22,35,0.5) 100%), url('/pasadena-contact-bg.jpg') center center / cover no-repeat !important; }
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
.faq-answer :deep(.faq-link) { color: #C9A84C; font-weight: 600; text-decoration: underline; }
.two-col-img-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
.section-img-wrap { border-radius: 12px; overflow: hidden; }
.section-img { width: 100%; height: auto; display: block; border-radius: 12px; object-fit: cover; }
@media (max-width: 768px) { .two-col-layout { grid-template-columns: 1fr; gap: 36px; } .two-col-img-layout { grid-template-columns: 1fr; } }
</style>
