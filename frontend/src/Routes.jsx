import React from "react";
import { Routes, Route} from "react-router-dom";
// import { getToken } from "./helpers";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import ForgotPassword from "./components/Forgot/forgotPassword"

import Dashboard from "./pages/Dashboard/Dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/forgotPassword" element={<ForgotPassword/>}/>
      
      <Route
        
      />
    </Routes>
  );
};

export default AppRoutes;