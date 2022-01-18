import firebase from 'firebase'

const firebaseConfig = {
 apiKey: "AIzaSyAZfkAbJeVw3KTAlJIcIfF8mha8UK0MroM",
  authDomain: "frameworkjsexam.firebaseapp.com",
  projectId: "frameworkjsexam",
  storageBucket: "frameworkjsexam.appspot.com",
  messagingSenderId: "984528466251",
  appId: "1:984528466251:web:cf74ef31409b73f56c78ce",
  measurementId: "G-EE2RPX7N9R",
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const provider = new firebase.auth.GoogleAuthProvider()
const fire = firebase;

export { auth, provider,firebase }
export default db



