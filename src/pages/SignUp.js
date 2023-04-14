// Sign up form page
import React from "react";
import "../App.css";
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
  };

  return (
    <div>
      <Topbar />
      <div className="sign-up">
        <h1> Sign Up </h1>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" name="username" id="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" id="password" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" name="phone" id="phone" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input type="text" name="firstName" id="firstName" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" name="lastName" id="lastName" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input type="text" name="address" id="address" required />
            </div>
            <div className="form-group">
              <label htmlFor="city">City:</label>
              <input type="text" name="city" id="city" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="state">State:</label>
              <input type="text" name="state" id="state" required />
            </div>
            <div className="form-group">
              <label htmlFor="zipCode">Zip Code:</label>
              <input type="text" name="zipCode" id="zipCode" required />
            </div>
          </div>
          <button type="submit" className="submit-button">
            Sign Up
          </button>
        </form>
        <div className="sign-up-link">
          Already have an account? <a href="#">Log in</a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
