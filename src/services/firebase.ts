import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  projectId: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
