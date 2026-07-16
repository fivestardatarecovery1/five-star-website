/**
 * analytics.client.ts — Five Star custom analytics tracker v2
 *
 * Collects: page views, time on page, scroll depth, device/browser/OS,
 * screen resolution, language, timezone, connection type, ISP (server-side),
 * UTM params, referrer, session paths, and conversion events.
 *
 * visitor_id  → localStorage (persists across sessions, identifies returning visitors)
 * session_id  → sessionStorage (one per browser tab/session)
 * sequence    → page number within session (1, 2, 3...)
 */

// Analytics events are routed through our own server-side proxy (/api/track-analytics)
// to avoid CORS issues with direct browser → ngrok calls.
const MC_ENDPOINT = ''

// ─── Helpers ────────────────────────────────────────────────────────────────

function getOrCreate(storage: Storage, key: string, factory: () => string): string {
  let val = storage.getItem(key)
  if (!val) { val = factory(); storage.setItem(key, val) }
  return val
}

function uuid(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
  })
}

function getDeviceType(): string {
  const ua = navigator.userAgent
  if (/iPad/i.test(ua)) return 'tablet'
  if (/Mobi|Android|iPhone|iPod/i.test(ua)) return 'mobile'
  return 'desktop'
}

function getBrowser(): string {
  const ua = navigator.userAgent
  if (/Edg\//i.test(ua)) return 'Edge'
  if (/Chrome\//i.test(ua) && !/Chromium/i.test(ua)) return 'Chrome'
  if (/Firefox\//i.test(ua)) return 'Firefox'
  if (/Safari\//i.test(ua) && !/Chrome/i.test(ua)) return 'Safari'
  return 'Other'
}

function getOS(): string {
  const ua = navigator.userAgent
  if (/Windows/i.test(ua)) return 'Windows'
  if (/iPhone|iPad|iPod/i.test(ua)) return 'iOS'
  if (/Mac OS X/i.test(ua)) return 'macOS'
  if (/Android/i.test(ua)) return 'Android'
  if (/Linux/i.test(ua)) return 'Linux'
  return 'Other'
}

function getConnectionType(): string {
  const conn = (navigator as any).connection
  if (!conn) return ''
  return conn.effectiveType || conn.type || ''
}

function getPageLoadTime(): number {
  try {
    const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    if (nav) return Math.round(nav.loadEventEnd - nav.startTime)
    // Fallback
    const t = performance.timing
    return t.loadEventEnd > 0 ? Math.round(t.loadEventEnd - t.navigationStart) : 0
  } catch { return 0 }
}

function throttle<T extends (...args: any[]) => void>(fn: T, ms: number): T {
  let last = 0
  return ((...args: any[]) => {
    const now = Date.now()
    if (now - last >= ms) { last = now; fn(...args) }
  }) as T
}

async function sendEvent(payload: Record<string, unknown>) {
  try {
    // Route through server-side proxy to avoid CORS — browser never touches ngrok directly
    await fetch('/api/track-analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true,
    })
  } catch { /* never break the site */ }
}

// ─── Plugin ─────────────────────────────────────────────────────────────────

export default defineNuxtPlugin((nuxtApp) => {
  const visitorId = getOrCreate(localStorage, 'fs_vid', uuid)
  const sessionId = getOrCreate(sessionStorage, 'fs_sid', uuid)

  const getNextSeq = (): number => {
    const n = parseInt(sessionStorage.getItem('fs_seq') || '0') + 1
    sessionStorage.setItem('fs_seq', String(n))
    return n
  }

  const getLandingReferrer = (): string => {
    const key = 'fs_ref'
    if (!sessionStorage.getItem(key)) sessionStorage.setItem(key, document.referrer || '')
    return sessionStorage.getItem(key) || ''
  }

  // ── Time on page + scroll depth tracking ──────────────────────────────────
  let pageStartTime = Date.now()
  let currentPage = ''
  let maxScrollDepth = 0

  const updateScrollDepth = throttle(() => {
    const scrolled = window.scrollY + window.innerHeight
    const total = document.documentElement.scrollHeight
    if (total > 0) {
      const depth = Math.min(100, Math.round((scrolled / total) * 100))
      if (depth > maxScrollDepth) maxScrollDepth = depth
    }
  }, 300)

  const sendPageExit = () => {
    if (!currentPage) return
    const timeOnPage = Math.round((Date.now() - pageStartTime) / 1000)
    sendEvent({
      event_type: 'page_exit',
      session_id: sessionId,
      visitor_id: visitorId,
      page: currentPage,
      time_on_page: timeOnPage,
      scroll_depth: maxScrollDepth,
    })
  }

  // ── Page view ──────────────────────────────────────────────────────────────
  const sendPageView = () => {
    const sequence = getNextSeq()
    const params = new URLSearchParams(window.location.search)
    const page = window.location.pathname + window.location.search

    sendEvent({
      event_type: 'pageview',
      visitor_id: visitorId,
      session_id: sessionId,
      page,
      page_title: document.title,
      referrer: getLandingReferrer(),
      sequence,
      device_type: getDeviceType(),
      browser: getBrowser(),
      os: getOS(),
      screen_width: window.screen.width,
      screen_height: window.screen.height,
      viewport_width: window.innerWidth,
      viewport_height: window.innerHeight,
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      connection_type: getConnectionType(),
      page_load_ms: sequence === 1 ? getPageLoadTime() : 0,
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      utm_term: params.get('utm_term') || '',
      utm_content: params.get('utm_content') || '',
    })

    // Reset scroll + timer for new page
    maxScrollDepth = 0
    pageStartTime = Date.now()
    currentPage = page
  }

  // ── Lifecycle hooks ────────────────────────────────────────────────────────
  nuxtApp.hook('page:start', () => {
    sendPageExit() // send exit data for the page we're leaving
  })

  nuxtApp.hook('page:finish', () => {
    sendPageView()
    window.addEventListener('scroll', updateScrollDepth, { passive: true })
  })

  // Capture exit when tab closes / user navigates away
  window.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') sendPageExit()
  })

  // ── Expose global tracker for conversion events ───────────────────────────
  // Components call: window.$analytics.track('conversion', { form: 'instant-quote' })
  ;(window as any).$analytics = {
    track: (eventType: string, data: Record<string, unknown> = {}) => {
      sendEvent({
        event_type: eventType,
        session_id: sessionId,
        visitor_id: visitorId,
        page: window.location.pathname,
        ...data,
      })
    }
  }
})
