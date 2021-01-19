import React from 'react'

function TopFilter({ totalProducts, next, prev, itemsPerPage, currentPage, setFilterType }) {
  return (
    <hgroup>
      <div className='top filter-grid'>
        <div className='product-count'>
          {itemsPerPage * currentPage} of {totalProducts} Products
        </div>

        <div className='filter-divider'></div>

        <div className='filter-area'>
          <p>Sort by:</p>
          <button onClick={() => setFilterType('RECENT')} autoFocus>
            Most Recent
          </button>
          <button onClick={() => setFilterType('LOWEST')}>Lowest Price</button>
          <button onClick={() => setFilterType('HIGHEST')}>Highest Price</button>
        </div>

        <div className='button-wrappers'>
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
      </div>
    </hgroup>
  )
}

export default TopFilter
