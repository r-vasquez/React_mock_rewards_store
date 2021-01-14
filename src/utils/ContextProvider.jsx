import React, { createContext, useState } from 'react'
import { useApi } from './useApi'
import { getUserInfoURL, getProductsURL, getUserHistoryURL } from './apiUtils'

export const AppContext = createContext()

export default function AppProvider({ children }) {
  const userState = useApi(getUserInfoURL)
  const productState = useApi(getProductsURL)
  const [isOpenPoints, setIsOpenPoints] = useState(false)
  const [isOpenHistory, setIsOpenHistory] = useState(false)
  const historyState = useApi(getUserHistoryURL)

  return (
    <AppContext.Provider
      value={{
        userState,
        productState,
        historyState,
        isOpenPoints,
        setIsOpenPoints,
        isOpenHistory,
        setIsOpenHistory
      }}>
      {children}
    </AppContext.Provider>
  )
}
