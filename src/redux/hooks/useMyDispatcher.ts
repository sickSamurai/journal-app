import { useDispatch } from 'react-redux'

import { Store } from '../store'

type StoreDispatch = typeof Store.dispatch

export const useMyDispatch = () => {
  return useDispatch<StoreDispatch>()
}
