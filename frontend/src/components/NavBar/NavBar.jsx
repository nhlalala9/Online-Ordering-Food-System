import React,{useState} from "react";
// import { Link } from "react-scroll";
import { Button } from "antd";
import { useNavigate,Link } from "react-router-dom";
import { removeToken } from "../../helpers";
import logo from "../../images/logo1.png";
import "./NavBar.css";





function NavBar({ setShow, size }) {
    const [nav, setnav] = useState(false);
    const navigate = useNavigate();
    
    const handleLogout = () => {
        removeToken();
        navigate("/signin", { replace: true });
        console.log("token");
      };

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setnav(true)
        } else {
            setnav(false)
        }
    }

    window.addEventListener('scroll', changeBackground)


    return (
       
        <nav className={nav ? "nav active" : "nav"}>
            <Link to='main' className="logo" smooth={true} duration={2000}>
                <img src={logo} alt="" />
            </Link>
            {/* <input type="checkbox" className="menu-btn" id="menu-btn" />
            <label for="menu-btn" className="menu-icon">
                <span className="nav-icon"></span>
            </label> */}
             
            <ul className="menu flex flex-row">
               
                <li><Link to="/dashboard" smooth={true} duration={2000}>Home</Link></li>
                <li><Link to="/menu" smooth={true} duration={2000}>Menu</Link></li>
                <li><Link to="/contact" smooth={true} duration={2000}>Notifications</Link></li>
                <li><Link to="/booking" smooth={true} duration={2000}>booking</Link></li>
                <li><Link to="/cart" className="auth_button_signUp" onClick={() => setShow(true)}>{size === 0? '': size} Cart</Link></li>
                {/* <li><Link to="" smooth={true} duration={2000}onClick={handleLogout}> logout</Link></li> */}
                <li><Link to="/signin" smooth={true} duration={2000}  className="auth_button_signUp"
              type="primary"
              onClick={handleLogout} >logout</Link></li>

            </ul>
        </nav>
    )
}

export default NavBar
