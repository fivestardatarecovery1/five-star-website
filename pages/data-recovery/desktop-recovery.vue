<script setup lang="ts">
useSeoMeta({
  title: 'Desktop Data Recovery — Five Star Data Recovery',
  description: 'When your desktop computer stops working or a drive goes missing, it can feel like everything is lost. Important documents, family photos, and business files mi'
})
const faqs = [
  { q: '1. Can you recover data from a desktop that no longer powers on?', a: 'Yes. If your desktop PC won’t turn on, we can safely extract the internal hard drive or SSD and attempt a full data recovery. Common causes include motherboard failure, PSU issues, or drive-level faults.' },
  { q: '2. Do you offer desktop data recovery for both HDDs and SSDs?', a: 'Absolutely. Whether your desktop has a traditional hard drive or a solid-state drive, we have the tools and expertise to recover data from all major desktop storage types.' },
  { q: '3. What if my desktop hard drive is making clicking or grinding noises?', a: 'A clicking desktop hard drive often indicates a mechanical failure. Do not continue powering it on. We offer cleanroom-based recovery solutions to salvage data from physically damaged drives.' },
  { q: '4. Can you recover deleted files from a desktop computer?', a: 'Yes, we provide deleted file recovery from desktop hard drives, as long as the data hasn’t been overwritten. This includes accidental deletion, formatted partitions, or emptied recycle bins.' },
  { q: '5. Do you offer desktop data recovery for Mac and Windows systems?', a: 'Yes. Our services support both Windows desktop recovery and macOS desktop recovery, including iMacs, Mac Minis, custom-built PCs, and branded desktops from Dell, HP, Lenovo, and more.' },
  { q: '6. What’s the turnaround time for desktop data recovery?', a: 'Most desktop data recovery cases are completed within 3–5 business days. For urgent cases, we offer Expedited and Expedited Plus services with priority turnaround options.' },
  { q: '7. Can you recover data from a desktop RAID setup?', a: 'Yes, we recover data from RAID-enabled desktop workstations, including RAID 0, 1, 5, or custom arrays commonly used in content creation or server-grade towers.' },
  { q: '8. Do you offer pickup or mail-in options for desktop data recovery?', a: 'Yes. We provide free local pickup in the Los Angeles area. We also offer nationwide data recovery mail-in service for desktop drives. Just fill out the form and we’ll provide a prepaid shipping label.' }
]
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="Desktop Data Recovery"
      subtitle="Get Your Data Back In No Time."
      description="When your desktop computer stops working or a drive goes missing, it can feel like everything is lost. Important documents, family photos, and business files might seem gone forever. But in many cases, your data can be recovered — even if the system won’t boot or the files were deleted."
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
          <h2 class="section-title">Common Reasons for Desktop Data Loss</h2>
        </div>
        <div class="section-body">
          <p>Many issues can lead to lost files on a desktop computer, including:</p>
          <ul class="content-list">
            <li>Accidental file deletion or emptying the recycle bin</li>
            <li>Corruption of the operating system after a failed update</li>
            <li>Crashes caused by power outages or hardware failure</li>
            <li>Lost partition due to formatting or bad sectors</li>
            <li>Damage to internal or external hard drives</li>
          </ul>
          <p>Sometimes, problems arise from user error. Other times, it's a mechanical or software issue. Whatever the cause, our job is to help recover your files — whether you need a single document or an entire drive’s contents.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Types of Desktop Systems and Drives We Recover</h2>
        </div>
        <div class="section-body">
          <p>We work with almost all desktop computer models, including:</p>
          <ul class="content-list">
            <li>Windows PCs (Dell, HP, Lenovo, custom builds)</li>
            <li>macOS desktops (iMac, Mac Pro)</li>
            <li>Linux-based workstations</li>
            <li>Internal HDD and SSD recovery</li>
            <li>External drives used with desktop computers</li>
          </ul>
          <p>We also recover data from USB drives, attached desktop hard drives, and file systems in Windows (NTFS, FAT32), macOS (APFS, HFS+), and Linux (ext3/ext4).</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Signs Your Desktop Needs Data Recovery</h2>
        </div>
        <div class="section-body">
          <p>You may need desktop data recovery services if:</p>
          <ul class="content-list">
            <li>The drive is not detected by your system</li>
            <li>The operating system crashes or won't load</li>
            <li>You hear clicking, buzzing, or grinding noises from the drive</li>
            <li>Files or folders are missing or won’t open</li>
            <li>You accidentally formatted the drive or deleted specific files</li>
            <li>You emptied the recycle bin before realizing important items were inside</li>
          </ul>
          <p>Even if your desktop seems completely dead, we may still be able to recover lost data.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">How File Systems Affect Recovery</h2>
        </div>
        <div class="section-body">
          <p>Your desktop’s data is stored using a file system. File systems determine how files are organized, stored, and accessed. When a drive becomes corrupted or formatted, the file system often breaks down. We recover data from all major file systems:</p>
          <ul class="content-list">
            <li>NTFS and FAT32 (Windows)</li>
            <li>APFS and HFS+ (macOS)</li>
            <li>EXT3/EXT4 (Linux)</li>
          </ul>
          <p>Understanding the file system helps us rebuild damaged directories and locate hidden or fragmented files. This is especially important when recovering lost files or specific files from formatted or failing drives.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Importance of File Types in Recovery</h2>
        </div>
        <div class="section-body">
          <p>When scanning your desktop drive, we look for specific file signatures that match known file types. This includes:</p>
          <ul class="content-list">
            <li>Microsoft Office documents (Word, Excel, PowerPoint)</li>
            <li>PDFs, images (JPG, PNG, RAW), and video formats (MOV, MP4, AVI)</li>
            <li>Email files, databases, and ZIP archives</li>
          </ul>
          <p>By identifying these patterns, we can recover data even when file names and folder structures are missing. This deep scan method is crucial when recovering file type data from deleted or damaged sectors.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Your Data Is Always Safe with Us</h2>
        </div>
        <div class="section-body">
          <p>We understand how important your data is — and how private it can be. Whether you’re recovering personal records, client files, or sensitive research, we handle everything securely and confidentially.</p>
          <ul class="content-list">
            <li>All recoveries are performed in-house</li>
            <li>No third-party labs or data transfers</li>
            <li>Final data is encrypted and stored temporarily until delivery</li>
            <li>Files are deleted from our systems after recovery is complete</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Desktop Data Recovery Process</h2>
        </div>
        <div class="section-body">
          <p>Our step-by-step process is built for safety and success:</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Free Diagnostic Evaluation</h2>
        </div>
        <div class="section-body">
          <p>We’ll evaluate your drive or computer to determine the type of failure.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Disk Imaging</h2>
        </div>
        <div class="section-body">
          <p>We make a full image (clone) of the drive to avoid further damage during recovery.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Recovery Attempt</h2>
        </div>
        <div class="section-body">
          <p>Using advanced tools, we scan the image for recoverable file types, lost folders, and deleted items. This includes support for lost partitions and formatted volumes.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">File Review</h2>
        </div>
        <div class="section-body">
          <p>We show you a preview list of recovered specific files, so you can confirm what we found.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Secure Delivery</h2>
        </div>
        <div class="section-body">
          <p>Once you approve the recovery, your data is copied to a new drive or USB drive and returned to you.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Logical vs. Physical Desktop Recovery</h2>
        </div>
        <div class="section-body">
          <p>Not all cases are the same. Some involve software-based issues, while others are caused by hardware damage.</p>
          <p>Logical Recovery</p>
          <ul class="content-list">
            <li>Deleted files or folders</li>
            <li>Recycle bin emptied by mistake</li>
            <li>Lost file systems or partitions</li>
          </ul>
          <p>Physical Recovery</p>
          <ul class="content-list">
            <li>Damaged hard drive heads or motor</li>
            <li>Broken or burnt connectors</li>
            <li>Clicking or grinding sounds</li>
          </ul>
          <p>If your drive is physically damaged, we use our cleanroom to repair the disk temporarily and create a safe image. From there, we can attempt full desktop hard drive data recovery.</p>
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
            <li>Experienced engineers with cleanroom facilities</li>
            <li>Flat-rate pricing with no hidden fees</li>
            <li>“No Data, No Charge” guarantee</li>
            <li>Secure, in-house data recovery only</li>
            <li>Same-day diagnostics and fast turnaround available</li>
          </ul>
          <p>We provide expert desktop data recovery with fast turnaround and honest, upfront pricing. You'll always know the data recovery cost before we begin—no hidden fees, no surprises.</p>
          <p>Our goal is always the same — to recover lost data quickly and safely.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Testimonials from Satisfied Clients</h2>
        </div>
        <div class="section-body">
          <p>“My desktop PC suddenly stopped booting, and I couldn’t access years of important files. Five Star Data Recovery quickly diagnosed the issue and recovered everything from my internal hard drive. Elen kept me updated throughout the process, and the turnaround time was better than I expected. Highly recommend them for desktop data recovery!”</p>
          <p>Lauren M.</p>
          <p>Glendale, CA</p>
          <p>“My Windows desktop crashed after a power surge, and I feared my project files were gone. Vahan personally took the time to explain what likely happened and walked me through the recovery options. They recovered almost 99% of my documents and photos. The flat-rate pricing and no hidden fees were a huge relief.”</p>
          <p>Chris B.</p>
          <p>Sacramento, CA</p>
          <p>“I had a Seagate hard drive inside my desktop that stopped spinning. I found Five Star Data Recovery online and decided to give them a shot. Alex worked on my case and was able to recover almost all of my data, even though the drive had mechanical damage. The clean room service was worth every penny.”</p>
          <p>Samantha H.</p>
          <p>Phoenix, AZ</p>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">We Offer Nationwide Desktop Recovery</h2>
        </div>
        <div class="section-body">
          <p>Located outside of Los Angeles? No problem. We offer free round-trip shipping for all desktop recovery jobs in the U.S. Simply start a case online and we’ll send you a prepaid shipping label to send in your desktop drive.</p>
          <p>Once we receive your device, diagnostics begin within 24 hours. Whether you're in California, New York, or Texas — we can help.</p>
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
          <h2 class="cta-title">Need Help With Desktop Data Recovery?</h2>
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
