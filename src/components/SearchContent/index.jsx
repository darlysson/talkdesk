import React from 'react'
import { Sidebar } from '../Sidebar'
import { PostItem } from '../PostItem'

import styles from './styles.module.scss'

export function SearchContent({ posts, labels }) {
  return (
    <section className={styles.searchContent}>
      <Sidebar labels={labels} />

      <div className={styles.postContent}>
        <small>Showing {posts.length} results for talkdesk</small>

        <div>
          {posts.map((post) => (
            <PostItem key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  )
}
