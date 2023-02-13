import React, { useState, useEffect } from "react";
import "./cart.css";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


const Cart = (cartItems,handleCartClearance) => {
  const cart = useSelector((state) => state);
  console.log(cart ,"products");
  const dispatch = useDispatch();
  const addition = (acc, currentvalue) => {
     return acc + currentvalue.attributes.price * currentvalue.quantity;
  };
  const total = cart.reduce(addition, 0);
  // console.log("total : ", total,"addition : ", cart.reduce(addition, 0),)
    
  const [state, setState] = useState(true);
  const [price, setPrice] = useState(0);

  useEffect((e) => {
    // e.preventDefault()
    // localStorage.setItem("Cart Items", JSON.stringify(cartItems));
    if (cart.length >= 1) {
      setState(false);
      console.log(cartItems,price)
    }
   
    if (cart.length === 0) {
      setState(true);

    }
  }, []);

  // console.log(cartItems[0].quantity)
  // console.log(cartItems[0].attributes.price, "price")

  
  return (
    <div className="main_cart">
      <NavBar />
      <div className="cart_item">
        <h1 className="card-items-header">Cart Items</h1>
        <div className="clear-cart">
          {cart.length >= 1 && (
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
                  src={item.attributes.pictures.data.attributes.url}
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
                  {/* R {price} */}
                </div>
              </div>
            ))}
            <div className="cart-items-total-price-name">
              Total
              <div className="cart-items-total-price">
                {/* R {totalPrice.toFixed(2)} */}
                {total > 0 && <h3>R{total.toFixed(2)}</h3>}
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
