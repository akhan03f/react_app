// App.js file - Contains all routes

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MensShirts from "./pages/MensShirts";
import MensPants from "./pages/MensPants";
import MensFootwear from "./pages/MensFootwear";
import WomensShirts from "./pages/WomensShirts";
import WomensPants from "./pages/WomensPants";
import WomensFootwear from "./pages/WomensFootwear";
import CartPage from "./pages/CartPage";
import SignUp from "./pages/SignUp";
import ProductPage from "./pages/ProductPage";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/MensShirts" element={<MensShirts />} />
        <Route path="/WomensShirts" element={<WomensShirts />} />
        <Route path="/MensPants" element={<MensPants />} />
        <Route path="/MensFootwear" element={<MensFootwear />} />
        <Route path="/WomensPants" element={<WomensPants />} />
        <Route path="/WomensFootwear" element={<WomensFootwear />} />
        <Route path="/CartPage" element={<CartPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
