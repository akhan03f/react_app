//This code has the component for creating product cards in the shopping pages
// that contain the product image (as a link), vendor, name (as a link), price, 
// and an "Add to Cart" button for each product


import { v4 as uuidv4 } from "uuid";
import pants from '../img/womens-pants.jpg';
import pants1 from '../img/womens-pants1.jpg';
import pants2 from '../img/womens-pants2.jpg';
import pants3 from '../img/womens-pants3.jpg';
import pants4 from '../img/womens-pants4.jpg';
import pants5 from '../img/womens-pants5.jpg';


const womensPants = [
  {
    id: uuidv4(),
    vendor: "Columbia",
    name: "Loose Fit Pants",
    price: 49.99,
    img: pants,
  },

  {
    id: uuidv4(),
    vendor: "New Balance",
    name: "Dark Pants",
    price: 59.99,
    img: pants1,
  },

  {
    id: uuidv4(),
    vendor: "Adidas",
    name: "Graphic Print Yoga Pants",
    price: 29.99,
    img: pants2,
  },

  {
    id: uuidv4(),
    vendor: "Columbia",
    name: "Light Jeans",
    price: 39.99,
    img: pants3,
  },

  {
    id: uuidv4(),
    vendor: "Adidas",
    name: "Off White Dress",
    price: 49.99,
    img: pants4,
  },

  {
    id: uuidv4(),
    vendor: "Nike",
    name: "Black Yoga Pants",
    price: 39.99,
    img: pants5,
  },
  // Can add more products here the same way if needed
];

export { womensPants };
