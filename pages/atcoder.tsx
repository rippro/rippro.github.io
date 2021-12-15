/** @format */

import { VFC } from "react";
import { Layout } from "../components/Layout";
import AtCoderGraph from "../components/atcoder/AtCoderGraph";
import styles from "../components/section.module.css";

const AtCoderPage: VFC = () => {
  return (
    <Layout
      title="AtCoder進捗比較- RiPPro(立命館大学情報理工学部プロジェクト団体)"
      description="RiPProへのコンタクトページ"
    >
      <div className={styles.section}>
        <h2>AtCoder進捗どうですか</h2>
        <h3>Summary</h3>
        <div
          style={{
            height: "500px",
            display: "block",
          }}
        >
          <AtCoderGraph />
        </div>
      </div>
    </Layout>
  );
};

export default AtCoderPage;
