import React, { useState } from "react";
import { AiOutlineArrowDown, AiOutlineFileSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';
import { MdFavoriteBorder } from 'react-icons/md';

import { Link } from "react-router-dom";
import "./Navbar.scss"
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className="link" to="/products/1">Breakfast</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2"> Launch</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">Supper</Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">Zama-Zama Resturant</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">Home</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">About</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">Contact</Link>
          </div>
          <div className="icons">
            <AiOutlineFileSearch />
            <BsPersonCircle />
            <MdFavoriteBorder />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <AiOutlineShoppingCart />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;