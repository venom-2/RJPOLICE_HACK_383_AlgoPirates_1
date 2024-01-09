import React from 'react'
import './User.css'
import Header from './Header'
import Sidebar from './UserSidebar'
import Home from './Home'
import { useState } from 'react'
const Sab = (props) => {

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} name={props.name}/>
      <Home />
    </div>
  )
}

export default Sab
