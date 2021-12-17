/** @format */

import { VFC } from 'react'

import styles from './Footer.module.css'

const Footer: VFC = () => {
  const date = new Date()
  const year = date.getFullYear()
  return <div className={styles.footer}>Copyright (C) 2005-{year} RiPPro All rights reserved.</div>
}

export default Footer
