import React from 'react'
import './ProductCard.css'
import pcImage from '../../../assets/product-pics/Dell-x1.png'
import { ReactComponent as RedeemButton } from '../../../assets/icons/buy-blue.svg'

function ProductCard() {
  return (
    <div className='card'>
      <div className='card-image'>
        <img src={pcImage} alt='dell x1' />
        <button className='redeem-button'>
          <RedeemButton />
        </button>
      </div>
      <div className='small-horizontal-divider'></div>
      <div className='product-info'>
        <p className='product-category'>Laptops</p>
        <p className='product-title'>Dell X1</p>
      </div>
    </div>
  )
}

export default ProductCard
