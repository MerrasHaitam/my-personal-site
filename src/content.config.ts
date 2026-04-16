import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const subjects = defineCollection({
  // The glob loader specifically hunts down data files
  loader: glob({ pattern: "**/*.{yaml,yml,json}", base: "./src/content/subjects" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

const categories = defineCollection({
  loader: glob({ pattern: "**/*.{yaml,yml,json}", base: "./src/content/categories" }),
  schema: z.object({
    title: z.string(),
    parentSubject: z.string().optional(),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx,mdoc}", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    coverImage: z.string().optional(),
    parentCategory: z.string().optional(),
  }),
});