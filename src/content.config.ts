import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const subjects = defineCollection({
  loader: glob({ pattern: "**/*.{yaml,yml,json}", base: "./src/content/subjects" }),
  schema: z.object({
    title: z.string(),
    title_en: z.string().optional(),
    description_en: z.string().optional(),
    title_ar: z.string().optional(),
    description_ar: z.string().optional(),
    title_fr: z.string().optional(),
    description_fr: z.string().optional(),
  }),
});

const categories = defineCollection({
  loader: glob({ pattern: "**/*.{yaml,yml,json}", base: "./src/content/categories" }),
  schema: z.object({
    title: z.string(),
    parentSubject: z.string().optional(),
    title_en: z.string().optional(),
    title_ar: z.string().optional(),
    title_fr: z.string().optional(),
  }),
});

// The subjects and categories blocks stay the same above this...

const articles = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx,mdoc}", base: "./src/content/articles" }),
  schema: z.object({
    // We add .optional() here so the secondary language files don't trigger the alarm
    title: z.string().optional(), 
    coverImage: z.string().optional(),
    parentCategory: z.string().optional(),
    
    // The translated titles (which live in the main index.mdoc file)
    title_en: z.string().optional(),
    title_ar: z.string().optional(),
    title_fr: z.string().optional(),
  }),
});

export const collections = { subjects, categories, articles };

