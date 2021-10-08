import React, { useState, FormEvent } from 'react'
import styles from './styles.module.scss'
import { IoMdClose } from 'react-icons/io'

interface searchAreaProps {
  handleSearchItem: (e: FormEvent<EventTarget>, inputData: string) => void;
}

export function SearchArea({ handleSearchItem }: searchAreaProps) {
  const [inputValue, setInputValue] = useState('')

  return (
    <form
      onSubmit={(e: FormEvent<EventTarget>) => handleSearchItem(e, inputValue)}
      className={styles.form}>

      <div className={styles.inputContainer}>
        <input
          type='text'
          placeholder='Type to search'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {inputValue && <IoMdClose onClick={() => setInputValue('')} />}
      </div>

      <button
        type='button'
        onClick={(e: FormEvent<EventTarget>) => handleSearchItem(e, inputValue)}>
        Search
      </button>
    </form>
  )
}
