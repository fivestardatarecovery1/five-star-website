<script setup lang="ts">
useSeoMeta({
  title: 'Request A Quote — Five Star Data Recovery',
  description: 'Need a fast and accurate data recovery quote? Fill out our simple form and get a flat-rate quote within minutes. At Five Star Data Recovery, we provide transpar'
})
const faqs = [
  { q: '1. How long does it take to receive my free data recovery quote?', a: 'In most cases, you’ll receive your free data recovery quote within minutes after submitting your request or dropping off your device. Our team works quickly to assess the basic details and provide an initial flat-rate price based on the symptoms you describe or the information gathered during check-in.' },
  { q: '2. Is the free quote guaranteed to stay the same once you start the recovery?', a: 'We strive to be as accurate as possible, and in most cases, the quote you receive after diagnostics is final. However, if the issue turns out to be different than originally diagnosed or if additional problems are discovered during recovery, we’ll contact you immediately to discuss the new findings. You will always have the option to approve or decline any updated quote.' },
  { q: '3. Can I get a free quote over the phone?', a: 'Yes! We offer free phone consultations where you can describe your device issue, and we’ll provide an initial price estimate based on the symptoms you describe. For a guaranteed flat-rate quote, however, we’ll need to physically inspect the device first.' },
  { q: '4. Do I need to ship my device to get a free quote?', a: 'If you’re not local to Glendale, CA, you can take advantage of our free nationwide shipping program . Simply fill out our Mail-In Recovery Form , and we’ll provide you with a prepaid shipping label to send your device in for a free diagnostic and quote.' },
  { q: '5. What if I don’t want to proceed after receiving my free quote?', a: 'There’s no obligation to proceed with the recovery. For local drop-off clients, you can simply pick up your device at no charge. For mail-in clients, if you decide not to move forward, you will be responsible for paying the return shipping fee to have your device sent back. We’ll notify you of the exact return shipping cost before shipment.' },
  { q: '6. Will my device be opened during the free diagnostic process?', a: 'We do not open the physical cover of your device (such as opening the hard drive casing or SSD housing) during the initial free diagnostic. If clean room inspection becomes necessary, we’ll notify you in advance and get your approval before proceeding.' },
  { q: '7. Is your free quote a flat-rate price or hourly?', a: 'All of our quotes are flat-rate , based on the type of device and the specific failure. We do not charge hourly rates for data recovery, and there are no hidden fees.' },
  { q: '8. Does the free quote include expedited service pricing?', a: 'If you’re interested in expedited recovery, we can include Expedited Service and Expedited Plus Service pricing options along with your standard quote. This allows you to choose a turnaround speed that fits your needs and budget.' }
]
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="Request A Quote"
      subtitle="Get a Data Recovery Quote in Minutes"
      description="Need a fast and accurate data recovery quote? Fill out our simple form and get a flat-rate quote within minutes. At Five Star Data Recovery, we provide transparent flat-rate pricing with no hidden fees. Our team is available 24/7/365, ready to assist with any data loss situation. Guaranteed satisfac"
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
          <h2 class="section-title">Request A Quote</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Get a Data Recovery Quote in Minutes</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Need a fast and accurate data recovery quote? Fill out our simple form and get a flat-rate quote within minutes. At Five Star Data Recovery, we provide transparent flat-rate pricing with no hidden fees. Our team is available 24/7/365, ready to assist with any data loss situation. Guaranteed satisfaction and expert service—every step of the way. We specialize in recovering data from hard drives, SSDs, phones, RAID arrays, and more. Whether it’s a personal device or business-critical system, we’re here to help you get your data back quickly and affordably.</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Data Recovery Process</h2>
        </div>
        <div class="section-body">
          <p>Our data recovery process is built around security, transparency, and peace of mind. From start to finish, we keep you informed with clear updates at every stage. With a commitment to honest service and no hidden fees, we follow through on every promise — ensuring a smooth and stress-free experience.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Drop off or Mail in Your Drive</h2>
        </div>
        <div class="section-body">
          <p>You can visit our Glendale lab for a quick drop-off, or securely mail your device using our prepaid shipping label — whichever is more convenient for you.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Receive a Free Diagnosis</h2>
        </div>
        <div class="section-body">
          <p>Our team will evaluate your device and provide a detailed diagnosis along with an initial quote — completely free of charge and with no obligation to proceed.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Engineers work on Recovering your Data</h2>
        </div>
        <div class="section-body">
          <p>We carefully begin the recovery process using advanced tools and cleanroom procedures.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Review &amp; Approve the Recovered</h2>
        </div>
        <div class="section-body">
          <p>After recovery is complete, you’ll receive a detailed file list to review so you can confirm everything important has been successfully recovered.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Receive your recovered data</h2>
        </div>
        <div class="section-body">
          <p>Once approved, we’ll securely transfer your data to a new drive and return it to you via pickup or insured shipping — ready for immediate use. [forminator_form id=&quot;3060&quot;]</p>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Testimonials from Satisfied Clients</h2>
        </div>
        <div class="section-body">
          <p>“I submitted a quote request after business hours and was shocked to get a detailed response within 15 minutes! The team was super responsive and provided clear flat-rate pricing right from the start. It made the whole process stress-free.”</p>
          <p>Stephanie L. Los Angeles, CA</p>
          <p>“The online quote process was quick and easy. Within minutes, I had a clear understanding of the cost with no hidden fees. Five Star Data Recovery stood by their flat-rate price, and the entire experience was smooth from start to finish.”</p>
          <p>Derek M. Burbank, CA</p>
          <p>“I was impressed by how fast I got my quote. I filled out the form in the afternoon, and by the time I got home, I already had a detailed breakdown of the expected costs and turnaround times. Very professional and transparent.”</p>
          <p>Maria M. Las Vegas, NV</p>
          <p>Data loss is stressful — but working with us doesn’t have to be. Watch how our team handles each recovery with care, professionalism, and precision. From diagnostics to delivery, we offer flat-rate pricing, honest communication, and proven results — all from our secure Glendale lab.</p>
          <p>https://youtu.be/14ACFHJ24hg?si=V88jCA7h-3SbSvyU</p>
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
          <h2 class="cta-title">Need Help With Request A Quote?</h2>
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
