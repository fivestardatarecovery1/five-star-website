<script setup lang="ts">
useSeoMeta({
  title: "Drive Doesn't Power On - Five Star Data Recovery",
  ogTitle: 'Hard Drive No Power',
  description: "Get professional services for when your Drive Doesn't Power On. Our certified engineers provide data recovery services at the best prices.",
  ogDescription: "Get professional services for when your Drive Doesn't Power On. Our certified engineers provide data recovery services at the best prices.",
})

const trustBadges = [
  { icon: 'clock', text: 'Available 24/7/365' },
  { icon: 'check', text: 'No Data = No Charge' },
  { icon: 'shield', text: '10+ Years in Business' },
  { icon: 'star', text: 'Free Nationwide Shipping' },
]

const reviews = [
  {
    text: "My external hard drive completely stopped turning on after a power outage. I tried everything and got nothing. Five Star diagnosed a failed PCB, sourced a replacement, and recovered all my files. Flat-rate pricing, no surprises, and an incredibly professional team. Thank you!",
    name: 'Mark R.',
    location: 'West Covina, CA',
  },
  {
    text: "My laptop hard drive stopped powering on and the computer wouldn't boot. Five Star picked it up from my Burbank office, handled it in their cleanroom, and had all my data recovered in 3 days. They were transparent about what was wrong and what it would cost from the very beginning.",
    name: 'Samantha L.',
    location: 'Burbank, CA',
  },
  {
    text: "I shipped my non-powering hard drive to Five Star from New York using their free prepaid label. They diagnosed a seized spindle motor, performed the recovery in their cleanroom, and returned a drive full of my recovered files within a week. Exceptional service from start to finish.",
    name: 'David N.',
    location: 'New York, NY',
  },
]

const faqs = [
  {
    q: "What does it mean when a hard drive doesn't power on?",
    a: "When a hard drive doesn't power on, it shows no signs of life — no spinning sound, no vibration, and it is not detected by your computer. This typically indicates a hardware failure such as a failed PCB (circuit board), a seized motor, damaged power connector, or other electrical issue. It does not necessarily mean the data is gone — it often means the drive needs professional hardware repair before data can be extracted.",
  },
  {
    q: 'Can data be recovered from a hard drive that won\'t turn on?',
    a: "Yes — in many cases, data can be fully recovered from a hard drive that won't power on. Our engineers assess the root cause of the power failure and perform the necessary hardware repair — such as PCB replacement, motor swap, or connector repair — in our certified cleanroom before imaging the drive. Recovery success depends on whether the platters and read/write heads are intact.",
  },
  {
    q: 'What causes a hard drive to stop powering on?',
    a: 'Common causes include: failed or burnt PCB (circuit board) due to power surge, seized spindle motor that prevents the platters from spinning, damaged power connector from repeated plugging/unplugging, electrical short caused by liquid damage or physical impact, and firmware corruption that prevents the drive from initializing.',
  },
  {
    q: 'What should I do if my hard drive won\'t power on?',
    a: "Do not attempt to open the drive, replace parts yourself, or apply power repeatedly. Do not use hairdryers or freezers — these home remedies are ineffective and can cause additional damage. Simply set the drive aside in a safe, dry place and contact us for a free evaluation. Early action maximizes your recovery chances.",
  },
  {
    q: 'How much does recovery cost for a drive that won\'t power on?',
    a: 'Our pricing is flat-rate with no hidden fees. Recovery costs typically range from $300 to $950 depending on the device and the type of repair required. You\'ll receive a full quote after the free diagnosis and before any work begins. Our No Data, No Charge (most cases) guarantee applies to the recovery portion.',
  },
  {
    q: 'How long does recovery take for a non-powering drive?',
    a: 'Standard cases are typically completed within 3–5 business days. The timeline includes sourcing any needed replacement parts, performing the repair, and imaging the drive. Expedited options are available if you have an urgent deadline.',
  },
  {
    q: 'Do you offer free pickup for drives that won\'t power on?',
    a: "Yes — we offer free same-day pickup throughout Los Angeles, Glendale, Burbank, Pasadena, Beverly Hills, and surrounding areas. We also provide free prepaid shipping labels for nationwide clients. You don't need to risk further damage by transporting the device yourself.",
  },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <HeroSection
      title="Hard Drive No Power?"
      subtitle="Get Your Data Back In No Time."
      description="If your hard drive isn't turning on, you're not alone. Many people run into this problem and worry their files are lost forever. At Five Star Data Recovery, we specialize in helping people recover their files when a Hard Drive doesn't power on or shows no signs of life."
      bgImage="/hard-drive-no-power-data-recovery.webp"
      :trustBadges="trustBadges"
    />

    <StatsBar />

    <!-- SECTION 1 — s-white: Signs of a No Power Issue -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">What Are the Signs of a No Power Issue?</h2>
        <p class="s-body">A hard drive with a power failure shows very specific symptoms that distinguish it from other failure types. Recognizing these signs early can help you avoid making the problem worse:</p>
        <ul class="content-list">
          <li>The drive makes absolutely no sound when connected — no spinning, no beeping, no clicking</li>
          <li>The drive is not detected by your computer or shows nothing in Disk Management / Disk Utility</li>
          <li>The drive feels completely still — no vibration when powered on</li>
          <li>A burning smell or visible burn marks on the circuit board (PCB)</li>
        </ul>
      </div>
    </section>

    <!-- SECTION 2 — s-grey: Common Reasons -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Common Reasons Why a Hard Drive Doesn't Power On</h2>
        <ul class="content-list">
          <li><strong>Failed PCB (Printed Circuit Board)</strong> — A power surge, electrical short, or simple component failure can burn out the drive's circuit board, cutting off all power to the drive.</li>
          <li><strong>Seized Spindle Motor</strong> — The motor that spins the platters can seize over time or after physical impact, preventing the drive from spinning up entirely.</li>
          <li><strong>Damaged Power Connector</strong> — Repeatedly plugging and unplugging a drive can damage the power connector pins, causing intermittent or complete power failure.</li>
          <li><strong>Liquid or Physical Damage</strong> — Water, spills, or drops can cause electrical shorts on the PCB or internal components, resulting in a complete power failure.</li>
          <li><strong>TVS Diode Failure</strong> — A sacrificial component on the PCB called the TVS diode is designed to blow out to protect the drive from power surges. When it fails, it cuts power to the drive — but it can often be replaced.</li>
        </ul>
      </div>
    </section>

    <!-- SECTION 3 — s-white: two-col-layout -->
    <section class="s-white">
      <div class="container two-col-layout">
        <div>
          <h2 class="s-heading">What You Should (and Shouldn't) Do</h2>
          <p class="s-body" style="font-weight:700; color:#1a1a2e;">Don't:</p>
          <ul class="content-list">
            <li>Open the hard drive outside of a cleanroom environment</li>
            <li>Swap the PCB with one from a different drive — modern drives require firmware matching</li>
            <li>Apply power repeatedly hoping the drive will start — this can cause further damage</li>
            <li>Use household fixes like freezing or heating the drive</li>
          </ul>
          <p class="s-body" style="font-weight:700; color:#1a1a2e; margin-top:16px;">Do:</p>
          <ul class="content-list">
            <li>Power off the device and leave it disconnected</li>
            <li>Store it in a safe, dry place away from heat, moisture, and static</li>
            <li>Contact us for a free evaluation before attempting anything</li>
            <li>Ship it or bring it in for professional assessment as soon as possible</li>
          </ul>
        </div>
        <div class="img-col">
          <img src="/hard-drive-hdd-data-recovery-glendale-ca.jpg" alt="Hard drive HDD data recovery Glendale CA" class="section-img" />
        </div>
      </div>
    </section>

    <!-- SECTION 4 — s-grey: Our Hard Drive Recovery Process -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Our Hard Drive Recovery Process</h2>
        <div class="process-steps">
          <div class="process-step">
            <div class="step-num">1</div>
            <div>
              <h3 class="step-title">Free Diagnostic</h3>
              <p class="step-body">We evaluate your drive at no cost, identify the exact cause of the power failure, and provide a detailed report with a flat-rate quote. No obligation to proceed.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">2</div>
            <div>
              <h3 class="step-title">Safe Imaging</h3>
              <p class="step-body">Once the power issue is resolved through hardware repair, we create a forensic sector-by-sector image of the drive to preserve all readable data before any further processing.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">3</div>
            <div>
              <h3 class="step-title">Data Extraction</h3>
              <p class="step-body">Our engineers extract all recoverable data from the forensic image using professional-grade tools. Both logical and physical recovery techniques are employed as needed.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">4</div>
            <div>
              <h3 class="step-title">File Verification</h3>
              <p class="step-body">You receive a detailed file list of all recovered data to review before we finalize. Confirm that your important files are there before approving delivery.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">5</div>
            <div>
              <h3 class="step-title">Data Delivery</h3>
              <p class="step-body">Once approved, we transfer your recovered files to a new drive and return it to you via pickup or insured shipping — ready for immediate use.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- REVIEWS -->
    <ReviewsSection :reviews="reviews" />

    <!-- CONTACT BAND -->
    <section class="s-contact-band">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Contact Us — Hard Drive Not Powering On</h2>
        </div>
        <ul class="contact-bullets">
          <li>Power it down — stop all DIY attempts</li>
          <li>Free diagnostic included</li>
          <li>Flat-rate pricing — no part surcharges</li>
          <li>No Data, No Charge (most cases)</li>
        </ul>
        <NuxtLink to="/start-recovery" class="btn-start-recovery">Start Your Recovery</NuxtLink>
      </div>
    </section>

    <!-- FAQ -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading" style="text-align:center; margin-bottom:36px;">Frequently Asked Questions</h2>
        <div class="faq-wrap">
          <div v-for="(faq, i) in faqs" :key="i" class="faq-row">
            <button class="faq-trigger" @click="toggleFaq(i)">
              <span>{{ faq.q }}</span>
              <span class="faq-toggle">{{ openFaq === i ? '−' : '+' }}</span>
            </button>
            <div v-if="openFaq === i" class="faq-answer" v-html="faq.a" />
          </div>
        </div>
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
.s-grey { background: #f4f7fc; padding: 72px 0; }
.s-heading { font-size: clamp(1.5rem, 2.8vw, 2rem); font-weight: 900; color: #1a1a2e; line-height: 1.25; margin-bottom: 20px; }
.s-body { font-size: 0.95rem; color: #4a5568; line-height: 1.8; margin-bottom: 14px; }
.inline-link { color: #C9A84C; font-weight: 600; text-decoration: underline; }
.two-col-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
.img-col { display: flex; align-items: flex-start; }
.section-img { width: 100%; border-radius: 10px; display: block; object-fit: cover; }
.content-list { list-style: none; padding: 0 0 0 20px; margin: 0 0 20px; display: flex; flex-direction: column; gap: 10px; }
.content-list li { font-size: 0.95rem; color: #4a5568; line-height: 1.65; position: relative; padding-left: 16px; }
.content-list li::before { content: '»'; color: #C9A84C; font-weight: 900; position: absolute; left: -4px; top: 0; }
.process-steps { display: flex; flex-direction: column; }
.process-step { display: flex; align-items: flex-start; gap: 24px; padding: 28px 0; border-bottom: 1px solid #e2e6ee; }
.process-step:last-child { border-bottom: none; }
.step-num { width: 48px; height: 48px; background: #1a1a2e; color: #C9A84C; font-size: 1.2rem; font-weight: 900; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.step-title { font-size: 1rem; font-weight: 800; color: #1a1a2e; margin-bottom: 8px; }
.step-body { font-size: 0.93rem; color: #4a5568; line-height: 1.7; margin: 0; }
.s-contact-band { background: #0f1623; padding: 72px 0; border-top: 3px solid #C9A84C; border-bottom: 3px solid #C9A84C; }
.contact-banner-card { border: 1px solid rgba(201,168,76,0.3); border-radius: 8px; padding: 28px 32px; margin-bottom: 28px; }
.contact-banner-heading { font-size: clamp(1.4rem, 2.5vw, 1.9rem); font-weight: 900; color: #fff; margin: 0; }
.contact-bullets { list-style: none; padding: 0; margin: 0 0 28px; display: flex; flex-direction: column; gap: 8px; }
.contact-bullets li { font-size: 0.93rem; color: rgba(255,255,255,0.65); display: flex; align-items: center; gap: 10px; }
.contact-bullets li::before { content: '✓'; color: #C9A84C; font-weight: 700; }
.btn-start-recovery { display: inline-block; background: #C9A84C; color: #1a1a1a; font-weight: 800; font-size: 1rem; padding: 16px 36px; border-radius: 6px; text-decoration: none; transition: background 0.2s; }
.btn-start-recovery:hover { background: #b8923e; }
.faq-wrap { display: flex; flex-direction: column; border: 1.5px solid #e2e6ee; border-radius: 12px; overflow: hidden; }
.faq-row { border-bottom: 1px solid #e2e6ee; }
.faq-row:last-child { border-bottom: none; }
.faq-trigger { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; background: #fff; border: none; cursor: pointer; text-align: left; gap: 16px; font-family: inherit; }
.faq-trigger span:first-child { font-size: 0.95rem; font-weight: 700; color: #1a1a2e; line-height: 1.4; }
.faq-toggle { font-size: 1.4rem; font-weight: 300; color: #C9A84C; flex-shrink: 0; }
.faq-answer { padding: 0 24px 22px; font-size: 0.92rem; color: #4a5568; line-height: 1.75; }
.faq-answer :deep(.faq-link) { color: #C9A84C; font-weight: 600; text-decoration: underline; }
@media (max-width: 768px) { .two-col-layout { grid-template-columns: 1fr; gap: 36px; } }
</style>
