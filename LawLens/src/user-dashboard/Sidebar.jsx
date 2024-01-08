import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Sidebar({openSidebarToggle, OpenSidebar, name}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                {name}'s Dashboard
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <Link to="/userdashboard" style={{ textDecoration: 'none' }}>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsGrid1X2Fill className='icon'/> Dashboard
                    </a>
                </li>
            </Link>
            {/* <Link to="/AddAdmin"> */}
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsPeopleFill className='icon'/>  Manage Admins
                    </a>
                </li>
            {/* </Link> */}
            {/* <Link to="/fir"> */}

            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGrid3X3GapFill className='icon'/> Active FIR
                </a>
            </li>
            {/* </Link> */}

            {/* <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> Customers
                </a>
            </li> */}
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar