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
import Book from "./pages/book";
import Menu from "./pages/Menu/Menu";
import Header from "./components/Header/Header";
import Booking from "./components/Booking/Booking";
import ViewProduct from "./pages/Menu/ViewProduct";
import EditForm from "./components/Crud/EditForm";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/cart/checkout";

const AppRoutes = ({productItems, cartItems, handleProduct, handleRemoveProduct,handleCartClearance}) => {
  return (
    <Routes>
      
      <Route path="/" element={<SignIn />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="forgotPassword" element={<ForgotPassword/>}/>
      <Route path="crud" element={<Crud/>}/>
     
    
      <Route path="dash" element={<Admin/>}/>
      <Route path="orderlist" element={<OrderList/>}/>
      <Route path="ratings" element={<Ratings/>}/>
      <Route path="book" element={<Book/>}/>
      <Route path="/menu" element={<Menu productItems={productItems} handleProduct={handleProduct}/>}/>
      <Route path="cart" element={<Cart cartItems={cartItems} handleProduct={handleProduct} handleRemoveProduct={handleRemoveProduct}
      handleCartClearance={handleCartClearance}/>}/>
      <Route path="booking" element={<Booking/>}/>
      <Route path="header" element={<Header/>}/>
      <Route path="view/:id" element={<ViewProduct productItems={productItems} handleProduct={handleProduct}/>}/>
      <Route path="edit/:id" element={<EditForm/>}/>
      <Route path="checkout" element={<Checkout/>}/>
    </Routes>
  );
};

export default AppRoutes;