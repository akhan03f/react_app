import React, { useState } from "react";
import axios from "axios";
import "../App.css";

const LoginModal = ({ show, onClose, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.access_token); // Store the access token

        // Extract user data from the response
        const user = response.data.user;

        // Log the user data for debugging purposes
        console.log("Logged in user:", user);

        onLogin(user);
        onClose();
        setSuccess("You have successfully logged in.");
      })
      .catch((error) => {
        setError("Invalid email or password");
      });
  }; // Add closing brace here

  const handleLogout = () => {
    localStorage.removeItem("token");
    onClose();
  };

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
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
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
        {/* Add logout button */}
        <button className="logout-button" onClick={handleLogout}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
