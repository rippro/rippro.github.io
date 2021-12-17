/** @format */

import { VFC } from 'react'
import Link from 'next/link'
import { Layout } from '../components/Layout'
import YouTube from 'react-youtube'

import styles from '../components/section.module.css'
import welcomeStyles from '../styles/welcome.module.css'

const Welcome: VFC = () => {
  const currentDate = new Date()

  const courseDateStart = new Date(`${currentDate.getFullYear()}/5/11`)
  const courseDateEnd = new Date(`${currentDate.getFullYear()}/7/31`)
  const coueseWeek = ['月', '水']
  const coursePlace = 'バイオリンク サークルルーム３'
  const courseTime = '18:00 ~ 20:00'

  const isCourceOpen: boolean = courseDateStart < currentDate && currentDate < courseDateEnd
  return (
    <Layout title="Welcome - RiPPro(立命館大学情報理工学部プロジェクト団体)" description="新歓用ページ">
      <div className={`${styles.section} ${welcomeStyles.line}`}>
        <h2>プログラミング(C++)講習会</h2>
        <p>プログラミングに関する講習会を私たちの団体で実施します。</p>
        <p>プログラミングって何？と思う方、どこの学部の方でもでも歓迎するので気軽に参加してください。</p>
        <ul className={welcomeStyles.list}>
          <li>
            日程 : {courseDateStart.toLocaleDateString()}以降の
            {coueseWeek.map((week) => week + '曜日').join('と')}
          </li>
          <li>場所 : {coursePlace}</li>
          <li>時間 : {courseTime}</li>
          <li>内容 : プログラミングの初め方・C言語の基礎から (C++ にも少し触れます)</li>
        </ul>
        <p style={{ color: 'red' }}>{isCourceOpen ? '' : '※現在は終了しています'}</p>
        <div>
          過去にC++言語講習会で使用していたスライド（参考）
          <ul>
            <li>
              <a href="https://www.slideshare.net/rippro/ss-75074872" target="_blank" rel="noopener noreferrer">
                入出力
              </a>
            </li>
            <li>
              <a href="https://www.slideshare.net/rippro/ss-75063033" target="_blank" rel="noopener noreferrer">
                条件分岐・繰り返し
              </a>
            </li>
            <li>
              <a href="https://www.slideshare.net/rippro/ss-75165601" target="_blank" rel="noopener noreferrer">
                配列
              </a>
            </li>
          </ul>
        </div>
        <h2>RiPProとは</h2>
        <div className={welcomeStyles.line}>
          <p>私たち RiPProは競技プログラミングの能力を高めコンテストでの入賞を目指す団体です。</p>
          <p>競技プログラミングって聞いたことありますか？</p>
          <p>競技プログラミングとは、与えられた問題をプログラムを用いて早く正確に解く種目です。</p>
          <p>世界規模での大会が開催されるなどとても活発です。</p>
          <a href="http://atcoder.jp/" target="_blank" rel="noopener noreferrer">
            AtCoder
          </a>{' '}
          などでは初心者から熟練者まで幅広く参加できるコンテストが毎週開催されています。
        </div>
        <h2>パソコンに問題を解かせよう!</h2>
        <div className={welcomeStyles.line}>
          <p>良いプログラムとはどういうものでしょうか？</p>
          <p>例えばこの動画のお姉さんは一つ一つ必死に数えていますが、もっと効率よく数える方法は無いでしょうか。</p>
          <p>また、その方法をどうやってプログラムに落とし込みますか？</p>
          <p>
            このようなことを考えることはパズルを解くのと同じようにとても楽しいですし、実際のプログラム開発でも役に立ちます。
          </p>
        </div>
        <div style={{ width: '95%', margin: 'auto' }}>
          <YouTube videoId="Q4gTV4r0zRs" className={welcomeStyles.iframe} containerClassName={welcomeStyles.youtube} />
        </div>
        <div className={welcomeStyles.line}>
          <p>RiPProの普段の活動ではコンテスト形式でサークル内で競いながら問題を解いていきます。</p>
          <p>
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
          <p>
            プログラミングの勉強をしたい方、クイズやパズルが好きな方、是非部室に来てください
            <b>情報理工学部生以外も大歓迎です</b>
          </p>
        </div>
        <h2>連絡先</h2>
        <div className={welcomeStyles.bottom}>
          入部希望者または質問等がある方は，<Link href="/contact">Contactページ</Link>にアクセスしてください。
        </div>
      </div>
    </Layout>
  )
}

export default Welcome
