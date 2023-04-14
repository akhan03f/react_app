//This code has the component for creating product cards in the shopping pages
// that contain the product image (as a link), name (as a link), price, 
// and an "Add to Cart" button for each product


import { v4 as uuidv4 } from "uuid";
import shoes from '../img/mens-shoes.jpg';
import shoes1 from '../img/mens-shoes1.jpg';
import shoes2 from '../img/mens-shoes2.jpg';
import shoes3 from '../img/mens-shoes3.jpg';
import shoes4 from '../img/mens-shoes4.jpg';
import shoes5 from '../img/mens-shoes5.jpg'; 


const mensFootwear = [
  {
    id: uuidv4(),
    vendor: "Nike",
    name: "Red Running Shoes",
    price: 119.99,
    img: shoes,
  },

  {
    id: uuidv4(),
    vendor: "New Balance",
    name: "Gray Classics Shoes",
    price: 109.99,
    img: shoes1,
  },

  {
    id: uuidv4(),
    vendor: "Adidas",
    name: "Brown Leather Casual Shoes",
    price: 69.99,
    img: shoes2,
  },

  {
    id: uuidv4(),
    vendor: "New Balance",
    name: "Multicolor Comfort Shoes",
    price: 129.99,
    img: shoes3,
  },

  {
    id: uuidv4(),
    vendor: "New Balance",
    name: "Grey Suede Comfort Shoes",
    price: 79.99,
    img: shoes4,
  },

  {
    id: uuidv4(),
    vendor: "Adidas",
    name: "White Walking Shoes",
    price: 59.99,
    img: shoes5,
  },
  // Can add more products here the same way if needed
];

export { mensFootwear };
