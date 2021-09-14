import React, { useState } from 'react'
import Link from 'next/link'
import { PostItem } from '../PostItem'

import styles from './styles.module.scss'

export function SearchContent({
  posts,
  labels,
  selectedFilter,
  filteredLength,
  searchedContent,
}) {
  const [isActive, setIsActive] = useState('')

  function handleSelectFilter(label, index, array) {
    for (let i = 0; i < labels.length; i++) {
      if (label.label === 'Product') {
        selectedFilter('All')
      } else if (label.label === 'All') {
        selectedFilter('')
      } else if (label.label === labels[i].label) {
        selectedFilter(labels[i].label)
      }
    }

    if (array[index].label == label.label) {
      setIsActive(true)
    }
  }

  return (
    <section className={styles.searchContent}>
      <aside className={styles.sidebar}>
        <ul>
          {labels.map((label, index, array) => {
            return (
              <li key={label.slug}>
                <Link href='#'>
                  <a
                    onClick={() => handleSelectFilter(label, index, array)}
                    className={isActive === label.label ? 'active' : null}
                  >
                    {label.label}
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </aside>

      <section className={styles.postContent}>
        <small>
          {`Showing ${filteredLength} results for "${
            searchedContent ? searchedContent : 'talkdesk'
          }" `}
        </small>

        <div>
          {posts.map((post) => (
            <PostItem key={post.id} {...post} />
          ))}
        </div>
      </section>
    </section>
  )
}
