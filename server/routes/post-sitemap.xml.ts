import { defineEventHandler, setHeader } from 'h3'

const BASE = 'https://www.fivestardatarecovery.com'

export default defineEventHandler(async (event) => {
  const storage = useStorage('assets:server')
  const manifest = await storage.getItem<Array<{
    route: string
    priority: string
    changefreq: string
    lastmod: string
  }>>('sitemap-routes.json')

  const posts = (manifest || []).filter(({ route }) =>
    route.startsWith('/blog/') && route !== '/blog'
  )

  const urls = posts.map(({ route, lastmod }) => `  <url>
    <loc>${BASE}${route}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')

  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  setHeader(event, 'Cache-Control', 'max-age=3600, public')

  return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/__sitemap__/style.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`
})
