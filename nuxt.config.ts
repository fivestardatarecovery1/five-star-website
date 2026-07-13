export default defineNuxtConfig({
  devServer: {
    port: 3002  // mc-backend owns 3001 — never conflict
  },
  nitro: {
    preset: 'vercel'
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

  modules: ['@nuxt/content', '~/modules/generate-sitemap-routes'],
  content: {
    highlight: {
      theme: 'github-dark'
    }
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      titleTemplate: '%s',
      title: 'Expert Data Recovery Services in Glendale, CA',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@fivestardata' },
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
        // Keeps 87.8 KiB off the critical path (LCP/FCP improvement)

      ],
      link: [
        { rel: 'sitemap', type: 'application/xml', href: '/sitemap_index.xml', title: 'Sitemap' },
        { rel: 'preconnect', href: 'https://www.googletagmanager.com', crossorigin: '' },
        { rel: 'preconnect', href: 'https://www.google-analytics.com', crossorigin: '' },
        { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' },
        { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon-180.png' },
        { rel: 'preload', as: 'image', href: '/data-recovery-clean-room-technician-glendale-ca.webp', fetchpriority: 'high' },
        // Hash changes only if @fontsource-variable package is updated
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/_nuxt/inter-latin-wght-normal.Dx4kXJAl.woff2', crossorigin: '' },
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/_nuxt/montserrat-latin-wght-normal.l_AIctKy.woff2', crossorigin: '' },
      ]
    }
  },
  css: [
    '~/assets/css/fonts.css',
    '~/assets/css/main.css',
  ]
})
