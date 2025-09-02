import { defineCollection, z } from 'astro:content';

// Data collection for portfolio items - each item is a separate YAML file
const portfolio = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    content: z.string(),
    skills: z.array(z.object({
      name: z.string(),
      url: z.string(),
    })).optional(),
    link: z.object({
      url: z.string(),
      text: z.string(),
    }),
  })
});

export const collections = { portfolio };
