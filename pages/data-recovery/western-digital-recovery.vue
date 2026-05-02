<script setup lang="ts">
useSeoMeta({
  title: 'Western Digital Data Recovery Services — Five Star Data Recovery',
  description: 'Are you experiencing issues with your Western Digital (WD) hard drive? If you have a blinking light, a drive that won\'t mount, or files you can\'t access, our ex'
})
const faqs = [
  { q: '1. What types of Western Digital drives do you recover data from?', a: 'We recover data from all Western Digital devices , including WD My Passport , WD Elements , WD My Book , WD Blue , WD Black , WD Red , and enterprise-level WD drives. Whether it’s an internal drive or WD external hard drive , we have the tools and expertise to recover your data.' },
  { q: '2. My WD external hard drive is not showing up — can you recover the data?', a: 'Yes. If your WD external hard drive is not showing up, it could be due to physical damage, logical errors, file system corruption, or PCB failure. We specialize in identifying the root cause and performing safe and effective WD data recovery to retrieve your files.' },
  { q: '3. Can you recover data from a Western Digital drive with a clicking or buzzing noise?', a: 'Absolutely. A clicking WD hard drive often indicates internal mechanical failure, such as a damaged read/write head or spindle issue. These cases require cleanroom recovery and advanced tools — all of which we offer in-house at our recovery lab.' },
  { q: '4. How long does Western Digital data recovery take?', a: 'Standard WD data recovery services are typically completed within 3–5 business days. If you’re in a rush, we also offer Expedited and Expedited Plus options for faster turnaround. Initial diagnostics are always completed same day, by midnight.' },
  { q: '5. Do you offer a No Data, No Charge policy for WD data recovery?', a: 'Yes. Most Western Digital recovery cases qualify for our No Data, No Charge guarantee. If we’re unable to recover your files, you pay nothing. Exceptions may apply in special cases like deleted file recovery or devices with prior tampering.' },
  { q: '6. I dropped my WD My Passport — can you still recover the data?', a: 'Yes. Dropped drives often suffer from physical damage , such as damaged heads or platter alignment issues. Our team can safely perform recovery using drive-specific tools and firmware repair procedures to extract your files.' },
  { q: '7. Is my data secure during the WD recovery process?', a: 'Absolutely. Your data is treated with strict confidentiality. We never share or access your files beyond what’s required to complete recovery. Once recovery is done, your files are returned to you on a secure drive.' },
  { q: '8. What will the recovered data be returned on?', a: 'We typically transfer your recovered files to a brand new external drive you provide. If you prefer to purchase a transfer drive from us, please let us know at the time of checking in your case.' },
  { q: '9. How much does Western Digital data recovery cost?', a: 'At Five Star Data Recovery, Western Digital data recovery is offered at flat-rate pricing based on the drive type and storage capacity: $300.00 – For standard Western Digital SATA drives (laptop or desktop models) under 2TB. These are the most straightforward cases and typically involve logical issues or minor read problems. $500.00 – For WD SATA drives larger than 2TB, where the higher capacity requires longer imaging time and additional resources. $600.00 – For Western Digital external hard drives with USB 3.0 connectors. These drives are more complex to work with because they do not have a standard SATA connection and are often SED-locked, requiring specialized tools and techniques to access the data. $800.00 – For ultra high-capacity Western Digital drives (over 12TB). These cases require significantly more time and storage resources due to their size and complexity. We provide a free evaluation before starting, and there are no hidden fees. You’ll only be charged if the data is successfully recovered — we follow a strict no data, no charge policy. To see a full breakdown of recovery options, visit our data recovery cost page.' },
  { q: '10. Can I drop off or mail in my WD drive?', a: 'Yes! You can visit us in person at our Glendale, CA office, or start a case remotely using our Mail-In Recovery Form . We provide free shipping both ways for mail-in clients across the U.S.' }
]
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="Western Digital Data Recovery Services"
      subtitle="Get Your Data Back In No Time."
      description="Are you experiencing issues with your Western Digital (WD) hard drive? If you have a blinking light, a drive that won't mount, or files you can't access, our expert team can help. We offer professional Western Digital Data Recovery services to safely get your data back. If your files are valuable, d"
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

    <!-- Common Issues -->
    <section class="issues-section section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Common WD Hard Drive Issues</h2>
        </div>
        <div class="issues-layout">
          <div class="issues-intro">
            <p>Western Digital drives are reliable, but they're not immune to failure. Whether it's a blinking light, a drive that won't mount, or files you can't access, our team is equipped to help. Common WD issues include:</p>
          </div>
          <ul class="issues-list">
            <li>WD Hard Drive Not Showing Up on your computer</li>
            <li>WD External Hard Drive showing errors or requesting format</li>
            <li>Clicking or Beeping Sounds indicating mechanical failure</li>
            <li>Physical damage from accidental drops or impact</li>
            <li>Power surges damaging internal components or the PCB</li>
            <li>Corrupted firmware or partition tables</li>
            <li>Exposure to heat or water</li>
            <li>Bad sectors developing over time because of wear and tear</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Process Steps -->
    <section class="process-section section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">How Our WD Data Recovery Process Works</h2>
        </div>
        <div class="process-grid">
          <div class="process-card">
            <div class="process-num">01</div>
            <h3 class="process-title">Free Diagnostic</h3>
            <p class="process-desc">We evaluate your WD drive to identify the root cause — logical, physical, or firmware-related — at no charge.</p>
          </div>
          <div class="process-card">
            <div class="process-num">02</div>
            <h3 class="process-title">Cleanroom Imaging</h3>
            <p class="process-desc">We create a full sector-by-sector image of your WD drive in our certified cleanroom to protect your original data.</p>
          </div>
          <div class="process-card">
            <div class="process-num">03</div>
            <h3 class="process-title">File Extraction</h3>
            <p class="process-desc">Using specialized tools, we extract your files from the cloned image — even from encrypted or damaged WD drives.</p>
          </div>
          <div class="process-card">
            <div class="process-num">04</div>
            <h3 class="process-title">File Verification &amp; Delivery</h3>
            <p class="process-desc">No Data, No Charge Guarantee – If we can't recover your data, you owe nothing. Recovered files returned on a new drive.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Types of WD Drives -->
    <section class="issues-section section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Types of WD Drives We Recover</h2>
        </div>
        <div class="issues-layout">
          <div class="issues-intro">
            <p>We recover data from all Western Digital models, including internal SATA drives, external USB drives, and high-capacity enterprise units. Every WD drive type is supported.</p>
          </div>
          <ul class="issues-list">
            <li>WD My Passport (Ultra, for Mac, SSD)</li>
            <li>WD Elements Portable and Desktop</li>
            <li>WD Black, Blue, and Green Series</li>
            <li>WD My Book and My Cloud</li>
            <li>WD Easystore Drives</li>
            <li>Internal SATA, PATA, and IDE models</li>
            <li>External and encrypted drives</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Troubleshooting Tips -->
    <section class="content-section section-bg-3 section-pad">
      <div class="container content-narrow">
        <h2 class="content-title">Troubleshooting Tips for WD External Drives</h2>
        <p>Before bringing your drive in, there are a few safe steps you can try. These won't risk your data and may save you a trip:</p>
        <ul class="secure-list">
          <li>Try using a different USB cable or USB port</li>
          <li>Plug the WD External Hard Drive directly into the motherboard port, not a hub</li>
          <li>Open Disk Management in Windows to check if the drive is visible but unallocated</li>
          <li>Use Device Manager to check for driver issues</li>
          <li>Plug the drive to your computer on a different system, if available</li>
        </ul>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="why-section section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Why Choose Five Star for Western Digital Data Recovery?</h2>
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
          <h2 class="cta-title">Contact Us for Western Digital Data Recovery</h2>
          <p class="cta-sub">Data loss is stressful — but working with us doesn't have to be. From diagnostics to delivery, we offer flat-rate pricing, honest communication, and proven results — all from our secure Glendale lab.</p>
          <ul class="cta-list">
            <li>Visit our lab in Glendale, CA</li>
            <li>Mail your drive to us from anywhere in the U.S.</li>
            <li>Call us today for a free evaluation</li>
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
          <h2 class="cta-title">Need Help With Western Digital Data Recovery Services?</h2>
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
.process-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 24px; margin-top: 40px; }
.process-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 28px 24px; }
.process-num { font-size: 2.5rem; font-weight: 900; color: #C9A84C; line-height: 1; margin-bottom: 12px; }
.process-title { font-size: 1rem; font-weight: 700; color: #fff; margin-bottom: 10px; }
.process-desc { font-size: 0.9rem; color: rgba(255,255,255,0.6); line-height: 1.6; }
.reviews-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-top: 40px; }
.review-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 28px; }
.review-stars { color: #C9A84C; font-size: 1.1rem; margin-bottom: 12px; }
.review-text { font-size: 0.95rem; color: rgba(255,255,255,0.75); line-height: 1.7; margin-bottom: 16px; font-style: italic; }
.review-author { font-size: 0.875rem; font-weight: 700; color: #C9A84C; }
.grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; margin-top: 40px; }
.feature-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 28px 24px; }
.feature-icon { font-size: 1.5rem; color: #C9A84C; margin-bottom: 12px; }
.feature-title { font-size: 1rem; font-weight: 700; color: #fff; margin-bottom: 8px; }
.feature-desc { font-size: 0.9rem; color: rgba(255,255,255,0.6); line-height: 1.6; }
.issues-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; margin-top: 32px; align-items: start; }
.issues-intro p { font-size: 1rem; color: rgba(255,255,255,0.75); line-height: 1.8; }
.issues-list { list-style: none; padding: 0; margin: 0; }
.issues-list li { padding: 10px 0 10px 28px; position: relative; font-size: 0.95rem; color: rgba(255,255,255,0.75); border-bottom: 1px solid rgba(255,255,255,0.06); }
.issues-list li::before { content: '✓'; position: absolute; left: 0; color: #C9A84C; font-weight: 700; }
.content-narrow { max-width: 860px; margin: 0 auto; }
.content-title { font-size: 1.75rem; font-weight: 800; color: #fff; margin-bottom: 24px; }
.content-narrow p { font-size: 1rem; color: rgba(255,255,255,0.75); line-height: 1.8; margin-bottom: 18px; }
.secure-list { list-style: none; padding: 0; margin: 16px 0 0; }
.secure-list li { padding: 8px 0 8px 24px; position: relative; font-size: 0.95rem; color: rgba(255,255,255,0.75); }
.secure-list li::before { content: '→'; position: absolute; left: 0; color: #C9A84C; }
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
@media (max-width: 768px) { .issues-layout { grid-template-columns: 1fr; } .cta-band-inner { flex-direction: column; } }
</style>
