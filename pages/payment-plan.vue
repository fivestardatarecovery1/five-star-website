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
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fivestardatarecovery.com/" },
              { "@type": "ListItem", "position": 2, "name": "Payment Plan", "item": "https://www.fivestardatarecovery.com/payment-plan/" }
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Do you offer payment plans for data recovery services?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we offer in-house, interest-free payment plans for customers who need help managing the cost of data recovery. These plans are designed to make our services more accessible while still maintaining our high recovery standards. Please note, recovered data will only be released once the full balance is paid in full." } },
              { "@type": "Question", "name": "Who qualifies for a data recovery payment plan?", "acceptedAnswer": { "@type": "Answer", "text": "Our interest-free payment plans are available to all customers—no credit check required. To get started, we simply require 25% of the total recovery cost upfront, with the remaining balance paid over time." } },
              { "@type": "Question", "name": "How do I apply for a payment plan?", "acceptedAnswer": { "@type": "Answer", "text": "Our payment plans are handled in-store only—no online application or credit check is required. During your visit, our team will walk you through the simple process. Once you make the 25% upfront payment, we'll get started on your recovery and provide a clear payment schedule for the remaining balance." } },
              { "@type": "Question", "name": "Is there a minimum or maximum amount for a payment plan?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, payment plans are available for recovery cases starting at $300 and up. There's no strict maximum, and we're happy to work with you on larger recoveries as long as the 25% upfront requirement is met." } },
              { "@type": "Question", "name": "Will applying for a payment plan affect my credit score?", "acceptedAnswer": { "@type": "Answer", "text": "No — we do not perform any credit checks for our in-house payment plans. Approval is guaranteed as long as the minimum upfront payment is made, and your credit score is never impacted." } },
              { "@type": "Question", "name": "What types of devices are eligible for payment plan options?", "acceptedAnswer": { "@type": "Answer", "text": "Payment plans are available for all major recovery types, including hard drives, SSDs, RAID systems, USB drives, SD cards, and mobile phones." } },
              { "@type": "Question", "name": "Can I still qualify for a payment plan if I live outside California?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! Our payment plan options are available nationwide, and so is our data recovery service. We offer free shipping across the U.S., making it easy for anyone to get started, no matter their location." } },
              { "@type": "Question", "name": "When do I start making payments?", "acceptedAnswer": { "@type": "Answer", "text": "In most cases, payments begin after the recovery is complete and you've approved the results. You'll receive a breakdown of your payment schedule based on your selected plan." } }
            ]
          }
        ]
      })
    }
  ]
})

useSeoMeta({
  title: 'Data Recovery Payment Plan - Five Star Data Recovery',
  ogTitle: 'Payment Plan',
  description: 'Five Star Data Recovery offers flexible payment plan options for Data Recovery Services. Contact us today for more details.',
  ogDescription: 'Five Star Data Recovery offers flexible payment plan options for Data Recovery Services. Contact us today for more details.',
  ogImage: 'https://www.fivestardatarecovery.com/wp-content/uploads/2025/05/Logo-01-1024x1024.png',
})

const reviews = [
  {
    text: '\u201cExcellent service from start to finish. They recovered all of my business documents from a failed SSD, and the payment plan option made it manageable for me to move forward without delay. It\u2019s rare to find a company that combines technical skill with true customer care.\u201d',
    name: 'Luis D.',
    location: 'Austin, TX'
  },
  {
    text: '\u201cMy RAID setup crashed, and I was in a panic. Five Star managed to recover a large portion of the data and explained everything in clear terms. Their interest-free payment plan gave me the breathing room I needed financially. I\u2019m grateful for their professionalism.\u201d',
    name: 'Melisa T.',
    location: 'Burbank, CA'
  },
  {
    text: '\u201cThey were upfront about the cost and what to expect. I couldn\u2019t afford the full amount right away, so their in-house payment plan made it possible for me to recover years of personal data. Not everything came back, but what I got was absolutely worth it.\u201d',
    name: 'Henry C.',
    location: 'Los Angeles, CA'
  },
]

const faqs = [
  {
    q: '1. Do you offer payment plans for data recovery services?',
    a: 'Yes, we offer <strong>in-house, interest-free payment plans</strong> for customers who need help managing the cost of data recovery. These plans are designed to make our services more accessible while still maintaining our high recovery standards. Please note, <strong>recovered data will only be released once the full balance is paid in full</strong>.'
  },
  {
    q: '2. Who qualifies for a data recovery payment plan?',
    a: 'Our <strong>interest-free payment plans</strong> are available to <strong>all customers\u2014no credit check required</strong>. To get started, we simply require <strong>25% of the total recovery cost upfront</strong>, with the remaining balance paid over time. This flexible option helps make professional data recovery more accessible when you need it most.'
  },
  {
    q: '3. How do I apply for a payment plan?',
    a: 'Our <strong>payment plans are handled in-store only</strong>\u2014no online application or credit check is required. During your visit, our team will walk you through the simple process. Once you make the 25% upfront payment, we\u2019ll get started on your recovery and provide a clear payment schedule for the remaining balance.'
  },
  {
    q: '4. Is there a minimum or maximum amount for a payment plan?',
    a: 'Yes, <strong>payment plans are available for recovery cases starting at $300 and up</strong>. There\u2019s no strict maximum, and we\u2019re happy to work with you on larger recoveries as long as the 25% upfront requirement is met. If you\u2019re unsure whether your case qualifies, feel free to contact us or visit our store for a free consultation.'
  },
  {
    q: '5. Will applying for a payment plan affect my credit score?',
    a: 'No \u2014 we <strong>do not perform any credit checks</strong> for our in-house payment plans. Approval is guaranteed as long as the minimum upfront payment is made, and your credit score is never impacted.'
  },
  {
    q: '6. What types of devices are eligible for payment plan options?',
    a: 'Payment plans are available for all major recovery types, including <strong>hard drives</strong>, <strong>SSDs</strong>, <strong>RAID systems</strong>, <strong>USB drives</strong>, <strong>SD cards</strong>, and <strong>mobile phones</strong>. Whether your case is logical, physical, or complex, our payment plan options can help make recovery more accessible.'
  },
  {
    q: '7. Can I still qualify for a payment plan if I live outside California?',
    a: 'Yes! Our <strong>payment plan options are available nationwide</strong>, and so is our data recovery service. We offer <strong>free shipping</strong> across the U.S., making it easy for anyone to get started, no matter their location.'
  },
  {
    q: '8. When do I start making payments?',
    a: 'In most cases, payments begin <strong>after the recovery is complete</strong> and you\u2019ve approved the results. You\u2019ll receive a breakdown of your payment schedule based on your selected plan.'
  },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <HeroSection
      title="Data Recovery Payment Plan"
      subtitle="Get Your Data Back In No Time."
      description="Need data recovery but concerned about cost? We offer interest-free, in-house payment plans to make professional data recovery more accessible. No credit checks, no hidden fees — just a simple process with only 25% down to get started. Your data is recovered safely and securely, and you pay the remaining balance over time."
      bgImage="/payment-plan-hero.jpg"
      :overlayOpacity="0.7"
      :trustBadges="[
        { icon: 'clock', text: 'Available 24/7/365' },
        { icon: 'check', text: 'No Data = No Charge' },
        { icon: 'shield', text: '10+ Years in Business' },
        { icon: 'star', text: 'Free Nationwide Shipping' },
      ]"
    />

    <StatsBar />

    <!-- DO YOU OFFER PAYMENT PLANS -->
    <section class="s-white">
      <div class="container two-col-layout">
        <div>
          <h2 class="s-heading">Do you offer Payment Plans for Data Recovery?</h2>
          <p class="s-body">Yes, of course! We understand that an expense for data recovery is something that is unexpected and not budgeted for. So we are happy to offer flexible Data Recovery Payment options.</p>
          <p class="s-body">Same terms apply to all of our data recovery cases. There is nothing due up front. You would ONLY pay once the data is recovered and you are satisfied with the results. IF the data is unrecoverable OR you are not satisfied with the results, you pay nothing.</p>
          <p class="s-body">When it comes to cases that require a Payment Plan; once the recovery is successful and complete, you would pay 20% of the total balance. The remaining balance can be paid within 12 months in any increments that you feel comfortable with.</p>
          <p class="s-body">We would safely store the recovered data for you until the balance is paid in full. Once the balance is paid, you can pickup the recovery or have us ship it to you for free!</p>
          <NuxtLink to="/start-recovery" class="btn-cta">Start Your Recovery</NuxtLink>
        </div>
        <div class="plan-highlights">
          <div class="highlight-card">
            <div class="h-icon">💳</div>
            <h3 class="h-title">Interest-Free</h3>
            <p class="h-body">0% interest — ever. No hidden charges on your payment plan.</p>
          </div>
          <div class="highlight-card">
            <div class="h-icon">✅</div>
            <h3 class="h-title">No Credit Check</h3>
            <p class="h-body">No application, no credit inquiry. Available to everyone.</p>
          </div>
          <div class="highlight-card">
            <div class="h-icon">📅</div>
            <h3 class="h-title">Up to 12 Months</h3>
            <p class="h-body">Pay the remaining balance in any increments over 12 months.</p>
          </div>
          <div class="highlight-card">
            <div class="h-icon">🔒</div>
            <h3 class="h-title">Data Held Securely</h3>
            <p class="h-body">Your recovered data is stored safely until the balance is paid in full.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- DATA RECOVERY PROCESS -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading center">Data Recovery Process</h2>
        <p class="s-intro center">Our data recovery process is built around security, transparency, and peace of mind. From start to finish, we keep you informed with clear updates at every stage. With a commitment to honest service and no hidden fees, we follow through on every promise — ensuring a smooth and stress-free experience.</p>
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

    <!-- GET A FREE QUOTE BAND -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading center">Get a Free Quote within Minutes!</h2>
        <p class="s-intro center">Our expert engineers use advanced technology to recover your data quickly and securely. We specialize in complex cases with high success rates, offering tailored solutions for both businesses and individuals.</p>
        <div class="quote-features">
          <div class="qf"><span class="qf-check">✓</span> Quick and Secure Data Recovery</div>
          <div class="qf"><span class="qf-check">✓</span> Expert Engineers for All Devices</div>
          <div class="qf"><span class="qf-check">✓</span> No Data, No Fee Guarantee <em>(most cases)</em></div>
        </div>
        <p class="s-body" style="text-align:center; margin-top: 16px;">Contact our specialists today for a quick, hassle-free recovery. We're here to guide you every step of the way and ensure your data is securely restored. Your peace of mind is our priority.</p>
        <div style="text-align:center; margin-top: 28px;">
          <NuxtLink to="/start-recovery" class="btn-cta">Start Your Recovery</NuxtLink>
        </div>
      </div>
    </section>

    <!-- REVIEWS -->
    <ReviewsSection :reviews="reviews" />

    <!-- CONTACT BAND -->
    <section class="s-contact-band">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Start Your Data Recovery Today</h2>
        </div>
        <div class="contact-body">
          <p class="contact-body-text">Don't let cost stand in the way of getting your data back. Our flexible, interest-free payment plans make professional data recovery accessible to everyone. Call or visit us today to get started.</p>
          <ul class="contact-bullets">
            <li>No credit check required</li>
            <li>25% down to get started</li>
            <li>Pay the rest over up to 12 months</li>
            <li>Data held securely until balance is paid</li>
          </ul>
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
.s-intro { font-size: 1rem; color: #4a5568; line-height: 1.75; margin-bottom: 20px; }
.s-intro.center { text-align: center; }

/* Two-col */
.two-col-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }

/* Highlight cards */
.plan-highlights { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.highlight-card { background: #f4f7fc; border-radius: 12px; padding: 28px 24px; border-top: 4px solid #C9A84C; }
.h-icon { font-size: 1.8rem; margin-bottom: 12px; }
.h-title { font-size: 1rem; font-weight: 800; color: #1a1a2e; margin-bottom: 8px; }
.h-body { font-size: 0.88rem; color: #4a5568; line-height: 1.6; margin: 0; }

/* Process steps */
.process-steps { display: flex; flex-direction: column; }
.process-step { display: flex; align-items: flex-start; gap: 24px; padding: 28px 0; border-bottom: 1px solid #e2e6ee; }
.process-step:last-child { border-bottom: none; }
.step-num { width: 48px; height: 48px; background: #1a1a2e; color: #C9A84C; font-size: 1.2rem; font-weight: 900; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.step-title { font-size: 1rem; font-weight: 800; color: #1a1a2e; margin-bottom: 8px; }
.step-body { font-size: 0.93rem; color: #4a5568; line-height: 1.7; margin: 0; }

/* Quote features */
.quote-features { display: flex; justify-content: center; gap: 40px; flex-wrap: wrap; margin-top: 8px; }
.qf { font-size: 0.95rem; font-weight: 600; color: #1a1a2e; display: flex; align-items: center; gap: 8px; }
.qf-check { color: #C9A84C; font-weight: 900; font-size: 1.1rem; }

/* CTA button */
.btn-cta { display: inline-block; background: #C9A84C; color: #1a1a1a; font-weight: 800; font-size: 0.95rem; padding: 14px 32px; border-radius: 6px; text-decoration: none; margin-top: 20px; transition: background 0.2s; }
.btn-cta:hover { background: #b8923e; }

/* FAQ */
.faq-wrap { display: flex; flex-direction: column; border: 1.5px solid #e2e6ee; border-radius: 12px; overflow: hidden; }
.faq-row { border-bottom: 1px solid #e2e6ee; }
.faq-row:last-child { border-bottom: none; }
.faq-trigger { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; background: #fff; border: none; cursor: pointer; text-align: left; gap: 16px; font-family: inherit; }
.faq-trigger span:first-child { font-size: 0.95rem; font-weight: 700; color: #1a1a2e; line-height: 1.4; }
.faq-toggle { font-size: 1.4rem; font-weight: 300; color: #C9A84C; flex-shrink: 0; }
.faq-answer { padding: 0 24px 22px; font-size: 0.92rem; color: #4a5568; line-height: 1.75; }

/* Contact band */
.s-contact-band { background: #0f1623; padding: 72px 0; border-top: 3px solid #C9A84C; border-bottom: 3px solid #C9A84C; }
.contact-banner-card { border: 1px solid rgba(201,168,76,0.3); border-radius: 8px; padding: 28px 32px; margin-bottom: 28px; }
.contact-banner-heading { font-size: clamp(1.4rem, 2.5vw, 1.9rem); font-weight: 900; color: #fff; margin: 0; }
.contact-body-text { font-size: 0.95rem; color: rgba(255,255,255,0.7); line-height: 1.75; margin-bottom: 14px; }
.contact-bullets { list-style: none; padding: 0; margin: 0 0 28px; display: flex; flex-direction: column; gap: 8px; }
.contact-bullets li { font-size: 0.93rem; color: rgba(255,255,255,0.65); display: flex; align-items: center; gap: 10px; }
.contact-bullets li::before { content: '✓'; color: #C9A84C; font-weight: 700; }
.btn-start-recovery { display: inline-block; background: #C9A84C; color: #1a1a1a; font-weight: 800; font-size: 1rem; padding: 16px 36px; border-radius: 6px; text-decoration: none; transition: background 0.2s; }
.btn-start-recovery:hover { background: #b8923e; }

@media (max-width: 900px) {
  .two-col-layout { grid-template-columns: 1fr; gap: 40px; }
  .plan-highlights { grid-template-columns: 1fr 1fr; }
  .quote-features { flex-direction: column; align-items: center; gap: 16px; }
}
@media (max-width: 640px) {
  .plan-highlights { grid-template-columns: 1fr; }
  .process-step { flex-direction: column; gap: 14px; }
}
</style>
