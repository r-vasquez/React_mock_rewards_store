import React from 'react'
import ProductCard from './ProductCard/ProductCard'
import { useApi } from '../../utils/useApi'
import { getProductsURL } from '../../utils/apiUtils'

function CardGrid() {
  const { data } = useApi(getProductsURL)

  return (
    <article className='card-grid'>
      {data.slice(0, 16).map(product => (
        <ProductCard {...product} key={product._id} />
      ))}
    </article>
  )
}

export default CardGrid
