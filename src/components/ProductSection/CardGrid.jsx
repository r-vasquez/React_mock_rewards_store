import React, { useContext } from 'react'
import ProductCard from './ProductCard/ProductCard'
import { useApi } from '../../utils/useApi'
import { getProductsURL } from '../../utils/apiUtils'
import { AppContext } from '../../utils/ContextProvider'
function CardGrid() {
  const { data } = useApi(getProductsURL)
  const {
    data: { points: userPoints }
  } = useContext(AppContext)

  return (
    <article className='card-grid'>
      {data.slice(0, 16).map(product => (
        <ProductCard {...product} key={product._id} userPoints={userPoints} />
      ))}
    </article>
  )
}

export default CardGrid
