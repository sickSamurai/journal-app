import { configureStore } from '@reduxjs/toolkit'

import { authSlice } from './auth'
import { journalSlice } from './journal'

export const store = configureStore({
  reducer: {
    AuthReducer: authSlice.reducer,
    JournalReducer: journalSlice.reducer
  }
})

export type StoreState = ReturnType<typeof store.getState>
export type StoreDispatch = typeof store.dispatch
