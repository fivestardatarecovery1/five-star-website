<script setup lang="ts">
useSeoMeta({
  title: 'Reviews — Five Star Data Recovery | Glendale, CA',
  description: 'Read verified client reviews for Five Star Data Recovery. 500+ five-star reviews from customers who got their data back. Serving Glendale, Los Angeles, and nationwide.'
})

const reviews = []
</script>

<template>
  <div class="page-content">
    <NavBar />
    <HeroSection
      title="Customer Reviews"
      subtitle="Hear What Our Customers Are Saying."
      description="At Five Star Data Recovery, we take pride in delivering professional, reliable, and compassionate data recovery services. But don't just take our word for it — hear directly from the clients we've helped get their data back."
      bgImage="/five-star-data-recovery-lab-technician-glendale-ca.png"
    />
    <StatsBar />

    <!-- STATS ROW -->
    <section style="background:#0d111f;padding:56px 0;">
      <div class="container" style="display:grid;grid-template-columns:repeat(3,1fr);gap:32px;text-align:center;">
        <div>
          <span style="display:block;font-size:2.8rem;font-weight:900;color:#C9A84C;line-height:1;">500+</span>
          <span style="font-size:0.85rem;color:rgba(255,255,255,0.6);display:block;margin-top:6px;">Total Reviews</span>
        </div>
        <div>
          <span style="display:block;font-size:2.8rem;font-weight:900;color:#C9A84C;line-height:1;">4.9★</span>
          <span style="font-size:0.85rem;color:rgba(255,255,255,0.6);display:block;margin-top:6px;">Average Rating</span>
        </div>
        <div>
          <span style="display:block;font-size:2.8rem;font-weight:900;color:#C9A84C;line-height:1;">21,000+</span>
          <span style="font-size:0.85rem;color:rgba(255,255,255,0.6);display:block;margin-top:6px;">Drives Recovered</span>
        </div>
      </div>
    </section>

    <!-- REVIEWS GRID -->
    <section class="s-white">
      <div class="container">
        <div class="section-label center">Client Stories</div>
        <h2 class="s-heading center">Testimonials from Satisfied Clients</h2>
        <div class="reviews-grid-large">
          <div v-for="r in reviews" :key="r.name" class="review-card">
            <div class="review-quote">"</div>
            <p class="review-body">{{ r.text }}</p>
            <div class="review-footer">
              <div class="review-stars">★★★★★</div>
              <div class="review-meta">
                <strong class="review-name">{{ r.name }}</strong>
                <span class="review-loc">{{ r.location }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- VIDEO -->
    <section class="page-video-section">
      <div class="container page-video-inner">
        <div>
          <h2 class="page-video-heading">See Why Thousands Trust Us With Their Important Data</h2>
          <p class="page-video-desc" style="margin-top:16px;">Data loss is stressful — but working with us doesn't have to be. Watch how our team handles each recovery with care, professionalism, and precision.</p>
        </div>
        <div class="page-video-embed">
          <iframe src="https://www.youtube.com/embed/14ACFHJ24hg?start=60" title="Five Star Data Recovery" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="s-white" style="text-align:center;">
      <div class="container" style="max-width:640px;margin:0 auto;">
        <h2 class="s-heading center">Ready to Become Our Next Success Story?</h2>
        <p class="s-intro center">Join thousands of satisfied clients who trusted Five Star Data Recovery with their most important data.</p>
        <NuxtLink to="/start-recovery" class="btn-gold-full">Start Your Recovery Today</NuxtLink>
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
.section-label { font-size: 0.72rem; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; color: #C9A84C; margin-bottom: 10px; }
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
.reviews-grid-large { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 44px; }
@media (max-width: 768px) {
  .reviews-grid-large, .page-video-inner { grid-template-columns: 1fr; }
}
</style>
