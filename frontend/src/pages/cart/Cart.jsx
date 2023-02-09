import React, { useState, useEffect } from "react";
import "./cart.css";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


// const Cart = ({
//   cartItems,
//   HandleProduct,
//   handleRemoveProduct,
//   handleCartClearance,
// }) => {
//   const totalPrice = cartItems.reduce(
//     (price, item) => price + item.quantity * item.attributes.price,
//     0
//   );
// const Cart = ({
//   cartItems,
//   HandleProduct,
//   handleRemoveProduct,
//   handleCartClearance,
// }) => {
//   const totalPrice = cartItems.reduce(
//     (price, item) => price + item.quantity * item.attributes.price,
//     0
//   );


const Cart = () => {
  const cart = useSelector((state) => state);
  console.log(cart ,"products");
  const dispatch = useDispatch();
  const addition = (acc, currentvalue) => {
    return acc + currentvalue.price * currentvalue.quantity;
  };
  const total = cart.reduce(addition, 0);
  console.log("total", total)
    
  const [state, setState] = useState(true);

  useEffect((e) => {
    // e.preventDefault()
    // localStorage.setItem("Cart Items", JSON.stringify(cartItems));
    if (cartItems.length >= 1) {
      setState(false);
      console.log(cartItems)
    }
   
    if (cartItems.length === 0) {
      setState(true);
    }
  }, []);

  console.log(cartItems[0].quantity)
  // console.log(cartItems[0].attributes.price, "price")

  
  return (
    <div className="main_cart">
      <NavBar />
      <div className="cart_item">
        <h1 className="card-items-header">Cart Items</h1>
        <div className="clear-cart">
          {cartItems.length >= 1 && (
            <button className="clear-cart-button" onClick={handleCartClearance}>Clear cart</button>
           
          
          )}
          {/* {cart.length >= 1 && (
            <button className="clear-cart-button" onClick={handleCartClearance}>
              Clear cart
            </button>
          )} */}
        </div>
        {cart.length === 0 && (
          <div className="cart-items-empty">
            <div className="empty">
              <h2>No items are added.</h2>
            </div>
          </div>
        )}
        <div className="continue_shopping">
          <Link to="/menu">
            <h6>Continue shopping</h6>
          </Link>
        </div>
        {
          <div>
            {cart.map((item) => (
              <div key={item.id} className="cart-items-list">
                <img
                  className="cart-items-image"
                  src={item.attributes.Picture}
                  alt=""
                />
                <div className="cart-items-name">{item.attributes.name}</div>
                <div className="cart-items-functions">
                  <button
                    className="cart-items-add"
                    // onClick={() => HandleProduct(item)}
                    onClick={() => dispatch({ type: "INCREASE", payload: item })}
                  >
                    +
                  </button>
                  <button
                    className="cart-items-remove"
                    // onClick={() => handleRemoveProduct(item)}
                    onClick={() => {
                      if (item.quantity > 1) {
                        dispatch({ type: "DECREASE", payload: item });
                      } else {
                        dispatch({ type: "REMOVE", payload: item });
                      }
                    }}
                  >
                    -
                  </button>
                </div>

                <div className="cart-items-price">
                  {item.quantity} * R{item.attributes.price.toFixed(2)}
                  {/* {item.attributes.price.toFixed(2)} * {item.quantity} */}
                </div>
                <div tot>
                  R {item.quantity*item.attributes.price.toFixed(2)}
                </div>
              </div>
            ))}
            <div className="cart-items-total-price-name">
              Total
              <div className="cart-items-total-price">
                {/* R {totalPrice.toFixed(2)} */}
                {total > 0 && <h2>total:{total}</h2>}
              </div>
            </div>
            <div className="checkout">
              <Link to="/checkoutform">
                <button
                  // hidden={state}
                  type="submit"
                  className="checkout_button"
                >
                  Proceed to checkout
                </button>
              </Link>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Cart;
