/** @format */
'use client';

import AtCoderGraph from '../../components/atcoder/AtCoderGraph';
import { Layout } from '../../components/PageLayout';

const AtCoderPage = () => {
  const sectionStyle = {
    marginLeft: '8px',
    padding: '2px',
    fontSize: '11pt'
  };

  const heading2Style = {
    margin: '24px 0',
    padding: '0.5em',
    color: '#000',
    background: '#cdf0fd',
    borderLeft: 'solid 5px #6cbad8'
  };

  const heading3Style = {
    margin: '16px 0',
    borderBottom: '1px dashed #6cbad8'
  };

  return (
    <Layout title="部員向けページ - RiPPro(立命館大学情報理工学部プロジェクト団体)" description="部員向けページ">
      <div style={sectionStyle}>
        <h2 style={heading2Style}>AtCoder進捗どうですか</h2>
        <h3 style={heading3Style}>Summary</h3>
        <div
          style={{
            height: '500px',
            width: 'max-content',
            display: 'inline-block'
          }}
        >
          <AtCoderGraph />
        </div>
      </div>
    </Layout>
  );
};

export default AtCoderPage;
