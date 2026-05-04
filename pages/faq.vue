<script setup lang="ts">
useSeoMeta({
  title: 'Frequently Asked Questions — Five Star Data Recovery',
  description: 'Find answers to common questions about data recovery services, pricing, process, and turnaround time at Five Star Data Recovery in Glendale, CA.'
})

const faqs = [
  { q: 'What is Expedited Plus Data Recovery?', a: "Expedited Plus is our highest-priority data recovery service, designed for urgent cases that require immediate attention. Your case is handled 24/7—including nights, weekends, and holidays—by our top-tier engineers. If your data recovery can't wait, this is the fastest and most dedicated solution we offer." },
  { q: 'How is Expedited Plus different from your regular Expedited Service?', a: "While our standard Expedited Service prioritizes your case during business hours, Expedited Plus goes beyond that. This service guarantees continuous, around-the-clock recovery efforts from the moment your device arrives at our lab. It's ideal for critical business needs, time-sensitive data, or personal emergencies." },
  { q: 'Do you provide updates throughout the Expedited Plus process?', a: "Yes. With Expedited Plus, you'll receive regular updates from our engineers and direct communication regarding the progress of your recovery. You're never left in the dark." },
  { q: 'When should I choose Expedited Plus over standard service?', a: "Choose Expedited Plus when time is critical. Whether you're facing a business deadline, legal matter, or need emergency data recovery, this service ensures that your case gets uninterrupted attention from our most experienced recovery engineers." },
]
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />
    <HeroSection
      title="Frequently Asked Questions"
      subtitle="We Have Answers."
      description="Have questions about the data recovery process, pricing, shipping, or our security policies? Our General FAQ page covers the most common concerns from customers nationwide. Whether you're curious about turnaround times, payment options, or how to safely ship your device, you'll find clear and helpful answers here."
      bgImage="/hard-drive-data-recovery-specialist-glendale-ca.jpg"
    />
    <StatsBar />

    <section class="s-grey">
      <div class="container">
        <div class="section-label center">Got Questions?</div>
        <h2 class="s-heading center">Frequently Asked Questions</h2>
        <div class="faq-wrap">
          <div v-for="(faq, i) in faqs" :key="i" class="faq-row" :class="{ active: openFaq === i }">
            <button class="faq-trigger" @click="toggleFaq(i)">
              <span>{{ faq.q }}</span>
              <span class="faq-toggle">{{ openFaq === i ? '−' : '+' }}</span>
            </button>
            <div v-if="openFaq === i" class="faq-answer" v-html="faq.a" />
          </div>
        </div>
      </div>
    </section>

    <section class="s-white" style="text-align:center;">
      <div class="container" style="max-width:680px;margin:0 auto;">
        <h2 class="s-heading center">Still Have Questions?</h2>
        <p class="s-intro center">Our team is available 24/7 to answer your questions and guide you through the recovery process. Get in touch today.</p>
        <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;">
          <NuxtLink to="/start-recovery" class="btn-gold-full" style="max-width:280px;">Start Your Recovery</NuxtLink>
          <NuxtLink to="/contact" style="display:inline-block;max-width:280px;width:100%;text-align:center;border:2px solid #C9A84C;color:#C9A84C;padding:16px 36px;border-radius:8px;font-weight:800;font-size:1rem;text-decoration:none;">Contact Us</NuxtLink>
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
.s-white { background: #fff; padding: 88px 0; }
.s-grey { background: #f4f7fc; padding: 88px 0; }
.section-label { font-size: 0.72rem; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; color: #C9A84C; margin-bottom: 10px; }
.section-label.center { text-align: center; }
.s-heading { font-size: clamp(1.5rem, 2.8vw, 2.1rem); font-weight: 900; color: #1a1a2e; line-height: 1.25; margin-bottom: 14px; }
.s-heading.center { text-align: center; }
.s-intro { font-size: 1rem; color: #4a5568; line-height: 1.75; margin-bottom: 40px; }
.s-intro.center { text-align: center; max-width: 700px; margin-left: auto; margin-right: auto; }
.s-body { font-size: 0.94rem; color: #4a5568; line-height: 1.8; margin-bottom: 14px; }
.faq-wrap { margin: 40px 0 0; display: flex; flex-direction: column; gap: 8px; }
.faq-row { border: 1.5px solid #e2e8f0; border-radius: 10px; overflow: hidden; background: #fff; }
.faq-row.active { border-color: #C9A84C; }
.faq-trigger { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; background: none; border: none; color: #1a1a2e; font-size: 1rem; font-weight: 700; cursor: pointer; text-align: left; gap: 16px; font-family: inherit; }
.faq-toggle { color: #C9A84C; font-size: 1.4rem; font-weight: 300; flex-shrink: 0; line-height: 1; }
.faq-answer { padding: 4px 24px 20px; font-size: 0.9rem; color: #4a5568; line-height: 1.8; border-top: 1px solid #f0f2f7; }
.faq-answer :deep(.faq-link) { color: #C9A84C; font-weight: 600; text-decoration: underline; }
.faq-answer :deep(.faq-link:hover) { color: #b8923e; }
.btn-gold-full { display: block; width: 100%; text-align: center; background: #C9A84C; color: #1a1a1a; padding: 18px; border-radius: 8px; font-weight: 800; font-size: 1.05rem; text-decoration: none; letter-spacing: 0.04em; transition: background 0.2s; }
.btn-gold-full:hover { background: #b8923e; }
</style>
