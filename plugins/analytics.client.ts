/**
 * analytics.client.ts — Five Star custom analytics tracker
 *
 * Tracks every page view with full session path, device info, and UTM params.
 * Sends events to Mission Control backend via POST /api/fs-analytics/event
 *
 * visitor_id  → persists in localStorage across sessions (returning visitors)
 * session_id  → persists in sessionStorage (one per browser tab/session)
 * sequence    → page number within the session (1, 2, 3...)
 */

const MC_ENDPOINT = (import.meta.env.VITE_MC_ANALYTICS_URL as string) || ''

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

async function sendEvent(payload: Record<string, unknown>) {
  if (!MC_ENDPOINT) return
  try {
    await fetch(`${MC_ENDPOINT}/api/fs-analytics/event`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true, // sends even if page navigates away immediately
    })
  } catch {
    // Never break the site for analytics
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const visitorId = getOrCreate(localStorage, 'fs_vid', uuid)
  const sessionId = getOrCreate(sessionStorage, 'fs_sid', uuid)

  // Track page sequence within session
  const getNextSeq = (): number => {
    const n = parseInt(sessionStorage.getItem('fs_seq') || '0') + 1
    sessionStorage.setItem('fs_seq', String(n))
    return n
  }

  // Capture the original landing referrer once per session
  const getLandingReferrer = (): string => {
    const key = 'fs_ref'
    if (!sessionStorage.getItem(key)) {
      sessionStorage.setItem(key, document.referrer || '')
    }
    return sessionStorage.getItem(key) || ''
  }

  const sendPageView = () => {
    const sequence = getNextSeq()
    const params = new URLSearchParams(window.location.search)

    sendEvent({
      visitor_id: visitorId,
      session_id: sessionId,
      page: window.location.pathname + window.location.search,
      page_title: document.title,
      referrer: getLandingReferrer(),
      sequence,
      device_type: getDeviceType(),
      browser: getBrowser(),
      os: getOS(),
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
    })
  }

  // Fire on every page navigation (initial load + SPA route changes)
  nuxtApp.hook('page:finish', sendPageView)
})
