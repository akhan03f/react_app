// Shopping page for womens footwear
import React, { useState } from "react";
import ProductList from "../components/ProductList";import { womensFootwear } from "../data/WomensFootwear";
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import ProductPage from './ProductPage';

const WomensFootwear = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
    <Topbar />
      <div className="Shopping-title"><h1>Shop Women's Footwear</h1></div>
      <ProductList products={womensFootwear} onAddToCart={handleAddToCart} />
    <Footer />
    </div>
  );
};

export default WomensFootwear;
