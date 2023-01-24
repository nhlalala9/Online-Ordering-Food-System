import React, {useState,useEffect} from 'react'
import {CCard,CButton,CCardText,CCardTitle,CCardBody,CCardImage} from '@coreui/react'
import "./Menu.css";
import NavBar from "../../components/NavBar/NavBar"
import axios from "axios";

function Menu() {

    const [cards, setCards] = useState([]);

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
                  <i class="ri-search-line"></i>
                </span>
                </div>
     <div className='menu_items'>
     {cards.map((card) => (
         <div className='see'>
              <p key={card.id}></p>
     <CCard style={{ width: '20rem' }}>
   <CCardImage src= {card.attributes.Picture}/>
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