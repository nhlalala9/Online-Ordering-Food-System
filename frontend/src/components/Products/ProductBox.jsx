import "./Products.css"
import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import Products from "./Products";
import { useSelector, useDispatch } from "react-redux";

function ProductBox(handleProduct,) {

  const [show, setShow] = useState(true);
  const [carts, setCart] = useState([]);
  const cart = useSelector((state)=>state)

  const dispatch = useDispatch();
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:1337/api/products?populate=*')
      .then(response => {
        setIsLoading(true);
        setOrders(response.data.data)
        console.log(response.data.data)
      })
      .catch(err => console.log(err));
  }, []);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].attributes.unit += d;

    if (arr[ind].attributes.unit === 0) arr[ind].attributes.unit = 1;
    setCart([...arr]);
  };
  const [price, setPrice] = useState(0);
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.attributes.unit * item.attributes.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice()
  });




  return (

    <>
      <NavBar setShow={setShow} size={cart.length} />
      {show ? (<><div className="prod ">
        {orders.map((row) => (

          <div className="a-box" key={row.id}>

            <div className="a-b-img">
              <img src={row.attributes.pictures.data.attributes.url} alt="" />
            </div>

            <div className="a-b-text">
              {/* <h2> {row.attributes.name}</h2> */}
              <p>{row.attributes.name}</p>
              <p>Price - R{row.attributes.price}</p>
              {/* <Link key={row.id} to={`/view/${row.id}`}> */}
                <button className="productbox-button" onClick={()=> dispatch({type: "ADD", payload: row})}>Add to Cart</button>
              {/* </Link> */}
            </div>

          </div>
        ))}
      </div></>) : (<></>)}


    </>
  )
}

export default ProductBox