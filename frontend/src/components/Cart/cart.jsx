import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "./cart.css";
import axios from 'axios';
import NavBar from '../NavBar/NavBar';


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
        axios.get('http://localhost:1337/api/products')
            .then(response => {
                setOrders(response.data.data)
                console.log(response.data.data)
            })
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        handlePrice();

    });

    return (

        <div>
           
            <NavBar />
            <div title='Cart'>
                <div className="cart_img">
                </div>
                <Container>
                    <Row>
                        <Col lg="12">
                            {/* <h5 className="text-center">Your cart is empty</h5> */}
                            <table className="table table-bordered" style={{ width: "700px" }}>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {orders.map((orders) => (
                                        <tr key={orders.attributes.id}>
                                            <td> <img src={orders.attributes.Picture} alt="" style={{ width: "2rem", height: "2rem" }} /></td>
                                            <td>{orders.attributes.name}</td>
                                            <td>{orders.attributes.price}</td>
                                            <td><button onClick={() => handleRemove(orders.attributes.id)}>Delete</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>


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


        </div>
    )
}

export default Cart
