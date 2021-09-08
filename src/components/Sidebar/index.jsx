import React, { useState } from 'react'
import Link from 'next/link'

import styles from './styles.module.scss'

export function Sidebar({ labels }) {
  const [isActive, setIsActive] = useState(false)

  function handleLabel() {
    labels.forEach((label) => {
      console.log(label)
    })
  }

  return (
    <aside className={styles.sidebar}>
      <ul>
        {labels.map((label) => {
          return (
            <li key={label.slug}>
              <Link href='#'>
                <a
                  onClick={handleLabel}
                  className={label.label == 'App' ? styles.active : ''}
                >
                  {label.label}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
