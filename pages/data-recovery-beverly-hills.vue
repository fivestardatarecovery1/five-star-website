<script setup lang="ts">
useSeoMeta({
  title: 'Data Recovery Beverly Hills, CA — Five Star Data Recovery',
  description: 'When critical data goes missing, trust Five Star Data Recovery to help recover what you thought was lost forever. We offer expert data recovery services for cus'
})
const faqs = [
  { q: '1. Do you offer data recovery services specifically in Beverly Hills?', a: 'Yes! While our main lab is located nearby, we proudly offer professional data recovery services in Beverly Hills with free same-day pickup. Whether it’s a failed hard drive, SSD, iPhone, or RAID system, our team is ready to help recover your data quickly and securely.' },
  { q: '2. How fast can you recover data for Beverly Hills customers?', a: 'Most standard Beverly Hills data recovery cases are completed within 3–5 business days . For urgent needs, we also offer Expedited and Expedited Plus services with 24/7 priority support. Call us for a free phone consultation.' },
  { q: '3. What types of devices can you recover data from in Beverly Hills?', a: 'We specialize in recovering data from: External and internal hard drives Solid-state drives (SSDs) iPhones and Android devices USB flash drives SD cards RAID and NAS systems Whatever your storage device, our data recovery experts in Beverly Hills can help.' },
  { q: '4. Is there a fee if you can’t recover my data?', a: 'We follow a No Data, No Charge policy for most standard recoveries in Beverly Hills. You only pay if we successfully recover your files. Some exceptions apply, such as deleted file cases or previously tampered drives.' },
  { q: '5. Do you provide free pickup in Beverly Hills for data recovery?', a: 'Yes! We offer free same-day pickup in Beverly Hills for all data recovery jobs. Just give us a call or fill out our request form, and we’ll arrange secure transportation of your device to our lab.' },
  { q: '6. What makes your Beverly Hills data recovery service different from others?', a: 'We stand out with our transparent flat-rate pricing , no data, no charge policy , and in-house recovery lab. Unlike many companies, we never outsource—we perform all recoveries ourselves to maintain the highest success rate and confidentiality for our Beverly Hills data recovery clients .' },
  { q: '7. Can you recover data from physically damaged hard drives in Beverly Hills?', a: 'Yes, we specialize in physically damaged drive recovery. Whether your drive is clicking, not powering on, or has water or impact damage, our data recovery engineers near Beverly Hills are equipped with cleanroom tools to handle complex cases.' },
  { q: '8. How secure is your data recovery process for Beverly Hills clients?', a: 'We prioritize data privacy and security. All Beverly Hills data recovery cases are handled in a secure environment, and your files are never shared or stored beyond the recovery process. Confidentiality agreements are also available upon request.' },
  { q: '9. Do you recover data from iPhones and smartphones in Beverly Hills?', a: 'Yes! We offer component-level iPhone data recovery in Beverly Hills and can recover data even from non-booting or physically damaged iPhones. Whether you need a full iTunes backup or file extraction, we’re here to help.' },
  { q: '10. How do I get started with your Beverly Hills data recovery service?', a: 'Getting started is easy. Call us for a free consultation or request a free same-day pickup in Beverly Hills. You can also mail your device or visit our lab. Once we receive it, we’ll provide a diagnostic and begin recovery as soon as you approve.' }
]
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="Data Recovery Beverly Hills, CA"
      subtitle="Get Your Data Back In No Time."
      description="When critical data goes missing, trust Five Star Data Recovery to help recover what you thought was lost forever. We offer expert data recovery services for customers in Beverly Hills, CA and surrounding areas. We’re located just a short distance from Beverly Hills and provide free same-day pickup t"
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
          <h2 class="section-title">Your Local Recovery Experts</h2>
        </div>
        <div class="section-body">
          <p>From luxury retailers to entertainment professionals, we’ve assisted Beverly Hills clients in recovering critical data from:</p>
          <ul class="content-list">
            <li>Hard drives that are clicking, unresponsive, or damaged</li>
            <li>Devices exposed to water or showing signs of physical damage</li>
            <li>Drives with deleted files or formatted partitions</li>
            <li>SSDs and flash drives experiencing failures</li>
            <li>RAID systems suffering from corruption or multiple drive failures</li>
          </ul>
          <p>Every recovery is performed securely, confidentially, and in-house by our expert engineers.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Why Beverly Hills Clients Choose Us</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>No Recovery, No Charge PolicyClients pay only if the recovery is successful. We charge no upfront fees (except in specific cases like deleted file recovery) — giving you peace of mind and risk-free service.</li>
            <li>Free Same-Day Pickup in Beverly HillsIf you're in a rush or can't come to us, we’ll come to you. Our free same-day pickup service in Beverly Hills makes the process effortless.</li>
            <li>Fast Turnaround with Optional Expedited ServicesStandard recoveries take 3–5 business days, but we also offer two levels of expedited services for clients on tight deadlines.</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">The Recovery Process</h2>
        </div>
        <div class="section-body">
          <ol class="content-list">
            <li>Initial Device Check-Up and DiagnosticsWe begin by inspecting the device in a safe environment to determine the cause of failure</li>
            <li>Non-Invasive Cloning of the DeviceOur first recovery step is always to clone the original drive sector by sector.</li>
            <li>File System and Data RepairAfter cloning, we analyze and rebuild the file system.</li>
            <li>Client Review and ApprovalYou’ll receive a full list of the recovered files to review.</li>
            <li>Final Delivery or Secure UploadYour recovered data is returned to you.</li>
          </ol>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Devices We Support</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>USB Drives, SSDs, and HDD Storage - From portable USB flash drives to internal and external hard drives (both solid-state and spinning disks).</li>
            <li>SD, microSD, and CF Cards - We recover lost files from memory cards used in cameras, phones, drones, and other digital devices.</li>
            <li>RAID Arrays - Our engineers specialize in RAID data recovery for RAID 0, 1, 5, 10, and hybrid configurations.</li>
            <li>iPhones (Component-Level Recovery) - We perform advanced hardware-level recovery on iPhones that have suffered severe physical damage or liquid exposure.</li>
            <li>MacBooks &amp; iMacs (Component-Level Recovery)If your Apple device won’t turn on due to logic board damage, we can perform board level repairs to retrieve your data.</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What customers Say</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Get a Free Quote within Minutes!</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Quick and Secure Data Recovery</li>
            <li>Expert Engineers for All Devices</li>
            <li>No Data, No Fee Guarantee</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Ready to Start?</h2>
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
          <h2 class="cta-title">Need Help With Data Recovery Beverly Hills, CA?</h2>
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
