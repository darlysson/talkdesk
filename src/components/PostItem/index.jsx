import Link from 'next/link'
import React from 'react'

import styles from './styles.module.scss'

export function PostItem() {
  return (
    <Link href='#'>
      <a className={styles.postItem}>
        <article>
          <div className={styles.info}>
            <p className={styles.tag}>blog</p>
            <p className={styles.date}>Aug 25, 2021</p>
          </div>
          <h1 className={styles.title}>
            Talkdesk integration with Zoom unifies contact center collaboration
          </h1>
          <p className={styles.url}>/blog/talkdesk-zoom-collaboration/</p>
        </article>
      </a>
    </Link>
  )
}
