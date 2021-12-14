/** @format */

import { VFC } from "react";
import { Layout } from "../components/Layout";
import { SectionType, LinksType, sections } from "../components/Links";

import styles from "../components/section.module.css";

const LinkSection: VFC<SectionType> = (Props: SectionType): JSX.Element => {
  return (
    <>
      <h3>{Props.title}</h3>
      <ul>
        {Props.contents.map((linkItem: LinksType) => {
          return (
            <li key={linkItem.title}>
              <a href={linkItem.link} target="_blank" rel="noopener noreferrer">
                {linkItem.title}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

const Links: VFC = () => {
  return (
    <Layout
      title="Links - RiPPro(立命館大学情報理工学部プロジェクト団体)"
      description="他サイトへのリンクを記載したページ"
    >
      <div className={styles.section}>
        <h2>リンク</h2>
        {sections.map((section: SectionType) => {
          return <LinkSection {...section} key={section.title} />;
        })}
      </div>
    </Layout>
  );
};

export default Links;
