import React from "react";
import "./App.css";
import { useRef, useState, useEffect } from "react";
import { Login } from "./Login.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Main } from "./Main";

const App = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          phoneNumber: user.phoneNumber,
          email: user.email,
          displayName: user.displayName,
        });
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!user) {
    return <Login />;
  }

  return <Main />;
};

export default App;
