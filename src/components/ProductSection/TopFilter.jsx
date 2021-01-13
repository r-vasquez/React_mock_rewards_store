import React from 'react'

function TopFilter({ totalProducts, next, prev, itemsPerPage, currentPage, setFilterType }) {
  return (
    <hgroup>
      <div className='filter-grid'>
        <ul className='filter-area'>
          <li>
            {itemsPerPage * currentPage} of {totalProducts} Products
          </li>
          <li className='filter-divider'></li>
          <li>Sort by:</li>
          <li>
            <button onClick={() => setFilterType('RECENT')} autoFocus>
              Most Recent
            </button>
          </li>
          <li>
            <button onClick={() => setFilterType('LOWEST')}>Lowest Price</button>
          </li>
          <li>
            <button onClick={() => setFilterType('HIGHEST')}>Highest Price</button>
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
    </hgroup>
  )
}

export default TopFilter
