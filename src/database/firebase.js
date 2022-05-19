// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAItWg0RwzYhQYb8hpyAYLHPuve80upaAI",
  authDomain: "medical-stock-d115c.firebaseapp.com",
  projectId: "medical-stock-d115c",
  storageBucket: "medical-stock-d115c.appspot.com",
  messagingSenderId: "553622257649",
  appId: "1:553622257649:web:962560f889e63ce0534e50",
  measurementId: "G-JTSBGQH86V"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default app;