import React from 'react'
import Link from 'next/link'

export function Sidebar() {
  return (
    <aside>
      <ul>
        <li>
          <Link href='#'>
            <a>All</a>
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
