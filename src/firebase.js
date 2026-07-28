import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyC3FfcLZWVqRmPvxZbTF66VqOX8EmAKJMk',
  authDomain: 'krishnendhu-portfolio.firebaseapp.com',
  projectId: 'krishnendhu-portfolio',
  storageBucket: 'krishnendhu-portfolio.firebasestorage.app',
  messagingSenderId: '67803589443',
  appId: '1:67803589443:web:64aaf4271f965cde7a1df6',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)