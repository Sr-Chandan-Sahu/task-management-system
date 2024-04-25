// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-5efdb.firebaseapp.com",
  projectId: "taskmanager-5efdb",
  storageBucket: "taskmanager-5efdb.appspot.com",
  messagingSenderId: "619828745403",
  appId: "1:619828745403:web:b4d3c37e595a684a03859e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);