/** @format */

import type { NextPage } from "next";
import { Layout } from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout
      home
      title="RiPPro - 立命館大学情報理工学部プロジェクト団体"
      description="立命館大学情報理工学部プロジェクト団体 RiPPro (Ritsumeikan Programming Project) は、ACM-ICPC (プログラミングの学生世界大会) などの大会で入賞することを目的として結成されました。"
    >
      <div>
        <h1>ようこそ RiPPro へ</h1>
      </div>
    </Layout>
  );
};

export default Home;
