/**
 * Nuxt module — scans pages/ at build time and writes a routes manifest
 * to server/assets/sitemap-routes.json so the sitemap_index.xml server
 * route can read it at runtime (even in Vercel serverless where source
 * files are not present).
 */
import { defineNuxtModule } from 'nuxt/kit'
import { globSync } from 'glob'
import { writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'

// Pages that should NOT appear in the sitemap
const EXCLUDE = new Set([
  '/blog',
  '/data-recovery',
])

// Priority overrides
const PRIORITY: Record<string, string> = {
  '/':                                          '1.0',
  '/data-recovery':                             '0.9',
  '/instant-quote':                             '0.9',
  '/start-recovery':                            '0.9',
  '/data-recovery/free-data-recovery-quote':    '0.9',
  '/contact-us':                                '0.8',
  '/blog':                                      '0.8',
}

function fileToRoute(filePath: string): string | null {
  let route = '/' + filePath
    .replace(/\\/g, '/')
    .replace(/\.vue$/, '')
    .replace(/\/index$/, '')
    .replace(/^index$/, '')

  // Skip dynamic routes, catch-all, error pages
  if (route.includes('[') || route.includes('(')) return null
  if (EXCLUDE.has(route)) return null

  return route || '/'
}

export default defineNuxtModule({
  meta: { name: 'generate-sitemap-routes' },
  setup(_options, nuxt) {
    nuxt.hook('build:done', () => {
      const pagesDir = join(nuxt.options.rootDir, 'pages')
      const files = globSync('**/*.vue', { cwd: pagesDir })

      const routes = [...new Set(
        files.map(fileToRoute).filter(Boolean) as string[]
      )].sort()

      const manifest = routes.map((route) => ({
        route,
        priority: PRIORITY[route] || '0.7',
        changefreq: (PRIORITY[route] === '1.0' || PRIORITY[route] === '0.9') ? 'weekly' : 'monthly',
      }))

      const assetsDir = join(nuxt.options.rootDir, 'server', 'assets')
      mkdirSync(assetsDir, { recursive: true })
      writeFileSync(
        join(assetsDir, 'sitemap-routes.json'),
        JSON.stringify(manifest, null, 2)
      )

      console.log(`[sitemap] Generated ${manifest.length} routes → server/assets/sitemap-routes.json`)
    })
  },
})
