
import React,{ useState , useEffect}  from 'react'
import axios from 'axios';
import { TextField, Grid } from '@mui/material';
import NavBar from '../../components/NavBar/NavBar';
import "./cart.css"
import { useSelector, useDispatch } from "react-redux";
import { API } from '../../constant';
import {ToastContainer} from "react-toastify";
import {Error, Success } from "../../toaster";

function Checkout(props) {
  const cart = useSelector((state) => state);

  const addition = (acc, currentvalue) => {
    return acc + currentvalue.attributes.price * currentvalue.quantity;
  };

  const qty = (acc, currentvalue) => {
    return acc + currentvalue.quantity;
  };

  const total = cart.reduce(addition, 0);
  const quantity = cart.reduce(qty, 0);

  console.log(quantity);
  console.log(total);

  const [first_Name, setCustomer] = useState("");
  const [phone_number, setPhone] = useState("");
  const [Street_address, setAddress] = useState("");
  const [Suburb, setSuburb] = useState("");
  const [City, setCity] = useState("");
  const [Zipcode, setZip]= useState("");

 

function pay(){
  let order={
    data:{
      Name: first_Name,
      Phone: phone_number,
      Street_address: Street_address,
      suburb: Suburb,
      city: City,
      zipcode: Zipcode,
      Qty: quantity,
      Total_Price:total,
    }
  }

  console.log(order);

  //post to orders
  axios.post(`${API}/orders`, order).then((response) => {
    console.log(response.data.data.id);

    cart.map((results) => {
      let order_list={
        data:{
          Picture:results.attributes.pictures.data.attributes.url,
          DishName: results.attributes.name,
          Price:results.attributes.price,
          order_id: response.data.data.id
        }
      }
      //post to orderlist
      axios.post(`${API}/order-lists`, order_list)
    })
    console.log(response);
    Success("order was successful")
  }).catch((error) => {
      console.log(error)
     Error('Unable to order items')
  })
  
}


  return (
    <>
      <NavBar />
      <ToastContainer />

      <div className="container">
        <div className="checkout_form">
         
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Customer Name"
                  variant="outlined"
                  fullWidth
                  name="Customer Name"
                  value={first_Name}
                  onChange={(e) => setCustomer(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Phone number"
                  variant="outlined"
                  fullWidth
                  name="phone_number"
                  type="number"
                  onKeyDown={(e) => { 
                    if(e.shiftKey === true)e.preventDefault(); 
                    if(e.key === 'Minus' )e.preventDefault();
                    if(e.key === 'e' )e.preventDefault();
                  }}
                  value={phone_number}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Address line 1"
                  variant="outlined"
                  fullWidth
                  name="street_address"
                  value={Street_address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Surbub"
                  variant="outlined"
                  fullWidth
                  name="Surbub"
                  value={Suburb}
                  onChange={(e) => setSuburb(e.target.value)}
                />
              </Grid>
              <Grid item xs={8} sm={8}>
                <TextField
                  label="City"
                  variant="outlined"
                  fullWidth
                  name="City"
                  value={City}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Grid>

              <Grid item xs={4} sm={4}>
                <TextField
                  label="Zip Code"
                  variant="outlined"
                  fullWidth
                  name="zip"
                  type="number"
                  onKeyDown={(e) => { 
                    if(e.shiftKey === true)e.preventDefault(); 
                    if(e.key === 'Minus' )e.preventDefault();
                    if(e.key === 'e' )e.preventDefault();
                  }}
                  value={Zipcode}
                  onChange={(e) => setZip(e.target.value)}
                />
              </Grid>
          
            </Grid>

            <div className="pay_now">
              <button className="pay_btn" onClick={pay}>
                Pay now
              </button>
         
            </div>
     
        </div>
      </div>
    </>
  );
}

export default Checkout;
