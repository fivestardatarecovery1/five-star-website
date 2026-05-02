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

const reviews = [
  { text: 'My desktop PC suddenly stopped booting, and I couldn\'t access years of important files. Five Star Data Recovery quickly diagnosed the issue and recovered everything from my internal hard drive. Elen kept me updated throughout the process, and the turnaround time was better than I expected. Highly recommend them for desktop data recovery!', name: 'Lauren M.', location: 'Glendale, CA' },
  { text: 'My Windows desktop crashed after a power surge, and I feared my project files were gone. Vahan personally took the time to explain what likely happened and walked me through the recovery options. They recovered almost 99% of my documents and photos. The flat-rate pricing and no hidden fees were a huge relief.', name: 'Chris B.', location: 'Sacramento, CA' },
  { text: 'I had a Seagate hard drive inside my desktop that stopped spinning. I found Five Star Data Recovery online and decided to give them a shot. Alex worked on my case and was able to recover almost all of my data, even though the drive had mechanical damage. The clean room service was worth every penny.', name: 'Samantha H.', location: 'Phoenix, AZ' }
]

const whyUs = [
  { title: 'Experienced Engineers', desc: 'Experienced engineers with cleanroom facilities for safe mechanical repairs on desktop drives.' },
  { title: 'Flat-Rate Pricing', desc: 'Flat-rate pricing with no hidden fees — you know the exact data recovery cost before we begin.' },
  { title: 'No Data, No Charge', desc: '"No Data, No Charge" guarantee — if we can\'t recover your files, you owe us nothing.' },
  { title: 'Secure, In-House Recovery', desc: 'Secure, in-house data recovery only — your desktop drive never leaves our facility.' },
  { title: 'Fast Turnaround', desc: 'Same-day diagnostics and fast turnaround available. Expedited options for urgent cases.' }
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
      description="When your desktop computer stops working or a drive goes missing, it can feel like everything is lost. Important documents, family photos, and business files might seem gone forever. But in many cases, your data can be recovered — even if the system won't boot or the files were deleted."
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

    <!-- Common Reasons -->
    <section class="issues-section section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Common Reasons for Desktop Data Loss</h2>
        </div>
        <div class="issues-layout">
          <div class="issues-intro">
            <p>Many issues can lead to lost files on a desktop computer, including:</p>
            <p>Sometimes, problems arise from user error. Other times, it's a mechanical or software issue. Whatever the cause, our job is to help recover your files — whether you need a single document or an entire drive's contents.</p>
          </div>
          <ul class="issues-list">
            <li>Accidental file deletion or emptying the recycle bin</li>
            <li>Corruption of the operating system after a failed update</li>
            <li>Crashes caused by power outages or hardware failure</li>
            <li>Lost partition due to formatting or bad sectors</li>
            <li>Damage to internal or external hard drives</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Types of Desktops We Recover -->
    <section class="content-section section-bg-1 section-pad">
      <div class="container content-narrow">
        <h2 class="content-title">Types of Desktop Systems and Drives We Recover</h2>
        <p>We work with almost all desktop computer models, including:</p>
        <ul class="secure-list">
          <li>Windows PCs (Dell, HP, Lenovo, custom builds)</li>
          <li>macOS desktops (iMac, Mac Pro)</li>
          <li>Linux-based workstations</li>
          <li>Internal HDD and SSD recovery</li>
          <li>External drives used with desktop computers</li>
        </ul>
        <p>We also recover data from USB drives, attached desktop hard drives, and file systems in Windows (NTFS, FAT32), macOS (APFS, HFS+), and Linux (ext3/ext4).</p>
      </div>
    </section>

    <!-- Process Steps -->
    <section class="process-section section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Desktop Data Recovery Process</h2>
          <p class="section-subtitle">Our step-by-step process is built for safety and success:</p>
        </div>
        <div class="process-grid">
          <div class="process-card">
            <div class="process-num">01</div>
            <h3 class="process-title">Free Diagnostic Evaluation</h3>
            <p class="process-desc">We'll evaluate your drive or computer to determine the type of failure.</p>
          </div>
          <div class="process-card">
            <div class="process-num">02</div>
            <h3 class="process-title">Disk Imaging</h3>
            <p class="process-desc">We make a full image (clone) of the drive to avoid further damage during recovery.</p>
          </div>
          <div class="process-card">
            <div class="process-num">03</div>
            <h3 class="process-title">Recovery Attempt</h3>
            <p class="process-desc">Using advanced tools, we scan the image for recoverable file types, lost folders, and deleted items.</p>
          </div>
          <div class="process-card">
            <div class="process-num">04</div>
            <h3 class="process-title">File Review</h3>
            <p class="process-desc">We show you a preview list of recovered specific files, so you can confirm what we found.</p>
          </div>
          <div class="process-card">
            <div class="process-num">05</div>
            <h3 class="process-title">Secure Delivery</h3>
            <p class="process-desc">Once you approve the recovery, your data is copied to a new drive or USB drive and returned to you.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="why-section section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Why Choose Five Star Data Recovery?</h2>
        </div>
        <div class="grid-3">
          <div class="feature-card" v-for="f in whyUs" :key="f.title">
            <div class="feature-icon">✓</div>
            <h3 class="feature-title">{{ f.title }}</h3>
            <p class="feature-desc">{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="reviews-section section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Testimonials from Satisfied Clients</h2>
        </div>
        <div class="reviews-grid">
          <div class="review-card" v-for="r in reviews" :key="r.name">
            <div class="review-stars">★★★★★</div>
            <p class="review-text">"{{ r.text }}"</p>
            <div class="review-author">{{ r.name }} — {{ r.location }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Nationwide Service -->
    <section class="content-section section-bg-2 section-pad">
      <div class="container content-narrow">
        <h2 class="content-title">We Offer Nationwide Desktop Recovery</h2>
        <p>Located outside of Los Angeles? No problem. We offer free round-trip shipping for all desktop recovery jobs in the U.S. Simply start a case online and we'll send you a prepaid shipping label to send in your desktop drive.</p>
        <p>Once we receive your device, diagnostics begin within 24 hours. Whether you're in California, New York, or Texas — we can help.</p>
      </div>
    </section>

    <!-- CTA Band -->
    <section class="cta-band">
      <div class="container cta-band-inner">
        <div>
          <h2 class="cta-title">Start Your Desktop Recovery Today</h2>
          <p class="cta-sub">We provide expert desktop data recovery with fast turnaround and honest, upfront pricing. You'll always know the data recovery cost before we begin — no hidden fees, no surprises.</p>
          <ul class="cta-list">
            <li>Drop off your drive at our Glendale lab</li>
            <li>Ship it to us free from anywhere in the U.S.</li>
            <li>Call now for a free evaluation and quote</li>
          </ul>
        </div>
        <div class="cta-actions">
          <a href="tel:8182728866" class="btn btn-gold">📞 818-272-8866</a>
          <NuxtLink to="/data-recovery/free-quote" class="btn btn-outline">Get Free Quote</NuxtLink>
        </div>
      </div>
    </section>

    <!-- FAQ -->
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
          <NuxtLink to="/data-recovery/free-quote" class="btn btn-outline">Get Free Quote</NuxtLink>
        </div>
      </div>
    </section>
    <FooterBar />
  </div>
</template>

<style scoped>
.trust-badges { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 8px; }
.badge { background: rgba(255,255,255,0.06); border: 1px solid var(--border); color: var(--white); padding: 7px 14px; border-radius: 20px; font-size: 13px; font-weight: 500; }
.section-pad { padding: 80px 0; }
.process-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px; margin-top: 40px; }
.process-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 28px 24px; }
.process-num { font-size: 2.5rem; font-weight: 900; color: #C9A84C; line-height: 1; margin-bottom: 12px; }
.process-title { font-size: 1rem; font-weight: 700; color: #fff; margin-bottom: 10px; }
.process-desc { font-size: 0.9rem; color: rgba(255,255,255,0.6); line-height: 1.6; }
.reviews-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-top: 40px; }
.review-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 28px; }
.review-stars { color: #C9A84C; font-size: 1.1rem; margin-bottom: 12px; }
.review-text { font-size: 0.95rem; color: rgba(255,255,255,0.75); line-height: 1.7; margin-bottom: 16px; font-style: italic; }
.review-author { font-size: 0.875rem; font-weight: 700; color: #C9A84C; }
.grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; margin-top: 40px; }
.feature-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 28px 24px; }
.feature-icon { font-size: 1.5rem; color: #C9A84C; margin-bottom: 12px; }
.feature-title { font-size: 1rem; font-weight: 700; color: #fff; margin-bottom: 8px; }
.feature-desc { font-size: 0.9rem; color: rgba(255,255,255,0.6); line-height: 1.6; }
.issues-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; margin-top: 32px; align-items: start; }
.issues-intro p { font-size: 1rem; color: rgba(255,255,255,0.75); line-height: 1.8; margin-bottom: 12px; }
.issues-list { list-style: none; padding: 0; margin: 0; }
.issues-list li { padding: 10px 0 10px 28px; position: relative; font-size: 0.95rem; color: rgba(255,255,255,0.75); border-bottom: 1px solid rgba(255,255,255,0.06); }
.issues-list li::before { content: '✓'; position: absolute; left: 0; color: #C9A84C; font-weight: 700; }
.content-narrow { max-width: 860px; margin: 0 auto; }
.content-title { font-size: 1.75rem; font-weight: 800; color: #fff; margin-bottom: 24px; }
.content-narrow p { font-size: 1rem; color: rgba(255,255,255,0.75); line-height: 1.8; margin-bottom: 18px; }
.secure-list { list-style: none; padding: 0; margin: 16px 0 0; }
.secure-list li { padding: 8px 0 8px 24px; position: relative; font-size: 0.95rem; color: rgba(255,255,255,0.75); }
.secure-list li::before { content: '→'; position: absolute; left: 0; color: #C9A84C; }
.cta-band { background: linear-gradient(135deg, #0f1220, #13161F); border-top: 1px solid rgba(255,255,255,0.08); padding: 72px 0; }
.cta-band-inner { display: flex; justify-content: space-between; align-items: flex-start; gap: 48px; flex-wrap: wrap; }
.cta-title { font-size: 2rem; font-weight: 900; color: #fff; margin-bottom: 12px; }
.cta-sub { font-size: 1rem; color: rgba(255,255,255,0.65); line-height: 1.7; margin-bottom: 16px; max-width: 540px; }
.cta-list { list-style: none; padding: 0; margin: 0 0 24px; }
.cta-list li { padding: 6px 0 6px 24px; position: relative; font-size: 0.95rem; color: rgba(255,255,255,0.75); }
.cta-list li::before { content: '→'; position: absolute; left: 0; color: #C9A84C; }
.cta-actions { display: flex; gap: 16px; flex-wrap: wrap; align-items: center; }
.btn-outline { display: inline-block; padding: 14px 28px; border: 2px solid #C9A84C; color: #C9A84C; border-radius: 8px; font-weight: 700; font-size: 0.95rem; text-decoration: none; }
.btn-outline:hover { background: rgba(201,168,76,0.1); }
.faq-list { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 8px; }
.faq-item { background: var(--card-bg); border: 1px solid var(--border); border-radius: 10px; overflow: hidden; }
.faq-item.open { border-color: var(--gold); }
.faq-question { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; background: none; border: none; color: var(--white); font-size: 16px; font-weight: 600; cursor: pointer; text-align: left; gap: 12px; font-family: var(--font-body); }
.faq-icon { color: var(--gold); font-size: 22px; font-weight: 400; flex-shrink: 0; }
.faq-answer { padding: 0 24px 20px; font-size: 15px; color: var(--muted); line-height: 1.7; }
@media (max-width: 768px) { .issues-layout { grid-template-columns: 1fr; } .cta-band-inner { flex-direction: column; } }
</style>
