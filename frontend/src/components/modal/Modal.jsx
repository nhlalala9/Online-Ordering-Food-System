import React, { useState } from "react";
import "./Modal.css";
import axios from "axios";
import   {useNavigate} from "react-router-dom"
import { UpdatesData } from "../Data/Data";

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
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    Picture: "",
    image:""
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    console.log(formData);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();

  await  axios
      .post("http://localhost:1337/api/products", {data: formData})
      .then(async(response) => {
        console.log(response);
        // navigate('crud');
        const formData = new formData
        formData.append("files",formData.image);
        formData.append("refId",response.data.data.id);
        formData.append("field","image");
        formData.append("ref","api::product.product");
        console.log('====================================');
        console.log(formData);
        console.log('====================================');

        await axios.post("http://localhost:1337/api/upload",  )
        .then( ( response) => { alert("Image Added")
          //  setfileId = response.data[0].id
          console.log(response, "upload response");
          
  
      })
      .catch((error) => {
        console.log(error);
      });
            })
            .catch((error)=>{
            //handle error
        })
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
    </div>
  );
}

export default Modal;
