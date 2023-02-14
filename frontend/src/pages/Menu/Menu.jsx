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
import { Link, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../components/Loader/Loader";

function Menu({ productItems }) {
  let { id } = useParams();
  
  const cart = useSelector((state)=>state)

  const dispatch = useDispatch();

  const [loading, setLoading] = useState();
  const [query, setQuery] = useState("");

  const getFood = async () => {
    axios
      .get("http://localhost:1337/api/products?populate=*")
      .then((response) => {
        setLoading(true);
        productItems = response.data.data;
        console.log(response.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getFood();
  }, [id]);

  useEffect(() => {
    if (query) {
      axios
        .get(
          `http://localhost:1337/api/products?filters[name][$containsi]=${query}`
        )
        .then((response) => {
          setLoading(true);
          productItems = response.data.data;
          console.log(response.data.data);
          // productItems = {cart};
          console.log(productItems, "search console");
        })
        .catch((err) => {
          console.log(err);
        });
    } 
  }, [query]);

  console.log(cart, "cart")
  return (
    <>
      {loading ? (
        <Box>
          <NavBar />
          <div className="myMenu">
            <div className="searc">
              <input
                className="sea"
                type="text"
                placeholder="I'm looking for...."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <div className="menu_items">
              {productItems.map((productItem) => {
               productItem.quantity = 1;
               return (
                <div key={productItem.id} className="col-md-2 d-flex ">
                  <CCard style={{ width: "20rem", gap:"5px" }}>
                    <Link key={productItem.id} to={`/view/${productItem.id}`}>
                      <CCardImage
                        style={{ height: "15rem", marginBottom:"5px"}}
                        src={productItem.attributes.pictures.data.attributes.url}
                      />
                    </Link>
                    <CCardBody>
                      <CCardTitle style={{fontSize:"24px"}}>{productItem.attributes.name}</CCardTitle>
                      <CCardText style={{ fontSize:"16px", height:"30px", fontWeight:"bold" , fontSize:"20px"}}>
                        R{productItem.attributes.price.toFixed(2)}</CCardText>
                     
                   
                      <CButton
                        style={{ width: "17rem", height: "50px" }}
            
                        onClick={() => dispatch({type: "ADD", payload: productItem})}
                      >
                        Add to cart
                      </CButton>
                    </CCardBody>
                  </CCard>
                </div>
               )
                } )}
            </div>
          </div>
        </Box>
      ) : (
        <>
        <Loader />
        </>
      )}
    </>
  );
}

export default Menu;
