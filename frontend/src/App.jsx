import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState, useEffect } from "react";
import AppRoutes from "./Routes";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  const navigate = useNavigate();
  const data = [];

  async function fetchData() {
    const response = await axios.get("http://localhost:1337/api/products");
    const productItems = await response.data.data;
    data.push(...productItems);
    console.log(productItems, "ProductItems working");
  }
  fetchData();

  const productItems = data;

  const [cartItems, setCartItems] = useState([]);

  /*,() => {
    const localData = localStorage.getItem(cartItems)
    return localData;
  }*/

  // const [items, setItems] = useState(() => {
  //   if(JSON.parse(localStorage.getItem('cartItems')) == null){
  //     return [];
  //   }else{
  //     return JSON.parse(localStorage.getItem('cartItems'))
  //   }
  // })

  // console.log(cartItems[0].attributes.price, "cart items");
  
  const HandleProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
      navigate("/cart");
    } else {
      setCartItems([...cartItems, { ...product, quantity: +1 }]);
      navigate("/cart");
    }
    // useEffect (() => {
    // localStorage.setItem("My Cart Items", JSON.stringify(cartItems))
    //  } , [cartItems]);

    // let localNum = items;
    // localNum.push(product);
    // localStorage.setItem("cartItems",  JSON.stringify(localNum) )
    // console.log(cartItems, "try local storage")
    // console.log(localNum)
   
    // console.log(items)
  };

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id === product.id));
      // navigate('/cart');
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleCartClearance = () => {
    setCartItems([]);
  };

  return (
    <div className="App">
      {/* <NavBar /> */}
     
      
      <AppRoutes
        productItems={productItems}
        cartItems={cartItems}
        HandleProduct={HandleProduct}
        handleRemoveProduct={handleRemoveProduct}
        handleCartClearance={handleCartClearance}
      />
    </div>
  );
};

export default App;
