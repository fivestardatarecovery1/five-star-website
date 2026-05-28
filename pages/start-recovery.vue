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
            "@id": "https://www.fivestardatarecovery.com/#fivestardatarecovery",
            "name": "Five Star Data Recovery",
            "image": "https://www.fivestardatarecovery.com/wp-content/uploads/logo.png",
            "url": "https://www.fivestardatarecovery.com",
            "telephone": "+1-818-272-8866",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1731 S Brand Blvd",
              "addressLocality": "Glendale",
              "addressRegion": "CA",
              "postalCode": "91204",
              "addressCountry": "US"
            },
            "priceRange": "$300 - $950",
            "areaServed": { "@type": "Country", "name": "United States" },
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "498" },
            "review": [
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Leah P." },
                "datePublished": "2024-09-02",
                "reviewBody": "The online form made it so easy to get started. I mailed in my hard drive and had updates within a few hours. Five Star really lives up to their name!",
                "name": "Easy Online Recovery Process",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
              }
            ]
          },
          {
            "@type": "WebPage",
            "url": "https://www.fivestardatarecovery.com/start-recovery/",
            "name": "Start Your Data Recovery Case | Five Star Data Recovery",
            "description": "Quickly start your data recovery case online with Five Star Data Recovery. Fill out our Start Recovery Form for fast drop-off or mail-in service. No appointment needed."
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fivestardatarecovery.com/" },
              { "@type": "ListItem", "position": 2, "name": "Start Data Recovery", "item": "https://www.fivestardatarecovery.com/start-recovery/" }
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Can I start a data recovery case online?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! You can easily start your data recovery case online by filling out our Start Recovery Form. Once submitted, our team will contact you to confirm the next steps, including drop-off or mail-in options." } },
              { "@type": "Question", "name": "Do I need to schedule an appointment before dropping off my device?", "acceptedAnswer": { "@type": "Answer", "text": "No appointment is necessary. You're welcome to walk in during our business hours. However, submitting the Start Recovery Form in advance helps us prepare for your device and minimize your wait time." } },
              { "@type": "Question", "name": "What happens after I submit the Start Recovery Form?", "acceptedAnswer": { "@type": "Answer", "text": "After you submit the form, we'll review your case details and reach out to you by phone or email to confirm receipt. From there, you can proceed with either dropping off your device in person or shipping it to our lab." } },
              { "@type": "Question", "name": "Can I track the status of my data recovery case after starting it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Once your case is checked in, you'll receive all status updates exclusively through our ticketing system via email. This ensures clear, organized communication for every step of the recovery process. If you have questions, you can reply directly to your ticket at any time for further assistance." } },
              { "@type": "Question", "name": "What if I'm not sure how to describe the issue with my device?", "acceptedAnswer": { "@type": "Answer", "text": "No problem. Just provide as much information as you can on the Start Recovery Form, and our engineers will diagnose the device after it arrives. If needed, we'll contact you for clarification before proceeding." } },
              { "@type": "Question", "name": "Is there a fee just for submitting the Start Recovery Form?", "acceptedAnswer": { "@type": "Answer", "text": "No, there's no fee to submit the form. Filling it out simply allows us to prepare for your case and start the process efficiently. Any applicable fees (like the recovery fee or expedited services) will only be discussed and charged after diagnostics." } },
              { "@type": "Question", "name": "How quickly will my case be checked in after drop-off or arrival?", "acceptedAnswer": { "@type": "Answer", "text": "We check in most cases within 1\u20132 hours of arrival during business hours. For mail-in devices, cases are usually entered into our system the same day they arrive, and you'll receive confirmation once your device is logged." } },
              { "@type": "Question", "name": "Can I submit the Start Recovery Form if I'm mailing my device?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! In fact, submitting the form is highly recommended for mail-in clients. It helps us match your incoming shipment to your case file, reducing delays and ensuring faster processing once your device arrives." } }
            ]
          }
        ]
      })
    }
  ]
})

useSeoMeta({
  title: 'Start Recovery of Data - Five Star Data Recovery',
  ogTitle: 'Start Recovery of Data - Five Star Data Recovery',
  description: 'Lost important files? Start Recovery of Data now! Drop-off or mail-in your device to get a free diagnosis from our certified engineers.',
  ogDescription: 'Lost important files? Start Recovery of Data now! Drop-off or mail-in your device to get a free diagnosis from our certified engineers.',
})

const reviews = [
  {
    text: '\u201cStarting my data recovery process with Five Star was incredibly simple. I filled out the online form and got a quote within minutes. The instructions were clear, and the free prepaid shipping label made sending in my drive super convenient. They kept me updated every step of the way, and I had my recovered files back sooner than expected.\u201d',
    name: 'Emily S.',
    location: 'Summerlin, NV',
  },
  {
    text: '\u201cThe team made the whole data recovery process stress-free. From my initial phone call to dropping off my hard drive, they explained everything clearly. Within just a few days, they had recovered all my important files. Highly recommend!\u201d',
    name: 'Jessica R.',
    location: 'Austin, TX',
  },
  {
    text: '\u201cI never thought getting started with data recovery could be this easy. I used their online Start Recovery form late at night, and someone followed up with me first thing the next morning. Their quick response and clear pricing made it an easy decision to move forward.\u201d',
    name: 'Timothy A.',
    location: 'New York, NY',
  },
]

const faqs = [
  {
    q: '1. Can I start a data recovery case online?',
    a: 'Yes! You can easily start your data recovery case online by filling out our Start Recovery Form. Once submitted, our team will contact you to confirm the next steps, including drop-off or mail-in options.',
  },
  {
    q: '2. Do I need to schedule an appointment before dropping off my device?',
    a: 'No appointment is necessary. You\'re welcome to walk in during our business hours. However, submitting the Start Recovery Form in advance helps us prepare for your device and minimize your wait time.',
  },
  {
    q: '3. What happens after I submit the Start Recovery Form?',
    a: 'After you submit the form, we\'ll review your case details and reach out to you by phone or email to confirm receipt. From there, you can proceed with either dropping off your device in person or shipping it to our lab.',
  },
  {
    q: '4. Can I track the status of my data recovery case after starting it?',
    a: 'Yes. Once your case is checked in, you\'ll receive all status updates exclusively through our ticketing system via email. This ensures clear, organized communication for every step of the recovery process. If you have questions, you can reply directly to your ticket at any time for further assistance.',
  },
  {
    q: '5. What if I\'m not sure how to describe the issue with my device?',
    a: 'No problem. Just provide as much information as you can on the Start Recovery Form, and our engineers will diagnose the device after it arrives. If needed, we\'ll contact you for clarification before proceeding.',
  },
  {
    q: '6. Is there a fee just for submitting the Start Recovery Form?',
    a: 'No, there\'s no fee to submit the form. Filling it out simply allows us to prepare for your case and start the process efficiently. Any applicable fees (like the recovery fee or expedited services) will only be discussed and charged after diagnostics.',
  },
  {
    q: '7. How quickly will my case be checked in after drop-off or arrival?',
    a: 'We check in most cases within 1–2 hours of arrival during business hours. For mail-in devices, cases are usually entered into our system the same day they arrive, and you\'ll receive confirmation once your device is logged.',
  },
  {
    q: '8. Can I submit the Start Recovery Form if I\'m mailing my device?',
    a: 'Yes! In fact, submitting the form is highly recommended for mail-in clients. It helps us match your incoming shipment to your case file, reducing delays and ensuring faster processing once your device arrives.',
  },
]

const trustBadges = [
  { icon: 'clock', text: 'Available 24/7/365' },
  { icon: 'check', text: 'No Data = No Charge' },
  { icon: 'shield', text: '10+ Years in Business' },
  { icon: 'star', text: 'Free Nationwide Shipping' },
]

const steps = [
  { img: '/start-recovery-step-1.jpg', alt: 'Shipping Process: Step 1', text: 'Drop off or Mail in your drive' },
  { img: '/start-recovery-step-2.jpg', alt: 'Shipping Process: Step 2', text: 'Receive a free diagnosis' },
  { img: '/start-recovery-step-3.jpg', alt: 'Shipping Process: Step 3', text: 'Our engineers work on recovering your data' },
  { img: '/start-recovery-step-4.jpg', alt: 'Shipping Process: Step 4', text: 'Review & approve the recovered data' },
  { img: '/start-recovery-step-5.jpg', alt: 'Shipping Process: Step 5', text: 'Receive your recovered data' },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <HeroSection
      title="Start Recovery"
      subtitle="Start Your Data Recovery Today"
      description="Ready to get your data back? Starting your recovery with Five Star Data Recovery is fast and hassle-free. You can drop off your device, ship it in with our free prepaid label, or schedule a free local pickup.<br><br>For urgent cases, we offer Expedited and Expedited Plus services with priority turnaround. From hard drives and SSDs to phones and RAID arrays, our expert engineers are ready to help you recover your important files."
      bgImage="/start-recovery-hero.webp"
      :trustBadges="trustBadges"
      :showForm="false"
      :showButtons="false"
      :overlayOpacity="0.72"
    />

    <StatsBar />

    <!-- 5-STEP PROCESS -->
    <section class="sr-steps-section">
      <div class="container">
        <div class="sr-steps-grid">
          <div class="sr-step-card" v-for="(step, i) in steps" :key="i">
            <img :src="step.img" :alt="step.alt" class="sr-step-card-img" />
            <div v-if="i < steps.length - 1" class="sr-step-arrow">›</div>
          </div>
        </div>
      </div>
    </section>

    <!-- LOCAL / NOT LOCAL -->
    <section class="s-grey">
      <div class="container">
        <div class="sr-options">
          <!-- LOCAL -->
          <div class="sr-option-card sr-option-local">
            <div class="sr-option-tag">LOCAL?</div>
            <img src="/start-recovery-local-icon.png" alt="Express Drop Off" class="sr-option-icon" />
            <h2 class="sr-option-title">EXPRESS DROP OFF</h2>
            <p class="sr-option-desc">We offer a faster way to start your recovery! Fill out the form to get started!</p>
            <NuxtLink to="/data-recovery/express-drop-off" class="btn-sr">Express Drop Off Form</NuxtLink>
          </div>
          <!-- NOT LOCAL -->
          <div class="sr-option-card sr-option-mail">
            <div class="sr-option-tag">NOT LOCAL?</div>
            <img src="/start-recovery-mail-icon.png" alt="Mail-In Service" class="sr-option-icon" />
            <h2 class="sr-option-title">MAIL-IN SERVICE</h2>
            <p class="sr-option-desc">Not local? Not a problem! Fill out our Mail-In form to experience our FIVE STAR service!</p>
            <NuxtLink to="/data-recovery/mail-in-service" class="btn-sr btn-sr-dark">Start Your Recovery</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- VIDEO -->
    <section class="sr-video-section">
      <div class="container sr-video-inner">
        <div class="sr-video-text">
          <h2 class="sr-video-heading">See Why Thousands Trust Us<br>With Their Important Data</h2>
          <p class="sr-video-desc">Data loss is stressful — but working with us doesn't have to be. Watch how our team handles each recovery with care, professionalism, and precision. From diagnostics to delivery, we offer flat-rate pricing, honest communication, and proven results — all from our secure Glendale lab.</p>
        </div>
        <div class="sr-video-embed">
          <iframe src="https://www.youtube.com/embed/14ACFHJ24hg?start=60" title="Five Star Data Recovery" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading center" style="margin-bottom:36px;">Frequently Asked Questions</h2>
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

    <!-- TESTIMONIALS -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading center" style="margin-bottom:36px;">Testimonials from Satisfied Clients</h2>
        <ReviewsSection :reviews="reviews" />
      </div>
    </section>

    <FooterBar />
  </div>
</template>

<style scoped>
*, *::before, *::after { box-sizing: border-box; }
.page-content { font-family: 'Inter', sans-serif; color: #1a1a2e; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 28px; }
.s-white { background: #fff; padding: 80px 0; }
.s-grey { background: #f4f7fc; padding: 80px 0; }
.s-heading { font-size: clamp(1.5rem, 2.8vw, 2.1rem); font-weight: 900; color: #1a1a2e; line-height: 1.25; margin-bottom: 14px; }
.s-heading.center { text-align: center; }

/* 5-STEP PROCESS */
.sr-steps-section {
  background: #f8f9fc;
  padding: 60px 0;
}
.sr-steps-grid {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
}
.sr-step-card {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  max-width: 220px;
}
.sr-step-card-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  object-fit: contain;
}
.sr-step-arrow {
  position: absolute;
  right: -18px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  color: #F5C842;
  font-weight: 900;
  z-index: 2;
  line-height: 1;
}

/* LOCAL / NOT LOCAL */
.sr-options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
}
.sr-option-card {
  border-radius: 16px;
  padding: 48px 36px;
  text-align: center;
  border: 1.5px solid #e2e8f0;
}
.sr-option-local { background: #fff; }
.sr-option-mail { background: #1a2035; border-color: #2a3050; }
.sr-option-tag {
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #F5C842;
  margin-bottom: 20px;
}
.sr-option-icon {
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin: 0 auto 20px;
  display: block;
}
.sr-option-title {
  font-size: 1.4rem;
  font-weight: 900;
  margin-bottom: 14px;
}
.sr-option-local .sr-option-title { color: #1a1a2e; }
.sr-option-mail .sr-option-title { color: #fff; }
.sr-option-desc {
  font-size: 0.92rem;
  line-height: 1.7;
  margin-bottom: 28px;
}
.sr-option-local .sr-option-desc { color: #4a5568; }
.sr-option-mail .sr-option-desc { color: #a0aec0; }
.btn-sr {
  display: inline-block;
  background: #F5C842;
  color: #1a1a1a;
  padding: 14px 28px;
  border-radius: 8px;
  font-weight: 800;
  font-size: 0.9rem;
  text-decoration: none;
  letter-spacing: 0.02em;
  transition: background 0.2s;
}
.btn-sr:hover { background: #e0b43a; }
.btn-sr-dark { background: #fff; color: #1a1a2e; }
.btn-sr-dark:hover { background: #f0f0f0; }

/* VIDEO */
.sr-video-section { background: #1a2035; padding: 72px 0; }
.sr-video-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
.sr-video-heading { font-size: clamp(1.4rem, 2.5vw, 2rem); font-weight: 800; color: #fff; line-height: 1.3; margin-bottom: 16px; }
.sr-video-desc { font-size: 0.95rem; color: #8a9bb8; line-height: 1.8; }
.sr-video-embed { position: relative; border-radius: 14px; overflow: hidden; aspect-ratio: 16/9; box-shadow: 0 12px 48px rgba(0,0,0,0.4); }
.sr-video-embed iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }

/* FAQ */
.faq-wrap { margin: 0; display: flex; flex-direction: column; gap: 8px; max-width: 860px; margin: 0 auto; }
.faq-row { border: 1.5px solid #e2e8f0; border-radius: 10px; overflow: hidden; background: #fff; }
.faq-row.active { border-color: #F5C842; }
.faq-trigger { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; background: none; border: none; color: #1a1a2e; font-size: 1rem; font-weight: 700; cursor: pointer; text-align: left; gap: 16px; font-family: inherit; }
.faq-toggle { color: #F5C842; font-size: 1.4rem; font-weight: 300; flex-shrink: 0; line-height: 1; }
.faq-answer { padding: 4px 24px 20px; font-size: 0.9rem; color: #4a5568; line-height: 1.8; border-top: 1px solid #f0f2f7; }

@media (max-width: 900px) {
  .sr-steps-grid { flex-wrap: wrap; justify-content: center; gap: 8px; }
  .sr-step-card { max-width: 160px; }
  .sr-step-arrow { display: none; }
}
@media (max-width: 768px) {
  .sr-hero-content { grid-template-columns: 1fr; }
  .sr-hero-right { display: none; }
  .sr-hero-badges { grid-template-columns: 1fr; }
  .sr-steps-grid { gap: 6px; }
  .sr-step-card { max-width: 140px; }
  .sr-options { grid-template-columns: 1fr; }
  .sr-video-inner { grid-template-columns: 1fr; }
}
@media (max-width: 480px) {
  .sr-step-card { max-width: 120px; }
}
</style>
