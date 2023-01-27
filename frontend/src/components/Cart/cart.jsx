import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "./cart.css";


const Cart = ({ cart, setCart }) => {
    const [orders, setOrders] = useState([]);
    const [price, setPrice] = useState(0);



    const handleRemove = (id) => {
        const arr = cart.filter((orders) => orders.id !== id);
        setCart(arr);
        handlePrice();
    };

    const handlePrice = () => {
        let ans = 0;
        orders.map((orders) => (ans += orders.amount * orders.Price));
        setPrice(ans);
    };
    const handleChange = (orders, d) => {
        const ind = orders.indexOf(orders);
        const arr = orders;
        arr[ind].amount += d;

        if (arr[ind].amount === 0) arr[ind].amount = 1;
        setCart([...arr]);
    };

    useEffect(() => {
        handlePrice();
    });

    return (
        <div>
            {/* {orders.map((orders) => (
                <div className="cart_box" key={orders.id}>
                    <div className="cart_img">
                        <img src={orders.Picture} alt="" />
                        <p>{orders.name}</p>
                    </div>
                    
                    <div>
                        <button onClick={() => handleChange(orders, 1)}>+</button>
                        <button>{orders.amount}</button>
                        <button onClick={() => handleChange(orders, -1)}>-</button>
                    </div>
                    <div>
                        <span>{orders.Price}</span>
                        <button onClick={() => handleRemove(orders.id)}>Remove</button>
                    </div>
                </div>
            ))}
            <div className="total">
                <span>Total Price of your Cart</span>
                <span>R - {price}</span>
            </div> */}
            {orders.map((orders) => (

                <div title='Cart' key={orders.id}>
                    <div className="cart_img">
                        <img src={orders.Picture} alt="" />
                        <p>{orders.name}</p>
                    </div>
                    <Container>
                        <Row>
                            <Col lg="12">

                                <h5 className="text-center">Your cart is empty</h5>

                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Product Title</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>

                                </table>
                                <div>
                                    <span>{orders.price}</span>
                                    <button onClick={() => handleRemove(orders.id)}>Delete</button>
                                </div>

                                <div className="mt-4">
                                    <h6>
                                        Subtotal: R
                                        <span className="cart__subtotal"></span>
                                    </h6>
                                    <p>Taxes and shipping will calculate at checkout</p>
                                    <div className="cart__page-btn">
                                        <button className="addTOCart__btn me-4">
                                            <Link to="/dashboard">Continue Shopping</Link>
                                        </button>
                                        <button className="addTOCart__btn">
                                            <Link to="/payment">Proceed to checkout</Link>
                                        </button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            ))}

        </div>
    )
}

export default Cart
