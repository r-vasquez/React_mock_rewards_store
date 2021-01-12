import { useState } from 'react'

/*
 * This custom hooks it's based on : https://dev.to/admantium/react-creating-a-custom-hook-for-pagination-jni
 * The data set must be pased as an Array in order to work.
 */
function usePagination(data = [], itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1)
  const [filterType, setFilterType] = useState('')
  const maxPage = Math.ceil(data.length / itemsPerPage)

  function currentData() {
    const begin = (currentPage - 1) * itemsPerPage
    const end = begin + itemsPerPage
    switch (filterType) {
      case 'RECENT':
        return data.slice(begin, end)
      case 'LOWEST':
        return data.sort((a, b) => a.cost - b.cost).slice(begin, end)
      case 'HIGHEST':
        return data.sort((a, b) => b.cost - a.cost).slice(begin, end)
      default:
        return data.slice(begin, end)
    }
  }

  function next() {
    setCurrentPage(currentPage => Math.min(currentPage + 1, maxPage))
  }

  function prev() {
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1))
  }

  function jumpTo(page) {
    const pageNumber = Math.max(1, page)
    setCurrentPage(currentPage => Math.min(pageNumber, maxPage))
  }

  return { next, prev, jumpTo, currentData, currentPage, maxPage, setFilterType }
}

export default usePagination
