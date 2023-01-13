import {
  createBrowserRouter, 
  RouterProvider,
  Outlet
} from 'react-router-dom';
import './App.scss';
import Product from './Pages/Product/Product';
import Home from './Pages/Home/home';
import Products from './Pages/Products/Products';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import React from "react";
import { Col, Row } from "antd";
import AppHeader from "./Components/AppHeader/Appheader"
import AppRoutes from "./Routes";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import ForgotPassword from "./Models/forgotPassword";

//const { Header, Content } = Layout;
const Layout  = () =>{
  return (
    <div className="app">
      <Navbar />
      <Outlet />  
      <Row gutter={[0, 32]}>
       <Col span={24}>
         
           <AppHeader />
        
       </Col>
       <Col span={22} offset={1}>
        
           <AppRoutes />
        
       </Col>
     </Row>
      <Footer />
   
    </div>
  )
}

const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element: <Home />
        },
        {
          path:"/Products/:id",
          element: <Products />
        },
        {
          path:"/Product/:id",
          element: <Product />
        },
        {
          path:"/signin",
          element: <SignIn />
        },
        {
          path:"/signup",
          element: <SignUp />
        },
        {
          path:"/forgotPassword",
          element: <ForgotPassword />
        }
      ]
    }
])

function App() {
  return (
    <div>
        <RouterProvider router= {router}/>
   </div>
  );
}

export default App;
