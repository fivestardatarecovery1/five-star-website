/**
 * form-view-tracker.ts
 * Server-side middleware: fires form_viewed event when mail-in or express drop-off
 * pages are loaded. Server-side = guaranteed, no browser timing issues.
 */

import { defineEventHandler, getHeader, getRequestURL } from 'h3'

const TRACKED_ROUTES: Record<string, 'mail-in' | 'express-drop-off'> = {
  '/data-recovery/data-recovery-mail-in-service': 'mail-in',
  '/data-recovery/express-drop-off': 'express-drop-off',
}

// Simple in-memory dedup: don't fire twice for the same IP+form within 10 seconds
const recentFires = new Map<string, number>()
const DEDUP_MS = 10_000

export default defineEventHandler(async (event) => {
  const url = getRequestURL(event)
  const pathname = url.pathname.replace(/\/$/, '')

  const formName = TRACKED_ROUTES[pathname]
  if (!formName) return  // Not a tracked form page

  // Only fire on full page GET requests (skip API calls, assets, prefetch)
  const method = event.node.req.method
  if (method !== 'GET') return

  const accept = getHeader(event, 'accept') || ''
  if (!accept.includes('text/html')) return

  // Skip bots
  const ua = getHeader(event, 'user-agent') || ''
  if (/bot|crawl|spider|Prerender|HeadlessChrome/i.test(ua)) return

  const ip = getHeader(event, 'x-forwarded-for')?.split(',')[0]?.trim()
    || event.node.req.socket?.remoteAddress
    || 'unknown'

  // Dedup: same IP+form within 10s = skip
  const dedupKey = `${ip}:${formName}`
  const lastFire = recentFires.get(dedupKey) || 0
  if (Date.now() - lastFire < DEDUP_MS) return
  recentFires.set(dedupKey, Date.now())

  // Clean up old entries periodically
  if (recentFires.size > 1000) {
    const cutoff = Date.now() - DEDUP_MS
    for (const [k, t] of recentFires) {
      if (t < cutoff) recentFires.delete(k)
    }
  }

  const webhookUrl = process.env.FORM_TRACKING_WEBHOOK_URL
  if (!webhookUrl) return  // Not configured yet

  const secret = process.env.FORM_TRACKING_SECRET
  const referrer = getHeader(event, 'referer') || ''
  const query = Object.fromEntries(url.searchParams)

  const payload = {
    event: 'form_viewed',
    sessionId: `srv-${ip.replace(/[^a-z0-9]/gi, '')}-${Date.now().toString(36)}`,
    form: formName,
    step: 1,
    stepName: 'Page Load',
    lastField: null,
    fieldsCompleted: [],
    partialContact: {},
    referrer,
    utmSource:   query.utm_source   || null,
    utmMedium:   query.utm_medium   || null,
    utmCampaign: query.utm_campaign || null,
  }

  // Fire and forget — never block page render
  try {
    const headers: Record<string, string> = { 'Content-Type': 'application/json' }
    if (secret) headers['X-Tracking-Secret'] = secret
    await fetch(webhookUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(3000),  // 3s max, never blocks the page
    })
  } catch {
    // Silently fail — page must always load
  }
})
