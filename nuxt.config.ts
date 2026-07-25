// https://nuxt.com/docs/api/configuration/nuxt-config
// import tailwindcss from "@tailwindcss/vite"
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  future:{
    compatibilityVersion: 4
  },
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
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
  css: [
    "~/assets/css/main.css"
  ],
  runtimeConfig: {
    public: {
      GITHUB_PROFILE: "",
      LINKEDIN_PROFILE: "",
      TWITTER_PROFILE: "",
    },
  },
  nitro: {
    prerender: {
      crawlLinks: false,
      // failOnError: false,
      ignore: ['/__nuxt_content/pages/sql_dump.txt',]
    }
  },
  // vite:{
  //   plugins:[
  //     tailwindcss(),
  //   ],
  //   build:{
  //     cssCodeSplit: false
  //   }
  // }
});