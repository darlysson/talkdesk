import React, { useState } from 'react'
import styles from './styles.module.scss'

export function SearchArea() {
  const [search, setSearch] = useState('')

  function handleSearchItem(e) {
    e.preventDefault()
    console.log(search)
    // const filtered = posts.find((post) => post.title === search)
    // setPosts([filtered])
  }

  return (
    <div className={styles.inputContainer}>
      <input
        type='text'
        placeholder='Type to search'
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type='button' onClick={handleSearchItem}>
        Search
      </button>
    </div>
  )
}
