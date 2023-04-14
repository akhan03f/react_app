// Basic Contact Us page with generic phone number and email
// same class names as About Us page for quick styling

import React from "react";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import "../App.css";

const About = () => {
  return (
    <div className="about-page">
      <Topbar />
      <div className="about-header">
        <h1>Contact Us</h1>
      </div>
      <div className="about-content">
        <p>
          Thank you for taking a look at our store! If you have any general
          questions or would like to know more about our shipping policies,
          return policies, full product catalogue, terms of use, accessability
          statement, and any and all other questions, do not hesitate to contact us!
        </p>
        <p>
          Phone number: 1.888.555.5555
        </p>
        <p>
          Email: website.website.com
        </p><br></br>

      </div> <br></br><br></br>
      <Footer />
    </div>
  );
};

export default About;
