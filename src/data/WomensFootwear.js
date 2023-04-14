//This code has the component for creating product cards in the shopping pages
// that contain the product image (as a link), vendor, name (as a link), price, 
// and an "Add to Cart" button for each product


import { v4 as uuidv4 } from "uuid";
import shoes from '../img/womens-shoes.jpg';
import shoes1 from '../img/womens-shoes1.jpg';
import shoes2 from '../img/womens-shoes2.jpg';
import shoes3 from '../img/womens-shoes3.jpg';
import shoes4 from '../img/womens-shoes4.jpg';
import shoes5 from '../img/womens-shoes5.jpg';

const womensFootwear = [
  {
    id: uuidv4(),
    vendor: "Nike",
    name: "Multicolor Sneaker",
    price: 149.99,
    img: shoes,
  },

  {
    id: uuidv4(),
    vendor: "New Balance",
    name: "Pink Classics",
    price: 74.99,
    img: shoes1,
  },

  {
    id: uuidv4(),
    vendor: "Adidas",
    name: "Training Shoes",
    price: 49.99,
    img: shoes2,
  },

  {
    id: uuidv4(),
    vendor: "Columbia",
    name: "Pink Platform Oxford",
    price: 79.99,
    img: shoes3,
  },

  {
    id: uuidv4(),
    vendor: "Columbia",
    name: "Gray Boots",
    price: 119.99,
    img: shoes4,
  },

  {
    id: uuidv4(),
    vendor: "New Balance",
    name: "Classic White Sneakers",
    price: 69.99,
    img: shoes5,
  },
  // Can add more products here the same way if needed
];

export { womensFootwear };
