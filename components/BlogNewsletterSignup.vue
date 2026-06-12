<script setup lang="ts">
const email = ref('')
const state = ref<'idle' | 'loading' | 'success' | 'error'>('idle')
const errorMsg = ref('')

async function subscribe() {
  if (!email.value || state.value === 'loading') return
  state.value = 'loading'
  errorMsg.value = ''
  try {
    await $fetch('/api/newsletter-subscribe', {
      method: 'POST',
      body: { email: email.value },
    })
    state.value = 'success'
  } catch (e: any) {
    state.value = 'error'
    errorMsg.value = e?.data?.statusMessage || 'Something went wrong. Please try again.'
  }
}
</script>

<template>
  <div class="blog-newsletter">
    <div class="newsletter-label">Subscribe</div>
    <div class="newsletter-icon">✉️</div>
    <h3 class="newsletter-heading">Get New Articles</h3>
    <p class="newsletter-desc">Case studies and data recovery guides — direct to your inbox. No spam, ever.</p>

    <div v-if="state === 'success'" class="newsletter-success">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22C55E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      You're subscribed! We'll notify you when new articles are published.
    </div>

    <form v-else @submit.prevent="subscribe" class="newsletter-form">
      <input
        v-model="email"
        type="email"
        placeholder="your@email.com"
        class="newsletter-input"
        required
        :disabled="state === 'loading'"
      />
      <button type="submit" class="newsletter-btn" :disabled="state === 'loading'">
        <span v-if="state === 'loading'">
          <svg class="spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10" stroke-opacity="0.3"/><path d="M12 2a10 10 0 0 1 10 10"/></svg>
        </span>
        <span v-else>Notify Me</span>
      </button>
      <p v-if="state === 'error'" class="newsletter-error">{{ errorMsg }}</p>
    </form>
  </div>
</template>

<style scoped>
.blog-newsletter {
  width: 100%;
}
.newsletter-icon {
  font-size: 1.5rem;
  margin-bottom: 8px;
}
.newsletter-heading {
  font-size: 1rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 6px;
}
.newsletter-desc {
  font-size: 0.85rem;
  color: #4B5563;
  line-height: 1.6;
  margin: 0 0 16px;
}
.newsletter-label {
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #6B7280;
  margin-bottom: 10px;
  padding-bottom: 8px;
  border-bottom: 2px solid #F5C842;
  display: inline-block;
}
.newsletter-success {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  background: #f0fdf4;
  border: 1px solid #86efac;
  color: #166534;
  padding: 12px 14px;
  border-radius: 8px;
  font-size: 0.85rem;
  line-height: 1.5;
}
.newsletter-form {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.newsletter-input {
  background: #fff;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  color: #1a1a2e;
  font-size: 0.9rem;
  padding: 10px 14px;
  outline: none;
  transition: border-color 0.2s;
  width: 100%;
  font-family: inherit;
}
.newsletter-input::placeholder { color: #a0aec0; }
.newsletter-input:focus { border-color: #c9a84c; }
.newsletter-input:disabled { opacity: 0.5; cursor: not-allowed; background: #f8f9fc; }
.newsletter-btn {
  background: #F5C842;
  color: #0A0C14;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: opacity 0.15s, transform 0.15s;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
}
.newsletter-btn:hover:not(:disabled) { opacity: 0.9; transform: translateY(-1px); }
.newsletter-btn:disabled { opacity: 0.6; cursor: not-allowed; }
.newsletter-error {
  font-size: 0.8rem;
  color: #F87171;
  margin: 0;
}
.spin {
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
</style>
