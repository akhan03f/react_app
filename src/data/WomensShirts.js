//This code has the component for creating product cards in the shopping pages
// that contain the product image (as a link), vendor, name (as a link), price, 
// and an "Add to Cart" button for each product

import { v4 as uuidv4 } from "uuid";
import shirt from '../img/womens-shirt.jpg';
import shirt1 from '../img/womens-shirt1.jpg';
import shirt2 from '../img/womens-shirt2.jpg';
import shirt3 from '../img/womens-shirt3.jpg';
import shirt4 from '../img/womens-shirt4.jpg';
import shirt5 from '../img/womens-shirt5.jpg';

const womensShirts = [
  {
    id: uuidv4(),
    vendor: "Columbia",
    name: "Light Blue Collar Blouse",
    price: 49.99,
    img: shirt,
  },

  {
    id: uuidv4(),
    vendor: "New Balance",
    name: "White Graphic T-Shirt",
    price: 19.99,
    img: shirt1,
  },

  {
    id: uuidv4(),
    vendor: "Adidas",
    name: "Crop Top Shirt",
    price: 22.99,
    img: shirt2,
  },

  {
    id: uuidv4(),
    vendor: "Nike",
    name: "Red Graphic T-Shirt",
    price: 14.99,
    img: shirt3,
  },

  {
    id: uuidv4(),
    vendor: "New Balance",
    name: "White Lightweight Shirt",
    price: 29.99,
    img: shirt4,
  },

  {
    id: uuidv4(),
    vendor: "Columbia",
    name: "White Printed Shirt",
    price: 23.99,
    img: shirt5,
  },
  // Can add more products here the same way if needed
];

export { womensShirts };
