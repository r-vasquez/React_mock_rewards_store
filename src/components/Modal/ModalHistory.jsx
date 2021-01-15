import React, { useContext } from 'react'
import { AppContext } from '../../utils/ContextProvider'
import './Modal.css'

function ModalHistory() {
  const {
    historyState: { data },
    isOpenHistory,
    setIsOpenHistory
  } = useContext(AppContext)

  if (!isOpenHistory) return null

  return (
    <>
      <div className='overlay'></div>
      <div className='modal'>
        <button className='close-modal' onClick={() => setIsOpenHistory(false)}>
          &times;
        </button>
        <section className='modal-content'>
          <h3>Purchase History</h3>
          <ul>
            {data.map(purchase => (
              <div key={purchase.createDate}>
                <p>{purchase.name}</p>
                <ul>
                  <li>Cost: {purchase.cost}</li>
                  <li>Purchase Date: {purchase.createDate.slice(0, 10)}</li>
                  <li>
                    Image for reference{' '}
                    <a target='_blank' rel='noreferrer' href={purchase.img.url}>
                      here
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </ul>
        </section>
      </div>
    </>
  )
}

export default ModalHistory
