<script setup lang="ts">
useSeoMeta({
  title: 'Hard Drive Clicking - Five Star Data Recovery',
  ogTitle: 'Hard Drive Clicking',
  description: 'Trust our certified engineers for Hard Drive Clicking Sound Fixing Services. Get fast data recovery with a free consultation and diagnosis.',
  ogDescription: 'Trust our certified engineers for Hard Drive Clicking Sound Fixing Services. Get fast data recovery with a free consultation and diagnosis.',
})

const trustBadges = [
  { icon: 'clock', text: 'Available 24/7/365' },
  { icon: 'check', text: 'No Data = No Charge' },
  { icon: 'shield', text: '10+ Years in Business' },
  { icon: 'star', text: 'Free Nationwide Shipping' },
]

const reviews = [
  {
    text: "My hard drive started clicking and I panicked — Five Star told me to power it off immediately, which I did. They picked it up, assessed it in their cleanroom, sourced donor parts, and recovered 100% of my data. I can't imagine what would have happened if I had kept trying to use it. These guys are pros.",
    name: 'Eric S.',
    location: 'Burbank, CA',
  },
  {
    text: "I had a clicking Western Digital drive with 4 years of photography work on it. Another lab said it was unrecoverable. Five Star disagreed — they opened it in their cleanroom, swapped the read head assembly, and got back everything. I was floored. Best data recovery service I've ever used.",
    name: 'Jasmine T.',
    location: 'Dallas, TX',
  },
  {
    text: "My Seagate started clicking after a power surge. Five Star handled the entire process with complete professionalism — free diagnostic, flat-rate quote, cleanroom repair, and full data delivery in 4 days. The $950 flat rate was completely worth it for recovering irreplaceable business files.",
    name: 'Luis M.',
    location: 'Glendale, CA',
  },
]

const faqs = [
  {
    q: 'What does it mean when my hard drive is clicking?',
    a: "A clicking hard drive is one of the most serious warning signs in data recovery. It typically indicates a mechanical failure — most commonly damaged or stuck read/write heads that are unable to read the platters correctly. The clicking sound is the heads repeatedly attempting and failing to initialize. Power your drive off immediately and do not attempt to use it further.",
  },
  {
    q: 'What should I do if my hard drive is clicking?',
    a: 'Power it off immediately. Do not attempt to use the drive, run disk repair software, or open the drive yourself. Every additional spin cycle can cause the damaged heads to scratch the platters, making data recovery increasingly difficult or impossible. Contact us for a free evaluation before doing anything else.',
  },
  {
    q: 'Can you recover data from a clicking hard drive?',
    a: "Yes — we specialize in recovering data from mechanically failed drives, including clicking drives. Using our ISO 5 certified cleanroom, our engineers can safely open the drive, assess the damage, source matching donor parts, and perform a head swap or other necessary repairs to image the data. Recovery success depends on how early the drive is powered off and the extent of platter damage.",
  },
  {
    q: 'How much does clicking hard drive recovery cost?',
    a: "Mechanical hard drive recovery, including clicking drives, is priced at a flat rate of $950. This covers all engineering labor, cleanroom work, and any necessary component sourcing. There are no hidden fees — if we cannot recover your data, you will not be charged for the recovery service (most cases).",
  },
  {
    q: 'How long does recovery take for a clicking hard drive?',
    a: "Standard recovery for a clicking drive typically takes 3–5 business days. The delay is largely due to the time needed to source matching donor parts (head assembly, PCB, etc.) for your specific drive model. Once parts arrive, our engineers work quickly to complete the recovery. Expedited options are available if you have an urgent deadline.",
  },
  {
    q: 'Will opening the drive myself fix the clicking?',
    a: "No — and it will almost certainly make recovery impossible. Hard drive internals require an ISO 5 (Class 100) cleanroom environment. Even a single dust particle landing on the platters can cause permanent scratches that destroy data. Opening a hard drive in a normal room environment will contaminate the platters and likely result in total and unrecoverable data loss.",
  },
  {
    q: 'What causes a hard drive to click?',
    a: "The most common causes are: damaged or stuck read/write heads, failed head actuator assembly, corrupted firmware that prevents proper head initialization, physical impact or drop damage, or gradual wear that leads to head failure over time. Regardless of cause, the solution always requires professional cleanroom-level intervention.",
  },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <HeroSection
      title="Hard Drive Clicking"
      subtitle="Get Your Data Back In No Time."
      description="Is your hard drive suddenly making a clicking sound? Don't ignore it—this could be a serious warning sign. At Five Star Data Recovery, we focus on getting data back from drives with mechanical issues. If your drive has started clicking, ticking, or making repeated noises when powered on, power it down immediately. A clicking hard drive can get worse quickly. The longer it runs, the harder and more costly it is to recover your data."
      bgImage="/hard-drive-clicking-sound-data-recovery.webp"
      :trustBadges="trustBadges"
    />

    <StatsBar />

    <!-- SECTION 1 — s-white two-col with image -->
    <section class="s-white">
      <div class="container two-col-layout">
        <div>
          <h2 class="s-heading">What Is the Clicking Sound in a Hard Drive?</h2>
          <p class="s-body">The clicking sound in a hard drive is typically caused by the read/write heads repeatedly attempting to initialize — and failing. In a healthy hard drive, the heads glide nanometers above the spinning platters and read/write data precisely. When they are damaged, misaligned, or stuck, the actuator arm that moves them will click as it swings back and forth without successfully positioning the heads over the correct track.</p>
          <p class="s-body">This mechanical failure is one of the most serious conditions a hard drive can experience. The longer the drive spins with damaged heads, the greater the risk of the heads physically contacting the platters — causing deep scratches that can permanently destroy data. The moment you hear clicking, the most important thing you can do is power off the drive immediately.</p>
        </div>
        <div class="img-col">
          <img src="/hard-drive-internal-platters.jpg" alt="Hard drive internal platters" class="section-img" />
        </div>
      </div>
    </section>

    <!-- SECTION 2 — s-grey: Common causes -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Common causes of a clicking hard drive</h2>
        <ul class="content-list">
          <li><strong>Damaged read/write heads</strong> — The most common cause. Heads can fail due to age, sudden impact, or power surge, preventing them from properly reading the platters.</li>
          <li><strong>Failed actuator assembly</strong> — The arm that moves the heads across the platters can seize or become stuck, causing the characteristic clicking noise.</li>
          <li><strong>Corrupted firmware</strong> — Bad firmware can cause the drive's controller to repeatedly attempt head positioning routines that fail, producing a clicking pattern.</li>
          <li><strong>Physical impact or drop damage</strong> — Dropping a hard drive — even a short distance — can dislodge or damage the read/write heads, instantly causing a clicking failure.</li>
          <li><strong>Normal wear over time</strong> — Heads can gradually degrade over years of use, eventually failing to maintain proper flying height above the platters.</li>
        </ul>
      </div>
    </section>

    <!-- SECTION 3 — s-white: Why you shouldn't try to fix it yourself -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Why you shouldn't try to fix a clicking hard drive yourself</h2>
        <p class="s-body">We understand the impulse to try to fix things yourself, especially when important data is at stake. But when it comes to a clicking hard drive, DIY attempts almost always make things significantly worse. Here's why:</p>
        <ul class="content-list">
          <li><strong>Hard drive internals require cleanroom conditions.</strong> Opening a drive outside of an ISO 5 certified cleanroom introduces dust and contaminants that will land on the spinning platters and cause irreversible scratching.</li>
          <li><strong>Freezer tricks don't work.</strong> The old myth of freezing a hard drive is not only ineffective for modern drives, it introduces condensation that can short circuit the PCB and further damage the platters.</li>
          <li><strong>Recovery software cannot fix mechanical failures.</strong> If the heads are damaged, no software can compensate. Running disk repair software on a clicking drive will only cause more head passes and increase platter damage.</li>
          <li><strong>Every extra spin cycle causes damage.</strong> The longer a clicking drive runs, the more contact between the damaged heads and the platters — reducing the chance of recovery exponentially.</li>
        </ul>
      </div>
    </section>

    <!-- SECTION 4 — s-grey: How We Recover -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">How We Recover Data from a Clicking Hard Drive</h2>
        <div class="process-steps">
          <div class="process-step">
            <div class="step-num">1</div>
            <div>
              <h3 class="step-title">Free Diagnostic</h3>
              <p class="step-body">We evaluate your drive at no cost. Our engineers assess the type and severity of the mechanical failure and provide a detailed report with a flat-rate quote before any work begins.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">2</div>
            <div>
              <h3 class="step-title">Cleanroom Assessment</h3>
              <p class="step-body">Your drive is opened in our ISO 5 certified cleanroom. Our engineers inspect the internal components — heads, platters, and actuator — under controlled conditions to determine exactly what needs to be addressed.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">3</div>
            <div>
              <h3 class="step-title">Component Repair or Replacement</h3>
              <p class="step-body">We source matching donor parts from our extensive inventory. Read/write head assemblies, PCBs, and other components are swapped with precision in the cleanroom to restore the drive's ability to read data.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">4</div>
            <div>
              <h3 class="step-title">Data Imaging</h3>
              <p class="step-body">With the drive stabilized, we create a forensic sector-by-sector image using professional imaging hardware. We work methodically to extract as much data as possible from every readable sector.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">5</div>
            <div>
              <h3 class="step-title">File Delivery</h3>
              <p class="step-body">You review a detailed file list of all recovered data before we finalize anything. Once approved, we transfer your files to a new drive and return it to you via pickup or insured shipping.</p>
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
          <h2 class="contact-banner-heading">Contact Us for Clicking Hard Drive Recovery</h2>
        </div>
        <ul class="contact-bullets">
          <li>Power down immediately — every second counts</li>
          <li>Free diagnostic</li>
          <li>$950 flat-rate — no hidden fees</li>
          <li>ISO 5 certified cleanroom</li>
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
