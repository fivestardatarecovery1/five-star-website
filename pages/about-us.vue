<script setup lang="ts">
useHead({
  script: [{
    type: 'application/ld+json',
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "AboutPage",
          "@id": "https://www.fivestardatarecovery.com/about-us/#aboutpage",
          "url": "https://www.fivestardatarecovery.com/about-us/",
          "name": "About Five Star Data Recovery | Trusted Data Recovery Experts",
          "description": "Learn about Five Star Data Recovery, a trusted leader in professional data recovery services in Glendale, CA. Offering flat-rate pricing, no data no charge policy, and nationwide mail-in service.",
          "inLanguage": "en-US",
          "isPartOf": { "@id": "https://www.fivestardatarecovery.com/#website" },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fivestardatarecovery.com/" },
              { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://www.fivestardatarecovery.com/about-us/" }
            ]
          }
        },
        {
          "@type": "LocalBusiness",
          "@id": "https://www.fivestardatarecovery.com/#localbusiness",
          "name": "Five Star Data Recovery",
          "url": "https://www.fivestardatarecovery.com/",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.fivestardatarecovery.com/logo.webp"
          },
          "image": "https://www.fivestardatarecovery.com/logo.webp",
          "description": "Five Star Data Recovery is a professional data recovery lab in Glendale, CA specializing in hard drives, SSDs, RAID systems, iPhones, and USB flash drives. Flat-rate pricing, Class 100 cleanroom, and a no data no charge guarantee.",
          "telephone": "+1-818-272-8866",
          "email": "info@fivestardatarecovery.com",
          "foundingDate": "2012",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1731 S Brand Blvd",
            "addressLocality": "Glendale",
            "addressRegion": "CA",
            "postalCode": "91204",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 34.1233,
            "longitude": -118.2567
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
              "opens": "10:00",
              "closes": "18:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "opens": "10:00",
              "closes": "14:00"
            }
          ],
          "areaServed": [
            { "@type": "Place", "name": "Glendale, CA" },
            { "@type": "Place", "name": "Los Angeles, CA" },
            { "@type": "Country", "name": "United States" }
          ],
          "priceRange": "$300 - $950",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "498"
          },
          "sameAs": [
            "https://www.fivestardatarecovery.com"
          ]
        },
        {
          "@type": "Organization",
          "@id": "https://www.fivestardatarecovery.com/#organization",
          "name": "Five Star Data Recovery",
          "url": "https://www.fivestardatarecovery.com/",
          "foundingDate": "2012",
          "founder": {
            "@type": "Person",
            "name": "Vahan Hovsepian"
          },
          "numberOfEmployees": {
            "@type": "QuantitativeValue",
            "value": 10
          },
          "description": "Data recovery lab founded in 2012, previously known as Platinum Plus Services. Specializing in professional data recovery for individuals and businesses across the United States.",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.fivestardatarecovery.com/logo.webp"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-818-272-8866",
            "contactType": "customer service",
            "availableLanguage": "English",
            "hoursAvailable": "Mo-Fr 10:00-18:00, Sa 10:00-14:00"
          }
        }
      ]
    })
  }]
})

useSeoMeta({
  title: 'About Five Star Data Recovery | Trusted Data Recovery Experts',
  description: 'Learn about Five Star Data Recovery, a trusted leader in professional data recovery services in Glendale, CA. Offering flat-rate pricing, no data no charge policy, and nationwide mail-in service. Call today for a free consultation.',
  ogTitle: 'About Five Star Data Recovery | Trusted Data Recovery Experts',
  ogDescription: 'Learn about Five Star Data Recovery, a trusted leader in professional data recovery services in Glendale, CA. Offering flat-rate pricing, no data no charge policy, and nationwide mail-in service. Call today for a free consultation.',
  ogUrl: 'https://www.fivestardatarecovery.com/about-us/',
  ogImage: 'https://www.fivestardatarecovery.com/about-us-hero.webp',
  ogType: 'article',
  ogSiteName: 'Five Star Data Recovery',
  twitterCard: 'summary_large_image',
  twitterTitle: 'About Five Star Data Recovery | Trusted Data Recovery Experts',
  twitterDescription: 'Learn about Five Star Data Recovery, a trusted leader in professional data recovery services in Glendale, CA. Offering flat-rate pricing, no data no charge policy, and nationwide mail-in service.',
})

const whoWeAre = ['At Five Star Data Recovery, we’re more than just engineers — we’re problem solvers dedicated to helping you recover what matters most. Based in Glendale, California, our team specializes in professional data recovery services for hard drives, SSDs, RAID systems, iPhones, USBs, and more.', 'With years of hands-on experience and a state-of-the-art Class 100 cleanroom lab, we’ve earned a reputation for delivering high success rates, honest diagnostics, and upfront pricing. Every case is handled by trained recovery experts who follow strict protocols to maximize the chances of success — all while maintaining full transparency with our clients.', 'We believe in doing things the right way — no gimmicks, no hidden fees, just skilled engineers working hard to recover your data as quickly and safely as possible.']
const history = ['Five Star Data Recovery began as a small computer repair shop in 2012 (previously known as Platinum Plus Services), proudly serving our local community with everyday tech support. But everything changed when our founder, Vahan, faced a deeply personal challenge: helping a family member recover irreplaceable photos from a failed hard drive.', 'What started as a simple favor quickly turned into a mission. After years of hands-on training, research, and investment into advanced tools and cleanroom technology, Vahan transformed the company into a dedicated data recovery lab — now trusted by clients across the country.', 'That journey still guides us today. Every recovery case is handled with the same care and urgency that first inspired this path — because we know firsthand just how valuable your data truly is.']
const rdText = ['At Five Star Data Recovery, innovation isn’t optional — it’s essential. We continuously invest in research and development to stay ahead of the latest storage technologies, firmware behaviors, and failure trends across hard drives, SSDs, and RAID systems.', 'From building proprietary tools to analyzing chip-level damage on the newest NAND architectures, our in-house team is always testing, learning, and refining recovery techniques. This commitment to R&D enables us to recover data from cases that others might consider “unrecoverable.”', 'Our lab isn’t just a workspace — it’s a place of constant experimentation and technical growth. Whether we’re reverse-engineering firmware modules or testing new soldering procedures, every advancement we make directly improves the outcomes for our clients.']

const faqs = [
  { q: 'How did Five Star Data Recovery get started?', a: 'Five Star Data Recovery began as a local computer repair shop, helping customers with everything from hardware repairs to basic troubleshooting. One case stood out — when our founder, Vahan, was asked to help a family member recover meaningful photos from a failed hard drive. That experience sparked a deeper interest in data recovery. After years of hands-on learning and investing in advanced equipment, the business gradually transitioned into a dedicated recovery lab.' },
  { q: 'Who is the founder of Five Star Data Recovery?', a: 'Five Star Data Recovery was founded by Vahan Hovsepian, a lifelong entrepreneur with a passion for solving real-world problems and helping people in meaningful ways. Under his leadership, the company continues to grow while staying true to the core values of hard work, integrity, and genuine customer care.' },
  { q: 'What makes Five Star Data Recovery different from other labs?', a: 'At Five Star Data Recovery, we focus on doing the work in-house — the right way. Unlike many labs that outsource or rely on software-only solutions, we handle every case with a hands-on, engineering-driven approach. Every client receives a transparent diagnosis, a flat-rate price based on the actual failure, and honest expectations from day one.' },
  { q: 'What types of data recovery cases do you specialize in?', a: 'At Five Star Data Recovery, we specialize in advanced data recovery from failed hard drives, SSDs, USB drives, SD cards, RAID systems, and iPhones. Our primary focus is on cases involving physical damage, firmware corruption, electrical issues, and drives that are no longer recognized by the computer.' },
  { q: 'Do you really perform all recoveries in-house?', a: 'Yes — 100% of our data recoveries are performed in-house at our Glendale, California lab. We never outsource cases or send drives to third parties. Our lab is equipped with a Class 100 cleanroom, specialized tools like PC-3000, and a team of trained recovery engineers who handle each device with precision and care.' },
  { q: 'What steps are you taking to stay ahead in data recovery technology?', a: 'At Five Star Data Recovery, we regularly travel to Europe and other parts of the world to receive advanced training from some of the top data recovery engineers in the industry. We also invest heavily in the latest tools and technologies, including cleanroom equipment, micro soldering stations, and advanced firmware-level recovery systems like PC-3000.' },
]
const reviews = [
  { text: "My drive was clicking like crazy and wouldn't mount. Five Star recovered 12 years of family photos. I'm beyond grateful.", name: 'Ana T.', location: 'Pasadena' },
  { text: 'I heard a hard drive clicking noise and panicked. These guys explained everything clearly, fixed it fast, and saved my client data.', name: 'Jason B.', location: 'Los Angeles' },
  { text: "We lost an entire wedding video project after formatting our Lacie Rugged SSD. Five Star Data Recovery recovered all the footage in less than 72 hours. Total lifesavers.", name: 'Jenna M.', location: 'Santa Monica, CA' },
  { text: "I had 4TB of files on my Lacie d2 drive that suddenly stopped mounting. Other places said it was hopeless. Five Star got everything back.", name: 'Alex R.', location: 'Austin, TX' },
  { text: "My team uses a 4big RAID for media production. One drive failed, then another. We thought we lost the whole project. Five Star not only recovered the files—they kept the folder structure completely intact.", name: 'Brandon H.', location: 'New York, NY' },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />
    <HeroSection
      title="About Us"
      subtitle="Trusted Data Recovery Specialists."
      description="At Five Star Data Recovery, we understand that losing data can be stressful, overwhelming, and sometimes even heartbreaking. Whether it's personal photos, important business documents, or critical client files, we know how valuable your data is — and we've built our business around helping you get it back."
      bgImage="/about-us-hero.webp"
      :showForm="false"
      bgSize="cover"
      :overlayOpacity="0.72"
    />
    <StatsBar />

    <!-- WHO WE ARE -->
    <section class="s-white">
      <div class="container" style="display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;">
        <div>
          <div class="section-label">Our Story</div>
          <h2 class="s-heading">Who We Are</h2>
          <p v-for="t in whoWeAre" :key="t" class="s-body">{{ t }}</p>
        </div>
        <div style="position:relative;">
          <img src="/five-star-data-recovery-lab-technician-glendale-ca.webp" alt="Five Star Data Recovery team" style="width:100%;border-radius:14px;object-fit:cover;max-height:440px;display:block;" width="2560" height="1441" loading="lazy" />
          <div style="position:absolute;bottom:-20px;left:24px;background:#C9A84C;color:#fff;border-radius:10px;padding:14px 22px;box-shadow:0 8px 24px rgba(201,168,76,0.4);">
            <span style="display:block;font-size:1.6rem;font-weight:900;line-height:1;">21,000+</span>
            <span style="display:block;font-size:0.75rem;font-weight:600;opacity:0.85;margin-top:3px;">Successful Recoveries</span>
          </div>
        </div>
      </div>
    </section>



    <!-- HOW WE GOT HERE -->
    <section class="s-grey">
      <div class="container" style="max-width:820px;margin:0 auto;">
        <div class="section-label center">Our Journey</div>
        <h2 class="s-heading center">How We Got Here</h2>
        <p v-for="t in history" :key="t" class="s-body" style="text-align:center;">{{ t }}</p>
      </div>
    </section>

    <!-- R&D -->
    <section class="s-white">
      <div class="container" style="display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;">
        <div style="position:relative;">
          <img src="/five-star-lab-engineers.jpg" alt="Five Star Data Recovery lab engineers at work" style="width:100%;border-radius:14px;object-fit:cover;max-height:400px;display:block;" width="800" height="486" loading="lazy" />
        </div>
        <div>
          <div class="section-label">Innovation</div>
          <h2 class="s-heading">Our Dedication to Research & Development</h2>
          <p v-for="t in rdText" :key="t" class="s-body">{{ t }}</p>
        </div>
      </div>
    </section>

    <!-- VALUES -->
    <section class="s-grey">
      <div class="container">
        <div class="section-label center">What We Stand For</div>
        <h2 class="s-heading center">Honesty, Integrity & Experience</h2>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:28px;margin-top:40px;">
          <div style="background:#fff;border-radius:14px;padding:36px;border:1px solid #e8ecf2;text-align:center;">
            <div style="font-size:2.4rem;margin-bottom:16px;">🔬</div>
            <h3 style="font-size:1.1rem;font-weight:800;color:#1a1a2e;margin-bottom:12px;">Class 100 Cleanroom</h3>
            <p style="font-size:0.9rem;color:#4a5568;line-height:1.7;">Our state-of-the-art cleanroom meets industry standards, ensuring every physical recovery is performed in a contamination-free environment.</p>
          </div>
          <div style="background:#fff;border-radius:14px;padding:36px;border:1px solid #e8ecf2;text-align:center;">
            <div style="font-size:2.4rem;margin-bottom:16px;">💯</div>
            <h3 style="font-size:1.1rem;font-weight:800;color:#1a1a2e;margin-bottom:12px;">No Data, No Charge</h3>
            <p style="font-size:0.9rem;color:#4a5568;line-height:1.7;">We believe in complete transparency. If we can't recover your data, you pay nothing. <em>(most cases)</em></p>
          </div>
          <div style="background:#fff;border-radius:14px;padding:36px;border:1px solid #e8ecf2;text-align:center;">
            <div style="font-size:2.4rem;margin-bottom:16px;">🤝</div>
            <h3 style="font-size:1.1rem;font-weight:800;color:#1a1a2e;margin-bottom:12px;">Flat-Rate Pricing</h3>
            <p style="font-size:0.9rem;color:#4a5568;line-height:1.7;">No hidden fees, no surprises. Every case is quoted upfront so you always know exactly what you're paying before we begin.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- <NuxtLink to="/reviews">reviews</NuxtLink> -->
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

    <!-- CTA -->
    <section class="s-white">
      <div class="container" style="text-align:center;max-width:680px;margin:0 auto;">
        <h2 class="s-heading center">Ready to Work With Us?</h2>
        <p class="s-intro center">Whether you have a clicking drive, a corrupted <NuxtLink to="/data-recovery/ssd-data-recovery">SSD</NuxtLink>, or a failed <NuxtLink to="/data-recovery/raid-data-recovery">RAID</NuxtLink> array — we're here to help. Start your recovery today.</p>
        <NuxtLink to="/start-recovery" class="btn-gold-full">Start Your Recovery</NuxtLink>
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
.s-dark { background: #1a1a2e; padding: 88px 0; }
.section-label { font-size: 0.72rem; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; color: #7a5900; margin-bottom: 10px; }
.section-label.center { text-align: center; }
.s-heading { font-size: clamp(1.5rem, 2.8vw, 2.1rem); font-weight: 900; color: #1a1a2e; line-height: 1.25; margin-bottom: 14px; }
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
@media (max-width: 768px) {
  div[style*="grid-template-columns:1fr 1fr"] { grid-template-columns: 1fr !important; }
  div[style*="grid-template-columns:repeat(4"] { grid-template-columns: repeat(2,1fr) !important; }
  div[style*="grid-template-columns:repeat(3"] { grid-template-columns: 1fr !important; }
}
/* About stats section */
.about-stats-section {
  background: linear-gradient(135deg, #0a0e1a 0%, #111827 100%);
  padding: 64px 0;
  border-top: 1px solid rgba(245,200,66,0.2);
  border-bottom: 1px solid rgba(245,200,66,0.2);
}
.about-stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.about-stat-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(245,200,66,0.15);
  border-radius: 14px;
  padding: 36px 20px 30px;
  position: relative;
  overflow: hidden;
  transition: background 0.2s, border-color 0.2s, transform 0.2s;
}
.about-stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 56px;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
  border-radius: 0 0 4px 4px;
}
.about-stat-card:hover {
  background: rgba(245,200,66,0.05);
  border-color: rgba(245,200,66,0.35);
  transform: translateY(-3px);
}
.about-stat-icon {
  font-size: 24px;
  line-height: 1;
}
.about-stat-num {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 3.5vw, 3rem);
  font-weight: 900;
  color: var(--gold);
  line-height: 1;
  letter-spacing: -0.02em;
}
.about-stat-label {
  font-size: 11px;
  font-weight: 700;
  color: #8892a4;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  text-align: center;
}
@media (max-width: 768px) {
  .about-stats-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
  .about-stat-card { padding: 28px 16px 24px; }
}
</style>
