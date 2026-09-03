import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isUserSite = repository?.endsWith('.github.io');

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://your-name.github.io',
  base: repository && !isUserSite ? `/${repository}` : '/',
  output: 'static',
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  },
});
