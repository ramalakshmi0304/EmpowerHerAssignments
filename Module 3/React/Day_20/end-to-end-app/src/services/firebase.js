import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: "end-to-end-todos-app.firebasestorage.app",
  messagingSenderId: "850266043184",
  appId: "1:850266043184:web:3a36cfb4bbaafcc7870ef5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ CORRECT EXPORTS
export const auth = getAuth(app);
export const db = getFirestore(app);
