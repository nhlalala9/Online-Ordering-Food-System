import React,{useState} from "react";
import { Link } from "react-scroll";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../../helpers";
import logo from "../../images/logo1.png"



function NavBar() {
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
            <input type="checkbox" className="menu-btn" id="menu-btn" />
            <label for="menu-btn" className="menu-icon">
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                <li><Link to="main" smooth={true} duration={2000}>Header</Link></li>
                <li><Link to="products" smooth={true} duration={2000}>Products</Link></li>
                <li><Link to="contact" smooth={true} duration={2000}>Notifications</Link></li>
                <li><Link to="logout" smooth={true} duration={2000}  className="auth_button_signUp"
              type="primary"
              onClick={handleLogout} >logout</Link></li>
                

            </ul>
        </nav>
    )
}

export default NavBar
