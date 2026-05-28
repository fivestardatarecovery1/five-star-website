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
  {
    title: 'Drop Off or Ship Your Drive',
    text: 'Bring your device to our Glendale lab or ship it free with our prepaid label — no appointment needed.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
      <rect x="8" y="22" width="48" height="32" rx="4" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
      <path d="M8 30h48" stroke="currentColor" stroke-width="3"/>
      <path d="M24 22V14a8 8 0 0116 0v8" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
      <circle cx="32" cy="42" r="5" stroke="currentColor" stroke-width="3"/>
      <path d="M20 10l-6 6M44 10l6 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,
  },
  {
    title: 'Free Diagnosis',
    text: 'Our certified engineers evaluate your device at no charge and identify the exact cause of data loss.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
      <circle cx="28" cy="28" r="16" stroke="currentColor" stroke-width="3"/>
      <path d="M40 40l12 12" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M22 28h12M28 22v12" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    </svg>`,
  },
  {
    title: 'Data Recovery in Progress',
    text: 'Our engineers work in a certified cleanroom lab using advanced tools to safely recover your files.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
      <rect x="10" y="18" width="44" height="28" rx="4" stroke="currentColor" stroke-width="3"/>
      <path d="M10 26h44" stroke="currentColor" stroke-width="2.5"/>
      <circle cx="18" cy="22" r="2" fill="currentColor"/>
      <circle cx="26" cy="22" r="2" fill="currentColor"/>
      <path d="M20 36l6-6 6 6 8-8" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M22 50h20M32 46v4" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,
  },
  {
    title: 'Review & Approve',
    text: 'We send you a full file listing before recovery is complete. You only pay when you approve the results.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
      <rect x="12" y="10" width="40" height="44" rx="4" stroke="currentColor" stroke-width="3"/>
      <path d="M20 24h24M20 32h24M20 40h14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="46" cy="46" r="10" fill="#0f1623" stroke="currentColor" stroke-width="2.5"/>
      <path d="M41 46l3 3 6-6" stroke="#F5C842" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    title: 'Receive Your Data',
    text: 'Recovered files are delivered on a new drive or via secure cloud transfer — fast and fully guaranteed.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
      <path d="M32 10v28M32 38l-10-10M32 38l10-10" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14 44v4a4 4 0 004 4h28a4 4 0 004-4v-4" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
      <circle cx="32" cy="52" r="2" fill="currentColor"/>
    </svg>`,
  },
]

const activeStep = ref<number | null>(null)
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
        <h2 class="sr-steps-heading">How It Works</h2>
        <p class="sr-steps-sub">Five simple steps to get your data back — fast, secure, and stress-free.</p>
        <div class="sr-steps-timeline">
          <div
            class="sr-step"
            v-for="(step, i) in steps"
            :key="i"
            :class="{ active: activeStep === i }"
            @mouseenter="activeStep = i"
            @mouseleave="activeStep = null"
          >
            <div class="sr-step-card">
              <div class="sr-step-icon-wrap">
                <div class="sr-step-badge">{{ i + 1 }}</div>
                <div class="sr-step-icon" v-html="step.icon"></div>
              </div>
              <div class="sr-step-body">
                <h3 class="sr-step-title">{{ step.title }}</h3>
                <p class="sr-step-text">{{ step.text }}</p>
              </div>
            </div>
            <div v-if="i < steps.length - 1" class="sr-step-connector">
              <span class="sr-step-arrow-icon">›</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- LOCAL / NOT LOCAL -->
    <section class="sr-options-section">
      <div class="container">
        <div class="sr-options">
          <!-- LOCAL -->
          <div class="sr-option-card sr-option-local">
            <div class="sr-option-bg" style="background-image: url('/sr-local-bg.jpg')"></div>
            <div class="sr-option-overlay"></div>
            <div class="sr-option-content">
              <img src="/start-recovery-local-icon.png" alt="Express Drop Off" class="sr-option-icon" />
              <h2 class="sr-option-tag">LOCAL?</h2>
              <h3 class="sr-option-title">EXPRESS DROP OFF</h3>
              <p class="sr-option-desc">We offer a faster way to start your recovery! Fill out the form to get started!</p>
              <NuxtLink to="/data-recovery/express-drop-off" class="btn-option">Express Drop Off Form</NuxtLink>
            </div>
          </div>
          <!-- NOT LOCAL -->
          <div class="sr-option-card sr-option-mail">
            <div class="sr-option-bg" style="background-image: url('/sr-mail-bg.jpg')"></div>
            <div class="sr-option-overlay"></div>
            <div class="sr-option-content">
              <img src="/start-recovery-mail-icon.png" alt="Mail-In Service" class="sr-option-icon" />
              <h2 class="sr-option-tag">NOT LOCAL?</h2>
              <h3 class="sr-option-title">MAIL-IN SERVICE</h3>
              <p class="sr-option-desc">Not local? Not a problem! Fill out our Mail-In form to experience our FIVE STAR service!</p>
              <NuxtLink to="/data-recovery/mail-in-service" class="btn-option">Start Your Recovery</NuxtLink>
            </div>
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
  background: #0f1623;
  padding: 80px 0 90px;
}
.sr-steps-heading {
  text-align: center;
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  font-weight: 900;
  color: #fff;
  margin-bottom: 12px;
}
.sr-steps-sub {
  text-align: center;
  font-size: 1rem;
  color: #8a9bb8;
  margin-bottom: 52px;
}
.sr-steps-timeline {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
}
.sr-step {
  flex: 1;
  display: flex;
  align-items: center;
  min-width: 0;
}
.sr-step-card {
  flex: 1;
  background: #1a2035;
  border-radius: 14px;
  overflow: hidden;
  border: 1.5px solid #2a3050;
  transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease;
  cursor: default;
}
.sr-step:hover .sr-step-card {
  border-color: #F5C842;
  box-shadow: 0 8px 32px rgba(245,200,66,0.18);
  transform: translateY(-5px);
}
.sr-step-icon-wrap {
  position: relative;
  background: linear-gradient(135deg, #1a2540 0%, #0f1a30 100%);
  padding: 32px 20px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #2a3050;
}
.sr-step-badge {
  position: absolute;
  top: 10px;
  left: 12px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #F5C842;
  color: #1a1a2e;
  font-size: 0.9rem;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.4);
  line-height: 1;
}
.sr-step-icon {
  width: 72px;
  height: 72px;
  color: #F5C842;
  transition: transform 0.3s ease, color 0.25s ease;
}
.sr-step-icon :deep(svg) {
  width: 100%;
  height: 100%;
}
.sr-step:hover .sr-step-icon {
  transform: scale(1.1);
  color: #fff;
}
.sr-step-body {
  padding: 18px 16px 20px;
}
.sr-step-title {
  font-size: 0.9rem;
  font-weight: 800;
  color: #fff;
  margin: 0 0 8px;
  line-height: 1.3;
}
.sr-step-text {
  font-size: 0.78rem;
  color: #8a9bb8;
  line-height: 1.55;
  margin: 0;
}
.sr-step-connector {
  flex-shrink: 0;
  width: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 48px;
}
.sr-step-arrow-icon {
  font-size: 1.6rem;
  color: #F5C842;
  font-weight: 900;
  line-height: 1;
  opacity: 0.7;
}

/* LOCAL / NOT LOCAL */
.sr-options-section {
  background: #f4f7fc;
  padding: 80px 0;
}
.sr-options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
  max-width: 900px;
  margin: 0 auto;
}
.sr-option-card {
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  border: 1px solid #e8edf4;
}
.sr-option-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  z-index: 0;
}
.sr-option-overlay {
  position: absolute;
  inset: 0;
  background: rgba(255,255,255,0.88);
  z-index: 1;
}
.sr-option-content {
  position: relative;
  z-index: 2;
  padding: 48px 40px 44px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sr-option-icon {
  width: 52px;
  height: 52px;
  object-fit: contain;
  margin-bottom: 18px;
  display: block;
}
.sr-option-tag {
  font-size: clamp(1.6rem, 3vw, 2rem);
  font-weight: 900;
  color: #1a1a2e;
  margin: 0 0 8px;
  line-height: 1.1;
}
.sr-option-title {
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  font-weight: 800;
  color: #1a1a2e;
  margin: 0 0 16px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}
.sr-option-desc {
  font-size: 0.95rem;
  color: #4a5568;
  line-height: 1.7;
  margin-bottom: 28px;
  max-width: 320px;
}
.btn-option {
  display: inline-block;
  background: #F5C842;
  color: #1a1a1a;
  padding: 13px 30px;
  border-radius: 8px;
  font-weight: 800;
  font-size: 0.92rem;
  text-decoration: none;
  transition: background 0.2s;
}
.btn-option:hover { background: #e0b43a; }

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
  .sr-steps-timeline { flex-wrap: wrap; gap: 12px; justify-content: center; }
  .sr-step { flex: 0 0 calc(33% - 12px); min-width: 140px; }
  .sr-step-connector { display: none; }
}
@media (max-width: 768px) {
  .sr-hero-content { grid-template-columns: 1fr; }
  .sr-hero-right { display: none; }
  .sr-hero-badges { grid-template-columns: 1fr; }
  .sr-steps-timeline { flex-direction: column; align-items: stretch; gap: 12px; }
  .sr-step { flex: 0 0 auto; width: 100%; }
  .sr-step-connector { display: none; }
  .sr-step-card { display: flex; flex-direction: row; align-items: stretch; border-radius: 12px; }
  .sr-step-icon-wrap { width: 100px; flex-shrink: 0; border-bottom: none; border-right: 1px solid #2a3050; padding: 20px 12px; border-radius: 12px 0 0 12px; }
  .sr-step-icon { width: 52px; height: 52px; }
  .sr-step-body { display: flex; flex-direction: column; justify-content: center; padding: 14px 16px; }
  .sr-options { grid-template-columns: 1fr; max-width: 440px; }
  .sr-video-inner { grid-template-columns: 1fr; }
}
</style>
