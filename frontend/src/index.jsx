import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Auth from "./components/auth/authProvider";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Reducer from "./hooks/Reducer";

const store = createStore(Reducer);

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
