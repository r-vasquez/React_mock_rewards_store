import React, { useContext, useState } from 'react'
import { AppContext } from '../../utils/ContextProvider'
import { postRedeemCoinsURL, postRequestOptions } from '../../utils/apiUtils'
import './Modal.css'

function ModalAddPoints() {
  const { isOpenPoints, setIsOpenPoints } = useContext(AppContext)

  const [coins, setCoins] = useState(1000)

  if (!isOpenPoints) return null

  const coinOptions = [1000, 5000, 7500]

  const rawBody = `{ "amount": ${coins} }`
  let requestOptions = postRequestOptions(rawBody)

  const redeemCoins = () => {
    fetch(postRedeemCoinsURL, requestOptions)
      .then(response => response.text())
      .then(result => {
        const resultObj = JSON.parse(result)
        console.log(resultObj)
        alert(`You have redeemed: ${coins} coins \nYou have now: ${resultObj['New Points']} coins`)
        window.location.reload()
      })
      .catch(error => console.log('error', error))
  }

  const handleCoinChange = e => setCoins(e.target.value)

  return (
    <>
      <div className='overlay'></div>
      <div className='modal'>
        <button className='close-modal' onClick={() => setIsOpenPoints(false)}>
          &times;
        </button>
        <div className='modal-content'>
          <h2>Want more coins?</h2>
          <div className='select'>
            <select name='slct' id='slct' onChange={e => handleCoinChange(e)}>
              {coinOptions.map(value => (
                <option value={value} key={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          <button onClick={() => redeemCoins()}>Redeem coins</button>
        </div>
      </div>
    </>
  )
}

export default ModalAddPoints
