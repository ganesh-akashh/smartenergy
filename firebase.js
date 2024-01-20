
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBeqhVTvoKaR0GlBo9aub6__1PLSUNF52I",
  authDomain: "smart-irrigation-98540.firebaseapp.com",
  databaseURL: "https://smart-irrigation-98540-default-rtdb.firebaseio.com",
  projectId: "smart-irrigation-98540",
  storageBucket: "smart-irrigation-98540.appspot.com",
  messagingSenderId: "298107680780",
  appId: "1:298107680780:web:2c75692fe9513471471629",
  measurementId: "G-5FM87NKRGG"
};


export const FIREBASE_APP = initializeApp(firebaseConfig);

export const auth = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
