<script setup lang="ts">
useSeoMeta({
  title: 'Samsung Data Recovery — Five Star Data Recovery',
  description: 'If your Samsung phone has suffered liquid damage, a serious drop, or severe physical failure, we’re here to help. At Five Star Data Recovery, we specialize in c'
})
const faqs = [
  { q: '1. Can you recover data from a Samsung phone that won’t turn on?', a: 'Yes. We specialize in recovering data from non-working Samsung phones, including devices that won’t power on due to motherboard failure, power issues, or internal damage. Our engineers perform component-level board repairs to safely extract your data.' },
  { q: '2. What types of data can you recover from my Samsung device?', a: 'We can recover critical data stored on the internal memory of your Samsung phone, including photos, videos, contacts, text messages, call logs, notes, and app data. Once recovered, your files can be delivered as a full phone image or as individual folders, depending on your preference.' },
  { q: '3. Do you offer deleted file recovery for Samsung phones?', a: 'No, we do not offer deleted file recovery for Samsung devices. Our service is strictly focused on physically damaged or non-functional phones that require component-level repairs to access the data.' },
  { q: '4. What are the most common Samsung issues you handle for data recovery?', a: 'We frequently recover data from Samsung phones with power failures, boot loops, black screens, motherboard shorts, failed firmware updates, and water, fire or liquid damage. If the phone won’t turn on or is stuck at the Samsung logo, we can help.' },
  { q: '5. How much does Samsung data recovery cost?', a: 'Our Tier 3 Component Level data recovery cost for Samsung phones is a flat rate of $950.00. This covers most Samsung cases that require board-level repair and advanced micro-soldering to retrieve your data. Very rarely, a case may require a higher-tier recovery known as a “Chip-Off” procedure, which is only used when all other recovery methods have been exhausted and unsuccessful. If that happens, we will provide an updated quote before proceeding, and you will have the option to approve or decline the next step. We believe in full transparency—no hidden fees or surprise charges.' },
  { q: '6. Will my Samsung phone be repaired after the data recovery?', a: 'No. Our goal is to temporarily repair your phone just enough to extract the data safely. Once the recovery process is complete, the phone will not be returned in working condition for future use. The focus is strictly on recovering your files.' },
  { q: '7. How long does Samsung phone data recovery take?', a: 'Our standard turnaround time for Samsung component-level data recovery is 1 to 2 weeks, depending on the complexity of the issue and parts availability. If you need your data back faster, we offer two expedited options: Expedited Service: Recovery completed within 3–5 business daysExpedited Plus Service: Recovery completed within 1–3 days, including weekends and holidays. For detailed pricing on these expedited services, please visit our Pricing Page.' },
  { q: '8. Is my data safe and confidential during the recovery process?', a: 'Absolutely. Your data privacy is our top priority. We never access, share, or view your personal files beyond what’s necessary to complete the recovery. All data is handled securely within our lab.' },
  { q: '9. Can I mail in my Samsung phone for data recovery?', a: 'Yes! We offer free, fast, and insured round-trip shipping within the United States for Samsung data recovery clients. If you are not near our Glendale, CA, office, you can use our easy mail-in data recovery service.' },
  { q: '10. Do you charge a fee if the data isn’t recoverable?', a: 'We do not charge a recovery fee if the data is not recoverable. However, there is a fully refundable $200.00 deposit that is collected when the case is checked in. If we’re unable to recover your data, this deposit will be refunded in full. If we do recover your data, the $200 is applied toward your final recovery cost. Important exception: If your Samsung phone has already been worked on at the component level by another lab or repair shop (such as prior micro-soldering, chip replacements, or board work), a non-refundable evaluation fee of $200.00 will apply due to the increased risk and complexity. This exception does not apply to simple part replacements like screens or batteries—it’s strictly for phones that have had prior board-level work done.' }
]
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="Samsung Data Recovery"
      subtitle=""
      description="If your Samsung phone has suffered liquid damage, a serious drop, or severe physical failure, we’re here to help. At Five Star Data Recovery, we specialize in component-level Samsung mobile data recovery from devices that no longer power on, are stuck in a boot loop, or have suffered board-level dam"
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
          <h2 class="section-title">Common Causes of Data Loss on Samsung Devices</h2>
        </div>
        <div class="section-body">
          <p>The most common reason customers come to us is physical damage to their Samsung phone. This includes:</p>
          <ul class="content-list">
            <li>Water or liquid damage</li>
            <li>Severe impact from drops</li>
            <li>Burnt components or short circuits</li>
            <li>Devices that no longer power on or enter boot loops</li>
          </ul>
          <p>Our lab focuses on recovering data from Samsung phones. We help with hardware failures, damaged logic boards, and broken devices. If your phone has physical damage and contains important data, we’re here to help.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Devices We Recover From​</h2>
        </div>
        <div class="section-body">
          <p>We work with nearly every model of Samsung Galaxy phone and tablet, including:</p>
          <ul class="content-list">
            <li>Galaxy S21, S22, S23 Series</li>
            <li>Galaxy Note 8, 9, 10, 20</li>
            <li>Galaxy Z Fold and Z Flip</li>
            <li>Galaxy A and M Series</li>
            <li>Galaxy Tab devices</li>
          </ul>
          <p>No matter if your device turns on or is completely dead, we can often recover lost data. We use special techniques to access the internal storage.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Samsung Data Recovery Process</h2>
        </div>
        <div class="section-body">
          <p>At Five Star Data Recovery, we specialize in component-level Samsung mobile data recovery. We recover data from physically damaged Samsung phones. This includes phones with liquid spills, motherboard failures, or severe impacts.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Physical Diagnostic</h2>
        </div>
        <div class="section-body">
          <p>We inspect the Samsung device for board-level issues, such as short circuits, power failures, or corrosion.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Component-Level Repair</h2>
        </div>
        <div class="section-body">
          <p>Using micro-soldering and hardware diagnostics, we repair the device just enough to bring it back to life temporarily. This allows us to access the internal storage without altering or overwriting data.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Full Backup with Smart Switch</h2>
        </div>
        <div class="section-body">
          <p>Once the phone powers on, we create a complete backup using Smart Switch on your computer. This preserves all contacts, messages, app data, and settings.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Backup Delivery</h2>
        </div>
        <div class="section-body">
          <p>We provide the full backup to the customer on an external drive or help restore it to a new Samsung device.</p>
          <p>This method ensures a complete snapshot of your Samsung mobile phone data is saved without relying on third-party software or apps. We focus on helping customers recover important data. We use advanced Samsung mobile phone data recovery methods for serious hardware failures.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What You Need to Know</h2>
        </div>
        <div class="section-body">
          <p>While we are experts in hardware-level Samsung phone data recovery, there are some important limitations to note:</p>
          <ul class="content-list">
            <li>We do not offer deleted file recovery or software-based data recovery from working Samsung phones.</li>
            <li>We focus on phones that are physically damaged, such as those exposed to liquid or with failed motherboards.</li>
            <li>Our process requires that we temporarily power on the device in order to extract data.</li>
          </ul>
          <p>We do not use consumer recovery apps or offer services for phones with accidental file deletions but no hardware issues.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Why We Use Smart Switch</h2>
        </div>
        <div class="section-body">
          <p>After repairing a physically damaged Samsung phone, we use Smart Switch on your computer to make a full backup of the device. This tool is the safest and most complete way to extract user data, allowing us to save everything — including settings, apps, contacts, messages, and photos — in a structured backup file.</p>
          <p>This backup can then be restored onto a new Samsung Galaxy phone or saved to an external storage device for future use.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Your Data Is Safe with Us</h2>
        </div>
        <div class="section-body">
          <p>We understand how private your files can be. Whether it's family photos, business documents, or sensitive texts, your data is handled with the highest level of confidentiality.</p>
          <ul class="content-list">
            <li>All recovery is done in-house—nothing is sent to third-party labs</li>
            <li>Devices and recovered files are kept secure and encrypted</li>
            <li>We permanently delete any copies after delivery</li>
          </ul>
          <p>You can trust our team for secure and discreet Samsung cell phone data recovery.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">We Serve Clients Nationwide</h2>
        </div>
        <div class="section-body">
          <p>Although we are based in Los Angeles, we work with customers all across the United States. If you're not local, we offer free round-trip shipping for all approved Samsung data recovery cases.</p>
          <p>Simply start a case on our website, and we’ll email you a prepaid label. Once your device arrives, our engineers begin the recovery process immediately.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Testimonials from Satisfied Clients</h2>
        </div>
        <div class="section-body">
          <div class="reviews-grid">
            <div class="review-card">
              <div class="review-stars">★★★★★</div>
              <p class="review-text">"My Samsung Galaxy phone completely died after a sudden power failure. Other repair shops told me the motherboard was fried and the data was gone. Five Star Data Recovery was my last hope—and they pulled through! They recovered my entire photo gallery and contacts. The communication from Elen was excellent, and I’m beyond grateful for their expertise."</p>
              <div class="review-author">Kevin R. — Dallas, TX</div>
            </div>
            <div class="review-card">
              <div class="review-stars">★★★★★</div>
              <p class="review-text">"My Samsung S10 was stuck in a boot loop after a system crash. I was terrified I had lost years of messages and pictures. Alex from Five Star Data Recovery worked on my phone at the component level and managed to retrieve a full copy of my internal storage. They saved memories I thought were gone forever."</p>
              <div class="review-author">Maria G. — Glendale, CA</div>
            </div>
            <div class="review-card">
              <div class="review-stars">★★★★★</div>
              <p class="review-text">"I had important business files saved only on my Samsung Galaxy that suddenly stopped powering on. After calling around, I found Five Star Data Recovery. Vahan took the time to explain how component-level recovery works and gave me realistic expectations. Thankfully, they recovered all my documents and photos. Highly recommended for Samsung phone data recovery!"</p>
              <div class="review-author">Emilie K. — Seattle, WA</div>
            </div>
          </div>
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
            <li>We specialize in Samsung phone data recovery</li>
            <li>Cleanroom-certified lab for hardware-level recovery</li>
            <li>Flat-rate pricing with no hidden fees</li>
            <li>“No data, no charge” policy (except expedited fees)</li>
            <li>Fast turnaround and expert support</li>
          </ul>
          <p>We’ve helped hundreds of clients with data recovery Samsung phone cases involving water damage, dead logic boards, and phones that wouldn’t power on — all using safe and proven hardware-level methods.</p>
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
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Get Started withSamsung Data Recovery Today</h2>
        </div>
        <div class="section-body">
          <p>Losing access to your phone data is stressful, especially when backups fail. Whether your Samsung Galaxy phone won’t turn on or was physically damaged, we’ll do everything we can to recover what matters most.</p>
          <p>Contact Five Star Data Recovery today or start your case online. Our team is here to make Samsung data recovery simple, safe, and successful.</p>
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
          <h2 class="cta-title">Need Help With Samsung Data Recovery?</h2>
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
/* Issues list */
.issues-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; margin-top: 32px; align-items: start; }
.issues-intro p { font-size: 1rem; color: rgba(255,255,255,0.75); line-height: 1.8; }
.issues-list { list-style: none; padding: 0; margin: 0; }
.issues-list li { padding: 10px 0 10px 28px; position: relative; font-size: 0.95rem; color: rgba(255,255,255,0.75); border-bottom: 1px solid rgba(255,255,255,0.06); }
.issues-list li::before { content: '✓'; position: absolute; left: 0; color: #C9A84C; font-weight: 700; }
/* Content text sections */
.content-narrow { max-width: 860px; margin: 0 auto; }
.content-title { font-size: 1.75rem; font-weight: 800; color: #fff; margin-bottom: 24px; }
.content-narrow p { font-size: 1rem; color: rgba(255,255,255,0.75); line-height: 1.8; margin-bottom: 18px; }
.secure-list { list-style: none; padding: 0; margin: 0; }
.secure-list li { padding: 8px 0 8px 24px; position: relative; font-size: 0.95rem; color: rgba(255,255,255,0.75); }
.secure-list li::before { content: '→'; position: absolute; left: 0; color: #C9A84C; }
/* CTA extensions */
.cta-list { list-style: none; padding: 0; margin: 0 0 24px; }
.cta-list li { padding: 6px 0 6px 24px; position: relative; font-size: 0.95rem; color: rgba(255,255,255,0.75); }
.cta-list li::before { content: '→'; position: absolute; left: 0; color: #C9A84C; }

</style>
