// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClXP3ZBnZvjm-5B-W1R3o5WFT5nv9l_k0",
  authDomain: "bookhub-995a9.firebaseapp.com",
  projectId: "bookhub-995a9",
  storageBucket: "bookhub-995a9.firebasestorage.app",
  messagingSenderId: "761791148711",
  appId: "1:761791148711:web:04bb0b8ccda750164c6182",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
