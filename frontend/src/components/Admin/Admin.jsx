import React from 'react'
import MainDash from '../MainDash/MainDash'
import RightSide from '../RigtSide/RightSide'
import Sidebar from '../Sidebar'

function Admin() {
  return (
    <div className="ora">
      <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
        <RightSide/>
      </div>
    </div>
  )
}

export default Admin
