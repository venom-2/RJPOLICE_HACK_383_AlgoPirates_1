import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { useState } from 'react'

const AddAdmin = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

const OpenSidebar = () => {
  setOpenSidebarToggle(!openSidebarToggle)
}

  return (
    <div className='grid-container'>

      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>


      <form className='mx-4 my-3'>
      <h1>Manage Admin</h1>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputEmail4">Username</label>
      <input type="text" className="form-control" id="inputEmail4" placeholder="Username"/>
    </div>
    <div className="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
    </div>
  </div>
  <div className="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" className="form-control" id="inputCity"/>
    </div>
    <div className="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div className="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" className="form-control" id="inputZip"/>
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      {/* <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label> */}
    </div>
  </div>
  <button type="submit" className="btn btn-primary">Add</button>
</form>
    </div>
  )
}

export default AddAdmin