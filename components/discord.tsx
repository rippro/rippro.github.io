import React, { useEffect } from 'react'
import styles from '../styles/discord.module.css'

function Discord() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://platform.twitter.com/widgets.js'
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])
  return (
    <div className={styles.discordWrapper}>
      <blockquote className="twitter-tweet">
        <p lang="ja" dir="ltr">
          RiPProの新歓用Discordサーバー公開します！ 講演会や入団に興味のある方は、自由に参加できます。
          質問も受け付けてるので、ぜひご活用ください！
          <a href="https://discord.gg/WpXDMNGbez">https://discord.gg/WpXDMNGbez</a>
        </p>
        &mdash; RiPPro (@PJ_RiPPro){' '}
        <a href="https://x.com/PJ_RiPPro/status/1907408404735545444">April 2, 2025</a>
      </blockquote>{' '}
    </div>
  )
}

export default Discord
