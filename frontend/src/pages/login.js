
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./login.css"
import axios from 'axios';

const login = () => {
    const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();



  const database = [
    {
      username: "admin1",
      password: "pass1"
    },
    {
      username: "admin2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",

    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // code for login
  const renderForm = (
    <div className="form">
    
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input type="text" name="uname" required=""
             onChange={(e) => setUsername(e.target.value)} />
            {renderErrorMessage("uname")}
            <label>Username</label>
            
          </div>
          <div className="user-box">
            <input type="password" name="pass" required="" 
             onChange={(e) => setPassword(e.target.value)}/>
            <label>Password</label>
            
            {renderErrorMessage("pass")}
          </div>
          <div className="button-container">
          <input type="submit" />
        </div>
        </form>
      </div>
    </div>
  );
  return (
    <div className="App">
      <div className="login-form">
        {/* <div className="title">Login</div> */}
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  )
}

export default login
