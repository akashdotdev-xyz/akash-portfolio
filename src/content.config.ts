import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/data/projects",
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),

    technologies: z.array(z.string()),

    featured: z.boolean().default(false),
    order: z.number(),

    githubUrl: z.string().optional(),
    liveUrl: z.string().optional(),
  }),
});

export const collections = {
  projects,
};