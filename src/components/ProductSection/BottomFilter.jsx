import React from 'react'

function BottomFilter({ totalProducts }) {
  return (
    <div className='filter-grid'>
      <ul className='foot filter-area'>
        <li>16 of {totalProducts} Products</li>
      </ul>
      <button type='button' className='btn page-changer'></button>
    </div>
  )
}

export default BottomFilter
