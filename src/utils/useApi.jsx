import { useState, useEffect } from 'react'
import { headers } from './apiUtils.js'

export const apiStates = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR'
}

export const useApi = url => {
  const [hookState, setHookState] = useState({
    state: apiStates.LOADING,
    error: '',
    data: []
  })

  useEffect(() => {
    const setPartData = partialData => {
      setHookState(hookState => (hookState = { ...hookState, ...partialData }))
    }

    setPartData({
      state: apiStates.LOADING
    })
    fetch(url, headers)
      .then(response => response.json())
      .then(data => {
        setPartData({
          state: apiStates.SUCCESS,
          data
        })
      })
      .catch(() => {
        setPartData({
          state: apiStates.ERROR,
          error: 'fetch failed'
        })
      })
  }, [url])

  return hookState
}
