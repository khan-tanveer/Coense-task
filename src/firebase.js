import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCGB2xQ2gQB_7AjgN9U2AZyjtdvhlwMJrM",
  authDomain: "coense-task1.firebaseapp.com",
  projectId: "coense-task1",
  storageBucket: "coense-task1.appspot.com",
  messagingSenderId: "1026626793077",
  appId: "1:1026626793077:web:3880dd0f67468ac693123c",
  measurementId: "G-PXV68RHWX9",
});

const db = firebaseApp.firestore();

export default db;
