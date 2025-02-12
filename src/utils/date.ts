import { getCollection } from 'astro:content'
import type { CollectionEntry } from 'astro:content'

export interface ProcessedEvent {
  slug: string
  url: string
  data: CollectionEntry<'event'>['data']
  tags?: string[]
  pubDate: Date
  place?: string
  description?: string
  beginDate?: Date
  endDate?: Date
  judge?: string
  problems?: [string, string][]
  explanation?: [string, string][]
}
const makeEvents = (events: any, urlbase: string): ProcessedEvent[] => {
  console.log('events')
  console.log(events[0].rendered)
  return events.map((event: any) => ({
    slug: event.slug,
    url: `/${urlbase}/${event.slug}/`,
    data: event.data,
    pubDate: new Date(event.data.pubDate), // 文字列を Date オブジェクトに変換
    tags: event.rendered.metadata.frontmatter.tags,
    place: event.data.place,
    description: event.data.description,
    beginDate: event.data.beginDate ? new Date(event.data.beginDate) : undefined,
    endDate: event.data.endDate ? new Date(event.data.endDate) : undefined,
    judge: event.data.judge,
    problems: event.data.problems,
    explanation: event.data.explanation
  }))
}

export const getAllEvents = async (): Promise<ProcessedEvent[]> => {
  const eventEvents: ProcessedEvent[] = makeEvents(await getCollection('event'), 'event')
  const processedEvents: ProcessedEvent[] = eventEvents
  console.log('eventEvents')
  console.log(processedEvents)

  const allEvents = processedEvents
    .filter((event) => !event.tags?.includes('ignorant'))
    .filter((event) => !event.tags?.includes('draft'))
    .filter((event) => !event.slug.includes('_'))
    .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime()) // 新しい順でソート
  return allEvents
}

export const getAlleventEvents = async (): Promise<ProcessedEvent[]> => {
  const events = makeEvents(await getCollection('event'), 'event')
  const allEvents = events
    .filter((event) => !event.tags?.includes('ignorant'))
    .filter((event) => !event.tags?.includes('draft'))
    .filter((event) => !event.slug.includes('_'))
    .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime()) // 新しい順でソート

  return allEvents
}
