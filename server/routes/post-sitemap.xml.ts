import { defineEventHandler, setHeader } from 'h3'

const BASE = 'https://www.fivestardatarecovery.com'

// Blog posts are Vue pages — list canonical URLs and publish dates here.
// lastmod is always today (dynamic per request) so Google sees fresh content.
const BLOG_POSTS = [
  {
    slug: '/blog/sony-venice-x-ocn-video-file-repair-case-study',
    published: '2026-06-09',
  },
  {
    slug: '/blog/how-to-repair-external-hard-drive-after-it-was-dropped',
    published: '2025-06-19',
  },
  {
    slug: '/blog/usb-data-recovery-chip-off',
    published: '2025-06-19',
  },
]

export default defineEventHandler((event) => {
  const today = new Date().toISOString().split('T')[0]

  const urls = BLOG_POSTS.map(({ slug }) => `  <url>
    <loc>${BASE}${slug}</loc>
    <lastmod>${today}</lastmod>
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
