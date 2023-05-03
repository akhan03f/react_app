// This page has the shopping cart table showing the image, name, price and quantity for each product, plus total price
// also has the Check Out button which adds a record in the Orders table

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import "../App.css";



const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    // Get cart items from API
    axios
      .get("http://localhost:8000/api/items_in_cart")
      .then((response) => {
        setCartItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });


    // Get products from API
    axios
      .get("http://localhost:8000/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

// Calculates the total price to display at the bottom of the cart
  const totalPrice = Array.isArray(cartItems)
  ? cartItems.reduce((acc, item) => {
      const product = products.find((p) => p.id === item.prod_id);
      return product ? acc + parseFloat(product.price) * item.quantity : acc;
    }, 0)
  : 0;
// Handles check out button, which will send data to the Orders table
  const handleCheckout = async () => {
    try {
      const { data: { user_id } } = await axios.get("http://localhost:8000/api/most-recent-user-id");

      const token = localStorage.getItem("authToken");

      await axios.post("http://localhost:8000/api/orders", {
        id: Math.floor(Math.random() * 1000000),
        ts: new Date().toISOString(),
        user_id,
        total_price: totalPrice,
        comments: "",
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Order placed successfully!");
      navigate("/orderconfirmation");
    } catch (error) {
      console.log(error);
      alert("Failed to place the order.");
    }
  };
  
  const getImageSrc = (imgName) => {
    if (!imgName) {
      console.error("Image name is undefined");
      return "";
    }
  
    if (imgName.startsWith("http")) {
      return imgName;
    } else {
      try {
        return require(`../img/${imgName}`);
      } catch (error) {
        console.error(`Image not found: ${imgName}`);
        return "";
      }
    }
  };

  const [orderData, setOrderData] = useState(null);

  const placeOrder = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/orders");
      setOrderData(response.data.data); // Store the order data in the state
      navigate("/order-confirmation", { state: { orderData: response.data.data } });
    } catch (error) {
      console.log("Failed to place order");
    }
  };
  

  

  return (
    <div>
      <Topbar />
      <div className="Shopping-title">
        <h1>Shopping Cart</h1>
      </div>
      <div className="cart-table">
        <table>
          <thead>
            <tr>
              <th>Product Image</th>
              <th>Product Description</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(cartItems) &&
            cartItems.map((item, index) => {
             const product = products.find((p) => p.id === item.prod_id);
                if (!product) {
                  return null;
                }
                return (
                  <tr key={`${item.id}-${index}`}>
                  <td>
                    <img   
                      className="product-image"
                      src={getImageSrc(product.img_name)}
                      alt={product.prod_description}
                      style={{ width: "50px", height: "50px" }} />
                    </td>
                    <td>{product.prod_description}</td>
                    <td>${parseFloat(product.price).toFixed(2)}</td>
                    <td>{item.quantity}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div className="total-price">
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
      </div>
      <div className="checkout-button">
        <button onClick={handleCheckout}>Check Out</button>
      </div>
      <Footer />
    </div>
  );
};

export default ShoppingCart;