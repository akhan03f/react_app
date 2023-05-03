import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const ProductList = ({ onAddToCart, products }) => {
  const getImageSrc = (imgName) => {
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
  

  return (
    <div className="product-list-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <Link to={`/product/${product.id}`}>
            <img src={getImageSrc(product.img_name)} alt={product.prod_description} />
          </Link>
          <h3>{product.vendor_name}</h3>
          <Link to={`/product/${product.id}`}>
            <h4>{product.prod_description}</h4>
          </Link>
          <p>${product.price}</p>
          <button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
