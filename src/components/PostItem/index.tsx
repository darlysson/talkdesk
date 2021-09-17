import Link from 'next/link'
import React from 'react'

import styles from './styles.module.scss'

interface PostProps {
  id: number,
  title: string,
  description: string,
  slug: string,
  url: string,
  date: string,
  category: string,
}

export function PostItem(post: PostProps) {
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
