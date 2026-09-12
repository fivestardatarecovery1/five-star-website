/**
 * useAttribution
 *
 * Captures and persists first-touch attribution data for the current browser session.
 * Reads UTM params + gclid from the landing URL and stores them in sessionStorage
 * so forms on subsequent pages can still report how the visitor arrived.
 *
 * resolveSource() maps raw params/referrer to a human-readable label:
 *   Google Ads, Google Organic, Yelp, Facebook Ads, Bing Ads, Direct, etc.
 */

const SESSION_KEY = 'fs_attribution'
const REFERRER_KEY = 'fs_ref' // set by analytics.client.ts on first landing

export interface AttributionData {
  source: string        // e.g. "Google Ads", "Google Organic", "Yelp", "Direct"
  utm_source: string    // raw utm_source param
  utm_medium: string    // raw utm_medium param
  utm_campaign: string  // raw utm_campaign param
  utm_term: string      // raw keyword (ad keyword or utm_term)
  utm_content: string   // raw utm_content param
  gclid: string         // Google Click ID (confirms Google Ads even without UTMs)
  referrer: string      // first-touch referrer domain
  landing_page: string  // first page the visitor landed on
}

function resolveSource(data: Omit<AttributionData, 'source'>): string {
  const src = (data.utm_source || '').toLowerCase()
  const med = (data.utm_medium || '').toLowerCase()
  const ref = (data.referrer || '').toLowerCase()

  // Google Ads — gclid is the most reliable signal
  if (data.gclid || (src === 'google' && (med === 'cpc' || med === 'ppc' || med === 'paid'))) {
    return 'Google Ads'
  }

  // Other paid channels
  if ((src === 'bing' || src === 'microsoft') && (med === 'cpc' || med === 'ppc' || med === 'paid')) {
    return 'Bing Ads'
  }
  if (src === 'facebook' || src === 'fb' || src === 'instagram') {
    return med === 'cpc' || med === 'paid' ? 'Facebook / Instagram Ads' : 'Facebook / Instagram'
  }
  if (src === 'yelp') return 'Yelp'
  if (src === 'nextdoor') return 'Nextdoor'
  if (src === 'angi' || src === 'angieslist') return 'Angi / Angie\'s List'
  if (src === 'thumbtack') return 'Thumbtack'
  if (src === 'google' && med === 'gbp') return 'Google Business Profile'
  if (src === 'google' && (med === 'organic' || med === '')) return 'Google Organic'

  // UTM source present but no medium match above
  if (src && src !== 'google') {
    return src.charAt(0).toUpperCase() + src.slice(1)
  }

  // Referrer-based detection (when no UTMs)
  if (ref.includes('google.')) return 'Google Organic'
  if (ref.includes('bing.com') || ref.includes('microsoft.com')) return 'Bing Organic'
  if (ref.includes('yelp.com')) return 'Yelp'
  if (ref.includes('facebook.com') || ref.includes('fb.com') || ref.includes('instagram.com')) return 'Facebook / Instagram'
  if (ref.includes('nextdoor.com')) return 'Nextdoor'
  if (ref.includes('angi.com') || ref.includes('angieslist.com')) return 'Angi / Angie\'s List'
  if (ref.includes('thumbtack.com')) return 'Thumbtack'
  if (ref.includes('yahoo.com')) return 'Yahoo'
  if (ref.includes('duckduckgo.com')) return 'DuckDuckGo'
  if (ref && !ref.includes('fivestardatarecovery.com')) {
    try {
      const domain = new URL(ref.startsWith('http') ? ref : `https://${ref}`).hostname.replace(/^www\./, '')
      return `Referral — ${domain}`
    } catch {
      return 'Referral'
    }
  }

  return 'Direct / Unknown'
}

export function useAttribution(): AttributionData {
  if (!import.meta.client) {
    return {
      source: '', utm_source: '', utm_medium: '', utm_campaign: '',
      utm_term: '', utm_content: '', gclid: '', referrer: '', landing_page: '',
    }
  }

  try {
    const params = new URLSearchParams(window.location.search)
    const hasUtm = params.has('utm_source') || params.has('gclid')

    let stored: Omit<AttributionData, 'source'> | null = null
    const raw = sessionStorage.getItem(SESSION_KEY)
    if (raw) {
      try { stored = JSON.parse(raw) } catch { /* ignore */ }
    }

    // If URL has UTM params, always use them (and update stored)
    let current: Omit<AttributionData, 'source'>
    if (hasUtm) {
      current = {
        utm_source: params.get('utm_source') || '',
        utm_medium: params.get('utm_medium') || '',
        utm_campaign: params.get('utm_campaign') || '',
        utm_term: params.get('utm_term') || params.get('keyword') || '',
        utm_content: params.get('utm_content') || '',
        gclid: params.get('gclid') || '',
        referrer: sessionStorage.getItem(REFERRER_KEY) || document.referrer || '',
        landing_page: window.location.pathname + window.location.search,
      }
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(current))
    } else if (stored) {
      // Use first-touch attribution from earlier in this session
      current = stored
    } else {
      // No UTMs anywhere — build from referrer only
      current = {
        utm_source: '',
        utm_medium: '',
        utm_campaign: '',
        utm_term: '',
        utm_content: '',
        gclid: '',
        referrer: sessionStorage.getItem(REFERRER_KEY) || document.referrer || '',
        landing_page: window.location.pathname,
      }
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(current))
    }

    return {
      ...current,
      source: resolveSource(current),
    }
  } catch {
    return {
      source: '', utm_source: '', utm_medium: '', utm_campaign: '',
      utm_term: '', utm_content: '', gclid: '', referrer: '', landing_page: '',
    }
  }
}
