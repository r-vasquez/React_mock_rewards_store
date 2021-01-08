import React, { createContext } from 'react'
import { useApi } from './useApi'
import { getUserInfoURL, getProductsURL } from './apiUtils'

export const AppContext = createContext()

export default function AppProvider({ children }) {
  const userState = useApi(getUserInfoURL)
  const productState = useApi(getProductsURL)

  return <AppContext.Provider value={{ userState, productState }}>{children}</AppContext.Provider>
}
