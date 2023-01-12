import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getToken } from "./helpers";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import ForgotPassword from "./Models/forgotPassword";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgotPassword" element={<ForgotPassword/>}/>
      
      <Route
        // path="/forgotPassword"
        // element={getToken() ? <ForgotPassword /> : <Navigate to="/forgotPassword" />}
      />
    </Routes>
  );
};

export default AppRoutes;