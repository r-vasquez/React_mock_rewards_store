import React, { useContext } from 'react'
import ProductCard from './ProductCard/ProductCard'
import { AppContext } from '../../utils/ContextProvider'

function CardGrid({ productList = [] }) {
  const {
    userState: {
      data: { points: userPoints }
    }
  } = useContext(AppContext)

  return (
    <article className='card-grid'>
      {productList.map(product => (
        <ProductCard {...product} key={product._id} userPoints={userPoints} />
      ))}
    </article>
  )
}

export default CardGrid
