<script setup lang="ts">
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "LocalBusiness",
            "@id": "https://www.fivestardatarecovery.com/#localbusiness",
            "name": "Five Star Data Recovery",
            "telephone": "+1-818-272-8866",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1731 S Brand Blvd.",
              "addressLocality": "Glendale",
              "addressRegion": "CA",
              "postalCode": "91204",
              "addressCountry": "US"
            },
            "url": "https://www.fivestardatarecovery.com/",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "498",
              "bestRating": "5",
              "worstRating": "1"
            },
            "priceRange": "$200 - $1,500"
          },
          {
            "@type": "WebPage",
            "@id": "https://www.fivestardatarecovery.com/instant-quote/#webpage",
            "url": "https://www.fivestardatarecovery.com/instant-quote/",
            "name": "Instant Data Recovery Quote - Five Star Data Recovery",
            "description": "Get an instant data recovery cost estimate in 3 quick steps. No obligation. Free evaluation. No Data, No Charge guarantee.",
            "isPartOf": { "@id": "https://www.fivestardatarecovery.com/#website" }
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fivestardatarecovery.com/" },
              { "@type": "ListItem", "position": 2, "name": "Instant Quote", "item": "https://www.fivestardatarecovery.com/instant-quote/" }
            ]
          }
        ]
      })
    }
  ]
})

useSeoMeta({
  title: 'Instant Data Recovery Quote — Five Star Data Recovery',
  ogTitle: 'Instant Data Recovery Quote — Five Star Data Recovery',
  description: 'Get an instant data recovery cost estimate in 3 quick steps. No obligation. Free evaluation. No Data, No Charge guarantee.',
  ogDescription: 'Get an instant data recovery cost estimate in 3 quick steps. No obligation. Free evaluation. No Data, No Charge guarantee.',
})
</script>

<template>
  <div class="page-content">
    <NavBar />

    <!-- Hero -->
    <section class="iq-hero">
      <div class="iq-hero-overlay" />
      <div class="container iq-hero-inner">
        <div class="section-label light">Free Estimate Tool</div>
        <h1 class="iq-hero-title">Get an Instant Data Recovery Quote</h1>
        <p class="iq-hero-sub">Answer 3 quick questions — no contact info required. Get a realistic cost estimate instantly, backed by our <strong>No Data, No Charge</strong> guarantee.</p>
        <div class="iq-hero-trust">
          <span>✓ Free Evaluation</span>
          <span>✓ No Obligation</span>
          <span>✓ No Data = No Charge</span>
          <span>✓ Free Round-Trip Shipping</span>
        </div>
      </div>
    </section>

    <!-- Tool -->
    <section class="iq-tool-section">
      <div class="container iq-tool-container">
        <InstantQuoteTool />
        <p class="iq-disclaimer">
          * Estimates are based on typical recovery scenarios and are not a binding quote. Final pricing is determined after a free diagnostic evaluation at our Glendale, CA lab. Prices may vary based on device condition, data volume, and recovery complexity.
        </p>
      </div>
    </section>

    <!-- Why trust band -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading center">Why Thousands Choose Five Star</h2>
        <div class="iq-trust-grid">
          <div class="iq-trust-card">
            <div class="iq-trust-icon">🛡</div>
            <h3>No Data, No Charge</h3>
            <p>You only pay when we successfully recover your data. Free evaluation with zero obligation to proceed.</p>
          </div>
          <div class="iq-trust-card">
            <div class="iq-trust-icon">📦</div>
            <h3>Free Round-Trip Shipping</h3>
            <p>Not local? We provide a prepaid shipping label — you ship to us free, and we return your data free.</p>
          </div>
          <div class="iq-trust-card">
            <div class="iq-trust-icon">🔒</div>
            <h3>100% Confidential</h3>
            <p>Your data is handled with strict security protocols. We never share or access your files beyond recovery.</p>
          </div>
          <div class="iq-trust-card">
            <div class="iq-trust-icon">⚡</div>
            <h3>24/7 Expedited Options</h3>
            <p>Need it fast? Our Expedited Plus service assigns a dedicated engineer working around the clock on your case.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA band -->
    <section class="s-contact-band" style="background: linear-gradient(135deg, #0A0C14 0%, #13161F 100%), url('/hard-drive-recovery-hero.webp') center/cover no-repeat; background-blend-mode: multiply;">
      <div class="container">
        <div class="contact-banner-card" style="border:none;border-radius:0;padding:0;margin-bottom:16px;">
          <h2 class="contact-banner-heading">Ready to Get Started?</h2>
        </div>
        <div class="contact-body">
          <p class="contact-body-text">Our team is available 24/7. Call us now for a free consultation or fill out the recovery form and we'll get back to you immediately.</p>
          <div class="iq-cta-band-row">
            <a href="/start-recovery" class="iq-band-btn-primary">Start My Recovery →</a>
            <a href="tel:+18182728866" class="iq-band-btn-secondary">📞 818-272-8866</a>
          </div>
        </div>
      </div>
    </section>

    <FooterSection />
  </div>
</template>

<style scoped>
/* Hero */
.iq-hero {
  position: relative;
  background: linear-gradient(135deg, #0d0f1a 0%, #13161F 100%);
  padding: 80px 0 72px;
  text-align: center;
  overflow: hidden;
}
.iq-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 0%, rgba(245,200,66,0.08) 0%, transparent 65%);
  pointer-events: none;
}
.iq-hero-overlay { display: none; }
.iq-hero-inner { position: relative; z-index: 1; max-width: 700px; margin: 0 auto; }
.iq-hero-title {
  font-size: clamp(1.9rem, 4vw, 3rem);
  font-weight: 800;
  color: #fff;
  line-height: 1.15;
  margin-bottom: 16px;
}
.iq-hero-sub {
  font-size: 1.05rem;
  color: #c5cdd8;
  line-height: 1.65;
  margin-bottom: 24px;
}
.iq-hero-trust {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 24px;
  justify-content: center;
  font-size: 0.875rem;
  color: var(--color-gold, #F5C842);
  font-weight: 600;
}

/* Tool section */
.iq-tool-section {
  background: var(--color-bg, #0A0C14);
  padding: 60px 0;
}
.iq-tool-container {
  max-width: 860px;
}
.iq-disclaimer {
  margin-top: 20px;
  font-size: 0.78rem;
  color: var(--color-muted, #A0A8B8);
  text-align: center;
  line-height: 1.6;
}

/* Trust grid */
.iq-trust-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 36px;
}
.iq-trust-card {
  background: var(--color-card, #13161F);
  border: 1px solid var(--color-border, #1E2233);
  border-radius: 12px;
  padding: 28px 20px;
  text-align: center;
}
.iq-trust-icon {
  font-size: 2rem;
  margin-bottom: 12px;
}
.iq-trust-card h3 {
  font-size: 0.95rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
}
.iq-trust-card p {
  font-size: 0.83rem;
  color: var(--color-muted, #A0A8B8);
  line-height: 1.55;
}

/* CTA band row */
.iq-cta-band-row {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 20px;
}
.iq-band-btn-primary {
  background: var(--color-gold, #F5C842);
  color: #000;
  font-weight: 700;
  padding: 14px 28px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.95rem;
  transition: background 0.2s;
}
.iq-band-btn-primary:hover { background: var(--color-gold-dark, #E8A020); }
.iq-band-btn-secondary {
  background: transparent;
  border: 1.5px solid rgba(255,255,255,0.2);
  color: #fff;
  font-weight: 600;
  padding: 14px 28px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.95rem;
  transition: border-color 0.2s;
}
.iq-band-btn-secondary:hover { border-color: var(--color-gold, #F5C842); }

/* Responsive */
@media (max-width: 900px) {
  .iq-trust-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .iq-trust-grid { grid-template-columns: 1fr; }
  .iq-hero { padding: 56px 0 48px; }
}
</style>
