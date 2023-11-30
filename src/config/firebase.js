// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgHhykwM6VgsflbvWYt4TfV4o1CeZpnlk",
  authDomain: "fir-contact-app-7fd3f.firebaseapp.com",
  projectId: "fir-contact-app-7fd3f",
  storageBucket: "fir-contact-app-7fd3f.appspot.com",
  messagingSenderId: "717372622342",
  appId: "1:717372622342:web:5cfe38493da6e6f6b66587",
  measurementId: "G-GBMV1WMSZ8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);