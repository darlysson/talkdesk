import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { PostItem } from '../PostItem'

import styles from './styles.module.scss'

export function SearchContent({
  posts,
  labels,
  selectedFilter,
  filteredLength,
}) {
  const [isActive, setIsActive] = useState('')
  const [isActive2, setIsActive2] = useState('')

  function handleSelectFilter(label, index) {
    for (let i = 0; i < labels.length; i++) {
      if (label.label === 'Product') {
        selectedFilter('All')
      } else if (label.label === 'All') {
        selectedFilter('')
      } else if (label.label === labels[i].label) {
        selectedFilter(labels[i].label)
      }

      // if (i == index) {
      // }
    }

    // if (array[index].label == label.label) {
    //   setIsActive(true)
    // }
    // setIsActive(label.label)
    // setIsActive2(labels[index].label)
    // console.log('array[index].label', )
    // console.log('label.label', label.label)
  }

  return (
    <section className={styles.searchContent}>
      <aside className={styles.sidebar}>
        <ul>
          {labels.map((label, index) => {
            return (
              <li key={label.slug}>
                <Link href='#'>
                  <a
                    onClick={() => handleSelectFilter(label, index)}
                    className={isActive === isActive2 ? 'active' : 'null'}
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
        <small>Showing {filteredLength} results for talkdesk</small>

        <div>
          {posts.map((post) => (
            <PostItem key={post.id} {...post} />
          ))}
        </div>
      </section>
    </section>
  )
}
