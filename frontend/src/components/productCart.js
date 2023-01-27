import axios from "axios";
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar/NavBar";


const ProductCart = () => {
    const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const [medicine, setMedicine] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:1337/api/products')
      .then(response => {
        setIsLoading(true);
        setMedicine(response.data.data)
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
    handlePrice();
  });

 
  return (
    <React.Fragment>
      <NavBar setShow={setShow} size={cart.length} />
      {show ? (
        <section>
          {medicine.map((item) => (
            <div className="cards">
            <div className="image_box">
              <img src={item.attributes.image} alt="" />
            </div>
            <div className="details">
              <p>{item.attributes.name}</p>
              <p>{item.attributes.author}</p>
              <p>Price - R{item.attributes.Price}</p>
              <button onClick={() => handleClick(item)}>Add to Cart</button>
            </div>
          </div>
          ))}
        </section>
      ) : (
        <article>
        {medicine.map((item) => (
          <div className="cart_box" key={item.id}>
            <div className="cart_img">
              <img src={item.attributes.image} alt="" />
              <p>{item.attributes.title}</p>
            </div>
            <div>
              <button onClick={() => handleChange(item, 1)}>+</button>
              <button>{item.attributes.unit}</button>
              <button onClick={() => handleChange(item, -1)}>-</button>
            </div>
            <div>
              <span>{item.attributes.Price}</span>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
        <div className="total">
          <span>Total Price of your Cart</span>
          <span>Rs - {price}</span>
        </div>
      </article>
      )}
    </React.Fragment>
  )
}

export default ProductCart;
