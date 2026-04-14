import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

export default defineConfig({
  site: 'https://drk-onero.me',
  integrations: [
    react(),
    keystatic()
  ]
});