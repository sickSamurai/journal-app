import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AuthState, User } from '../../types'

export const authSlice = createSlice({
  name: 'authSlice',
  initialState: <AuthState>{
    authStatus: 'checking',
    user: null,
    errorMessage: null
  },
  reducers: {
    startChecking(state) {
      state.authStatus = 'checking'
      state.errorMessage = null
    },

    login(state, action: PayloadAction<User>) {
      state.authStatus = 'authenticated'
      state.user = action.payload
      state.errorMessage = null
    },

    fail(state, action: PayloadAction<string>) {
      if (state.authStatus === 'checking') state.authStatus = 'not-authenticated'
      state.errorMessage = action.payload
    },

    logout(state) {
      state.authStatus = 'not-authenticated'
      state.user = null
      state.errorMessage = null
    },

    cleanErrors(state) {
      state.errorMessage = null
    }
  }
})
