import React, { useState } from 'react'
import Link from 'next/link'

import { Label } from '../../../types'

import styles from './styles.module.scss'

interface sidebarProps {
  labels: Label[]
  filteredData: (value: string) => void
}

export default function Sidebar({ labels, filteredData }: sidebarProps) {
  const [activeLabel, setActiveLabel] = useState('All')

  function handleSelectFilter(label: { label: string }) {
    if (label.label === 'Product') {
      filteredData('All')
    } else if (label.label === 'All') {
      filteredData('')
    } else {
      filteredData(label.label)
    }

    setActiveLabel(label.label)
  }

  return (
    <aside className={styles.sidebar}>
      <ul>
        {labels.map((label: Label) => {
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
  )
}
