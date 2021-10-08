import React, { useState } from 'react'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'

import { Post } from '../../../types'

import styles from './styles.module.scss'

interface PaginationProps {
  data: Post[]
  pageLimit: number
  dataLimit: number
  handlePaginatedData: (posts: Post[]) => void
}

export default function Pagination({ data, pageLimit, dataLimit, handlePaginatedData }: PaginationProps) {
  const [totalPages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * pageLimit
  const selectedPosts = data.slice(startIndex, startIndex + pageLimit)

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
    handlePaginatedData(selectedPosts)
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(item: number) {
    setCurrentPage(item);
  }

  // function getPaginatedData() {
  //   const startIndex = currentPage * dataLimit - dataLimit;
  //   const endIndex = startIndex + dataLimit;
  //   return data.slice(startIndex, endIndex);
  // }
  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill(10).map((_, idx) => start + idx + 1);
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
          onClick={() => changePage(item)}
          className={`${styles.paginationItem} ${currentPage === item ? `${styles.active}` : ''}`}
        >
          <span>{item}</span>
        </button>
      ))}

      <button
        onClick={goToNextPage}
        className={`${styles.next} ${currentPage >= totalPages ? `${styles.hidden}` : ''}`}
      >
        <GrFormNext />
      </button>
    </div>
  )
}
