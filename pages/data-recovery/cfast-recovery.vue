<script setup lang="ts">
useSeoMeta({
  title: 'CFast Data Recovery — Five Star Data Recovery',
  description: 'We’ve recovered data for video editors, producers, directors, and digital imaging technicians across Hollywood and beyond. Our clients include production studio'
})
const faqs = [
  { q: '1. Can you recover video files from a corrupted CFast card?', a: '“Yes. We specialize in recovering video files from corrupted CFast cards used in professional cameras like Blackmagic, Canon, and ARRI. Whether your CFast card won’t mount, shows errors, or displays as unreadable, our engineers have the tools and expertise to safely recover your footage.”' },
  { q: '2. I tried using data recovery software and now my recovered files show 0MB or won’t play. Can you still help?', a: 'Yes. This is a common issue after DIY recovery attempts. If your recovered video files show 0MB, won’t open, or appear corrupted, we can often perform professional video file repair. Even if the file structures were damaged by software like First Aid or CHKDSK, we’ll do our best to rebuild and repair the files for playback.' },
  { q: '3. My CFast card is showing missing or empty folders—can you recover the data?', a: 'Absolutely. If your CFast card shows missing folders, empty directories, or incomplete file lists, it could be due to logical corruption or file system errors. We can perform a full deep scan to locate and recover your missing video files and folders. Depending on the type of video files you have, if the recovered files are damaged or won’t play, we may also need to perform professional video file repair to restore them to a usable state.' },
  { q: '4. Can you repair damaged video files from a CFast card?', a: 'Yes. We offer professional video file repair services for footage that appears corrupt, incomplete, or won’t play after recovery. This includes working with a wide range of professional and complex video formats commonly used with CFast cards, such as ProRes, CinemaDNG, Blackmagic RAW (BRAW), Canon XF-AVC, REDCODE RAW (R3D), MXF, MOV, and MP4. Our engineers use specialized tools to rebuild damaged headers, repair broken file structures, and restore playability. We strongly recommend avoiding further DIY recovery attempts, as they can make repair more difficult or even impossible.' },
  { q: '5. What should I do immediately after noticing an issue with my CFast card?', a: 'Stop using the card right away. Remove it from your camera or card reader and avoid running any disk repair tools like First Aid or CHKDSK. Continued use or DIY repair attempts can make professional recovery much more difficult.' },
  { q: '6. Can you recover data from physically damaged CFast cards?', a: 'Yes. If your CFast card has physical issues like broken connectors, damaged pins, or water exposure, we can often repair the hardware enough to access the internal memory and recover your data.' },
  { q: '7. How long does CFast data recovery take?', a: 'Standard CFast data recovery usually takes 2–5 business days. For urgent projects or time-sensitive shoots, we offer Expedited and Expedited Plus service options for faster turnaround. If the card contains damaged or corrupted video files that require video file repair, the turnaround time may be significantly longer. Completion depends on the number of videos, file sizes, level of corruption, and video codec (e.g., ProRes, MXF, or RAW). In such cases, we’ll provide a time estimate after evaluating the files.' },
  { q: '8. What file types can you recover from a CFast card?', a: 'We recover a wide range of professional video and media file formats stored on CFast cards. This includes ProRes , CinemaDNG , Blackmagic RAW (BRAW) , Canon XF-AVC , REDCODE RAW (R3D) , MXF , MOV , MP4 , AVI , DNxHD , DNxHR , and XAVC formats. In addition to video files, we also recover RAW image files , JPEGs , WAV audio , project files , and other production data commonly saved on CFast media. If your file type isn’t listed, contact us—we likely support it too.' },
  { q: '9. What CFast card brands can you recover data from?', a: 'We recover data from all major CFast card brands, including SanDisk, Lexar, Delkin Devices, Angelbird, ProGrade Digital, Sony, Transcend, ADATA, Hoodman, and Wise Advanced. Whether you’re using CFast 2.0 cards for professional video production or earlier generation CFast models, our lab is equipped to handle recoveries from all manufacturers. Even if your CFast card brand isn’t listed here, we likely support it as well—just contact us for a free evaluation.' },
  { q: '10. How much does CFast Data Recovery Cost?', a: 'At Five Star Data Recovery, CFast card recovery is priced using our flat-rate structure with no hidden fees: $300.00 – For logical recovery (e.g., file system corruption, card not mounting), for cards up to 2TB $500.00 – For deleted file recovery. This includes a $200.00 non-refundable upfront fee, with the balance due only if recovery is successful $950.00 – For component-level recovery involving physical damage, failed controllers, or chip-off procedures In some cases, additional charges may apply if recovered video files are damaged or unplayable and require our advanced video file repair services. We’ll evaluate your card and provide a clear estimate before starting any work. All evaluations are free, and every recovery is handled in-house by our experienced engineers.' }
]
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="CFast Data Recovery"
      subtitle="Get Your Data Back In No Time."
      description="We’ve recovered data for video editors, producers, directors, and digital imaging technicians across Hollywood and beyond. Our clients include production studios, ad agencies, wedding videographers, and independent filmmakers. We understand that losing raw footage or production files can delay deadl"
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
          <h2 class="section-title">Common Issues with CFast Cards</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Accidental file deletion</li>
            <li>Formatted or reformatted CFast cards</li>
            <li>Corrupted file systems</li>
            <li>Card not recognized by camera or computer</li>
            <li>CFast card showing 0 bytes or RAW file system</li>
            <li>Physical damage or bent pins</li>
            <li>Video files that won’t open or are partially missing</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Types of CFast Cards We Recover From</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>CFast 2.0 cards (most commonly used in modern cinema cameras)</li>
            <li>Lexar CFast cards</li>
            <li>SanDisk Extreme Pro CFast cards</li>
            <li>Angelbird AV Pro CFast cards</li>
            <li>ProGrade Digital CFast 2.0</li>
            <li>Sony, Delkin, Wise Advanced, and other professional-grade cards</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What Not To Do If You Accidentally Format or Delete Files</h2>
        </div>
        <div class="section-body">
          <ol class="content-list">
            <li>Do not record new data onto the card.</li>
            <li>Do not run multiple types of recovery software.</li>
            <li>Do not attempt to repair the file system using system utilities.</li>
          </ol>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Expedited Services for Rush Projects</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Trusted by the Creative Industry</h2>
        </div>
        <div class="section-body">
          <p>We’ve recovered data for video editors, producers, directors, and digital imaging technicians across Hollywood and beyond. Our clients include production studios, ad agencies, wedding videographers, and independent filmmakers. We understand that losing raw footage or production files can delay deadlines and cost thousands. That’s why our data recovery services are designed with media professionals in mind — fast, secure, and confidential.</p>
          <p>Whether it's a failed CFast card, damaged SSD, or corrupted external drive, we provide reliable recovery solutions and deep experience with pro camera formats like ARRI, RED, and Blackmagic.</p>
          <p>When CFast card data is critical and irreplaceable, professionals trust Five Star Data Recovery. With our advanced tools we have the experience to handle sensitive video formats.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Get Help with Your CFast Card Now</h2>
        </div>
        <div class="section-body">
          <p>Whether you’re dealing with a corrupt CFast card, accidental deletion, or damaged media files, we’re here to help.</p>
          <p>We offer free diagnostics, transparent pricing, and fast results. Our team has extensive experience recovering data from high-end cameras and production media, making us the trusted choice for professionals.</p>
          <p>Don’t risk your files with generic software tools. Trust the experts in CFast card data recovery who understand the urgency and sensitivity of your work.</p>
          <p>Contact Five Star Data Recovery today and let us bring your media back to life. We’re available 24/7 by phone or email to answer any urgent questions or concerns — day or night, we’re here when you need us most.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Real-World Success Story</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Repaired Video Files After Software Recovery Failure</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Why DIY Data Recovery Tools Often Fail with CFast Cards</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>It may be tempting to use free or cheap data recovery software. However, these tools are usually made for general storage devices. This includes USB flash drives and basic SD cards.</li>
            <li>They lack the technical sophistication needed to handle professional-grade CFast card data—especially when it involves large video files or non-standard file systems used in high-end cameras.</li>
          </ul>
          <ul class="content-list">
            <li>Many software programs do not handle fragmented file structures well.</li>
            <li>They also often misread special video formats. These formats include CinemaDNG, REDCODE RAW, and Canon XF-AVC. As a result, even if the software “recovers” the files, the output is often incomplete, glitchy, or completely unreadable.</li>
            <li>We've seen cases where clients used DIY tools that rewrote portions of the card's file table—making a proper recovery far more difficult. Others created cloned images incorrectly, omitting key metadata needed to rebuild the footage. Sadly, in some cases, this good-intentioned testing has permanently erased important parts of the CFast card data.</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our CFast Card Data Recovery Process</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Clone the Original Drive</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Scan for Lost Data</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Extract and Test Files</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Repair Damaged Files (If Needed)</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Testimonials from Satisfied Clients</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">We Also Repair Damaged Video Files</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Request a Free Quote!</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Nationwide Service with Free Round-Trip Shipping</h2>
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
          <h2 class="cta-title">Need Help With CFast Data Recovery?</h2>
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
