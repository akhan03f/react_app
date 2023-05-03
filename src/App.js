import React, { useState } from "react";
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
import SignUpConfirmation from "./pages/SignUpConfirmation";
import OrderConfirmation from "./pages/OrderConfirmation";


function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/MensShirts" element={<MensShirts loggedInUser={loggedInUser} />} />
        <Route path="/WomensShirts" element={<WomensShirts loggedInUser={loggedInUser} />} />
        <Route path="/MensPants" element={<MensPants loggedInUser={loggedInUser} />} />
        <Route path="/MensFootwear" element={<MensFootwear loggedInUser={loggedInUser} />} />
        <Route path="/WomensPants" element={<WomensPants loggedInUser={loggedInUser} />} />
        <Route path="/WomensFootwear" element={<WomensFootwear loggedInUser={loggedInUser} />} />
        <Route path="/CartPage" element={<CartPage loggedInUser={loggedInUser} />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignUpConfirmation" element={<SignUpConfirmation />} />
        <Route path="/product/:id" element={<ProductPage loggedInUser={loggedInUser} />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/OrderConfirmation" element={<OrderConfirmation />} />

      </Routes>
    </Router>
  );
}

export default App;
