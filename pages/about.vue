<script setup lang="ts">
useSeoMeta({
  title: 'About Us',
  description: 'Learn about Five Star Data Recovery — 10+ years of professional data recovery in Glendale, CA. ISO cleanroom, certified engineers, 21,000+ drives recovered.'
})
</script>

<template>
  <div>
    <NavBar />

    <HeroSection
      title="About Five Star Data Recovery"
      subtitle="10 Years. 21,000+ Drives. One Mission."
      description="We started Five Star Data Recovery because we saw how devastating data loss could be — for families, small businesses, and large enterprises alike. Our mission is simple: recover your data, or you don't pay."
    />

    <section>
      <div class="container">
        <div class="about-grid">
          <div class="about-copy">
            <h2 class="section-title">Our <span class="gold">Story</span></h2>
            <p>Five Star Data Recovery was founded in Glendale, California over a decade ago by a team of data forensics engineers who believed the industry needed more transparency and less price-gouging.</p>
            <p>Today, we're one of the most trusted data recovery labs on the West Coast — with a 5.0-star rating across hundreds of reviews, a dedicated ISO Class 5 cleanroom, and a team that works 24/7/365 to recover your data.</p>
            <p>We've seen it all: RAID arrays from Fortune 500 companies, wedding photos from irreplaceable moments, medical records, financial data, and decades of family memories. Every case matters to us.</p>
          </div>
          <div class="about-stats">
            <div class="about-stat">
              <span class="about-stat-num">21,000+</span>
              <span class="about-stat-label">Drives Recovered</span>
            </div>
            <div class="about-stat">
              <span class="about-stat-num">10+</span>
              <span class="about-stat-label">Years Experience</span>
            </div>
            <div class="about-stat">
              <span class="about-stat-num">5.0</span>
              <span class="about-stat-label">Star Rating</span>
            </div>
            <div class="about-stat">
              <span class="about-stat-num">24/7</span>
              <span class="about-stat-label">Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="values-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our <span class="gold-underline gold">Core Values</span></h2>
        </div>
        <div class="grid-3">
          <div v-for="v in [
            {icon:'🏆',title:'Integrity',desc:'We tell you exactly what\'s recoverable and what isn\'t. No false hope. No hidden fees. No surprises.'},
            {icon:'🔬',title:'Precision',desc:'Data recovery is surgery. We treat every drive with the care and precision of a medical procedure.'},
            {icon:'🤝',title:'Trust',desc:'You\'re handing us your most irreplaceable data. We take that responsibility seriously, every single time.'},
          ]" :key="v.title" class="card values-card">
            <div class="values-icon">{{ v.icon }}</div>
            <h3 class="values-title">{{ v.title }}</h3>
            <p class="values-desc">{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="location-section">
      <div class="container location-inner">
        <div>
          <h2 class="section-title">Visit Our <span class="gold">Lab</span></h2>
          <div class="location-details">
            <p>📍 <strong>1731 S Brand Blvd Suite 100</strong><br>Glendale, CA 91204</p>
            <p>📞 <a href="tel:3236723000">323-672-3000</a></p>
            <p>⏰ Walk-ins welcome · Emergency 24/7 by appointment</p>
          </div>
          <NuxtLink to="/contact" class="btn btn-gold" style="margin-top:24px">Get In Touch</NuxtLink>
        </div>
        <div class="map-placeholder">
          <div class="map-card">
            <p style="font-size:48px">🗺️</p>
            <p style="font-weight:700;margin-top:12px">Glendale, CA</p>
            <p style="color:var(--muted);font-size:14px;margin-top:4px">1731 S Brand Blvd Suite 100</p>
            <a href="https://maps.google.com/?q=1731+S+Brand+Blvd+Suite+100+Glendale+CA+91204" target="_blank" rel="noopener" class="btn btn-outline" style="margin-top:16px;font-size:13px">Open in Maps</a>
          </div>
        </div>
      </div>
    </section>

    <FooterBar />
  </div>
</template>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}
.about-copy p {
  font-size: 16px;
  color: var(--muted);
  line-height: 1.8;
  margin-bottom: 16px;
}
.about-copy .section-title { margin-bottom: 24px; }
.about-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.about-stat {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 28px;
  text-align: center;
}
.about-stat-num {
  display: block;
  font-family: var(--font-heading);
  font-size: 36px;
  font-weight: 900;
  color: var(--gold);
  line-height: 1;
  margin-bottom: 8px;
}
.about-stat-label { font-size: 13px; color: var(--muted); }

.values-section { background: var(--card-bg); }
.values-icon { font-size: 36px; margin-bottom: 14px; }
.values-title { font-family: var(--font-heading); font-size: 20px; font-weight: 800; margin-bottom: 10px; }
.values-desc { font-size: 15px; color: var(--muted); line-height: 1.7; }

.location-section { background: linear-gradient(135deg, #0A0C14, #0f1220); }
.location-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}
.location-details { display: flex; flex-direction: column; gap: 14px; margin-top: 24px; }
.location-details p { font-size: 16px; color: var(--muted); line-height: 1.6; }
.location-details a { color: var(--gold); font-weight: 600; }
.map-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 48px;
  text-align: center;
}

@media (max-width: 900px) {
  .about-grid, .location-inner { grid-template-columns: 1fr; }
}
</style>
