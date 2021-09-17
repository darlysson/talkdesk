import React, { useState } from 'react'
import Link from 'next/link'

import styles from './styles.module.scss'

interface sidebarProps {
  labels: [
    {
      label: string,
      slug: string,
    }
  ]
}

export function Sidebar({ labels }: sidebarProps) {
  const [isActive, setIsActive] = useState(false)

  function handleLabel(index: number) {
    // e.preventDefault()
    // console.log(element)
    console.log(index)
  }

  return (
    <aside className={styles.sidebar}>
      <ul>
        {labels.map((label, index) => {
          return (
            <li key={label.slug}>
              <Link href='#'>
                <a
                  onClick={() => handleLabel(index)}
                  className={isActive ? styles.active : ''}
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
