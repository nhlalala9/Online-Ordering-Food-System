import React, { useState, useEffect } from "react";
import {
  CCard,
  CButton,
  CCardText,
  CCardTitle,
  CCardBody,
  CCardImage,
} from "@coreui/react";
import "./Menu.css";
import NavBar from "../../components/NavBar/NavBar";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartReducer";

function Menu() {
  const id = useParams().id;
  const [cards, setCards] = useState([]);
  const [data, setData] = useState({})
 

const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/products")
      .then((response) => {
        // setIsLoading(true);
        setCards(response.data.data);
        console.log(response.data.data[0].attributes);

       
        
      })
      .catch((err) => console.log(err));
  }, [id])



  // function addToCart(productId) {
  //   axios.post("http://localhost:1337/api/products", { productId })
  //     .then(res => console.log(res.data ,"toka"))
  //     .catch(err => console.log(err));
  // }

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <NavBar />
      <div className="myMenu">
        <div className="searc">
          <input
            className="sea"
            type="text"
            placeholder="I'm looking for...."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span>
            <i className="ri-search-line"></i>
          </span>
        </div>
        <div className="menu_items">
          {cards.map((card) => (
            <div className="see"  key={card.id}>
              <p></p>
              <CCard style={{ width: "20rem" }}>
                <CCardImage src={card.attributes.Picture} />
                <CCardBody>
                  <CCardTitle>{card.attributes.name}</CCardTitle>
                  <CCardText>
                    {card.attributes.price}
                  </CCardText>
                  <CButton onClick={() =>dispatch(addToCart({
                    id:cards.id,
                    name:cards.data.name,
                    price:cards.attributes.price,
                    picture:cards.attributes.picture
                  }))}>
                    <Link >Add to cart </Link>
                  </CButton>
                </CCardBody>
              </CCard>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Menu;
