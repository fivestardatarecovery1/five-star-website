/**
 * analytics.client.ts
 *
 * Five Star Data Recovery — Pageview Analytics Plugin
 *
 * Fires a pageview event to /api/track-analytics on every route change.
 * Detects device, browser, UTM params, referrer, session_id, and visitor_id.
 *
 * Data stored in:
 *   sessionStorage → session_id (resets per browser session)
 *   localStorage   → visitor_id (persists across sessions)
 */

import { defineNuxtPlugin, useRouter } from '#app'

// ── Helpers ───────────────────────────────────────────────────────────────────

function getOrCreate(storage: Storage, key: string): string {
  let val = storage.getItem(key)
  if (!val) {
    val = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`
    storage.setItem(key, val)
  }
  return val
}

function detectDevice(ua: string): 'mobile' | 'tablet' | 'desktop' {
  if (/tablet|ipad|playbook|silk/i.test(ua)) return 'tablet'
  if (/mobile|android|iphone|ipod|blackberry|opera mini|iemobile/i.test(ua)) return 'mobile'
  return 'desktop'
}

function detectBrowser(ua: string): string {
  if (/edg\//i.test(ua)) return 'Edge'
  if (/opr\//i.test(ua) || /opera/i.test(ua)) return 'Opera'
  if (/chrome\/\d/i.test(ua) && !/chromium/i.test(ua)) return 'Chrome'
  if (/safari\//i.test(ua) && !/chrome/i.test(ua)) return 'Safari'
  if (/firefox\//i.test(ua)) return 'Firefox'
  if (/msie|trident/i.test(ua)) return 'IE'
  return 'Other'
}

function getUtm(key: string): string | null {
  return new URLSearchParams(window.location.search).get(key)
}

// ── Send pageview ─────────────────────────────────────────────────────────────

async function sendPageview(page: string, referrer: string) {
  let session_id = ''
  let visitor_id = ''

  try {
    session_id = getOrCreate(sessionStorage, 'fs_analytics_sid')
    visitor_id = getOrCreate(localStorage, 'fs_analytics_vid')
  } catch {
    // Storage blocked (private mode) — use one-off IDs
    session_id = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`
    visitor_id = session_id
  }

  const ua = navigator.userAgent

  const payload = {
    event_type: 'pageview',
    page,
    referrer: referrer || null,
    utm_source: getUtm('utm_source'),
    utm_medium: getUtm('utm_medium'),
    utm_campaign: getUtm('utm_campaign'),
    device: detectDevice(ua),
    browser: detectBrowser(ua),
    session_id,
    visitor_id,
  }

  try {
    await fetch('/api/track-analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
  } catch {
    // Silently fail — analytics must never break the site
  }
}

// ── Plugin ────────────────────────────────────────────────────────────────────

export default defineNuxtPlugin(() => {
  const router = useRouter()

  // Track the previous URL to use as referrer on SPA navigations
  let previousUrl = ''

  // Fire on initial load
  if (typeof window !== 'undefined') {
    sendPageview(window.location.pathname, document.referrer)
    previousUrl = window.location.href
  }

  // Fire on every SPA route change
  router.afterEach((to) => {
    const page = to.path
    const referrer = previousUrl
    previousUrl = window.location.href
    sendPageview(page, referrer)
  })
})
