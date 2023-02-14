import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NaviBar.css"
import { FaBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import addNotification from 'react-push-notification';
import { Notifications } from 'react-push-notification';

const NaviBar = () => {
  // const [searchValue, setSearchValue] = useState('');

  // const handleSearch = e => {
  //   setSearchValue(e.target.value);
  // };
  function buttonOnClick() {
    addNotification({
      title: 'Warning',
      native: true,
    });

  }
  return (

    <div className='navigation'>

      <button className="hamburger">
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className="navigation-menu">
        <ul>

          <li>
            <Notifications />
          
            <button onClick={buttonOnClick}>
              Push Notification
            </button>
            < FaBell className="bell" />

          </li>

        </ul>
      </div>
    </div>



  )
}

export default NaviBar
