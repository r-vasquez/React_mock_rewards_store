import React from 'react'

function TopFilter({ totalProducts }) {
  return (
    <hgroup>
      <div className='filter-grid'>
        <ul className='filter-area'>
          <li>16 of {totalProducts} Products</li>
          <li className='filter-divider'></li>
          <li>Sort by:</li>
          <li>
            <a href='/' role='button'>
              Most Recent
            </a>
          </li>
          <li>
            <a href='/' role='button'>
              Lowest Price
            </a>
          </li>
          <li>
            <a href='/' role='button'>
              Highest Price
            </a>
          </li>
        </ul>
        <button type='button' className='btn page-changer'></button>
      </div>
    </hgroup>
  )
}

export default TopFilter
