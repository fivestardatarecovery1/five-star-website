<script setup lang="ts">
useSeoMeta({
  title: 'External Hard Drive Data Recovery Services — Five Star Data Recovery',
  description: 'No matter if your drive is USB 2.0, 3.0, USB-C, Thunderbolt, or network-attached, we can help recover your data. Our engineers handle everything from simple fil'
})
const faqs = [
  { q: '1. Will the recovered data be in the same structure as before?', a: 'Yes. Whenever possible, we recover your files in the same folder and directory structure they were originally stored in. This includes file names, folder organization, and hierarchy. However, in rare cases where the file system is heavily damaged, recovered data may be provided in raw format.' },
  { q: '2. What’s the most common reason an external drive fails?', a: 'The most common causes of external hard drive failure include physical damage (such as being dropped), file system corruption, bad sectors, electronic failure, or worn-out internal components. Improper ejection and power surges can also lead to drive failure.' },
  { q: '3. Can you recover data from an external hard drive that isn’t showing up?', a: 'Yes. If your external hard drive isn’t recognized by your computer, the issue could be logical, firmware-related, or hardware-based. We diagnose the exact cause and use specialized tools to recover the data safely.' },
  { q: '4. Do you work with all brands of external hard drives?', a: 'Absolutely. We recover data from all major brands, including Western Digital, Seagate, Toshiba, LaCie, G-Technology, and others. Whether it’s a portable USB drive or a larger desktop external drive, we can help.' },
  { q: '5. How long does external hard drive data recovery take?', a: 'Typical turnaround time for external hard drive recovery is 3–5 business days. For urgent cases, we offer Expedited and Expedited Plus services with faster, prioritized turnaround.' },
  { q: '6. Can you recover data from physically damaged external hard drives?', a: 'Yes. If your external hard drive has suffered physical damage—such as from a drop, liquid exposure, or electrical failure—we use cleanroom technology and donor parts (if needed) to recover the data safely.' },
  { q: '7. Is there a No Data, No Charge policy for external hard drive recovery?', a: 'Yes. For most standard cases, you only pay if we successfully recover your data. Exceptions may apply for deleted file recovery or drives that were previously opened or tampered with.' },
  { q: '8. What if my external hard drive makes clicking or beeping sounds?', a: 'Clicking or beeping noises often indicate mechanical failure inside the drive. Stop powering it on and contact a professional data recovery service immediately to avoid further damage. These cases usually require cleanroom recovery.' },
  { q: '9. Can you recover files from an accidentally formatted external hard drive?', a: 'Yes. If your external drive was accidentally formatted and new data hasn’t heavily overwritten it, we can perform a deep scan to recover your deleted files and folders. Important: If your external drive is a Western Digital, SanDisk, or G-Drive, please power it down immediately after deletion or formatting. These brands use complex firmware structures, and continued use can cause translator issues that make deleted file recovery much more difficult, or in some cases, impossible.' },
  { q: '10. Can I ship my external hard drive to you for recovery?', a: 'Absolutely. We offer free, nationwide round-trip shipping for external hard drive data recovery. Simply fill out our Mail-In Recovery Form, and we’ll provide a prepaid shipping label for your convenience.' },
  { q: '11. How much does External Hard Drive Recovery Cost?', a: 'At Five Star Data Recovery, we offer transparent flat-rate pricing with no hidden fees. Costs are based on the drive’s capacity, brand, and the level of damage: Drive Type & Condition Flat Rate Price* External Hard Drives up to 2TB (Logical Issues – excluding WD, SanDisk, G-Drive) $300 External Hard Drives up to 6TB (Logical Issues – excluding WD, SanDisk, G-Drive) $500 Western Digital, SanDisk, G-Drive External Hard Drives & Drives up to 12TB $600 Drives Requiring Mechanical / Clean Room Recovery (e.g., clicking, beeping, head failure) $950 *All prices are per drive, include parts and labor, and fall under our No Data, No Charge policy. If your recovery is urgent, we also offer: Expedited Service: $200/drive (during business hours) Expedited Plus: $500/drive (24/7 priority) Visit our full Data Recovery Pricing page for more details and examples.' },
  { q: '12. Why is Western Digital, SanDisk, and G-Drive external hard drive recovery more expensive?', a: 'Western Digital, SanDisk, and G-Technology (G-Drive) external hard drives often use proprietary encryption, embedded USB-to-SATA bridges, or self-encrypting controller boards that complicate the recovery process. In many cases, these drives require advanced techniques such as: Bypassing encrypted USB bridges Custom firmware manipulation Donor board matching with ROM transfer Decryption of WD Self-Encrypting Drives (SEDs) These brands are engineered in ways that make standard recovery methods ineffective, even when the internal hard drive itself is healthy. That added complexity results in longer recovery times, more specialized equipment, and greater risk, which is why they fall under a higher flat-rate tier.' }
]
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="External Hard Drive Data Recovery Services"
      subtitle=""
      description="No matter if your drive is USB 2.0, 3.0, USB-C, Thunderbolt, or network-attached, we can help recover your data. Our engineers handle everything from simple file system corruption to complex mechanical failures requiring clean room work. We understand that every case is unique, and we'll provide you"
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

    <!-- Types of Drives We Recover -->
    <section class="issues-section section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What Types of Drives Do We Recover?</h2>
        </div>
        <div class="issues-layout">
          <div class="issues-intro">
            <p>No matter if your drive is USB 2.0, 3.0, USB-C, Thunderbolt, or network-attached, we can help recover your data. Our engineers handle everything from simple file system corruption to complex mechanical failures requiring clean room work. We understand that every case is unique, and we'll provide you with a clear explanation of the issue before proceeding.</p>
          </div>
          <ul class="issues-list">
            <li>Seagate Backup Plus / Expansion</li>
            <li>Western Digital My Passport / Elements</li>
            <li>LaCie Rugged / d2 Professional</li>
            <li>Toshiba Canvio</li>
            <li>Samsung Portable SSDs</li>
            <li>G-Technology G-Drive</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- What Types of Files -->
    <section class="issues-section section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What Types of Files Can Be Recovered?</h2>
        </div>
        <div class="issues-layout">
          <div class="issues-intro">
            <p>We recover virtually every common file type stored on external hard drives. If it was on the drive before the failure, we work to get it back.</p>
          </div>
          <ul class="issues-list">
            <li>Photos: .jpg, .png, .cr2, .nef, .psd, and more</li>
            <li>Documents: .docx, .xlsx, .pptx, .pdf, .txt</li>
            <li>Videos: .mp4, .mov, .avi, .mkv</li>
            <li>Audio: .mp3, .wav, .aiff, .flac</li>
            <li>Project files: CAD, Adobe, Final Cut, DaVinci Resolve</li>
            <li>Archives: .zip, .rar, .tar</li>
            <li>Databases: .sql, .db, .mdb, QuickBooks</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Understanding Failure Symptoms -->
    <section class="issues-section section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Understanding Drive Failure Symptoms</h2>
        </div>
        <div class="issues-layout">
          <div class="issues-intro">
            <p>Every symptom tells us something different about the nature of the failure. Recognizing the issue early helps us maximize your recovery success.</p>
          </div>
          <ul class="issues-list">
            <li>Clicking Noises: Usually means the read/write heads are failing or have crashed</li>
            <li>Beeping or Whining: Could indicate spindle motor failure or stuck platters (often from drops)</li>
            <li>Drive Detected but Not Accessible: Often corrupted partition tables or failing firmware</li>
            <li>External Hard Drive Does Not Show Up: USB port issues, faulty cables, or damaged firmware</li>
            <li>No Power: May be a bad USB bridge board, shorted PCB, or internal electronic failure</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="reviews-section section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Testimonials from Satisfied Clients</h2>
        </div>
        <div class="reviews-grid">
          <div class="review-card" v-for="r in reviews" :key="r.name">
            <div class="review-stars">★★★★★</div>
            <p class="review-text">"{{ r.text }}"</p>
            <div class="review-author">{{ r.name }} — {{ r.location }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- How We Keep Data Secure -->
    <section class="content-section section-bg-1 section-pad">
      <div class="container content-narrow">
        <h2 class="content-title">How We Keep Your Data Secure and Confidential</h2>
        <ul class="secure-list">
          <li>Non-disclosure agreements available upon request</li>
          <li>Data stored on encrypted internal servers</li>
          <li>Recovered files deleted after 7 days (unless otherwise arranged)</li>
          <li>Full internal access control in our lab</li>
        </ul>
      </div>
    </section>

    <!-- Ready to Recover -->
    <section class="cta-band">
      <div class="container cta-band-inner">
        <div>
          <h2 class="cta-title">Ready to Recover Your Data?</h2>
          <p class="cta-sub">Experiencing data loss on your external hard drive? Don't panic—help is just a click away. Whether it's important work files, family photos, or school projects, we understand how valuable your data is.</p>
          <ul class="cta-list">
            <li>Fill out the quick form on this page to get started</li>
            <li>Mail your drive to us free from anywhere in the U.S.</li>
            <li>Call now for a free evaluation and quote</li>
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
          <h2 class="cta-title">Need Help With External Hard Drive Data Recovery Services?</h2>
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
.reviews-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-top: 40px; }
.review-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 28px; }
.review-stars { color: #C9A84C; font-size: 1.1rem; margin-bottom: 12px; }
.review-text { font-size: 0.95rem; color: rgba(255,255,255,0.75); line-height: 1.7; margin-bottom: 16px; font-style: italic; }
.review-author { font-size: 0.875rem; font-weight: 700; color: #C9A84C; }
.issues-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; margin-top: 32px; align-items: start; }
.issues-intro p { font-size: 1rem; color: rgba(255,255,255,0.75); line-height: 1.8; margin-bottom: 12px; }
.issues-list { list-style: none; padding: 0; margin: 0; }
.issues-list li { padding: 10px 0 10px 28px; position: relative; font-size: 0.95rem; color: rgba(255,255,255,0.75); border-bottom: 1px solid rgba(255,255,255,0.06); }
.issues-list li::before { content: '✓'; position: absolute; left: 0; color: #C9A84C; font-weight: 700; }
.content-narrow { max-width: 860px; margin: 0 auto; }
.content-title { font-size: 1.75rem; font-weight: 800; color: #fff; margin-bottom: 24px; }
.content-narrow p { font-size: 1rem; color: rgba(255,255,255,0.75); line-height: 1.8; margin-bottom: 18px; }
.secure-list { list-style: none; padding: 0; margin: 0; }
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

/* Process cards */
.process-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px; margin-top: 40px; }
.process-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 28px 24px; }
.process-num { font-size: 2.5rem; font-weight: 900; color: #C9A84C; line-height: 1; margin-bottom: 12px; }
.process-title { font-size: 1rem; font-weight: 700; color: #fff; margin-bottom: 10px; }
.process-desc { font-size: 0.9rem; color: rgba(255,255,255,0.6); line-height: 1.6; }
/* Feature cards */
.grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; margin-top: 40px; }
.feature-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 28px 24px; }
.feature-icon { font-size: 1.5rem; color: #C9A84C; margin-bottom: 12px; }
.feature-title { font-size: 1rem; font-weight: 700; color: #fff; margin-bottom: 8px; }
.feature-desc { font-size: 0.9rem; color: rgba(255,255,255,0.6); line-height: 1.6; }

</style>
