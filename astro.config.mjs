// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://vibecraft2204.github.io',
  base: '/vibecraft-web',
  integrations: [sitemap()],
});
