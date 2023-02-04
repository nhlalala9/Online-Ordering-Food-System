import React, { useState } from "react";
import axios from "axios";
import   {useNavigate} from "react-router-dom"

function Modal({ setOpenModal }) {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
 
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
    // {modalOpen && <Modal setOpenModal={setModalOpen} />}
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
          <h5>Rate your order</h5>
        {/* <h1 className="heading">Reviews</h1> */}
        </div>
        <div className="modal_body">
          
          <form onSubmit={handleSubmit} >
          <div className="password">
            <label className="label">Name</label>
            <br/>
            <input
              className=""
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
              className=""
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
              className=""
              type="text"
              placeholder="Enter your name"
              name="Comment"
              value={formData.Comment}
              onChange={handleChange}
            />
          </div>
        
        

        
    
      
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
