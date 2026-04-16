import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const subjects = defineCollection({
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

// Switch this back to Astro's native Markdown engine
const articles = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
    coverImage: z.string().optional(),
    parentCategory: z.string().optional(),
  }),
});

export const collections = { subjects, categories, articles };