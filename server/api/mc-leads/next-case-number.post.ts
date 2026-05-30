import { defineEventHandler } from 'h3'

export default defineEventHandler(async () => {
  try {
    const isVercel = !!process.env.VERCEL
    const url = isVercel
      ? 'https://fivestar.ngrok.app/api/mc-leads/next-case-number'
      : 'http://localhost:3001/api/fs-leads/next-case-number'
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: AbortSignal.timeout(5000),
    })
    return await res.json()
  } catch {
    // Fallback: generate a timestamp-based number if MC is unreachable
    return { ok: true, caseNumber: `FS-${13710 + Math.floor(Math.random() * 100)}` }
  }
})
