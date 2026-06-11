import { defineEventHandler, setHeader } from 'h3'

const BASE = 'https://www.fivestardatarecovery.com'

const PRIORITY: Record<string, string> = {
  '/':                                          '1.0',
  '/data-recovery':                             '0.9',
  '/instant-quote':                             '0.9',
  '/start-recovery':                            '0.9',
  '/data-recovery/free-data-recovery-quote':    '0.9',
  '/contact-us':                                '0.8',
}

export default defineEventHandler(async (event) => {
  const today = new Date().toISOString()

  // Read routes manifest generated at build time (excludes /blog/* routes)
  const storage = useStorage('assets:server')
  const manifest = await storage.getItem<Array<{
    route: string
    priority: string
    changefreq: string
  }>>('sitemap-routes.json')

  const pages = (manifest || []).filter(({ route }) => !route.startsWith('/blog/'))

  const urls = pages.map(({ route }) => {
    const priority = PRIORITY[route] || '0.7'
    const changefreq = (priority === '1.0' || priority === '0.9') ? 'weekly' : 'monthly'
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
