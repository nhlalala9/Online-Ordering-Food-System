
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import React,{useState} from "react";
import { Col, Layout, Row } from "antd";
import AppHeader from "./components/AppHeader/Appheader"
import AppRoutes from "./Routes";
import axios from "axios";
import   {useNavigate} from "react-router-dom"

const App = () => {
  const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate('/cart');
  // }; 

  const data = [];
async function fetchData() {
  const response = await axios.get('http://localhost:1337/api/products');
  const productItems = await response.data.data;
  data.push(...productItems);
  console.log(productItems, "working");
  // console.log(productItems.attributes.name,"name");
}
fetchData();

const productItems = data;
const [cartItems, setCartItems] = useState([]);
// console.log(cartItems,"tyu");

const handleProduct = (product) =>{
  const ProductExist = cartItems.find((item) => item.id === product.id);
  if (ProductExist){
    setCartItems(cartItems.map((item) => item.id === product.id ?
    {...ProductExist, quantity: ProductExist.quantity + 1}
    :item
    ));
    navigate('/cart');
  }else{
    setCartItems([...cartItems, {...product, quantity: + 1}])
    navigate('/cart');
  }
}

const handleRemoveProduct =(product) => {
  const ProductExist = cartItems.find((item) => item.id === product.id);
  if (ProductExist.quantity === 1){
    setCartItems(cartItems.filter((item) => item.id === product.id ));
    navigate('/cart');
  }else{
    setCartItems(
      cartItems.map((item) => 
      item.id === product.id ?
       {...ProductExist, quantity: ProductExist.quantity - 1}
      :item ));
  }
}

const handleCartClearance = () =>{
  setCartItems([]);
}

  return (
    <div className='App'>
      <AppRoutes productItems={productItems} cartItems={cartItems} handleProduct={handleProduct}
      handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance}/>
      
    </div>
   
  );
};

export default App;

