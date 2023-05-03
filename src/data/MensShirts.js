//This code has the component for creating product cards in the shopping pages
// that contain the product image (as a link), vendor, name (as a link), price, 
// and an "Add to Cart" button for each product


import { v4 as uuidv4 } from "uuid";
import shirt from '../img/shirt-mens.jpg';
import shirt1 from '../img/shirt-mens1.jpg';
import shirt2 from '../img/shirt-mens2.jpg';
import shirt3 from '../img/shirt-mens3.jpg';
import shirt4 from '../img/shirt-mens4.jpg';
import shirt5 from '../img/shirt-mens5.jpg';
import { Ellipsis } from "react-bootstrap/esm/PageItem";

const mensShirts = [
  {
    id: uuidv4(),
    vendor: "Nike",
    name: "Basic Cotton T-Shirt",
    price: 29.99,
    img: shirt,
  },

  {
    id: uuidv4(),
    vendor: "Columbia",
    name: "Checkered Flannel Shirt",
    price: 59.99,
    img: shirt1,
  },

  {
    id: uuidv4(),
    vendor: "Columbia",
    name: "White Shirt",
    price: 64.99,
    img: shirt2,
  },

  {
    id: uuidv4(),
    vendor: "Adidas",
    name: "Basic Cotton T-Shirt Cream",
    price: 19.99,
    img: shirt3,
  },

  {
    id: uuidv4(),
    vendor: "New Balance",
    name: "Basic Black T-Shirt",
    price: 19.99,
    img: shirt4,
  },

  {
    id: uuidv4(),
    vendor: "Adidas",
    name: "Basic Blue T-Shirt",
    price: 39.99,
    img: shirt5,
  },
  // Can add more products here the same way if needed
];

export { mensShirts };


