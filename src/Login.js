import "./Login.css";
import { useRef, useEffect, useState } from "react";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

export const Login = () => {
  const [value, setValue] = useState("");

  const recaptchaVerifier = useRef();
  const confirmationResult = useRef();

  useEffect(() => {
    const auth = getAuth();
    recaptchaVerifier.current = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
  }, []);

  const onClickLogin = async () => {
    const auth = getAuth();
    const phoneNumber = `+976${value}`;
    confirmationResult.current = await signInWithPhoneNumber(
      auth,
      phoneNumber,
      recaptchaVerifier.current
    );

    setValue("");
  };

  const onClickCheckCode = async () => {
    const code = value;
    await confirmationResult.current.confirm(code);
  };

  return (
    <div className="body">
      <div className="login-container">
        <h1>Login</h1>
        <div className="main">
          <div className="login-field">
            <p>Username</p>
            <input
              type="text"
              placeholder="Not required"
              className="username"
            />
          </div>
          <div className="login-field">
            <p>Phone Number</p>
            <input
              type="text"
              placeholder="Phone Number"
              className="phone"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>
        <button onClick={onClickLogin} id="login-btn">
          login
        </button>
        <div>
          <input type="text" placeholder="Code" value={ value } onChange={ (e) => setValue(e.target.value)} className="verify-code" />
          <button
            className="login-btn"
            id="verify-btn"
            onClick={onClickCheckCode}
          >
            verify
          </button>
        </div>
        <div id="recaptcha-container"></div>
      </div>
    </div>
  );
};
