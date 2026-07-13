/**
 * gtm.client.ts — Deferred Google Tag Manager loader
 *
 * Loads GTM after the page is fully interactive instead of blocking the
 * initial render. Keeps 87.8 KiB off the LCP/FCP critical path.
 *
 * Strategy: load on first user interaction (click/scroll/touch) OR after
 * 3 seconds — whichever comes first. This captures virtually all real user
 * sessions while removing GTM from the initial page load entirely.
 */
// TEMP DISABLED — testing PageSpeed without GTM
export default defineNuxtPlugin(() => { return
// eslint-disable-next-line no-unreachable
if (false) {
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

    // Clean up listeners
    events.forEach(e => document.removeEventListener(e, loadGTM))
    clearTimeout(fallbackTimer)
  }

  // Trigger on first user interaction
  const events = ['click', 'scroll', 'touchstart', 'keydown', 'mousemove']
  events.forEach(e => document.addEventListener(e, loadGTM, { once: true, passive: true }))

  // Fallback: load after 3s even if no interaction (catches bots, fast users)
  const fallbackTimer = setTimeout(loadGTM, 3000)
})
