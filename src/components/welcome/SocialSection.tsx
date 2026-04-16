'use client';

import type { CSSProperties } from 'react';

const socialSectionStyle: CSSProperties = {
  display: 'grid',
  gap: '16px',
  marginBottom: '20px'
};

const cardStyle: CSSProperties = {
  border: '1px solid #d8d5cf',
  backgroundColor: '#faf9f7',
  padding: '14px'
};

const cardTitleStyle: CSSProperties = {
  margin: '0 0 8px 0',
  fontSize: '1.05rem'
};

const textStyle: CSSProperties = {
  margin: 0,
  lineHeight: 1.8
};

const linkRowStyle: CSSProperties = {
  marginTop: '10px',
  display: 'flex',
  gap: '12px',
  flexWrap: 'wrap',
  justifyContent: 'flex-end'
};

const tweetStyle: CSSProperties = {
  marginTop: '10px',
  padding: '10px',
  backgroundColor: '#ffffff',
  border: '1px solid #d8d5cf'
};

function SocialSection() {
  return (
    <section style={socialSectionStyle} aria-label="SNS案内">
      <article style={cardStyle}>
        <h3 style={cardTitleStyle}>新歓Discordサーバー</h3>
        <p style={textStyle}>
          RiPProの新歓用Discordサーバーです。講演会や入団に興味のある方は自由に参加できます。質問も歓迎です。
        </p>
        <div style={linkRowStyle}>
          ⇒
          <a href="https://discord.gg/WpXDMNGbez" target="_blank" rel="noopener noreferrer">
            Discordに参加する
          </a>
        </div>
      </article>

      <article style={cardStyle}>
        <h3 style={cardTitleStyle}>X (Twitter)</h3>
        <p style={textStyle}>最新情報は公式アカウントで案内しています。</p>
        <div style={tweetStyle}>
          <p style={{ ...textStyle, marginBottom: '8px' }}>
            RiPProの新歓用Discordサーバー公開します！
            講演会や入団に興味のある方は、自由に参加できます。質問も受け付けてるので、ぜひご活用ください！
          </p>
          <a href="https://x.com/PJ_RiPPro/status/1907408404735545444" target="_blank" rel="noopener noreferrer">
            投稿を見る
          </a>
        </div>
        <div style={linkRowStyle}>
          ⇒
          <a href="https://x.com/PJ_RiPPro" target="_blank" rel="noopener noreferrer">
            @PJ_RiPPro
          </a>
        </div>
      </article>
    </section>
  );
}

export default SocialSection;
