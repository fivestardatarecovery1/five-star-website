/**
 * Canonical tag plugin — runs on SSR + client
 * Automatically injects <link rel="canonical" href="https://www.fivestardatarecovery.com{path}">
 * on every page. Eliminates "Duplicate without user-selected canonical" in GSC.
 * Path is the normalized route path (no trailing slash except root "/").
 */
export default defineNuxtPlugin(() => {
  const route = useRoute()
  const BASE = 'https://www.fivestardatarecovery.com'

  useHead(() => {
    // Normalize: strip trailing slash unless it's the root
    const rawPath = route.path
    const path = rawPath !== '/' && rawPath.endsWith('/') ? rawPath.slice(0, -1) : rawPath
    return {
      link: [{ rel: 'canonical', href: `${BASE}${path}` }]
    }
  })
})
