<template>
  <div class="app-root">
    <!-- GTM noscript fallback -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P5MDDD7V" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <!-- Lazy: defer ChatWidget JS until after page hydration — not needed for LCP -->
    <LazyChatWidget />
  </div>
</template>

<style>
/* No overflow on app-root — overflow:clip/hidden breaks position:sticky on the navbar.
   Horizontal scroll is prevented by touch-action:pan-y on body + fixing overflow sources. */
.app-root {
  width: 100%;
}
</style>
