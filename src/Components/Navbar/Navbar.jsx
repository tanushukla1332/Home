
import React from 'react';
import { NavLink, NavbarBrand, NavbarToggle, NavbarCollapse } from
'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import '../Navbar/Navbar.css'

import { IoSearchSharp } from "react-icons/io5";

export default function Header() {

  return (
    <>
      <Navbar style={{ backgroundColor: "#FFFF"}} variant="light" sticky="bottom" expand="lg" className='p-0 navmaindiv'  >
        <Container fluid>
          <NavbarBrand href="/#">
            <Image
              src="https://razobyte.com/wp-content/uploads/2023/11/Razobyte-Softtech-Logo.jpg"
              alt=""
              style={{ width: '250px',height: 'auto',}}
            />
          </NavbarBrand>
          <NavbarToggle aria-controls="responsive-navbar-nav" style={{ marginRight: "10px" }} />
          <NavbarCollapse id="responsive-navbar-nav">
            <Nav className="d-flex gap-2 justify-content-start mr-auto ml-4">
              <NavLink href='/' style={{color: "white" }} active>Home</NavLink>
              <NavLink href='/about' style={{color: "white" }}>About</NavLink>
              <NavDropdown title="Services" id="navbarScrollingDropdown" className='MainDropDownList'  style={{color: "white" }}>
                <div className='d-flex backgroundhover'>
                  <NavDropdown.Item >Digital Marketing</NavDropdown.Item>
                  <NavDropdown title="" menuRight className='dropDownMwnuItems'>
                    <div >
                    <NavDropdown.Item >SEO</NavDropdown.Item>
                    <NavDropdown.Item >Sem</NavDropdown.Item>
                    </div>
                  </NavDropdown>
                  <NavDropdown.Divider />
                </div>
                <NavDropdown.Divider />
                <div className='d-flex'>
                  <NavDropdown.Item >Design</NavDropdown.Item>
                  <NavDropdown title=""  menuRight className='dropDownMwnuItems' >
                    <NavDropdown.Item >SEO</NavDropdown.Item>
                    <NavDropdown.Item >Sem</NavDropdown.Item>
                  </NavDropdown>
                </div>
                <NavDropdown.Divider />
                <div className='d-flex'>
                  <NavDropdown.Item >Development</NavDropdown.Item>
                  <NavDropdown title=""  menuRight className='dropDownMwnuItems' >
                    <NavDropdown.Item >SEO</NavDropdown.Item>
                    <NavDropdown.Item >Sem</NavDropdown.Item>
                  </NavDropdown>
                </div>
                <NavDropdown.Divider />
                <div className='d-flex'>
                <NavDropdown.Item >Design</NavDropdown.Item>
                <NavDropdown title=""  menuRight className='dropDownMwnuItems' >
                  <NavDropdown.Item >SEO</NavDropdown.Item>
                  <NavDropdown.Item >Sem</NavDropdown.Item>
                </NavDropdown>
              </div>

                
              </NavDropdown>
              <NavLink href='/portfolio' style={{color: "white" }}>Potfolio</NavLink>
              <NavLink href='/login' style={{color: "white" }}>Get in Touch</NavLink>
              <NavLink href='/career' style={{color: "white" }}>Career</NavLink>
              <NavLink>
                <IoSearchSharp color='#3B7FBF' size={30} />
              </NavLink>
            </Nav>
            <Nav className="ml-4">
              <NavLink href='/login' style={{color: "white"}}>
                <Button variant="light" className='btnmain'>Book a Session</Button>
              </NavLink>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </>
  );
}
