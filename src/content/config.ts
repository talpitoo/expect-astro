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
    github: z.object({
      url: z.string(),
    }).optional(),
    // New fields for sorting and filtering
    date: z.date(),                                          // For chronological sorting
    featured: z.boolean().default(false),                    // Highlight important items
    tags: z.array(z.string()).default([]),                   // Categories/technologies (can mirror skills)
    status: z.enum(['published', 'draft']).default('published'), // Visibility control
  })
});

export const collections = { portfolio };
