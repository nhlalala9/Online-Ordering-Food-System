import React, {useState} from 'react'
import {CCard,CButton,CCardText,CCardTitle,CCardBody,CCardImage} from '@coreui/react'
import "./Menu.css";
import NavBar from "../../components/NavBar/NavBar"

function Menu() {
    const [searchTerm, setSearchTerm] = useState("");

    // const searchedProduct = products.filter((item) => {
    //     if (searchTerm.value === "") {
    //       return item;
    //     }
    //     if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
    //       return item;
    //     } else {
    //       return console.log("not found");
    //     }
    //   });

  return (
    <div className="myMenu">
        <NavBar />
   
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
         <div className='see'>
     <CCard style={{ width: '20rem' }}>
   <CCardImage className="picture" src= "" />
   <CCardBody> 
  <b-avatar> </b-avatar>
    <CCardTitle>Card title</CCardTitle>
    <CCardText>
      {/* Some quick example text to build on the card title and make up the bulk of the card's content. */}
      R40
    </CCardText>
    <CButton ><a href="#">Add to cart </a> </CButton> 
  </CCardBody>
</CCard>
</div>
        </div>
    </div>
   
  )
}

export default Menu