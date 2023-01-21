import React from 'react'
import MainDash from '../MainDash/MainDash'
import NaviBar from '../NaviBar/NaviBar'
import Sidebar from '../Sidebar'
import "./Admin.css"

function Admin() {
  return (
   
      <div className="AppGlass">
        
        <Sidebar/>
        <MainDash/>
    
        {/* <RightSide/> */}
      </div>
  
  )
}

export default Admin
