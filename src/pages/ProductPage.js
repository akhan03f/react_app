import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import "../App.css";
import axios from "axios";

const ProductPage = () => {
  const getImageSrc = (imgName) => {
    if (!imgName) {
      console.error("Image name is undefined");
      return "";
    }

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

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((response) => {
        const productData = response.data.data;
        console.log("Product data:", productData);
        if (productData && productData.img_name) {
          setProduct(productData);
        } else {
          console.error("Invalid product data:", productData);
        }
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [id]);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    axios
      .post("http://localhost:8000/api/public-add-to-cart", {
        product_id: product.id,
        quantity: quantity,
      })
      .then((response) => {
        alert("Item added to cart");
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to add item to cart");
      });
  };

  return (
    <>
      <Topbar />
      <div className="product-page">
        <h1></h1>
        <img
          className="product-image"
          src={getImageSrc(product.img_name)}
          alt={product.prod_description}
        />
        <div className="product-details">
          <h3>{product.prod_description}</h3>
          <p>{product.vendor_name}</p>
          <p>Price: ${parseFloat(product.price).toFixed(2)}</p>
          <p>Product Details</p>
          <div className="add-to-cart">
            <input
              type="number"
              value={quantity}
              min="1"
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
