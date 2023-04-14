// Renders pages for individual products using their unique ID (uuidv4)

import React from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4, validate as uuidValidate, parse as uuidParse } from 'uuid';
import { mensShirts } from '../data/MensShirts';
import { womensShirts } from '../data/WomensShirts';
import { mensFootwear } from '../data/MensFootwear';
import { womensFootwear } from '../data/WomensFootwear';
import { mensPants } from '../data/MensPants';
import { womensPants } from '../data/WomensPants';
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import '../App.css';



const ProductPage = () => {
  const { id } = useParams();

  let parsedId = null;
  if (uuidValidate(id)) {
    parsedId = uuidParse(id, new Array(16));
  }

  const allProducts = [...mensShirts, ...womensShirts, ...mensFootwear, ...womensFootwear, ...mensPants, ...womensPants];
  const product = allProducts.find((product) => product.id.toString() === id.toString());

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Topbar />
      <div className="product-page">
        <h1></h1>
        <img className="product-image" src={product.img} alt={product.name} />
        <div className="product-details">
          <h3>{product.name}</h3>
          <p>{product.vendor}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
          <p>Product Details</p>
          <div className="add-to-cart">
            <button className="add-to-cart-btn">Add to Cart</button>
            <input type="number" defaultValue="1" min="1" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
