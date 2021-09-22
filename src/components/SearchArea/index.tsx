import React from 'react'
import styles from './styles.module.scss'

interface searchAreaProps {
  inputContent: (value: string) => void;
  searchItems: (e: React.ChangeEvent<EventTarget>) => void;
}

export function SearchArea({ inputContent, searchItems }: searchAreaProps) {
  return (
    <form
      onSubmit={(e: React.ChangeEvent<EventTarget>) => searchItems(e)}
      className={styles.inputContainer}>

      <input
        type='text'
        placeholder='Type to search'
        onChange={(e) => inputContent(e.target.value)}
      />
      <button
        type='button'
        onClick={(e: React.ChangeEvent<EventTarget>) => searchItems(e)}>

        Search
      </button>
    </form>
  )
}
