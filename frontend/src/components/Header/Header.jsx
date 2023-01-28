import React from "react";
import "./Header.css";



function Header() {
  return (
    <>
    <div className="h-24 flex items-center justify-between pr-8">
      {/* <div className="relative mini-icon">
        <form action="#">
          <input
            type="email"
            placeholder="Search"
            className="w-72 input-search text-4xl font-black"
          />
        </form>
        
      </div> */}
     
    </div>
    <div id="main">
      <div className="header-heading">
            <h3>It's Great Time For A Good Taste Of Variety Of Foods</h3>
            <h1><span>HAPPY MEALS</span> FOR <br/>WEEK</h1>
            <p className='details'>Enjoy your meals with us</p>
            <div className="header-btns">
                <a href="/menu" className="header-btn">See all foods</a>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default Header
