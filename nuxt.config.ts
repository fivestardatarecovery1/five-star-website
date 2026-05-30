import { execSync } from 'child_process'

function gitLastmod(file: string): string {
  try {
    const ts = execSync(`git log -1 --format=%cI -- "${file}"`, { encoding: 'utf8' }).trim()
    return ts || new Date().toISOString()
  } catch {
    return new Date().toISOString()
  }
}

const BUILD_DATE = new Date().toISOString()

export default defineNuxtConfig({
  nitro: {
    preset: 'vercel'
  },
  routeRules: {
    // Mail-in rename
    '/data-recovery/mail-in-service':                       { redirect: { to: '/data-recovery/data-recovery-mail-in-service', statusCode: 301 } },
    '/data-recovery/mail-in-service/':                      { redirect: { to: '/data-recovery/data-recovery-mail-in-service', statusCode: 301 } },

    // WordPress URL → Nuxt URL mismatches (301 permanent redirects)
    '/about-us':                                            { redirect: { to: '/about', statusCode: 301 } },
    '/about-us/':                                           { redirect: { to: '/about', statusCode: 301 } },
    '/contact-us':                                          { redirect: { to: '/contact', statusCode: 301 } },
    '/contact-us/':                                         { redirect: { to: '/contact', statusCode: 301 } },
    '/terms-and-conditions':                                { redirect: { to: '/terms', statusCode: 301 } },
    '/terms-and-conditions/':                               { redirect: { to: '/terms', statusCode: 301 } },
    '/express-drop-off':                                    { redirect: { to: '/data-recovery/express-drop-off', statusCode: 301 } },
    '/express-drop-off/':                                   { redirect: { to: '/data-recovery/express-drop-off', statusCode: 301 } },
    '/data-recovery-burbank-ca':                            { redirect: { to: '/data-recovery-burbank', statusCode: 301 } },
    '/data-recovery-burbank-ca/':                           { redirect: { to: '/data-recovery-burbank', statusCode: 301 } },
    '/data-recovery-hollywood-ca':                          { redirect: { to: '/data-recovery-hollywood', statusCode: 301 } },
    '/data-recovery-hollywood-ca/':                         { redirect: { to: '/data-recovery-hollywood', statusCode: 301 } },
    '/data-recovery-pasadena-ca':                           { redirect: { to: '/data-recovery-pasadena', statusCode: 301 } },
    '/data-recovery-pasadena-ca/':                          { redirect: { to: '/data-recovery-pasadena', statusCode: 301 } },
    '/data-recovery-service-pricing':                       { redirect: { to: '/pricing', statusCode: 301 } },
    '/data-recovery-service-pricing/':                      { redirect: { to: '/pricing', statusCode: 301 } },
    '/data-recovery/cfast-data-recovery':                   { redirect: { to: '/data-recovery/cfast-recovery', statusCode: 301 } },
    '/data-recovery/cfast-data-recovery/':                  { redirect: { to: '/data-recovery/cfast-recovery', statusCode: 301 } },
    '/data-recovery/clean-room-data-recovery':              { redirect: { to: '/data-recovery/clean-room', statusCode: 301 } },
    '/data-recovery/clean-room-data-recovery/':             { redirect: { to: '/data-recovery/clean-room', statusCode: 301 } },
    '/data-recovery/desktop-data-recovery':                 { redirect: { to: '/data-recovery/desktop-recovery', statusCode: 301 } },
    '/data-recovery/desktop-data-recovery/':                { redirect: { to: '/data-recovery/desktop-recovery', statusCode: 301 } },
    '/data-recovery/dropped-hard-drive-recovery':           { redirect: { to: '/data-recovery/dropped-hard-drive', statusCode: 301 } },
    '/data-recovery/dropped-hard-drive-recovery/':          { redirect: { to: '/data-recovery/dropped-hard-drive', statusCode: 301 } },
    '/data-recovery/external-hard-drive-recovery':          { redirect: { to: '/data-recovery/external-hard-drive', statusCode: 301 } },
    '/data-recovery/external-hard-drive-recovery/':         { redirect: { to: '/data-recovery/external-hard-drive', statusCode: 301 } },
    '/data-recovery/free-data-recovery-quote':              { redirect: { to: '/data-recovery/free-quote', statusCode: 301 } },
    '/data-recovery/free-data-recovery-quote/':             { redirect: { to: '/data-recovery/free-quote', statusCode: 301 } },
    '/data-recovery/hard-drive-clicking':                   { redirect: { to: '/hard-drive-clicking', statusCode: 301 } },
    '/data-recovery/hard-drive-clicking/':                  { redirect: { to: '/hard-drive-clicking', statusCode: 301 } },
    '/data-recovery/hitachi-data-recovery':                 { redirect: { to: '/data-recovery/hitachi-recovery', statusCode: 301 } },
    '/data-recovery/hitachi-data-recovery/':                { redirect: { to: '/data-recovery/hitachi-recovery', statusCode: 301 } },
    '/data-recovery/iphone-data-recovery':                  { redirect: { to: '/data-recovery/iphone-recovery', statusCode: 301 } },
    '/data-recovery/iphone-data-recovery/':                 { redirect: { to: '/data-recovery/iphone-recovery', statusCode: 301 } },
    '/data-recovery/lacie-data-recovery':                   { redirect: { to: '/data-recovery/lacie-recovery', statusCode: 301 } },
    '/data-recovery/lacie-data-recovery/':                  { redirect: { to: '/data-recovery/lacie-recovery', statusCode: 301 } },
    '/data-recovery/laptop-data-recovery':                  { redirect: { to: '/data-recovery/laptop-recovery', statusCode: 301 } },
    '/data-recovery/laptop-data-recovery/':                 { redirect: { to: '/data-recovery/laptop-recovery', statusCode: 301 } },
    '/data-recovery/mac-data-recovery':                     { redirect: { to: '/data-recovery/mac-recovery', statusCode: 301 } },
    '/data-recovery/mac-data-recovery/':                    { redirect: { to: '/data-recovery/mac-recovery', statusCode: 301 } },
    '/data-recovery/nas-data-recovery':                     { redirect: { to: '/data-recovery/nas-recovery', statusCode: 301 } },
    '/data-recovery/nas-data-recovery/':                    { redirect: { to: '/data-recovery/nas-recovery', statusCode: 301 } },
    '/data-recovery/raid-data-recovery':                    { redirect: { to: '/data-recovery/raid-recovery', statusCode: 301 } },
    '/data-recovery/raid-data-recovery/':                   { redirect: { to: '/data-recovery/raid-recovery', statusCode: 301 } },
    '/data-recovery/samsung-data-recovery':                 { redirect: { to: '/data-recovery/samsung-recovery', statusCode: 301 } },
    '/data-recovery/samsung-data-recovery/':                { redirect: { to: '/data-recovery/samsung-recovery', statusCode: 301 } },
    '/data-recovery/seagate-data-recovery':                 { redirect: { to: '/data-recovery/seagate-recovery', statusCode: 301 } },
    '/data-recovery/seagate-data-recovery/':                { redirect: { to: '/data-recovery/seagate-recovery', statusCode: 301 } },
    '/data-recovery/ssd-data-recovery':                     { redirect: { to: '/data-recovery/ssd-recovery', statusCode: 301 } },
    '/data-recovery/ssd-data-recovery/':                    { redirect: { to: '/data-recovery/ssd-recovery', statusCode: 301 } },
    '/data-recovery/toshiba-data-recovery':                 { redirect: { to: '/data-recovery/toshiba-recovery', statusCode: 301 } },
    '/data-recovery/toshiba-data-recovery/':                { redirect: { to: '/data-recovery/toshiba-recovery', statusCode: 301 } },
    '/data-recovery/usb-data-recovery':                     { redirect: { to: '/data-recovery/usb-recovery', statusCode: 301 } },
    '/data-recovery/usb-data-recovery/':                    { redirect: { to: '/data-recovery/usb-recovery', statusCode: 301 } },
    '/data-recovery/western-digital-data-recovery':         { redirect: { to: '/data-recovery/western-digital-recovery', statusCode: 301 } },
    '/data-recovery/western-digital-data-recovery/':        { redirect: { to: '/data-recovery/western-digital-recovery', statusCode: 301 } },
  },
  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY || '',
    fedexClientId: process.env.FEDEX_CLIENT_ID || '',
    fedexClientSecret: process.env.FEDEX_CLIENT_SECRET || '',
    fedexAccountNumber: process.env.FEDEX_ACCOUNT_NUMBER || '',
  },
  // Site URL for sitemap module
  site: {
    url: 'https://www.fivestardatarecovery.com'
  },

  modules: ['@nuxt/content', '@nuxtjs/sitemap'],

  sitemap: {
    autoLastmod: true,
    xsl: false,
    sitemaps: {
      'page-sitemap': {
        exclude: ['/blog/**', '/appointments/**'],
        urls: [
          // Core
          { loc: '/',                                              lastmod: gitLastmod('pages/index.vue'),                                              priority: 1.0, changefreq: 'weekly',  images: [{ loc: 'https://www.fivestardatarecovery.com/data-recovery-hero.jpg',             title: 'Expert Data Recovery Services in Glendale CA' }] },
          { loc: '/about',                                         lastmod: gitLastmod('pages/about.vue'),                                              priority: 0.8, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/about-us-hero.webp',                title: 'About Five Star Data Recovery' }] },
          { loc: '/contact',                                       lastmod: gitLastmod('pages/contact.vue'),                                            priority: 0.9, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/contact-hero-bg.jpg',               title: 'Contact Five Star Data Recovery' }] },
          { loc: '/reviews',                                       lastmod: gitLastmod('pages/reviews.vue'),                                            priority: 0.8, changefreq: 'weekly',  images: [{ loc: 'https://www.fivestardatarecovery.com/reviews-hero-bg.jpg',               title: 'Customer Reviews' }] },
          { loc: '/faq',                                           lastmod: gitLastmod('pages/faq.vue'),                                                priority: 0.8, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/data-recovery-hard-drive-service-glendale-ca.jpg', title: 'Data Recovery FAQ' }] },
          { loc: '/pricing',                                       lastmod: gitLastmod('pages/pricing.vue'),                                            priority: 0.9, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/data-recovery-pricing-los-angeles.jpg', title: 'Data Recovery Pricing' }] },
          { loc: '/payment-plan',                                  lastmod: gitLastmod('pages/payment-plan.vue'),                                       priority: 0.8, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/data-recovery-payment-plan-financing.jpg', title: 'Data Recovery Payment Plan' }] },
          { loc: '/start-recovery',                                lastmod: gitLastmod('pages/start-recovery.vue'),                                     priority: 0.9, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/start-recovery-hero.webp',           title: 'Start Your Data Recovery' }] },
          { loc: '/instant-quote',                                 lastmod: gitLastmod('pages/instant-quote.vue'),                                      priority: 0.9, changefreq: 'monthly' },
          { loc: '/blog',                                          lastmod: gitLastmod('pages/blog/index.vue'),                                         priority: 0.7, changefreq: 'weekly',  images: [{ loc: 'https://www.fivestardatarecovery.com/blog-hero.jpg',                     title: 'Data Recovery Blog' }] },
          { loc: '/privacy-policy',                                lastmod: gitLastmod('pages/privacy-policy.vue'),                                     priority: 0.4, changefreq: 'yearly',  images: [{ loc: 'https://www.fivestardatarecovery.com/privacy-policy-hero.webp',          title: 'Privacy Policy' }] },
          { loc: '/terms',                                         lastmod: gitLastmod('pages/terms.vue'),                                              priority: 0.4, changefreq: 'yearly',  images: [{ loc: 'https://www.fivestardatarecovery.com/terms-and-conditions-hero.jpg',     title: 'Terms and Conditions' }] },
          // Service hub & delivery methods
          { loc: '/data-recovery',                                 lastmod: gitLastmod('pages/data-recovery/index.vue'),                                priority: 0.9, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/data-recovery-hard-drive-service-glendale-ca.jpg', title: 'Data Recovery Services' }] },
          { loc: '/expedited-service',                             lastmod: gitLastmod('pages/expedited-service.vue'),                                  priority: 0.8, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/expedited-service-hero.jpg',         title: 'Expedited Data Recovery Service' }] },
          { loc: '/expedited-service-plus',                        lastmod: gitLastmod('pages/expedited-service-plus.vue'),                             priority: 0.8, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/expedited-service-plus-hero.jpg',    title: 'Expedited Service Plus' }] },
          { loc: '/data-recovery/data-recovery-mail-in-service',   lastmod: gitLastmod('pages/data-recovery/data-recovery-mail-in-service.vue'),       priority: 0.9, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/data-recovery-mail-in-service-los-angeles.jpg', title: 'Mail-In Data Recovery Service' }] },
          { loc: '/data-recovery/express-drop-off',                lastmod: gitLastmod('pages/data-recovery/express-drop-off.vue'),                    priority: 0.9, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/express-drop-off-data-recovery-glendale-ca.jpg', title: 'Express Drop-Off Data Recovery' }] },
          { loc: '/data-recovery/free-quote',                      lastmod: gitLastmod('pages/data-recovery/free-quote.vue'),                          priority: 0.9, changefreq: 'monthly' },
          { loc: '/data-recovery/clean-room',                      lastmod: gitLastmod('pages/data-recovery/clean-room.vue'),                          priority: 0.7, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/clean-room-data-recovery-equipment-glendale-ca.jpg', title: 'Clean Room Data Recovery' }] },
          // Device types
          { loc: '/data-recovery/hard-drive-recovery',             lastmod: gitLastmod('pages/data-recovery/hard-drive-recovery.vue'),                  priority: 0.9, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/hard-drive-recovery-hero.jpg',           title: 'Hard Drive Data Recovery' }] },
          { loc: '/data-recovery/external-hard-drive',             lastmod: gitLastmod('pages/data-recovery/external-hard-drive.vue'),                  priority: 0.8, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/external-hard-drive-hero.jpg',           title: 'External Hard Drive Recovery' }] },
          { loc: '/data-recovery/ssd-recovery',                    lastmod: gitLastmod('pages/data-recovery/ssd-recovery.vue'),                        priority: 0.8, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/ssd-data-recovery-hero.webp',             title: 'SSD Data Recovery' }] },
          { loc: '/data-recovery/raid-recovery',                   lastmod: gitLastmod('pages/data-recovery/raid-recovery.vue'),                       priority: 0.8, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/raid-data-recovery-hero.webp',            title: 'RAID Data Recovery' }] },
          { loc: '/data-recovery/nas-recovery',                    lastmod: gitLastmod('pages/data-recovery/nas-recovery.vue'),                        priority: 0.8, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/nas-data-recovery-hero.webp',             title: 'NAS Data Recovery' }] },
          { loc: '/data-recovery/laptop-recovery',                 lastmod: gitLastmod('pages/data-recovery/laptop-recovery.vue'),                     priority: 0.8, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/laptop-recovery-hero.jpg',               title: 'Laptop Data Recovery' }] },
          { loc: '/data-recovery/mac-recovery',                    lastmod: gitLastmod('pages/data-recovery/mac-recovery.vue'),                        priority: 0.8, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/mac-data-recovery-hero.webp',             title: 'Mac Data Recovery' }] },
          { loc: '/data-recovery/desktop-recovery',                lastmod: gitLastmod('pages/data-recovery/desktop-recovery.vue'),                    priority: 0.7, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/desktop-data-recovery-hero.webp',         title: 'Desktop Computer Data Recovery' }] },
          { loc: '/data-recovery/iphone-recovery',                 lastmod: gitLastmod('pages/data-recovery/iphone-recovery.vue'),                     priority: 0.8, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/iphone-data-recovery-hero.webp',          title: 'iPhone Data Recovery' }] },
          { loc: '/data-recovery/usb-recovery',                    lastmod: gitLastmod('pages/data-recovery/usb-recovery.vue'),                        priority: 0.7, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/usb-data-recovery-hero.webp',             title: 'USB Flash Drive Recovery' }] },
          { loc: '/data-recovery/sd-card-recovery',                lastmod: gitLastmod('pages/data-recovery/sd-card-recovery.vue'),                    priority: 0.7, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/sd-card-data-recovery-hero.webp',         title: 'SD Card Data Recovery' }] },
          { loc: '/data-recovery/cfast-recovery',                  lastmod: gitLastmod('pages/data-recovery/cfast-recovery.vue'),                      priority: 0.7, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/cfast-data-recovery-hero.webp',           title: 'CFast Card Recovery' }] },
          { loc: '/data-recovery/video-file-repair',               lastmod: gitLastmod('pages/data-recovery/video-file-repair.vue'),                   priority: 0.7, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/video-file-repair-hero.webp',             title: 'Video File Repair' }] },
          // Symptoms
          { loc: '/data-recovery/deleted-files',                   lastmod: gitLastmod('pages/data-recovery/deleted-files.vue'),                       priority: 0.8, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/deleted-file-recovery-hero.webp',        title: 'Deleted File Recovery' }] },
          { loc: '/data-recovery/bad-sectors',                     lastmod: gitLastmod('pages/data-recovery/bad-sectors.vue'),                         priority: 0.7, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/hard-drive-data-recovery-specialist-glendale-ca.jpg', title: 'Bad Sectors Recovery' }] },
          { loc: '/data-recovery/dropped-hard-drive',              lastmod: gitLastmod('pages/data-recovery/dropped-hard-drive.vue'),                  priority: 0.8, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/dropped-hard-drive-hero.webp',           title: 'Dropped Hard Drive Recovery' }] },
          { loc: '/data-recovery/hard-drive-not-showing-up',       lastmod: gitLastmod('pages/data-recovery/hard-drive-not-showing-up.vue'),           priority: 0.8, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/hard-drive-not-showing-up-hero.webp',    title: 'Hard Drive Not Showing Up' }] },
          { loc: '/drive-doesnt-power-on',                         lastmod: gitLastmod('pages/drive-doesnt-power-on.vue'),                             priority: 0.8, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/drive-no-power-hero.webp',               title: 'Drive Doesnt Power On' }] },
          { loc: '/hard-drive-clicking',                           lastmod: gitLastmod('pages/hard-drive-clicking.vue'),                               priority: 0.8, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/hard-drive-clicking-sound-data-recovery.webp', title: 'Hard Drive Clicking Sound' }] },
          // Brands
          { loc: '/data-recovery/western-digital-recovery',        lastmod: gitLastmod('pages/data-recovery/western-digital-recovery.vue'),            priority: 0.7, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/western-digital-data-recovery-hero.webp',  title: 'Western Digital Recovery' }] },
          { loc: '/data-recovery/seagate-recovery',                lastmod: gitLastmod('pages/data-recovery/seagate-recovery.vue'),                    priority: 0.7, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/seagate-data-recovery-hero.webp',          title: 'Seagate Recovery' }] },
          { loc: '/data-recovery/toshiba-recovery',                lastmod: gitLastmod('pages/data-recovery/toshiba-recovery.vue'),                    priority: 0.7, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/toshiba-data-recovery-hero.webp',          title: 'Toshiba Recovery' }] },
          { loc: '/data-recovery/samsung-recovery',                lastmod: gitLastmod('pages/data-recovery/samsung-recovery.vue'),                    priority: 0.7, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/samsung-data-recovery-hero.webp',          title: 'Samsung Recovery' }] },
          { loc: '/data-recovery/hitachi-recovery',                lastmod: gitLastmod('pages/data-recovery/hitachi-recovery.vue'),                    priority: 0.7, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/hitachi-data-recovery-hero.webp',          title: 'Hitachi Recovery' }] },
          { loc: '/data-recovery/lacie-recovery',                  lastmod: gitLastmod('pages/data-recovery/lacie-recovery.vue'),                      priority: 0.7, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/lacie-data-recovery-hero.webp',            title: 'LaCie Recovery' }] },
          // Locations
          { loc: '/data-recovery-services-glendale-ca',            lastmod: gitLastmod('pages/data-recovery-services-glendale-ca.vue'),                priority: 0.9, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/data-recovery-glendale-ca.webp',          title: 'Data Recovery Glendale CA' }] },
          { loc: '/data-recovery-los-angeles',                     lastmod: gitLastmod('pages/data-recovery-los-angeles.vue'),                         priority: 0.9, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/data-recovery-los-angeles-ca.webp',       title: 'Data Recovery Los Angeles' }] },
          { loc: '/data-recovery-burbank',                         lastmod: gitLastmod('pages/data-recovery-burbank.vue'),                             priority: 0.8, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/data-recovery-burbank-ca.jpg',            title: 'Data Recovery Burbank CA' }] },
          { loc: '/data-recovery-beverly-hills',                   lastmod: gitLastmod('pages/data-recovery-beverly-hills.vue'),                       priority: 0.8, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/beverly-hills-hero.jpg',                  title: 'Data Recovery Beverly Hills' }] },
          { loc: '/data-recovery-hollywood',                       lastmod: gitLastmod('pages/data-recovery-hollywood.vue'),                           priority: 0.8, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/hollywood-hero.jpg',                      title: 'Data Recovery Hollywood' }] },
          { loc: '/data-recovery-pasadena',                        lastmod: gitLastmod('pages/data-recovery-pasadena.vue'),                            priority: 0.8, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/data-recovery-pasadena-ca.jpg',           title: 'Data Recovery Pasadena' }] },
          // Services section
          { loc: '/services/hard-drive-recovery',                  lastmod: gitLastmod('pages/services/hard-drive-recovery.vue'),                      priority: 0.7, changefreq: 'monthly' },
          { loc: '/services/external-hdd-recovery',                lastmod: gitLastmod('pages/services/external-hdd-recovery.vue'),                    priority: 0.7, changefreq: 'monthly' },
          { loc: '/services/ssd-recovery',                         lastmod: gitLastmod('pages/services/ssd-recovery.vue'),                             priority: 0.7, changefreq: 'monthly' },
          { loc: '/services/raid-recovery',                        lastmod: gitLastmod('pages/services/raid-recovery.vue'),                            priority: 0.7, changefreq: 'monthly' },
          { loc: '/services/laptop-recovery',                      lastmod: gitLastmod('pages/services/laptop-recovery.vue'),                          priority: 0.7, changefreq: 'monthly' },
          { loc: '/services/mac-recovery',                         lastmod: gitLastmod('pages/services/mac-recovery.vue'),                             priority: 0.7, changefreq: 'monthly' },
          { loc: '/services/mobile-recovery',                      lastmod: gitLastmod('pages/services/mobile-recovery.vue'),                          priority: 0.7, changefreq: 'monthly' },
          { loc: '/services/usb-recovery',                         lastmod: gitLastmod('pages/services/usb-recovery.vue'),                             priority: 0.7, changefreq: 'monthly' },
        ]
      },
      'post-sitemap': {
        include: ['/blog/**'],
        urls: [
          { loc: '/blog/usb-data-recovery-chip-off',                                    lastmod: gitLastmod('pages/blog/usb-data-recovery-chip-off.vue'),                          priority: 0.7, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/blog-usb-chip-off.jpg',       title: 'USB Data Recovery Chip-Off Method' }] },
          { loc: '/blog/how-to-repair-external-hard-drive-after-it-was-dropped',        lastmod: gitLastmod('pages/blog/how-to-repair-external-hard-drive-after-it-was-dropped.vue'), priority: 0.7, changefreq: 'monthly', images: [{ loc: 'https://www.fivestardatarecovery.com/blog-dropped-hard-drive.jpg', title: 'How to Repair External Hard Drive After Being Dropped' }] },
        ]
      }
    }
  },

  content: {
    highlight: {
      theme: 'github-dark'
    }
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      titleTemplate: '%s | Five Star Data Recovery',
      title: 'Expert Data Recovery Services in Glendale, CA',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Five Star Data Recovery — Professional hard drive, SSD, RAID, and mobile data recovery services in Glendale, CA. No data, no charge. Free evaluation. Call 323-672-3000.'
        },
        { property: 'og:title', content: 'Five Star Data Recovery' },
        { property: 'og:description', content: 'Expert data recovery for hard drives, SSDs, RAID systems, and mobile devices. Glendale, CA. No data = no charge.' },
        { property: 'og:type', content: 'website' },
        { name: 'theme-color', content: '#0A0C14' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@600;700;800;900&display=swap'
        }
      ]
    }
  },
  css: ['~/assets/css/main.css']
})
