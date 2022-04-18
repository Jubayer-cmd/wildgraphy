// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAefiQT3aw9sE8eeVCMmDDJtmw2lXlbvc",
  authDomain: "wild-graphy.firebaseapp.com",
  projectId: "wild-graphy",
  storageBucket: "wild-graphy.appspot.com",
  messagingSenderId: "218083920730",
  appId: "1:218083920730:web:273c81fae94f8f3061c163",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
