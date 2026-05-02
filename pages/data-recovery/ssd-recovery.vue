<script setup lang="ts">
useSeoMeta({
  title: 'Solid State Drive Recovery — Five Star Data Recovery',
  description: 'Data loss is stressful — but working with us doesn’t have to be. Watch how our team handles each recovery with care, professionalism, and precision. From diagno'
})
const faqs = [
  { q: '2. What are common signs of SSD failure?', a: 'Common signs include the drive not being recognized by your computer, sudden loss of files, very slow read/write speeds, or the drive appearing with 0GB capacity. In some cases, the SSD may not power on at all.' },
  { q: '3. Can you recover data from an SSD that shows 0GB capacity or incorrect drive size?', a: 'Yes, we specialize in SSD data recovery , including cases where the drive reports a 0GB capacity or an incorrect size. This issue is often caused by firmware corruption, controller failure, or internal chip damage. Our engineers use advanced tools to access the NAND memory chips directly or repair the SSD’s firmware, allowing us to rebuild the file structure and recover your data. If you notice this issue, it’s important to stop using the SSD immediately to avoid further complications. Contact us for a free consultation to evaluate your specific case.' },
  { q: '4. What brands of SSDs do you recover data from?', a: 'We recover data from all major SSD brands, including Samsung (EVO, PRO, QVO, and NVMe models), SanDisk, Crucial, Western Digital (WD), Kingston, Seagate, Intel, ADATA, SK Hynix, Toshiba, Corsair, PNY, and Transcend. Whether you’re using a SATA SSD, an NVMe M.2 drive, or an older-generation solid-state drive, our engineers are fully equipped to handle both logical failures (like file system corruption or accidental formatting) and physical issues (such as controller failure, firmware corruption, or NAND chip damage). Even if your brand isn’t listed here, there’s a very good chance we can help—feel free to contact us for a free consultation.' },
  { q: '5. Can you recover data from an SSD that was inside a MacBook or other non-removable storage device?', a: 'Yes. We specialize in recovering data from MacBooks and other laptops with non-removable SSDs. Many modern MacBooks and ultra-thin laptops have SSD chips that are soldered directly to the motherboard, making traditional data recovery impossible for most shops. At Five Star Data Recovery, our engineers perform component-level repairs and use advanced micro-soldering and chip-off techniques (when necessary) to access the storage directly and extract your data safely. Whether it’s a MacBook Pro, MacBook Air, or any other device with integrated storage, we have the tools and expertise to help.' },
  { q: '6. How is SSD data recovery different from hard drive recovery?', a: 'Unlike traditional hard drives, SSDs use NAND flash memory with no moving parts. Recovery often involves advanced techniques like chip-off recovery or firmware-level repairs, which require specialized tools and expertise.' },
  { q: '7. Is TRIM command a problem for SSD data recovery?', a: 'Yes, the TRIM command can complicate recovery. When TRIM is enabled, deleted data is often overwritten and becomes unrecoverable. However, if your data loss wasn’t due to file deletion (e.g., hardware failure), recovery is still very possible.' },
  { q: '8. How long does SSD data recovery take?', a: 'Typical turnaround time is 3 to 5 business days, but more complex cases involving chip-level work may take longer. If you’re in a hurry, expedited service options are available.' },
  { q: '9. Will opening my SSD or trying DIY recovery hurt my chances?', a: 'Yes. Attempting to open the drive or use third-party software can make recovery more difficult or even impossible. It’s always best to power off the device and let a professional data recovery lab handle the process.' },
  { q: '10. How much does SSD data recovery cost?', a: 'At Five Star Data Recovery, SSD data recovery is priced using the same flat-rate model as our other services, ensuring transparency and predictability for every case. Our rates are based on the drive’s storage capacity and the nature of the failure, not on the value of your data or the time it takes to recover it. Here’s a breakdown of our standard SSD recovery pricing: SSDs up to 2TB: $300 SSDs between 2TB and 6TB: $500 SSDs between 8TB and 12TB: $600 SSDs with physical or component-level issues requiring cleanroom repairs: $950 (any size) For example, if you have a 1TB Samsung EVO SSD that stopped showing up due to a firmware failure, the total cost of recovery would be $300 under our standard service. We never charge any upfront fees, and if we are unable to recover your data, you pay nothing. Optional expedited service is also available for time-sensitive projects and will be quoted based on urgency. Every SSD case is handled with care by our experienced recovery engineers using proprietary tools and safe imaging procedures. If you’re unsure about your SSD issue, feel free to contact us for a free diagnostic and exact quote before moving forward.' }
]
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="Solid State Drive Recovery"
      subtitle="Get Your Data Back In No Time."
      description="Data loss is stressful — but working with us doesn't have to be. Watch how our team handles each recovery with care, professionalism, and precision. From diagnostics to delivery, we offer flat-rate pricing, honest communication, and proven results — all from our secure Glendale lab."
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

    <!-- What We Can Recover -->
    <section class="issues-section section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What We Can Recover</h2>
        </div>
        <div class="issues-layout">
          <div class="issues-intro">
            <p>Our engineers handle all types of SSD failures — from firmware corruption to physical chip damage. No matter the cause, we have the tools to get your data back safely.</p>
          </div>
          <ul class="issues-list">
            <li>Documents, photos, and video files</li>
            <li>Files from damaged file systems and corrupted partitions</li>
            <li>Deleted files from formatted SSDs</li>
            <li>Lost partitions and boot sectors</li>
            <li>Data from an SSD affected by a failed OS update</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Common Scenarios -->
    <section class="issues-section section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Common SSD Data Loss Scenarios</h2>
        </div>
        <div class="issues-layout">
          <div class="issues-intro">
            <p>SSDs fail in different ways than traditional hard drives. Understanding the cause helps us choose the right recovery method for your situation.</p>
          </div>
          <ul class="issues-list">
            <li>Accidental deletion or formatted SSD</li>
            <li>Power surge or sudden shutdown during data transfer</li>
            <li>File system corruption and boot issues</li>
            <li>Firmware bugs or controller failure</li>
            <li>Trimmed files that bypass the recycle bin</li>
            <li>Liquid or impact-related physical damage</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Process Steps -->
    <section class="process-section section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our SSD Data Recovery Process</h2>
        </div>
        <div class="process-grid">
          <div class="process-card">
            <div class="process-num">01</div>
            <h3 class="process-title">Initial Assessment and Diagnostics</h3>
            <p class="process-desc">We begin by evaluating the SSD to determine whether the failure is logical, physical, or firmware-related.</p>
          </div>
          <div class="process-card">
            <div class="process-num">02</div>
            <h3 class="process-title">Non-Invasive Imaging</h3>
            <p class="process-desc">If possible, we create a complete sector-by-sector clone of the SSD to ensure data safety and integrity.</p>
          </div>
          <div class="process-card">
            <div class="process-num">03</div>
            <h3 class="process-title">Firmware or Component-Level Repair</h3>
            <p class="process-desc">We perform advanced firmware fixes or physical repairs when the SSD has controller, NAND, or PCB-related issues.</p>
          </div>
          <div class="process-card">
            <div class="process-num">04</div>
            <h3 class="process-title">File System and Data Recovery</h3>
            <p class="process-desc">We analyze the image to reconstruct file systems, recover lost partitions, and extract user data.</p>
          </div>
          <div class="process-card">
            <div class="process-num">05</div>
            <h3 class="process-title">Data Approval and Delivery</h3>
            <p class="process-desc">We provide a recovery report, and once approved, transfer the data securely to a new storage device or through encrypted delivery.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Brands We Support -->
    <section class="content-section section-bg-3 section-pad">
      <div class="container content-narrow">
        <h2 class="content-title">SSD Brands and Devices We Support</h2>
        <p>We recover data from all major SSD brands and form factors:</p>
        <ul class="secure-list">
          <li>Samsung, SanDisk, Crucial, Kingston, Intel</li>
          <li>Western Digital, Seagate, Toshiba, SK Hynix</li>
          <li>Apple SSDs, NVMe drives, PCIe M.2, and SATA III SSDs</li>
        </ul>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="why-section section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Why Choose Five Star Data Recovery?</h2>
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
          <h2 class="cta-title">Start Your SSD Data Recovery Today</h2>
          <p class="cta-sub">Data loss is stressful — but working with us doesn't have to be. From diagnostics to delivery, we offer flat-rate pricing, honest communication, and proven results — all from our secure Glendale lab.</p>
          <ul class="cta-list">
            <li>Drop off your SSD at our Glendale lab</li>
            <li>Ship it to us free from anywhere in the U.S.</li>
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
          <h2 class="cta-title">Need Help With Solid State Drive Recovery?</h2>
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
