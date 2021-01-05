import React from 'react'
import { ReactComponent as Logo } from '../../assets/aerolab-logo.svg'
import './TopHeader.css'

function TopHeader() {
  return (
    <header className='head'>
      <Logo title='Store Logo' className='logo' />
      <div className='user'>
        <p>John Kite</p>
        <p>6700 coins</p>
      </div>
    </header>
  )
}

export default TopHeader
