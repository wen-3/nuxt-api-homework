// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      API_URL: ''
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: [
    '@/assets/styles/all.scss',
  ],
})
