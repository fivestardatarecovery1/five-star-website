<script setup lang="ts">
useSeoMeta({
  title: 'Professional Data Recovery Services — Five Star Data Recovery',
  description: 'If you’ve been searching for data recovery near me, look no further. Five Star Data Recovery is proud to be one of the most trusted and top-rated data recovery '
})
const faqs = [
  { q: '1. How much does Data Recovery Cost?', a: 'The cost of data recovery depends on several factors, including the type of device, the nature of the failure, and the complexity of the recovery process. For example, recovering data from a hard drive with logical issues is generally less expensive than performing a chip-off recovery on a physically damaged SD card or USB drive. At Five Star Data Recovery, our pricing is flat-rate and transparent, with no hidden fees. We also offer a free evaluation in most cases, so you’ll know exactly what to expect before moving forward. For certain recovery types—like deleted file recovery or expedited services—there may be an upfront labor fee, which will be explained before any work begins. To see a full breakdown of our rates by device type and service level, please visit our Data Recovery Pricing Page. 💡 Typical Data Recovery Pricing by Service Device / Service Flat Rate Price Hard Drive Data Recovery (SATA) $300.00 – $800.00 External USB 3.0/USB C Hard Drives (WD, SanDisk, G-Drive) $600.00 SD Card Data Recovery (Logical) $300.00 SD Card Chip-Off / Monolith Recovery $950.00 USB Flash Drive Recovery $300.00 – $950.00 iPhone Data Recovery (Component Level) $950.00 RAID Data Recovery Starting at $300/drive Deleted File Recovery (Add-On) $500.00 ($200 upfront) Expedited Service (Business Hours) +$200.00 Expedited Plus (Nights/Weekends) +$500.00 Note: All prices are flat rate. No data = no charge (unless noted).' },
  { q: '2. What does a data recovery lab do?', a: 'A data recovery lab specializes in retrieving lost files from storage devices that have failed, become unreadable, or suffered corruption. Using advanced hardware and custom software tools, engineers work on drives that can’t be accessed through normal computer methods.' },
  { q: '3. I’m not near your location. Can I still use your services?', a: 'Absolutely. We offer a mail-in recovery option with free round-trip shipping anywhere in the United States . Just fill out our form and we’ll send you a prepaid label to ship your device to us securely.' },
  { q: '4. How does your fastest recovery option work for emergencies?', a: 'Our Expedited Plus Service puts your recovery at the top of our priority list with non-stop engineer focus, day and night, until the process is complete. This is ideal for businesses or individuals with time-sensitive data loss.' },
  { q: '5. Are there any hidden costs during the recovery process?', a: 'No. After diagnosing your case, we’ll provide a clear, flat-rate quote upfront . The only additional fee would be if you select an expedited service like Expedited Plus .' },
  { q: '6. Is there a way to check if my data is still recoverable before starting?', a: 'Yes. Before we begin any data recovery work, we always provide an initial quote after a free phone or email consultation. During this consultation, we’ll ask detailed questions about your device, its failure symptoms, and any previous recovery attempts. Once you approve the quoted price range, we’ll proceed with the diagnostic and recovery process. If we’re able to successfully recover your data within the pricing we originally quoted, we’ll automatically move forward with the recovery without requiring further approval—this helps avoid unnecessary delays. If, during the process, we discover that the issue is different and falls into a higher recovery category, we’ll contact you first with an updated quote before doing anything further. This approach ensures pricing transparency and keeps you fully informed throughout the entire process.' },
  { q: '7. Is there a risk of further damage to my device during the recovery process?', a: 'No. At Five Star Data Recovery, we never work directly on your original storage device when performing recovery. We first create a sector-by-sector clone of your drive and conduct all recovery work on the clone to ensure the integrity of your original media.' },
  { q: '8. Can I provide my own transfer drive for the recovered data?', a: 'Absolutely. Once your recovery is complete, you’re welcome to provide your own external hard drive, SSD, or USB drive for us to transfer the recovered files. If you don’t have one, we also offer new transfer drives for purchase.' },
  { q: '9. How do I know if my data is actually recoverable?', a: 'Every case starts with a free consultation and diagnostic evaluation. Based on the symptoms and test results, we’ll give you an honest assessment of the likelihood of recovery before you commit to the process.' },
  { q: '10. Do you recover data from devices that have suffered water or fire damage?', a: 'Yes, we specialize in physically damaged storage devices, including those affected by water exposure, flooding, or even fire. These cases often require clean room service and component-level repairs.' },
  { q: '11. What happens if my recovery case is extremely urgent?', a: 'For time-sensitive cases, we offer Expedited and Expedited Plus services. These options prioritize your case ahead of others and can dramatically reduce turnaround time—even providing 24/7 service if needed.' },
  { q: '12. Is there a size limit on the drives you work with?', a: 'No. We can recover data from drives as small as a USB flash drive to multi-terabyte enterprise RAID systems. Whether your storage device is 2GB or 20TB, we have the tools to handle it.' },
  { q: '13. What payment methods do you accept?', a: 'We accept all major credit cards, debit cards, and cash payments. For larger recovery projects, we also offer in-house payment plans with no credit check. Please contact us for details.' },
  { q: '14. Can you recover data from older hard drives and legacy storage formats?', a: 'Yes! We regularly perform data recovery on older hard drive models, including IDE hard drives , early-generation SATA drives , and legacy internal laptop or desktop drives. If you have an older storage device and aren’t sure if it’s recoverable, contact us for a free consultation.' },
  { q: '15. How should I package my device if I’m shipping it to you?', a: 'We recommend using anti-static materials and plenty of cushioning to prevent additional damage during transit. Once you fill out our Mail-In Recovery Form, we’ll provide a prepaid shipping label along with detailed packaging instructions.' },
  { q: '16. What if my drive was opened by another company before bringing it to you?', a: 'If the drive’s cover (where the platters are located) was opened by another lab or repair shop before arriving here, a non-refundable evaluation fee will apply due to the added complexity and risk involved in such cases.' }
]
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="Professional Data Recovery Services"
      subtitle="Get Your Data Back In No Time."
      description="If you’ve been searching for data recovery near me, look no further. Five Star Data Recovery is proud to be one of the most trusted and top-rated data recovery companies in Southern California. Conveniently located in Glendale, CA, we regularly serve walk-in customers from Los Angeles, Burbank, Pasa"
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
          <h2 class="section-title">What Are Data Recovery Services?</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Your external drive isn’t recognized</li>
            <li>You accidentally deleted files or formatted your device</li>
            <li>You see file system errors like “corrupt partition” or “drive not accessible”</li>
            <li>The device is physically damaged or makes clicking sounds</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What Devices Do We Recover Data From?</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Desktop &amp; Laptop Hard Drives</li>
            <li>Solid State Drives (SSD)</li>
            <li>External Drives</li>
            <li>iPhone Data Recovery</li>
            <li>Samsung Smartphones</li>
            <li>SD Cards &amp; Camera Media</li>
            <li>USB Flash Drives</li>
            <li>RAID Arrays &amp; Servers</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Proven Data Recovery Process</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Free Diagnostic: We examine your device and determine if we can recover data safely.</li>
            <li>Quote: You’ll get a flat-rate quote—no hidden fees. We believe in full transparency. That means no unexpected recovery costs—just honest pricing based on the complexity of your case.</li>
            <li>In-Lab Recovery: Our engineers use specialized tools in our clean room environment to extract your data.</li>
            <li>Verification: You’ll receive a list of recoverable files to approve.</li>
            <li>Delivery: We return your recovered files via a transfer drive you provide or purchase from us.</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Searching for “Data Recovery Near Me”?</h2>
        </div>
        <div class="section-body">
          <p>If you’ve been searching for data recovery near me, look no further. Five Star Data Recovery is proud to be one of the most trusted and top-rated data recovery companies in Southern California. Conveniently located in Glendale, CA, we regularly serve walk-in customers from Los Angeles, Burbank, Pasadena, West Hollywood, and surrounding cities. Our lab is equipped to handle everything from simple recoveries to complex, physically damaged devices.</p>
          <p>Not in the area? No problem. We also provide a fast, secure nationwide mail-in data recovery service that’s trusted by individuals and businesses across the U.S. Whether your hard drive stopped working, your SD card became unreadable, or your RAID server crashed—we’re the “data recovery near me” solution you can depend on, no matter where you’re located. Your data is safe in our hands.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Common Reasons You May Need Data Recovery</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Accidental deletion of important files</li>
            <li>Reformatting the drive without backup</li>
            <li>Virus or ransomware attacks</li>
            <li>Failed iOS or system updates</li>
            <li>Drops, spills, or other physical damage</li>
            <li>Electrical surges or overheating</li>
            <li>Crashes or corruption caused by a failed operating system update</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Data Recovery Process</h2>
        </div>
        <div class="section-body">
          <p>Our data recovery process is built around security, transparency, and peace of mind. From start to finish, we keep you informed with clear updates at every stage. With a commitment to honest service and no hidden fees, we follow through on every promise — ensuring a smooth and stress-free experience.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Drop off or Mail in Your Drive</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Receive a Free Diagnosis</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Engineers work on Recovering your Data</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Review &amp; Approve the Recovered</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Receive your recovered data</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Secure, Confidential, and Professional Data Recovery</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Never outsource or ship your device</li>
            <li>Work exclusively in our secure, in-house facility</li>
            <li>Delete your recovered files from our system after delivery</li>
            <li>Offer NDAs for sensitive projects upon request</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Tips to Avoid Permanent Data Loss</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Always back up important data (cloud + physical copy)</li>
            <li>Stop using a failing device immediately</li>
            <li>Don’t unplug a drive during file transfers</li>
            <li>Look out for early signs like freezing or clicking</li>
            <li>Contact a professional data recovery team before attempting DIY software or repair Early action can dramatically increase the chance of full recovery.</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What Our Clients Say</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Why Choose Five Star Data Recovery?</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Advanced equipment for both physical and logical recovery</li>
            <li>Certified technicians with deep experience</li>
            <li>On-site clean room lab for handling physically damaged devices</li>
            <li>Fast turnaround times and emergency service options</li>
            <li>Transparent communication and no surprises</li>
            <li>Trusted specialists in complex drive recovery cases</li>
            <li>“No Data, No Charge” policy</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Request a Free Quote!</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Let’s Recover Your Data Today</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Walk into our Glendale lab</li>
            <li>Mail in your device from anywhere</li>
            <li>Call now or request a free quote</li>
          </ul>
          <p>Data loss is stressful — but working with us doesn’t have to be. Watch how our team handles each recovery with care, professionalism, and precision. From diagnostics to delivery, we offer flat-rate pricing, honest communication, and proven results — all from our secure Glendale lab.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">💡 Typical Data Recovery Pricing by Service</h2>
        </div>
        <div class="section-body">
          <p>Note: All prices are flat rate. No data = no charge (unless noted).</p>
          <p>Our Expedited Plus Service puts your recovery at the top of our priority list with non-stop engineer focus, day and night, until the process is complete. This is ideal for businesses or individuals with time-sensitive data loss.</p>
          <p>Yes. Before we begin any data recovery work, we always provide an initial quote after a free phone or email consultation. During this consultation, we’ll ask detailed questions about your device, its failure symptoms, and any previous recovery attempts.</p>
          <p>Once you approve the quoted price range, we’ll proceed with the diagnostic and recovery process. If we’re able to successfully recover your data within the pricing we originally quoted, we’ll automatically move forward with the recovery without requiring further approval—this helps avoid unnecessary delays.</p>
          <p>If, during the process, we discover that the issue is different and falls into a higher recovery category, we’ll contact you first with an updated quote before doing anything further.</p>
          <p>This approach ensures pricing transparency and keeps you fully informed throughout the entire process.</p>
          <p>No. At Five Star Data Recovery, we never work directly on your original storage device when performing recovery. We first create a sector-by-sector clone of your drive and conduct all recovery work on the clone to ensure the integrity of your original media.</p>
          <p>Yes, we specialize in physically damaged storage devices, including those affected by water exposure, flooding, or even fire. These cases often require clean room service and component-level repairs.</p>
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
          <h2 class="cta-title">Need Help With Professional Data Recovery Services?</h2>
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
