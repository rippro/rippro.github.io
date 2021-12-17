/** @format */

import { VFC } from 'react'
import Link from 'next/link'
import Navigator from './Navigator'
import styles from './Head.module.css'

const Header: VFC = () => {
  return (
    <div className={styles.head}>
      <Link href="/">
        <a className={styles.logo}>
          <img src="/rippro-rogo.png" alt="rippro-rogo" />
        </a>
      </Link>
      <Navigator />
    </div>
  )
}

export default Header
