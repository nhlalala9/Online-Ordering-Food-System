import React from 'react'
import MainDash from '../MainDash/MainDash'
import NaviBar from '../NaviBar/NaviBar'
import Sidebar from '../Sidebar'
import "./Admin.css"

function Admin() {
  return (
   
    <div className="Glass">
    <Sidebar/>
    <div className='move'>
    <NaviBar />
    <MainDash/>
  </div>
  </div>
  
  )
}

export default Admin


