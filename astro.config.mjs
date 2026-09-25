import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static rebuild of agniagama.com (formerly Squarespace). Outputs pure static
// files to dist/ for free hosting on Cloudflare Workers / Pages.
//
// Four languages. English stays unprefixed (so every original URL still works),
// the others live under /fr/, /de/ and /pt/ — see src/i18n/config.ts.
export default defineConfig({
  site: 'https://agniagama.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'de', { path: 'pt', codes: ['pt-BR', 'pt'] }],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', fr: 'fr', de: 'de', pt: 'pt-BR' },
      },
    }),
  ],
  build: {
    format: 'directory',
  },
});
