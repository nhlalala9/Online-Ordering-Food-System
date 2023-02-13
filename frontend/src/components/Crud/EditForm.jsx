import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router";
import "./Crud.css";
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom"
import { fetchData } from "../../utils/utils";

function EditForm() {
  const id  = useLocation();
  const [prodId, setProdId] = useState(id.state.params);
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [formData, setFormData] = useState({name:"", description:"",price:"", Price:""});
  const [loading, setLoading] = useState(true);
  const handleClick = () => {
    // 👇️ navigate programmatically
    navigate('/crud');
  };

  console.log(prodId,"wesrdtfyguhjk");

  // code for displaying data
  useEffect(() => {
    fetchData(`api/products/${id.state.params}`)
      .then((res) => {
        console.log(res.attributes);
        setData(res.attributes)
        setLoading(false);
      })
      .catch(error => console.log(error))
  }, [])

  if (loading)
    console.log("loading");
  else
    console.log(formData)


  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData(preventData => ({ ...preventData, [name]:value}));
  };

  const editId = (prodId, e) => {

    e.preventDefault();
    axios
      .put(`http://localhost:1337/api/products/${prodId}`, { data: formData })
      .then((response) => {
        setProdId(prodId);
        navigate('/crud');
        console.log(response,"im posted");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
    <div className="edit_form">
      
      <form onSubmit={(e) => editId(prodId, e)}>
        <Form.Group className="mb-3" >
          <Form.Label>Name</Form.Label>
          <Form.Control name="name"
            value={formData.name || data.name}
            onChange={handleChange} type="text" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Description</Form.Label>
          <Form.Control name="description"
            value={formData.description || data.description}
            onChange={handleChange} type="text" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control name="price"
            value={formData.price || data.price}
            onChange={handleChange} type="text" />
        </Form.Group>
        <Form.Group className="mb-3" >
          
          <Form.Label>Picture</Form.Label>
          <img src={data.Picture } />
          <Form.Control className="try" name="Picture"
            value={formData.pictures || data.pictures }
            onChange={handleChange} type=""  />
        </Form.Group>

        <div className="btns">
          <button onClick={handleClick} className="cancel" type="text">Cancel</button>
          <button onClick={(e) =>editId(prodId, e)} className="save" type="submit">Submit</button>

        </div>
      </form>
    </div>
    </div>
  );
}

export default EditForm;
