<script setup lang="ts">
useSeoMeta({
  title: 'Seagate Data Recovery — Five Star Data Recovery',
  description: 'When your Seagate hard drive stops working, it can feel like everything is lost. At Five Star Data Recovery, we focus on Seagate Data Recovery. We help people a'
})
const faqs = [
  { q: '1. How much does Seagate Data Recovery cost?', a: 'At Five Star Data Recovery, our Seagate data recovery pricing is based on the drive’s capacity, connection type, and condition. All pricing is flat-rate — no hourly billing or surprise charges. Here’s the general breakdown: $300.00 for standard Seagate SATA drives (desktop or laptop) up to 2TB in capacity$500.00 for Seagate External Hard Drives and internal drives up to 6TB$600.00 for Seagate external drives between 8TB and 12TB, including USB 3.0 and USB-C models$800.00 for very high-capacity Seagate drives (over 12TB) due to the extended imaging time and hardware strain$950.00 for Seagate drives with mechanical issues requiring clean room repair, such as clicking drives or internal head crashes We offer a free evaluation before starting any recovery to determine the correct pricing tier. For a full breakdown, visit our data recovery cost page.' },
  { q: '2. Do you recover data from all types of Seagate drives?', a: 'Yes, we recover data from all Seagate storage devices, including Seagate Barracuda, IronWolf, Expansion, Backup Plus, and portable external drives. Whether it’s internal or external, HDD or SSD — we’ve got you covered.' },
  { q: '3. Can you recover data from Seagate drives that are no longer detected by the computer?', a: 'Absolutely. If your Seagate hard drive is not showing up, the issue could be with the firmware, file system, USB controller, or internal damage. We perform thorough diagnostics to find the cause and recover your files.' },
  { q: '4. What causes the "Seagate drive light is on but not working" issue?', a: 'This is a common issue in Seagate external drives. The drive may receive power but fail to initialize due to PCB failure, firmware corruption, or a bad USB-to-SATA bridge. We have the tools and expertise to recover your data in these cases.' },
  { q: '5. How do you handle clicking Seagate hard drives?', a: 'A clicking Seagate drive typically means a mechanical failure, such as damaged read/write heads or motor issues. We recover these in a cleanroom using donor parts to safely extract your data without causing more harm.' },
  { q: '6. Can you recover data from a Seagate drive that was dropped?', a: 'Yes, drops and shocks can lead to mechanical failure or head misalignment. We frequently perform physical data recovery from dropped Seagate drives and have high success rates in such scenarios.' },
  { q: '7. Do you provide Seagate data recovery for RAID arrays?', a: 'We specialize in Seagate RAID recovery for all configurations — including RAID 0, RAID 1, RAID 5, and hybrid setups. Whether it’s a NAS using Seagate IronWolf drives or a server array, we clone the drives and recover the data without using the originals.' },
  { q: '8. Is it possible to recover data from a Seagate SSD?', a: 'Yes. We handle Seagate SSD data recovery as well, including cases of NAND failure, firmware issues, or damaged controllers. SSDs are complex, but our engineers are trained in both chip-level and software-level recovery techniques.' },
  { q: '9. How long does Seagate Data Recovery take?', a: 'Most Seagate data recovery cases are completed within 3 to 5 business days. This applies to standard recoveries, including logical issues, non-encrypted USB drives, and drives with minor firmware problems. For cleanroom cases with mechanical failures, like clicking or unresponsive drives, recovery may take a few extra days. This is because it takes time to find compatible donor parts. If you need faster service, we also offer Expedited and Expedited Plus options for priority turnaround. Every case begins with a free evaluation, where we’ll confirm the expected timeframe based on your drive’s condition.' }
]

const reviews = [
  { text: 'I had a Seagate external hard drive that suddenly stopped working. It wasn\'t showing up on my computer at all. I called Five Star Data Recovery and Elen answered all my questions and made me feel at ease. Within a few days, they recovered 100% of my important files. The communication and service were outstanding!', name: 'Jessica L.', location: 'Los Angeles' },
  { text: 'My Seagate drive started making clicking noises, and I panicked. After some research, I found Five Star Data Recovery. Alex worked on my case and explained that the issue was mechanical. They performed a clean room recovery and were able to retrieve almost 99% of my data. I couldn\'t be happier with the results.', name: 'Robert M.', location: 'Phoenix, AZ' },
  { text: 'My Seagate drive showed up as RAW format and none of my files were accessible. Five Star Data Recovery diagnosed it quickly and got back almost all of my documents and photos. Their honesty, speed, and professionalism stood out. I highly recommend them for Seagate data recovery.', name: 'Daniel T.', location: 'Denver, CA' }
]

const whyUs = [
  { title: 'Years of Seagate Experience', desc: 'Years of experience handling all types of Seagate models — from Barracuda to IronWolf to external drives.' },
  { title: 'High Recovery Success Rates', desc: 'High recovery success rates for even severely damaged devices — we succeed where others fail.' },
  { title: 'In-House Cleanroom', desc: 'In-house cleanroom for safe internal repairs on mechanically damaged Seagate drives.' },
  { title: 'Encrypted Storage Support', desc: 'We handle encrypted or password-protected Seagate storage devices with care.' },
  { title: 'No Data, No Charge', desc: 'No data, no charge — if we can\'t recover anything, you pay nothing. Guaranteed.' },
  { title: 'Transparent Pricing', desc: 'Transparent pricing and clear communication every step of the way. No surprises.' }
]
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="Seagate Data Recovery"
      subtitle="Get Your Data Back In No Time."
      description="When your Seagate hard drive stops working, it can feel like everything is lost. At Five Star Data Recovery, we focus on Seagate Data Recovery. We help people and businesses recover their important files quickly, safely, and affordably. Whether you're dealing with a corrupted partition or a physical"
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

    <!-- Common Issues -->
    <section class="issues-section section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Common Seagate Drive Issues</h2>
        </div>
        <div class="issues-layout">
          <div class="issues-intro">
            <p>We see a wide range of problems with Seagate devices. Whether it's a backup drive, a desktop model, or a portable USB, issues can strike at any time. Some of the most common include:</p>
          </div>
          <ul class="issues-list">
            <li>Seagate external hard drive not working or not powering on</li>
            <li>Clicking or grinding noises from the drive</li>
            <li>Seagate Hard drive not working after an unexpected shutdown</li>
            <li>Devices that appear in Disk Management but not in File Explorer</li>
            <li>Corrupted or unreadable file system errors</li>
          </ul>
        </div>
        <p class="issues-outro">No matter the issue, our team is skilled at diagnosing and recovering data from any damaged device.</p>
      </div>
    </section>

    <!-- How We Recover -->
    <section class="content-section section-bg-1 section-pad">
      <div class="container content-narrow">
        <h2 class="content-title">How We Recover Seagate Data</h2>
        <p>Our lab is equipped with the tools and expertise to work on hdds, ssds or flash devices from Seagate. If you dropped your external drive, exposed it to liquid, or it suddenly stopped working, don't worry. We'll safely open the device, learn what went wrong, and start salvaging data from corrupted hardware.</p>
        <p>Depending on the issue, your drive may need internal repairs in our cleanroom. Once stable, we create a secure image of the device and extract as much recoverable data as possible. We then copy all files stored onto a new drive that you provide or purchase from us.</p>
        <p>Our pricing is based on the type of failure and drive model, and we'll always provide a clear data recovery cost quote before starting.</p>
      </div>
    </section>

    <!-- What Causes Data Loss -->
    <section class="content-section section-bg-2 section-pad">
      <div class="container content-narrow">
        <h2 class="content-title">What Causes Data Loss on Seagate Drives?</h2>
        <p>Data loss can happen for many reasons. Some problems are software-related, like file system corruption or a failed operating system update. Other failures stem from physical damage, such as head crashes, bad sectors, or worn-out components.</p>
        <p>We also recover from accidental formatting, power surges, and damaged storage media devices that users improperly removed or mishandled.</p>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="why-section section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Why Choose Us for Seagate Hard Disk Data Recovery?</h2>
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

    <!-- Process Steps -->
    <section class="process-section section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Data Recovery Process</h2>
          <p class="section-subtitle">Our data recovery process is built around security, transparency, and peace of mind. From start to finish, we keep you informed with clear updates at every stage.</p>
        </div>
        <div class="process-grid">
          <div class="process-card">
            <div class="process-num">01</div>
            <h3 class="process-title">Drop off or Mail in Your Drive</h3>
            <p class="process-desc">Bring your Seagate drive to our Glendale lab or ship it to us free from anywhere in the U.S.</p>
          </div>
          <div class="process-card">
            <div class="process-num">02</div>
            <h3 class="process-title">Receive a Free Diagnosis</h3>
            <p class="process-desc">Our team will evaluate your device and provide a detailed diagnosis along with an initial quote — completely free of charge and with no obligation to proceed.</p>
          </div>
          <div class="process-card">
            <div class="process-num">03</div>
            <h3 class="process-title">Our Engineers Recover Your Data</h3>
            <p class="process-desc">We carefully begin the recovery process using advanced tools and cleanroom procedures.</p>
          </div>
          <div class="process-card">
            <div class="process-num">04</div>
            <h3 class="process-title">Review &amp; Approve the Recovered</h3>
            <p class="process-desc">After recovery is complete, you'll receive a detailed file list to review so you can confirm everything important has been successfully recovered.</p>
          </div>
          <div class="process-card">
            <div class="process-num">05</div>
            <h3 class="process-title">Receive Your Recovered Data</h3>
            <p class="process-desc">Once approved, we'll securely transfer your data to a new drive and return it to you via pickup or insured shipping — ready for immediate use.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="reviews-section section-bg-2 section-pad">
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

    <!-- Fast Service -->
    <section class="content-section section-bg-3 section-pad">
      <div class="container content-narrow">
        <h2 class="content-title">Fast Service and Secure Handling</h2>
        <p>We know how important your data is, and we work fast to get it back to you. After your free diagnostic, you will get an estimated turn around time. This will depend on your drive's condition and the recovery's complexity. In many cases, we complete recoveries in just a few business days.</p>
        <p>We handle all data in-house under strict security standards to protect your privacy. We never outsource, and we return all drives safely, whether you choose to pick up your files or have us ship them back.</p>
      </div>
    </section>

    <!-- CTA Band -->
    <section class="cta-band">
      <div class="container cta-band-inner">
        <div>
          <h2 class="cta-title">Start Your Seagate Recovery Today</h2>
          <p class="cta-sub">If your Seagate hard disk data recovery situation feels urgent, don't wait. Powering the drive on repeatedly can make things worse. Let our professionals handle the recovery process the right way.</p>
          <ul class="cta-list">
            <li>Drop off your drive at our lab</li>
            <li>Ship it to us from anywhere in the U.S.</li>
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
          <h2 class="cta-title">Need Help With Seagate Data Recovery?</h2>
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
/* Process cards */
.process-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px; margin-top: 40px; }
.process-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 28px 24px; }
.process-num { font-size: 2.5rem; font-weight: 900; color: #C9A84C; line-height: 1; margin-bottom: 12px; }
.process-title { font-size: 1rem; font-weight: 700; color: #fff; margin-bottom: 10px; }
.process-desc { font-size: 0.9rem; color: rgba(255,255,255,0.6); line-height: 1.6; }
/* Review cards */
.reviews-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-top: 40px; }
.review-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 28px; }
.review-stars { color: #C9A84C; font-size: 1.1rem; margin-bottom: 12px; }
.review-text { font-size: 0.95rem; color: rgba(255,255,255,0.75); line-height: 1.7; margin-bottom: 16px; font-style: italic; }
.review-author { font-size: 0.875rem; font-weight: 700; color: #C9A84C; }
/* Feature cards */
.grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; margin-top: 40px; }
.feature-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 28px 24px; }
.feature-icon { font-size: 1.5rem; color: #C9A84C; margin-bottom: 12px; }
.feature-title { font-size: 1rem; font-weight: 700; color: #fff; margin-bottom: 8px; }
.feature-desc { font-size: 0.9rem; color: rgba(255,255,255,0.6); line-height: 1.6; }
/* Issues layout */
.issues-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; margin-top: 32px; align-items: start; }
.issues-intro p { font-size: 1rem; color: rgba(255,255,255,0.75); line-height: 1.8; }
.issues-list { list-style: none; padding: 0; margin: 0; }
.issues-list li { padding: 10px 0 10px 28px; position: relative; font-size: 0.95rem; color: rgba(255,255,255,0.75); border-bottom: 1px solid rgba(255,255,255,0.06); }
.issues-list li::before { content: '✓'; position: absolute; left: 0; color: #C9A84C; font-weight: 700; }
.issues-outro { font-size: 1rem; color: rgba(255,255,255,0.65); margin-top: 32px; }
/* Content sections */
.content-narrow { max-width: 860px; margin: 0 auto; }
.content-title { font-size: 1.75rem; font-weight: 800; color: #fff; margin-bottom: 24px; }
.content-narrow p { font-size: 1rem; color: rgba(255,255,255,0.75); line-height: 1.8; margin-bottom: 18px; }
/* CTA band */
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
/* FAQ */
.faq-list { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 8px; }
.faq-item { background: var(--card-bg); border: 1px solid var(--border); border-radius: 10px; overflow: hidden; }
.faq-item.open { border-color: var(--gold); }
.faq-question { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; background: none; border: none; color: var(--white); font-size: 16px; font-weight: 600; cursor: pointer; text-align: left; gap: 12px; font-family: var(--font-body); }
.faq-icon { color: var(--gold); font-size: 22px; font-weight: 400; flex-shrink: 0; }
.faq-answer { padding: 0 24px 20px; font-size: 15px; color: var(--muted); line-height: 1.7; }
@media (max-width: 768px) { .issues-layout { grid-template-columns: 1fr; } .cta-band-inner { flex-direction: column; } }
</style>
