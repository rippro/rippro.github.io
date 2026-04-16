'use client';

import type { FC } from 'react';
import { Layout } from '../../components/PageLayout';
import { type LinksType, type SectionType, sections } from '../../components/Links';

const sectionStyle = {
  marginLeft: '8px',
  padding: '2px',
  fontSize: '11pt'
};

const LinkSection: FC<SectionType> = (Props: SectionType) => {
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

const Links: FC = () => {
  return (
    <Layout
      title="リンク - RiPPro(立命館大学情報理工学部プロジェクト団体)"
      description="他サイトへのリンクを記載したページ"
    >
      <div style={sectionStyle}>
        <h2>リンク</h2>
        {sections.map((section: SectionType) => {
          return <LinkSection {...section} key={section.title} />;
        })}
      </div>
    </Layout>
  );
};

export default Links;
