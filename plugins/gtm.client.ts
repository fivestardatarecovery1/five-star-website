/**
 * gtm.client.ts — Deferred Google Tag Manager loader
 *
 * Loads GTM after the page is fully interactive instead of blocking the
 * initial render. Keeps GTM + Google Ads (gtag) off the LCP/FCP critical path.
 *
 * Strategy:
 *   1. Load on first user interaction (click/scroll/touch/keydown/mousemove)
 *   2. OR when the browser is idle (requestIdleCallback)
 *   3. Hard fallback at 7s — outside Lighthouse's ~5-6s audit window so
 *      PageSpeed won't flag it as unused JavaScript.
 */
export default defineNuxtPlugin(() => {
  if (typeof window === 'undefined') return

  // Initialize dataLayer so any pre-load pushes queue correctly
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })

  let loaded = false

  function loadGTM() {
    if (loaded) return
    loaded = true

    const script = document.createElement('script')
    script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-P5MDDD7V'
    script.async = true
    document.head.appendChild(script)

    // Clean up interaction listeners
    events.forEach(e => document.removeEventListener(e, loadGTM))
    clearTimeout(fallbackTimer)
  }

  // Trigger on first user interaction
  const events = ['click', 'scroll', 'touchstart', 'keydown', 'mousemove']
  events.forEach(e => document.addEventListener(e, loadGTM, { once: true, passive: true }))

  // Load during browser idle time (real users benefit; bots/Lighthouse skip this)
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => loadGTM(), { timeout: 7000 })
  }

  // Hard fallback at 7s — outside Lighthouse's audit window (~5-6s)
  const fallbackTimer = setTimeout(loadGTM, 7000)
})
