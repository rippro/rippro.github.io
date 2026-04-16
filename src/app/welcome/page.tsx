/** @format */
'use client';

import Link from 'next/link';
import YouTube from 'react-youtube';
import SocialSection from '../../components/welcome/SocialSection';
import { Layout } from '../../components/PageLayout';
import type { CSSProperties } from 'react';

const sectionStyle: CSSProperties = {
  marginLeft: '8px',
  padding: '2px',
  fontSize: '11pt'
};

const lineParagraphStyle = {
  margin: 0
};

const listStyle = {
  listStyle: 'none',
  display: 'block',
  paddingLeft: 0
};

const bottomStyle: CSSProperties = {
  marginBottom: '1em'
};

const flyerStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '8px'
};

const flyerImageStyle: CSSProperties = {
  width: 'min(280px, 80vw)',
  height: 'auto'
};

const pStyle: CSSProperties = {
  textAlign: 'center',
  fontSize: 'small',
  marginTop: '8px'
};

const youtubeStyle: CSSProperties = {
  width: '100%',
  aspectRatio: '16 / 9'
} as CSSProperties;

const Welcome = () => {
  // const currentDate = new Date();

  // const courseDateStart = new Date(`${currentDate.getFullYear()}/5/11`);
  // const courseDateEnd = new Date(`${currentDate.getFullYear()}/7/31`);
  // const coueseWeek = ['月', '水'];
  const workshopDate = '2025/4/7(金)';
  const coursePlace = 'OIC H234教室';
  const courseTime = '16:40〜18:15';

  // const isCourceOpen: boolean = courseDateStart < currentDate && currentDate < courseDateEnd;
  return (
    <Layout title="新歓情報 - RiPPro(立命館大学情報理工学部プロジェクト団体)" description="新歓用ページ">
      <div style={sectionStyle}>
        <h2>SNS</h2>
        <SocialSection />
        <h2>新歓講演会</h2>
        <div>
          <p>私たちRiPRroの普段の活動内容や配布したビラの問題の解説などを行います！</p>
          <p>どこの学部の方でもでも歓迎するので気軽に参加してください。</p>
          <ul style={listStyle}>
            <li>日程 : {workshopDate}</li>
            <li>場所 : {coursePlace}</li>
            <li>時間 : {courseTime}</li>
          </ul>
        </div>
        <a href="RiPPro_Ad.png" style={flyerStyle} target="_blank" rel="noreferrer">
          <img src="RiPPro_Ad.png" style={flyerImageStyle} alt="RiPPro 新歓ビラ" />
        </a>
        <p style={pStyle}>クリックで拡大画像を表示</p>
        <h2>競プロ新歓講習</h2>
        <p>仮入部者に向けてプログラムの書き方や、そのプログラムをどうやって競プロに使うのかをゼロから講習します！</p>
        <p>各回につき2日の日程が用意されていますが、同じ内容をやるのでどちらに参加していただいても大丈夫です!</p>
        <h3>第1回講習 入門！プログラミング勉強会 #1</h3>
        <ul style={listStyle}>
          <li>日程 : 4/22(月) 4/23(火) </li>
          <li>場所 : 更新予定</li>
          <li>時間 : 16:20~17:50</li>
        </ul>
        <h3>第2回講習 実践！競プロ勉強会 #1</h3>
        <ul style={listStyle}>
          <li>日程 :4/24(水) 4/25(木) </li>
          <li>場所 : 更新予定</li>
          <li>時間 : 16:20~17:50</li>
        </ul>
        <h3>第3回講習 入門！プログラミング勉強会 #2</h3>
        <ul style={listStyle}>
          <li>日程 :4/29(月) 4/30(火)</li>
          <li>場所 : 更新予定</li>
          <li>時間 : 16:20~17:50</li>
        </ul>
        <h3>第4回講習 実践！競プロ勉強会 #2</h3>
        <ul style={listStyle}>
          <li>日程 :5/1(水) 5/2(木)</li>
          <li>場所 : 更新予定</li>
          <li>時間 : 16:20~17:50</li>
        </ul>
        <h2>RiPProとは</h2>
        <div>
          <p style={lineParagraphStyle}>
            私たち RiPProは競技プログラミングの能力を高めコンテストでの入賞を目指す団体です。
          </p>
          <p style={lineParagraphStyle}>競技プログラミングって聞いたことありますか？</p>
          <p style={lineParagraphStyle}>
            競技プログラミングとは、与えられた問題をプログラムを用いて早く正確に解く種目です。
          </p>
          <p style={lineParagraphStyle}>世界規模での大会が開催されるなどとても活発です。</p>
          <a href="http://atcoder.jp/" target="_blank" rel="noopener noreferrer">
            AtCoder
          </a>{' '}
          などでは初心者から熟練者まで幅広く参加できるコンテストが毎週開催されています。
        </div>
        <h2>パソコンに問題を解かせよう!</h2>
        <div>
          <p style={lineParagraphStyle}>良いプログラムとはどういうものでしょうか？</p>
          <p style={lineParagraphStyle}>
            例えばこの動画のお姉さんは一つ一つ必死に数えていますが、もっと効率よく数える方法は無いでしょうか。
          </p>
          <p style={lineParagraphStyle}>また、その方法をどうやってプログラムに落とし込みますか？</p>
          <p style={lineParagraphStyle}>
            このようなことを考えることはパズルを解くのと同じようにとても楽しいですし、実際のプログラム開発でも役に立ちます。
          </p>
        </div>
        <div style={youtubeStyle}>
          <YouTube
            videoId="Q4gTV4r0zRs"
            opts={{ width: '100%', height: '100%' }}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div>
          <p style={lineParagraphStyle}>
            RiPProの普段の活動ではコンテスト形式でサークル内で競いながら問題を解いていきます。
          </p>
          <p style={lineParagraphStyle}>
            年に 1~2 回ほどですが、問題を作ったりもしています。 (例:
            <a
              href="https://onlinejudge.u-aizu.ac.jp/beta/room.html#RitsCamp16Day1"
              target="_blank"
              rel="noopener noreferrer"
            >
              立命合宿 2016
            </a>
            ,
            <a
              href="https://onlinejudge.u-aizu.ac.jp/beta/room.html#ACPC2015Day1"
              target="_blank"
              rel="noopener noreferrer"
            >
              会津合宿 2015
            </a>
            )
          </p>
          <p style={lineParagraphStyle}>
            プログラミングの勉強をしたい方、クイズやパズルが好きな方、是非部室に来てください
            <b>情報理工学部生以外も大歓迎です</b>
          </p>
        </div>
        <h2>連絡先</h2>
        <div style={bottomStyle}>
          入部希望者または質問等がある方は，
          <Link href="/contact">お問い合わせ</Link>にアクセスしてください。
        </div>
      </div>
    </Layout>
  );
};

export default Welcome;
