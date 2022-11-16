import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { Store } from '../store'

type StoreState = ReturnType<typeof Store.getState>

export const useMySelector: TypedUseSelectorHook<StoreState> = useSelector
