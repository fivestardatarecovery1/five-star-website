/**
 * POST /api/mc-leads/mailin-submission
 *
 * Proxy endpoint running on the LOCAL Nuxt server (port 3456).
 * Reached from Vercel via https://fivestar.ngrok.app/api/mc-leads/mailin-submission
 * Forwards to MC backend at http://localhost:3001 on the same machine.
 */
import { defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  try {
    const res = await fetch('http://localhost:3001/api/fs-leads/mailin-submission', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(8000),
    })
    return await res.json()
  } catch (err) {
    console.error('[mc-leads proxy] mailin-submission error:', err)
    return { ok: false, error: 'MC backend unreachable' }
  }
})
