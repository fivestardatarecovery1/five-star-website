<script setup lang="ts">
useSeoMeta({
  title: 'Expedited Data Recovery Service - Five Star Data Recovery',
  ogTitle: 'Data Recovery Expedited Service',
  description: 'Five Star Data Recovery offers an expedited data recovery service for our customers. Please feel free to contact us to get this started!',
  ogDescription: 'Five Star Data Recovery offers an expedited data recovery service for our customers. Please feel free to contact us to get this started!',
})

const trustBadges = [
  { icon: 'clock', text: 'Available 24/7/365' },
  { icon: 'check', text: 'No Data = No Charge' },
  { icon: 'shield', text: '10+ Years in Business' },
  { icon: 'star', text: 'Free Nationwide Shipping' },
]

const reviews = [
  {
    text: "I had an urgent deadline and needed my data recovered fast. Five Star's expedited service was exactly what I needed — they started working on my drive within the hour and had a diagnosis ready in under 3 hours. I got all my files back in two days. Worth every penny.",
    name: 'Marcus T.',
    location: 'Los Angeles, CA',
  },
  {
    text: "After my laptop hard drive failed the night before an important presentation, I called Five Star and they put me on their expedited queue immediately. The team was professional, communicative, and recovered everything. I honestly can't thank them enough.",
    name: 'Rebecca H.',
    location: 'Santa Monica, CA',
  },
  {
    text: 'Used the expedited service for a business emergency — critical project files on a clicking drive. Five Star had it diagnosed within 3 hours and fully recovered in 3 days. They were transparent about pricing upfront and delivered exactly what they promised.',
    name: 'James C.',
    location: 'Burbank, CA',
  },
]

const faqs = [
  {
    q: 'What is the Expedited Data Recovery Service?',
    a: 'Our Expedited Data Recovery Service puts your case at the top of the queue. As soon as your device arrives at our lab, our engineers begin working on it immediately — without waiting in the standard recovery line. You are guaranteed a diagnosis within 3 hours of drop-off, and your case will be worked on non-stop during normal business hours.',
  },
  {
    q: 'How much does Expedited Service cost?',
    a: 'Expedited Service includes a flat $200 upfront fee in addition to the standard flat-rate data recovery cost. This fee is paid at the time of drop-off and ensures your case is prioritized immediately. All pricing is transparent — no surprises.',
  },
  {
    q: 'How quickly will I get my data back with Expedited Service?',
    a: 'Turnaround depends on the type of issue. Logical failures (bad sectors, firmware issues, corrupted file systems) with less than 2TB of data are typically resolved in 2–3 business days. Mechanical failures (clicking, beeping, stuck motor) with less than 2TB typically take 3–5 days due to sourcing donor parts.',
  },
  {
    q: 'Does Expedited Service run 24/7?',
    a: 'Expedited Service runs non-stop during normal business hours. If you need 24/7 around-the-clock recovery — including nights, weekends, and holidays — please ask about our <a href="/expedited-service-plus" class="faq-link">Expedited Service Plus</a> option.',
  },
  {
    q: 'Do I still qualify for No Data, No Charge with Expedited Service?',
    a: 'The $200 expedited fee is paid upfront and is non-refundable, as it covers the priority scheduling and engineering time. However, if we are unable to recover your data, you will not be charged the standard flat-rate recovery fee — our No Data, No Charge (most cases) guarantee still applies to the recovery portion.',
  },
  {
    q: 'Can I ship my drive in for Expedited Service?',
    a: 'Yes — we accept mail-in devices for expedited cases nationwide. We offer free prepaid shipping labels so you can send your drive securely. Please call us ahead of time so we can prepare your expedited slot before your device arrives.',
  },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <HeroSection
      title="Expedited Data Recovery Service"
      description="When time is critical, our Expedited Data Recovery service gives your case immediate priority. Our engineers will begin working on your device right away—without waiting in the standard queue. Whether it's during business hours, after hours, or on weekends, we offer fast-track options to meet your urgent needs. Every expedited case is handled with the highest level of attention and care to recover your data as quickly as possible."
      bgImage="/data-recovery-pricing-los-angeles.jpg"
      :trustBadges="trustBadges"
    />

    <StatsBar />

    <!-- SECTION 1 — s-white -->
    <section class="s-white">
      <div class="container">
        <h4 class="s-heading">Do you offer a Priority Data Recovery Service?</h4>
        <p class="s-body">Yes, of course. We understand that some recoveries are time sensitive and need to be completed as soon as possible. We offer an Expedited Service which would put your case at the top of the que. With our Expedited Service, our Engineers will start working on your data recovery case within an hour of drop off, and the case will be handled as a priority within business hours. With this service, you are guaranteed a diagnosis within 3 hours of the time you drop off your drive. Your case will be worked on non-stop during normal business hours.</p>
      </div>
    </section>

    <!-- SECTION 2 — s-grey -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">What's the average turnaround time for Expedited Data Recovery Cases?</h2>
        <p class="s-body"><strong>IF</strong> the issue with your drive is logical (bad sectors, firmware corruption, damaged file system, etc), and you have less than 2TB of data, we should be able to get the data back to you within 2-3 days.</p>
        <p class="s-body"><strong>IF</strong> the issue with your drive is mechanical (clicking, beeping, stuck motor, etc), and you have less than 2TB of data, we should be able to get your data back to you within 3-5 days (the delay is for the time needed to source the donor parts).</p>
        <p class="s-body"><strong>IF</strong> you have a lot of data on your drive, we can work with you to get you back the most important files needed first, then continue working on the rest of the recovery.</p>
      </div>
    </section>

    <!-- SECTION 3 — s-white: Data Recovery Process -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Data Recovery Process</h2>
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

    <!-- CONTACT BAND -->
    <section class="s-contact-band">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Start Your Expedited Recovery Today</h2>
        </div>
        <ul class="contact-bullets">
          <li>Priority queue — work starts within 1 hour of drop-off</li>
          <li>Diagnosis guaranteed within 3 hours</li>
          <li>Non-stop work during business hours</li>
          <li>Flat-rate pricing + $200 expedited fee (upfront)</li>
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
.s-heading.center { text-align: center; }
.s-body { font-size: 0.95rem; color: #4a5568; line-height: 1.8; margin-bottom: 14px; }
.s-intro { font-size: 1rem; color: #4a5568; line-height: 1.75; margin-bottom: 20px; }
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
.s-contact-band { background: #0f1623; padding: 72px 0; border-top: 3px solid #C9A84C; border-bottom: 3px solid #C9A84C; }
.contact-banner-card { border: 1px solid rgba(201,168,76,0.3); border-radius: 8px; padding: 28px 32px; margin-bottom: 28px; }
.contact-banner-heading { font-size: clamp(1.4rem, 2.5vw, 1.9rem); font-weight: 900; color: #fff; margin: 0; }
.contact-body-text { font-size: 0.95rem; color: rgba(255,255,255,0.7); line-height: 1.75; margin-bottom: 14px; }
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
</style>
