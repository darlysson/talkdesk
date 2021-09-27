import React, { useState } from 'react'

import Sidebar from '../Sidebar'
import { PostItem } from '../PostItem'
import Pagination from '../Pagination'

import styles from './styles.module.scss'
import { Post, Label } from '../../../types'

interface SearchContentProps {
  posts: Post[]
  labels: Label[]
  filteredData: (value: string) => void
  searchedContent: string
}

export function SearchContent({
  posts,
  labels,
  searchedContent,
  filteredData
}: SearchContentProps) {

  return (
    <section className={styles.searchContent}>
      <Sidebar labels={labels} filteredData={filteredData} />

      <div className={styles.postContent}>
        <small>
          {`Showing ${posts.length} results for 
            "${searchedContent ? searchedContent : 'talkdesk'}" 
          `}
        </small>

        <div>
          {posts.map((post) => (
            <PostItem key={post.id} {...post} />
          ))}
        </div>

        <div className={styles.pagination}>
          {posts.length > 10 ?
            <Pagination
              data={posts}
              pageLimit={5}
              dataLimit={10}
            />
            : ""}
        </div>
      </div>
    </section>
  )
}
