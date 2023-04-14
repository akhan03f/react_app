import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="Footer-content">
        <div className="Footer-links">
          <h3>About</h3>
          <ul>
            <li><a href="/Contact">Contact Us</a></li>
            <li><a href="/Contact">Accessibility Statement</a></li>
            <li><a href="/Contact">Shipping Information</a></li>
            <li><a href="/Contact">Returns Policy</a></li>
            <li><a href="/Contact">Terms of Use</a></li>
          </ul>
        </div>
        <div className="Footer-customer-service">
          <h3>Customer Service</h3>
          <ul>
            <li><a href='#'>1.888.555.5555 
                <br></br> website@website.com</a></li>
            <li><a href="/Contact">FAQ</a></li>
            <li><a href="/Contact">Help</a></li>
          </ul>
        </div>
      </div>
      <div className="Footer-legal">
        <p>&copy; 2023 NYNJA. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
