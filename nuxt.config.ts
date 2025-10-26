// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/icon",
    "@nuxt/ui",
    "@nuxt/content",
    // "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "nuxt-og-image",
    "motion-v/nuxt"
  ],
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    public: {
      GITHUB_PROFILE: "",
      LINKEDIN_PROFILE: "",
    },
  },
  // content:{
    
  // }
});