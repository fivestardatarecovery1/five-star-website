/**
 * statcounter.client.ts — StatCounter analytics loader
 *
 * Loads StatCounter after first user interaction or 3s fallback.
 * Avoids document.write() which is incompatible with Nuxt SSR/CSR.
 *
 * Project: 10032646 (Five Star Data Recovery)
 */
export default defineNuxtPlugin(() => {
  if (typeof window === 'undefined') return

  let loaded = false

  function loadStatCounter() {
    if (loaded) return
    loaded = true

    // Set StatCounter config vars before loading the script
    ;(window as any).sc_project = 10032646
    ;(window as any).sc_invisible = 0
    ;(window as any).sc_security = 'e7ed9c62'

    const script = document.createElement('script')
    script.src = 'https://statcounter.com/counter/counter.js'
    script.async = true
    document.head.appendChild(script)

    // Clean up listeners
    events.forEach(e => document.removeEventListener(e, loadStatCounter))
    clearTimeout(fallbackTimer)
  }

  const events = ['click', 'scroll', 'touchstart', 'keydown', 'mousemove']
  events.forEach(e => document.addEventListener(e, loadStatCounter, { once: true, passive: true }))

  const fallbackTimer = setTimeout(loadStatCounter, 3000)
})
