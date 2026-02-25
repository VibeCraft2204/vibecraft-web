import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    summary: z.string(),
    company: z.string().default(''),
    field: z.array(z.string()).default([]),
    tech: z.array(z.string()).default([]),
    team: z.array(z.string()).default([]),
    period_start: z
      .union([z.string(), z.date()])
      .transform((val) =>
        val instanceof Date ? val.toISOString().split('T')[0] : val
      )
      .optional(),
    period_end: z
      .union([z.string(), z.date()])
      .transform((val) =>
        val instanceof Date ? val.toISOString().split('T')[0] : val
      )
      .optional(),
    cover: image().optional(),
    gallery: z.array(z.string()).default([]),
    metrics: z.array(z.object({
      label: z.string(),
      value: z.string(),
      description: z.string().optional(),
    })).default([]),
    notion_id: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects };
