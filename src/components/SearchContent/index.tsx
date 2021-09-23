import React, { useState } from 'react'
import Link from 'next/link'
import { PostItem } from '../PostItem'

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

  const [activeLabel, setActiveLabel] = useState('All')

  function handleSelectFilter(label: { label: string }) {
    for (let i = 0; i < labels.length; i++) {
      if (label.label === 'Product') {
        filteredData('All')
      } else if (label.label === 'All') {
        filteredData('')
      } else if (label.label === labels[i].label) {
        filteredData(labels[i].label)
      }

      if (labels[i].label == label.label) {
        setActiveLabel(label.label)
      }
    }

  }

  return (
    <section className={styles.searchContent}>
      <aside className={styles.sidebar}>
        <ul>
          {labels.map((label: { label: string, slug: string }) => {
            return (
              <li key={label.slug}>
                <Link href="/">
                  <a
                    onClick={() => handleSelectFilter(label)}
                    className={activeLabel === label.label ? styles.active : ''}
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
          {`Showing ${posts.length} results for 
            "${searchedContent ? searchedContent : 'talkdesk'}" 
          `}
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
