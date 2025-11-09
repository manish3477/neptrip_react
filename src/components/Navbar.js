import React, { useState } from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';



export default function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
   <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">NepTrip</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className='text-capitalize' >
            <Nav.Link href="/">home</Nav.Link>
            <Nav.Link href="/destinations">destinations</Nav.Link>
            <Nav.Link href="/gallery">gallery</Nav.Link>
            <Nav.Link href="/blogs">blogs</Nav.Link>
            {/* tooltip */}
            <Nav.Link href="">
            <OverlayTrigger
            key='bookmarks'
            placement='bottom'
            overlay={
              <Tooltip>
                Saved Destinations
              </Tooltip>
            }
            >
               <i class="fa-regular fa-bookmark"></i>
              </OverlayTrigger >
              </Nav.Link>

            <Nav.Link href="" onClick={handleShow}>
            <OverlayTrigger
            key='profile'
            placement='bottom'
            overlay={
              <Tooltip>
                Profile
              </Tooltip>
            }
            >
              <i class="fa-regular fa-user"></i>
              </OverlayTrigger >
              </Nav.Link>
            {/* <Nav.Link><i class="fa-solid fa-temperature-half"></i> | 27°C </Nav.Link> */}
            {/* <NavDropdown id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">ENG</NavDropdown.Item>
              <NavDropdown.Item href="#action3">NEP</NavDropdown.Item>
              <NavDropdown.Item href="#action3">GER</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link>
              <i class="fa-solid fa-globe"></i> | ENG 
            </Nav.Link>    
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput2"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
               />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="success" onClick={handleClose}>
            Register
          </Button>
          <Button className='mainbtn' onClick={handleClose}>
            LogIn
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
