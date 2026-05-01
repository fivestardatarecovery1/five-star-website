<script setup lang="ts">
useSeoMeta({
  title: 'FAQ — Data Recovery Questions Answered',
  description: 'Frequently asked questions about data recovery pricing, process, turnaround times, and more. Five Star Data Recovery, Glendale CA.'
})

const faqs = [
  { q: 'How much does data recovery cost?', a: 'Our pricing depends on the type of device and severity of damage. Standard logical recovery starts at $299. Advanced mechanical recovery ranges from $599–$1,199. Emergency service is $1,199–$2,500+. All cases receive a free evaluation and firm quote before work begins.' },
  { q: 'What does "No Data = No Charge" mean?', a: 'If our engineers determine that the data cannot be recovered — or if we attempt recovery and fail — you pay absolutely nothing. This policy applies to all cases.' },
  { q: 'How long does data recovery take?', a: 'Standard turnaround is 3-5 business days. Rush service (24-48 hours) is available for urgent cases. The timeline depends on the type and extent of damage.' },
  { q: 'Do I need to bring my device in person?', a: 'No. We provide free prepaid shipping labels for customers nationwide. Just contact us and we\'ll email you a shipping label. We pay for return shipping too.' },
  { q: 'Is my data safe with you?', a: 'Your privacy is our highest priority. We operate under strict confidentiality policies, and we can sign an NDA upon request. Your data is never shared, sold, or accessed beyond what\'s necessary for recovery.' },
  { q: 'My hard drive is clicking — what should I do?', a: 'Stop using it immediately! A clicking drive has failing read/write heads that are scratching the platters. Every spin causes more damage. Power it down and contact us right away.' },
  { q: 'Can you recover data from a water-damaged drive?', a: 'Yes — but time is critical. Water causes corrosion, and the longer you wait, the worse it gets. Do not try to dry it out or turn it on. Contact us immediately.' },
  { q: 'What file types can you recover?', a: 'We recover all file types: documents, photos, videos, databases, emails, CAD files, audio, and more. We also recover entire file system structures, not just individual files.' },
  { q: 'Do you offer corporate / enterprise contracts?', a: 'Yes. We work with businesses of all sizes and offer priority service agreements for enterprise clients. Contact us to discuss a custom contract.' },
  { q: 'What if only some of my data is recovered?', a: 'We present you with a full list of recoverable files before you pay anything. You can decide whether to proceed based on what we\'ve found. Partial recovery is sometimes the reality — and we\'re honest about it.' },
]

const openFaq = ref<number | null>(null)
const toggle = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />

    <HeroSection
      title="Frequently Asked Questions"
      subtitle="Honest Answers to Real Questions."
      description="We believe in full transparency. Here are the questions we get asked most — answered clearly and without jargon."
    />

    <section>
      <div class="container">
        <div class="faq-list">
          <div v-for="(faq, i) in faqs" :key="i" class="faq-item" :class="{ open: openFaq === i }">
            <button class="faq-question" @click="toggle(i)">
              <span>{{ faq.q }}</span>
              <span class="faq-icon">{{ openFaq === i ? '−' : '+' }}</span>
            </button>
            <div v-if="openFaq === i" class="faq-answer">{{ faq.a }}</div>
          </div>
        </div>

        <div class="faq-cta">
          <p>Still have questions? We're here 24/7.</p>
          <a href="tel:3236723000" class="btn btn-gold">Call 323-672-3000</a>
        </div>
      </div>
    </section>

    <FooterBar />
  </div>
</template>

<style scoped>
.faq-list { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 8px; }
.faq-item { background: var(--card-bg); border: 1px solid var(--border); border-radius: 10px; overflow: hidden; transition: border-color 0.2s; }
.faq-item.open { border-color: var(--gold); }
.faq-question { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; background: none; border: none; color: var(--white); font-size: 16px; font-weight: 600; cursor: pointer; text-align: left; gap: 12px; font-family: var(--font-body); }
.faq-icon { color: var(--gold); font-size: 22px; font-weight: 400; flex-shrink: 0; }
.faq-answer { padding: 0 24px 20px; font-size: 15px; color: var(--muted); line-height: 1.7; }
.faq-cta { text-align: center; margin-top: 56px; }
.faq-cta p { font-size: 18px; color: var(--muted); margin-bottom: 20px; }
</style>
