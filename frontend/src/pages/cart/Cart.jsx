import React, { useState, useEffect } from "react";
import "./cart.css";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state);

  const dispatch = useDispatch();
  const addition = (acc, currentvalue) => {
    
    return acc + currentvalue.attributes.price * currentvalue.quantity;
  };
  const total = cart.reduce(addition, 0);

  const [state, setState] = useState(true);
  const [items, setitems] = useState([]);


  useEffect(() => {
    localStorage.setItem("My Cart Items", JSON.stringify(cart));
  }, [cart]);

  let localNum = items;
  // localNum.push(cart);
  console.log(localNum);
  localStorage.setItem("cartItems", JSON.stringify(cart));


  useEffect((e) => {
    if (cart.length >= 1) {
      setState(false);
    }

    if (cart.length === 0) {
      setState(true);
    }
  }, []);

  function readData(data){
    console.log(data);
  }


  return (
    <div className="main_cart">
      <NavBar />
      <div className="cart_item">
        <h1 className="card-items-header">Cart Items</h1>

        <div className="clear-cart">
          {cart.length >= 1 && (
            <button
              className="clear-cart-button"
              onClick={() => dispatch({ type: "CLEAR"})}
            >
              Clear cart
            </button>
          )}
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
              <div key={item.id} className="cart-items-list" onClick={readData(item)}>
                <img
                  className="cart-items-image"
                  src={item.attributes.pictures.data.attributes.url}
                  alt=""
                />
                <div className="cart-items-name">{item.attributes.name}</div>
                <div className="cart-items-functions">
                  <button
                    className="cart-items-add"
                    onClick={() =>
                      dispatch({ type: "INCREASE", payload: item })
                    }
                  >
                    +
                  </button>
                  <button
                    className="cart-items-remove"
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
                </div>
                <div tot>
                  {/* R {item.quantity*item.attributes.price.toFixed(2)} */}
                </div>
              </div>
            ))}
            <div className="cart-items-total-price-name">
              Total
              <div className="cart-items-total-price fw-bold">
                {total > 0 && <h3 className="fw-bold">R{total.toFixed(2)}</h3>}
              </div>
            </div>
            <div className="checkout">
              <Link to="/checkoutform">
                <button
                  hidden={state}
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
