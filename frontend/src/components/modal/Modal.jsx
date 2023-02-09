import React, { useState } from "react";
import "./Modal.css";
import axios from "axios";
import   {useNavigate} from "react-router-dom"
import { UpdatesData } from "../Data/Data";
import Loader from "../Loader/Loader";

function Modal({ setOpenModal }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileId, setfileId] = useState(null);



//   let formData = new FormData();
//     formData.append("name", name);
//     formData.append("description", description);
//     formData.append("price", price);
//     formData.append("Picture", Picture);
//     // formData.append("team", phone);
//     formData.append("files", selectedFile);
//     // formData.append("message", message);

// axios.post("http://localhost:1337/upload",file)
//       .then((response) => {
//         const fileId = response.data[0].id

//         axios({
//             method: "post",
//             url: "http://localhost:1337/api/products",
//             data:{
//                     name: name,
//                     description: description,
//                     price: price,
//                     Picture: Picture,
//                     // team: team,
//                     Image: fileId,
//                     // message: message,
//                 }
//             })
//         .then(({ data }) => {
//             setResponse(data);
//         })
//         .catch((error) => {
//         //handle error
//         });

//         })
//         .catch((error)=>{
//         //handle error
//     })

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
  
  });

  const [picture, setPicture] = useState()

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    console.log(formData);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    setLoading(true)
    // formData.append(“files”, image);
    // formData.append(“ref”, “api::event.event”);
    // formData.append(“refId”, eventId);
    // formData.append(“field”, “image”);
    axios
      .post("http://localhost:1337/api/products/populate=*", {data: formData})
      .then((response) => {
        const formData = new FormData();
        formData.append("files", picture);
        formData.append("ref","api::product.product");
        formData.append("field","pictures")
        formData.append("refId",response.data.data.id);
        axios.post("http://localhost:1337/api/upload", formData).then((res) => {
        ("uploaded");
        setLoading(false);
        window.open('/crud','_self');
        })
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
          
          <form onSubmit={handleSubmit} encType="multipart/form-data">
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
              type="file"
              name="Picture"
              value={formData.Picture}
              onChange={(e) => setPicture(e.target.files[0])}
            />
               <label>image:</label>
            <input
              className="modal_input"
              type="file"
              name="image"
              
              value={selectedFile}
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
      {loading && <Loader />}
    </div>
  );
}

export default Modal;
