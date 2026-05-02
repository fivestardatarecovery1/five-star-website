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

    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What Is Hard Drive Data Recovery?</h2>
        </div>
        <div class="section-body">
          <p>The process of hard drive data recovery involves retrieving files that someone has lost, deleted, or damaged. This applies to hard drives that have failed or are not working properly. This may include fixing hardware, extracting data from software, or making a full disk image. This helps examine and recover files from the drive without causing more damage.</p>
          <p>The cost of recovery depends on the type of failure, but we always provide a flat-rate quote with no hidden fees before any work begins.</p>
          <p>Our recovery process applies to both internal and external hard drives, including desktop computers, laptops, servers, and portable enclosures.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Common Reasons Hard Drives Fail</h2>
        </div>
        <div class="section-body">
          <p>Many ways exist for a hard drive to fail, including physical damage, electrical failure, and file system corruption. Some of the most common situations we see include:</p>
          <ul class="content-list">
            <li>Power surges or electrical damage</li>
            <li>Drops, impacts, or vibration damage</li>
            <li>Water, moisture, or liquid exposure</li>
            <li>Overheating or poor ventilation</li>
            <li>Accidental formatting or file deletion</li>
            <li>Corrupted file systems and partitions</li>
            <li>Malware, viruses, or software conflicts</li>
            <li>Operating system failure or boot loop</li>
          </ul>
          <p>You can recover data from a damaged hard drive or software problems with our tools and experience to help you succeed.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Hard Drive Recovery Process</h2>
        </div>
        <div class="section-body">
          <p>At Five Star Data Recovery, our approach is precise and secure:</p>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Step 1: Free Diagnostic</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Step 2: Disk Imaging</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Step 3: Recovery</h2>
        </div>
        <div class="section-body">
          <p>Our engineers fix problems or replace parts in our cleanroom. They work to recover lost data from your device.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Step 4: File Verification</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Step 5: Final Delivery</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>No Data, No Charge — If we can’t recover your hard drive data, you don’t pay</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">How Hard Drives Work (And Why They Fail)</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Mechanical failure — such as a head crash or stuck spindle</li>
            <li>Electrical failure — power surges can fry the drive’s PCB</li>
            <li>Firmware corruption — software inside the drive malfunctions</li>
            <li>Logical errors — corruption in the file system or partition table</li>
            <li>Encryption lockout — inaccessible because of failed password or software (correct password must be provided)</li>
            <li>Virus damage — some malware destroys key structures or the boot sector In some cases, the computer may still see the drive, but the user interface will freeze or the contents appear blank. In some cases, the drive won’t spin or the system won’t detect it at all.</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Logical vs. Physical Recovery</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Logical Failures</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>The drive is detected, but inaccessible</li>
            <li>Deleted files, missing folders, or lost partitions</li>
            <li>File systems appear RAW or unformatted</li>
            <li>Recovery is software-based</li>
            <li>Faster turnaround and lower cost</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Physical Failures</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>The drive clicks, beeps, or doesn’t spin</li>
            <li>The system doesn’t detect the device</li>
            <li>Requires component repair or replacement</li>
            <li>Performed in a cleanroom</li>
            <li>More complex but often recoverable</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Why DIY Recovery Can Be Risky</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Running recovery software on a failing drive can cause permanent platter damage</li>
            <li>Opening a drive outside a cleanroom can introduce dust and contamination</li>
            <li>DIY recovery often overwrites the critical data you're trying to recover</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Why Choose Five Star Data Recovery?</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Certified Cleanroom Lab</li>
            <li>Skilled Engineers &amp; Recovery Specialists</li>
            <li>Confidential &amp; Secure Handling</li>
            <li>Transparent Quotes &amp; No Unexpected Fees</li>
            <li>“No Data, No Charge” Guarantee</li>
            <li>Based in Glendale, CA — Nationwide Service Available</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What Clients Say</h2>
        </div>
        <div class="section-body">
          <p>“I’m based in Seattle, Washington, and shipped my dead external hard drive to Five Star Data Recovery after it suddenly stopped showing up. The free shipping both ways made the process easy, and within a few days, they recovered all my photos and business files. Highly recommend their service!”</p>
          <p>Daniel P.</p>
          <p>Seattle, WA</p>
          <p>“After my hard drive started making clicking noises, I contacted several local places in my area, but wasn’t impressed. Five Star Data Recovery provided a flat-rate quote upfront and offered free shipping for my case. They recovered 98% of my data, and I’m so grateful for their transparency and professionalism.”</p>
          <p>Monica R.</p>
          <p>Chicago, IL</p>
          <p>“I live in Houston, Texas, and my external hard drive failed with no warning. Five Star’s team guided me through their mail-in process, provided daily updates, and successfully recovered all my important documents. Their no hidden fees policy made the experience stress-free.”</p>
          <p>Kevin L</p>
          <p>Houston, TX</p>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Your Data Stays Secure</h2>
        </div>
        <div class="section-body">
          <p>We understand your files are private. Whether you're recovering sensitive business files or personal memories, we keep your data protected from start to finish.</p>
          <ul class="content-list">
            <li>In-house recovery only — no third-party labs</li>
            <li>All data is securely stored and permanently deleted after final delivery</li>
            <li>NDA available for sensitive projects</li>
            <li>Our lab uses access control and 24/7 surveillance</li>
          </ul>
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
          <h2 class="section-title">Contact Us for ClickingHard Drive Recovery</h2>
        </div>
        <div class="section-body">
          <p>If you're dealing with lost data, clicking drives, or a failed system, don’t wait—reach out today. The sooner you call, the better the chances of full recovery.</p>
          <ul class="content-list">
            <li>Visit our lab in Glendale, CA</li>
            <li>Mail in your drive from anywhere in the U.S.</li>
            <li>Call us now for your free diagnostic</li>
          </ul>
          <p>The drive may be broken, but your files aren’t gone forever. Let us help you recover lost data today.</p>
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
          <h2 class="cta-title">Need Help With Hard Drive Data Recovery Services?</h2>
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
