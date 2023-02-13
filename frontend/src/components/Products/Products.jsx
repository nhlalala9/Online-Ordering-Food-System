import React,{ useState, useEffect } from "react";
import "./Products.css";
import axios from "axios";
import ProductBox from './ProductBox'
import pimage1 from '../../images/s1.png';
import pimage from '../../images/product_01.1.jpg';
import image from '../../images/product_2.3.jpg';

// import "../../style.css"

function Products() {

  const [orders, setOrders] = useState([]);
  // const [selectedOrder, setSelectedOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(null);
  //get all 
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/products?populate=*")
      .then((response) => {
        setIsLoading(true);
        setOrders(response.data.data);
        console.log(orders)
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id='products' >
        <h1>CHOOSE & ENJOY</h1>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Quo quae error accusantium harum a ratione modi, excepturi beatae.
             Voluptatem officiis nostrum ex labore veniam eum 
             accusamus consectetur exercitationem eius vitae.
        </p>
        <div className="a-container">
            <ProductBox/>
        </div>

    </div>
  )
}

export default Products