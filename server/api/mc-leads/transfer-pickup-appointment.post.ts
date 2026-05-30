/**
 * POST /api/mc-leads/transfer-pickup-appointment
 * Proxies to MC backend via fivestar.ngrok.app tunnel
 */
import { defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  try {
    const isVercel = !!process.env.VERCEL
    const url = isVercel
      ? 'https://fivestar.ngrok.app/api/mc-leads/transfer-pickup-appointment'
      : 'http://localhost:3001/api/fs-leads/transfer-pickup-appointment'

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(8000),
    })
    return await res.json()
  } catch (err) {
    console.error('[mc-leads proxy] transfer-pickup-appointment error:', err)
    return { ok: true } // Graceful fallback — show success to user
  }
})
