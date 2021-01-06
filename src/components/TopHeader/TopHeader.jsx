import React from 'react'
import { ReactComponent as Logo } from '../../assets/aerolab-logo.svg'
import coinIcon from '../../assets/icons/coin.svg'
import './TopHeader.css'
import { getUserInfoURL } from '../../utils/apiUtils.js'
import { useApi, apiStates } from '../../utils/useApi'

function TopHeader() {
  const { state, error, data } = useApi(getUserInfoURL)

  return (
    <header className='head'>
      <Logo title='Store Logo' className='logo' />
      <div className='user'>{handleLoading(state, error, data)}</div>
    </header>
  )
}

function handleLoading(state, error, data) {
  switch (state) {
    case apiStates.ERROR:
      return <p>ERROR: {error || 'General error'}</p>
    case apiStates.SUCCESS:
      return (
        <>
          <p>{data.name}</p>
          <div className='point-info'>
            <p>{data.points}</p>
            <img src={coinIcon} alt='coins' />
          </div>
        </>
      )
    default:
      return <p>Loading...</p>
  }
}

export default TopHeader
