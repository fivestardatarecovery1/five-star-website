<script setup lang="ts">
useSeoMeta({
  title: 'SD Card Recovery — Five Star Data Recovery',
  description: 'Not all physical damage to SD cards is the same. In some cases—such as broken connectors or minor board damage—recovery may be possible using advanced micro sol'
})
const faqs = [
  { q: '1. How much does SD card data recovery cost?', a: 'At Five Star Data Recovery, SD card recovery is priced based on the type of failure and the method required to retrieve the data. Here’s a breakdown of our standard pricing: 1. Logical Data Recovery – $300.00 This applies to SD cards that are physically intact but are no longer recognized properly by your device or computer. Common symptoms include: “Card needs to be formatted” errors File system corruption The card mounts but shows no files Read errors during access In these cases, we use specialized tools to safely extract your files without altering or damaging the card. This is the most common and straightforward recovery scenario. 2. Chip-Off or Monolith Recovery – $950.00 This applies when the SD card has physical damage or internal faults that prevent any software-based recovery. These are complex recoveries that require: Desoldering the memory chip from the card (chip-off), or Microscopic pinout mapping and direct readout (monolith recovery) These methods are used when the SD card has broken connectors, internal short circuits, water damage, or is completely unresponsive. They require advanced equipment and highly skilled engineering. 3. Deleted File Recovery – $500.00 If the SD card was formatted or you accidentally deleted files, the cost is $500.00. This includes a $200.00 non-refundable labor fee, paid upfront. The remaining $300.00 is only paid if we successfully recover the deleted files and you approve the results. Deleted file recovery is more complex because deleted data may be partially overwritten, and the card’s internal file structure must be carefully rebuilt. 4. Video File Repair (Optional Add-On) In rare cases, recovered video files may be damaged or corrupted and require repair. We offer a specialized video file repair service in these situations. This is quoted separately, after evaluation. Fees depend on file types, damage level, and number of corrupted clips. Video repair is in addition to the data recovery cost. Transparent Pricing, No Surprises All SD card recoveries start with a free evaluation, and our pricing is flat rate — no hidden fees. You’ll always be informed of the total cost before we begin, and you only pay if recovery is successful (except for deleted file cases with the $200 labor fee).' },
  { q: '2. How long does SD card data recovery take?', a: 'Most standard SD card recoveries are completed within 3–5 business days, depending on the severity of the issue. For urgent cases, we also offer Expedited and Expedited Plus service options for faster turnaround.' },
  { q: '3. What file types can you recover from an SD card?', a: 'We commonly recover photos (JPG, RAW, PNG), videos (MP4, MOV, AVI), documents, and other media files from SD cards. If your card was used in a camera or mobile device, there’s a high chance we can retrieve your images and video files.' },
  { q: '4. Do you recover data from microSD cards as well?', a: 'Absolutely. We recover data from standard SD cards, microSD cards, and miniSD cards, including all major brands like SanDisk, Samsung, Lexar, and Kingston.' },
  { q: '5. What types of devices do you recover SD cards from?', a: 'We recover SD cards used in digital cameras, smartphones, drones, GoPros, dash cams, and other portable devices . No matter where the SD card was used, we can assess and recover the data.' },
  { q: '6. Can you recover data from physically broken SD cards?', a: 'It depends on the type of physical damage. If the SD card is cracked—even slightly—data recovery is not possible, as the internal memory chip is almost always destroyed. However, if the damage is limited to broken connector pins or minor board issues (without cracking the chip), we may be able to recover the data using advanced chip-off techniques. Each case is evaluated carefully to determine if the memory chip is still intact and readable.' },
  { q: '7. Is it safe to run recovery software on a failing SD card?', a: 'If your SD card shows signs of physical failure (like not mounting, not being recognized, or showing corrupted file structures), it’s best not to run recovery software. DIY software attempts can worsen damage on failing cards. Professional imaging and recovery tools offer a much safer approach.' },
  { q: '8. Do you offer a no data, no charge policy for SD card recovery?', a: 'Yes, in most cases. We follow a No Data, No Charge policy for SD card recoveries unless the card has been physically tampered with or damaged from previous recovery attempts. If that applies, we’ll explain any special evaluation fees upfront before starting.' },
  { q: '9. Can you recover data from an SD card that shows the wrong capacity or is not recognized at all?', a: 'Yes. If your SD card shows zero capacity , an incorrect size , or is not being recognized by your computer or camera , these are common signs of internal chip failure or controller issues. We handle these types of recoveries regularly.' },
  { q: '10. The videos on my SD Card are damaged. How much does video file repair from an SD card cost?', a: 'The cost for SD card video file repair depends on several factors, including the number of damaged video files, the length and size of each file, the complexity of the video format (codec), and the extent of corruption. In most cases, you’ll first pay our standard SD card data recovery fee, which covers the process of extracting and stabilizing the raw video files from your card. After that, video file repair services are quoted separately based on the specifics of the files needing repair. For an exact quote, please contact us or visit our pricing page for more details.' },
  { q: '11. I can see the videos on my SD card but they are damaged. Is it possible to repair damaged video files?', a: 'Yes. At Five Star Data Recovery, we specialize in video file repair from SD cards, even when the files appear to be corrupted or unplayable. Our engineers use professional forensic-level tools that rebuild damaged video headers, correct missing or fragmented data blocks, and reconstruct the file structure to make your videos playable again. It’s very important that you avoid running tools like First Aid, CHKDSK, or any other disk repair utilities on your SD card. These tools often overwrite or further corrupt the fragmented video data, making professional repair much more difficult or even impossible. If you notice that your video files are damaged, stop using the SD card immediately and contact us for a free consultation.' }
]
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="SD Card Recovery"
      subtitle="Get Your Data Back In No Time."
      description="Not all physical damage to SD cards is the same. In some cases—such as broken connectors or minor board damage—recovery may be possible using advanced micro soldering techniques to access the internal memory chip."
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
          <h2 class="section-title">Common Reasons SD Cards Fail</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Corrupted SD card that suddenly won’t mount or read</li>
            <li>Files were accidentally deleted or formatted</li>
            <li>SD card says “empty” even though you know files were saved</li>
            <li>Bent, cracked, or physically damaged cards</li>
            <li>Need to recover photos or photo and video files from a camera</li>
            <li>Card was used with faulty or generic data recovery software</li>
            <li>Power loss during transfer caused damaged video files</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Trusted by Locals Across LA</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>DSLR and mirrorless digital cameras (Canon, Nikon, Sony, etc.)</li>
            <li>Android smartphones and tablets</li>
            <li>Drone cameras (DJI and others)</li>
            <li>Action cameras and camcorders (GoPro, Insta360)</li>
            <li>Professional camera media: CFast, CFexpress, REDMAG, and other high-end storage cards</li>
            <li>Standard SD, microSD, miniSD, SDHC, and SDXC cards</li>
            <li>Laptops, card readers, and all major operating systems</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Recovery Process</h2>
        </div>
        <div class="section-body">

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
          <h2 class="section-title">Step 2: Safe Imaging</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Step 3: Deep Scanning and File Extraction</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Step 4: File Verification and Return</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>If we can’t recover your data, you pay nothing.</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What If My SD Card Is Physically Damaged?</h2>
        </div>
        <div class="section-body">
          <p>Not all physical damage to SD cards is the same. In some cases—such as broken connectors or minor board damage—recovery may be possible using advanced micro soldering techniques to access the internal memory chip.</p>
          <p>However, if the SD card is cracked—even slightly—recovery is impossible, as the memory chip itself is typically damaged beyond repair. Once the chip is fractured, there is no method to retrieve the data.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Why Not Just Use Free Software?</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Write temporary data to the card, overwriting your original files</li>
            <li>Fail to detect deeper issues, leading to partial recovery</li>
            <li>Don't support specialized file types or raw formats</li>
            <li>Lack the safety features of professional tools</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Why Choose Five Star for SD Card Recovery?</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>In-house lab with certified engineers</li>
            <li>Industry-grade recovery tools for deep-level access</li>
            <li>Transparent pricing and honest diagnostics</li>
            <li>High recovery success rates—even with severe damage</li>
            <li>Local drop-off or nationwide mail-in data recovery options</li>
            <li>No data, no charge (most cases)</li>
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
          <h2 class="section-title">What We Can Recover</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>RAW and JPEG image files</li>
            <li>MP4, MOV, and damaged video file</li>
            <li>PDFs, Word, Excel, and other work docs</li>
            <li>Audio files and voice memos</li>
            <li>App data and system logs</li>
            <li>Deleted or hidden file folders</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Get a Free Quote within Minutes!</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Start Your SD Card Recovery Today</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Drop off your card or ship it to our lab</li>
            <li>Free diagnostic and no-recovery-no-charge guarantee</li>
            <li>Call us now or start your recovery request online</li>
          </ul>
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
          <h2 class="cta-title">Need Help With SD Card Recovery?</h2>
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
