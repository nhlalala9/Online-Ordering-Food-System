import React from "react";
import "./Products.css"


function ProductBox(props) {
    return (
      <div className="a-box">
          <div className="a-b-img">
              <img src={props.image} alt="" />
          </div>
  
          <div className="a-b-text">
              <h2> {props.title} </h2>
              <span>{props.price}</span>
              <button className="productbox-button"><a href="/cart">Add Cart</a></button>
          </div> 
      </div>
    )
  }
  
  export default ProductBox