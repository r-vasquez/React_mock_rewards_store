import React, { createContext, useState } from 'react'
import { useApi } from './useApi'
import { getUserInfoURL, getProductsURL } from './apiUtils'

export const AppContext = createContext()

export default function AppProvider({ children }) {
  const userState = useApi(getUserInfoURL)
  const productState = useApi(getProductsURL)
  const [isOpenPoints, setIsOpenPoints] = useState(false)

  return (
    <AppContext.Provider value={{ userState, productState, isOpenPoints, setIsOpenPoints }}>
      {children}
    </AppContext.Provider>
  )
}
