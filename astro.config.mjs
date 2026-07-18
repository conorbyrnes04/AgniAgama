import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static rebuild of agniagama.com (formerly Squarespace). Outputs pure static
// files to dist/ for free hosting on Cloudflare Pages / Netlify.
export default defineConfig({
  site: 'https://agniagama.com',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
