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
import OrderList from "./components/OderList/OrderList";
import Admin from "./components/Admin/Admin";
import Ratings from "./components/Ratings/Ratings";
import NaviBar from "./components/NaviBar/NaviBar";
// import Checkout from "./pages/Checkout/Checkout";
import Payment from "./pages/Checkout/Payment";
import Checkout from "./pages/Checkout/CheckoutForm";
import ProductsCart from "./components/productCart";


import Book from "./pages/book";
import Menu from "./pages/Menu/Menu";
import Header from "./components/Header/Header";
import Booking from "./components/Booking/Booking";
import ViewProduct from "./pages/Menu/ViewProduct";
import EditForm from "./components/Crud/EditForm";
import Cart from "./pages/cart/Cart";
import OrderHistory from "./components/OrderHistory/OrderHistory";
import Delivery from "./components/Delivery/Delivery";
import CheckoutForm from "./pages/cart/checkout";
import NavBar from "./components/NavBar/NavBar";
  
import OrderHiststory from "./pages/OrderHistory/OrderHistory";
import RatingsModal from "./components/Ratings/RatingsModal"
import Reservation from "./components/Reservation/Reservation";


const AppRoutes = ({productItems, cartItems, HandleProduct, handleRemoveProduct,handleCartClearance}) => {
  return (
    <Routes>
      
      <Route path="/" element={<SignIn />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="forgotPassword" element={<ForgotPassword/>}/>
      <Route path="crud" element={<Crud/>}/>
     
  
      <Route path="/payment" element={<Payment/>}/>
      <Route path="checkout" element={<Checkout/>}/>
      <Route path="/productsCart" element={<ProductsCart/>}/>
    
     <Route path="nav" element={<NavBar/>}/>
      {/* <Route path="orderhistory" element={<OrderHistory/>}/> */}
    
        
      
    <Route path="orders" element={<OrderHiststory/>}/>
      <Route path="dash" element={<Admin/>}/>
      <Route path="orderlist" element={<OrderList/>}/>
      <Route path="ratings" element={<Ratings/>}/>
      <Route path="book" element={<Book/>}/>
      <Route path="/menu" element={<Menu productItems={productItems} HandleProduct={HandleProduct}/>}/>
      <Route path="cart" element={<Cart cartItems={cartItems} HandleProduct={HandleProduct} handleRemoveProduct={handleRemoveProduct}
      handleCartClearance={handleCartClearance}/>}/>
      <Route path="booking" element={<Booking/>}/>
      <Route path="header" element={<Header/>}/>
      <Route path="view/:id" element={<ViewProduct productItems={productItems} HandleProduct={HandleProduct}/>}/>
      <Route path="edit/:id" element={<EditForm/>}/>
      <Route path="orderhistory" element={<OrderHistory/>}/>
     <Route path="delivery" element={<Delivery/>}/>
     
      <Route path="checkoutform" element={<CheckoutForm  cartItems={cartItems} />}/>
      <Route path="checkout" element={<Checkout cartItems={cartItems} />}/>
      <Route path="rate" element={<RatingsModal/>}/>
      <Route path="/reservation" element={<Reservation/>}/>
    </Routes>
  );
};

export default AppRoutes;