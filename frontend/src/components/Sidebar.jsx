import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../images/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "./Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../helpers";


const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    removeToken();
    navigate("/signin", { replace: true });
    console.log("token");
  };
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  console.log(window.innerWidth)
  return (
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>

      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <NavLink to={item.path} >
            <item.icon />
              <span>{item.heading}</span>
            
            </NavLink>
            </div>
          );
        })}
        {/* signoutIcon */}
        <div className="menuItem">
          <UilSignOutAlt />
          <span  onClick={handleLogout}>Logout</span>
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default Sidebar;
