import React from 'react'
import Link from 'next/link'

import { Post } from '../../../types'

import styles from './styles.module.scss'

export function PostItem(post: Post) {
  const talkdeskBaseUrl = 'https://talkdesk.com'

  return (
    <Link
      href={
        post.url.includes('http://') ||
          post.url.includes('https://') ||
          post.url.includes('https://talkdesk.com')
          ? `${post.url}`
          : `${talkdeskBaseUrl}${post.url}`
      }
    >
      <a target="_blank" className={styles.postItem}>
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
