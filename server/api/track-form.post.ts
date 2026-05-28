/**
 * POST /api/track-form
 *
 * Receives form tracking events from the mail-in and express drop-off forms
 * and forwards them to a configured webhook URL.
 *
 * Environment variables:
 *   FORM_TRACKING_WEBHOOK_URL  — Shirley's webhook endpoint (required to forward)
 *   FORM_TRACKING_SECRET       — Optional: added as X-Tracking-Secret header
 *
 * If no webhook URL is set, events are logged to the server console only.
 */

import { defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Basic validation — make sure it looks like a tracking payload
  if (!body?.event || !body?.form || !body?.sessionId) {
    return { ok: false, error: 'Invalid payload' }
  }

  const webhookUrl = process.env.FORM_TRACKING_WEBHOOK_URL
  const secret = process.env.FORM_TRACKING_SECRET

  // Always log to console for debugging
  console.log(`[FormTracking] ${body.form} | ${body.event} | step ${body.step} | session ${body.sessionId} | lastField: ${body.lastField ?? 'none'} | email: ${body.partialContact?.email ?? 'unknown'}`)

  if (!webhookUrl) {
    // Webhook not configured yet — just acknowledge
    return { ok: true, forwarded: false }
  }

  try {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'User-Agent': 'FiveStarDataRecovery-Tracker/1.0',
    }
    if (secret) {
      headers['X-Tracking-Secret'] = secret
    }

    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    })

    if (!res.ok) {
      console.error(`[FormTracking] Webhook returned ${res.status}`)
      return { ok: true, forwarded: false, webhookStatus: res.status }
    }

    return { ok: true, forwarded: true }
  } catch (err) {
    console.error('[FormTracking] Webhook error:', err)
    return { ok: true, forwarded: false }
  }
})
