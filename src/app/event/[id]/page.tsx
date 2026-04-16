import Link from 'next/link';
import { getAllEventsFromMdx, getEventById } from '@/lib/eventMdx';
import { Layout } from '../../../components/PageLayout';

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

const EventDetailPage = async ({ params }: PageProps) => {
  const { id } = await params;
  const event = getEventById(id);

  if (!event) {
    return (
      <Layout title="イベントが見つかりません - RiPPro(立命館大学情報理工学部プロジェクト団体)">
        <div className="event-page">
          <Link href="/event" className="event-back-link">
            解説ページに戻る
          </Link>
          <h2>イベントが見つかりません</h2>
        </div>
      </Layout>
    );
  }

  const dateText = event.date.end ? `${event.date.begin} - ${event.date.end}` : event.date.begin;

  return (
    <Layout
      title={`${event.title} - RiPPro(立命館大学情報理工学部プロジェクト団体)`}
      description="過去に開催したイベント詳細ページ"
    >
      <div className="event-page">
        <Link href="/event" className="event-back-link">
          解説ページに戻る
        </Link>
        <h2>{event.title}</h2>
        <p className="event-meta">{dateText}</p>
        <article className="event-content" dangerouslySetInnerHTML={{ __html: event.contentHtml }} />
      </div>
    </Layout>
  );
};

export async function generateStaticParams() {
  return getAllEventsFromMdx().map((event) => ({
    id: event.id
  }));
}

export default EventDetailPage;
