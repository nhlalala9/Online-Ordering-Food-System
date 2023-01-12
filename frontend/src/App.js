import {
  createBrowserRouter, 
  RouterProvider,
  Outlet
} from 'react-router-dom';
import './App.scss';
import Product from './Pages/Product/Product';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

const Layout = () =>{
  return (
    <div className="app">
      <Navbar />
      <Outlet />
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
