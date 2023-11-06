// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  modules: [
    '@pinia/nuxt',
    'nuxt-vitest',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'Fira+Code': [400, 600]
        }
      }
    ]
  ]
});
