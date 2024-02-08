
import React from 'react';
import { NavLink, NavbarBrand, NavbarToggle, NavbarCollapse } from
'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import '../Navbar/Navbar.css';
import { useNavigate } from 'react-router';
import { IoSearchSharp } from "react-icons/io5";

export default function Header() {
  const navigate=useNavigate()

  return (
    <>
      <Navbar style={{ backgroundColor: "#FFFF"}} variant="light" sticky="bottom" expand="lg" className='px-0 navmaindiv'>
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
              <NavLink href='/'  className='navlinkmenutitle' active>Home</NavLink>
              <NavLink href='/about' className='navlinkmenutitle'>About</NavLink>
              <NavDropdown id="navbarScrollingDropdown" title="Services" className='MainDropDownList  navlinkmenutitle' onClick={()=>navigate('/services')} >
                <div className='d-flex backgroundhover'>
                <NavDropdown title="Digital Marketing" id='navbarScrrolllingDigitalMarketing' className="dropDownMenuItems">

                    <div >
                    <NavDropdown.Item href='/seo'>SEO</NavDropdown.Item>
                    <NavDropdown.Item >Sem</NavDropdown.Item>
                    </div>
                  </NavDropdown>
                  <NavDropdown.Divider />
                </div>
                <NavDropdown.Divider />
                <div className='d-flex'>
                  <NavDropdown title="Design" id="navbarDesginScroll"className='dropDownMwnuItems' >
                 
                    <NavDropdown.Item href='/socialMedia' >SEO</NavDropdown.Item>
                    <NavDropdown.Item >Sem</NavDropdown.Item>
                  </NavDropdown>
                </div>
                <NavDropdown.Divider />
                <div className='d-flex'>
                <NavDropdown title="Development" id="navbarDevelopmentScroll"className='dropDownMwnuItems' >
                <NavDropdown.Item href='/development' className='navlinkmenutitle'>Dvelopment</NavDropdown.Item>
                
                
                    
                  </NavDropdown>
                </div>
                <NavDropdown.Divider />
                <div className='d-flex'>
                <NavDropdown title="Design" id="navbarDesginScroll"className='dropDownMwnuItems' >
                <NavDropdown.Item  href='/socialmediaopt'>SEO</NavDropdown.Item>

          
                </NavDropdown>
             
              </div>

                
              </NavDropdown>
              <NavLink href='/portfolio'  className='navlinkmenutitle'>Potfolio</NavLink>
              <NavLink href='/contact' className='navlinkmenutitle'>Get in Touch</NavLink>
              <NavLink href='/career' className='navlinkmenutitle'>Career</NavLink>
            
              <NavLink><IoSearchSharp color='#3B7FBF' size={30} /></NavLink>
              <Button variant="light" className='btnmain'>Book a Session</Button>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </>
  );
}
