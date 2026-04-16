import Link from 'next/link';
import { getEventSummaries } from '@/lib/eventMdx';
import { Layout } from '../../components/PageLayout';

const Event = () => {
  const events = getEventSummaries();

  return (
    <Layout
      title="ブログ - RiPPro(立命館大学情報理工学部プロジェクト団体)"
      description="過去に開催・参加したイベント一覧ページ"
    >
      <div className="event-page event-list">
        {events.map((event) => {
          return (
            <article className="event-card" key={event.id}>
              <h2>{event.title} 解説</h2>
              <p className="event-summary">{event.detail}</p>
              <div className="event-detail-link">
                <Link href={`/event/${event.id}`}>詳細はこちら</Link>
              </div>
            </article>
          );
        })}
      </div>
    </Layout>
  );
};

export default Event;
