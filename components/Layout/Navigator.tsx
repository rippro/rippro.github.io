/** @format */

import { VFC } from "react";

import styles from "./Navigator.module.css";

const Navigator: VFC = () => {
  return (
    <div className={styles.navi}>
      <div className={styles.navibutton}>
        <a href="/index.html">Top</a>
      </div>
      <div className={styles.navibutton}>
        <a href="/event/index.html">Event</a>
      </div>
      <div className={styles.navibutton}>
        <a href="/contact.html">Contact</a>
      </div>
      <div className={styles.navibutton}>
        <a href="/link.html">Link</a>
      </div>
      <div className={styles.navibutton}>
        <a href="/welcome/index.html">
          <b>新歓情報</b>
        </a>
      </div>
    </div>
  );
};

export default Navigator;
