import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "admin-6a3a3.firebaseapp.com",
  projectId: "admin-6a3a3",
  storageBucket: "admin-6a3a3.appspot.com",
  messagingSenderId: "629508691633",
  appId: "1:629508691633:web:0a644f01cc6a095ea1f490",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const auth = getAuth();
export const storage = getStorage(app);
