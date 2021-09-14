import React from 'react'
import styles from './styles.module.scss'

export function SearchArea({ inputContent, searchItems }) {
  return (
    <div className={styles.inputContainer}>
      <input
        type='text'
        placeholder='Type to search'
        onChange={(e) => inputContent(e.target.value)}
      />
      <button type='button' onClick={searchItems}>
        Search
      </button>
    </div>
  )
}
