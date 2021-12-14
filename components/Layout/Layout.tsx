/** @format */

import { FC } from "react";

// import Menubar from "./MenuBar";
import Header from "./Header";
import Footer from "./Footer";
import Head from "./Head";
import Navigator from "./Navigator";

import styles from "./Layout.module.css";

export const Layout: FC<{
  headerChild?: JSX.Element;
  title?: string;
  description?: string;
}> = ({ children, headerChild, title, description }) => (
  <div>
    <Header title={title} description={description} />
    <Head />
    <div className={styles.article}>{children}</div>
    <Navigator />
    <Footer />
  </div>
);
