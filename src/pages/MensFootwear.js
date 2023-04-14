import React, { useState } from "react";
import ProductList from "../components/ProductList";
import { mensFootwear } from "../data/MensFootwear";
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import ProductPage from './ProductPage';

const MensFootwear = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
    <Topbar />
      <div className="Shopping-title"><h1>Shop Men's Footwear</h1></div>
      <ProductList products={mensFootwear} onAddToCart={handleAddToCart} />
    <Footer />
    </div>
  );
};

export default MensFootwear;
