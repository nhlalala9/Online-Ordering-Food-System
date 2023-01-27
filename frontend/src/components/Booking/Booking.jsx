import React from "react";
import "./Booking.css";
import NavBar from "../NavBar/NavBar"

function Booking() {
    return (
      <>
<NavBar />
      <div id="contact">
          <h1>BOOK YOUR TABLE</h1>
          <form action="https://formsubmit.co/nhlalala60@gmail.com" method="POST" >
              <input type="text" placeholder='Full Name' />
              <input type="email" placeholder='Enter your Email' />
              <textarea placeholder='Write Here......'></textarea>
              <input type="submit" value='BOOK' />
          </form>
  
      </div>
      </>
    )
  }
  
  export default Booking