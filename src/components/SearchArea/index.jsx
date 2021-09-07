import React from 'react'
import styles from './styles.module.scss'

export function SearchArea() {
  return (
    <div className={styles.inputContainer}>
      <input type='text' placeholder='Type to search' />
      <button type='button'>Search</button>
    </div>
  )
}
