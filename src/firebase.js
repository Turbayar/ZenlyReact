import { initializeApp } from "firebase/app";
// import 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCF9gElLC3H7yXnDmGbsXVrkuwluFGtae0",
    authDomain: "leaply-8eb1e.firebaseapp.com",
    projectId: "leaply-8eb1e",
    storageBucket: "leaply-8eb1e.appspot.com",
    messagingSenderId: "969549718431",
    appId: "1:969549718431:web:63fc11e6b54331000353aa"
  };
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);