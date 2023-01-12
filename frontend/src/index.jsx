import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Auth from "./components/auth/authProvider";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth>
      <Router>
        <App />
      </Router>
    </Auth>
  </React.StrictMode>
);


