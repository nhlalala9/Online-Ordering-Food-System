import React, { useEffect, useState } from "react";
import axios from "axios";
import NaviBar from "../NaviBar/NaviBar";
import "./Crud.css";
import Sidebar from "../Sidebar";
import Modal from "../modal/Modal";


function CRUD() {
  const [modalOpen, setModalOpen] = useState(false);


  const handleDelete = (event) => {
    
    event.preventDefault();
    axios
      .delete("http://localhost:1337/api/products/${id}")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
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
      <div className="cards">
        {cards.map((card) => (
            // key={card.id}
          <div className="crud">
            
            <div className="card">
              <p key={card.id}></p>
              <img src={card.attributes.Picture} className="img" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{card.attributes.name}</h5>
                <p className="card-text">{card.attributes.description}</p>
                <p className="card-text">R {card.attributes.price}.00</p>
                <div className="buttons">
                  <button className="btn_t">Edit</button>
                  <button className="btn " onClick={handleDelete}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
        
      </div>
    </div>
  );

  }

export default CRUD;
