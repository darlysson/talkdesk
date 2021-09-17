import React from 'react'
import styles from './styles.module.scss'

interface searchAreaProps {
  inputContent: (value: string) => void;
  searchItems: () => void;
}

export function SearchArea({ inputContent, searchItems }: searchAreaProps) {
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
