<script setup lang="ts">
useSeoMeta({
  title: 'Hard Drive Data Recovery Services — Five Star Data Recovery',
  description: 'When a hard drive fails, it can feel like everything is lost. Lost data can be profoundly upsetting. This includes personal memories, important work files, and '
})
const faqs = [
  { q: '1. Do you recover data from both internal and external hard drives?', a: 'Yes! We recover data from both internal hard drives (HDDs) and external hard drives. Whether the drive was inside a laptop, desktop, or inside an external enclosure, we have the tools and experience to help.' },
  { q: '2. Can you recover data from a hard drive that was previously reformatted?', a: 'In many cases, yes. If your hard drive was reformatted and the data hasn’t been heavily overwritten, we may still be able to recover your files. Contact us for a free evaluation so we can assess your specific situation.' },
  { q: '3. Do you handle hard drives with bad sectors or slow read speeds?', a: 'Yes. Drives with bad sectors, read instability, or extremely slow transfer speeds are one of the most common recovery scenarios we handle. We use professional imaging tools that can safely read around damaged areas.' },
  { q: '4. What brands of hard drives do you specialize in?', a: 'We work on all major hard drive brands, including Western Digital, Seagate, Toshiba, Hitachi, and others. No matter the manufacturer, our clean room and imaging tools are fully equipped for professional recovery.' },
  { q: '5. Can I open the hard drive myself to check for damage before sending it in?', a: 'No. We strongly advise against opening your hard drive. Even a small amount of dust entering the drive can cause irreversible platter damage. All internal inspections are performed inside our certified clean room environment.' },
  { q: '6. How do you recover data from hard drives with mechanical failure?', a: 'For mechanical issues like clicking, buzzing, or non-spinning drives, we perform component-level repairs inside our clean room. This may involve replacing internal parts like read/write heads or actuator arms to temporarily restore functionality for imaging.' },
  { q: '7. What file types can you recover from a hard drive?', a: 'We can recover almost all file types, including documents, photos, videos, databases, system files, and email archives. After the recovery, we provide you with a full list of the recovered files for review.' },
  { q: '8. Do you work on both Windows and Mac formatted hard drives?', a: 'Yes. We recover data from NTFS, exFAT, HFS+, APFS, and other file systems used in both Windows and Mac environments.' }
]

const reviews = [
  { text: 'I\'m based in Seattle, Washington, and shipped my dead external hard drive to Five Star Data Recovery after it suddenly stopped showing up. The free shipping both ways made the process easy, and within a few days, they recovered all my photos and business files. Highly recommend their service!', name: 'Daniel P.', location: 'Seattle, WA' },
  { text: 'After my hard drive started making clicking noises, I contacted several local places in my area, but wasn\'t impressed. Five Star Data Recovery provided a flat-rate quote upfront and offered free shipping for my case. They recovered 98% of my data, and I\'m so grateful for their transparency and professionalism.', name: 'Monica R.', location: 'Chicago, IL' },
  { text: 'I live in Houston, Texas, and my external hard drive failed with no warning. Five Star\'s team guided me through their mail-in process, provided daily updates, and successfully recovered all my important documents. Their no hidden fees policy made the experience stress-free.', name: 'Kevin L', location: 'Houston, TX' }
]

const whyUs = [
  { title: 'Certified Cleanroom Lab', desc: 'Our in-house ISO-certified cleanroom allows safe internal repairs on mechanically damaged hard drives.' },
  { title: 'Skilled Engineers', desc: 'Skilled Engineers & Recovery Specialists with years of hard drive recovery experience across all brands.' },
  { title: 'Confidential & Secure', desc: 'Confidential & Secure Handling — your data stays in-house and is never shared or outsourced.' },
  { title: 'Transparent Quotes', desc: 'Transparent Quotes & No Unexpected Fees — you approve the price before we begin any work.' },
  { title: 'No Data, No Charge', desc: '"No Data, No Charge" Guarantee — if we can\'t recover your files, you owe us nothing.' },
  { title: 'Nationwide Service', desc: 'Based in Glendale, CA — Nationwide Service Available with free round-trip shipping.' }
]
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="Hard Drive Data Recovery Services"
      subtitle="Get Your Data Back In No Time."
      description="When a hard drive fails, it can feel like everything is lost. Lost data can be profoundly upsetting. This includes personal memories, important work files, and family photos. At Five Star Data Recovery, we specialize in fast, secure, and professional hard drive data recovery for individuals, busines"
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

    <!-- What Is Recovery -->
    <section class="content-section section-bg-1 section-pad">
      <div class="container content-narrow">
        <h2 class="content-title">What Is Hard Drive Data Recovery?</h2>
        <p>The process of hard drive data recovery involves retrieving files that someone has lost, deleted, or damaged. This applies to hard drives that have failed or are not working properly. This may include fixing hardware, extracting data from software, or making a full disk image. This helps examine and recover files from the drive without causing more damage.</p>
        <p>The cost of recovery depends on the type of failure, but we always provide a flat-rate quote with no hidden fees before any work begins.</p>
        <p>Our recovery process applies to both internal and external hard drives, including desktop computers, laptops, servers, and portable enclosures.</p>
      </div>
    </section>

    <!-- Common Reasons -->
    <section class="issues-section section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Common Reasons Hard Drives Fail</h2>
        </div>
        <div class="issues-layout">
          <div class="issues-intro">
            <p>Many ways exist for a hard drive to fail, including physical damage, electrical failure, and file system corruption. Some of the most common situations we see include:</p>
          </div>
          <ul class="issues-list">
            <li>Power surges or electrical damage</li>
            <li>Drops, impacts, or vibration damage</li>
            <li>Water, moisture, or liquid exposure</li>
            <li>Overheating or poor ventilation</li>
            <li>Accidental formatting or file deletion</li>
            <li>Corrupted file systems and partitions</li>
            <li>Malware, viruses, or software conflicts</li>
            <li>Operating system failure or boot loop</li>
          </ul>
        </div>
        <p class="issues-outro">You can recover data from a damaged hard drive or software problems with our tools and experience to help you succeed.</p>
      </div>
    </section>

    <!-- Process Steps -->
    <section class="process-section section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Hard Drive Recovery Process</h2>
          <p class="section-subtitle">At Five Star Data Recovery, our approach is precise and secure:</p>
        </div>
        <div class="process-grid">
          <div class="process-card">
            <div class="process-num">01</div>
            <h3 class="process-title">Free Diagnostic</h3>
            <p class="process-desc">We evaluate your drive to determine whether the failure is logical, physical, or firmware-related — at no charge.</p>
          </div>
          <div class="process-card">
            <div class="process-num">02</div>
            <h3 class="process-title">Disk Imaging</h3>
            <p class="process-desc">We create a complete sector-by-sector clone of your drive to work from a safe copy while preserving your original.</p>
          </div>
          <div class="process-card">
            <div class="process-num">03</div>
            <h3 class="process-title">Recovery</h3>
            <p class="process-desc">Our engineers fix problems or replace parts in our cleanroom. They work to recover lost data from your device.</p>
          </div>
          <div class="process-card">
            <div class="process-num">04</div>
            <h3 class="process-title">File Verification</h3>
            <p class="process-desc">We provide a full file list for your review so you can confirm what was successfully recovered before paying.</p>
          </div>
          <div class="process-card">
            <div class="process-num">05</div>
            <h3 class="process-title">Final Delivery</h3>
            <p class="process-desc">No Data, No Charge — If we can't recover your hard drive data, you don't pay.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How Hard Drives Work -->
    <section class="issues-section section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">How Hard Drives Work (And Why They Fail)</h2>
        </div>
        <div class="issues-layout">
          <div class="issues-intro">
            <p>Hard drives rely on spinning platters and magnetic read/write heads. When something goes wrong with these components — or with the firmware that controls them — data becomes inaccessible. In some cases, the computer may still see the drive, but freeze or show blank contents. In others, the drive won't spin at all.</p>
          </div>
          <ul class="issues-list">
            <li>Mechanical failure — such as a head crash or stuck spindle</li>
            <li>Electrical failure — power surges can fry the drive's PCB</li>
            <li>Firmware corruption — software inside the drive malfunctions</li>
            <li>Logical errors — corruption in the file system or partition table</li>
            <li>Encryption lockout — inaccessible because of failed password or software</li>
            <li>Virus damage — some malware destroys key structures or the boot sector</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Logical vs Physical -->
    <section class="content-section section-bg-1 section-pad">
      <div class="container content-narrow">
        <h2 class="content-title">Logical vs. Physical Recovery</h2>
        <p><strong style="color:#fff">Logical Failures:</strong> The drive is detected but inaccessible. Deleted files, missing folders, or lost partitions. File systems appear RAW or unformatted. Recovery is software-based with faster turnaround and lower cost.</p>
        <p><strong style="color:#fff">Physical Failures:</strong> The drive clicks, beeps, or doesn't spin. The system doesn't detect the device. Requires component repair or replacement performed in a cleanroom. More complex but often recoverable.</p>
        <p><strong style="color:#fff">Why DIY Recovery Can Be Risky:</strong> Running recovery software on a failing drive can cause permanent platter damage. Opening a drive outside a cleanroom can introduce dust and contamination. DIY recovery often overwrites the critical data you're trying to recover.</p>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="why-section section-bg-2 section-pad">
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

    <!-- Testimonials -->
    <section class="reviews-section section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What Clients Say</h2>
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

    <!-- Data Security -->
    <section class="content-section section-bg-1 section-pad">
      <div class="container content-narrow">
        <h2 class="content-title">Your Data Stays Secure</h2>
        <p>We understand your files are private. Whether you're recovering sensitive business files or personal memories, we keep your data protected from start to finish.</p>
        <ul class="secure-list">
          <li>In-house recovery only — no third-party labs</li>
          <li>All data is securely stored and permanently deleted after final delivery</li>
          <li>NDA available for sensitive projects</li>
          <li>Our lab uses access control and 24/7 surveillance</li>
        </ul>
      </div>
    </section>

    <!-- CTA Band -->
    <section class="cta-band">
      <div class="container cta-band-inner">
        <div>
          <h2 class="cta-title">Contact Us for Hard Drive Recovery</h2>
          <p class="cta-sub">If you're dealing with lost data, clicking drives, or a failed system, don't wait — reach out today. The sooner you call, the better the chances of full recovery.</p>
          <ul class="cta-list">
            <li>Visit our lab in Glendale, CA</li>
            <li>Mail in your drive from anywhere in the U.S.</li>
            <li>Call us now for your free diagnostic</li>
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
          <h2 class="cta-title">Need Help With Hard Drive Data Recovery Services?</h2>
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
.issues-outro { font-size: 1rem; color: rgba(255,255,255,0.65); margin-top: 32px; }
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
