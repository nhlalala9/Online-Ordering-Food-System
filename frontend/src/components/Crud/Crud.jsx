import React, { useEffect, useState } from "react";
import axios from "axios";
import NaviBar from "../NaviBar/NaviBar";
import "./Crud.css";
import Sidebar from "../Sidebar";
import Modal from "../modal/Modal";
// import EditForm from "./EditForm";
import { Link, useParams } from "react-router-dom";

function CRUD() {
  const [modalOpen, setModalOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [cards, setCards] = useState([]);
  const [id, setId] = useState("");

  function getId(id) {
    setId(id);
    console.log(id);
    axios
      .delete(`http://localhost:1337/api/products/${id}`)
      .then((response) => {
        console.log(response);
        console.log("ora");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //get all from strapi
  const getMenu = async () => {
    axios
      .get("http://localhost:1337/api/products")
      .then((response) => {
        setCards(response.data.data);
        console.log(response.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMenu();
  }, []);

  useEffect(() => {
    if (query) {
      axios
        .get(
          `http://localhost:1337/api/products?filters[name][$containsi]=${query}`
        )
        .then((response) => {
          setCards(response.data.data);
          console.log(response.data.data);
        })
        .catch((err) => console.log(err));
    } else {
      getMenu();
    }
  }, [query]);

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
          <div className="search">
            <input
              className="search_input"
              type="text"
              placeholder="I'm looking for...."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <span>
              <i className="ri-search-line"></i>
            </span>
          </div>
        </div>
        <div className="cards">
          {cards.map((card) => (
            <div class="card" key={card.id}>
            <img class="card-img-top" src={card.attributes.Picture} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">{card.attributes.name}</h5>
              <p className="price">R {card.attributes.price}.00</p>
              <div class="card-text">
              <p >{card.attributes.description}</p>
              </div>
              <div className="buttons">
                     <Link key={card.id} to={`/edit/${card.id}`}>
                       <button className="btn_t">Edit</button>
                     </Link>
                     <button className="btnRed " onClick={() => getId(card.id)}>
                       Delete
                     </button>
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
