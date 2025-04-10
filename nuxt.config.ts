// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['~/public/main.css'],
  devtools: { enabled: true },
  ssr: true,

  runtimeConfig: {
      public: {
          cosmicBucketSlug: process.env.COSMIC_BUCKET_SLUG,
          cosmicReadKey: process.env.COSMIC_READ_KEY,
          cosmicWriteKey: process.env.COSMIC_WRITE_KEY,
      }
  },

  nitro: {
      preset: 'vercel'
  },

  compatibilityDate: '2025-04-01'
})