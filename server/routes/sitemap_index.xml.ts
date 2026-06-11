import { defineEventHandler, setHeader } from 'h3'
import { readdirSync, statSync } from 'fs'
import { join, relative } from 'path'

const BASE = 'https://www.fivestardatarecovery.com'

// Pages that should NOT appear in the sitemap
const EXCLUDE = new Set([
  '/blog/index',
  '/data-recovery/index',
  '/services/index',
  '/locations/index',
])

// Priority overrides for key pages
const PRIORITY: Record<string, string> = {
  '/':                    '1.0',
  '/data-recovery':       '0.9',
  '/instant-quote':       '0.9',
  '/start-recovery':      '0.9',
  '/data-recovery/free-data-recovery-quote': '0.9',
}

// Recursively scan pages/ directory and return all .vue files as URL paths
function getPagesRoutes(pagesDir: string): string[] {
  const routes: string[] = []

  function scan(dir: string) {
    let entries: string[]
    try { entries = readdirSync(dir) } catch { return }

    for (const entry of entries) {
      const fullPath = join(dir, entry)
      let stat
      try { stat = statSync(fullPath) } catch { continue }

      if (stat.isDirectory()) {
        scan(fullPath)
      } else if (entry.endsWith('.vue')) {
        // Convert file path → URL
        let route = '/' + relative(pagesDir, fullPath)
          .replace(/\\/g, '/')
          .replace(/\.vue$/, '')
          .replace(/\/index$/, '')
          .replace(/^index$/, '')

        // Skip dynamic routes ([param].vue), error pages, and excluded routes
        if (route.includes('[') || route.includes(']')) continue
        if (EXCLUDE.has(route)) continue

        routes.push(route || '/')
      }
    }
  }

  scan(pagesDir)
  return [...new Set(routes)].sort()
}

export default defineEventHandler((event) => {
  const today = new Date().toISOString()
  const pagesDir = join(process.cwd(), 'pages')

  const routes = getPagesRoutes(pagesDir)

  const urls = routes.map((route) => {
    const priority = PRIORITY[route] || '0.7'
    const changefreq = priority === '1.0' ? 'weekly' : 'monthly'
    return `  <url>
    <loc>${BASE}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  }).join('\n')

  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  setHeader(event, 'Cache-Control', 'max-age=3600, public')

  return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/__sitemap__/style.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`
})
