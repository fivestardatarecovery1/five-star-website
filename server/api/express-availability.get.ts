/**
 * GET /api/express-availability?date=YYYY-MM-DD
 *
 * Returns available drop-off time slots for a given date.
 *
 * When running locally (local Nuxt dev server, port 3456):
 *   → Calls MC backend directly via http://localhost:3001
 *
 * When running on Vercel (cloud serverless, can't reach localhost):
 *   → Routes through https://fivestar.ngrok.app/api/mc-schedule/availability
 *     which hits the local Nuxt server (same machine as MC) via the stable tunnel
 */

import { defineEventHandler, getQuery } from 'h3'

export default defineEventHandler(async (event) => {
  const { date } = getQuery(event)

  if (!date || typeof date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return { ok: false, error: 'date param required (YYYY-MM-DD)' }
  }

  // Running on Vercel: route through fivestar.ngrok.app (stable domain → local Nuxt → localhost:3001)
  // Running locally: call MC directly
  const isVercel = !!process.env.VERCEL
  // fivestar.ngrok.app tunnels directly to MC backend (port 3001), so use the MC route path
  const url = isVercel
    ? `https://fivestar.ngrok.app/api/fs-schedule/availability?date=${date}`
    : `http://localhost:3001/api/fs-schedule/availability?date=${date}`

  try {
    const res = await fetch(url, {
      signal: AbortSignal.timeout(5000),
    })
    return await res.json()
  } catch {
    // Fallback: return all hours — never break the form
    return {
      ok: true, date, available: true,
      availableHours: ['9:00 AM','9:30 AM','10:00 AM','10:30 AM','11:00 AM','11:30 AM','12:00 PM','12:30 PM','1:00 PM','1:30 PM','2:00 PM','2:30 PM','3:00 PM','3:30 PM','4:00 PM','4:30 PM','5:00 PM','5:30 PM'],
      blockedHours: [],
    }
  }
})
