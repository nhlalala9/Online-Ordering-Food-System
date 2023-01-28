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
// import Backdrop from "@mui/material/Backdrop";
// import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function Menu() {
  let { id } = useParams();
  // const card = cards.find(card => card.id === id);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState();
  const [query, setQuery] = useState("");

  const getFood = async () => {
    axios
      .get("http://localhost:1337/api/products")
      .then((response) => {
        setLoading(true);
        setCards(response.data.data);
        console.log(response.data.data[0].attributes);

       
        
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getFood();
  }, [id]);

  useEffect(() => {
    if (query) {
      axios
        .get(`http://localhost:1337/api/products?filters[name][$containsi]=${query}`)
        .then((response) => {
          setLoading(true);
          setCards(response.data.data);
          console.log(response.data.data);
        })
        .catch((err) => {console.log(err)});
    } else {
      getFood();
    }
  }, [query]);

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
              {cards.map((card) => (
                <div key={card.id} className="see">
                  <CCard style={{ width: "20rem" }}>
                    <Link key={card.id} to={`/view/${card.id}`}>
                      {" "}
                      <CCardImage
                        style={{ height: "15rem" }}
                        src={card.attributes.Picture}
                      />{" "}
                    </Link>
                    <CCardBody>
                      <CCardTitle>{card.attributes.name}</CCardTitle>
                      <CCardText> R {card.attributes.price}</CCardText>
                      <CButton  style={{ width: "17rem", height:"50px" }}>
                        <a href="#">Add to cart </a>{" "}
                      </CButton>
                    </CCardBody>
                  </CCard>
                </div>
              ))}
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
          Loading...
          {/* <CircularProgress color="blue" /> */}
        </>
      )}
    </>
  );
}

export default Menu;
