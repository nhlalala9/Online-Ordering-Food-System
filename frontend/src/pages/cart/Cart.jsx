import React, { useState } from "react";
import "./cart.css";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
const Cart = ({ cartItems, handleProduct, handleRemoveProduct, handleCartClearance }) => {
  // console.log(cartItems, "test");

  const totalPrice = cartItems.reduce(
    (price, item) => price + (item.quantity * item.attributes.price), 0);

  
  return (
    <div className="main_cart">
      <NavBar />
      <div className="cart_item">
        <h1 className="card-items-header">Cart Items</h1>
        <div className="clear-cart">
          {cartItems.length >= 1 && (
            <button className="clear-cart-button" onClick={handleCartClearance}>Clear cart</button>
          )}
        </div>
        {cartItems.length === 0 && (
          <div className="cart-items-empty">
            <div className="empty">
              <h2>No items are added.</h2>
            </div>

          
          </div>

        )}
          <div className="continue_shopping">
              <Link to="/menu"><h6>Continue shopping</h6></Link>
            </div>
        {
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-items-list">
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
                  {item.quantity} * R{item.attributes.price.toFixed(2)}
                </div>
               
              </div>

            ))}
   
                <div className="cart-items-total-price-name">
                  Total
                  <div className="cart-items-total-price">R {totalPrice.toFixed(2)}</div>

                </div>

                <div className="checkout">
                  <Link to="/payment">
                  <button type="submit" className="checkout_button">Proceed to checkout</button>
                  </Link>
                </div>

          </div>
        }
      </div>

    </div>
  );
};

export default Cart;
