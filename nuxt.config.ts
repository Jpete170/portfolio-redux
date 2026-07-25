// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/content",
    "@nuxt/image",
    "nuxt-og-image",
    "motion-v/nuxt"
  ],
  icon: {
    clientBundle: {
      scan: true,
      sizeLimitKb: 512,
    }
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {}
    }
  },
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
  // content:{

  // }
});