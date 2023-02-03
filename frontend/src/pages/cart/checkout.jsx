import React,{ useState , useEffect}  from 'react'
import axios from 'axios';
import { TextField, Grid } from '@mui/material';
import NavBar from '../../components/NavBar/NavBar';
import { Link } from "react-router-dom";
import "./cart.css"

function Checkout(cartItems) {

  // const [cartItems, setCartItems] = useState([], () => {
  //   const localData = localStorage.getItem(cartItems);
  //   return localData ? JSON.parse(localData) : []
  //   });
  // const addInfo = [];
  const [addInfo, setAddInfo] = useState([])
    const [formData, setFormData] = useState({
        first_Name: "",
        last_Name: "",
        phone_number: "",
        email:"",
        line1:"",
        line2:"",
        zip_code:"",
        city:"",
        province:"",
        country:"",
        });

console.log(cartItems, "checkout") 

    const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
        console.log(formData);
      };

    const HandleSubmit = (event) => {
        event.preventDefault();
        axios
           .post("http://localhost:1337/api/order-lists", { data: formData })
           .then((response) => {
             console.log(response);
           })
           .catch((error) => {
             console.log(error);
           });
      };

      useEffect (() => {
        setAddInfo(localStorage.setItem("Form data", JSON.stringify(formData)))
       } , [formData]); 
     
       useEffect(()=>{
        console.log(localStorage.getItem('Cart Items'))
      })

      useEffect(()=>{
        console.log(localStorage.getItem('Form data'))
      })

  return (
   <>
   <NavBar />
   
    <div className='container'>
<div className="checkout_form">
            <form onSubmit={HandleSubmit} noValidate autoComplete="off">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField label="First Name" variant="outlined" fullWidth 
          name='first_Name' value={formData.first_Name} onChange={handleChange}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Last Name" variant="outlined" fullWidth 
          name='last_Name' value={formData.last_Name} onChange={handleChange}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Phone number" variant="outlined" fullWidth 
          name='phone_number' value={formData.phone_number} onChange={handleChange}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Email address" variant="outlined" fullWidth 
          name='email' value={formData.email} onChange={handleChange}/>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Address line 1" variant="outlined" fullWidth 
          name='line1' value={formData.line1} onChange={handleChange}/>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Address line 2" variant="outlined" fullWidth 
           name='line2' value={formData.line2} onChange={handleChange}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Postal/Zip Code" variant="outlined" fullWidth 
           name='zip_code' value={formData.zip_code} onChange={handleChange}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="City" variant="outlined" fullWidth 
           name='city' value={formData.city} onChange={handleChange}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Province/State" variant="outlined" fullWidth 
           name='province' value={formData.province} onChange={handleChange}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Country" variant="outlined" fullWidth 
           name='country' value={formData.country} onChange={handleChange}/>
        </Grid>
      </Grid>

       <div className="pay_now">
         <Link to="/payment">
    <button type="submit" className='pay_btn'>Pay now</button>
    </Link>
    </div>
    </form>
   
    
    </div>
    </div>
    </>
  )
}

export default Checkout