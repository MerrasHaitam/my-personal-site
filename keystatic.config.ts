import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'MerrasHaitam/my-personal-site', // Make sure this matches your repo exactly
  },
  collections: {
    
    // 1. The Main Subjects (Math, Tech, History)
    subjects: collection({
      label: '1. Subjects',
      slugField: 'title',
      path: 'src/content/subjects/*',
      schema: {
        title: fields.slug({ name: { label: 'Internal Subject ID (Keep this English/Simple)' } }),
        
        // --- ENGLISH ---
        title_en: fields.text({ label: 'English Title' }),
        description_en: fields.text({ label: 'English Description' }),

        // --- ARABIC ---
        title_ar: fields.text({ label: 'Arabic Title' }),
        description_ar: fields.text({ label: 'Arabic Description' }),

        // --- FRENCH ---
        title_fr: fields.text({ label: 'French Title' }),
        description_fr: fields.text({ label: 'French Description' }),
      },
    }),
    
    // 2. The Sub-Categories 
    categories: collection({
      label: '2. Categories',
      slugField: 'title',
      path: 'src/content/categories/*',
      schema: {
        title: fields.slug({ name: { label: 'Internal Category ID (Keep this English/Simple)' } }),
        parentSubject: fields.relationship({
          label: 'Which Subject does this belong to?',
          collection: 'subjects',
        }),
        
        // --- ENGLISH ---
        title_en: fields.text({ label: 'English Title' }),

        // --- ARABIC ---
        title_ar: fields.text({ label: 'Arabic Title' }),

        // --- FRENCH ---
        title_fr: fields.text({ label: 'French Title' }),
      },
    }),

    // 3. The Actual Posts
    articles: collection({
      label: '3. Articles',
      slugField: 'title', // This is just the internal database ID now
      path: 'src/content/articles/*',
      format: { contentField: 'content_en' }, // Default fallback
      extension: 'mdoc',
      schema: {
        title: fields.slug({ name: { label: 'Internal Article ID (Keep this English/Simple)' } }),
        coverImage: fields.image({ 
          label: 'Preview Picture', 
          directory: 'public/images/articles', 
          publicPath: '/images/articles/' 
        }),
        parentCategory: fields.relationship({
          label: 'Which Category does this go in?',
          collection: 'categories',
        }),
        
        // --- ENGLISH SECTION ---
        title_en: fields.text({ label: 'English Title' }),
        content_en: fields.document({ label: 'English Content', formatting: true, dividers: true, links: true }),

        // --- ARABIC SECTION ---
        title_ar: fields.text({ label: 'Arabic Title' }),
        content_ar: fields.document({ label: 'Arabic Content', formatting: true, dividers: true, links: true }),

        // --- FRENCH SECTION ---
        title_fr: fields.text({ label: 'French Title' }),
        content_fr: fields.document({ label: 'French Content', formatting: true, dividers: true, links: true }),
      },
    }),

  },
});