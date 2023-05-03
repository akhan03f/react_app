import React from "react";
import axios from "axios";

const SubmitOrder = ({ userId, totalPrice }) => {
  const handleSubmitOrder = () => {
    const newOrder = {
      id: Math.floor(Math.random() * 1000000), // Generate a random unique ID
      ts: new Date().toISOString(),
      user_id: userId,
      total_price: totalPrice,
      comments: "",
    };

    axios
      .post("http://localhost:8000/api/orders", newOrder)
      .then((response) => {
        console.log("Order submitted successfully", response.data);
      })
      .catch((error) => {
        console.log("Error submitting the order", error);
      });
  };

  return (
    <button className="submit-order-btn" onClick={handleSubmitOrder}>
      Submit Order
    </button>
  );
};

export default SubmitOrder;
