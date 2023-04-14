// Attempted to create a shopping cart page, 
// but unfamiliar with routes in Laravel
// No CSS styling for the cart yet

import React, { useEffect, useState } from "react";

import Topbar from '../components/Topbar';
import Footer from '../components/Footer';


function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);

  // Fetch the data from the Laravel backend
  const fetchCartData = async () => {
    // Replace this URL with the URL of the Laravel API endpoint(?)
    const apiUrl = 'https://your-laravel-api-url.com/api/cart';
    const response = await fetch(apiUrl);
    const data = await response.json();

    setCartItems(data);
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  return (
    <div>
      <Topbar />
      <h1>Shopping Cart</h1>

      {cartItems.map((item) => (    //Render cart items here
      <div key={item.id}>
        <h2>{item.productName}</h2>
        <p>Price: {item.price}</p>
        <p>Quantity: {item.quantity}</p>

      </div>
    ))}
      <Footer />
    </div>
  );
}

export default ShoppingCart;

