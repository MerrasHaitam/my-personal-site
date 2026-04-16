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
        title: fields.slug({ name: { label: 'Subject Name' } }),
        description: fields.text({ label: 'Short Description' }),
      },
    }),
    
    // 2. The Sub-Categories 
    categories: collection({
      label: '2. Categories',
      slugField: 'title',
      path: 'src/content/categories/*',
      schema: {
        title: fields.slug({ name: { label: 'Category Name' } }),
        parentSubject: fields.relationship({
          label: 'Which Subject does this belong to?',
          collection: 'subjects',
        }),
      },
    }),

    // 3. The Actual Posts
    articles: collection({
      label: '3. Articles',
      slugField: 'title',
      path: 'src/content/articles/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Article Title' } }),
        coverImage: fields.image({ 
          label: 'Preview Picture (Clickable)', 
          directory: 'public/images/articles', 
          publicPath: '/images/articles/' 
        }),
        parentCategory: fields.relationship({
          label: 'Which Category does this go in?',
          collection: 'categories',
        }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/content',
            publicPath: '/images/content/'
          },
        }),
      },
    }),
  },
});