// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "admin-6a3a3.firebaseapp.com",
  projectId: "admin-6a3a3",
  storageBucket: "admin-6a3a3.appspot.com",
  messagingSenderId: "629508691633",
  appId: "1:629508691633:web:0a644f01cc6a095ea1f490",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
