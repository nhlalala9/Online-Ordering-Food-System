import React from "react";
import "./Header.css";



function Header() {
  return (
    <>
    <div className="h-24 flex items-center justify-between pr-8">
      <div className="relative mini-icon">
        <form action="#">
          <input
            type="email"
            placeholder="Search"
            className="w-72 input-search text-4xl  font-black"
          />
        </form>
        
      </div>
     
    </div>
    <div id="main">
      <div className="header-heading">
            <h3>It's Great Time For A Good Taste Of Burger</h3>
            <h1><span>BURGER</span> FOR <br/>WEEK</h1>
            <p className='details'>Enjoy your meals with us</p>
            <div className="header-btns">
                <a href="#" className="header-btn">Order Now</a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header
