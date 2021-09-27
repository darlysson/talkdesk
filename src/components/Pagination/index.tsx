import React, { useState } from 'react'
import { Post, Label } from '../../../types'
import { PostItem } from '../PostItem';
import styles from './styles.module.scss'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'

interface PaginationProps {
  data: Post[]
  pageLimit: number
  dataLimit: number
}

export default function Pagination({ data, pageLimit, dataLimit }: PaginationProps) {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  // function changePage(event: React.ChangeEvent<HTMLButtonElement>) {
  //   const pageNumber = Number(event.target.value);
  //   setCurrentPage(pageNumber);
  // }

  function getPaginatedData() {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  }

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill(5).map((_, idx) => start + idx + 1);
  };


  return (
    <div className={styles.paginationWrapper}>
      <button
        onClick={goToPreviousPage}
        className={`${styles.prev} ${currentPage === 1 ? `${styles.hidden}` : ''}`}
      >
        <GrFormPrevious />
      </button>

      {getPaginationGroup().map((item, index) => (
        <button
          key={index}
          // onClick={changePage}
          className={`${styles.paginationItem} ${currentPage === item ? `${styles.active}` : ''}`}
        >
          <span>{item}</span>
        </button>
      ))}

      <button
        onClick={goToNextPage}
        className={`${styles.next} ${currentPage === pages ? `${styles.disabled}` : ''}`}
      >
        <GrFormNext />
      </button>
    </div>
  )
}
