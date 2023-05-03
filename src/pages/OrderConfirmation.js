import React, { useState, useEffect } from "react";
import axios from "axios";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import "../App.css";

const OrderConfirmation = ({ orderData }) => {
  const [orderProducts, setOrderProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Fetch the most recent order_products_join records
    const fetchData = async () => {
      try {
        const { data: orderProductsData } = await axios.get("http://localhost:8000/api/most-recent-order-products-join");
        setOrderProducts(orderProductsData);

        const { data: orderTotalPrice } = await axios.get("http://localhost:8000/api/most-recent-order-total-price");
        setTotalPrice(orderTotalPrice.total_price);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Topbar />
      <div className="order-confirmation">
        <h1>Order Confirmation</h1>
        <p> Thank You! Your order has been placed successfully.</p>


      </div>
      <Footer />
    </div>
  );
};

export default OrderConfirmation;

/*         JSX code to display order_product_joins on confirmatino page and total price: (needs work)
        <table>
          <thead>
            <tr>
              <th>Product Description</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody> 
            {Array.isArray(orderProducts) &&
              orderProducts.map((item, index) => (
                <tr key={`${item.prod_id}-${index}`}>
                  <td>{item.prod_description}</td>
                  <td>${parseFloat(item.price_per_unit).toFixed(2)}</td>
                  <td>{item.quantity}</td>
                </tr>
              ))}
          </tbody>
        </table> 
        <div className="total-price">
          <h3>Total Price: ${parseFloat(totalPrice).toFixed(2)}</h3>
        </div> 
*/
