import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



export default function NavBar() {
  return (
    <>
   <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className=' fs-3 fw-bolder'>NepTrip</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className='text-capitalize' >
            <Nav.Link href="/">home</Nav.Link>
            <Nav.Link href="/destinations">destinations</Nav.Link>
            <Nav.Link href="/gallery">gallery</Nav.Link>
            <Nav.Link href="/blogs">blogs</Nav.Link>
            <Nav.Link href=""><i class="fa-regular fa-bookmark"></i></Nav.Link>
            <Nav.Link href=""><i class="fa-regular fa-user"></i></Nav.Link>
            <Nav.Link><i class="fa-solid fa-temperature-half"></i> | 27°C </Nav.Link>
            <NavDropdown id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">ENG</NavDropdown.Item>
              <NavDropdown.Item href="#action3">NEP</NavDropdown.Item>
              <NavDropdown.Item href="#action3">GER</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link><i class="fa-solid fa-globe"></i> | ENG </Nav.Link>    
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
