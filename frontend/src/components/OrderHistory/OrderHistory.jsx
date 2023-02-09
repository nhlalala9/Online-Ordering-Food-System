import axios from "axios";
import React, { useState, useEffect } from "react";
import "./OrderHistory.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import NavBar from "../NavBar/NavBar";


const OrderManagement = () => {
    const [products, setOrders] = useState([]);
    // const [selectedOrder, setSelectedOrder] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState("");

    const getOrders = async () => {
        axios
            .get("http://localhost:1337/api/products")
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

    
    return (

        <div className='move'>
            <NavBar />

            <div className="tt">
                <TableContainer
                    component={Paper}
                    style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
                >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>

                                {/* <TableCell align="left">Address</TableCell> */}
                                <TableCell align="left"> Name</TableCell>
                                <TableCell align="left">Image</TableCell>
                                <TableCell align="left">Date</TableCell>
                                <TableCell align="left">Price</TableCell>
                                <TableCell align="left">Quantity</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody style={{ color: "blue" }}>
                            {products.map((row) => (
                                <TableRow>

                                    <TableCell align="left">{row.attributes.name}</TableCell>
                                    <TableCell align="left"><img src={row.attributes.Picture} alt="" className="products_image"></img></TableCell>
                                    <TableCell align="left">{row.attributes.date}</TableCell>
                                    <TableCell align="left">{row.attributes.price}</TableCell>
                                    <TableCell align="left">{row.attributes.quantity}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>


            </div>
        </div>


    );
};

export default OrderManagement;
