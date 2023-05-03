// Topbar on every webpage including nav bar and logo bars

import React, { useState } from 'react';
import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import LoginModal from '../pages/LoginModal';
import MensShirts from '../pages/MensShirts';



// The Logo function allows user to click on the logo to get to redirect to the homepage from anywhere
function Logo({ text }) {
  const handleClick = () => {
    window.location.href = '/';
  };

  return (
    <div className="logo" onClick={handleClick}>
      {text}
    </div>
  );
}

function Topbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleLoginModal = () => setShowLoginModal(!showLoginModal);

  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleUserLogin = (user) => {
    setLoggedInUser(user);
  };

  const handleUserLogout = () => {
    setLoggedInUser(null);
  };


  return (
    <>
      <header>
        <div className="dropdown">
          <button className="dropdown-button">☰</button>
          <div className="dropdown-content">
            <a href="/">Home</a>
            <a href="/MensShirts">Men's</a>
            <a href="/WomensShirts">Women's</a>
            <br></br>
            <div id="dropdown-footer">
              <a href="/CartPage">Shopping Cart</a>
              <a href="/About">About</a>
              <a href="/Contact">Contact Us</a>
            </div>
          </div>
        </div>
        <Logo text="NYNJA" />
        <div className="right-menu">
          <a href="/Search">
            <FontAwesomeIcon icon={faSearch} style={{ fontSize: "20px", color: "#333333" }} />
          </a>
          <a onClick={toggleLoginModal}>
            <FontAwesomeIcon icon={faUser} style={{ fontSize: "20px", color: "#333333" }} />
          </a>
          <a href="/CartPage">
            <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: "20px", color: "#333333" }} />
          </a>
        </div>
      </header>
      <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#">Men's &nbsp; &nbsp; </a>
          <ul className="sub-nav"><br></br>
            <li><a href="/MensShirts">Tops</a></li><br></br>
            <li><a href="/MensPants">Bottoms</a></li><br></br>
            <li><a href="/MensFootwear">Footwear</a></li><br></br>
          </ul>
        </li>
        <li className="nav-item">
          <a href="#">&nbsp; Women's</a>
          <ul className="sub-nav"><br></br>
            <li><a href="/WomensShirts">Tops</a></li><br></br>
            <li><a href="/WomensPants">Bottoms</a></li><br></br>
            <li><a href="/WomensFootwear">Footwear</a></li><br></br>
          </ul>
        </li>
      </ul>
      </nav>
      <LoginModal
      show={showLoginModal}
      onClose={toggleLoginModal}
      onLogin={handleUserLogin}
      onLogout={handleUserLogout}
    />
    </>
  );
}

export default Topbar;
