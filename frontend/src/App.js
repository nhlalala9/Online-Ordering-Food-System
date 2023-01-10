import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import axios from 'axios';

function App() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // let login = ()=>{
  //   console.log('password');
  //   console.log('identifier');

  //   axios.post(${ config.dev_url}/api/auth/local, {
  //     identifier: identifier,
  //     password: password,
  //   })
  //   .then(response => {

  //     console.log('Well done!');
  //     console.log('User profile', response.data.user);
  //     console.log('User token', response.data.jwt);
  //   })
  //   .catch(error => {

  //     console.log('An error occurred:', error.response);
  //   });

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
      {/* <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form> */}
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input type="text" name="uname" required="" />
            {renderErrorMessage("uname")}
            <label>Username</label>
            
          </div>
          <div className="user-box">
            <input type="password" name="pass" required="" />
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
  );
}

export default App;
