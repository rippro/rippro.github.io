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
          質問も受け付けてるので、ぜひご活用ください！<a href="https://t.co/hqhaGGPcrI">https://t.co/hqhaGGPcrI</a>
        </p>
        &mdash; RiPPro (@PJ_RiPPro){' '}
        <a href="https://twitter.com/PJ_RiPPro/status/1775429577751613574?ref_src=twsrc%5Etfw">April 3, 2024</a>
      </blockquote>{' '}
    </div>
  )
}

export default Discord
