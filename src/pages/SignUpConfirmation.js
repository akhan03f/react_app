import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

const SignUpConfirmation = () => {
  return (
    <div>
      <Topbar />
      <div className="sign-up-confirmation">
        <h1>Thank you for signing up!</h1>
        <p>
          Your account has been successfully created. Please log in.
        </p>
        <Link to="/" className="home-link">
          Go back to home page
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default SignUpConfirmation;
