<script setup lang="ts">
import { useAnalytics } from '~/composables/useAnalytics'
const { trackConversion } = useAnalytics()
useSeoMeta({
  title: 'Contact Us - Five Star Data Recovery',
  description: 'Has your data been lost or corrupted? Contact us today for a free diagnosis and cost estimate for your data recovery needs.',
  ogTitle: 'Contact Us - Five Star Data Recovery',
  ogDescription: 'Has your data been lost or corrupted? Contact us today for a free diagnosis and cost estimate for your data recovery needs.',
  ogImage: 'https://www.fivestardatarecovery.com/wp-content/uploads/2025/06/an-02.png',
  ogUrl: 'https://www.fivestardatarecovery.com/contact-us/',
  ogType: 'article',
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BreadcrumbList",
            "@id": "https://www.fivestardatarecovery.com/contact-us/#breadcrumb",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fivestardatarecovery.com/" },
              { "@type": "ListItem", "position": 2, "name": "Contact Us", "item": "https://www.fivestardatarecovery.com/contact-us/" }
            ]
          },
          {
            "@type": "LocalBusiness",
            "@id": "https://www.fivestardatarecovery.com/#localbusiness",
            "name": "Five Star Data Recovery",
            "image": "https://www.fivestardatarecovery.com/wp-content/uploads/logo.png",
            "url": "https://www.fivestardatarecovery.com/",
            "telephone": "+1-818-272-8866",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1731 S Brand Blvd",
              "addressLocality": "Glendale",
              "addressRegion": "CA",
              "postalCode": "91204",
              "addressCountry": "US"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
                "opens": "10:00",
                "closes": "18:00"
              }
            ],
            "sameAs": [
              "https://www.yelp.com/biz/five-star-data-recovery-glendale",
              "https://www.bbb.org/us/ca/glendale/profile/data-recovery/five-star-data-recovery-1216-1007446",
              "https://www.facebook.com/FiveStarDataRecovery/"
            ]
          },
          {
            "@type": "WebPage",
            "@id": "https://www.fivestardatarecovery.com/contact-us/#webpage",
            "url": "https://www.fivestardatarecovery.com/contact-us/",
            "name": "Contact Us \u2013 Five Star Data Recovery",
            "description": "Get in touch with Five Star Data Recovery. Call us 24/7 or submit a form to speak to a data recovery expert. Free evaluations. No data = No charge.",
            "breadcrumb": { "@id": "https://www.fivestardatarecovery.com/contact-us/#breadcrumb" },
            "inLanguage": "en-US"
          },
          {
            "@type": "Review",
            "@id": "https://www.fivestardatarecovery.com/contact-us/#review",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "author": { "@type": "Person", "name": "Rachel K." },
            "reviewBody": "Five Star saved my wedding footage after my external drive failed. I'm so grateful \u2014 professional, fast, and no pressure.",
            "itemReviewed": { "@id": "https://www.fivestardatarecovery.com/#localbusiness" }
          }
        ]
      })
    }
  ]
})

const reviews = [
  { text: 'Five Star saved my wedding footage after my external drive failed. I\'m so grateful - professional, fast, and no pressure.', name: 'Rachel K.', location: 'Pasadena, CA' },
  { text: 'Fast turnaround, professional lab, and no hidden fees. They recovered all my client footage off a corrupted SD card.', name: 'David P.', location: 'Austin, TX' },
  { text: 'I had an old Seagate drive with all my kids\' baby videos. These guys recovered everything. Worth every penny.', name: 'Martha E.', location: 'Glendale, CA' }
]

const submitted = ref(false)
</script>

<template>
  <div class="page-content">
    <NavBar />
    <HeroSection
      title="We're Here to Help"
      bgImage="/contact-hero-bg.jpg"
      :showForm="false"
      description="<strong>Need help or have a question?</strong> You&rsquo;re in the right place. Whether you&rsquo;re looking for an <strong>update on your ongoing case</strong>, <strong>want to start a new data recovery</strong>, or have <strong>billing or account-related questions</strong>, our team is here to assist you. We also welcome media, marketing, and <strong>partnership inquiries</strong> through this form. Customer feedback is extremely important to us&mdash;feel free to share your experience or suggestions. Our specialists are available 7 days a week to ensure you get the support you need. Simply fill out the contact form below or give us a call. We&rsquo;ll get back to you promptly."
    />
    <StatsBar />

    <!-- CONTACT SECTION -->
    <section class="s-white">
      <div class="container contact-grid contact-grid--wide">
        <!-- LEFT: Info -->
        <div class="contact-info">
          <div class="section-label">Reach Us</div>
          <h2 class="s-heading">Contact Us</h2>
          <p class="s-body">Our team is available to answer your questions, provide free evaluations, and guide you through the recovery process. Reach out using any of the methods below.</p>
          <div class="contact-cards">
            <div class="contact-card">
              <div class="cc-icon">📍</div>
              <div>
                <strong class="cc-title">Visit Our Lab</strong>
                <p class="cc-text">1731 S Brand Blvd.<br>Glendale, CA 91204</p>
              </div>
            </div>
            <div class="contact-card">
              <div class="cc-icon">📞</div>
              <div>
                <strong class="cc-title">Call Us</strong>
                <p class="cc-text">
                  <a href="tel:8182728866" style="color:#C9A84C;font-weight:700;">818-272-8866</a><br>
                  <a href="tel:8885059991" style="color:#C9A84C;font-weight:700;">888-505-9991</a> <span style="font-size:0.8em;color:#718096;">Toll Free</span><br>
                  Available 24/7
                </p>
              </div>
            </div>

          </div>
        </div>

        <!-- RIGHT: Form -->
        <div class="contact-form-wrap">
          <h3 class="form-title">Send Us a Message</h3>
          <form @submit.prevent="submitted = true; trackConversion('contact-form')" class="contact-form">
            <div class="mf-row">
              <div class="mf-group">
                <label>NAME <span class="mf-req">*</span></label>
                <input type="text" placeholder="Your Name" class="mf-input" required />
              </div>
              <div class="mf-group">
                <label>EMAIL <span class="mf-req">*</span></label>
                <input type="email" placeholder="Your Email" class="mf-input" required />
              </div>
            </div>
            <div class="mf-row">
              <div class="mf-group">
                <label>PHONE</label>
                <input type="tel" placeholder="Phone Number" class="mf-input" />
              </div>
              <div class="mf-group">
                <label for="contact-reason">REASON FOR CONTACT</label>
                <div class="mf-select-wrap">
                  <select id="contact-reason" class="mf-input">
                    <option value="">Select Message Reason</option>
                    <option>Billing Inquiry</option>
                    <option>Case Support</option>
                    <option>Customer Feedback</option>
                    <option>Data Recovery Case</option>
                    <option>Marketing Inquiry</option>
                    <option>Partnership Inquiry</option>
                    <option>Other - Not Listed</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="mf-group mf-full">
              <label>MESSAGE</label>
              <textarea placeholder="Describe your issue..." class="mf-input" style="height:120px;padding:12px 16px;resize:vertical;" />
            </div>
            <div class="mf-group mf-full">
              <label>Preferred Contact Method</label>
              <div class="mf-radio-group">
                <label class="mf-radio"><input type="radio" name="contactpref" value="call" checked /> CALL</label>
                <label class="mf-radio"><input type="radio" name="contactpref" value="email" /> EMAIL</label>
                <label class="mf-radio"><input type="radio" name="contactpref" value="text" /> TEXT</label>
              </div>
            </div>
            <div v-if="submitted" style="background:#d4edda;border:1px solid #c3e6cb;border-radius:8px;padding:16px;color:#155724;font-weight:600;margin-bottom:12px;">
              ✓ Thank you! We'll be in touch shortly.
            </div>
            <button type="submit" class="mf-submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>

    <!-- REVIEWS -->
    <ReviewsSection :reviews="reviews" />

    <!-- VIDEO -->
    <section class="page-video-section">
      <div class="container page-video-inner">
        <div>
          <h2 class="page-video-heading">See Why Thousands Trust Us With Their Important Data</h2>
          <p class="page-video-desc" style="margin-top:16px;">Data loss is stressful - but working with us doesn't have to be. Watch how our team handles each recovery with care, professionalism, and precision.</p>
        </div>
        <div class="page-video-embed">
          <iframe src="https://www.youtube.com/embed/14ACFHJ24hg?start=60" title="Five Star Data Recovery" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
        </div>
      </div>
    </section>

    <!-- GOOGLE MAP -->
    <div class="map-section">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.7!2d-118.2552!3d34.1425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c06fde7c1a5d%3A0x1!2s1731+S+Brand+Blvd%2C+Glendale%2C+CA+91204!5e0!3m2!1sen!2sus!4v1"
        width="100%"
        height="420"
        style="border:0;"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Five Star Data Recovery - 1731 S Brand Blvd, Glendale CA"
      />
    </div>

    <FooterBar />
  </div>
</template>

<style scoped>
*, *::before, *::after { box-sizing: border-box; }
.page-content { font-family: 'Inter', sans-serif; color: #1a1a2e; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 28px; }
.s-white { background: #fff; padding: 88px 0; }
.s-grey { background: #f4f7fc; padding: 88px 0; }
.s-dark { background: #1a1a2e; padding: 88px 0; }
.section-label { font-size: 0.72rem; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; color: #7a5900; margin-bottom: 10px; }
.section-label.center { text-align: center; }
.s-heading { font-size: clamp(1.4rem, 2.4vw, 1.85rem); font-weight: 900; color: #1a1a2e; line-height: 1.25; margin-bottom: 14px; }
.s-heading.center { text-align: center; }
.s-heading.light { color: #fff; }
.s-intro { font-size: 1rem; color: #4a5568; line-height: 1.75; margin-bottom: 40px; }
.s-intro.center { text-align: center; max-width: 700px; margin-left: auto; margin-right: auto; }
.s-body { font-size: 0.94rem; color: #4a5568; line-height: 1.8; margin-bottom: 14px; }
.s-body.light { color: rgba(255,255,255,0.75); }
.faq-wrap { margin: 40px 0 0; display: flex; flex-direction: column; gap: 8px; }
.faq-row { border: 1.5px solid #e2e8f0; border-radius: 10px; overflow: hidden; background: #fff; }
.faq-row.active { border-color: #C9A84C; }
.faq-trigger { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; background: none; border: none; color: #1a1a2e; font-size: 1rem; font-weight: 700; cursor: pointer; text-align: left; gap: 16px; font-family: inherit; }
.faq-toggle { color: #C9A84C; font-size: 1.4rem; font-weight: 300; flex-shrink: 0; line-height: 1; }
.faq-answer { padding: 4px 24px 20px; font-size: 0.9rem; color: #4a5568; line-height: 1.8; border-top: 1px solid #f0f2f7; }
.faq-answer :deep(.faq-link) { color: #C9A84C; font-weight: 600; text-decoration: underline; }
.btn-gold { display: inline-block; background: #C9A84C; color: #1a1a1a; padding: 16px 36px; border-radius: 8px; font-weight: 800; font-size: 1rem; text-decoration: none; transition: background 0.2s; }
.btn-gold:hover { background: #b8923e; }
.btn-gold-full { display: block; width: 100%; text-align: center; background: #C9A84C; color: #1a1a1a; padding: 18px; border-radius: 8px; font-weight: 800; font-size: 1.05rem; text-decoration: none; letter-spacing: 0.04em; transition: background 0.2s; }
.btn-gold-full:hover { background: #b8923e; }
.mf-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.mf-group { display: flex; flex-direction: column; gap: 5px; }
.mf-group label { font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: #555; }
.mf-req { color: #e53935; }
.mf-full { grid-column: 1 / -1; }
.mf-input { height: 52px; border: 1px solid #ddd; border-radius: 6px; padding: 0 16px; font-size: 15px; color: #333; background: #fff; width: 100%; box-sizing: border-box; font-family: inherit; appearance: none; }
.mf-input:focus { outline: none; border-color: #C9A84C; }
.mf-select-wrap { position: relative; }
.mf-select-wrap .mf-input { padding-right: 36px; cursor: pointer; }
.mf-radio-group { display: flex; gap: 14px; align-items: center; height: 40px; }
.mf-radio { display: flex; align-items: center; gap: 5px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #444; cursor: pointer; }
.mf-radio input { width: 14px; height: 14px; accent-color: #C9A84C; cursor: pointer; }
.mf-submit { width: 100%; height: 62px; background: #C9A84C; color: #1a1a1a; font-weight: 800; font-size: 18px; border: none; border-radius: 6px; cursor: pointer; font-family: inherit; margin-top: 4px; transition: background 0.2s; }
.mf-submit:hover { background: #b8923e; }
.page-video-section { background: #2a2d38; padding: 70px 0; }
.page-video-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
.page-video-heading { font-size: clamp(1.4rem, 2.5vw, 2rem); font-weight: 800; color: #fff; line-height: 1.25; }
.page-video-desc { font-size: 0.95rem; color: #9ba3b8; line-height: 1.8; }
.page-video-embed { position: relative; border-radius: 14px; overflow: hidden; aspect-ratio: 16/9; box-shadow: 0 12px 48px rgba(0,0,0,0.4); }
.page-video-embed iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }
@media (max-width: 768px) {
  .reviews-grid, .page-video-inner, .mf-row { grid-template-columns: 1fr; }
  .mf-full { grid-column: 1; }
}
.contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
.contact-grid--wide { grid-template-columns: 2fr 3fr; }
.contact-cards { display: flex; flex-direction: column; gap: 16px; margin-top: 28px; }
.contact-card { display: flex; align-items: flex-start; gap: 16px; background: #f4f7fc; border-radius: 12px; padding: 20px; }
.cc-icon { font-size: 1.8rem; flex-shrink: 0; }
.cc-title { display: block; font-size: 0.82rem; font-weight: 800; color: #1a1a2e; margin-bottom: 3px; }
.cc-text { font-size: 0.82rem; color: #4a5568; line-height: 1.6; margin: 0; }
.contact-form-wrap { background: #fff; border: 1px solid #e8ecf2; border-radius: 14px; padding: 48px 52px; box-shadow: 0 4px 24px rgba(0,0,0,0.07); }
.form-title { font-size: 1.2rem; font-weight: 800; color: #1a1a2e; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 2px solid #f0f0f0; }
.contact-form { display: flex; flex-direction: column; gap: 14px; }
/* Contact hero trust box */
.contact-trust-box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 32px;
  margin-top: 32px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 12px;
  padding: 20px 24px;
  max-width: 560px;
}
.ctb-item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
}
.ctb-icon { font-size: 18px; }
@media (max-width: 640px) {
  .contact-trust-box { grid-template-columns: 1fr; gap: 10px; }
}

.map-section { line-height: 0; }
.map-section iframe { display: block; width: 100%; }

@media (max-width: 768px) {
  .contact-grid, .contact-grid--wide { grid-template-columns: 1fr; }
  .contact-form-wrap { padding: 28px 20px; }
  .page-video-inner { grid-template-columns: 1fr; }
  .map-section iframe { height: 300px; }
}
</style>
