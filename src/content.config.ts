import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    readTime: z.string(),
    intro: z.string().optional(),
    cover: image().optional(),
    coverAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    summary: z.string(),
    number: z.string(),
    status: z.string(),
    year: z.string(),
    stack: z.array(z.string()),
    accent: z.enum(['orange', 'teal', 'red']).default('orange'),
    order: z.number().default(999),
    repository: z.url().optional(),
    cover: image().optional(),
    coverAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { notes, projects };
