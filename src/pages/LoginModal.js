import React from "react";
import "../App.css";

const LoginModal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="login-modal">
      <div className="login-modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2></h2>
        <form>
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" id="username" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" required />
          </div>
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
        <p>
          Don't have an account?{" "}
          <a href="/signup" className="signup-link">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
