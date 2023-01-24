import React from 'react'
import NavBar from '../../components/NavBar/NavBar';
import Header from '../../components/Header/Header'
import Products from "../../components/Products/Products";
import Booking from '../../components/Booking/Booking'
import "../../style.css";


function Dashboard() {


    return (
        <>
            <NavBar />
            <Header />
            <Products />
            <Booking />
        </>
    )
}

export default Dashboard