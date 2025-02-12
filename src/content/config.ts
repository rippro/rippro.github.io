import { z, defineCollection } from 'astro:content'

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    place: z.string().optional(),
    description: z.string().optional(),
    beginDate: z.date().optional(),
    endDate: z.date().optional(),
    judge: z.string().url().optional(),
    problems: z.array(z.tuple([z.string(), z.string().url()])).optional(),
    explanation: z.array(z.string()).optional()
  })
})

export const collections = {
  event: events
}
