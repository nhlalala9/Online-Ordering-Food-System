import React ,{useState} from "react";
import "./Modal.css";
import axios from "axios";

function Modal({ setOpenModal }) {

    const [formData, setFormData] = useState({ name: '', description: '' , price: '', picture:''});

    const handleChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:1337/api/products', formData)
          .then(response => {
              console.log(response);
          })
          .catch(error => {
              console.log(error);
          });
      }

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
  <label>
    Name:
    <input className="modal_input" type="text" name="name" value={formData.name} onChange={handleChange} />
  </label>
  <label>
    Description:
    <input className="modal_input" type="text" name="description" value={formData.description} onChange={handleChange} />
  </label>
  <label>
    Price:
    <input className="modal_input" type="text" name="price" value={formData.price} onChange={handleChange} />
  </label>
  <label>
    Picture:
    <input className="modal_input" type="text" name="picture" value={formData.picture} onChange={handleChange} />
  </label>

</form>
        </div>

        <div className="modal_footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button type="submit" onClick={handleSubmit}>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;