import React, {useState,useEffect} from 'react'
import {CCard,CButton,CCardText,CCardTitle,CCardBody,CCardImage} from '@coreui/react'
import "./Menu.css";
import NavBar from "../../components/NavBar/NavBar"
import axios from "axios";
import { Link, useParams  } from 'react-router-dom';


function Menu() {

  let { id } = useParams();
  // const card = cards.find(card => card.id === id);
    const [cards, setCards] = useState([]);
    const card = cards.find(card => card.id === id);
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/products")
      .then((response) => {
        // setIsLoading(true);
        setCards(response.data.data);
        console.log(response.data.data);
        //   console.log(cards)
      })
      .catch((err) => console.log(err));
  }, []);

    const [searchTerm, setSearchTerm] = useState("");

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
      <>
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
         <div className='see'>
              <p key={card.id}></p>
     <CCard style={{ width: '20rem' }}>
     <Link key={card.id} to={`/view/${card.id}`}>{card.attributes.name}</Link>
  <Link key={card.id} to={`/view/${card.id}`}> <CCardImage src= {card.attributes.Picture}/> </Link>
   <CCardBody> 
    <CCardTitle>{card.attributes.name}</CCardTitle>
    <CCardText>
      {/* Some quick example text to build on the card title and make up the bulk of the card's content. */}
      {card.attributes.price}
    </CCardText>
    <CButton ><a href="#">Add to cart </a> </CButton> 
  </CCardBody>
</CCard>
</div>
))}
        </div>
    </div>
    </>
  )
}

export default Menu