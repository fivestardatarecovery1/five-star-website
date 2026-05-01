<script setup lang="ts">
useSeoMeta({
  title: 'Data Recovery FAQ — Frequently Asked Questions',
  description: 'Answers to the most common data recovery questions. Pricing, turnaround times, shipping, confidentiality, success rates, and more. Five Star Data Recovery. Call 323-672-3000.'
})

const categories = [
  {
    title: 'General Questions',
    faqs: [
      { q: 'What is data recovery?', a: 'Data recovery is the process of retrieving lost, deleted, inaccessible, or corrupted data from storage devices such as hard drives, SSDs, USB drives, SD cards, and RAID arrays. Professional data recovery uses specialized tools and techniques to access data that standard methods cannot reach.' },
      { q: 'Can all data be recovered?', a: 'Not always — but we succeed in the vast majority of cases. Recovery success depends on the type of failure, how long the drive was used after failure, and whether the data has been overwritten. We always provide an honest assessment during the free evaluation.' },
      { q: 'What types of devices do you recover from?', a: 'We recover from all storage media: hard drives (HDD), solid state drives (SSD), RAID arrays, NAS devices, USB flash drives, SD cards, CFast cards, iPhones, external hard drives, and more.' },
      { q: 'Do I need to come to your lab in person?', a: 'No. We offer free nationwide shipping both ways with a prepaid label. You can also visit our Glendale, CA lab in person, or request free same-day pickup in the Los Angeles area.' },
    ]
  },
  {
    title: 'Pricing & Payment',
    faqs: [
      { q: 'How much does data recovery cost?', a: 'Our flat-rate pricing starts at $300 for standard logical/firmware recovery, $400 for larger drives or more complex issues, and $650-$950 for cleanroom mechanical recovery. You receive an exact quote before any work begins.' },
      { q: 'What does "No Data = No Charge" mean?', a: 'It means exactly what it says. If we cannot recover your data, or if you review the recovered file list and decide not to proceed, you pay absolutely nothing. There is no evaluation fee and no charge for unsuccessful recoveries.' },
      { q: 'Is the evaluation really free?', a: 'Yes. The diagnostic evaluation is always completely free with no obligation to proceed. We will tell you exactly what\'s wrong and what we can do about it — at no charge.' },
      { q: 'Do you offer payment plans?', a: 'Yes. We offer flexible payment arrangements for qualifying recoveries. Contact us to discuss your situation and we will work with you.' },
      { q: 'Are there any hidden fees?', a: 'Never. Our pricing is fully transparent. The flat-rate quote we provide before beginning is your final price — no hourly charges, no evaluation fees, and no surprise costs.' },
    ]
  },
  {
    title: 'Process & Timeline',
    faqs: [
      { q: 'How long does data recovery take?', a: 'Standard recovery takes 3-5 business days. Our Expedited service takes 24-48 hours. Expedited Plus service can be same-day. Timeline depends on the type and severity of the failure — we provide a specific estimate during evaluation.' },
      { q: 'What happens during the free evaluation?', a: 'Our engineers examine your device using specialized diagnostic hardware. We identify the failure type, assess the recovery potential, and provide a flat-rate quote. The whole process is free and takes 1-24 hours depending on the failure type.' },
      { q: 'Will I know what files were recovered before paying?', a: 'Yes. We always provide a detailed file list for your review before you pay or receive the data. You approve the results, then we transfer your data to a new drive.' },
      { q: 'What happens to my device after recovery?', a: 'Your original device is returned to you along with the recovered data on a new drive. We retain no copies of your data after delivery (unless you request otherwise).' },
    ]
  },
  {
    title: 'Shipping & Logistics',
    faqs: [
      { q: 'How do I ship my device to you?', a: 'Contact us first. We\'ll provide a free prepaid shipping label and packing instructions. Pack the drive securely in an anti-static bag and padded box. Insured shipping is covered both ways.' },
      { q: 'Is shipping safe for a damaged drive?', a: 'Yes, if packed properly. We provide detailed packing instructions. For very severely damaged drives (clicking, not spinning), we recommend hand-delivery to our Glendale lab if possible.' },
      { q: 'Do you offer pickup service?', a: 'Yes — free same-day pickup is available in most Los Angeles area locations (Monday-Friday). Contact us before noon for same-day service.' },
      { q: 'How is my recovered data returned to me?', a: 'Your data is delivered on a new external hard drive (included in the recovery fee). We can also arrange secure download for smaller recoveries. Local clients can pick up in person.' },
    ]
  },
  {
    title: 'Security & Confidentiality',
    faqs: [
      { q: 'Is my data kept confidential?', a: 'Absolutely. We have strict data privacy and confidentiality policies. Your data is never shared, copied, or accessed beyond what is required for recovery. All staff sign confidentiality agreements.' },
      { q: 'Do you offer NDA agreements?', a: 'Yes. We can provide a Non-Disclosure Agreement upon request for sensitive personal or business data. This is available at no additional charge.' },
      { q: 'What happens to my data after recovery is complete?', a: 'Once you receive and confirm your data, we permanently delete all copies from our systems upon your request. By default, we retain a temporary backup for 30 days in case of delivery issues, then securely delete it.' },
      { q: 'Are your engineers background-checked?', a: 'Yes. All Five Star Data Recovery engineers undergo background screening as part of our security and confidentiality standards.' },
    ]
  },
]

const openFaq = ref<string | null>(null)
const toggleFaq = (key: string) => { openFaq.value = openFaq.value === key ? null : key }
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="Frequently Asked Questions"
      subtitle="Everything You Need to Know About Data Recovery."
      description="Clear answers to the most common questions about the data recovery process, pricing, shipping, security, and what to expect when working with Five Star Data Recovery."
    >
      <template #badges>
        <div class="trust-badges">
          <span class="badge">✅ No Hidden Fees</span>
          <span class="badge">✅ Free Evaluation</span>
          <span class="badge">✅ 24/7 Support</span>
        </div>
      </template>
    </HeroSection>

    <section class="faq-page-section">
      <div class="container">
        <div v-for="cat in categories" :key="cat.title" class="faq-category">
          <h2 class="cat-title">{{ cat.title }}</h2>
          <div class="faq-list">
            <div
              v-for="(faq, i) in cat.faqs"
              :key="i"
              class="faq-item"
              :class="{ open: openFaq === `${cat.title}-${i}` }"
            >
              <button class="faq-question" @click="toggleFaq(`${cat.title}-${i}`)">
                <span>{{ faq.q }}</span>
                <span class="faq-icon">{{ openFaq === `${cat.title}-${i}` ? '−' : '+' }}</span>
              </button>
              <div v-if="openFaq === `${cat.title}-${i}`" class="faq-answer">{{ faq.a }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-band">
      <div class="container cta-band-inner">
        <div><h2 class="cta-title">Still Have Questions?</h2><p class="cta-sub">Call us anytime — we're available 24/7/365. No question is too small.</p></div>
        <div class="cta-actions"><a href="tel:3236723000" class="btn btn-gold">📞 323-672-3000</a><NuxtLink to="/contact" class="btn btn-outline-sm">Contact Us</NuxtLink></div>
      </div>
    </section>
    <FooterBar />
  </div>
</template>

<style scoped>
.trust-badges { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 8px; }
.badge { background: rgba(255,255,255,0.06); border: 1px solid var(--border); color: var(--white); padding: 7px 14px; border-radius: 20px; font-size: 13px; font-weight: 500; }
.faq-page-section { padding: 80px 0; }
.faq-category { margin-bottom: 56px; }
.cat-title { font-family: var(--font-heading); font-size: 22px; font-weight: 800; color: var(--gold); margin-bottom: 20px; padding-bottom: 12px; border-bottom: 1px solid var(--border); }
.faq-list { display: flex; flex-direction: column; gap: 8px; }
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
