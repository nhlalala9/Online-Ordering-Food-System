import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { removeToken } from "../../helpers";
import logo from "../../images/logo1.png";
import "./NavBar.css";
import Badge from "@mui/material/Badge";
import { useSelector, useDispatch } from "react-redux";

function NavBar() {
  const cart = useSelector((state) => state);

  const [nav, setnav] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    navigate("/signin", { replace: true });
    console.log("token");
  };

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="main" className="logo">
        <img src={logo} alt="" />
      </Link>

      <ul className="menu flex flex-row">
        <li>
          <Link to="/dashboard">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          
          <Link to="/contact">Notifications</Link>
        </li>
        <li>
          <Link to="/booking">booking</Link>
        </li>
        <li>
          <Link to="/orders">Orders</Link>
        </li>
        <li>
          <Link to="/cart">
            Cart<Badge badgeContent={cart.length} color="primary"></Badge>
          </Link>
        </li>

        <li
          className="auth_button_signUp"
          type="primary"
          onClick={handleLogout}
        >
          <Link>logout</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
