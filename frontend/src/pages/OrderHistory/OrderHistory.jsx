import React from 'react'
import "./OrderHistory.css"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const OrderHiststory = () => {
  return (
    <div>
         <div className="searc">
              <input
                className="sea"
                type="text"
                placeholder="I'm looking for...."
                value=""
              />
              <span>
                <i className="ri-search-line"></i>
              </span>
            </div>
     <div className='order_hist'>
      <TableContainer 
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 600 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Tracking no</TableCell>
                <TableCell align="left">Product</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Address</TableCell>
                <TableCell align="left">Total</TableCell>
                <TableCell align="left">Status</TableCell>
               
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
            
                <TableRow
                  
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    
                  </TableCell>
                  <TableCell align="left">
                    
                  </TableCell>
                  <TableCell align="left">"</TableCell>
                  <TableCell align="left">j</TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
              
            </TableBody>
          </Table>
        </TableContainer>
        </div>
    </div>
  )
}

export default OrderHiststory
