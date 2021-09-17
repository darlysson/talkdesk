import React, { useState } from 'react'
import Link from 'next/link'
import { Labels } from '../../../types'

import styles from './styles.module.scss'

export function Sidebar({ labels }: Labels) {
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
