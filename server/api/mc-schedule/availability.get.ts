/**
 * GET /api/mc-schedule/availability?date=YYYY-MM-DD
 *
 * Server-side proxy to MC backend schedule API.
 * Runs on the LOCAL Nuxt server (port 3456), reached via fivestar.ngrok.app.
 * Calls MC backend directly via localhost:3001 — same machine, no ngrok needed.
 */

import { defineEventHandler, getQuery } from 'h3'

export default defineEventHandler(async (event) => {
  const { date } = getQuery(event)

  if (!date || typeof date !== 'string') {
    return { ok: false, error: 'date required' }
  }

  try {
    const res = await fetch(`http://localhost:3001/api/fs-schedule/availability?date=${date}`, {
      signal: AbortSignal.timeout(4000),
    })
    return await res.json()
  } catch {
    // Fallback — never break the form
    return {
      ok: true, date, available: true,
      availableHours: ['9:00 AM','9:30 AM','10:00 AM','10:30 AM','11:00 AM','11:30 AM','12:00 PM','12:30 PM','1:00 PM','1:30 PM','2:00 PM','2:30 PM','3:00 PM','3:30 PM','4:00 PM','4:30 PM','5:00 PM','5:30 PM'],
      blockedHours: [],
    }
  }
})
