import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
import "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4qq68ZydGaUEiwThB4eXVLU6f9WStREY",
  authDomain: "a9526601299.firebaseapp.com",
  projectId: "a9526601299",
  storageBucket: "a9526601299.appspot.com",
  messagingSenderId: "853282280131",
  appId: "1:853282280131:web:75acacead44358190f4876",
  measurementId: "G-5VZF4NS011"
};

export default firebase.initializeApp(firebaseConfig)