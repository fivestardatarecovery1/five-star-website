<script setup lang="ts">
useSeoMeta({
  title: 'Laptop Data Recovery Services — Five Star Data Recovery',
  description: 'Losing files on your laptop can happen without warning. Whether it’s an accidental deletion, system crash, or physical damage, the results can be stressful. At '
})
const faqs = [
  { q: '1. Can you recover data from a laptop that won’t turn on?', a: 'Yes, we can recover data even if your laptop doesn’t power on at all. In most cases, we remove the internal hard drive or SSD and perform recovery directly from that storage device using specialized imaging equipment. However, some modern laptops—especially ultra-thin models or MacBooks with soldered storage—do not have removable drives. In these cases, we perform component-level recovery, which involves working directly on the laptop’s logic board or storage chips using advanced tools. Our team is fully equipped to handle both standard and complex laptop recovery scenarios.' },
  { q: '2. What types of laptop issues can you recover data from?', a: 'We recover data from laptops affected by a wide range of issues, including accidental deletion, liquid damage, mechanical hard drive failure, bad sectors, operating system crashes, and more. Our team has experience with Windows, Mac, and other systems.' },
  { q: '3. Do you recover data from all laptop brands?', a: 'Yes. We offer laptop data recovery services for all major brands, including HP, Dell, Lenovo, Apple (MacBook), Asus, Acer, and others. No matter the brand or model, our process is tailored to retrieve your lost data safely and efficiently.' },
  { q: '4. What if my laptop hard drive is physically damaged?', a: 'If your laptop’s hard drive has physical damage (like clicking, grinding, or not spinning up), we use cleanroom technology and specialized tools to safely extract data. Our engineers are trained in component-level repairs and sector-by-sector imaging for complex cases.' },
  { q: '5. How long does laptop data recovery take?', a: 'Standard laptop recovery takes about 3–5 business days, depending on the issue. For urgent cases, we offer Expedited and Expedited Plus services that prioritize your case 24/7 until completion.' },
  { q: '6. Can you recover files from a formatted or deleted laptop drive?', a: 'Yes, in many cases. If the data has not been overwritten, we can often recover files from a formatted laptop drive or restore accidentally deleted files using advanced forensic techniques. Call us for a free consultation to evaluate your specific case.' },
  { q: '7. Is your laptop data recovery service flat-rate?', a: 'Yes. We offer flat-rate laptop data recovery pricing based on the type of failure. There are no hidden fees, and diagnostics are always free. You only pay if you approve the quote and we successfully recover your data.' },
  { q: '8. Can I mail in my laptop for recovery?', a: 'Absolutely. We provide free nationwide shipping for customers across the U.S. We also accept drop-offs at our Glendale, CA lab and offer local pickup for nearby cities.' },
  { q: '9. Will you work directly on my laptop to recover the data?', a: 'No. To protect your data, we always remove the drive and create a full clone before performing recovery. This ensures that your original laptop drive remains untouched and safe throughout the entire recovery process.' },
  { q: '10. What kind of data can you recover from a laptop?', a: 'We recover a wide range of file types including documents, photos, videos, emails, databases, and application files. Whether it’s personal files or business-critical data, we aim to recover everything that matters to you.' }
]
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="Laptop Data Recovery Services"
      subtitle="Get Your Data Back In No Time."
      description="Losing files on your laptop can happen without warning. Whether it's an accidental deletion, system crash, or physical damage, the results can be stressful. At Five Star Data Recovery, we specialize in fast, secure, and professional laptop data recovery. If you have a broken drive or a software erro"
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

    <!-- Process Steps -->
    <section class="process-section section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Data Recovery Process</h2>
          <p class="section-subtitle">Our data recovery process is built around security, transparency, and peace of mind. From start to finish, we keep you informed with clear updates at every stage.</p>
        </div>
        <div class="process-grid">
          <div class="process-card">
            <div class="process-num">01</div>
            <h3 class="process-title">Drop off or Mail in Your Drive</h3>
            <p class="process-desc">Bring your laptop or drive to our Glendale lab or ship it to us free from anywhere in the U.S.</p>
          </div>
          <div class="process-card">
            <div class="process-num">02</div>
            <h3 class="process-title">Receive a Free Diagnosis</h3>
            <p class="process-desc">We evaluate your device and provide a detailed diagnosis and quote — completely free, no obligation to proceed.</p>
          </div>
          <div class="process-card">
            <div class="process-num">03</div>
            <h3 class="process-title">Our Engineers Recover Your Data</h3>
            <p class="process-desc">We carefully begin the recovery process using advanced tools and cleanroom procedures for your laptop.</p>
          </div>
          <div class="process-card">
            <div class="process-num">04</div>
            <h3 class="process-title">Review &amp; Approve the Recovered</h3>
            <p class="process-desc">After recovery is complete, you'll receive a detailed file list to review before approving and paying.</p>
          </div>
          <div class="process-card">
            <div class="process-num">05</div>
            <h3 class="process-title">Receive Your Recovered Data</h3>
            <p class="process-desc">Once approved, we'll securely transfer your data to a new drive and return it via pickup or insured shipping.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="why-section section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Why Choose Our Data Recovery Service</h2>
        </div>
        <div class="grid-3">
          <div class="feature-card" v-for="f in whyUs" :key="f.title">
            <div class="feature-icon">✓</div>
            <h3 class="feature-title">{{ f.title }}</h3>
            <p class="feature-desc">{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Band -->
    <section class="cta-band">
      <div class="container cta-band-inner">
        <div>
          <h2 class="cta-title">Start Your Laptop Computer Recovery Today</h2>
          <p class="cta-sub">Don't wait — every power cycle on a failing drive risks more data loss. Let our professionals handle the recovery process the right way.</p>
          <ul class="cta-list">
            <li>Call us for a diagnostic</li>
            <li>You can also send your laptop from anywhere in the U.S.</li>
            <li>We will take care of your data like it is our own</li>
          </ul>
        </div>
        <div class="cta-actions">
          <a href="tel:8182728866" class="btn btn-gold">📞 818-272-8866</a>
          <NuxtLink to="/data-recovery/free-quote" class="btn btn-outline">Get Free Quote</NuxtLink>
        </div>
      </div>
    </section>

    <!-- FAQ -->
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
          <h2 class="cta-title">Need Help With Laptop Data Recovery Services?</h2>
          <p class="cta-sub">Free evaluation. No data, no charge. Contact us today.</p>
        </div>
        <div class="cta-actions">
          <a href="tel:8182728866" class="btn btn-gold">📞 818-272-8866</a>
          <NuxtLink to="/data-recovery/free-quote" class="btn btn-outline">Get Free Quote</NuxtLink>
        </div>
      </div>
    </section>
    <FooterBar />
  </div>
</template>

<style scoped>
.trust-badges { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 8px; }
.badge { background: rgba(255,255,255,0.06); border: 1px solid var(--border); color: var(--white); padding: 7px 14px; border-radius: 20px; font-size: 13px; font-weight: 500; }
.section-pad { padding: 80px 0; }
.process-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px; margin-top: 40px; }
.process-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 28px 24px; }
.process-num { font-size: 2.5rem; font-weight: 900; color: #C9A84C; line-height: 1; margin-bottom: 12px; }
.process-title { font-size: 1rem; font-weight: 700; color: #fff; margin-bottom: 10px; }
.process-desc { font-size: 0.9rem; color: rgba(255,255,255,0.6); line-height: 1.6; }
.grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; margin-top: 40px; }
.feature-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 28px 24px; }
.feature-icon { font-size: 1.5rem; color: #C9A84C; margin-bottom: 12px; }
.feature-title { font-size: 1rem; font-weight: 700; color: #fff; margin-bottom: 8px; }
.feature-desc { font-size: 0.9rem; color: rgba(255,255,255,0.6); line-height: 1.6; }
.cta-band { background: linear-gradient(135deg, #0f1220, #13161F); border-top: 1px solid rgba(255,255,255,0.08); padding: 72px 0; }
.cta-band-inner { display: flex; justify-content: space-between; align-items: flex-start; gap: 48px; flex-wrap: wrap; }
.cta-title { font-size: 2rem; font-weight: 900; color: #fff; margin-bottom: 12px; }
.cta-sub { font-size: 1rem; color: rgba(255,255,255,0.65); line-height: 1.7; margin-bottom: 16px; max-width: 540px; }
.cta-list { list-style: none; padding: 0; margin: 0 0 24px; }
.cta-list li { padding: 6px 0 6px 24px; position: relative; font-size: 0.95rem; color: rgba(255,255,255,0.75); }
.cta-list li::before { content: '→'; position: absolute; left: 0; color: #C9A84C; }
.cta-actions { display: flex; gap: 16px; flex-wrap: wrap; align-items: center; }
.btn-outline { display: inline-block; padding: 14px 28px; border: 2px solid #C9A84C; color: #C9A84C; border-radius: 8px; font-weight: 700; font-size: 0.95rem; text-decoration: none; }
.btn-outline:hover { background: rgba(201,168,76,0.1); }
.faq-list { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 8px; }
.faq-item { background: var(--card-bg); border: 1px solid var(--border); border-radius: 10px; overflow: hidden; }
.faq-item.open { border-color: var(--gold); }
.faq-question { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; background: none; border: none; color: var(--white); font-size: 16px; font-weight: 600; cursor: pointer; text-align: left; gap: 12px; font-family: var(--font-body); }
.faq-icon { color: var(--gold); font-size: 22px; font-weight: 400; flex-shrink: 0; }
.faq-answer { padding: 0 24px 20px; font-size: 15px; color: var(--muted); line-height: 1.7; }
@media (max-width: 768px) { .cta-band-inner { flex-direction: column; } }
</style>
