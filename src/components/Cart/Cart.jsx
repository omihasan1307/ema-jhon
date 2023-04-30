import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  let totalPrice = 0;
  let totalShipping = 0;
  for (const product of cart) {
    totalPrice = product.price + totalPrice;
    totalShipping = product.shipping + totalShipping;
  }
  const tax = (totalPrice * 7) / 100;
  const grandTotal = tax + totalPrice + totalShipping;
  return (
    <div className="cart">
      <h4>Order Summery</h4>
      <p>selected item:{cart.length}</p>
      <p>Total Price : {totalPrice}</p>
      <p>Shipping : {totalShipping}</p>
      <p>Tax : {tax.toFixed(2)}</p>
      <h6>Grand Total : {grandTotal.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;
