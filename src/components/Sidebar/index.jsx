import React from 'react'
import Link from 'next/link'

import styles from './styles.module.scss'

export function Sidebar({ labels }) {
  return (
    <aside className={styles.sidebar}>
      <ul>
        {labels.map((label) => {
          return (
            <li key={label.slug}>
              <Link href='#'>
                <a className={styles.active}>{label.label}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
