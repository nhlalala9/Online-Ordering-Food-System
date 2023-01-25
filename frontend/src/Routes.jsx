import React from "react";
// import { getToken } from "./helpers";
import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import { getToken } from "./helpers";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import ForgotPassword from "./components/Forgot/forgotPassword"

import Dashboard from "./pages/Dashboard/Dashboard";
import Crud from "./components/Crud/Crud";

// import MainDash from "./components/MainDash/MainDash"
import OrderList from "./components/OderList/OrderList";
import Admin from "./components/Admin/Admin";
import Ratings from "./components/Ratings/Ratings";
import NaviBar from "./components/NaviBar/NaviBar";
import Cart from "./components/Cart/cart";
// import Checkout from "./pages/Checkout/Checkout";
import Payment from "./pages/Checkout/Payment";
import Checkout from "./pages/Checkout/CheckoutForm";




const AppRoutes = () => {
  return (
    <Routes>
      
      <Route path="/" element={<SignIn />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/forgotPassword" element={<ForgotPassword/>}/>
      <Route path="/crud" element={<Crud/>}/>
     
    
      <Route path="/dash" element={<Admin/>}/>
      <Route path="/orderlist" element={<OrderList/>}/>
      <Route path="/ratings" element={<Ratings/>}/>
      <Route path="/navibar" element={<NaviBar/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/payment" element={<Payment/>}/>
      <Route path="checkout" element={<Checkout/>}/>
    
   
        
      
    </Routes>
  );
};

export default AppRoutes;