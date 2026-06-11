/**
 * GET /api/page-seo?path=/some-page
 *
 * Server-side proxy: fetches SEO data from Mission Control backend.
 * Called during SSR so the correct title/description is injected server-side.
 * Falls back gracefully if the MC backend is unreachable.
 */
import { defineEventHandler, getQuery } from 'h3'

export default defineEventHandler(async (event) => {
  const { path } = getQuery(event)
  if (!path) return { found: false }

  const mcBackendUrl = process.env.MC_BACKEND_URL || 'http://localhost:3001'

  try {
    const res = await fetch(
      `${mcBackendUrl}/api/fs-seo/page?path=${encodeURIComponent(String(path))}`,
      { signal: AbortSignal.timeout(4000) }
    )
    if (!res.ok) return { found: false }
    return await res.json()
  } catch (err) {
    console.error('[page-seo proxy] MC backend unreachable:', err)
    return { found: false }
  }
})
