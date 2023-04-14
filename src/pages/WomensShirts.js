import React, { useState } from "react";
import ProductList from "../components/ProductList";
import { womensShirts } from "../data/WomensShirts";
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import ProductPage from './ProductPage';

const WomensShirts = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
    <Topbar />
      <div className="Shopping-title"><h1>Shop Women's Shirts</h1></div>
      <ProductList products={womensShirts} onAddToCart={handleAddToCart} />
    <Footer />
    </div>
  );
};

export default WomensShirts;
