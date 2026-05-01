<script setup lang="ts">
useSeoMeta({
  title: 'Contact Us',
  description: 'Contact Five Star Data Recovery in Glendale, CA. Call 323-672-3000 or fill out our form for a free evaluation. Available 24/7/365.'
})
</script>

<template>
  <div>
    <NavBar />

    <HeroSection
      title="Contact Us"
      subtitle="We Respond Within 1 Hour."
      description="Our team is available 24/7/365. Call us, fill out the form, or walk into our Glendale lab. We'll evaluate your case for free and give you an honest quote."
    >
      <template #badges>
        <div class="trust-badges">
          <span class="badge">📞 323-672-3000</span>
          <span class="badge">⏰ Available 24/7</span>
          <span class="badge">✅ Free Evaluation</span>
        </div>
      </template>
    </HeroSection>

    <section>
      <div class="container">
        <div class="contact-options">
          <div class="contact-option card">
            <div class="option-icon">📞</div>
            <h3 class="option-title">Call Us Now</h3>
            <p class="option-desc">Speak directly with a recovery specialist. Available 24 hours a day, 7 days a week, 365 days a year.</p>
            <a href="tel:3236723000" class="btn btn-gold">323-672-3000</a>
          </div>
          <div class="contact-option card">
            <div class="option-icon">📍</div>
            <h3 class="option-title">Visit Our Lab</h3>
            <p class="option-desc">Walk-ins welcome during business hours. Bring your device and we'll evaluate it on the spot — no appointment needed.</p>
            <a href="https://maps.google.com/?q=1731+S+Brand+Blvd+Suite+100+Glendale+CA+91204" target="_blank" rel="noopener" class="btn btn-outline">Get Directions</a>
          </div>
          <div class="contact-option card">
            <div class="option-icon">✈️</div>
            <h3 class="option-title">Ship Your Device</h3>
            <p class="option-desc">We provide a free prepaid shipping label. Pack your device securely, attach the label, and drop it off at any carrier location.</p>
            <NuxtLink to="/contact" class="btn btn-outline">Request Shipping Label</NuxtLink>
          </div>
        </div>

        <div class="address-bar">
          <div class="address-item">
            <strong>Address:</strong> 1731 S Brand Blvd Suite 100, Glendale, CA 91204
          </div>
          <div class="address-item">
            <strong>Phone:</strong> <a href="tel:3236723000">323-672-3000</a>
          </div>
          <div class="address-item">
            <strong>Hours:</strong> 24/7/365 — Emergency service always available
          </div>
        </div>
      </div>
    </section>

    <FooterBar />
  </div>
</template>

<style scoped>
.trust-badges { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 8px; }
.badge { background: rgba(255,255,255,0.06); border: 1px solid var(--border); color: var(--white); padding: 7px 14px; border-radius: 20px; font-size: 13px; font-weight: 500; }

.contact-options {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 48px;
  text-align: center;
}
.option-icon { font-size: 40px; margin-bottom: 16px; }
.option-title { font-family: var(--font-heading); font-size: 20px; font-weight: 800; margin-bottom: 12px; }
.option-desc { font-size: 15px; color: var(--muted); line-height: 1.6; margin-bottom: 20px; }

.address-bar {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 28px 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: space-between;
  align-items: center;
}
.address-item { font-size: 15px; color: var(--muted); }
.address-item strong { color: var(--white); }
.address-item a { color: var(--gold); font-weight: 600; }

@media (max-width: 900px) {
  .contact-options { grid-template-columns: 1fr; }
  .address-bar { flex-direction: column; align-items: flex-start; }
}
</style>
