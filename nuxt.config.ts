export default defineNuxtConfig({
  nitro: {
    preset: 'vercel'
  },
  routeRules: {
    '/data-recovery/mail-in-service': { redirect: { to: '/data-recovery/data-recovery-mail-in-service', statusCode: 301 } },
    '/data-recovery/mail-in-service/': { redirect: { to: '/data-recovery/data-recovery-mail-in-service', statusCode: 301 } },
  },
  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY || '',
    fedexClientId: process.env.FEDEX_CLIENT_ID || '',
    fedexClientSecret: process.env.FEDEX_CLIENT_SECRET || '',
    fedexAccountNumber: process.env.FEDEX_ACCOUNT_NUMBER || '',
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
