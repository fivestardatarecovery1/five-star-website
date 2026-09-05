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

import { defineEventHandler, readBody, getRequestHeader } from 'h3'

// Map Vercel's ISO country codes to full names (used by MC backend geo storage)
const COUNTRY_NAMES: Record<string, string> = {
  US: 'United States', CA: 'Canada', GB: 'United Kingdom', AU: 'Australia',
  DE: 'Germany', FR: 'France', MX: 'Mexico', IN: 'India', BR: 'Brazil',
  JP: 'Japan', KR: 'South Korea', NL: 'Netherlands', ES: 'Spain', IT: 'Italy',
  SG: 'Singapore', NZ: 'New Zealand', ZA: 'South Africa', IL: 'Israel',
}

// Map US state abbreviations (Vercel region codes) to full names
const US_STATE_NAMES: Record<string, string> = {
  AL:'Alabama', AK:'Alaska', AZ:'Arizona', AR:'Arkansas', CA:'California',
  CO:'Colorado', CT:'Connecticut', DE:'Delaware', FL:'Florida', GA:'Georgia',
  HI:'Hawaii', ID:'Idaho', IL:'Illinois', IN:'Indiana', IA:'Iowa', KS:'Kansas',
  KY:'Kentucky', LA:'Louisiana', ME:'Maine', MD:'Maryland', MA:'Massachusetts',
  MI:'Michigan', MN:'Minnesota', MS:'Mississippi', MO:'Missouri', MT:'Montana',
  NE:'Nebraska', NV:'Nevada', NH:'New Hampshire', NJ:'New Jersey', NM:'New Mexico',
  NY:'New York', NC:'North Carolina', ND:'North Dakota', OH:'Ohio', OK:'Oklahoma',
  OR:'Oregon', PA:'Pennsylvania', RI:'Rhode Island', SC:'South Carolina',
  SD:'South Dakota', TN:'Tennessee', TX:'Texas', UT:'Utah', VT:'Vermont',
  VA:'Virginia', WA:'Washington', WV:'West Virginia', WI:'Wisconsin', WY:'Wyoming',
  DC:'District of Columbia',
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body?.page) {
    return { ok: false, error: 'Invalid payload' }
  }

  const mcUrl = process.env.MC_API_URL || 'http://localhost:3001'
  const secret = process.env.FS_ANALYTICS_SECRET

  // ── Geo from Vercel edge headers (resolved from real visitor IP at the edge) ──
  // These are injected by Vercel automatically — no IP lookup needed, no CDN confusion.
  const rawCountry = getRequestHeader(event, 'x-vercel-ip-country') || ''
  const rawRegion  = getRequestHeader(event, 'x-vercel-ip-country-region') || ''
  const rawCity    = getRequestHeader(event, 'x-vercel-ip-city') || ''

  const geoCountry = COUNTRY_NAMES[rawCountry] || rawCountry || null
  const geoRegion  = rawCountry === 'US'
    ? (US_STATE_NAMES[rawRegion] || rawRegion || null)
    : (rawRegion || null)
  const geoCity    = rawCity ? decodeURIComponent(rawCity) : null

  try {
    const payload: Record<string, unknown> = { ...body }
    if (secret) payload.secret = secret

    // Attach Vercel-resolved geo so MC backend skips IP lookup entirely
    if (geoCountry) {
      payload.geo_country = geoCountry
      payload.geo_region  = geoRegion
      payload.geo_city    = geoCity
    }

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
