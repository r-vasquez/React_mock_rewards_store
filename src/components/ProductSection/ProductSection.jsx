import React from 'react'
import './ProductSection.css'
import BottomFilter from './BottomFilter'
import TopFilter from './TopFilter'
import CardGrid from './CardGrid'

function ProductSection() {
  return (
    <section className='container'>
      <TopFilter />
      <div className='horizontal-divider'></div>
      <CardGrid />
      <BottomFilter />
      <div className='horizontal-divider'></div>
    </section>
  )
}

export default ProductSection
