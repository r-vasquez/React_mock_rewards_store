import React from 'react'

function BottomFilter({ totalProducts, next, prev, itemsPerPage, currentPage }) {
  return (
    <div className='filter-grid'>
      <ul className='foot filter-area'>
        <li>
          {itemsPerPage * currentPage} of {totalProducts} Products
        </li>
      </ul>
      {currentPage > 1 ? (
        <button
          type='button'
          className='btn page-changer prev'
          onClick={() => prev()}
          aria-label='previous-page'></button>
      ) : (
        ''
      )}
      <button
        type='button'
        className='btn page-changer next'
        onClick={() => next()}
        aria-label='next-page'></button>
    </div>
  )
}

export default BottomFilter
