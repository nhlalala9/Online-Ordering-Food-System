import React from "react";
import Cards from "../Cards/Cards"
import NaviBar from "../NaviBar/NaviBar";
import Table from "../Table/Table"
import "./MainDash.css";


const MainDash = () => {
  return (
    <div className="nava">
      <NaviBar />
    <div className="MainDash">
      <h1 className="my">Dashboard</h1>
      </div>
      <Cards />
      <Table />
    </div>

  );
};

export default MainDash;
