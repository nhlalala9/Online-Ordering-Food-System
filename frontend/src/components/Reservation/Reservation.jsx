import React,{useState} from 'react'
import './Reservation.css';
import axios from 'axios';

const Reservation = (props) => {

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        number:"",
      date:"",
      guess:"",
      request:"",
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
        axios
          .post("http://localhost:1337/api/bookings", {data: formData})
          .then((response) => {
            console.log(response); 
          })
          .catch((error) => {
            console.log(error);
          });
              
      };
      console.log(formData);
    return (
        <div className="container">
            <div className="reservation">
                <form onSubmit={handleSubmit} >
                    <label>First Name</label>
                    <input type="text" name="first_name"  value={formData.first_name}
              onChange={handleChange}/>
                    <label >Last Name</label>
                    <input type="text" name="last_name" 
                     value={formData.last_name}
                     onChange={handleChange}/>
                    <label >Email</label>
                    <input type="email" name='email' 
                     value={formData.email}
                     onChange={handleChange}/>
                    <label >Phone Number</label>
                    <input type="tel" name='number'
                     value={formData.number}
                     onChange={handleChange}/>
                    <label >Date</label>
                    <input type='date' name='date'
                     value={formData.date}
                     onChange={handleChange}/>
                    {/* <label for="time">Time</label>
                    <input type='time' /> */}
                    <label >No. of guests</label>
                    <input type="number" name='guess'
                     value={formData.guess}
                     onChange={handleChange}/>
                    <label >Special Requests</label>
                    <textarea name="request"  value={formData.request}
              onChange={handleChange}id="" cols="50" rows="5"></textarea>
                    <button
                        color="none"
                        className="book-table-btn"
                    >
                        Book a Table
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Reservation;
