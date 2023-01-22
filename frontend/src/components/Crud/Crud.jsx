import React, { useEffect, useState } from "react";
import axios from "axios";
import NaviBar from "../NaviBar/NaviBar";
import "./Crud.css";
import Sidebar from "../Sidebar";
import Modal from "../modal/Modal";

function CRUD() {
  const [modalOpen, setModalOpen] = useState(false);

  //edit function
  // const Modal = ({ title, onSubmit, onClose }) => {
  //   const [formData, setFormData] = useState({});

  //   const handleChange = (event) => {
  //     const { name, value } = event.target;
  //     setFormData({ ...formData, [name]: value });
  //   };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     onSubmit(formData);
  //     onClose();
  //   };
  // }




  const handleFormSubmit = (formData) => {
    // Do something with the form data, such as adding it to the state
  };

  //get all from strapi
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

  return (
    <div className="Glass">
      <Sidebar />
      <div className="move">
        <NaviBar />
        {modalOpen && <Modal setOpenModal={setModalOpen} />}
        <div className="add">
        <button
        className="btn_add"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Add to list
      </button>

      
      </div>
        {cards.map((cards) => (
          
          <div className="crud">
            
            <div className="card">
              <img src={cards.attributes.image} className="img" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{cards.attributes.name}</h5>
                <p className="card-text">{cards.attributes.description}</p>
                <div className="buttons">
                  <button className="btn_t">Edit</button>
                  <button className="btn ">Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );

  }

export default CRUD;
