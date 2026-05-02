<script setup lang="ts">
useSeoMeta({
  title: 'Data Recovery Pasadena, CA — Five Star Data Recovery',
  description: 'If you’ve experienced data loss—whether it’s from a crashed hard drive, a damaged SD card, or a non-responsive USB stick—Five Star Data Recovery is here to help'
})
const faqs = [
  { q: '2. Do you offer emergency data recovery services in Pasadena?', a: 'Yes! We offer both Expedited Service (during business hours) and Expedited Plus (24/7/365) for Pasadena clients. If you need your data recovered urgently, just give us a call and we’ll get your case prioritized immediately.' },
  { q: '3. How quickly can you recover data for Pasadena customers?', a: 'Most standard recoveries are completed within 1–3 business days , but we also offer same-day evaluations and rush service . Thanks to our free pickup option in Pasadena, we can begin recovery within hours of your call.' },
  { q: '4. What types of devices do you recover data from in Pasadena?', a: 'We recover data from external hard drives , MacBooks , PC laptops , RAID/NAS systems , USB drives , and SD cards — no matter the failure type or operating system. If you’re in Pasadena and not sure if your device qualifies, we offer free diagnostics.' },
  { q: '5. Is the pickup service really free for Pasadena clients?', a: 'Yes — 100% free. There’s no fee for pickup or evaluation . You only pay if you approve the recovery. We believe in fair, transparent service for all of Pasadena and surrounding areas.' }
]
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="Data Recovery Pasadena, CA"
      subtitle="Get Your Data Back In No Time."
      description="If you’ve experienced data loss—whether it’s from a crashed hard drive, a damaged SD card, or a non-responsive USB stick—Five Star Data Recovery is here to help. We offer professional, affordable, and fast data recovery services tailored to the needs of clients in Pasadena, CA. While we’re located i"
    >
      <template #badges>
        <div class="trust-badges">
          <span class="badge">✅ Free Evaluation</span>
          <span class="badge">✅ No Data, No Charge</span>
          <span class="badge">✅ Flat-Rate Pricing</span>
          <span class="badge">✅ 21,000+ Recoveries</span>
        </div>
      </template>
    </HeroSection>
    <StatsBar />

    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Trusted Data Recovery Services in Pasadena</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Crashed hard drives</li>
            <li>Clicking or non-spinning drives</li>
            <li>Failed SSDs and flash drives</li>
            <li>Water-damaged or dropped devices</li>
            <li>Deleted files and formatted media</li>
            <li>Damaged RAID arrays and servers</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Why Choose Us for Data Recovery in Pasadena?</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Free DiagnosticsNo-cost, no-obligation evaluation to assess your data recovery case.</li>
            <li>Fast Turnaround OptionsRush and Expedited services available for time-sensitive cases.Flat-rate pricing with no hidden fees</li>
            <li>Class 100 Clean RoomSafe environment for physically damaged drives and internal repairs.</li>
            <li>Component-Level RepairsWe specialize in board-level and firmware recovery others can’t handle.</li>
            <li>Flat Rate PricingTransparent pricing — no hidden fees or hourly charges.</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Recovery Process</h2>
        </div>
        <div class="section-body">
          <ol class="content-list">
            <li>Free EvaluationWe assess your device at no cost to determine the issue and recovery options.</li>
            <li>Cloning and AnalysisYour drive is cloned to avoid further damage, and our engineers analyze the copy.</li>
            <li>Data ExtractionWe extract recoverable data from the cloned image using advanced tools.</li>
            <li>VerificationRecovered files are reviewed and validated for completeness and integrity.</li>
            <li>DeliveryYour data is transferred to a new drive and returned securely.</li>
          </ol>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Devices We Recover Data From</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Hard Drives (HDDs)We recover data from failed internal and external hard drives due to mechanical or logical issues.SSDs and USB flash drives</li>
            <li>Solid State Drives (SSDs)We retrieve lost data from SSDs with firmware errors, bad blocks, or sudden failure.</li>
            <li>iPhones and Mobile DevicesWe perform component-level recovery from iPhones that won’t power on or are stuck in boot loops.</li>
            <li>RAID Arrays and NAS DevicesWe recover critical business and personal data from failed or degraded RAID/NAS systems.</li>
            <li>USB Flash DrivesWe handle broken or corrupted USB drives, including chip-off recovery when needed.</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What Clients Say</h2>
        </div>
        <div class="section-body">
          <p>I needed urgent help after my external hard drive suddenly stopped working. I called Five Star and was shocked at how fast they acted — they picked up my drive from my Pasadena office within an hour of creating the ticket. Two days later, I had all my data back. Truly professional and reliable.</p>
          <p>Even though their lab isn’t directly in Pasadena, it was only a 15-minute drive and well worth it. They recovered every single file from my failed MacBook, including irreplaceable family photos. The service was fast, friendly, and honest from start to finish.</p>
          <p>Five Star handled my NAS recovery like true pros. The diagnosis was free, pricing was transparent, and they even sent updates during the process. I was impressed with how knowledgeable the team was. I wouldn’t trust anyone else with my data again.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Get a Free Quote within Minutes!</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Quick and Secure Data Recovery</li>
            <li>Expert Engineers for All Devices</li>
            <li>No Data, No Fee Guarantee</li>
          </ul>
          <p>Data loss is stressful — but working with us doesn’t have to be. Watch how our team handles each recovery with care, professionalism, and precision. From diagnostics to delivery, we offer flat-rate pricing, honest communication, and proven results — all from our secure Glendale lab.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Get Started Today</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>

    <section class="faq-section section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Frequently Asked Questions</h2>
        </div>
        <div class="faq-list">
          <div v-for="(faq, i) in faqs" :key="i" class="faq-item" :class="{ open: openFaq === i }">
            <button class="faq-question" @click="toggleFaq(i)">
              <span>{{ faq.q }}</span>
              <span class="faq-icon">{{ openFaq === i ? '−' : '+' }}</span>
            </button>
            <div v-if="openFaq === i" class="faq-answer">{{ faq.a }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-band section-bg-2">
      <div class="container cta-band-inner">
        <div>
          <h2 class="cta-title">Need Help With Data Recovery Pasadena, CA?</h2>
          <p class="cta-sub">Free evaluation. No data, no charge. Contact us today.</p>
        </div>
        <div class="cta-actions">
          <a href="tel:8182728866" class="btn btn-gold">📞 818-272-8866</a>
          <NuxtLink to="/data-recovery/free-quote" class="btn btn-outline-sm">Get Free Quote</NuxtLink>
        </div>
      </div>
    </section>
    <FooterBar />
  </div>
</template>

<style scoped>
.trust-badges { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 8px; }
.badge { background: rgba(255,255,255,0.06); border: 1px solid var(--border); color: var(--white); padding: 7px 14px; border-radius: 20px; font-size: 13px; font-weight: 500; }
.section-pad { padding: 72px 0; }
.section-body p { font-size: 16px; color: var(--muted); line-height: 1.8; margin-bottom: 16px; max-width: 860px; }
.section-body strong { color: var(--white); font-weight: 600; }
.content-list { padding-left: 20px; margin: 12px 0 16px; }
.content-list li { font-size: 15px; color: var(--muted); line-height: 1.7; margin-bottom: 8px; }
.faq-list { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 8px; }
.faq-item { background: var(--card-bg); border: 1px solid var(--border); border-radius: 10px; overflow: hidden; }
.faq-item.open { border-color: var(--gold); }
.faq-question { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; background: none; border: none; color: var(--white); font-size: 16px; font-weight: 600; cursor: pointer; text-align: left; gap: 12px; font-family: var(--font-body); }
.faq-icon { color: var(--gold); font-size: 22px; font-weight: 400; flex-shrink: 0; }
.faq-answer { padding: 0 24px 20px; font-size: 15px; color: var(--muted); line-height: 1.7; }
.cta-band { background: linear-gradient(135deg, #0f1220, #13161F); border-top: 1px solid var(--border); padding: 56px 0; }
.cta-band-inner { display: flex; justify-content: space-between; align-items: center; gap: 32px; flex-wrap: wrap; }
.cta-title { font-family: var(--font-heading); font-size: 28px; font-weight: 900; color: var(--white); margin-bottom: 8px; }
.cta-sub { font-size: 16px; color: var(--muted); }
.cta-actions { display: flex; gap: 16px; flex-wrap: wrap; }
.btn-outline-sm { display: inline-block; padding: 14px 28px; border: 2px solid var(--gold); color: var(--gold); border-radius: 8px; font-weight: 700; font-size: 15px; text-decoration: none; }
.btn-outline-sm:hover { background: rgba(245,200,66,0.1); }
@media (max-width: 768px) { .cta-band-inner { flex-direction: column; } }
</style>
