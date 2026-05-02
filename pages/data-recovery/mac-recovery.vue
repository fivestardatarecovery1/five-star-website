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

    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Mac Devices We Recover Data From</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
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
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Common Causes of Data Loss on Macs</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
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
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Specialized Component-Level Recovery for MacBooks</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Mac Data Recovery Process</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Free Diagnostic – We start with a full evaluation of your Mac or external drive. We determine the cause of failure and provide a quote before starting.</li>
            <li>Drive Imaging or Board Repair – Depending on the situation, we either image the drive or perform component-level repair on logic boards to access data.</li>
            <li>Deep Scan for Recoverable Data – We use professional recovery tools to do a deep scan. This helps us find lost partitions, deleted files, and corrupted volumes.</li>
            <li>File Verification and Testing – We test recovered files for integrity and preview the results for your review.</li>
            <li>Secure Return of Your Data – We return your data on a new drive or USB—never on the original failing drive.</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What File Types Can Be Recovered?</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Photos (JPG, HEIC, RAW, TIFF)</li>
            <li>Videos (MOV, MP4, ProRes, Final Cut Pro files)</li>
            <li>Documents (Pages, Keynote, Numbers, DOCX, PDF)</li>
            <li>Music (Logic Pro, GarageBand, WAV, MP3)</li>
            <li>Email and archive files</li>
            <li>Time Machine sparse bundles and disk images</li>
            <li>Application and library files</li>
          </ul>
          <p>From personal memories to creative projects, we help recover lost data for students, professionals, and enterprise users. Whether you're editing in Final Cut Pro, producing music in Logic, or managing documents in Pages or Word, our recovery process ensures your most important files—no matter the type—have the best chance of being restored.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Recovering Data from Mac External Hard Drives</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Drives not mounting or recognized on Mac</li>
            <li>“Disk not ejected properly” errors leading to corruption</li>
            <li>Partitions appearing as unallocated or RAW</li>
            <li>Clicking or non-spinning external drives</li>
            <li>Time Machine volumes that no longer open or show backups</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Why Choose Five Star Data Recovery?</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Expert knowledge of Apple file systems (APFS, HFS+, encrypted drives)</li>
            <li>Component-level micro-soldering and SSD chip-off capabilities</li>
            <li>Transparent pricing and no data, no charge policy</li>
            <li>Secure in-house recovery lab—no outsourcing</li>
            <li>Free round-trip nationwide shipping</li>
            <li>High success rates—even with complex Mac failures</li>
            <li>Lightning-Fast Response Time</li>
            <li>Hundreds of 5-Star Reviews</li>
            <li>Advanced Tools &amp; Cleanroom Lab</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Testimonials from Satisfied Clients</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Nationwide Mac Data Recovery</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Free Round Trip Shipping</h2>
        </div>
        <div class="section-body">
          <p>Our nationwide service is designed for convenience. Whether you’re in New York, Miami, Chicago, or a remote area — you’ll get the same expert-level recovery without needing to find a local provider.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Get a Free Quote within Minutes!</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Start Your Mac Recovery Today</h2>
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
          <h2 class="cta-title">Need Help With Mac Data Recovery?</h2>
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
