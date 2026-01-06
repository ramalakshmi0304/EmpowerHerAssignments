// src/services/auth.service.js
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const signupService = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const loginService = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const logoutService = () => signOut(auth);
