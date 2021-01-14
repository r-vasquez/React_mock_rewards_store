import React, { useContext } from 'react'
import ProductCard from './ProductCard/ProductCard'
import { AppContext } from '../../utils/ContextProvider'
import { postRedeemItemURL, postRequestOptions } from '../../utils/apiUtils'

function CardGrid({ productList = [] }) {
  const {
    userState: {
      data: { points: userPoints }
    },
    setIsOpenPoints
  } = useContext(AppContext)

  const redeemItem = productId => {
    const rawBody = `{ "productId": "${productId}" }`
    const requestOptions = postRequestOptions(rawBody)

    fetch(postRedeemItemURL, requestOptions)
      .then(response => response.text())
      .then(result => {
        const resultObj = JSON.parse(result)
        alert(resultObj.message)
        window.location.reload()
      })
      .catch(error => console.log('error', error))
  }

  return (
    <article className='card-grid'>
      {productList.map(product => (
        <ProductCard
          {...product}
          key={product._id}
          userPoints={userPoints}
          setIsOpenPoints={setIsOpenPoints}
          redeemItem={redeemItem}
        />
      ))}
    </article>
  )
}

export default CardGrid
