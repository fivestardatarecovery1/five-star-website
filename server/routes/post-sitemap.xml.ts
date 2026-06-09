import { serverQueryContent } from '#content/server'
import { defineEventHandler, setHeader } from 'h3'

const BASE = 'https://www.fivestardatarecovery.com'

export default defineEventHandler(async (event) => {
  const today = new Date().toISOString().split('T')[0]

  // Auto-discovers ALL blog posts from /content/blog/*.md
  const posts = await serverQueryContent(event, '/blog')
    .where({ _path: { $ne: '/blog' } })
    .find()

  const urls = posts.map((post) => {
    const lastmod = post.date ? new Date(post.date).toISOString().split('T')[0] : today
    return `  <url>
    <loc>${BASE}${post._path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
  })

  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  setHeader(event, 'Cache-Control', 'max-age=3600, public')

  return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/__sitemap__/style.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`
})
