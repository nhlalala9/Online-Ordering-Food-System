import React, { useEffect, useState } from "react";
import axios from "axios";
import NaviBar from "../NaviBar/NaviBar";
import "./Crud.css";
import Sidebar from "../Sidebar";
import Modal from "../modal/Modal";
// import EditForm from "./EditForm";
import { Link, useParams, useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

function CRUD() {
  const [modalOpen, setModalOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [cards, setCards] = useState([]);
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
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
      .get("http://localhost:1337/api/products?populate=*")
      .then((response) => {
        setLoading(false);
        setCards(response.data.data);
        console.log("Map test",response.data.data.map((dat)=>dat.attributes.pictures.data.attributes.url));
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

  function edit(params) {
    navigate(`/edit/${params}`, { state: { params } })
  }

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
        <div className="row mb-5">
          {loading ? <Loader /> : cards.map((card) => (
            <div className="col-md-3" key={card.id}>
              <div className="card" >
                <img className="card-img-top" src={card.attributes.pictures.data.attributes.url} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">{card.attributes.name}</h5>
                  <p className="price">R {card.attributes.price}.00</p>
                  <div className="card-text">
                    <p >{card.attributes.description}</p>
                  </div>
                  <div className="buttons">

                    <button className="btn_t" onClick={() => edit(card.id)}>Edit</button>

                    <button className="btnRed " onClick={() => getId(card.id)}>
                      Delete
                    </button>
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
