import React from "react";
import "./Products.css";
import ProductBox from './ProductBox'
import pimage1 from '../../images/s1.png';
import pimage from '../../images/product_01.1.jpg';
import image from '../../images/product_2.3.jpg';

// import "../../style.css"

function Products() {
  return (
    <div id='products'>
        <h1>CHOOSE & ENJOY</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Quo quae error accusantium harum a ratione modi, excepturi beatae.
             Voluptatem officiis nostrum ex labore veniam eum 
             accusamus consectetur exercitationem eius vitae.
        </p>
        <div className="a-container">
            <ProductBox image={pimage1} title="Luger Burger" price="R22"/>
            <ProductBox image={pimage} title="Chicken  Burger"  price="R20"/>
            <ProductBox image={image} title="Pizza"  price="R2"/>
            <ProductBox image={pimage1} title="Luger Burger"  price="R12"/>
        </div>

    </div>
  )
}

export default Products