<template>
  <div class="app-root">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
/* No overflow on app-root — overflow:clip/hidden breaks position:sticky on the navbar.
   Horizontal scroll is prevented by touch-action:pan-y on body + fixing overflow sources. */
.app-root {
  width: 100%;
}
</style>
