import React, { useState } from 'react'
import './ProductCard.css'
import { ReactComponent as RedeemButton } from '../../../assets/icons/buy-blue.svg'
import { ReactComponent as WhiteRedeemButton } from '../../../assets/icons/buy-white.svg'
import { ReactComponent as CoinIcon } from '../../../assets/icons/coin.svg'

function ProductCard({ img, name, category, cost }) {
  const [isHovered, setIsHovered] = useState(false)

  const toggleHover = status => {
    setIsHovered(status)
  }

  return (
    <div
      className='card'
      onMouseEnter={() => toggleHover(true)}
      onMouseLeave={() => toggleHover(false)}>
      <div className='card-image'>
        <img src={img.url} alt='dell x1' />
        <button className='buy-button'>
          {isHovered ? <WhiteRedeemButton /> : <RedeemButton />}
        </button>
      </div>
      <div className='small-horizontal-divider'></div>
      <div className='product-info'>
        <p className='product-category'>{category}</p>
        <p className='product-title'>{name}</p>
      </div>
      {isHovered ? (
        <div className='redeem-panel'>
          <div className='redeem-price'>
            <p>{cost}</p>
            <CoinIcon />
          </div>
          <button className='redeem-button'>Redeem Now</button>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default ProductCard
