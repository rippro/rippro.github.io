/** @format */

import { VFC } from "react";
import { Layout } from "../components/Layout";
import Twitter from "../components/Twitter";

import styles from "../components/section.module.css";

const Contact: VFC = () => {
  return (
    <Layout
      title="Links - RiPPro(立命館大学情報理工学部プロジェクト団体)"
      description="他サイトへのリンクを記載したページ"
    >
      
      <Twitter />
    </Layout>
  );
};

export default Contact;
