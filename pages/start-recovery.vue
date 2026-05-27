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
            "@id": "https://www.fivestardatarecovery.com/#fivestardatarecovery",
            "name": "Five Star Data Recovery",
            "image": "https://www.fivestardatarecovery.com/wp-content/uploads/logo.png",
            "url": "https://www.fivestardatarecovery.com",
            "telephone": "+1-818-272-8866",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1731 S Brand Blvd",
              "addressLocality": "Glendale",
              "addressRegion": "CA",
              "postalCode": "91204",
              "addressCountry": "US"
            },
            "priceRange": "$300 - $950",
            "areaServed": { "@type": "Country", "name": "United States" },
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "498" },
            "review": [
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Leah P." },
                "datePublished": "2024-09-02",
                "reviewBody": "The online form made it so easy to get started. I mailed in my hard drive and had updates within a few hours. Five Star really lives up to their name!",
                "name": "Easy Online Recovery Process",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
              }
            ]
          },
          {
            "@type": "WebPage",
            "url": "https://www.fivestardatarecovery.com/start-data-recovery/",
            "name": "Start Your Data Recovery Case | Five Star Data Recovery",
            "description": "Quickly start your data recovery case online with Five Star Data Recovery. Fill out our Start Recovery Form for fast drop-off or mail-in service. No appointment needed."
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fivestardatarecovery.com/" },
              { "@type": "ListItem", "position": 2, "name": "Start Data Recovery", "item": "https://www.fivestardatarecovery.com/start-data-recovery/" }
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Can I start a data recovery case online?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! You can easily start your data recovery case online by filling out our Start Recovery Form. Once submitted, our team will contact you to confirm the next steps, including drop-off or mail-in options." } },
              { "@type": "Question", "name": "Do I need to schedule an appointment before dropping off my device?", "acceptedAnswer": { "@type": "Answer", "text": "No appointment is necessary. You're welcome to walk in during our business hours. However, submitting the Start Recovery Form in advance helps us prepare for your device and minimize your wait time." } },
              { "@type": "Question", "name": "What happens after I submit the Start Recovery Form?", "acceptedAnswer": { "@type": "Answer", "text": "After you submit the form, we'll review your case details and reach out to you by phone or email to confirm receipt. From there, you can proceed with either dropping off your device in person or shipping it to our lab." } },
              { "@type": "Question", "name": "Can I track the status of my data recovery case after starting it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Once your case is checked in, you'll receive all status updates exclusively through our ticketing system via email. This ensures clear, organized communication for every step of the recovery process." } },
              { "@type": "Question", "name": "What if I'm not sure how to describe the issue with my device?", "acceptedAnswer": { "@type": "Answer", "text": "No problem. Just provide as much information as you can on the Start Recovery Form, and our engineers will diagnose the device after it arrives. If needed, we'll contact you for clarification before proceeding." } },
              { "@type": "Question", "name": "Is there a fee just for submitting the Start Recovery Form?", "acceptedAnswer": { "@type": "Answer", "text": "No, there's no fee to submit the form. Filling it out simply allows us to prepare for your case and start the process efficiently. Any applicable fees will only be discussed and charged after diagnostics." } },
              { "@type": "Question", "name": "How quickly will my case be checked in after drop-off or arrival?", "acceptedAnswer": { "@type": "Answer", "text": "We check in most cases within 1-2 hours of arrival during business hours. For mail-in devices, cases are usually entered into our system the same day they arrive." } },
              { "@type": "Question", "name": "Can I submit the Start Recovery Form if I'm mailing my device?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! In fact, submitting the form is highly recommended for mail-in clients. It helps us match your incoming shipment to your case file, reducing delays and ensuring faster processing once your device arrives." } }
            ]
          }
        ]
      })
    }
  ]
})

useSeoMeta({
  title: 'Start Your Data Recovery — Five Star Data Recovery | Glendale, CA',
  description: 'Start your data recovery with Five Star Data Recovery. Free diagnostic, no data no charge guarantee. Drop off, mail-in, or call us today.'
})

const reviews = [{'text': 'Starting my data recovery process with Five Star was incredibly simple. I filled out the online form and got a quote within minutes. The instructions were clear, and the free prepaid shipping label made sending in my drive super convenient. They kept me updated every step of the way, and I had my recovered files back sooner than expected.', 'name': 'Emily S.', 'location': 'Summerlin, NV'}, {'text': 'The team made the whole data recovery process stress-free. From my initial phone call to dropping off my hard drive, they explained everything clearly. Within just a few days, they had recovered all my important files. Highly recommend!', 'name': 'Jessica R.', 'location': 'Austin, TX'}, {'text': 'I never thought getting started with data recovery could be this easy. I used their online Start Recovery form late at night, and someone followed up with me first thing the next morning. Their quick response and clear pricing made it an easy decision to move forward.', 'name': 'Timothy A.', 'location': 'New York, NY'}]
const faqs = [
  { q: 'Testimonials from Satisfied Clients', a: '"Starting my data recovery process with Five Star was incredibly simple. I filled out the online form and got a quote within minutes. The instructions were clear, and the free prepaid shipping label made sending in my drive super convenient. They kept me updated every step of the way, and I had my recovered files back sooner than expected." Emily S. Summerlin, NV "The team made the whole data recovery process stress-free. From my initial phone call to dropping off my hard drive, they explained everything clearly. Within just a few days, they had recovered all my important files. Highly recommend!"' },
]
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
const submitted = ref(false)
</script>

<template>
  <div class="page-content">
    <NavBar />
    <HeroSection
      title="Start Your Data Recovery Today"
      subtitle="Fast. Secure. Professional."
      description="Ready to get your data back? Starting your recovery with Five Star Data Recovery is fast and hassle-free. You can drop off your device, ship it in with our free prepaid label, or schedule a free local pickup. For urgent cases, we offer Expedited and Expedited Plus services with priority turnaround."
      bgImage="/hard-drive-recovery-service-los-angeles.webp"
    />
    <StatsBar />

    <!-- OPTIONS -->
    <section class="s-white">
      <div class="container">
        <div class="section-label center">How to Start</div>
        <h2 class="s-heading center">Choose Your Recovery Option</h2>
        <p class="s-intro center">We offer multiple convenient ways to get your recovery started. Choose the option that works best for you.</p>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:28px;margin-top:40px;">
          <div style="background:#f4f7fc;border-radius:14px;padding:36px;text-align:center;border:1px solid #e8ecf2;">
            <div style="font-size:2.4rem;margin-bottom:16px;">🚗</div>
            <h3 style="font-size:1.1rem;font-weight:800;color:#1a1a2e;margin-bottom:12px;">Drop Off In Person</h3>
            <p style="font-size:0.9rem;color:#4a5568;line-height:1.7;margin-bottom:20px;">Visit our Glendale, CA lab for same-day evaluation. Walk-ins welcome.</p>
            <p style="font-size:0.85rem;font-weight:700;color:#C9A84C;">805 N. Brand Blvd, Suite 250<br>Glendale, CA 91203</p>
          </div>
          <div style="background:#f4f7fc;border-radius:14px;padding:36px;text-align:center;border:1px solid #e8ecf2;">
            <div style="font-size:2.4rem;margin-bottom:16px;">📦</div>
            <h3 style="font-size:1.1rem;font-weight:800;color:#1a1a2e;margin-bottom:12px;">Mail Your Drive</h3>
            <p style="font-size:0.9rem;color:#4a5568;line-height:1.7;margin-bottom:20px;">Not local? No problem. We offer free shipping both ways for mail-in clients across the U.S.</p>
            <NuxtLink to="/data-recovery/mail-in-service" style="background:#C9A84C;color:#1a1a1a;padding:10px 20px;border-radius:6px;font-weight:700;font-size:0.9rem;text-decoration:none;display:inline-block;">Mail-In Form →</NuxtLink>
          </div>
          <div style="background:#f4f7fc;border-radius:14px;padding:36px;text-align:center;border:1px solid #e8ecf2;">
            <div style="font-size:2.4rem;margin-bottom:16px;">⚡</div>
            <h3 style="font-size:1.1rem;font-weight:800;color:#1a1a2e;margin-bottom:12px;">Expedited Recovery</h3>
            <p style="font-size:0.9rem;color:#4a5568;line-height:1.7;margin-bottom:20px;">Need your data back ASAP? Our expedited service handles your case 24/7 with priority turnaround.</p>
            <NuxtLink to="/expedited-service" style="background:#C9A84C;color:#1a1a1a;padding:10px 20px;border-radius:6px;font-weight:700;font-size:0.9rem;text-decoration:none;display:inline-block;">Learn More →</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- FORM -->
    <section class="s-grey">
      <div class="container" style="max-width:800px;margin:0 auto;">
        <div class="section-label center">Get Started</div>
        <h2 class="s-heading center">Start Your Recovery Now</h2>
        <div style="background:#fff;border-radius:14px;padding:48px;box-shadow:0 4px 32px rgba(0,0,0,0.08);">
          <form @submit.prevent="submitted = true" style="display:flex;flex-direction:column;gap:16px;">
            <div class="mf-row">
              <div class="mf-group">
                <label>NAME <span class="mf-req">*</span></label>
                <input type="text" placeholder="Your Name" class="mf-input" required />
              </div>
              <div class="mf-group">
                <label>EMAIL <span class="mf-req">*</span></label>
                <input type="email" placeholder="Email Address" class="mf-input" required />
              </div>
            </div>
            <div class="mf-row">
              <div class="mf-group">
                <label>PHONE</label>
                <input type="tel" placeholder="Phone Number" class="mf-input" />
              </div>
              <div class="mf-group">
                <label for="mf-device-type">SELECT YOUR DEVICE TYPE</label>
                <div class="mf-select-wrap">
                  <select id="mf-device-type" class="mf-input">
                    <option value="">— Select (Optional) —</option>
                    <option>Hard Drive</option><option>SSD</option><option>RAID/Server</option>
                    <option>External HDD</option><option>Mac/iMac</option><option>iPhone/Mobile</option>
                    <option>USB Flash Drive</option><option>SD Card</option><option>NAS Device</option><option>Other</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="mf-row">
              <div class="mf-group">
                <label for="mf-device-issue">SELECT ISSUE WITH DEVICE</label>
                <div class="mf-select-wrap">
                  <select id="mf-device-issue" class="mf-input">
                    <option value="">Select Issue</option>
                    <option>Not Detected / Not Showing Up</option><option>Clicking / Grinding Noise</option>
                    <option>Water Damage</option><option>Corrupted Files</option><option>Accidental Deletion</option>
                    <option>Physical Damage</option><option>Not Spinning</option><option>Other</option>
                  </select>
                </div>
              </div>
              <div class="mf-group">
                <label>Preferred Contact Method</label>
                <div class="mf-radio-group">
                  <label class="mf-radio"><input type="radio" name="contactsr" value="call" checked /> CALL</label>
                  <label class="mf-radio"><input type="radio" name="contactsr" value="email" /> EMAIL</label>
                  <label class="mf-radio"><input type="radio" name="contactsr" value="text" /> TEXT</label>
                </div>
              </div>
            </div>
            <div class="mf-group mf-full">
              <label for="mf-response-time">PREFERRED RESPONSE TIME</label>
              <div class="mf-select-wrap">
                <select id="mf-response-time" class="mf-input">
                  <option value="">Select Preferred Time</option>
                  <option>Immediately (24/7)</option><option>During Business Hours</option>
                  <option>Morning (8am - 12pm)</option><option>Afternoon (12pm - 5pm)</option><option>Evening (5pm - 8pm)</option>
                </select>
              </div>
            </div>
            <div v-if="submitted" style="background:#d4edda;border:1px solid #c3e6cb;border-radius:8px;padding:16px;color:#155724;font-weight:600;">
              ✓ Thank you! We'll be in touch within 24 hours.
            </div>
            <button type="submit" class="mf-submit">Request a Consultation</button>
          </form>
        </div>
      </div>
    </section>

    <!-- REVIEWS -->
    <ReviewsSection :reviews="reviews" />

    <!-- FAQ -->
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

    <!-- VIDEO -->
    <section class="page-video-section">
      <div class="container page-video-inner">
        <div>
          <h2 class="page-video-heading">See Why Thousands Trust Us With Their Important Data</h2>
          <p class="page-video-desc">Data loss is stressful — but working with us doesn't have to be. Watch how our team handles each recovery with care, professionalism, and precision.</p>
        </div>
        <div class="page-video-embed">
          <iframe src="https://www.youtube.com/embed/14ACFHJ24hg?start=60" title="Five Star Data Recovery" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
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
.section-label { font-size: 0.72rem; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; color: #7a5900; margin-bottom: 10px; }
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
.btn-gold-full { display: block; width: 100%; text-align: center; background: #C9A84C; color: #1a1a1a; padding: 18px; border-radius: 8px; font-weight: 800; font-size: 1.05rem; text-decoration: none; letter-spacing: 0.04em; transition: background 0.2s; }
.btn-gold-full:hover { background: #b8923e; }
.page-video-section { background: #2a2d38; padding: 70px 0; }
.page-video-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
.page-video-heading { font-size: clamp(1.4rem, 2.5vw, 2rem); font-weight: 800; color: #fff; line-height: 1.25; }
.page-video-desc { font-size: 0.95rem; color: #9ba3b8; line-height: 1.8; margin-top: 16px; }
.page-video-embed { position: relative; border-radius: 14px; overflow: hidden; aspect-ratio: 16/9; box-shadow: 0 12px 48px rgba(0,0,0,0.4); }
.page-video-embed iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }
@media (max-width: 768px) {
  .reviews-grid, .page-video-inner, .mf-row { grid-template-columns: 1fr; }
  .mf-full { grid-column: 1; }
}
@media (max-width: 768px) {
  div[style*="grid-template-columns:repeat(3"] { grid-template-columns: 1fr !important; }
}
</style>
