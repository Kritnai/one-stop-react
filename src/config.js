// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5G4duXHnwRHgEmN8NCnLH12XAnAw2hC4",
  authDomain: "one-stop-sf221.firebaseapp.com",
  projectId: "one-stop-sf221",
  storageBucket: "one-stop-sf221.appspot.com",
  messagingSenderId: "161329322918",
  appId: "1:161329322918:web:42007a4fed438244358d67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};
