import React from "react";
import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import { getToken } from "./helpers";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import ForgotPassword from "./Models/forgotPassword";
import Dashboard from "./pages/Dashboard/Dashboard";
// import MainDash from "./components/MainDash/MainDash"
import OrderList from "./components/OderList/OrderList";
import Admin from "./components/Admin/Admin";

const AppRoutes = () => {
  return (
    <Routes>
      
      <Route path="/" element={<SignIn />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/forgotPassword" element={<ForgotPassword/>}/>
      <Route path="/dash" element={<Admin/>}/>
      <Route path="/orderlist" element={<OrderList/>}/>
      <Route
        // path="/forgotPassword"
        // element={getToken() ? <ForgotPassword /> : <Navigate to="/forgotPassword" />}
      />
      
    </Routes>
  );
};

export default AppRoutes;