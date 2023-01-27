import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

function EditForm() {
  const {id} = useParams();
  const [prodId, setProdId] = useState(id);

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

  const editId = (id, e)=> {
    e.preventDefault();
    axios
      .put(`http://localhost:1337/api/products/${id}`, { data: {formData} })
      .then((response) => {
        setProdId(id)
        console.log(response,"res");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <form onSubmit={(e) => editId(prodId, e)}>
        <label>
          Name:
          <input type="text" name="name"    value={formData.name}   onChange={handleChange}/>
        </label>

        <label>
          Description:
          <input type="text" name="description"    value={formData.description}   onChange={handleChange}/>
        </label>

        <label>
          Price:
          <input type="text" name="price" value={formData.price}   onChange={handleChange}/>
        </label>

        <label>
          Picture:
          <input type="text" name="Picture" value={formData.Picture}   onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default EditForm;
