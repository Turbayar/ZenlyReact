import "./Login.css";
import { useCallback, useEffect, useState } from "react";
import { db } from "./firebase.js";

export const Login = () => {


return (
    <div className="body">
            <div className="login-container">
            <h1>Login</h1>
            <div className="main">
                <div className="login-field">
                    <p>Username</p>
                    <input type="text" placeholder="displayName" className="username"/>
                </div>
                <div className="login-field">
                    <p>Phone Number</p>
                    <input type="number" placeholder="Phone Number" className="phone"/>
                </div>
                <div className="login-field">
                    <p>Email</p>
                    <input type="email" placeholder="Email" className="email"/>
                </div>
            </div>
            <button  id="login-btn">login</button>

            <input type="number" placeholder="Code" className="verify-code"/>
            <button className="login-btn" id="verify-btn">verify</button>
            
        </div>
    </div>
)
}