// src/App.js
import React, { useState } from 'react';
import { Navbar, Nav, Button, Offcanvas } from 'react-bootstrap';
import Dashboard from './components/Dashboard';

import './App.css';
import SideNavBar from './components/SideNavBar';
import { FaChartArea, FaHome, FaSignOutAlt, FaTasks, FaWallet } from 'react-icons/fa';
import { FaBagShopping, FaSliders } from 'react-icons/fa6';
import { SlOptions } from 'react-icons/sl';

const App = () => {
  const [show, setShow] = useState(false);
  const sizeicon=25
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg" className="d-md-none">
        <Button variant="light" onClick={handleShow}>
          <SlOptions/>
        </Button >
        <Navbar.Brand href="#home" className="ml-2">Dashboard</Navbar.Brand>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav bg="dark" className='d-md-flex bg-dark flex-column align-items-center sidebar h-100 '>
       
       <div className='text-white'>
         <Nav.Item>
           <Nav.Link href='#'><FaHome className="sidebar-icon" size={sizeicon} /></Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link href='#'><FaChartArea className="sidebar-icon" size={sizeicon} /></Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link href='#'><FaTasks className="sidebar-icon" size={sizeicon} /></Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link href='#'><FaWallet className="sidebar-icon" size={sizeicon} /></Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link href='#'><FaBagShopping className="sidebar-icon" size={sizeicon} /></Nav.Link>
         </Nav.Item>
       </div>
       <div className="mt-auto ">
         <Nav.Item>
           <Nav.Link href="#" className="text-white"><FaSignOutAlt className="sidebar-icon"  size={sizeicon}/></Nav.Link>
         </Nav.Item>
       </div>
     </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      <Dashboard />
    </div>
  );
};

export default App;
