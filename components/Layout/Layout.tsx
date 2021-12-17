import { FC } from 'react'

import Header from './Header'
import Footer from './Footer'
import Head from './Head'

import styles from './Layout.module.css'

export const Layout: FC<{
  headerChild?: JSX.Element
  title?: string
  description?: string
}> = ({ children, title, description }) => (
  <div className={styles.body}>
    <Header title={title} description={description} />
    <div className={styles.main}>
      <Head />
      <div className={styles.article}>{children}</div>
      <Footer />
    </div>
  </div>
)
