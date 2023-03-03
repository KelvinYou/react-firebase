// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import { getMessaging } from "firebase/messaging";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from 'firebase/firestore';

import {
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDBYMmy0ime_UTIES9MYZ7_VT8cvH0T2WU",
  authDomain: "reactfirebase-b2dea.firebaseapp.com",
  projectId: "reactfirebase-b2dea",
  storageBucket: "reactfirebase-b2dea.appspot.com",
  messagingSenderId: "520185133808",
  appId: "1:520185133808:web:e8ac6843e9aea0307d2035",
  measurementId: "G-QLW3YV1QF1"
};

// Initialize Firebase
export const Firebase = initializeApp(firebaseConfig);
export const analytics = getAnalytics(Firebase);
export const auth = getAuth();
export const Providers = { google: new GoogleAuthProvider() };
export const db = getFirestore(Firebase);

const messaging = getMessaging(Firebase);
