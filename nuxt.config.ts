export default defineNuxtConfig({
  nitro: {
    preset: 'vercel'
  },
  routeRules: {
    // Mail-in service redirect (keep)
    '/data-recovery/mail-in-service':                       { redirect: { to: '/data-recovery/data-recovery-mail-in-service', statusCode: 301 } },
    '/data-recovery/mail-in-service/':                      { redirect: { to: '/data-recovery/data-recovery-mail-in-service', statusCode: 301 } },

    // Short testing URLs → canonical WordPress URLs (301 permanent redirects)
    '/data-recovery/laptop-recovery':                       { redirect: { to: '/data-recovery/laptop-data-recovery', statusCode: 301 } },
    '/data-recovery/laptop-recovery/':                      { redirect: { to: '/data-recovery/laptop-data-recovery', statusCode: 301 } },
    '/data-recovery/clean-room':                            { redirect: { to: '/data-recovery/clean-room-data-recovery', statusCode: 301 } },
    '/data-recovery/clean-room/':                           { redirect: { to: '/data-recovery/clean-room-data-recovery', statusCode: 301 } },
    '/data-recovery/iphone-recovery':                       { redirect: { to: '/data-recovery/iphone-data-recovery', statusCode: 301 } },
    '/data-recovery/iphone-recovery/':                      { redirect: { to: '/data-recovery/iphone-data-recovery', statusCode: 301 } },
    '/data-recovery/samsung-recovery':                      { redirect: { to: '/data-recovery/samsung-data-recovery', statusCode: 301 } },
    '/data-recovery/samsung-recovery/':                     { redirect: { to: '/data-recovery/samsung-data-recovery', statusCode: 301 } },
    '/data-recovery/desktop-recovery':                      { redirect: { to: '/data-recovery/desktop-data-recovery', statusCode: 301 } },
    '/data-recovery/desktop-recovery/':                     { redirect: { to: '/data-recovery/desktop-data-recovery', statusCode: 301 } },
    '/data-recovery/western-digital-recovery':              { redirect: { to: '/data-recovery/western-digital-data-recovery', statusCode: 301 } },
    '/data-recovery/western-digital-recovery/':             { redirect: { to: '/data-recovery/western-digital-data-recovery', statusCode: 301 } },
    '/data-recovery/sd-card-recovery':                      { redirect: { to: '/data-recovery/sd-card-data-recovery', statusCode: 301 } },
    '/data-recovery/sd-card-recovery/':                     { redirect: { to: '/data-recovery/sd-card-data-recovery', statusCode: 301 } },
    '/data-recovery/mac-recovery':                          { redirect: { to: '/data-recovery/mac-data-recovery', statusCode: 301 } },
    '/data-recovery/mac-recovery/':                         { redirect: { to: '/data-recovery/mac-data-recovery', statusCode: 301 } },
    '/data-recovery/seagate-recovery':                      { redirect: { to: '/data-recovery/seagate-data-recovery', statusCode: 301 } },
    '/data-recovery/seagate-recovery/':                     { redirect: { to: '/data-recovery/seagate-data-recovery', statusCode: 301 } },
    '/data-recovery/lacie-recovery':                        { redirect: { to: '/data-recovery/lacie-data-recovery', statusCode: 301 } },
    '/data-recovery/lacie-recovery/':                       { redirect: { to: '/data-recovery/lacie-data-recovery', statusCode: 301 } },
    '/data-recovery/toshiba-recovery':                      { redirect: { to: '/data-recovery/toshiba-data-recovery', statusCode: 301 } },
    '/data-recovery/toshiba-recovery/':                     { redirect: { to: '/data-recovery/toshiba-data-recovery', statusCode: 301 } },
    '/data-recovery/hitachi-recovery':                      { redirect: { to: '/data-recovery/hitachi-data-recovery', statusCode: 301 } },
    '/data-recovery/hitachi-recovery/':                     { redirect: { to: '/data-recovery/hitachi-data-recovery', statusCode: 301 } },
    '/data-recovery/nas-recovery':                          { redirect: { to: '/data-recovery/nas-data-recovery', statusCode: 301 } },
    '/data-recovery/nas-recovery/':                         { redirect: { to: '/data-recovery/nas-data-recovery', statusCode: 301 } },
    '/data-recovery/raid-recovery':                         { redirect: { to: '/data-recovery/raid-data-recovery', statusCode: 301 } },
    '/data-recovery/raid-recovery/':                        { redirect: { to: '/data-recovery/raid-data-recovery', statusCode: 301 } },
    '/data-recovery/external-hard-drive':                   { redirect: { to: '/data-recovery/external-hard-drive-data-recovery', statusCode: 301 } },
    '/data-recovery/external-hard-drive/':                  { redirect: { to: '/data-recovery/external-hard-drive-data-recovery', statusCode: 301 } },
    '/data-recovery/cfast-recovery':                        { redirect: { to: '/data-recovery/cfast-card-data-recovery', statusCode: 301 } },
    '/data-recovery/cfast-recovery/':                       { redirect: { to: '/data-recovery/cfast-card-data-recovery', statusCode: 301 } },
    '/data-recovery/ssd-recovery':                          { redirect: { to: '/data-recovery/ssd-data-recovery', statusCode: 301 } },
    '/data-recovery/ssd-recovery/':                         { redirect: { to: '/data-recovery/ssd-data-recovery', statusCode: 301 } },
    '/data-recovery/usb-recovery':                          { redirect: { to: '/data-recovery/usb-data-recovery', statusCode: 301 } },
    '/data-recovery/usb-recovery/':                         { redirect: { to: '/data-recovery/usb-data-recovery', statusCode: 301 } },
    '/data-recovery/free-quote':                            { redirect: { to: '/data-recovery/free-data-recovery-quote', statusCode: 301 } },
    '/data-recovery/free-quote/':                           { redirect: { to: '/data-recovery/free-data-recovery-quote', statusCode: 301 } },
    '/data-recovery/express-drop-off':                      { redirect: { to: '/data-recovery/express-drop-off-form', statusCode: 301 } },
    '/data-recovery/express-drop-off/':                     { redirect: { to: '/data-recovery/express-drop-off-form', statusCode: 301 } },

    // Root short pages → canonical WordPress URLs
    '/about':                                               { redirect: { to: '/about-us', statusCode: 301 } },
    '/about/':                                              { redirect: { to: '/about-us', statusCode: 301 } },
    '/contact':                                             { redirect: { to: '/contact-us', statusCode: 301 } },
    '/contact/':                                            { redirect: { to: '/contact-us', statusCode: 301 } },
    '/terms':                                               { redirect: { to: '/terms-and-conditions', statusCode: 301 } },
    '/terms/':                                              { redirect: { to: '/terms-and-conditions', statusCode: 301 } },
    '/pricing':                                             { redirect: { to: '/data-recovery-service-pricing', statusCode: 301 } },
    '/pricing/':                                            { redirect: { to: '/data-recovery-service-pricing', statusCode: 301 } },
    '/data-recovery-burbank':                               { redirect: { to: '/data-recovery-burbank-ca', statusCode: 301 } },
    '/data-recovery-burbank/':                              { redirect: { to: '/data-recovery-burbank-ca', statusCode: 301 } },
    '/data-recovery-pasadena':                              { redirect: { to: '/data-recovery-pasadena-ca', statusCode: 301 } },
    '/data-recovery-pasadena/':                             { redirect: { to: '/data-recovery-pasadena-ca', statusCode: 301 } },
    '/data-recovery-hollywood':                             { redirect: { to: '/data-recovery-hollywood-ca', statusCode: 301 } },
    '/data-recovery-hollywood/':                            { redirect: { to: '/data-recovery-hollywood-ca', statusCode: 301 } },

    // Old WP dropped-hard-drive-recovery slug
    '/data-recovery/dropped-hard-drive-recovery':           { redirect: { to: '/data-recovery/dropped-hard-drive', statusCode: 301 } },
    '/data-recovery/dropped-hard-drive-recovery/':          { redirect: { to: '/data-recovery/dropped-hard-drive', statusCode: 301 } },

    // hard-drive-clicking was under data-recovery on WP
    '/data-recovery/hard-drive-clicking':                   { redirect: { to: '/hard-drive-clicking', statusCode: 301 } },
    '/data-recovery/hard-drive-clicking/':                  { redirect: { to: '/hard-drive-clicking', statusCode: 301 } },

    // Express drop-off root redirect
    '/express-drop-off':                                    { redirect: { to: '/data-recovery/express-drop-off-form', statusCode: 301 } },
    '/express-drop-off/':                                   { redirect: { to: '/data-recovery/express-drop-off-form', statusCode: 301 } },

    // Blog posts (WordPress had them at root, new site has /blog/ prefix)
    '/usb-data-recovery-chip-off':                          { redirect: { to: '/blog/usb-data-recovery-chip-off', statusCode: 301 } },
    '/usb-data-recovery-chip-off/':                         { redirect: { to: '/blog/usb-data-recovery-chip-off', statusCode: 301 } },
    '/how-to-repair-external-hard-drive-after-it-was-dropped':  { redirect: { to: '/blog/how-to-repair-external-hard-drive-after-it-was-dropped', statusCode: 301 } },
    '/how-to-repair-external-hard-drive-after-it-was-dropped/': { redirect: { to: '/blog/how-to-repair-external-hard-drive-after-it-was-dropped', statusCode: 301 } },
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

  modules: ['@nuxt/content'],
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
      script: [
        {
          src: 'https://www.googletagmanager.com/gtm.js?id=GTM-P5MDDD7V',
          async: true
        }
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
