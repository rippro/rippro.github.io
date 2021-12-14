/** @format */

import { VFC } from "react";
import Link from "next/link";
import { Layout } from "../../components/Layout";
import { EventType, Events } from "../../components/EventList";

import styles from "../../components/section.module.css";
import eventStyles from "../../styles/event.module.css";

const Event: VFC = () => {
  return (
    <Layout
      title="Event - RiPPro(立命館大学情報理工学部プロジェクト団体)"
      description="過去に開催したイベント一覧ページ"
    >
      {Events.map((event: EventType) => {
        return (
          <div className={styles.section} key={event.title}>
            <h2>
              {event.title} {event.date ? event.date + " " : ""}解説
            </h2>
            {event.detail}
            <div className={eventStyles.detail}>
              <Link href={`event/detail?=${event.id}`}>詳細はこちら</Link>
            </div>
          </div>
        );
      })}
    </Layout>
  );
};

export default Event;
