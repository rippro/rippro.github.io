import { getCollection } from 'astro:content'
import type { CollectionEntry } from 'astro:content'

export interface ProcessedPost {
  slug: string
  url: string
  data: CollectionEntry<'event'>['data']
  pubDate: Date
}
const makePosts = (posts: any, urlbase: string): ProcessedPost[] => {
  return posts.map((post: any) => ({
    slug: post.slug,
    url: `/${urlbase}/${post.slug}/`,
    data: post.data,
    pubDate: new Date(post.data.pubDate) // 文字列を Date オブジェクトに変換
  }))
}

export const getAllPosts = async (): Promise<ProcessedPost[]> => {
  const eventPosts: ProcessedPost[] = makePosts(await getCollection('event'), 'blog')
  const processedPosts: ProcessedPost[] = eventPosts

  const allPosts = processedPosts
    .filter((post) => !post.slug.includes('_'))
    .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime()) // 新しい順でソート
  return allPosts
}

export const getAlleventPosts = async (): Promise<ProcessedPost[]> => {
  const posts = makePosts(await getCollection('event'), 'event')
  const allPosts = posts
    .filter((post) => !post.slug.includes('_'))
    .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime()) // 新しい順でソート

  return allPosts
}
