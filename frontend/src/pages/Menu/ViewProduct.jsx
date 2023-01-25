import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../../components/NavBar/NavBar";
import "./Menu.css";
import { useParams } from "react-router-dom";
import {
  CCard,
  CButton,
  CCardText,
  CCardTitle,
  CCardBody,
  CCardImage,
} from "@coreui/react";

export default function ViewProduct() {
  let { id } = useParams();
  const [formData, setFormData] = useState({
    CustomerName: "",
    Rate: "",
    Comment: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    console.log(formData);
  };
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

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:1337/api/reviews", { data: formData })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <NavBar />
      <div>
        <div className="see">
          <p key={cards.id}></p>
          <CCard style={{ width: "20rem" }}>
            <CCardImage src={cards?.attributes?.Picture} />
            <CCardBody>
              <CCardTitle>{cards?.attributes?.name}</CCardTitle>
              <CCardText>
              {cards?.attributes?.description}
                {cards?.attributes?.price}
              </CCardText>
              <CButton>
                <a href="#">Add to cart </a>{" "}
              </CButton>
            </CCardBody>
          </CCard>
        </div>
      </div>

       <div className='reviewForm'>
             <h1>Reviews</h1>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" placeholder='Enter your name' name='CustomerName'value={formData.CustomerName}
              onChange={handleChange}/>
            <label>Rating</label>
            <input type="text" placeholder='Enter your rate: 1-5' name='Rate' value={formData.Rate}
              onChange={handleChange}/>
            <label>Comment</label>
            <input type="text" placeholder='Enter your name' name='Comment' value={formData.Comment}
              onChange={handleChange}/>

            <button type='submit'>Submit</button>
        </form>
    </div> 
    </>
  );
}
