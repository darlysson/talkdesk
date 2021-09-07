import React from 'react'
import Link from 'next/link'

import styles from './styles.module.scss'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <ul>
        <li>
          <Link href='#'>
            <a className={styles.active}>All</a>
          </Link>
        </li>
        <li>
          <Link href='#'>
            <a>Products</a>
          </Link>
        </li>
        <li>
          <Link href='#'>
            <a>Human</a>
          </Link>
        </li>
        <li>
          <Link href='#'>
            <a>Resources</a>
          </Link>
        </li>
      </ul>
    </aside>
  )
}
