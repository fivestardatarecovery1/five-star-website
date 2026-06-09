import { defineEventHandler, setHeader } from 'h3'

const BASE = 'https://www.fivestardatarecovery.com'

const PAGES = [
  { path: '/',                                               priority: '1.0', changefreq: 'weekly'  },
  { path: '/about-us',                                       priority: '0.8', changefreq: 'monthly' },
  { path: '/contact-us',                                     priority: '0.9', changefreq: 'monthly' },
  { path: '/reviews',                                        priority: '0.8', changefreq: 'weekly'  },
  { path: '/faq',                                            priority: '0.7', changefreq: 'monthly' },
  { path: '/data-recovery-service-pricing',                  priority: '0.8', changefreq: 'monthly' },
  { path: '/payment-plan',                                   priority: '0.6', changefreq: 'monthly' },
  { path: '/start-recovery',                                 priority: '0.9', changefreq: 'monthly' },
  { path: '/instant-quote',                                  priority: '0.8', changefreq: 'monthly' },
  { path: '/expedited-service',                              priority: '0.7', changefreq: 'monthly' },
  { path: '/expedited-service-plus',                         priority: '0.7', changefreq: 'monthly' },
  { path: '/hard-drive-clicking',                            priority: '0.8', changefreq: 'monthly' },
  { path: '/drive-doesnt-power-on',                          priority: '0.8', changefreq: 'monthly' },
  { path: '/privacy-policy',                                 priority: '0.3', changefreq: 'yearly'  },
  { path: '/terms-and-conditions',                           priority: '0.3', changefreq: 'yearly'  },
  { path: '/data-recovery',                                  priority: '0.9', changefreq: 'monthly' },
  { path: '/data-recovery/hard-drive-recovery',              priority: '0.9', changefreq: 'monthly' },
  { path: '/data-recovery/ssd-data-recovery',                priority: '0.8', changefreq: 'monthly' },
  { path: '/data-recovery/external-hard-drive-data-recovery', priority: '0.8', changefreq: 'monthly' },
  { path: '/data-recovery/laptop-data-recovery',             priority: '0.8', changefreq: 'monthly' },
  { path: '/data-recovery/mac-data-recovery',                priority: '0.8', changefreq: 'monthly' },
  { path: '/data-recovery/raid-data-recovery',               priority: '0.8', changefreq: 'monthly' },
  { path: '/data-recovery/nas-data-recovery',                priority: '0.8', changefreq: 'monthly' },
  { path: '/data-recovery/iphone-data-recovery',             priority: '0.7', changefreq: 'monthly' },
  { path: '/data-recovery/samsung-data-recovery',            priority: '0.7', changefreq: 'monthly' },
  { path: '/data-recovery/usb-data-recovery',                priority: '0.7', changefreq: 'monthly' },
  { path: '/data-recovery/sd-card-data-recovery',            priority: '0.7', changefreq: 'monthly' },
  { path: '/data-recovery/cfast-card-data-recovery',         priority: '0.6', changefreq: 'monthly' },
  { path: '/data-recovery/seagate-data-recovery',            priority: '0.7', changefreq: 'monthly' },
  { path: '/data-recovery/western-digital-data-recovery',    priority: '0.7', changefreq: 'monthly' },
  { path: '/data-recovery/toshiba-data-recovery',            priority: '0.6', changefreq: 'monthly' },
  { path: '/data-recovery/lacie-data-recovery',              priority: '0.6', changefreq: 'monthly' },
  { path: '/data-recovery/hitachi-data-recovery',            priority: '0.6', changefreq: 'monthly' },
  { path: '/data-recovery/desktop-data-recovery',            priority: '0.7', changefreq: 'monthly' },
  { path: '/data-recovery/clean-room-data-recovery',         priority: '0.7', changefreq: 'monthly' },
  { path: '/data-recovery/bad-sectors',                      priority: '0.6', changefreq: 'monthly' },
  { path: '/data-recovery/deleted-files',                    priority: '0.7', changefreq: 'monthly' },
  { path: '/data-recovery/dropped-hard-drive',               priority: '0.8', changefreq: 'monthly' },
  { path: '/data-recovery/hard-drive-not-showing-up',        priority: '0.8', changefreq: 'monthly' },
  { path: '/data-recovery/video-file-repair',                priority: '0.8', changefreq: 'monthly' },
  { path: '/data-recovery/free-data-recovery-quote',         priority: '0.9', changefreq: 'monthly' },
  { path: '/data-recovery/express-drop-off-form',            priority: '0.8', changefreq: 'monthly' },
  { path: '/data-recovery/data-recovery-mail-in-service',    priority: '0.7', changefreq: 'monthly' },
  { path: '/data-recovery-services-glendale-ca',             priority: '0.9', changefreq: 'monthly' },
  { path: '/data-recovery-los-angeles',                      priority: '0.8', changefreq: 'monthly' },
  { path: '/data-recovery-burbank-ca',                       priority: '0.8', changefreq: 'monthly' },
  { path: '/data-recovery-pasadena-ca',                      priority: '0.8', changefreq: 'monthly' },
  { path: '/data-recovery-hollywood-ca',                     priority: '0.8', changefreq: 'monthly' },
  { path: '/data-recovery-beverly-hills',                    priority: '0.8', changefreq: 'monthly' },
  { path: '/services/hard-drive-recovery',                   priority: '0.7', changefreq: 'monthly' },
  { path: '/services/ssd-recovery',                          priority: '0.7', changefreq: 'monthly' },
  { path: '/services/raid-recovery',                         priority: '0.7', changefreq: 'monthly' },
  { path: '/services/laptop-recovery',                       priority: '0.7', changefreq: 'monthly' },
  { path: '/services/mac-recovery',                          priority: '0.7', changefreq: 'monthly' },
  { path: '/services/mobile-recovery',                       priority: '0.7', changefreq: 'monthly' },
  { path: '/services/usb-recovery',                          priority: '0.6', changefreq: 'monthly' },
  { path: '/services/external-hdd-recovery',                 priority: '0.7', changefreq: 'monthly' },
]

export default defineEventHandler((event) => {
  const now = new Date().toISOString()

  const urls = PAGES.map(p => `  <url>
    <loc>${BASE}${p.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')

  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  setHeader(event, 'Cache-Control', 'max-age=3600, public')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`
})
