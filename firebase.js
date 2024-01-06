// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgmTs3Rt26sOxWQYBDRS2ACW6SmygnifA",
  authDomain: "adminmanagementt.firebaseapp.com",
  projectId: "adminmanagementt",
  storageBucket: "adminmanagementt.appspot.com",
  messagingSenderId: "491949801480",
  appId: "1:491949801480:web:2c70fd640b2aae159951bd",
  measurementId: "G-46MKQF1Y3D"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB =  getFirestore(FIREBASE_APP);
