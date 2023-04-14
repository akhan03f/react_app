import React, { useState } from "react";
import ProductList from "../components/ProductList";
import { mensShirts } from "../data/MensShirts";
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';

const MensShirts = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
    <Topbar />
      <div className="Shopping-title"><h1>Shop Men's Shirts</h1></div>
      <ProductList products={mensShirts} onAddToCart={handleAddToCart} />
    <Footer />
    </div>
  );
};


export default MensShirts;
