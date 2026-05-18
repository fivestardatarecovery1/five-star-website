<script setup lang="ts">
useSeoMeta({
  title: 'Data Recovery Blog — Tips, Guides & Industry News | Five Star Data Recovery',
  description: 'Expert data recovery tips, guides, and industry news from Five Star Data Recovery certified engineers. Learn how to protect and recover your data.'
})

const categories = [
  'All',
  'Data Recovery Tips & Advice',
  'Data Recovery Guides',
  'Data Loss Causes & Scenarios',
  'Success Stories & Case Studies',
  'Prevent Data Loss Tips',
  'Industry News & Updates',
]

const activeCategory = ref('All')

const posts = [
  {
    title: 'How to Repair External Hard Drive after it was Dropped',
    date: 'June 19, 2025',
    category: 'Data Loss Causes & Scenarios',
    readTime: '8 min read',
    desc: 'Before getting more in depth about how to fix an external hard drive after it was dropped, the first thing to do is STOP trying to power on the drive — this will only cause more damage to the platters.',
    href: '/blog/how-to-repair-external-hard-drive-after-it-was-dropped',
    icon: '💾'
  },
  {
    title: 'USB Data Recovery (Chip Off)',
    date: 'June 19, 2025',
    category: 'Data Loss Causes & Scenarios',
    readTime: '6 min read',
    desc: 'USB chip-off data recovery is a process of removing the memory chip from the USB drive and reading it directly. Learn how we recovered data from a 64GB USB thumb drive that was not detected.',
    href: '/blog/usb-data-recovery-chip-off',
    icon: '🔌'
  },
]

const filteredPosts = computed(() =>
  activeCategory.value === 'All'
    ? posts
    : posts.filter(p => p.category === activeCategory.value)
)
</script>

<template>
  <div class="blog-page">
    <NavBar />

    <!-- HERO -->
    <section class="blog-hero">
      <div class="container">
        <div class="hero-label">Our Blog</div>
        <h1 class="hero-title">Data Recovery<br><em>Insights & Guides</em></h1>
        <p class="hero-sub">Expert advice, real case studies, and technical guides from our certified engineers — written to help you protect and recover what matters most.</p>
      </div>
    </section>

    <!-- POSTS GRID -->
    <section class="posts-section">
      <div class="container">

        <!-- CATEGORY FILTER -->
        <div class="filter-wrap">
          <button
            v-for="cat in categories"
            :key="cat"
            class="filter-btn"
            :class="{ active: activeCategory === cat }"
            @click="activeCategory = cat"
          >
            {{ cat }}
          </button>
        </div>

        <div class="posts-grid">
          <NuxtLink v-for="post in filteredPosts" :key="post.title" :to="post.href" class="post-card">
            <div class="post-icon">{{ post.icon }}</div>
            <div class="post-meta">
              <span class="post-cat">{{ post.category }}</span>
              <span class="post-dot">·</span>
              <span class="post-read">{{ post.readTime }}</span>
            </div>
            <h2 class="post-title">{{ post.title }}</h2>
            <p class="post-excerpt">{{ post.desc }}</p>
            <div class="post-footer">
              <span class="post-date">{{ post.date }}</span>
              <span class="post-cta">Read Article <span class="arrow">→</span></span>
            </div>
          </NuxtLink>
        </div>

        <!-- No results -->
        <div v-if="filteredPosts.length === 0" class="no-results">
          <div class="mc-icon">🔍</div>
          <p>No articles in this category yet — check back soon!</p>
        </div>

        <!-- More coming -->
        <div v-if="filteredPosts.length > 0" class="more-coming">
          <div class="mc-icon">✍️</div>
          <p>More articles coming soon. Our engineers are always working on new guides.</p>
        </div>

      </div>
    </section>

    <!-- CTA BAND -->
    <section class="blog-cta">
      <div class="container blog-cta-inner">
        <div>
          <h2>Lost Your Data? We Can Help.</h2>
          <p>Free diagnosis. No recovery, no charge. Available 24/7.</p>
        </div>
        <div class="blog-cta-btns">
          <NuxtLink to="/start-recovery" class="btn-red">Start Recovery</NuxtLink>
          <a href="tel:8182728866" class="btn-outline-gold">📞 818-272-8866</a>
        </div>
      </div>
    </section>

    <FooterBar />
  </div>
</template>

<style scoped>
.blog-page { background: #f4f7fc; }

/* ── Hero ── */
.blog-hero {
  background: linear-gradient(to right, rgba(13,17,31,0.97) 0%, rgba(13,17,31,0.88) 45%, rgba(13,17,31,0.55) 100%), url('/blog-hero.jpg') right center / cover no-repeat;
  padding: 90px 0 80px;
  border-bottom: 2px solid rgba(245,200,66,0.15);
}
.hero-label {
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 20px;
}
.hero-title {
  font-family: var(--font-heading);
  font-size: clamp(36px, 5vw, 58px);
  font-weight: 900;
  color: #fff;
  line-height: 1.1;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
}
.hero-title em {
  font-style: normal;
  color: var(--gold);
}
.hero-sub {
  font-size: 17px;
  color: rgba(255,255,255,0.6);
  line-height: 1.7;
  max-width: 580px;
}

/* ── Posts ── */
.posts-section { padding: 72px 0 48px; }

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 28px;
  margin-bottom: 48px;
}

.post-card {
  background: #fff;
  border-radius: 14px;
  padding: 36px 32px;
  border: 1px solid #e2e8f0;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  gap: 0;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}
.post-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 48px rgba(0,0,0,0.1);
  border-color: var(--gold);
}

.post-icon {
  font-size: 36px;
  margin-bottom: 20px;
  line-height: 1;
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 14px;
}
.post-cat {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #c62828;
  background: rgba(198,40,40,0.08);
  padding: 4px 10px;
  border-radius: 20px;
}
.post-dot { color: #cbd5e0; font-size: 12px; }
.post-read { font-size: 12px; color: #718096; font-weight: 500; }

.post-title {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  font-weight: 800;
  color: #1a1a2e;
  line-height: 1.35;
  margin-bottom: 14px;
}

.post-excerpt {
  font-size: 0.9rem;
  color: #4a5568;
  line-height: 1.75;
  flex: 1;
  margin-bottom: 24px;
}

.post-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #f0f4f8;
  padding-top: 16px;
  margin-top: auto;
}
.post-date {
  font-size: 12px;
  color: #a0aec0;
  font-weight: 500;
}
.post-cta {
  font-size: 13px;
  font-weight: 700;
  color: var(--gold);
  display: flex;
  align-items: center;
  gap: 4px;
}
.arrow { transition: transform 0.2s; }
.post-card:hover .arrow { transform: translateX(4px); }

/* ── Filter bar ── */
.filter-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 36px;
}
.filter-btn {
  padding: 8px 18px;
  border-radius: 30px;
  border: 1.5px solid #e2e8f0;
  background: #fff;
  color: #4a5568;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.18s ease;
  font-family: var(--font-body);
  white-space: nowrap;
}
.filter-btn:hover {
  border-color: var(--gold);
  color: #1a1a2e;
}
.filter-btn.active {
  background: var(--gold);
  border-color: var(--gold);
  color: #1a1a2e;
  font-weight: 700;
}

/* ── No results ── */
.no-results {
  text-align: center;
  padding: 60px 24px;
  background: #fff;
  border-radius: 14px;
  border: 1px dashed #cbd5e0;
  margin-bottom: 28px;
}

/* ── More coming ── */
.more-coming {
  text-align: center;
  padding: 40px 24px;
  background: #fff;
  border-radius: 14px;
  border: 1px dashed #cbd5e0;
}
.mc-icon { font-size: 32px; margin-bottom: 12px; }
.more-coming p { font-size: 0.9rem; color: #718096; }

/* ── CTA Band ── */
.blog-cta {
  background: linear-gradient(135deg, #0d111f, #1a2035);
  padding: 60px 0;
  border-top: 2px solid rgba(245,200,66,0.15);
}
.blog-cta-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
}
.blog-cta h2 {
  font-family: var(--font-heading);
  font-size: 1.6rem;
  font-weight: 900;
  color: #fff;
  margin-bottom: 8px;
}
.blog-cta p {
  font-size: 0.94rem;
  color: rgba(255,255,255,0.55);
}
.blog-cta-btns {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}
.btn-red {
  background: #c62828;
  color: #fff;
  font-weight: 800;
  font-size: 15px;
  padding: 14px 28px;
  border-radius: 6px;
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.2s;
}
.btn-red:hover { background: #a01010; }
.btn-outline-gold {
  border: 2px solid var(--gold);
  color: var(--gold);
  font-weight: 700;
  font-size: 15px;
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.2s;
}
.btn-outline-gold:hover { background: var(--gold); color: #1a1a2e; }

/* ── Responsive ── */
@media (max-width: 768px) {
  .blog-hero { padding: 60px 0 52px; }
  .posts-grid { grid-template-columns: 1fr; }
  .blog-cta-inner { flex-direction: column; align-items: flex-start; }
  .post-card { padding: 24px 20px; }
}
</style>
