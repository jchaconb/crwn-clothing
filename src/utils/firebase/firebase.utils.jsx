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
  apiKey: "AIzaSyD2KkN6L8WCX8SjXTnvV9Q63yS1n6zNCUw",
  authDomain: "crwn-clothing-db-2023-71717.firebaseapp.com",
  projectId: "crwn-clothing-db-2023-71717",
  storageBucket: "crwn-clothing-db-2023-71717.appspot.com",
  messagingSenderId: "821408054076",
  appId: "1:821408054076:web:dfedda3d1453d33431bc39"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);