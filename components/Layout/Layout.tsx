/** @format */

import { FC } from "react";

// import Menubar from "./MenuBar";
import Header from "./Header";
import Footer from "./Footer";
import Head from "./Head";

// import styles from "./Layout.module.css";

export const Layout: FC<{
  headerChild?: JSX.Element;
  home?: boolean;
  title?: string;
  description?: string;
}> = ({ children, headerChild, home, title, description }) => (
  <div>
    {/* <Menubar>{headerChild}</Menubar>*/}
    <Header title={title} description={description} /> 
    <Head />
    {/* <main className={styles.main}> */}
    <main>{children}</main>
    <Footer />
  </div>
);
