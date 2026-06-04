/**
 * POST /api/track-analytics
 *
 * Server-side proxy — receives analytics events from the Five Star client plugin
 * and forwards them to the MC backend webhook.
 *
 * Environment variables:
 *   ANALYTICS_WEBHOOK_URL    — MC backend endpoint (required to forward)
 *   FS_ANALYTICS_SECRET      — Optional shared secret for MC backend auth
 *
 * If no webhook URL is configured, events are logged to console only.
 */

import { defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body?.page) {
    return { ok: false, error: 'Invalid payload' }
  }

  const webhookUrl = process.env.ANALYTICS_WEBHOOK_URL
  const secret = process.env.FS_ANALYTICS_SECRET

  console.log(`[Analytics] ${body.event_type || 'pageview'} | ${body.page} | ${body.device || '?'} | src: ${body.utm_source || body.referrer || 'direct'}`)

  if (!webhookUrl) {
    return { ok: true, forwarded: false }
  }

  try {
    const payload = { ...body }
    if (secret) payload.secret = secret

    const res = await fetch(`${webhookUrl}/api/fs-analytics/event`, {
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
