import React from 'react'
import { Form, FormControl, InputGroup, Nav, Navbar } from 'react-bootstrap'
import { FaBell, FaCog, FaMailBulk, FaMailchimp, FaSearch, FaUserCircle } from 'react-icons/fa'
import { CgUserlane } from "react-icons/cg";

export default function TopNavBar() {
  const size=32
  return (
   <Navbar bg='dark' variant='dark' className='pb-4 top-navbar '>
    <div className='container-fluid '>
    <div className='d-flex align-items-center '>
    <Navbar.Brand href="#home" className='mx-5'>
    <CgUserlane/>
    </Navbar.Brand>
    <Form   className='mx-3 d-flex align-items-center search-container'>
        <InputGroup.Text id='search-icon' ><FaSearch/></InputGroup.Text>

        
        <FormControl type="text" placeholder="Search" className="search-input" />
    </Form>
    </div>
    <Nav className="mx-3">
        <Nav.Link href="#" ><FaMailBulk  size={size}/></Nav.Link>
        <Nav.Link href="#"><FaCog  size={size}/></Nav.Link>
        <Nav.Link href="#"><FaBell  size={size}/></Nav.Link>
        <Nav.Link href="#"><FaUserCircle  size={size}/></Nav.Link>
      </Nav>
      </div>
   </Navbar>
  )
}
