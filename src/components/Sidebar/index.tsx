import React, { useState } from 'react'
import Link from 'next/link'

import styles from './styles.module.scss'
import { Label } from '../../../types'

interface sidebarProps {
  labels: Label[]
  filteredData: (value: string) => void
}

export default function Sidebar({ labels, filteredData }: sidebarProps) {
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
  )
}
