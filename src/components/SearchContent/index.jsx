import React from 'react'
import { Sidebar } from '../Sidebar'
import { PostItem } from '../PostItem'

import styles from './styles.module.scss'

export function SearchContent() {
  return (
    <section className={styles.searchContent}>
      <Sidebar />

      <div className={styles.postContent}>
        <small>Showing 721 results for talkdesk</small>

        <div>
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
        </div>
      </div>
    </section>
  )
}
