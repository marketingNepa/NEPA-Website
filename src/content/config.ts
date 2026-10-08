import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tag: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string(),
    imageAlt: z.string(),
    author: z.string().default("NEPA Engineering"),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Keep these in sync with projectCategories in src/data/site.ts
    category: z.enum(["Residential", "Commercial", "Industrial", "Boarding House"]),
    location: z.string().default("NSW"),
    year: z.coerce.number().optional(),
    // Which NEPA disciplines were delivered on this project.
    services: z.array(z.string()).default([]),
    client: z.string().optional(),
    image: z.string(),
    imageAlt: z.string(),
    // Optional extra photos for the project gallery.
    gallery: z.array(z.object({ src: z.string(), alt: z.string() })).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
