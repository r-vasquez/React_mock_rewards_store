import React from 'react'
import './ProductCard.css'
import { ReactComponent as RedeemButton } from '../../../assets/icons/buy-blue.svg'

function ProductCard({ img, name, category }) {
  return (
    <div className='card'>
      <div className='card-image'>
        <img src={img.url} alt='dell x1' />
        <button className='redeem-button'>
          <RedeemButton />
        </button>
      </div>
      <div className='small-horizontal-divider'></div>
      <div className='product-info'>
        <p className='product-category'>{category}</p>
        <p className='product-title'>{name}</p>
      </div>
    </div>
  )
}

export default ProductCard
