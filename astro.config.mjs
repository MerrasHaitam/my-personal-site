import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import netlify from '@astrojs/netlify'; 

export default defineConfig({
  site: 'https://drk-onero.me',
  output: 'static', // 
  adapter: netlify(), 
  integrations: [
    react(),
    keystatic()
  ]
});