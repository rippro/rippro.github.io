import 'server-only';

import fs from 'fs';
import matter from 'gray-matter';
import { marked } from 'marked';
import path from 'path';

const EVENTS_DIR = path.join(process.cwd(), 'data', 'events');

type EventDate = {
  begin: string;
  end?: string;
};

export type EventMdxData = {
  id: string;
  title: string;
  date: EventDate;
  contentHtml: string;
  raw: string;
};

export type EventSummary = {
  id: string;
  title: string;
  detail: string;
};

function dateToTimestamp(dateText: string): number {
  const parts = dateText.split('/').map((part) => Number(part));

  if (parts.length !== 3 || parts.some((part) => Number.isNaN(part))) {
    return 0;
  }

  const [year, month, day] = parts;
  return Date.UTC(year, month - 1, day);
}

function resolveEventAssetPath(contestId: string, assetPath: string): string {
  if (!assetPath || assetPath.startsWith('http') || assetPath.startsWith('/') || assetPath.startsWith('data:')) {
    return assetPath;
  }
  return `/static/contestData/${contestId}/${assetPath}`;
}

function getMdxFiles(): string[] {
  if (!fs.existsSync(EVENTS_DIR)) {
    return [];
  }
  return fs
    .readdirSync(EVENTS_DIR)
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
    .sort();
}

function resolveImagePathsInHtml(html: string, contestId: string): string {
  return html.replace(/src="(?!(?:https?:\/\/|\/|data:))([^"]+)"/g, (_match, imagePath) => {
    return `src="${resolveEventAssetPath(contestId, imagePath)}"`;
  });
}

function parseEventFrontmatter(frontmatter: Record<string, unknown>): Pick<EventMdxData, 'id' | 'title' | 'date'> {
  const date =
    frontmatter.date && typeof frontmatter.date === 'object'
      ? (frontmatter.date as { begin?: unknown; end?: unknown })
      : undefined;

  return {
    id: String(frontmatter.id ?? ''),
    title: String(frontmatter.title ?? ''),
    date: {
      begin: String(date?.begin ?? ''),
      ...(date?.end ? { end: String(date.end) } : {})
    }
  };
}

export function getAllEventsFromMdx(): EventMdxData[] {
  const files = getMdxFiles();

  return files
    .map((file) => {
      const fullPath = path.join(EVENTS_DIR, file);
      const raw = fs.readFileSync(fullPath, 'utf-8');
      const { data, content } = matter(raw);
      const rawContent = String(content ?? '');
      const withoutScripts = rawContent.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '');
      const eventData = parseEventFrontmatter(data);
      const contentHtml = marked.parse(withoutScripts);

      return {
        ...eventData,
        contentHtml: resolveImagePathsInHtml(String(contentHtml), eventData.id),
        raw
      };
    })
    .filter((item) => item.id && item.title);
}

export function getEventById(id: string): EventMdxData | null {
  const events = getAllEventsFromMdx();
  return events.find((event) => event.id === id) ?? null;
}

export function getEventSummaries(): EventSummary[] {
  return getAllEventsFromMdx()
    .sort((a, b) => dateToTimestamp(b.date.begin) - dateToTimestamp(a.date.begin))
    .map((event) => {
      const date = event.date.begin && event.date.end ? `${event.date.begin} - ${event.date.end}` : event.date.begin;
      const detail = `${date} に開催されたイベントです．`;

      return {
        id: event.id,
        title: event.title,
        detail
      };
    });
}
