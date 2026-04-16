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

// The subjects and categories blocks stay the same above this...

const articles = defineCollection({
  // Use the Astro 5 glob loader to find standard markdown
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    coverImage: z.string().optional(),
    parentCategory: z.string().optional(),
  }),
});

export const collections = { subjects, categories, articles };

