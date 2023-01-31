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
          .post("http://localhost:1337/api/reviews", { data: formData })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      };

  return (
    <div>
          {/* <form onSubmit={handleSubmit}>
          <div className="password">
            <label className="label">Customer Name</label>
            <br/>
            <input
              className="form_input"
              type="text"
              placeholder="Enter your name"
              name="CustomerName"
              value={formData.CustomerName}
              onChange={handleChange}
            />
          </div>
          <div className="password">
            <label className="label">Phone number</label>
            <br/>
            <input
              className="form_input"
              type="text"
              placeholder="Enter your rate: 1-5"
              name="Rate"
              value={formData.Rate}
              onChange={handleChange}
            />
          </div>
          <div className="password">
            <label className="label">Address</label>
            <br/>
            <input
              className="form_input"
              type="text"
              placeholder="Enter your name"
              name="Comment"
              value={formData.Comment}
              onChange={handleChange}
            />
          </div>
          
          <button className="sub_btn" type="submit">
            Submit
          </button>
        </form> */}
            <form noValidate autoComplete="off">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField label="First Name" variant="outlined" fullWidth />
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