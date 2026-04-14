import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import netlify from '@astrojs/netlify'; // <-- We added this

export default defineConfig({
  site: 'https://drk-onero.me',
  adapter: netlify(), // <-- And this
  integrations: [
    react(),
    keystatic()
  ]
});