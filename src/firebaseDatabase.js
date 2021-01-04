import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAx2FSU2bivPPz7pS71jUY1a52wtcghwoI',
  authDomain: 'caringtogether-244ad.firebaseapp.com',
  projectId: 'caringtogether-244ad',
  storageBucket: 'caringtogether-244ad.appspot.com',
  messagingSenderId: '968205073513',
  appId: '1:968205073513:web:15361c8190ac003e8e76f8',
  measurementId: 'G-PW4ZR9J43P'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore()
