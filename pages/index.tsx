/** @format */

import type { NextPage } from 'next'
import { Layout } from '../components/Layout'
import Twitter from '../components/Twitter'
import IndexArticles from '../components/IndexArticles'

const Home: NextPage = () => {
  return (
    <Layout
      title="RiPPro(立命館大学情報理工学部プロジェクト団体)"
      description="立命館大学情報理工学部プロジェクト団体 RiPPro (Ritsumeikan Programming Project) は、ACM-ICPC (プログラミングの学生世界大会) などの大会で入賞することを目的として結成されました。"
    >
      <div>
        <IndexArticles />
      </div>
      <Twitter />
    </Layout>
  )
}

export default Home
