/**
 * usePageSeo — SSR-compatible composable for per-page SEO
 *
 * Fetches SEO data from the MC backend via the Nuxt server API.
 * Falls back to the provided hardcoded defaults if the backend is unavailable.
 *
 * Usage:
 *   await usePageSeo({
 *     path: '/data-recovery/hard-drive-recovery',
 *     defaults: {
 *       title: 'Hard Drive Data Recovery - Five Star Data Recovery',
 *       description: '...',
 *       ogTitle: '...',
 *       ogDescription: '...',
 *     }
 *   })
 */

interface PageSeoDefaults {
  title?: string
  description?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
}

interface PageSeoOptions {
  /** The canonical path for this page, e.g. '/data-recovery/hard-drive-recovery' */
  path: string
  /** Hardcoded fallback values used when the backend is unreachable */
  defaults?: PageSeoDefaults
}

export async function usePageSeo(options: PageSeoOptions) {
  const { path, defaults = {} } = options

  // Fetch from our server-side proxy (works on both server and client)
  const { data } = await useAsyncData<Record<string, string | boolean>>(
    `page-seo:${path}`,
    () => $fetch('/api/page-seo', { query: { path } }).catch(() => ({ found: false }))
  )

  const seo = data.value || {}

  // Merge: backend values take priority; fall back to defaults
  const title       = (seo.found && seo.seo_title)       ? String(seo.seo_title)       : (defaults.title       || '')
  const description = (seo.found && seo.seo_description) ? String(seo.seo_description) : (defaults.description || '')
  const ogTitle     = (seo.found && seo.og_title)        ? String(seo.og_title)        : (defaults.ogTitle     || title)
  const ogDesc      = (seo.found && seo.og_description)  ? String(seo.og_description)  : (defaults.ogDescription || description)
  const ogImage     = defaults.ogImage || 'https://www.fivestardatarecovery.com/wp-content/uploads/2025/05/Logo-01-1024x1024.png'

  useSeoMeta({
    title,
    description,
    ogTitle,
    ogDescription: ogDesc,
    ogImage,
  })
}
