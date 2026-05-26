<script setup lang="ts">
useSeoMeta({
  title: 'Deleted File Recovery - Five Star Data Recovery',
  ogTitle: 'Deleted File Recovery',
  description: 'Did you loose your important data? We recover deleted files from hard drives and all types of devices. Contact us today!',
  ogDescription: 'Did you loose your important data? We recover deleted files from hard drives and all types of devices. Contact us today!',
})

const trustBadges = [
  { icon: 'clock', text: 'Available 24/7/365' },
  { icon: 'check', text: 'No Data = No Charge' },
  { icon: 'shield', text: '10+ Years in Business' },
  { icon: 'star', text: 'Free Nationwide Shipping' },
]

const reviews = [
  {
    text: "I accidentally formatted my entire external hard drive containing 3 years of client work. I was sick about it. Five Star forensically scanned the drive and recovered virtually everything — files I hadn't seen in years came back intact. The $200 flat rate upfront was absolutely worth every dollar.",
    name: 'Michelle D.',
    location: 'Pasadena, CA',
  },
  {
    text: "My kid accidentally deleted an entire folder of photos and emptied the recycle bin. I called Five Star and they walked me through exactly what NOT to do. They did a deep forensic scan and got back nearly all the photos. Brilliant service and great communication.",
    name: 'Tom R.',
    location: 'Denver, CO',
  },
  {
    text: "I emptied my trash and realized I'd deleted my entire freelance portfolio — two years of work. Five Star ran their forensic recovery process and retrieved 95% of my files within 2 days. They kept me informed every step of the way. I'm so grateful.",
    name: 'Sofia L.',
    location: 'Glendale, CA',
  },
]

const faqs = [
  {
    q: 'Can you recover files that were permanently deleted?',
    a: "Yes — in many cases we can recover files that have been permanently deleted, even after emptying the Recycle Bin or Trash. When you delete a file, the data is not immediately erased from the storage media. Our forensic-level deep scan can locate and reconstruct deleted files as long as the space hasn't been overwritten. Stop using the device immediately to maximize recovery chances.",
  },
  {
    q: 'What is the flat-rate pricing for deleted file recovery?',
    a: "Deleted file recovery is a flat rate of $200, paid upfront. This fee is non-refundable as it covers the forensic imaging and deep scan process regardless of outcome. Unlike standard data recovery cases, deleted file recovery does not qualify for No Data, No Charge (most cases) because the engineering work is performed regardless of how much is recovered.",
  },
  {
    q: 'What should I do immediately after accidentally deleting files?',
    a: 'Stop using the device immediately. Every write operation to the storage media after deletion increases the risk of overwriting the deleted data and making it unrecoverable. Do not install recovery software, save new files, or allow the operating system to write to the drive. Power it down and contact us right away.',
  },
  {
    q: 'What types of devices can you recover deleted files from?',
    a: 'We recover deleted files from hard drives (HDDs), solid state drives (SSDs), external hard drives, USB flash drives, SD cards, and mobile devices. Recovery success rates vary depending on the device type — SSDs are more complex due to TRIM and wear-leveling technologies, while HDDs typically yield higher recovery rates.',
  },
  {
    q: 'How long does deleted file recovery take?',
    a: 'Most deleted file recovery cases are completed within 1–3 business days. The forensic clone and deep scan process is thorough but efficient. We also offer expedited options if you need your files back urgently.',
  },
  {
    q: 'Does the type of storage device affect recovery success?',
    a: "Yes, it does. Hard drives (HDDs) typically have the highest recovery rates for deleted files because data persists until overwritten. USB flash drives have moderate recovery rates depending on usage. SSDs are the most challenging due to TRIM commands and wear-leveling, which can overwrite deleted data automatically. Regardless of device type, acting quickly gives you the best chance.",
  },
  {
    q: 'What if you can only recover some of my files?',
    a: "We will provide you with a detailed file list of everything we were able to recover before you commit to the delivery. You review the list and confirm whether the important files are there. The $200 forensic fee is non-refundable, but you'll have full visibility into what was recovered before any additional charges are discussed.",
  },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <HeroSection
      title="Deleted File Recovery"
      subtitle="Get Your Data Back In No Time."
      description="Accidentally deleted an important document, video, or entire folder? You're not alone. Every day, users lose valuable data because of accidental deletion, formatting errors, or corrupt storage devices. At Five Star Data Recovery, we help people and businesses recover deleted files. We do this quickly, safely, and professionally."
      bgImage="/deleted-file-recovery-service-glendale-ca.jpg"
      :trustBadges="trustBadges"
    />

    <StatsBar />

    <!-- SECTION 1 — s-white -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Devices We Offer Deleted File Recovery From</h2>
        <ul class="content-list">
          <li><NuxtLink to="/data-recovery/hard-drive-recovery" class="inline-link">Hard Drives (HDDs)</NuxtLink> — Internal and external drives, highest recovery success rates</li>
          <li><NuxtLink to="/data-recovery/ssd-recovery" class="inline-link">Solid State Drives (SSDs)</NuxtLink> — Complex recovery due to TRIM, handled by specialized engineers</li>
          <li><NuxtLink to="/data-recovery/external-hard-drive" class="inline-link">External Hard Drives</NuxtLink> — Dropped, corrupted, or accidentally formatted externals</li>
          <li><NuxtLink to="/data-recovery/usb-recovery" class="inline-link">USB Flash Drives</NuxtLink> — Deleted files from thumb drives and portable storage</li>
          <li><NuxtLink to="/data-recovery/sd-card-recovery" class="inline-link">SD Cards &amp; Memory Cards</NuxtLink> — Camera cards, drone footage, and mobile media</li>
          <li><NuxtLink to="/data-recovery/iphone-recovery" class="inline-link">iPhones &amp; Mobile Devices</NuxtLink> — Component-level deleted file recovery from iOS devices</li>
        </ul>
        <p class="s-body"><strong>Please Note:</strong> Not all storage devices are equal when it comes to deleted file recovery. Recovery success depends heavily on device type, how much activity has occurred since deletion, and whether TRIM has been activated on SSDs.</p>
        <ul class="content-list">
          <li><strong>Hard Drives (HDDs)</strong> — Deleted data persists until overwritten. Highest recovery success rates when the device is stopped immediately after deletion.</li>
          <li><strong>Solid State Drives (SSDs)</strong> — TRIM and wear-leveling can permanently erase data shortly after deletion. Act immediately for the best chance of recovery.</li>
          <li><strong>USB Flash Drives &amp; SD Cards</strong> — Moderate recovery rates. Avoid all write operations to the device after deletion.</li>
        </ul>
      </div>
    </section>

    <!-- SECTION 2 — s-grey: Our Deleted File Recovery Process -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Our Deleted File Recovery Process</h2>
        <div class="process-steps">
          <div class="process-step">
            <div class="step-num">1</div>
            <div>
              <h3 class="step-title">Forensic Clone</h3>
              <p class="step-body">We create a forensic sector-by-sector clone of your storage device before performing any analysis. This preserves the original state and ensures we never work directly on your source media.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">2</div>
            <div>
              <h3 class="step-title">Deep Scan</h3>
              <p class="step-body">Using professional forensic tools, we perform a deep scan of the cloned image — searching far beyond what the file system reports. This allows us to locate deleted, orphaned, and fragmented file structures.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">3</div>
            <div>
              <h3 class="step-title">File Reconstruction</h3>
              <p class="step-body">Our engineers reconstruct recoverable files using file carving techniques, rebuilding data from raw disk signatures and metadata fragments wherever possible.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">4</div>
            <div>
              <h3 class="step-title">File List Review</h3>
              <p class="step-body">You receive a detailed list of all recovered files before we finalize anything. Review the list and confirm that the important files are there before approving delivery.</p>
            </div>
          </div>
          <div class="process-step">
            <div class="step-num">5</div>
            <div>
              <h3 class="step-title">Delivery</h3>
              <p class="step-body">Once approved, we transfer your recovered files to a new drive and return it to you via pickup or insured shipping — ready for immediate use.</p>
            </div>
          </div>
        </div>
        <div class="pricing-note">
          <p><strong>Important Pricing Note:</strong> Deleted file recovery is a flat rate of <strong>$200</strong>, paid upfront before work begins. This fee is non-refundable as it covers the forensic imaging and deep scan process. This service does not qualify for No Data, No Charge (most cases) because significant engineering work is performed regardless of the final outcome.</p>
        </div>
      </div>
    </section>

    <!-- REVIEWS -->
    <ReviewsSection :reviews="reviews" />

    <!-- CONTACT BAND -->
    <section class="s-contact-band">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Contact Us for Deleted File Recovery</h2>
        </div>
        <ul class="contact-bullets">
          <li>Stop using the device immediately</li>
          <li>$200 flat rate — paid upfront</li>
          <li>Forensic-level deep scan</li>
          <li>1–3 business day turnaround</li>
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
.content-list { list-style: none; padding: 0 0 0 20px; margin: 0 0 20px; display: flex; flex-direction: column; gap: 10px; }
.content-list li { font-size: 0.95rem; color: #4a5568; line-height: 1.65; position: relative; padding-left: 16px; }
.content-list li::before { content: '»'; color: #C9A84C; font-weight: 900; position: absolute; left: -4px; top: 0; }
.process-steps { display: flex; flex-direction: column; }
.process-step { display: flex; align-items: flex-start; gap: 24px; padding: 28px 0; border-bottom: 1px solid #e2e6ee; }
.process-step:last-child { border-bottom: none; }
.step-num { width: 48px; height: 48px; background: #1a1a2e; color: #C9A84C; font-size: 1.2rem; font-weight: 900; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.step-title { font-size: 1rem; font-weight: 800; color: #1a1a2e; margin-bottom: 8px; }
.step-body { font-size: 0.93rem; color: #4a5568; line-height: 1.7; margin: 0; }
.pricing-note { background: #fff8e8; border: 1px solid rgba(201,168,76,0.4); border-radius: 8px; padding: 20px 24px; margin-top: 32px; font-size: 0.93rem; color: #4a5568; line-height: 1.75; }
.pricing-note strong { color: #1a1a2e; }
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
</style>
