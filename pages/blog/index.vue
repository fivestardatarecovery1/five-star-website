<script setup lang="ts">
useSeoMeta({
  title: 'Blog — Data Recovery Tips & Guides',
  description: 'Expert data recovery tips, guides, and industry news from Five Star Data Recovery. Learn how to protect and recover your data.'
})
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="Data Recovery Blog"
      subtitle="Expert Tips & Guides."
      description="Stay informed with the latest data recovery advice, hardware guides, and industry insights from our team of certified engineers."
    />
    <section>
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Latest Articles</h2>
        </div>
        <div class="grid-3">
          <div v-for="post in [
            {title:'What To Do When Your Hard Drive Starts Clicking',date:'May 1, 2025',desc:'A clicking hard drive is a medical emergency for your data. Here\'s exactly what to do — and what NOT to do — in the next 60 minutes.',href:'/blog/clicking-hard-drive'},
            {title:'SSD vs HDD: Which Is Harder to Recover?',date:'April 28, 2025',desc:'SSDs and HDDs fail in very different ways. We break down the recovery complexity and what it means for your chances of getting data back.',href:'/blog/ssd-vs-hdd-recovery'},
            {title:'RAID Recovery: The Complete Business Guide',date:'April 25, 2025',desc:'RAID arrays provide redundancy, but they\'re not immune to catastrophic failure. Here\'s what every IT manager needs to know.',href:'/blog/raid-recovery-guide'},
          ]" :key="post.title" class="card blog-card">
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
