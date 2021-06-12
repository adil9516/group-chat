import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyCmUdOSQhDv6Mi6OgKFL_f-N4IojM-6k2Y",
  authDomain: "messenger-clone-b8501.firebaseapp.com",
  projectId: "messenger-clone-b8501",
  storageBucket: "messenger-clone-b8501.appspot.com",
  messagingSenderId: "936490539999",
  appId: "1:936490539999:web:6025bee5c04b742a7b426a",
  measurementId: "G-KPHS2E00JR"
});

const db = firebaseApp.firestore();

export default db ;