import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel'; // <--- Removed the /serverless part

import markdoc from '@astrojs/markdoc';

export default defineConfig({
  site: 'https://drk-onero.me',
  output: 'static', 
  adapter: vercel(), 
  integrations: [react(), keystatic(), markdoc()]
});