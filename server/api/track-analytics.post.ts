/**
 * POST /api/track-analytics
 *
 * Server-side proxy — receives analytics events from the Five Star client plugin
 * and forwards them to the MC backend webhook.
 *
 * Environment variables:
 *   MC_API_URL          — MC backend base URL (shared with other server routes)
 *   FS_ANALYTICS_SECRET — Optional shared secret for MC backend auth
 *
 * If MC_API_URL is not configured, events are logged to console only.
 */

import { defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body?.page) {
    return { ok: false, error: 'Invalid payload' }
  }

  const mcUrl = process.env.MC_API_URL || 'http://localhost:3001'
  const secret = process.env.FS_ANALYTICS_SECRET

  console.log(`[Analytics] ${body.event_type || 'pageview'} | ${body.page} | ${body.device || '?'} | src: ${body.utm_source || body.referrer || 'direct'}`)

  try {
    const payload = { ...body }
    if (secret) payload.secret = secret

    const res = await fetch(`${mcUrl}/api/fs-analytics/event`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'FiveStarDataRecovery-Analytics/1.0',
      },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      console.error(`[Analytics] MC backend returned ${res.status}`)
      return { ok: true, forwarded: false, status: res.status }
    }

    return { ok: true, forwarded: true }
  } catch (err) {
    console.error('[Analytics] forward error:', err)
    return { ok: true, forwarded: false }
  }
})
