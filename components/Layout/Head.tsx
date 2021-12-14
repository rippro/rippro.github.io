/** @format */

import { VFC } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./Head.module.css";

const Header: VFC = () => {
  return (
    <div className={styles.head}>
      <div className={styles.tagline}>
        立命館大学情報理工学部プロジェクト団体
        <br /> Programming Contest Project Team, Ritsumeikan University Faculty
        of Information Science and Engineering
      </div>
      <h1>
        <Link href="/">
          <a>
            <Image
              src="/rippro-rogo.png"
              alt="rippro-rogo"
              width={202}
              height={62}
            />
          </a>
        </Link>
      </h1>
    </div>
  );
};

export default Header;
