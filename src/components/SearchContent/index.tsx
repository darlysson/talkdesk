import React, { useState } from 'react'
import Link from 'next/link'
import { PostItem } from '../PostItem'

import styles from './styles.module.scss'

interface SearchContentProps {
  posts: IPosts[]
  labels: ILabels[]

  selectedFilter: (value: string) => void
  filteredLength: number
  searchedContent: string
}

export interface ILabels {
  label: string,
  slug: string
}
export interface IPosts {
  id: number
  title: string
  description: string
  slug: string
  url: string
  date: string
  category: string
}

export function SearchContent({
  posts,
  labels,
  selectedFilter,
  filteredLength,
  searchedContent,
}: SearchContentProps) {
  const [isTest, setIsTest] = useState('')

  function handleSelectFilter(label: { label: string }) {
    for (let i = 0; i < labels.length; i++) {
      if (label.label === 'Product') {
        selectedFilter('All')
      } else if (label.label === 'All') {
        selectedFilter('')
      } else if (label.label === labels[i].label) {
        selectedFilter(labels[i].label)
      }

      //To be verified
      if (labels[i].label == label.label) {
        setIsTest(label.label)
      }
    }

  }

  return (
    <section className={styles.searchContent}>
      <aside className={styles.sidebar}>
        <ul>
          {labels.map((label) => {
            return (
              <li key={label.slug}>
                <Link href='#'>
                  <a
                    onClick={() => handleSelectFilter(label)}
                    className={isTest === label.label ? 'active' : ''}
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
          {`Showing ${filteredLength} results for "${searchedContent ? searchedContent : 'talkdesk'
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
