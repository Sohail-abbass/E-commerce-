// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const Firebase = {
  apiKey: "AIzaSyD-74Zeg-eoRk-7Z3DtoBszFxh_E96F0DM",
  authDomain: "nestcart-c718f.firebaseapp.com",
  projectId: "nestcart-c718f",
  storageBucket: "nestcart-c718f.appspot.com",
  messagingSenderId: "107073609647",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
const app = initializeApp(Firebase);

// Initialize Firebase Authentication
export const auth = getAuth(app);
