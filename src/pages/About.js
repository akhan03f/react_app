// Basic About Us page with some generic company info for user
import React from "react";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import "../App.css";
import aboutImg from "../img/about.jpg";

const About = () => {
  return (
    <div className="about-page">
      <Topbar />
      <div className="about-header">
        <h1>About Us</h1>
      </div>
      <div className="about-content">
      <img src={aboutImg} alt="About Us" /><br></br>
        <p>
          Welcome to our online store! We are a fashion forward retailer that
          offers the latest styles and trends for both men and women. Our
          selection includes products from popular brands like Nike, Adidas, New
          Balance, Columbia and more.
        </p>
        <p>
          Our goal is to provide our customers with a seamless and enjoyable
          shopping experience. We pride ourselves on offering high-quality
          products at affordable prices, while also providing excellent customer
          service.
        </p>
        <p>
          If you have any questions or concerns, please do not hesitate to
          contact us. We are always here to help!
        </p><br></br>

      </div> <br></br><br></br>
      <Footer />
    </div>
  );
};

export default About;
