import firebase from 'firebase'
var provider = new firebase.auth.GoogleAuthProvider()

const firebaseConfig = {
  apiKey: 'AIzaSyDH8fqu4NdcYqCVMg9jWEyprE_uRTKEfjs',
  authDomain: 'houssem-benmustapha.firebaseapp.com',
  projectId: 'houssem-benmustapha',
  storageBucket: 'houssem-benmustapha.appspot.com',
  messagingSenderId: '409651127122',
  appId: '1:409651127122:web:998ae46964f1fdbb1d908b',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default db
