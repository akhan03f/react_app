import React, { useState } from "react";
import ProductList from "../components/ProductList";import { mensPants } from "../data/MensPants";
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import ProductPage from './ProductPage';

const MensPants = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
    <Topbar />
      <div className="Shopping-title"><h1>Shop Men's Pants</h1></div>
      <ProductList products={mensPants} onAddToCart={handleAddToCart} />
    <Footer />
    </div>
  );
};

export default MensPants;
