import React, { createContext } from 'react'
import { useApi } from './useApi'
import { getUserInfoURL } from './apiUtils'

export const AppContext = createContext()

export default function AppProvider({ children }) {
  const userState = useApi(getUserInfoURL)

  return <AppContext.Provider value={userState}>{children}</AppContext.Provider>
}
