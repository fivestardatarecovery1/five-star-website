<script setup lang="ts">
useSeoMeta({
  title: 'Hard Drive Not Showing Up? — Five Star Data Recovery',
  description: 'A hard drive that suddenly disappears from your computer is frustrating—and scary if you think you’ve lost important files. Whether it’s an internal or external'
})
const faqs = [
  { q: '1. Can a failed hard drive PCB cause the drive to not show up?', a: 'Yes. A failed printed circuit board (PCB) is a common cause of a hard drive not being recognized. PCB failures can result from power surges or electrical shorts and typically require component-level repair or replacement to restore functionality.' },
  { q: '2. Does firmware corruption cause hard drives to disappear from the system?', a: 'Yes. Firmware corruption can prevent the drive from initializing correctly, making it invisible to both the BIOS and the operating system. Specialized tools and professional recovery labs are required to fix firmware issues safely.' },
  { q: '3. Will a hard drive not showing up on one computer still work on another?', a: 'Possibly. Sometimes the issue lies with the original computer’s USB port, SATA port, or power supply. Testing the drive on a different system can help rule out host-side problems—but if the drive still doesn’t show up, it likely needs professional evaluation.' },
  { q: '4. Can file system corruption prevent my hard drive from showing up?', a: 'Yes. Severe file system corruption can make the drive appear unallocated, raw, or invisible in the OS. In such cases, data recovery software or professional services may be required to extract the data without making things worse.' },
  { q: '5. Is it safe to run CHKDSK or Disk Utility First Aid on a drive that isn’t showing up?', a: 'No. Running CHKDSK (on Windows) or First Aid (on Mac) on an unstable or failing drive can cause further corruption or permanent data loss. These tools attempt to repair file system errors, but in doing so, they can overwrite damaged sectors or delete critical file structures. This can make the data unrecoverable—even by professional data recovery labs. If your drive isn’t showing up, it’s best to avoid any repair utilities and contact a recovery expert first.' },
  { q: '6. Can a damaged USB enclosure prevent an external hard drive from being detected?', a: 'Absolutely. In many external drives, the USB-to-SATA bridge board inside the enclosure can fail. Removing the drive from the enclosure and connecting it directly via SATA can help determine if the issue is with the enclosure or the drive itself. However, if your external drive is a Western Digital, SanDisk, or G-Drive, do not attempt to remove it from the enclosure yourself. Many of these drives have the USB 3.0 connector permanently soldered directly onto the drive’s PCB, and they often include built-in hardware encryption that is tied to that specific board. Damaging the board during removal can make data recovery impossible, as the encryption keys are stored on the original PCB. Always consult a professional data recovery service first.' },
  { q: '7. How do I know if my hard drive not showing up is due to physical damage?', a: 'Common signs of physical damage include clicking, buzzing, grinding sounds, or the drive remaining completely silent. If your drive shows any of these symptoms, stop all DIY attempts and contact a professional data recovery lab.' },
  { q: '8. Can overheating cause a hard drive to stop showing up?', a: 'Yes. Prolonged exposure to high temperatures can damage the internal components of a hard drive, leading to immediate failure or intermittent recognition issues.' },
  { q: '9. What’s the difference between a hard drive not showing up in BIOS vs. not showing up in Windows?', a: 'If the drive doesn’t show in BIOS, it suggests a hardware-level issue (such as PCB failure or firmware corruption). If the drive shows in BIOS but not in Windows, it’s often a file system issue, driver problem, or logical failure.' },
  { q: '10. Can bad sectors prevent my hard drive from being recognized at all?', a: 'Yes. Severe bad sector damage can make the drive unresponsive or prevent it from mounting. In these cases, sector-by-sector imaging tools used by professional data recovery engineers are often the safest recovery option.' }
]
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="Hard Drive Not Showing Up?"
      subtitle="Get Your Data Back In No Time."
      description="A hard drive that suddenly disappears from your computer is frustrating—and scary if you think you’ve lost important files. Whether it’s an internal or external hard drive, the issue can happen on both Windows and macOS. If your hard drive is not showing up, don’t panic. There are safe steps you can"
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
          <h2 class="section-title">Why Your Hard Drive Isn’t Showing Up</h2>
        </div>
        <div class="section-body">
          <p>Several reasons exist why a hard drive might not appear on your computer. Sometimes it's a minor connection issue. Other times, it could point to physical damage or corruption inside the drive. Understanding what might be happening helps you know what to try—and what to leave alone.Common causes include:</p>
          <ul class="content-list">
            <li>Loose or faulty USB port</li>
            <li>A damaged file system</li>
            <li>Power issues or bad cables</li>
            <li>Errors with the operating system</li>
            <li>Mechanical failure inside the drive</li>
          </ul>
          <p>Whether it’s a desktop drive, portable external disk, or flash drive, the symptoms are similar. It powers on—or maybe it doesn’t—but your system can’t detect it.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Windows and macOS: Same Problem, Different Fixes</h2>
        </div>
        <div class="section-body">
          <p>If your hard drive is not showing up on Mac, start by opening Disk Utility. The drive may appear there but not mount properly. Sometimes the mac not recognizing the drive in Finder doesn’t mean it’s completely gone.</p>
          <p>On Windows, open Device Manager and look under disk drives. You can also check System Information and Disk Management. If your Windows device doesn’t list the drive anywhere, it’s likely a hardware failure or file system issue.</p>
          <p>It’s a common situation—your hard drive does not show up, even though it worked yesterday.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Safe Troubleshooting You Can Try</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>You can rule out simple problems with a few safe checks:1. Check the cables and portsTry a new USB cable and a different USB port. Cables fail more often than you might expect.2. Try a different computerSee if the drive shows up on another system to rule out device-specific issues.3. Restart and check settingsA reboot can reset system detection. Also, open your system settings to ensure the drive hasn’t been disabled.4. Look in system toolsOn Mac: Open Disk UtilityOn Windows: Use Device Manager, Disk Management, or System InformationIf your drive is there but shows up as “RAW” or unallocated, that indicates file system corruption.</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Windows and macOS: Same Problem, Different Fixes</h2>
        </div>
        <div class="section-body">
          <p>If your hard drive is not showing up on Mac, start by opening Disk Utility. The drive may appear there but not mount properly. Sometimes the mac not recognizing the drive in Finder doesn’t mean it’s completely gone.</p>
          <p>On Windows, open Device Manager and look under disk drives. You can also check System Information and Disk Management. If your Windows device doesn’t list the drive anywhere, it’s likely a hardware failure or file system issue.</p>
          <p>It’s a common situation—your hard drive does not show up, even though it worked yesterday.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What You Should Not Do</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Clicking "format" or click erase when prompted</li>
            <li>Running recovery software without checking for physical issues</li>
            <li>Constantly unplugging and replugging the drive into different ports</li>
            <li>Attempting to rebuild a partition on an unstable drive</li>
          </ul>
          <p>If your goal is fixing the hard drive and saving your files, these DIY steps can do the opposite. Drives with mechanical problems should only be opened in a cleanroom. Each time you power them on, you risk damaging your data more.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Why First Aid and CHKDSK Can Make Things Worse</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">First Aid on Mac: Risky for Failing Drives</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">CHKDSK on Windows: Can Delete Your Data</h2>
        </div>
        <div class="section-body">
          <p>CHKDSK helps users find and fix errors on Windows computers, but it does not address failing hardware. It often deletes file pointers that it considers broken, which can wipe out your actual files.</p>
          <p>If your external storage device is failing, CHKDSK may overwrite valuable data while trying to mark bad sectors.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What Makes a Drive “Unrecognizable”?</h2>
        </div>
        <div class="section-body">
          <p>A logical failure occurs when the structure of your data is damaged. This might includecorruption in the file system, missing partitions, or a drive that appears unallocated. In these cases, the computer might still “see” the drive, but it can’t understand what’s on it</p>
          <p>A physical failure means something is wrong with the internal hardware. That might be a damaged read/write head, a failed motor, or an issue with the drive’s circuit board. These problems often show up as clicking, grinding, or beeping sounds.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Understanding File System Corruption</h2>
        </div>
        <div class="section-body">
          <p>The file system acts like a map—it tells your computer how to find and access your files. When the file system gets damaged, your files might still remain on the drive, but your computer no longer knows where to find them.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Real-World Recovery Examples</h2>
        </div>
        <div class="section-body">
          <p>Here are a few real cases we’ve handled that started with a hard drive not being recognized:</p>
          <ul class="content-list">
            <li>A photographer dropped a portable external drive while traveling. It didn’t appear on their MacBook afterward. We diagnosed internal head damage and performed a cleanroom recovery to restore over 10,000 RAW image files.</li>
            <li>A college student’s Windows laptop wouldn’t boot, and their external backup didn’t appear in File Explorer. We found file system corruption and safely recovered their documents and semester projects.</li>
            <li>A business client brought in a flash-based external storage unit that failed after a system update. The device wouldn’t mount, but we imaged the drive and recovered customer records that we would have permanently lost.</li>
          </ul>
          <p>Even with good habits, failure can still happen—but early detection and fast action can prevent permanent data loss.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">When to Call a Recovery Expert</h2>
        </div>
        <div class="section-body">
          <p>If your hard drive not showing up mac or Windows continues after basic checks, it’s time to contact a pro. Don’t keep experimenting—especially if the drive makes noises or clicks. That’s a sign of physical failure.At Five Star Data Recovery, we specialize in safe recoveries from:</p>
          <ul class="content-list">
            <li>Drives with corrupted or unreadable partitions</li>
            <li>Damaged storage media devices (internal or external)</li>
            <li>Accidentally formatted or deleted drives</li>
            <li>Broken USB ports or failed connection issues</li>
          </ul>
          <p>We recover data from HDDs, SSDs, and flash devices of all brands. We will return the recovered files on a new drive or through secure transfer.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Testimonials from Satisfied Clients</h2>
        </div>
        <div class="section-body">
          <p>“My external hard drive suddenly stopped showing up on my computer, and I couldn’t access any of my files. I contacted Five Star Data Recovery and spoke with Elen, who explained the process clearly and helped me get the drive checked in. Within a few days, they recovered all of my photos and business documents. Their service was fast, professional, and affordable.”</p>
          <p>Brian K.</p>
          <p>Los Angeles, CA</p>
          <p>“My hard drive wasn’t showing up in Disk Management, and I thought my data was gone for good. Five Star Data Recovery was able to diagnose the problem and recover 99% of my files. Their flat-rate pricing and No Data, No Charge policy gave me peace of mind. I’m so glad I found them!”</p>
          <p>Melissa R.</p>
          <p>San Diego, CA</p>
          <p>“I had a Seagate external hard drive that just stopped appearing on my Mac. Vahan personally reviewed my case and explained that the issue was with the drive’s internal firmware. They recovered everything within a week. The communication and updates were top-notch.”</p>
          <p>Henry T</p>
          <p>Summerlin, NV</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What to Expect From Us</h2>
        </div>
        <div class="section-body">
          <p>Once you submit your quote request, our team will review the details you provide and respond with an accurate, initial price estimate based on your device type and symptoms. Once we receive your actual device, our engineers will perform a full diagnostic to confirm the issue and finalize your quote—always staying within the same pricing tier unless the issue turns out to be different than described.</p>
          <p>You’ll also receive a clear turnaround estimate, so you know what to expect. For many standard cases, we’re able to recover and return your data within just a few days.</p>
          <p>All recovery work is performed 100% in-house at our Glendale, CA lab, ensuring your data stays private, secure, and never outsourced. Whether you’re dropping off locally or using our nationwide mail-in service, you’ll receive fast communication and professional care.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Request a Free Quote</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Let’s RecoverYour Files</h2>
        </div>
        <div class="section-body">
          <p>If your hard drive is not showing up, stop troubleshooting on your own. One wrong click can make things worse. Let Five Star Data Recovery handle it with care.</p>
          <ul class="content-list">
            <li>Visit us in person or mail in your drive</li>
            <li>Call now for a free evaluation</li>
            <li>Safe. Fast. Professional recovery every step of the wa</li>
          </ul>
          <p>When your hard drive disappears, your data isn’t necessarily gone. Let’s bring it back—safely and securely.</p>
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
          <h2 class="cta-title">Need Help With Hard Drive Not Showing Up??</h2>
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
