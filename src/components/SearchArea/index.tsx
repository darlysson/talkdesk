import React, { ChangeEvent } from 'react'
import styles from './styles.module.scss'

interface searchAreaProps {
  inputContent: (value: string) => void;
  searchItems: (e: ChangeEvent<EventTarget>) => void;
}

export function SearchArea({ inputContent, searchItems }: searchAreaProps) {
  return (
    <form
      onSubmit={(e: ChangeEvent<EventTarget>) => searchItems(e)}
      className={styles.inputContainer}>

      <input
        type='text'
        placeholder='Type to search'
        // value={e.target.value}
        onChange={(e) => inputContent(e.target.value)}
      />
      <button
        type='button'
        onClick={(e: ChangeEvent<EventTarget>) => searchItems(e)}>

        Search
      </button>
    </form>
  )
}
