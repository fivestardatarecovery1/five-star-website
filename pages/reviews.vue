<script setup lang="ts">
useSeoMeta({
  title: 'Reviews - Five Star Data Recovery',
  description: 'Don\'t take our word for it - read the Five Star Data Recovery reviews from our happy customers! Our team takes pride with every customers.',
  ogTitle: 'Reviews',
  ogDescription: 'Don\'t take our word for it - read the Five Star Data Recovery reviews from our happy customers! Our team takes pride with every customers.',
  ogImage: 'https://www.fivestardatarecovery.com/wp-content/uploads/2025/06/pl-01-150x150.png',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
})

const reviews = [
  {
    name: 'Mikey W.',
    location: 'Los Angeles, CA',
    title: 'Awesome Work!',
    text: 'When we dropped our photo hard drive and it started making clicking sounds, we thought we had lost everything. All our memories gone in an instant. This place not only recovered all our files, they were completely upfront and honest about the process and explained why certain kinds of damage cost more than others. They were able to get us our precious memories back and for less than the higher end of what they said it could cost. Highly recommended!'
  },
  {
    name: 'Arin K.',
    location: 'Glendale, CA',
    title: 'Truely 5 Stars',
    text: "Don't trust your important data anywhere else. These guys are the best. It's all in the name: 5 star performance and service all the way. You'll know from your first call. They came in on a Sunday especially for me specifically to ensure a greater chance of recovery of my data and, sure enough, their tenacity paid off. 100% real review. This place is where it's at. Honestly: don't go anywhere else. Don't even think about it. Thank you guys!"
  },
  {
    name: 'Vance K.',
    location: 'Pasadena, CA',
    title: 'Thank You!',
    text: "My son's laptop hard drive failed, and I knew how much all the data on there meant to him. So I was over the moon when Five Star was able to get the data back. There were a number of issues with the drive, and I felt like they went over and above to try additional steps when they found each new issue, until the data was recovered. Their communication was thorough and timely, and they explained everything they were doing very thoroughly."
  }
]

const socialPosts = [
  { handle: 'tristapisani', img: '/review-social-tristapisani-1.jpg' },
  { handle: 'tristapisani', img: '/review-social-tristapisani-2.jpg' },
  { handle: 'josephdegbadjo', img: '/review-social-josephdegbadjo.jpg' },
  { handle: 'thejamiekennedy', img: '/review-social-thejamiekennedy.jpg' },
  { handle: 'shanemosley', img: '/review-social-shanemosley.jpg' },
]

const spIndex = ref(0)
const spVisible = 3
const spCardWidth = 340

function spPrev() { if (spIndex.value > 0) spIndex.value-- }
function spNext() { if (spIndex.value < socialPosts.length - spVisible) spIndex.value++ }
</script>

<template>
  <div class="page-content">
    <NavBar />
    <HeroSection
      title="Reviews"
      subtitle="Hear What Our Customers Are Saying"
      description="At Five Star Data Recovery, we take pride in delivering professional, fast, and affordable data recovery services with outstanding results. From external hard drives to complex RAID arrays, our clients nationwide trust us to recover their valuable data. Don&rsquo;t just take our word for it&mdash;read real reviews from satisfied customers who got their data back safely and securely."
      bgImage="/reviews-hero-bg.jpg"
      :showForm="false"
    />
    <StatsBar />

    <!-- REVIEWS -->
    <ReviewsSection :reviews="reviews" bg-class="section-bg-1" />

    <!-- SOCIAL PROOF CAROUSEL -->
    <section class="social-proof-section">
      <div class="container">
        <div class="sp-header">
          <p class="sp-label">As Seen On Social Media</p>
          <h2 class="sp-title">Real Clients. Real Stories. Real Results.</h2>
          <p class="sp-sub">Don&rsquo;t just take our word for it &mdash; see what our clients are posting about their experience with Five Star Data Recovery.</p>
        </div>
        <div class="sp-carousel">
          <button class="sp-btn sp-prev" @click="spPrev" :disabled="spIndex === 0" aria-label="Previous">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <div class="sp-window">
            <div class="sp-track" :style="{ transform: `translateX(-${spIndex * (spCardWidth + 24)}px)` }">
              <div v-for="post in socialPosts" :key="post.handle" class="sp-card">
                <img :src="post.img" :alt="post.handle + ' review of Five Star Data Recovery'" class="sp-img" loading="lazy" />
                <div class="sp-card-footer">
                  <span class="sp-handle">@{{ post.handle }}</span>
                </div>
              </div>
            </div>
          </div>
          <button class="sp-btn sp-next" @click="spNext" :disabled="spIndex >= socialPosts.length - spVisible" aria-label="Next">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
        <div class="sp-dots">
          <button
            v-for="i in Math.ceil(socialPosts.length / spVisible)" :key="i"
            :class="['sp-dot', { active: spIndex === (i-1) * spVisible }]"
            @click="spIndex = (i-1) * spVisible"
          />
        </div>
      </div>
    </section>

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

/* Social proof carousel */
.social-proof-section {
  background: #0d111f;
  padding: 80px 0;
}
.sp-header {
  text-align: center;
  margin-bottom: 48px;
}
.sp-label {
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #F5C842;
  margin-bottom: 12px;
}
.sp-title {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 900;
  color: #fff;
  margin-bottom: 14px;
  line-height: 1.2;
}
.sp-sub {
  font-size: 0.95rem;
  color: rgba(255,255,255,0.55);
  max-width: 560px;
  margin: 0 auto;
  line-height: 1.7;
}
.sp-carousel {
  display: flex;
  align-items: center;
  gap: 16px;
}
.sp-window {
  flex: 1;
  overflow: hidden;
  min-width: 0;
}
.sp-track {
  display: flex;
  gap: 24px;
  transition: transform 0.4s ease;
}
.sp-card {
  flex: 0 0 340px;
  background: #13161f;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.2s, border-color 0.2s;
}
.sp-card:hover {
  transform: translateY(-4px);
  border-color: rgba(245,200,66,0.3);
}
.sp-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}
.sp-card-footer {
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-top: 1px solid rgba(255,255,255,0.06);
}
.sp-handle {
  font-size: 0.85rem;
  font-weight: 700;
  color: #F5C842;
}
.sp-btn {
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 2px solid rgba(255,255,255,0.15);
  background: rgba(255,255,255,0.05);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
}
.sp-btn:hover:not(:disabled) { border-color: #F5C842; color: #F5C842; }
.sp-btn:disabled { opacity: 0.25; cursor: not-allowed; }
.sp-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 28px;
}
.sp-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,0.2);
  border: none;
  cursor: pointer;
  transition: background 0.2s, width 0.2s;
}
.sp-dot.active {
  background: #F5C842;
  width: 24px;
  border-radius: 4px;
}
@media (max-width: 900px) {
  .sp-card { flex: 0 0 280px; }
}
@media (max-width: 640px) {
  .sp-btn { display: none; }
  .sp-window { overflow-x: auto; scroll-snap-type: x mandatory; }
  .sp-track { transform: none !important; }
  .sp-card { flex: 0 0 80vw; scroll-snap-align: start; }
}
</style>
