// src/authService.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";

// Sign Up Function
export const signUp = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

// Login Function
export const login = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};
