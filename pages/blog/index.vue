<script setup lang="ts">
useSeoMeta({
  title: 'Blog — Data Recovery Tips & Guides',
  description: 'Expert data recovery tips, guides, and industry news from Five Star Data Recovery. Learn how to protect and recover your data.'
})

const posts = [
  {
    title: 'How to Repair External Hard Drive after it was Dropped',
    date: 'June 19, 2025',
    desc: 'Before getting more in depth about how to fix an external hard drive after it was dropped, the first thing to do is STOP trying to power on the drive as this will only cause more damage.',
    href: '/blog/how-to-repair-external-hard-drive-after-it-was-dropped'
  },
  {
    title: 'USB Data Recovery (Chip Off)',
    date: 'June 19, 2025',
    desc: 'USB chip-off data recovery is a process of removing the memory chip from the USB drive and reading it directly. Learn how we recovered data from a 64GB USB thumb drive that was not detected.',
    href: '/blog/usb-data-recovery-chip-off'
  },
]
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="Data Recovery Blog"
      subtitle="Expert Tips & Guides."
      description="Stay informed with the latest data recovery advice, hardware guides, and industry insights from our team of certified engineers."
    />
    <section class="section-pad section-bg-1">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Latest Articles</h2>
        </div>
        <div class="grid-3">
          <div v-for="post in posts" :key="post.title" class="card blog-card">
            <div class="blog-date">{{ post.date }}</div>
            <h3 class="blog-title">{{ post.title }}</h3>
            <p class="blog-excerpt">{{ post.desc }}</p>
            <NuxtLink :to="post.href" class="blog-link">Read More →</NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <FooterBar />
  </div>
</template>

<style scoped>
.blog-date { font-size: 12px; color: var(--gold); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 10px; font-weight: 600; }
.blog-title { font-family: var(--font-heading); font-size: 18px; font-weight: 700; margin-bottom: 10px; line-height: 1.4; }
.blog-excerpt { font-size: 14px; color: var(--muted); line-height: 1.6; margin-bottom: 16px; }
.blog-link { color: var(--gold); font-size: 14px; font-weight: 600; }
.blog-link:hover { opacity: 0.8; }
</style>
