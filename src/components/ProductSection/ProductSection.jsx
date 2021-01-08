import React, { useContext } from 'react'
import './ProductSection.css'
import BottomFilter from './BottomFilter'
import TopFilter from './TopFilter'
import CardGrid from './CardGrid'
import { AppContext } from '../../utils/ContextProvider'

function ProductSection() {
  const {
    productState: { data: products }
  } = useContext(AppContext)

  const totalProducts = Array.from(products).length

  return (
    <section className='container'>
      <TopFilter totalProducts={totalProducts} />
      <div className='horizontal-divider'></div>
      <CardGrid />
      <BottomFilter totalProducts={totalProducts} />
      <div className='horizontal-divider'></div>
    </section>
  )
}

export default ProductSection
