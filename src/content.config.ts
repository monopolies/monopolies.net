import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const companies = defineCollection({
  loader: file("src/data/companies.json"),
  schema: z.object({
      id: z.string(),
      name: z.string(),
      big_tech: z.boolean().default(false),
      description: z.string().optional(),
      service: z.string(),
      parent: z.string(),
      acquisition_date: z.string().optional(),
      relationship: z.string().optional(),
      influence_zone: z.number(),
      location: z.string().optional(),
    }),
});

export const collections = { companies };
