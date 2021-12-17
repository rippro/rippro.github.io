/** @format */

import Head from 'next/head'

interface Props {
  title?: string
  description?: string
}

const Header: React.FC<Props> = ({ title, description }: Props) => {
  const defaultDescription =
    '立命館大学情報理工学部プロジェクト団体 競技プログラミング部門「RiPPro」です。ACM-ICPC (プログラミングの学生世界大会) などの大会で入賞することを目的として活動しています。'
  const defaultTitle = 'RiPPro - 立命館大学情報理工学部プロジェクト団体'
  return (
    <Head>
      <title>{title ? title : defaultTitle}</title>
      <meta name="description" content={description ? description : defaultDescription} />
      <link rel="icon" href="/favicon.ico" />
      <meta name="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:image" content="https://avatars.githubusercontent.com/u/7278547?s=200&amp;v=4" />
    </Head>
  )
}

export default Header
