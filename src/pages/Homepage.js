import React, { useState } from 'react';
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import '../App.css';
import homeImg from '../img/home-img.jpg'; //image from Unsplash


function Homepage() {
  return (
    <div>
      <Topbar />
      <div className="Homepage">
        <div className="Homepage-left">
          <div className="Homepage-image-wrapper">
            <img src={homeImg} alt="Left image" />
            <h1>Fresh spring styles</h1>
            <div className="Homepage-buttons">
            <h2><a href="/MensShirts" target="_blank" rel="noopener noreferrer">
              <button className="Homepage-button">Shop Men's</button>
            </a>
            <a href="/WomensShirts" target="_blank" rel="noopener noreferrer">
              <button className="Homepage-button">Shop Women's</button>
            </a></h2>
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}


export default Homepage;