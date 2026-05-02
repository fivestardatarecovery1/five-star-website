<script setup lang="ts">
useSeoMeta({
  title: 'Mac Data Recovery — Five Star Data Recovery',
  description: 'From personal memories to creative projects, we help recover lost data for students, professionals, and enterprise users. Whether you\'re editing in Final Cut Pr'
})
const faqs = [
  { q: '1. Can you recover data from a Mac that won’t boot after a macOS update?', a: 'Yes. macOS updates can sometimes cause boot failures or file system corruption. We specialize in recovering data from Macs that won’t boot after failed updates or system crashes.' },
  { q: '2. My MacBook’s logic board is dead. Can you still recover the data?', a: 'Yes, data recovery is often possible even if your MacBook’s logic board is dead—though the method depends on the model. For older MacBooks (typically 2015 and earlier) with removable drives, we can physically remove the SSD or hard drive and attempt recovery directly from the device. For newer models (2016 and later), the internal storage consists of NAND flash chips soldered directly onto the logic board, meaning the data cannot be removed or accessed separately. In these cases, recovery requires component-level logic board repair. This involves using detailed schematics and advanced micro-soldering techniques to bring the board to a semi-functional state—just enough to extract the data. Please note: this process is strictly for data recovery. The MacBook will not be fully repaired or usable afterward. Our only goal is to retrieve your data safely and efficiently.' },
  { q: '3. How much data Mac Data Recovery Cost?', a: 'The cost of Mac data recovery depends on the model of your Mac and the type of failure involved. Logical Recovery (e.g., file system corruption, macOS errors, drives that mount but show no files):$300 flat rate. This applies to cases where the internal SSD or hard drive is physically healthy but data is inaccessible. Removable SSD/HDD Recovery (2015 and earlier models):$300–$650 depending on whether there’s logical corruption or hardware-level issues. Soldered NAND/Logic Board Recovery (2016 and newer models, including M1/M2 chips):$950 for cases requiring board-level component repair to access the data. Deleted File Recovery:$500, which includes a $200 upfront non-refundable labor fee. The balance is only due if the recovery is successful and approved. We provide free evaluations in most cases, and you’ll always receive a clear quote before proceeding. For a complete pricing breakdown, visit our Data Recovery Pricing Page.' },
  { q: '4. Do you recover deleted files from an M1 MacBook Pro?', a: 'In most cases, no. Deleted file recovery from M1 and M2 MacBook Pros is extremely limited due to Apple’s hardware-level encryption and how the file system (APFS) handles deletions. Once a file is deleted on these machines, the data is often immediately overwritten or rendered inaccessible because of how Apple integrates the SSD with the T2 or M-series security architecture. If the MacBook is still functional and files were recently deleted, there may be a very small window of opportunity—but only if the machine hasn’t been heavily used since the deletion. Even then, success is rare. We do not currently offer deleted file recovery for M1/M2 MacBooks unless extremely specific conditions are met. If you’re unsure, feel free to contact us for a free evaluation and we’ll let you know if your case qualifies.' },
  { q: '5. Do you work on both Intel-based and Apple Silicon (M1/M2) Macs?', a: 'Yes. We recover data from all Mac models, including older Intel-based systems and the latest Apple Silicon (M1 and M2) Macs. Each type has unique recovery challenges, but we’re equipped to handle both.' },
  { q: '6. Can you recover data from a Mac with liquid damage?', a: 'Absolutely. Liquid damage can cause short circuits and motherboard failures, making the Mac unbootable. Our engineers specialize in component-level recovery and can often retrieve data even from heavily damaged logic boards.' },
  { q: '7. Do you offer clean room recovery for Mac hard drives?', a: 'Yes. If your Mac uses a traditional spinning hard drive (HDD) and has internal mechanical damage (e.g., clicking sounds), we will perform the recovery inside our Class 100 clean room to ensure maximum data safety.' },
  { q: '8. Can you recover data from a Mac with FileVault encryption enabled?', a: 'Yes, we can recover data from FileVault-encrypted Macs as long as you can provide the password or recovery key. Without the encryption credentials, recovery is not possible due to Apple’s built-in security protocols.' },
  { q: '9. Is there a risk of voiding my Apple warranty during data recovery?', a: 'In most cases, data recovery involves opening the device or working on internal components, which can void your manufacturer warranty. If data preservation is your priority, we recommend proceeding with recovery first, then addressing any warranty concerns later.' },
  { q: '10. Can you recover data from a Mac Fusion Drive?', a: 'Yes. At Five Star Data Recovery, we specialize in iMac Fusion Drive data recovery. A Fusion Drive stores data across both an SSD and a traditional hard drive, so both parts must be recovered and combined to rebuild the full volume. We start by creating sector-by-sector images of both drives, then use specialized tools to reconstruct the CoreStorage logical volume. This allows us to safely extract your files while keeping your original drives untouched. Whether the failure is logical or hardware-related, we’re equipped to handle both.' },
  { q: '11. Do you offer emergency Mac data recovery services?', a: 'Yes. For critical situations, we offer both Expedited Service and Expedited Plus Service , giving you priority turnaround with 24/7 engineer availability. Visit our Pricing Page for full details.' }
]
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="Mac Data Recovery"
      subtitle="Get Your Data Back In No Time."
      description="From personal memories to creative projects, we help recover lost data for students, professionals, and enterprise users. Whether you're editing in Final Cut Pro, producing music in Logic, or managing documents in Pages or Word, our recovery process ensures your most important files—no matter the ty"
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

    <!-- Mac Devices We Recover -->
    <section class="issues-section section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Mac Devices We Recover Data From</h2>
        </div>
        <div class="issues-layout">
          <div class="issues-intro">
            <p>We recover data from every Mac model — from older Intel-based MacBooks to the latest Apple Silicon machines. If it's made by Apple, we can help.</p>
          </div>
          <ul class="issues-list">
            <li>MacBook Air (Intel and M-series)</li>
            <li>MacBook Pro (all models and screen sizes)</li>
            <li>MacBook</li>
            <li>iMac (standard and Retina models)</li>
            <li>Mac Pro</li>
            <li>Mac Mini</li>
            <li>Apple Time Machine backups</li>
            <li>External hard drives formatted for macOS (HFS+, APFS)</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Common Causes -->
    <section class="issues-section section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Common Causes of Data Loss on Macs</h2>
        </div>
        <div class="issues-layout">
          <div class="issues-intro">
            <p>Mac data loss can happen for many reasons — from software failures to physical damage. Recognizing the cause early helps maximize recovery success.</p>
          </div>
          <ul class="issues-list">
            <li>Accidental file deletion or disk formatting</li>
            <li>File system corruption (HFS+, APFS)</li>
            <li>macOS upgrade failure</li>
            <li>Time Machine backup drive corruption</li>
            <li>No power or startup failure</li>
            <li>Liquid spills on MacBooks</li>
            <li>Physical damage to SSDs or HDDs</li>
            <li>Clicking or beeping internal drives</li>
            <li>Failed mac hard drive recovery attempts from other services</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Process Steps -->
    <section class="process-section section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Mac Data Recovery Process</h2>
        </div>
        <div class="process-grid">
          <div class="process-card">
            <div class="process-num">01</div>
            <h3 class="process-title">Free Diagnostic</h3>
            <p class="process-desc">We start with a full evaluation of your Mac or external drive. We determine the cause of failure and provide a quote before starting.</p>
          </div>
          <div class="process-card">
            <div class="process-num">02</div>
            <h3 class="process-title">Drive Imaging or Board Repair</h3>
            <p class="process-desc">Depending on the situation, we either image the drive or perform component-level repair on logic boards to access data.</p>
          </div>
          <div class="process-card">
            <div class="process-num">03</div>
            <h3 class="process-title">Deep Scan for Recoverable Data</h3>
            <p class="process-desc">We use professional recovery tools to do a deep scan. This helps us find lost partitions, deleted files, and corrupted volumes.</p>
          </div>
          <div class="process-card">
            <div class="process-num">04</div>
            <h3 class="process-title">File Verification and Testing</h3>
            <p class="process-desc">We test recovered files for integrity and preview the results for your review.</p>
          </div>
          <div class="process-card">
            <div class="process-num">05</div>
            <h3 class="process-title">Secure Return of Your Data</h3>
            <p class="process-desc">We return your data on a new drive or USB — never on the original failing drive.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- What File Types -->
    <section class="issues-section section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What File Types Can Be Recovered?</h2>
        </div>
        <div class="issues-layout">
          <div class="issues-intro">
            <p>From personal memories to creative projects, we help recover lost data for students, professionals, and enterprise users. Whether you're editing in Final Cut Pro, producing music in Logic, or managing documents in Pages or Word, our recovery process ensures your most important files have the best chance of being restored.</p>
          </div>
          <ul class="issues-list">
            <li>Photos (JPG, HEIC, RAW, TIFF)</li>
            <li>Videos (MOV, MP4, ProRes, Final Cut Pro files)</li>
            <li>Documents (Pages, Keynote, Numbers, DOCX, PDF)</li>
            <li>Music (Logic Pro, GarageBand, WAV, MP3)</li>
            <li>Email and archive files</li>
            <li>Time Machine sparse bundles and disk images</li>
            <li>Application and library files</li>
          </ul>
        </div>
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

    <!-- Nationwide Service -->
    <section class="content-section section-bg-2 section-pad">
      <div class="container content-narrow">
        <h2 class="content-title">Free Round Trip Shipping</h2>
        <p>Our nationwide service is designed for convenience. Whether you're in New York, Miami, Chicago, or a remote area — you'll get the same expert-level recovery without needing to find a local provider.</p>
      </div>
    </section>

    <!-- CTA Band -->
    <section class="cta-band">
      <div class="container cta-band-inner">
        <div>
          <h2 class="cta-title">Start Your Mac Recovery Today</h2>
          <p class="cta-sub">Data loss is stressful — but working with us doesn't have to be. From diagnostics to delivery, we offer flat-rate pricing, honest communication, and proven results — all from our secure Glendale lab.</p>
          <ul class="cta-list">
            <li>Drop off your Mac at our Glendale lab</li>
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
          <h2 class="cta-title">Need Help With Mac Data Recovery?</h2>
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
