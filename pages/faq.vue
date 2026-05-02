<script setup lang="ts">
useSeoMeta({
  title: 'General Data Recovery FAQ\'s — Five Star Data Recovery',
  description: 'Answers to Common Questions About Our Services, Pricing, Process & Terms.'
})
const faqs = [
  { q: '1. Do you offer free shipping for mail-in data recovery cases?', a: 'Yes, we offer free round-trip shipping anywhere in the United States. Once you fill out our Mail-In Form, we’ll send you a prepaid shipping label.' },
  { q: '2. How long will it take for my device to arrive at your lab?', a: 'Most devices arrive within 1–2 business days when using our preferred carriers (FedEx or USPS).' },
  { q: '3. Can I choose my own shipping carrier?', a: 'Yes, you’re welcome to use any carrier you prefer, including your own FedEx or UPS account if that’s more convenient for you. If you choose to use your own shipping label, just make sure to include the intake form (which we’ll provide via email after you complete the Mail-In Form) inside your package. This ensures your device is checked in properly and without delay once it arrives at our lab.' },
  { q: '4. Is my device insured during shipping?', a: 'Our free shipping service includes basic tracking, but you can purchase additional insurance if needed. For valuable devices, we strongly recommend doing so.' },
  { q: '5. How do I pack my hard drive or device for mailing?', a: 'Use anti-static bags for internal drives, and wrap external devices securely with bubble wrap. Place the wrapped drive in a sturdy box with additional padding.' },
  { q: '6. Do you offer international shipping?', a: 'Currently, our free shipping offer applies only to U.S. addresses. International customers are responsible for sending and receiving their devices.' },
  { q: '7. Can I drop off my device in person instead of mailing it?', a: 'Yes! You’re welcome to drop off your device at our Glendale, CA lab during business hours.' },
  { q: '8. Do you notify me when my device arrives?', a: 'Yes. As soon as your device arrives at our lab and is checked in, you’ll receive a confirmation email or phone call.' },
  { q: '1. When is payment due for data recovery?', a: 'Payment is only due after we successfully recover your data and you’ve had a chance to review and approve the file list. However, there are a few exceptions that require an upfront, non-refundable fee. These include cases where the customer selects Expedited or Expedited Plus Service, Deleted File Recoveries, or situations where the hard drive’s cover has been previously opened before arriving at our lab. To clarify, by “cover,” we’re referring to the actual metal top of the hard drive where the internal platters are located—not the external plastic casing or enclosure. If the drive has been opened at the platter level by another repair shop or during a DIY attempt, it significantly increases the complexity and risk involved in the recovery process. In these situations, we charge a non-refundable evaluation fee to cover the additional time and labor needed for a proper cleanroom inspection and assessment.' },
  { q: '2. What payment methods do you accept?', a: 'We accept cash, all major credit cards, debit cards, Zelle, and bank transfers.' },
  { q: '3. Do you offer data recovery payment plans?', a: 'Yes! We offer flexible Payment Plans to help make data recovery more affordable. Typically, we require a 25% down payment upfront, with the remaining balance paid over an agreed-upon period. Once your data recovery is complete and you’ve approved the recovered file list, we’ll securely store your recovered data at our facility until the balance is paid in full. Your data will remain safely held and unavailable for release or transfer until the payment plan is fully satisfied. This ensures both the security of your data and fairness in the payment process.' },
  { q: '4. Are there any upfront fees?', a: 'Most standard cases require no upfront payment. However, Expedited Services, Deleted File Recoveries, and drives that were previously opened at the component level do require upfront fees.' },
  { q: '5. Do you charge sales tax?', a: 'No. Data recovery services are not subject to sales tax in California.' },
  { q: '6. Is there a fee if I decide not to proceed?', a: 'For most standard data recovery cases, there is no fee if you choose not to move forward after the initial diagnostic—as long as we haven’t started the recovery process. However, once you’ve agreed to the initial quote we provided during your consultation and we begin the recovery, the full balance will be due upon successful recovery, even if the results are 99% or more complete. This is because recovery efforts and engineering time begin immediately after your approval. That said, if during diagnostics we discover that your case is more complex than originally quoted and the price needs to change, you’ll always have the option to decline the updated quote and owe nothing. We want to make sure the entire process remains transparent and fair.' },
  { q: '7. Are donor parts included in your flat-rate pricing?', a: 'Yes. Our flat-rate pricing is fully inclusive and covers everything needed for your recovery, including any required donor parts such as compatible read/write heads, PCBs, or other internal drive components. There are no hidden part fees, no additional lab charges, and no surprise costs added later. The flat rate we quote you covers the entire recovery process from start to finish—including diagnostics, cleanroom work (if needed), parts, labor, and recovery engineering time. The only additional cost not included in the recovery fee is the new transfer drive where we will place your recovered data. You’re welcome to provide your own external drive, or you can purchase one from us if it’s more convenient.' },
  { q: '8. Can I get a written quote or invoice for approval?', a: 'Yes. Before you even drop off or ship your device to us, we start with a free phone or email consultation where we ask detailed questions about your device, symptoms, and failure type. Based on the information you provide, we’ll give you an accurate, upfront flat-rate quote for your specific case. If you prefer, we’re happy to provide a written quote for your records and approval. Once your device arrives at our lab, we begin the recovery process right away based on the quote we initially provided—without waiting for further approval—unless the actual condition of the device turns out to be different than what was described during the consultation. If that happens, we’ll pause the recovery and contact you with an updated quote for approval before proceeding. Our goal is full transparency with no hidden fees or surprises.' },
  { q: '1. How long does the data recovery process take?', a: 'Standard turnaround is 3–5 business days. Expedited options are available for faster service.' },
  { q: '2. Will I get updates during the recovery?', a: 'Yes, you’ll receive a same-day update on the day your device arrives and additional updates as your case progresses.' },
  { q: '3. How will I know what data was recovered?', a: 'Once the recovery process is complete, we’ll provide you with a detailed, interactive HTML file that lists all of the recovered folders and file names, as well as any files that could not be recovered. This easy-to-navigate report allows you to review the recovery results in full before making any payment decision. You’ll have the chance to go through the file list and determine if the recovery meets your needs and expectations. You are never obligated to proceed until you’ve had the opportunity to review and approve the recovered file list.' },
  { q: '4. Do you use original drives for recovery?', a: 'No, we never perform recovery work directly on your original drive, except for one critical step: creating a full sector-by-sector image (clone). The very first step in our recovery process (unless clean room repairs are required) is to use specialized imaging equipment to create a complete clone of your original drive onto a stable, working drive. Once the imaging process is complete, all recovery work—including file system rebuilding, file verification, and data extraction—is done from the cloned image, not your original drive. This ensures that your original media remains untouched and fully protected throughout the entire recovery process. Our priority is to minimize risk and preserve your original data source in its current state.' },
  { q: '5. Is clean room service included if needed?', a: 'Yes. We offer flat-rate pricing for both Logical and Clean Room data recovery cases, with no hidden fees. If your device requires Clean Room service—meaning the hard drive needs to be physically opened for internal repairs like head replacements or platter inspections—all Clean Room labor and necessary donor parts are included in the flat-rate price we provide during your consultation. We’ll always let you know upfront if your case falls into the Clean Room category before starting. If your recovery was quoted as a Logical case, there will never be surprise Clean Room fees added later. Our pricing model is fully transparent, so there are no unexpected costs once you approve the initial quote.' },
  { q: '6. What happens if my data isn’t recoverable?', a: 'You won’t pay a recovery fee. Exceptions apply only to special cases like deleted file recovery or prior tampering.' },
  { q: '7. Can I cancel the recovery mid-process?', a: 'In most cases, once you’ve agreed to the initial data recovery quote and we’ve started working on your case, cancellation is not possible. This is because we immediately allocate time, engineering resources, and often invest in donor parts specific to your drive as soon as recovery begins. However, if the condition of your device turns out to be different than originally described and the recovery price needs to change, we will pause the process and notify you with the updated quote. At that point, you will have the option to decline and cancel the recovery without owing anything further. We believe in full transparency and only proceed with your approval when circumstances change from the original agreement.' },
  { q: '8. Do you offer emergency, after-hours recovery?', a: 'Yes! Our Expedited Plus Service gives you 24/7 engineer attention—even on weekends and holidays.' },
  { q: '9. Is the transfer drive (the drive you put the recovered data onto) included in your price?', a: 'No, the cost of the transfer drive is not included in our data recovery pricing. The customer is responsible for providing a suitable transfer drive where we can save the recovered data. You’re welcome to bring your own new or used external drive, or if it’s more convenient, you can purchase a brand-new transfer drive from us at the time of your recovery. If you’re unsure what size or type of drive you’ll need, we’ll happily recommend the best option based on the size and type of your recovered data.' },
  { q: '1. Is my data kept private and confidential?', a: 'Absolutely. Your files are never accessed, shared, or viewed beyond what’s necessary for recovery.' },
  { q: '2. Do you make backup copies of my data?', a: 'No, we never keep a copy of your actual recovered files. As part of the recovery process, we create a forensic sector-by-sector image (clone) of your original drive, but this image is a raw, unreadable copy used strictly for recovery purposes—it’s not usable data. We retain this image only until you receive your recovered data and confirm successful delivery. Once you’ve confirmed that your data has been received and is accessible on your transfer drive, we permanently delete the recovery image from our systems to protect your privacy and ensure data security. We follow this policy for every customer—whether the case is for a single hard drive, SSD, RAID array, or mobile device.' },
  { q: '3. Can I get a Non-Disclosure Agreement (NDA)?', a: 'Yes. We’re happy to sign an NDA upon request for added peace of mind.' },
  { q: '4. Is your lab physically secure?', a: 'Yes. Our Glendale, CA facility has restricted access, surveillance, and strict security protocols.' },
  { q: '5. Will my data be viewed by your engineers?', a: 'We take your privacy and confidentiality very seriously. Our engineers do not browse through your personal files or access your data beyond what’s absolutely necessary for the recovery process. That said, to verify the integrity of the recovered data and ensure our system has accurately separated good files from corrupt or unreadable ones, our engineers may need to open and test one or two files during the final verification step. We always do this with the utmost respect for your privacy, and we make every effort to select files that do not appear sensitive in nature (such as generic file types like sample photos or non-confidential documents). Our goal is simply to ensure that the data we’re delivering to you is usable and complete.' },
  { q: '6. How long do you store my recovered data after delivery?', a: 'We typically retain a temporary backup for 7 days post-delivery in case of any transfer issues. After that, your data is permanently erased from our systems.' },
  { q: '7. Can I request immediate deletion after data delivery?', a: 'Yes, just let us know in writing and we’ll delete your data immediately after final delivery.' }
]
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="General Data Recovery FAQ's"
      subtitle="Answers to Common Questions About Our Services, Pricing, Process &amp; Terms."
      description="Answers to Common Questions About Our Services, Pricing, Process &amp; Terms."
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
          <h2 class="section-title">📦 Shipping &amp; Mail-In Service FAQs</h2>
        </div>
        <div class="section-body">
          <p>Yes, we offer free round-trip shipping anywhere in the United States. Once you fill out our Mail-In Form, we’ll send you a prepaid shipping label.</p>
          <p>Most devices arrive within 1–2 business days when using our preferred carriers (FedEx or USPS).</p>
          <p>Yes, you’re welcome to use any carrier you prefer, including your own FedEx or UPS account if that’s more convenient for you. If you choose to use your own shipping label, just make sure to include the intake form (which we’ll provide via email after you complete the Mail-In Form) inside your package. This ensures your device is checked in properly and without delay once it arrives at our lab.</p>
          <p>Our free shipping service includes basic tracking, but you can purchase additional insurance if needed. For valuable devices, we strongly recommend doing so.</p>
          <p>Use anti-static bags for internal drives, and wrap external devices securely with bubble wrap. Place the wrapped drive in a sturdy box with additional padding.</p>
          <p>Currently, our free shipping offer applies only to U.S. addresses. International customers are responsible for sending and receiving their devices.</p>
          <p>Yes! You’re welcome to drop off your device at our Glendale, CA lab during business hours.</p>
          <p>Yes. As soon as your device arrives at our lab and is checked in, you’ll receive a confirmation email or phone call.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">💳 Payment, Billing &amp; Policies FAQs</h2>
        </div>
        <div class="section-body">
          <p>Payment is only due after we successfully recover your data and you’ve had a chance to review and approve the file list. However, there are a few exceptions that require an upfront, non-refundable fee. These include cases where the customer selects Expedited or Expedited Plus Service, Deleted File Recoveries, or situations where the hard drive’s cover has been previously opened before arriving at our lab.</p>
          <p>To clarify, by “cover,” we’re referring to the actual metal top of the hard drive where the internal platters are located—not the external plastic casing or enclosure. If the drive has been opened at the platter level by another repair shop or during a DIY attempt, it significantly increases the complexity and risk involved in the recovery process. In these situations, we charge a non-refundable evaluation fee to cover the additional time and labor needed for a proper cleanroom inspection and assessment.</p>
          <p>We accept cash, all major credit cards, debit cards, Zelle, and bank transfers.</p>
          <p>Yes! We offer flexible Payment Plans to help make data recovery more affordable. Typically, we require a 25% down payment upfront, with the remaining balance paid over an agreed-upon period. Once your data recovery is complete and you’ve approved the recovered file list, we’ll securely store your recovered data at our facility until the balance is paid in full. Your data will remain safely held and unavailable for release or transfer until the payment plan is fully satisfied. This ensures both the security of your data and fairness in the payment process.</p>
          <p>Most standard cases require no upfront payment. However, Expedited Services, Deleted File Recoveries, and drives that were previously opened at the component level do require upfront fees.</p>
          <p>No. Data recovery services are not subject to sales tax in California.</p>
          <p>For most standard data recovery cases, there is no fee if you choose not to move forward after the initial diagnostic—as long as we haven’t started the recovery process.</p>
          <p>However, once you’ve agreed to the initial quote we provided during your consultation and we begin the recovery, the full balance will be due upon successful recovery, even if the results are 99% or more complete. This is because recovery efforts and engineering time begin immediately after your approval.</p>
          <p>That said, if during diagnostics we discover that your case is more complex than originally quoted and the price needs to change, you’ll always have the option to decline the updated quote and owe nothing. We want to make sure the entire process remains transparent and fair.</p>
          <p>Yes. Our flat-rate pricing is fully inclusive and covers everything needed for your recovery, including any required donor parts such as compatible read/write heads, PCBs, or other internal drive components. There are no hidden part fees, no additional lab charges, and no surprise costs added later. The flat rate we quote you covers the entire recovery process from start to finish—including diagnostics, cleanroom work (if needed), parts, labor, and recovery engineering time.</p>
          <p>The only additional cost not included in the recovery fee is the new transfer drive where we will place your recovered data. You’re welcome to provide your own external drive, or you can purchase one from us if it’s more convenient.</p>
          <p>Yes. Before you even drop off or ship your device to us, we start with a free phone or email consultation where we ask detailed questions about your device, symptoms, and failure type. Based on the information you provide, we’ll give you an accurate, upfront flat-rate quote for your specific case. If you prefer, we’re happy to provide a written quote for your records and approval.</p>
          <p>Once your device arrives at our lab, we begin the recovery process right away based on the quote we initially provided—without waiting for further approval—unless the actual condition of the device turns out to be different than what was described during the consultation. If that happens, we’ll pause the recovery and contact you with an updated quote for approval before proceeding. Our goal is full transparency with no hidden fees or surprises.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">⚙️ Recovery Process &amp; Timeline FAQs</h2>
        </div>
        <div class="section-body">
          <p>Standard turnaround is 3–5 business days. Expedited options are available for faster service.</p>
          <p>Yes, you’ll receive a same-day update on the day your device arrives and additional updates as your case progresses.</p>
          <p>Once the recovery process is complete, we’ll provide you with a detailed, interactive HTML file that lists all of the recovered folders and file names, as well as any files that could not be recovered. This easy-to-navigate report allows you to review the recovery results in full before making any payment decision.</p>
          <p>You’ll have the chance to go through the file list and determine if the recovery meets your needs and expectations. You are never obligated to proceed until you’ve had the opportunity to review and approve the recovered file list.</p>
          <p>No, we never perform recovery work directly on your original drive, except for one critical step: creating a full sector-by-sector image (clone). The very first step in our recovery process (unless clean room repairs are required) is to use specialized imaging equipment to create a complete clone of your original drive onto a stable, working drive.</p>
          <p>Once the imaging process is complete, all recovery work—including file system rebuilding, file verification, and data extraction—is done from the cloned image, not your original drive. This ensures that your original media remains untouched and fully protected throughout the entire recovery process. Our priority is to minimize risk and preserve your original data source in its current state.</p>
          <p>Yes. We offer flat-rate pricing for both Logical and Clean Room data recovery cases, with no hidden fees. If your device requires Clean Room service—meaning the hard drive needs to be physically opened for internal repairs like head replacements or platter inspections—all Clean Room labor and necessary donor parts are included in the flat-rate price we provide during your consultation.</p>
          <p>We’ll always let you know upfront if your case falls into the Clean Room category before starting. If your recovery was quoted as a Logical case, there will never be surprise Clean Room fees added later. Our pricing model is fully transparent, so there are no unexpected costs once you approve the initial quote.</p>
          <p>You won’t pay a recovery fee. Exceptions apply only to special cases like deleted file recovery or prior tampering.</p>
          <p>In most cases, once you’ve agreed to the initial data recovery quote and we’ve started working on your case, cancellation is not possible. This is because we immediately allocate time, engineering resources, and often invest in donor parts specific to your drive as soon as recovery begins.</p>
          <p>However, if the condition of your device turns out to be different than originally described and the recovery price needs to change, we will pause the process and notify you with the updated quote. At that point, you will have the option to decline and cancel the recovery without owing anything further. We believe in full transparency and only proceed with your approval when circumstances change from the original agreement.</p>
          <p>Yes! Our Expedited Plus Service gives you 24/7 engineer attention—even on weekends and holidays.</p>
          <p>No, the cost of the transfer drive is not included in our data recovery pricing. The customer is responsible for providing a suitable transfer drive where we can save the recovered data. You’re welcome to bring your own new or used external drive, or if it’s more convenient, you can purchase a brand-new transfer drive from us at the time of your recovery.</p>
          <p>If you’re unsure what size or type of drive you’ll need, we’ll happily recommend the best option based on the size and type of your recovered data.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">🔐 Security &amp; Privacy FAQs</h2>
        </div>
        <div class="section-body">
          <p>Absolutely. Your files are never accessed, shared, or viewed beyond what’s necessary for recovery.</p>
          <p>No, we never keep a copy of your actual recovered files. As part of the recovery process, we create a forensic sector-by-sector image (clone) of your original drive, but this image is a raw, unreadable copy used strictly for recovery purposes—it’s not usable data.</p>
          <p>We retain this image only until you receive your recovered data and confirm successful delivery. Once you’ve confirmed that your data has been received and is accessible on your transfer drive, we permanently delete the recovery image from our systems to protect your privacy and ensure data security.</p>
          <p>We follow this policy for every customer—whether the case is for a single hard drive, SSD, RAID array, or mobile device.</p>
          <p>Yes. We’re happy to sign an NDA upon request for added peace of mind.</p>
          <p>Yes. Our Glendale, CA facility has restricted access, surveillance, and strict security protocols.</p>
          <p>We take your privacy and confidentiality very seriously. Our engineers do not browse through your personal files or access your data beyond what’s absolutely necessary for the recovery process.</p>
          <p>That said, to verify the integrity of the recovered data and ensure our system has accurately separated good files from corrupt or unreadable ones, our engineers may need to open and test one or two files during the final verification step. We always do this with the utmost respect for your privacy, and we make every effort to select files that do not appear sensitive in nature (such as generic file types like sample photos or non-confidential documents).</p>
          <p>Our goal is simply to ensure that the data we’re delivering to you is usable and complete.</p>
          <p>We typically retain a temporary backup for 7 days post-delivery in case of any transfer issues. After that, your data is permanently erased from our systems.</p>
          <p>Yes, just let us know in writing and we’ll delete your data immediately after final delivery.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Testimonials from Satisfied Clients</h2>
        </div>
        <div class="section-body">
          <div class="reviews-grid">
            <div class="review-card">
              <div class="review-stars">★★★★★</div>
              <p class="review-text">"What really impressed me was how transparent the entire process was. Everything I read on their website—the pricing, the turnaround time, the no data no charge policy—was exactly how things turned out. No hidden fees, no surprises. It’s rare to find a company that sticks to its word like this. Highly recommend!"</p>
              <div class="review-author">Cesar R — San Francisco, CA</div>
            </div>
            <div class="review-card">
              <div class="review-stars">★★★★★</div>
              <p class="review-text">"The recovery took about two days longer than I originally expected, but honestly, I’m just grateful they were able to get my data back. I had already taken my drive to two other companies who said recovery wasn’t possible. Vahan pulled it off and saved all my important files. Definitely worth the wait."</p>
              <div class="review-author">Catherine — Los Angeles, CA</div>
            </div>
            <div class="review-card">
              <div class="review-stars">★★★★★</div>
              <p class="review-text">"I had a question about my case and decided to send an email late at night, not expecting a response until the next day. To my surprise, I got a reply back at 11 PM! They were able to answer my question and give me peace of mind right when I needed it. That level of customer care is hard to find."</p>
              <div class="review-author">Anton N. — Austin, TX</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Why Choose Five Star Data Recovery?</h2>
        </div>
        <div class="section-body">
          <p>Not all data recovery companies are equal. Here’s why we stand out:</p>
          <ul class="content-list">
            <li>Advanced equipment for both physical and logical recovery</li>
            <li>Certified technicians with deep experience</li>
            <li>On-site clean room lab for handling physically damaged devices</li>
            <li>Fast turnaround times and emergency service options</li>
            <li>Transparent communication and no surprises</li>
            <li>Trusted specialists in complex drive recovery cases</li>
            <li>“No Data, No Charge” policy</li>
          </ul>
          <p>We’re not just another tech repair shop. We’re a specialized data recover service provider trusted by thousands of clients across the U.S.</p>
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
          <h2 class="section-title">Let’s RecoverYour Files</h2>
        </div>
        <div class="section-body">
          <p>Whether you’re facing corrupted files, a dead drive, or critical data loss, we’re here to help. Let Five Star Data Recovery be your go-to data recovery service—local, secure, and trusted.</p>
          <ul class="content-list">
            <li>Walk into our Glendale lab</li>
            <li>Mail in your device from anywhere</li>
            <li>Call now or request a free quote</li>
          </ul>
          <p>Lost files? We’ll help you bring them back—safely and professionally.</p>
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
          <h2 class="cta-title">Need Help With General Data Recovery FAQ's?</h2>
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
