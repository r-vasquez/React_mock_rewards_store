import React, { useContext } from 'react'
import './TopHeader.css'
import { ReactComponent as Logo } from '../../assets/aerolab-logo.svg'
import coinIcon from '../../assets/icons/coin.svg'
import { AppContext } from '../../utils/ContextProvider'
import { apiStates } from '../../utils/useApi'

function TopHeader() {
  const {
    userState: { state: userState, error: userError, data: userData }
  } = useContext(AppContext)
  return (
    <header className='head'>
      <Logo title='Store Logo' className='logo' />
      <div className='user'>{handleLoading(userState, userError, userData)}</div>
    </header>
  )
}

function handleLoading(userState, userError, { name, points }) {
  switch (userState) {
    case apiStates.ERROR:
      return <p>ERROR: {userError || 'General error'}</p>
    case apiStates.SUCCESS:
      return (
        <>
          <p>{name}</p>
          <div className='point-info'>
            <p>{points}</p>
            <img src={coinIcon} alt='coins' />
          </div>
        </>
      )
    default:
      return <p>Loading...</p>
  }
}

export default TopHeader
