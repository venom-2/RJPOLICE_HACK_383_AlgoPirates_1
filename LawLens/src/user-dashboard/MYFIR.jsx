import React from "react";
import Header from "./Header";
import Sidebar from "./UserSidebar";
import { useState } from "react";

const Myfir = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <div className="flex-column" style={{width: "100vw"}}>
        <div className="flex-row mx-3" style={{width: "75.6vw"}}>
          <button
            className="generate-btn btn-primary mx-3"
            style={{
              width: "32vw",
              height: "5vh",
              marginTop: "5vh",
              marginBottom: "5vh",
              marginLeft: "5vw",
            }}
          >
            {" "}
            Generate Ticket{" "}
          </button>
          <button
            className="generate-btn btn-primary mx-3"
            style={{
              width: "32vw",
              height: "5vh",
              marginTop: "5vh",
              marginBottom: "5vh",
            }}
          >
            {" "}
            Feedback{" "}
          </button>
        </div>
        <table
          className="table table-bordered mx-3 text-black"
          style={{ width: "75.6vw" }}
        >
          <thead>
            <h1 className="text-center">Active FIR List</h1>
          </thead>
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Office</th>
              <th>Age</th>
              <th>Start date</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
            </tr>
            <tr>
              <td>Garrett Winters</td>
              <td>Accountant</td>
              <td>Tokyo</td>
              <td>63</td>
              <td>2011-07-25</td>
              <td>$170,750</td>
            </tr>
            <tr>
              <td>Ashton Cox</td>
              <td>Junior Technical Author</td>
              <td>San Francisco</td>
              <td>66</td>
              <td>2009-01-12</td>
              <td>$86,000</td>
            </tr>
            <tr>
              <td>Cedric Kelly</td>
              <td>Senior Javascript Developer</td>
              <td>Edinburgh</td>
              <td>22</td>
              <td>2012-03-29</td>
              <td>$433,060</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Office</th>
              <th>Age</th>
              <th>Start date</th>
              <th>Salary</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Myfir;
