import React from "react";
import './App.css';
import { useRef, useState, useEffect } from "react";
import {Login} from "./Login.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";


function App() {

  

  return (
    <Login/>
  );
}



export default App;
