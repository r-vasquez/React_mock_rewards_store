import React, { useContext } from 'react'
import ProductCard from './ProductCard/ProductCard'
import { AppContext } from '../../utils/ContextProvider'

function CardGrid({ productList = [] }) {
  const {
    userState: {
      data: { points: userPoints }
    },
    setIsOpenPoints
  } = useContext(AppContext)

  return (
    <article className='card-grid'>
      {productList.map(product => (
        <ProductCard
          {...product}
          key={product._id}
          userPoints={userPoints}
          setIsOpenPoints={setIsOpenPoints}
        />
      ))}
    </article>
  )
}

export default CardGrid
