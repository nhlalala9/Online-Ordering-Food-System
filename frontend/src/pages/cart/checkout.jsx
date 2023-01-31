import React,{ useState }  from 'react'
import axios from 'axios';
import { TextField, Grid } from '@mui/material';

function Checkout() {

    const [formData, setFormData] = useState({
        CustomerName: "",
        DishName: "",
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
          .post("http://localhost:1337/api/oder-lists", { data: formData })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      };

  return (
    <div>
            <form onSubmit={handleSubmit} noValidate autoComplete="off">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField label="First Name" variant="outlined" fullWidth 
          name='customerName' value={formData.customerName} onChange={handleChange}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Last Name" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Address line 1" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Address line 2" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Postal/Zip Code" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="City" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Province/State" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Country" variant="outlined" fullWidth />
        </Grid>
      </Grid>
    </form>
    </div>
  )
}

export default Checkout