import { getCollection } from 'astro:content'
import rss from '@astrojs/rss'
import type { APIContext } from 'astro'

export async function GET(context: APIContext) {
  const blog = await getCollection('event')
  return rss({
    title: 'RiPProイベント記',
    description: 'RipProの開催したイベント・コンテストの開催記・解説です。',
    site: context.site ?? 'https://rippro.github.io',
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `//${post.slug}/`
    }))
  })
}
