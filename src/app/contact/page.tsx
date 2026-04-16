'use client';

import type { FC } from 'react';
import { Layout } from '../../components/PageLayout';
import SocialSection from '@/components/welcome/SocialSection';

const sectionStyle = {
  marginLeft: '8px',
  padding: '2px',
  fontSize: '11pt'
};

const Contact: FC = () => {
  return (
    <Layout
      title="お問い合わせ - RiPPro(立命館大学情報理工学部プロジェクト団体)"
      description="RiPProへのコンタクトページ"
    >
      <div style={sectionStyle}>
        <h2>お問い合わせ</h2>
        <h3>連絡先</h3>
        入部希望者または質問等がある方は，名前・学部学科・回生を明記の上，下記のメールアドレスにメールをしていただくか，
        下記のRiPProのTwitter公式アカウントにDMしてください．
        <br />
        ※Twitterの方が対応が早いため，Twitterでの連絡をおすすめします．
        <br />
        <dl>
          <dd>Mail: ripprotarou[@]gmail.com</dd>
          <dd>
            Twitter:{' '}
            <a href="https://twitter.com/pj_rippro" target="_blank" rel="noopener noreferrer">
              @PJ_RiPPro
            </a>
          </dd>
        </dl>
        <h3>活動場所</h3>
        OIC H棟5階 H501教室
        <br />
        <h3>活動時間</h3>
        週1回 18:00〜
        <br />
        （部員の授業スケジュールの兼ね合いで毎学期始めに曜日を決定しています）
      </div>
      <div style={{ marginTop: '20px' }}>
        <h2>SNS</h2>
        <p>
          RiPProの新歓用SNSも開設しています。講演会や入団に興味のある方は、自由に参加できます。質問も受け付けているので、ぜひご活用ください！
        </p>
        <SocialSection />
      </div>
    </Layout>
  );
};

export default Contact;
