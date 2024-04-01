/** @format */

import { VFC } from 'react'
import { Layout } from '../components/Layout'
import Twitter from '../components/Twitter'

import styles from '../styles/section.module.css'

const Contact: VFC = () => {
  return (
    <Layout
      title="お問い合わせ - RiPPro(立命館大学情報理工学部プロジェクト団体)"
      description="RiPProへのコンタクトページ"
    >
      <div className={styles.section}>
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
      <Twitter />
    </Layout>
  )
}

export default Contact
