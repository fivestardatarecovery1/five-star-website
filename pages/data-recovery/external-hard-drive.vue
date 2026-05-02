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
      description="No matter if your drive is USB 2.0, 3.0, USB-C, Thunderbolt, or network-attached, we can help recover your data. Our engineers handle everything from simple file system corruption to complex mechanical failures requiring clean room work. We understand that every case is unique, and we’ll provide you"
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
          <h2 class="section-title">What Types of Drives Do We Recover?</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Seagate Backup Plus / Expansion</li>
            <li>Western Digital My Passport / Elements</li>
            <li>LaCie Rugged / d2 Professional</li>
            <li>Toshiba Canvio</li>
            <li>Samsung Portable SSDs</li>
            <li>G-Technology G-Drive</li>
          </ul>
          <p>No matter if your drive is USB 2.0, 3.0, USB-C, Thunderbolt, or network-attached, we can help recover your data. Our engineers handle everything from simple file system corruption to complex mechanical failures requiring clean room work. We understand that every case is unique, and we’ll provide you with a clear explanation of the issue before proceeding. To learn more about what data recovery might cost for your specific drive type, visit our Data Recovery Pricing page.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What To Do (And Not Do) If Your External Hard Drive Fails</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Do NOT attempt to open the drive</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Avoid running recovery software</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Avoid First AID</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Safely Disconnect the drive immediately</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Label the drive with any known issues</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Bring it to us for a free diagnosis</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What Types of Files Can Be Recovered?</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
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
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Real-World Scenarios We Handle</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>A photographer drops a 2TB LaCie drive containing a wedding shoot. The drive clicks and won't mount. We recovered 98% of files within 48 hours with our Expedite Plus service.</li>
          </ul>
          <ul class="content-list">
            <li>A business loses access to an encrypted Western Digital My Passport with payroll files. We bypassed the failed USB controller and decrypted data successfully (WD Self-Encrypting Drive).</li>
          </ul>
          <ul class="content-list">
            <li>A student spills water on a Toshiba drive with thesis and class materials. Despite circuit corrosion, we restored the files completely.</li>
          </ul>
          <ul class="content-list">
            <li>A YouTuber loses raw video footage from an SSD drive that suddenly showed as "unallocated." Our team completed the recovery the same day using expedited service.</li>
          </ul>
          <ul class="content-list">
            <li>A graphic designer’s G-Technology drive was accidentally reformatted during a macOS update. We recovered all critical project files and delivered them within 3 days.</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Advanced Tools and Techniques We Use</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>PC-3000 by ACE Lab is a top tool in the industry. It lets us connect directly with failing drives at the firmware level.</li>
          </ul>
          <ul class="content-list">
            <li>Cleanroom Environment: Class 100 ISO 5 certified clean benches for handling internal repairs without contamination.</li>
          </ul>
          <ul class="content-list">
            <li>Head &amp; Platter Swapping Tools: Custom jigs for precise mechanical part replacement.</li>
          </ul>
          <ul class="content-list">
            <li>Encrypted Drive Handling: Safe processing and decryption of self-encrypting drives (SEDs).</li>
          </ul>
          <ul class="content-list">
            <li>RAID &amp; Multi-Disk Tools: For recovery from RAID-configured external drives or drive arrays.</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Understanding Drive Failure Symptoms</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Clicking Noises: Usually means the read/write heads are failing or have crashed.</li>
          </ul>
          <ul class="content-list">
            <li>Beeping or Whining: This could indicate spindle motor failure or stuck platters (often caused by drops).</li>
          </ul>
          <ul class="content-list">
            <li>Drive Detected but Not Accessible: Often the result of corrupted partition tables or failing firmware.</li>
          </ul>
          <ul class="content-list">
            <li>External Hard Drive Does Not Show Up: This is another very common problem. This can happen because of USB port issues, faulty cables, or damaged firmware.</li>
          </ul>
          <ul class="content-list">
            <li>No Power: May be a bad USB bridge board, shorted PCB, or internal electronic failure.</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">How to Prevent Data Loss in the Future</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Avoid magnetic exposure and physical impact at all costs.</li>
          </ul>
          <ul class="content-list">
            <li>Use an uninterruptible power supply (UPS) during data transfers.</li>
          </ul>
          <ul class="content-list">
            <li>Regularly back up your data to a secondary drive or secure cloud service.</li>
          </ul>
          <ul class="content-list">
            <li>Always safely eject your drive before unplugging.</li>
          </ul>
          <ul class="content-list">
            <li>Stop using a drive at the first sign of failure (strange noises, disconnecting, slow access).</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Nationwide Mail-In Service – We Serve All 50 States</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Fill out our recovery form online and package your drive securely.</li>
          </ul>
          <ul class="content-list">
            <li>Using our pre-paid shipping label, ship it to our Glendale location using the courier of your choice.</li>
          </ul>
          <ul class="content-list">
            <li>We evaluate your device and provide a quote (usually same day by midnight).</li>
          </ul>
          <ul class="content-list">
            <li>We recover and verify your files—then send them back via a new drive you provide or purchase from us.</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Understanding how data storage works and why drives fail.</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">How We Keep Your Data Secure and Confidential</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Non-disclosure agreements available upon request</li>
          </ul>
          <ul class="content-list">
            <li>Data stored on encrypted internal servers</li>
          </ul>
          <ul class="content-list">
            <li>Recovered files deleted after 7 days (unless otherwise arranged)</li>
          </ul>
          <ul class="content-list">
            <li>Full internal access control in our lab</li>
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
          <p>“I thought all my family vacation photos were gone forever after my external hard drive stopped showing up on my computer. I called the team, and within a few days, they had recovered everything for me! The process was stress-free, and they kept me updated the whole time. Highly recommend if you’re facing a similar situation.”</p>
          <p>“My 2TB Seagate external drive suddenly started making clicking noises and became completely unreadable. I dropped it off for recovery, and they explained everything clearly from the start. In less than a week, I had all my business files back. The flat-rate pricing gave me peace of mind—no hidden fees or surprises.”</p>
          <p>“I accidentally dropped my Western Digital external hard drive off my desk, and it wouldn’t power on anymore. I was really worried about losing years of photos and documents. Luckily, the engineers here worked their magic. They recovered almost every single file. I’m beyond grateful!”</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Ready to Recover Your Data?</h2>
        </div>
        <div class="section-body">
          <p>Experiencing data loss on your external hard drive? Don’t panic—help is just a click away. Whether it’s important work files, family photos, or school projects, we understand how valuable your data is.</p>
          <p>At Five Star Data Recovery, we offer fast, professional, and affordable data recovery services for all types of external hard drives. With our flat-rate pricing and “No Data, No Charge” policy, you’ll always know what to expect.</p>
          <p>Fill out the quick form on this page to get started. Our expert team will review your case and reach out with a free consultation—ensuring your data is handled with care every step of the way.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Request a Free Quote!</h2>
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
          <h2 class="cta-title">Need Help With External Hard Drive Data Recovery Services?</h2>
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
