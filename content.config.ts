import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: "page",
      source: "blog/*.md",
      schema: z.object({
        date: z.date(),
        image: z.string().nonempty().editor({ input: "media" }),
      }),
    }),
    projects: defineCollection({
      type: "page",
      source: "projects/*.md",
      schema: z.object({
        date: z.date(),
        image: z.string().nonempty().editor({ input: "media" }),
      }),
    }),
    pages: defineCollection({
      type: "page",
      schema: z.object({
        date: z.date(),
      }),
    }),
  },
});
