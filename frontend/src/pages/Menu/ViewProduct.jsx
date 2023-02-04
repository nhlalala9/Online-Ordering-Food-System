import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../../components/NavBar/NavBar";
import "./Menu.css";
import { useParams } from "react-router-dom";


export default function ViewProduct(productItems, handleProduct) {
  let { id } = useParams();


  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:1337/api/products/${id}`)
      .then((response) => {
        setCards(response.data.data);
        console.log(response.data.data);
      })
      .catch((err) => console.log(err));
  }, []);



  return (
    <>
      <NavBar />

      <div key={cards.id} className="menu-details">
        <div className="picture">
          <img src={cards?.attributes?.Picture} className="img" />
        </div>

        <div className="details">
          <h1>{cards?.attributes?.name}</h1>
          <h4> {cards?.attributes?.description}</h4>
          <h3>R {cards?.attributes?.price}</h3>
          <button className="add_btn">
            <a href="#" onClick={()=> {handleProduct(productItems)}}>Add to cart </a>
          </button>
        </div>
      </div>

    </>
  );
}
