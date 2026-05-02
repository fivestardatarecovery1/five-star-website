<script setup lang="ts">
useSeoMeta({
  title: 'Video File Repair Services — Five Star Data Recovery',
  description: 'At Five Star Data Recovery, we specialize in video file repair for customers facing the nightmare of corrupted, damaged, or unplayable video footage. Whether yo'
})
const faqs = [
  { q: '1. What causes video files to become damaged or corrupted?', a: 'Video files can be damaged due to sudden power loss, system crashes, incomplete transfers, storage failure, or issues with the recording device. File header corruption, missing metadata, and interrupted write processes are all common culprits.' },
  { q: '2. What should I do if my video files are corrupted?', a: 'If your video files are corrupted, the most important first step is to avoid working directly on the original device. Instead, you should perform a sector-level clone of the entire storage device (hard drive, SD card, SSD, CFast, RAID etc.) where the damaged video files were stored. This creates an exact bit-by-bit copy of the device, preserving the original data in its current state. Once the cloning is complete, all repair or recovery attempts should be done on the cloned copy—not the original. Attempting to repair or recover corrupted video files directly from the original device is risky and strongly discouraged. If the repair process goes wrong or further damages the files, you may permanently lose the only intact copy of the data. In many cases, once a file is overwritten or altered improperly, there’s no way to reverse the damage. In short: Clone first, using sector-level imaging tools. Only work from the clone. Preserve the original device as-is, in case future techniques or attempts are needed. This approach maximizes your chances of successful video file repair without risking irreversible data loss.' },
  { q: '3. Can my video files still be repaired if I’ve already used First Aid (Mac) or CHKDSK (Windows)?', a: 'Yes, in many cases we can still repair your video files even after First Aid (on Mac) or CHKDSK (on Windows) has been run. However, the outcome depends on what those utilities did to the file system and data on a sector level. First Aid (Disk Utility – Mac):If you’ve only run First Aid, the chances of successful video repair are still relatively high. First Aid attempts to repair the file system structure but typically doesn’t modify file content. That said, we strongly advise against running any Terminal commands afterward, as they may alter the structure or overwrite damaged data. CHKDSK (Windows):CHKDSK is more aggressive. While it aims to fix file system issues, it can sometimes relocate, truncate, or zero out sectors it deems “bad.” In doing so, it may overwrite the very video data we’re trying to recover. The longer CHKDSK was allowed to run—or if it completed its process—the slimmer the chances of a full repair. In some cases, it may have permanently wiped or corrupted key file structures. If you’ve already run either tool, stop all further attempts and bring the drive to us for an evaluation. The sooner we get access to the unmodified state of the drive (or a clone of it), the higher the likelihood we can recover or repair your video files successfully.' },
  { q: '4. Can you recover and repair videos from a RAID or NAS system?', a: 'Yes, we can recover and repair video files stored on RAID or NAS systems—but it’s a multi-step and highly technical process that goes beyond standard file repair. Before any repair can begin, we must first safely image (clone) each individual drive in the array. This ensures the original drives remain untouched, preserving the data in its current state. Once all drives have been cloned, we then perform a virtual RAID reconstruction, carefully reassembling the original RAID configuration using the cloned images. After the RAID is rebuilt and verified, we scan the entire array at a sector level to locate the fragmented or damaged video files. This deep scan helps us extract critical structural metadata—such as frame indices, codec markers, timestamps, and stream headers—that are essential for a successful repair. Only once this groundwork is complete do we proceed with the actual video file repair process, using specialized tools and manual techniques to rebuild playable versions of the corrupted videos. Whether you’re dealing with RAID 0, 5, 6, 10, or a custom NAS setup, our engineers are equipped to handle the complexities involved in both RAID recovery and professional video repair.' },
  { q: '5. Video files on my RAID are starting to show 0MB capacity—what’s going on?', a: 'When video files on a RAID or NAS system begin showing 0MB in size, it’s usually a sign of file system corruption, metadata damage, or issues with the RAID’s integrity. In many cases, the actual video data still exists on the drives, but the system can no longer locate or interpret the file correctly—causing it to appear as an empty (0MB) file. This problem can stem from: A degraded or partially failed RAID array Improper RAID rebuilds or drive replacements Power failures or unclean shutdowns Software or file system corruption In RAID environments, especially RAID 5, 6, or 10, a failed or out-of-sync drive can result in inconsistent or incomplete file references across the volume. The files may still contain usable video data, but without proper metadata and indexing, the operating system can’t interpret them correctly. The worst thing you can do at this point is to continue using or troubleshooting the system without proper handling—especially avoiding CHKDSK, disk repair tools, or file recovery software that writes to the array. At our lab, we first clone each RAID member at the sector level, then virtually rebuild the RAID array from the cloned drives. After that, we scan for the original video files and their internal structure. Even if a file shows 0MB, we may be able to extract the raw video data and rebuild it into a playable file. If you’re seeing 0MB files on your RAID, stop using it immediately and contact a professional recovery service. Early action gives you the best chance of saving your footage.' },
  { q: '6. Can you repair professional camera video files like ARRI or RED footage?', a: 'Absolutely. We frequently repair high-bitrate professional footage from ARRI, RED, Canon C-series, Sony FS, and Blackmagic cameras. These formats often contain complex metadata that must be reconstructed accurately for successful playback.' },
  { q: '7. What types of video files can you repair?', a: 'We repair a wide variety of video formats, including but not limited to: .mov, .mp4, .mxf, .avi, .mts, .m2ts, .r3d, and .braw. We also support professional video formats from cameras like ARRI, RED, Sony, Canon, and Blackmagic.' },
  { q: '8. Do you offer repair services for partially recovered or fragmented video files?', a: 'Yes, we specialize in repairing fragmented, incomplete, or partially recovered video files—especially those extracted during data recovery processes. These types of files typically lack proper headers, index structures, or continuity, and require deep analysis and manual reconstruction to restore them to a playable state. However, to achieve the best possible results, we strongly prefer to work with the original storage device the video was last known to be working on. Providing only the damaged or incomplete recovered file limits our ability to locate the necessary metadata, frame structure, and reference points essential for a proper repair. Having access to the original media gives us the highest likelihood of a successful and complete reconstruction.' },
  { q: '9. Can you recover deleted video files and repair them?', a: 'In some cases, yes. If the deleted video files are still intact on the drive and have not been overwritten, we may be able to recover them and evaluate whether they are repairable. However, it’s important to understand that deleted file recovery is highly situational and not guaranteed. One major factor is whether the storage device has TRIM enabled (common with SSDs and modern macOS or Windows systems). When TRIM is active, it can immediately wipe the sectors where the deleted files were stored, making recovery impossible—even with advanced forensic tools. Because of this uncertainty, deleted file recovery is not covered under our “No Data, No Charge” policy. If we’re able to locate and recover the deleted file, we can then proceed with assessing its condition for repair. But if TRIM or other system-level processes have erased the necessary data, recovery will not be feasible. For the best chance of recovery: Stop using the device immediately after deletion Avoid running software that writes to the drive (like photo/video apps or system updates) Contact a professional service before attempting any DIY recovery' },
  { q: '10. Can you combine multiple file fragments into a single working video?', a: 'Yes, we can. If your video footage was split into multiple segments—whether due to corruption, interrupted recording, or an incomplete recovery—we can often reconstruct the original video by analyzing and stitching the fragments back together. This is actually a very common issue, especially with complex or proprietary video codecs such as those used in professional cameras (e.g., ProRes, MXF, RED, or ARRI formats). These file types often rely on internal structures like GOP sequences, metadata tables, and codec-specific headers, which must be carefully reassembled to form a playable video. The success of this process depends on: The condition and completeness of the fragments The amount of missing or overwritten metadata The type of codec and camera model involved Our repair process includes deep analysis of each segment’s frame structure and timing, allowing us to manually re-link sequences and generate a functional video file. In many cases, even when players can’t recognize the fragments, we can still reconstruct a usable version.' },
  { q: '11. How long does video file repair usually take?', a: 'Video file repair timelines can vary significantly based on file size, codec complexity, and the extent of corruption. For smaller drives—such as external hard drives up to 2TB in size—repairs are often completed within 3 to 5 business days. However, this depends heavily on how damaged the files are and whether additional manual reconstruction is needed. Larger systems, such as multi-drive RAID arrays (e.g., 72TB NAS setups) containing massive video files, require much more time. These cases involve cloning each drive, rebuilding the RAID, scanning terabytes of data, and deeply analyzing file structures—so the turnaround can be considerably longer. If you’re working on a tight production schedule or deadline, we highly recommend our Expedited Plus service. This premium option gives your case top priority, runs recovery efforts 24/7/365, and assigns a dedicated engineer to your project. You’ll also have direct communication with the engineer throughout the process for updates and technical discussions. Whether your case is urgent or complex, we’re equipped to handle it—just let us know your timeframe, and we’ll tailor the service accordingly.' },
  { q: '12. How much does video file repair cost?', a: 'Video file repair pricing varies depending on the number of files, their length, codec type, and the severity of the corruption. Each case is unique, and costs are calculated based on the actual effort required to restore the files to a playable condition. To provide a fair and accurate quote, here’s how our quoting process works: We’ll begin by attempting to repair just one of the video files from your device. Once we successfully repair that sample file, we’ll use the information gathered from that process to estimate the time and complexity involved in repairing the rest of the files. Based on that, we’ll provide you with a detailed quote for completing the full repair. If you approve the quote, you’ll be asked to pay a refundable deposit, and we’ll continue working on repairing the remaining files. The full balance is only due after we’ve successfully repaired all the video files as quoted. There are only two scenarios where an upfront, non-refundable fee may apply: Deleted file recovery required before repair – If the video files were deleted and need to be recovered first, that recovery portion will require a non-refundable, upfront fee, as deleted file recovery is not covered under our “No Data, No Charge” policy. The video repair portion will still follow the success-based model. Expedited Plus Service – If you’re on a tight deadline and need your case prioritized, our Expedited Plus service is available. It includes 24/7/365 continuous work, a dedicated engineer, and requires a non-refundable, upfront fee. Outside of these exceptions, you won’t pay anything unless we successfully repair your video files.' },
  { q: '13. Do you charge a fee if the video files cannot be repaired?', a: 'No—we do not charge anything for video file repair unless we’re successful in repairing the damaged files. Our evaluation process is completely free, and if we determine that the files are beyond repair, you won’t owe anything for the repair portion of the case. There are only two scenarios where an upfront fee may apply: Deleted file recovery – If the video files were deleted and need to be recovered before they can be repaired, a non-refundable upfront fee will apply for the deleted file recovery process. This is due to the nature and complexity of deleted file recovery and is separate from the video repair fee. Expedited Plus service – If you choose to rush the case using our Expedited Plus option, which includes 24/7 work and a dedicated engineer, this service also requires a non-refundable upfront payment. Other than these exceptions, you will never pay anything unless we are able to successfully repair your video files.' },
  { q: '14. Will I be able to preview the repaired video files before final delivery?', a: 'Yes, absolutely. Once we’ve completed the repair process, you’ll have the opportunity to review the repaired video files before finalizing your case. You can do this either in person at our office or remotely, whichever is more convenient for you. While our system provides 100% accurate validation of file integrity and playability, we understand how important it is for you to personally verify the results—especially with valuable production footage. You’re welcome to test the files and ensure everything meets your expectations before completing payment or delivery arrangements.' },
  { q: '15. Do you charge a fee if the video files cannot be repaired?', a: 'No—we do not charge anything for video file repair unless we’re successful in repairing the damaged files. Our evaluation process is completely free, and if we determine that the files are beyond repair, you won’t owe anything for the repair portion of the case. There are only two scenarios where an upfront fee may apply: Deleted file recovery – If the video files were deleted and need to be recovered before they can be repaired, a non-refundable upfront fee will apply for the deleted file recovery process. This is due to the nature and complexity of deleted file recovery and is separate from the video repair fee. Expedited Plus service – If you choose to rush the case using our Expedited Plus option, which includes 24/7 work and a dedicated engineer, this service also requires a non-refundable upfront payment. Other than these exceptions, you will never pay anything unless we are able to successfully repair your video files.' }
]
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="Video File Repair Services"
      subtitle="Fix Corrupted &amp; Damaged Video Files"
      description="At Five Star Data Recovery, we specialize in video file repair for customers facing the nightmare of corrupted, damaged, or unplayable video footage. Whether you're a video production company, content creator, or an individual with precious memories on a damaged file, our team has the tools, experti"
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
          <h2 class="section-title">Why Do Video Files Get Corrupted?</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Power failures during recording or file transfer</li>
            <li>Camera or device crashes</li>
            <li>Improper ejection of external drives or SD cards</li>
            <li>File system corruption on the storage device</li>
            <li>Bad sectors or read errors on hard drives, SSDs, and external RAID systems</li>
            <li>Incomplete file saving due to interrupted recording sessions</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Common Video Formats We Repair:</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>.MP4</li>
            <li>.MOV</li>
            <li>.MXF</li>
            <li>.AVI</li>
            <li>.MTS / .M2TS</li>
            <li>.R3D (RED RAW)</li>
            <li>.BRAW (Blackmagic RAW)</li>
            <li>.ProRes</li>
            <li>.DNxHD / DNxHR</li>
            <li>.XAVC-S / XAVC-I</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Professional Camera Files We Work With:</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>ARRI ALEXA Series</li>
            <li>RED DSMC2 / KOMODO / V-RAPTOR</li>
            <li>Blackmagic URSA Mini Pro / Pocket Cinema 6K/12K</li>
            <li>Canon EOS C-Series (C200, C300, C500)</li>
            <li>Sony FS5, FS7, FX3, FX6, FX9, Venice</li>
            <li>Panasonic GH5 / EVA1 / Varicam</li>
            <li>DJI Drones</li>
            <li>GoPro Hero Series</li>
            <li>and more...</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Video Codecs we Specialize in Repairing:</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>ARRIRAW, ProRes 4444 XQ</li>
            <li>REDCODE RAW (R3D)</li>
            <li>Blackmagic RAW (BRAW), ProRes</li>
            <li>Canon XF-AVC, Cinema RAW Light</li>
            <li>XAVC-I, XAVC-L, RAW via SDI</li>
            <li>AVC-Intra, ProRes RAW</li>
            <li>XDCAM</li>
            <li>DNxHD / DNxHR</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Proven Video File Repair Process</h2>
        </div>
        <div class="section-body">
          <p>When you need video file repair, it’s not just about fixing a single file—you’re trusting us with your entire storage device to ensure the highest chance of success.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Full Drive Imaging and Cloning</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Deep Scan for Damaged and Fragmented Files</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">File Structure Analysis</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Video File Integrity Repair</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Quality Validation</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Secure Data Delivery</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Video File Repair Case Study</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Introduction to Case:</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">The Problem:</h2>
        </div>
        <div class="section-body">
          <p>When the production team attempted to access their footage, every video file displayed as 0 bytes, and none of the critical shoot footage could be played or opened.</p>
          <p>To make matters worse, additional files continued to drop to 0 bytes in real time, indicating an escalating issue with the RAID system. Recognizing the potential for further data loss, the client made the smart decision to immediately power down the unit to prevent any additional damage.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Solution:</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">The Result:</h2>
        </div>
        <div class="section-body">
          <p>We successfully repaired all critical video files, maintaining their original quality, resolution, and file structure. Every clip was restored, allowing the production team to move forward without any delays or loss of footage.</p>
          <p>The client was able to meet their delivery deadline without needing a reshoot. This case further reinforced our reputation as a go-to solution for complex video file repair and high-capacity RAID recovery.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Why Choose Five Star Data Recovery for Video File Repair?</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Industry-Leading Tools</li>
            <li>In-House Engineering Team</li>
            <li>Experience Across Multiple Codecs</li>
            <li>Over 10+ Years Experience in Video File Repair</li>
            <li>No Data, No Charge (Most Cases)</li>
            <li>Expedited Plus Service available for Rush Cases</li>
            <li>Dedicated Engineer for your case!</li>
            <li>99% Success Rate</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What Our Clients Say</h2>
        </div>
        <div class="section-body">
          <p>“I thought I had lost all the footage from my sister’s wedding after the memory card got corrupted. Five Star Data Recovery not only recovered the files, but they repaired the video so it actually played without glitches. Total lifesavers!”</p>
          <p>“We needed to repair several security camera files that wouldn’t open after a power outage. These guys knew exactly what to do. The turnaround time was fast and they kept everything private—very professional.”</p>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Corrupted Video Files? We’ll Fix Them — Fast and Secure.</h2>
        </div>
        <div class="section-body">
          <p>Whether it's surveillance footage, wedding videos, or professional film files, our team specializes in repairing damaged, unplayable, or corrupted video files—quickly and discreetly.</p>
          <ul class="content-list">
            <li>100% in-house video repair — no third-party labs</li>
            <li>Recovered videos are securely stored and deleted after delivery</li>
            <li>NDAs available for confidential or high-profile projects</li>
            <li>Lab is secured with 24/7 surveillance and restricted access</li>
          </ul>
          <p>No matter how critical the footage, we treat every recovery with the highest level of care and discretion. Contact us today to get your video files back.</p>
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
          <h2 class="section-title">Start Your Professional Video File Repair Now!</h2>
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
          <h2 class="cta-title">Need Help With Video File Repair Services?</h2>
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
