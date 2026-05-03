<template>
  <div class="app-root">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
/* Locks horizontal scroll on ALL browsers including iOS Safari.
   overflow-x:hidden on html/body alone doesn't work on iOS. */
.app-root {
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  position: relative;
}
</style>
