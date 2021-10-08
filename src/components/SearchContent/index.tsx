import React, { useState } from 'react'

import Sidebar from '../Sidebar'
import { PostItem } from '../PostItem'
import Pagination from '../Pagination'
import { Post, Label } from '../../../types'

import styles from './styles.module.scss'

interface SearchContentProps {
  posts: Post[]
  labels: Label[]
  searchedContent: string
  filteredData: (value: string) => void
  handlePaginatedData: (posts: Post[]) => void
}

export function SearchContent({
  posts,
  labels,
  searchedContent,
  filteredData,
  handlePaginatedData
}: SearchContentProps) {
  const [currentPage, setCurrentPage] = useState(1);

  function handleOnChange(page: number) {
    setCurrentPage(page);
  }

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
          {posts.length > 10 &&
            <Pagination
              data={posts}
              pageLimit={5}
              dataLimit={10}
              handlePaginatedData={handlePaginatedData}
            />
          }
        </div>
      </div>
    </section>
  )
}
