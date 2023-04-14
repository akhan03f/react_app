import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { womensShirts } from "./data/WomensShirts";

import "./App.css";

const ProductPage = () => {
  const { id } = useParams();
  const location = useLocation();

  const product = womensShirts.find((item) => item.id === id);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Implement adding the product with the selected quantity to the cart
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-page">
      <div className="product-image">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="product-details">
        <h2>{product.name}</h2>
        <p>Vendor: {product.vendor}</p>
        <p>Price: ${product.price.toFixed(2)}</p>
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <button onClick={handleAddToCart} className="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
