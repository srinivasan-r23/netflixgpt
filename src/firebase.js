// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ1t2jRrdBGqhFD37_Ath4_JGWOxedPzU",
  authDomain: "netflix-gpt-445ec.firebaseapp.com",
  projectId: "netflix-gpt-445ec",
  storageBucket: "netflix-gpt-445ec.firebasestorage.app",
  messagingSenderId: "1074566161373",
  appId: "1:1074566161373:web:3ddf57f79ccf29e1d50c34",
  measurementId: "G-BJD7T09HTW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
