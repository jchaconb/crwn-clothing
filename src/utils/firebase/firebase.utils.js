// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdoku69WfnNQxd5N-NHPNIkt6UTOR4LQ4",
  authDomain: "crwn-clothing-db-21ca0.firebaseapp.com",
  projectId: "crwn-clothing-db-21ca0",
  storageBucket: "crwn-clothing-db-21ca0.appspot.com",
  messagingSenderId: "38471135283",
  appId: "1:38471135283:web:13a842a8bc20d6703bf346"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);