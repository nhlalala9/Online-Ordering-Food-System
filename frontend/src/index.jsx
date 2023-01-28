import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Auth from "./components/auth/authProvider";
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import store from './pages/cart/store'
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Auth>
      <Router>
        <App />
      </Router>
    </Auth>
    </Provider>
  </React.StrictMode>
);


