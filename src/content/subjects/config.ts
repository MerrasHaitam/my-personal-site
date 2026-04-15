import { defineCollection, z } from 'astro:content';

const subjects = defineCollection({
  type: 'data', // <-- Changed to data
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

const categories = defineCollection({
  type: 'data', // <-- Changed to data
  schema: z.object({
    title: z.string(),
    parentSubject: z.string().optional(),
  }),
});

const articles = defineCollection({
  type: 'content', // <-- Left as content (since these are Markdown files)
  schema: z.object({
    title: z.string(),
    coverImage: z.string().optional(),
    parentCategory: z.string().optional(),
  }),
});

export const collections = { subjects, categories, articles };