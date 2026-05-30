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
