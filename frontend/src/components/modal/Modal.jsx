import React, { useState } from "react";
import "./Modal.css";
import axios from "axios";
import   {useNavigate} from "react-router-dom"

function Modal({ setOpenModal }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    Picture: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    console.log(formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:1337/api/products", {data: formData})
      .then((response) => {
        console.log(response);
        navigate('/crud');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>

        <div className="modal_title">
          <h5>Add new item to your menu</h5>
        </div>
        <div className="modal_body">
          
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
              className="modal_input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <label>Description:</label>
            <input
              className="modal_input"
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />

            <label>Price:</label>
            <input
              className="modal_input"
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />

            <label>Picture:</label>
            <input
              className="modal_input"
              type="text"
              name="Picture"
              value={formData.Picture}
              onChange={handleChange}
            />
            <div className="modal_footer">
              <button  className="bt1"
                onClick={() => {
                  setOpenModal(false);
                }}
                id="cancelBtn"
              >
                Cancel
              </button>
              <button className="bt" type="submit">
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
