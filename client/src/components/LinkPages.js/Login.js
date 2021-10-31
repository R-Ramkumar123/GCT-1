import React from "react";
import "../LinkPages.js/login.css";
import GCT from "../images/GCT.png";

function Login() {
  return (
    <div className="lo-container">
      <div className="lo-logo">
        <img src={GCT} />
      </div>
      {/* <p>Department of ECE</p>  */}
      <div className="lo-box">
        <h1>Sign In</h1>
        <div className="lo-user">
          <i className="fas fa-user"></i>
          {/* <input
            type="text"
            name="username"
            id="username"
            placeholder="Full name"
          />  */}
          <i className="fas fa-envelope"></i>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Email Address"
          />
          <i className="fas fa-unlock-alt"></i>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <i className="fas fa-unlock-alt"></i>
          {/* <input
            type="password"
            name="password"
            id="password"
            placeholder="Confirm Password"
          />  */}
        </div>

        <div className="lo-login-btn">
          <button className="lo-btn">Login</button>
          <p className="lo-signup">
            New here ?{" "}
            <span>
              {" "}
              <a href="./register.html">Sign Up</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
