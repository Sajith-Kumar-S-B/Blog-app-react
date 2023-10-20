import React from 'react'
import {Nav,Navbar,Container,Badge} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { MDBIcon } from 'mdb-react-ui-kit';
import './Header.css'


function Header() {
  return (
    <Navbar expand="lg" className="navbar shadow-0 position-fixed top-0 w-100 mb-5">
    <Container>
      <Navbar.Brand><Link to={'/'} style={{textDecoration:'none',color:'black',fontWeight:'bold'}}><MDBIcon className='me-2' fas icon="blog"  />
      Blogit</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"><MDBIcon fas icon="bars"  /></Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
        <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Blog</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header