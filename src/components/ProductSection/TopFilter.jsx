import React from 'react'

function TopFilter() {
  return (
    <hgroup>
      <div className='filter-grid'>
        <ul className='filter-area'>
          <li>16 of 32 Products</li>
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
