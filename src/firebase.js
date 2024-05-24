// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth}  from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmw_sqWJEJXwL55IvpDUT7BvwvaUbecjo",
  authDomain: "cc-cloud-storage-59413.firebaseapp.com",
  projectId: "cc-cloud-storage-59413",
  storageBucket: "cc-cloud-storage-59413.appspot.com",
  messagingSenderId: "187384389263",
  appId: "1:187384389263:web:57f4f746fe9e4e052c1afa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth }

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth}  from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuzxmyCYqaGXwksnuAtz3qQEn6C5zfOTY",
  authDomain: "codeeditorauth.firebaseapp.com",
  projectId: "codeeditorauth",
  storageBucket: "codeeditorauth.appspot.com",
  messagingSenderId: "487815559948",
  appId: "1:487815559948:web:c793d40523cce89bf1e729",
  measurementId: "G-XRPFNFW3C2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export { app, auth }
*/