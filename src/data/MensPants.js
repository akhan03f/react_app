//This code has the component for creating product cards in the shopping pages
// that contain the product image (as a link), vendor, name (as a link), price, 
// and an "Add to Cart" button for each product


import { v4 as uuidv4 } from "uuid";
import pants from '../img/mens-pants.jpg';
import pants1 from '../img/mens-pants1.jpg';
import pants2 from '../img/mens-pants2.jpg';
import pants3 from '../img/mens-pants3.jpg';
import pants4 from '../img/mens-pants4.jpg';
import pants5 from '../img/mens-pants5.jpg';

const mensPants = [
  {
    id: uuidv4(),
    vendor: "Columbia",
    name: "Regular Fit Khaki Pants",
    price: 69.99,
    img: pants,
  },

  {
    id: uuidv4(),
    vendor: "Nike",
    name: "Black Training Pants",
    price: 49.99,
    img: pants1,
  },

  {
    id: uuidv4(),
    vendor: "Adidas",
    name: "Denim Shorts",
    price: 29.99,
    img: pants2,
  },

  {
    id: uuidv4(),
    vendor: "Columbia",
    name: "Gray Pants",
    price: 79.99,
    img: pants3,
  },

  {
    id: uuidv4(),
    vendor: "New Balance",
    name: "Black Cargo Pants",
    price: 49.99,
    img: pants4,
  },

  {
    id: uuidv4(),
    vendor: "Columbia",
    name: "Medium Jeans",
    price: 55.99,
    img: pants5,
  },
  // Can add more products here the same way if needed
];

export { mensPants };
