/** @format */

import { VFC } from 'react'
import { Timeline } from 'react-twitter-widgets'

import styles from '../styles/section.module.css'

const Header: VFC = () => {
  return (
    <div className={styles.section}>
      <h2>Twitter</h2>
      Tweets by{' '}
      <a href="https://twitter.com/PJ_RiPPro" target="_blank" rel="noopener noreferrer">
        @PJ_RiPPro
      </a>
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: 'PJ_RiPPro'
        }}
        options={{
          width: '600',
          height: '600',
          theme: 'dark',
          chrome: 'nofooternoheader'
        }}
      />
    </div>
  )
}

export default Header
