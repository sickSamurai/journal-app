import { tryGoogleSignIn, tryRegister, trySignIn } from '../../firebase'
import { MyThunkAction } from '../types/MyThunkAction'
import { authSlice } from './authSlice'

export const { startChecking, login, logout, fail, cleanErrors } = authSlice.actions

export function registerThunk(name: string, email: string, password: string): MyThunkAction {
  return async dispatch => {
    dispatch(startChecking())
    const { ok, user, error } = await tryRegister(name, email, password)
    if (ok) dispatch(login(user!))
    else dispatch(fail(error!))
  }
}

export function signInThunk(email: string, password: string): MyThunkAction {
  return async dispatch => {
    const { ok, user, error } = await trySignIn(email, password)
    if (ok) dispatch(login(user!))
    else dispatch(fail(error!))
  }
}

export function googleSignInThunk(): MyThunkAction {
  return async dispatch => {
    dispatch(startChecking())
    const { ok, user, error } = await tryGoogleSignIn()
    if (ok) dispatch(login(user!))
    else dispatch(fail(error!))
  }
}
