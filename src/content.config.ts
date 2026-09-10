import { defineCollection, z } from "astro:content";

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.enum(["live", "building", "exploring"]).default("building"),
    stack: z.array(z.string()).default([]),
    year: z.string(),
    featured: z.boolean().default(false),
    links: z
      .object({
        repo: z.string().url().optional(),
        demo: z.string().url().optional(),
      })
      .optional(),
  }),
});

export const collections = {
  projects: projectCollection,
};
