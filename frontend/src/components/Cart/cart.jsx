import React,{useState} from 'react'
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "./cart.css";


const Cart = () => {
    // const [cartItems] = useState([cartItems]);
    // const [totalAmount] = useState([totalAmount]);
    return (
        <div title='Cart'>
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
                                {/* <tbody>
                                    {cartItems.map((item) => (
                                        <Tr item={item} key={item.id} />
                                    ))}
                                </tbody> */}
                            </table>
                        

                        <div className="mt-4">
                            <h6>
                                Subtotal: $
                                <span className="cart__subtotal"></span>
                            </h6>
                            <p>Taxes and shipping will calculate at checkout</p>
                            <div className="cart__page-btn">
                                <button className="addTOCart__btn me-4">
                                    <Link to="/foods">Continue Shopping</Link>
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
    )
}

export default Cart
