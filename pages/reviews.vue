<script setup lang="ts">
useSeoMeta({
  title: 'Customer Reviews — Five Star Data Recovery',
  description: 'Read real customer reviews for Five Star Data Recovery. 1,000+ 5-star reviews. Trusted data recovery experts in Glendale, CA. Call 323-672-3000.'
})

const reviews = [
  { name: 'Alex R.', location: 'Pasadena, CA', stars: 5, text: 'I thought my external hard drive was completely dead — it wasn\'t even spinning. Five Star Data Recovery not only diagnosed the problem fast but recovered all my photos and documents within a few days. Highly recommend them for hard drive recovery!' },
  { name: 'Megan S.', location: 'Los Angeles, CA', stars: 5, text: 'My iPhone had severe water damage and wouldn\'t turn on at all. I had years of family photos that I thought were gone forever. These guys are miracle workers — they recovered everything from my iPhone. Absolutely worth it!' },
  { name: 'Daniel K.', location: 'Santa Monica, CA', stars: 5, text: 'We had a failed RAID 5 array with two bad drives, and our business data was at risk. Five Star Data Recovery worked through the night with their Expedited Plus Service and got us back up and running in 48 hours. True professionals.' },
  { name: 'Linda M.', location: 'Austin, TX', stars: 5, text: 'My laptop\'s SSD just disappeared from the system. No backups, nothing. I contacted several companies, and Five Star stood out. They explained the process clearly and recovered my most important work files. SSD recovery experts for sure.' },
  { name: 'Jason T.', location: 'New York, NY', stars: 5, text: 'I broke my USB flash drive during a presentation — completely bent the connector. I thought I had lost all my client data. The team at Five Star carefully extracted the chip and recovered all of it. I\'m beyond impressed.' },
  { name: 'Ana T.', location: 'Pasadena, CA', stars: 5, text: 'My drive was clicking like crazy and wouldn\'t mount. Five Star recovered 12 years of family photos. I\'m beyond grateful. They kept me updated every step of the way and the pricing was exactly as quoted.' },
  { name: 'Jason B.', location: 'Los Angeles, CA', stars: 5, text: 'I heard a hard drive clicking noise and panicked. These guys explained everything clearly, fixed it fast, and saved my client data. Professional, honest, and competent — everything you want in a recovery service.' },
  { name: 'Michael T.', location: 'Glendale, CA', stars: 5, text: 'My RAID server failed and I thought 8 years of business data was gone forever. Five Star recovered 100% of it within 48 hours. Worth every penny. These are the real deal.' },
  { name: 'Sarah K.', location: 'Los Angeles, CA', stars: 5, text: 'Dropped my external hard drive with 3 years of wedding photography. They recovered every single file. I cried when I got the call. Incredible team — they understand how precious this data is.' },
  { name: 'James R.', location: 'Burbank, CA', stars: 5, text: 'We use Five Star for all our enterprise data emergencies. Professional, fast, and the cleanroom facility is state-of-the-art. Highly recommend for businesses that can\'t afford downtime.' },
  { name: 'Christine L.', location: 'Hollywood, CA', stars: 5, text: 'Lost all my freelance work when my SSD failed after a power surge. Five Star recovered everything in 4 days. Their communication throughout was excellent — they called me with updates daily.' },
  { name: 'Robert M.', location: 'Beverly Hills, CA', stars: 5, text: 'Highly professional and discreet service. They recovered sensitive business documents from a failed encrypted drive. Signed an NDA without any issue. Exceptional service from start to finish.' },
]

const stats = [
  { num: '1,000+', label: 'Total Reviews' },
  { num: '5.0', label: 'Average Rating' },
  { num: '21,000+', label: 'Drives Recovered' },
  { num: '10+', label: 'Years in Business' },
]
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="What Our Customers Say"
      subtitle="Real Stories. Real Results. Real Five Star Service."
      description="Don't just take our word for it. Read what thousands of customers across the US have said about their data recovery experience with Five Star Data Recovery."
    >
      <template #badges>
        <div class="trust-badges">
          <span class="badge">⭐ 5.0 Average Rating</span>
          <span class="badge">✅ 1,000+ Reviews</span>
          <span class="badge">✅ 21,000+ Drives Recovered</span>
        </div>
      </template>
    </HeroSection>

    <!-- Stats Bar -->
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <div v-for="s in stats" :key="s.label" class="stat-item">
            <div class="stat-num">{{ s.num }}</div>
            <div class="stat-label">{{ s.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Reviews Grid -->
    <section class="reviews-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Customer <span class="gold-underline gold">Reviews</span></h2>
        </div>
        <div class="reviews-grid">
          <div v-for="r in reviews" :key="r.name" class="review-card card">
            <div class="review-stars">{{ '★'.repeat(r.stars) }}</div>
            <p class="review-text">"{{ r.text }}"</p>
            <div class="review-author">
              <span class="author-name">{{ r.name }}</span>
              <span class="author-location">{{ r.location }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-band">
      <div class="container cta-band-inner">
        <div><h2 class="cta-title">Join Our Satisfied Customers</h2><p class="cta-sub">Free evaluation. Flat-rate pricing. No charge if we can't recover.</p></div>
        <div class="cta-actions"><a href="tel:3236723000" class="btn btn-gold">📞 323-672-3000</a><NuxtLink to="/data-recovery/free-quote" class="btn btn-outline-sm">Get Free Quote</NuxtLink></div>
      </div>
    </section>
    <FooterBar />
  </div>
</template>

<style scoped>
.trust-badges { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 8px; }
.badge { background: rgba(255,255,255,0.06); border: 1px solid var(--border); color: var(--white); padding: 7px 14px; border-radius: 20px; font-size: 13px; font-weight: 500; }
.stats-section { background: var(--card-bg); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); padding: 48px 0; }
.stats-grid { display: flex; justify-content: space-around; align-items: center; flex-wrap: wrap; gap: 32px; }
.stat-item { text-align: center; }
.stat-num { font-family: var(--font-heading); font-size: clamp(36px, 5vw, 52px); font-weight: 900; color: var(--gold); margin-bottom: 6px; }
.stat-label { font-size: 14px; color: var(--muted); font-weight: 500; }
.reviews-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.review-stars { color: var(--gold); font-size: 20px; letter-spacing: 2px; margin-bottom: 14px; }
.review-text { font-size: 15px; color: var(--muted); font-style: italic; line-height: 1.7; margin-bottom: 20px; }
.review-author { border-top: 1px solid var(--border); padding-top: 14px; display: flex; flex-direction: column; gap: 3px; }
.author-name { font-weight: 700; font-size: 15px; color: var(--white); }
.author-location { font-size: 13px; color: var(--muted); }
.cta-band { background: linear-gradient(135deg, #0f1220, #13161F); border-top: 1px solid var(--border); padding: 56px 0; }
.cta-band-inner { display: flex; justify-content: space-between; align-items: center; gap: 32px; flex-wrap: wrap; }
.cta-title { font-family: var(--font-heading); font-size: 28px; font-weight: 900; color: var(--white); margin-bottom: 8px; }
.cta-sub { font-size: 16px; color: var(--muted); }
.cta-actions { display: flex; gap: 16px; flex-wrap: wrap; }
.btn-outline-sm { display: inline-block; padding: 14px 28px; border: 2px solid var(--gold); color: var(--gold); border-radius: 8px; font-weight: 700; font-size: 15px; text-decoration: none; }
.btn-outline-sm:hover { background: rgba(245,200,66,0.1); }
@media (max-width: 1024px) { .reviews-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .reviews-grid { grid-template-columns: 1fr; } .cta-band-inner { flex-direction: column; } }
</style>
