<script setup lang="ts">
useSeoMeta({
  title: 'Hard Drive Clicking — Five Star Data Recovery',
  description: 'Is your hard drive suddenly making a clicking sound? Don’t ignore it—this could be a serious warning sign. At Five Star Data Recovery, we focus on getting data '
})
const faqs = [
  { q: '1. What causes a hard drive to start clicking?', a: 'A clicking hard drive usually indicates internal mechanical failure. This often happens due to damaged read/write heads, actuator arm issues, or spindle motor problems. When your HDD starts clicking, it’s critical to stop using the drive immediately to prevent further platter damage and permanent data loss.' },
  { q: '2. Can you recover data from a clicking hard drive?', a: 'Yes. At Five Star Data Recovery, we specialize in clicking hard drive recovery. Our engineers use Class 100 clean room technology to safely open the drive and replace damaged components like heads or actuators, giving us the best chance at recovering your important files.' },
  { q: '3. Is it safe to power on a clicking hard drive multiple times?', a: 'No. Powering on a clicking hard drive repeatedly can cause the heads to scratch the platters, making data recovery much more difficult or impossible. If your HDD is clicking, turn it off immediately and contact a professional data recovery service.' },
  { q: '4. How long does hard drive clicking recovery take?', a: 'Standard turnaround for hard drive clicking cases is 3–5 business days. However, if you need faster service, we offer Expedited and Expedited Plus options for priority handling. Expedited Plus gives you 24/7 engineer attention until the recovery is complete.' },
  { q: '5. How much does clicking hard drive recovery cost?', a: 'We offer a flat-rate fee of $950 for all hard drive clicking data recovery cases. This price includes all clean room labor and necessary donor parts. There are no hidden fees, and you only pay if we successfully recover your data.' },
  { q: '6. Do all clicking hard drives require clean room service?', a: 'Yes. Clicking sounds almost always indicate internal mechanical failure. These cases require clean room opening and part replacement to safely access the data.' },
  { q: '7. Can data recovery software fix a clicking hard drive?', a: 'No. Software cannot repair physical damage inside a clicking hard drive. Attempting software recovery on a mechanically failing drive can worsen the issue and reduce your chances of successful recovery.' },
  { q: '8. Do you recover all brands of clicking hard drives?', a: 'Yes. We recover data from all major hard drive brands including Western Digital, Seagate, Toshiba, Hitachi, and others. Whether internal or external, we handle all types of clicking HDD recoveries.' },
  { q: '9. What type of data can you recover from a clicking drive?', a: 'We can recover photos, videos, documents, databases, and other important files from clicking hard drives. Once the recovery is complete, we provide you with a full file list before you decide to proceed.' },
  { q: '10. Do you offer a No Data, No Charge policy for clicking hard drives?', a: 'Yes. For all standard clicking hard drive recovery cases, you won’t pay anything unless we successfully recover your data. The only exceptions are for drives previously opened or tampered with.' }
]
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="Hard Drive Clicking"
      subtitle="Get Your Data Back In No Time."
      description="Is your hard drive suddenly making a clicking sound? Don’t ignore it—this could be a serious warning sign. At Five Star Data Recovery, we focus on getting data back from drives with mechanical issues. This includes the annoying hard drive clicking sound. If your drive has started clicking, ticking, "
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
          <h2 class="section-title">What Is the Clicking Sound in a Hard Drive?</h2>
        </div>
        <div class="section-body">
          <p>When you hear a clicking hard disk drive, you’re likely hearing the read/write head trying to find data, but failing. Instead of reading the correct track, it keeps resetting and trying again, causing a rhythmic “click-click-click” sound.People commonly refer to this issue as the click of death, and it represents one of the most serious symptoms a drive can show. In most cases, it’s a mechanical failure—something inside the drive is either broken or misaligned.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Common causes of a clicking hard drive</h2>
        </div>
        <div class="section-body">
          <p>A hard drive making clicking noise usually signals internal damage. Some of the most common causes include:</p>
          <ul class="content-list">
            <li>Head Crash: The read/write head physically touches the platter, damaging the surface and data.</li>
            <li>Power Surge: Electrical spikes can damage the circuit board or firmware.</li>
            <li>Power Surge: Electrical spikes can damage the circuit board or firmware.</li>
            <li>Stuck Heads: The heads fail to return to the parked position and keep trying to reset.</li>
            <li>Factory Defects: Sometimes, drives leave the factory with underlying issues that worsen over time.</li>
            <li>Impact Damage: Drops or shocks, especially while running, can cause severe internal damage.</li>
          </ul>
          <p>Regardless of the cause, if your HDD is clicking, it’s best to stop using it immediately to prevent further damage.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Why you shouldn’t try to fix a clicking hard drive yourself</h2>
        </div>
        <div class="section-body">
          <p>We understand—you want your data back fast, and DIY videos make it look simple. But opening a drive or running software on a damaged disk often causes more harm than good.Here’s why you should avoid DIY recovery on a clicking hard disk drive:</p>
          <ul class="content-list">
            <li>Opening a drive outside a cleanroom introduces dust and contamination.</li>
            <li>Trying to restart or format the drive can overwrite recoverable data.</li>
            <li>Recovery software doesn’t fix mechanical issues—it can actually make them worse.</li>
            <li>Failed DIY attempts often increase the cost of professional recovery.If your hard drive is clicking, unplug it and bring it to a professional. Every second it runs can reduce the chance of recovery.</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">How We Recover Data from a Clicking Hard Drive</h2>
        </div>
        <div class="section-body">
          <p>At Five Star Data Recovery, we use advanced tools and a certified cleanroom to safely recover data from physically damaged drives—including those with head crashes and hard drive clicking symptoms.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Free Diagnostic</h2>
        </div>
        <div class="section-body">
          <p>We start by evaluating your drive in our lab. If it’s clicking, we’ll perform non-invasive tests to confirm the type of failure and estimate the chance of recovery.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Cleanroom Evaluation</h2>
        </div>
        <div class="section-body">
          <p>If internal repair is needed, we open the drive in our certified cleanroom. Our engineers inspect the heads, platters, PCB, and other components.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Component Replacement</h2>
        </div>
        <div class="section-body">
          <p>We may replace damaged parts (like the read/write heads) using donor drives with matching firmware and parts.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Imaging and Recovery</h2>
        </div>
        <div class="section-body">
          <p>Once the drive is stable, we create a full disk image. This lets us extract data without relying on the original, unstable hardware.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">File Verification and Delivery</h2>
        </div>
        <div class="section-body">
          <p>We verify your recovered files and transfer them to a new drive that you provide or purchase from us.No Data, No Charge — If we can’t recover your data, you don’t pay.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What to Do if Your HDD Is Clicking</h2>
        </div>
        <div class="section-body">
          <p>If your hdd is clicking, follow these steps immediately</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Turn It Off</h2>
        </div>
        <div class="section-body">
          <p>Do not power on the drive again until a qualified data recovery professional has properly diagnosed it.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Do Not Attempt Repairs</h2>
        </div>
        <div class="section-body">
          <p>Avoid opening the drive or tapping on it to stop the sound.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Avoid Software Scans</h2>
        </div>
        <div class="section-body">
          <p>Do not attempt to use any data recovery software on a hard drive that clicks.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Contact a Specialist</h2>
        </div>
        <div class="section-body">
          <p>Time is critical. The longer a failing drive runs, the worse the damage can get.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Contact Us for ClickingHard Drive Recovery</h2>
        </div>
        <div class="section-body">
          <p>If your hard drive is making a clicking noise, don’t wait. The sooner we look at it, the better your chances of a full recovery. We’re here to help you safely and professionally recover what matters most.</p>
          <ul class="content-list">
            <li>Visit our Glendale, CA lab</li>
            <li>Ship your drive to us from anywhere in the U.S.</li>
            <li>Call now for a free diagnosis</li>
          </ul>
          <p>Your clicking hard disk drive might be failing, but you can still save your data.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Drives We Commonly See with Clicking Issues</h2>
        </div>
        <div class="section-body">
          <p>We recover data from all brands and models affected by hard drive clicking, including:</p>
          <ul class="content-list">
            <li>Seagate</li>
            <li>Western Digital (WD)</li>
            <li>Toshiba</li>
            <li>Samsung</li>
            <li>Hitachi (HGST)</li>
            <li>LaCie external drives</li>
            <li>G-Technology drives</li>
            <li>RAID arrays and NAS units</li>
          </ul>
          <p>Whether it’s an internal desktop HDD or an external portable drive, we have the tools and experience to help.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Secure, Confidential, and In-House</h2>
        </div>
        <div class="section-body">
          <p>Your data is private—and we treat it that way. All recoveries are performed in our secure Glendale, CA lab. We never outsource your device, and we permanently delete recovered data after delivery.</p>
          <ul class="content-list">
            <li>Certified Cleanroom Lab</li>
            <li>In-House Engineers Only</li>
            <li>Surveillance and Access Control</li>
            <li>NDA Available Upon Request</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Testimonials from Satisfied Clients</h2>
        </div>
        <div class="section-body">
          <p>“My external hard drive started making loud clicking sounds, and I knew something was seriously wrong. I called Five Star Data Recovery, and Elen explained the process and got my case checked in right away. Within a week, they recovered all of my photos and work documents. Their communication was excellent from start to finish.”</p>
          <p>Eric S.</p>
          <p>Burbank, CA</p>
          <p>“I had a Western Digital drive that started clicking and wouldn’t mount at all. After reading reviews, I shipped it to Five Star Data Recovery. Vahan and his team did an amazing job. They explained that the heads had failed and performed a clean room recovery. I got back 97% of my files!”</p>
          <p>Jasmine T.</p>
          <p>Dallas, TX</p>
          <p>“My desktop hard drive was making a clicking noise after a power outage. Alex handled the recovery and explained that the internal heads were damaged. They replaced the parts and recovered almost all of my data. The flat-rate pricing with no surprises made the experience stress-free.”</p>
          <p>Luis M.</p>
          <p>Glendale, CA</p>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Why Choose Five Star Data Recovery?</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Experts in clicking hard drive recovery</li>
            <li>Full in-house cleanroom repair</li>
            <li>Clear communication throughout</li>
            <li>Flat-rate pricing — no surprise fees</li>
            <li>“No Data, No Charge” guarantee</li>
            <li>Located in Glendale, CA — Nationwide mail-in service available</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Request a Free Quote</h2>
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
          <h2 class="cta-title">Need Help With Hard Drive Clicking?</h2>
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
