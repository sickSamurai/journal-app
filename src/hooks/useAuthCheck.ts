import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { FirebaseAuth } from '../firebase'
import { login, logout } from '../redux/auth'
import { loadNotesThunk } from '../redux/journal'
import { StoreDispatch, StoreState } from '../redux/store'
import { User } from '../types'

const getUser = (firebaseUser: User): User => ({
  uid: firebaseUser.uid,
  displayName: firebaseUser?.displayName,
  email: firebaseUser?.email,
  photoURL: firebaseUser?.photoURL
})

export const useAuthCheck = () => {
  const { authStatus } = useSelector((state: StoreState) => state.AuthReducer)
  const dispatch = useDispatch<StoreDispatch>()

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, firebaseUser => {
      if (firebaseUser != null) {
        const actualUser = getUser(firebaseUser)
        dispatch(login(actualUser))
        dispatch(loadNotesThunk(actualUser.uid))
      } else dispatch(logout())
    })
  }, [])

  return { authStatus }
}
