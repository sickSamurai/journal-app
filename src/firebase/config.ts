import { initializeApp } from 'firebase/app'

const FirebaseConfig = {
  apiKey: 'AIzaSyAVoaP4NprQCDxWDNdITN1RpAKyW9tLHlw',
  authDomain: 'journal-app-81ba4.firebaseapp.com',
  projectId: 'journal-app-81ba4',
  storageBucket: 'journal-app-81ba4.appspot.com',
  messagingSenderId: '550001066161',
  appId: '1:550001066161:web:8ed58def7900bfb4a3a290'
}

export const FirebaseApp = initializeApp(FirebaseConfig)
