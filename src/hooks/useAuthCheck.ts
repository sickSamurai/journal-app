import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth'
import { useEffect } from 'react'

import { FirebaseAuth } from '../firebase'
import { login, logout } from '../redux/auth'
import { useMyDispatch, useMySelector } from '../redux/hooks'
import { loadNotesThunk } from '../redux/journal'
import { User } from '../types'

const toUser = (firebaseUser: FirebaseUser): User => ({
  uid: firebaseUser.uid,
  displayName: firebaseUser?.displayName,
  email: firebaseUser?.email,
  photoURL: firebaseUser?.photoURL
})

export const useAuthCheck = () => {
  const { authStatus } = useMySelector(state => state.authReducer)
  const dispatch = useMyDispatch()

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, firebaseUser => {
      if (firebaseUser != null) {
        const actualUser = toUser(firebaseUser)
        dispatch(login(actualUser))
        dispatch(loadNotesThunk(actualUser.uid))
      } else dispatch(logout())
    })
  }, [])

  return { authStatus }
}
