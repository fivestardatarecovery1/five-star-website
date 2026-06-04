/**
 * /api/address-autocomplete?q=<query>
 * Server-side proxy — API key never exposed to browser.
 * Uses Google Places if GOOGLE_MAPS_API_KEY is set, otherwise falls back to Nominatim (free, no key).
 */
export default defineEventHandler(async (event) => {
  const { q } = getQuery(event)
  if (!q || String(q).length < 3) return []

  const config = useRuntimeConfig()
  const googleKey = config.googleMapsApiKey || process.env.GOOGLE_MAPS_API_KEY || ''

  if (googleKey) {
    return await googlePlaces(String(q), googleKey)
  } else {
    return await nominatim(String(q))
  }
})

// ── Google Places Autocomplete ─────────────────────────────────────────────
async function googlePlaces(q: string, key: string) {
  try {
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(q)}&types=address&components=country:us|country:ca|country:gb|country:au&language=en&key=${key}`
    const res = await fetch(url)
    const data = await res.json() as any
    if (data.status !== 'OK' && data.status !== 'ZERO_RESULTS') return []

    const detailPromises = (data.predictions || []).slice(0, 5).map((p: any) =>
      getGooglePlaceDetail(p.place_id, key)
    )
    const details = await Promise.all(detailPromises)
    return details.filter(Boolean)
  } catch { return [] }
}

async function getGooglePlaceDetail(placeId: string, key: string) {
  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=formatted_address,address_components&key=${key}`
    const res = await fetch(url)
    const data = await res.json() as any
    if (data.status !== 'OK') return null
    const c = data.result?.address_components || []
    const get = (type: string) => c.find((x: any) => x.types.includes(type))
    const streetNum  = get('street_number')?.long_name || ''
    const route      = get('route')?.long_name || ''
    const city       = get('locality')?.long_name || get('sublocality')?.long_name || get('postal_town')?.long_name || ''
    const state      = get('administrative_area_level_1')?.short_name || ''
    const zip        = get('postal_code')?.long_name || ''
    const country    = get('country')?.long_name || ''
    return {
      label: data.result?.formatted_address || `${streetNum} ${route}`,
      street: `${streetNum} ${route}`.trim(),
      city, state, zip, country,
    }
  } catch { return null }
}

// ── Nominatim fallback (OpenStreetMap) ────────────────────────────────────
async function nominatim(q: string) {
  try {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(q)}&format=json&addressdetails=1&limit=5&countrycodes=us,ca,gb,au`
    const res = await fetch(url, { headers: { 'User-Agent': 'FiveStarDataRecovery/1.0 (contact@fivestardatarecovery.com)' } })
    const data = await res.json() as any[]
    return data.map((r: any) => {
      const a = r.address || {}
      const streetNum = a.house_number || ''
      const route     = a.road || ''
      const city      = a.city || a.town || a.village || a.county || ''
      const state     = a.state || ''
      const zip       = a.postcode || ''
      const country   = a.country || ''
      return {
        label: r.display_name,
        street: `${streetNum} ${route}`.trim(),
        city, state, zip, country,
      }
    }).filter((r: any) => r.street)
  } catch { return [] }
}
