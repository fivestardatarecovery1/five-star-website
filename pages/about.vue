<script setup lang="ts">
useSeoMeta({
  title: 'About Five Star Data Recovery — Our Story',
  description: 'Learn about Five Star Data Recovery — our story, our team, and our mission to help people recover irreplaceable data. Based in Glendale, CA since 2012. Call 323-672-3000.'
})

const stats = [
  { num: '2012', label: 'Founded' },
  { num: '10+', label: 'Years of Experience' },
  { num: '21,000+', label: 'Drives Recovered' },
  { num: '5.0', label: 'Star Rating' },
]

const values = [
  { icon: '🔍', title: 'Honesty', desc: 'We never overpromise. We give you an honest assessment of what\'s possible and what it will cost — before any work begins.' },
  { icon: '🏆', title: 'Integrity', desc: 'No hidden fees, no bait-and-switch tactics, no scare tactics. Just straightforward service at transparent prices.' },
  { icon: '🔬', title: 'Expertise', desc: 'Our engineers receive the highest level of training and continuously invest in R&D to stay ahead of the latest storage technology.' },
  { icon: '❤️', title: 'Care', desc: 'Behind every drive is a story. We treat every recovery with the urgency and care that irreplaceable data deserves.' },
]
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="About Five Star Data Recovery"
      subtitle="Founded on a Personal Mission. Built on Results."
      description="We started as a small computer repair shop in 2012. Today, we're one of the most trusted data recovery labs in the country — serving thousands of clients from our state-of-the-art Glendale, CA facility."
    >
      <template #badges>
        <div class="trust-badges">
          <span class="badge">✅ Since 2012</span>
          <span class="badge">✅ Glendale, CA</span>
          <span class="badge">✅ 21,000+ Drives Recovered</span>
        </div>
      </template>
    </HeroSection>

    <!-- Stats -->
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

    <!-- Who We Are -->
    <section class="story-section">
      <div class="container">
        <div class="story-grid">
          <div class="story-content">
            <h2 class="section-title">Who <span class="gold-underline gold">We Are</span></h2>
            <p>At Five Star Data Recovery, we're more than just engineers — we're problem solvers dedicated to helping you recover what matters most. Based in Glendale, California, our team specializes in professional data recovery services for hard drives, SSDs, RAID systems, iPhones, USBs, and more.</p>
            <p>With years of hands-on experience and a state-of-the-art Class 100 cleanroom lab, we've earned a reputation for delivering high success rates, honest diagnostics, and upfront pricing. Every case is handled by trained recovery experts who follow strict protocols to maximize the chances of success — all while maintaining full transparency with our clients.</p>
            <p>We believe in doing things the right way — no gimmicks, no hidden fees, just skilled engineers working hard to recover your data as quickly and safely as possible. Whether it's a business-critical RAID system or a personal external hard drive, we treat every case with urgency and care.</p>
          </div>
          <div class="story-aside">
            <div class="story-callout card">
              <div class="callout-icon">💬</div>
              <blockquote class="callout-quote">"At Five Star Data Recovery, your data is our priority. Contact us today for a free consultation and find out why so many customers trust us when it matters most."</blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="history-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">How We <span class="gold-underline gold">Got Here</span></h2>
        </div>
        <div class="history-content">
          <p>Five Star Data Recovery began as a small computer repair shop in 2012 (previously known as Platinum Plus Services), proudly serving our local community with everyday tech support. But everything changed when our founder, Vahan, faced a deeply personal challenge: helping a family member recover irreplaceable photos from a failed hard drive.</p>
          <p>What started as a simple favor quickly turned into a mission. After years of hands-on training, research, and investment into advanced tools and cleanroom technology, Vahan transformed the company into a dedicated data recovery lab — now trusted by clients across the country.</p>
          <p>That journey still guides us today. Every recovery case is handled with the same care and urgency that first inspired this path — because we know firsthand just how valuable your data truly is.</p>
        </div>
      </div>
    </section>

    <!-- R&D -->
    <section class="rd-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Dedication to <span class="gold-underline gold">Research & Development</span></h2>
        </div>
        <div class="rd-content">
          <p>At Five Star Data Recovery, innovation isn't optional — it's essential. We continuously invest in research and development to stay ahead of the latest storage technologies, firmware behaviors, and failure trends across hard drives, SSDs, and RAID systems.</p>
          <p>From building proprietary tools to analyzing chip-level damage on the newest NAND architectures, our in-house team is always testing, learning, and refining recovery techniques. This commitment to R&D enables us to recover data from cases that others might consider "unrecoverable."</p>
          <p>Our lab isn't just a workspace — it's a place of constant experimentation and technical growth. Whether we're reverse-engineering firmware modules or testing new soldering procedures, every advancement we make directly improves the outcomes for our clients.</p>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="values-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our <span class="gold-underline gold">Core Values</span></h2>
        </div>
        <div class="grid-4">
          <div v-for="v in values" :key="v.title" class="value-card card">
            <div class="value-icon">{{ v.icon }}</div>
            <h3 class="value-title">{{ v.title }}</h3>
            <p class="value-desc">{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-band">
      <div class="container cta-band-inner">
        <div><h2 class="cta-title">Ready to Work With Us?</h2><p class="cta-sub">Free evaluation. Honest pricing. Results you can count on.</p></div>
        <div class="cta-actions"><a href="tel:3236723000" class="btn btn-gold">📞 323-672-3000</a><NuxtLink to="/contact" class="btn btn-outline-sm">Contact Us</NuxtLink></div>
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
.story-grid { display: grid; grid-template-columns: 3fr 2fr; gap: 60px; align-items: start; }
.story-content p { font-size: 16px; color: var(--muted); line-height: 1.8; margin-bottom: 16px; }
.story-callout { padding: 32px; }
.callout-icon { font-size: 36px; margin-bottom: 16px; }
.callout-quote { font-size: 16px; color: var(--muted); line-height: 1.7; font-style: italic; margin: 0; }
.history-content p, .rd-content p { font-size: 16px; color: var(--muted); line-height: 1.8; margin-bottom: 16px; max-width: 800px; }
.value-card { text-align: center; }
.value-icon { font-size: 36px; margin-bottom: 12px; }
.value-title { font-family: var(--font-heading); font-size: 16px; font-weight: 700; color: var(--white); margin-bottom: 8px; }
.value-desc { font-size: 14px; color: var(--muted); }
.cta-band { background: linear-gradient(135deg, #0f1220, #13161F); border-top: 1px solid var(--border); padding: 56px 0; }
.cta-band-inner { display: flex; justify-content: space-between; align-items: center; gap: 32px; flex-wrap: wrap; }
.cta-title { font-family: var(--font-heading); font-size: 28px; font-weight: 900; color: var(--white); margin-bottom: 8px; }
.cta-sub { font-size: 16px; color: var(--muted); }
.cta-actions { display: flex; gap: 16px; flex-wrap: wrap; }
.btn-outline-sm { display: inline-block; padding: 14px 28px; border: 2px solid var(--gold); color: var(--gold); border-radius: 8px; font-weight: 700; font-size: 15px; text-decoration: none; }
.btn-outline-sm:hover { background: rgba(245,200,66,0.1); }
@media (max-width: 900px) { .story-grid { grid-template-columns: 1fr; } }
@media (max-width: 768px) { .cta-band-inner { flex-direction: column; } }
</style>
