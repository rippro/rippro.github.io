/** @format */

import { VFC } from "react";
import Link from "next/link";
import { Layout } from "../../components/Layout";
import { EventDetails } from "../../components/EventList";

import styles from "../../components/section.module.css";
import detailsStyle from "../../styles/details.module.css";

const extension: Function = (filename: string) => {
  const parts = filename.split(".");
  return parts[parts.length - 1];
};

const EventDetail: VFC = () => {
  const contestId = "acpc2018";
  return (
    <Layout
      title={`${EventDetails[contestId].title} - RiPPro(立命館大学情報理工学部プロジェクト団体)`}
      description="過去に開催したイベント一覧ページ"
    >
      <div className={styles.section}>
        <h2>{EventDetails[contestId].title}</h2>
        <h3>開催日時</h3>
        {EventDetails[contestId].date.begin} -{" "}
        {EventDetails[contestId].date.begin}
        <div>
          <h3>イベント概要</h3>
          <a href={EventDetails[contestId].detailURL}>
            {EventDetails[contestId].detailURL}
          </a>
        </div>
        <div>
          <h3>問題セット</h3>
          <ul>
            {EventDetails[contestId].problemSet.map((college) => {
              return (
                <li key={college.college}>
                  <a href={college.link}>{college.college}</a>
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
                    <a href={commentary.link}>{extension(commentary.link)}</a>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default EventDetail;
