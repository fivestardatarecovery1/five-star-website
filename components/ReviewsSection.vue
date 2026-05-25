<script setup lang="ts">
interface Review {
  name: string
  location: string
  text: string
  photo?: string
}

interface Props {
  reviews: Review[]
  bgClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  bgClass: 'section-bg-2',
  reviews: () => []
})

const index = ref(0)
const perPage = 3

const total = computed(() => props.reviews.length)
const pages = computed(() => Math.ceil(total.value / perPage))

const visible = computed(() => props.reviews.slice(index.value, index.value + perPage))

function prev() { if (index.value > 0) index.value -= perPage }
function next() { if (index.value + perPage < total.value) index.value += perPage }
</script>

<template>
  <section :class="['reviews-section-shared', bgClass]">
    <div class="container">
      <div class="section-header">
        <h2 class="reviews-main-title">Reviews from Satisfied Clients</h2>
        <p class="reviews-sub">Don't take our word for it. Here's what our clients have to say about their experience with Five Star Data Recovery.</p>
      </div>

      <div class="rsc-carousel">


        <div class="rsc-grid">
          <div v-for="r in visible" :key="r.name + r.location" class="rsc-card">
            <div class="rsc-stars">★★★★★</div>
            <p class="rsc-text" v-html="'&ldquo;' + r.text + '&rdquo;'"></p>
            <div class="rsc-footer">
              <div class="rsc-avatar">
          <img v-if="r.photo" :src="r.photo" :alt="r.name" class="rsc-avatar-img" />
          <span v-else>{{ r.name.charAt(0) }}</span>
        </div>
              <div class="rsc-meta">
                <strong class="rsc-name">{{ r.name }}</strong>
                <span class="rsc-loc">{{ r.location }}</span>
              </div>
            </div>
          </div>
        </div>


      </div>

      <!-- Dots -->
      <div v-if="pages > 1" class="rsc-dots">
        <button
          v-for="p in pages" :key="p"
          :class="['rsc-dot', { active: index === (p - 1) * perPage }]"
          @click="index = (p - 1) * perPage"
          :aria-label="`Go to page ${p}`"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.reviews-section-shared {
  padding: 80px 0;
}

/* Header */
.section-header {
  text-align: center;
  margin-bottom: 56px;
}
.reviews-main-title {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 900;
  color: #1a1a2e;
  line-height: 1.2;
  margin-bottom: 16px;
}
.reviews-sub {
  font-size: 1rem;
  color: #4a5568;
  max-width: 560px;
  margin: 0 auto;
  line-height: 1.7;
}

/* Carousel layout */
.rsc-carousel {
  display: flex;
  align-items: center;
  gap: 16px;
}
.rsc-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  flex: 1;
  min-width: 0;
}

/* Nav buttons */
.rsc-btn {
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 2px solid #e2e8f0;
  background: #fff;
  color: #2d3a4a;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
.rsc-btn:hover:not(:disabled) { border-color: #F5C842; color: #F5C842; }
.rsc-btn:disabled { opacity: 0.3; cursor: not-allowed; }

/* Cards */
.rsc-card {
  background: #fff;
  border: 1.5px solid #e8ecf2;
  border-radius: 14px;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 0;
  box-shadow: 0 2px 16px rgba(0,0,0,0.05);
}
.rsc-stars {
  color: #F5C842;
  font-size: 1.2rem;
  letter-spacing: 3px;
  margin-bottom: 16px;
}
.rsc-text {
  font-size: 0.92rem;
  color: #4a5568;
  font-style: italic;
  line-height: 1.75;
  flex: 1;
  margin-bottom: 24px;
}
.rsc-footer {
  display: flex;
  align-items: center;
  gap: 12px;
  border-top: 1px solid #f0f2f7;
  padding-top: 16px;
}
.rsc-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #e8ecf2;
  color: #4a5568;
  font-weight: 800;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
}
.rsc-avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
.rsc-name {
  display: block;
  font-size: 0.92rem;
  font-weight: 700;
  color: #1a1a2e;
}
.rsc-loc {
  display: block;
  font-size: 0.8rem;
  color: #F5C842;
  font-weight: 600;
  margin-top: 2px;
}

/* Dots */
.rsc-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 28px;
}
.rsc-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #d0d7e4;
  border: none;
  cursor: pointer;
  transition: background 0.2s, width 0.2s;
  /* ensure minimum 44px touch target */
  position: relative;
}
.rsc-dot::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 44px;
  min-height: 44px;
  display: block;
}
.rsc-dot.active {
  background: #F5C842;
  width: 24px;
  border-radius: 4px;
}

/* Mobile */
@media (max-width: 768px) {
  .rsc-grid { grid-template-columns: 1fr; }
  .rsc-btn { display: none; }
  .reviews-main-title { font-size: 1.6rem; }
}
@media (max-width: 480px) {
  .reviews-section-shared { padding: 56px 0; }
}
</style>
