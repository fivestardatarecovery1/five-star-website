/**
 * usePageSeo — build-time SEO composable
 *
 * Reads from assets/seo-data.json (baked in at build time).
 * Zero runtime network calls — no performance impact.
 *
 * To update SEO: edit via Mission Control SEO Manager → saves to GitHub → Vercel
 * auto-rebuilds in ~2-3 minutes.
 *
 * Usage:
 *   usePageSeo({
 *     title: 'Hard Drive Data Recovery - Five Star Data Recovery',
 *     description: '...',
 *     ogTitle: '...',
 *     ogDescription: '...',
 *   })
 */

import seoData from '~/assets/seo-data.json'

interface PageSeoDefaults {
  title?: string
  description?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  keywords?: string
}

export function usePageSeo(defaults: PageSeoDefaults = {}) {
  const route = useRoute()
  const override = (seoData as Record<string, Record<string, string>>)[route.path] || {}

  const title       = override.seoTitle       || defaults.title       || ''
  const description = override.seoDescription || defaults.description || ''
  const ogTitle     = override.ogTitle        || defaults.ogTitle     || title
  const ogDesc      = override.ogDescription  || defaults.ogDescription || description
  const keywords    = override.keywords       || defaults.keywords    || ''
  const ogImage     = defaults.ogImage || 'https://www.fivestardatarecovery.com/wp-content/uploads/2025/05/Logo-01-1024x1024.png'

  useSeoMeta({
    title,
    description,
    ogTitle,
    ogDescription: ogDesc,
    ogImage,
    ...(keywords ? { keywords } : {}),
  })
}
