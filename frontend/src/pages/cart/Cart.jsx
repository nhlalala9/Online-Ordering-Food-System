import React, { useState } from "react";
import "./cart.css";

const cart = ({ cartItems, handleProduct, handleRemoveProduct, handleCartClearance }) => {
  console.log(cartItems, "test");
// const totalPrice = cartItems.reduce(
//   (price,item) => price + item.attributes.quantity * item.attributes.price)
  return (
    <div className="cart_item">
      <h2 className="card-items-header">Cart Items</h2>
      <div className="clear-cart">
        {cartItems.length >= 1 && (
          <button className="clear-cart-button" onClick={handleCartClearance}>Clear cart</button>
        )}
      </div>
      {cartItems.length === 0 && (
        <div className="cart-items-empty"> No items are added.</div>
      )}
      {
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="card-items-list">
              <img className="cart-items-image" src={item.attributes.Picture} />
              <div className="cart-items-name">{item.attributes.name}</div>
              <div className="cart-items-functions">
                <button
                  className="cart-items-add"
                  onClick={() => handleProduct(item)}
                >
                  +
                </button>
                <button
                  className="cart-items-remove"
                  onClick={() => handleRemoveProduct(item)}
                >
                  -
                </button>
              </div>
              <div className="cart-items-price">
                {item.attributes.quantity} * R{item.attributes.price}
              </div>
            </div>
          ))}
        </div>
      }
      <div className="cart-items-total-price-name">
        Total
        {/* <div className="cart-items-total-price">R (totalPrice)</div> */}
      </div>
    </div>
  );
};

export default cart;
