import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBafP_r7IOtiJkOW_FGFtw8Y8_GeaE6M-k",
  authDomain: "nour-tebourski.firebaseapp.com",
  projectId: "nour-tebourski",
  storageBucket: "nour-tebourski.appspot.com",
  messagingSenderId: "1050789919935",
  appId: "1:1050789919935:web:86a8a42392e667a0d2da0a",
  measurementId: "G-76BNN520R3",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();
const fire = firebase;

export { auth, provider, firebase, db };
