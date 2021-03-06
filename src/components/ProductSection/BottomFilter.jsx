import React from 'react'

function BottomFilter({ totalProducts, next, prev, itemsPerPage, currentPage }) {
  return (
    <div className='foot filter-grid'>
      <div className='foot filter-area'>
        <p>
          {itemsPerPage * currentPage} of {totalProducts} Products
        </p>
      </div>
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
