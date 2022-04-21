// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyB-rotebhxqSd71961FNM0RN9TLMzmxl4Y",
  authDomain: "medical-system-c125e.firebaseapp.com",
  projectId: "medical-system-c125e",
  storageBucket: "medical-system-c125e.appspot.com",
  messagingSenderId: "1041823010079",
  appId: "1:1041823010079:web:80eeb7ef3ddaad2d14742a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig) ;

export { app };

