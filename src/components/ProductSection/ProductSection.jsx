import React, { useContext } from 'react'
import './ProductSection.css'
import BottomFilter from './BottomFilter'
import TopFilter from './TopFilter'
import CardGrid from './CardGrid'
import { AppContext } from '../../utils/ContextProvider'
import usePagination from '../../utils/usePagination'

function ProductSection() {
  const {
    productState: { data: products }
  } = useContext(AppContext)
  const productArray = Array.from(products)
  const totalProducts = productArray.length
  const itemsPerPage = 16
  const { currentData: getProductList, next, prev, currentPage, setFilterType } = usePagination(
    productArray,
    itemsPerPage
  )

  return (
    <section className='container'>
      <TopFilter
        totalProducts={totalProducts}
        next={next}
        prev={prev}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setFilterType={setFilterType}
      />
      <div className='horizontal-divider'></div>
      <CardGrid productList={getProductList()} />
      <BottomFilter
        totalProducts={totalProducts}
        next={next}
        prev={prev}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
      />
      <div className='horizontal-divider'></div>
    </section>
  )
}

export default ProductSection
