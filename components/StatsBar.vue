<script setup lang="ts">
interface Stat {
  num: string
  label: string
}
interface Props {
  stats?: Stat[]
}
const props = withDefaults(defineProps<Props>(), {
  stats: () => [
    { num: '14+', label: 'Years in Business' },
    { num: '4.9 ⭐', label: 'Average Rating' },
    { num: '26,000+', label: 'Drives Recovered' },
    { num: '100%', label: 'Confidential' },
  ]
})
</script>

<template>
  <section class="stats-bar">
    <div class="container stats-inner">
      <template v-for="(stat, i) in stats" :key="stat.label">
        <div class="stat">
          <span class="stat-num">{{ stat.num }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
        <div v-if="i < stats.length - 1" class="stat-divider" />
      </template>
    </div>
  </section>
</template>

<style scoped>
.stats-bar {
  background: #111111;
  background-image: radial-gradient(circle, rgba(245,200,66,0.07) 1px, transparent 1px);
  background-size: 28px 28px;
  border-top: 3px solid var(--gold);
  border-bottom: 3px solid var(--gold);
  padding: 44px 0;
}
.stats-inner {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 16px;
  flex-wrap: wrap;
}
.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.stat-num {
  font-family: var(--font-heading);
  font-size: 48px;
  font-weight: 900;
  color: var(--gold);
  line-height: 1;
}
.stat-label {
  font-size: 15px;
  font-weight: 600;
  color: #aab0be;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
.stat-divider {
  width: 1px;
  height: 60px;
  background: rgba(255,255,255,0.12);
}
</style>
