/** @format */

import { VFC } from "react";
import { NextRouter, useRouter } from "next/router";
import { Layout } from "../../components/Layout";
import { Events, EventDetails } from "../../components/EventList";

import styles from "../../components/section.module.css";
import detailsStyle from "../../styles/details.module.css";

const extension: Function = (filename: string) => {
  const parts = filename.split(".");
  return parts[parts.length - 1];
};

const Link: Function = (title: string, link: string) => {
  if (link) {
    return <a href={link}>{title}</a>;
  } else {
    return <>{title}</>;
  }
};

const getContestId = (router: NextRouter): string => {
  const contestId = Array.isArray(router.query.contest)
    ? router.query.contest[0]
    : router.query.contest || Events[0].id;
  return contestId;
};

type IODataProps = {
  iodata?: JSX.Element | null | undefined;
};
const IODataElement: VFC<IODataProps> = (Props: IODataProps) => {
  if (Props.iodata) {
    return (
      <>
        <h3>問題文・入出力データ</h3>
        {Props.iodata}
      </>
    );
  } else {
    return <></>;
  }
};

type PlaceProps = {
  place?: string | null | undefined;
};
const PlaceElement: VFC<PlaceProps> = (Props: PlaceProps) => {
  if (Props.place) {
    return (
      <>
        <h3>イベント概要</h3>
        <p>{Props.place}</p>
      </>
    );
  } else {
    return <></>;
  }
};

type PictureProps = {
  link?: string | null | undefined;
  contestId?: string | null | undefined;
};
const PictureElement: VFC<PictureProps> = (Props: PictureProps) => {
  if (Props.link) {
    return (
      <div style={{ textAlign: "center" }}>
        <img src={`/static/contestData/${Props.contestId}/${Props.link}`} />
      </div>
    );
  } else {
    return <></>;
  }
};

type ScheduleProps = {
  schedule?: JSX.Element | null | undefined;
};
const ScheduleElement: VFC<ScheduleProps> = (Props: ScheduleProps) => {
  if (Props.schedule) {
    return (
      <>
        <h3>合宿内容</h3>
        {Props.schedule}
      </>
    );
  } else {
    return <></>;
  }
};

const EventDetail: VFC = () => {
  const router = useRouter();
  const contestId: string = getContestId(router);
  return (
    <Layout
      title={`${EventDetails[contestId].title} - RiPPro(立命館大学情報理工学部プロジェクト団体)`}
      description="過去に開催したイベント一覧ページ"
    >
      <div className={styles.section}>
        <h2>{EventDetails[contestId].title}</h2>
        <PictureElement
          contestId={contestId}
          link={EventDetails[contestId].picture}
        />
        <h3>開催日時</h3>
        {EventDetails[contestId].date.begin} -{" "}
        {EventDetails[contestId].date.end}
        <div>
          <h3>イベント概要</h3>
          <a href={EventDetails[contestId].detailURL}>
            {EventDetails[contestId].detailURL}
          </a>
        </div>
        <PlaceElement place={EventDetails[contestId].place} />
        <div>
          <h3>問題セット</h3>
          <ul>
            {EventDetails[contestId].problemSet.map((college) => {
              return (
                <li key={college.college}>
                  {Link(college.college, college.link)}
                </li>
              );
            })}
          </ul>
          <h3>{EventDetails[contestId].day + " " || ""}解説</h3>
          <table className={detailsStyle.table}>
            <tr className={detailsStyle.tr}>
              <td className={detailsStyle.td}>問題</td>
              <td className={detailsStyle.td}>解説</td>
            </tr>
            {EventDetails[contestId].commentary.map((commentary) => {
              return (
                <tr className={detailsStyle.tr} key={commentary.title}>
                  <td className={detailsStyle.td}>{commentary.title}</td>
                  <td className={detailsStyle.td}>
                    <a
                      href={`/static/contestData/${contestId}/${commentary.link}`}
                    >
                      {extension(commentary.link)}
                    </a>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
        <IODataElement iodata={EventDetails[contestId].iodata} />
        <ScheduleElement schedule={EventDetails[contestId].schedule} />
      </div>
    </Layout>
  );
};

export default EventDetail;
