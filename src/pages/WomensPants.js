import React, { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import axios from "axios";
import "../App.css";

const WomensPants = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [mostRecentUserId, setMostRecentUserId] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((response) => setProducts(response.data.filter(product => product.gender === "WomensPants")))
      .catch((error) => console.log(error));

    axios
      .get("http://localhost:8000/api/most-recent-user-id")
      .then((response) => setMostRecentUserId(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleAddToCart = (product) => {
    axios
      .post("http://localhost:8000/api/public-add-to-cart", {
        product_id: product.id,
        quantity: 1, 
      })
      .then((response) => {
        setCart([...cart, product]);
        alert("Item added to cart");
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to add item to cart");
      });
  };
  
  return (
    <div>
      <Topbar />
      <div className="Shopping-title">
        <h1>Shop Women's Pants</h1>
      </div>
      <ProductList products={products} onAddToCart={handleAddToCart} />
      <Footer />
    </div>
  );
};

export default WomensPants;
