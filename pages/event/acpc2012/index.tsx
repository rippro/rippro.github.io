/** @format */

import { VFC } from "react";
import Link from "next/link";
import { Layout } from "../../../components/Layout";
import { EventType, Events } from "../../../components/EventList";

import styles from "../../../components/section.module.css";

interface EventProps {
  id: string;
}

const EventDetail: VFC<EventProps> = (Props: EventProps) => {
  return (
    <Layout
      title={`${Props.id} - RiPPro(立命館大学情報理工学部プロジェクト団体)`}
      description="過去に開催したイベント一覧ページ"
    ></Layout>
  );
};

export default EventDetail;
