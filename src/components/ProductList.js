// Used for product lists on shopping pages (like Men's Shirts)
// shows image, vendor, name, price, and add to cart button
// for each product card on the shopping pages (6 total on each page)

import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="product-list-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <Link to={`/product/${product.id}`}>
            <img src={product.img} alt={product.name} />
          </Link>
          <h3>{product.vendor}</h3>
          <Link to={`/product/${product.id}`}>
            <h4>{product.name}</h4>
          </Link>
          <p>${product.price}</p>
          <button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
