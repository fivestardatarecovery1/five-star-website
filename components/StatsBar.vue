<script setup lang="ts">
interface Stat {
  num: string
  label: string
  icon: string
}
interface Props {
  stats?: Stat[]
}
const props = withDefaults(defineProps<Props>(), {
  stats: () => [
    { num: '21,000+', label: 'Drives Recovered',      icon: '💾' },
    { num: '99%',     label: 'Recovery Success Rate',  icon: '✅' },
    { num: '10+',     label: 'Years in Business',      icon: '🏆' },
    { num: '4.9★',   label: 'Average Rating',          icon: '⭐' },
  ]
})
</script>

<template>
  <section class="stats-bar">
    <div class="container stats-inner">
      <div v-for="stat in stats" :key="stat.label" class="stat-card">
        <div class="stat-accent" />
        <div class="stat-icon">{{ stat.icon }}</div>
        <span class="stat-num">{{ stat.num }}</span>
        <span class="stat-label">{{ stat.label }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats-bar {
  background: linear-gradient(180deg, #0d111f 0%, #111827 100%);
  border-top: 1px solid rgba(245, 200, 66, 0.25);
  border-bottom: 1px solid rgba(245, 200, 66, 0.25);
  padding: 48px 0;
}

.stats-inner {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.stat-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(245, 200, 66, 0.12);
  border-radius: 12px;
  padding: 32px 20px 28px;
  transition: background 0.2s, border-color 0.2s;
  overflow: hidden;
}
.stat-card:hover {
  background: rgba(245, 200, 66, 0.05);
  border-color: rgba(245, 200, 66, 0.3);
}

/* Gold top accent bar */
.stat-accent {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 48px;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
  border-radius: 0 0 4px 4px;
}

.stat-icon {
  font-size: 22px;
  line-height: 1;
  opacity: 0.85;
}

.stat-num {
  font-family: var(--font-heading);
  font-size: clamp(32px, 3.5vw, 48px);
  font-weight: 900;
  color: var(--gold);
  line-height: 1;
  letter-spacing: -0.02em;
}

.stat-label {
  font-size: 12px;
  font-weight: 700;
  color: #8892a4;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  text-align: center;
}

@media (max-width: 768px) {
  .stats-inner {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  .stat-card { padding: 24px 16px 20px; }
}

@media (max-width: 420px) {
  .stats-inner { grid-template-columns: repeat(2, 1fr); }
  .stat-num { font-size: 28px; }
}
</style>
