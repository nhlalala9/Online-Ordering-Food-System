import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../../components/NavBar/NavBar";
import "./Menu.css";
import { useParams } from "react-router-dom";


export default function ViewProduct(productItems, handleProduct) {
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

      <h1 className="heading">Reviews</h1>
      <div className="reviewForm">
        <form onSubmit={handleSubmit}>
          <div className="password">
            <label className="label">Name</label>
            <br/>
            <input
              className="form_input"
              type="text"
              placeholder="Enter your name"
              name="CustomerName"
              value={formData.CustomerName}
              onChange={handleChange}
            />
          </div>
          <div className="password">
            <label className="label">Rating</label>
            <br/>
            <input
              className="form_input"
              type="text"
              placeholder="Enter your rate: 1-5"
              name="Rate"
              value={formData.Rate}
              onChange={handleChange}
            />
          </div>
          <div className="password">
            <label className="label">Comment</label>
            <br/>
            <input
              className="form_input"
              type="text"
              placeholder="Enter your name"
              name="Comment"
              value={formData.Comment}
              onChange={handleChange}
            />
          </div>
          <button className="sub_btn" type="submit">
            Submit
          </button>
        </form>


      </div>
    </>
  );
}
