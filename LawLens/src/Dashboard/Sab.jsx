import React from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './AdminSidebar'
import Home from './Home'
import { useState } from 'react'
const Sab = (props) => {

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className='grid-container'>
      {/* <h1>{props.name}</h1> */}
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} name = {props.name}/>
      <Home />
    </div>
  )
}

export default Sab
