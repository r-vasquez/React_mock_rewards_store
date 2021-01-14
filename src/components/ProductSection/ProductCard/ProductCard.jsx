import React, { useState } from 'react'
import './ProductCard.css'
import { ReactComponent as RedeemButton } from '../../../assets/icons/buy-blue.svg'
import { ReactComponent as WhiteRedeemButton } from '../../../assets/icons/buy-white.svg'
import { ReactComponent as CoinIcon } from '../../../assets/icons/coin.svg'

function ProductCard({ img, name, category, cost, userPoints, _id, setIsOpenPoints, redeemItem }) {
  const [isHovered, setIsHovered] = useState(false)

  const toggleHover = status => {
    setIsHovered(status)
  }

  let ButtonToDisplay = ''
  const isFund = userPoints - cost >= 0
  if (isFund) {
    ButtonToDisplay = (
      <button className='buy-button' aria-label='redeem-button'>
        {isHovered ? <WhiteRedeemButton /> : <RedeemButton />}
      </button>
    )
  } else
    ButtonToDisplay = (
      <button className='no-funds' onClick={() => setIsOpenPoints(true)} aria-label='nofund-button'>
        <span> You need {cost - userPoints} </span>
        <CoinIcon />
      </button>
    )

  return (
    <div
      className={isFund ? 'card fund' : 'card'}
      onMouseEnter={() => toggleHover(true)}
      onMouseLeave={() => toggleHover(false)}>
      <div className='card-image'>
        <img src={img.url} alt='dell x1' />
        {ButtonToDisplay}
      </div>
      <div className='small-horizontal-divider'></div>
      <div className='product-info'>
        <p className='product-category'>{category}</p>
        <p className='product-title'>{name}</p>
      </div>
      {isHovered && isFund ? (
        <div className='redeem-panel'>
          <div className='redeem-price'>
            <p>{cost}</p>
            <CoinIcon />
          </div>
          <button className='redeem-button' onClick={() => redeemItem(_id)}>
            Redeem Now
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default ProductCard
