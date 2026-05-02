<script setup lang="ts">
useSeoMeta({
  title: 'Data Recovery Hollywood, CA — Five Star Data Recovery',
  description: 'If you’ve lost data from a hard drive, flash drive, memory card, or RAID system—Five Star Data Recovery is here to help. We provide expert-level service to clie'
})
const faqs = [
  { q: '1. Do you offer same-day pickup in Hollywood?', a: 'Yes! We provide free same-day pickup in Hollywood for customers who can’t visit our Glendale lab. Just give us a call and we’ll schedule a pickup right away.' },
  { q: '2. What types of storage devices can you recover data from?', a: 'We recover data from hard drives, SSDs, USB flash drives, SD cards, RAID systems, MacBooks, iPhones, Samsung Phones, external drives , and more. If it stores data, there’s a good chance we can recover it.' },
  { q: '3. If I schedule same day pickup from Hollywood, how do I get my recovered data back?', a: 'Once your data recovery is complete, you have two convenient options: you can pick up your recovered data from our Glendale office, or we can ship it back to you at no additional cost. Just let us know which option works best for you.' },
  { q: '4. How long does the data recovery process take?', a: 'Standard recoveries take about 3–5 business days, but we also offer Expedited and Expedited Plus services for urgent cases. These services prioritize your recovery based on the level of urgency.' },
  { q: '5. Do you work on drives that have been dropped or physically damaged?', a: 'Absolutely. We specialize in physical data recovery, including dropped drives, water-damaged devices, and drives with internal mechanical failure. All work is done in a certified clean room environment.' }
]
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="Data Recovery Hollywood, CA"
      subtitle="Get Your Data Back In No Time."
      description="If you’ve lost data from a hard drive, flash drive, memory card, or RAID system—Five Star Data Recovery is here to help. We provide expert-level service to clients in Hollywood, CA with fast turnaround and fair pricing. Although our lab is based in Glendale, CA, we offer free same-day pickup for cus"
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
          <h2 class="section-title">Trusted Data Recovery Services in Hollywood</h2>
        </div>
        <div class="section-body">
          <p>We’ve helped thousands of customers recover lost data from:</p>
          <ul class="content-list">
            <li>Mac Data Recovery – Specializing in component-level recovery for no-power MacBooks, including M1 and M2 models.</li>
            <li>Hard Drive Data Recovery – Expert recovery from drives with mechanical failure or logical corruption.</li>
            <li>RAID Data Recovery – Safe and precise recovery from RAID 0, 1, 5, 10, and custom RAID configurations.</li>
            <li>SSD Data Recovery – Advanced tools to recover data from physically or electronically failed SSDs.</li>
            <li>External Hard Drive Data Recovery – Recovering data from non-detected, clicking, or accidentally dropped external drives.</li>
          </ul>
          <p>Every recovery is handled by experienced engineers using safe and proven methods.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Why Choose Us for Data Recovery in Hollywood?</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Over a Decade of Experience - Trusted by thousands, we’ve been recovering data for over 10 years with industry-leading expertise.</li>
            <li>Hundreds of 5-Star ReviewsOur reputation speaks for itself — hundreds of satisfied customers have left glowing reviews online.</li>
            <li>Free Evaluation &amp; No Data, No ChargeYou only pay if we recover your data; we offer free diagnostics and transparent, flat-rate pricing.</li>
            <li>Same-Day Pickup in PasadenaLocated minutes from Pasadena, we offer fast, free same-day pickup to get your recovery started immediately.</li>
            <li>Expedited and 24/7 Services AvailableFor urgent cases, we offer rush recovery options — including after-hours and weekend availability.</li>
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
          <p>1. Free EvaluationWe begin by diagnosing your device to identify the problem and determine the best recovery strategy—completely free of charge.</p>
          <p>2. Secure ImagingA sector-by-sector clone of your storage device is created to protect the original data from further damage during the recovery process.</p>
          <p>3. Advanced ScanningOur engineers scan the cloned image using professional tools to locate lost files, partitions, and file structures.</p>
          <p>4. Data Extraction &amp; RepairWe extract all recoverable data and, if needed, repair damaged files to ensure they’re usable and complete.</p>
          <p>5. File Review &amp; DeliveryYou preview the recovered files, and once approved, we deliver your data on a new drive or via a secure transfer method.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">⭐ Client Success Story – Hollywood Film Editor Recovers 2TB of Critical Project Files</h2>
        </div>
        <div class="section-body">
          <p>A Hollywood film editor reached out after their external hard drive stopped showing up. It contained over 2TB of raw footage, edited timelines, and sound libraries for an indie film nearing its premiere. Our diagnostics revealed a mechanical failure caused by a drop, and our engineers performed a clean room head swap followed by a full clone of the drive.</p>
          <p>Using deep scan tools, we successfully recovered all critical files in their original structure. The client received their data just in time to meet their deadline — and later thanked us during their post-screening Q&amp;A. They admitted they had lost all hope before finding our lab. Now, we’re the first call they make for any data-related emergency on set. The successful recovery saved not only the project, but also the client’s reputation with investors and the production team.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Testimonials from Satisfied Clients</h2>
        </div>
        <div class="section-body">
          <p>“My hard drive failed right before a big deadline, and I was in full panic mode. I called Five Star Data Recovery, and to my surprise, they offered same-day pickup from my apartment in Hollywood. Within days, I had all my files back — including my client’s entire photo shoot. Incredible service from start to finish.”</p>
          <p>“As a music producer, losing sessions is my worst nightmare. My RAID failed without warning, and I had no backup. The team at Five Star diagnosed it quickly and explained everything clearly. They got 100% of my files back, and the turnaround was quicker than expected. Highly recommend them!”</p>
          <p>“I was skeptical at first, but after reading reviews, I gave them a shot. My external SSD stopped working after a drop, and no software could read it. These guys recovered every single file — including my tax documents, family videos, and work archives. Their service was worth every penny.”</p>
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
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Let’s Get Your Files Back</h2>
        </div>
        <div class="section-body">
          <p>Data loss is stressful — but working with us doesn’t have to be. Watch how our team handles each recovery with care, professionalism, and precision. From diagnostics to delivery, we offer flat-rate pricing, honest communication, and proven results — all from our secure Glendale lab.</p>
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
          <h2 class="cta-title">Need Help With Data Recovery Hollywood, CA?</h2>
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
