import { initializeApp } from "firebase/app";
// import 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7eHvHD9OXVIEUU1K_KyavzPfhdkhZYaM",
  authDomain: "leaply-nest.firebaseapp.com",
  projectId: "leaply-nest",
  storageBucket: "leaply-nest.appspot.com",
  messagingSenderId: "294575023785",
  appId: "1:294575023785:web:a8cda7dfa764fa86a9abb8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
