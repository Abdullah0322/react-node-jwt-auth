import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import './header.css'
const Header=()=>{
    return (
        <Navbar bg="dark" variant="dark" className='navbar'>
        <Navbar.Brand href="/"  >My Store</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/signup">Signup</Nav.Link>
          
        </Nav>
       
      </Navbar>
    )
}
export default Header;
