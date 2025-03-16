// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, addDoc, collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1eAh55oR8B40w50ktRObkbef7BH4qCwM",
  authDomain: "choinek-github-io.firebaseapp.com",
  projectId: "choinek-github-io",
  storageBucket: "choinek-github-io.firebasestorage.app",
  messagingSenderId: "197514822847",
  appId: "1:197514822847:web:3fc1fab509e30b7d7f720a",
  measurementId: "G-6ZW60426P0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, addDoc, collection };