import firebase from "firebase";
var provider = new firebase.auth.GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyBD5aVS1JDUvPKnlTG6NUcYwHIxVra9YGI",
  authDomain: "houssem-ben-mustapha-45efa.firebaseapp.com",
  projectId: "houssem-ben-mustapha-45efa",
  storageBucket: "houssem-ben-mustapha-45efa.appspot.com",
  messagingSenderId: "973163272756",
  appId: "1:973163272756:web:7a508852e3d4e9c0cd0861",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
