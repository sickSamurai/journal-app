import { configureStore } from '@reduxjs/toolkit'

import { authSlice } from './auth'
import { journalSlice } from './journal'

export const Store = configureStore({
  reducer: {
    authReducer: authSlice.reducer,
    journalReducer: journalSlice.reducer
  }
})
