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

function Menu({ productItems, HandleProduct }) {
  let { id } = useParams();
  const cart = useSelector((state)=>state)
  // console.log(cart);
  const dispatch = useDispatch();
  // const card = cards.find(card => card.id === id);
  // const [cards, setCards] = useState([]);
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
          // productItems = {cards};
          console.log(productItems, "search console");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      getFood();
    }
  }, [query]);

console.log( productItems,"seeeee")
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
              <span>
                <i className="ri-search-line"></i>
              </span>
            </div>

            <div className="menu_items">
              {productItems.map((productItem) => {
               productItem.quantity = 1;
               return (
                <div key={productItem.id} className="see ">
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
                     
                      {/* <CCardText> R {productItem.attributes.description}</CCardText> */}
                      <CButton
                        style={{ width: "17rem", height: "50px" }}
                        // onClick={() => HandleProduct(productItem)}
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
          {/* <Backdrop
        sx={{ color: '#red', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}

      >
      
      </Backdrop> */}
        <Loader />
          {/* <CircularProgress color="blue" /> */}
        </>
      )}
    </>
  );
}

export default Menu;
