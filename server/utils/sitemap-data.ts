import { execSync } from 'child_process'

export function gitLastmod(file: string): string {
  try {
    const ts = execSync(`git log -1 --format=%cI -- "${file}"`, { encoding: 'utf8' }).trim()
    return ts || new Date().toISOString()
  } catch {
    return new Date().toISOString()
  }
}

export interface SitemapUrl {
  loc: string
  lastmod: string
  changefreq: string
  priority: number
  images?: { loc: string; title: string }[]
}

export const PAGE_URLS: SitemapUrl[] = [
  // Core
  { loc: 'https://www.fivestardatarecovery.com/',                                              lastmod: gitLastmod('pages/index.vue'),                                              priority: 1.0, changefreq: 'weekly',  images: [{ loc: 'https://www.fivestardatarecovery.com/data-recovery-hero.jpg',                       title: 'Expert Data Recovery Services in Glendale CA' }] },
  { loc: 'https://www.fivestardatarecovery.com/about',                                         lastmod: gitLastmod('pages/about.vue'),                                              priority: 0.8, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/about-us-hero.webp',                          title: 'About Five Star Data Recovery' }] },
  { loc: 'https://www.fivestardatarecovery.com/contact',                                       lastmod: gitLastmod('pages/contact.vue'),                                            priority: 0.9, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/contact-hero-bg.jpg',                         title: 'Contact Five Star Data Recovery' }] },
  { loc: 'https://www.fivestardatarecovery.com/reviews',                                       lastmod: gitLastmod('pages/reviews.vue'),                                            priority: 0.8, changefreq: 'weekly',  images: [{ loc: 'https://www.fivestardatarecovery.com/reviews-hero-bg.jpg',                        title: 'Customer Reviews' }] },
  { loc: 'https://www.fivestardatarecovery.com/faq',                                           lastmod: gitLastmod('pages/faq.vue'),                                                priority: 0.8, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/data-recovery-hard-drive-service-glendale-ca.jpg', title: 'Data Recovery FAQ' }] },
  { loc: 'https://www.fivestardatarecovery.com/pricing',                                       lastmod: gitLastmod('pages/pricing.vue'),                                            priority: 0.9, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/data-recovery-pricing-los-angeles.jpg',       title: 'Data Recovery Pricing' }] },
  { loc: 'https://www.fivestardatarecovery.com/payment-plan',                                  lastmod: gitLastmod('pages/payment-plan.vue'),                                       priority: 0.8, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/data-recovery-payment-plan-financing.jpg',    title: 'Data Recovery Payment Plan' }] },
  { loc: 'https://www.fivestardatarecovery.com/start-recovery',                                lastmod: gitLastmod('pages/start-recovery.vue'),                                     priority: 0.9, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/start-recovery-hero.webp',                   title: 'Start Your Data Recovery' }] },
  { loc: 'https://www.fivestardatarecovery.com/instant-quote',                                 lastmod: gitLastmod('pages/instant-quote.vue'),                                      priority: 0.9, changefreq: 'monthly' },
  { loc: 'https://www.fivestardatarecovery.com/blog',                                          lastmod: gitLastmod('pages/blog/index.vue'),                                         priority: 0.7, changefreq: 'weekly',  images: [{ loc: 'https://www.fivestardatarecovery.com/blog-hero.jpg',                              title: 'Data Recovery Blog' }] },
  { loc: 'https://www.fivestardatarecovery.com/privacy-policy',                                lastmod: gitLastmod('pages/privacy-policy.vue'),                                     priority: 0.4, changefreq: 'yearly',  images: [{ loc: 'https://www.fivestardatarecovery.com/privacy-policy-hero.webp',                   title: 'Privacy Policy' }] },
  { loc: 'https://www.fivestardatarecovery.com/terms',                                         lastmod: gitLastmod('pages/terms.vue'),                                              priority: 0.4, changefreq: 'yearly',  images: [{ loc: 'https://www.fivestardatarecovery.com/terms-and-conditions-hero.jpg',             title: 'Terms and Conditions' }] },
  // Service hub & delivery
  { loc: 'https://www.fivestardatarecovery.com/data-recovery',                                 lastmod: gitLastmod('pages/data-recovery/index.vue'),                                priority: 0.9, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/data-recovery-hard-drive-service-glendale-ca.jpg', title: 'Data Recovery Services' }] },
  { loc: 'https://www.fivestardatarecovery.com/expedited-service',                             lastmod: gitLastmod('pages/expedited-service.vue'),                                  priority: 0.8, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/expedited-service-hero.jpg',                 title: 'Expedited Data Recovery Service' }] },
  { loc: 'https://www.fivestardatarecovery.com/expedited-service-plus',                        lastmod: gitLastmod('pages/expedited-service-plus.vue'),                             priority: 0.8, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/expedited-service-plus-hero.jpg',            title: 'Expedited Service Plus' }] },
  { loc: 'https://www.fivestardatarecovery.com/data-recovery/data-recovery-mail-in-service',   lastmod: gitLastmod('pages/data-recovery/data-recovery-mail-in-service.vue'),       priority: 0.9, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/data-recovery-mail-in-service-los-angeles.jpg', title: 'Mail-In Data Recovery Service' }] },
  { loc: 'https://www.fivestardatarecovery.com/data-recovery/express-drop-off',                lastmod: gitLastmod('pages/data-recovery/express-drop-off.vue'),                    priority: 0.9, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/express-drop-off-data-recovery-glendale-ca.jpg', title: 'Express Drop-Off Data Recovery' }] },
  { loc: 'https://www.fivestardatarecovery.com/data-recovery/free-quote',                      lastmod: gitLastmod('pages/data-recovery/free-quote.vue'),                          priority: 0.9, changefreq: 'monthly' },
  { loc: 'https://www.fivestardatarecovery.com/data-recovery/clean-room',                      lastmod: gitLastmod('pages/data-recovery/clean-room.vue'),                          priority: 0.7, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/clean-room-data-recovery-equipment-glendale-ca.jpg', title: 'Clean Room Data Recovery' }] },
  // Device types
  { loc: 'https://www.fivestardatarecovery.com/data-recovery/hard-drive-recovery',             lastmod: gitLastmod('pages/data-recovery/hard-drive-recovery.vue'),                 priority: 0.9, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/hard-drive-recovery-hero.jpg',                 title: 'Hard Drive Data Recovery' }] },
  { loc: 'https://www.fivestardatarecovery.com/data-recovery/external-hard-drive',             lastmod: gitLastmod('pages/data-recovery/external-hard-drive.vue'),                 priority: 0.8, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/external-hard-drive-hero.jpg',                 title: 'External Hard Drive Recovery' }] },
  { loc: 'https://www.fivestardatarecovery.com/data-recovery/ssd-recovery',                    lastmod: gitLastmod('pages/data-recovery/ssd-recovery.vue'),                        priority: 0.8, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/ssd-data-recovery-hero.webp',                   title: 'SSD Data Recovery' }] },
  { loc: 'https://www.fivestardatarecovery.com/data-recovery/raid-recovery',                   lastmod: gitLastmod('pages/data-recovery/raid-recovery.vue'),                       priority: 0.8, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/raid-data-recovery-hero.webp',                  title: 'RAID Data Recovery' }] },
  { loc: 'https://www.fivestardatarecovery.com/data-recovery/nas-recovery',                    lastmod: gitLastmod('pages/data-recovery/nas-recovery.vue'),                        priority: 0.8, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/nas-data-recovery-hero.webp',                   title: 'NAS Data Recovery' }] },
  { loc: 'https://www.fivestardatarecovery.com/data-recovery/laptop-recovery',                 lastmod: gitLastmod('pages/data-recovery/laptop-recovery.vue'),                     priority: 0.8, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/laptop-recovery-hero.jpg',                     title: 'Laptop Data Recovery' }] },
  { loc: 'https://www.fivestardatarecovery.com/data-recovery/mac-recovery',                    lastmod: gitLastmod('pages/data-recovery/mac-recovery.vue'),                        priority: 0.8, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/mac-data-recovery-hero.webp',                   title: 'Mac Data Recovery' }] },
  { loc: 'https://www.fivestardatarecovery.com/data-recovery/desktop-recovery',                lastmod: gitLastmod('pages/data-recovery/desktop-recovery.vue'),                    priority: 0.7, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/desktop-data-recovery-hero.webp',               title: 'Desktop Computer Data Recovery' }] },
  { loc: 'https://www.fivestardatarecovery.com/data-recovery/iphone-recovery',                 lastmod: gitLastmod('pages/data-recovery/iphone-recovery.vue'),                     priority: 0.8, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/iphone-data-recovery-hero.webp',               title: 'iPhone Data Recovery' }] },
  { loc: 'https://www.fivestardatarecovery.com/data-recovery/usb-recovery',                    lastmod: gitLastmod('pages/data-recovery/usb-recovery.vue'),                        priority: 0.7, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/usb-data-recovery-hero.webp',                   title: 'USB Flash Drive Recovery' }] },
  { loc: 'https://www.fivestardatarecovery.com/data-recovery/sd-card-recovery',                lastmod: gitLastmod('pages/data-recovery/sd-card-recovery.vue'),                    priority: 0.7, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/sd-card-data-recovery-hero.webp',               title: 'SD Card Data Recovery' }] },
  { loc: 'https://www.fivestardatarecovery.com/data-recovery/cfast-recovery',                  lastmod: gitLastmod('pages/data-recovery/cfast-recovery.vue'),                      priority: 0.7, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/cfast-data-recovery-hero.webp',                 title: 'CFast Card Recovery' }] },
  { loc: 'https://www.fivestardatarecovery.com/data-recovery/video-file-repair',               lastmod: gitLastmod('pages/data-recovery/video-file-repair.vue'),                   priority: 0.7, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/video-file-repair-hero.webp',                   title: 'Video File Repair' }] },
  // Symptoms
  { loc: 'https://www.fivestardatarecovery.com/data-recovery/deleted-files',                   lastmod: gitLastmod('pages/data-recovery/deleted-files.vue'),                       priority: 0.8, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/deleted-file-recovery-hero.webp',              title: 'Deleted File Recovery' }] },
  { loc: 'https://www.fivestardatarecovery.com/data-recovery/bad-sectors',                     lastmod: gitLastmod('pages/data-recovery/bad-sectors.vue'),                         priority: 0.7, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/hard-drive-data-recovery-specialist-glendale-ca.jpg', title: 'Bad Sectors Recovery' }] },
  { loc: 'https://www.fivestardatarecovery.com/data-recovery/dropped-hard-drive',              lastmod: gitLastmod('pages/data-recovery/dropped-hard-drive.vue'),                  priority: 0.8, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/dropped-hard-drive-hero.webp',                 title: 'Dropped Hard Drive Recovery' }] },
  { loc: 'https://www.fivestardatarecovery.com/data-recovery/hard-drive-not-showing-up',       lastmod: gitLastmod('pages/data-recovery/hard-drive-not-showing-up.vue'),           priority: 0.8, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/hard-drive-not-showing-up-hero.webp',          title: 'Hard Drive Not Showing Up' }] },
  { loc: 'https://www.fivestardatarecovery.com/drive-doesnt-power-on',                         lastmod: gitLastmod('pages/drive-doesnt-power-on.vue'),                             priority: 0.8, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/drive-no-power-hero.webp',                     title: 'Drive Doesnt Power On' }] },
  { loc: 'https://www.fivestardatarecovery.com/hard-drive-clicking',                           lastmod: gitLastmod('pages/hard-drive-clicking.vue'),                               priority: 0.8, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/hard-drive-clicking-sound-data-recovery.webp',  title: 'Hard Drive Clicking Sound' }] },
  // Brands
  { loc: 'https://www.fivestardatarecovery.com/data-recovery/western-digital-recovery',        lastmod: gitLastmod('pages/data-recovery/western-digital-recovery.vue'),            priority: 0.7, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/western-digital-data-recovery-hero.webp',      title: 'Western Digital Recovery' }] },
  { loc: 'https://www.fivestardatarecovery.com/data-recovery/seagate-recovery',                lastmod: gitLastmod('pages/data-recovery/seagate-recovery.vue'),                    priority: 0.7, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/seagate-data-recovery-hero.webp',              title: 'Seagate Recovery' }] },
  { loc: 'https://www.fivestardatarecovery.com/data-recovery/toshiba-recovery',                lastmod: gitLastmod('pages/data-recovery/toshiba-recovery.vue'),                    priority: 0.7, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/toshiba-data-recovery-hero.webp',              title: 'Toshiba Recovery' }] },
  { loc: 'https://www.fivestardatarecovery.com/data-recovery/samsung-recovery',                lastmod: gitLastmod('pages/data-recovery/samsung-recovery.vue'),                    priority: 0.7, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/samsung-data-recovery-hero.webp',              title: 'Samsung Recovery' }] },
  { loc: 'https://www.fivestardatarecovery.com/data-recovery/hitachi-recovery',                lastmod: gitLastmod('pages/data-recovery/hitachi-recovery.vue'),                    priority: 0.7, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/hitachi-data-recovery-hero.webp',              title: 'Hitachi Recovery' }] },
  { loc: 'https://www.fivestardatarecovery.com/data-recovery/lacie-recovery',                  lastmod: gitLastmod('pages/data-recovery/lacie-recovery.vue'),                      priority: 0.7, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/lacie-data-recovery-hero.webp',                title: 'LaCie Recovery' }] },
  // Locations
  { loc: 'https://www.fivestardatarecovery.com/data-recovery-services-glendale-ca',            lastmod: gitLastmod('pages/data-recovery-services-glendale-ca.vue'),                priority: 0.9, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/data-recovery-glendale-ca.webp',              title: 'Data Recovery Glendale CA' }] },
  { loc: 'https://www.fivestardatarecovery.com/data-recovery-los-angeles',                     lastmod: gitLastmod('pages/data-recovery-los-angeles.vue'),                         priority: 0.9, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/data-recovery-los-angeles-ca.webp',           title: 'Data Recovery Los Angeles' }] },
  { loc: 'https://www.fivestardatarecovery.com/data-recovery-burbank',                         lastmod: gitLastmod('pages/data-recovery-burbank.vue'),                             priority: 0.8, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/data-recovery-burbank-ca.jpg',                title: 'Data Recovery Burbank CA' }] },
  { loc: 'https://www.fivestardatarecovery.com/data-recovery-beverly-hills',                   lastmod: gitLastmod('pages/data-recovery-beverly-hills.vue'),                       priority: 0.8, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/beverly-hills-hero.jpg',                      title: 'Data Recovery Beverly Hills' }] },
  { loc: 'https://www.fivestardatarecovery.com/data-recovery-hollywood',                       lastmod: gitLastmod('pages/data-recovery-hollywood.vue'),                           priority: 0.8, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/hollywood-hero.jpg',                          title: 'Data Recovery Hollywood' }] },
  { loc: 'https://www.fivestardatarecovery.com/data-recovery-pasadena',                        lastmod: gitLastmod('pages/data-recovery-pasadena.vue'),                            priority: 0.8, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/data-recovery-pasadena-ca.jpg',               title: 'Data Recovery Pasadena' }] },
  // Services
  { loc: 'https://www.fivestardatarecovery.com/services/hard-drive-recovery',                  lastmod: gitLastmod('pages/services/hard-drive-recovery.vue'),                      priority: 0.7, changefreq: 'monthly' },
  { loc: 'https://www.fivestardatarecovery.com/services/external-hdd-recovery',                lastmod: gitLastmod('pages/services/external-hdd-recovery.vue'),                    priority: 0.7, changefreq: 'monthly' },
  { loc: 'https://www.fivestardatarecovery.com/services/ssd-recovery',                         lastmod: gitLastmod('pages/services/ssd-recovery.vue'),                             priority: 0.7, changefreq: 'monthly' },
  { loc: 'https://www.fivestardatarecovery.com/services/raid-recovery',                        lastmod: gitLastmod('pages/services/raid-recovery.vue'),                            priority: 0.7, changefreq: 'monthly' },
  { loc: 'https://www.fivestardatarecovery.com/services/laptop-recovery',                      lastmod: gitLastmod('pages/services/laptop-recovery.vue'),                          priority: 0.7, changefreq: 'monthly' },
  { loc: 'https://www.fivestardatarecovery.com/services/mac-recovery',                         lastmod: gitLastmod('pages/services/mac-recovery.vue'),                             priority: 0.7, changefreq: 'monthly' },
  { loc: 'https://www.fivestardatarecovery.com/services/mobile-recovery',                      lastmod: gitLastmod('pages/services/mobile-recovery.vue'),                          priority: 0.7, changefreq: 'monthly' },
  { loc: 'https://www.fivestardatarecovery.com/services/usb-recovery',                         lastmod: gitLastmod('pages/services/usb-recovery.vue'),                             priority: 0.7, changefreq: 'monthly' },
]

export const POST_URLS: SitemapUrl[] = [
  { loc: 'https://www.fivestardatarecovery.com/blog/usb-data-recovery-chip-off',                                   lastmod: gitLastmod('pages/blog/usb-data-recovery-chip-off.vue'),                               priority: 0.7, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/blog-usb-chip-off.jpg',          title: 'USB Data Recovery Chip-Off Method' }] },
  { loc: 'https://www.fivestardatarecovery.com/blog/how-to-repair-external-hard-drive-after-it-was-dropped',       lastmod: gitLastmod('pages/blog/how-to-repair-external-hard-drive-after-it-was-dropped.vue'),   priority: 0.7, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/blog-dropped-hard-drive.jpg',    title: 'How to Repair External Hard Drive After Being Dropped' }] },
]

// ─── HTML renderer (Yoast-style) ───────────────────────────────────────────

function formatDate(iso: string): string {
  return iso ? iso.substring(0, 10) : ''
}

const CSS = `
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:14px;color:#333;background:#fff}
  #header{background:#0A0C14;border-bottom:3px solid #F5C842;padding:20px 32px;display:flex;align-items:center;gap:16px}
  #header img{height:38px;width:auto}
  #header-text h1{font-size:20px;font-weight:700;color:#F5C842;letter-spacing:-0.2px}
  #header-text p{font-size:12px;color:#94A3B8;margin-top:3px}
  #content{max-width:1080px;margin:0 auto;padding:28px 24px 60px}
  .info{background:#f8f9fa;border-left:4px solid #F5C842;border-radius:4px;padding:12px 16px;margin-bottom:24px;font-size:13px;color:#555;line-height:1.6}
  .info strong{color:#111}
  .info a{color:#c0392b;font-weight:600;text-decoration:none}
  .info a:hover{text-decoration:underline}
  table{width:100%;border-collapse:collapse;font-size:13px}
  thead tr{background:#f1f1f1;border-bottom:2px solid #ccc}
  thead th{padding:10px 14px;text-align:left;font-weight:700;font-size:12px;color:#333;text-transform:uppercase;letter-spacing:0.5px}
  tbody tr:nth-child(odd) td{background:#f7f7f7}
  tbody tr:hover td{background:#eaf4ff}
  td{padding:9px 14px;border-bottom:1px solid #eee;vertical-align:middle;word-break:break-all}
  td a{color:#2980b9;text-decoration:none}
  td a:visited{color:#8e44ad}
  td a:hover{text-decoration:underline;color:#c0392b}
  .badge{display:inline-block;background:#F5C842;color:#0A0C14;border-radius:3px;font-size:10px;font-weight:700;padding:2px 7px;margin-left:6px;vertical-align:middle;text-transform:uppercase;letter-spacing:0.4px}
  .col-img{width:80px;text-align:center;color:#666}
  .col-mod{width:130px;white-space:nowrap;color:#666}
  .col-pri{width:70px;text-align:center;color:#666}
  @media(max-width:600px){.col-pri{display:none}.col-img{width:50px}.col-mod{width:100px}td,th{padding:8px 10px}}
`

export function renderSitemapIndexHTML(buildDate: string): string {
  const rows = `
    <tr>
      <td><a href="https://www.fivestardatarecovery.com/page-sitemap.xml">https://www.fivestardatarecovery.com/page-sitemap.xml</a><span class="badge">pages</span></td>
      <td class="col-mod">${formatDate(buildDate)}</td>
    </tr>
    <tr>
      <td><a href="https://www.fivestardatarecovery.com/post-sitemap.xml">https://www.fivestardatarecovery.com/post-sitemap.xml</a><span class="badge">posts</span></td>
      <td class="col-mod">${formatDate(buildDate)}</td>
    </tr>`

  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>XML Sitemap Index — Five Star Data Recovery</title><style>${CSS}</style></head><body>
  <div id="header">
    <img src="/logo-wide.png" alt="Five Star Data Recovery">
    <div id="header-text"><h1>XML Sitemap Index</h1><p>fivestardatarecovery.com — ${formatDate(buildDate)}</p></div>
  </div>
  <div id="content">
    <div class="info">This is an XML Sitemap Index, listing <strong>2 sitemaps</strong> for consumption by search engines.<br>Learn more about XML sitemaps on <a href="https://sitemaps.org" target="_blank" rel="noopener">sitemaps.org</a>.</div>
    <table><thead><tr><th>Sitemap</th><th class="col-mod">Last Modified</th></tr></thead><tbody>${rows}</tbody></table>
  </div></body></html>`
}

export function renderUrlsetHTML(title: string, urls: SitemapUrl[], buildDate: string): string {
  const rows = urls.map(u => `
    <tr>
      <td><a href="${u.loc}">${u.loc}</a></td>
      <td class="col-img">${u.images?.length ?? 0}</td>
      <td class="col-mod">${formatDate(u.lastmod)}</td>
      <td class="col-pri">${u.priority}</td>
    </tr>`).join('')

  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title} — Five Star Data Recovery</title><style>${CSS}</style></head><body>
  <div id="header">
    <img src="/logo-wide.png" alt="Five Star Data Recovery">
    <div id="header-text"><h1>${title}</h1><p>fivestardatarecovery.com — ${formatDate(buildDate)}</p></div>
  </div>
  <div id="content">
    <div class="info">This XML Sitemap contains <strong>${urls.length} URLs</strong>. <a href="/sitemap_index.xml">← Back to Sitemap Index</a></div>
    <table><thead><tr><th>URL</th><th class="col-img">Images</th><th class="col-mod">Last Modified</th><th class="col-pri">Priority</th></tr></thead><tbody>${rows}</tbody></table>
  </div></body></html>`
}

// ─── XML renderer ───────────────────────────────────────────────────────────

export function renderSitemapIndexXML(buildDate: string): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://www.fivestardatarecovery.com/page-sitemap.xml</loc>
    <lastmod>${buildDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://www.fivestardatarecovery.com/post-sitemap.xml</loc>
    <lastmod>${buildDate}</lastmod>
  </sitemap>
</sitemapindex>`
}

export function renderUrlsetXML(urls: SitemapUrl[]): string {
  const entries = urls.map(u => {
    const imgs = (u.images || []).map(img =>
      `    <image:image>\n      <image:loc>${img.loc}</image:loc>\n      <image:title>${img.title}</image:title>\n    </image:image>`
    ).join('\n')
    return `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>${imgs ? '\n' + imgs : ''}
  </url>`
  }).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries}
</urlset>`
}
