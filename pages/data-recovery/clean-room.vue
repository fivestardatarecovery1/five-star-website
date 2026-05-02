<script setup lang="ts">
useSeoMeta({
  title: 'Clean Room Data Recovery — Five Star Data Recovery',
  description: 'Our data recovery process is built around security, transparency, and peace of mind. From start to finish, we keep you informed with clear updates at every stag'
})
const faqs = [
  { q: '1. Why is a clean room necessary for data recovery?', a: 'A clean room is required when working on physically damaged hard drives, especially when opening the drive’s internal components. Without a Class 100 clean room, dust or static can permanently damage the platters and make recovery impossible. Our controlled environment ensures maximum safety and data preservation during internal repairs.' },
  { q: '2. What happens inside a data recovery clean room?', a: 'Inside the clean room, our engineers carefully disassemble hard drives, inspect internal components, and replace damaged parts (like read/write heads or actuator arms). Using specialized tools and microscopes, we access the platters to begin sector-level imaging, ensuring a safe and effective recovery.' },
  { q: '3. Can all types of hard drives be opened in a clean room?', a: 'Yes. We work on 3.5″ and 2.5″ HDDs, as well as hybrid drives and enterprise-grade storage devices. Whether it’s a standard consumer hard drive or a complex RAID member, any physically damaged drive that needs to be opened will be handled exclusively inside our certified clean room lab.' },
  { q: '4. Is clean room recovery only for clicking or dead drives?', a: 'Not always. While clicking hard drives, non-spinning drives, and physically dead drives are common clean room cases, there are many other scenarios where clean room access is essential. This includes drives affected by impact, fire, water, or firmware-related read issues. At Five Star Data Recovery, we open the drive’s cover inside our certified clean room to visually inspect the platters and slider assemblies. This allows our engineers to determine whether the read failure is due to surface damage, head crash, or severe bad sectors. This critical step ensures we take the safest and most effective approach to recovering your data.' },
  { q: '5. How can I tell if my drive needs clean room recovery?', a: 'If your hard drive is making unusual noises, is not recognized at all, or has been physically dropped, there’s a strong chance it requires clean room intervention. Avoid powering it on repeatedly — contact us for a free evaluation to determine if a clean room recovery is necessary.' },
  { q: '6. Do SSDs require clean room recovery too?', a: 'No. SSDs (Solid State Drives) do not contain spinning platters or moving parts, so they don’t need a clean room. Instead, SSD recovery relies on specialized micro-soldering, chip-level access, and firmware repair — all done in an electronics-safe lab, but not in a clean room environment.' },
  { q: '7. Is clean room recovery included in your flat-rate pricing?', a: 'Yes. At Five Star Data Recovery, our clean room data recovery service is offered at a flat-rate price—with no hidden fees. This price includes all necessary donor parts, such as compatible heads or internal components required to complete the recovery. You will only pay if we successfully recover your data. If your data is not recoverable, there is absolutely no charge. This ensures total transparency and peace of mind throughout the process.' },
  { q: '8. Do you offer emergency clean room data recovery services?', a: 'Yes. We offer Expedited and Expedited Plus Clean Room data recovery services for critical cases that require urgent turnaround. If your drive needs to be opened in our clean room and time is of the essence, our expedited options prioritize your recovery immediately—even outside normal business hours. Whether it’s a business deadline or personal emergency, our 24/7 emergency data recovery service ensures you get the fastest possible access to your important files.' }
]
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="Clean Room Data Recovery"
      subtitle="When your hard drive has suffered physical damage, recovery isn’t something you should attempt on your own. Opening a drive outside the proper environment can lead to permanent lost data. We have helped thousands of customers recover data from drives that wouldn’t spin, wouldn’t mount, or that computers did not recognize. Our cleanroom procedures protect the delicate parts of your storage device. This gives your files the best chance for full recovery."
      description="Our data recovery process is built around security, transparency, and peace of mind. From start to finish, we keep you informed with clear updates at every stage. With a commitment to honest service and no hidden fees, we follow through on every promise — ensuring a smooth and stress-free experience"
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
          <h2 class="section-title">What Is a Data Recovery Clean Room?</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">When You Need Clean Room Recovery</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Inside the Clean Room: Our Data Recovery Process</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Why Clean Room Recovery Is Essential</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Who We Help</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Personal external hard drives with family photos</li>
            <li>Business servers with client data</li>
            <li>Law firms and healthcare organizations with sensitive documents</li>
            <li>Creative professionals with video footage and design files</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Get a Quote in Minutes!</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Start Your Recovery Today</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Drop off your device or ship it to our lab</li>
            <li>Call now for a free diagnostic and quote</li>
            <li>Fast, honest, expert-level clean room data recovery</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Data Recovery Process</h2>
        </div>
        <div class="section-body">
          <p>Our data recovery process is built around security, transparency, and peace of mind. From start to finish, we keep you informed with clear updates at every stage. With a commitment to honest service and no hidden fees, we follow through on every promise — ensuring a smooth and stress-free experience.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Drop off or Mail in Your Drive</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Receive a Free Diagnosis</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Engineers work on Recovering your Data</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Review &amp; Approve the Recovered</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Receive your recovered data</h2>
        </div>
        <div class="section-body">
          <p>Data loss is stressful — but working with us doesn’t have to be. Watch how our team handles each recovery with care, professionalism, and precision. From diagnostics to delivery, we offer flat-rate pricing, honest communication, and proven results — all from our secure Glendale lab.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Testimonials from Satisfied Clients</h2>
        </div>
        <div class="section-body">

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
          <h2 class="cta-title">Need Help With Clean Room Data Recovery?</h2>
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
