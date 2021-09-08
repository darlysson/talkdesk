import React from 'react'
import { Sidebar } from '../Sidebar'
import { PostItem } from '../PostItem'

import styles from './styles.module.scss'

import { usePosts } from '../../hooks/usePosts'

export function SearchContent() {
  const { posts, labels } = usePosts()

  return (
    <section className={styles.searchContent}>
      <Sidebar labels={labels} />

      <div className={styles.postContent}>
        <small>Showing 721 results for talkdesk</small>

        <div>
          <PostItem posts={posts} />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
        </div>
      </div>
    </section>
  )
}
