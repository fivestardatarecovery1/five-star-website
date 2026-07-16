<template>
  <div class="app-root">
    <!-- GTM noscript fallback -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P5MDDD7V" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <!-- Chat: show a lightweight stub bubble until user interacts or 5s passes -->
    <!-- Once chatReady, mount the real ChatWidget (auto-opens if user clicked stub) -->
    <ClientOnly>
      <LazyChatWidget v-if="chatReady" :auto-open="chatClickedBeforeReady" />
      <button
        v-else
        class="chat-bubble-stub"
        aria-label="Chat with us"
        @click="activateChat(true)"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </button>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const chatReady = ref(false)
const chatClickedBeforeReady = ref(false)

function activateChat(fromClick = false) {
  if (chatReady.value) return
  if (fromClick) chatClickedBeforeReady.value = true
  chatReady.value = true
}

onMounted(() => {
  // Load on first genuine interaction (click/touch/keydown)
  const triggers = ['click', 'touchstart', 'keydown', 'pointerdown']
  const onInteract = () => {
    activateChat()
    triggers.forEach(e => document.removeEventListener(e, onInteract))
    clearTimeout(fallback)
  }
  triggers.forEach(e => document.addEventListener(e, onInteract, { once: true, passive: true }))

  // Fallback: load after 5s even with no interaction
  const fallback = setTimeout(() => {
    activateChat()
    triggers.forEach(e => document.removeEventListener(e, onInteract))
  }, 5000)
})
</script>

<style>
/* No overflow on app-root — overflow:clip/hidden breaks position:sticky on the navbar.
   Horizontal scroll is prevented by touch-action:pan-y on body + fixing overflow sources. */
.app-root {
  width: 100%;
}

/* Lightweight chat stub bubble — identical look to ChatWidget bubble, zero JS weight */
.chat-bubble-stub {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9999;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: #c62828;
  color: #fff;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(198,40,40,0.45);
  transition: transform 0.2s, box-shadow 0.2s;
}
.chat-bubble-stub:hover {
  transform: scale(1.07);
  box-shadow: 0 6px 24px rgba(198,40,40,0.55);
}
@media (max-width: 600px) {
  .chat-bubble-stub { bottom: 16px; right: 16px; width: 52px; height: 52px; }
}
</style>
