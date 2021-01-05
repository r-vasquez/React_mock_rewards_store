import React, { useState, useEffect } from 'react'
import { ReactComponent as Logo } from '../../assets/aerolab-logo.svg'
import coinIcon from '../../assets/icons/coin.svg'
import './TopHeader.css'
import { getUserInfoURL, headers } from '../../utils/apiUtils.js'

function TopHeader() {
  // TODO: Move Data Fetching to a custom hook
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(getUserInfoURL, headers)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(e => console.error(e))
  }, [])

  return (
    <header className='head'>
      <Logo title='Store Logo' className='logo' />
      <div className='user'>
        <p>{data.name}</p>
        <div className='point-info'>
          <p>{data.points}</p>
          <img src={coinIcon} alt='coins' />
        </div>
      </div>
    </header>
  )
}

export default TopHeader
