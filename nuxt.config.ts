export default defineNuxtConfig({
  nitro: {
    preset: 'vercel'
  },
  routeRules: {
    // Blog URL rename — all old slugs → final canonical slug (301 permanent)
    '/blog/sony-venice-xcn-footage-recovery':          { redirect: { to: '/blog/sony-venice-x-ocn-video-file-repair-case-study', statusCode: 301 } },
    '/blog/sony-venice-xcn-footage-recovery/':         { redirect: { to: '/blog/sony-venice-x-ocn-video-file-repair-case-study', statusCode: 301 } },
    '/blog/sony-venice-x-ocn-file-repair-case-study':  { redirect: { to: '/blog/sony-venice-x-ocn-video-file-repair-case-study', statusCode: 301 } },
    '/blog/sony-venice-x-ocn-file-repair-case-study/': { redirect: { to: '/blog/sony-venice-x-ocn-video-file-repair-case-study', statusCode: 301 } },

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
    '/sitemap':                                             { redirect: { to: '/sitemap_index.xml', statusCode: 301 } },
    '/sitemap/':                                            { redirect: { to: '/sitemap_index.xml', statusCode: 301 } },
    '/sitemap.xml':                                         { redirect: { to: '/sitemap_index.xml', statusCode: 301 } },


    // Blog posts (WordPress had them at root, new site has /blog/ prefix)
    '/usb-data-recovery-chip-off':                          { redirect: { to: '/blog/usb-data-recovery-chip-off', statusCode: 301 } },
    '/usb-data-recovery-chip-off/':                         { redirect: { to: '/blog/usb-data-recovery-chip-off', statusCode: 301 } },
    '/how-to-repair-external-hard-drive-after-it-was-dropped':  { redirect: { to: '/blog/how-to-repair-external-hard-drive-after-it-was-dropped', statusCode: 301 } },
    '/how-to-repair-external-hard-drive-after-it-was-dropped/': { redirect: { to: '/blog/how-to-repair-external-hard-drive-after-it-was-dropped', statusCode: 301 } },
  },
  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY || '',
    resendAudienceId: process.env.RESEND_AUDIENCE_ID || '',
    fedexClientId: process.env.FEDEX_CLIENT_ID || '',
    fedexClientSecret: process.env.FEDEX_CLIENT_SECRET || '',
    fedexAccountNumber: process.env.FEDEX_ACCOUNT_NUMBER || '',
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY || '',
    anthropicApiKey: process.env.ANTHROPIC_API_KEY || '',
  },
  experimental: {
    // Inline per-component CSS into the HTML <head> instead of separate blocking <link> requests
    // Eliminates 6 render-blocking CSS files (~14 KiB) — saves ~450ms on mobile
    inlineSSRStyles: true,
  },

  modules: ['@nuxt/content', '~/modules/generate-sitemap-routes'],
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
        // GTM loaded lazily via plugins/gtm.client.ts after page is interactive
        // Keeps 87.8 KiB off the critical path (LCP/FCP improvement)
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon-180.png' },
        // Preload LCP hero background image
        { rel: 'preload', as: 'image', href: '/data-recovery-clean-room-technician-glendale-ca.jpg', fetchpriority: 'high' },
        // Preload self-hosted fonts — breaks the HTML → entry.css → woff2 chain
        // Hash changes only if @fontsource-variable package is updated
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/_nuxt/inter-latin-wght-normal.Dx4kXJAl.woff2', crossorigin: '' },
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/_nuxt/montserrat-latin-wght-normal.l_AIctKy.woff2', crossorigin: '' },
        // No external font requests — fonts are self-hosted via @fontsource (see css[])
      ]
    }
  },
  css: [
    // 2 variable font files instead of 9 static-weight files — latin subset only
    '~/assets/css/fonts.css',
    '~/assets/css/main.css',
  ]
})
