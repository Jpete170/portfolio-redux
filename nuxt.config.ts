// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/content",
    "@nuxt/image",
    "nuxt-og-image",
    "motion-v/nuxt",
  ],
  icon: {
    clientBundle: {
      scan: true,
      sizeLimitKb: 512,
    }
  },
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    public: {
      GITHUB_PROFILE: "",
      LINKEDIN_PROFILE: "",
      TWITTER_PROFILE: "",
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
      ignore: ['/pages',]
    }
  },
  vite:{
    plugins:[
      tailwindcss(),
    ]
  }
});