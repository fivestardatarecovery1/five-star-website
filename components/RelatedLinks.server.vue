<script setup lang="ts">
defineProps<{
  links: { text: string; href: string }[]
  title?: string
}>()
</script>

<template>
  <section class="related-links-section">
    <div class="related-links-container">
      <h3 class="related-links-title">{{ title || 'Related Services' }}</h3>
      <div class="related-links-pills">
        <NuxtLink
          v-for="link in links"
          :key="link.href"
          :to="link.href"
          class="related-link-pill"
        >{{ link.text }}</NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.related-links-section {
  background: #0f1422;
  padding: 36px 0;
  border-top: 2px solid #C9A84C;
}
.related-links-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 28px;
}
.related-links-title {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #C9A84C;
  margin: 0 0 16px;
}
.related-links-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.related-link-pill {
  display: inline-block;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(201, 168, 76, 0.3);
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.82rem;
  font-weight: 500;
  padding: 7px 16px;
  border-radius: 100px;
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s, color 0.2s;
  white-space: nowrap;
}
.related-link-pill:hover {
  background: rgba(201, 168, 76, 0.15);
  border-color: #C9A84C;
  color: #C9A84C;
}
</style>
