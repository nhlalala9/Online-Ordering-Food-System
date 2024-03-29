import axios from "axios";
import React, { useState, useEffect } from "react";
import "./OrderList.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../Table/Table.css";
import NaviBar from "../NaviBar/NaviBar";
import Sidebar from "../Sidebar";

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  // const [selectedOrder, setSelectedOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  const getOrders = async () => {
    axios
      .get("http://localhost:1337/api/order-lists")
      .then((response) => {
        setIsLoading(true);
        setOrders(response.data.data);
        // §§console.log(orders)
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getOrders();
  }, []);


  useEffect(() => {
    if (query) {
      axios
        .get(`http://localhost:1337/api/order-lists?filters[DishName][$containsi]=${query}`)
        .then((response) => {
          setIsLoading(true);
          setOrders(response.data.data);
        })
        .catch((err) => console.log(err));
    } else {
      getOrders();
    }
  }, [query]);


  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  const makeStyle = (status) => {
    if (status === "Approved") {
      return {
        background: "rgb(145 254 159 / 47%)",
        color: "green",
      };
    } else if (status === "Pending") {
      return {
        background: "#ffadad8f",
        color: "red",
      };
    } else {
      return {
        background: "#59bfff",
        color: "white",
      };
    }
  };

  return (
    <div className="Glass">
      <Sidebar />

      

        <div className='move'>
          <NaviBar />
          <div className="search">
            <input
              className="sea_input"
              type="text"
              placeholder="I'm looking for...."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <span>
              <i className="ri-search-line"></i>
            </span>
          </div>
          {/* <div className="table"> */}
          <div className="t">
            <TableContainer
              component={Paper}
              style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
            >
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="left">Customer Name</TableCell>
                    {/* <TableCell align="left">Address</TableCell> */}
                    <TableCell align="left">Dish Name</TableCell>
                    <TableCell align="left">Date</TableCell>
                    <TableCell align="left">Image</TableCell>
                    <TableCell align="left">Price</TableCell>
                    <TableCell align="left">Quantity</TableCell>
                    {/* <TableCell align="left">Payment Method</TableCell> */}
                    {/* <TableCell align="left">Acquire</TableCell> */}
                    {/* <TableCell align="left">Status</TableCell> */}
                    {/* <TableCell align="left">Actions</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody style={{ color: "white" }}>
                  {orders.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="left">
                        {row.attributes.CustomerName}
                      </TableCell>
                      <TableCell align="left">{row.attributes.DishName}</TableCell>
                      <TableCell align="left">{row.attributes.Date}</TableCell>
                      <TableCell align="left"><img src={row.attributes.Picture} alt="" className="order_image"></img></TableCell>
                      <TableCell align="left">{row.attributes.Price}</TableCell>
                      <TableCell align="left">{row.attributes.Quantity}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>


          </div>
        </div>
   
    </div>
  );
};

export default OrderManagement;
