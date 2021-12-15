/** @format */

import { VFC } from "react";
import Link from "next/link";

import styles from "./Navigator.module.css";

const Navigator: VFC = () => {
  return (
    <div className={styles.navi}>
      <div className={styles.navibutton}>
        <Link href="/">Top</Link>
      </div>
      <div className={styles.navibutton}>
        <b>
          <Link href="/welcome">新歓情報</Link>
        </b>
      </div>
      <div className={styles.navibutton}>
        <Link href="/event">Event</Link>
      </div>
      <div className={styles.navibutton}>
        <Link href="/contact">Contact</Link>
      </div>
      <div className={styles.navibutton}>
        <Link href="/links">Links</Link>
      </div>
      <div className={styles.navibutton}>
        <Link href="/menbers">部員向け</Link>
      </div>
    </div>
  );
};

export default Navigator;
