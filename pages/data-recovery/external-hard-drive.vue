<script setup lang="ts">
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "External Hard Drive Data Recovery",
        "url": "https://www.fivestardatarecovery.com/data-recovery/external-hard-drive-data-recovery/",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Five Star Data Recovery",
          "telephone": "+1-818-272-8866",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1731 S Brand Blvd.",
            "addressLocality": "Glendale",
            "addressRegion": "CA",
            "postalCode": "91204",
            "addressCountry": "US"
          }
        },
        "areaServed": [{ "@type": "Country", "name": "United States" }],
        "description": "Professional external hard drive data recovery services for all brands and failure types. Free diagnostics, flat-rate pricing, no data no charge."
      })
    }
  ]
})

useSeoMeta({
  title: 'External Hard Drive Not Showing Up - Five Star Data Recovery',
  ogTitle: 'External Hard Drive Data Recovery',
  description: 'Is your External Hard Drive Not Showing Up? Our professional team can help with all data recovery services. Give us a call today.',
  ogDescription: 'Is your External Hard Drive Not Showing Up? Our professional team can help with all data recovery services. Give us a call today.',
  ogImage: 'https://www.fivestardatarecovery.com/wp-content/uploads/2025/05/Logo-01-1024x1024.png',
})
</script>

<template>
  <div class="page-content">
    <NavBar />

    <HeroSection
      title="External Hard Drive Data Recovery Services"
      subtitle="Get Your Data Back In No Time."
      description="At Five Star Data Recovery, we specialize in professional, reliable, and fast external hard drive data recovery services. We know how stressful it is to lose access to your personal or business data. This can happen from a corrupted file system, accidental deletion, or physical damage. We provide a wide range of recovery options to help recover data from external hard drives of all types. This includes USB flash drives, portable SSDs, and RAID-based enclosures. Our experienced engineers handle everything from simple software problems to complex mechanical failures."
      bgImage="/external-hard-drive-data-recovery-glendale-ca.jpg"
      :trustBadges="[
        { icon: 'clock', text: 'Available 24/7/365' },
        { icon: 'check', text: 'No Data = No Charge' },
        { icon: 'shield', text: '10+ Years in Business' },
        { icon: 'star', text: 'Free Nationwide Shipping' },
      ]"
    />

    <StatsBar />

    <!-- WHAT TYPES OF DRIVES DO WE RECOVER -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">What Types of Drives Do We Recover?</h2>
        <p class="s-body">We work with all makes and models of external hard drives, including but not limited to:</p>
        <ul class="content-list">
          <li><NuxtLink to="/data-recovery/seagate-recovery" class="inline-link">Seagate</NuxtLink> Backup Plus / Expansion</li>
          <li><NuxtLink to="/data-recovery/western-digital-recovery" class="inline-link">Western Digital</NuxtLink> My Passport / Elements</li>
          <li><NuxtLink to="/data-recovery/lacie-recovery" class="inline-link">LaCie Rugged</NuxtLink> / d2 Professional</li>
          <li><NuxtLink to="/data-recovery/toshiba-recovery" class="inline-link">Toshiba</NuxtLink> Canvio</li>
          <li><NuxtLink to="/data-recovery/samsung-recovery" class="inline-link">Samsung</NuxtLink> Portable SSDs</li>
          <li>G-Technology G-Drive</li>
        </ul>
        <p class="s-body" style="margin-top: 24px;">No matter if your drive is USB 2.0, 3.0, USB-C, Thunderbolt, or network-attached, we can help recover your data. Our engineers handle everything from simple file system corruption to complex mechanical failures requiring clean room work. We understand that every case is unique, and we'll provide you with a clear explanation of the issue before proceeding. To learn more about what data recovery might cost for your specific drive type, visit our <NuxtLink to="/pricing" class="inline-link"><strong>Data Recovery Pricing</strong></NuxtLink> page.</p>
      </div>
    </section>

    <!-- WHAT TO DO / NOT DO -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">What To Do (And Not Do) If Your External Hard Drive Fails</h2>
        <div class="dos-donts-grid">
          <div class="dont-card">
            <div class="dd-icon dont">✗</div>
            <div>
              <strong class="dd-title">Do NOT attempt to open the drive</strong>
              <p class="dd-body">this can permanently destroy the platters inside.</p>
            </div>
          </div>
          <div class="dont-card">
            <div class="dd-icon dont">✗</div>
            <div>
              <strong class="dd-title">Avoid running recovery software</strong>
              <p class="dd-body">especially if the drive is clicking or unrecognized.</p>
            </div>
          </div>
          <div class="dont-card">
            <div class="dd-icon dont">✗</div>
            <div>
              <strong class="dd-title">Avoid First AID</strong>
              <p class="dd-body">Some users try to fix the issue using Disk Utility (on Mac) or other tools — this can overwrite recoverable data.</p>
            </div>
          </div>
          <div class="do-card">
            <div class="dd-icon do">✓</div>
            <div>
              <strong class="dd-title">Safely Disconnect the drive immediately</strong>
              <p class="dd-body">this prevents further damage. Safely eject the drive if you can. If you can't, shut down the computer; wait for the drive to stop spinning, then disconnect the cable.</p>
            </div>
          </div>
          <div class="do-card">
            <div class="dd-icon do">✓</div>
            <div>
              <strong class="dd-title">Label the drive with any known issues</strong>
              <p class="dd-body">date of failure, symptoms, etc.</p>
            </div>
          </div>
          <div class="do-card">
            <div class="dd-icon do">✓</div>
            <div>
              <strong class="dd-title">Bring it to us for a free diagnosis</strong>
              <p class="dd-body">we'll identify the issue safely and quickly.</p>
            </div>
          </div>
        </div>
        <p class="s-body" style="margin-top: 32px; font-style: italic;">Acting quickly is crucial. Continued use of a failing drive can worsen internal damage, making full recovery more difficult or even impossible.</p>
      </div>
    </section>

    <!-- WHAT FILES CAN BE RECOVERED -->
    <section class="s-white">
      <div class="container two-col-layout">
        <div class="two-col-text">
          <h2 class="s-heading">What Types of Files Can Be Recovered?</h2>
          <p class="s-body">Many of our clients worry about data recovery from external hard drives that are failing or damaged. Our data recovery tools and cleanroom processes can handle almost every file type on today's storage devices.</p>
          <p class="s-body">Here's a list of file types we commonly recover:</p>
          <ul class="content-list">
            <li>Photos: .jpg, .png, .cr2, .nef, .psd, and more</li>
            <li>Documents: .docx, .xlsx, .pptx, .pdf, .txt</li>
            <li>Videos: .mp4, .mov, .avi, .mkv</li>
            <li>Audio: .mp3, .wav, .aiff, .flac</li>
            <li>Project files: CAD, Adobe, Final Cut, DaVinci Resolve</li>
            <li>Archives: .zip, .rar, .tar</li>
            <li>Databases: .sql, .db, .mdb, QuickBooks</li>
          </ul>
          <p class="s-body">Even if someone reformats, corrupts, or sees your external hard drive as RAW, we can still recover your data. Each case is unique, but we have proven our results to be reliable. We help clients recover <NuxtLink to="/data-recovery/deleted-files" class="inline-link">deleted</NuxtLink> files from external drives, even if they lost the data months ago.</p>
        </div>
        <div class="two-col-image">
          <img src="/external-hard-drive-data-recovery-glendale-ca.jpg" alt="External hard drive data recovery" class="rounded-img" />
        </div>
      </div>
    </section>

    <!-- REAL WORLD SCENARIOS -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Real-World Scenarios We Handle</h2>
        <ul class="scenarios-list">
          <li>A photographer drops a 2TB <NuxtLink to="/data-recovery/lacie-recovery" class="inline-link">LaCie</NuxtLink> drive containing a wedding shoot. The drive clicks and won't mount. We recovered 98% of files within 48 hours with our <NuxtLink to="/expedited-service-plus" class="inline-link">Expedite Plus service</NuxtLink>.</li>
          <li>A business loses access to an encrypted <NuxtLink to="/data-recovery/western-digital-recovery" class="inline-link">Western Digital</NuxtLink> My Passport with payroll files. We bypassed the failed USB controller and decrypted data successfully (WD Self-Encrypting Drive).</li>
          <li>A student spills water on a Toshiba drive with thesis and class materials. Despite circuit corrosion, we restored the files completely.</li>
          <li>A YouTuber loses raw video footage from an SSD drive that suddenly showed as "unallocated." Our team completed the recovery the same day using expedited service.</li>
          <li>A graphic designer's G-Technology drive was accidentally reformatted during a macOS update. We recovered all critical project files and delivered them within 3 days.</li>
        </ul>
      </div>
    </section>

    <!-- ADVANCED TOOLS -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Advanced Tools and Techniques We Use</h2>
        <p class="s-body">At Five Star Data Recovery, we go beyond basic software and generic repair methods. We use advanced tools that help our engineers recover data that other companies often cannot. Some of our tools and technologies include:</p>
        <ul class="content-list">
          <li><strong>PC-3000 by ACE Lab</strong> is a top tool in the industry. It lets us connect directly with failing drives at the firmware level.</li>
          <li><strong>Cleanroom Environment:</strong> Class 100 ISO 5 certified clean benches for handling internal repairs without contamination.</li>
          <li><strong>Head &amp; Platter Swapping Tools:</strong> Custom jigs for precise mechanical part replacement.</li>
          <li><strong>Encrypted Drive Handling:</strong> Safe processing and decryption of self-encrypting drives (SEDs).</li>
          <li><strong>RAID &amp; Multi-Disk Tools:</strong> For recovery from RAID-configured external drives or drive arrays.</li>
        </ul>
        <p class="s-body">These tools, along with our years of experience, help us recover data from drives that others cannot fix.</p>
      </div>
    </section>

    <!-- DRIVE FAILURE SYMPTOMS -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Understanding Drive Failure Symptoms</h2>
        <p class="s-body">Recognizing the early warning signs of a failing drive can make the difference between full recovery and permanent loss. Some of the most common symptoms we see include:</p>
        <ul class="content-list">
          <li><NuxtLink to="/hard-drive-clicking" class="inline-link"><strong>Clicking Noises</strong></NuxtLink>: Usually means the read/write heads are failing or have crashed.</li>
          <li><strong>Beeping or Whining</strong>: This could indicate spindle motor failure or stuck platters (often caused by drops).</li>
          <li><strong>Drive Detected but Not Accessible</strong>: Often the result of corrupted partition tables or failing firmware.</li>
          <li><NuxtLink to="/data-recovery/hard-drive-not-showing-up" class="inline-link"><strong>External Hard Drive Does Not Show Up</strong></NuxtLink>: This is another very common problem. This can happen because of <NuxtLink to="/data-recovery/usb-recovery" class="inline-link">USB</NuxtLink> port issues, faulty cables, or damaged firmware.</li>
          <li><NuxtLink to="/drive-doesnt-power-on" class="inline-link"><strong>No Power</strong></NuxtLink>: May be a bad USB bridge board, shorted PCB, or internal electronic failure.</li>
        </ul>
        <p class="s-body" style="margin-top: 16px;">If your external hard drive exhibits any of these behaviors, power it down and bring it to us. Continued use may worsen the damage.</p>
      </div>
    </section>

    <!-- HOW TO PREVENT DATA LOSS -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">How to Prevent Data Loss in the Future</h2>
        <p class="s-body">While our job is to recover lost files, we also want to help you avoid data loss in the future. Here are our expert tips to keep your external hard drives safe and your data protected:</p>
        <ul class="content-list">
          <li>Avoid magnetic exposure and physical impact at all costs.</li>
          <li>Use an uninterruptible power supply (UPS) during data transfers.</li>
          <li>Regularly back up your data to a secondary drive or secure cloud service.</li>
          <li>Always safely eject your drive before unplugging.</li>
          <li>Stop using a drive at the first sign of failure (strange noises, disconnecting, slow access).</li>
        </ul>
        <p class="s-body">Prevention is the best form of protection—but if anything goes wrong, we're here to help.</p>
      </div>
    </section>

    <!-- NATIONWIDE MAIL-IN -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Nationwide Mail-In Service – We Serve All 50 States</h2>
        <p class="s-body">We accept hard drive recoveries from anywhere in the U.S. Our mail-in program is simple and secure. You can send your device to us for a free evaluation.</p>
        <p class="s-body">Here's how it works:</p>
        <ul class="content-list">
          <li>Fill out our <NuxtLink to="/data-recovery/mail-in-service" class="inline-link"><strong>recovery form online</strong></NuxtLink> and package your drive securely.</li>
          <li>Using our pre-paid shipping label, ship it to our <NuxtLink to="/data-recovery-glendale" class="inline-link">Glendale</NuxtLink> location using the courier of your choice.</li>
          <li>We evaluate your device and provide a quote (usually same day by midnight).</li>
          <li>We recover and verify your files—then send them back via a new drive you provide or purchase from us.</li>
        </ul>
        <p class="s-body">Our engineers keep you informed throughout the recovery process, from diagnosis to data delivery.</p>
        <p class="s-body">Out-of-state clients receive the same 5-star service and recovery success rate as our walk-in customers. We've helped users from New York to Hawaii and everywhere in between.</p>
      </div>
    </section>

    <!-- HOW DATA STORAGE WORKS -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Understanding how data storage works and why drives fail.</h2>
        <p class="s-body">To understand why external hard drives fail, it helps to understand how they store data in the first place. A traditional external disk drive (HDD) stores data magnetically on spinning platters.</p>
        <p class="s-body">A tiny read/write head floats above the surface, writing 0s and 1s to the disk—just microns away from physical contact. Because of this design, any bump or jolt can make the head hit the platter. This can damage data forever.</p>
        <p class="s-body">In <NuxtLink to="/data-recovery/ssd-recovery" class="inline-link">SSDs</NuxtLink> (Solid State Drives), there are no moving parts. They store data on flash memory chips instead. This lowers the chance of physical crashes. However, SSDs have a limited number of write cycles. They can also fail suddenly because of electronic or firmware issues. Both technologies, while reliable under normal use, are still vulnerable to power surges, heat, age, and accidental damage.</p>
        <p class="s-body">Understanding the technology behind storage helps our clients make better choices. It also shows why professional recovery is often the safest solution when problems occur.</p>
      </div>
    </section>

    <!-- HOW WE KEEP YOUR DATA SECURE -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">How We Keep Your Data Secure and Confidential</h2>
        <p class="s-body">Data privacy is one of our top priorities. We work with sensitive information every day, including medical records, tax files, personal videos, and business intellectual property. Our protocols include:</p>
        <ul class="content-list">
          <li>Non-disclosure agreements available upon request</li>
          <li>Data stored on encrypted internal servers</li>
          <li>Recovered files deleted after 7 days (unless otherwise arranged)</li>
          <li>Full internal access control in our lab</li>
        </ul>
        <p class="s-body">We never outsource your recovery or send your drive to third parties. Our vetted and trained professionals handle everything in-house at our Glendale facility.</p>
        <p class="s-body">Our commitment to data security goes beyond technical safeguards. We also follow strict chain-of-custody procedures to ensure your device is handled responsibly from intake to delivery. Every step of the recovery process is documented and monitored, providing you with peace of mind that your sensitive data is in trusted hands.</p>
      </div>
    </section>

    <!-- CONTACT BAND -->
    <section class="s-contact-band">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Contact Us for External Hard Drive Recovery</h2>
        </div>
        <div class="contact-body">
          <p class="contact-body-text">If you're experiencing data loss from an external hard drive, don't wait. Acting early gives you the best chance of recovering your data safely and completely.</p>
          <ul class="contact-bullets">
            <li>Visit our lab in Glendale, CA</li>
            <li>Mail your drive to us from anywhere in the U.S.</li>
            <li>Call us today for a free evaluation</li>
          </ul>
        </div>
        <NuxtLink to="/start-recovery" class="btn-start-recovery">Start Your Recovery</NuxtLink>
      </div>
    </section>

    <FooterBar />
  </div>
</template>

<style scoped>
*, *::before, *::after { box-sizing: border-box; }
.page-content { font-family: 'Inter', sans-serif; color: #1a1a2e; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 28px; }
.s-white { background: #fff; padding: 72px 0; }
.s-grey  { background: #f4f7fc; padding: 72px 0; }

.s-heading { font-size: clamp(1.5rem, 2.8vw, 2rem); font-weight: 900; color: #1a1a2e; line-height: 1.25; margin-bottom: 20px; }
.s-body { font-size: 0.95rem; color: #4a5568; line-height: 1.8; margin-bottom: 14px; }

.inline-link { color: #C9A84C; font-weight: 600; text-decoration: underline; }

/* Content list */
.content-list { list-style: none; padding: 0 0 0 20px; margin: 0 0 20px; display: flex; flex-direction: column; gap: 10px; }
.content-list li { font-size: 0.95rem; color: #4a5568; line-height: 1.65; position: relative; padding-left: 16px; }
.content-list li::before { content: '»'; color: #C9A84C; font-weight: 900; position: absolute; left: -4px; top: 0; }

/* Do/Don't grid */
.dos-donts-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 8px; }
.dont-card, .do-card { display: flex; align-items: flex-start; gap: 16px; background: #fff; border-radius: 12px; padding: 24px 22px; border: 1.5px solid #e2e6ee; }
.dont-card { border-left: 4px solid #e53935; }
.do-card { border-left: 4px solid #2e7d32; }
.dd-icon { width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1rem; font-weight: 900; flex-shrink: 0; }
.dd-icon.dont { background: #fce4e4; color: #e53935; }
.dd-icon.do { background: #e8f5e9; color: #2e7d32; }
.dd-title { font-size: 0.92rem; font-weight: 800; color: #1a1a2e; display: block; margin-bottom: 6px; }
.dd-body { font-size: 0.88rem; color: #4a5568; line-height: 1.6; margin: 0; }

/* Two-col layout */
.two-col-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
.rounded-img { width: 100%; height: auto; border-radius: 16px; display: block; object-fit: cover; }

/* Scenarios */
.scenarios-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 16px; }
.scenarios-list li { font-size: 0.95rem; color: #4a5568; line-height: 1.7; background: #fff; border-radius: 10px; padding: 20px 22px; border-left: 4px solid #C9A84C; }

/* Contact band */
.s-contact-band { background: #0a0c14; padding: 72px 0; }
.contact-banner-card { border: 1px solid rgba(201,168,76,0.3); border-radius: 8px; padding: 28px 32px; margin-bottom: 28px; }
.contact-banner-heading { font-size: clamp(1.4rem, 2.5vw, 1.9rem); font-weight: 900; color: #fff; margin: 0; }
.contact-body-text { font-size: 0.95rem; color: rgba(255,255,255,0.7); line-height: 1.75; margin-bottom: 16px; }
.contact-bullets { list-style: none; padding: 0; margin: 0 0 28px; display: flex; flex-direction: column; gap: 8px; }
.contact-bullets li { font-size: 0.93rem; color: rgba(255,255,255,0.65); display: flex; align-items: center; gap: 10px; }
.contact-bullets li::before { content: '✓'; color: #C9A84C; font-weight: 700; }
.btn-start-recovery { display: inline-block; background: #C9A84C; color: #1a1a1a; font-weight: 800; font-size: 1rem; padding: 16px 36px; border-radius: 6px; text-decoration: none; transition: background 0.2s; }
.btn-start-recovery:hover { background: #b8923e; }

@media (max-width: 768px) {
  .dos-donts-grid, .two-col-layout { grid-template-columns: 1fr; gap: 20px; }
}
</style>
