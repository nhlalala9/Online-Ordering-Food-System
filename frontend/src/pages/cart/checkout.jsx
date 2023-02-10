
import React,{ useState , useEffect}  from 'react'
import axios from 'axios';
import { TextField, Grid } from '@mui/material';
import NavBar from '../../components/NavBar/NavBar';
import "./cart.css"
import { useSelector, useDispatch } from "react-redux";

function Checkout(cartItems) {
  // const [cartItems, setCartItems] = useState([], () => {
  //   const localData = localStorage.getItem(cartItems);
  //   return localData ? JSON.parse(localData) : []
  //   });
  // const addInfo = [];
  // const [addInfo, setAddInfo] = useState([])

  const [formData, setFormData] = useState({
    first_Name: "",
    last_Name: "",
    phone_number: "",
    email: "",
    line1: "",
    line2: "",
    zip_code: "",
    city: "",
    province: "",
    country: "",

    Date: "",
    PaymentMethod: "",
  });

  const [items, setItems] = useState();
  const [DishName, setDishName] = useState(cartItems.cartItems.map((item)=>item.attributes.name));
  const [Picture, SetPicture ] = useState(cartItems.cartItems.map((item)=>item.attributes.Picture));
   const [Price,setPrice] =useState(cartItems.cartItems.map((item)=>item.attributes.Price));
   const [Quantity,setQuantity] = useState(cartItems.cartItems.map((item)=>item.Quantity));
   const [TotalPrice,setTotalPrice] = useState(cartItems.cartItems.map((item)=>item.TotalPrice));

  // setItems(cartItems.cartItems.map((item)=>item.attributes));
  const cartData = {
    // cartItems.cartItems.map((item)=>item.attributes)
    data: {
    DishName : DishName,
    Picture: Picture,
    Price: Price,
    Quantity: Quantity,
    TotalPrice: TotalPrice
      
  }
  };
console.log(DishName, "Dish name")
  console.log(cartItems.cartItems[0].attributes.price)
  // console.log(cartItems[0].attributes.price, "price")
  // console.log(cartData, "sfghj")
  // console.log("====================================");
  // console.log(cartItems.cartItems.map((item)=>item.attributes));
  // console.log("====================================");

  const HandleCartItems = (cartData) => {

    // event.preventDefault();
    axios
      .post("http://localhost:1337/api/order-lists",cartData)
      .then((response) => {
        console.log(response);
  // const [addInfo, setAddInfo] = useState([])
    // const [formData, setFormData] = useState({
    //     first_Name: "",
    //     last_Name: "",
    //     phone_number: "",
    //     email:"",
    //     line1:"",
    //     line2:"",
    //     zip_code:"",
    //     city:"",
    //     province:"",
    //     country:"",
    //   });
      })

const cart = useSelector((state) => state);
  console.log(cart ,"products");
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

      // useEffect (() => {
      //   setAddInfo(localStorage.setItem("Form data", JSON.stringify(formData)))
      //  } , [formData]); 
     
       useEffect(()=>{
        console.log(localStorage.getItem('Cart Items'))
      })
      .catch((error) => {
        console.log(error);
      });

    //  const data = localStorage.setItem('address', JSON.stringify(formData));
    //  console.log(data, "what")
  };
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  
    // console.log(formData);
  };

  const HandleAddress = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:1337/api/order-lists", { data: formData })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    //  const data = localStorage.setItem('address', JSON.stringify(formData));
    //  console.log(data, "what")
  };

  const HandleSubmit = (event) => {
    event.preventDefault();
    let hold = [];

    cartItems.cartItems.forEach(element => {
      console.log(element.name)
      hold = [...hold, element.attributes.price];
   
    });
    console.log(hold);
  

    const data ={
      product: hold,
      
    }
    console.log(data)

    // axios
    //   .post("http://localhost:1337/api/order-lists", { data: data })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    //  const data = localStorage.setItem('address', JSON.stringify(formData));
    //  console.log(data, "what")
  };

  // useEffect(()=>
  // {
  //   console.log(cartItems.cartItems)

  // },[])




  // useEffect (() => {
  //   setAddInfo(localStorage.setItem("Form data", JSON.stringify(formData)))
  //  } , [formData]);

  // useEffect(()=>{
  //   console.log(localStorage.getItem('address', "testing"))
  // })

  return (
    <>
      <NavBar />

      <div className="container">
        <div className="checkout_form">
          <form onSubmit={HandleSubmit}  noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  name="first_Name"
                  value={formData.first_Name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  name="last_Name"
                  value={formData.last_Name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Phone number"
                  variant="outlined"
                  fullWidth
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email address"
                  variant="outlined"
                  fullWidth
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Address line 1"
                  variant="outlined"
                  fullWidth
                  name="line1"
                  value={formData.line1}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Address line 2"
                  variant="outlined"
                  fullWidth
                  name="line2"
                  value={formData.line2}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Postal/Zip Code"
                  variant="outlined"
                  fullWidth
                  name="zip_code"
                  value={formData.zip_code}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="City"
                  variant="outlined"
                  fullWidth
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Province/State"
                  variant="outlined"
                  fullWidth
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Country"
                  variant="outlined"
                  fullWidth
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                />
              </Grid>
           
            </Grid>

            <div className="pay_now">
              <button type="submit" className="pay_btn">
                Pay now
              </button>
         
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Checkout;
