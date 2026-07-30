import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const timeline = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/timeline" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    organization: z.string(),
    type: z.enum(["work", "project", "research", "education"]),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    location: z.string().optional(),
    image: image().optional(),
    imageAlt: z.string().optional(),
    links: z
      .array(z.object({ label: z.string(), href: z.url() }))
      .optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { timeline };
