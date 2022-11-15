import { FirebaseError } from 'firebase/app'
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth'

import { User } from '../types'
import { FirebaseApp } from './config'

export const FirebaseAuth = getAuth(FirebaseApp)

interface SignInResult {
  ok: boolean
  user?: User
  error?: string
}
export const GoogleProvider = new GoogleAuthProvider()

export const tryGoogleSignIn = async (): Promise<SignInResult> => {
  try {
    const userCredential = await signInWithPopup(FirebaseAuth, GoogleProvider)
    const user: User = {
      uid: userCredential.user.uid,
      displayName: userCredential.user.displayName,
      email: userCredential.user.email,
      photoURL: userCredential.user.photoURL
    }
    return { ok: true, user }
  } catch (error) {
    if (error instanceof FirebaseError) return { ok: false, error: error.message }
    else return { ok: false, error: 'Unknown error' }
  }
}

export const tryRegister = async (name: string, email: string, password: string): Promise<SignInResult> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
    const user: User = {
      uid: userCredential.user.uid,
      email: userCredential.user.email,
      displayName: name,
      photoURL: null
    }
    if (FirebaseAuth.currentUser != null)
      await updateProfile(FirebaseAuth.currentUser, { displayName: user.displayName })
    return { ok: true, user }
  } catch (error) {
    if (error instanceof FirebaseError) return { ok: false, error: error.message }
    else return { ok: false, error: 'Unknown error' }
  }
}

export const trySignIn = async (email: string, password: string): Promise<SignInResult> => {
  try {
    const userCredential = await signInWithEmailAndPassword(FirebaseAuth, email, password)
    const user: User = {
      uid: userCredential.user.uid,
      email: userCredential.user.email,
      displayName: userCredential.user.displayName,
      photoURL: userCredential.user.photoURL
    }
    return { ok: true, user }
  } catch (error) {
    if (error instanceof FirebaseError) return { ok: false, error: error.message }
    else return { ok: false, error: 'Unknown error' }
  }
}

export async function logoutFromFirebase(): Promise<void> {
  await FirebaseAuth.signOut()
}
