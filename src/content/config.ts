import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['consulting', 'development']),
    subcategory: z.enum([
      'digital-transform',
      'ai-marketing',
      'vibe-refactor',
      'outsourcing'
    ]),
    client: z.string(),
    period: z.string(),
    status: z.enum(['completed', 'in-progress', 'planned']),
    featured: z.boolean().default(false),
    thumbnail: z.string().optional(),
    tags: z.array(z.string()).default([]),
    metrics: z.array(z.object({
      label: z.string(),
      value: z.string()
    })).optional(),
    techStack: z.array(z.string()).optional(),
    summary: z.string(),
  })
});

export const collections = { projects };
