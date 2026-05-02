<script setup lang="ts">
useSeoMeta({
  title: 'We\'re Here to Help — Five Star Data Recovery',
  description: '“Five Star saved my wedding footage after my external drive failed. I’m so grateful — professional, fast, and no pressure.”'
})
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="We're Here to Help"
      subtitle="Need help or have a question? You’re in the right place. Whether you're looking for an update on your ongoing case, want to start a new data recovery, or have billing or account-related questions, our team is here to assist you. We also welcome media, marketing, and partnership inquiries through this form. Customer feedback is extremely important to us—feel free to share your experience or suggestions. Our specialists are available 7 days a week to ensure you get the support you need. Simply fill out the contact form below or give us a call. We’ll get back to you promptly."
      description="“Five Star saved my wedding footage after my external drive failed. I’m so grateful — professional, fast, and no pressure.”"
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
          <h2 class="section-title">We're Here to Help</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Need help or have a question? You’re in the right place. Whether you're looking for an update on your ongoing case, want to start a new data recovery, or have billing or account-related questions, our team is here to assist you. We also welcome media, marketing, and partnership inquiries through this form. Customer feedback is extremely important to us—feel free to share your experience or suggestions. Our specialists are available 7 days a week to ensure you get the support you need. Simply fill out the contact form below or give us a call. We’ll get back to you promptly.</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Contact Us</h2>
        </div>
        <div class="section-body">
          <p>[forminator_form id=&quot;3912&quot;]</p>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What Our Clients Are Saying</h2>
        </div>
        <div class="section-body">
          <p>“Five Star saved my wedding footage after my external drive failed. I’m so grateful — professional, fast, and no pressure.”</p>
          <p>Rachel K.</p>
          <p>Pasadena, CA</p>
          <p>“Fast turnaround, professional lab, and no hidden fees. They recovered all my client footage off a corrupted SD card.”</p>
          <p>David P.</p>
          <p>Austin, TX</p>
          <p>“I had an old Seagate drive with all my kids’ baby videos. These guys recovered everything. Worth every penny.”</p>
          <p>Martha E.</p>
          <p>New York, NY</p>
          <p>Data loss is stressful — but working with us doesn’t have to be. Watch how our team handles each recovery with care, professionalism, and precision. From diagnostics to delivery, we offer flat-rate pricing, honest communication, and proven results — all from our secure Glendale lab.</p>
          <p>https://youtu.be/14ACFHJ24hg?si=V88jCA7h-3SbSvyU</p>
        </div>
      </div>
    </section>



    <section class="cta-band section-bg-2">
      <div class="container cta-band-inner">
        <div>
          <h2 class="cta-title">Need Help With We're Here to Help?</h2>
          <p class="cta-sub">Free evaluation. No data, no charge. Contact us today.</p>
        </div>
        <div class="cta-actions">
          <a href="tel:8182728866" class="btn btn-gold">📞 818-272-8866</a>
          <NuxtLink to="/contact" class="btn btn-outline-sm">Get Free Quote</NuxtLink>
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
