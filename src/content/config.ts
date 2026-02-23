import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    client: z.string(),
    period: z.string(),
    status: z.enum(['completed', 'in-progress', 'planned']),
    featured: z.boolean().default(false),
    thumbnail: z.string().optional(),
    serviceType: z.enum([
      'web-development',
      'app-development',
      'data-ai',
      'automation',
      'consulting',
    ]),
    industry: z.enum([
      'fnb',
      'fintech',
      'healthcare',
      'education',
      'blockchain',
      'ecommerce',
      'saas',
      'government',
      'general',
    ]),
    techStack: z.array(z.string()).default([]),
    metrics: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
        })
      )
      .optional(),
  }),
});

export const collections = { projects };
