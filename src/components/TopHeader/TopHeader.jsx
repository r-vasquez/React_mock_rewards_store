import React, { useContext } from 'react'
import './TopHeader.css'
import { ReactComponent as Logo } from '../../assets/aerolab-logo.svg'
import coinIcon from '../../assets/icons/coin.svg'
import { AppContext } from '../../utils/ContextProvider'
import { apiStates } from '../../utils/useApi'

function TopHeader() {
  const {
    userState: { state: userState, error: userError, data: userData },
    setIsOpenPoints,
    setIsOpenHistory
  } = useContext(AppContext)
  return (
    <header className='head'>
      <Logo title='Store Logo' className='logo' />
      <div className='user'>
        {handleLoading(userState, userError, userData, setIsOpenPoints, setIsOpenHistory)}
      </div>
    </header>
  )
}

function handleLoading(userState, userError, { name, points }, setIsOpenPoints, setIsOpenHistory) {
  switch (userState) {
    case apiStates.ERROR:
      return <p>ERROR: {userError || 'General error'}</p>
    case apiStates.SUCCESS:
      return (
        <>
          <p>{name}</p>
          <button className='btn-header point-info' onClick={() => setIsOpenPoints(true)}>
            {points}
            <img src={coinIcon} alt='coins' />
          </button>
          <button className='btn-header' onClick={() => setIsOpenHistory(true)}>
            History
          </button>
        </>
      )
    default:
      return <p>Loading...</p>
  }
}

export default TopHeader
