import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaChartArea, FaHome, FaSignOutAlt, FaTasks, FaWallet } from 'react-icons/fa';
import { FaBagShopping } from 'react-icons/fa6';


export default function SideNavBar() {
    const sizeicon=24;
  return (
    <Nav bg="dark" className='d-none d-md-flex bg-dark flex-column align-items-center sidebar h-100 '>
       
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
  );
}
