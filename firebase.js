
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyB8-ByuJk3TM_BApQPHO-DS-vYu_w_OFCI",
  authDomain: "smartenergy-cfbc5.firebaseapp.com",
  projectId: "smartenergy-cfbc5",
  storageBucket: "smartenergy-cfbc5.appspot.com",
  messagingSenderId: "307385160196",
  appId: "1:307385160196:web:75067cd8b6b344ecd39b51",
  measurementId: "G-2K3WR1KZN9"
};


export const FIREBASE_APP = initializeApp(firebaseConfig);

export const auth = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
