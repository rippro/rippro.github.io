import { z, defineCollection } from 'astro:content'

const events = defineCollection({
  type: 'event',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    beginDate: z.date(),
    endDate: z.date(),
    judge: z.string().url()
  })
})

export const collections = {
  event: events
}
