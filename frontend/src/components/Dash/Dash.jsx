import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Tables from '../Tables/Tables'
import "./Dash.css"



function Dash() {
  return (
    <div className="App">
        <div className="AppGlass">
        <Sidebar />
        <Tables/>
        </div>
        
    </div>
  )
}

export default Dash