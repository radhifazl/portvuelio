import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDm1NyV6vsiw713hPbiXkJ2veEXOekg-qw",
  authDomain: "portfolio-c569e.firebaseapp.com",
  projectId: "portfolio-c569e",
  storageBucket: "portfolio-c569e.appspot.com",
  messagingSenderId: "1098538537268",
  appId: "1:1098538537268:web:0b634c60964cb2c2475561"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }