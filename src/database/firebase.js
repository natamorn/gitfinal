// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-rotebhxqSd71961FNM0RN9TLMzmxl4Y",
  authDomain: "medical-system-c125e.firebaseapp.com",
  projectId: "medical-system-c125e",
  storageBucket: "medical-system-c125e.appspot.com",
  messagingSenderId: "1041823010079",
  appId: "1:1041823010079:web:fb86d5d012037cbf14742a"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default app;