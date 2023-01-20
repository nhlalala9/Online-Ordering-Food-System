import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './OrderList.css'
// import Table from 'react-bootstrap/Table';

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../Table/Table.css"
import NaviBar from '../NaviBar/NaviBar';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    axios.get('http://localhost:1337/api/order-lists')
      .then(response => {
        setIsLoading(true);
        setOrders(response.data.data)
        console.log(orders)
      })
      .catch(err => console.log(err));
  }, []);
//   useEffect(() => {
//     setIsLoading(true);
//     fetch('http://localhost:1337/api/order-lists')
//       .then(response => response.json())
//       .then(data => {
//         setOrders(data);
//         setIsLoading(false);
//       })
//       .catch(error => {
//         setError(error);
//         setIsLoading(false);
//       });
//   }, []);


//   const handleViewOrder = id => {
//     setSelectedOrder(orders.find(order => order.id === id));
//   };

//   const handleCancelOrder = id => {
//     fetch(`http://localhost:1337/api/order-lists/${id}`, {
//       method: 'PATCH',
//       body: JSON.stringify({ status: 'cancelled' }),
//       headers: { 'Content-Type': 'application/json' },
//     })
//       .then(response => response.json())
//       .then(data => {
//         setOrders(
//           orders.map(order => (order.id === id ? data : order))
//         );
//       })
//       .catch(error => {
//         setError(error);
//       });
//   };

//   const handleConfirmOrder = id => {
//     fetch(`http://localhost:1337/api/order-lists/${id}`, {
//       method: 'PATCH',
//       body: JSON.stringify({ status: 'confirmed' }),
//       headers: { 'Content-Type': 'application/json' },
//     })
//       .then(response => response.json())
//       .then(data => {
//         setOrders(
//           orders.map(order => (order.id === id ? data : order))
//         );
//       })
//       .catch(error => {
//         setError(error);
//       });
//   };

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }
//   console.log(orders.data[0].attributes);

  // return (
  //   <>
  //   <h1 className='heading'>Order List</h1>
  //     <Table striped bordered hover variant="dark" >
  //       <thead>
  //         <tr>
  //           <th>Customer Name</th>
  //           <th>Address</th>
  //           <th>Picture</th>
  //           <th>Dish Name</th>
  //           <th>Quantity</th>
  //           <th>Price</th>
  //           <th>Payment Method</th>
  //           <th>Acquire</th>
  //           <th>Status</th>
  //           <th>Actions</th>
  //         </tr>
  //       </thead>

  //       <tbody>

  //         {isLoading && orders.map((order) => (
  //           <tr key={order.id}>
  //             <td>{order.attributes.CustomerName}</td>
  //             <td>{order.attributes.DishName}</td>
  //             {/* <td><img src={order.attributes.Picture} /></td>  */}
  //              <td>{order.attributes.Price}</td>
  //             <td>{order.attributes.Date}</td>
  //             <td>{order.attributes.Address}</td>
  //             <td>{order.attributes.Quantity}</td>
  //             <td>{order.attributes.PaymentMethod}</td>
  //             <td>{order.attributes.Acquire}</td>
          
  //           </tr>
  //           ))}
  //           </tbody>
  //           </Table>
  //           </>
  // )



  const makeStyle=(status)=>{
    if(status === 'Approved')
    {
      return {
        background: 'rgb(145 254 159 / 47%)',
        color: 'green',
      }
    }
    else if(status === 'Pending')
    {
      return{
        background: '#ffadad8f',
        color: 'red',
      }
    }
    else{
      return{
        background: '#59bfff',
        color: 'white',
      }
    }
  }

  return (
    
<div className='toka' >
  <NaviBar />
  
    <div className="table">

        <h1 className='my'>Order List</h1>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="left">Customer Name</TableCell>
                <TableCell align="left">Address</TableCell>
                <TableCell align="left">Dish Name</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Image</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Quantity</TableCell>
                <TableCell align="left">Payment Method</TableCell>
                <TableCell align="left">Acquire</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {orders.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.attributes.id}
                  </TableCell>
                  <TableCell align="left">{row.attributes.CustomerName}</TableCell>
                  <TableCell align="left">{row.attributes.Address}</TableCell>
                  <TableCell align="left">{row.attributes.DishName}</TableCell>
                  <TableCell align="left">{row.attributes.Date}</TableCell>
                  <TableCell align="left"> <img src={row.attributes.Picture}alt="" className='image'></img></TableCell>
                  <TableCell align="left">{row.attributes.Price}</TableCell>
                  <TableCell align="left">{row.attributes.Quantity}</TableCell>
                  <TableCell align="left">{row.attributes.PaymentMethod}</TableCell>
                  <TableCell align="left">{row.attributes.Acquire}</TableCell>
                  {/* <TableCell align="left">{row.attributes.Picture}</TableCell> */}
                  {/* <TableCell align="left">{row.attributes.Picture}</TableCell> */}
                  {/* <TableCell align="left">
                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                  </TableCell> */}
                  {/* <TableCell align="left" className="Details">Details</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
         
    </div>
    </div>
  )
}

export default OrderManagement;
