import React, { useContext } from 'react'
import ProductCard from './ProductCard/ProductCard'
import { AppContext } from '../../utils/ContextProvider'

function CardGrid() {
  const {
    userState: {
      data: { points: userPoints }
    },
    productState: { data: products }
  } = useContext(AppContext)

  return (
    <article className='card-grid'>
      {products.slice(0, 16).map(product => (
        <ProductCard {...product} key={product._id} userPoints={userPoints} />
      ))}
    </article>
  )
}

export default CardGrid
