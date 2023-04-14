import React, { useState } from "react";
import ProductList from "../components/ProductList";import { womensPants } from "../data/WomensPants";
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import ProductPage from './ProductPage';

const WomensPants = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
    <Topbar />
      <div className="Shopping-title"><h1>Shop Women's Pants</h1></div>
      <ProductList products={womensPants} onAddToCart={handleAddToCart} />
    <Footer />
    </div>
  );
};

export default WomensPants;
