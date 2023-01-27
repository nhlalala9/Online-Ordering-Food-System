import React, { useState, useEffect } from 'react'
import { CCard, CButton, CCardText, CCardTitle, CCardBody, CCardImage } from '@coreui/react'
import "./Menu.css";
import NavBar from "../../components/NavBar/NavBar"
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';



function Menu() {

  let { id } = useParams();
  // const card = cards.find(card => card.id === id);
  const [cards, setCards] = useState([]);
  // const [show, setShow] = useState(true);
  const [loading, setLoading] = useState();
  const card = cards.find(card => card.id === id);
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/products")
      .then((response) => {
        setLoading(true);
        setCards(response.data.data);
        console.log(response.data.data);
        //   console.log(cards)
      })
      .catch((err) => console.log(err));
  }, [id]);
  console.log(loading, "loading...");

  const handleClick = (item) => {
    if (card.indexOf(item) !== -1) return;
    setCards([...card, item]);
  };

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (item, d) => {
    const ind = card.indexOf(item);
    const arr = card;
    arr[ind].attributes.unit += d;

    if (arr[ind].attributes.unit === 0) arr[ind].attributes.unit = 1;
    setCards([...arr]);
  };

  const [price, setPrice] = useState(0);
  const handleRemove = (id) => {
    const arr = cards.filter((item) => item.id !== id);
    setCards(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cards.map((item) => (ans += item.attributes.unit * item.attributes.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  // const searchedProduct = products.filter((item) => {
  //   if (searchTerm.value === "") {
  //     return item;
  //   }
  //   if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
  //     return item;
  //   } else {
  //     return console.log("not found");
  //   }
  // });
  return (
    <>{loading ?
      <Box>
        <NavBar />
        <div className="myMenu">


          <div className="searc">
            <input className='sea'
              type="text"
              placeholder="I'm looking for...."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span>
              <i className="ri-search-line"></i>
            </span>
          </div>


          <div className='menu_items'>
            {cards.map((card) => (
              <div key={card.id} className='see'>
                <CCard style={{ width: '20rem' }}>
                  <Link key={card.id} to={`/view/${card.id}`}> <CCardImage style={{ height: '15rem' }} src={card.attributes.Picture} /> </Link>
                  <CCardBody>
                    <CCardTitle>{card.attributes.name}</CCardTitle>
                    <p>Price - R{card.attributes.price}</p>
                    <button className="productbox-button" onClick={() => handleClick(card)}>Add to cart </button> 
                  </CCardBody>
                </CCard>
              </div>
            ))}
          </div>


        </div>
      </Box>
      : <>
        {/* <Backdrop
        sx={{ color: '#red', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}

      >
      
      </Backdrop> */}
        Loading...
        {/* <CircularProgress color="blue" /> */}
      </>}
    </>
  )
}

export default Menu