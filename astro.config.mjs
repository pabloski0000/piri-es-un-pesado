import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://pabloski0000.github.io/portfolio.github.io/',
  integrations: [mdx(), sitemap(), tailwind()],
  outDir: 'docs',
  base: "/portfolio.github.io/"
});