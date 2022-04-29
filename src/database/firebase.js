// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbawltp6yBwq8H3LVaQB6i9ewqpGSsU6c",
  authDomain: "vue-web-app-90e99.firebaseapp.com",
  projectId: "vue-web-app-90e99",
  storageBucket: "vue-web-app-90e99.appspot.com",
  messagingSenderId: "1067183826914",
  appId: "1:1067183826914:web:6bb80fc39701e1482c3bbb",
  measurementId: "G-2JYZ6R28EG"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default app;