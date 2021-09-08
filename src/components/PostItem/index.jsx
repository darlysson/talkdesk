import Link from 'next/link'
import React from 'react'

import styles from './styles.module.scss'

export function PostItem(post) {
  return (
    <Link href={post.url}>
      <a className={styles.postItem}>
        <article>
          <div className={styles.info}>
            <p className={styles.tag}>{post.category}</p>
            <p className={styles.date}>{post.date}</p>
          </div>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.url}>{post.url}</p>
        </article>
      </a>
    </Link>
  )
}
