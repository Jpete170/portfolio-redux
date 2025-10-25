// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public:{
      GITHUB_PROFILE: "",
      LINKEDIN_PROFILE:""
  }
}
})