import { config, fields, collection } from '@keystatic/core';

export default config({
  // This automatically switches between Local mode and GitHub Live mode
  storage: process.env.NODE_ENV === 'development' 
    ? { kind: 'local' } 
    : { kind: 'github', repo: 'MerrasHaitam/my-personal-site' },
  
  collections: {
    math: collection({
      label: 'Math Articles',
      slugField: 'title',
      path: 'src/content/math/*/',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        category: fields.select({
          label: 'Category',
          description: 'Which folder does this belong in?',
          options: [
            { label: 'Geometry', value: 'geometry' },
            { label: 'Algebra', value: 'algebra' },
            { label: 'Calculus', value: 'calculus' },
            { label: 'History', value: 'history' }
          ],
          defaultValue: 'geometry',
        }),
        content: fields.markdoc({ label: 'Article Content' }),
      },
    }),
    tech: collection({
      label: 'Tech Articles',
      slugField: 'title',
      path: 'src/content/tech/*/',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({ label: 'Article Content' }),
      },
    }),
  },
});