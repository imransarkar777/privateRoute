// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoSnRMn8E6i7wDJ6bJY-dLSIuKRf_Vscs",
  authDomain: "privateroute-8fc9d.firebaseapp.com",
  projectId: "privateroute-8fc9d",
  storageBucket: "privateroute-8fc9d.firebasestorage.app",
  messagingSenderId: "704957782460",
  appId: "1:704957782460:web:a92a86c7ace9ae35f5b3b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default {app};